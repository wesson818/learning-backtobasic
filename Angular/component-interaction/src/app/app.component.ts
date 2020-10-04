import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// life cycle hooks

// ngOnChanges(changes: SimpleChanges): void {
//   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
//   //Add '${implements OnChanges}' to the class.
// }

// ngOnInit(): void {
//   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//   //Add 'implements OnInit' to the class.
// }

// ngDoCheck(): void {
//   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
//   //Add 'implements DoCheck' to the class.
// }

// ngAfterContentInit(): void {
//   //Called after ngOnInit when the component's or directive's content has been initialized.
//   //Add 'implements AfterContentInit' to the class.
// }

// ngAfterContentChecked(): void {
//   //Called after every check of the component's or directive's content.
//   //Add 'implements AfterContentChecked' to the class.
// }

// ngAfterViewInit(): void {
//   //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
//   //Add 'implements AfterViewInit' to the class.
// }

// ngAfterViewChecked(): void {
//   //Called after every check of the component's view. Applies to components only.
//   //Add 'implements AfterViewChecked' to the class.
// }

// ngOnDestroy(): void {
//   //Called once, before the instance is destroyed.
//   //Add 'implements OnDestroy' to the class.
// }


export class AppComponent implements AfterViewInit {

  pageTitle = "Angular Component Interaction";

  imgUrl = "https://picsum.photos/200";
  placeholderImg = "https://via.placeholder.com/150";

  count = 0;
  name: string = "Peter";
  username: string;
  message: string = "";
  private _customerName: string;

  userLoggedIn: boolean = true;

  constructor() {}
  // constructor(private _interactionService: InteractionService) {}

  // greetStudent() {
  //   this._interactionService.sendMessage("Good Morning");
  // }
  // appreciateStudent() {
  //   this._interactionService.sendMessage("Well Done");
  // }

  // can use childComponentRef to access property in child component ChildComponent
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  // ViewChild Decorator
  // 1. create reference variable in html element #nameRef
  // 2. implements AfterViewInit in class
  // 3. attach @ViewChild and create property of type ElementRef
  // 4. defined ngAfterViewInit with your Dom logic
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();

    this.childComponentRef.message = "message from parent component";
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
    if(value === "Wen"){
      alert("Welcome back "+value);
    }
  }

  incrementCount() {
    this.count++;
  }

  decrementCount() {
    this.count--;
  }

  greeting(value) {
    this.username = value;
    if(this.username === "Wen") {
      this.message = "Welcome back "+this.username;
    }
  }

  parentGreet(name: string){
    alert("Greeting from parent "+name)
  }

}
