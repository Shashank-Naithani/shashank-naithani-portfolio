// components/sections/Education.jsx
import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/AppContext";

const EducationPage = () => {
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

  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Vivekananda Institute of Professional Studies, GGSIPU",
      location: "Delhi, India",
      period: "2024 - 2026",
      score: "CGPA: 9.0/10",
      description:
        "Specialized in advanced software development, web technologies, and database management systems. Completed projects in full-stack development and contributed to research papers.",
      courses: [
        "Advanced Web Development",
        "Database Management Systems",
        "Software Engineering",
        "Cloud Computing",
        "Machine Learning Basics",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sirifort Institute of Management Studies, GGSIPU",
      location: "Your City, India",
      period: "2021 - 2024",
      score: "CGPA: 9.1/10",
      description:
        "Built a strong foundation in programming fundamentals, data structures, and computer networks. Actively participated in coding competitions and technical workshops.",
      courses: [
        "Programming in C/C++",
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Computer Networks",
        "Operating Systems",
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-10 bg-muted/30 overflow-hidden"
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
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            My <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-4 rounded-full">
            <div className="w-10 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Education Content */}
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="group bg-background border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {/* {index === 0 ? "🎓" : "📚"} */}
                      🎓
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-foreground font-medium text-sm mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                {/* Location and Score */}
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {edu.location}
                  </span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span className="text-primary font-medium">{edu.score}</span>
                </div>

                {/* Description */}
                {/* <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p> */}

                {/* Key Courses */}
                {/* <div>
                  <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    Key Courses
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-muted rounded-md text-xs text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            ))}
          </div>

          {/* Optional: Achievement/Certification Banner */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-background border border-border rounded-full px-6 py-3">
              <span className="text-primary text-xl">🏆</span>
              <span className="text-foreground font-medium">
                Consistently maintained academic excellence throughout both
                degrees
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
