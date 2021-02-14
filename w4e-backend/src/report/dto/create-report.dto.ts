import { Timesheet } from "../entities/report.entity";

export class CreateReportDto {
    readonly author: string;
    readonly mounth: string;
    readonly year: string; 
    readonly total_time: number;
    readonly total_extra_time: number;
    readonly total_time_off: number;
    readonly total_permission_time: number;
    readonly timesheets: Timesheet[];
}
