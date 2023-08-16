import React from "react";
import ContactCard from "../component/contactCard.jsx";
import "../../styles/contact.css";
import exe1ImageUrl from "../../img/exe1.jpg";
import exe2ImageUrl from "../../img/exe2.jpg";
import exe3ImageUrl from "../../img/exe3.jpg";


    const contacts = [{title:"Jane Doe", imageUrlFour: exe2ImageUrl, role: "CEO and Founder", info: "Some text that describes me lorem ipsum ipsum lorem ipsum lorem ipsum", email: "jane@test.com", phone: "123456789"},
    {title:"Mike Ross", imageUrlFour: exe1ImageUrl, role: "Designer and Developer", info: "Some text that describes me lorem ipsum ipsum lorem ipsum lorem ipsum", email: "ross@test.com", phone: "123456789"},
    {title:"Joe Doe", imageUrlFour: exe3ImageUrl, role: "Designer and Developer", info: "Some text that describes me lorem ipsum ipsum lorem ipsum lorem ipsum", email: "joe@test.com", phone: "123456789"}]

    
    
    {/*const data = [{title:"Jane Doe", description:"CEO and Founder. Some text that describes me lorem ipsum ipsum lorem."},
    {title:"Mike Ross", description:"Designer and Developer. Some text that describes me lorem ipsum ipsum lorem."},
{title:"John Doe", description:"Designer and Developer. Some text that describes me lorem ipsum ipsum lorem."}] */}

export const AboutUs=()=>{

	return (
        <div className="bg-info">
            <div className="text-center p-5">
                <h1>About Us Page</h1><br></br>
                <h5>We are an NGO working with the dog shelter Happy Dogs. Our platform provides the users access to the dogs in the dog shelter.</h5>
                <h5>We try to bring joy and happiness in the lives of the dogs that live in the dog shelter and the persons who love dogs but cannot have one at home.The money we raise in the endeavour is used for the welfare of the dogs.</h5>
            </div>
            <h2 className="text-center bg bg-light p-2">Our Team</h2>
       
            {/*<div className="row gap-4 m-4">
                    <div className="row gap-4 m-4">
                        {data.map(card =><Card
                            title={card.title}
                            description={card.description}
                            
                        />)}
                    </div>
                        </div> */}
                        
            <div className="row gap-4 m-4">
                    <div className="row gap-4 m-4">
                        {contacts.map(contactCard =><ContactCard
                            title={contactCard.title}
                            imageUrlFour={contactCard.imageUrlFour}
                            role={contactCard.role}
                            info={contactCard.info}
                            email={contactCard.email}
                            phone={contactCard.phone}
                            
                        />)}
                    </div>
            </div>

            
    </div>


    );
};