import { Injectable } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QueryStringBuilder<T> {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getQueryParams(query: T): any {
    const queryParamMap = this.activatedRoute.snapshot['queryParamMap'];
    Object.assign<T, any>(query, queryParamMap['params']);
    return queryParamMap['params'];
  }

  setQueryParams(query: T){
    const urlTree = this.router.createUrlTree([], {
      queryParams: query,
      queryParamsHandling: "merge", // remove to replace all query params by provided
      preserveFragment: true
    });
    this.router.navigateByUrl(urlTree);
  }
}
