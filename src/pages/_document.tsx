import Document, { DocumentContext, Html } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../lib/gtag";

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
									content="I'm a Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
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
									content="I'm a Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
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
									content="I'm a Cape Town based software engineer with experience in full stack web development and strong interests in experience design and seamless integration."
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
								{process.env.NODE_ENV === "production" ? (
									<>
										<script
											async
											src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
										/>
										<script
											dangerouslySetInnerHTML={{
												__html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                    `,
											}}
										/>
									</>
								) : null}
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
