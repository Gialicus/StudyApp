import {useState,useEffect} from "react"
import Axios from "axios"

export const useGetReport = (accessToken) => {
    const [reports, setReports] = useState();
    useEffect(() => {
        async function fetchData() {
            const response = await Axios.get('http://localhost:7000/api/report',{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const result = response.data;
            console.log('Report: ', result)
            setReports(result)
        }
        fetchData()
    }, [])
    return reports;
}

export const usePostReport = (accessToken, report) => {
    const [message, setMessage] = useState();
    useEffect(() => {
        async function postData() {
            const response = await Axios.post('http://localhost:7000/api/report',{
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(report)
            })
            const result = response.data;
            setMessage(result)
        }
        postData()
    }, [report])
    return message;
}