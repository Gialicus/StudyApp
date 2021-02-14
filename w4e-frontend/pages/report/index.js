import Toolbar from "../../components/CustumToolbar";
import React from "react"
import Report from "../../components/Reports";
import useUser from "../../hooks/useUser";
import { useRouter } from "next/router";


export default function ReportView() {
    const { token } = useUser();
    const router = useRouter();

    const leftButtons = [
        {
            label: "create",
            icon: "pi pi-plus",
            className: "p-mr-2",
            handler: (e) => {
                router.push('/report/calendar')
            }
        }
    ];
    
    const rightButtons = [
        {
            icon: "pi pi-search",
            className: "p-button-success p-mr-2"
        }
    ];
    

    return (
        <React.Fragment>
        <div className="p-grid" >
            <div className="p-col">
                <Toolbar leftButtons={leftButtons} rightButtons={rightButtons}/>
            </div>
        </div>
        <div className="p-grid" >
            <div className="p-col">
                <Report accessToken={token}></Report>
            </div>
        </div>
        </React.Fragment>
    )
}