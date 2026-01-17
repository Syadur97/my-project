// app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "CDRM App",
  description: "Consultancy & Dashboard App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Navbar included once */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 min-h-screen bg-gradient-to-br from-primary/15 via-base-100 to-secondary/15 animate-bg">{children}</main>

        {/* Footer included once */}
        <Footer />
      </body>
    </html>
  );
}
