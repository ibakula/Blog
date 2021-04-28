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
};

export function postData(url, data) {
  const params = new URLSearchParams();
  
  for (const name in data) {
    params.append(name, data[name]);
  }

  return axios.post(url, params);
};

export function putData(url, data) {
  const params = new URLSearchParams();
  
  for (const name in data) {
    params.append(name, data[name]);
  }
  
  return axios.put(url, params);
}