import React from 'react'

const LoadMoreButton = ({ text, callback }) => {
    return (
        <button className="bg-black w-1/4 min-w-200p text-white cursor-pointer transition-all duration-300 rounded-lg text-2xl max-w-screen-xl block mx-auto px-0 py-5 outline-none hover:opacity-75" type="button" onClick={callback}>
            {text}
        </button>
    )
}

export default LoadMoreButton
