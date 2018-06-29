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
            .footer h4 {
              margin-left: 8vw;
              font-weight: 400;
              color: #6c7588;
            }
          }
        `}
      </style>
      <Link to='/admin'><h4>Admin</h4></Link>
    </div>
  );
}

export default Footer;
