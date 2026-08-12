import type React from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { GoogleTagManager } from '@next/third-parties/google';
import { ConditionalLayout } from '@/components/conditional-layout';

const BASE_URL = 'https://muhammadyahya.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Muhammad Yahya | Full-Stack MERN Developer',
    template: '%s | Muhammad Yahya',
  },
  description:
    'Full-Stack MERN Developer and Founder of Zaryonix Tech. I build modern, scalable, and high-performance web applications using the MERN Stack.',
  keywords: [
    'Muhammad Yahya',
    'Zaryonix Tech',
    'Founder',
    'Portfolio',
    'Full Stack Developer',
    'MERN Stack',
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Muhammad Yahya', url: BASE_URL }],
  creator: 'Muhammad Yahya',
  publisher: 'Muhammad Yahya',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Muhammad Yahya',
    title: 'Muhammad Yahya | Full-Stack MERN Developer',
    description:
      'Full-Stack MERN Developer and Founder of Zaryonix Tech. Shaping the next generation of modern, fast, and scalable web solutions.',
    images: [
      {
        url: `${BASE_URL}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: 'Muhammad Yahya - Full-Stack MERN Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Yahya | Full-Stack MERN Developer',
    description:
      'Full-Stack MERN Developer and Founder of Zaryonix Tech. Shaping the next generation of modern, fast, and scalable web solutions.',
    creator: '@muhammadyahya',
    site: '@muhammadyahya',
    images: [`${BASE_URL}/thumbnail.png`],
  },
  alternates: {
    canonical: BASE_URL,
    types: {
      'application/rss+xml': `${BASE_URL}/rss`,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
  applicationName: 'Muhammad Yahya Portfolio',
  appleWebApp: {
    title: 'Muhammad Yahya',
    statusBarStyle: 'default',
    capable: true,
  },
  verification: {
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-[#141414] text-[#f5f5f0]`}>
        {process.env.NODE_ENV === 'production' && (
          <GoogleTagManager gtmId='GTM-MQBDDCBQ' />
        )}
        <ConditionalLayout>{children}</ConditionalLayout>
        <Analytics />
      </body>
    </html>
  );
}
