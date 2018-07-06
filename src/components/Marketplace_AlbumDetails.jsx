import React from 'react';

function AlbumDetails(props) {
  return(
    <div className='album-details'>
      <style jsx>{`
          .album-details {
            align-items: center;
            border: 1px solid lightgrey;
            border-radius: 5px;
            padding: 0 20px;
          }
          .album img {
            width: 150px;
          }
          .album h3 {
            font-size: 28px;
            font-weight: 400;
          }
        `}
      </style>
      <img src={props.selectedAlbum.imageUrl}/>
      <h3><em>{props.selectedAlbum.title}</em></h3>
      <h4>{props.selectedAlbum.artist}</h4>
      <p>{props.selectedAlbum.description}</p>
      <p>${props.selectedAlbum.price}</p>
    </div>
  );
}

export default AlbumDetails;
