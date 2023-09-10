import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import { TableComponent } from '../table/table.component';
import { HistoryService } from '../services/history.service';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let historyServiceMock: jasmine.SpyObj<HistoryService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HistoryService', [], {
      state: { 
        formData: [{ name: 'John', age: 30 }],
        csvData: ['sample csv data item1', 'sample csv data item2'] 
      }
    });

    TestBed.configureTestingModule({
      declarations: [SummaryComponent, TableComponent],
      providers: [{ provide: HistoryService, useValue: spy }]
    });

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    historyServiceMock = TestBed.inject(HistoryService) as jasmine.SpyObj<HistoryService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from history.state on initialization', () => {
    fixture.detectChanges();
    
    expect(component.formData).toEqual(historyServiceMock.state.formData);
    expect(component.csvData).toEqual(historyServiceMock.state.csvData);
  });

  it('should set hasData to false if no data is provided', () => {
    historyServiceMock.state.formData = null;
    historyServiceMock.state.csvData = null;

    fixture.detectChanges();

    expect(component.hasData).toBeFalse();
  });
});