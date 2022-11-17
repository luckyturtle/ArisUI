import React from 'react';
import './style.css';
const ImageButton = (props) => {
    return (
        <div
            className="iamgeBtnDiv"
            onClick={props.onClick}
            style={props.style}
          >
            <img src={props.src} alt="" width="20px" />
        </div>
    )
  }
export default ImageButton
  
