import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, from, map } from 'rxjs';

import { Task } from '../interfaces/task';

const TASKS_COLLECTION_NAME = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasksCollection: AngularFirestoreCollection<Task>;
  tasks: Observable<Task[]>;

  constructor(private firestore: AngularFirestore) {
    this.tasksCollection = firestore.collection<Task>(TASKS_COLLECTION_NAME);
    this.tasks = this.tasksCollection.valueChanges({ idField: 'id' });
  }

  getTasks(): Observable<Task[]> {
    return this.tasks;
  }

  getTask(id: string): Observable<Task> {
    return this.tasks.pipe(
      map((tasks) => tasks.find((task) => task.id === id)!)
    );
  }

  toggleTaskStatus(id: string, newStatus: boolean): Observable<any> {
    return from(this.tasksCollection.doc(id).update({ completed: newStatus }));
  }

  deleteTask(id: string): Observable<any> {
    return from(this.tasksCollection.doc(id).delete());
  }
}
