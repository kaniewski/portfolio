import './Home.scss'
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (  
        <div className="wrapping home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm <span className='span-d'>D</span>amian <span className='span-k'>K</span> 
                aniewski
                <br />
                Frontend Developer
                </h1>
                <h2>/ junior</h2>
                <Link className='flat-button' to="/contact">Contact me</Link>
                
            </div>
            <h3>K</h3>
        </div>
    );
}

export default Home;