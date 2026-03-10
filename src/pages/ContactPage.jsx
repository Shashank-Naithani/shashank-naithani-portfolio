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
    // console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    // alert("Message sent successfully!");
    alert(
      "Unable to send message at the moment. Please use other contact methods.",
    );
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
      value: "devshashank123@gmail.com",
      link: "mailto:devshashank123@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9810856706",
      link: "tel:+919810856706",
    },
  ];

  const socialHandles = [
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
