import React from 'react'

import '../../styles/hero.css';

import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  NOWSHOW_BASE_URL,
  POSTER_SIZE,
  HEROS_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from '../../config';


const HeroImage = ({ nowshowing }) => {
    // const bgImgStyle = {
    //     backgroundImage:`url(${image})`
    // http://image.tmdb.org/t/p/w780/nows
    // }

    console.log("NOWSHOWING_DATAPROP --> ", nowshowing[0].backdrop_path)
    const herobg = "http://image.tmdb.org/t/p/w1280/nuombZHTH6CsFo13Dos1skw5N4T.jpg"
    const heroItem = {
      // backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${nowshowing[0].backdrop_path})`
      // backgroundImage: `url(${IMAGE_BASE_URL}${HEROS_SIZE}${nowshowing[0].backdrop_path})`
      backgroundImage: `url(http://image.tmdb.org/t/p/w1280${nowshowing[0].backdrop_path})`
    }
    
    const standardItem1 = {
      backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${nowshowing[1].backdrop_path})`
    }
    
    const standardItem2 = {
      backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${nowshowing[2].backdrop_path})`
    }
    
    const standardItem3 = {
      backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${nowshowing[3].backdrop_path})`
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
    
    // return (
    //     <div style={bgImgStyle} className="bg-cover bg-center w-full h-600p relative hi-div-ext">
    //         <div className="max-w-screen-xl mx-auto">
    //             <div className="blur1 z-100 max-w-screen-md absolute bottom-40p my-5 min-h-100p bg-gray-700 rounded-xl text-black md:max-w-full">
    //                 <h1 className="text-2xl text-white md:text-5xl">{title}</h1>
    //                 <p className="text-xl text-white leading-relaxed md:text-base md:leading-tight">{text}</p>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
      <div className="wrapper">
        <div className="news-item hero-item heroItem" style={heroItem}></div>
        <div className="news-item standard-item" style={standardItem1}></div>
        <div className="news-item standard-item" style={standardItem2}></div>
        <div className="news-item standard-item" style={standardItem3}></div>
      </div>
    );
}

export default HeroImage;

