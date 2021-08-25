import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService {
  baseUrl = environment.ApiUrl ;
  InstructionsUrl = this.baseUrl + 'Settings/Instructions';

  constructor(private http: HttpClient) { }

  getConvertTextToHtmlInstructions(): Observable<any> {
    return this.http.get<any>(`${this.InstructionsUrl}/HowToUseTextToHtmlTags`);
  }

}
