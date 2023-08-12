import React, {  useState } from "react";
import { useForm } from "../hooks/useform";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import Button from "../component/button.jsx";


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
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.name ? errorStyle : {}} type="text" name="name" id="form3Example1f" className="form-control" value={name} onChange={handleInputChange} />
                        {error.name && <div className="badge bg-danger text-wrap">Name is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Name</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.email ? errorStyle : {}} type="email" name="email" id="form3Example1f" className="form-control" value={email} onChange={handleInputChange} />
                        {error.email && <div className="badge bg-danger text-wrap">Email is required</div>}
                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input style={error.password ? errorStyle : {}} type="password" name="password" id="form3Example1h" className="form-control" value={password} onChange={handleInputChange} />
                        {error.password && <div className="badge bg-danger text-wrap">Password is required</div>}
                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                        <div className="p-2" onClick ={()=> setVisible(!visible)}>
                            {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" name="password2" id="form3Example4cd" className="form-control" value={password2} onChange={handleInputChange} />
                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                        <div className="p-2" onClick ={()=> setVisible(!visible)}>
                            {visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>}
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