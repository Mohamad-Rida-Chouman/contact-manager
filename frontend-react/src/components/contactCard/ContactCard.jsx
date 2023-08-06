import React from "react";
import '../../utilities.css'

const ContactCard = ({contact}) => {

    // const {name, phone_number, latitude, longitude} = contact;
    const seed = {
        name: 'Alex McKenny',
        phone_number:'81547926',
        latitude: 40.7128,
        longitude: -74.0060,
    };
    
    const {name, phone_number, latitude, longitude} = contact || seed;

    return (
        <div className="contact-card-container">
            <div className="contact-card-top">
                <h2>Image</h2>
            </div>
            <div className="contact-card-bot">
                <h3>{name}</h3>
                <p>Phone Number: {phone_number}</p>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
            </div>
        </div>
    );
}
 
export default ContactCard;