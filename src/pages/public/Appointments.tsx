import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  GraduationCap, 
  Calendar, 
  Clock, 
  Users, 
  CreditCard,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  CalendarDays,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Appointments() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    yearLevel: '',
    subject: '',
    sessionType: '',
    preferredTime: '',
    message: ''
  });

  const { toast } = useToast();

  const features = [
    {
      title: "Google/Outlook Sync",
      description: "Seamlessly integrate with your existing calendar systems",
      icon: <CalendarDays className="h-6 w-6 text-primary" />
    },
    {
      title: "Multiple Staff Booking",
      description: "Choose from our team of expert tutors based on availability",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Automated Reminders",
      description: "Receive Email and SMS reminders before your sessions",
      icon: <Smartphone className="h-6 w-6 text-primary" />
    },
    {
      title: "Payment Integration",
      description: "Secure online payment processing for bookings",
      icon: <CreditCard className="h-6 w-6 text-primary" />
    }
  ];

  const timeSlots = [
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM", 
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName || !formData.email || !formData.phone || !formData.subject) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      yearLevel: '',
      subject: '',
      sessionType: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              <Link to="/appointments" className="text-primary font-medium">Booking</Link>
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
            Easy Online Booking
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Book Your
            <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Schedule your free consultation and take the first step towards 
            academic excellence with our expert tutors.
          </p>
        </div>
      </section>

      {/* Booking Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-4">Booking Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced booking system makes scheduling sessions convenient and hassle-free.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Book Your Free Consultation
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll contact you within 24 hours to schedule your session.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange('studentName', e.target.value)}
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      placeholder="Enter parent/guardian name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="yearLevel">Year Level</Label>
                    <Select value={formData.yearLevel} onValueChange={(value) => handleInputChange('yearLevel', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="year1">Year 1</SelectItem>
                        <SelectItem value="year2">Year 2</SelectItem>
                        <SelectItem value="year3">Year 3</SelectItem>
                        <SelectItem value="year4">Year 4</SelectItem>
                        <SelectItem value="year5">Year 5</SelectItem>
                        <SelectItem value="year6">Year 6</SelectItem>
                        <SelectItem value="year7">Year 7</SelectItem>
                        <SelectItem value="year8">Year 8</SelectItem>
                        <SelectItem value="year9">Year 9</SelectItem>
                        <SelectItem value="year10">Year 10</SelectItem>
                        <SelectItem value="year11">Year 11</SelectItem>
                        <SelectItem value="year12">Year 12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="oc-prep">OC Test Preparation</SelectItem>
                        <SelectItem value="selective">Selective School Prep</SelectItem>
                        <SelectItem value="hsc">HSC Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="sessionType">Session Type</Label>
                    <Select value={formData.sessionType} onValueChange={(value) => handleInputChange('sessionType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-on-one">One-on-One</SelectItem>
                        <SelectItem value="small-group">Small Group (2-4 students)</SelectItem>
                        <SelectItem value="online">Online Session</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about specific areas of focus, learning goals, or any other relevant information..."
                    rows={4}
                  />
                </div>

                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-primary text-white"
                  >
                    Submit Booking Request
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">What Happens Next?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">1. We'll Contact You</h4>
              <p className="text-muted-foreground">Our team will reach out within 24 hours to discuss your needs and schedule your consultation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-success" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">2. Schedule Your Session</h4>
              <p className="text-muted-foreground">We'll find a convenient time that works for you and match you with the perfect tutor.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-warning" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">3. Begin Your Journey</h4>
              <p className="text-muted-foreground">Start your personalized learning journey with expert guidance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Need Help with Booking?
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our friendly team is here to help you with any questions about scheduling or our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-white">
              <Phone className="h-5 w-5" />
              <span className="text-lg">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Mail className="h-5 w-5" />
              <span className="text-lg">info@mbest.edu</span>
            </div>
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