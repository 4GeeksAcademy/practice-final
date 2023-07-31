import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import dogImageUrl from "../../img/dog.jpg";
import dog1ImageUrl from "../../img/dog1.jpg";
import dog3ImageUrl from "../../img/dog3.jpg";
import iconImageUrl from "../../img/icon.png";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const [user, setUser] = useState(store.user)


    useEffect(() => {
        let storageUSer = JSON.parse(localStorage.getItem("user"))
        if (storageUSer && user === null) {
            setUser(() => storageUSer)
        }
        if (!storageUSer && user === null) {
            actions.getUser();
        }

    }, [user, store.user])


    return (
        <div>
        <>
            {user !== null ? `hello ${user.email}` : <></> }

        </>
    
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="img1" height="600px" width="100%" src={dogImageUrl} className="d-block w-100 h-20"alt="..."/>
                    <div className="carousel-caption">
                        <h2>Whether you and your family are looking for a puppy or a more grown dog, you can find your new furry friend here.</h2><br></br>
                        <h3>Explore dogs on Hello Woof</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img1" height="600px" width="100%" src={dog1ImageUrl} className="d-block w-100 h-20" alt="..."/>
                    <div className="carousel-caption">
                    <h2>Whether you and your family are looking for a puppy or a more grown dog, you can find your new furry friend here.</h2><br></br>
                        <h3>Explore dogs on Hello Woof</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img1" height="600px" width="100%" src={dog3ImageUrl} className="d-block w-100 h-20" alt="..."/>
                    <div className="carousel-caption">
                    <h2>Whether you and your family are looking for a puppy or a more grown dog, you can find your new furry friend here.</h2><br></br>
                        <h3>Explore dogs on Hello Woof</h3>
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

        <div className="container p-6 m-7">
            <h2 className="mt-0 mb-1">Who is <span className="text-info">Hello Woof</span> for?</h2><br></br>
                <div className="container d-flex"> 

                    <div className="container" >
                        <h3>An ardent dog-lover, you have always wanted one but...</h3><br></br>
                        <h6>☹️Haven't got enough space at home and don't want to see your dog caged up in a tiny apartment!</h6>
                        <h6>☹️Haven't got enough time everyday to walk or play with the dog and it affects you that your dog misses exercise! </h6>
                        <h6>☹️Need to travel frequently for business or personal reasons and it breaks your heart to leave the dog alone!</h6>
                        <h6>☹️Your partner/children are allergic to dogs and their health comes first!</h6>
                        <h6>☹️Your present economic condition doesn't allow you to have a dog for it means new expenditures</h6>
                        <h6>☹️Are not sure if you can shoulder the responsibilities and turn out to be a good dog-owner</h6>
                    </div>
                    <div>
                        <img className="rounded-circle" width="300"  height="300" src={dog3ImageUrl}/ >
                    </div>
                  
                </div>
        </div><hr></hr>

        <div className="container p-6 m-7">
            <h2 className="mt-0 mb-1">How can <span className="text-info">Hello Woof</span> help you?</h2><br></br>
                <div className="container d-flex"> 

                    <div className="container" >
                        <h5>There are many dogs in the dog sheltersthat are waiting to get adopted or have lost all hopes of ever getting adopted. They also need and deserve love, affection and human attention. </h5><br></br>
                        <h6>😀We try to bring people who want a dog but cannot have one at home and such dogs together.</h6>
                        <h6>😀It's very simple. You select a dog or as many dogs as you like to play with and spend time with. We call it "WE-Time"</h6>
                        <h6>😀All you need to do is book a session specifying the dog/dogs, date and time</h6>
                        <h6>😀You need to pay a token amout, which is called Donation. This amount is used to provide a better life to the dogs at the dog shelter</h6>
                    </div>
                    <div>
                        <img className="rounded-circle" width="300"  height="300" src={dog1ImageUrl}/ >
                    </div>
                  
                </div>
        </div><hr></hr>

        <div className="container p-6 m-7"> 
              <h2> How does<span className="text-info"> Hello Woof</span> Work? </h2><br></br>
              <p>In three easy steps you get to play and spend quality time with your dog friend</p>
            <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                        <button type="button" className="btn btn-secondary">STEP 1</button>
                    <img className="card-img-top" src={iconImageUrl} style={{ width: 300, height: 260 }}/>
                    <div className="card-body">
                      <h6 className="card-title text-primary">Select a Dog</h6><br></br>
                      <p className="card-text">From our list of dogs you can select the dog or dogs you like the best.You can also select based on the breed size.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <button type="button" className="btn btn-secondary">STEP 2</button> 
                      <img className="card-img-top" src={iconImageUrl} style={{ width: 300, height: 260 }}/>
                      <div className="card-body">
                        <h6 className="card-title text-primary">Book a WE-Time Session</h6><br></br>
                        <p className="card-text">Based on your convenience you can book a day and a time slot to spend time with your furry friend.</p>
                        <button type="button" className="btn btn-secondary">BOOK NOW</button>
                        <a style={{float:"none"}} target="_blank"  href="https://booking.setmore.com/scheduleappointment/72728ae9-1066-676a-a21d-0b018938cbcc"><img border="none" src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Settings/book-now-blue.svg" alt="Book an appointment with Hello Woof using Setmore"/></a>
                      </div>
                    </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                        <button type="button" className="btn btn-secondary">STEP 3</button>
                    <img className="card-img-top" src={iconImageUrl} style={{ width: 300, height: 260 }}/>
                    <div className="card-body">
                      <h6 className="card-title text-primary">Make Payment Online</h6><br></br>
                      <p className="card-text">You pay the token fee, which we call Donation.This amount goes for the welfare of the dogs in the dog shelter.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>


    </div>
       
    )
}