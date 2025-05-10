import { Routes } from '@angular/router';
import { CourseDetailsComponent } from '../components/course-details/course-details.component';
import { CoursesListComponent } from '../components/courses-list/courses-list.component';

export const routes: Routes = [
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'dashboard', component: CoursesListComponent }, // Optional: Route for the main courses list
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Optional: Redirect root path
];
