import type { Metadata } from 'next';
import { Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import Footer from './_components/footer';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Justin Jap',
  description: 'Full Stack Engineer passionate about building impactful software solutions.',
  openGraph: {
    title: 'Justin Jap',
    description: 'Full Stack Engineer passionate about building impactful software solutions.',
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
    description: 'Full Stack Engineer passionate about building impactful software solutions.',
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
    jobTitle: 'Full Stack Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Unit Network',
    },
  };

  return (
    <html lang='en' className={`${inter.variable} ${geistMono.variable} h-full`} suppressHydrationWarning>
      <body className='flex min-h-full flex-col font-sans'>
        <ThemeProvider>
          <Navbar />
          <TooltipProvider delayDuration={0}>
            <main className='flex-1'>{children}</main>
          </TooltipProvider>
          <Footer />
        </ThemeProvider>
      </body>
      {/* Umami Analytics */}
      <Script
        defer
        src='https://analytics.justinjap.com/script.js'
        data-website-id='2875d2b3-33c4-4003-8b94-5816d06c6207'
      />
      <Script id='json-ld' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </html>
  );
}
