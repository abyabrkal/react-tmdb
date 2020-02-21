import React from 'react'
import { Link } from '@reach/router'

import '../../styles/slider.css'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'


const Slider = ({ nowshowing, clickable }) => {

    const bgNSImage = (poster) => ({ 
        backgroundImage: `url(${IMAGE_BASE_URL}${POSTER_SIZE}${poster})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    })


    return (
      <div className="popular-articles mx-auto">
        <header className="popular-header header-card white-underline-links">
          <h2 className="header-card-title">
            Releases <br />
            this <br />
            month
          </h2>
        </header>

        <div className="mini-card-grid">
          {nowshowing.slice(0, 8).map(movie => {
            return clickable ? (
              <article
                key={movie.id}
                className="mini-card module module-article article cursor-pointer clickable"
                style={bgNSImage(movie.poster_path)}
              >
                <Link to={`/${movie.id}`}></Link>
              </article>
            ) : (
              <article
                key={movie.id}
                className="mini-card module module-article article cursor-pointer clickable"
                style={bgNSImage(movie.poster_path)}
              ></article>
            );
          })}
        </div>
      </div>
    );
}

export default Slider







