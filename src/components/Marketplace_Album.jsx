import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
  return(
    <div className='album'>
      <style jsx>{`
          .title-artist {
            display: inline;
          }
          .album {
            display: grid;
            grid-template-columns: 1fr 9fr 2fr
          }
        `}
      </style>
      <img src={props.imageUrl}/>
      <div clsssName='title-artist'>
        <h3><em>{props.title}</em></h3>
        <h3>by {props.artist}</h3>
      </div>
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
