import * as utility from './api-utility';
import store from '../store';
import * as navigationBarActions from '../actions/navigation-actions';

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

  return Promise.resolve(data);
};

export function createAccount(userData) {
  return utility.postData('/api/users', userData)
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return Promise.reject(error);
  });
};

export function logout() {
  return utility.getDataForContainerType("/api", "user/logout")
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
  return utility.putData(`/api/users/${id}`, data)
  .then(response => {
    if (response.data.result.search(/success/i) != -1) {
      for (const prop in data) {
        let prop2 = prop;
        let pos = prop2.search("Name");
        if (pos != -1) {
          prop2 = prop2.slice(0, pos);
          prop2 += "_name";
        }
        localStorage.setItem(prop2, data[prop]);
      }
    }
    return response.data;
  })
  .catch(error => Promise.reject(error));
};

export function updateNavigationBarOnLogin() {
  store.dispatch(navigationBarActions.loginSuccess());
}

export function updateNavigationBarOnLogout() {
  store.dispatch(navigationBarActions.logoutSuccess());
}