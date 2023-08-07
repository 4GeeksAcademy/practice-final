import React from "react";
import Button from "./button.jsx";
import dog1ImageUrl from "../../img/dog1.jpg";
import dog3ImageUrl from "../../img/dog3.jpg";

const CardTwo = (props) => {
	return (
		<div className="card max-width: 540px border-light">
          	<div className="row g-0 p-4">
				<div className="col-md-4 mt-5">
					<img src={dog3ImageUrl} className="img-fluid rounded-start" width="300"  height="600" alt="..."/><br></br><br></br>
					<img src={dog1ImageUrl} className="img-fluid rounded-start" width="300"  height="600" alt="..."/>
				</div>
            	<div className="col-md-8">
              		<div className="text-start ms-5">
              			<h1 className="card-title text-center mt-3 mb-1">{props.titleTwo}</h1><br></br>
							<div className="card-body text-info h3">
							{props.descriptionTwo}
							</div>  
							<div className="card-body h6">
							{props.detailOne}
							</div>
							<div className="card-body h6">
							{props.detailTwo}
							</div>
							<div className="card-body h6">
							{props.detailThree}
							</div>
							<div className="card-body h6">
							{props.detailFour}
							</div>
							<div className="card-body h6">
							{props.detailFive}
							</div>
                		
              		</div>
					<h4 className="text-primary">To find out more<Button/></h4>
            	</div>
        	</div>
		</div>		
	);
};


export default CardTwo