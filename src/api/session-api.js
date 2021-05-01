import * as utility from './api-utility';

export function login(userData) {
  return utility.postData('/api/user/login', userData)
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
  return utility.getDataForContainerType('/api', 'user/status')
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function updateUserData(data) {
  for (const prop in data) {
    localStorage.setItem(prop, data[prop]);
  }

  return Promise.resolve();
};

export function createAccount(userData) {
  return utility.postData('http://127.0.0.1:80/api/users', userData)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function logout() {
  return utility.getDataForContainerType("http://127.0.0.1:80/api", "user/logout")
  .then(response => {
    if (response.data.result.search(/success/i) != -1) {
      localStorage.removeItem("id");
      localStorage.removeItem("first_name");
      localStorage.removeItem("last_name");
      localStorage.removeItem("permissions");
      localStorage.removeItem("login_date");
      localStorage.removeItem("email");
    }
    return response.data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function alterUserData(data) {
  const id = localStorage.getItem("id");
  return utility.putData(`http://127.0.0.1:80/api/users/${id}`, data)
  .then(response => {
    if (response.data.result.search(/success/i) != -1) {
      for (const prop in data) {
        localStorage.setItem(prop, data[prop]);
      }
    }
    return response.data;
  })
  .catch(error => Promise.reject(error));
};