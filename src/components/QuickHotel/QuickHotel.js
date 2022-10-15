
import React from 'react';
import style from './QuickHotel.module.scss';

function QuickHotel({ hmDetails }) {
    return (
        <div className={style.lovely_home}>
            <div>
                <img
                    className={style.lovely_home_img}
                    src={hmDetails.img}
                    alt="XYZ Hotel"
                    height={200}
                    width={250}
                />
            </div>
            
            <a href={`/hotels/${hmDetails.id}`}>
                <h3>{hmDetails.title}</h3>
            </a>
            <p style={{textTransform: 'capitalize'}}>{hmDetails.location}</p>
            <p className={style.lovely_home_price}> Starting from {hmDetails.price}</p>

            <div className={style.lovely_home_btm}>
                <span>{hmDetails.rating}</span>
                {hmDetails.rating > 9 ? <p>Wonderful</p> : <p>Exceptional</p>}
            </div>
        </div>
    );
}

export default QuickHotel;
