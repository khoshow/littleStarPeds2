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
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.jpg" />
        <Script
          src="https://kit.fontawesome.com/4af13880de.js"
          crossOrigin="anonymous"
        ></Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-WSP1FR31HT"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
          }}
        ></noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
