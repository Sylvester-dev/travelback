import React from 'react';
import Hotel from '../Hotel/Hotel';
import style from './HotelDetail.module.scss';

function HotelDetail({ homesDetails }) {
    return (
        <div className={style.HotelHome_detail}>
            <h2>Long Vacations</h2>
            
            <div className={style.HotelHome_detail_main}>
                {homesDetails?.map((details, i) => (
                  
                  <Hotel hmDetails={details} />
                ))}
            </div>
        </div>
    );
}

export default HotelDetail;
