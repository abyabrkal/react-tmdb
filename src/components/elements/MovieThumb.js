import React from 'react'
import { Link } from '@reach/router'

const MovieThumb = ({ image, clickable, movieId, movieName }) => {
    return (
        <div>
            {clickable ? (
                <Link to={`/${movieId}`}>
                    <img className="mthumb-img-ext clickable" src={image} alt={movieName}/>
                </Link>
            ) : (
                <img className="mthumb-img-ext" src={image} alt={movieName}/>
            )}
        </div>
    )
}

export default MovieThumb
