import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LinealToggle } from "@/components/shadcn/toggle-theme";
import { TailwindIndicator } from "@/components/shadcn/tailwind-indicator";
import { ThemeProvider } from "@/components/shadcn/theme-provider";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bitcoin CLI Commands",
  description: "Bitcoin CLI Commands for B4OS course",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  const isDevMode = process.env.NODE_ENV === "development";

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen flex flex-col text-muted-foreground")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className='self-end bg-slate-50 w-full dark:bg-black'>
            <LinealToggle isDevMode={isDevMode} />
          </div>
          <div className="px-3 sm:px-4 md:px-5 xl:px-3 flex flex-col items-center flex-1 w-full bg-slate-50 dark:bg-black">
            {children}
          </div>
          <div className='flex w-full justify-center py-5 bg-slate-50 w-full dark:bg-black'>
            <Link href="https://github.com/raphauy" target="_blank">
              <Button variant="link">
                <div className="h-8 w-8 bg-black text-white flex items-center justify-center rounded-full">
                  <Github className="w-5 h-5" />
                </div>                
              </Button>
            </Link>
          </div>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
