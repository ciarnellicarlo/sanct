import { TestBed } from '@angular/core/testing';

import { CsvParserService } from './csv-parser.service';

describe('CsvParserService', () => {
  let service: CsvParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsvParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse CSV content', () => {
    const csvData = "Name,Surname,Age,City,Address\nJohn,Doe,25,London,5 Main Street";
    const expectedData = [
      { "Name": "John", "Surname": "Doe", "Age": "25", "City": "London", "Address": "5 Main Street" }
    ];

    expect(service.parse(csvData)).toEqual(expectedData);
  });
});