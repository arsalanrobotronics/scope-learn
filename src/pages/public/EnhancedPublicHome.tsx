import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Star, 
  ArrowRight,
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Zap,
  Target,
  TrendingUp,
  CheckCircle,
  Play,
  ChevronDown,
  Quote
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatWidget from "@/components/common/ChatWidget";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function EnhancedPublicHome() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "One-on-One Tutoring",
      description: "Personalized mathematics tutoring tailored to your child's learning style and pace.",
      color: "from-blue-500 to-purple-600",
      delay: 0
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Exam Preparation", 
      description: "Comprehensive preparation for school exams, entrance tests, and competitive examinations.",
      color: "from-purple-500 to-pink-600",
      delay: 200
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Group Sessions",
      description: "Small group classes that encourage peer learning while maintaining individual attention.",
      color: "from-pink-500 to-red-600",
      delay: 400
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "My daughter's math grades improved from C to A+ within 3 months. The personalized approach really works!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen", 
      role: "Student",
      content: "MBEST helped me conquer my fear of algebra. Now I actually enjoy solving math problems!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emma Wilson",
      role: "Parent",
      content: "25 years of experience shows. The tutors understand exactly what students need to succeed.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
    { number: "500+", label: "Students Helped", icon: <Users className="h-8 w-8" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="h-8 w-8" /> },
    { number: "50+", label: "Expert Tutors", icon: <Sparkles className="h-8 w-8" /> }
  ];

  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, text: "Proven track record with 95% success rate" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Personalized learning approach" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Comprehensive curriculum coverage" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Experienced and certified tutors" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">MBEST</h1>
                <p className="text-sm text-blue-200">Tutoring Centre</p>
              </div>
            </div>
            <nav className={`hidden md:flex items-center gap-6 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              {['About', 'Services', 'Booking', 'Resources', 'Contact'].map((item, index) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase()}`} 
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link to="/portal">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
                >
                  Portal Login
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto text-center relative z-10">
          <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Mathematics Beyond Every Step Tutoring
            </Badge>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Conquering Challenges,</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-size-200">
                Step by Step
              </span>
            </h2>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              With over 25 years of experience, we provide personalized mathematics tutoring 
              that transforms confusion into confidence and challenges into achievements.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link to="/appointments">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                View Programs
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* About Section */}
      <AboutSection features={features} />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Footer */}
      <FooterSection />
      
      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}

// Stats Section Component
const StatsSection = ({ stats }: { stats: any[] }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full text-blue-400 hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = ({ features }: { features: any[] }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-4xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">M.B.E.S.T</span> Tutoring Centre
            </h3>
            <p className="text-white/80 mb-8 leading-relaxed text-lg">
              For over 25 years, MBEST has been dedicated to helping students overcome 
              mathematical challenges and achieve academic excellence. Our proven methodology 
              focuses on building strong foundations while developing problem-solving confidence.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div className="text-green-400 hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 hover:scale-105 transition-transform duration-500">
              <GraduationCap className="h-40 w-40 text-blue-400 animate-float" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component  
const ServicesSection = ({ services }: { services: any[] }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="services" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm" />
      <div className="container mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Comprehensive mathematics education tailored to every student's needs and learning style.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <Card className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: `linear-gradient(135deg, ${service.color.split(' ')[0]} 0%, ${service.color.split(' ')[2]} 100%)`
                  }} />
                  <div className="relative z-10">
                    <div className={`mb-6 flex justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
const TestimonialsSection = ({ testimonials }: { testimonials: any[] }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-4xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Families</span> Say
          </h3>
          <p className="text-white/80 text-lg">
            Real stories from students and parents who've experienced the MBEST difference.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card className="border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
                <CardContent className="p-6 relative">
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-400/30" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-white/60">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 italic leading-relaxed">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Newsletter Section Component
const NewsletterSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm" />
      <div className="container mx-auto text-center relative z-10">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-4xl font-bold text-white mb-4">
            Stay Updated with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MBEST</span>
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
            Get the latest math tips, study resources, and updates on our programs 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Section Component
const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-purple-900/90 backdrop-blur-sm" />
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">MBEST</h4>
                <p className="text-sm text-white/60">Tutoring Centre</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Conquering mathematical challenges, step by step, for over 25 years.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, MessageCircle].map((Icon, index) => (
                <Button 
                  key={index}
                  size="icon" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <div className="space-y-2 text-white/80">
              {['About Us', 'Services', 'Booking', 'Resources', 'Contact', 'Portal Login'].map((link) => (
                <div key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 block">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4">Contact Info</h5>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@mbest.edu</span>
              </div>
              <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin className="h-4 w-4" />
                <span>123 Education St, Learning City</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 MBEST Tutoring Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
