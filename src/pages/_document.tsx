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
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Work+Sans:wght@100;400;900&display=fallback"
                rel="stylesheet"
              />
              <script src="https://kit.fontawesome.com/ce5d40ef27.js" />
              <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"
              />
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
