import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthDebuggerWrapper from "@/components/AuthDebuggerWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

export const metadata: Metadata = {
  title: "MilanManch Celebration - Professional Event Management",
  description:
    "Your trusted partner in creating extraordinary events that leave lasting impressions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo-mm.gif" type="image/gif" />
        {/* SEO and social meta tags */}
        <meta name="theme-color" content="#FFD700" />
        <meta name="msapplication-TileColor" content="#FFD700" />
        <meta
          property="og:title"
          content="MilanManch Celebration - Professional Event Management"
        />
        <meta
          property="og:description"
          content="Your trusted partner in creating extraordinary events that leave lasting impressions"
        />
        <meta property="og:image" content="/logo-mm.gif" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.milanmanch.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="MilanManch Celebration - Professional Event Management"
        />
        <meta
          name="twitter:description"
          content="Your trusted partner in creating extraordinary events that leave lasting impressions"
        />
        <meta name="twitter:image" content="/logo-mm.gif" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzelDecorative.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Auth debugger (will only show in development) */}
          <AuthDebuggerWrapper />
        </AuthProvider>
      </body>
    </html>
  );
}
