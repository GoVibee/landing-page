"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function NotificationsLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
