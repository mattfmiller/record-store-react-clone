import React from 'react';
import PropTypes from 'prop-types';

function NewAlbumForm(props) {
  let _title = null;
  let _artist = null;
  let _description = null;
  let _price = null;
  let _imageUrl = null;

  function handleNewAlbumFormSubmission(event) {
    event.preventDefault();
    props.onNewAlbumCreation({title: _title.value, artist: _artist.value, description: _description.value, price: parseInt(_price.value), imageUrl: _imageUrl.value});
    _title.value = '';
    _artist.value = '';
    _description.value = '';
    _price.value = 0;
    _imageUrl.value = '';
  }

  return(
    <div className='container'>
      <style jsx>{`
        .container {
          padding: 0 8vw;
        }
        .content {
          margin-left: auto;
          margin-right: auto;
          align-items: center;
          max-width: 1110px;
          border: 1px solid lightgrey;
          border-radius: 5px;
        }
        .content * {
          margin: 5px 10px;
        }
        .content h2 {
          font-size: 28px;
          font-weight: 500;
        }
        `}
      </style>
      <div className='content'>
        <h2>Add New Album to Inventory</h2>
        <form onSubmit={handleNewAlbumFormSubmission}>
          <div>
            <label>Album Title:</label>
            <br/>
            <input
              type='text'
              id='title'
              ref={(input) => {_title = input;}}/>
          </div>
          <div>
            <label>Album Artist:</label>
            <br/>
            <input
              type='text'
              id='artist'
              ref={(input) => {_artist = input;}}/>
          </div>
          <div>
            <label>Album Description:</label>
            <br/>
            <textarea
              type='textarea'
              id='description'
              ref={(input) => {_description = input;}}/>
          </div>
          <div>
            <label>Album Price:</label>
            <br/>
            <input
              type="number"
              id='price'
              ref={(input) => {_price = input;}}/>
          </div>
          <div>
            <label>Album Image:</label>
            <br/>
            <input
              type='text'
              id='imageUrl'
              ref={(input) => {_imageUrl = input;}}/>
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

NewAlbumForm.propTypes = {
  onNewAlbumCreation: PropTypes.func
};

export default NewAlbumForm;
