import React, {useRef, useState} from 'react';
import classes from "./header.module.css";
import MenuContainer from "../MenuContainer/menuContainer.jsx";

const Header = () => {
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [trianglePosition, setTrianglePosition] = useState({});

    const mobileProductRef = useRef();
    const digitalProductRef = useRef();
    const clothesProductRef = useRef();
    const onNavHoverHandler = (productName, event) => {
        if (selectedProducts === productName) return

        let productOptionPosition;

        switch (productName) {
            case "mobile":
                productOptionPosition = mobileProductRef.current !== null ? mobileProductRef.current.getBoundingClientRect() : null;
                break;
            case "digital":
                productOptionPosition = digitalProductRef.current !== null ? digitalProductRef.current.getBoundingClientRect() : null;
                break;
            case "clothes":
                productOptionPosition = clothesProductRef.current !== null ? clothesProductRef.current.getBoundingClientRect() : null;
                break;
            default:
                return;
        }
        setTrianglePosition({x: productOptionPosition.left + productOptionPosition.width / 2})
        setSelectedProducts(productName)
    }
    const onMouseLeaveHandler = () => {
        setSelectedProducts(null)
        setTrianglePosition({ x: 0})
    }
    return (
        <header className={`${classes.header} ${classes['flex-center']}`}>
            <nav className={classes.navigation} onMouseLeave={onMouseLeaveHandler}>
                <ul className={classes.list}>
                    <li className={classes['list__item']} onMouseEnter={onNavHoverHandler.bind(null, "mobile")}>
                        <p className={classes['flex-center']} ref={mobileProductRef}>موبایل</p>
                    </li>
                    <li className={classes['list__item']} onMouseEnter={onNavHoverHandler.bind(null, "digital")}>
                        <p className={classes['flex-center']} ref={digitalProductRef}>کالای دیجیتال</p>
                    </li>
                    <li className={classes['list__item']} onMouseEnter={onNavHoverHandler.bind(null, "clothes")}>
                        <p className={classes['flex-center']} ref={clothesProductRef}>مد و پوشاک</p>
                    </li>
                </ul>
            </nav>
            <MenuContainer products={selectedProducts} position={trianglePosition}/>
        </header>
    );
};

export default Header;