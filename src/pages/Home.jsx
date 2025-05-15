import React from "react";
import TextString from './texts'
import Card from "../components/Card";
import fotoCV from '../assets/images/foto_cv_3.jpeg';
import { Intro } from "../components/Intro";

const Home = ()=>{

    return(
        <>
        <Intro />
        <div className="main-content">
            <div className='parallax-section'>
                <Card 
                    imageSrc= {fotoCV}
                    description= {TextString.home.description}
                />
                <Card 
                    imageSrc= {fotoCV}
                    description= {TextString.home.description}
                />
            </div>
        </div>
        </>
    );
};

export default Home;