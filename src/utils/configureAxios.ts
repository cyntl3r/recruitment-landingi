import axios from 'axios';

export interface ConfigureAxiosArguments {
  apiUrl: string;
}

export const configureAxios = ({ apiUrl }: ConfigureAxiosArguments) => {
  axios.defaults.baseURL = apiUrl;
};
