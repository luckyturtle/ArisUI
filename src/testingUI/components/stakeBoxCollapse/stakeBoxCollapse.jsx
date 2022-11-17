import React from 'react';
import {
    Row,
    Col,
    Collapse,
    Image,
    Space,
    Button
} from 'antd';
import './style.css';
import MaxInput from '../maxInput/maxInput';
const { Panel } = Collapse;
const StakeBoxCollapse = (props) => {
    const onChange = (key) => {
        console.log(key);
      };
    const CollHeader = () => {
        return <div className='StakeCollapse-header'>
            <Row justify='space-between'>
                <Col>
                    <Image
                        width={50}
                        preview={false}
                        src={props.img}
                    >
                    </Image>
                </Col>
                <Col className='tokenName'>
                    <div>
                        ib{props.token}
                    </div>
                </Col>
                <Col className='apy'>
                    <div>
                        <Row>
                            <div className='apy-label'>APY</div>
                        </Row>
                        <Row>
                            <Col><div className='apy-number'>{props.apy}%</div></Col>
                            <Col></Col>
                        </Row>
                    </div>
                </Col>
                <Col className='apy'>
                    <div>
                        <Row>
                            <div className='apy-label'>TVL</div>
                        </Row>
                        <Row>
                            <div className='apy-number'>{props.tvl}</div>
                        </Row>
                    </div>
                </Col>
                <Col className='apy'>
                    <div>
                        <Row>
                            <Space>
                                <Col>
                                    <div className='stacked_bal_label'>
                                        Staked balance:
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <span className='staked_bal_ib_num'>0.00 ib{props.token}</span>
                                        <span className='staked_bal_num'>(~0.00 {props.token})</span>
                                    </div>
                                </Col>
                            </Space>
                        </Row>
                        <Row>
                            <Space>
                                <Col>
                                    <div className='stacked_bal_label'>Aris earned:</div>
                                </Col>
                                <Col>
                                    <div>
                                        <span className='staked_bal_ib_num'>0.00</span>
                                    </div>
                                </Col>
                            </Space>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>;
    }
    const ExpandIcon = () => {
        return<>
            <div className='action-label'>
                Stake / Unstake 
            </div>
        </>
    }
    return (
      <>
        <Row>
            <Col>
                <div className='stake-switch-label'>
                    Stake ib{props.token.toUpperCase()} to earn Aris rewards
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <div className='StakeCollapse'>
                    <Collapse onChange={onChange}  expandIconPosition={"end"}>
                        <Panel header={<CollHeader/>} key="1">
                            <Row justify='space-between'>
                                <Col span={8}>
                                    <Row>
                                        <div style={{width:"100%"}}>
                                            <MaxInput 
                                                type={"Available"}
                                                token={props.token}
                                                balance={0.00}
                                                isCompleted={false}
                                            />
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className='approve'>
                                            <Button
                                                type="primary"
                                                disabled
                                                size={'large'}
                                                className='ant-btn-confirm'
                                                >
                                                Approve
                                            </Button>
                                        </div>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <Row>
                                        <div style={{width:"100%"}}>
                                            <MaxInput 
                                                type={"Staked"}
                                                token={props.token}
                                                balance={0.00}
                                                isCompleted={false}
                                            />
                                        </div>
                                    </Row>
                                    <Row>
                                        <Space>
                                            <Col>
                                                <div className='stacked_bal_label'>
                                                    Approximate Value:
                                                </div>
                                            </Col>
                                            <Col>
                                                <div>
                                                    <span className='staked_bal_num'>0.00 {props.token}</span>
                                                </div>
                                            </Col>
                                        </Space>
                                    </Row>
                                    <Row>
                                        <div className='unstake'>
                                            <Button
                                                type="primary"
                                                disabled
                                                size={'large'}
                                                className='ant-btn-confirm'
                                                >
                                                Unstake
                                            </Button>
                                        </div>
                                    </Row>
                                </Col>
                                <Col span={6}>
                                    <div>
                                        <Row justify='center'>
                                            <div className='stakeBox-total-label'>
                                                Total ALPACA Rewards:
                                            </div>
                                        </Row>
                                        <Row justify='center'>
                                            <div className='stakeBox-total-number'>
                                                0.00
                                            </div>
                                        </Row>
                                        <Row justify='center'>
                                            <div className='claim'>
                                                <Button
                                                    type="primary"
                                                    disabled
                                                    size={'large'}
                                                    className='ant-btn-confirm'
                                                    >
                                                    Claim
                                                </Button>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Panel>
                    </Collapse>
                </div>
            </Col>
        </Row>
      </>
    )
  }
export default StakeBoxCollapse
  