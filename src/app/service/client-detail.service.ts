import { Injectable } from '@angular/core';
import { ClientDetail } from './client-detail.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ClientDetailService {
  formData: ClientDetail
  readonly rootURL = 'https://localhost:44360/api'
  list: ClientDetail[]


  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.rootURL + '/Clients').toPromise()
      .then(res => { this.list = res as ClientDetail[] });
  }

  postClientDetail() {
    return this.http.post(this.rootURL + '/Clients', this.formData)
  }


  putClientDetail() {
    return this.http.put(this.rootURL + '/Clients/' + this.formData.ClientID, this.formData)
  }

  deleteClientDetail(id) {
    return this.http.delete(this.rootURL + '/Clients/' + id)
  }

}


