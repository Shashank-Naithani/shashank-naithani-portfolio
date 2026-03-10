// pages/404.jsx - Simpler Version
import React, { useEffect } from "react";
import Button from "../components/ui/Button";
import { useAppContext } from "../context/AppContext";

const NotFoundPage = () => {
  const { navHeight } = useAppContext();

  useEffect(() => {
    document.title = "404 - Page Not Found | Shashank Naithani";
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      style={{ minHeight: `calc(100vh - ${navHeight}px)` }}
    >
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          {/* <Button href="#contact" variant="outline" size="lg">
            Contact Me
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
