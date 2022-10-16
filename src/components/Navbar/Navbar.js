import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGripLines, FaHome, FaNewspaper, FaTimes } from 'react-icons/fa';
import { MdLocalHotel, MdLocalTaxi, MdMapsHomeWork } from 'react-icons/md';
import style from './Navbar.module.scss';
import { ethers } from "ethers";


function Navbar() {
  
    const [toggler, setToggler] = useState(false);
    const [currentAccount, setCurrentAccount] = useState("");

const connectWallet = async () => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log("Connected", accounts[0]);
    setCurrentAccount(accounts[0]);
  } catch (error) {
    console.log(error);
  }
};

const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);


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
                        <img src="https://i.ibb.co/SBFcj5D/travel-back-logo.png" alt="logo" className="photo" style={{width: '70px', height: '50px'}} />
                        <div id="logo"><span style={{color:'#53c6b7'}}>travel</span> <span>Back</span></div>
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
                  
                        {currentAccount === "" ? (
                                    <button id="connectWallet" className={style.reg_btn} onClick={connectWallet}>
                                    Connect Wallet
                                    </button>
                                ) : (
                                    <button className={style.reg_btn}>
                                    {`${currentAccount.substring(0, 4)}...${currentAccount.substring(
                                        38
                                    )}`}
                                    </button>
                        )}
                    
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
