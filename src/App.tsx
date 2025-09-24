import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { MainLayout } from "@/components/common/MainLayout";
import { useSession } from "@/lib/store/authStore";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminClasses from "./pages/admin/AdminClasses";
import AdminResources from "./pages/admin/AdminResources";
import AdminBilling from "./pages/admin/AdminBilling";
import AdminNotifications from "./pages/admin/AdminNotifications";
import AdminUsers from "./pages/admin/AdminUsers";
import StudentDashboard from "./pages/student/StudentDashboard";
import TutorDashboard from "./pages/tutor/TutorDashboard";
import ParentDashboard from "./pages/parent/ParentDashboard";
import StudentClasses from "./pages/student/StudentClasses";
import StudentAssignments from "./pages/student/StudentAssignments";
import StudentGrades from "./pages/student/StudentGrades";
import StudentResources from "./pages/student/StudentResources";
import StudentMessaging from "./pages/student/StudentMessaging";
import TutorClasses from "./pages/tutor/TutorClasses";
import TutorStudents from "./pages/tutor/TutorStudents";
import TutorAssignments from "./pages/tutor/TutorAssignments";
import TutorResources from "./pages/tutor/TutorResources";
import TutorMessaging from "./pages/tutor/TutorMessaging";
import ProfileSettings from "./pages/profile/ProfileSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  const session = useSession();

  // Redirect to appropriate portal if logged in
  if (session) {
    return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${session.role}`} replace />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/analytics" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminAnalytics />
            </ProtectedRoute>
          } />
          <Route path="/admin/classes" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminClasses />
            </ProtectedRoute>
          } />
          <Route path="/admin/resources" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminResources />
            </ProtectedRoute>
          } />
          <Route path="/admin/billing" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminBilling />
            </ProtectedRoute>
          } />
          <Route path="/admin/notifications" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminNotifications />
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminUsers />
            </ProtectedRoute>
          } />
          
          {/* Student Routes */}
          <Route path="/student" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          } />
          
          {/* Tutor Routes */}
          <Route path="/tutor" element={
            <ProtectedRoute allowedRoles={['tutor']}>
              <TutorDashboard />
            </ProtectedRoute>
          } />
          
          {/* Parent Routes */}
          <Route path="/parent" element={
            <ProtectedRoute allowedRoles={['parent']}>
              <ParentDashboard />
            </ProtectedRoute>
          } />
          
          {/* Student Sub-routes */}
          <Route path="/student/classes" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentClasses />
            </ProtectedRoute>
          } />
          <Route path="/student/assignments" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentAssignments />
            </ProtectedRoute>
          } />
          <Route path="/student/grades" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentGrades />
            </ProtectedRoute>
          } />
          <Route path="/student/resources" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentResources />
            </ProtectedRoute>
          } />
          <Route path="/student/messaging" element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentMessaging />
            </ProtectedRoute>
          } />
          
          {/* Tutor Sub-routes */}
          <Route path="/tutor/classes" element={
            <ProtectedRoute allowedRoles={['tutor']}>
              <TutorClasses />
            </ProtectedRoute>
          } />
          <Route path="/tutor/students" element={
            <ProtectedRoute allowedRoles={['tutor']}>
              <TutorStudents />
            </ProtectedRoute>
          } />
          <Route path="/tutor/assignments" element={
            <ProtectedRoute allowedRoles={['tutor']}>
              <TutorAssignments />
            </ProtectedRoute>
          } />
          <Route path="/tutor/resources" element={
            <ProtectedRoute allowedRoles={['tutor']}>
              <TutorResources />
            </ProtectedRoute>
          } />
          <Route path="/tutor/messaging" element={
            <ProtectedRoute allowedRoles={['tutor']}>
              <TutorMessaging />
            </ProtectedRoute>
          } />
          
          {/* Profile Route - Available to all authenticated users */}
          <Route path="/profile" element={
            <ProtectedRoute allowedRoles={['student', 'tutor', 'parent', 'admin']}>
              <ProfileSettings />
            </ProtectedRoute>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    );
  }

  // Auth routes for non-authenticated users
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Navigate to="/sign-in" replace />} />
      <Route path="*" element={<Navigate to="/sign-in" replace />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="lms-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthGuard>
            <AppRoutes />
          </AuthGuard>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
