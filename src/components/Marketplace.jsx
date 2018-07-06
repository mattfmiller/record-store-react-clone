import React from 'react';
import Album from './Marketplace_Album';
import AlbumDetails from './Marketplace_AlbumDetails';
import PropTypes from 'prop-types';

function Marketplace(props) {
  let optionalSelectedAlbumContent = null;
  if (props.selectedAlbum != null) {
    optionalSelectedAlbumContent = <AlbumDetails selectedAlbum={props.albumList[props.selectedAlbum]} onAlbumSelection={props.onAlbumSelection} />;
  } else {
    optionalSelectedAlbumContent =
      <div>
        <h2>In Stock</h2>
        <select>
          <option disabled hidden>Filter by Price</option>
          <option>All</option>
          <option>$50+</option>
          <option>$20-50</option>
          <option>Under $20</option>
        </select>
        <br/>
        <br/>
        <br/>
        {Object.keys(props.albumList).map(function(albumId) {
          let album = props.albumList[albumId];
          return <Album title={album.title}
            artist={album.artist}
            description={album.description}
            price={album.price}
            imageUrl={album.imageUrl}
            key={albumId}
            albumId={albumId}
            currentRouterPath={props.currentRouterPath}
            onAlbumSelection={props.onAlbumSelection}
            onEditSelection={props.onEditSelection}
            albumIdToEdit={props.albumIdToEdit}
            onUpdateSelectedAlbum={props.onUpdateSelectedAlbum}/>;
        })}
      </div>;
  }

  return(
    <div className='container'>
      <style jsx>{`
        .container {
          padding: 0 8vw;
          margin-top: 20px;
          margin-bottom: 80px;
        }
        .content {
          margin-left: auto;
          margin-right: auto;
          align-items: center;
          max-width: 1110px;
        }
        .content select {
          float: right;
          width: 300px;
          height: 40px;
          border-radius:5px;
        }
        .content h2 {
          font-size: 32px;
          font-weight: 400;
        }
        `}
      </style>
      <div className='content'>
        {optionalSelectedAlbumContent}
      </div>
    </div>
  );
}

Marketplace.propTypes = {
  albumList:PropTypes.object,
  onAlbumSelection:PropTypes.func,
  selectedAlbum:PropTypes.string,
  currentRouterPath:PropTypes.string,
  onEditSelection:PropTypes.func,
  albumIdToEdit:PropTypes.string,
  onUpdateSelectedAlbum:PropTypes.func
};

export default Marketplace;
