import React from 'react'


class Accordian extends React.Component {

  state = {
    showSection: null
  }

  sections = [
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

  selectedSectionName = () => {
    return (
      <li>
        <p>{this.sections[this.state.showSection].content}</p>
      </li>
    )
  }

  handleClick=(sectionNumber)=>{
    this.setState({
      showSection: sectionNumber
    })
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <button onClick={() => this.handleClick(0)}>Section 1</button>
          <button onClick={() => this.handleClick(1)}>Section 2</button>
          <button onClick={() => this.handleClick(2)}>Section 3</button>
        </div>
        <ul>
          {this.state.showSection !== null && this.selectedSectionName(this.state.showSection)}
        </ul>
        </React.Fragment>  
    )
  }
} 


export default Accordian;