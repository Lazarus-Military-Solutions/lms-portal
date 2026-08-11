"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { mockUsers, useAuth } from "./auth-context";

export function AuthDemo() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <Card>
      <p className="text-sm text-emerald-400">Mock authentication</p>
      <div className="mt-4 space-y-3">
        <p className="text-sm text-slate-400">
          {isAuthenticated && user
            ? `Signed in as ${user.name} (${user.role})`
            : "No active session. Select a mock account to continue."}
        </p>
        <div className="flex flex-wrap gap-2">
          {mockUsers().map((mockUser) => (
            <Button key={mockUser.id} variant="secondary" onClick={() => login(mockUser)}>
              {mockUser.role}
            </Button>
          ))}
        </div>
        {isAuthenticated ? <Button variant="ghost" onClick={logout}>Sign out</Button> : null}
      </div>
    </Card>
  );
}
