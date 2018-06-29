import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return(
    <div className='nav-bar'>
      <Link to='/'><h3>Epicodus Tunes</h3></Link>
      <Link to='/about'><h4>About</h4></Link>
      <Link to='/marketplace'><h4>Marketplace</h4></Link>
    </div>
  );
}

export default NavBar;
