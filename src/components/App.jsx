import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Marketplace from './Marketplace';
import Admin from './Admin';
import Error404 from './Error404';
import Footer from './Footer';
import { v4 } from 'uuid';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      masterAlbumList: {},
      selectedAlbum: null
    };
    this.handleNewAlbumCreation = this.handleNewAlbumCreation.bind(this);
    this.handleAlbumSelection = this.handleAlbumSelection.bind(this);
  }

  handleNewAlbumCreation(newAlbum) {
    let newAlbumId = v4();
    let newMasterAlbumList = Object.assign({}, this.state.masterAlbumList, {[newAlbumId]: newAlbum});
    this.setState({masterAlbumList: newMasterAlbumList});
  }

  handleAlbumSelection(albumId) {
    this.setState({selectedAlbum: albumId});
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
          <Route path='/marketplace' render={()=><Marketplace albumList={this.state.masterAlbumList} selectedAlbum={this.state.selectedAlbum} onAlbumSelection={this.handleAlbumSelection}/>} />
          <Route path='/admin' render={(props)=><Admin onNewAlbumCreation={this.handleNewAlbumCreation} albumList={this.state.masterAlbumList} onAlbumSelection={this.handleAlbumSelection} selectedAlbum={this.state.selectedAlbum} currentRouterPath={props.location.pathname} />} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
