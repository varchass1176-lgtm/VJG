import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-slate-900 text-white pt-32 pb-16">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About VJG Technologies</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Connecting top tech talent with leading organizations since 2010.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wrapper">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="text-slate-600 leading-relaxed">
                VJG Technologies is a Bangalore-based IT solutions company dedicated to transforming careers and connecting individuals with their dream opportunities in Information Technology. At VJG, our core belief is simple yet powerful - we're driven by the unwavering commitment to bridge the gap between talented individuals and leading tech companies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We're not just a recruitment company; we're your partner in professional growth. Our dedication lies in providing individuals with top-tier placement opportunities, ensuring they are well-placed for success in the IT industry.
              </p>
            </div>
            <div className="relative">
              {/* office environment */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Our Office" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To provide a promising future for everyone who chooses VJG and create global experts in India. We aim to be the ultimate bridge between talent and industry.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower individuals by providing access to the best career opportunities and support their transformation into international experts through professional placement services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 bg-blue-100 text-primary rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Reach</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                With over 1000+ success stories and 150+ corporate clients, we have established ourselves as a trusted partner in the tech education ecosystem.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Why Partner with VJG Technologies?</h2>
              <p className="text-slate-500">We provide more than just job leads; we provide a career launchpad.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
              {[
                "Expert Mentorship: Career guidance from industry veterans.",
                "Transforming Lives: Join over 1000 success stories.",
                "Proven Track Record: 150+ clients trust our staffing solutions.",
                "Fast Placement: Average hiring cycle reduced by 40%.",
                "Career Assurance: 100% placement assistance program.",
                "Comprehensive Support: From resume building to mock interviews.",
                "Industry Network: Access to exclusive job openings."
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-blue-600 shadow-lg shadow-primary/20">
                  Join Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
