import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import dogImageUrl from "../../img/dog.jpg";
import dog1ImageUrl from "../../img/dog1.jpg";
import dog3ImageUrl from "../../img/dog3.jpg";
import cuddleImageUrl from "../../img/cuddle.jpg";
import kidImageUrl from "../../img/kid.jpg";
import oldImageUrl from "../../img/old.jpg";
import iconImageUrl from "../../img/icon.png";
import CardTwo from "../component/cardTwo.jsx";
import Card from "../component/card.jsx";


const dataTwo = [{titleTwo:"Who is Hello Woof for?",
    descriptionTwo:"An ardent dog-lover, you have always wanted one but...", 
    detailOne: "💔  Haven't got enough space at home and don't want to see your dog caged up in a tiny apartment!", 
    detailTwo:"💔  Haven't got enough time everyday to walk or play with the dog and it affects you that your dog misses exercise!",
    detailThree: "💔  Need to travel frequently for business or personal reasons and it breaks your heart to leave the dog alone!", 
    detailFour: "💔  Your partner/children are allergic to dogs and their health comes first!",
    detailFive: "💔  Your present economic condition doesn't allow you to have a dog for it means new expenditures!"
    },
    {titleTwo: "How can Hello Woof help you?",
    descriptionTwo: "There are many dogs in the dog shelters that are waiting to get adopted or have lost all hopes of ever getting adopted. They also need and deserve love, affection and human attention.",
    detailOne:"💖  We try to bring people who want a dog but cannot have one at home and such dogs together",
    detailTwo: "💖  It's very simple. You select a dog or as many dogs as you like to play with and spend time with. We call it 'WE-Time'",
    detailThree: "💖  All you need to do is book a session specifying the dog/dogs, date and time",
    detailFour:"💖  You need to pay a token amout, which is called Donation. This amount is used to provide a better life to the dogs at the dog shelter"

    }]
    

    const data = [{title:"Select a Dog", description:"From our list of dogs you can select the dog or dogs you like the best.You can also select based on the breed."},
    {title:"Book the WE-Time", description:"Based on your convenience you can book a day and a time slot to spend time playing with your dog friend."},
    {title:"Make Payment Online", description:"You pay a token fee, which we call Donation. This amount goes for the welfare of the dogs in the dog shelter."}]
    

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
			<div className="row gap-4 m-5">
				{dataTwo.map(cardTwo =><CardTwo
					titleTwo={cardTwo.titleTwo}
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
			  
		</div>		
		</div>
	);
};
