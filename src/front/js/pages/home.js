import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import dogImageUrl from "../../img/dog.jpg";
import dog1ImageUrl from "../../img/dog1.jpg";
import dog3ImageUrl from "../../img/dog3.jpg";
import pupImageUrl from "../../img/pup.jpg";
import cuddleImageUrl from "../../img/cuddle.jpg";
import kidImageUrl from "../../img/kid.jpg";
import oldImageUrl from "../../img/old.jpg";
import iconImageUrl from "../../img/icon.png";
import CardTwo from "../component/cardTwo.jsx";
import Card from "../component/card.jsx";
import ReviewCard from "../component/reviewCard.jsx";


const dataTwo = [{titleTwo:"Who is Hello Woof for?",
    imageUrlTwo: dog1ImageUrl,
    descriptionTwo:"An ardent dog-lover, you have always wanted one but...", 
    detailOne: "💔  Haven't got enough space at home and don't want to see your dog caged up in a tiny apartment!", 
    detailTwo:"💔  Haven't got enough time everyday to walk or play with the dog and it affects you that your dog misses exercise!",
    detailThree: "💔  Need to travel frequently for business or personal reasons and it breaks your heart to leave the dog alone!", 
    detailFour: "💔  Your partner/children are allergic to dogs and their health comes first!",
    detailFive: "💔  Your present economic condition doesn't allow you to have a dog for it means new expenditures!"
    },
    {titleTwo: "How can Hello Woof help you?",
    imageUrlTwo: pupImageUrl,
    descriptionTwo: "There are many dogs in the dog shelters that are waiting to get adopted or have lost all hopes of ever getting adopted. They also need and deserve love, affection and human attention.",
    detailOne:"💖  We try to bring people who want a dog but cannot have one at home and such dogs together",
    detailTwo: "💖  It's very simple. You select a dog or as many dogs as you like to play with and spend time with. We call it 'WE-Time'",
    detailThree: "💖  All you need to do is book a session specifying the dog/dogs, date and time",
    detailFour:"💖  You need to pay a token amout, which is called Donation. This amount is used to provide a better life to the dogs at the dog shelter"

    }]
    

    const data = [{title:"Select a Dog", description:"From our list of dogs you can select the dog or dogs you like the best.You can also select based on the breed."},
    {title:"Book the WE-Time", description:"Based on your convenience you can book a day and a time slot to spend time playing with your dog friend."},
    {title:"Make Payment Online", description:"You pay a token fee, which we call Donation. This amount goes for the welfare of the dogs in the dog shelter."}]
    
    const dataThree =[{header:"Alexis", titleThree:"A wonderful experience", descriptionThree:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", footer:"20/1/2023"},
    {header:"Johnson", titleThree:"Easy to use app", descriptionThree:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", footer:"5/2/2023"},
    {header:"Raul", titleThree:"Worth recommending app", descriptionThree:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", footer:"28/3/2023"},
    {header:"Sara", titleThree:"Excellent and convenient", descriptionThree:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", footer:"7/5/2023"},
    {header:"Sonya", titleThree:"Better than any such app around", descriptionThree:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", footer:"30/7/2023"},
    ]


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="img1 opacity-75" height="600px" width="100%" src={cuddleImageUrl} alt="a dog"/>
                    <div className="carousel-caption">
                        <h2 className="text-dark">Whether you and your family are looking for a puppy or a more grown dog, you can find your new dog friend here.</h2><br></br>
                        <h3 className="text-primary bg-light opacity-75">Explore dogs on Hello Woof</h3>
                    </div>
                </div>
                <div className="carousel-item">
                <img className="img1 opacity-75" height="600px" width="100%" src={kidImageUrl} alt=" a dog"/>
                    <div className="carousel-caption">
                        <h2 className="text-dark">Whether you and your family are looking for a puppy or a more grown dog, you can find your new dog friend here.</h2><br></br>
                        <h3 className="text-primary bg-light opacity-75">Explore dogs on Hello Woof</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img1 opacity-75" height="600px" width="100%" src={oldImageUrl} />
                    <div className="carousel-caption">
                        <h2 className="text-dark">Whether you and your family are looking for a puppy or a more grown dog, you can find your new dog friend here.</h2><br></br>
                        <h3 className="text-primary bg-light opacity-75">Explore dogs on Hello Woof</h3>
                    </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div><br></br><br></br>

        <div>
			<div className="gap-4 mt-5">
				{dataTwo.map((cardTwo,index) =><CardTwo
					titleTwo={cardTwo.titleTwo}
                    idx={parseInt(index)+1}
					imageUrlTwo={cardTwo.imageUrlTwo}
					descriptionTwo={cardTwo.descriptionTwo}
					detailOne={cardTwo.detailOne}
					detailTwo={cardTwo.detailTwo}
					detailThree={cardTwo.detailThree}
					detailFour={cardTwo.detailFour}
					detailFive={cardTwo.detailFive}
				/>)}
		  	</div>
            
            <div className="row gap-4 m-4">
              <h1 className="p-4"> How does Hello Woof Work? </h1>
              <h3 className="text-info">In three easy steps you get to play and spend quality time with your dog friend</h3>
		  	    <div className="row gap-4 m-4">
                    {data.map(card =><Card
                        title={card.title}
                        description={card.description}
                        
                    />)}
		  	    </div>
            </div>
            
            <div className="container bg-light border-light mt-5 overflow-auto  p-4">
					<div className="row">
						<h4 className="display-5 text-center">What Our Users Have To Say</h4><br></br>
						<h4 className="text-success text-center">We have more than 1000 5-Star reviews!</h4><br></br>
							<div className="row gap-4 m-4">
                                {dataThree.map(reviewCard =><ReviewCard
                                    header={reviewCard.header}
                                    titleThree={reviewCard.titleThree}
                                    descriptionThree={reviewCard.descriptionThree}
                                    footer={reviewCard.footer}
								
								/>)}
							</div>
					</div>
			</div>
                
            <div className="text-container">
                <p className="typed">This is a paragraph of typed text.</p>
            </div>
			  
		</div>		
		</div>
	);
};
