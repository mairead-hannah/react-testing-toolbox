// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React, { Component } from 'react';
import App from './App';
import { shallow } from 'enzyme';
// import Foo from 'file path';

describe("App components tests", () => {

  let component;

  beforeEach(() => {
    component = shallow(<App />)
  })
  // a test to check the component renders on the page
  it("should render", () => {
    expect(component).toBeTruthy();
  })
  // a test to check that 3 componets are being rendered (.map)
  it('renders three <Foo /> components', () => {
    expect(component.find(Foo)).to.have.lengthOf(3);
  });
})