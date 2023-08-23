import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecycle-hook';
  inputVal: string[] = ['Hello', 'Hi There'];
  constructor() {
    console.log('App component constructor called!')
  }

  onBtnClicked(inputEl: HTMLInputElement) {
    this.inputVal.push(inputEl.value)
  }
}
