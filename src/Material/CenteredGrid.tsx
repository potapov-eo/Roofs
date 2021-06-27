import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function CenteredGrid() {
    const classes = useStyles();

    return (

            <Grid container  direction="column">
                <Grid item >
                    <div style={{background:'red', height: "100%", width: "100%", padding: "12px"}}>xs=12</div>
                </Grid>
                <Grid item spacing-xs-1 >
                    <div style={{background:'blue', height: "100%", width: "100%", padding: "12px"}}>xs</div>
                </Grid>
                <Grid item >
                    <div style={{background:'yellow', height: "100%", width: "100%", padding: "12px"}}>xs=12 sm=6</div>
                </Grid>
            </Grid>

    );
}
