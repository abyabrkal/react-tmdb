import {useState, useEffect} from 'react'

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

            setShow(prev => ({
                ...prev,
                // nowshow: [...result.results],
                nowshow: prev 
                ? [...prev.nowshow, ...result.results]
                : [...result.results],
            }))

            
        } catch (error) {
            setError(true);
        }
        
        setLoading(false);
    }

    useEffect(() => {
        if(sessionStorage.nowShowingState) {
            setShow(JSON.parse(sessionStorage.nowShowingState))
            setLoading(false)
        } else {
            fetchNowShow(`${NOWSHOW_BASE_URL}&region=ae&with_original_language=en`);
            fetchNowShow(`${NOWSHOW_BASE_URL}&region=in&with_original_language=ml`);
        } 
    }, [])

    useEffect(() => {
        sessionStorage.setItem('nowShowingState', JSON.stringify(show))
    }, [show])

    return [{show, nsloading, nserror}];
}


