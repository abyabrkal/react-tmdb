import React, {useState, useEffect} from 'react'

import { NOWSHOW_BASE_URL } from '../../config';


export const useHeroFetch = () => {
    const [show, setShow] = useState({ nowshow: []});
    const [nsloading, setLoading] = useState(false);
    const [nserror, setError] = useState(false);

    const fetchNowShow = async endpoint => {
        setError(false);
        setLoading(true);

        // find it is loading for first time or not
        //const isLoadMore = endpoint.search('page');

        try {
            const result = await(await fetch(endpoint)).json();
            console.log("Fetched NOWSHOWING from API -->", result)

            setShow(prev => ({
                ...prev,
                nowshow: prev 
                ? [...prev.noshow, ...result.results]
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
        fetchNowShow(`${NOWSHOW_BASE_URL}&region=in&with_original_language=ml`);
        fetchNowShow(`${NOWSHOW_BASE_URL}&region=ae&with_original_language=en`);
    }, [])

    return [{show, nsloading, nserror}, fetchNowShow];
}


