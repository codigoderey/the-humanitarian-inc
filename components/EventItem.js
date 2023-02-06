import React from "react";
import Moment from "react-moment";

const EventItem = ({ event, user, deleteSingleEvent }) => {
	return (
		<div className="list-group-item flex-column align-items-start my-2 border rounded">
			<div className="d-flex w-100 justify-content-between">
				<h3 className="mb-1">{event.title}</h3>
				<div className="d-flex align-items-center">
					{user && (
						<>
							<div
								style={{ cursor: "pointer" }}
								className="icon-trash1 text-danger lead mx-3"
								title="Delete Event"
								onClick={() => deleteSingleEvent(event.id)}></div>
							<a
								href={`/events/edit/${event.id}`}
								className="icon-edit1 text-warning lead"
								title="Edit Event"></a>
						</>
					)}
				</div>
			</div>
			<div className="bg-light p-2 border mb-2">
				<div>
					<strong>Date:</strong>{" "}
					<Moment format="MMMM Do, YYYY">
						{new Date(event.date + " " + event.time)}
					</Moment>
				</div>
				<div>
					<strong>Time:</strong>{" "}
					<Moment format="h:mm a">
						{new Date(event.date + " " + event.time)}
					</Moment>
				</div>{" "}
				<div className="mr-2">
					<strong>Address:</strong> {event.locationStreet} {event.locationCity},{" "}
					{event.locationState}, {event.locationZipCode}
				</div>
			</div>
			<div className="mt-3">
				<a href={`/events/${event.id}`}>View Details</a>
			</div>
		</div>
	);
};

export default EventItem;
