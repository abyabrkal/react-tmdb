import React from 'react'
import { Link } from '@reach/router'

// import '../../styles/header.css'
import MoveeLogo from '../../images/brand.png';


const Header = () => (
    <div className="box-border my-5">
        <div className="max-w-screen-xl min-h-48 px-5 py-0 mx-0 my-auto box-border sm:m-w-screen-xl sm:min-h-0">
            <Link to="/">
                <img className="inline-block mx-0 w-24 sm:mt-2 sm:w-48" src={MoveeLogo} alt="app-logo" />
            </Link>
        </div>
    </div>
)

// const Header = () => (
//     <div className="box-border px-0 py-5">
//         <div className="max-w-screen-xl min-h-48 px-5 py-0 mx-0 my-auto box-border sm:m-w-screen-xl sm:min-h-0">
//             <img className="w-32 sm:mt-2 sm:w-64" src={MoveeLogo} alt="movie-logo" />
//             <img className="float-right inline-block w-20 mt-6 sm:inline-block sm:mt-3 sm:w-32" src={TMDBlogo} alt="tmdb-logo" />
//         </div>
//     </div>
// )

// const Header = () => (
//     <div className="">
//         <div className="header-content">
//             <img className="MoveeLogo" src={MoveeLogo} alt="movie-logo" />
//             <img className="TMDBLogo" src={TMDBlogo} alt="tmdb-logo" />
//         </div>
//     </div>
// )

export default Header;