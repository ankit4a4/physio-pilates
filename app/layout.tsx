import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Wellness Studio | Premium Pilates, Yoga & Physiotherapy',
  description: 'Transform your wellness journey with our luxury studio offering Pilates, Yoga, Physiotherapy, and certified Instructor training programs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
