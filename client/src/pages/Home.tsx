import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Trophy, Users, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* technology background students in lab */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Students collaborating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>

        <div className="container-wrapper relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              New Batches Starting Soon
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              Master the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Technology</span>
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              VJG Technologies bridges the gap between education and industry. Get trained by experts, work on live projects, and secure your dream job with our 100% placement assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-blue-600 text-white px-8 h-14 rounded-xl text-lg shadow-lg shadow-primary/25">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-8 h-14 rounded-xl text-lg backdrop-blur-sm">
                  Explore Courses
                </Button>
              </Link>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm font-medium text-slate-400 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>Industry Expert Trainers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-accent h-5 w-5" />
                <span>100% Placement Support</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Stats/Card - Hidden on small mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-30 blur-2xl rounded-full" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                <StatCard number="1000+" label="Students Placed" icon={<Users className="text-accent" />} />
                <StatCard number="50+" label="Expert Mentors" icon={<GraduationCap className="text-blue-400" />} />
                <StatCard number="150+" label="Hiring Partners" icon={<Briefcase className="text-green-400" />} />
                <StatCard number="98%" label="Success Rate" icon={<Trophy className="text-yellow-400" />} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-white">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* diverse team meeting in office */}
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                alt="About Us" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-accent/30 rounded-full z-0" />
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wide uppercase">
                About VJG Technologies
              </div>
              <h2 className="text-4xl font-display font-bold text-slate-900">
                Transforming Careers Through Excellence in Technology
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                VJG Technologies is a premier IT solutions and training company dedicated to transforming careers and empowering individuals. We don't just teach technology; we create industry-ready professionals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission revolves around empowering individuals with cutting-edge IT courses. Whether you are a fresh graduate looking for your first break or a professional seeking to upskill, we are your pathway to a promising future.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {["Live Projects", "Corporate Training", "Mock Interviews", "Career Counseling"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link href="/about">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                    Read More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-wrapper relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Our Trending Courses
            </h2>
            <p className="text-slate-600 text-lg">
              Industry-designed curriculum to help you master the most in-demand skills.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {courses.map((course, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button size="lg" className="bg-primary hover:bg-blue-600 shadow-xl shadow-primary/20">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PLACEMENT BANNER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-wrapper relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold">
                Your Success Is Our Priority
              </h2>
              <p className="text-slate-300 text-lg">
                Join our 100% Placement Assistance program. We persist until you secure your dream position, ensuring you never leave empty-handed.
              </p>
              <div className="flex gap-8 py-4">
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">45+</div>
                  <div className="text-sm text-slate-400">Days Training</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-slate-400">Placement Assist</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">150+</div>
                  <div className="text-sm text-slate-400">Hiring Partners</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Recent Placements</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-slate-700 overflow-hidden">
                      {/* Placeholder avatar */}
                      <div className="w-full h-full flex items-center justify-center text-xs font-bold bg-gradient-to-br from-blue-500 to-purple-600">
                        ST
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold">Student Name</div>
                      <div className="text-xs text-slate-400">Placed at MNC</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-6 bg-accent text-slate-900 hover:bg-yellow-400 font-bold">
                See More Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function StatCard({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
      <div className="flex justify-center mb-2 text-3xl">{icon}</div>
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

const courses = [
  {
    title: "Data Science with Python",
    description: "Master data analysis, visualization, and machine learning algorithms using Python. Includes real-world projects.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    duration: "3 Months",
    rating: 4.9,
    features: ["Python Programming", "Statistical Analysis", "Machine Learning"]
  },
  {
    title: "AI & Machine Learning",
    description: "Deep dive into neural networks, deep learning, and building intelligent systems that can learn from data.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
    duration: "4 Months",
    rating: 4.8,
    features: ["Neural Networks", "TensorFlow & PyTorch", "NLP"]
  },
  {
    title: "Full Stack Java",
    description: "Become a complete developer. Learn Core Java, Advanced Java, Spring Boot, and frontend technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
    duration: "4 Months",
    rating: 4.7,
    features: ["Java & Spring Boot", "React JS", "Database Design"]
  }
];
