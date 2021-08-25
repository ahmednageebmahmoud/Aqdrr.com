import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
	baseUrl = environment.ApiUrl ;
	hobbiesUrl = `${this.baseUrl}hobbies`;

	constructor(private http: HttpClient) { }

  getHobbiesAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.hobbiesUrl}/list`);
  }
  
  
}
