import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
describe('test',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('1111',()=>{
    expect(22+3).toEqual(25);
  });
});


