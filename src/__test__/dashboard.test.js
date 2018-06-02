import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, shallow as enzymeShallowMount, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

describe('#Dashboard', () => {
  const initialState = {
    categories: [{
      name: 'Groceries',
      id: '0.132',
      createdOn: new Date(),
    }, 
    {
      name: 'Entertainment',
      id: '0.365',
      createdOn: new Date(),
    }],
    expenses: {
      0.132: [],
      0.365: [],
    },
  };

  test('', () => {
    const mockStore = configureStore([]);
    const mountedDashboard = mount(<Provider store={mockStore(initialState)}><Dashboard /></Provider>); // eslint-disable-line

    console.log(mountedDashboard.html());

    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('CategoryItem').length).toEqual(2);
  });
});
