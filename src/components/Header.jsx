import React from 'react';
import NavBar from './Header_NavBar';
import epicodusLogo from '../assets/images/epicodus.jpg';

function Header() {
  return(
    <div>
      <NavBar/>
      <div className='logo'>
        <img src={epicodusLogo}/>
        <h1>Epicodus Tunes</h1>
      </div>
    </div>
  );
}

export default Header;
