import React from 'react';
import { Row, Col} from 'antd';
import './style.css';
import $ from 'jquery';
import { InfoCircleOutlined, CloseOutlined } from '@ant-design/icons';
const PhisingBar = () => {
    const closeWarning = () => {
        $('.phising').css('display','none');
    }
    return (
      <Row className='phising'>
        <Col lg={{ span: 23, offset: 0 }}>
            <Row justify='center'>
                <Col>
                    <div className='phising-content'>
                        <span>
                            <InfoCircleOutlined />
                        </span>
                        <span className='phising-text'>
                            PHISHING WARNING: Check carefully and make sure you're visiting https://app.alpacafinance.org - bookmark the URL.
                        </span> 
                    </div>
                </Col>
            </Row>
        </Col>
        <Col lg={{ span: 1, offset: 0 }}>
            <Row justify='end'>
                <div className='phising-x'>
                    <CloseOutlined onClick={closeWarning}/>
                </div>
            </Row>
        </Col>
      </Row>
    )
  }
export default PhisingBar
  