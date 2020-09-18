import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  greetStudent() {
    this._interactionService.sendMessage("Good Morning");
  }
  appreciateStudent() {
    this._interactionService.sendMessage("Well Done");
  }

  ngOnInit(): void {
  }

}
