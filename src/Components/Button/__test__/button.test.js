import React from 'react';
import  ReactDOM  from 'react-dom'
import Button from './../Button'
// import {isTSAnyKeyword} from '@babel/types'
import {render, cleanup, getByTestId} from '@testing-library/react'
// import "jest-dom/extend-expect"
import renderer from 'react-test-renderer'

afterEach(cleanup);
 
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
})

it('renders button correctly', () => {
   const {getByTestId} =  render(<Button label = "Click me please" />)
    expect(getByTestId('button')).toHaveTextContent('Click me please')
})

it('renders button correctly', () => {
    const {getByTestId} =  render(<Button label = "Save" />)
     expect(getByTestId('button')).toHaveTextContent('Save')
 })
 
 it("Runs correctly", () => {
     const {getByTestId} = render(<Button label = "hookah" />);
        expect(getByTestId('button')).toHaveTextContent('hookah');
 })
 /* ---------------------------------------SNAPSHOT TESTING----------------------------------------------- */
//snapshot testing is a way to test the UI of a component without having to render it to the DOM. 
it("matches snapshot", () => {
    const tree = renderer.create(<Button label = "Save" />).toJSON(); //this convert the button to virtual dom and then convert it to json
    expect(tree).toMatchSnapshot()})
