import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useProgress } from "~/hooks/useProgress";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  useProgress();
  return <Component {...pageProps} />;
}

export default MyApp;
