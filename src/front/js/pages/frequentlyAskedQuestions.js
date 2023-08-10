import React from "react";
import { Link } from "react-router-dom";

export const FrequentlyAskedQuestions=()=>{

	return (
    
		<div className="container text-center bg-info">
			<div className="container p-6 m-7">
            <h2 className="p-4">FAQs</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item  alert alert-info">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            I am not technology-savy. Is this site for me?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">You don't need to be a technology expert to be able to use our services. Our website is created with a user-friendly interface so that people of all ages can easily access our services.</div>
                    </div>
                </div>
                <div className="accordion-item  alert alert-info">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How do I select a dog?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">You can browse the images of the dogs and if you like any, click on it to get more details.</div>
                    </div>
                </div>
                <div className="accordion-item  alert alert-info">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            What if someday I am not able to make it to my WE-Time session?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">We totally understand that unforeseen events do come up. You can easily cancel or reschedule your visit.</div>
                    </div>
                </div>
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