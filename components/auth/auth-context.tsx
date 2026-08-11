"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type UserRole = "Guest" | "Recruit" | "Officer" | "Admin";

export type AuthUser = {
  id: string;
  name: string;
  role: UserRole;
  email: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (user: AuthUser) => void;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
};

const defaultUser: AuthUser = {
  id: "mock-admin",
  name: "Commander Rivera",
  role: "Admin",
  email: "commander@lmsportal.local",
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (nextUser: AuthUser) => {
    setUser(nextUser);
  };

  const logout = () => {
    setUser(null);
  };

  const hasRole = (role: UserRole) => user?.role === role;

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
      hasRole,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export function mockUsers(): AuthUser[] {
  return [
    defaultUser,
    {
      id: "mock-officer",
      name: "Lieutenant Brooks",
      role: "Officer",
      email: "brooks@lmsportal.local",
    },
    {
      id: "mock-recruit",
      name: "Cadet Chen",
      role: "Recruit",
      email: "chen@lmsportal.local",
    },
  ];
}
