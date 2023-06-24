import React, {forwardRef} from 'react';
import {motion} from "framer-motion";
import classes from "./clothesProducts.module.css"
import {TiTickOutline} from "react-icons/ti";

const ClothesProducts = forwardRef((props, ref) => (
    <motion.div ref={ref} className={classes.clothesCard}>
        <ul className={classes.clothesList}>
            <li className={classes['clothesList__item']}>
                <span>مردانه</span>
                <ul>
                    <li>پولوشرت</li>
                    <li>پیراهن</li>
                    <li>شلوار</li>
                    <li>کفش</li>
                </ul>
            </li>
            <li className={classes['clothesList__item']}>
                <span>زنانه</span>
                <ul>
                    <li>مانتو</li>
                    <li>بلوز</li>
                    <li>شلوار</li>
                    <li>کفش</li>
                </ul>
            </li>
        </ul>
        <footer className={classes.clothesFooter}>
            <div>ضمانت های فروشنده:</div>
            <ul>
                <li>
                    <TiTickOutline />
                    <span>24 ساعت بازگشت کالا</span>
                </li>
                <li>
                    <TiTickOutline />
                    <span>اصل بودن</span>
                </li>
                <li>
                    <TiTickOutline />
                    <span>سالم بودن</span>
                </li>
            </ul>
        </footer>
    </motion.div>
))

export default ClothesProducts;