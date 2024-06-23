import { Inter } from "next/font/google";
import "@uploadthing/react/styles.css";
import "./globals.css";
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar/>
      </body>
    </html>
  );
}