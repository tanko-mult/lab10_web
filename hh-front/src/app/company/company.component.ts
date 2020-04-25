import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Company} from '../classes/Company';
import {Router} from '@angular/router';
import {LoggedService} from '../logged.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  companies: Company[];

  logged = this.loggedService.logged;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private loggedService: LoggedService
  ) { }


  ngOnInit(): void {
    this.loggedService.change.subscribe(val => {
      this.logged = val;
    });

    this.apiService.getCompanies().subscribe(companies => this.companies = companies);
  }

  addCompany(
    name: string,
    description: string,
    city: string,
    address: string,
  ): void{
    this.apiService.addCompany(name, description, city, address).subscribe(res => this.apiService.getCompanies().subscribe(companies => this.companies = companies));
  }

  deleteCompany(companyId: number): void{
    this.apiService.deleteCompany(companyId).subscribe(res => this.apiService.getCompanies().subscribe(companies => this.companies = companies));
  }
}
