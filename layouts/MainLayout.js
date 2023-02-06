import React, { useState } from "react";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Head from "next/head";
import FloatingContact from "../components/FloatingContact";
import { useRouter } from "next/router";
import { isAdmin as admin } from "../public/assets/js/utils";
import AuthenticatedLayout from "./AuthenticatedLayout";

const MainLayout = ({ children }) => {
	const { pathname } = useRouter();
	const [isAdmin] = useState(admin(pathname));

	return (
		<>
			<Head>
				<meta http-equiv="content-type" content="text/html; charset=utf-8" />
				<meta name="author" content="Rey's Code - Javascript Ecosystem" />
				<meta
					name="description"
					content="The Humanitarian Inc. Website - Donate for an honest cause."
				/>
				<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />

				{/* title */}
				<title>The Humanitarian Inc. | A Non Profit Organization</title>
			</Head>
			<AuthenticatedLayout>
				<div id="wrapper" className="clearfix">
					<Navigation />
					{children}

					<div id="gotoTop" className="icon-angle-up"></div>
					{!isAdmin && <FloatingContact />}
					<Footer />
				</div>
			</AuthenticatedLayout>
		</>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node.isRequired
};

export default MainLayout;
