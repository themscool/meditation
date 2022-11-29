import React from 'react';
// import {serviceData} from '../constants';
import sImg from '../assets/meditation.png';
import sleep from '../assets/sleep.png';
import stess from '../assets/stess.png'
import mindf from '../assets/mindf.png'


const Services = () => {
    return (
        <>
            <section>
                <div className="container-fluid mx-auto px-[5%] lg:px-[15%] py-16">

                 
                            <div>
                                <div className="service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center">
                                    <div className="service-info">
                                        <h1 className='text-3xl lg:text-6xl font-bold mb-3'>Meditation</h1>
                                        <p>Mindfulness training isn’t limited to meditation, but it’s a great place to start. Meditation is both a skill and an experience that can positively impact your overall health and happiness.</p>
                                        <div className="primary-btn mt-8">
                                            <a href="" className='py-3 px-12 rounded-full text-md font-medium'>Start your journey</a>
                                        </div>
                                    </div>
                                    <div className="service-img text-center">
                                        <img src={sImg} alt="" className='w-full h-auto' />
                                    </div>
                                </div>
                                <div className="service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center">

                                    <div className="service-img text-center order-1 lg:order-[0]">
                                        <img src={sleep} alt="" className='w-full h-auto' />
                                    </div>
                                    <div className="service-info">
                                        <h1 className='text-3xl lg:text-6xl font-bold mb-3'>Sleep</h1>
                                        <p>Mindfulness training isn’t limited to meditation, but it’s a great place to start. Meditation is both a skill and an experience that can positively impact your overall health and happiness.</p>
                                        <div className="primary-btn mt-8">
                                            <a href="" className='py-3 px-12 rounded-full text-md font-medium'>Start your journey</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center">
                                    <div className="service-info">
                                        <h1 className='text-3xl lg:text-6xl font-bold mb-3'>Stress</h1>
                                        <p>Mindfulness training isn’t limited to meditation, but it’s a great place to start. Meditation is both a skill and an experience that can positively impact your overall health and happiness.</p>
                                        <div className="primary-btn mt-8">
                                            <a href="" className='py-3 px-12 rounded-full text-md font-medium'>Start your journey</a>
                                        </div>
                                    </div>
                                    <div className="service-img text-center">
                                        <img src={stess} alt="" className='w-full h-auto' />
                                    </div>
                                </div>
                                <div className="service-item grid lg:grid-cols-2 gap-10 mx-auto items-center justify-center">

                                    <div className="service-img text-center order-1 lg:order-[0]">
                                        <img src={mindf} alt="" className='w-full h-auto' />
                                    </div>
                                    <div className="service-info">
                                        <h1 className='text-3xl lg:text-6xl font-bold mb-3'>Mindfulnes</h1>
                                        <p>Mindfulness training isn’t limited to meditation, but it’s a great place to start. Meditation is both a skill and an experience that can positively impact your overall health and happiness.</p>
                                        <div className="primary-btn mt-8">
                                            <a href="" className='py-3 px-12 rounded-full text-md font-medium'>Start your journey</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  

                </div>
            </section>
        </>
    )
}

export default Services