import React from "react";

const IconCardsWithLinks = ({
	iconPath,
	cardTitle,
	cardBody,
	cardLink,
	linkText
}) => {
	return (
		<div className="col-md-3">
			<div className="feature-box flex-column mx-0">
				<div className="fbox-media position-relative">
					<img src={iconPath} alt="Featured Icon" width="60" className="mb-3" />
				</div>
				<div className="fbox-content px-0">
					<h3 className="nott ls0">
						<a href="#" className="text-dark">
							{cardTitle}
						</a>
					</h3>
					<p className="text-black">{cardBody}</p>
					<a
						href={cardLink}
						className="button button-rounded button-border nott ls0 fw-normal ms-0 mt-4">
						{linkText}
					</a>
				</div>
			</div>
		</div>
	);
};

export default IconCardsWithLinks;
