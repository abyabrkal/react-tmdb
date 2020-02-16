import React, {useState, useEffect} from 'react'

import { NOWSHOW_BASE_URL } from '../../config';


export const useSlideFetch = () => {
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
            console.log("Fetched NOWSHOWING from API -->", result.results)

            setShow(prev => ({
                ...prev,
                // nowshow: [...result.results],
                nowshow: prev 
                ? [...prev.nowshow, ...result.results]
                : [...result.results],
            }))

            
        } catch (error) {
            setError(true);
            console.log('Hero Error->', error)
        }
        
        setLoading(false);
    }

    useEffect(() => {
        fetchNowShow(`${NOWSHOW_BASE_URL}&region=in&with_original_language=ml`);
        //fetchNowShow(`${NOWSHOW_BASE_URL}&region=ae&with_original_language=en`);
    }, [])
    // console.log("NOWSHOW STATE[F] -->", show)

    return [{show, nsloading, nserror}];
}


