import React from 'react';
import NewAlbumForm from './Admin_NewAlbumForm';
import Marketplace from './Marketplace';
import PropTypes from 'prop-types';

function Admin(props) {
  return(
    <div>
      <NewAlbumForm onNewAlbumCreation={props.onNewAlbumCreation} />
      <Marketplace />
    </div>
  );
}

Admin.propTypes = {
  onNewAlbumCreation: PropTypes.func
};

export default Admin;
