import React from 'react'

import Oops from '../images/404.png'

const NotFound = () => {
    const bgNFImage = () => ({ 
        backgroundImage: `${Oops}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    })

    return (
        <div className="w-full h-100p" style={bgNFImage()}>          
        </div>
    )
}

export default NotFound