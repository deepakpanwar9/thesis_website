import React from 'react'
import './About_card.css'
import About_card_image from './Testimonial_pic.jpg' ;


function About_card({image , title , content}) {
    return (
        <div className="about_card">
            <img src={image} alt="" className="about_card_img"/>
            <div className="about_card_container">
                <span className="about_card_title">{title}</span>
                <p className="about_card_description">{content}</p>  
                {/* <button type="button" className="about_card_button">Read More</button> */}
            </div>
        </div>
    )
}

export default About_card
