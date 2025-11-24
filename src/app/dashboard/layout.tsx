// src/app/dashboard/layout.tsx
import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { RequireAuth } from "@/components/RequireAuth";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <RequireAuth>
      <div className="dashboard-shell">
        <DashboardSidebar />
        <div className="dashboard-main">{children}</div>
      </div>
    </RequireAuth>
  );
}
