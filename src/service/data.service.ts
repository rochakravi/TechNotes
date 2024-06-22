import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any> {
    return this.http.get<any>('assets/angulardata.json');
  }

  getCodeSnippets(): Observable<any> {
    return this.http.get<any>('assets/angulardata.json');
  }
  
  getAWSNotes():Observable<any>{
    return this.http.get<any>('assets/aws.json');
  }
}
