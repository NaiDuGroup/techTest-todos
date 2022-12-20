import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../../base/models/to-do.model';
import { ToDoApiService } from '../../services/to-do-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss'],
})
export class ToDoTaskComponent implements OnInit {
  @Input() public toDoItem: ToDoItem;
  @Output() public deletedToDoItem: EventEmitter<void> = new EventEmitter<void>();

  public toDoForm: FormGroup;

  constructor(
    public toDoApiService: ToDoApiService,
    public formBuilder: FormBuilder,
  ) {
  }

  public ngOnInit(): void {
    this.initializeForm();
    this.toDoForm.patchValue(this.toDoItem);

    this.toDoForm.valueChanges.pipe(
      map(value => {
        if (value.done) {
          value.done = new Date().toLocaleDateString();
        }
        return value;
      }),
      debounceTime(1000),
      switchMap((value) => {
        return this.toDoApiService.updateToDoItem(value);
      }),
    ).subscribe();
  }

  public initializeForm(): void {
    this.toDoForm = this.formBuilder.group({
      id: [],
      label: [],
      description: [],
      category: [],
      done: [],
    });
  }

  public deleteToDoItem(id: string): void {
    this.toDoApiService.deleteToDoItem(id).subscribe(() => {
      this.deletedToDoItem.emit();
    });
  }
}
