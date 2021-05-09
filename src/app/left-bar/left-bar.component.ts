import {Component, OnInit} from '@angular/core';
import {OptionItem} from '../interface/dashboard.interface';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.css']
})
export class LeftBarComponent implements OnInit {

  marketList: OptionItem[] = [
    {
      label: 'France',
      value: 'fr',
    },
    {
      label: 'Germany',
      value: 'de',
    },
    {
      label: 'England',
      value: 'uk',
    },
    {
      label: 'Austria',
      value: 'aut',
    },
  ];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    // this.dashboardService.getMarketList().subscribe((res: OptionItem[]) => {
    //   this.marketList = res;
    // });
  }

}
