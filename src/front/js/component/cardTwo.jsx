import React from "react";
import Button from "./button.jsx";
import dog1ImageUrl from "../../img/dog1.jpg";
import dog3ImageUrl from "../../img/dog3.jpg";
import { Link } from "react-router-dom";

const CardTwo = (props) => {
	return (
		<div className="card border-light" key={props.idx}>
          	
			{props.idx%2==0 ? (
				<div className="row g-0 p-4">
					<div className="col-4 mt-5">
						<img src={dog3ImageUrl} className="img-fluid rounded-start" width="300"  height="600" alt="..."/><br></br><br></br>
						<img src={dog1ImageUrl} className="img-fluid rounded-start" width="300"  height="600" alt="..."/>
					</div>
					<div className="col-8">
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
							
						</div>
					<h5 className="text-primary">To find out more
						<Link to="/login" ><Button/></Link>
					</h5>
            	</div>
				</div>
				):(
					<div className="row g-0 p-4">
					
					<div className="col-8">
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
							
						</div>
					<h5 className="text-primary">To find out more
						<Link to="/login" ><Button/></Link>
					</h5>
            	</div>
				<div className="col-4 mt-5">
						<img src={dog3ImageUrl} className="img-fluid rounded-start" width="300"  height="600" alt="..."/><br></br><br></br>
						<img src={dog1ImageUrl} className="img-fluid rounded-start" width="300"  height="600" alt="..."/>
					</div>
				</div>
				)}
				
        	
		</div>		
	);
};


export default CardTwo