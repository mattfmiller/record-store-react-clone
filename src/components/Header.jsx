import React from 'react';
import NavBar from './Header_NavBar';
import epicodusLogo from '../assets/images/epicodus.jpg';

function Header() {
  return(
    <div className='header'>
      <style jsx>{`
          .logo img {
            margin-right: 10px;
            width: 80px;
            height: 80px;
          }
          .logo h1 {
            font-weight: 500;
            font-size: 36px;
          }
          .logo {
            display: flex;
            margin-left: 8vw;
          }
        `}
      </style>
      <NavBar/>
      <div className='logo'>
        <img src={epicodusLogo}/>
        <h1>Epicodus Tunes</h1>
      </div>
    </div>
  );
}

export default Header;
