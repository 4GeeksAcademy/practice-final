import React from "react";
import Button from "./button.jsx";
import { Link } from "react-router-dom";

const CardTwo = (props) => {
	return (
		<div className="card border-light" key={props.idx}>
          	
			{props.idx%2==0 ? (
				<div className="row g-0 p-4">
					<div className="col-sm-4 mt-5">
						<img src={props.imageUrlTwo} className="img-fluid rounded-start" width="600"  height="1500" alt="..."/>
					</div>
					<div className="col-sm-8">
						<div className="text-start ms-5">
							<h1 className="card-title text-center mt-3 mb-1">{props.titleTwo}</h1><br></br>
								
								<div className="card-body text-info h4">
									{props.descriptionTwo}
								</div>  
								<div className="card-text h6">
									{props.detailOne}
								</div>
								<div className="card-text h6">
									{props.detailTwo}
								</div>
								<div className="card-text h6">
									{props.detailThree}
								</div>
								<div className="card-text h6">
									{props.detailFour}
								</div>
								<div className="card-text h6">
									{props.detailFive}
								</div>
							
						</div><br></br>
					<h5 className="text-primary">To find out more<br></br>
						<Link to="/login" ><Button/></Link>
					</h5>
            	</div>
				</div>
				):(
					<div className="row g-0 p-4">
					
					<div className="col-sm-8">
						<div className="text-start ms-5">
							<h1 className="card-title text-center mt-3 mb-1">{props.titleTwo}</h1><br></br>
								
								<div className="card-body text-info h3">
									{props.descriptionTwo}
								</div>  
								<div className="card-text h6">
									{props.detailOne}
								</div>
								<div className="card-text h6">
									{props.detailTwo}
								</div>
								<div className="card-text h6">
									{props.detailThree}
								</div>
								<div className="card-text h6">
									{props.detailFour}
								</div>
								<div className="card-text h6">
									{props.detailFive}
								</div>
							
						</div><br></br>
					<h5 className="text-primary">To find out more
						<Link to="/login" ><br></br><Button/></Link>
					</h5>
            	</div>
					<div className="col-sm-4 mt-5">
						<img src={props.imageUrlTwo} className="img-fluid rounded-start" width="400"  height="900" alt="..."/>
					</div>
				</div>
				)}
				
        	
		</div>		
	);
};


export default CardTwo