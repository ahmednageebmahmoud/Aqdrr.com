import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { City } from 'src/app/_models/settings/city';
import { environment } from 'src/environments/environment';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  baseUrl = environment.ApiUrl;
  citiesUrl = `${this.baseUrl}cities`;

  constructor(private http: HttpClient) { }

  updateCity(updatedCity: City): Observable<City> {
    return this.http.put<City>(`${this.citiesUrl}`, updatedCity);
  }

  changeCityStatus(cityId: number, newStatus: boolean): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<boolean>(`${this.citiesUrl}/${cityId}`, newStatus, { headers: headers });
  }

  getCity(id: number): Observable<City> {
    return this.http.get<City>(`${this.citiesUrl}/${id}`);
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }

  getPagedCities(query: any): Observable<PaginationResult<City[]>> {
    return Utilities.getPaginationResult<City>(this.http, `${this.citiesUrl}/Pages`, query);
  }

  getCitiesAsList(query?: any): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.citiesUrl}/list`);
  }



}