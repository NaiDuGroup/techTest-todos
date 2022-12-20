import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../../base/models/to-do.model';
import { ToDoApiService } from '../../services/to-do-api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-overview',
  templateUrl: './to-do-overview.component.html',
  styleUrls: ['./to-do-overview.component.scss'],
})
export class ToDoOverviewComponent implements OnInit {
  public title = 'OriginMarkets TODOS';
  public toDoItems: ToDoItem[];
  public filter: string;

  constructor(
    public toDoApiService: ToDoApiService,
  ) {
  }

  public get toDosToDisplay(): ToDoItem[] {
    if (!this.filter?.trim()) {
      return this.toDoItems;
    }

    return this.toDoItems.filter(
      (toDoItem) => {
        return toDoItem.label.toLowerCase().includes(this.filter.toLowerCase());
      },
    );
  }

  public ngOnInit(): void {
    this.getToDoItems();
  }

  public getToDoItems(): void {
    this.toDoApiService.getToDoItems().pipe(
      map((toDoItems) => {
        return toDoItems.reverse();
      }),
    ).subscribe((toDoItems) => {
      this.toDoItems = toDoItems;
    });
  }

  public setGlobalFilter(filter): void {
    this.filter = filter;
  }
}
