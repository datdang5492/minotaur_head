import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NetShortRecord, OptionItem, SumBoxInfo} from '../interface/dashboard.interface';

@Injectable()
export class DashboardService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    // todo: update this value
    this.baseUrl = 'http';
  }

  getMarketList(): Observable<OptionItem[]> {
    return this.http.get<OptionItem[]>(`${this.baseUrl}/market/list`);
  }

  getMarketTopShortPosition(marketCode: string): Observable<SumBoxInfo> {
    return this.http.post<SumBoxInfo>(`${this.baseUrl}/market/top-short-position`, {
      market_code: marketCode
    });
  }

  getMarketTopShortPositionList(marketCode: string): Observable<NetShortRecord[]> {
    return this.http.post<NetShortRecord[]>(`${this.baseUrl}/market/overview-position`, {
      market_code: marketCode
    });
  }

  getTopInvestor(marketCode: string): Observable<NetShortRecord[]> {
    return this.http.post<NetShortRecord[]>(`${this.baseUrl}/market/top-investors`, {
      market_code: marketCode
    });
  }

  getNetShortPosition(securityUuid: string): Observable<NetShortRecord[]> {
    return this.http.post<NetShortRecord[]>(`${this.baseUrl}/security/net-short`, {
      security: securityUuid
    });
  }
}
