import "@/styles/globals.css";
import type { AppProps } from "next/app";
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${nunito.className} ${albertSans.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
