import React from 'react';
import NewAlbumForm from './Admin_NewAlbumForm';
import Marketplace from './Marketplace';
import PropTypes from 'prop-types';

function Admin(props) {
  return(
    <div>
      <NewAlbumForm onNewAlbumCreation={props.onNewAlbumCreation} />
      <Marketplace albumList={props.albumList} selectedAlbum={props.selectedAlbum} onAlbumSelection={props.onAlbumSelection} currentRouterPath={props.currentRouterPath} onEditSelection={props.onEditSelection} albumToEdit={props.albumToEdit}/>
    </div>
  );
}

Admin.propTypes = {
  onNewAlbumCreation:PropTypes.func,
  albumList:PropTypes.object,
  onAlbumSelection:PropTypes.func,
  selectedAlbum:PropTypes.string,
  currentRouterPath:PropTypes.string,
  onEditSelection:PropTypes.func,
};

export default Admin;
