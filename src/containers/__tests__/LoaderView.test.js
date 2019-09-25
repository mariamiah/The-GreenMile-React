/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import LoaderView from '../LoaderView';

describe('<AttendantView />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LoaderView />);
    expect(wrapper).toMatchSnapshot();
  });
});
