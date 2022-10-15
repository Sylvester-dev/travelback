import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGripLines, FaHome, FaNewspaper, FaTimes } from 'react-icons/fa';
import { MdLocalHotel, MdLocalTaxi, MdMapsHomeWork } from 'react-icons/md';
import style from './Navbar.module.scss';

function Navbar() {
  
    const [toggler, setToggler] = useState(false)

    const menus = [
        {
            id: 1,
            icon: <FaHome className={style.icon} />,
            txt: 'Home',
            isActive: false,
            href: '/'
        },
        {
            id: 2,
            icon: <MdLocalTaxi className={style.icon} />,
            txt: 'Quick Stay',
            isActive: false,
            href: '/'
        },
        {
            id: 3,
            icon: <MdLocalHotel className={style.icon} />,
            txt: 'Vacation',
            isActive: false,
            href: '/'
        },
    ];

    const handleToggle = () => {
        setToggler(!toggler)
      }

    return (
        <div className={style.navbar}>
            <div className={style.navbar_main}>
                <>
                
                    <div className={style.nav_brand}>
                        <h2>
                            <MdLocalHotel size={30} style={{ marginRight: '5px' }} /> TravelBack
                        </h2>
                    </div>
                

                <div className={style.header_menus}>
                 <ul>
                    {menus.map((menu) => (
                        
                        <li>
                            {menu.icon} {menu.txt}
                        </li>
                        
                    ))}
                 </ul>
                </div>

                <div className={style.registration}>
                    
                        <button className={style.reg_btn} type="button">
                            Connect Wallet
                        </button>
                  
                    
                </div>
                {/* <div className={style.registration}>
                    {user ? (
                        <button className={style.reg_btn} type="button" onClick={handleLogOut}>
                            log out
                        </button>
                    ) : (
                        <Link href="/signup">
                            <button className={style.reg_btn} type="button">
                                sign in
                            </button>
                        </Link>
                    )}
                </div> */}
                </>

                <div className={style.res_nav}>
                    {toggler ? <FaTimes onClick={handleToggle} className={style.tgl_btn} /> : <FaGripLines onClick={handleToggle} className={style.tgl_btn} />}
                    {toggler && (
                        <div className={style.res_nav_menu}>
                            <ul>
                                {menus.map((menu) => (
                                   
                                    <li>
                                        {menu.icon} {menu.txt}
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>
                    )}
        </div>
            </div>
        </div>
    );
}

export default Navbar;
