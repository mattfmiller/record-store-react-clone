import React from 'react';
import PropTypes from 'prop-types';

function EditAlbumForm(props) {
  let conditionalContent = <button onClick={() => {props.onEditSelection(props.albumId);}}>Edit</button>;
  let _title = null;
  let _artist = null;
  let _description = null;
  let _price = null;
  let _imageUrl = null;


  function handleAlbumUpdate(event) {
    event.preventDefault();
    props.onUpdateSelectedAlbum(props.albumId, {title: _title.value, artist: _artist.value, description: _description.value, price: parseInt(_price.value), imageUrl: _imageUrl.value});
  }

  if (props.albumIdToEdit === props.albumId) {
    conditionalContent =
      <div>
        <h2>Edit Album</h2>
        <form onSubmit={handleAlbumUpdate}>
          <div>
            <label>New Album Title:</label>
            <input
              type='text'
              id='title'
              placeholder={props.title}
              ref={(input) => {_title = input;}}/>
          </div>
          <div>
            <label>Album Artist:</label>
            <input
              type='text'
              id='artist'
              placeholder={props.artist}
              ref={(input) => {_artist = input;}}/>
          </div>
          <div>
            <label>Album Description:</label>
            <textarea
              type='textarea'
              id='description'
              placeholder={props.description}
              ref={(input) => {_description = input;}}/>
          </div>
          <div>
            <label>Album Price:</label>
            <input
              type="number"
              id='price'
              placeholder={props.price}
              ref={(input) => {_price = input;}}/>
          </div>
          <div>
            <label>Album Image:</label>
            <input
              type='text'
              id='imageUrl'
              placeholder={props.imageUrl}
              ref={(input) => {_imageUrl = input;}}/>
          </div>
          <button type='submit'>Update</button>
        </form>
      </div>;
  }

  return(
    <div>
      {conditionalContent}
    </div>
  );
}

EditAlbumForm.propTypes = {
  albumId:PropTypes.string,
  onEditSelection:PropTypes.func,
  albumToEdit:PropTypes.string
};

export default EditAlbumForm;
