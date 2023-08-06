import React from "react";
import '../../utilities.css'
import '../contactCard/contactCard.css'
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactCard = ({contact}) => {
    
    const {name, phone_number, latitude, longitude} = contact;
    return (
        <div className="contact-card-container flex justify-around border">
            <div className="contact-card-top flex flex-col justify-center align-center">
                <h3>{name}</h3>
                <p>Phone Number: {phone_number}</p>
            </div>
            <div className="contact-card-bot">
                <div className="map-container">
                    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[latitude, longitude]}>
                            <Popup>
                                <div>
                                    <h3>{name}</h3>
                                    <p>Phone Number: {phone_number}</p>
                                    <p>Address: ({latitude}, {longitude})</p>
                                </div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
 
export default ContactCard;