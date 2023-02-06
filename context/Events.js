import { useState, createContext } from "react";
import { db } from "../firebase/index";
import {
	collection,
	addDoc,
	doc,
	getDocs,
	getDoc,
	deleteDoc,
	updateDoc,
	orderBy
} from "firebase/firestore";
import { limit } from "firebase/firestore/lite";
export const EventsContext = createContext(null);

export const EventsProvider = ({ children }) => {
	const [events, setEvents] = useState([]);
	const [singleEvent, setSingleEvent] = useState({});
	const [loading, setLoading] = useState(true);

	// create a new event
	const createEvent = async (data) => {
		try {
			const docRef = await addDoc(collection(db, "events"), {
				title: data.title,
				date: data.date,
				time: data.time,
				description: data.description,
				locationStreet: data.locationStreet,
				locationCity: data.locationCity,
				locationState: data.locationState,
				locationZipCode: data.locationZipCode
			});
			console.log("Document added successfully " + docRef.id);
		} catch (error) {
			console.error("Error message: " + error.message);
		}
	};

	// listen for all events updates
	const getEvents = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, "events"));

			let tempEvents = [];
			querySnapshot.forEach((doc) => {
				if (doc.exists()) {
					tempEvents.push({ id: doc.id, ...doc.data() });
					setEvents([...tempEvents]);
					setLoading(false);
				}
			});
		} catch (error) {
			console.error("Error: " + error.message);
		} finally {
			setLoading(false);
		}
	};

	const getSingleEvent = async (id) => {
		try {
			const docRef = doc(db, "events", id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				// console.log("Document data:", docSnap.data());
				setSingleEvent(docSnap.data());
				setLoading(false);
			} else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		} catch (error) {
			console.log("Error getting document:", error);
		}
	};

	const deleteSingleEvent = async (id) => {
		try {
			const docRef = doc(db, "events", id);
			await deleteDoc(docRef);
			console.log("Document successfully deleted!");
			getEvents();
		} catch (error) {
			console.error("Error removing document: ", error);
		} finally {
			getEvents();
		}
	};

	const updateSingleEvent = async (id, data) => {
		try {
			const docRef = doc(db, "events", id);
			await updateDoc(docRef, {
				title: data.title,
				date: data.date,
				time: data.time,
				description: data.description,
				locationStreet: data.locationStreet,
				locationCity: data.locationCity,
				locationState: data.locationState,
				locationZipCode: data.locationZipCode
			});
			console.log("Document successfully updated!");
		} catch (error) {
			console.error("Error updating document: ", error);
		}
	};

	return (
		<EventsContext.Provider
			value={{
				createEvent,
				getEvents,
				events,
				getSingleEvent,
				setSingleEvent,
				singleEvent,
				loading,
				deleteSingleEvent,
				updateSingleEvent
			}}>
			{children}
		</EventsContext.Provider>
	);
};
