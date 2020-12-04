import Document, { DocumentContext, Html } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Html lang="en-us">
              <head>
                <title>Evan Christians | Web Developer</title>
                <meta name="title" content="Evan Christians | Web Developer" />
                <meta
                  name="description"
                  content="Evan Christians, Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
                />

                <meta property="og:type" content="website" />
                <meta
                  property="og:url"
                  content="https://evanchristians.co.za/"
                />
                <meta
                  property="og:title"
                  content="Evan Christians | Web Developer"
                />
                <meta
                  property="og:description"
                  content="Evan Christians, Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
                />
                <meta
                  property="og:image"
                  content="https://evanchristians.co.za/img/banner.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                  property="twitter:url"
                  content="https://evanchristians.co.za/"
                />
                <meta
                  property="twitter:title"
                  content="Evan Christians | Web Developer"
                />
                <meta
                  property="twitter:description"
                  content="Evan Christians, Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
                />
                <meta
                  property="twitter:image"
                  content="https://evanchristians.co.za/img/banner.png"
                />
                <meta
                  name="keywords"
                  content="
                  resume,
                  portfolio,
                  evan,
                  christians,
                  react,
                  developer,
                  fullstack,
                  frontend,
                  html,
                  css,
                  javascript,
                  nextjs,
                  ui,
                  cv,
                  software,
                  engineer,
                  south,
                  africa,
                  cape,
                  town,
                  za
                "
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                  href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;800&family=Work+Sans:wght@800;900&display=swap"
                  rel="stylesheet"
                />
                <script src="https://kit.fontawesome.com/ce5d40ef27.js" />
              </head>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </Html>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
