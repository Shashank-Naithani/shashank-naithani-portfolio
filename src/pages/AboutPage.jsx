// components/sections/About.jsx
import React, { useEffect, useRef } from "react";
import Button from "../components/ui/Button";
import { useAppContext } from "../context/AppContext";

const About = () => {
  const { navHeight } = useAppContext();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
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

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (!targetElement) return;

    const navbarHeight = navHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  // Personal traits (keeping these for visual interest)
  const traits = [
    { icon: "🎯", text: "Problem Solver" },
    { icon: "🚀", text: "Quick Learner" },
    { icon: "🤝", text: "Team Player" },
    { icon: "💡", text: "Creative Thinker" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-10 bg-muted/30 overflow-hidden"
      style={{ scrollMarginTop: navHeight }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl"></div>

        {/* Dotted pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-muted-foreground) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get to know me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-1">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-4 rounded-full">
            <div className="w-10 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Main Content (3/5 width) */}
            <div className="lg:col-span-3 space-y-8">
              {/* Introduction */}
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  Full Stack Developer specializing in the MERN stack
                </h3>

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I'm Shashank Naithani, a Full Stack Developer specializing
                    in the{" "}
                    <span className="text-foreground font-semibold">
                      MERN stack
                    </span>
                    , with hands-on experience building scalable web
                    applications and secure backend systems. I enjoy developing
                    modern user interfaces and designing reliable APIs with a
                    strong focus on performance, clean architecture, and user
                    experience.
                  </p>

                  <p>
                    I have completed my{" "}
                    <span className="text-foreground font-semibold">
                      Master of Computer Applications (MCA)
                    </span>{" "}
                    from Guru Gobind Singh Indraprastha University, where I
                    strengthened my foundation in software development and
                    modern web technologies. Through internships as a Full Stack
                    Developer and Frontend Developer, I gained practical
                    experience working across the full application lifecycle —
                    from building responsive frontends to developing secure
                    backend APIs.
                  </p>

                  <p>
                    My technical expertise includes{" "}
                    <span className="text-foreground font-semibold">
                      React, Node.js, Express.js, MongoDB, and Redux Toolkit
                    </span>
                    , along with building RESTful APIs, implementing secure
                    authentication using JWT, and designing scalable backend
                    architectures for modern web applications.
                  </p>

                  <p>
                    I am passionate about solving real-world problems through
                    software and continuously improving my skills by building
                    production-ready applications, exploring modern frameworks,
                    and following best practices in scalable full-stack
                    development.
                  </p>
                </div>
              </div>

              {/* traits */}
            </div>

            {/* Right Column - Quote & CTA (2/5 width) */}
            <div className="lg:col-span-2 space-y-8">
              {/* Quote/Philosophy Card */}
              <div className="bg-linear-to-br from-primary/5 via-background to-accent/5 border border-border rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <svg
                  className="w-10 h-10 text-primary/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-lg italic text-foreground/80 mb-4">
                  {/* "Code is not just about making things work, it's about
                  creating experiences that users love and solutions that
                  scale." */}
                  "Great software is not just about writing code — it's about
                  designing systems that are scalable, secure, and built for
                  real users."
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">SN</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      Shashank Naithani
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Full Stack Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Traits */}
              <div className="grid grid-cols-2 gap-3">
                {traits.map((trait) => (
                  <div
                    key={trait.text}
                    className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-3 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-2xl block mb-1 group-hover:scale-110 transition-transform">
                      {trait.icon}
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {trait.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Education Highlight Card */}
              {/* <div className="bg-background/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-primary">🎓</span> Education
                </h4>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">MCA</span> from
                  Guru Gobind Singh Indraprastha University
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Specialization in Software Development & Modern Web
                  Technologies
                </p>
              </div> */}

              {/* Call to action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="#projects"
                  onClick={(e) => scrollToSection(e, "#projects")}
                  variant="primary"
                  size="md"
                  className="flex-1"
                >
                  View My Work
                </Button>
                <Button
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  variant="outline"
                  size="md"
                  className="flex-1"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
