import {Component, Input, OnInit} from '@angular/core';
import {NetShortRecord} from '../../interface/dashboard.interface';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input()
  reportTitle = 'Top Selling Products';

  isWidget = true;
  exportFlag = true;

  colTitles = [
    'Investor',
    // 'Security',
    'ISIN',
    'Position(%)',
    'Last Change',
    'Report Date'
  ];

  tableData: NetShortRecord[] = [
    {
      investor: 'ASOS Ridley High Waist',
      security: '',
      isin: 'US88160R1014',
      position: 12,
      positionChange: 2.2,
      reportDate: '21.01.2020',
    },
    {
      investor: 'ASOS Ridley High Waist',
      security: '',
      isin: 'US88160R1014',
      position: 12,
      positionChange: -2.2,
      reportDate: '21.01.2020',
    },
    {
      investor: 'ASOS Ridley High Waist',
      security: '',
      isin: 'US88160R1014',
      position: 12,
      positionChange: 2.2,
      reportDate: '21.01.2020',
    },
    {
      investor: 'ASOS Ridley High Waist',
      security: '',
      isin: 'US88160R1014',
      position: 12,
      positionChange: -2.2,
      reportDate: '21.01.2020',
    },
  ];

  constructor(
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit(): void {
  }

  isDataAvailable(): boolean {
    return this.tableData && this.tableData.length > 0;
  }
}
