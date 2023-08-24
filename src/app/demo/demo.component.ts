import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {
  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;

  constructor() {
    console.log('Demo compinent constructor called');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Hook called');
    // console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit Hook called');
    // console.log(this.tempPara.nativeElement.innerHTML);
  }

  ngDoCheck() {
    console.log('ngDoCheck Hook called');
    console.log('In ngDoCheck', this.paraContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Hook called');
    console.log('In ngAfterContentInit', this.paraContent.nativeElement);
  }
}
