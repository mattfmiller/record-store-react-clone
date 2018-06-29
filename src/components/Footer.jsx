import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return(
    <div>
      <Link to='/admin'><h4>Admin</h4></Link>
    </div>
  );
}

export default Footer;
