import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Header";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./globals.css";

export const metadata: Metadata = {
  title: "DoraCord",
  description: "DoraCord's website",
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
