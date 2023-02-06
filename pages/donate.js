import React from "react";
import MainLayout from "../layouts/MainLayout";
import CausesHero from "../components/CausesHero";

const Donate = () => {
	return (
		<MainLayout>
			<CausesHero />
			<section id="content">
				<div className="content-wrap overflow-visible p-0">
					<div className="clear"></div>
					<div className="section m-0 bg-transparent pt-0">
						<div className="container clearfix">
							<div className="row">
								<div className="col-lg-12">
									<h2 className="mb-2">How you can help?</h2>
									<div className="svg-line mb-2 clearfix">
										<img
											src="/assets/divider-1.svg"
											alt="svg divider"
											height="10"
										/>
									</div>
									<p className="w-75">
										We need volunteers, tutors, mentors and support staff to
										help us in our mission. We are also in need of sup- plies
										and financial support to provide services for the youth we
										propose to serve.
									</p>
									<p className="w-75">
										An effective after-school environment turns fun activities
										into innovative strategies designed to increase stu- dents’
										self-esteem and improve their academic performance. Your
										support will be greatly appreciated and im- measurable in
										the life of a youth. Our philosophy is that “It’s The
										Humani- tarian thing to do”.
									</p>
									<p className="w-75">
										For more information please call Darroll Cribb,{" "}
										<a href="tel:410-523-2742">410-523-2742</a> or click the
										link below to donate any amount. We truly appreciate your
										help!
									</p>
									<a
										href="#"
										className="button button-rounded button-xlarge bg-color button-light text-dark shadow nott ls0 m-0">
										Donate Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default Donate;
