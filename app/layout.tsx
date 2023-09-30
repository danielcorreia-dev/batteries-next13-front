import Providers from "@/components/providers/Providers";
import "./css/style.css";

import { Inter } from "next/font/google";
import ToastProvider from "@/components/providers/ToastProvider";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-neutral-50 font-inter tracking-tight text-gray-900 antialiased transition-colors dark:bg-slate-900`}
      >
        <ToastProvider>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Providers>{children}</Providers>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
