import React, { useEffect, useContext, useState } from "react";
import MainLayout from "../../../layouts/MainLayout";
import ValidateAuthLayout from "../../../layouts/ValidateAuthLayout";
import { EventsContext } from "../../../context/Events";
import { useRouter } from "next/router";
import Moment from "react-moment";

const EditEvent = () => {
	const {
		getSingleEvent,
		singleEvent,
		loading,
		updateSingleEvent,
		setSingleEvent
	} = useContext(EventsContext);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (!id) return;
		getSingleEvent(router.query.id);
	}, [id]);

	const onChange = (e) => {
		setSingleEvent({
			...singleEvent,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(singleEvent);
		await updateSingleEvent(id, singleEvent);
		router.push("/events");
	};

	return (
		<MainLayout>
			<ValidateAuthLayout>
				<div className="container">
					{loading ? (
						<div>Loading event details...</div>
					) : (
						<form
							className="mx-5 my-5"
							id="floating-contact"
							onSubmit={onSubmit}>
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
									onChange={onChange}
									value={singleEvent.title}
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
									onChange={onChange}
									value={singleEvent.date}
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
									onChange={onChange}
									value={singleEvent.time}
								/>
							</div>

							<label>Event location</label>
							<div className="bg-transparent mb-3">
								<input
									type="text"
									name="locationStreet"
									id="floating-contact-email"
									className="form-control required m-1 w-50"
									onChange={onChange}
									value={singleEvent.locationStreet}
									placeholder="Enter street"
								/>
								<input
									type="text"
									name="locationCity"
									id="floating-contact-email"
									className="form-control required m-1 w-50"
									onChange={onChange}
									value={singleEvent.locationCity}
									placeholder="Enter city"
								/>
								<input
									type="text"
									name="locationState"
									id="floating-contact-email"
									className="form-control required m-1 w-50"
									onChange={onChange}
									value={singleEvent.locationState}
									placeholder="Enter state"
								/>
								<input
									type="text"
									name="locationZipCode"
									id="floating-contact-email"
									className="form-control required m-1 w-50"
									onChange={onChange}
									value={singleEvent.locationZipCode}
									placeholder="Enter zip code"
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
									onChange={onChange}
									value={singleEvent.description}
								/>
							</div>
							<button
								type="submit"
								name="floating-contact-submit"
								className="btn btn-dark w-100 py-2">
								Update event
							</button>
						</form>
					)}
				</div>
			</ValidateAuthLayout>
		</MainLayout>
	);
};

export default EditEvent;
