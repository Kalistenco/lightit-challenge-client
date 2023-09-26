import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export type ModalProps = {
    initOpen: boolean,
    message: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalWrapper = ({ initOpen, message }: ModalProps) => {

    const [open, setOpen] = useState(initOpen);

    useEffect(() => {
        setOpen(initOpen);
    }, [initOpen, message])

    return (<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
            backdrop: {
                timeout: 500,
            },
        }}>
        <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                    {message}
                </Typography>
            </Box>
        </Fade>
    </Modal>)
}
