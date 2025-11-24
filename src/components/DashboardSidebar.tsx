// src/components/DashboardSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const items = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/chart", label: "My chart" },
  { href: "/dashboard/events", label: "Events log" },
  { href: "/dashboard/themes", label: "Themes" },
  { href: "/dashboard/apps", label: "Apps" },
  { href: "/dashboard/settings", label: "Settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  const { data: session } = useSession();
  const userName = session?.user?.name || "Your account";
  const userEmail = session?.user?.email || "";


   return (
    <aside className="sidebar">
      <div>
        <p className="sidebar-heading">Workspace</p>
        <p style={{ fontSize: "0.9rem", fontWeight: 500 }}>
          {userName}
        </p>
        {userEmail && (
          <p className="muted" style={{ fontSize: "0.8rem" }}>
            {userEmail}
          </p>
        )}
      </div>


      <nav className="sidebar-nav" aria-label="Dashboard">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${
                isActive ? "sidebar-link-active" : ""
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
