import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "WebDevXio",
  description: "Task1",
};

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
