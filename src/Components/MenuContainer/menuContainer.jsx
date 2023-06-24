/* React Hooks */
import {useEffect, useLayoutEffect, useRef, useState} from "react";
/* Products Components */
import MobileProducts from "../products/mobileProducts.jsx";
import DigitalProducts from "../products/digitalProducts.jsx";
import ClothesProducts from "../products/clothesProducts.jsx";
/* Styles */
import classes from "./menuContainer.module.css";
/* third Party packages */
import {AnimatePresence, motion, useMotionValue} from "framer-motion";

const MenuContainer = (props) => {
    const {products, position} = props;

    /* state management */
    const [isInteraction, setIsInteraction] = useState(true);
    /* ref's */
    const mobileRef = useRef();
    const digitalRef = useRef();
    const clothesRef = useRef();

    const containerWidth = useMotionValue(null);
    const containerHeight = useMotionValue(null);

    /* side Effects */
    useEffect(() => {
        if (products !== null) setIsInteraction(false)
        else setIsInteraction(true)
    }, [products])
    useLayoutEffect(() => {
        if (!products) return
        let width, height;

        switch (products) {
            case "mobile":
                width = mobileRef.current !== null ? mobileRef.current.clientWidth : null;
                height = mobileRef.current !== null ? mobileRef.current.clientHeight : null;
                break;
            case "digital":
                width = digitalRef.current !== null ? digitalRef.current.clientWidth : null;
                height = digitalRef.current !== null ? digitalRef.current.clientHeight : null;
                break;
            case "clothes":
                width = clothesRef.current !== null ? clothesRef.current.clientWidth : null;
                height = clothesRef.current !== null ? clothesRef.current.clientHeight : null;
                break;
            default:
                return;
        }
        containerWidth.set(width)
        containerHeight.set(height)
    }, [products, containerWidth, containerHeight]);
    const cardProps = {
        className: classes.card,
        initial: {opacity: 0, x: isInteraction ? 0 : -70},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: isInteraction ? 0 : -70},
        transition: {type: 'spring', stiffness: 80, damping: 14}
    }
    return (
        <AnimatePresence mode={"wait"}>
            {products !== null && <motion.div className={classes.menuContainer}
                                              style={{
                                                  originX: 0.5,
                                                  originY: 0,
                                                  transformPerspective: 1000,
                                                  height: window.innerHeight
                                              }}
                                              initial={{opacity: 0, rotateX: -13}}
                                              animate={{opacity: 1, rotateX: 0}}
                                              exit={{opacity: 0, rotateX: -13}}
                                              transition={{duration: 0.15, ease: "linear"}}>
                <motion.div style={{
                    width: containerWidth,
                    height: containerHeight,
                    background: "var(--bgc)",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    transition: isInteraction ? '0' : '0.3s'
                }}>
                    <div className={classes.triangle} style={{left: position.x - 8}}></div>
                    <div className={classes.menuContent}><AnimatePresence>
                        {props.products === "mobile" &&
                            <motion.div {...cardProps}>
                                <MobileProducts ref={mobileRef}/>
                            </motion.div>}
                    </AnimatePresence>
                        <AnimatePresence>
                            {props.products === "digital" &&
                                <motion.div {...cardProps}><DigitalProducts ref={digitalRef}/></motion.div>}
                        </AnimatePresence>
                        <AnimatePresence>
                            {props.products === "clothes" &&
                                <motion.div {...cardProps}><ClothesProducts ref={clothesRef}/></motion.div>}
                        </AnimatePresence></div>
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    );
};

export default MenuContainer;