import React, {useState, useEffect} from 'react';
import rgbToHex from "./utils";

const OneColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const backg = rgb.join(",");
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`
    useEffect(() => {
        const timeout = setTimeout(() =>{
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])
    return <article
        className={`color ${index > 10 && "color-light"}`}
        style={{backgroundColor: `rgb(${backg})`}}
        onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }}>
     <p className="percent-value">
         {weight}%
     </p>
     <p className="color-value">{hexValue}</p>
     {alert && <p className="alert">copied to clipboard</p>}
    </article>
};

export default OneColor;