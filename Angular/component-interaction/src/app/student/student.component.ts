import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private _interactionService: InteractionService) {}

  // component interaction using the service
  ngOnInit(): void {
    this._interactionService.teacherMessage$
      .subscribe(
        message => {
          if (message === "Good Morning") {
            alert("Good morning teacher");
          } else if (message === "Well Done") {
            alert("Thank you teacher");
          }
        }
      )
  }

}
