import { React, useState, useMemo, useCallback, useEffect} from 'react';
import { ethers } from "ethers";
import Web3 from "web3";

import './style.css';
import { Card, Row, Col, Image, Input, Button, Skeleton } from 'antd';
import {
  withRouter,
} from "react-router-dom";
import { tokenImage } from '../../constant/tokenImage';
import GetTokenBtn from '../../components/getTokenBtn/getTokenBtn';
import { BSC_TESTNET } from '../../constant/address';
import AlpacaToken_ABI from '../../abis/AlpacaToken.json';
import { RPC_URLS } from '../../stores/connectors';

const Deposit = (props) => {
  const { walletAddress } = props;
  const [isLoading, setIsLoading] = useState(false);
  const token = window.location.pathname.split("/")[3];
  
  const getBalance = async () => {
    /*
    const provider = new ethers.providers.Web3Provider(RPC_URLS.bsc_test);
    const targetContract = new ethers.Contract(BSC_TESTNET.ALPACATOKEN_ADDRESS, AlpacaToken_ABI, provider);
    const tokenBalance = await targetContract.balanceOf(walletAddress);
    const tokenUnits = await targetContract.decimals();
    tokenBalance = ethers.utils.formatUnits(tokenBalance, tokenUnits);
    */
   //index.js

    const Web3Client = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545"));
    const contract = new Web3Client.eth.Contract(AlpacaToken_ABI, BSC_TESTNET.ALPACATOKEN_ADDRESS);
    const result = await contract.methods.balanceOf(walletAddress).call(); 
    const format = Web3Client.utils.fromWei(result);
    console.log('balance', format);
  }
  getBalance();

  const goBack = () => {
    props.history.goBack();
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  })

  
    return (
      <div className='EarnDepositWithdrawPage'>
        <Card
            className='l-t-card-deposit'
        >
          {!isLoading?
            <Skeleton active />
            :
            <>
              <Row>
                <Col>
                  <div className='DepositWithdraw'>
                    <span className='deposit-title'>Depositing {token.toUpperCase()}</span>
                    <Image
                      width={40}
                      preview={false}
                      src={tokenImage[token]}
                      className='token-img'
                    />
                    <GetTokenBtn 
                      href= {"https://pancakeswap.finance/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F"} 
                      name={token.toUpperCase()}
                    />
                  </div>
                </Col>
              </Row>
              <Row className='c_input_label'>
                Available Balance: 0.00 {token.toUpperCase()};
              </Row>
              <Row>
                <Col lg={22}>
                  <Input className='c-inputMax__input'/>
                </Col>
                <Col lg={2}>
                  <Button
                    className='c-inputMax_btn'
                  >
                    Max
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col style={{marginTop:'0.5rem'}}>
                  <span className='c_input_label'>You will receive:</span>
                  <span className='s-r'>~0.00 ib{token.toUpperCase()}</span>
                </Col>
              </Row>
              <Row className='s-r'>
                <Col>
                  <span>The amount of ibTokens you'll receive is worth the same as the amount of tokens you deposited. There is no fee and you are not losing any value. Their exchange rate is not 1:1. You can learn more about ibTokens </span>  
                  <a href="" className='font-bold c-primary'>here</a>    
                  <span>.</span>
                </Col>
              </Row>
              <Row justify='space-between' className='mt-9'>
                <Col>
                  <Button
                    className='btn-back ant-btn-text'
                    onClick={goBack}
                  >
                    &lt; Back
                  </Button>
                </Col>
                <Col>
                  <Button
                    type="primary"
                    size={'large'}
                    className='ant-btn-confirm'
                  >
                    Approve
                  </Button>
                </Col>
              </Row>
            </>
          }
        </Card>
      </div>
    )
  }
export default withRouter(Deposit);
  