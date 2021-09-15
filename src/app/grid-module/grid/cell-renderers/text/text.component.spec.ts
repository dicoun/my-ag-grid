import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TextAgCellRendererComponent } from './text.component';
import { By } from '@angular/platform-browser';

describe('TextAgCellRendererComponent', () => {
  let component: TextAgCellRendererComponent;
  let fixture: ComponentFixture<TextAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAgCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check text type', () => {
    const div = fixture.debugElement.query(By.css('div'));
    const textType = typeof div.nativeElement.title;
    expect(textType).toEqual('string');
  });

  it('should check if text is not null', () => {
    const div = fixture.debugElement.query(By.css('div'));
    const text = div.nativeElement.title;
    expect(text).toBeDefined();
  });
});
