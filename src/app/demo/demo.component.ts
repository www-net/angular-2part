import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  title: string = 'Demo Component';
  @Input() message: string;
  @ViewChild('temp') tempPara: ElementRef;
  @ContentChild('temp') paraContent: ElementRef;

  constructor() {
    // console.log('Demo compinent constructor called');
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
    // console.log('In ngDoCheck', this.paraContent);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Hook called');
    // console.log('In ngAfterContentInit', this.paraContent.nativeElement);
  }

  ngAfterContentChecked() {
    console.log('  ngAfterContentChecked Hook called');
    // console.log('  In ngAfterContentChecked', this.paraContent.nativeElement);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Hook called');
    // console.log('IN ngAfterViewInit', this.tempPara);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Hook called');
    console.log(this.tempPara.nativeElement.textContent);
  }
}
