export const isAdmin = (pathname) => {
	if (
		pathname === "/admin" ||
		pathname === "/events/new" ||
		pathname === "/events/edit/[id]"
	) {
		return true;
	} else {
		return false;
	}
};

export const baseURL =
	process.env === "development"
		? "http://localhost:3000"
		: "https://nextjs-firebase-authentication.vercel.app";
