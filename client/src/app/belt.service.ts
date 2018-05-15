import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeltService {

  private baseUrl = '/api/';

  constructor(
    private _http: HttpClient
  ) { }

  getAll() {
    return this._http.get(this.baseUrl);
  }

  getOne(id: string) {
    return this._http.get(this.baseUrl + id);
  }

  addNew(newItem) {
    return this._http.post(this.baseUrl, newItem);
  }

  update(id: string, item) {
    return this._http.put(this.baseUrl + id, item,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  delete(id: string) {
    return this._http.delete(this.baseUrl + id);
  }

  vote(id: string) {
    console.log(id);
    return this._http.post(this.baseUrl + 'likes/' + id, {});
  }

}
