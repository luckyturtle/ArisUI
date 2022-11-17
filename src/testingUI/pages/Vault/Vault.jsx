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
const Vault = (props) => {
    const [isLoading, setIsLoading] = useState(false); 
    const goToFarm = () => {
        props.history.push("/Test/Farm");
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
                                <div id='PortfolioMenuCard_1' className='PortfolioMenuCard' onClick={goToFarm}>
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
                    </>
                }
            </Card>
        </div>
    )
  }
export default withRouter(Vault);
  