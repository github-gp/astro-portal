import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Astroz AI",
  description: "Personalized astrology workspace...",
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
            {/* footer... */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
