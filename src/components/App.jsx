import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import About from './About';
import Marketplace from './Marketplace';
import Admin from './Admin';
import Error404 from './Error404';
import Footer from './Footer';

function App(){
  return (
    <div>
      <style jsx>{`
          div{
            font-family: sans-serif;
          }
        `}
      </style>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route path='/about' component={About}/>
        <Route path='/marketplace' component={Marketplace}/>
        <Route path='/admin' component={Admin}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
