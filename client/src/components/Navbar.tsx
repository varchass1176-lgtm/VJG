import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
    )}>
      {/* Top Bar for Contact Info - Hidden on mobile */}
      <div className={cn(
        "hidden lg:block absolute top-0 left-0 w-full bg-slate-900 text-white text-xs py-1 transition-all duration-300",
        scrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="container-wrapper flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> +91 93412 19924</span>
            <span className="flex items-center gap-2"><Mail className="h-3 w-3" /> contact@vjgtech.com</span>
          </div>
          <div className="flex gap-4">
            <span>Bangalore, India</span>
          </div>
        </div>
      </div>

      <div className={cn(
        "container-wrapper flex items-center justify-between transition-all duration-300",
        scrolled ? "mt-0" : "lg:mt-6"
      )}>
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl font-display shadow-lg shadow-primary/30">
              VJG
            </div>
            <div className={cn(
              "font-display font-bold text-xl leading-tight",
              scrolled ? "text-slate-900" : "text-slate-900 lg:text-white"
            )}>
              Technologies
              <span className="block text-xs font-normal opacity-80">Training & Services</span>
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <div className={cn(
                "text-sm font-medium transition-colors hover:text-accent cursor-pointer relative group",
                location === link.href 
                  ? "text-primary font-semibold" 
                  : scrolled ? "text-slate-600" : "text-white/90"
              )}>
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300",
                  location === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <Button 
              size="sm" 
              className={cn(
                "font-semibold shadow-lg transition-all hover:-translate-y-0.5",
                scrolled ? "bg-primary text-white" : "bg-white text-primary hover:bg-white/90"
              )}
            >
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg animate-in slide-in-from-top-5">
          <div className="container-wrapper py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <div 
                  className={cn(
                    "text-lg font-medium p-2 rounded-md transition-colors cursor-pointer",
                    location === link.href ? "bg-primary/10 text-primary" : "text-slate-600 hover:bg-slate-50"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </div>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
