import { Html, Head, Main, NextScript } from "next/document";
import { Albert_Sans, Inter, Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--albert-sans",
  display: "swap",
});

export default function Document() {
  return (
    <Html lang="en" className={`${nunito.className} ${albertSans.className}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
