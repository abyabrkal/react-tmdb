import React from 'react'
import { Link } from '@reach/router'

// import '../../styles/header.css'
import MoveeLogo from '../../images/logo.png';


const Header = () => (
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <Link to="/">
        <img
          className="inline-block mx-0 w-16 mr-5 sm:w-12"
          src={MoveeLogo}
          alt="app-logo"
        />
      </Link>
      <span class="font-semibold text-blue-500 text-5xl tracking-tight brand-gradient">MFlix</span>
    </div>
  </nav>
);


export default Header;


