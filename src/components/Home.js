import React, { useState, useEffect } from 'react'
import {
    API_URL,
    API_KEY,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config';

import NoImage from '../images/no_image.jpg'

// import components
import Grid from './elements/Grid'
import Header from './elements/Header'
import HeroImage from './elements/HeroImage'
import LoadMoreButton from './elements/LoadMoreButton'
import MovieThumb from './elements/MovieThumb'
import SearchBar from './elements/SearchBar'
import Spinner from './elements/Spinner'

// import hooks
import { useHomeFetch } from './hooks/useHomeFetch'


const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');

    if(error) return <div>Something went Wrong!</div>
    if(!state.movies[0]) return <Spinner />

    

    return (
        <>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
                />
            
            <SearchBar />
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {
                    state.movies.map(movie => (
                        <MovieThumb 
                            key={movie.id}
                            clickable
                            image={movie.poster_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                                : NoImage 
                            }
                            movieId={movie.id}
                            movieName={movie.original_title}
                        />
                    ))
                }
            </Grid>
            <MovieThumb />
            <Spinner />
            <LoadMoreButton />
        </>
    )
}

export default Home
