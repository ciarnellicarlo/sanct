import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {

  constructor() { }

  parse(csvData: string): Array<Object> {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');

    const data: Array<Object> = [];

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split(',');
      const obj: { [key: string]: any } = {};

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = cells[j];
      }

      data.push(obj);
    }

    return data;
  }
}