import { React, useState, useMemo, useCallback, useEffect} from 'react';
import Lend from "./pages/Lend/Lend";
import Stake from "./pages/Stake/Stake";
import LangSelect from './components/langSelect/langSelect';
import ImageButton from './components/imageButton/imageButton';
import Footer from './components/footer/footer';
import SideMenuBar from './components/sideMenuBar/sideMenuBar';
import { useThemeSwitcher } from "react-css-theme-switcher";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  withRouter,
  Redirect
} from "react-router-dom";
import { 
  Layout,
  Row,
  Col,
  Button,
  Image,
  Typography,
  Tooltip,
  Select,
  Divider,
  Modal,
  Space
} from 'antd';

import Sun from '../assets/arisFinance/images/sun.png';
import Moon from '../assets/arisFinance/images/moon.png';
import Setting from '../assets/arisFinance/images/settings.png';

import PhisingBar from './components/phisingBar/phisingBar';
import Deposit from './pages/Deposit/Deposit';
import Withdraw from './pages/Withdraw/Withdraw';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioVault from './pages/Portfolio_Vault/Portfolio_Vault';
import Farm from './pages/Farm/Farm';
import Vault from './pages/Vault/Vault';
import {binanceWallet, injected, walletLink} from "./stores/connectors";
import Web3 from "web3";
import './testingUI.css';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const languages = [{EN:'English'}, {CH:'Chinese'}];

const TestingUI = (props) => {
  const { switcher, themes } = useThemeSwitcher();
  const [isOpenWalletProvider, setIsOpenWalletProvider] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(Object.keys(languages[0])[0]);
  const [isConnectedWallet, setIsConnectedWallet] = useState(false);
  const [walletAddress, setAddress] = useState('');
  
  const switchTheme = () => {
    if(isDarkMode){
      setIsDarkMode(false);
      switcher({ theme: themes.light });
    }else{
      setIsDarkMode(true);
      switcher({ theme: themes.dark });
    }
  };
  const setting = () => {

  }
  const closeWalletModal = () => {
    setIsOpenWalletProvider(false);
  }
  const openWalletModal = () => {
    setIsOpenWalletProvider(true);
  }
  const handleLanguageChange = (value) => {
    setCurrentLanguage(value);
  };
  const onConnectionClicked = async (currentConnector,name) => {
    try{
      if(window.ethereum){
        const response = await currentConnector.activate();
        const address = response?.account;
        const provider = response?.provider;
        const web3 = new Web3(provider);
        const chainIdStr = await web3.eth.getChainId();
        const chainId = parseInt(chainIdStr.toString()).toString(16);
        const account = { chainId: `0x${chainId}`, address: address, web3: web3, provider: provider, connectorsName: name };
        setAddress(address);
        setIsOpenWalletProvider(false);
        setIsConnectedWallet(true);
      }else{
        alert("install metamask extension!!");
        setIsOpenWalletProvider(false);
      }
    }catch (e) {
      console.error(e);
    }
  };
  
  const WalletSelectorHeader = 
    <>
      <Row>
        <span role="img" aria-label="wallet" className="anticon anticon-wallet-selector title__icon mr-1">
          <svg viewBox="64 64 896 896" focusable="false" data-icon="wallet" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z">
            </path>
          </svg>
        </span>
        Select a wallet
      </Row>
    </>
  let { path, url } = useRouteMatch();
  const currentPage = window.location.pathname.split("/")[2];
    return (
          <Layout style={{minHeight: "100vh"}}>
            <PhisingBar />
            <Header style={{background: "var(--colors-background)", height:"15vh"}} >
              <Row style={{marginTop:"4vh"}}>
                <Col xs={{ span: 6, offset: 2 }} lg={{ span: 10, offset: 0 }} 
                  style={{display:'flex'}}>
                  <Image
                    width={70}
                    preview={false}
                    src="https://alpaca-app-assets.alpacafinance.org/bsc-alpaca-logo.png"
                  />
                  <Title style={{color:"var(--primary-color)",marginTop:"2vh", marginLeft:"2vh"}}>
                    Aris Finance</Title>
                </Col>
                <Col xs={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 0 }}/>
                <Col xs={{ span: 6, offset: 2 }} lg={{ span: 8, offset: 0 }}>
                  <Row justify="end">
                    <Col>
                      {!isConnectedWallet?
                        <Button
                          ghost={true}
                          className="ConnectedWallet-btn"
                          onClick={openWalletModal}
                        >
                          Connect to Wallet
                        </Button>
                        :
                        <Button
                          ghost={true}
                          className="ConnectedWallet-btn"
                        >
                          Connected as {walletAddress.slice(0,4)}...{walletAddress.slice(-4)}
                        </Button>
                      }
                      
                    </Col>
                    <Col>
                      <LangSelect
                        defaultValue={currentLanguage}
                        onChange={handleLanguageChange}
                        style={{ 
                          marginTop:"3.3vh",
                          marginLeft:"1rem" 
                        }} 
                        data={languages}
                        >
                      </LangSelect>
                    </Col>
                    <Col><Divider type="vertical" style={{marginTop:"3vh", background:"var(--divider)",height: "30px"}}/></Col>
                    <Col>
                      <ImageButton
                          onClick={switchTheme}
                          style={{marginTop:"3vh"}}
                          src={isDarkMode? Sun:Moon}
                      >
                      </ImageButton>
                    </Col>
                    <Col><Divider type="vertical" style={{marginTop:"3vh", background:"var(--divider)",height: "30px"}}/></Col>
                    <Col>
                      <ImageButton
                          onClick={setting}
                          style={{marginTop:"3vh"}}
                          src={Setting}
                      >
                      </ImageButton>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Header>
            <Layout className='container'>
              <Sider style={{background: "var(--colors-background)"}}>
                {currentPage?
                <SideMenuBar currentPage={currentPage}/>
                :
                null
                }
              </Sider>
              <Content>
                <Switch>
                  <Route path={`${path}`} exact={true}>
                    <Redirect to={`${path}/Lend`} />
                  </Route>
                  <Route path={`${path}/Lend`} exact={true}>
                    <Lend />
                  </Route>
                    <Route path={`${path}/Lend/:token/deposit`} >
                      <Deposit walletAddress = {walletAddress}/>
                    </Route>
                    <Route path={`${path}/Lend/:token/withdraw`}>
                      <Withdraw />
                    </Route>
                  <Route path={`${path}/Stake`} exact={true}>
                    <Stake />
                  </Route>
                  <Route path={`${path}/Lend`} exact={true}>
                    <Lend />
                  </Route>
                  <Route path={`${path}/Portfolio/Farm`} exact={true}>
                    <Portfolio />
                  </Route>
                  <Route path={`${path}/Portfolio/Vault`} exact={true}>
                    <PortfolioVault />
                  </Route>
                  <Route path={`${path}/Farm`} exact={true}>
                    <Farm />
                  </Route>
                  <Route path={`${path}/Vault`} exact={true}>
                    <Vault />
                  </Route>
                  <Route path={`${path}/*`}>
                    <Redirect to={`${path}/Lend`} />
                  </Route>
                </Switch>
              </Content>
            </Layout>
            <Footer />
            <Modal 
              title={WalletSelectorHeader} 
              open={isOpenWalletProvider}
              footer={null}
              onCancel={closeWalletModal}
              maskStyle={{backgroundColor:"var(--modal-outbk)", opacity:0.7}}
              className='WalletSelector'
              width={350}
            >
              <Row>
                <div>
                  Don't have a web3 wallet?
                </div>
                <div>
                  Learn what it is and get it here.
                </div>
              </Row>
              <Row style={{marginTop:'1rem'}}>
                <Space direction="vertical" style={{width:'100%'}}>
                  <Button
                    className='WalletBtn'
                    onClick={() => onConnectionClicked(injected, "MetaMask")}
                  >
                    <Row justify='space-between'>
                      <Col>
                        <Row style={{height:'100%'}} align='middle'>
                          MetaMask
                        </Row>
                      </Col>
                      <Col>
                       <Image
                          preview={false}
                          width={40}
                          src={"https://alpaca-app-assets.alpacafinance.org/wallet/metamask-fox.svg"}
                        >
                        </Image>
                      </Col>
                    </Row>
                  </Button>
                  <Button
                    className='WalletBtn'
                  >
                    <Row justify='space-between'>
                      <Col>
                        <Row style={{height:'100%'}} align='middle'>
                          WalletConnect
                        </Row>
                      </Col>
                      <Col>
                        <Image
                          preview={false}
                          width={40}
                          src={"https://alpaca-app-assets.alpacafinance.org/wallet/wallet-connect.svg"}
                        >
                        </Image>
                      </Col>
                    </Row>
                  </Button>
                </Space>
              </Row>
            </Modal>
          </Layout>
    )
  }
export default TestingUI;
  