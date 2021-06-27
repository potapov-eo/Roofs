import React from 'react';
import style from './Footer.module.css';
import Grid from '@material-ui/core/Grid';

function Footer() {
    return (
        <div className={style.footer}>
            <Grid container className={style.footer__content}>
                <Grid  md={6} xs={12} item> <p>Контакты: Тел. +7 928 452 11 84;</p></Grid>
                <Grid md={6} xs={12} item> <p>+375 29 643 94 86; +995 599 26 87 72;</p></Grid>
            </Grid>
        </div>
    );
}

export default Footer;
