"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
