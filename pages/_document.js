import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <Script data-ad-client="" async src="" /> */}
        <Script strategy={"lazyOnload"} async src={`https://www.googletagmanager.com/gtag/js?id${process.env.GA_ID}`} />
        <Script
            strategy={"lazyOnload"}
            id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

          `,
          }}
        />
      </body>
    </Html>
  )
}