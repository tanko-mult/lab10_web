import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from '../api.service';
import {Company} from '../classes/Company';
import {ActivatedRoute} from '@angular/router';
import {Vacancy} from '../classes/Vacancy';
import {LoggedService} from '../logged.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: Company;
  vacancies: Vacancy[];
  id: number;

  logged = this.loggedService.logged;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private loggedService: LoggedService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getOneCompany(this.id).subscribe(company => this.company = company);
    this.apiService.getVacanciesOfCompany(this.id).subscribe(vacancies => this.vacancies = vacancies);

    this.loggedService.change.subscribe(val => {
      this.logged = val;
    });
  }

  addVacancy(
    name: string,
    description: string,
    salary: string
  ){
    this.apiService.addVacancy(name, description, salary, this.company.id).subscribe(
      res => this.apiService.getVacanciesOfCompany(this.id).subscribe(vacancies => this.vacancies = vacancies)
    );
  }

  deleteVacancy( vacancyId: number ){
    this.apiService.deleteVacancy(vacancyId).subscribe(
      res => this.apiService.getVacanciesOfCompany(this.id).subscribe(vacancies => this.vacancies = vacancies)
    );
  }
}
