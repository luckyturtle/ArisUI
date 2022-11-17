
export const addTokenToWallet = (tokenSymbol, tokenAddress, token_decimals, tokenImage) => async () => {
    console.log("Hay!!");
    if (window.ethereum) {
        console.log("Hay1!!");
        try {
            await window.ethereum.request({
                method: "wallet_watchAsset",
                params: {
                    type: "ERC20",
                    options: {
                        address: tokenAddress,
                        symbol: tokenSymbol,
                        decimals: token_decimals,
                        image: tokenImage,
                    },
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
};