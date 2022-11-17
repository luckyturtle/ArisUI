import React from 'react';
import { addTokenToWallet } from '../../../helpers/addToken';
import { tokenImage } from '../../constant/tokenImage';
import { BSC_MAINNET } from '../../constant/address';

const AddMetaMaskBtn = (props) => {
    const {token} = props;
    const handleClick = async (e) => {
      e.preventDefault();
      console.log(token);
      //await addTokenToWallet(token, BSC_MAINNET.ALPACATOKEN_ADDRESS, 18, tokenImage[token]);
      console.log(window.ethereum);
    }
    return (
      <>
        <button type="button" onClick = {(e) => handleClick(e)}
            className="ant-btn ant-btn-primary ant-btn-round ant-btn-sm AddToMetamaskButton ml-1" 
            ant-click-animating-without-extra-node="false">
            <div className="ant-row ant-row-middle" 
                style={{marginLeft: "-2px", marginRight: "-2px", rowGap: "0px"}}>
                <div className="ant-col" style={{paddingLeft: '2px', paddingRight: '2px', flex: '0 0 auto'}}>
                <span role="img" aria-label="plus" className="anticon anticon-plus lg:text-base text-xs">
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg>
                </span>
                </div>
                <div className="ant-col" style={{paddingLeft: "2px", paddingRight: "2px", flex: "0 0 auto"}}>
                <img src="https://alpaca-app-assets.alpacafinance.org/icons/AAVE.png" className="c-metamaskImg"/>
                </div>
            </div>
        </button>
      </>
    )
  }
export default AddMetaMaskBtn
  