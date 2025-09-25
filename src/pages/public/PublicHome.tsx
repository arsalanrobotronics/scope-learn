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
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PublicHome() {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "One-on-One Tutoring",
      description: "Personalized mathematics tutoring tailored to your child's learning style and pace."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Exam Preparation",
      description: "Comprehensive preparation for school exams, entrance tests, and competitive examinations."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Group Sessions",
      description: "Small group classes that encourage peer learning while maintaining individual attention."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "My daughter's math grades improved from C to A+ within 3 months. The personalized approach really works!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Student",
      content: "MBEST helped me conquer my fear of algebra. Now I actually enjoy solving math problems!",
      rating: 5
    },
    {
      name: "Emma Wilson",
      role: "Parent", 
      content: "25 years of experience shows. The tutors understand exactly what students need to succeed.",
      rating: 5
    }
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Students Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "50+", label: "Expert Tutors" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MBEST</h1>
                <p className="text-sm text-muted-foreground">Tutoring Centre</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Link to="/auth/signin">
                <Button variant="outline" size="sm">
                  Portal Login
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Mathematics Beyond Every Step Tutoring
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Conquering Challenges,
            <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Step by Step
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            With over 25 years of experience, we provide personalized mathematics tutoring 
            that transforms confusion into confidence and challenges into achievements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-white">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                About M.B.E.S.T Tutoring Centre
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For over 25 years, MBEST has been dedicated to helping students overcome 
                mathematical challenges and achieve academic excellence. Our proven methodology 
                focuses on building strong foundations while developing problem-solving confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-success" />
                  <span>Proven track record with 95% success rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-success" />
                  <span>Personalized learning approach</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-success" />
                  <span>Comprehensive curriculum coverage</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-success/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mathematics education tailored to every student's needs and learning style.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Our Families Say</h3>
            <p className="text-muted-foreground">
              Real stories from students and parents who've experienced the MBEST difference.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Updated with MBEST
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest math tips, study resources, and updates on our programs 
            delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">MBEST</h4>
                  <p className="text-sm text-muted-foreground">Tutoring Centre</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Conquering mathematical challenges, step by step, for over 25 years.
              </p>
              <div className="flex gap-4">
                <Button size="icon" variant="outline">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
              <div className="space-y-2 text-muted-foreground">
                <div><a href="#about" className="hover:text-primary transition-colors">About Us</a></div>
                <div><a href="#services" className="hover:text-primary transition-colors">Services</a></div>
                <div><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></div>
                <div><Link to="/auth/signin" className="hover:text-primary transition-colors">Portal Login</Link></div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Contact Info</h5>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>info@mbest.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>123 Education St, Learning City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 MBEST Tutoring Centre. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}