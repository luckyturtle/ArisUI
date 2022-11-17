import { React, useState, useMemo, useCallback, useEffect} from 'react';
import { Row, Col,
        Button,
        Table,
        Tag,
        Space,
        Tooltip,
        Image,
        Card,
        Skeleton  } from 'antd';
import './style.css';
import {
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { QuestionCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import LendCard from '../../components/lendCard/lendCard';
import AddMetaMaskBtn from '../../components/addMetaMaskBtn/addMetaMaskBtn';
import GetTokenBtn from '../../components/getTokenBtn/getTokenBtn';
import { tokenImage } from '../../constant/tokenImage';
const Lend = (props) => {
  const [isLoading, setIsLoading] = useState(false); 
  let { path } = useRouteMatch();
  const text = <div className='l-t-tooltip'>
    <div>
      <span>Lending APY accrues and auto-compounds in your ibTokens. At the left of the dashboard, you can view their values growing relative to the deposit tokens. Learn more </span>  
      <a href="" className='text-primary'>here</a> 
      .
    </div>
    <div style={{marginTop:"1rem"}}>
      Staking APY is earned in ALPACA by staking your ibTokens on the Stake page. Assumes daily compounding. Staking will not stop your ibTokens from collecting lending APY. The total APY is calculated by adding the APRs of Lending and Staking, and then converting the sum into APY.
    </div>
  </div>
  const arisTooltipText = <div className='l-t-tooltip'>
    <div>
      Lock ALPACA in Governance Vault for 12.82% APY
    </div>
    <Row justify='center'>
        <div className='lcard-tooltip-divider'></div>
    </Row>
    <div>
      <Row justify='space-between'>
          <Col spin={12}>Lending APR:</Col>
          <Col spin={12}>
              1.12%
          </Col>
      </Row>
    </div>
  </div>
   const notArisTooltipText = <div className='l-t-tooltip'>
    <Row justify='space-between'>
          <Col spin={12}>Lending APR:</Col>
          <Col spin={12}>
            13.79%
          </Col>
    </Row>
    <Row justify='space-between'>
        <Col spin={12}>Staking APR:</Col>
        <Col spin={12}>
            0.944%
        </Col>
    </Row>
    <Row justify='space-between'>
        <Col spin={12}>Total APR:</Col>
        <Col spin={12}>
          14.73%
        </Col>
    </Row>
 </div>
  const deposit = (token) => {
    props.history.push(`${path}/${token}/deposit`);
  }
  const withdraw = (token) => {
    props.history.push(`${path}/${token}/withdraw`);
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 200);
  })
  const columns = [
    {
      title: '',
      dataIndex: 'key',
      key: 'key',
      render: (text) => <a>{text}</a>,
      width: '300px',
      fixed: 'left',
      render: (apy,_record) => {
        return <>
          <Row>
            <Col>
              <Image
                width={40}
                preview={false}
                src={tokenImage[_record['token']]}
              />
            </Col>
            <Col offset={1}>
              <Row>
                <Col className='c-titleName'>{_record['token'].toUpperCase()}</Col>
                <Col>
                  {_record['is_new']?
                    <span className="c-tag c-tag--new">New</span>
                    :
                    null
                  }
                </Col>
              </Row>
              <Row style={{marginTop:'0.5rem'}}>
                <div className='c-ibTokenPerBaseToken'>
                  {_record['rate']}
                </div>
              </Row>
              <Row style={{marginTop:'0.5rem'}}>
                <Col>
                  <GetTokenBtn 
                    href= {"https://pancakeswap.finance/swap?outputCurrency=0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F"} 
                    name={_record['token'].toUpperCase()}
                  />
                 <AddMetaMaskBtn token={_record['token']}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </>;
      }
    },
    {
      title: () => {
        return <>
          <span>APY</span>
          <span style={{marginLeft:"0.3rem"}}>
            <Tooltip 
                placement="topRight" 
                title={text} 
                className="lcard-title-tooltip"
                color="var(--tooltip-bk)"
            >
                <ExclamationCircleOutlined />
            </Tooltip>
          </span>
          </>
      },
      dataIndex: 'apy',
      key: 'apy',
      width: '15%',
      render: (apy,_record) => {
        return <>
          <span className='c-apy--leverage'>
            APY {apy}%
          </span>
          <span style={{marginLeft:"0.3rem"}}>
            <Tooltip 
                placement="topRight" 
                title={_record['token'] == "Aris"? arisTooltipText:notArisTooltipText} 
                className="lcard-title-tooltip"
                color="var(--tooltip-bk)"
            >
                <ExclamationCircleOutlined />
            </Tooltip>
          </span>
        </>
      }
    },
    {
      title: 'Total Supply',
      dataIndex: 'total_supply',
      key: 'total_supply',
      width: '12.5%',
      render: (total_supply,_record) => {
        return <>
          <span className='c-fieldValue'>
            {total_supply} {_record['token'].toUpperCase()}
          </span>
        </>
      }
    },
    {
      title: 'Total Borrowed',
      key: 'total_borrowed',
      dataIndex: 'total_borrowed',
      width: '12.5%',
      render: (total_borrowed,_record) => {
        return <>
          <span className='c-fieldValue'>
            {total_borrowed} {_record['token'].toUpperCase()}
          </span>
        </>
      }
    },
    {
      title: 'Utilization',
      key: 'utilization',
      dataIndex: 'utilization',
      width: '12.5%',
      render: (utilization,_record) => {
        return <>
          <span className='c-fieldValue'>
            {utilization} %
          </span>
        </>
      }
    },
    {
      title: 'Your Balance',
      key: 'your_balance',
      dataIndex: 'your_balance',
      width: '12.5%',
      render: (your_balance,_record) => {
        return <>
          <div className='c-fieldValue-1'>
            {your_balance.split(",")[0]} ib{_record['token'].toUpperCase()}
          </div>
          <div className='c-fieldValue-1'>
            {your_balance.split(",")[1]} {_record['token'].toUpperCase()}
          </div>
        </>
      }
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      width: '210px',
      fixed: 'right',
      render: (action,_record) => {
        return <>
           <div className='' style={_record['token'] != "Aris"?{display:"none"}:{}}>
            <Button 
               type="primary"
              ghost={true}
              className='c-actionBtn--deposit c-actionBtn--lock'
            >
              <div style={{wordBreak:"break-all", overflow:"hidden"}}>Lock for 12.82% APY</div>
            </Button>
          </div>
          <div className='' style={_record['token'] == "Aris"?{marginTop:"0.5rem"}:{}}>
            <Button 
               type="primary"
              ghost={true}
              className='c-actionBtn--deposit c-actionBtn--lock'
              onClick={()=>deposit(_record['token'])}
            >Deposite</Button>
          </div>
          <div className='' style={{marginTop:"0.5rem"}}>
            <Button 
               type="primary"
              ghost={true}
              className='c-actionBtn--deposit c-actionBtn--lock'
              onClick={()=>withdraw(_record['token'])}
            >Withdraw</Button>
          </div>
        </>
      }
    },
  ];
  const data = [
    {
      key: 1,
      apy: '1.13',
      total_supply: '10.81M',
      total_borrowed: '2.2M',
      utilization: '20.37',
      your_balance: '0.00,0.00',
      token:"Aris",
      is_new:false,
      rate:"1 ibALPACA = 1.0217 ALPACA"
    },
    {
      key: 2,
      apy: '15.87',
      total_supply: '10.81M',
      total_borrowed: '2.2M',
      utilization: '20.37',
      your_balance: '0.00,0.00',
      token:"Cake",
      is_new:true,
      rate:"1 ibCAKE = 1.0608 CAKE"
    },
    {
      key: 3,
      apy: '3.33',
      total_supply: '10.81M',
      total_borrowed: '2.2M',
      utilization: '20.37',
      your_balance: '0.00,0.00',
      token:"Bnb",
      is_new:false,
      rate:"1 ibBNB = 1.1457 BNB"
    },
    {
      key: 4,
      apy: '3.33',
      total_supply: '10.81M',
      total_borrowed: '2.2M',
      utilization: '20.37',
      your_balance: '0.00,0.00',
      token:"Busd",
      is_new:false,
      rate:"1 ibBUSD = 1.1189 BUSD"
    }
  ];
    return (
       <>
        <LendCard />
        <Card
            className='l-t-card'
        >
          <Row justify='end'>
            <Button 
               type="primary"
              icon={<QuestionCircleOutlined />}
              ghost={true}
              className='c-btn'
            >FAQ</Button>
          </Row>
          <Row>
            <div className='EarnAvailableLendingPoolTable'>
              {
                !isLoading?
                <Skeleton active />
                :
                <Table columns={columns} dataSource={data} pagination={false}
                  scroll={{
                    x: 1200
                  }}
                />
              }
              
            </div>
          </Row>
        </Card>
       </>
    )
  }
export default withRouter(Lend);
  