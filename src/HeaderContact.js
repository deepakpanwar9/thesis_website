import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './HeaderContact.css' ;

function HeaderContact() {
    return (
        <div className="headercontact">

            <div className = "contact_phone">
                <div className = "contact_phone_button">
                    <PhoneIcon/>
                </div>
                <div className = "contact_phone_no">
                    <span>+91-8368037530</span>
                </div>
            </div>
            <div className ="contact_email">
            <div className = "contact_emai_button">
                <EmailIcon/>
             </div>
             <div className = "contact_email_text">
             <span>rahulprojects12@gmail.com</span>
                </div>
            </div>

        </div>
    )
}

export default HeaderContact
