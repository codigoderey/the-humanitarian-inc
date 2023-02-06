import React, { useContext } from "react";
import { AuthContext } from "../../context/Authentication";
import MainLayout from "../../layouts/MainLayout";
import ValidateAuthLayout from "../../layouts/ValidateAuthLayout";

const AdminHomePage = () => {
	const { user } = useContext(AuthContext);

	return (
		<MainLayout>
			<ValidateAuthLayout>
				<div className="container mx-auto my-5">
					<h3 className="m-0">
						Welcome {user?.displayName}, this is your admin page.
					</h3>
					<p>You can add events from here.</p>
				</div>
				<div className="container mb-5">
					<h3 className="mb-0">Create new event</h3>
					<a href="/events/new">New Event</a>
				</div>
			</ValidateAuthLayout>
		</MainLayout>
	);
};

export default AdminHomePage;
