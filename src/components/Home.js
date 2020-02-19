import React, { useState } from 'react'
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    NOWSHOW_BASE_URL,
    POSTER_SIZE,
    HEROS_SIZE,
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
import Slider from './elements/Slider'

// import hooks
import { useHomeFetch } from './hooks/useHomeFetch'
import { useSlideFetch } from './hooks/useSlideFetch'


const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [{show, nsloading, nserror}] = useSlideFetch();
    const [{state, loading, error}, fetchMovies] = useHomeFetch(searchTerm);  
    

    console.log(show)

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
            {/* {!searchTerm && (
                <HeroImage 
                    nowshowing={show.nowshow}
                />
                
            )} */}
            <Slider nowshowing={show.nowshow} clickable/>
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
