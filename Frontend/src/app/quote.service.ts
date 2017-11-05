import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import {Headers} from '@angular/http';

@Injectable()
export class QuoteService {
    constructor(private http: Http) {

    }

    getQuotes(): Observable<any> {
        return this.http.get('http://localhost:8000/api/quotes')
        .map(
            (response: Response) => {
                return response.json().quotes;
            }
        );
    }


    updateQuote(id: number, newContent: string)  {
        const body = JSON.stringify({content: newContent});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8000/api/quote' + id, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }


    deleteQuote(id: number) {
        return this.http.delete('http://localhost:8000/api/quote' + id);
    }


}
