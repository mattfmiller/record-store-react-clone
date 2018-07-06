import React from 'react';
import PropTypes from 'prop-types';

function EditAlbumForm(props) {
  let conditionalContent = <button onClick={() => {props.onEditSelection(props.albumId);}}>Edit</button>;
  if (props.albumToEdit === props.albumId) {
    conditionalContent = <p>Form</p>;
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
