import React from 'react';
import ReactDOM from 'react-dom';
import  Messages from './Messages'
import renderer from 'react-test-renderer'

it('Renders without crashing', ()=>{
const div = document.createElement('div');


ReactDOM.render(<Messages/>, div )
ReactDOM.unmountComponentAtNode(div)
});


describe('Message Component',()=>{
it('Renders the UI as expected', ()=>{
  const tree = renderer
  .create(<Messages name='messages' unread={10}/>)
  .toJSON();
  expect(tree).toMatchSnapshot()

});

it('renders the UI as expected with no unreads', () => {
  const tree = renderer
    .create(<Messages name="Messages" unread={0}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
});