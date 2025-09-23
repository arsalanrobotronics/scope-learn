import { useState } from 'react';
import { Search, Mail, Phone, MoreHorizontal, FileText, MessageSquare, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import classesData from '@/data/classes.json';
import usersData from '@/data/users.json';

interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrollmentId: string;
  grade: string;
  classes: string[];
  overallGrade: number;
  attendance: number;
  assignments: {
    completed: number;
    total: number;
  };
  status: 'active' | 'inactive' | 'warning';
}

export default function TutorStudents() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock students data based on classes
  const myClasses = classesData.filter(cls => cls.tutorId === 'tutor-1');
  const [students] = useState<Student[]>([
    {
      id: 'student-1',
      name: 'Emma Thompson',
      email: 'emma.thompson@student.edu',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      enrollmentId: 'ST2024001',
      grade: '12',
      classes: ['class-1', 'class-2'],
      overallGrade: 85,
      attendance: 92,
      assignments: { completed: 8, total: 10 },
      status: 'active'
    },
    {
      id: 'student-2',
      name: 'James Rodriguez',
      email: 'james.rodriguez@student.edu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      enrollmentId: 'ST2024002',
      grade: '11',
      classes: ['class-1'],
      overallGrade: 78,
      attendance: 88,
      assignments: { completed: 6, total: 8 },
      status: 'active'
    },
    {
      id: 'student-3',
      name: 'Sarah Chen',
      email: 'sarah.chen@student.edu',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      enrollmentId: 'ST2024003',
      grade: '12',
      classes: ['class-2'],
      overallGrade: 72,
      attendance: 76,
      assignments: { completed: 4, total: 8 },
      status: 'warning'
    },
    {
      id: 'student-4',
      name: 'Michael Park',
      email: 'michael.park@student.edu',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      enrollmentId: 'ST2024004',
      grade: '11',
      classes: ['class-1', 'class-2'],
      overallGrade: 91,
      attendance: 95,
      assignments: { completed: 10, total: 10 },
      status: 'active'
    }
  ]);

  const getStatusColor = (status: Student['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 90) return 'text-green-600 dark:text-green-400';
    if (grade >= 80) return 'text-blue-600 dark:text-blue-400';
    if (grade >= 70) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.enrollmentId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesClass = selectedClass === 'all' || student.classes.includes(selectedClass);
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;

    return matchesSearch && matchesClass && matchesStatus;
  });

  const handleSendMessage = (studentName: string) => {
    toast({
      title: "Message Sent",
      description: `Message sent to ${studentName}`,
    });
  };

  const handleViewProgress = (studentName: string) => {
    toast({
      title: "Progress Report",
      description: `Opening detailed progress for ${studentName}`,
    });
  };

  const stats = {
    totalStudents: students.length,
    activeStudents: students.filter(s => s.status === 'active').length,
    warningStudents: students.filter(s => s.status === 'warning').length,
    avgGrade: Math.round(students.reduce((acc, s) => acc + s.overallGrade, 0) / students.length),
  };

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Students</h1>
          <p className="text-muted-foreground">
            Monitor student progress and manage your class roster
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalStudents}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.activeStudents}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Need Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.warningStudents}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getGradeColor(stats.avgGrade)}`}>
              {stats.avgGrade}%
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Student List</TabsTrigger>
          <TabsTrigger value="performance">Performance Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search students by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
                {myClasses.map(cls => (
                  <SelectItem key={cls.id} value={cls.id}>{cls.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Students Grid */}
          <div className="grid gap-4">
            {filteredStudents.map((student) => (
              <Card key={student.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback>
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>

                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold">{student.name}</h3>
                          <p className="text-sm text-muted-foreground">{student.enrollmentId}</p>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            {student.email}
                          </div>
                          <div>Grade {student.grade}</div>
                          <div>
                            Classes: {student.classes.map(classId => {
                              const cls = classesData.find(c => c.id === classId);
                              return cls?.code;
                            }).join(', ')}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <Badge className={getStatusColor(student.status)}>
                            {student.status}
                          </Badge>
                          <div className="text-sm">
                            Grade: <span className={getGradeColor(student.overallGrade)}>{student.overallGrade}%</span>
                          </div>
                          <div className="text-sm">
                            Attendance: {student.attendance}%
                          </div>
                          <div className="text-sm">
                            Assignments: {student.assignments.completed}/{student.assignments.total}
                          </div>
                        </div>
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleViewProgress(student.name)}>
                          <TrendingUp className="mr-2 h-4 w-4" />
                          View Progress
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleSendMessage(student.name)}>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Send Message
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FileText className="mr-2 h-4 w-4" />
                          View Assignments
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Students with highest grades</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {students
                  .sort((a, b) => b.overallGrade - a.overallGrade)
                  .slice(0, 3)
                  .map((student, index) => (
                    <div key={student.id} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                        {index + 1}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback className="text-xs">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">Grade {student.grade}</p>
                      </div>
                      <div className={`text-sm font-medium ${getGradeColor(student.overallGrade)}`}>
                        {student.overallGrade}%
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Attention</CardTitle>
                <CardDescription>Students requiring support</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {students
                  .filter(s => s.status === 'warning' || s.overallGrade < 75)
                  .slice(0, 3)
                  .map((student) => (
                    <div key={student.id} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar} alt={student.name} />
                        <AvatarFallback className="text-xs">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {student.assignments.completed}/{student.assignments.total} assignments • {student.attendance}% attendance
                        </p>
                      </div>
                      <Badge className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}