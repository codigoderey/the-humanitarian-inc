import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AuthContext } from "../context/Authentication";
import Link from "next/link";

const Navigation = () => {
	const { user, logout } = useContext(AuthContext);
	const { pathname } = useRouter();

	const activeLink = (path) => {
		return pathname === path;
	};

	return (
		<header
			id="header"
			className="header-size-sm border-bottom-0"
			data-sticky-shrink="false">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row justify-content-lg-between">
						<div id="logo" className="me-lg-5">
							<Link href="/">
								<a
									style={{
										display: "flex",
										alignItems: "center"
									}}
									className="retina-logo"
									data-dark-logo="/assets/logo@2x.png">
									<img src="/assets/logo@2x.png" alt="the humanitarian logo" />
									<span
										className="d-none d-md-inline-block ms-1 fw-bold"
										style={{
											fontSize: "1.5rem"
										}}>
										The Humanitarian Inc.
									</span>
								</a>
							</Link>
						</div>
						<div className="header-misc">
							<Link href="/donate">
								<a className="button button-rounded button-light">
									<div>Donate</div>
								</a>
							</Link>
							{user && (
								<>
									<a
										href="/admin"
										className="button button-rounded button-dark">
										<div>
											<i className="icon-user"></i>Admin
										</div>
									</a>
									<div
										onClick={logout}
										className="button button-rounded button-dark cursor-pointer">
										<i className="icon-signout"></i>
									</div>
								</>
							)}
						</div>

						<div id="primary-menu-trigger">
							<svg className="svg-trigger" viewBox="0 0 100 100">
								<path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path>
								<path d="m 30,50 h 40"></path>
								<path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path>
							</svg>
						</div>

						<nav className="primary-menu with-arrows me-lg-auto">
							<ul className="menu-container align-self-start">
								<li className="menu-item">
									<span className="menu-bg col-auto align-self-start d-flex"></span>
								</li>
								<li className={`${activeLink("/") && "current"} menu-item`}>
									<Link href="/">
										<a className="menu-link">
											<div>Home</div>
										</a>
									</Link>
								</li>
								<li
									className={`${activeLink("/about") && "current"} menu-item`}>
									<Link href="/about">
										<a className="menu-link">
											<div>About</div>
										</a>
									</Link>
								</li>
								<li
									className={`${activeLink("/events") && "current"} menu-item`}>
									<Link href="/events">
										<a className="menu-link">
											<div>Events</div>
										</a>
									</Link>
								</li>
								{!user && (
									<li href="#" className="menu-item">
										<a className="menu-link btn-contact">
											<div>Contact</div>
										</a>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
	);
};

export default Navigation;
