"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
