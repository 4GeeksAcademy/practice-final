import React, {  useState } from "react";
import { useForm } from "../hooks/useform";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Button from "../component/button.jsx";
import "../../styles/login-signup.css";


export const SignUp = () => {
    const navigate = useNavigate();


    const [inputValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = inputValues  
    const [ visible, setVisible] = useState(false);
    
    const [error, setError] = useState({
        name: false,
        email: false,
        password: false,
        password2: false
    })

    const errorStyle = {
        borderColor: "red",
    };

const createUser = async (event) => {
    event.preventDefault();
    setError({
        name: name === "",
        email: email === "",
        password: password === "",
        password2: password2 === "" || password !== password2
    });
    if (password !== password2) {
        alert("The passwords don't match!!!");
        return;
    }
    if (
        name !== '' &&
        email !== '' &&
        password !== '' &&
        password2 !== ''
    ){
       try {
         const response = await fetch('https://sanghmitra2023-potential-rotary-phone-5wgpxxjgw5rfx97-3001.app.github.dev/api/signup',{
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }),
            headers: {
                'Content-type': 'application/json',
            },
        })
        if (response.ok){
            alert('Welcome')
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


		<div className="container text-center bg-info w-50 p-4">

			<form>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Please Enter the Info</h3>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0 h6">
                        <input style={error.name ? errorStyle : {}} type="text" name="name" className="longer-one" value={name} onChange={handleInputChange} />
                        {error.name && <div className="badge bg-danger text-wrap">Name is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Name</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0 h6">
                        <input style={error.email ? errorStyle : {}} type="email" name="email" className="longer-one" value={email} onChange={handleInputChange} />
                        {error.email && <div className="badge bg-danger text-wrap">Email is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 h6">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <input style={error.password ? errorStyle : {}} type={visible ? "text" : "password"} name="password"  className="long-one" value={password} onChange={handleInputChange} />
                                        {error.password && <div className="badge bg-danger text-wrap">Password is required</div>}
                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                    </div>  
                                        <span className="eye input-group-text bg-white" id="basic-addon2" onClick ={()=> setVisible(!visible)}>
                                             {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                                        </span>
                                </div>
                        </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0 h6">
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <input type={visible ? "text" : "password"} className="long-one" name="password2" value={password2} onChange={handleInputChange} style={error.password2 ? errorStyle : {}} />
                                        {error.password && <div className="badge bg-danger text-wrap">Repeat your Password</div>}
                                        <label className="form-label" >Repeat Password </label>
                                    </div>  
                                    <span className="eye input-group-text bg-white" id="basic-addon2" onClick ={()=> setVisible(!visible)}>
                                        {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                                    </span>
                                </div>
                            
                            </div>
                    
                </div>
                <div className="pt-1 mb-4">
                <Button text={"Submit"} backgroundColor={"blue"} color={"White"} type="submit" funct={createUser}/>
				
                
                </div>
			</form>

		</div>
		
	);
};