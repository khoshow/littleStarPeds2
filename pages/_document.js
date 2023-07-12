import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Little Star Pediatrics - Modern, Innovative Pediatric Care"
        />
        <meta
          name="keywords"
          content=""
        />

        <link rel="icon" href="/favicon.jpg" />
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
