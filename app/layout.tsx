import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sans = Inter({ subsets: ['latin'], weight: '400', variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: '400', variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'e2e - with-vercel',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
