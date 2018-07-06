import React from 'react';
import Album from './Marketplace_Album';
import PropTypes from 'prop-types';

function Marketplace(props) {
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
        {props.albumList.map((album, index) =>
          <Album title={album.title}
            artist={album.artist}
            description={album.description}
            price={album.price}
            imageUrl={album.imageUrl}
            key={index}/>
        )}
      </div>
    </div>
  );
}

Marketplace.propTypes = {
  albumList: PropTypes.array
};

export default Marketplace;
