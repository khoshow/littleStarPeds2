import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Jano - Creative Multipurpose React NextJS Template"
        />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, business multipurpose, charity, creative, creative template, crypto, education, hosting, insurance, landing page, portfolio, real estate, responsive, react, nextjs"
        />

        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/4af13880de.js"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
