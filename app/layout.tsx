import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AntiTheft from '@/components/protection/AntiTheft';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://shoyaib.pages.dev'),
  title: {
    default: 'Shoyaib YT - Professional E-football Gamer',
    template: '%s | Shoyaib YT',
  },
  description: 'Official gamer profile for Shoyaib YT. E-football gameplay, live streams, tutorials, and community.',
  keywords: ['Shoyaib YT', 'E-football', 'Gamer', 'PES Mobile', 'Gaming Profile', 'Esports'],
  authors: [{ name: 'Mostafa Niloy' }],
  creator: 'Mostafa Niloy',
  publisher: 'Mostafa Niloy',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/img/icon.png',
    apple: '/img/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shoyaib.pages.dev',
    title: 'Shoyaib YT - Professional E-football Gamer',
    description: 'Join the community of Shoyaib YT. Watch high-level E-football gameplay and tutorials.',
    siteName: 'Shoyaib YT Profile',
    images: [
      {
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shoyaib YT Profile Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shoyaib YT - Professional E-football Gamer',
    description: 'Official gamer profile for Shoyaib YT. E-football gameplay, live streams, and tutorials.',
    images: ['/img/twitter-image.jpg'],
    creator: '@ShoyaibYT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body 
        className={`${inter.className} bg-slate-900`} 
        suppressHydrationWarning={true}
      >
        <AntiTheft />
        {children}
        <GoogleAnalytics gaId="G-BQCJ8Y5S11" />
      </body>
    </html>
  );
}