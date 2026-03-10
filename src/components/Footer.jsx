// components/Footer.jsx
import React from "react";
import { useAppContext } from "../context/AppContext";

const Footer = () => {
  const { navHeight } = useAppContext(); // Not used in footer but keeping for consistency
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🐙",
      url: "https://github.com/shashank",
      username: "@shashank",
    },
    {
      name: "LinkedIn",
      icon: "🔗",
      url: "https://linkedin.com/in/shashank",
      username: "shashank-naithani",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/shashank",
      username: "@shashank_dev",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "https://instagram.com/shashank",
      username: "@shashank.code",
    },
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
                  href="mailto:shashank@email.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  shashank@email.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">📱</span>
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
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
