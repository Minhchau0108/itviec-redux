import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar} from "react-bootstrap";
import logo from "../logo.svg";

const PublicNavbar = () => {
	return (
		<Navbar bg="dark" expand="lg">
			<Navbar.Brand className="mr-auto">
				<img src={logo} alt="CoderSchool" width="50px" />
			</Navbar.Brand>
		</Navbar>
	);
};

export default PublicNavbar;