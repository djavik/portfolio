import React from 'react'
import { useState } from 'react'
export const MainMenu = () => {
    const [open, setOpen] = useState(false)
    const hunddelOpen = () => {
        setOpen(!open)
    }

    console.log(typeof setOpen);

return (
    <div>
            {
                open ? (
                        <div className='menu' style={{backgroundColor: 'white'}}>
                            <div className='humburer' onClick={hunddelOpen}>
                                    <span>&#10005;</span> {/* Aspa de cierre (X) */}
                            </div>
                            <ul>
                                    <li><a href="/">about</a></li>
                                    <li><a href="/about">experience</a></li>
                                    <li><a href="/contact">showcase</a></li>
                            </ul>
                            <p className='contact'>contact</p>
                        </div>
                ) : (
                        <div className='humburer' onClick={hunddelOpen}>
                                <span>&#9776;</span>
                        </div>
                )
            }
    </div>
)
}
export default MainMenu