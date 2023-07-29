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
                    <img className="img1" height="500px" width="100%" src={dogImageUrl} className="d-block w-100 h-20"alt="..."/>
                    <div className="carousel-caption">
                        <h2>Whether you and your family are looking for a puppy or a more grown dog, you can find your new furry friend here.</h2><br></br>
                        <h3>Explore dogs on Hello Woof</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img1" height="500px" width="100%" src={dog1ImageUrl} className="d-block w-100 h-20" alt="..."/>
                    <div className="carousel-caption">
                    <h2>Whether you and your family are looking for a puppy or a more grown dog, you can find your new furry friend here.</h2><br></br>
                        <h3>Explore dogs on Hello Woof</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="img1" height="500px" width="100%" src={dog3ImageUrl} className="d-block w-100 h-20" alt="..."/>
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
        </div>

        <div className="body p-5">
            <h3>See how Hello Woof works</h3>
            <div className="container-1 d-flex p-4 ">
                <div className="card">
                    <div className="card-body m-3">
                        <img className="img2" height="150px" width="200px" src={iconImageUrl}/>
                        <h5 className="card-title">Select a Dog</h5>
                        <p className="card-text">From our list of dogs you can select the dog or dogs you like the best.You can also select based on the breed size.</p>
                        <button type="button" className="btn btn-secondary">STEP 1</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body m-3">
                        <img className="img2" height="150px" width="200px" src={iconImageUrl}/>
                        <h5 className="card-title">Book a WE-Time session</h5>
                        <p className="card-text">Based on your convenience you can book a day and a time slot to spend time with your furry friend.</p>
                        <button type="button" className="btn btn-secondary">STEP 2</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body m-3">
                        <img className="img2" height="150px" width="200px" src={iconImageUrl}/>
                        <h5 className="card-title">Make payment online</h5>
                        <p className="card-text">You can pay the token fee, which we call Donation.This amount goes for the welfare of the dogs in the dog shelter.</p>
                        <button type="button" className="btn btn-secondary">STEP 3</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
    )
}