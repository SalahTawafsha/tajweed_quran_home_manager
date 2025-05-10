import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent {
  yearOfBirth: InputSignal<number> = input.required<number>();
  name: InputSignal<String> = input.required<String>(); 
  id: InputSignal<number> = input.required<number>();
  ngClass: InputSignal<String> = input.required<String>();
}
