import React from 'react'
import { Link } from '@reach/router'

import '../../styles/slider.css'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'


const Slider = ({ nowshowing }) => {
    const posterURL = "http://image.tmdb.org/t/p/w500";


    const bgNSImage = (poster) => ({ 
        backgroundImage: `url(${IMAGE_BASE_URL}${POSTER_SIZE}${poster})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    })

    return (
        <div className="popular-articles">
            <header className="popular-header header-card white-underline-links">
                <h2 className="header-card-title text-white font-medium">Releases for <br />this <br />month</h2>
            </header>

            <div className="mini-card-grid">
            {
                nowshowing.slice(0,8).map(movie => {
                    return (
                        <Link to={`/${movie.id}`}>
                            <article key={movie.id} className="mini-card module module-article article cursor-pointer" style={bgNSImage(movie.poster_path)}>
                            </article>  
                        </Link>
                    )
                })
            } 
            </div>
        </div>
    )
}

export default Slider


