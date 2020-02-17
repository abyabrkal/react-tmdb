import React from 'react'

import NoImage from '../../images/no_image.jpg'
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'

import MovieThumb from './MovieThumb'


const MovieInfo = ({ movie }) => {
    const bg = movie.backdrop_path
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}')`
      : '#000';
    // const mvInfoBg = {
    //     backgroundImage: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), bg
    //   }
      //style={mvInfoBg}
    console.log("MOVIEINFO -> ", movie);
    return (
        <div  className="mvinfo-dv-ext"  style={{background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), ${bg}`}}>
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
                            <h3 className="mv-text-h3">IMDb RATING</h3>
                            <div className="div-score"><span className="score">{movie.vote_average}</span>/ 10</div>
                        </div>
                        <div className="ml-info-gap">
                            <h3 className="mv-text-h3 mb-2">DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(element => (
                                <p className="topdown-p mv-text-p" key={element.credit_id}>{element.name}</p>
                            ))}
                        </div>
                        <div className="ml-info-gap">
                            <h3 className="mv-text-h3 mb-2">RELEASE DATE</h3>
                            <div className="div-score text-xl">{movie.release_date}</div>
                        </div>
                        <div className="ml-info-gap">
                            <h3 className="mv-text-h3 mb-2">GENRE</h3>
                            {movie.genres.map(genre => (
                                <p className="topdown-p mv-text-p" key={genre.id}>{genre.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
