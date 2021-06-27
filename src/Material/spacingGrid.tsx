import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 400,
            width: 300,


        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState<GridSpacing>(2);
    const classes = useStyles();


    return (
        <Grid container justify="space-around" spacing={5}>
            {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                    <Paper className={classes.paper}>
                        <div style={{background:'red', height: "100%", width: "100%"}}></div>
                    </Paper>
                </Grid>
            ))}
        </Grid>

    );
}
