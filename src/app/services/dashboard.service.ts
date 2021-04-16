import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NetShortRecord, SumBoxInfo} from '../interface/dashboard.interface';

@Injectable()
export class DashboardService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = 'http';
  }

  getMarketTopShortPosition(marketCode: string): Observable<SumBoxInfo[]> {
    return this.http.post<SumBoxInfo[]>(`${this.baseUrl}/market/get-top-short-position`, {
      market_code: marketCode
    });
  }

  getTopShortPositionOfMarket(marketCode: string): Observable<NetShortRecord[]> {
    return this.http.post<NetShortRecord[]>(`${this.baseUrl}/market/get-overview-position`, {
      market_code: marketCode
    });
  }
}
