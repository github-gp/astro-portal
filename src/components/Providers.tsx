// src/components/Providers.tsx
"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
