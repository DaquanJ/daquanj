import React from 'react';
import '../styles/connections.css';
import GH from '../assets/GH-ICON.png';
import LI from '../assets/linked.png';
import RESUME from '../assets/resume.png';
import EMAIL from '../assets/mail.png';
import MyResume from '../assets/DAQUAN RESUME.pdf';


const Connections = () => {
    return (
        <div className="connect" >
            <a href="https://github.com/DaquanJ" rel="noreferrer" target="_blank" > <img src={GH} alt="github link" /> </a>
            <a href="https://www.linkedin.com/in/daquanj/" rel="noreferrer" target="_blank" > <img src={LI} alt="linked in link" /> </a>
            <a href={MyResume} rel="noreferrer" target="_blank" download> <img src={RESUME} alt="Resume Link" /> </a>
            <a href="mailto:daquanj.dev@gmail.com?subject=Portfolio"> <img src={EMAIL} alt="email link" /> </a>
        </div>
    );
}

export default Connections;