import React from 'react';
import { Button, Modal } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

type Props = {
    buttonStr: String
    content: React.ReactNode
}

export default function SimpleModal(props: Props) {
    const classes = useStyle()
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpen}
            >
                {props.buttonStr}
            </Button>
            <Modal
                closeAfterTransition
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >
                <div>
                    {props.content}
                </div>
            </Modal>
        </div>
    )
}