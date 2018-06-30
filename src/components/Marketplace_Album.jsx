import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
  return(
    <div className='album'>
      <style jsx>{`
          .album {
            align-items: center;
            border: 1px solid lightgrey;
            border-radius: 5px;
            padding: 0 20px;
            display: grid;
            grid-template-columns: 1fr 9fr 2fr;
          }
          .album img {
            width: 50px;
          }
          .album h3 {
            font-size: 28px;
            font-weight: 400;
          }
        `}
      </style>
      <img src={props.imageUrl}/>
      <h3><em>{props.title}</em> by {props.artist}</h3>
      <h3>${props.price}</h3>
    </div>
  );
}

Album.propTypes = {
  title:PropTypes.string,
  artist:PropTypes.string,
  description:PropTypes.string,
  price:PropTypes.number,
  imageUrl:PropTypes.string
};

export default Album;
