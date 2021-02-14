import { useGetReport } from '../hooks/useReport'
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const Report = (props) => {

    const reports = useGetReport(props.accessToken);

    const actionsTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button label="print" className="p-button-warning p-mr-2"/>
                <Button label="zoom" className="p-button-success p-mr-2"/>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <div className="card">
                <DataTable 
                value={reports} 
                className="p-datatable-striped" 
                paginator
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" 
                rows={10} 
                rowsPerPageOptions={[10,20,50]}>
                    <Column field="author" header="Author"></Column>
                    <Column field="mounth" header="Mounth"></Column>
                    <Column field="year" header="Year"></Column>
                    <Column field="total_time" header="Total time"></Column>
                    <Column field="total_extra_time" header="Total extra time"></Column>
                    <Column field="total_time_off" header="Total time off"></Column>
                    <Column field="total_permission_time" header="Total time permission"></Column>
                    <Column header="Actions" body={actionsTemplate}></Column>
                </DataTable>
            </div>
        </React.Fragment>
    )
}

export default Report;