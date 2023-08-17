import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/about.css";

export const DogView = () => {
        const { store, actions } = useContext(Context);
        const params = useParams();
        const info = store.dog.find((dog, idx) => idx == params.id);
        console.log(info)
        
        return (
        <div className="container">
            
            <div className="row mb-4">
                <div className="col-5 text-center">
                    <img className="displayedImage border border-warning border-4 border-opacity-50" src={info ? info.image : ""}/>
                       
                </div>
                <div className="col text-dark">
                    <div className="d-flex justify-content-center">
                        <h1 className="text-center">{info && info.name}</h1>
                        <button
                            className="favoritesCards"
                            onClick={() => {
                                if (store.favorites.includes(info.name)) {
                                alert("Dog already on the list");
                                } else {
                                actions.addFavorites(info.name);
                                }
                            }}>
                            <div style={{ marginLeft: "10px" }}>
                            <i className="fa fa-heart text-danger"></i>
                            </div>
                        </button>
                    </div>

                    <h3>{info && info.detail}</h3>
                    
                </div>
            </div>
            <div className="row text-dark justify-content-center mt-4 border-top border-secondary pt-4">
                <div className="col">
                    <h4>Name</h4>
                    {info && info.name}
                </div>
                <div className="col">
                    <h4>Age</h4>
                    {info && info.age}
                </div>
                <div className="col">
                    <h4>Gender</h4>
                    {info && info.gender}
                </div>
                <div className="col">
                    <h4>Breed</h4>
                    {info && info.breed}
                </div>
                <div className="col">
                    <h4>At a quick glance</h4>
                    {info && info.info}
                </div>
            </div><br></br><hr></hr>
            <div className="text-center">
                <Link to= "/private">
                <button className="btn btn-lg btn-primary ms-2 h3">Back</button>
				</Link>
            </div>
        </div>
        );
        };