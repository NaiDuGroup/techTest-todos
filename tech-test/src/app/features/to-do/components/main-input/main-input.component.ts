import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoApiService } from '../../services/to-do-api.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.scss'],
})
export class MainInputComponent implements OnInit {
  @Output() public addedNewToDoItem: EventEmitter<void> = new EventEmitter<void>();
  @Output() public filterItem: EventEmitter<string> = new EventEmitter<string>();

  public label: FormControl;

  constructor(
    public toDoApiService: ToDoApiService,
  ) {
  }

  ngOnInit(): void {
    this.label = new FormControl();

    this.label.valueChanges.pipe(
      debounceTime(400),
    ).subscribe((value) => {
      this.filterItem.emit(value);
    });
  }

  public addToDoItem(): void {
    if (this.label.value.trim() !== '') {
      this.toDoApiService.addToDoItem({
        label: this.label.value.trim(),
        done: false,
        description: '',
        category: '',
      }).subscribe(() => {
        this.label.setValue('');
        this.addedNewToDoItem.emit();
      });
    }
  }
}
