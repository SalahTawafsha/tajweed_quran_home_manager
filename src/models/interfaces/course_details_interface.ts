import { CourseTimeInterface } from "./course_time_interface"
import { NoteInterface } from "./coutse_note"
import { StudentInterface } from "./student_interface"

export interface CourseDetailsInterface {
    id: number,
    teacher_name: String,
    level_id: number,
    students: Array<StudentInterface>,
    times: Array<CourseTimeInterface>,
    notes: Array<NoteInterface>
}