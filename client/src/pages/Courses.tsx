import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const allCourses = [
  {
    id: 1,
    category: "Data Science",
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning algorithms using Python. Includes real-world projects.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    duration: "3 Months",
    rating: 4.9,
    features: ["Python Programming", "Statistical Analysis", "Machine Learning"]
  },
  {
    id: 2,
    category: "AI & ML",
    title: "AI & Machine Learning",
    description: "Deep dive into neural networks, deep learning, and building intelligent systems that can learn from data.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    duration: "4 Months",
    rating: 4.8,
    features: ["Neural Networks", "TensorFlow & PyTorch", "NLP"]
  },
  {
    id: 3,
    category: "Development",
    title: "Full Stack Java",
    description: "Become a complete developer. Learn Core Java, Advanced Java, Spring Boot, and frontend technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    duration: "4 Months",
    rating: 4.7,
    features: ["Java & Spring Boot", "React JS", "Database Design"]
  },
  {
    id: 4,
    category: "Testing",
    title: "Software Testing (Manual + Automation)",
    description: "Learn comprehensive software testing methodologies including Selenium, JUnit, and TestNG.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop",
    duration: "2 Months",
    rating: 4.6,
    features: ["Manual Testing", "Selenium Automation", "Jira & Agile"]
  },
  {
    id: 5,
    category: "Analytics",
    title: "Power BI & Tableau",
    description: "Master the art of data visualization and business intelligence reporting with industry leading tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    duration: "2 Months",
    rating: 4.8,
    features: ["Data Modeling", "DAX", "Interactive Dashboards"]
  },
  {
    id: 6,
    category: "AI & ML",
    title: "Deep Learning & Gen AI",
    description: "Advanced course covering LLMs, Generative AI models, and deep neural network architectures.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    duration: "3 Months",
    rating: 4.9,
    features: ["Transformers", "LLMs", "Generative Models"]
  }
];

const categories = ["All", "Data Science", "AI & ML", "Development", "Testing", "Analytics"];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? allCourses 
    : allCourses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Course Catalog</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore our comprehensive range of technology courses designed to get you hired.
          </p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-wrapper">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <Button 
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? "bg-primary hover:bg-blue-600" : "bg-white"}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
