import React from 'react'

const HeroImage = ({ image, title, text}) => {
    return (
        <div image={image} className="bg-cover bg-center w-full h-600 relative hi-div-ext">
            <div className="max-w-screen-xl p-5 mx-0 my-auto">
                <div className="heroimage-text hi-text-ext">
                    <h1 className="text-5xl text-white md:text-4xl">{title}</h1>
                    <p className="text-xl text-white leading-relaxed md:text-base md:leading-tight">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;
