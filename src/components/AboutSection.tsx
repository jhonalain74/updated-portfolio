const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 relative"
      style={{
        backgroundColor: "hsl(230 25% 8% / 0.9)",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          {/* Greeting — gradient text with Inter font */}
          <h2
            className="text-3xl md:text-4xl font-bold mb-8 opacity-0 animate-fade-in"
            style={{
              animationDelay: "0.1s",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-gradient-primary">Hi, I am Jhon</span>{" "}
            <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite]">👋</span>
          </h2>

          {/* Robot Image — overflow hidden to crop the watermark at the bottom-right */}
          <div
            className="w-full max-w-lg mb-10 opacity-0 animate-fade-in relative overflow-hidden rounded-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src="/images/robot-dashboard.jpg"
              alt="AI Robot presenting Key Performance Insights dashboard"
              className="w-full h-auto block"
              style={{
                marginBottom: "-30px",
                marginRight: "-10px",
              }}
              loading="lazy"
            />
            {/* Corner mask to cover the watermark */}
            <div
              className="absolute bottom-0 right-0 pointer-events-none"
              style={{
                width: "80px",
                height: "80px",
                background: "radial-gradient(circle at bottom right, hsl(230 25% 8%) 30%, transparent 70%)",
              }}
            />
          </div>

          {/* Introduction */}
          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            I'm a Data Analyst focused on{" "}
            <span className="text-foreground font-medium">data cleaning, analysis, and dashboarding</span>{" "}
            to support better decision-making. I complement this with{" "}
            <span className="text-primary font-medium">AI automation</span>{" "}
            to reduce manual processes and scale operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
