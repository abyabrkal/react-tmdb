import React from 'react'

import '../../styles/slider.css'


const Slider = ({ nowshowing }) => {
    const posterURL = "http://image.tmdb.org/t/p/w500";
    // const heroItem = {
    //   // backgroundImage: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${nowshowing[0].backdrop_path})`
    //   // backgroundImage: `url(${IMAGE_BASE_URL}${HEROS_SIZE}${nowshowing[0].backdrop_path})`
    //   backgroundImage: `url(http://image.tmdb.org/t/p/w1280${nowshowing[0].backdrop_path})`
    // backgroundImage:`url(http://image.tmdb.org/t/p/w1280${image})`
    // }

    const bgNSImage = (poster) => ({ 
        backgroundImage: `url(${posterURL}${poster})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    })

    //style={bgNSImage(movie.poster_path)}
    //style={{backgroundImage: `url(${posterURL}${movie.poster_path})`}} 
    /* <article key={movie.id} className="mini-card module module-article article" style={bgNSImage(movie.poster_path)} src={movie}>
                        </article> */
    

    return (
        <div className="popular-articles">
            <header className="popular-header header-card white-underline-links">
                <h2 className="header-card-title text-white font-medium">Releases for <br />this <br />month</h2>
            </header>

            <div className="mini-card-grid">
            {
                nowshowing.slice(0,8).map(movie => {
                    return (
                        <article key={movie.id} className="mini-card module module-article article cursor-pointer" style={bgNSImage(movie.poster_path)} src="\google.com">
                        </article>  
                    )
                })
            } 
            </div>
        </div>
    )
}

export default Slider


