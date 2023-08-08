import React from "react";
import { Link } from "react-router-dom";
import phoneImageUrl from "../../img/phone.png";
import locationImageUrl from "../../img/location.png";
import mailImageUrl from "../../img/mail.png";
import whatsappImageUrl from "../../img/whatsapp.png";

export const Contact=()=>{

	return (
    
		<div className="container text-center bg-info p-3">
			<h2>Contact Us</h2><br></br>
            <h4>We are interested in hearing from you.</h4><br></br>
			<div className="d-flex justify-content-between m-4">
				<div className="p-3">
					<img src={phoneImageUrl} style={{height: "44px", width:"42px"}}/>
					<h4 className="text-primary">+34 123456789</h4>
				</div>
				<div className="border border-primary border-5 border-white border-top-0 border-end-0 border-bottom-0 p-3">
					<img src={whatsappImageUrl} style={{height: "44px", width:"42px"}}/>
					<h4 className="text-primary">+34 667788909</h4>
				</div>
				<div className="border border-primary border-5 border-white border-top-0 border-end-0 border-bottom-0 p-3">
					<img src={locationImageUrl} style={{height: "44px", width:"42px"}}/>
					<h4 className="text-primary">Alcobendas, Madrid, Spain</h4>
				</div>
				<div className="border border-primary border-5 border-white border-top-0 border-end-0 border-bottom-0 p-3">
					<img src={mailImageUrl} style={{height: "44px", width:"42px"}}/>
					<h4 className="text-primary">info@hellowoof.com</h4>
				</div>
			</div>
			
			
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg btn-block m-3" href="#" role="button">
					Back home
				</span>
			</Link>
			
		</div>
	);
};