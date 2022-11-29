import React from 'react'
import flogo from '../assets/llogo.png'

const Footer = () => {
    return (
        <>
            <section className='footer w-full h-[865px] bg-no-repeat bg-center bg-cover  overflow-hidden'>
                <div className="container-fluid flex flex-col items-center justify-between">
                    <div className="footer-log pt-[10%]">
                        <img src={flogo} alt="" />                       
                    </div>
                    <div className="line-dashed w-0 "></div>
                        <p className='text-black font-medium'>Make every day happier</p>
                </div>
            </section>
        </>
    )
}

export default Footer