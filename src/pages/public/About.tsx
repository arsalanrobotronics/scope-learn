import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  Target,
  Heart,
  Brain,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const researchMethods = [
    {
      researcher: "John Hattie",
      method: "Visible Learning",
      description: "Evidence-based teaching strategies that maximize student learning outcomes through feedback and assessment.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
    {
      researcher: "Barak Rosenshine",
      method: "Principles of Instruction",
      description: "Systematic approach to instruction including modeling, guided practice, and independent learning.",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      researcher: "Carol Dweck",
      method: "Growth Mindset",
      description: "Fostering belief that abilities can be developed through dedication, hard work, and learning from failure.",
      icon: <Brain className="h-6 w-6 text-primary" />
    }
  ];

  const differentiators = [
    {
      title: "Research-Backed Methods",
      description: "Our teaching approaches are grounded in the latest educational research and proven methodologies.",
      icon: <Award className="h-8 w-8 text-success" />
    },
    {
      title: "Psychology Integration",
      description: "We combine behavior therapy and educational psychology to address both academic and emotional needs.",
      icon: <Heart className="h-8 w-8 text-success" />
    },
    {
      title: "Personalised Daily Plans",
      description: "Each student receives a customized learning plan tailored to their unique needs and learning style.",
      icon: <Target className="h-8 w-8 text-success" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">MBEST</h1>
                <p className="text-sm text-muted-foreground">Tutoring Centre</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-primary font-medium">About</Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/appointments" className="text-foreground hover:text-primary transition-colors">Booking</Link>
              <Link to="/resources" className="text-foreground hover:text-primary transition-colors">Resources</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              <Link to="/portal">
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
            Our Story & Philosophy
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About
            <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              M.B.E.S.T
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Mathematics Beyond Every Step Tutoring - transforming educational challenges 
            into stepping stones for success, one student at a time.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For over 25 years, MBEST has been at the forefront of educational excellence, 
                founded on the belief that every student has the potential to succeed when given 
                the right support, methodology, and encouragement.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a small tutoring initiative has grown into a comprehensive 
                educational center that combines traditional teaching excellence with modern 
                psychological insights and research-backed methodologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-success" />
                  <span>500+ students successfully guided</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-success" />
                  <span>95% improvement in academic performance</span>
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

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            To provide transformational education that goes beyond traditional tutoring, 
            fostering not just academic excellence but also confidence, resilience, and 
            a lifelong love for learning.
          </p>
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">
              "Transformation Step by Step, Beyond Every Step"
            </h4>
            <p className="text-white/90 max-w-2xl mx-auto">
              We believe that every challenge is an opportunity for growth, and every step forward, 
              no matter how small, is a victory worth celebrating.
            </p>
          </div>
        </div>
      </section>

      {/* Research-Backed Methods */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Research-Backed Methodology</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our teaching methods are grounded in the latest educational research from leading experts in the field.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {researchMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">{method.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">{method.researcher}</h4>
                  <h5 className="text-lg font-medium text-primary mb-4">{method.method}</h5>
                  <p className="text-muted-foreground leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Sets Us Apart</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our unique approach combines academic excellence with psychological well-being and personalized learning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story Example */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            A Real Success Story
          </h3>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              "When Sarah first came to us, she was struggling with Year 10 mathematics and had developed 
              a fear of numbers. Through our personalized daily plans, combining cognitive behavioral techniques 
              with structured learning, we not only helped her master algebraic concepts but also rebuilt her 
              confidence. Today, she's pursuing advanced mathematics and dreams of becoming an engineer."
            </p>
            <p className="text-white font-medium">- Real MBEST Success Story</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have transformed their academic journey with MBEST. 
            Every step forward is a step towards your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" className="bg-gradient-primary text-white">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white/50 border-t border-border/50">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
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
          <p className="text-sm text-muted-foreground">&copy; 2024 MBEST Tutoring Centre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}