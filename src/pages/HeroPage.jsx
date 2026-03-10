// components/sections/Hero.jsx
import React, { useEffect, useRef } from "react";
import Button from "../components/ui/Button";
import ProfileImage from "../assets/Shashank_Naithani.png";
import { useAppContext } from "../context/AppContext";

const HeroPage = () => {
  const { navHeight } = useAppContext();
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 },
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  const floatingSkills = [
    { name: "React", icon: "⚛️", top: "-10%", right: "0%" },
    { name: "Node.js", icon: "🚀", bottom: "10%", left: "-5%" },
    { name: "MongoDB", icon: "🍃", top: "20%", right: "-8%" },
    { name: "TypeScript", icon: "📘", bottom: "30%", left: "-10%" },
    { name: "Next.js", icon: "▲", top: "40%", right: "-12%" },
    { name: "Tailwind", icon: "🎨", bottom: "-5%", right: "15%" },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: `calc(100dvh - ${navHeight}px)`,
        marginTop: navHeight,
      }}
      className="relative flex items-center bg-linear-to-br from-background via-background to-primary/5 overflow-hidden pt-20 pb-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Animated entry */}
          <div
            ref={textRef}
            className="order-2 lg:order-1 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            {/* Animated greeting badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full mb-6 animate-float">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Available for work
              </span>
            </div>

            {/* Name with gradient
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Shashank
              </span>
              <span className="text-primary ml-2">Naithani</span>
            </h1> */}

            {/* Name with gradient - More compact for mobile */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="inline bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Shashank
              </span>
              <span className="inline text-primary sm:ml-2 mt-1 sm:mt-0 ml-2">
                Naithani
              </span>
            </h1>

            {/* Animated title */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-light text-muted-foreground">
                Full Stack Developer
              </h2>
              <div className="flex items-center gap-3 mt-3 flex-wrap">
                {["MERN Stack", "JavaScript", "Python"].map((tech, index) => (
                  <React.Fragment key={tech}>
                    <span className="text-foreground font-medium px-3 py-1 bg-secondary/50 rounded-full text-sm">
                      {tech}
                    </span>
                    {index < 2 && (
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full"></span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Description with improved typography */}
            <p className="text-muted-foreground text-lg sm:text-xl mb-8 max-w-lg leading-relaxed">
              I craft robust and scalable web applications with{" "}
              <span className="text-foreground font-semibold">clean code</span>{" "}
              and{" "}
              <span className="text-foreground font-semibold">
                exceptional user experiences
              </span>
              . Turning complex problems into elegant solutions.
            </p>

            {/* CTA Buttons with hover effects */}
            <div className="flex flex-wrap gap-4">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-linear-to-r from-primary to-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>

              <Button
                href="/resume.pdf"
                variant="outline"
                size="lg"
                className="group border-2 hover:border-primary/50 transition-all duration-300"
              >
                <span>Download Resume</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </Button>
            </div>

            {/* Social proof with tech icons */}
            {/* <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-3">
                {["react", "nodejs", "mongodb", "typescript"].map((tech) => (
                  <div
                    key={tech}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-lg hover:scale-110 transition-transform cursor-default"
                  >
                    {tech === "react" && "⚛️"}
                    {tech === "nodejs" && "🚀"}
                    {tech === "mongodb" && "🍃"}
                    {tech === "typescript" && "📘"}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">3+ years</span>{" "}
                of experience
              </span>
            </div> */}
          </div>

          {/* Right Content - Photo with advanced effects */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
          >
            <div className="relative group">
              {/* Main Photo with advanced styling */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-100 lg:h-100">
                {/* Gradient border animation */}
                <div className="absolute -inset-1 bg-linear-to-r from-primary via-accent to-primary rounded-2xl opacity-75 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500 animate-gradient-xy"></div>

                {/* Image container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-background/10">
                  <img
                    src={ProfileImage}
                    alt="Shashank Naithani - Full Stack Developer"
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating skills - Modern positioning */}
              {floatingSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="absolute animate-float cursor-default"
                  style={{
                    top: skill.top,
                    bottom: skill.bottom,
                    left: skill.left,
                    right: skill.right,
                    animationDelay: `${index * 0.2}s`,
                    animationDuration: "3s",
                  }}
                >
                  <div className="bg-background/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-full shadow-xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-110">
                    <span className="mr-2">{skill.icon}</span>
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 bg-linear-to-r from-primary/10 to-accent/10 rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-scroll"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroPage;
