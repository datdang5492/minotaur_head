import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-security-page',
  templateUrl: './security-page.component.html',
  styleUrls: ['./security-page.component.css']
})
export class SecurityPageComponent implements OnInit {

  securityUuid = '';

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // one way to get route param
    // this.route.snapshot.params.uuid;
    this.route.params.subscribe((params: Params) => {
      this.securityUuid = params.uuid;
      // this.dashboardService.getNetShortPosition(params.uuid)
      //   .subscribe((res: NetShortRecord[]) => {
      //     // this.tableData = res;
      //   });
    });
  }
}
