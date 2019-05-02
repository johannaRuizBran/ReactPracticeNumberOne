import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../style/style.css';

class Home extends Component {
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
      <div>
        <Header sideBarHandler={this.toggleSidebar}/>
        <div>          
            {side}            
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;