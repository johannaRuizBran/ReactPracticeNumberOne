import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import PracticeOne from './containers/PracticeOne';
import PracticeTwo from './containers/PracticeTwo';
import Hoc from './components/Hoc';
import './style/style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    isSidebarActive: true,
    sidebarClass: 'sidebar'
  }

  toggleSidebar = () => {                                   
      this.setState({ isSidebarActive: !this.state.isSidebarActive });
  }

  render() {
    const side = this.state.isSidebarActive ? <Sidebar /> : null;
    return (
      <Hoc>
        <Router>
          <Header sideBarHandler={this.toggleSidebar}/>        
          {side}        
          <Route exact path="/" component={PracticeOne} />
          <Route path="/practice2" component={PracticeTwo} />  
          <Footer />
        </Router>
      </Hoc>
    );
  }
}

export default App;