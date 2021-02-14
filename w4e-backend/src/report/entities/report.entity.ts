import * as mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
    author: String,
    mounth: String,
    year: String,
    total_time: Number,
    total_extra_time: Number,
    total_time_off: Number,
    total_permission_time: Number,
    timesheets: Array,
});

export default mongoose.model('Reports',ReportSchema);;

export interface Report extends Document{
    author: string;
    mounth: string;
    year: string; 
    total_time: number;
    total_extra_time: number;
    total_time_off: number;
    total_permission_time: number;
    timesheets: Timesheet[];
};

export interface Timesheet {
    date: Date
    time: number;
    extra_time: number;
    time_off: number;
    permission_time: number;
};