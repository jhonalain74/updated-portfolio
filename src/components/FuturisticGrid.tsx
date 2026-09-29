import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  opacity: number;
}

const FuturisticGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });
  // With "reduce motion" on, draw a single still frame instead of animating
  const reduceMotionRef = useRef(false);

  const PARTICLE_COUNT = 120;
  const CONNECTION_DISTANCE = 150;
  const MOUSE_RADIUS = 200;
  const REPEL_STRENGTH = 0.08;
  const RETURN_SPEED = 0.02;
  const DRIFT_SPEED = 0.3;

  const initParticles = useCallback((w: number, h: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * DRIFT_SPEED,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    particlesRef.current = particles;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    const mouse = mouseRef.current;
    const particles = particlesRef.current;

    ctx.clearRect(0, 0, w, h);

    // Update particles
    for (const p of particles) {
      // Gentle autonomous drift
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      // Mouse repulsion
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
        const angle = Math.atan2(dy, dx);
        p.x += Math.cos(angle) * force * REPEL_STRENGTH * 30;
        p.y += Math.sin(angle) * force * REPEL_STRENGTH * 30;
      }
    }

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.35;

          // Check if near mouse — make connections glow brighter
          const midX = (particles[i].x + particles[j].x) / 2;
          const midY = (particles[i].y + particles[j].y) / 2;
          const mouseDist = Math.sqrt(
            (midX - mouse.x) ** 2 + (midY - mouse.y) ** 2
          );
          const mouseGlow = mouseDist < MOUSE_RADIUS * 1.5
            ? (1 - mouseDist / (MOUSE_RADIUS * 1.5)) * 0.4
            : 0;

          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = mouseGlow > 0
            ? `rgba(242, 107, 58, ${opacity + mouseGlow})`
            : `rgba(200, 200, 210, ${opacity * 0.6})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Draw particles (nodes)
    for (const p of particles) {
      // Check proximity to mouse for glow effect
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const nearMouse = dist < MOUSE_RADIUS;

      // Outer glow
      if (nearMouse) {
        const glowIntensity = (1 - dist / MOUSE_RADIUS) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 107, 58, ${glowIntensity * 0.18})`;
        ctx.fill();
      }

      // Core dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      const coreOpacity = nearMouse
        ? p.opacity + (1 - dist / MOUSE_RADIUS) * 0.5
        : p.opacity;
      ctx.fillStyle = nearMouse ? `rgba(255, 170, 130, ${coreOpacity})` : `rgba(190, 190, 200, ${coreOpacity * 0.7})`;
      ctx.fill();

      // Bright center
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(240, 240, 245, ${coreOpacity})`;
      ctx.fill();
    }

    if (!reduceMotionRef.current) {
      animationRef.current = requestAnimationFrame(draw);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(dpr, dpr);
      sizeRef.current = { w, h };

      if (particlesRef.current.length === 0) {
        initParticles(w, h);
      }
      // Resizing clears the canvas, so repaint the still frame
      if (reduceMotionRef.current) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Full strength over the hero, easing down to 40% once the first screen has scrolled by
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1);
      canvas.style.opacity = String(1 - progress * 0.6);
    };

    resize();
    handleScroll();
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [draw, initParticles]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ pointerEvents: 'none' }}
      />
      {/* Subtle vignette overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)',
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  );
};

export default FuturisticGrid;
