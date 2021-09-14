import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateAgCellRendererComponent } from './date.component';
import { By } from '@angular/platform-browser';

describe('DateAgCellRendererComponent', () => {
  let component: DateAgCellRendererComponent;
  let fixture: ComponentFixture<DateAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateAgCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check date type', () => {
    const div = fixture.debugElement.query(By.css('div'));
    const div_type = typeof div.nativeElement.title;
    expect(div_type).toEqual('string');
  });

  it('should check if date is not null', () => {
    const div = fixture.debugElement.query(By.css('div'));
    const date = div.nativeElement.title;
    expect(date).toBeDefined();
  }); 
});
