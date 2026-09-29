import { useCallback, useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, Minimize2, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageLightboxProps {
  src: string;
  alt: string;
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const toolbarButton =
  "inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

/* Full-screen image viewer that opens on top of a case study and closes back to it
   (Back button, ×, Esc, or a click on the empty space around the image). */
const ImageLightbox = ({ src, alt, title, open, onOpenChange }: ImageLightboxProps) => {
  const [actualSize, setActualSize] = useState(false);
  // Zooming only helps when the image is wider than the screen (usually on phones)
  const [canZoom, setCanZoom] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const img = imgRef.current;
    const area = areaRef.current;
    if (!img?.naturalWidth || !area) return;
    const style = getComputedStyle(area);
    const available = area.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    setCanZoom(img.naturalWidth > available + 1);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(measure); // covers images that were already cached
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [open, measure]);

  const handleOpenChange = (next: boolean) => {
    if (!next) setActualSize(false);
    onOpenChange(next);
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed inset-0 z-[60] flex flex-col outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
          <div className="flex items-center justify-between gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur-md sm:px-6">
            <DialogPrimitive.Close className={toolbarButton}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sm:hidden">Back</span>
              <span className="hidden sm:inline">Back to case study</span>
            </DialogPrimitive.Close>

            <DialogPrimitive.Title className="hidden min-w-0 truncate text-sm text-muted-foreground md:block">
              {title}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              Full-size screenshot. Press Escape to go back to the case study.
            </DialogPrimitive.Description>

            <div className="flex items-center gap-2">
              {(canZoom || actualSize) && (
                <button
                  type="button"
                  onClick={() => setActualSize((value) => !value)}
                  aria-pressed={actualSize}
                  className={toolbarButton}
                >
                  {actualSize ? <Minimize2 className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                  <span className="hidden sm:inline">{actualSize ? "Fit to screen" : "Actual size"}</span>
                  <span className="sr-only sm:hidden">{actualSize ? "Fit to screen" : "Actual size"}</span>
                </button>
              )}
              <DialogPrimitive.Close
                aria-label="Close full-size view"
                className={cn(toolbarButton, "w-9 justify-center px-0")}
              >
                <X className="h-4 w-4" />
              </DialogPrimitive.Close>
            </div>
          </div>

          {/* Fit: as wide as the screen allows (never upscaled), scroll down for tall images.
              Actual size: native pixels, scroll in both directions. */}
          <div
            ref={areaRef}
            className="flex-1 overflow-auto p-4 sm:p-8"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleOpenChange(false);
            }}
          >
            <img
              ref={imgRef}
              src={src}
              alt={alt}
              onLoad={measure}
              className={cn("mx-auto rounded-lg shadow-2xl", actualSize ? "max-w-none" : "h-auto max-w-full")}
            />
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default ImageLightbox;
