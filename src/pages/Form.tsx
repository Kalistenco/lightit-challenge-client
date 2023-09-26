import { useForm } from "../hooks";
import { TextInput, Layout, ModalWrapper } from "../components";
import { Button, Typography } from "@mui/material";

export const Form = (): JSX.Element => {
    const { fields, values, errors, onChange, onSubmit, formState } = useForm();

    return (
        <Layout container spacing={2} direction="column">
            <Typography variant="h3">
                Create Patient
            </Typography>
            {Object.entries(fields).map(([key, value]) => {
                const error = errors[key as keyof typeof errors].error;
                const errorMessage = errors[key as keyof typeof errors].message;
                return (
                    <Layout item xs={8} >
                        <TextInput
                            key={key}
                            label={value.label}
                            placeholder={value.placeholder}
                            name={key}
                            value={values[key as keyof typeof values]}
                            onChange={onChange}
                            variant="outlined"
                            error={error}
                            helperText={error ? errorMessage : ""}
                            fullWidth
                        />
                    </Layout>
                )
            })}
            <Layout item xs={8} >
                <Button variant="contained" onClick={onSubmit}>Submit</Button>
            </Layout>

            <ModalWrapper initOpen={formState.submitted || formState.error} message={formState.message} />

        </Layout>
    );
}
