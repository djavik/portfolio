import React from 'react';
import Card from './Card';

const Body = ({ cardTitle })=>{
    return(
        <div className='body'>
            <h1>{cardTitle}</h1>
            <div className='cards-container'>
                <Card 
                    title="Showcase 1"
                    description="The first showcase"
                    imageSrc="image_url_1.jpg"
                />
                <Card 
                    title="Showcase 2"
                    description="The first showcase"
                    imageSrc="image_url_2.jpg"
                />
            </div>
        </div>
    );
};

export default Body;