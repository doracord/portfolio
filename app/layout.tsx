import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoraCord",
  description: "DoraCord's website",
  keywords: ["Next.js", "doracord", "portfolio", "doracord portfolio"],

  openGraph: {
    title: "DoraCord",
    description: "DoraCord's website",
    url: "https://doracord.pages.dev",
    siteName: "DoraCord",
    images: [
      {
        url: "https://doracord.pages.dev/banner.png",
        width: 1200,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <BackgroundBeamsWithCollision>
            {children}
          </BackgroundBeamsWithCollision>
        </ThemeProvider>
      </body>
    </html>
  );
}
