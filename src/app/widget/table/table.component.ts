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
  isWidget = true;

  @Input()
  marketCode = '';

  @Input()
  securityUuid = '';

  @Input()
  reportTitle = 'Top Selling Products';

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
      security: 'dangbadat',
      isin: 'US88160R1014',
      position: 12,
      positionChange: 2.2,
      reportDate: '21.01.2020',
    },
    {
      investor: 'ASOS Ridley High Waist',
      security: '123',
      isin: 'US88160R1014',
      position: 12,
      positionChange: -2.2,
      reportDate: '21.01.2020',
    },
    {
      investor: 'ASOS Ridley High Waist',
      security: '123',
      isin: 'US88160R1014',
      position: 12,
      positionChange: 2.2,
      reportDate: '21.01.2020',
    },
    {
      investor: 'ASOS Ridley High Waist',
      security: '123',
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
    if (this.isWidget) {
      if (this.marketCode === '') {
        return;
      }

      this.dashboardService.getTopInvestor(this.marketCode).subscribe((res: NetShortRecord[]) => {
        this.tableData = res;
      });
    } else {
      if (this.securityUuid === '') {
        return;
      }

      this.dashboardService.getNetShortPosition(this.securityUuid).subscribe((res: NetShortRecord[]) => {
        this.tableData = res;
      });
    }
  }

  isDataAvailable(): boolean {
    return this.tableData && this.tableData.length > 0;
  }
}
