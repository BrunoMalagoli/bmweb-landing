import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BMWEB - Web Design & Digital Marketing Agency",
  description:
    "Professional web design and digital marketing services to enhance your business experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('bmweb-theme') || 'dark';
                const root = document.documentElement;
                root.classList.remove('light', 'dark');
                
                if (theme === 'system') {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  root.classList.add(systemTheme);
                } else {
                  root.classList.add(theme);
                }
              } catch (e) {
                // Ignore localStorage errors
              }
              
              // Prevent hydration mismatch for body attributes
              try {
                const body = document.body;
                if (body && !body.hasAttribute('suppressHydrationWarning')) {
                  body.setAttribute('suppressHydrationWarning', 'true');
                }
              } catch (e) {
                // Ignore body manipulation errors
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider defaultTheme="dark" storageKey="bmweb-theme">
          <LanguageProvider defaultLanguage="en">{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
