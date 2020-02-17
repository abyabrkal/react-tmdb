import React from 'react'

import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor'
import MovieInfo from './elements/MovieInfo'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'

import { useMovieFetch } from './hooks/useMovieFetch'

const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId)

    if (error) return <div>Something went wrong ...</div>;
    if (loading) return <Spinner />;

    return (
        <>
            <Navigation movie={movie.title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
        </>
    )
}

export default Movie
