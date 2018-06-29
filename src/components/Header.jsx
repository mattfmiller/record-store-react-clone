import React from 'react';
import NavBar from './Header_NavBar';
import epicodusLogo from '../assets/images/epicodus.jpg';

function Header() {
  return(
    <div className='header'>
      <style jsx>{`
          .container {
            padding: 0 8vw;
          }
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
            width: 1110px;
            margin:0 auto;
          }
        `}
      </style>
      <NavBar/>
      <div className='container'>
        <div className='logo'>
          <img src={epicodusLogo}/>
          <h1>Epicodus Tunes</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
