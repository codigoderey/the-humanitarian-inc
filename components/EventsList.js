import React from "react";
import EventItem from "./EventItem";

const EventsList = ({ events, user, deleteSingleEvent }) => {
	return (
		<div className="container">
			<div className="list-group">
				{events.length === 0 && (
					<div className="mb-5">No events registered.</div>
				)}
				{events
					.map((e) => (
						<EventItem
							key={e.id}
							event={e}
							user={user}
							deleteSingleEvent={deleteSingleEvent}
						/>
					))
					.sort((a, b) => {
						return new Date(a.props.event.date) - new Date(b.props.event.date);
					})}
			</div>
		</div>
	);
};

export default EventsList;
