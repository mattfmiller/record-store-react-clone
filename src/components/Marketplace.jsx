import React from 'react';
import Album from './Marketplace_Album';

const ALBUM_LIST = [
  {
    title: 'Piper At The Gates of Dawn',
    artist: 'Pink Floyd',
    description: 'A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.',
    price: 45,
    imageUrl: 'http://www.bbc.co.uk/staticarchive/8f469a55fabeee046caad748f025b517c0e479ce.jpg'
  },
  {
    title: 'Dilate',
    artist: 'Ani DiFranco',
    description: 'Her highest-selling and most acclaimed album, released in 1996.',
    price: 25,
    imageUrl: 'https://moveonfirenze.com/wp-content/uploads/dilate.jpg'
  },
  {
    title: 'Axis Bold As Love',
    artist: 'Jimi Hendrix',
    description: 'Second studio album by the English-American band, released in 1967.',
    price: 38,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Axiscover.jpg/220px-Axiscover.jpg'
  }
];

function Marketplace() {
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
        {ALBUM_LIST.map((album, index) =>
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

export default Marketplace;
