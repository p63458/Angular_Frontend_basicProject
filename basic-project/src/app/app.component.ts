import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  student = 'divya';
  rollNo = 1;
  studentData: any;
  feedBack :any;


  ngOnInit() {
    this.studentData = [
      {
        rollNo: '1',
        name: 'Divya Potharaj',
        school: 'JGS',
      },
      {
        rollNo: '2',
        name: 'Harish Potharaj',
        school: 'JGS',
      },
      {
        rollNo: '2',
        name: 'Janaki Ram Potharaj',
        school: 'TPS',
      }
    ];
    this.feedBack =[
      {
        remarks :"good"
      }
    ]
  }
}
