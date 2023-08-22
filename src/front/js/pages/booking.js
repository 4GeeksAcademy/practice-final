import React, { useState, useContext, useEffect } from "react";
import { useForm } from "../hooks/useform";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const Booking = () => {
    const { store, actions } = useContext(Context);
    
    
    const navigate = useNavigate();

    const [startDate, setStartDate] = useState(new Date());
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
      };
    
    useEffect(() =>{
		fetch(process.env.BACKEND_URL +"/api/dog")
		.then((result) => result.json())
		.then((data) => actions.setDogData(data));
	}, []);

    const data = localStorage.getItem("user")
    const parseData = JSON.parse(data)
    const [values, handleInputChange] = useForm({
        user_id: parseData.id,
        dog_id:'',
        time:'',
        user_comment:'',
    })

    console.log(values)

    const { user_id, dog_id, time, user_comment } = values  
    
    const [error, setError] = useState({
        user_id: false,
        dog_id: false,
        time: false,
        user_comment: false,
    })

    const errorStyle = {
        borderColor: "red",
    };

const createAppointment = async (event) => {
    event.preventDefault();
    setError({
        user_id: user_id === "",
        dog_id: dog_id === "",
        time: time === "",
        user_comment: user_comment === "",
    });
    if (
        user_id !== '' &&
        dog_id !== '' &&
        time !== '' &&
        user_comment !== ''
        ){
       try {
         const response = await fetch(process.env.BACKEND_URL+'/api/booking',{
            method: 'POST',
            body: JSON.stringify({
                user_id: store.user.user_id,
                dog_id: dog_id,
                time: time,
                user_comment: user_comment
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        if (response.ok){
            alert('Booked a session successfully')
            navigate("/private")
            return true
        }
       }
       catch (error){
            console.log(error)
       }
    }
}
	return (
        <div className="container">
            <div className="w-50 p-5 mx-auto border border-secondary rounded">
               
                <h3 className="text-center mb-4">Book a WE-Time Session</h3>
                <div className="d-flex">
                    <Form.Group className="mb-3 w-100" controlId="userName">
                        <Form.Label> Name</Form.Label>
                        <Form.Control type="user name" placeholder="" defaultValue={parseData.user.name} />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3 flex-shrink-1" controlId="userId">
                        <Form.Label> ID</Form.Label>
                        <Form.Control type="user id" placeholder="" defaultValue={parseData.id} />
                    </Form.Group>
                </div>
                <br />
                
                <Dropdown>
                    <Form.Select aria-label="Default select example" name="dog_id" value={dog_id} onChange={handleInputChange}>
                        <option>Select Dog</option>
                        {store.dog.map((dog) => {
                            return (
                                <option value= {dog.id}>{dog.name}</option>
                            );
                        })}
                    </Form.Select>   
                </Dropdown>  
                <br />
                <br />
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Any Notes?</Form.Label>
                    <Form.Control as="textarea" rows={3} name="user_comment" value={user_comment} onChange={handleInputChange} />
                </Form.Group> 
                <br />
                <Form.Group className="mb-3" controlId="timeSelect" type="date"  name="time" value={time}>
                    <DatePicker
                        showTimeSelect
                        selected={startDate}
                        onChange={(date) => {
                        setStartDate(date)
                        handleInputChange({
                            target:{
                            name: "time",
                            value: date.toJSON(),
                        }
                    })}}
                        timeClassName={handleColor}
                    />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I accept the terms and conditions" />
                </Form.Group>
                <br />
                <Button variant="primary w-100" type="submit" onClick={createAppointment}>
                    Book Session
                </Button>
            </div>
        </div>
	);
};