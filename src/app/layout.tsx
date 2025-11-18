// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Astro Portal",
  description:
    "Personalized astrology workspace for charts, events, and themed guidance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="page-wrapper">
            <Navbar />
            <main>{children}</main>
            <footer
              style={{
                borderTop: "1px solid var(--color-border)",
                marginTop: "2rem",
              }}
            >
              <div className="container" style={{ padding: "1.25rem 0" }}>
                <p className="muted">
                  © {new Date().getFullYear()} Astro Portal · Crafted for learning
                  astrology and building innovative apps.
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
