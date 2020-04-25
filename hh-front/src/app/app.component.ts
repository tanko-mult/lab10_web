import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from './api.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {LoggedService} from './logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private location: Location,
    private router: Router,
    private loggedService: LoggedService
  ) { }

  logged = false;

  ngOnInit(): void {
    this.loggedService.change.subscribe(val => {
      this.logged = val;
    });

    if(localStorage.getItem('token')){
      this.loggedService.toggle(true);
    }
  }

  logout(){
    localStorage.clear()
    this.loggedService.toggle(false);
  }
}
