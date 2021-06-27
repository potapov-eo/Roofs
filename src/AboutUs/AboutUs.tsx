import React from "react";
import style from "./AboutUs.module.css";
import Grid from '@material-ui/core/Grid';

function AboutUs () {
    return (

        <div className={style.AboutUs}>
                <Grid container  className={style.AboutUs__content}>
                    <Grid md={3} xs={12}  item><p>Авангардные,только индивидуальные проекты предлагает компания ENGINEERING GROUP.-школа
                        знаменитого
                        грузинского архитектора Вахтанга Квимсадзе.</p></Grid>
                    <Grid md={3} xs={12}  item> <p>Грузинские зодчие всегда занимали ведущее место в мировой архитектуре.</p></Grid>
                    <Grid md={3} xs={12}  item> <p>Наши предложения будут созвучны с Вашими ожиданиями.</p></Grid>
                    <Grid md={3} xs={12}  item><p>Работают опытные профессионалы. Выполняют работы любой сложности в промышленном и гражданском
                        строительстве.</p></Grid>

                </Grid>

        </div>

    );
}

export default AboutUs;
