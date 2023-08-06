import React, {useState, useEffect} from "react";
import ContactCard from "../contactCard/ContactCard";
import '../../utilities.css'
import '../contactList/contactList.css'
import axios from 'axios';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const DISPLAY_URL = 'http://127.0.0.1:8000/api/contacts';
  
    useEffect(() => {
      fetchContacts();
    }, []);
  
    const fetchContacts = async () => {
      try {
        const response = await axios.get(DISPLAY_URL);
        setContacts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts', error);
        setLoading(false);
      }
    };
  
    if (loading) {
      return <p>Please wait while we gather your contacts</p>;
    }
  
    if (contacts.length === 0) {
      return <p>You don't have any contacts yet</p>
    }

    return (
        <div className="contact-list flex flex-col justify-center align-center">
            <div className="title-list black-text">
                <h3>Available Contacts</h3>
            </div>
                <div className="contacts-container flex flex-col gap-xl wrap width-80">
                    {contacts.map((contact) => (
                        <ContactCard key={contact.id} contact={contact}/>
                    ))}
                </div>
            
        </div>
    )
}

export default ContactList