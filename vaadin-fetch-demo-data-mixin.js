/**
 * @polymerMixin
 */
export const FetchDemoDataMixin = superClass => class VaadinFetchDemoDataMixin extends superClass {

  fetchJSON(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = e => {
        if (xhr.status == 200) {
          const json = JSON.parse(xhr.responseText);
          resolve(json);
        } else if (xhr.status == 404) {
          reject(e);
        }
      };
      xhr.open('GET', url);
      xhr.send();
    });
  }

  fetchResource(url) {
    return import(url);
  }
};
