import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "components/ui/provider";


export const metadata: Metadata = {
  title: "QuizApp",
  description: "QuizApp by Kathy Dang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>          
  );
}
