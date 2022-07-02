import './About.scss';
import {Link} from 'react-router-dom';
import React from 'react';

const About = () => {
    return (  
        <div className="about-container">
            <div className="text-area">
                <h1>About me</h1>
                <p>Hello! My name is Damian and I'm looking forward to land my first job in web development. My main focus is to develop my skills and learn as much as I can. Click the button below to see technologies I've been working with.</p>
                <Link className="button" to='/showcase'>CLICK</Link>
            </div>
        </div>
    );
}

export default About;