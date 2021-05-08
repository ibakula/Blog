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

  console.log(data);
  
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
};

export function splitTextData(text) {
  const data = {
    img: '',
    text
  }

  const start = data.text.search("<img");
  if (start > -1) {
    const end = data.text.search("/>");
    data.img = data.text.slice(start, end+2);
    if (start > 0) {
      data.text = text.slice(0, start);
      data.text = text.slice(end);
    }
    else {
      data.text = data.text.slice(end+2);
    }
  }

  return data;
};