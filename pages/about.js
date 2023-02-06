import React from "react";
import MainLayout from "../layouts/MainLayout";
import Calendar from "../components/Calendar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Script from "next/script";

const AboutPage = () => {
	return (
		<MainLayout>
			<Hero />
			<Mission />
			<section id="content">
				<div className="content-wrap overflow-visible">
					<div className="clear"></div>
					<div className="section m-0 bg-transparent pt-0">
						<div className="container clearfix">
							<div className="row">
								<div className="col-lg-12">
									<h2 className="mb-2">
										Why After School Tutoring <span>&amp;</span> Mentoring
									</h2>
									<div className="svg-line mb-2 clearfix">
										<img
											src="/assets/divider-1.svg"
											alt="svg divider"
											height="10"
										/>
									</div>
									<p className="w-75">
										How youth spend their afternoons has a direct impact on the
										number of youth that are at risk for drugs, teen pregnan-
										cy, juvenile crime and the many other dangers that can harm
										them after the school day ends.
									</p>
									<p className="w-75">
										After school programs have shown to reduce these numbers,
										but with the demand for after school programs so high, the
										federal government and the city of Baltimore has a
										responsibility to do more than just support exist- ing
										programs. They must also support new programs, so that all
										of our youth have the chance for safe and supervised
										activities each afternoon.
									</p>
									<p className="w-75">
										The Humanitarian is one such program. If we are to meet the
										need for after school programs for youth in Baltimore City,
										we need support from all sectors. We all play a role in
										providing safe ha- vens for our youth. And for this reason
										we are asking for your support.
									</p>
									<a
										href="/donate"
										className="button button-rounded button-xlarge bg-color button-light text-dark shadow nott ls0 mt-5">
										How to help?
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Calendar />
		</MainLayout>
	);
};

export default AboutPage;
