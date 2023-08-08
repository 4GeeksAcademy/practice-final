import React from "react";
import { Link } from "react-router-dom";
import iconImageUrl from "../../img/icon.png";
import Card from "../component/card.jsx";

const data = [{title:"Jane Doe", description:"CEO and Founder. Some text that describes me lorem ipsum ipsum lorem."},
    {title:"Mike Ross", description:"Designer and Developer. Some text that describes me lorem ipsum ipsum lorem."},
    {title:"John Doe", description:"Designer and Developer. Some text that describes me lorem ipsum ipsum lorem."}]

export const AboutUs=()=>{

	return (
        <div className="bg-info">
            <div className="text-center p-5">
                <h1>About Us Page</h1><br></br>
                <h5>We are an NGO working with the dog shelter Happy Dogs. Our platform provides the users access to the dogs in the dog shelter.</h5>
                <h5>We try to bring joy and happiness in the lives of the dogs that live in the dog shelter and the persons who love dogs but cannot have one at home.The money we raise in the endeavour is used for the welfare of the dogs.</h5>
            </div>
            <h2 className="text-center bg bg-light p-2">Our Team</h2>
       
            <div className="row gap-4 m-4">
                    <div className="row gap-4 m-4">
                        {data.map(card =><Card
                            title={card.title}
                            description={card.description}
                            
                        />)}
                    </div>
                </div>

            
    </div>


    );
};