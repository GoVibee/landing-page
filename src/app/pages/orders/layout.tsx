"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function OrderLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
