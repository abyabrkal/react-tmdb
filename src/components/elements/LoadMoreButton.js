import React from 'react'

const LoadMoreButton = ({ text, callback }) => {
    return (
        <button className="bg-gray-800 w-1/5 min-w-150p text-white cursor-pointer transition-all duration-300 rounded-lg text-xl max-w-screen-xl block mx-auto px-0 py-4 outline-none hover:opacity-75" type="button" onClick={callback}>
            {text}
        </button>
    )
}

export default LoadMoreButton
