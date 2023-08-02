import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import iconImageUrl from "../../img/icon.png";

export const Navbar = () => {

	const { actions } = useContext(Context)
	const location = useLocation();
	const navigate = useNavigate()

	const logoutCondition = location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/signup"

	return (
		<nav className="navbar navbar-light bg-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={iconImageUrl} style={{ width: 90, height: 90 }}/>Hello Woof</span>
				</Link>
				
					<div>
						<Link to="/signup" >
							<h5>Signup</h5>
						</Link>
					</div>
					<div>
						<Link to="/login" >
							<h5>Login</h5>
						</Link>
					</div>	
				
				
				<div className="ml-auto">
					{logoutCondition && <button onClick={() => actions.logOut(navigate)} className="btn btn-primary">Log Out</button>}
				</div>
			</div>
		</nav>
	);
};