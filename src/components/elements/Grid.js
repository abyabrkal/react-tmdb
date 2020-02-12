import React from 'react'

const Grid = ({ header, children }) => {
    return (
        <div className="max-w-screen-xl mx-auto px-0 py-5">
            <h1 className="text-4xl md:text-2xl p-5 text-white">{header}</h1>
            <div className="gridcontent-div-ext">{children}</div>
        </div>
    )
}

export default Grid
