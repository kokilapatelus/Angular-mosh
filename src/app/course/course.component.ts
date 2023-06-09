import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'course',
  template: `
  <h2>{{"Title :" +getTitle()}}</h2>
  <ul>
  <li *ngFor="let course of courses">
    {{course}}
  </li>
  </ul>
  `
})
export class CourseComponent  {
  title = "List of Courses";
  courses="";
  getTitle() { 
    return this.title;
  }
  
}
