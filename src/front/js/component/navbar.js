import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import iconImageUrl from "../../img/icon.png";

export const Navbar = (props) => {

	const { store, actions } = useContext(Context);
	const location = useLocation();
	const navigate = useNavigate()
	const [showHover, setShowHover] = useState(-1);

	const logoutCondition = location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/signup"
	const data = localStorage.getItem("user")
	const parseData = JSON.parse(data)
	
	useEffect(()=>{
		console.log("inside useEffect")
		actions.getFavouriteDogs(parseData.id)
	},[])

	console.log(store.favorite)

	return (
		<nav className="navbar navbar-light bg-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={iconImageUrl} style={{ width: 70, height: 80 }}/>Hello Woof</span>
				</Link>
				
					<div className="d-flex">
						<Link to="/signup" >
							<h5>Signup</h5>
						</Link>
						&nbsp;&nbsp;&nbsp;
						<Link to="/login" >
							<h5>Login</h5>
						</Link>
					</div>	

					
				
				
				<div className="ml-auto">
					{logoutCondition && <button onClick={() => actions.logOut(navigate)} className="btn btn-primary">Log Out</button>}
					{logoutCondition && <div className="btn-group">
						<button
							className="btn btn-outline-primary btn-lg dropdown-toggle favorites"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
								<h6>Favorites  <span className="badge bg bg-primary text-white">{store.favorites.length}</span></h6>
								
						</button>
							<ul className="dropdown-menu bg bg-primary text-white ps-2">
								{store.favorites.length > 0 ? (
									store.favorites.map((item, index) => {
								return (
									<div>
										<li
											className="dropdown-item d-flex fw-bold"
											key={index}
											onMouseEnter={() => setShowHover(index)}
											onMouseLeave={() => setShowHover(-1)}>
											{item}
											<div
											className="deleteButton fw-bold"
											onClick={(e) => {
												actions.deleteItem(index);
												e.stopPropagation();
											}}>
											<span
												className="ms-4 bg bg-danger rounded-pill"
												type="button">
												{showHover == index ? (
												<div style={{ width: "40px", textAlign: "center" }}>
													<i className="fa fa-times"></i>
												</div>
												) : (
												""
												)}
											</span>
											</div>
										</li>
									</div>
									);
									})
								) : (
									<p className="emptyList fw-bold">No favorites yet</p>
								)}
							</ul>
								</div>}
				</div>
			</div>
		</nav>
	);
};