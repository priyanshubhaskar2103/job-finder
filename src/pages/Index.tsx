import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Index = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-jobify-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-2xl font-semibold jobify-teal">Jobify</span>
          </div>
          {user && (
            <Link to="/dashboard">
              <Button variant="outline" className="border-jobify-teal text-jobify-teal">
                Go to Dashboard
              </Button>
            </Link>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Job <span className="jobify-teal">Tracking</span> App
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button className="bg-jobify-teal hover:bg-jobify-teal/90 text-white px-8 py-3 text-lg">
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="border-jobify-teal text-jobify-teal hover:bg-jobify-teal hover:text-white px-8 py-3 text-lg">
                  Login / Demo User
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=center" 
                alt="Professional woman working"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-jobify-pink rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-jobify-orange rounded-full opacity-80"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-jobify-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
