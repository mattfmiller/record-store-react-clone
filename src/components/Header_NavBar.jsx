import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return(
    <div className='nav-bar'>
      <style jsx>{`
          .nav-links {
            display: flex;
            padding: 0px 20px;
            margin-bottom: 30px;
            background-color: #343a40;
          }
          .nav-links Link {
            text-decoration: none;
          }
          .nav-links h3 {
            color: white;
            font-weight: 400;
          }
          .nav-links h4 {
            color: #999c9f;
            font-weight: 400;
            margin-left: 20px;
            font-decoration: none;
          }
          .nav-links h4:hover {
            color: lightgrey;
          }
        `}
      </style>
      <div className='nav-links'>
        <Link to='/'><h3>Epicodus Tunes</h3></Link>
        <Link to='/about'><h4>About</h4></Link>
        <Link to='/marketplace'><h4>Marketplace</h4></Link>
      </div>
    </div>
  );
}

export default NavBar;
