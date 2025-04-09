import React from "react";
import Card from "./Card";

const MainContent = ()=>{
    return(
        <div className="main-content">
            <div className="cards-container">
                <Card 
                    imageSrc='image_url.jpg'
                    description="I am a front-end developer with solid experience in JavaScript since 2016 and advanced knowledge of React. I specialize in creating engaging and functional user experiences through user-centered design and modern web development. I have recently completed a specialized course in Artificial Intelligence, exploring how to apply AI to web development.

I have worked on developing websites using JavaScript, React, WordPress, PHP, and MySQLi, with specific experience in e-commerce on WordPress. Additionally, I have experience with Google Ad Manager, developing interactive formats and implementing them in a wide network of clients at both national and international levels.

Throughout my career, I have led full projects and collaborated closely with multidisciplinary teams to deliver tailored solutions that meet the unique needs of each client. My priority is ensuring performance, accessibility, and intuitive design in every project.

If you're looking for a passionate developer with an innovative vision and a constant drive for learning, let's connect!"
                />
            </div>
        </div>
    );
};

export default MainContent;