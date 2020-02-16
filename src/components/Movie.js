import React from 'react'

import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor'
import MovieInfo from './elements/MovieInfo'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

const Movie = ({ movieId }) => {
    return (
        <>
            <Navigation />
            <MovieInfo />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
            <Spinner />
        </>
    )
}

export default Movie
