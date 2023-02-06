import React from "react";

const FloatingContact = () => {
	return (
		<div className="floating-contact-wrap">
			<div className="floating-contact-btn shadow">
				<i className="floating-contact-icon btn-unactive icon-envelope21"></i>
				<i className="floating-contact-icon btn-active icon-line-plus"></i>
			</div>
			<div className="floating-contact-box">
				<div id="q-contact" className="widget quick-contact-widget clearfix">
					<div className="floating-contact-heading bg-color p-4 rounded-top">
						<h3 className="mb-0 font-secondary h2 ls0">Quick Contact 👋</h3>
						<p className="mb-0">Get in Touch with Us</p>
					</div>
					<div className="form-widget bg-white" data-alert-type="false">
						<div className="form-result"></div>
						<div
							className="floating-contact-loader css3-spinner"
							style={{ position: "absolute" }}>
							<div className="css3-spinner-bounce1"></div>
							<div className="css3-spinner-bounce2"></div>
							<div className="css3-spinner-bounce3"></div>
						</div>
						<div id="floating-contact-submitted" className="p-5 center">
							<i className="icon-line-mail h1 color"></i>
							<h4 className="fw-normal mb-0 font-body">
								Thank You for Contact Us! Our Team will contact you asap on your
								email Address.
							</h4>
						</div>
						<form
							className="mb-0"
							id="floating-contact"
							action="include/form.php"
							method="post"
							encType="multipart/form-data"
							noValidate="novalidate">
							<div className="input-group mb-3">
								<span className="input-group-text bg-transparent">
									<i className="icon-user-alt"></i>
								</span>
								<input
									type="text"
									name="floating-contact-name"
									id="floating-contact-name"
									className="form-control required"
									placeholder="Enter your Full Name"
								/>
							</div>
							<div className="input-group mb-3">
								<span className="input-group-text bg-transparent">
									<i className="icon-at"></i>
								</span>
								<input
									type="email"
									name="floating-contact-email"
									id="floating-contact-email"
									className="form-control required"
									placeholder="Enter your Email Address"
								/>
							</div>
							<div className="input-group mb-3">
								<span className="input-group-text bg-transparent">
									<i className="icon-comment21"></i>
								</span>
								<textarea
									name="floating-contact-message"
									id="floating-contact-message"
									className="form-control required"
									cols="30"
									rows="4"></textarea>
							</div>
							<input
								type="hidden"
								id="floating-contact-botcheck"
								name="floating-contact-botcheck"
								value=""
							/>
							<button
								type="submit"
								name="floating-contact-submit"
								className="btn btn-light w-100 py-2">
								Send Message
							</button>
							<input type="hidden" name="prefix" value="floating-contact-" />
							<input
								type="hidden"
								name="subject"
								value="Messgae From Floating Contact"
							/>
							<input
								type="hidden"
								name="html_title"
								value="Floating Contact Message"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FloatingContact;
