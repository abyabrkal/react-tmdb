import React from 'react'

const MovieThumb = ({ image, clickable, movieId, movieName }) => {
    return (
        <div>
            {clickable ? (
                <img className="mthumb-img-ext clickable" src={image} alt={movieName}/>
            ) : (
                <img className="mthumb-img-ext" src={image} alt={movieName}/>
            )}
        </div>
    )
}

export default MovieThumb
