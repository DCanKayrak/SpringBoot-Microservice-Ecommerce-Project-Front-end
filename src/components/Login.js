import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { useNavigate } from "react-router";

export default function Auth(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const sendRequest = () => {
        fetch("http://localhost:8095/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((res) => res.json())
        .then((result) => { 
            localStorage.setItem("tokenKey",result.token);
            localStorage.setItem("currentUser",result.userId);
            localStorage.setItem("userFirstName",result.firstName);
    }).catch((err)=> console.log(err))
    }
    

    const handleRegister = () => {
        sendRequest()
        setEmail("")
        setPassword("")
        navigate("/")
    }

    return (
        <div className='auth-parent'>
            <div className='auth-container'>
                <form>
                    <img src={logo} className='auth-logo'></img>
                    <p>"Alışverişin en keyifli hali!"</p>
                    <input
                        className='text-black'
                        type="text"
                        placeholder="Mail Adress"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />

                    <input
                        className='text-black'
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button onClick={() => handleRegister()} className='text-black buton-auth'>Sign In</button>
                    <a href='/register'><p>Hala bizim müşterimiz değil misiniz ?</p></a>
                    
                </form>
            </div>

        </div>
    )
}
