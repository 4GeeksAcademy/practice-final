import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import iconImageUrl from "../../img/icon.png";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const location = useLocation();
	const navigate = useNavigate()
	const [showHover, setShowHover] = useState(-1);

	const logoutCondition = location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/signup"
	

	return (
		<nav className="navbar navbar-light bg-white">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src={iconImageUrl} style={{ width: 70, height: 80 }}/>Hello Woof</span>
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

					{/*<div className="dropdown ml-auto">
						<button
							className="btn btn-warning dropdown-toggle me-5 favorites"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
								<h5>Favorites</h5>
								<div
									className="bg bg-warning "
									style={{
									width: "30px",
									textAlign: "center",
									borderRadius: "15px",
									}}>
									<span>
									<strong>{store.favorites.length}</strong>
									</span>
								</div>
						</button>
							<ul className="dropdown-menu bg bg-warning">
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
													<i class="fa fa-times"></i>
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
								</div>*/}
				
				
				<div className="ml-auto">
					{logoutCondition && <button onClick={() => actions.logOut(navigate)} className="btn btn-primary">Log Out</button>}
				</div>
			</div>
		</nav>
	);
};