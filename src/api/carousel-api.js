import * as actions from '../actions/carousel-actions';
import * as utility from './api-utility';
import store from '../store';

export function getCarouselData() {
  return utility.getDataByIdFromApiWrapper('http://127.0.0.1:80/api/posts', null)
  .then(response => utility.getDataByIdFromApiWrapper('http://127.0.0.1:80/api/posts', response.data.id))
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

    let articles = response.data.map(article => {
      let textData = utility.splitTextData(article.text);
      return { 
        description: article.text.slice(0, 40), 
        title: article.title.slice(0, 40), 
        img: textData.img
      };
    });

    store.dispatch(actions.getCarouselContentSuccess(articles));
    
    return articles;
  })
  .catch(error => {
    store.dispatch(actions.getCarouselContentFail());
    return Promise.reject(error)
  });
}