import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  pageTitle = "Angular Component Interaction";
  imgUrl = "https://picsum.photos/200";
  count = 0;
  name: string = "Peter";
  username: string;
  message: string = "";
  private _customerName: string;
  userLoggedIn: boolean = true;

  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  // ViewChild Decorator
  // 1. create reference variable in html element
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
    this.count += 1;
  }

  decrementCount() {
    this.count -= 1;
  }

  onChange(value) {
    this.username = value;
    if(value === "Wen") {
      this.message = "Welcome back "+this.username;
    }
  }

  parentGreet(name: string){
    alert("Greeting from parent "+name)
  }

}
