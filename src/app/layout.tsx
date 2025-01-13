import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from './_components/footer';
import Script from 'next/script';

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
      {/* Umami Analytics */}
      <Script
        defer
        src='https://analytics.justinjap.com/script.js'
        data-website-id='5614a698-1494-4d5b-b817-204376c62a22'
      />
    </html>
  );
}
