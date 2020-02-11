import React from 'react'

const HeroImage = ({ image, title, text}) => {
    const bgImgStyle = {
        backgroundImage:`url(${image})`
    }
    // const bgImgStyle = {
    //     background: ${image =>
    //         `linear-gradient(
    //           to bottom, rgba(0,0,0,0)
    //           39%,rgba(0,0,0,0)
    //           41%,rgba(0,0,0,0.65)
    //           100%
    //         ),
    //         url(`${image}`), #1c1c1c`}
    // }
    
    return (
        <div style={bgImgStyle} className="bg-cover bg-center w-full h-600p relative hi-div-ext">
            <div className="max-w-screen-xl p-5 mx-auto">
                <div className="z-100 max-w-screen-md absolute bottom-40p mr-5 min-h-100p bg-gray-700 rounded-xl text-black md:max-w-full">
                    <h1 className="text-5xl text-white md:text-4xl">{title}</h1>
                    <p className="text-xl text-white leading-relaxed md:text-base md:leading-tight">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;
