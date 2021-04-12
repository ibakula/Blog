import axios from 'axios';

export function getDataByIdFromApiWrapper(url, id) {
  return axios.get(url + id != null ? `/${id}` : '/last');
};