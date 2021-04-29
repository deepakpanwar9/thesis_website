import React from 'react'
import './service_card.css'



function Service_card({title , image , content}) {
    return (
        <div className="Service_card">
                <span className="Service_card_title">{title}</span>
            <img src={image} alt="" className="Service_card_img"/>
        </div>
    )
}

export default Service_card