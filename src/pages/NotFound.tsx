
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-md px-4">
        <h1 className="text-5xl font-bold font-display mb-6 text-agency-primary">404</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Button asChild className="bg-agency-primary hover:bg-agency-secondary text-white">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
