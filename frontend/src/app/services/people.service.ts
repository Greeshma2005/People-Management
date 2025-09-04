import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface Person {
  _id?: string;
  name: string;
  age: number;
  gender: string;
  mobile: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  createPerson(person: Person): Observable<Person> {
  return this.http.post<Person>(`${this.baseUrl}`, person);
  }

  updatePerson(id: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/${id}`, person);
  }

  getPerson(id: string): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
}


  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deletePeople(ids: string[]): Observable<any> {
    // send IDs as request body
    return this.http.request('delete', this.baseUrl, { body: { ids } });
  }

}
