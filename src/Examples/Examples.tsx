import React from "react";
import style from "./Examples.module.css";
import pic1 from "../assets/image/1/арх 3-Рисунок 2.jpg";
import pic2 from "../assets/image/1/арх 3-Рисунок 3.jpg";
import pic3 from "../assets/image/1/арх 3-Рисунок 4.jpg";
import pic4 from "../assets/image/1/арх 2-Рис 5.jpg";
import pic5 from "../assets/image/2/сруб - Рисунок1.jpg";
import pic6 from "../assets/image/2/сруб-Рисунок2_.jpg";
import pic7 from "../assets/image/2/сруб-Рисунок4 (3).jpg";
import pic8 from "../assets/image/3/1арх виз.jpg";
import pic9 from "../assets/image/3/2арх1 рисунок2.jpg";
import pic10 from "../assets/image/3/3арх 1 рисунок3.jpg";
import pic11 from "../assets/image/4/арх футур-Рисунок2_.jpg";
import pic12 from "../assets/image/4/арх футур-Рисунок3.jpg";
import pic13 from "../assets/image/4/арх футур-Рисунок4.jpg";
import pic14 from "../assets/image/4/арх футур-Рисунок5.jpg";

import pic15 from "../assets/image/5/ресторан-Рисунок2.jpg";
import pic16 from "../assets/image/5/ресторан-Рисунок3.jpg";
import pic17 from "../assets/image/5/ресторан-Рисунок4.jpg";


import Grid from '@material-ui/core/Grid';
import Slider from "./Slider/Slider";


const firstPics = {
    pics: [pic1, pic2, pic3, pic4,
    ], title: "Light house",
};
const secondPics = {
    pics: [pic5, pic6, pic7,
    ], title: "Чемья(сруб)",
};
const thirdPics = {
    pics: [pic8, pic9, pic10,
    ], title: "Уют",
};
const fourPics = {
    pics: [pic11, pic12, pic13, pic14,
    ], title: "Эмоция",
};
const fivePics = {
    pics: [pic15, pic16, pic17,
    ], title: "Ресторан, кафе, дегустационный зал",
};


const allPics = [firstPics, secondPics, thirdPics, fourPics, fivePics];

function Examples () {
    return (
        <div className={style.examples}>

                <div className={style.container__slider}>
                    {allPics.map (pics => <div className={style.example}>
                        <div className={style.example__title}>{pics.title}</div>
                        <Slider pics={pics.pics}/>
                    </div>)}
                </div>
<div className={style.container}>
                <Grid container  className={style.container__pics}>
                    {allPics.map (pics => <Grid container className={style.example}>
                        <div className={style.example__title}>{pics.title}</div>
                        <Grid container spacing={3} className={style.example__pics}>
                            {pics.pics.map ((pic,i) => < Grid item  xs={6} className={style.example__picContainer}>
                                    <img className={style.example__pic} src={pic} alt="дом"/>
                                </Grid>,
                            )}
                        </Grid>
                    </Grid>)}
                </Grid>
        </div>
        </div>
    );
}

export default Examples;
