import axios from 'axios';
import { configureAxios } from './configureAxios';

test('set api url', () => {
  const apiUrl = 'https://test.com/';
  configureAxios({ apiUrl });
  expect(axios.defaults.baseURL).toBe(apiUrl);
});
