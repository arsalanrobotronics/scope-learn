import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Calculator, 
  BookOpen, 
  Users, 
  Trophy,
  Target,
  Download,
  Play,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const tutoringPrograms = [
    {
      subject: "Mathematics",
      levels: "Years 1-12",
      description: "Comprehensive mathematics tutoring covering all levels including Standard, Advanced, Extension 1 & 2.",
      features: ["Problem-solving techniques", "Exam strategies", "Concept mastery", "Confidence building"],
      icon: <Calculator className="h-8 w-8 text-primary" />
    },
    {
      subject: "English",
      levels: "Years 1-6",
      description: "Literacy, comprehension, and vocabulary development with personalized learning approaches.",
      features: ["Reading comprehension", "Writing skills", "Vocabulary expansion", "Critical thinking"],
      icon: <BookOpen className="h-8 w-8 text-primary" />
    },
    {
      subject: "Science",
      levels: "Years 7-10",
      description: "Foundation science concepts across Physics, Chemistry, and Biology with hands-on learning.",
      features: ["Conceptual understanding", "Practical applications", "Scientific method", "Lab skills"],
      icon: <Target className="h-8 w-8 text-primary" />
    }
  ];

  const examPrep = [
    {
      title: "OC Test Coaching",
      description: "Comprehensive preparation for Opportunity Class testing with proven strategies.",
      duration: "6-month intensive program",
      features: ["Practice tests", "Time management", "Critical thinking", "Mock assessments"]
    },
    {
      title: "Selective School Preparation",
      description: "Specialized coaching for selective school entrance examinations.",
      duration: "8-month comprehensive program", 
      features: ["Subject mastery", "Test techniques", "Interview skills", "Application support"]
    },
    {
      title: "HSC Trial & Final Exam Prep",
      description: "Intensive preparation for HSC examinations with expert guidance.",
      duration: "Term-based programs",
      features: ["Past paper analysis", "Exam strategies", "Stress management", "Revision techniques"]
    }
  ];

  const resources = [
    {
      type: "Worksheets & Guides",
      description: "Comprehensive collection of practice materials and revision guides.",
      icon: <Download className="h-6 w-6 text-success" />
    },
    {
      type: "Online Learning Platform",
      description: "Digital platform with student tracking and progress monitoring.",
      icon: <Play className="h-6 w-6 text-success" />
    },
    {
      type: "Lesson Plans",
      description: "Structured lesson plans aligned with curriculum requirements.",
      icon: <BookOpen className="h-6 w-6 text-success" />
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
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/services" className="text-primary font-medium">Services</Link>
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
            Comprehensive Educational Services
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our
            <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Comprehensive mathematics education tailored to every student's needs, 
            from foundational concepts to advanced examinations.
          </p>
        </div>
      </section>

      {/* Tutoring Programs */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Tutoring Programs</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Personalized tutoring programs designed to build strong foundations and achieve academic excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tutoringPrograms.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">{program.icon}</div>
                  <h4 className="text-2xl font-bold text-foreground mb-2">{program.subject}</h4>
                  <Badge variant="outline" className="mb-4">{program.levels}</Badge>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Exam Preparation</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized preparation programs for major educational milestones and competitive examinations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {examPrep.map((exam, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <Trophy className="h-8 w-8 text-warning" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{exam.title}</h4>
                  <Badge variant="secondary" className="mb-4">{exam.duration}</Badge>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exam.description}</p>
                  <div className="space-y-2">
                    {exam.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Learning Resources</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational materials and digital platforms to support learning beyond the classroom.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{resource.icon}</div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">{resource.type}</h4>
                  <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Types */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Flexible Learning Options
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">One-on-One Tutoring</h4>
                    <p className="text-muted-foreground">Personalized attention with customized learning plans tailored to individual needs and learning pace.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Small Group Sessions</h4>
                    <p className="text-muted-foreground">Collaborative learning environment with 2-4 students, encouraging peer interaction and shared problem-solving.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center">
                    <Play className="h-6 w-6 text-warning" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Online Sessions</h4>
                    <p className="text-muted-foreground">Flexible online tutoring with interactive whiteboards and digital resources for remote learning.</p>
                  </div>
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

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Choose the program that best fits your needs and take the first step 
            towards academic excellence with MBEST.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" variant="secondary">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
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