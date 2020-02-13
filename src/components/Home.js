import React, { useState } from 'react'
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    NOWSHOW_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL
} from '../config';

import NoImage from '../images/no_image.jpg'

// import components
import Grid from './elements/Grid'
import HeroImage from './elements/HeroImage'
import LoadMoreButton from './elements/LoadMoreButton'
import MovieThumb from './elements/MovieThumb'
import SearchBar from './elements/SearchBar'
import Spinner from './elements/Spinner'
import Footer from './elements/Footer'

// import hooks
import { useHomeFetch } from './hooks/useHomeFetch'
import { useHeroFetch } from './hooks/useHeroFetch'


const Home = () => {
    const [{state, loading, error}, fetchMovies] = useHomeFetch();
    const [{show, nsloading, nserror}, fetchNowShow] = useHeroFetch();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = search => {
        const endpoint = search ? `${SEARCH_BASE_URL}${search}` : `${POPULAR_BASE_URL}`

        setSearchTerm(search)
        fetchMovies(endpoint)
    }

    const loadMoreMovies = () => {
        const searchEndPoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1}`;
        const popularEndPoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;

        const endpoint = searchTerm ? searchEndPoint : popularEndPoint;

        fetchMovies(endpoint)
    };

    // const getNowShowing = () => {
    //     const nowEndPoint = `${NOWSHOW_BASE_URL}`;

    //     fetchNowShow(nowEndPoint);
    // }

    if(error) return <div>Something went Wrong!</div>
    if(!state.movies[0]) return <Spinner />

    

    return (
        <>
            {!searchTerm && (
                <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                    title={state.heroImage.original_title}
                    text={state.heroImage.overview}
                />
            )}
            <SearchBar callback={searchMovies}/>
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
            {loading && <Spinner />}
            <LoadMoreButton text="Load More" callback={loadMoreMovies}/>
            <Footer />
        </>
    )
}

export default Home
