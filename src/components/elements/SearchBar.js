import React, {useState, useRef} from 'react'
import FontAwesome from 'react-fontawesome'

const SearchBar = ({ callback }) => {
    const [state, setState] = useState('')
    const timeOut = useRef(null)

    const doSearch = event => {
        const { value } = event.target;

        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current = setTimeout(() => {
            callback(value)
        }, 500)

    }


    return (
        <div className="w-full h-24 bg-gray-900 pl-6 pr-0 py-5 box-border text-white">
            <div className="max-w-screen-xl w-full h-12 bg-gray-800 mx-auto rounded-lg relative text-white">
                <FontAwesome className="absolute left-10p top-5p text-indigo-500 z-1000" name="search" size="2x" />
                <input className="text-3xl absolute left-40p mx-4 my-auto py-0 pl-0 pr-16 border-0 w-11/12 bg-transparent h-10 text-white border-box focus:outline-none md:text-3xl" type="text" placeholder="Search Movies" onChange={doSearch} value={state}/>
            </div>
        </div>
    )
}

export default SearchBar
