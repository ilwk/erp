import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useProgress } from "~/hooks/useProgress";
import "../styles/nprogress.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  // 路由增加进度条
  useProgress();
  return (
    <>
      <Head>
        <title>ERP</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
