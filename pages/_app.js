import { useEffect } from "react";
import { AuthProvider } from "../context/Authentication";
import { EventsProvider } from "../context/Events";
import ToastifyLayout from "../layouts/ToastifyLayout";
import "moment-timezone";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		var elementParent = $(".floating-contact-wrap");
		$(".floating-contact-btn, .btn-contact")
			.off("click")
			.on("click", function (e) {
				elementParent.toggleClass("active");
				e.preventDefault(e);
			});
	});

	return (
		<>
			<AuthProvider>
				<EventsProvider>
					<ToastifyLayout>
						<Component {...pageProps} />
					</ToastifyLayout>
				</EventsProvider>
			</AuthProvider>
		</>
	);
}

export default MyApp;
