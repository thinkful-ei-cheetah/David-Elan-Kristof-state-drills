import React, { Component } from 'react';
import './App.css';
import Messages from './components/Messages';
import Accordian from './components/Accordian'

class App extends Component {
  state = {
    showSection: null
  }


  handleClick=(e)=>{
    const section = e.currentTarget.innerText;
    this.setState({
      showSection: section
    })

  }

  render() {
    console.log(sections);
    
    return (
      <div className="App">
        <Accordian allSections={sections} selectedSection={this.state.showSection} handleClick={this.handleClick}/>
      </div>
    );
  }
}


const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]
//

export default App;

