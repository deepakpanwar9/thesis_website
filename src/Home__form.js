import React from 'react'
import "./Home__form.css"
import { useState, useEffect } from "react";


function Home__form() {
    const [values , setValues] =  useState({
        email : '' ,
        password : ''
    })
    const[errors , setErrors] = useState({})

    const handleInputChange = e =>{
        const{name , value} = e.target
        setValues({
            ...values ,
            [name]:value
        })
    }
    const handleSubmit = e =>{
        e.preventDefault() ;
    }

    return (
        <div>
            <form className="homeForm" action="" onSubmit={handleSubmit}>
                <div className="form__email">
                    <input type="email" name="email" id="email" placeholder="Enter email" value={values.email} onChange={handleInputChange} required />
                </div>
                <div className="form__password">
                    <input type="password" name="password" id="password" placeholder="Enter password" value={values.password} onChange={handleInputChange} required />
                </div>
                <button className="homeFormButton" type="submit" onSubmit>Login</button>
            </form>
        </div>
    )
}

export default Home__form
