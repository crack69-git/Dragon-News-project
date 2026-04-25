import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/Components/shared/HeaderSection";
import NavbarSection from "@/Components/shared/NavbarSection";

export const metadata = {
  title: "Home",
  description: "Homepage",
};

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={` ${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
