import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { Exhibit } from '../domains/Exhibit';
import { Tip } from '../domains/Tip';

const useStyle = makeStyles((theme: Theme) => createStyles({
    wrapper: {
        padding: "2em 0 0"
    },
    img: {
        width: "100%",
        height: "20vh",
        objectFit: "cover",
        borderRadius: "10px",
        margin: "0 0 0 20px"
    },
    text: {
        color: "white",
        margin: "0 20px 0 40px"
    }
}))

type Props = {
    exhibits: Exhibit[]
}

export default function Details(props: Props) {
    const classes = useStyle()
    let { liveId } = useParams()
    const tips: Tip[] = props.exhibits.find(e => e.id === liveId)!.tips
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            className={classes.wrapper}
            spacing={2}
        >
            {tips.map(tip => {
                return (
                    <Grid item container justify="flex-start" alignItems="center" key={tip.img_url} >
                        <Grid item xs={4}>
                            <img className={classes.img} src={tip.img_url} alt="describe" />
                        </Grid>
                        <Grid item xs={8}>
                            <Typography className={classes.text} variant="body2">{tip.text}</Typography>
                        </Grid>
                    </Grid>
                )
            })}
        </Grid>
    )
}