"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
