import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoK from '../../assets/images/K.png';
import subLogo from '../../assets/images/kaniewski.png';
import { FaHome, FaGithub } from 'react-icons/fa';
import { MdOutlineContactMail } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';
import React from 'react';


const Sidebar = () => {
    return ( 
        <div className="nav-bar">
            <Link to="/" className='logo'>
                <img src={LogoK} alt="logo" />
                <img src={subLogo} alt="logo" className='subLogo'/>
            </Link>
            <nav>
            <NavLink exact='true' activeclassname='active' className='home' to='/'>
                <FaHome className='icon' />
            </NavLink>
            <NavLink exact='true' className='about' to='/about'>
                <SiAboutdotme className='icon' />
            </NavLink>
            <NavLink exact='true' className='contact' to='/contact'>
                <MdOutlineContactMail className='icon' />
            </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                    href="https://github.com/kaniewski"
                    target="_blank" 
                    rel="noreferrer"
                    >
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;