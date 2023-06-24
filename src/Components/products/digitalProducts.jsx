import React, {forwardRef} from 'react';
import {motion} from "framer-motion";
import {MdKeyboardArrowLeft} from "react-icons/md";
import classes from "./digitalProducts.module.css";

const DigitalProducts = forwardRef((props, ref) => (
    <motion.div ref={ref} className={classes.digitalCard}>
        <ul className={classes.digitalLists}>
            <li className={classes.span3}>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>لوازم جانبی گوشی</span></div>
                <ul className={classes['digitalLists__indent']}>
                    <li>کیف و کاور</li>
                    <li>پاوربانک</li>
                    <li>پایه نگهدارنده</li>
                </ul>
            </li>
            <li className={classes.span4}>
                <div className={classes.centered}>
                    <MdKeyboardArrowLeft/><span>لوازم جانبی لپ تاپ</span>
                </div>
                <ul className={classes['digitalLists__indent']}>
                    <li>کیف</li>
                    <li>کوله</li>
                    <li>کاور</li>
                    <li>کابل HDMI</li>
                </ul>
            </li>
            <li>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>تبلت</span></div>
            </li>
            <li>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>باتری</span></div>
            </li>
            <li>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>تلسکوپ</span></div>
            </li>
            <li>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>فلش و هارد</span></div>
            </li>
            <li>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>ماشین های اداری</span></div>
            </li>
            <li className={classes.span4}>
                <div className={classes.centered}><MdKeyboardArrowLeft/><span>لوازم جانبی کامپوتر</span></div>
                <ul className={classes['digitalLists__indent']}>
                    <li>تجهیزات مخصوص بازس</li>
                    <li>مانیتور</li>
                    <li>کیس</li>
                    <li>ماوس</li>
                    <li>کیبورد</li>
                </ul>
            </li>
            <footer></footer>
        </ul>
    </motion.div>
));

export default DigitalProducts;