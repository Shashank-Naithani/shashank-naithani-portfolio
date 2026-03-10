// components/sections/Experience.jsx
import React, { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";

const ExperiencePage = () => {
  const { navHeight } = useAppContext();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "Tech Company Name",
      location: "Remote / Delhi",
      period: "June 2024 - Present",
      description: [
        "Developed and maintained full-stack web applications using MERN stack, resulting in 30% improved performance",
        "Collaborated with cross-functional teams to design and implement RESTful APIs for seamless data integration",
        "Implemented responsive UI components with React and Tailwind CSS, ensuring mobile-first approach",
        "Participated in code reviews and contributed to technical documentation",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      company: "Another Tech Company",
      location: "Remote",
      period: "Jan 2024 - May 2024",
      description: [
        "Built reusable React components and implemented state management using Redux",
        "Optimized application performance through code splitting and lazy loading techniques",
        "Collaborated with designers to translate Figma designs into pixel-perfect responsive interfaces",
        "Integrated third-party APIs and handled asynchronous data fetching efficiently",
      ],
      technologies: ["React", "Redux", "JavaScript", "CSS3", "REST APIs"],
    },
  ];

  return (
    <section
      id="experience"
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
            Where I've worked
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-4 rounded-full">
            <div className="w-10 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Experience Content */}
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          {/* Timeline Style - Option 1 (Vertical) */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline line (except last) */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-border"></div>
                )}

                <div className="flex gap-6">
                  {/* Timeline dot */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 bg-muted rounded-full border-4 border-background flex items-center justify-center">
                      <span className="text-2xl text-primary">💼</span>
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 group">
                    <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-foreground font-medium">
                              {exp.company}
                            </span>
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            <span className="text-muted-foreground text-sm">
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      {/* <ul className="space-y-3 mb-4">
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-muted-foreground"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul> */}

                      {/* Technologies */}
                      {/* <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-background border border-border rounded-full text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Company/Position Tabs - Alternative Layout */}
          {/* <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                {experiences.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveIndex(index)}
                    className={`px-4 py-3 rounded-lg text-left whitespace-nowrap md:whitespace-normal transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <div className="font-medium">{exp.company}</div>
                    <div className="text-sm opacity-80">{exp.period}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {experiences[activeIndex].title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-medium">
                    {experiences[activeIndex].company}
                  </span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    {experiences[activeIndex].location}
                  </span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span className="text-muted-foreground">
                    {experiences[activeIndex].period}
                  </span>
                </div>
                <ul className="space-y-3 mb-4">
                  {experiences[activeIndex].description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeIndex].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background border border-border rounded-full text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
