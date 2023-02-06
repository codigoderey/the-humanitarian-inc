import React, { useEffect, useContext } from "react";
import Calendar from "../../components/Calendar";
import MainLayout from "../../layouts/MainLayout";
import Script from "next/script";
import { EventsContext } from "../../context/Events";
import EventsList from "../../components/EventsList";
import { AuthContext } from "../../context/Authentication";

const Events = () => {
	const { getEvents, events, loading, deleteSingleEvent } =
		useContext(EventsContext);

	const { user } = useContext(AuthContext);

	useEffect(() => {
		getEvents();
	}, []);

	return (
		<MainLayout>
			<div className="container pt-5 pb-3 mb-0">
				<h2 className="m-0">Our events coming up!</h2>
			</div>

			{loading ? (
				<div className="container mb-5">Loading events...</div>
			) : (
				<EventsList
					events={events}
					user={user}
					deleteSingleEvent={deleteSingleEvent}
				/>
			)}
			<Calendar />
		</MainLayout>
	);
};

export default Events;
