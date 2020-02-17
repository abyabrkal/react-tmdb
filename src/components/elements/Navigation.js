import React from 'react'
import { Link } from '@reach/router'



const Navigation = ({ movie }) => {
    return (
        <div className="flex items-center w-full h-16 bg-indigo-400 text-white">
            <div className="max-w-screen-xl mx-0 my-auto px-5 w-full">
                <Link to="/">
                    <p className="pr-3 text-base text-white float-left sm:text-xl">Home</p>
                </Link>
                <p className="pr-3 text-base text-white float-left sm:text-xl">|</p>
                <p className="pr-3 text-base text-white float-left sm:text-xl">{movie}</p>
            </div>
            
        </div>
    );
}

export default Navigation

