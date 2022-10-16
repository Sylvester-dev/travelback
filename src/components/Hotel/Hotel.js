import {Link} from 'react-router-dom';
import React from 'react';
import style from './Hotel.module.scss';

function Hotel({ hmDetails }) {
    return (
        <div className={style.Hotel_home}>
            <div>
                <img
                    className={style.Hotel_home_img}
                    src={hmDetails.img}
                    alt="Hotel Hotel"
                    height={200}
                    width={250}
                />
            </div>
            
            
                <h3>{hmDetails.title}</h3>
            
            <p style={{textTransform: 'capitalize'}}>{hmDetails.location}</p>
            <p className={style.Hotel_home_price}> Starting from {hmDetails.price}</p>

            <div className={style.Hotel_home_btm}>
                <span>{hmDetails.rating}</span>
                {hmDetails.rating > 9 ? <p>Wonderful</p> : <p>Exceptional</p>}
            </div>
        </div>
    );
}

export default Hotel;
