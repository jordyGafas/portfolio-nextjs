import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SPZNYFBFK"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0SPZNYFBFK');`,
          }}
        ></script>
      </Head>
      <body>
        <script type="text/javascript" src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js" charset="UTF-8"></script>
        <script
          type="text/javascript"
          charset="UTF-8"
          dangerouslySetInnerHTML={{
            __html: `document.addEventListener("DOMContentLoaded", function () {
              console.log("test");
              cookieconsent.run({
                notice_banner_type: "simple",
                consent_type: "express",
                palette: "dark",
                language: "en",
                page_load_consent_levels: ["strictly-necessary"],
                notice_banner_reject_button_hide: false,
                preferences_center_close_button_hide: false,
                page_refresh_confirmation_buttons: false,
                website_name: "Leytech",
              });
            })`
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
      <a href="#" id="open_preferences_center">
        Update cookies preferences
      </a>
    </Html>
  );
}
