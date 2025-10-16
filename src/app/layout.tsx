import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist} from "next/font/google";
import ReduxProvider from "@/redux/app/ReduxProvider";
import ProtectedRoute from "./protectedRoutes/protectedRoute";
import { ToastContainer } from "react-toastify";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: "GoVibe",
  description: "Find your vibe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${plusJakartaSans.variable} antialiased`}
      >
                  <ReduxProvider>
                    {children}
                     <ToastContainer
                      position="top-right"
                      autoClose={3000}
                      hideProgressBar={false}
                      newestOnTop
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                      theme="light"
                    />
                  </ReduxProvider>
      </body>
    </html>
  );
}
