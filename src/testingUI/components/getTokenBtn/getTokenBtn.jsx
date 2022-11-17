

import React from 'react';
const GetTokenBtn = (props) => {
    return (
      <>
        <a target="_blank" rel="nofollow noopener noreferrer" 
            href={props.href} 
            className="ant-btn ant-btn-round ant-btn-sm c-getToken">
            <div className="ant-row" style={{rowGap:"0px"}}>
                <div className="ant-col" style={{flex:"0 0 auto"}}>
                Get {props.name}
                </div>
            </div>
        </a>
      </>
    )
  }
export default GetTokenBtn
  