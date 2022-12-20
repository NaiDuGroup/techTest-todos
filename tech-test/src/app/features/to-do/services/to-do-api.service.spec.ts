import { TestBed } from '@angular/core/testing';
import { ToDoApiService } from './to-do-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToDoItem } from '../base/models/to-do.model';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ToDoApiService', () => {
  let service: ToDoApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ToDoApiService],
    });

    service = TestBed.inject(ToDoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call apiHttp with correct endpoint and save ToDoItem', () => {
    const toDoItem: Omit<ToDoItem, 'id'> = {
      label: 'test',
      description: 'test1',
      category: 'test111',
      done: false,
    };

    const spy = spyOn(TestBed.inject(HttpClient), 'post').and.returnValue(of(null));

    service.addToDoItem(toDoItem).subscribe((res) => {
      expect(res).toEqual(null);
    });

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/tasks', toDoItem);
  });

  it('should call apiHttp with correct endpoint and get ToDoItems', () => {
    const toDoItems: ToDoItem[] = [
      {
        id: '2',
        label: 'test',
        description: 'test3121',
        category: 'test111',
        done: false,
      },
      {
        id: '3',
        label: 'test1223',
        description: 'test1',
        category: 'test111',
        done: false,
      },
    ];

    const spy = spyOn(TestBed.inject(HttpClient), 'get').and.returnValue(of(toDoItems));

    service.getToDoItems().subscribe((res) => {
      expect(res).toEqual(toDoItems);
    });

    expect(spy).toHaveBeenCalledWith('http://localhost:3000/tasks');
  });
});
