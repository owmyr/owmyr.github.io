import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Olmir Stocker Neto | Applied AI & LLM Systems Engineer',
  description:
    'Engineering fault-tolerant multi-agent architectures, hybrid RAG pipelines, and deterministic LLM evaluation harnesses. Specializing in turning non-deterministic models into resilient, observable, and contract-validated software.',
  keywords: [
    'Applied AI Engineer',
    'LLM Systems Engineer',
    'Multi-Agent Swarms',
    'RAG',
    'Vector Search',
    'Circuit Breakers',
    'TypeScript',
    'Python',
    'Zod Contracts',
    'FAISS'
  ],
  authors: [{ name: 'Olmir Stocker Neto', url: 'https://owmyr.github.io' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  openGraph: {
    title: 'Olmir Stocker Neto | Applied AI & LLM Systems Engineer',
    description:
      'Fault-tolerant multi-agent architectures, hybrid RAG pipelines, and deterministic LLM evaluation harnesses.',
    url: 'https://owmyr.github.io/',
    siteName: 'Olmir Stocker Neto Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://owmyr.github.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Olmir Stocker Neto — Applied AI & LLM Systems Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olmir Stocker Neto | Applied AI & LLM Systems Engineer',
    description:
      'Fault-tolerant multi-agent architectures, hybrid RAG pipelines, and deterministic LLM evaluation harnesses.',
    images: ['https://owmyr.github.io/og-image.png']
  }
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1
};

/**
 * Root Layout for the portfolio application.
 *
 * @param {object} props - Children components.
 * @returns {React.ReactElement} Root HTML shell.
 */
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" className="scroll-smooth bg-[#000000]">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=supreme@400,500&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#000000] text-[#f4f4f5] antialiased selection:bg-zinc-200 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
