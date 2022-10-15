import React from 'react';
import QuickHotel from '../QuickHotel/QuickHotel';
import style from './QuickHotelDetail.module.scss';

function QuickHotelDetail({ homesDetails }) {
    return (
        <div className={style.LovelyHome_detail}>
            <h2>Liquid Holidays</h2>
            
            <div className={style.LovelyHome_detail_main}>
                {homesDetails?.map((details, i) => (
                  
                  <QuickHotel hmDetails={details} />
                ))}
            </div>
        </div>
    );
}

export default QuickHotelDetail;
