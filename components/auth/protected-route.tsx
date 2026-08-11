"use client";

import { ReactNode } from "react";
import { Card } from "../ui/card";
import { useAuth } from "./auth-context";

type ProtectedRouteProps = {
  children: ReactNode;
  allowedRoles?: Array<"Guest" | "Recruit" | "Officer" | "Admin">;
  fallback?: ReactNode;
};

export function ProtectedRoute({
  children,
  allowedRoles = ["Guest", "Recruit", "Officer", "Admin"],
  fallback,
}: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated && !allowedRoles.includes("Guest")) {
    return (
      fallback ?? (
        <Card>
          <p className="text-sm text-emerald-400">Access restricted</p>
          <p className="mt-2 text-sm text-slate-400">Sign in to continue to this area.</p>
        </Card>
      )
    );
  }

  if (user && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return (
      fallback ?? (
        <Card>
          <p className="text-sm text-emerald-400">Role limited</p>
          <p className="mt-2 text-sm text-slate-400">Your current mock role cannot view this section.</p>
        </Card>
      )
    );
  }

  return <>{children}</>;
}
