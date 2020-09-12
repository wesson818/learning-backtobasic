import {  Component, 
          OnInit, 
          Input, 
          OnChanges, 
          SimpleChanges, 
          EventEmitter, 
          Output 
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

  // can using ngOnChanges or getter and setter to interaction with Input values
  @Input('loggedIn') loggedInFlag:boolean = false;
  message: string;
  name: string = "Wen";

  // private _loggedIn: boolean;
  // get loggedIn(): boolean {
  //   return this._loggedIn;
  // }
  // @Input()
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value
  //   if(value){
  //     this.message = "Welcome Back";
  //   }else{
  //     this.message = "Please log in";
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    const loggedInValue = changes['loggedInFlag'];
    if(loggedInValue.currentValue === true) {
      this.message = "Welcome Back";
    }else{
      this.message = "Please log in";
    }
  }

  greeting() {
    alert("Greeting from Child: Hey "+this.name);
  }

  @Output() greetEvent = new EventEmitter();
  callParentGreet() {
    this.greetEvent.emit(this.name);
  }

}
