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
const Farm = (props) => {
    const [isLoading, setIsLoading] = useState(false); 
    const [dex, setDex] = useState('all'); 
    const goToVault = () => {
        props.history.push("/Test/Vault");
    }
    const changeRadio = (e) => {
        setDex(e.target.value);
    }
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(true);
        }, 200);
    })
    return (
        <div className='Farm'>
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
                                <div id='PortfolioMenuCard_2' className='PortfolioMenuCard' onClick={goToVault}>
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
                        <Row justify='space-between' style={{marginTop:"1rem"}}>
                            <Col>
                                <div className='FarmBody_title'>
                                    Active Pools (49)
                                </div>
                            </Col>
                            <Col>
                                <Pagination size="small" total={49} 
                                pageSize={10}
                                showTotal={(total, range) => `0-0 of 0 positions`} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Divider className='my-divider'/>
                            </Col>
                        </Row>
                        <Row className='FarmBody'>
                            <Col span={24}>
                                <Row>
                                    <Col>
                                        <Space>
                                            <div className='dex_label'>
                                                DEX :
                                            </div>
                                            <Radio.Group defaultValue="all" buttonStyle="solid" size="large" onChange={changeRadio}>
                                                <Radio.Button value="all" className='c-switcher__btn'>All</Radio.Button>
                                                <Radio.Button value="biswap" className='c-switcher__btn'>
                                                    <img className="c-poolDexFilter__btn__icon" src="https://alpaca-app-assets.alpacafinance.org/icons/coins/bsw.svg"/>
                                                    Biswap
                                                </Radio.Button>
                                                <Radio.Button value="pancakeswap" className='c-switcher__btn'>
                                                    <img className="c-poolDexFilter__btn__icon" src="https://alpaca-app-assets.alpacafinance.org/icons/iconswap/pancakeswap.svg?v=2" />
                                                    Pancakeswap
                                                </Radio.Button>
                                            </Radio.Group>
                                        </Space>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Col>
                            <Col span={24} style={{marginTop:"0.5rem"}}>
                                <Row>
                                    <Col>
                                        <Space>
                                            <div className='dex_label'>
                                                Paired assets :
                                            </div>
                                            <Radio.Group defaultValue="all" buttonStyle="solid" size="large">
                                                <Radio.Button value="all" className='c-switcher__btn'>All</Radio.Button>
                                                <Radio.Button value="aris" className='c-switcher__btn'>
                                                    <img className="c-poolDexFilter__btn__icon" src="https://alpaca-app-assets.alpacafinance.org/icons/coins/alpaca.svg"/>
                                                    Aris
                                                </Radio.Button>
                                                <Radio.Button value="cake" className='c-switcher__btn'>
                                                    <img className="c-poolDexFilter__btn__icon" src="https://alpaca-app-assets.alpacafinance.org/icons/coins/cake.svg" />
                                                    Cake
                                                </Radio.Button>
                                                <Radio.Button value="bnb" className='c-switcher__btn'>
                                                    <img className="c-poolDexFilter__btn__icon" src="https://alpaca-app-assets.alpacafinance.org/icons/coins/bnb.svg" />
                                                    Bnb
                                                </Radio.Button>
                                            </Radio.Group>
                                        </Space>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Col>
                        </Row>
                    </>
                }
            </Card>
        </div>
    )
  }
export default withRouter(Farm);
  