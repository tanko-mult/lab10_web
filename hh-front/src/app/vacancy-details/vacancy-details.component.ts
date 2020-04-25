import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {ActivatedRoute} from '@angular/router';
import {Vacancy} from '../classes/Vacancy';
import {LoggedService} from '../logged.service';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.css']
})
export class VacancyDetailsComponent implements OnInit {

  vacancy: Vacancy;
  logged = this.loggedService.logged;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private loggedService: LoggedService
  ) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.apiService.getOneVacancy(id).subscribe(vacancy => this.vacancy = vacancy);

    this.loggedService.change.subscribe(val => {
      this.logged = val;
    });

    if(localStorage.getItem('token')){
      this.loggedService.toggle(true);
    }
  }

}
