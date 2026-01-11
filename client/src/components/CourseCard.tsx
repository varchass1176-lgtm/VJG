import { Link } from "wouter";
import { ArrowRight, Clock, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  rating: number;
  features: string[];
}

export default function CourseCard({ title, description, image, duration, rating, features }: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <div className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            Certification
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
            <Star className="h-3 w-3 fill-current" />
            <span>{rating} (250+ reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <Clock className="h-3 w-3" />
            <span>{duration}</span>
          </div>
        </div>

        <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
              <CheckCircle className="h-3 w-3 text-primary shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 flex gap-3">
          <Link href="/contact" className="w-full">
            <Button className="w-full bg-slate-900 hover:bg-primary transition-all">
              Enroll Now
            </Button>
          </Link>
          <Link href="/courses" className="w-full">
            <Button variant="outline" className="w-full group/btn">
              Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
