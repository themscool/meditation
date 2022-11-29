import React from 'react';


const Hero = () => {
    return (
        <>
            <section className="h-[1134px] w-full main-banner bg-no-repeat bg-cover bg-center flex items-end justify-center">
                <div className="container">
                    <div className="banner-content indent-1 lg:w-[60%] mx-auto text-center pb-16">
                        <h1 className='text-3xl lg:text-6xl font-bold'>Find Your Ultimate <br />
                            Daily Routine and Make it Stick</h1>
                        <p className='py-3'>Fabulous is an accountability partner in your pocket. Born at Duke University, we use behavioral science to help you make smart changes and build healthy habits. Ready to take your life to the next level?</p>
                        <div className="banner-buttons flex items-center justify-center mt-3">
                            <div className="primary-btn">
                                <a href="" className='py-3 px-12 rounded-full text-md font-medium'>Start your journey</a>
                            </div>
                            <div className="secondary-btn mx-2">
                                <a href="" className='py-3 px-12 rounded-full text-md font-medium border border-black'>Try for free</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero