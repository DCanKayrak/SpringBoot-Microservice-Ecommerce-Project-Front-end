import React, { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Register(props) {

    const [email, setEmail] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const sendRequest = () => {
        fetch("http://localhost:8095/users/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstName:firstName,
                lastName:lastName,
                phoneNumber:phoneNumber
            }),
        })
        .then((res) => res.json())
        .then((result) => { 
            localStorage.setItem("tokenKey",result.message);
            localStorage.setItem("currentUser",result.userId);
            localStorage.setItem("userEmail",result.email);
    }).catch((err)=> console.log(err))
    }
    

    const handleRegister = () => {
        sendRequest("register")
        setEmail("")
        setPassword("")
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
                        placeholder="First Name"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />

                    <input
                        className='text-black'
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    />
                    <input
                        className='text-black'
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={event => setPhoneNumber(event.target.value)}
                    />
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
                    <a href='/login'><p>Bizim müşterimiz misiniz ?</p></a>
                </form>
            </div>

        </div>
    )
}
