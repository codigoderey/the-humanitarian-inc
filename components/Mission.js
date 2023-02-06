import React from "react";

const Mission = () => {
	return (
		<section id="content" className="pt-5">
			<div className="content-wrap py-0 overflow-visible">
				<div className="clear"></div>
				<div className="section m-0 bg-transparent pt-0">
					<div className="container clearfix">
						<div className="row">
							<div className="col-lg-12">
								<h2 className="mb-2">
									Our Mission <span>&amp;</span> Goals
								</h2>
								<div className="svg-line mb-2 clearfix">
									<img
										src="/assets/divider-1.svg"
										alt="svg divider"
										height="10"
									/>
								</div>
								<p className="mb-5">
									Our mission is to prepare and educate youth for life, by
									helping them to overcome any challenges they may face in
									school, their home and their community.
								</p>

								<h3 className="mb-3">Our After School Programs Include:</h3>
								<div className="row mission-goals gutter-30 mb-0">
									<div className="col-md-6">
										<div className="feature-box fbox-plain bg-white mx-0">
											<div className="fbox-media position-relative col-auto p-0 me-4">
												<img
													src="/assets/home.svg"
													alt="Featured Icon 1"
													width="50"
												/>
											</div>
											<div className="fbox-content">
												<h3 className="nott ls0">
													<a href="#" className="text-dark">
														Supervision.
													</a>
												</h3>
												<p>
													Provide children and youth with supervision during a
													time when they might engage in antisocial and
													destructive behaviors.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="feature-box fbox-plain bg-white mx-0">
											<div className="fbox-media position-relative col-auto p-0 me-4">
												<img
													src="/assets/health.svg"
													alt="Featured Icon 2"
													width="50"
												/>
											</div>
											<div className="fbox-content">
												<h3 className="nott ls0">
													<a href="#" className="text-dark">
														Enriching experiences.
													</a>
												</h3>
												<p>
													Provide enriching experiences that broaden children’s
													perspective and improve their socialization.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="feature-box fbox-plain bg-white mx-0">
											<div className="fbox-media position-relative col-auto p-0 me-4">
												<img
													src="/assets/education.svg"
													alt="Featured Icon 3"
													width="50"
												/>
											</div>
											<div className="fbox-content">
												<h3 className="nott ls0">
													<a href="#" className="text-dark">
														Academic achievement.
													</a>
												</h3>
												<p>
													Improve the academic achievement of students who are
													not accomplishing as much as they need to during
													regular school hours.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="feature-box fbox-plain bg-white mx-0">
											<div className="fbox-media position-relative col-auto p-0 me-4">
												<img
													src="/assets/art.svg"
													alt="Featured Icon 4"
													width="50"
												/>
											</div>
											<div className="fbox-content">
												<h3 className="nott ls0">
													<a href="#" className="text-dark">
														Mentoring.
													</a>
												</h3>
												<p>
													Provide highly trained mentors to offer support and
													encouragement to a child. A key factor in their
													development.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
