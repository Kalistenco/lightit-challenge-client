import { TextField, TextFieldProps, TextFieldVariants } from "@mui/material"

export type TextInputProps = {
    variant?: TextFieldVariants;
} & Omit<TextFieldProps, 'variant'>

export const TextInput = (props: TextInputProps) => {
    return (<TextField {...props} />)
} 