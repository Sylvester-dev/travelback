import React from 'react';
import item1 from '../../images/img1.jpg';
import item2 from '../../images/img2.jpg';
import item3 from '../../images/img3.jpg';
import style from './Feature.module.scss';

function Feature() {
    return (
        <div className={style.feature_sec}>
            <div className={style.feature_sec_main}>
                <div className={style.feature_item}>
                    <img src={item1} className={style.feature_item_img} />
                    <div className={style.feature_item_txt}>
                        <h1>Lucknow</h1>
                        <h2>3 properties</h2>
                    </div>
                </div>

                <div className={style.feature_item}>
                    <img src={item2} className={style.feature_item_img} />
                    <div className={style.feature_item_txt}>
                        <h1>Bangalore</h1>
                        <h2>4 properties</h2>
                    </div>
                </div>

                <div className={style.feature_item}>
                    <img src={item3} className={style.feature_item_img} />
                    <div className={style.feature_item_txt}>
                        <h1>Delhi</h1>
                        <h2>2 properties</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
