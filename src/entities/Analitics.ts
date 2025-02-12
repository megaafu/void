export interface Analitics {
  weeksCount: number;
  weeksList: Date[];
  technicians: Technician[];
}
export interface Technician {
  technician_id: string;
  technician_name: string;
  area_name: string;
  weeks: Week[];
  sector?: string;
}
export interface Week {
  week_start: Date;
  total_records: number;
  area_name: string;
  technician_name: string;
  sector: string;
}
