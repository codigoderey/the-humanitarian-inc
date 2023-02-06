import React, { useState, useContext } from "react";
import MainLayout from "../../layouts/MainLayout";
import ValidateAuthLayout from "../../layouts/ValidateAuthLayout";
import { EventsContext } from "../../context/Events";
import { useRouter } from "next/router";
import Moment from "react-moment";

const NewEvent = () => {
	const { push } = useRouter();
	const { createEvent } = useContext(EventsContext);
	const [event, setEvent] = useState({
		title: "",
		date: "",
		time: "",
		description: "",
		locationStreet: "",
		locationCity: "",
		locationState: "",
		locationZipCode: ""
	});

	const onChange = (e) => {
		setEvent({
			...event,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		let data = event;
		await createEvent(data);
		push("/events");
	};

	return (
		<MainLayout>
			<ValidateAuthLayout>
				<div className="container">
					<form className="mx-5 my-5" id="floating-contact" onSubmit={onSubmit}>
						<h3>Enter event details</h3>

						<label>Event title</label>
						<div className="input-group mb-3">
							<span className="input-group-text bg-transparent">
								<i className="icon-text-height"></i>
							</span>
							<input
								type="text"
								name="title"
								id="floating-contact-name"
								className="form-control required"
								value={event.title}
								onChange={onChange}
							/>
						</div>

						<label>Event date</label>
						<div className="input-group mb-3">
							<span className="input-group-text bg-transparent">
								<i className="icon-calendar"></i>
							</span>
							<input
								type="date"
								name="date"
								id="floating-contact-email"
								className="form-control required"
								value={event.date}
								onChange={onChange}
							/>
						</div>

						<label>Event time</label>
						<div className="input-group mb-3">
							<span className="input-group-text bg-transparent">
								<i className="icon-calendar"></i>
							</span>
							<input
								type="time"
								name="time"
								id="floating-contact-email"
								className="form-control required"
								value={event.time}
								onChange={onChange}
							/>
						</div>

						<label>Event location</label>
						<div className="bg-transparent mb-3">
							<input
								type="text"
								name="locationStreet"
								id="floating-contact-email"
								className="form-control required m-1 w-50"
								value={event.locationStreet}
								placeholder="Enter street"
								onChange={onChange}
							/>
							<input
								type="text"
								name="locationCity"
								id="floating-contact-email"
								className="form-control required m-1 w-50"
								value={event.locationCity}
								placeholder="Enter city"
								onChange={onChange}
							/>
							<input
								type="text"
								name="locationState"
								id="floating-contact-email"
								className="form-control required m-1 w-50"
								value={event.locationState}
								placeholder="Enter state"
								onChange={onChange}
							/>
							<input
								type="text"
								name="locationZipCode"
								id="floating-contact-email"
								className="form-control required m-1 w-50"
								value={event.locationZipCode}
								placeholder="Enter zip code"
								onChange={onChange}
							/>
						</div>

						<label>Event description</label>
						<div className="input-group mb-3">
							<span className="input-group-text bg-transparent">
								<i className="icon-info"></i>
							</span>
							<textarea
								name="description"
								id="floating-contact-message"
								className="form-control required"
								cols="30"
								rows="6"
								value={event.description}
								onChange={onChange}
							/>
						</div>
						<button
							type="submit"
							name="floating-contact-submit"
							className="btn btn-dark w-100 py-2">
							Create event
						</button>
					</form>
				</div>
			</ValidateAuthLayout>
		</MainLayout>
	);
};

export default NewEvent;
