import React from "react";
import IconCardsWithLinks from "./IconCardsWithLinks";

const UnconditionalHelp = () => {
	return (
		<div
			className="section mt-3"
			style={{
				background: '#FFF url("/assets/1.jpg") no-repeat 100% 50% / auto 100%'
			}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-7 center">
						<div className="heading-block border-bottom-0 mb-4">
							<h2 className="mb-4 nott">Teaching & Educating</h2>
						</div>
						<div className="svg-line bottommargin-md">
							<img src="/assets/divider-1.svg" alt="svg divider" height="20" />
						</div>
						<p className="bg-white p-3">
							We provide after school programs in Baltimore City for Youth at
							Risk.
						</p>
					</div>
				</div>

				<div className="row mt-5 col-mb-50 mb-0">
					<IconCardsWithLinks
						iconPath="/assets/volunteer.svg"
						cardTitle="Join our team."
						cardBody="Join our efforts and be part of this exceptional group of people."
						cardLink="/about"
						linkText="Learn More"
					/>
					<IconCardsWithLinks
						iconPath="/assets/education.svg"
						cardTitle="Improving education."
						cardBody="An educated community is a strong community set for success in life."
						cardLink="/about"
						linkText="Learn More"
					/>
					<IconCardsWithLinks
						iconPath="/assets/donate.svg"
						cardTitle="Help donating."
						cardBody="Help us help others. Your donation is another way of helping others."
						cardLink="/donate"
						linkText="Donate"
					/>
				</div>
			</div>
		</div>
	);
};

export default UnconditionalHelp;
