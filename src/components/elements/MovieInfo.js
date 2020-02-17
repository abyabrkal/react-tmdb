import React from 'react'

import NoImage from '../../images/no_image.jpg'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'

import MovieThumb from './MovieThumb'




const MovieInfo = ({ movie }) => {
    const bg = movie.backdrop_path
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
      : '#000';
    const mvInfoBg = {
        backgroundImage: bg
      }

    return (
        <div style={mvInfoBg} className="mvinfo-dv-ext">
            <div className="movieinfo_content">
                <div className="movieinfo-thumb">
                    <MovieThumb 
                        image={
                            movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        clickable={false}
                    />
                </div>
                <div className="movieinfo-text">
                    <h1 className="mv-text-h1">{movie.title}</h1>
                    <h3 className="mv-text-h3">PLOT</h3>
                    <p className="mv-text-p">{movie.overview}</p>

                    <div className="rating-director">
                    <div>
                        <h3 className="mv-text-h3">IMDB RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="director">
                        <h3 className="mv-text-h3">DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                        {movie.directors.map(element => (
                        <p className="m-0" key={element.credit_id}>{element.name}</p>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
