import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useProgress } from "~/hooks/useProgress";
import "../styles/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  // 路由增加进度条
  useProgress();
  return <Component {...pageProps} />;
}

export default MyApp;
