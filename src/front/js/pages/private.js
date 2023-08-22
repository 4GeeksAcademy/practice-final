import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dogs } from "./dogs";
import { Appointments } from "./appointment";
import { UserHome } from "./userhome";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import "../../styles/home.css";

export const Private = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=>{
		actions.getUser()
		
	}, []) 
	const data = localStorage.getItem("user")
	const parseData = JSON.parse(data)
	
	return (
		<div className="container">
			{console.log(store)}
			<Tabs>
				<TabList>
					<Tab>
						User Home <i className="fa-solid fa-house-chimney-user"></i>
					</Tab>
					<Tab>
						Book a We-Time Session <i className="fa-regular fa-calendar-check"></i>
					</Tab>
					<Tab>
						Upcoming WE-Time Sessions <i className="fa-solid fa-laptop-medical"></i>
					</Tab>
				</TabList>
				<TabPanel>
					<h2>Welcome back {parseData.user.name}! </h2>
					<br />
					<UserHome />	
				</TabPanel>
				<TabPanel>
					<Dogs />
					<h4>&nbsp;Book your next WE-Time Session in four easy steps...</h4>
					<div className="d-flex">
						<div className="flex-fill">
							<ListGroup as="ol" numbered>
								<ListGroup.Item as="li">Select a dog <i class="fa-solid fa-user-doctor"></i></ListGroup.Item>
								<ListGroup.Item as="li">Add comments <i class="fa-regular fa-comment"></i></ListGroup.Item>
								<ListGroup.Item as="li">Select date and time <i class="fa-regular fa-calendar-days"></i></ListGroup.Item>
								<ListGroup.Item as="li">Accept terms and conditions <i class="fa-solid fa-clipboard-check"></i></ListGroup.Item>
							</ListGroup>
						</div>
					</div>
					<br />
					<Link to="/booking">
						<Button variant="primary" size="lg">Book a WE-Time Session</Button>
					</Link>
				</TabPanel>
				<TabPanel>
					<Appointments />
				</TabPanel>
				
			</Tabs>
		</div>
	);
};
