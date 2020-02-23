import React from 'react';
import { axios as mockAxios } from '../__mocks__/axios';
import renderer from 'react-test-renderer';
import Editor from './Editor';

it('mock api call', () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve('test'));
  return mockAxios.get().then(response => {
    expect(response).toEqual('test');
  });
});

it('matches the snapshot', () => {
  const jsdomAlert = window.alert;
  window.alert = () => {};
  const tree = renderer.create(<Editor />).toJSON();
  expect(tree).toMatchSnapshot();
  window.alert = jsdomAlert;
});
