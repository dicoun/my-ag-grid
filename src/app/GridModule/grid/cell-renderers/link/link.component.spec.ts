import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridModule } from '@ag-grid-community/angular';
import {
  DateAgCellRendererComponent,
  TextAgCellRendererComponent,
  CheckboxAgCellRendererComponent,
  LinkAgCellRendererComponent,
  ThumbnailAgCellRendererComponent
} from '..';
import { CheckboxAgHeaderRendererComponent } from '../../cell-headers';
import { SelectionButtonComponent, TotalRecordsComponent, SelectedRecordsComponent } from '../../side-bar';
import { GridComponent } from '../../grid.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CheckboxComponent } from 'src/app/GridModule/common/checkbox/checkbox.component';
import { By } from '@angular/platform-browser';

describe('LinkAgCellRendererComponent', () => {
  let component: LinkAgCellRendererComponent;
  let fixture: ComponentFixture<LinkAgCellRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridComponent,
        DateAgCellRendererComponent,
        TextAgCellRendererComponent,
        LinkAgCellRendererComponent,
        ThumbnailAgCellRendererComponent,
        CheckboxAgCellRendererComponent,
        CheckboxAgHeaderRendererComponent,
        SelectionButtonComponent,
        SelectedRecordsComponent,
        TotalRecordsComponent,
        CheckboxComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        AgGridModule.withComponents([
          GridComponent,
          DateAgCellRendererComponent,
          TextAgCellRendererComponent,
          LinkAgCellRendererComponent,
          ThumbnailAgCellRendererComponent,
          CheckboxAgCellRendererComponent,
          CheckboxAgHeaderRendererComponent,
          SelectionButtonComponent,
          SelectedRecordsComponent,
          TotalRecordsComponent,
          CheckboxComponent
        ]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkAgCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check link type', () => {
    const a = fixture.debugElement.query(By.css('a'));
    const a_type = typeof a.nativeElement.href;
    expect(a_type).toEqual('string');
  });

  it('should check if link is not null', () => {
    const a = fixture.debugElement.query(By.css('a'));
    const link = a.nativeElement.href;
    expect(link).toBeDefined();
  }); 

  it('should check if title is not null', () => {
    const a = fixture.debugElement.query(By.css('a'));
    const title = a.nativeElement.title;
    expect(title).toBeDefined();
  }); 
});
