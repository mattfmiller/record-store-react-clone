import React from 'react';
import PropTypes from 'prop-types';
import EditAlbumForm from './Marketplace_Album_EditAlbumForm';

function Album(props) {
  let contentToDisplayBasedOnPath = null;
  if (props.currentRouterPath === '/admin') {
    contentToDisplayBasedOnPath =
      <div>
        <p>{props.description}</p>
        <EditAlbumForm albumId={props.albumId} onEditSelection={props.onEditSelection} albumToEdit={props.albumToEdit}/>
      </div>;
  }

  return(
    <div className='album'>
      <style jsx>{`
          .album {
            border: 1px solid lightgrey;
            border-radius: 5px;
            padding: 0 20px;
          }
          .album-link img {
            width: 50px;
          }
          .album h3 {
            font-size: 28px;
            font-weight: 400;
          }
          .album-link {
            align-items: center;
            display: grid;
            grid-template-columns: 1fr 9fr 2fr;
          }
        `}
      </style>
      <div className='album-link' onClick={() => {props.onAlbumSelection(props.albumId);}}>
        <img src={props.imageUrl}/>
        <h3><em>{props.title}</em> by {props.artist}</h3>
        <h3>${props.price}</h3>
      </div>
      {contentToDisplayBasedOnPath}
    </div>
  );
}

Album.propTypes = {
  title:PropTypes.string,
  artist:PropTypes.string,
  description:PropTypes.string,
  price:PropTypes.number,
  imageUrl:PropTypes.string,
  albumId:PropTypes.string,
  onAlbumSelection:PropTypes.func,
  currentRouterPath:PropTypes.string,
  onEditSelection:PropTypes.func
};

export default Album;
