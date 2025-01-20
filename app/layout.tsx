import NavBar from "components/NavBar";
import UserProvider from "context/UserContext";
import type { Metadata } from "next";
import "styles/globals.css";

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
    <html lang="en">
      <body>
        <UserProvider>
          <NavBar />
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
