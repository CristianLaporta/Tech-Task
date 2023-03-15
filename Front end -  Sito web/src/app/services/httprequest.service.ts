import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {
  private apiUrl = 'http://socialcris.duckdns.org:8445/api/';

  constructor(private http: HttpClient) { }

  getSlideHome(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "slide").pipe(
      map(data => {
        data.forEach((obj: { text: string; html: any; }) => {
          if (obj.text.includes('*red')) {
            obj.text = obj.text.replace('*red', '<span class="txtred">');
          }
          if (obj.text.includes('*/red')) {
            obj.text = obj.text.replace('*/red', '</span>');
          }
          if (obj.text.includes('*altrariga')) {
            obj.text = obj.text.replace('*altrariga', '<br>');
          }
          obj.html = obj.text;
        });
        return data;
      })
    );
  }
  postMessageChat(message: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    console.log(message)
    return this.http.post<any>(this.apiUrl + "chatbot", { message: message }, options);
  }
  getCarouselCompanies(): Observable<any> {
    return this.http.get(this.apiUrl + "carouselcompanies");
  }
  getPortfolio(): Observable<any> {
    return this.http.get(this.apiUrl + "portfolio");
  }

  postContacts(message: string, name: string, email: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.http.post<any>(this.apiUrl + "contacts", { message: message, name: name, email: email }, options);
  }
}
