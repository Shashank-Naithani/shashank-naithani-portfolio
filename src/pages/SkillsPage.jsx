// components/sections/Skills.jsx
import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

const Skills = () => {
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

  // Skills data organized by category
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "Python", "TypeScript"],
    },
    {
      name: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Authentication",
        "WebSockets",
      ],
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"],
    },
    {
      name: "Tools & DevOps",
      icon: "🔧",
      skills: ["Git & GitHub", "Docker", "AWS", "Postman", "Jest", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-10 bg-background overflow-hidden"
      style={{ scrollMarginTop: navHeight }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What I bring to the table
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-4 rounded-full">
            <div className="w-10 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-5">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                {/* Skills List - Simple bullet points */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">Languages:</span>{" "}
              English (Professional), Hindi (Native)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
