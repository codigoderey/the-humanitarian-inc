import React, { useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "../../context/Authentication";
import { useRouter } from "next/router";

const LoginAdminPage = () => {
	const { push } = useRouter();
	const { login } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();
		try {
			const authenticated = await login(email, password);
			if (authenticated) {
				push("/admin");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Head>
				<title>Login to your admin account</title>
			</Head>
			<div className="container py-5">
				The Humanitarian Inc.
				<a href="/">
					<div className="mb-5">
						<Image
							src="/assets/logo.png"
							alt="business logo"
							width={100}
							height={100}
						/>
					</div>
				</a>
				<h1 className="font-bold mb-5">Login to your account</h1>
				<form onSubmit={onSubmit} className="border p-5 rounded">
					<div className="form-group">
						<label className="mb-1">Email:</label>
						<input
							className="border rounded form-control"
							type="email"
							placeholder="youremail@email.com"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label className="mb-1">Password:</label>
						<input
							className="border rounded form-control"
							type="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button className="bg-orange-300 px-4 py-2 rounded" type="submit">
						Login
					</button>
				</form>
				<div className="mt-2">
					<span className="mr-2">Don not have an account?</span> <br />
					<Link className="ml-4" href="/register/admin">
						<a>Create one here...</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default LoginAdminPage;
