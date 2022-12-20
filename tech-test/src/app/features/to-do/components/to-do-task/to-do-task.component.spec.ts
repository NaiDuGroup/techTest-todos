import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoTaskComponent } from './to-do-task.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('ToDoTaskComponent', () => {
  let component: ToDoTaskComponent;
  let fixture: ComponentFixture<ToDoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoTaskComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoTaskComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
