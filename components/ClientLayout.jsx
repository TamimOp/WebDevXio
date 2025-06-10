"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Enable view transitions if supported
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.documentElement.style.viewTransitionName = "root";
    }
  }, []);

  return (
    <>
      <Navbar />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
