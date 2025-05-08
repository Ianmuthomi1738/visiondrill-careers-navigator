
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { BriefcaseIcon, HomeIcon, UserIcon } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b shadow-sm bg-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-primary text-xl">Visiondrill</span>
            <span className="text-secondary font-semibold">Careers</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`flex items-center gap-2 ${isActive('/') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
          >
            <HomeIcon size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/jobs" 
            className={`flex items-center gap-2 ${isActive('/jobs') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
          >
            <BriefcaseIcon size={18} />
            <span>Jobs</span>
          </Link>
          <Link 
            to="/dashboard" 
            className={`flex items-center gap-2 ${isActive('/dashboard') ? 'text-primary font-medium' : 'text-gray-600 hover:text-primary'}`}
          >
            <UserIcon size={18} />
            <span>Dashboard</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild variant="outline">
            <Link to="/profile">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/profile">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
