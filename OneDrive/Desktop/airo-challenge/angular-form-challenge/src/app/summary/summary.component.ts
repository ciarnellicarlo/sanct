import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { UserFormData } from '../models/form.model'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnDestroy, OnInit {

  Object = Object;

  formData: UserFormData | undefined;
  csvData: any[] = [];
  hasData: boolean = true;

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.initData();
  }

  ngOnDestroy(): void {
    this.cleanupOnDestroy();
  }

  private initData(): void {
    const { formData, csvData } = this.historyService.state ?? {};
    this.formData = formData;
    this.csvData = csvData;

    if (!this.formData || !this.csvData) {
      this.hasData = false;
    }
  }

  private cleanupOnDestroy(): void {
    this.formData = undefined;
    history.replaceState({}, '');
  }
}