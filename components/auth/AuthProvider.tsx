"use client";

import type { ReactNode } from "react";

import { FirebaseAuthProvider } from "@/hooks/useAuth";

export function AuthProvider({ children }: { children: ReactNode }) {
  return <FirebaseAuthProvider>{children}</FirebaseAuthProvider>;
}
