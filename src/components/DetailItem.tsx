import React from 'react';
import { createStyles, Theme, makeStyles, Typography } from '@material-ui/core';

type Props = {
    imgUrl: string
    imgAlt: string
    text: string
}

const useStyle = makeStyles((theme: Theme) => createStyles({
    div: {
        width: "63vw",
        height: "22vh",
        [theme.breakpoints.up('lg')]: {
            width: "51vw",
        },
        border: "double 5px rgba(256,256,256,0.8)",
        display: "flex"
    },
    img: {
        width: "30%",
        height: "100%",
        objectFit: "cover",
    },
    textarea: {
        width: "70%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0px 5px 0px 10px",
        background: "rgba(255,255,255,0.8)"
    }
}))

export function DetailItem(props: Props) {
    const classes = useStyle()
    return (
        <div className={classes.div}>
            <img className={classes.img} src={props.imgUrl} alt={props.imgAlt} />
            <div className={classes.textarea}>
                <Typography variant="body1">{props.text}</Typography>
            </div>
        </div >
    )
}