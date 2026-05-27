import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nwakwuribe Kamsi Portfolio",
  description: "Nwakwuribe Kamsi's personal portfolio website showcasing their skills and projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} flex flex-col min-h-screen bg-[#0a0510] text-text-light relative`}>
        {/* Background Mesh/Aurora Effects */}
        <div className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] lg:w-[40vw] lg:h-[40vw] rounded-full bg-gradient-to-br from-[#ff7a18] to-[#d92945] opacity-20 blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed top-[20%] right-[-10%] w-[80vw] h-[80vw] lg:w-[50vw] lg:h-[50vw] rounded-full bg-gradient-to-bl from-[#7c22ff] to-[#36007b] opacity-20 blur-[150px] pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
