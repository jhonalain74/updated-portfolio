import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

/* Pose of a card by its distance from the centre: 0 = active, 1-2 = angled to the side,
   3 = tucked away behind the centre. In-between distances are interpolated, which is
   what lets a drag move the cards continuously. */
const SLOTS = {
  x: [0, 66, 124, 0], // % of card width
  z: [0, -170, -340, -520], // px
  rotateY: [0, 34, 44, 50], // deg
  tilt: [0, 4, 8, 0], // deg
  opacity: [1, 1, 0.85, 0],
};

/* Pixels of drag that move the carousel by one card */
const DRAG_STEP = 260;

const sample = (values: number[], t: number) => {
  const i = Math.min(Math.floor(t), values.length - 2);
  return values[i] + (values[i + 1] - values[i]) * (t - i);
};

const poseFor = (pos: number) => {
  const t = Math.min(Math.abs(pos), 3);
  const side = Math.sign(pos);
  return {
    transform: `translateX(${side * sample(SLOTS.x, t)}%) translateZ(${sample(SLOTS.z, t)}px) rotateY(${
      side * sample(SLOTS.rotateY, t)
    }deg) rotateZ(${side * sample(SLOTS.tilt, t)}deg)`,
    opacity: sample(SLOTS.opacity, t),
    zIndex: 100 - Math.round(t * 10),
  };
};

const mod = (n: number, m: number) => ((n % m) + m) % m;

/* Signed distance from the active card, wrapping so there are cards on both sides */
const circularOffset = (index: number, active: number, count: number) => {
  const offset = mod(index - active, count);
  return offset > count / 2 ? offset - count : offset;
};

interface ProjectCarouselProps<T extends CarouselItem> {
  items: T[];
  onOpen: (item: T) => void;
}

const ProjectCarousel = <T extends CarouselItem>({ items, onOpen }: ProjectCarouselProps<T>) => {
  const count = items.length;
  const [active, setActive] = useState(0);
  const [dragDx, setDragDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const dragDxRef = useRef(0);
  // Set once a press turns into a drag, so the click that ends it doesn't also select a card
  const moved = useRef(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = useCallback((index: number) => setActive(mod(index, count)), [count]);

  // Drag / swipe. Listening on window keeps the gesture alive if the pointer leaves the stage.
  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      if (dragStart.current === null) return;
      const dx = e.clientX - dragStart.current;
      if (!moved.current && Math.abs(dx) > 6) {
        moved.current = true;
        setDragging(true);
      }
      if (moved.current) {
        dragDxRef.current = dx;
        setDragDx(dx);
      }
    };
    const handleUp = () => {
      if (dragStart.current === null) return;
      dragStart.current = null;
      const dx = dragDxRef.current;
      // A short flick still moves one card
      const steps = Math.round(-dx / DRAG_STEP) || (Math.abs(dx) > 40 ? -Math.sign(dx) : 0);
      if (steps) setActive((prev) => mod(prev + steps, count));
      dragDxRef.current = 0;
      setDragDx(0);
      setDragging(false);
      setTimeout(() => {
        moved.current = false;
      }, 0);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [count]);

  // When navigating with the keyboard, keep focus on whichever card is in the centre
  useEffect(() => {
    if (stageRef.current?.contains(document.activeElement)) {
      cardRefs.current[active]?.focus({ preventScroll: true });
    }
  }, [active]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Projects" onKeyDown={handleKeyDown}>
      <div
        ref={stageRef}
        onPointerDown={(e) => {
          if (e.pointerType === "mouse" && e.button !== 0) return;
          dragStart.current = e.clientX;
          moved.current = false;
        }}
        className={cn(
          "relative touch-pan-y select-none overflow-hidden py-12",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        style={{ perspective: "1600px" }}
      >
        {/* Invisible sizer that gives the stage the height of one card */}
        <div aria-hidden="true" className="invisible mx-auto aspect-[16/10] w-[min(640px,82%)] p-1.5" />

        {items.map((item, i) => {
          let offset = circularOffset(i, active, count);
          // The card exactly opposite the centre belongs to whichever side is being dragged into view
          if (offset === count / 2 && dragDx > 0) offset = -offset;
          const pos = offset + dragDx / DRAG_STEP;
          const isActive = offset === 0;
          const hidden = Math.abs(pos) > 2.9;

          return (
            <button
              key={item.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              type="button"
              tabIndex={isActive ? 0 : -1}
              aria-hidden={hidden || undefined}
              aria-label={isActive ? `Open case study: ${item.title}` : `Show ${item.title}`}
              onClick={() => {
                if (moved.current) return;
                if (isActive) onOpen(item);
                else go(i);
              }}
              className={cn(
                "group absolute inset-x-0 top-12 mx-auto block w-[min(640px,82%)] rounded-[22px] text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background",
                !dragging && "transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                hidden && "pointer-events-none"
              )}
              style={poseFor(pos)}
            >
              {/* Device-style frame */}
              <span className="block rounded-[22px] border border-white/10 bg-card p-1.5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                <span className="relative block aspect-[16/10] overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt=""
                    draggable={false}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  {/* Strong enough to keep the label readable on light screenshots too */}
                  <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  <span
                    className={cn(
                      "absolute inset-0 bg-background/20 transition-opacity duration-500",
                      isActive ? "opacity-0" : "opacity-100"
                    )}
                  />

                  <span
                    className={cn(
                      "absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white/85 backdrop-blur-md transition-opacity duration-500 sm:right-4 sm:top-4 sm:text-[11px]",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <span className="sm:hidden">Tap</span>
                    <span className="hidden sm:inline">Click</span> to expand
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
                      {item.category}
                    </span>
                    <span className="mt-2 block font-heading text-lg font-bold leading-tight text-white sm:text-2xl md:text-[1.7rem]">
                      {item.title}
                    </span>
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-1">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show project ${i + 1}: ${item.title}`}
            aria-current={i === active ? "true" : undefined}
            className="grid h-6 w-6 place-items-center rounded-full"
          >
            <span
              className={cn(
                "block rounded-full transition-all duration-300",
                i === active
                  ? "h-3 w-3 bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.7)]"
                  : "h-2.5 w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              )}
            />
          </button>
        ))}
      </div>

      <p className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="sm:hidden">
          <span className="text-primary">Swipe</span> · <span className="text-accent">Tap a side card</span>
        </span>
        <span className="hidden sm:inline">
          <span className="text-primary">Drag</span> · <span className="text-accent">Click a side card</span> ·{" "}
          <span className="text-primary">Arrow keys</span>
        </span>
      </p>

      <p className="sr-only" aria-live="polite">
        Project {active + 1} of {count}: {items[active].title}
      </p>
    </div>
  );
};

export default ProjectCarousel;
