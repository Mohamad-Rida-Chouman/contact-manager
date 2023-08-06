import React, { useState } from "react";
import axios from "axios";
import '../../utilities.css'
import '../contactForm/contactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone_number: "",
        latitude: "",
        longitude: ""
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
    };
    
    const handleAddContact = async () => {
        try {
          await axios.post('http://127.0.0.1:8000/api/contacts', formData);
          console.log('Contact added successfully!');
          setFormData({
            name: "",
            phone_number: "",
            latitude: "",
            longitude: "",
          });
          window.location.reload();
        } catch (error) {
          console.error('Error adding contact:', error);
        }
    };

    return (
        <div className="main-form-container flex flex-col justify-center align-center">
            <div className="title-form black-text">
                <h3>Add a Contact</h3>
            </div>
            <div className="contact-form flex flex-col border">
                <div className="contact-name input-box flex justify-between wrap">
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                    <label htmlFor="">Name</label>
                </div>
                <div className="contact-phone input-box flex justify-between wrap">
                    <input type="number" name="phone_number" value={formData.phone_number} onChange={handleChange}/>
                    <label htmlFor="">Phone Number:&nbsp;&nbsp;</label>
                </div>
                <div className="contact-latitude input-box flex justify-between wrap">
                    <input type="number" name="latitude" value={formData.latitude} onChange={handleChange}/>
                    <label htmlFor="">Latitude:&nbsp;&nbsp;</label>
                </div>
                <div className="contact-longitude input-box flex justify-between wrap">
                    <input type="number" name="longitude" value={formData.longitude} onChange={handleChange}/>
                    <label htmlFor="">Longitude:&nbsp;&nbsp;</label>
                </div>
                <button onClick={handleAddContact}>Add Contact</button>
            </div>
            
        </div>
    );
}
 
export default ContactForm;