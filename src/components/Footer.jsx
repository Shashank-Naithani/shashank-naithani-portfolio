// components/Footer.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

const Footer = () => {
  const { navHeight } = useAppContext(); // Not used in footer but keeping for consistency
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.3-.54-1.52.105-3.16 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.64.24 2.86.12 3.16.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.62-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.29 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/Shashank-Naithani",
      username: "@Shashank-Naithani",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/shashanknaithani/",
      username: "Shashank Naithani",
    },
    // {
    //   name: "Twitter",
    //   icon: "🐦",
    //   url: "https://twitter.com/shashank",
    //   username: "@shashank_dev",
    // },
    // {
    //   name: "Instagram",
    //   icon: "📷",
    //   url: "https://instagram.com/shashank",
    //   username: "@shashank.code",
    // },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = 64; // Fixed navbar height
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-muted/50 border-t border-border">
      {/* Background decorative element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "#home")}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors duration-200 inline-block mb-4"
            >
              Shashank<span className="text-primary">.dev</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer specializing in the MERN stack. Creating
              robust and scalable web applications with clean code and
              exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">📍</span>
                <span className="text-muted-foreground">Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">📧</span>
                <a
                  href="mailto:devshashank123@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  devshashank123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">📱</span>
                <a
                  href="tel:+919810856706"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9810856706
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-foreground font-semibold mb-4">Follow Me</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-8 bg-background border border-border rounded-lg flex items-center justify-center text-lg group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {social.username}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Shashank Naithani. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Built with <span className="text-primary">❤️</span> using React &
              Tailwind CSS
            </span>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center text-primary hover:border-primary/30 hover:scale-110 transition-all duration-300"
              aria-label="Back to top"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Built with pride banner */}
        <div className="mt-4 text-center text-xs text-muted-foreground/50">
          Designed & developed with attention to every pixel ✦
        </div>
      </div>
    </div>
  );
};

export default Footer;
