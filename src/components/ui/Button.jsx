// components/ui/Button.jsx
import React from "react";

const Button = ({
  children,
  variant = "primary", // primary, secondary, outline, ghost
  size = "md", // sm, md, lg
  className = "",
  href,
  onClick,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-muted",
    ghost: "bg-transparent text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-5 py-2 text-sm rounded-md",
    lg: "px-6 py-3 text-base rounded-lg",
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
