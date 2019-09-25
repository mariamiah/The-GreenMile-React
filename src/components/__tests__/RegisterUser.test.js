/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import RegisterUser from '../RegisterUser';

describe('<RegisterUser />', () => {
  it('should render without crashing', () => {
    const props = {
      onSubmit: jest.fn(),
      onChange: jest.fn(),

    };
    const wrapper = shallow(<RegisterUser {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
