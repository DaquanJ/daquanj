import React from 'react';
import '../styles/about.css'

const About = () => {
    return (
        <div className="about" >
            <div className="title" >
                <hr />
                <h1> About me </h1>
                <hr />
            </div>
            <div className='paragraphs' >
                <p>
                    Hello 👋 <br />
                    My name is Daquan Johnson, a software engineer based in New York, NY.
                    I enjoy working in and contributing to the digital space by way of web developement!
                    I'm a front end focused developer with experience in modern backend technologies.
                </p>
                <p>
                    I held a long time interest in software, the web and how it all worked.
                    I learned about <a href="https://perscholas.org/courses/" rel="noreferrer" target="_blank">Per Scholas </a>, a non-profit technical bootcamp and
                    In June of 2020 I completed their 15 week software engineering course. Giving myself an opportunity to materialize that interest.
                    Shortly after graduating I was invited back to join the new co-horts as an associate Instructor.
                    Through pair programming, debugging, facilitating course material and project building, I have helped to give others a shot at tech and continue to further my skillset as a developer.
                </p>
            </div>
        </div>
    );
}

export default About;