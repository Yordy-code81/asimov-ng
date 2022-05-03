import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
providedIn:'root'
})
export class TeachersService {
  basePath = 'http://localhost:3000/api/v1/teachers';

  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }*/

  constructor(private http: HttpClient) {  }

  getAll() {
    return this.http.get(this.basePath)
  }
}
