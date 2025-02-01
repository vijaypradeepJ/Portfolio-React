import React from 'react';
import './About.css';
import Image from '../../assets/vijay.jpg';
import Resume from '../../assets/vijaypradeepJ_Resume.pdf';


const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Vijay Pradeep . I am currently  pursing my final year B.E Computer Science and Engineering in Sri Ramakrishna Institute of Technology at Coimbatore.<br /><br />
                            I am available for web designing Project I really enjoy solving problem as well as making things pretty and easy to use. I can't stop learning new things;the more, the better.I'm a student with strong a interest for frontend Developer who is driven and aspirstional.<br /><br />
                            My Skills:
                        </p>
                        <ul className="about__list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Restful API</li>
                            <li>Bootstrap</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                     
                </div>
            </div>

           
        </section>
    )
}

export default About