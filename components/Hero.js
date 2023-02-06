import React from "react";

const Hero = () => {
	return (
		<section
			id="slider"
			className="slider-element swiper_wrapper min-vh-75 justify-content-start dark"
			style={{ background: "#063639" }}>
			<div className="container">
				<div className="row h-100 align-items-center justify-content-between">
					<div className="col-lg-4 col-md-6 py-5 py-md-0">
						<div className="heading-block border-bottom-0 mb-4">
							<h5 className="mb-1 text-uppercase ls2 color op-06">About Us</h5>
							<h2 className="mb-4 nott">Education is first</h2>
						</div>
						<div className="svg-line bottommargin-sm">
							<img src="/assets/divider-1.svg" alt="svg divider" height="20" />
						</div>
						<p className="mb-5">
							We do believe that education is first. That's why we provide a
							variety of services to help our youth to improve their education
							performance. You can also be part of this.
						</p>
						<a
							href="/donate"
							className="button button-rounded button-xlarge bg-color button-light text-dark shadow nott ls0 m-0">
							Donate Now
						</a>
					</div>
					<div className="col-lg-8 col-md-6">
						<img src="/assets/1-1.png" alt="Image" className="full-width-img" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
