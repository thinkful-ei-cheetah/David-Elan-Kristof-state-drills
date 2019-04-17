import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordian from './Accordian';


describe('Accordian works!', ()=>{
  it('Renders to the page with no selection', ()=>{
  const tree = renderer
    .create(<Accordian allSections={[]} selectedSection={null} handleClick={this.handleClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  })



  
})

