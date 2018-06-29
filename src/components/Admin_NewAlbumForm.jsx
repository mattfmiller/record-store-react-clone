import React from 'react';

function NewAlbumForm() {
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
      </div>
    </div>
  );
}

export default NewAlbumForm;
