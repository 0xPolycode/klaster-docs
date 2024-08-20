import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Klaster SDK Docs',
  logoUrl: 'https://content.pstmn.io/9af7177c-4ec7-40e4-855b-214ea62aaf5f/a2xhc3Rlcl9ib2plLnBuZw==',
  description: 'Build chain abstracted flows and dApps with ease through Klaster Interchain Commitments. ',
  ogImageUrl: 'https://vocs.dev/api/og?logo=%https://content.pstmn.io/9af7177c-4ec7-40e4-855b-214ea62aaf5f/a2xhc3Rlcl9ib2plLnBuZw==&title=%Klaster&description=%Klaster',
  sidebar: [
    {
      text: 'Zero to Hero: Getting Started',
      link: 'getting-started'
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
