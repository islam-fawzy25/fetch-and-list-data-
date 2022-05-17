import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IData } from "./data";
import { Observable } from "rxjs";

@Injectable()
export class DataServices {
     private _url:string='https://jsonplaceholder.typicode.com/photos'
   // private _url:string='http://localhost:5000/data'

    constructor(private http: HttpClient){}

    getData(): Observable<IData[]>{
        return this.http.get<IData[]>(this._url)
    }
}