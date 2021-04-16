import {Component, Input, OnInit} from '@angular/core';
import {SumBoxInfo} from '../../interface/dashboard.interface';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-widget-sum-box',
  templateUrl: './sum-box.component.html',
  styleUrls: ['./sum-box.component.css']
})

export class SumBoxComponent implements OnInit {
  @Input()
  boxData: SumBoxInfo = {
    marketName: 'Frankfurt',
    marketCode: 'de',
    investorName: 'ASOS Ridley High Waist',
    shortPosition: 2.50,
    lastPositionChange: 1.22,
    securityName: 'Wirecard AG',
    isin: 'US88160R1014',
  };

  constructor(
    private dashboardService: DashboardService,
  ) {
  }

  ngOnInit(): void {
  }

}
