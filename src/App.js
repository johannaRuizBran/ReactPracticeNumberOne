import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Hoc from './components/Hoc';
import './style/style.css';

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
        <Header sideBarHandler={this.toggleSidebar}/>        
        {side}        
        <Footer />
      </Hoc>
    );
  }
}

export default App;