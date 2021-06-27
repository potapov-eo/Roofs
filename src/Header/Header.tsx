import React from 'react';
import style from './Header.module.css';
import Grid from '@material-ui/core/Grid';

function Header() {
    return (
        <Grid className={style.header}>
            <div className={style.header__fon}>
                <Grid container   alignItems="center" className={style.header__info}>
                    <Grid md xs={12} wrap='wrap' item  className={style.header__name}> ROOFS</Grid>
                    <Grid md={6} xs={12} item className={style.header__text}>Проектирование домов и коттеджей по всему миру</Grid>
                    <Grid md xs={12} item className={style.header__contact}>
                        <p>Контакты:Тел.</p>
                        <p>+7 928 452 11 84</p>
                        <p>+375 29 643 94 86</p>
                        <p>+995 599 26 87 72</p>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
}

export default Header;
