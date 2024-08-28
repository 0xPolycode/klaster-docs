import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Klaster SDK Docs',
  logoUrl: 'https://content.pstmn.io/9af7177c-4ec7-40e4-855b-214ea62aaf5f/a2xhc3Rlcl9ib2plLnBuZw==',
  iconUrl: 'https://i.imgur.com/8ufmgAg.jpeg',
  description: 'Build chain abstracted flows and dApps with ease through Klaster Interchain Commitments. ',
  ogImageUrl: 'https://vocs.dev/api/og?logo=%https://content.pstmn.io/9af7177c-4ec7-40e4-855b-214ea62aaf5f/a2xhc3Rlcl9ib2plLnBuZw==&title=%Klaster&description=%Klaster',
  head() {
    return (
      <>
        <script defer data-domain="docs.klaster.io" src="https://plausible.io/js/script.js"></script>
      </>
    )
  }  ,
  sidebar: [
    {
      text: '📝 Tutorials',
      items: [
        {
          text: '• Getting Started',
          link: '/getting-started'
        },
        {
          text: '• Zero to Hero Klaster Guide',
          link: '/zero-to-hero-klaster-guide'
        }
      ]
    },
    {
      text: '🧠 SDK Core Concepts',
      items: [
        {
          text: "• Interchain Transaction",
          link: '/concepts/interchain-transaction'
        },
        {
          text: '• Multichain Smart Contract Account',
          link: '/concepts/multichain-account'
        },
        {
          text: '• Multichain Public Client',
          link: '/concepts/multichain-public-client'
        },
        {
          text: '• Multichain Token Mapping',
          link: '/concepts/multichain-token-mapping'
        },
        {
          text: '• Bridging Plugins',
          link: '/concepts/bridge-plugins'
        },
        {
          text: '• Unified Balance',
          link: '/concepts/unified-balance'
        }
      ]
    },
    {
      text: '👀 Demo Apps',
      items: [
        {
          text: '• Chain Abstrated AAVE ↗',
          link: 'https://demo-aave.klaster.io'
        },
        {
          text: '• Multichain Disperse (Soon) ↗',
        }
      ]
    },
    {
      text: '🧾 Account Providers',
      items: [
        {
          text: '• Biconomy',
          link: '/accounts/biconomy'
        },
        {
          text: '• Safe',
          link: '/accounts/safe'
        }
      ]
    },
    {
      text: '📦 Resources',
      items: [
        {
          text: '• Whitepaper ↗',
          link: 'https://klaster.io/assets/wp-new-latex.pdf'
        },
        {
          text: '• Klaster Explorer ↗',
          link: 'https://explorer.klaster.io'
        }
      ]
    },
    {
      text: '🕸️ Protocol',
      items: [
        {
          text: '• Understanding Klaster Protocol',
          link: '/protocol'
        },
      ]
    },
    {
      text: 'ℹ️ Additional resources',
      items: [
        {
          text: '• Security Audits',
          link: '/security-audit'
        },
        {
          text: '• Supported Networks and Tokens',
          link: '/supported-networks-tokens',
        }
      ]
    },

    
    
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
