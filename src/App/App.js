import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connections';

import './App.scss';

import TeamComponent from '../components/TeamComponent/TeamComponent';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavbar/MyNavBar';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const loadComponent = () => {
      let componentToLoad = '';
      if (this.state.authed) {
        componentToLoad = <TeamComponent/>;
      } else {
        componentToLoad = <Auth/>;
      }
      return componentToLoad;
    };
    return (
      <div className="App">
        <MyNavBar authed={this.state.authed}/>
        <h1>Sports-Roster</h1>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
