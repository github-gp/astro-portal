// src/app/dashboard/layout.tsx
import { ReactNode } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="dashboard-shell">
      <DashboardSidebar />
      <div className="dashboard-main">
        {children}
      </div>
    </div>
  );
}
