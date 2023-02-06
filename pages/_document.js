// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html>
			<Head>
				{/* stylesheets */}
				<link
					href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Poppins:wght@300;400;500;600;700;900&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/font-icons.css"
					type="text/css"
				/>
				<link
					rel="stylesheet"
					href="/assets/css/bootstrap.css"
					type="text/css"
				/>
				<link rel="stylesheet" href="/assets/css/style.css" type="text/css" />
				<link rel="stylesheet" href="/assets/css/swiper.css" type="text/css" />

				<link rel="stylesheet" href="/assets/css/dark.css" type="text/css" />
				<link
					rel="stylesheet"
					href="/assets/css/font-icons.css"
					type="text/css"
				/>
				<link rel="stylesheet" href="/assets/css/animate.css" type="text/css" />
				<link
					rel="stylesheet"
					href="/assets/css/magnific-popup.css"
					type="text/css"
				/>

				<link rel="stylesheet" href="/assets/css/custom.css" type="text/css" />
				<link
					rel="stylesheet"
					href="/assets/css/calendar.css"
					type="text/css"
				/>

				{/* non profit specific stylesheet */}
				<link
					rel="stylesheet"
					href="/assets/css/colors.php?color=C6C09C"
					type="text/css"
				/>
				{/* theme color */}
				<link rel="stylesheet" href="/assets/css/fonts.css" type="text/css" />
				<link
					rel="stylesheet"
					href="/assets/css/nonprofit.css"
					type="text/css"
				/>
			</Head>
			<body className="stretched">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
