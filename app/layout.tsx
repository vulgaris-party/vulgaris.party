import type { Metadata } from 'next';
import { Inter, Rubik_Mono_One } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const rubik_mono = Rubik_Mono_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rubik-mono',
});

export const metadata: Metadata = {
  title: 'Vulgaris Party',
  description: 'Open source politics for common people',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans ${rubik_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
