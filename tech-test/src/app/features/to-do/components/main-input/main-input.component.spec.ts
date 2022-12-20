import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainInputComponent } from './main-input.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainInputComponent', () => {
  let component: MainInputComponent;
  let fixture: ComponentFixture<MainInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainInputComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInputComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
