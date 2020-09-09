import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  public name = "Wen"
  public siteUrl = window.location.href
  public myId = "testId123"
  public isDisabled = false
  public successClass = "text-success"
  public hasError = true
  public isSpecial = true
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public isWarning = false
  public highlightColor = "orange"
  public titleStyles = {
    color: "gold",
    fontStyle: "italic"
  }
  public greetingMessage:string = ""

  public twowaybinding:string = ""

  public displayGreet:boolean = false

  public switchTesting:boolean = false

  public items:string[] = ["red", "blue", "green", "yellow"] 

  @Input() public parentData:string;

  @Output() public childEvent = new EventEmitter()

  public person:object = {
    "firstname": "John",
    "lastname": "Doe"
  }

  public date = new Date()

  constructor() { }
 
  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.name
  }

  onClick(event) {
    console.log(`Welcome ${this.name}!`)
    this.greetingMessage = event.type + "-Welcome " + this.name + "!"
  }

  logMessage(value) {
    console.log(value)
  }

  fireEvent() {
    this.childEvent.emit("Message from child")
  }
}
