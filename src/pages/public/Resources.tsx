import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  GraduationCap, 
  Download, 
  BookOpen, 
  FileText, 
  Video,
  Calendar,
  Search,
  Filter,
  Clock,
  Users,
  Star,
  ArrowRight,
  Play,
  Image,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      title: "Year 10 Algebra Fundamentals",
      category: "Worksheets",
      subject: "Mathematics",
      yearLevel: "Year 10",
      description: "Comprehensive worksheet covering algebraic expressions, equations, and problem-solving techniques.",
      downloads: 1247,
      rating: 4.8,
      type: "pdf",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "HSC Advanced Mathematics Past Papers",
      category: "Past Papers",
      subject: "Mathematics",
      yearLevel: "Year 12",
      description: "Collection of HSC Advanced Mathematics past papers with detailed solutions and marking criteria.",
      downloads: 2156,
      rating: 4.9,
      type: "pdf",
      icon: <FileText className="h-6 w-6 text-warning" />
    },
    {
      title: "Geometry Visualization Guide",
      category: "Study Guides",
      subject: "Mathematics",
      yearLevel: "Years 8-10",
      description: "Visual guide to understanding geometric concepts with interactive diagrams and examples.",
      downloads: 892,
      rating: 4.7,
      type: "pdf",
      icon: <BookOpen className="h-6 w-6 text-success" />
    },
    {
      title: "OC Test Practice Questions",
      category: "Practice Tests",
      subject: "General Ability",
      yearLevel: "Year 4-5",
      description: "Comprehensive practice questions for OC test preparation with solutions and time management tips.",
      downloads: 1834,
      rating: 4.9,
      type: "pdf",
      icon: <Award className="h-6 w-6 text-primary" />
    },
    {
      title: "English Comprehension Strategies",
      category: "Study Guides",
      subject: "English",
      yearLevel: "Years 1-6",
      description: "Essential strategies for improving reading comprehension and vocabulary development.",
      downloads: 1456,
      rating: 4.6,
      type: "pdf",
      icon: <BookOpen className="h-6 w-6 text-success" />
    },
    {
      title: "Science Lab Reports Template",
      category: "Templates",
      subject: "Science",
      yearLevel: "Years 7-10",
      description: "Professional template for writing scientific lab reports with examples and guidelines.",
      downloads: 723,
      rating: 4.5,
      type: "pdf",
      icon: <FileText className="h-6 w-6 text-primary" />
    }
  ];

  const blogPosts = [
    {
      title: "5 Effective Study Techniques for Mathematics",
      date: "March 15, 2024",
      category: "Study Tips",
      excerpt: "Discover proven study methods that help students master mathematical concepts more effectively.",
      readTime: "5 min read",
      image: "📚"
    },
    {
      title: "Preparing Your Child for the OC Test",
      date: "March 10, 2024", 
      category: "Exam Prep",
      excerpt: "A comprehensive guide for parents on how to support their children through OC test preparation.",
      readTime: "8 min read",
      image: "🎯"
    },
    {
      title: "Building Mathematical Confidence in Primary School",
      date: "March 5, 2024",
      category: "Primary Education",
      excerpt: "Strategies to help young learners develop a positive relationship with mathematics from an early age.",
      readTime: "6 min read",
      image: "🌟"
    }
  ];

  const upcomingEvents = [
    {
      title: "Free HSC Mathematics Workshop",
      date: "April 15, 2024",
      time: "2:00 PM - 4:00 PM",
      type: "Workshop",
      description: "Intensive workshop covering key HSC mathematics topics and exam strategies."
    },
    {
      title: "Parent Information Session",
      date: "April 20, 2024",
      time: "7:00 PM - 8:30 PM",
      type: "Information Session",
      description: "Learn about our teaching methods and how to support your child's learning journey."
    },
    {
      title: "OC Test Preparation Seminar", 
      date: "April 25, 2024",
      time: "10:00 AM - 12:00 PM",
      type: "Seminar",
      description: "Comprehensive seminar on OC test preparation strategies and tips for success."
    }
  ];

  const categories = ['all', 'Worksheets', 'Past Papers', 'Study Guides', 'Practice Tests', 'Templates'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/appointments" className="text-foreground hover:text-primary transition-colors">Booking</Link>
              <Link to="/resources" className="text-primary font-medium">Resources</Link>
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
            Learning Hub & Resources
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Learning
            <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Access our comprehensive collection of study materials, practice tests, 
            and educational resources designed to support your learning journey.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Downloadable Resources</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              High-quality educational materials created by our expert tutors to support your studies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    {resource.icon}
                    <Badge variant="outline">{resource.category}</Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>{resource.subject}</span>
                    <span>•</span>
                    <span>{resource.yearLevel}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Latest from Our Blog</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Educational insights, study tips, and news from the world of tutoring and learning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{post.image}</div>
                  <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                  <h4 className="text-xl font-semibold text-foreground mb-2 leading-tight">{post.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our workshops, seminars, and information sessions to enhance your learning experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">{event.type}</Badge>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{event.title}</h4>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <Button className="w-full" size="sm">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Gallery */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Success Stories Gallery</h3>
            <p className="text-muted-foreground">
              Celebrating our students' achievements and classroom moments.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-primary/20 to-success/20 rounded-lg flex items-center justify-center">
                <Image className="h-12 w-12 text-primary/60" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Want More Personalized Resources?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join our online learning platform for access to personalized study materials, 
            progress tracking, and exclusive content tailored to your learning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn More
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