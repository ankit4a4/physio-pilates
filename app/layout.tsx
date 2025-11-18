import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import favicon from "@/assets/favicon.png"
// import CustomCursor from "@/components/ui/CustomCursor"
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Physio • Pilates • Wellness Redefined – Delhi NCR's Premier Movement Studio",
  description:
    "The only centre in Delhi NCR which provides combination of physiotherapy and pilates for the treatment.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        {/* <CustomCursor/> */}
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
