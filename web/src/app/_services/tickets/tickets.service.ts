import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Ticket } from 'src/app/_models/tickets/ticket';
import { environment } from 'src/environments/environment';
import { Utilities } from '../utilities.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
	baseUrl = environment.ApiUrl ;
	ticketsUrl = `${this.baseUrl}tickets`;

	constructor(private http: HttpClient) { }

	addNew(newTicket: Ticket): Observable<any> {
		return this.http.post<any>(`${this.ticketsUrl}`, newTicket);
  }

	updateTicket(updatedTicket: Ticket): Observable<Ticket> {
		return this.http.put<Ticket>(`${this.ticketsUrl}`, updatedTicket);
	}

	removeTicket(ticketId: number): Observable<Ticket> {
		return this.http.delete<Ticket>(`${this.ticketsUrl}/${ticketId}`);
  }

	getTicket(id: number): Observable<Ticket> {
		return this.http.get<Ticket>(`${this.ticketsUrl}/${id}`);
  }

	getTickets(): Observable<Ticket[]> {
		return this.http.get<Ticket[]>(this.ticketsUrl);
  }

	getPagedTickets(query: any): Observable<PaginationResult<Ticket[]>> {
		return Utilities.getPaginationResult<Ticket>(this.http, `${this.ticketsUrl}/Pages`, query);
  }

	getTicketsAsList(query?: any): Observable<KeyValuePairResource[]> {
		return this.http.get<KeyValuePairResource[]>(`${this.ticketsUrl}/list`);
	}

	getTicketCategoriesAsList(): Observable<KeyValuePairResource[]> {
		return this.http.get<KeyValuePairResource[]>(`${this.ticketsUrl}/categories`);
	}


}
