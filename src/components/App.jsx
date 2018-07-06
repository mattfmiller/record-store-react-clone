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
      filteredAlbumList: {},
      selectedAlbum: null,
      albumToEdit: null
    };
    this.handleNewAlbumCreation = this.handleNewAlbumCreation.bind(this);
    this.handleAlbumSelection = this.handleAlbumSelection.bind(this);
    this.handleEditSelection = this.handleEditSelection.bind(this);
    this.handleUpdateSelectedAlbum = this.handleUpdateSelectedAlbum.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleNewAlbumCreation(newAlbum) {
    let newAlbumId = v4();
    let newMasterAlbumList = Object.assign({}, this.state.masterAlbumList, {[newAlbumId]: newAlbum});
    this.setState({masterAlbumList: newMasterAlbumList});
    this.setState({filteredAlbumList: newMasterAlbumList});
  }

  handleAlbumSelection(albumId) {
    this.setState({selectedAlbum: albumId});
  }

  handleEditSelection(albumId) {
    this.setState({albumToEdit: albumId});
  }

  handleUpdateSelectedAlbum(albumId, albumToBeUpdated) {
    let newMasterAlbumList = Object.assign({}, this.state.masterAlbumList);
    newMasterAlbumList[albumId] = albumToBeUpdated;
    this.setState({masterAlbumList: newMasterAlbumList});
  }

  handleFilterChange(filterTerm) {
    console.log(filterTerm);
    if (filterTerm === 'all'){
      this.setState({filteredAlbumList: this.state.masterAlbumList})
    }

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
          <Route path='/marketplace' render={()=><Marketplace albumList={this.state.filteredAlbumList} selectedAlbum={this.state.selectedAlbum} onAlbumSelection={this.handleAlbumSelection} onFilterChange={this.handleFilterChange}/>} />
          <Route path='/admin' render={(props)=><Admin onNewAlbumCreation={this.handleNewAlbumCreation} albumList={this.state.filteredAlbumList} onAlbumSelection={this.handleAlbumSelection} selectedAlbum={this.state.selectedAlbum} currentRouterPath={props.location.pathname} onEditSelection={this.handleEditSelection} albumIdToEdit={this.state.albumToEdit} onUpdateSelectedAlbum={this.handleUpdateSelectedAlbum} onFilterChange={this.handleFilterChange}/>} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
