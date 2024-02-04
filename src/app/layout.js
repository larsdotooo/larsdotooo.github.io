import { cx } from "@/src/utils";
import './globals.css';
import { Inter, Manrope } from 'next/font/google';
import Header from "@/src/components/Header";

const inter = Inter({ subsets: ['latin'], display: "swap", variable: "--font-in" })

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable: "--font-mr" })

export const metadata = {
  title: 'out of ordinary',
  description: 'life is short but life is long',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body 
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
