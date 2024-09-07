import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complete SEO Road Map From Zero To Hero | Learning SEO",
  metadataBase: new URL("https://ariadocs.vercel.app/"),
  description:
    "Learning SEO Is A Free SEO Roadmap Made By Professional SEO Consultant Mohamed Diab. I Made Learning SEO To Help People Learn Real SEO.",
    alternates: {
      canonical: 'https://learningseo-ut03--3000--24eaa195.local-credentialless.webcontainer.io/',
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-regular`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="sm:container mx-auto w-[88vw] h-auto">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
