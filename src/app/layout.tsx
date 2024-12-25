import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import '@/assets/styles/styles.scss';
import { ClientLayout } from "@/shared";
import Head from "next/head";

const interFont = Inter({
  variable: '--font-inter',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500'],
  style: ['normal'],
  fallback: ['system-ui', 'arial'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Market',
  description: 'An online marketplace showcasing a variety of products for your shopping needs.',
  keywords: ['market', 'products', 'gallery', 'shopping', 'online'],
  authors: [{ name: 'Temirgalieva' }],
  creator: 'Temirgalieva',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <body className={interFont.variable}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
