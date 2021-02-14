export const mock_reports = [
    {
        author: 'admin@example.com',
        mounth: 'MAG',
        year: '2021',
        total_time: 160,
        total_extra_time: 0,
        total_time_off: 0,
        total_permission_time: 0,
        timesheets: buildTimesheets(),
    },
    {
        author: 'admin@example.com',
        mounth: 'APR',
        year: '2021',
        total_time: 160,
        total_extra_time: 0,
        total_time_off: 0,
        total_permission_time: 0,
        timesheets: buildTimesheets(),
    },
    {
        author: 'admin@example.com',
        mounth: 'MAR',
        year: '2021',
        total_time: 160,
        total_extra_time: 0,
        total_time_off: 0,
        total_permission_time: 0,
        timesheets: buildTimesheets(),
    },
    {
        author: 'admin@example.com',
        mounth: 'FEB',
        year: '2021',
        total_time: 160,
        total_extra_time: 0,
        total_time_off: 0,
        total_permission_time: 0,
        timesheets: buildTimesheets(),
    },
    {
        author: 'admin@example.com',
        mounth: 'GEN',
        year: '2021',
        total_time: 160,
        total_extra_time: 0,
        total_time_off: 0,
        total_permission_time: 0,
        timesheets: buildTimesheets(),
    },
]

function buildTimesheets() {
    let timesheets = []
    for (let i = 0; i <= 31; i++) {
        timesheets.push({
            date: new Date(2021, 0, i),
            time: 8,
            extra_time: 0,
            time_off: 0,
            permission_time: 0,
        })
    }
    return timesheets;
}