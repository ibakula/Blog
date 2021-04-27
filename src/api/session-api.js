import * as utility from './api-utility';

export function login(userData) {
  return utility.postData('http://127.0.0.1:80/api/user/login', userData)
  .then(response => {
    if (response.data.result.search(/success/i) == -1) {
      return response.data;
    }
    
    return getUserStatus()
    .then(data => { 
      if (!('email' in data)) {
        return Promise.reject(new Error("Cookie wasn't saved"));
      }
      return updateUserData(data)
      .then(() => response.data); 
    });
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function getUserStatus() {
  return utility.getDataForContainerType('http://127.0.0.1:80/api', 'user/status')
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function updateUserData(data) {
  return Promise.resolve(() => {
    for (const prop in data) {
      localStorage.setItem(prop, data[prop]);
    }
  });
};
