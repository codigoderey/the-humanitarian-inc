import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Calendar = () => {
	const { pathname } = useRouter();

	return (
		<>
			<div
				className="section m-0 p-0 row align-items-stretch clearfix"
				style={{ backgroundColor: "rgba(198,192,156, 0.15)" }}>
				<div
					className="col-lg-4 dark d-flex flex-column align-items-center center justify-content-center"
					style={{
						background:
							"linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5)), url('/assets/event.jpg') center center repeat",
						backgroundSize: "cover; min-height: 300px"
					}}>
					<h2 className="display-4 px-4 fw-bold mb-4 d-block">
						Humanitarian Events
					</h2>
				</div>
				<div className="col-lg-8 col-padding">
					{pathname !== "/events" && (
						<Link href="/events">
							<a className="btn bg-color mb-3">View our events &rarr;</a>
						</Link>
					)}
					<div className="events-calendar">
						<img height={400} src="/assets/Email.jpg" alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Calendar;
