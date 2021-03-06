import React from 'react'

import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor'
import MovieInfo from './elements/MovieInfo'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import Footer from '../components/elements/Footer'
import Error from '../components/Error'

import { useMovieFetch } from './hooks/useMovieFetch'

const Movie = ({ movieId }) => {
    const [movie, loading, error] = useMovieFetch(movieId)

    if (error) return <Error />;
    if (loading) return <Spinner />;

    return (
        <>
            <Navigation movie={movie.title}/>
            <MovieInfo movie={movie}/>
            {/* <MovieInfoBar /> */}
            <Grid header="Actors">
                { movie.actors.slice(0,15).map(actor => (
                    <Actor key={actor.credit_id} actor={actor} />
                ))}
            </Grid>
            <Footer />
        </>
    )
}

export default Movie
