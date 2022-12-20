import { TestBed } from '@angular/core/testing';
import { ToDoApiService } from './to-do-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
});
