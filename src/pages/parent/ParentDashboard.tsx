import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; 
import { BookOpen, Calendar, FileText, GraduationCap, Clock, MessageSquare } from "lucide-react";

const ParentDashboard = () => {
  const childInfo = {
    name: "Emma Johnson",
    grade: "Grade 10",
    overallGrade: 87,
    attendanceRate: 95,
  };

  const stats = {
    enrolledClasses: 6,
    activeAssignments: 4,
    completedAssignments: 12,
    upcomingTests: 2,
  };

  const recentGrades = [
    {
      id: "1",
      subject: "Advanced Mathematics",
      assignment: "Calculus Quiz #2",
      grade: 92,
      maxGrade: 100,
      date: "2024-01-15",
      status: "excellent"
    },
    {
      id: "2",
      subject: "Physics Fundamentals", 
      assignment: "Lab Report #3",
      grade: 85,
      maxGrade: 100,
      date: "2024-01-12",
      status: "good"
    },
    {
      id: "3",
      subject: "English Literature",
      assignment: "Essay Analysis",
      grade: 88,
      maxGrade: 100,
      date: "2024-01-10",
      status: "good"
    }
  ];

  const upcomingClasses = [
    {
      id: "1",
      name: "Advanced Mathematics",
      time: "10:00 AM",
      tutor: "Mr. Smith",
      meetingLink: "https://meet.google.com/abc-def-123"
    },
    {
      id: "2",
      name: "Physics Fundamentals", 
      time: "2:00 PM",
      tutor: "Dr. Johnson",
      meetingLink: "https://meet.google.com/ghi-jkl-456"
    }
  ];

  const getGradeColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'bg-green-500';
      case 'good': return 'bg-blue-500';
      case 'average': return 'bg-yellow-500';
      case 'needs-improvement': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Parent Dashboard</h1>
          <p className="text-muted-foreground">Monitoring {childInfo.name}'s academic progress</p>
        </div>
        <Button>
          <MessageSquare className="mr-2 h-4 w-4" />
          Message Tutor
        </Button>
      </div>

      {/* Child Overview */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {childInfo.name} - {childInfo.grade}
          </CardTitle>
          <CardDescription>Academic overview and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Overall Grade</span>
                <span className="text-sm text-muted-foreground">{childInfo.overallGrade}%</span>
              </div>
              <Progress value={childInfo.overallGrade} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Attendance Rate</span>
                <span className="text-sm text-muted-foreground">{childInfo.attendanceRate}%</span>
              </div>
              <Progress value={childInfo.attendanceRate} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Classes</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.enrolledClasses}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeAssignments}</div>
            <p className="text-xs text-muted-foreground">Currently due</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Work</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedAssignments}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Tests</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.upcomingTests}</div>
            <p className="text-xs text-muted-foreground">Next 2 weeks</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Grades */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Grades</CardTitle>
            <CardDescription>Latest assignment and test results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentGrades.map((grade) => (
              <div key={grade.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-semibold">{grade.assignment}</h4>
                  <p className="text-sm text-muted-foreground">{grade.subject}</p>
                  <p className="text-xs text-muted-foreground">Submitted: {grade.date}</p>
                </div>
                <div className="text-right space-y-1">
                  <div className="text-2xl font-bold">{grade.grade}%</div>
                  <Badge 
                    variant="outline" 
                    className={`${getGradeColor(grade.status)} text-white border-0`}
                  >
                    {grade.status.replace('-', ' ')}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Classes scheduled for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingClasses.map((classItem) => (
              <div key={classItem.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-semibold">{classItem.name}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {classItem.time}
                    <span className="mx-2">•</span>
                    <span>with {classItem.tutor}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={classItem.meetingLink} target="_blank" rel="noopener noreferrer">
                    Join Class
                  </a>
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks for parents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Schedule
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" />
              Assignment Progress
            </Button>
            <Button variant="outline">
              <GraduationCap className="mr-2 h-4 w-4" />
              Grade Reports
            </Button>
            <Button variant="outline">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Teachers
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParentDashboard;