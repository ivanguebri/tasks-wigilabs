import { Injectable } from '@angular/core';
import * as L from 'leaflet';

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
        taskMarker.addTo(map);
      })
    );
  }
}
