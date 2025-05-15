import React from 'react';

const Card = ({ title, description, imageSrc })=>{
    return(
        <div className='Card'>
            <div className='Image' style={{backgroundImage: `url(${imageSrc})`}} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Card;