import React from "react";
import '../../utilities.css'
import '../contactForm/contactForm.css'

const ContactForm = () => {
    return (
        <div className="main-form-container flex flex-col justify-center align-center">
            <div className="title-form black-text">
                <h3>Add a Contact</h3>
            </div>
            <div className="contact-form flex flex-col border">
                <div className="contact-name input-box flex justify-between wrap">
                    <input type="text" name="name"/>
                    <label htmlFor="">Name</label>
                </div>
                <div className="contact-phone input-box flex justify-between wrap">
                    <input type="number" name="phone"/>
                    <label htmlFor="">Phone Number:&nbsp;&nbsp;</label>
                </div>
                <div className="contact-latitude input-box flex justify-between wrap">
                    <input type="number" name="latitude"/>
                    <label htmlFor="">Latitude:&nbsp;&nbsp;</label>
                </div>
                <div className="contact-longitude input-box flex justify-between wrap">
                    <input type="number" name="longitude"/>
                    <label htmlFor="">Longitude:&nbsp;&nbsp;</label>
                </div>
                <button>Add Contact</button>
            </div>
            
        </div>
    );
}
 
export default ContactForm;