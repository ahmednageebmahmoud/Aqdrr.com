import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
	baseUrl = environment.ApiUrl ;
	languagesUrl = `${this.baseUrl}languages`;

	constructor(private http: HttpClient) { }

	getLanguage(id: number): Observable<any> {
		return this.http.get<any>(`${this.languagesUrl}/${id}`);
	}

  getLanguagesAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.languagesUrl}/list`);
  }

}
