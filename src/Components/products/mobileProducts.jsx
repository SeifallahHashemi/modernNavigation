import React, {forwardRef} from 'react';
import classes from "./mobileProducts.module.css";
import {SiApple, SiHuawei, SiLg, SiMotorola, SiSamsung, SiXiaomi} from "react-icons/si";
import {TbTruckDelivery} from "react-icons/tb";
import {TiTickOutline} from "react-icons/ti";
import {GiPayMoney, GiReturnArrow} from "react-icons/gi";

const MobileProducts = forwardRef((props, ref) => (
    <div ref={ref} className={classes.mobileCard}>
        <ul className={classes.mobileLists}>
            <li><span className={classes.icon}><SiSamsung/></span>سامسونگ</li>
            <li><span className={classes.icon}><SiApple/></span>اپل</li>
            <li><span className={classes.icon}><SiXiaomi/></span>شیائومی</li>
            <li><span className={classes.icon}><SiMotorola/></span>موتورولا</li>
            <li><span className={classes.icon}><SiLg/></span>ال جی</li>
            <li><span className={classes.icon}><SiHuawei/></span>هوآوی</li>
        </ul>
        <footer className={classes.mobileFooter}>
            <ul>
                <li><TbTruckDelivery/>ارسال فوری</li>
                <li><TiTickOutline/>ضمانت اصالت کالا</li>
                <li><GiReturnArrow/>بازگشت کالا</li>
                <li><GiPayMoney/>پرداخت در محل</li>
            </ul>
        </footer>
    </div>
))

export default MobileProducts;