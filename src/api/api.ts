import axios from "axios";
import { Patient } from "../interfaces/patient";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export const createPatient = async (patient: Patient) => {
    try {
        await api.post('/patients', patient);
    } catch {
        throw new Error("Unable to create patient");
    }
}

export const getPatients = async (): Promise<Patient[]> => {
    try {
        const response = await api.get('/patients');
        return response.data.data;
    } catch {
        throw new Error("Unable to retrieve patients");
    }
}