import { Component, OnInit } from '@angular/core';
import { CoursesListService } from '../../services/courses-list.service';
import { CourseInterface } from '../../models/interfaces/course_interface';
import { RouterModule } from '@angular/router';
import { CourseCardComponent } from "../course-card/course-card.component";
import { CommonModule } from '@angular/common';
import { TeacherInfo } from '../../models/interfaces/teacher';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  courses: { [key: string]: CourseInterface[] } = {};
  teachers: TeacherInfo[] = [];

  constructor(private coursesListService: CoursesListService) { }

  ngOnInit(): void {
    this.coursesListService.getData().subscribe((values => {
      for(const value of values['courses']){
        this.courses[value['day']] = JSON.parse(value['courses_list']);
      }

      this.teachers = values['teachers']
    }));
  }
}
