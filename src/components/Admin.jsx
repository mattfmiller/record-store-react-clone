import React from 'react';
import Marketplace from './Marketplace';

function Admin() {
  return(
    <div>
      <div>
        <label>Album Title:</label>
        <br/>
        <input/>
      </div>
      <div>
        <label>Album Artist:</label>
        <br/>
        <input/>
      </div>
      <div>
        <label>Album Description:</label>
        <br/>
        <textarea></textarea>
      </div>
      <div>
        <label>Album Price:</label>
        <br/>
        <input type="number"/>
      </div>
      <div>
        <label>Album Image:</label>
        <br/>
        <input/>
      </div>
      <button>Add</button>
      <Marketplace/>
    </div>
  );
}

export default Admin;
