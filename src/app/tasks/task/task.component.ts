import { Component, Input } from '@angular/core';
import { TasksComponent } from "../tasks.component";

interface Task{
  id: string,
  userId: string,
  title: string,
  summary: string,
  dueDate: string,
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
}
