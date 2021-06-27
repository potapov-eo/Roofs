import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Header from './Header/Header';
import AboutUs from './AboutUs/AboutUs';
import Footer from './Footer/Footer';
import Examples from './Examples/Examples';

function App() {
    return (
        <Grid container direction="column" spacing={0}>
            <Grid item>
                <Header/>
            </Grid>
            <Grid item >
                <AboutUs/>
            </Grid>
            <Grid item>
            </Grid>
            <Examples/>
            <Grid item>
               <Footer/>
            </Grid>
        </Grid>
    );
}

export default App;
