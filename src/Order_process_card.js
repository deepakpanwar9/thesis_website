import React from 'react'
import './order_process.css'



function Order_process_card({title , image , content}) {
    return (
        <div className="order_process_card">
                <span className="order_process_card_title">{title}</span>
            <img src={image} alt="" className="order_process_card_img"/>
                <span className="order_process_card_description">{content}</span>  
        </div>
    )
}

export default Order_process_card