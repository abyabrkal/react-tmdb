import React from 'react'

import Grid from './elements/Grid'
import Header from './elements/Header'
import HeroImage from './elements/HeroImage'
import LoadMoreButton from './elements/LoadMoreButton'
import MovieThumb from './elements/MovieThumb'
import SearchBar from './elements/SearchBar'
import Spinner from './elements/Spinner'

const Home = () => {
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
