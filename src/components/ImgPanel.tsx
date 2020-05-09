import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

type Props = {
    src: string,
    alt: string
}

const useStyle = makeStyles((theme: Theme) => createStyles({
    content: {
        display: "block",
        height: 0,
        width: "100%",
        paddingBottom: "100%",
        backgroundSize: "cover",
        borderRadius: "100%",
        boxShadow: "3px 3px 3px rgba(0,0,0,0.5)"
    }
}))

export default function ImgPanel(props: Props) {
    const classes = useStyle()
    return (
        <div>
            <span className={classes.content} style={{ backgroundImage: `url(${props.src})` }} />
        </div>
    )
}