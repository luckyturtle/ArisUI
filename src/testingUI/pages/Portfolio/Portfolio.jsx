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
import { InfoCircleOutlined,QuestionCircleOutlined } from '@ant-design/icons';
import './style.css';
import {
    withRouter,
    } from "react-router-dom";
const Portfolio = (props) => {
    const [isLoading, setIsLoading] = useState(false); 
    const [isEnabled, setIsEnabled] = useState(true); 
    const [isActive, setIsActive] = useState(true); 
    const goToPortfolioVault = () => {
        props.history.push('/Test/Portfolio/Vault');
    }
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
                                <div id='PortfolioMenuCard_1' className='PortfolioMenuCard PortfolioMenuCard--active'>
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
                                <div id='PortfolioMenuCard_2' className='PortfolioMenuCard' onClick={goToPortfolioVault}>
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
            <Card
                className='l-t-card'
            >
                {
                    !isLoading?
                    <Skeleton active />
                    :
                    <>
                        <Row justify='end'>
                            <Button 
                            type="primary"
                            icon={<QuestionCircleOutlined />}
                            ghost={true}
                            className='c-btn'
                            >FAQ</Button>
                        </Row>
                        <Row style={{marginTop:'0.5rem'}}>
                            <Col span={12}>
                                <Row>
                                    <Col className='PortfolioBody_title'>
                                        Your Positions
                                    </Col>
                                    <Col>
                                        <Row style={isActive?{marginTop:'7.5px',marginLeft:'2rem'}:{display:'none'}}>
                                            <Col><Switch defaultChecked className='c-switcher' onChange={changeEnable}/></Col>
                                            <Col>
                                                <div className='stake-switch-label'>
                                                    Enable Profit and Loss (BETA)
                                                </div> 
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:"1rem"}}>
                                    <Col>
                                        <Radio.Group defaultValue="active" buttonStyle="solid" size="large" onChange={changeRadio}>
                                            <Radio.Button value="active" className='c-switcher__btn'>Active Positions</Radio.Button>
                                            <Radio.Button value="liquidate" className='c-switcher__btn'>Liquidated  Positions</Radio.Button>
                                        </Radio.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row justify='end'>
                                    <Card
                                        className='FarmClaimLinkCard'
                                    >
                                        <Row justify='space-between'>
                                            <Col className='c-alpacaEarned'>
                                                <div className='c-alpacaEarned__title'>
                                                    ARIS earned
                                                </div>
                                                <div className='c-alpacaEarned__amount'>
                                                    0.00
                                                </div>
                                            </Col>
                                            <Col>
                                                <Row align='middle' style={{height:"100%"}}>
                                                    <Button type="primary" className='c-alpacaEarned_btn'>
                                                        Claim
                                                    </Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Row>
                            </Col>
                        </Row>
                        <Row justify='space-between' style={{marginTop:'1rem'}}>
                            <Col></Col>
                            <Col>
                                <Pagination size="small" total={10} 
                                pageSize={1}
                                showTotal={(total, range) => `0-0 of 0 positions`} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Divider className='my-divider'/>
                            </Col>
                        </Row>
                        {
                            isActive?
                                <Row justify='center'>
                                    <div className='no-staked-pool'>
                                        No active positions
                                    </div>
                                </Row>  
                                :
                                <Row justify='center'>
                                    <div className='no-staked-pool'>
                                        No liquidated positions
                                    </div>
                                </Row>  
                        }
                        
                    </>
                }
            </Card>
        </div>
    )
  }
export default withRouter(Portfolio);
  