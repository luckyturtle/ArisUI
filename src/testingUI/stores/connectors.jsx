import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { BscConnector } from '@binance-chain/bsc-connector'

/**
 * @Note https://github.com/NoahZinsmeister/web3-react
 * */

// const POLLING_INTERVAL = 12000;
export const RPC_URLS = {
  eth_main: "https://eth-mainnet.alchemyapi.io/v2/Fzjec9nubY8kwQ7KyCdW--u3B8swwNSg",// eth main net
  bsc_main: "https://bsc-dataseed1.binance.org:443",// BSC main net
  bsc_test: "https://data-seed-prebsc-1-s1.binance.org:8545",// BSC test net
  eth_test: "https://rinkeby.infura.io/v3/e117f524e71d42ec85df7fbdfe2e46e3",
};

export const networkOptions = {
  "0x38" : {name: "BSC"},//56
  "0x61" : {name: "BSCTestNet"},//97
  "0x64" : {name: "xDai"},//100
  "0x1" : {name: "MainNet"}//1
};

//Meta Mask, Trust Wallet
export const injected = new InjectedConnector({
  supportedChainIds: [1, 56, 97, 100 ]
});

//Coin base connection
export const walletLink = (url) => new WalletLinkConnector({
  url: url,
  appName: "ArisFinancial"
});

//Coin base connection
export const binanceWallet = new BscConnector({
  supportedChainIds: [56, 97] // later on 1 ethereum mainnet and 3 ethereum ropsten will be supported
});