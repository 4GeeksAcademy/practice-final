import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const Card = (props) => {
  const { store, actions } = useContext(Context);
  const [date, setDate] = useState(new Date());
  const data = localStorage.getItem("user")
	const parseData = JSON.parse(data)

  return (

    <div className="box">
      <div className="d-flex justify-content-center">
          <img className="displayedImage border border-warning border-4 border-opacity-50" src={props.item.image}/>
      </div>
     
      <div className="card-body">
        <h4 className="card-title text-primary text-center">{props.item.name}</h4>
        <p className="card-text ms-5"><b>Age:</b> {props.item.age}</p>
        <p className="card-text ms-5"><b>Breed:</b> {props.item.breed}</p>
        <p className="card-text ms-5"><b>Gender:</b> {props.item.gender}</p>
        
        <div className="buttonContainer">
          <Link to={"/dog/" + props.id}>
            <button href="#" className="btn btn-outline-primary ms-3">
              Find Out More
            </button>
          </Link>

          <Link to="/booking">
						<button className="btn btn-outline-primary ms-2">We-Time Session</button>
					</Link>
          
          {/*<button className="btn btn-outline-primary ms-2">
            <a href="https://calendar.app.google/akU8Mg1JroaeuZou5">Book a Session</a>
  </button>
          <div>
              <DatePicker
                timeIntervals={60}
                showTimeSelect
                minTime={new Date(0, 0, 0, 12, 0)}
                maxTime={new Date(0, 0, 0, 21, 0)}
                selected={date}
                onChange={date => setDate(date)}
                className="btn btn-outline-primary ms-2"
                filterDate={date => date.getDay() !=1}
              />
          </div> */}

          <button
            className="favoritesCards"
            onClick={() => {
              if (store.favorites.includes(props.item.name)) {
                alert("Dog already on the list");
              } else {
                actions.addDogToFavourite(props.item.id, parseData.id)
                actions.addFavorites(props.item.name);
              }
            }}>
            <div style={{ marginLeft: "10px" }}>
              <i className="fa fa-heart"></i>
            </div>
          </button>
        </div>
      </div>

      <div className="text-center">
            <Link to='/checkout'>
              <button className="btn btn-outline-primary ms-2">Pay</button>
					  </Link>
      </div> 
      
      {/*<div className="text-center">
        <button className="btn btn-outline-primary">
              <a href="https://donate.stripe.com/test_4gwdTjfu0gbF9GgaEE">Pay Now</a>
        </button>
      </div> */}

    </div>
  );
};

export default Card;