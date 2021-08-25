import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeyValuePairResource } from 'src/app/_models/data/key-value-pair-resource';
import { PaginationResult } from 'src/app/_models/data/Pagination';
import { Utilities } from 'src/app/_services/utilities.service';
import { environment } from 'src/environments/environment';
import { NewOrderService, OrderService, OrderServiceDetails, RatingTheOrder, TaskerConfirmOrDiscardOrder } from '../_models/order-service';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {
  baseUrl = environment.ApiUrl;
  orderServicesUrl = `${this.baseUrl}ordersServices`;

  constructor(private http: HttpClient) { }

  addNew(newOrderService: NewOrderService): Observable<any> {
    return this.http.post<any>(`${this.orderServicesUrl}`, newOrderService);
  }
  updateOrderService(updatedOrderService: OrderService): Observable<OrderService> {
    return this.http.put<OrderService>(`${this.orderServicesUrl}`, updatedOrderService);
  }
  confirmOrDiscardOrder(taskerResponse: TaskerConfirmOrDiscardOrder): Observable<OrderServiceDetails> {
    return this.http.put<OrderServiceDetails>(`${this.orderServicesUrl}/ConfirmOrDiscard`, taskerResponse);
  }
  ratingOrder(taskerResponse: RatingTheOrder): Observable<OrderServiceDetails> {
    return this.http.put<OrderServiceDetails>(`${this.orderServicesUrl}/rating`, taskerResponse);
  }
  ViewOrderService(viewedOrderService: OrderService): Observable<OrderService> {
    return this.http.put<OrderService>(`${this.orderServicesUrl}`, viewedOrderService);
  }
  getOrderService(id: number): Observable<OrderServiceDetails> {
    return this.http.get<OrderServiceDetails>(`${this.orderServicesUrl}/${id}`);
  }
  getOrderServices(): Observable<OrderService[]> {
    return this.http.get<OrderService[]>(this.orderServicesUrl);
  }
  getPagedOrders(query: any): Observable<PaginationResult<OrderService[]>> {
    return Utilities.getPaginationResult<OrderService>(this.http, `${this.orderServicesUrl}/Pages/manage`, query);
  }
  getPagedCurrentUserOrders(query: any): Observable<PaginationResult<OrderService[]>> {
    return Utilities.getPaginationResult<OrderService>(this.http, `${this.orderServicesUrl}/Pages/myorders`, query);
  }
  getOrderServicesAsList(query?: any): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.orderServicesUrl}/list`);
  }
  getTaskTimeAsList(): Observable<KeyValuePairResource[]> {
    return this.http.get<KeyValuePairResource[]>(`${this.orderServicesUrl}/times`);
  }

}