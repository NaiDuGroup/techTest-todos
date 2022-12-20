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
  public filteredToDoItems: ToDoItem[];
  public useFilteredValues = false;

  constructor(
    public toDoApiService: ToDoApiService,
  ) {
  }

  public ngOnInit(): void {
    this.getToDoItems();
  }

  public getToDoItems(): void {
    this.useFilteredValues = false;

    this.toDoApiService.getToDoItems().pipe(
      map((toDoItems) => {
        return toDoItems.reverse();
      }),
    ).subscribe((toDoItems) => {
      this.toDoItems = toDoItems;
    });
  }

  public getFilteredToDoItems(filter: string): ToDoItem[] {
    if (filter !== ' ') {
      this.useFilteredValues = true;
      this.filteredToDoItems = this.toDoItems.filter((toDoItem) => {
        return toDoItem.label.toLowerCase().includes(filter.toLowerCase());
      });
    } else {
      return this.toDoItems;
    }
  }
}
