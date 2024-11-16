// [!region import]
import {
  buildItx,
  initKlaster,
  klasterNodeHost,
  loadBiconomyV2Account,
  rawTx,
  singleTx,
} from "klaster-sdk";
import { parseEther } from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import {  base, optimism, polygon, scroll } from "viem/chains";
// [!endregion import]


// [!region createmockaccounts]
const privKey = generatePrivateKey();
const account = privateKeyToAccount(privKey);
// [!endregion createmockaccounts]


// [!region initKlaster]
// Intialize Klaster with a Biconomy account
const klaster = await initKlaster({
  accountInitData: loadBiconomyV2Account({
    owner: account.address,
  }),
  // NodeURL provided by the SDK is hosted by Klaster
  nodeUrl: klasterNodeHost.default,
});
// [!endregion initKlaster]

// [!region encodeMockTx]
// Encode a simple transaction which sends 0.00001 of base currency. In our case - ETH
const sendETH = rawTx({
  gasLimit: 75000n,
  to: account.address, // Send back to the sender address. This is just for demo purposes
  value: parseEther("0.00001"),
});
// [!endregion encodeMockTx]

// [!region buildItx]
// Build an iTx with a helper function
const iTx = buildItx({
  // Encode steps or "leaf" transactions in the iTx
  steps: [
    // Send ETH on Optimsim
    singleTx(optimism.id, sendETH), 
    // Send ETH on Base
    singleTx(base.id, sendETH)
  ],
  // Pay for tx fees on Polygon in USDC
  feeTx: klaster.encodePaymentFee(polygon.id, "USDC"),
});
// [!endregion buildItx]

// [!region getQuote]
// Fetch a quote from the Klaster Node. The node will respond with the
// amount of funds it'll charge to execute the transaction
const quote = await klaster.getQuote(iTx)
// [!endregion getQuote]

// [!region signMessage]
// Sign the iTx hash with your private key. With viem, it's 
// important to use the message → raw - otherwise the hash
// will be wrong
const signed = await account.signMessage({
  message: {
    raw: quote.itxHash
  }
})
// [!endregion signMessage]

// [!region fetchResult]
// Once the Node has strated executing the transaction
// it'll return the iTx hash from the execute call
const result = await klaster.execute(quote, signed)
console.log(result.itxHash)
// [!endregion fetchResult]
