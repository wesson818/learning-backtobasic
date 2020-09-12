import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    topics = ['Angular',  'React', 'Vue'];
    userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
    topicHasError:boolean = true;
    submitted:boolean = false;
    errorMsg:string = ""
    successMsg:string = ""

    constructor(private _enrollmentService: EnrollmentService) {}

    validateTopic(value) {
      if (value === "default") {
          this.topicHasError = true;
      } else {
          this.topicHasError = false;
      }
    }

    onSubmit() {
      this.submitted = true;
      console.log(this.userModel)
      this._enrollmentService.enroll(this.userModel)
          .subscribe(
            data => {
              console.log("Success!", data)
              this.successMsg = "Success! Form submitted"
            },
            error => this.errorMsg = "Error! "+error.statusText
          )
    }

}
