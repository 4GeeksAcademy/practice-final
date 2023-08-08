import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card" style={{height: "550px", width:"400px"}}>
      <div className="d-flex, justify-content-center">
        <img className="card-img-top" alt="dog" src={props.item.image}
          style={{ width: "300px",  borderRadius: "5px", objectFit: "cover" }}/>
      </div>
     
      
        
      <div className="card-body">
        <h5 className="card-title">Name: {props.item.name}</h5>
        <p className="card-text">Age: {props.item.age}</p>
        <p className="card-text">Breed: {props.item.breed}</p>
        <p className="card-text">Gender: {props.item.gender}</p>
        <p className="card-text">Quick glance: {props.item.info}</p>
        <div className="buttonContainer">
          <Link to={"/dog/" + props.id}>
            <button href="#" className="btn btn-outline-primary">
              Find Out More
            </button>
          </Link>
          <button
            className="favoritesCards"
            onClick={() => {
              if (store.favorites.includes(props.item.name)) {
                alert("Dog already on the list");
              } else {
                actions.addFavorites(props.item.name);
              }
            }}>
            <div style={{ marginLeft: "10px" }}>
              <i className="fa fa-heart"></i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;