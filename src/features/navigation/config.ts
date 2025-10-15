import { 
  LayoutDashboard, 
  Calendar, 
  Library, 
  CreditCard, 
  MessageSquare, 
  Users, 
  FileText, 
  BookOpen, 
  PenTool,
  GraduationCap,
  Bell,
  BarChart3,
  Receipt,
  ClipboardCheck
} from 'lucide-react';
import { UserRole } from '@/lib/types/auth';

export interface NavItem {
  href: string;
  icon: typeof LayoutDashboard;
  label: string;
  description?: string;
  badge?: string | number;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navByRole: Record<UserRole, NavSection[]> = {
  admin: [
    {
      title: 'Overview',
      items: [
        { 
          href: '/admin', 
          icon: LayoutDashboard, 
          label: 'Dashboard',
          description: 'System overview and analytics'
        },
        { 
          href: '/admin/analytics', 
          icon: BarChart3, 
          label: 'Analytics',
          description: 'Detailed reports and insights'
        },
      ]
    },
    {
      title: 'Management',
      items: [
        { 
          href: '/admin/users', 
          icon: Users, 
          label: 'Users',
          description: 'Manage students, tutors, and parents'
        },
        { 
          href: '/admin/classes', 
          icon: Calendar, 
          label: 'Classes',
          description: 'Course schedules and enrollment'
        },
        { 
          href: '/admin/resources', 
          icon: Library, 
          label: 'Resources',
          description: 'Educational materials and content'
        },
        { 
          href: '/admin/attendance', 
          icon: ClipboardCheck, 
          label: 'Attendance',
          description: 'Attendance records and timesheets'
        },
      ]
    },
    {
      title: 'Financial',
      items: [
        { 
          href: '/admin/billing', 
          icon: CreditCard, 
          label: 'Billing',
          description: 'Invoices and payment management'
        },
        { 
          href: '/admin/revenue', 
          icon: Receipt, 
          label: 'Revenue',
          description: 'Financial reports and analytics'
        },
      ]
    },
    {
      title: 'Communication',
      items: [
        { 
          href: '/admin/messaging', 
          icon: MessageSquare, 
          label: 'Messaging',
          badge: 5
        },
        { 
          href: '/admin/notifications', 
          icon: Bell, 
          label: 'Notifications'
        },
      ]
    }
  ],

  tutor: [
    {
      title: 'Overview',
      items: [
        { 
          href: '/tutor', 
          icon: LayoutDashboard, 
          label: 'Dashboard',
          description: 'Your teaching overview'
        },
      ]
    },
    {
      title: 'Teaching',
      items: [
        { 
          href: '/tutor/classes', 
          icon: Calendar, 
          label: 'My Classes',
          description: 'Your assigned courses'
        },
        { 
          href: '/tutor/assignments', 
          icon: PenTool, 
          label: 'Assignments',
          description: 'Create and grade assignments',
          badge: 3
        },
        { 
          href: '/tutor/students', 
          icon: GraduationCap, 
          label: 'Students',
          description: 'View student progress'
        },
        { 
          href: '/tutor/attendance', 
          icon: ClipboardCheck, 
          label: 'Attendance',
          description: 'Mark attendance and track hours'
        },
      ]
    },
    {
      title: 'Content',
      items: [
        { 
          href: '/tutor/resources', 
          icon: Library, 
          label: 'Resources',
          description: 'Course materials and uploads'
        },
      ]
    },
    {
      title: 'Communication',
      items: [
        { 
          href: '/tutor/messaging', 
          icon: MessageSquare, 
          label: 'Messages',
          badge: 2
        },
      ]
    }
  ],

  student: [
    {
      title: 'Overview',
      items: [
        { 
          href: '/student', 
          icon: LayoutDashboard, 
          label: 'Dashboard',
          description: 'Your learning progress'
        },
      ]
    },
    {
      title: 'Learning',
      items: [
        { 
          href: '/student/classes', 
          icon: BookOpen, 
          label: 'My Classes',
          description: 'Enrolled courses'
        },
        { 
          href: '/student/assignments', 
          icon: FileText, 
          label: 'Assignments',
          description: 'Due and completed work',
          badge: 'Due'
        },
        { 
          href: '/student/grades', 
          icon: BarChart3, 
          label: 'Grades',
          description: 'Academic performance'
        },
        { 
          href: '/student/attendance', 
          icon: ClipboardCheck, 
          label: 'Attendance',
          description: 'View your attendance records'
        },
      ]
    },
    {
      title: 'Resources',
      items: [
        { 
          href: '/student/resources', 
          icon: Library, 
          label: 'Library',
          description: 'Course materials and resources'
        },
      ]
    },
    {
      title: 'Communication',
      items: [
        { 
          href: '/student/messaging', 
          icon: MessageSquare, 
          label: 'Messages',
          badge: 1
        },
      ]
    }
  ],

  parent: [
    {
      title: 'Overview',
      items: [
        { 
          href: '/parent', 
          icon: LayoutDashboard, 
          label: 'Dashboard',
          description: "Your child's progress"
        },
      ]
    },
    {
      title: 'Academic',
      items: [
        { 
          href: '/parent/classes', 
          icon: Calendar, 
          label: 'Classes',
          description: "Child's enrolled courses"
        },
        { 
          href: '/parent/assignments', 
          icon: FileText, 
          label: 'Assignments',
          description: 'Track homework and projects'
        },
        { 
          href: '/parent/grades', 
          icon: BarChart3, 
          label: 'Grades',
          description: 'Academic performance overview'
        },
        { 
          href: '/parent/attendance', 
          icon: ClipboardCheck, 
          label: 'Attendance',
          description: 'Monitor class attendance'
        },
      ]
    },
    {
      title: 'Resources',
      items: [
        { 
          href: '/parent/resources', 
          icon: Library, 
          label: 'Resources',
          description: 'Course materials and library'
        },
      ]
    },
    {
      title: 'Financial',
      items: [
        { 
          href: '/parent/billing', 
          icon: CreditCard, 
          label: 'Billing',
          description: 'Invoices and payments',
          badge: 'Due'
        },
      ]
    },
    {
      title: 'Communication',
      items: [
        { 
          href: '/parent/messages', 
          icon: MessageSquare, 
          label: 'Messages',
          description: 'Communication with tutors',
          badge: 2
        },
        { 
          href: '/parent/notifications', 
          icon: Bell, 
          label: 'Notifications',
          description: 'Important updates'
        },
      ]
    }
  ]
};

/**
 * Get navigation configuration for a specific role
 */
export function getNavForRole(role: UserRole): NavSection[] {
  return navByRole[role] || [];
}

/**
 * Get the portal root path for a role
 */
export function getPortalRoot(role: UserRole): string {
  switch (role) {
    case 'admin':
      return '/admin';
    case 'tutor':
      return '/tutor';
    case 'student':
      return '/student';
    case 'parent':
      return '/parent';
    default:
      return '/';
  }
}

/**
 * Check if a path belongs to a specific role's portal
 */
export function isPortalPath(path: string, role: UserRole): boolean {
  const portalRoot = getPortalRoot(role);
  return path.startsWith(portalRoot);
}