import React from "react";

const Carousel = () => {
	return (
		<section
			id="slider"
			className="slider-element dark swiper_wrapper slider-parallax min-vh-75">
			<div className="slider-inner">
				<div className="swiper-container swiper-parent">
					<div className="swiper-wrapper">
						<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption">
									<div>
										<h2 className="nott" data-animate="fadeInUp">
											Help our children.
										</h2>
										<a
											href="/about"
											data-animate="fadeInUp"
											data-delay="400"
											className="button button-rounded button-large button-light shadow nott ls0 ms-0 mt-4">
											Know More
										</a>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide-bg"
								style={{
									background:
										'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/assets/students-1.jpg") no-repeat center center',
									backgroundSize: "cover"
								}}></div>
						</div>
						<div className="swiper-slide dark">
							<div className="container">
								<div className="slider-caption">
									<div>
										<h2 className="nott" data-animate="fadeInUp">
											Improve their education.
										</h2>
										<a
											href="/about"
											data-animate="fadeInUp"
											data-delay="400"
											className="button button-rounded button-large button-light shadow nott ls0 ms-0 mt-4">
											Know More
										</a>
									</div>
								</div>
							</div>
							<div
								className="swiper-slide-bg"
								style={{
									background:
										'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/assets/students-2.jpg") no-repeat center center',
									backgroundSize: "cover"
								}}></div>
						</div>
					</div>
					<div className="swiper-navs">
						<div className="slider-arrow-left">
							<i className="icon-line-arrow-left"></i>
						</div>
						<div className="slider-arrow-right">
							<i className="icon-line-arrow-right"></i>
						</div>
					</div>
					<div className="swiper-scrollbar">
						<div className="swiper-scrollbar-drag">
							<div className="slide-number">
								<div className="slide-number-current"></div>
								<span>/</span>
								<div className="slide-number-total"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
