import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>A new user?</h1>
			<Link to="/signup" >
				<h4>Create an account</h4>
			</Link>

			<img src="https://picsum.photos/id/56/300/200"/>
			
			<div className="alert alert-info">
				<h1>Already registered?</h1>
				<Link to="/login" >
					<h4>Login</h4>
				</Link>
			</div>
			
		</div>
	);
};
