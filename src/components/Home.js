import React, { useState, useEffect } from 'react'
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../config';

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

    return (
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreButton />
        </>
    )
}

export default Home
