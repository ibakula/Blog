import axios from 'axios';

export default function getDataByIdFromApiWrapper(url, id) {
  return axios.get(url + (id != null ? `/${id}` : '/last'));
};