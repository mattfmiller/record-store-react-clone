import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Marketplace from './Marketplace';
import Admin from './Admin';
import Error404 from './Error404';
import Footer from './Footer';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterAlbumList: [
        {
          title: 'Piper At The Gates of Dawn',
          artist: 'Pink Floyd',
          description: 'A live  album by the English progressive rock band originally released in 1995, on the label EMI in the United Kingdom.',
          price: 45,
          imageUrl: 'http://www.bbc.co.uk/staticarchive/8f469a55fabeee046caad748f025b517c0e479ce.jpg'
        },
        2: {
          title: 'Dilate',
          artist: 'Ani DiFranco',
          description: 'Her highest-selling and most acclaimed album, released in 1996.',
          price: 25,
          imageUrl: 'https://moveonfirenze.com/wp-content/uploads/dilate.jpg'
        },
        3: {
          title: 'Axis Bold As Love',
          artist: 'Jimi Hendrix',
          description: 'Second studio album by the English-American band, released in 1967.',
          price: 38,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Axiscover.jpg/220px-Axiscover.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <div className='app'>
        <style jsx>{`
            .app {
              font-family: sans-serif;
            }
          `}
        </style>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/about' component={About}/>
          <Route path='/marketplace' render={()=><Marketplace albumList={this.state.masterAlbumList}/>} />
          <Route path='/admin' component={Admin}/>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
