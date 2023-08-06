// import React, {useState, useEffect} from "react";
import ContactCard from "../contactCard/ContactCard";
import '../../utilities.css'
import '../contactList/contactList.css'



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
},
{
    id: 3,
    name: 'Alex McKenny 3',
    phone_number:'81547926',
    latitude: 40.7128,
    longitude: -74.0060,   
},
{
    id: 4,
    name: 'Alex McKenny 4',
    phone_number:'81547926',
    latitude: 40.7128,
    longitude: -74.0060,   
},
{
    id: 5,
    name: 'Alex McKenny 5',
    phone_number:'81547926',
    latitude: 40.7128,
    longitude: -74.0060,   
}];



    // const [contacts, setContacts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect( () => {
    //     fetchContacts();
    // }, []);

    // const fetchContacts = async () => {
    //     try{
    //         const response = await axios.get('backend-laravel/api/contacts');
    //         setContacts(response.data);
    //         setLoading(false);
    //     }
    //     catch (error){
    //         console.error('Error fetching contacts', error);
    //         setLoading(false);
    //     }
    // };

    // if(loading){
    //     return <p>Please wait while we gather your contacts</p>;
    // }

    // if(contacts.length === 0){
    //     return <p>You don't have any contacts yet</p>
    // }

    return (
        <div className="contact-list flex flex-col justify-center align-center">
            <div className="title-list black-text">
                <h3>Your Contacts</h3>
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