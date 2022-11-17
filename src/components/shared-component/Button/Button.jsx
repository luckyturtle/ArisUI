import React  from "react";

const ButtonMode = {
    day: 'day',
    night: 'night',
    white: 'white',
};

const Button = (props) => {
    const {
        disabled = false,
        children = <div> </div>,
        onClick = () => {},
        className = '',
        fontSize = 18,
        mode = ButtonMode.night,
        hoverMode = true,
        style = {},
    } = props;

    const _white = {
        border: 'solid 2px',
        borderColor: disabled ? "gray" : 'white',
        backgroundColor: disabled ? "transparent" : 'white',
        color: disabled ? "gray" : 'black',
        borderRadius: '24px',
        cursor: disabled ? "not-allowed" : 'pointer',
        padding: '5px 20px',
        fontSize: `${fontSize}px`,
        width: '100%',
    };

    const _night = {
        border: 'solid 2px',
        borderColor: disabled ? "gray" : '#17c5c7',
        backgroundColor: disabled ? "transparent" : '#131b2b',
        color: disabled ? "gray" : '#17c5c7',
        borderRadius: '24px',
        fontWeight: 'bold',
        cursor: disabled ? "not-allowed" : 'pointer',
        padding: '5px 20px',
        fontSize: `${fontSize}px`,
        width: '100%',
    };

    const _day = {
        border: 'solid 2px',
        borderColor: disabled ? "gray" : '#17c5c7',
        backgroundColor: disabled ? "transparent" : '#5cc2c5',
        color: disabled ? "gray" : '#131b2b',
        borderRadius: '24px',
        fontWeight: 'bold',
        cursor: disabled ? "not-allowed" : 'pointer',
        padding: '5px 20px',
        fontSize: `${fontSize}px`,
        width: '100%',
    };

    const _mode = mode === ButtonMode.night ? _night : mode === ButtonMode.day ? _day : mode === ButtonMode.white ? _white : {};

    return <button
        onMouseOver={(event) => {
            if(hoverMode && !disabled){
                let tmp = event.currentTarget.style.color;
                event.currentTarget.style.color = event.currentTarget.style.backgroundColor;
                event.currentTarget.style.backgroundColor= tmp;
            }
        }}
        onMouseLeave={(event) => {
            if(hoverMode && !disabled){
                let tmp = event.currentTarget.style.color;
                event.currentTarget.style.color = event.currentTarget.style.backgroundColor;
                event.currentTarget.style.backgroundColor= tmp;
            }
        }}
        disabled={disabled}
        onClick={() => !disabled && onClick()}
        style={{..._mode, ...style}}
        className={`${className} `}
    >{children}</button>
};

export default Button;
export { ButtonMode };
