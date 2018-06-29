import React from 'react';

function Welcome() {
  return(
    <div className='container'>
      <style jsx>{`
          .container {
            padding: 0 8vw;
          }
          .container h2 {
            font-weight: 400;
            font-size: 32px;
            margin-left: auto;
            margin-right: auto;
            align-items: center;
            width: 1110px;
          }
        `}
      </style>
      <h2>Welcome to our store!</h2>
    </div>
  );
}

export default Welcome;
