import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThumbnailAgCellRendererComponent } from './thumbnail.component';
import { By } from '@angular/platform-browser';


describe('ThumbnailAgCellRendererComponent', () => {
  let component: ThumbnailAgCellRendererComponent;
  let fixture: ComponentFixture<ThumbnailAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailAgCellRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check src image type', () => {
    const img = fixture.debugElement.query(By.css('img'));
    const srcImgType = typeof img.nativeElement.src;
    expect(srcImgType).toEqual('string');
  });
});
