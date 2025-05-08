import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "WebDevXio",
  description: "Task1",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
