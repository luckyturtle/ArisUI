import { React, useState, useMemo, useCallback, useEffect} from 'react';
import './style.css';
import { Card, Row, Col, Image, Input, Button, Skeleton } from 'antd';
import {
  withRouter,
} from "react-router-dom";
import { tokenImage } from '../../constant/tokenImage';
const Withdraw = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const token = window.location.pathname.split("/")[3];
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
                    <span className='deposit-title'>Withdrawing ib{token.toUpperCase()}</span>
                    <Image
                      width={40}
                      preview={false}
                      src={tokenImage[token]}
                      className='token-img'
                    />
                  </div>
                </Col>
              </Row>
              <Row className='c_input_label'>
                Available Balance: 0.00 ib{token.toUpperCase()};
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
                  <span className='s-r'>~0.00 {token.toUpperCase()}</span>
                </Col>
              </Row>
              {/* <Row className='s-r'>
                <Col>
                  <span>The amount of ibTokens you'll receive is worth the same as the amount of tokens you deposited. There is no fee and you are not losing any value. Their exchange rate is not 1:1. You can learn more about ibTokens </span>  
                  <a href="" className='font-bold c-primary'>here</a>    
                  <span>.</span>
                </Col>
              </Row> */}
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
                    disabled
                    size={'large'}
                    className='ant-btn-confirm'
                  >
                    Confirm
                  </Button>
                </Col>
              </Row>
            </>
          }
        </Card>
      </div>
    )
  }
export default withRouter(Withdraw);
  