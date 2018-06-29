import React from 'react';

function About() {
  return(
    <div className='container'>
      <style jsx>{`
        .container {
          padding: 0 8vw;
        }
        .content {
          font-weight: 400;
          line-height: 1.6;
          margin-left: auto;
          margin-right: auto;
          align-items: center;
          max-width: 1110px;
        }
        .content h1 {
          font-weight: 500;
          font-size: 36px;
        }
        `}
      </style>
      <div className='content'>
        <h1>About Us</h1>
        <p>Epicodus's mission is to help people learn the skills they need to get great jobs. For us, "great jobs" means jobs in growing industries that pay well and provide rewarding work. Beyond the particular skills needed to get these jobs, we also aim to help our students become confident self-teachers who can adapt to changing job markets and great communicators that will work well in teams. We focus on serving people that, by birth or circumstance, don't have easy access to learning the skills they need to get these great jobs. And now we sell music too!</p>
      </div>
    </div>
  );
}

export default About;
