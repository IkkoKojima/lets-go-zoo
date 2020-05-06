import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
        },
        image: {
            position: 'relative',
            '&:hover, &$focusVisible': {
                zIndex: 1,
                '& $imageBackdrop': {
                    opacity: 0.15,
                },
                '& $imageMarked': {
                    opacity: 0,
                },
                '& $imageTitle': {
                    border: '4px solid currentColor',
                },
            },
        },
        focusVisible: {},
        imageButton: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.palette.common.white,
        },
        imageSrc: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
        },
        imageBackdrop: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: theme.palette.common.black,
            opacity: 0.4,
            transition: theme.transitions.create('opacity'),
        },
        imageTitle: {
            position: 'relative',
            padding: `${theme.spacing(1)}px`,
        },
    }),
);

type Image = {
    url: string
    title: string
    title2?: string
    style?: Object
}

type Props = {
    image: Image
    handleClick?: any
}

export default function ButtonWithImg(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonBase
                onClick={props.handleClick}
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={props.image.style}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${props.image.url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="caption"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {props.image.title}
                        {props.image.title2 ? <br /> : <div />}
                        {props.image.title2}
                    </Typography>
                </span>
            </ButtonBase>
        </div>
    );
}
