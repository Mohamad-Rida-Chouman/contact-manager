// import React, {useState, useEffect} from "react";
import ContactCard from "../contactCard/ContactCard";
import '../../utilities.css'

const ContactList = () => {
    const contacts = [{
        id: 1,
        name: 'Alex McKenny',
        phone_number:'81547926',
        latitude: 40.7128,
        longitude: -74.0060,
    },
{
    id: 2,
    name: 'Alex McKenny 2',
    phone_number:'81547926',
    latitude: 40.7128,
    longitude: -74.0060,   
}];

    return (
        <div className="contact-list flex flex-col justify-center align-center">
            <div className="title">
                <h2>Your Contacts</h2>
            </div>
            
            <div className="contacts-container flex gap-s">
                {contacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact}/>
                        // {/* {contact}</ContactCard> */}
                ))}
            </div>
        </div>
    )
}

export default ContactList