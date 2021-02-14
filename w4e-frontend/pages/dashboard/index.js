import Toolbar from "../../components/CustumToolbar";

const leftButtons = [
    {
        label: "Report",
        icon: "pi pi-plus",
        className: "p-mr-2"
    },
    {
        label: "News",
        icon: "pi pi-upload",
        className: "p-button-success p-mr-2"
    },
    {
        label: "Contact",
        icon: "pi pi-minus",
        className: "p-button-info p-mr-2"
    }
]
const rightButtons = [
    {
        icon: "pi pi-search",
        className: "p-button-success p-mr-2"
    }
]

export default function Dashboard() {
    return (
        < div className="p-grid" >
            <div className="p-col"><Toolbar leftButtons={leftButtons} rightButtons={rightButtons}/></div>
        </div >
    )
}
