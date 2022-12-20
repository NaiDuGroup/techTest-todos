import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToDoOverviewComponent } from './to-do-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ToDoOverviewComponent', () => {
  let component: ToDoOverviewComponent;
  let fixture: ComponentFixture<ToDoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToDoOverviewComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoOverviewComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'OriginMarkets TODOS'`, () => {
    fixture = TestBed.createComponent(ToDoOverviewComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.title).toEqual('OriginMarkets TODOS');
  });
});
