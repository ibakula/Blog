import axios from 'axios';

export function getDataByIdFromApiWrapper(url, id) {
  return axios.get(url + (id != null ? `/${id}` : '/last'));
};

export function getDataForContainerType(url, sectionName, ...params) {
  let fullUrl = `${url}/${sectionName}`;
  
  for (const param of params) {
    fullUrl += `/${param}`;
  }

  return axios.get(fullUrl);
}