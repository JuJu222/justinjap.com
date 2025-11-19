import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from './_components/footer';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Justin Jap',
  description: 'Full Stack Developer passionate about building impactful software solutions.',
  openGraph: {
    title: 'Justin Jap',
    description: 'Full Stack Developer passionate about building impactful software solutions.',
    url: 'https://justinjap.com',
    siteName: 'Justin Jap',
    images: [
      {
        url: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/me.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin Jap',
    description: 'Full Stack Developer passionate about building impactful software solutions.',
    images: ['https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/me.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Justin Jap',
    url: 'https://justinjap.com',
    image: 'https://d249xjcvkuj8xb.cloudfront.net/justinjap.com/me.jpg',
    sameAs: ['https://www.linkedin.com/in/justinjap', 'https://github.com/JuJu222'],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Unit Network',
    },
  };

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
          <Footer />
        </ThemeProvider>
      </body>
      {/* Umami Analytics */}
      <Script
        defer
        src='https://analytics.justinjap.com/script.js'
        data-website-id='d79272c6-b160-4b10-80e2-a920b8efb83e'
      />
      <Script id='json-ld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </html>
  );
}
