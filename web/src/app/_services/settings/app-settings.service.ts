import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) { }

  // this.appSettingsService.getJSON('terms').subscribe(data => {console.log(data.text());});
  public getJSON(fileName: String): Observable<any> {
    return this.http.get(`./assets/files/${fileName}.json`);
  }

  // this.appSettingsService.readTextFile('terms').subscribe(data => {console.log(data);});
  public readTextFile(fileName: String): Observable<string> {
    return this.http.get(`./assets/files/${fileName}.txt`, { responseType: 'text' });
  }
  
  // this.appSettingsService.readHtmlFile('terms').subscribe(data => {console.log(data);});
  public readHtmlFile(fileName: String): Observable<string> {
    return this.http.get(`./assets/files/${fileName}.html`, { responseType: 'text' });
  }

  


}
