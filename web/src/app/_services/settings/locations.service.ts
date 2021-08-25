import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locationsUrl = environment.ApiUrl + 'Locations/';
  constructor(private http: HttpClient) { }

  getCitiesList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.locationsUrl}Cities/list`);
  }
}
