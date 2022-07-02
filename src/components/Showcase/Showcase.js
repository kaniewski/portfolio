import './Showcase.scss';
import { FaReact, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript } from 'react-icons/si';
import React from 'react';

const Showcase = () => {
    return (
        <div className="contain">
            <div className="text"><h1>TECHNOLOGIES</h1></div>
            <div className="showcase-container">
            <div className="item one">
                React.js
                <FaReact />
                </div>
            <div className="item two">
                Next.js
                <SiNextdotjs />
            </div>
            <div className="item three">
                JavaScript ES6
                <SiJavascript />
            </div>
            <div className="item four">
                Sass
                <FaSass />
                </div>
        </div>
        </div>  
        
    );    
}    

export default Showcase;