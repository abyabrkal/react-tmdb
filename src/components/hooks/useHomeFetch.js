import {useState, useEffect} from 'react'

import { POPULAR_BASE_URL } from '../../config';


export const useHomeFetch = searchTerm => {
    const [state, setState] = useState({ movies: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async endpoint => {
        setError(false);
        setLoading(true);

        // find it is loading for first time or not
        const isLoadMore = endpoint.search('page');

        try {
            const result = await(await fetch(endpoint)).json();
            console.log("Fetched POPULAR from API -->", result)

            setState(prev => ({
                ...prev,
                movies: isLoadMore !== -1
                ? [...prev.movies, ...result.results]
                : [...result.results],
                heroImage: prev.heroImage || result.results[0],
                currentPage: result.page,
                totalPages: result.total_pages
            }))
            
            
        } catch (error) {
            setError(true);
        }
        
        setLoading(false);
    }

    useEffect(() => {
        // If state is available in Session Storage, access from there
        // Else, fetch via API
        if(sessionStorage.popularState) {
            setState(JSON.parse(sessionStorage.popularState))
            setLoading(false)
        } else {
            fetchMovies(`${POPULAR_BASE_URL}`);
        }
    }, [])

    useEffect(() => {
        // If there is no searchTerm (for initial/more loading), save the data in session storage
        if(!searchTerm) {
            sessionStorage.setItem('popularState', JSON.stringify(state))
        }
    }, [searchTerm, state])

    return [{state, loading, error}, fetchMovies];
}
