import { Inter } from "next/font/google";
import "./style/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <h1>
          <p className="bg-red-400 px-4  rounded-lg">Welcome To Portfolio</p></h1>
      <header >
        <Link  href="/">
            <h2 >Home</h2>
        </Link>
        <Link  href="#">
            <h2>About</h2>
        </Link>
        <Link  href="#">
            <h2>Create</h2>
        </Link>
      </header>
        {children}
        <footer >
        <p>&copy; 2024</p>
      </footer>
      </body>
    </html>
  );
}
