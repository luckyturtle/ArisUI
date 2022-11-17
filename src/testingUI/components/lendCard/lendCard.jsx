import { React, useState, useMemo, useCallback, useEffect} from 'react';
import { Row, 
        Col,
        Card,
        Typography,
        Tooltip, 
        Skeleton
        } from 'antd';
import './style.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Title } = Typography;
const LendCard = () => {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(true);
        }, 1000);
    })
    const text = <div className='lcard-tooltip'>
        {!isLoading?
            <Skeleton active />
            :
            <>
                <Row justify='space-between'>
                    <Col spin={12}>Value of Total LP tokens locked:</Col>
                    <Col spin={12}>
                        $248,121,690.19
                    </Col>
                </Row>
                <Row justify='space-between'>
                    <Col spin={12}>Unborrowed deposits:</Col>
                    <Col spin={12}>
                        $248,874,998.57
                    </Col>
                </Row>
                <Row justify='space-between'>
                    <Col spin={12}>AUSD-3EPS LP tokens staked:</Col>
                    <Col spin={12}>
                        $3,413,044.08
                    </Col>
                </Row>
                <Row justify='space-between'>
                    <Col spin={12}>Others:</Col>
                    <Col spin={12}>
                        $24,999,232.92
                    </Col>
                </Row>
                <Row justify='center'>
                    <div className='lcard-tooltip-divider'></div>
                </Row>
                <Row>
                    <span className='lcard-note'>
                        Note: Other TVL includes: ALPACA locked in Governance Vault + AUSD Locked + LP staking
                    </span>
                </Row>
            </>
        }
        
    </div>;
        return (
        <Row>
            <Col xs={24} xl={10} lg={10}> 
                <Title level={4} className="lcard-prev-title">Available Lending Pools</Title>
            </Col>
            <Col xs={24} xl={14} lg={14}>
                <Row>
                    <Col xs={24} xl={12}>
                    </Col>
                    <Col xs={24} xl={12}>
                        <Row justify='end'>
                            <div className="site-card-border-less-wrapper">
                                <Card
                                    className='lcard'
                                >
                                <Row justify='center'>
                                    <Title level={4} className="lcard-title">Total Value Locked</Title>
                                    <Tooltip 
                                        placement="topRight" 
                                        title={text} 
                                        className="lcard-title-tooltip"
                                        color="var(--tooltip-bk)"
                                    >
                                        <ExclamationCircleOutlined />
                                    </Tooltip> 
                                </Row>
                                {!isLoading?
                                    <Skeleton active />
                                    :
                                    <>
                                        <Row justify='center'>
                                             <Title level={4} className="lcard-number">$519,789,677.08</Title>
                                            </Row>
                                            <Row justify='center'>
                                                <div className='lcard-divider'></div>
                                            </Row>
                                            <Row justify='center'>
                                                <div className='lcard-bottom'>
                                                    $521.34
                                                    <img className="c-icon" key={1} src="https://alpaca-app-assets.alpacafinance.org/icons/coins/bnb.svg"/>
                                                        <span className="mx-2">+</span>
                                                    $5.84M
                                                    <img className="c-icon" key={2} src="https://alpaca-app-assets.alpacafinance.org/icons/coins/ftm.svg"/>
                                                </div>
                                            </Row>
                                    </>
                                }
                                </Card>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        )
    }
export default LendCard
  