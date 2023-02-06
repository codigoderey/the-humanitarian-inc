import React, { useState } from "react";
import { useRouter } from "next/router";
import { isAdmin as admin } from "../public/assets/js/utils";
import Script from "next/script";

const Footer = () => {
	const { pathname } = useRouter();
	const [isAdmin] = useState(admin(pathname));

	return (
		<>
			<footer
				id="footer"
				style={{
					backgroundColor: isAdmin ? "#fff" : "#002D40",
					borderTop: "none"
				}}>
				{!isAdmin && (
					<div className="container">
						<div
							className="footer-widgets-wrap dark clearfix"
							style={{
								background:
									'radial-gradient(rgba(0,45,64,.5), rgba(0,45,64,.1), rgba(0,45,64,.5)), url("/assets/footer.jpg") repeat center center / cover;  padding: 150px 0'
							}}>
							<div className="mx-auto center" style={{ maxWidth: 700 }}>
								<h2 className="display-2 fw-bold text-white mb-0 ls1 font-secondary mb-4">
									<i className="icon-heart d-block mb-3"></i>Join to help us
									help our youth education!
								</h2>
								<a
									href="/donate"
									className="button button-rounded button-xlarge button-white bg-white button-light text-dark shadow nott ls0 ms-0 mt-5">
									Donate Now
								</a>
							</div>
						</div>
					</div>
				)}

				<div id="copyrights" className="bg-color">
					<div className="container clearfix">
						<div className="row justify-content-between align-items-center">
							<div className="col-md-6">
								Copyrights &copy; {new Date().getFullYear()} All Rights Reserved
								by The Humanitarian.
							</div>

							<div className="col-md-6 d-md-flex flex-md-column align-items-md-end mt-4 mt-md-0">
								<div className="copyrights-menu copyright-links clearfix">
									<a href="/about">About</a>/<a href="/events">Events</a>/
									<a href="/admin">Admin</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Script
					strategy="beforeInteractive"
					src="/assets/js/jquery.js"></Script>
				<Script
					strategy="beforeInteractive"
					src="/assets/js/plugins.min.js"></Script>
				<Script src="/assets/js/events.js"></Script>
				<Script src="/assets/js/functions.js"></Script>
			</footer>
		</>
	);
};

export default Footer;
