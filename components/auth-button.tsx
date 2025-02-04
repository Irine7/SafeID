"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "./auth-provider";
import { LogIn, LogOut } from "lucide-react";

export function AuthButton() {
  const { isAuthenticated, login, logout, loading } = useAuth();

  if (loading) {
    return (
      <Button disabled variant="outline">
        Loading...
      </Button>
    );
  }

  if (isAuthenticated) {
    return (
      <Button onClick={() => logout()} variant="outline">
        <LogOut className="mr-2 h-4 w-4" />
        Disconnect
      </Button>
    );
  }

  return (
    <Button onClick={() => login()}>
      <LogIn className="mr-2 h-4 w-4" />
      Connect Identity
    </Button>
  );
}