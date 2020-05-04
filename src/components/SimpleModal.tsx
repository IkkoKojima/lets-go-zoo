import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles((theme: Theme) => createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

type Props = {
    prevPath: string,
    content: React.ReactNode
}

export default function SimpleModal(props: Props) {
    const history = useHistory()
    const classes = useStyle()
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        history.push(props.prevPath)
    }

    return (
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
    )
}