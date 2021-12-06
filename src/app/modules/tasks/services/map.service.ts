import { Injectable } from '@angular/core';
import * as L from 'leaflet';

import { Task } from '../interfaces/task';

import { TasksService } from './tasks.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private tasksService: TasksService) {}

  addTaskMarkers(map: L.Map): void {
    this.tasksService.getTasks().subscribe((tasks) =>
      tasks.forEach((task) => {
        const { lat, long } = task;
        const taskMarker = L.marker([lat, long]);
        taskMarker.bindPopup(this.makeTaskPopup(task));
        taskMarker.addTo(map);
      })
    );
  }

  private makeTaskPopup(task: Task): string {
    return `
      <div>${task.description}</div>
      <div>Status: ${task.completed ? 'Completed' : 'Pending'}</div>
      <div>Lat: ${task.lat}</div>
      <div>Long: ${task.long}</div>
    `;
  }
}
