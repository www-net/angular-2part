import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-view-children';
  fullName: string = '';

  @ViewChildren('inputEl', {})
  inputElements!: QueryList<ElementRef>;

ngOnInit(){
  this.inputElements.forEach((el) => {
    console.log(el.nativeElement.value);
  })
}

  show(){
    let name = ''
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value + ' ';
    })
  this.fullName = name.trim();
  }

}
