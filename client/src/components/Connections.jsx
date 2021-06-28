import React from 'react';
import '../styles/connections.css';
import GH from '../assets/GH-ICON.png';
import LI from '../assets/linked.png';
import RESUME from '../assets/resume.png';
import EMAIL from '../assets/mail.png';


const Connections = () => {
    return (
        <div className="connect" >
            <a href="https://github.com/DaquanJ" rel="noreferrer" target="_blank" > <img src={GH} alt="github link" /> </a>
            <a href="https://www.linkedin.com/in/daquanj/" rel="noreferrer" target="_blank" > <img src={LI} alt="linked in link" /> </a>
            <a href="https://sites.google.com/view/dj-resume" rel="noreferrer" target="_blank"> <img src={RESUME} alt="Resume Link" /> </a>
            <a href="mailto:daquanj.dev@gmail.com?subject=Portfolio" rel="noreferrer" target="_blank"> <img src={EMAIL} alt="email link" /> </a>
        </div>
    );
}

export default Connections;