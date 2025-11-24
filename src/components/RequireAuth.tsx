// src/components/RequireAuth.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type RequireAuthProps = {
  children: ReactNode;
};

export function RequireAuth({ children }: RequireAuthProps) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="container" style={{ paddingTop: "3rem" }}>
        <p className="muted">Checking your session...</p>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return null; // while redirecting
  }

  return <>{children}</>;
}
