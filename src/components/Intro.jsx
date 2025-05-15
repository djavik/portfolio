import React from 'react'
import SocialNetwork from './SocialNetwork'

export const Intro = () => {
  return (
    <div className='intro'>
        <h1 className='name'>
            David Sanzh Khakim
        </h1>
        <h3 className='title'>
            Frontend Developer
        </h3>
        <p className='description'>
            Modern, efficient, and clean web experiences - built with 9 years of front-end experience
        </p>
        <SocialNetwork />
    </div>
  )
}
