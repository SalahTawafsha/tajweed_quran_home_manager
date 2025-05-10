import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseDetailsService } from '../../services/course-details.service';
import { CourseDetailsInterface } from '../../models/interfaces/course_details_interface';
import { StudentCardComponent } from '../student-card/student-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [StudentCardComponent, FormsModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit{
  courseId: string = "";
  selectedCourse: CourseDetailsInterface | null = null;
  selectedStudentsIds: Array<number> = new Array<number>();
  date: String = "";
  isSubmitting = false;

  constructor(private router: Router, private route: ActivatedRoute, private courseDetailsService: CourseDetailsService) {}

  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id') ?? "";

    this.courseDetailsService.getData(this.courseId).subscribe((result: any) => {
      this.selectedCourse = result;
      if(this.selectedCourse != null)
        this.selectedCourse!.students = JSON.parse(this.selectedCourse!.students.toString())
    })
  }

  toggleStudentSelection(id: number){
      const index = this.selectedStudentsIds.indexOf(id);
      if (index > -1) {
        this.selectedStudentsIds.splice(index, 1);
      } else {
        this.selectedStudentsIds.push(id);
      }
      console.log(this.selectedStudentsIds);

    }

  submitAttendance(){
    console.log(this.selectedStudentsIds);
    this.isSubmitting = true;
    this.courseDetailsService.postAbsence(this.date, this.selectedStudentsIds).subscribe((result: any) => {
      if(result){
        this.router.navigate(['/courses']);
      }

      this.isSubmitting = false;
    })
  }
}
