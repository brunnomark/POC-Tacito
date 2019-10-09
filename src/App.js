import React, {Component} from 'react';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/BackDrop/BackDrop';
import Painelcontrole from './containers/Painelcontrole/Painelcontrole';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };
  
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };  

  render() {
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div className="App">
        <div>
          <Toolbar collapse={this.state.sideDrawerOpen} drawerClickHandler = {this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
        </div>        
        <main className="App-main">
          <Painelcontrole collapse={this.state.sideDrawerOpen}/>
        </main>      
      </div>
    );
  }
}

export default App;
