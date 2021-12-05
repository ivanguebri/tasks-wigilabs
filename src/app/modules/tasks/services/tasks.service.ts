import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Task } from '../interfaces/task';

const TASKS_COLLECTION_NAME = 'tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private firestore: AngularFirestore) {}

  getTasks(): Observable<Task[]> {
    return this.firestore
      .collection(TASKS_COLLECTION_NAME)
      .valueChanges({idField: 'id'}) as Observable<Task[]>;
  }
}
