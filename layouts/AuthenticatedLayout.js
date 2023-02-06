import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/Authentication";
import { useRouter } from "next/router";

const AuthenticatedLayout = ({ children }) => {
	const { push } = useRouter();
	const { persistUser, user } = useContext(AuthContext);

	useEffect(() => {
		persistUser();
	}, [persistUser, push, user]);

	return <>{children}</>;
};

export default AuthenticatedLayout;
