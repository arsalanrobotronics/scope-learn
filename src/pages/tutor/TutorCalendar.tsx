import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Video, Users } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

interface LessonEvent {
  id: string;
  studentName: string;
  time: string;
  duration: number;
  mode: 'online' | 'offline';
  status: 'scheduled' | 'completed' | 'cancelled';
  color: string;
}

export default function TutorCalendar() {
  const { toast } = useToast();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [isAddLessonOpen, setIsAddLessonOpen] = useState(false);
  const [lessons, setLessons] = useState<Record<string, LessonEvent[]>>({
    '2025-01-15': [
      { id: '1', studentName: 'Sampoorna Arora', time: '04:00 PM', duration: 1, mode: 'online', status: 'scheduled', color: '#1E7838' },
      { id: '2', studentName: 'Xavier Dean', time: '04:30 PM', duration: 1.5, mode: 'online', status: 'scheduled', color: '#2563eb' },
      { id: '3', studentName: 'Ethan Sutton', time: '06:00 PM', duration: 1, mode: 'offline', status: 'scheduled', color: '#9333ea' },
      { id: '4', studentName: 'Natasha Askary', time: '06:30 PM', duration: 1, mode: 'online', status: 'scheduled', color: '#dc2626' },
    ],
    '2025-01-16': [
      { id: '5', studentName: 'Rhianna Georgiou', time: '04:30 PM', duration: 1, mode: 'offline', status: 'scheduled', color: '#ea580c' },
      { id: '6', studentName: 'Sophia Song', time: '06:00 PM', duration: 1, mode: 'online', status: 'scheduled', color: '#16a34a' },
    ],
    '2025-01-17': [
      { id: '7', studentName: 'Xavier Dean', time: '09:30 AM', duration: 1.5, mode: 'online', status: 'scheduled', color: '#2563eb' },
    ],
  });

  const [newLesson, setNewLesson] = useState({
    student: '',
    date: '',
    time: '',
    duration: '1',
    mode: 'online' as 'online' | 'offline',
  });

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('tutor-lessons') : null;
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Record<string, LessonEvent[]>;
        setLessons(prev => ({ ...prev, ...parsed }));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('tutor-lessons', JSON.stringify(lessons));
  }, [lessons]);

  const getDayLessons = (day: Date) => {
    const dateKey = format(day, 'yyyy-MM-dd');
    return lessons[dateKey] || [];
  };

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const getStudentDisplayName = (value: string) => {
    switch (value) {
      case 'sampoorna':
        return 'Sampoorna Arora';
      case 'xavier':
        return 'Xavier Dean';
      case 'ethan':
        return 'Ethan Sutton';
      case 'natasha':
        return 'Natasha Askary';
      case 'sophia':
        return 'Sophia Song';
      default:
        return value;
    }
  };

  const getLessonColor = (day: Date) => {
    const today = new Date();
    const dayStart = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    if (dayStart < todayStart) {
      return '#9ca3af';
    }
    return '#16a34a';
  };

  const handleAddLesson = () => {
    if (!newLesson.student || !newLesson.date || !newLesson.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    const dateKey = newLesson.date;
    const day = new Date(newLesson.date);
    const color = getLessonColor(day);
    const lesson: LessonEvent = {
      id: `${Date.now()}`,
      studentName: getStudentDisplayName(newLesson.student),
      time: newLesson.time,
      duration: parseFloat(newLesson.duration),
      mode: newLesson.mode,
      status: 'scheduled',
      color,
    };

    setLessons(prev => ({
      ...prev,
      [dateKey]: prev[dateKey] ? [...prev[dateKey], lesson] : [lesson],
    }));

    toast({
      title: "Lesson Added",
      description: `Lesson scheduled for ${newLesson.student} successfully.`,
    });
    setNewLesson({ student: '', date: '', time: '', duration: '1', mode: 'online' });
    setIsAddLessonOpen(false);
  };

  const selectedDayLessons = selectedDate ? getDayLessons(selectedDate) : [];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your lesson schedule
          </p>
        </div>
        <Dialog open={isAddLessonOpen} onOpenChange={setIsAddLessonOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Lesson
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Schedule New Lesson</DialogTitle>
              <DialogDescription>
                Add a new lesson to your calendar
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="student">Student</Label>
                <Select value={newLesson.student} onValueChange={(value) => setNewLesson({ ...newLesson, student: value })}>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sampoorna">Sampoorna Arora</SelectItem>
                    <SelectItem value="xavier">Xavier Dean</SelectItem>
                    <SelectItem value="ethan">Ethan Sutton</SelectItem>
                    <SelectItem value="natasha">Natasha Askary</SelectItem>
                    <SelectItem value="sophia">Sophia Song</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={newLesson.date}
                  onChange={(e) => setNewLesson({ ...newLesson, date: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={newLesson.time}
                  onChange={(e) => setNewLesson({ ...newLesson, time: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration (hours)</Label>
                <Select value={newLesson.duration} onValueChange={(value) => setNewLesson({ ...newLesson, duration: value })}>
                  <SelectTrigger id="duration">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.5">30 minutes</SelectItem>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="1.5">1.5 hours</SelectItem>
                    <SelectItem value="2">2 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mode">Mode</Label>
                <Select value={newLesson.mode} onValueChange={(value: 'online' | 'offline') => setNewLesson({ ...newLesson, mode: value })}>
                  <SelectTrigger id="mode">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="offline">In-Person</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddLessonOpen(false)}>Cancel</Button>
              <Button onClick={handleAddLesson}>Add Lesson</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">
                {format(currentDate, 'MMMM yyyy')}
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={handlePrevMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={handleNextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
              
              {daysInMonth.map((day, idx) => {
                const dayLessons = getDayLessons(day);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isCurrentMonth = isSameMonth(day, currentDate);
                
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      min-h-[80px] p-2 rounded-lg border transition-colors
                      ${isSelected ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}
                      ${!isCurrentMonth ? 'opacity-40' : ''}
                    `}
                  >
                    <div className="text-sm font-medium mb-1">{format(day, 'd')}</div>
                    <div className="space-y-1">
                      {dayLessons.slice(0, 2).map(lesson => (
                        <div
                          key={lesson.id}
                          className="text-[10px] rounded px-1 py-0.5 truncate text-white"
                          style={{ backgroundColor: lesson.color }}
                          title={`${lesson.studentName} • ${lesson.time} • ${lesson.duration}h • ${lesson.mode}`}
                        >
                          {lesson.time} {lesson.studentName.split(' ')[0]}
                        </div>
                      ))}
                      {dayLessons.length > 2 && (
                        <div className="text-[10px] text-muted-foreground">
                          +{dayLessons.length - 2} more
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Selected Day Details */}
        <Card>
          <CardHeader>
            <CardTitle>
              {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a date'}
            </CardTitle>
            <CardDescription>
              {selectedDayLessons.length} lesson{selectedDayLessons.length !== 1 ? 's' : ''} scheduled
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedDayLessons.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No lessons scheduled for this day
                </p>
              ) : (
                selectedDayLessons.map(lesson => (
                  <div key={lesson.id} className="space-y-2 p-3 rounded-lg border">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lesson.color }}
                        />
                        <span className="font-medium">{lesson.studentName}</span>
                      </div>
                      <Badge variant={lesson.mode === 'online' ? 'default' : 'secondary'}>
                        {lesson.mode}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {lesson.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {lesson.duration}h
                      </div>
                    </div>
                    {lesson.mode === 'online' ? (
                      <div className="flex items-center gap-1 text-xs text-primary">
                        <Video className="h-3 w-3" />
                        Online Session
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        In-Person Session
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
