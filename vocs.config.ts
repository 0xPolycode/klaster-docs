import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Klaster SDK Docs',
  logoUrl: 'https://content.pstmn.io/9af7177c-4ec7-40e4-855b-214ea62aaf5f/a2xhc3Rlcl9ib2plLnBuZw==',
  description: 'Build chain abstracted flows and dApps with ease through Klaster Interchain Commitments. ',
  ogImageUrl: 'https://vocs.dev/api/og?logo=%https://content.pstmn.io/9af7177c-4ec7-40e4-855b-214ea62aaf5f/a2xhc3Rlcl9ib2plLnBuZw==&title=%Klaster&description=%Klaster',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Klaster Explained',
      link: '/explainer'
    },
    {
      text: 'Concepts',
      link: '/concepts'
    },
    {
      text: 'QuickStart Guides',
      items: [
        {
          text: 'Multichain Flow',
          link: '/quickstart/multichain-across'
        },
        {
          text: 'Gas Abstraction',
          link: '/quickstart/gas-abstraction'
        },
        {
          text: 'Unified Balance',
          link: '/quickstart/unified-balance'
        },
        {
          text: 'Universal Deposit Address',
          link: '/quickstart/universal-deposit-address'
        },
      ]
    },
    {
      text: 'SDK Reference',
      items: [
        {
          text: 'Interfaces',
          link: '/reference#interfaces',
        },
        {
          text: 'Type Aliases',
          link: '/reference#type-aliases'
        },
        {
          text: 'KlasterSDK',
          link: '/reference#klastersdk',
          items: [
            {
              text: 'initKlaster',
              link: '/reference#initklaster'
            },
            {
              text: 'getQuote',
              link: '/reference#getquote'
            },
            {
              text: 'execute',
              link: '/reference#execute'
            },
            {
              text: 'autoExecute',
              link: '/reference#autoexecute'
            },
            {
              text: 'changeAccountSalt',
              link: '/reference#changeaccountsalt'
            },
            {
              text: 'changeMasterAddress',
              link: '/reference#changemasteraddress'
            },
            {
              text: 'encodeTxFee',
              link: '/reference#encodetxfee'
            },
            {
              text: 'transferAndExecute',
              link: '/reference#transferandexecute'
            }
          ]
        },
        {
          text: 'Utility Functions',
          link: '/reference#functions',
          items: [
            {
              text: 'buildTransferERC20FromEoaTx',
              link: '/reference#buildtransfererc20fromeoatx'
            },
            {
              text: 'encodeAction',
              link: '/reference#encodeaction'
            },
            {
              text: 'encodeItx',
              link: '/reference#encodeitx'
            },
            {
              text: 'encodeTx',
              link: '/reference#encodetx'
            },
            {
              text: 'fetchInjectedAddress',
              link: '/reference#fetchinjectedaddress'
            },
            {
              text: 'getPaymentToken',
              link: '/reference#getpaymenttoken'
            },
            {
              text: 'signWithInjectedWallet',
              link: '/reference#signwithinjectedwallet'
            },
            {
              text: 'getUnifiedBalance',
              link: '/reference#getunifiedbalance'
            },
            {
              text: 'createTokenMapping',
              link: '/reference#createtokenmapping'
            }
          ]
        }
      ]
    },
    {
      text: 'Security Audits',
      link: '/security-audit'
    },
    {
      text: 'Supported Networks and Tokens',
      link: '/supported-networks-tokens',
    }
    
  ],
  socials: [
    {
      icon: 'x',
      link: 'https://x.com/klaster_io'
    },
    {
      icon: 'github',
      link: 'https://github.com/0xPolycode'
    }
  ],
})
