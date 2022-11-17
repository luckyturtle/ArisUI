import { React, useState, useMemo, useCallback, useEffect } from 'react';
import { Row, Col, Layout, Typography,Space,Image,
        Divider,
        Card,
        Skeleton,
        Button,
        Switch,
        Radio,
        Pagination,
        Menu } from 'antd';
import {
    withRouter,
    } from "react-router-dom";
import { InfoCircleOutlined,QuestionCircleOutlined } from '@ant-design/icons';
import './style.css';
import $ from 'jquery';
const PortfolioVault = (props) => {
    const [isLoading, setIsLoading] = useState(false); 
    const [isEnabled, setIsEnabled] = useState(true); 
    const [isActive, setIsActive] = useState(true); 
    const changeEnable = (value) => {
        setIsEnabled(value);
    }
    const changeRadio = (e) => {
        if(e.target.value == "active") {
            setIsActive(true);
        }else {
            setIsActive(false);
        }
    }
    const goToPortfolio = () => {
        props.history.push('/Test/Portfolio/Farm');
    }
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(true);
        }, 200);
    })
    return (
        <div className='PortfolioHeader'>
            <Row>
                <Col>
                    <div className='l-wrapper'>
                        <div className='c-menu'>
                            <Space>
                                <div id='PortfolioMenuCard_1' className='PortfolioMenuCard' onClick={goToPortfolio}>
                                    <Image
                                        width={70}
                                        preview={false}
                                        src={"https://app.alpacafinance.org/static/media/farm-menu-cover.5bcd4bd9.svg"}                                    
                                    >
                                    </Image>
                                    <span className='ml-2'>
                                        Farm
                                    </span> 
                                </div>
                                <div id='PortfolioMenuCard_2' className='PortfolioMenuCard PortfolioMenuCard--active'>
                                    <Image
                                        width={70}
                                        preview={false}
                                        src={"https://app.alpacafinance.org/static/media/strategy-menu-cover.37cd279f.svg"}                                    
                                    >
                                    </Image>
                                    <div className='ml-2'>
                                        <div>Automated</div>
                                        <div>Vaults</div>
                                    </div>
                                    <span className="c-tag c-tag--new">New</span>
                                    <span className="Ping -top-1 -right-1">
                                        <span className="c-flashingPart">
                                        </span>
                                        <span className="c-basePart">
                                        </span>
                                    </span>
                                </div>
                            </Space>   
                        </div>
                    </div>
                </Col>
            </Row>
            <Card className='l-t-card StrategyPortfolioSummaryCard'
                cover={<img alt="example" src="https://app.alpacafinance.org/static/media/strategy-summary-cover-2.69415b39.svg" />}
            >
                    <div className='c-summary'>
                        <div className='c-summary__subject'>My Investment Balance</div>
                        <div className='c-summary__number'>$0.00</div>
                    </div>
                    <div className='c-coverMascot'>
                        <Image
                            preview={false}
                            width={'100%'}
                            height={'100%'}
                            src={"https://app.alpacafinance.org/static/media/strategy-summary-cover-1.3be83aea.svg"}
                        >
                        </Image>
                    </div>
                    <Row justify='center'>
                        <div className='no-holdings'>
                            No holdings
                        </div>
                    </Row> 
            </Card>
        </div>
    )
  }
export default withRouter(PortfolioVault);
  