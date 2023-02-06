import React, { useEffect, useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import { useRouter } from "next/router";
import { EventsContext } from "../../context/Events";
import Moment from "react-moment";

const SingleEvent = () => {
	const { getSingleEvent, singleEvent, loading } = useContext(EventsContext);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (!id) return;
		getSingleEvent(router.query.id);
	}, [id]);

	return (
		<MainLayout>
			<div className="container py-5">
				{loading ? (
					<div>Loading event details...</div>
				) : (
					<div>
						<h2 className="mb-0">{singleEvent.title}</h2>
						<div className="bg-light p-2 border mb-2">
							<div>
								<strong>Date:</strong>{" "}
								<Moment format="MMMM Do, YYYY">
									{new Date(singleEvent.date + " " + singleEvent.time)}
								</Moment>
							</div>
							<div>
								<strong>Time:</strong>{" "}
								<Moment format="h:mm a">
									{new Date(singleEvent.date + " " + singleEvent.time)}
								</Moment>
							</div>{" "}
							<div className="mr-2">
								<strong>Address:</strong> {singleEvent.locationStreet}{" "}
								{singleEvent.locationCity}, {singleEvent.locationState},{" "}
								{singleEvent.locationZipCode}
							</div>
						</div>
						<div>{singleEvent.description}</div>
					</div>
				)}
			</div>
		</MainLayout>
	);
};

export default SingleEvent;
