import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]"
      />
      <a href="/" className="absolute left-6 top-5 md:left-10" aria-label="Jhon Gennes, home">
        <Logo />
      </a>

      <div className="relative text-center">
        <p className="font-heading text-8xl font-bold leading-none md:text-9xl">
          <span className="text-gradient-primary">404</span>
        </p>
        <h1 className="mt-6 font-heading text-2xl font-bold text-foreground md:text-3xl">
          Oops! Page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The link may be broken, or the page may have moved.
        </p>
        <Button asChild variant="neon" size="lg" className="mt-8">
          <a href="/">
            <ArrowLeft />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
