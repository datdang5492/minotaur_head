export interface SumBoxInfo {
  marketName: string;
  marketCode: string;
  investorName: string;
  shortPosition: number;
  lastPositionChange: number;
  securityName: string;
  isin: string;
}

export interface NetShortRecord {
  investor: string;
  security: string;
  isin: string;
  position: number;
  positionChange: number;
  reportDate: string;
}
