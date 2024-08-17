import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.jpg" />
        <Script
          src="https://kit.fontawesome.com/4af13880de.js"
          crossOrigin="anonymous"
        ></Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-WSP1FR31HT"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WSP1FR31HT"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
