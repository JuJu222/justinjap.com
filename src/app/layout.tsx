import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from './_components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Justin Jap',
  description: 'Full Stack Developer passionate about building impactful software solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        <Footer />
      </body>
    </html>
  );
}
