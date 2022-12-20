import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from '../base/models/to-do.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoApiService {
  public endpoint = 'http://localhost:3000/tasks';

  constructor(public http: HttpClient) {
  }

  public getToDoItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(`${this.endpoint}`);
  }

  public addToDoItem(toDoItem: Omit<ToDoItem, 'id'>): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(`${this.endpoint}`, toDoItem);
  }

  public deleteToDoItem(toDoItemId: string): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${toDoItemId}`);
  }

  public updateToDoItem(toDoItem: ToDoItem): Observable<ToDoItem> {
    return this.http.patch<ToDoItem>(`${this.endpoint}/${toDoItem.id}`, toDoItem);
  }
}
