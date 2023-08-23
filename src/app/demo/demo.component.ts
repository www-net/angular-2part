import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  title: string = 'Demo Component';
  @Input() message: string = 'Hello';

  constructor(){
    console.log('Demo compinent constructor called');
    console.log(this.title);
    console.log(this.message);
  }
}
