import React from 'react'

import TMDBlogo from '../../images/tmdb_logo.svg';

const Footer = () => {
    return (
        <div className="bottom-0 h-48 p-10 mt-24 text-indigo-500 footer-gradient flex justify-between">
            <p className="text-gray-800">A project created with React Hooks, Tailwind CSS, TMDb and more...</p>
            <img className="w-20 sm:w-32" src={TMDBlogo} alt="tmdb-logo" />
        </div>
    )
}

export default Footer
