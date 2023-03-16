import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  putModSlide(txt: any,linkimg:any,id:any,btnmod:any,btntextmod:any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.http.put<any>(this.apiUrl + "adminmodslide", { txt:txt,linkimg:linkimg,id:id,textbtn:btntextmod,linkbtn:btnmod }, options);
  }
  putModPortfolio(title: any,linkimg:any,id:any,subtitle:any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.http.put<any>(this.apiUrl + "adminmodportfolio", { title:title,linkimg:linkimg,id:id,subtitle:subtitle}, options);
  }
  deleteSlide(id: any): Observable<any> {
    const url = `${this.apiUrl}deleteslide/${id}`;
    return this.http.delete<any>(url);
  }
  deleteResponseChat(id: any): Observable<any> {
    const url = `${this.apiUrl}deleteresponse/${id}`;
    return this.http.delete<any>(url);
  }
  deletePartners(id: any): Observable<any> {
    const url = `${this.apiUrl}deletepartners/${id}`;
    return this.http.delete<any>(url);
  }
  getCreateSlide(): Observable<any> {
    return this.http.get(this.apiUrl + "admincreateslide");
  }
  postSlidePartnersCreate( link: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.http.post<any>(this.apiUrl + "adminslidepartcreate", {link: link }, options);
  }
  postQuestChat( domanda: string,risposta:string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.http.post<any>(this.apiUrl + "adminslidquestchatcreate", {domanda: domanda, risposta:risposta}, options);
  }
}
