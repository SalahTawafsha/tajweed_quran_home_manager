import { Component, OnInit } from '@angular/core';
import { CoursesListService } from '../../services/courses-list.service';
import { CourseInterface } from '../../models/interfaces/course_interface';
import { RouterModule } from '@angular/router';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [RouterModule, CourseCardComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss'
})
export class CoursesListComponent implements OnInit {
  courses: CourseInterface[] = [];

  constructor(private coursesListService: CoursesListService) { }

  ngOnInit(): void {
    this.coursesListService.getData().subscribe((value => {
      this.courses = value;
      this.courses.forEach(course => {
        course.course_times = JSON.parse(course.course_times.toString()).map((course_time: any) => `${course_time.day} - ${course_time.time}`).join(", ")
      });
    }));
  }
}
