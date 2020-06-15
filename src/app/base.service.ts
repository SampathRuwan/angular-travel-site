import Axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private axios = Axios;

  constructor() { }

  get(path, data) {
    return new Promise((resolve, reject) => {
      this.setHeader();
      this.axios
          .get(path, { params: data })
          .then(result => resolve(result.data))
          .catch(err => reject(err));
    });
  }

  post(path, data) {
    return new Promise((resolve, reject) => {
      this.setHeader();
      this.axios
          .post(path, data)
          .then(result => resolve(result.data))
          .catch(err => reject(err));
    });
  }
  setHeader() {
    // this.axios.defaults.headers.common['token'] = localStorage.sessionId;
    // this.axios.defaults.headers.common['meta'] = this.appBasic.metadata.type;
  }

}
