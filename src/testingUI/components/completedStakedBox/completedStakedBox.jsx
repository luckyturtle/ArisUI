import React from 'react';
import {
    Row,
    Col,
    Collapse,
    Image,
    Space,
    Button,
    Avatar
} from 'antd';
import './style.css';
import MaxInput from '../maxInput/maxInput';
const { Panel } = Collapse;
const CompletedStakedBox = (props) => {
    const onChange = (key) => {
        console.log(key);
      };
    const CollHeader = () => {
        return <div className='CompletedStakeCollapse-header'>
            <Row justify='space-between'>
                <Col>
                    {props.stack == 1?
                        <Image
                            width={50}
                            preview={false}
                            src={props.img}
                        >
                        </Image>
                        :
                        <Avatar.Group maxPopoverPlacement='bottom'>
                            <Avatar size='large' src={props.img} />
                            <Avatar size='large' src={props.img2} />
                        </Avatar.Group>
                    }
                    
                </Col>
                <Col className='tokenName'>
                    <div>
                        {props.token}
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
                                        <span className='staked_bal_ib_num'>0.00 {props.token}</span>
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
                <div className='CompletedStakeCollapse-legacy'>
                    Legacy
                </div>
            </Col>
            <Col>
                <div className='stake-switch-label'>
                   {props.token.toUpperCase()}
                </div>
            </Col>
        </Row>
        {props.isAdd?
            <a target="_blank" rel="nofollow noopener noreferrer" className="hover:underline text-primary" 
                href="https://pancakeswap.finance/add/0xDCEcf0664C33321CECA2effcE701E710A2D28A3F/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56">
                    Add liquidity to {props.token}
            </a>
            :
            null
        }
        <Row>
            <Col span={24}>
                <div className='CompletedStakeCollapse'>
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
                                                isCompleted={true}
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
                                                isCompleted={true}
                                            />
                                        </div>
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
                            {props.isAdd?
                                <Row style={{marginTop: '2rem'}}>
                                    <a href="https://pancakeswap.finance/info/pool/0x877264983807d568cf0b61344cb03012c1f11b17" 
                                        className="text-primary hover:underline" target="_blank" rel="nofollow noopener noreferrer">
                                            {props.token} Pool info
                                    </a>
                                </Row>
                                :
                                null
                            }
                            
                        </Panel>
                    </Collapse>
                </div>
            </Col>
        </Row>
      </>
    )
  }
export default CompletedStakedBox
  