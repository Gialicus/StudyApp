import React from 'react'
import { useRouter } from 'next/router'
import { Button } from "primereact/button";
import { Toolbar } from 'primereact/toolbar';
import LogoutButton from './LogoutButton';


export default function CustumToolbar(props) {
    const router = useRouter()
    const isDashboard = router.pathname === '/dashboard';
    const handelClick = (e) => {
        e.preventDefault()
        const route = '/' + e.target.innerText.toLowerCase();
        router.push(route)
    }
    const leftContents = (
        <React.Fragment>
            {props.leftButtons.map((btn, index) => {
                return <Button key={index} label={btn.label} icon={btn.icon} className={btn.className} onClick={btn.handler ? btn.handler : handelClick} />
            })}
        </React.Fragment>
    );

    const rightContents = (
        <React.Fragment>
            {props.rightButtons.map((btn, index) => {
                return <Button key={index} label={btn.label} icon={btn.icon} className={btn.className} onClick={btn.handler} />
            })}
            {!isDashboard ? <Button icon="pi pi-arrow-left" className="p-mr-2" onClick={(e) => {
                e.preventDefault()
                router.push('/dashboard')
            }} /> : null}
            <LogoutButton icon="pi pi-times" className="p-button-danger p-mr-2" />
        </React.Fragment>
    );

    return <Toolbar left={leftContents} right={rightContents} />
}
