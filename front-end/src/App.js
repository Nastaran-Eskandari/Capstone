import React, { Component } from 'react';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Header'

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header/>
          <Switch>
            <Route path="/"  exact component={Main} />
            <Route path="/comments/:tag_name"  exact render={(props) => <Main tag={props.match.params.tag_name} /> } />
          </Switch>
          </div>
        </Router>  
      </div>
    );
  }
}

export default App;
