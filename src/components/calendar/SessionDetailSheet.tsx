import { Session } from '@/lib/types/session';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatTimeDisplay, calculateDuration } from '@/lib/utils/sessionUtils';
import { 
  Calendar, 
  Clock, 
  User, 
  Users, 
  BookOpen, 
  MapPin, 
  FileText, 
  CheckCircle, 
  DollarSign,
  Edit
} from 'lucide-react';
import { format } from 'date-fns';

interface SessionDetailSheetProps {
  session: Session | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onEdit?: (session: Session) => void;
  onAddLessonNote?: (session: Session) => void;
  onMarkAttendance?: (session: Session) => void;
  onMarkComplete?: (session: Session) => void;
  onMarkReadyForInvoicing?: (session: Session) => void;
}

export function SessionDetailSheet({
  session,
  open,
  onOpenChange,
  onEdit,
  onAddLessonNote,
  onMarkAttendance,
  onMarkComplete,
  onMarkReadyForInvoicing,
}: SessionDetailSheetProps) {
  if (!session) return null;

  const duration = calculateDuration(session.startTime, session.endTime);

  const getStatusBadge = (status: string) => {
    const variants: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
      planned: 'outline',
      completed: 'default',
      cancelled: 'destructive',
      'no-show': 'destructive',
      rescheduled: 'secondary',
    };
    return <Badge variant={variants[status] || 'outline'}>{status}</Badge>;
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Session Details</span>
            {getStatusBadge(session.status)}
          </SheetTitle>
          <SheetDescription>
            View and manage session information
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 mt-6">
          {/* Basic Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Date</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(session.date), 'EEEE, MMMM d, yyyy')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Time</p>
                <p className="text-sm text-muted-foreground">
                  {formatTimeDisplay(session.startTime)} - {formatTimeDisplay(session.endTime)} ({duration}h)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Teacher</p>
                <p className="text-sm text-muted-foreground">{session.teacherName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Students ({session.studentNames.length})</p>
                <div className="space-y-1">
                  {session.studentNames.map((name, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">• {name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Session Details */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Subject & Year</p>
                <p className="text-sm text-muted-foreground">
                  {session.subject} - Year {session.yearLevel}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground capitalize">{session.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div>
                <p className="text-sm font-medium">Session Type</p>
                <Badge variant="outline">{session.sessionType}</Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Status Indicators */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Lesson Note</span>
              </div>
              <Badge variant={session.lessonNote ? 'default' : 'outline'}>
                {session.lessonNote ? 'Added' : 'Not Added'}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Attendance</span>
              </div>
              <Badge variant={session.attendanceMarked ? 'default' : 'outline'}>
                {session.attendanceMarked ? 'Marked' : 'Not Marked'}
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Invoicing</span>
              </div>
              <Badge variant={session.readyForInvoicing ? 'default' : 'outline'}>
                {session.readyForInvoicing ? 'Ready' : 'Not Ready'}
              </Badge>
            </div>
          </div>

          <Separator />

          {/* Quick Actions */}
          <div className="space-y-2">
            <p className="text-sm font-medium mb-3">Quick Actions</p>
            
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={() => onEdit?.(session)}
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Session
            </Button>

            {!session.lessonNote && (
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onAddLessonNote?.(session)}
              >
                <FileText className="mr-2 h-4 w-4" />
                Add Lesson Note
              </Button>
            )}

            {!session.attendanceMarked && (
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onMarkAttendance?.(session)}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Mark Attendance
              </Button>
            )}

            {session.status !== 'completed' && (
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onMarkComplete?.(session)}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Mark Complete
              </Button>
            )}

            {session.status === 'completed' && !session.readyForInvoicing && (
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => onMarkReadyForInvoicing?.(session)}
              >
                <DollarSign className="mr-2 h-4 w-4" />
                Mark Ready for Invoicing
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
