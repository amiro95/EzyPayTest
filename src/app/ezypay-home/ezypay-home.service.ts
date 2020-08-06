import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
 
@Injectable({
    providedIn: 'root'
})
export class EzypayHomeService {

    constructor(
        private http: HttpClient
    ) { }

    subscription(
        subscriptionType: string,
        amount: string,
        duration: string,
    ): Observable<any> {
        console.log("http..")
        const url = 'http://localhost:8080/subscription';
        const options = {
            params: new HttpParams().set('subscriptionType', subscriptionType).append('amount', amount).
                append('duration', duration)
        };
        return this.http.get(url, options).pipe(tap(resp => { }));
    }

}