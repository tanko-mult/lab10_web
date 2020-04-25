import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './classes/Company';
import {Vacancy} from './classes/Vacancy';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8000/';
  private companiesUrl = 'http://localhost:8000/api/companies/';
  private vacanciesUrl = 'http://localhost:8000/api/vacancies/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  /** GET heroes from the server */
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companiesUrl);
  }

  getVacanciesOfCompany(company_id: number): Observable<Vacancy[]> {
    const url = `${this.companiesUrl}${company_id}/vacancies`;
    return this.http.get<Vacancy[]>(url);
  }

  // /* GET heroes whose name contains search term */
  // getPinnedResumes(pin: boolean): Observable<Resume[]> {
  //   return this.http.get<Resume[]>(`${this.resumeUrl}/?pin=${pin}`)
  // }
  //
  /** GET hero by id. Will 404 if id not found */
  getOneCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}${id}`;
    return this.http.get<Company>(url);
  }

  getOneVacancy(id: number): Observable<Vacancy> {
    const url = `${this.vacanciesUrl}${id}`;
    return this.http.get<Vacancy>(url);
  }

  //
  // /* GET heroes whose name contains search term */
  // searchResumes(term: string): Observable<Resume[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty hero array.
  //     return of([]);
  //   }
  //   return this.http.get<Resume[]>(`${this.resumeUrl}/?post=${term}`)
  // }
  //
  // //////// Save methods //////////
  //
  /** POST: add a new hero to the server*/
  loginWithToken(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'api/login/', {username, password}, this.httpOptions);
  }

  addUser(username: string, password: string): Observable<any> {
    return this.http.post(this.baseUrl + 'api/users/', {username, password}, this.httpOptions);
  }

  addCompany(name: string, description: string, city: string, address: string): Observable<any> {
    return this.http.post(this.companiesUrl, {name, description, city, address}, this.httpOptions);
  }

  addVacancy(name: string, description: string, salary: string, company: number): Observable<any> {
    return this.http.post(this.vacanciesUrl, {name, description, salary, company}, this.httpOptions);
  }


  /** DELETE: delete the hero from the server */
  deleteCompany(id: number): Observable<Company> {
    const url = `${this.companiesUrl}${id}`;

    return this.http.delete<Company>(url, this.httpOptions);
  }

  deleteVacancy(id: number): Observable<Vacancy> {
    const url = `${this.vacanciesUrl}${id}`;

    return this.http.delete<Vacancy>(url, this.httpOptions);
  }

  // /** PUT: update the hero on the server */
  // updateVacancy(vacancy: Resume): Observable<any> {
  //   return this.http.put(this.resumeUrl, vacancy, this.httpOptions)
  // }
}
