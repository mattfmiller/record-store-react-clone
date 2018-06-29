import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return(
    <div className='footer'>
      <style jsx>{`
          .footer {
            position:absolute;
            bottom:0;
            width:100%;
            height:60px;
            background-color: #f5f5f5;
            }
            .container {
              padding: 0 8vw;
            }
            .container h4 {
              font-weight: 400;
              color: #6c7588;
              margin-left: auto;
              margin-right: auto;
              align-items: center;
              max-width: 1110px;
            }
          }
        `}
      </style>
      <div className='container'>
        <Link style={{textDecoration: 'none'}} to='/admin'><h4>Admin</h4></Link>
      </div>
    </div>
  );
}

export default Footer;
