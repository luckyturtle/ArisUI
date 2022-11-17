import { React, useState, useMemo, useCallback, useEffect} from 'react';
import { Row, Col,
  Button,
  Table,
  Tag,
  Space,
  Tooltip,
  Switch,
  Radio,
  Image,
  Divider,
  Card,
  Skeleton  } from 'antd';
  import './style.css';
import {
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { QuestionCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import AddMetaMaskBtn from '../../components/addMetaMaskBtn/addMetaMaskBtn';
import StakeBoxCollapse from '../../components/stakeBoxCollapse/stakeBoxCollapse';
import CompletedStakedBox from '../../components/completedStakedBox/completedStakedBox';
import { tokenImage } from '../../constant/tokenImage';

const Stake = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const [isStaked, setIsStaked] = useState(false); 
  const [isLive, setIsLive] = useState(true); 
  const changeStake = (value) => {
    setIsStaked(value);
  }
  const changeRadio = (e) => {
    if(e.target.value == "live") {
      setIsLive(true);
    }else {
      setIsLive(false);
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 200);
  })
    return (
      <div className='StakePage'>
        <div className='StakeHeader'>
          <Row>
            <Col>
              <div className='StakeHeader__item StakeHeader__item--active'>
                <Image
                 width={50}
                 preview={false}
                 src={tokenImage['Aris']}
                >
                </Image>
                <div className='StakeHeader__item__name'>
                  Token Staking
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className='StakeSummary'>
          <Card
              className='l-t-card'
          >
              <Row justify='space-between'>
                <Col className='StakeSummary-title'>
                  Your Rewards Summary
                </Col>
                <Col>
                  <Button 
                    type="primary"
                    icon={<QuestionCircleOutlined />}
                    ghost={true}
                    className='c-btn'
                  >FAQ</Button>
                </Col>
              </Row>
              {!isLoading?
                <Skeleton active />
                :
                <Row style={{marginTop:"1rem"}}>
                  <Col lg={12} xs={24}>
                    <Card 
                      className='c-earnCard'
                      // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Row>
                        <Col lg={8}>
                          <Row>
                            <Col>
                              <Row justify='center'>
                                <Col>
                                  <div className='c-earnCard-1'>
                                    ALPACA earned :
                                  </div>
                                </Col>
                              </Row>
                              <Row justify='center'>
                                <span className='c-earnCard__totalPending'>
                                  0.00
                                </span>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={16}>
                          <Row justify='end'>
                            <Image
                              height={306}
                              preview={false}
                              src={'https://alpaca-app-assets.alpacafinance.org/LaserHeadfront.svg'}
                            >
                            </Image>
                          </Row>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                  <Col lg={12} xs={24}>
                    <Row justify='end'>
                      <Col span={23}>
                        <Card
                          className='c-balanceCard'
                        >
                          <Row>
                            <Col span={2}>
                              <div className='anticon-wallet'>
                                <svg viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                    <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z">
                                    </path>
                                </svg>
                              </div>
                            </Col>
                            <Col span={10}>
                              <div className='anticon-t-div'>
                                <div className='anticon-text'>Your ARIS</div>
                                <div className='anticon-text'>Wallet Balance :</div>
                              </div>
                            </Col>
                            <Col span={6}>
                              <div className='anticon-number'>
                                0.00
                              </div>
                            </Col>
                            <Col span={6}>
                              <div className='anticon-addbtn'>
                                <AddMetaMaskBtn />
                              </div>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                    <Row justify='end' STY>
                      <Col span={23}>
                        <Card
                          className='c-lockedRewardCard'
                        >
                          <Row>
                            <Col lg={12} xs={24}>
                              <Row>
                                <Col>
                                  <div className='anticon-lock'>
                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z">
                                        </path>
                                    </svg>
                                  </div>
                                </Col>
                                <Col>
                                  <div className='anticon-lock-t-div'>
                                    <div className='anticon-lock-text'>Remaining</div>
                                    <div className='anticon-lock-text'>Locked Amount :</div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <div className='anticon-lock-number'>
                                  0.00
                                </div>
                              </Row>
                              <Row justify='center'>
                                <div className='anticon-lock-des'>
                                  Your locked rewards are linearly released over 7 days starting from block# 6,499,649 to block# 6,699,649
                                </div>
                              </Row>
                            </Col>
                            <Col lg={12} xs={24} className="c-lockedRewardCard-border">
                              <Row>
                                <Col>
                                  <div className='anticon-lock-avatar'>
                                    <Image
                                       width={35}
                                       preview={false}
                                       src={tokenImage['Aris']}
                                    >
                                    </Image>
                                  </div>
                                </Col>
                                <Col>
                                  <div className='anticon-lock-t-div'>
                                    <div className='anticon-lock-text'>Unlocked</div>
                                    <div className='anticon-lock-text'>Rewards :</div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <div className='anticon-lock-number'>
                                  0.00
                                </div>
                              </Row>
                              <Row justify='center'>
                                <Button
                                  type="primary"
                                  disabled
                                  size={'large'}
                                  className='ant-btn-confirm'
                                >
                                  Claim
                                </Button>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              }
          </Card>
        </div>
        <div className='StakeTable'>
          <Card
              className='l-t-card'
          >
            {!isLoading?
              <Skeleton active />
              :
              <div className='StakeTable-body'> 
              <Row>
                <Col>
                  <div className='StakeSummary-title'>
                    8 Available Staking Opportunities
                  </div>
                </Col>
              </Row>
              <Row style={{marginTop: '2rem'}}>
                <Col span={24}>
                  <div className='GenericStakingFilter'>
                    <Row>
                      <Col>
                        <Radio.Group defaultValue="live" buttonStyle="solid" size="large" onChange={changeRadio}>
                          <Radio.Button value="live" className='c-switcher__btn'>Live</Radio.Button>
                          <Radio.Button value="completed" className='c-switcher__btn'>Completed</Radio.Button>
                        </Radio.Group>
                      </Col>
                      <Col>
                        <Row style={{marginTop:'7.5px',marginLeft:'2rem'}}>
                          <Col><Switch className='c-switcher' onChange={changeStake}/></Col>
                          <Col>
                            <div className='stake-switch-label'>
                              Staked only
                            </div> 
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={24}>
                  <Divider className='my-divider'/>
                </Col>
              </Row>
              {isLive?
                !isStaked?
                  <Row>
                    <Space direction="vertical" size="middle" style={{width:"100%"}}>
                      <Col span={24}>
                        <StakeBoxCollapse 
                          token={"USDC"}
                          apy={"0.313"}
                          tvl={"15.16M"}
                          staked_balance={"0.00"}
                          aris_earaned={"0.00"}
                          img={"https://alpaca-app-assets.alpacafinance.org/icons/coins/bsc/ib-usdc.svg"}
                        />
                      </Col>
                      <Col span={24}>
                        <StakeBoxCollapse 
                          token={"BNB"}
                          apy={"0.313"}
                          tvl={"15.16M"}
                          staked_balance={"0.00"}
                          aris_earaned={"0.00"}
                          img={"https://alpaca-app-assets.alpacafinance.org/icons/coins/bsc/ib-bnb.svg"}
                        />
                      </Col>
                    </Space>
                  </Row>
                  :
                  <Row justify='center'>
                    <div className='no-staked-pool'>
                      No Staked Pool
                    </div>
                  </Row>
                :
                !isStaked?
                  <Row>
                    <Space direction="vertical" size="middle" style={{width:"100%"}}>
                      <Col span={24}>
                        <CompletedStakedBox 
                          token={"AUDS-BUSD LP"}
                          apy={"0.313"}
                          tvl={"15.16M"}
                          staked_balance={"0.00"}
                          aris_earaned={"0.00"}
                          isAdd={true}
                          stack={2}
                          img={"https://alpaca-app-assets.alpacafinance.org/icons/coins/bsc/ib-usdc.svg"}
                          img2={"https://alpaca-app-assets.alpacafinance.org/icons/coins/busd.svg"}
                        />
                      </Col>
                      <Col span={24}>
                        <CompletedStakedBox 
                          token={"sALPACA"}
                          apy={"0.313"}
                          tvl={"15.16M"}
                          staked_balance={"0.00"}
                          aris_earaned={"0.00"}
                          stack={1}
                          img={"https://alpaca-app-assets.alpacafinance.org/StronkAlpaca.svg"}
                        />
                      </Col>
                    </Space>
                  </Row>
                :
                null
              }
            </div>
            }
          </Card>
        </div>
      </div>
    )
  }
export default Stake
  