import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService{

  logged = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  toggle(val: boolean) {
    this.logged = val;
    this.change.emit(this.logged);
    console.log(`logged changed to : ${this.logged}`);
  }
}
