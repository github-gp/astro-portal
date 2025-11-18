// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "/learn", label: "Learn" },
  { href: "/themes", label: "Themes" },
  { href: "/apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav-shell">
      <div className="container nav-inner">
        {/* Brand */}
        <Link href="/" className="nav-brand">
          <span className="nav-brand-title">Astro Portal</span>
          <span className="nav-brand-badge muted">beta</span>
        </Link>

        {/* Center navigation */}
        <nav className="nav-links" aria-label="Main">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: auth placeholder + theme */}
        <div className="nav-right">
          <Link href="/register" className="button button-primary">
            Join Now
           </Link>
          <Link href="/login" className="button button-ghost">
            Login
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
