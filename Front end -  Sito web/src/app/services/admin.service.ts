import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  page: string = "messages";
  private apiUrl = 'http://socialcris.duckdns.org:8445/api/';
  constructor(private http: HttpClient) { }
  getMessage(): Observable<any> {
    return this.http.get(this.apiUrl + "adminmessage");
  }
  getChatbot(): Observable<any> {
    return this.http.get(this.apiUrl + "adminchatbot");
  }
}
