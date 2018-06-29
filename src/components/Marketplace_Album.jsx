import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
  return(
    <div>
      <img src={props.imageUrl}/>
      <h3><em>{props.title}</em></h3>
      <h3>by {props.artist}</h3>
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
