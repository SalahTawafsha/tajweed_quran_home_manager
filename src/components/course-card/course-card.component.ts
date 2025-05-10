import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  id: InputSignal<number> = input.required<number>();
  teacher_name: InputSignal<String> = input.required<String>();
  students_count: InputSignal<number> = input.required<number>();
  course_times: InputSignal<String> = input.required<String>();
  
}
