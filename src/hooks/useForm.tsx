import { useState } from "react";
import { createPatient } from "../api/api";

type FormValues = {
    name: string,
    email: string,
    address: string,
    phone: string,
}

export type FormField = {
    label: string,
    placeholder: string,
    regex?: RegExp,
    errorMessage?: string
}

type FormFields = {
    [K in FormKeys]: FormField
}

type Error = {
    error: boolean,
    message: string
}

type FormKeys = keyof FormValues;

type FormErrors = {
    [K in FormKeys]: Error
}

type FormState = {
    submitted: boolean,
    error: boolean,
    message: string
}

export const useForm = () => {
    const fields: FormFields = {
        "name": {
            label: "Name",
            placeholder: "Name",
            regex: /^[a-zA-Z\s]*$/,
            errorMessage: "Name should only contain letters"
        },
        "email": {
            label: "Email",
            placeholder: "Email",
            regex: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"),
            errorMessage: "It should have a valid email format"
        },
        "address": {
            label: "Address",
            placeholder: "Address"
        },
        "phone": {
            label: "Phone",
            placeholder: "Phone"
        }
    };

    const [values, setValues] = useState<FormValues>({
        name: "",
        email: "",
        address: "",
        phone: ""
    });

    const [errors, setErrors] = useState<FormErrors>({
        name: {
            error: false,
            message: ""
        },
        email: {
            error: false,
            message: ""
        },
        address: {
            error: false,
            message: ""
        },
        phone: {
            error: false,
            message: ""
        }
    });

    const [formState, setFormState] = useState<FormState>({
        submitted: false,
        error: false,
        message: ""
    })

    const onChange = (e: { target: { name: any; value: any; }; }) => {
        const regex = fields[e.target.name as keyof typeof fields].regex;
        const name = e.target.name;
        const value = e.target.value;

        if (regex && !regex.test(value)) {
            setErrors({
                ...errors, [name as FormKeys]: {
                    error: true,
                    message: fields[name as FormKeys].errorMessage
                }
            })
        } else {
            setErrors({
                ...errors, [name as FormKeys]: {
                    error: false,
                    message: ""
                }
            })
        }

        setValues({ ...values, [name as FormKeys]: value });
    }

    const onSubmit = async () => {
        try {
            await createPatient(values);
            setFormState({
                submitted: true,
                error: false,
                message: "User created"
            })
        } catch (error) {
            setFormState({
                submitted: false,
                error: true,
                message: "Failed to create user"
            })
        }
    }

    return {
        fields,
        values,
        errors,
        onChange,
        onSubmit,
        formState
    }
}
