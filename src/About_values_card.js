import React from 'react'
import './about_values_card.css'

function About_values_card({ content , image , Title }) {
    return (
        <div className="about_values_card">
      <div className="about_values_card__Title">{Title}</div>
      <div className="about_values_card__top"><img src={image} alt="card"/></div>
      <div className="about_values_card__content">{content}</div>
    </div>
    )
}

export default About_values_card
