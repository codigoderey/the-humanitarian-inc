import React from "react";

const SimpleCards = ({ text, icon }) => {
	return (
		<div className="col-md-3 px-1">
			<a
				href="/about"
				className="card center border-start-0 border-end-0 border-top-0 border-bottom border-bottom shadow py-3 rounded-0 fw-semibold text-uppercase ls1">
				<div className="card-body">
					<i className={icon}></i>
					{text}
				</div>
			</a>
		</div>
	);
};

export default SimpleCards;
