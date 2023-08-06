import React from "react";
import '../../utilities.css'
import '../contactCard/contactCard.css'

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
        <div className="contact-card-container flex justify-around border">
            <div className="contact-card-top flex flex-col justify-center align-center">
                <h3>{name}</h3>
                <p>Phone Number: {phone_number}</p>
                <p>Address: ({latitude}, {longitude})</p>
            </div>
            <div className="contact-card-bot flex justify-center align-center">
                <h2>Map</h2>
            </div>
            
        </div>
    );
}
 
export default ContactCard;