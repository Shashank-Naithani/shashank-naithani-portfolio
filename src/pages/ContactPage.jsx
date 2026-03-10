// components/sections/Contact.jsx
import React, { useEffect, useRef, useState } from "react";
import Button from "../components/ui/Button";
import { useAppContext } from "../context/AppContext";

const ContactPage = () => {
  const { navHeight } = useAppContext();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      value: "Delhi, India",
      link: null,
    },
    {
      icon: "📧",
      title: "Email",
      value: "shashank@email.com",
      link: "mailto:shashank@email.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
  ];

  const socialHandles = [
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

  return (
    <section
      id="contact"
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
            Get in touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2">
            Contact <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto mt-4 rounded-full">
            <div className="w-10 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        {/* Contact Content */}
        <div
          ref={contentRef}
          className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {item.title}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Handles */}
              <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Social Links
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialHandles.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-background border border-border rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
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

              {/* Availability Card */}
              <div className="bg-linear-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-1 bg-green-500/20 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <p className="text-foreground font-medium">
                      Available for work
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Open to freelance and full-time opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-muted/30 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Hi Shashank, I'd like to discuss a project..."
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-foreground placeholder:text-muted-foreground/50 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
