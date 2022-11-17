import gtag, {install} from "ga-gtag";

const GaEventEnum = {
    Init: 'Login',
    Farm: 'Farm',
    Detail: 'Detail',
    Deposit: 'Deposit',
    Withdraw: 'Withdraw',
    Harvest: 'Harvest',
};

const gaEvent = (key = '', value = '') => {
    try{
        // console.log("==gaEvent", process.env.NODE_ENV, key, value);
        install('UA-188412535-1');
        switch (key) {
            case GaEventEnum.Init:
                gtag('event', GaEventEnum.Init);
                break;
            case GaEventEnum.Farm:
                gtag('event', GaEventEnum.Farm, { 'asset': value });
                break;
            case GaEventEnum.Detail:
                gtag('event', GaEventEnum.Detail, { 'asset': value });
                break;
            case GaEventEnum.Deposit:
                gtag('event', GaEventEnum.Deposit, { 'asset': value });
                break;
            default:
                console.error('no ga event mapping');
        }
    }catch (e) {
        console.error(e);
    }
};

export default gaEvent;
export { GaEventEnum }