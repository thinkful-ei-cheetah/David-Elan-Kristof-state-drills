import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordian from './Accordian';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordian works!', ()=>{
  // renders an empty li when sections prop is not supplied
  it('Renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div )
    ReactDOM.unmountComponentAtNode(div)
    });
    // renders no sections as active by default
  it('Renders to the page with no selection', ()=>{
  const tree = renderer
    .create(<Accordian />)
    .toJSON();
    expect(tree).toMatchSnapshot();  
  })
  // opens a clicked section
  it('opens a clicked session', () => {
    const wrapper = shallow(<Accordian />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('only opens one section at a time', () => {
    const wrapper = shallow(<Accordian />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})

