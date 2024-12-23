import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "File Handler",
  description: "File Handler by underflowRP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        {children}
      </body>
    </html>
  );
}
