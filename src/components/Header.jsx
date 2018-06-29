import React from 'react';
import {Link} from 'react-router-dom';
import epicodusLogo from '../assets/images/epicodus.jpg';

function Header() {
  return(
    <div>
      <div className='nav-bar'>
        <Link to='/'><h3>Epicodus Tunes</h3></Link>
        <Link to='/about'><h4>About</h4></Link>
        <Link to='/marketplace'><h4>Marketplace</h4></Link>
      </div>
      <div className='logo'>
        <img src={epicodusLogo}/>
        <h1>Epicodus Tunes</h1>
      </div>
    </div>
  );
}

export default Header;
