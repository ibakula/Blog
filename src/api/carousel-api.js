import * as actions from '../actions/carousel-actions';
import * as utility from './api-utility';
import store from '../store';

export function getCarouselData() {
  return utility.getDataByIdFromApiWrapper('http://127.0.0.1:80/api/posts')
  .then(response => {
    if ('category_id' in response.data) {
      return utility.getDataForContainerType('http://127.0.0.1:80/api', 'posts/recommended', response.data.category_id);
    }
    return response;
  })
  .then(response => {
    if (!Array.isArray(response.data)) {
      store.dispatch(actions.getCarouselContentFail());
      return [response.data];
    }
    store.dispatch(response.data.length > 0 ? 
      actions.getCarouselContentSuccess(response.data) : 
      actions.getCarouselContentFail());
    return response.data;
  })
  .catch(error => {
    store.dispatch(actions.getCarouselContentFail());
    return Promise.reject(error)
  });
}