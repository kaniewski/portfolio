import { useRef } from 'react';
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import React from 'react'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_1l32abg', form.current, 'B1SCPlUOZAU-x0cFb')
        .then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
        }, () => {
            alert('Failed to sent the message, please try again')
        });
    };
        
    return (  
        <div className="wrap">
            <div className="contact-form">  
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li><h1 className='contact-text'>Contact me</h1></li>
                        <div className="half">
                        <li>
                            <input type="text" name='name' placeholder='Name' required />
                        </li>
                        <li>
                            <input type="text" name='email' placeholder='E-mail' required />
                        </li>
                        </div>
                        <div className="subject">
                        <li>
                            <input type="text" name='subject' placeholder='Subject' required />
                        </li>
                        </div>
                        <li>
                            <textarea name="message" placeholder='Message'></textarea>
                        </li>
                        <li><input type="submit" value='Send message' className='send-button' /></li>
                    </ul>
                </form>
            </div>
            <div className="location">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</   a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[51.505, -0.09]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                            </Marker>
                        </MapContainer>
                    <div className="info">

                    </div>
                    <div className="map">
                        
                    </div>
                </div>
        </div>
    );
}

export default Contact;