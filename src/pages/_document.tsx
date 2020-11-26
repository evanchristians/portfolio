import Document, { DocumentContext } from "next/document";
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
            <head>
              <title>work in progress...</title>
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
              <meta
                name="description"
                content="Hi, my name is Evan Christians, I'm a Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
              />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Work+Sans:wght@900&display=swap"
                rel="stylesheet"
              />
              <script src="https://kit.fontawesome.com/ce5d40ef27.js" />
            </head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
