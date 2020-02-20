import React from 'react';
import { Router } from '@reach/router'

import '../styles/extra.css'
import Header from './elements/Header'
import Home from './Home'
import Movie from './Movie'
import Error from './Error'


const App = () => (
    <>
        <Header />
        <Router>
            <Home path="/" />
            <Movie path="/:movieId"/>
            <Error default/>
        </Router>
    </>
);

export default App;
