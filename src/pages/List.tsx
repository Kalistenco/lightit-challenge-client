import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPatients } from "../api/api";
import { Patient } from "../interfaces/patient";
import { Button, Typography } from "@mui/material";
import { Layout, TableWrapper } from "../components";

export const List = () => {

    const [patients, setPatients] = useState<Patient[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const executeGetPatients = async () => {
            const retrievedPatients = await getPatients();
            setPatients(retrievedPatients);
        };
        executeGetPatients();
    }, []);

    return (
        <Layout container spacing={4} direction="column">
            <Typography variant="h3">
                Patient List
            </Typography>
            <Layout item xs={8}>
                {
                    Array.isArray(patients) ? <TableWrapper data={patients} /> : null
                }
            </Layout>
            <Layout item xs={8} >
                <Button variant="contained" onClick={() => navigate('/create')}>Create Patient</Button>
            </Layout>
        </Layout>

    )
}   