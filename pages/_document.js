import Document, { Head, Main, NextScript } from "next/document";

export default class MainDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<meta
						name="description"
						content="A site for my programming portfolio"
					/>
					<meta name="viewport" content="width=device-width" />
					<meta name="robots" content="noindex, nofollow" />
					<meta charSet="utf-8" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<style jsx>
					{`
						body {
							font-family: "Roboto", sans-serif;
						}
					`}
				</style>
			</html>
		);
	}
}
