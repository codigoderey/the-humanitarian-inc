import React from "react";

const CausesHero = () => {
	return (
		<>
			<section
				id="page-title"
				className="page-title-dark page-title-parallax page-title-center"
				style={{
					background:
						"linear-gradient(to bottom, rgba(6, 54, 57,.9), rgba(6, 54, 57,.9)), url('/assets/1.jpg') no-repeat center center",
					backgroundSize: "cover",
					padding: "120px 0"
				}}>
				<div className="container clearfix">
					<h1 className="mb-3">Donate to Our Cause</h1>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="/donate">Donate</a>
						</li>
					</ol>
				</div>
			</section>
			<section id="content">
				<div className="content-wrap overflow-visible">
					<svg
						viewBox="0 0 1382 58"
						width="100%"
						height="60"
						preserveAspectRatio="none"
						style={{ position: "absolute", top: -58, left: 0, zIndex: 1 }}>
						<path
							style={{ fill: "#FFF" }}
							d="M1.52.62s802.13,127,1380,0v56H.51Z"></path>
					</svg>
				</div>
			</section>
		</>
	);
};

export default CausesHero;
