"use client";

import ProtectedRoute from "../../protectedRoutes/protectedRoute";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
