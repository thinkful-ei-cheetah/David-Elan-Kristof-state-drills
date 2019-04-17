import React from 'react';


class HelloWorld extends React.Component{
      
  state ={
    who: 'world',
  }

  render(){
    return (
      <div>
        <p>Hello, {this.state.who}</p>
          <button type="button" onClick={()=>this.setState({who: 'world' })}>World</button>
          <button type="button" onClick={()=>this.setState({who: 'friend' })}>Friend</button>
          <button type="button" onClick={()=>this.setState({who: 'React' })}>React</button>
      </div>
    )
  }
}

export default HelloWorld;
