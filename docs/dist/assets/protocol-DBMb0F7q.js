import{u as t,j as e}from"./index-CMKOqEG3.js";const a={title:"Klaster Protocol Technical Summary",description:"A comprehensive overview of the Klaster Protocol, its key concepts, and components"};function s(i){const n={a:"a",div:"div",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"klaster-protocol-technical-summary",children:["Klaster Protocol Technical Summary",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#klaster-protocol-technical-summary",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(n.h2,{id:"overview",children:["Overview",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Klaster Protocol is a chain abstraction framework that enables the execution of complex cross-chain transaction bundles with a single user signature. It introduces a Transaction Commitment Layer between users/dApps and multiple blockchain networks, facilitating seamless interaction across different chains."}),`
`,e.jsxs(n.h2,{id:"key-concepts",children:["Key Concepts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#key-concepts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"1-itx-interchain-transaction-bundles",children:["1. iTx (Interchain Transaction) bundles",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#1-itx-interchain-transaction-bundles",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Series of (possibly dependent) transactions spanning across multiple chains"}),`
`,e.jsx(n.li,{children:"Represented as a Merkle Tree of UserOps"}),`
`,e.jsx(n.li,{children:"Defined by a unique Merkle Root hash (iTx hash)"}),`
`]}),`
`,e.jsxs(n.h3,{id:"2-transaction-commitment-layer",children:["2. Transaction Commitment Layer",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#2-transaction-commitment-layer",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Network of Klaster Nodes"}),`
`,e.jsx(n.li,{children:"Provides execution guarantees"}),`
`,e.jsx(n.li,{children:"Orchestrates iTx execution across multiple blockchain networks"}),`
`]}),`
`,e.jsxs(n.h2,{id:"core-components",children:["Core Components",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#core-components",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.h3,{id:"smart-accounts---itx-module",children:["Smart Accounts - iTx Module",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#smart-accounts---itx-module",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Standardized ERC-7579 module for smart contract accounts"}),`
`,e.jsx(n.li,{children:"Enables single signature approval for entire iTx bundles"}),`
`,e.jsx(n.li,{children:"Compatible with existing smart account wallets"}),`
`]}),`
`,e.jsxs(n.h3,{id:"klaster-nodes",children:["Klaster Nodes",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#klaster-nodes",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Responsibilities:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Estimating iTx fees & responding to quote requests"}),`
`,e.jsx(n.li,{children:"Committing to iTx execution"}),`
`,e.jsx(n.li,{children:"Executing fully signed iTx bundles"}),`
`]}),`
`,e.jsx(n.p,{children:"Node Selection Process:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Nodes provide quotes for iTx execution"}),`
`,e.jsx(n.li,{children:"User/dApp selects best quote based on cost and node reputation"}),`
`,e.jsx(n.li,{children:"Selected node commits to iTx execution"}),`
`,e.jsx(n.li,{children:"User signs the iTx bundle"}),`
`,e.jsx(n.li,{children:"Node executes the iTx bundle"}),`
`]}),`
`,e.jsxs(n.h3,{id:"meta-paymaster-and-multichain-gas-refunds",children:["Meta Paymaster and Multichain Gas Refunds",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#meta-paymaster-and-multichain-gas-refunds",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Nodes act as Meta Paymasters, accepting payment in one token/chain and executing transactions across multiple chains"}),`
`,e.jsx(n.li,{children:"Utilizes ERC-4337 EntryPoint for UserOp routing"}),`
`,e.jsx(n.li,{children:"Implements gas refunds for overpaid transactions"}),`
`]}),`
`,e.jsxs(n.h3,{id:"optimistic-itx-execution",children:["Optimistic iTx Execution",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#optimistic-itx-execution",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Nodes determine optimal execution order through simulation"}),`
`,e.jsx(n.li,{children:"Executes UserOps when simulations yield 0 REVERT opcodes"}),`
`,e.jsx(n.li,{children:"Incentivized by diminishing success tips"}),`
`]}),`
`,e.jsxs(n.h2,{id:"integration",children:["Integration",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#integration",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"SDK available for dApp/Wallet developers"}),`
`,e.jsx(n.li,{children:"Enables efficient building of chain-abstracted applications"}),`
`,e.jsx(n.li,{children:"Neutral approach, compatible with various bridges and AA wallet providers"}),`
`]}),`
`,e.jsxs(n.h2,{id:"use-cases",children:["Use Cases",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#use-cases",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Chain-abstracted versions of existing dApps (e.g., AAVE)"}),`
`,e.jsx(n.li,{children:"Streamlined checkout flows"}),`
`,e.jsx(n.li,{children:"Easier onboarding to SocialFi L2/L3 apps"}),`
`,e.jsx(n.li,{children:"Single-chain dApps attracting users from various chains"}),`
`]}),`
`,e.jsxs(n.h2,{id:"security-considerations",children:["Security Considerations",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#security-considerations",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Users maintain full control of funds through AA wallets"}),`
`,e.jsx(n.li,{children:"Nodes can be slashed for failing to execute committed iTx bundles"}),`
`,e.jsx(n.li,{children:"Security reduced to the security of bridges used for asset transfers between chains"}),`
`]}),`
`,e.jsxs(n.h2,{id:"future-developments",children:["Future Developments",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#future-developments",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Decentralization phase including slashing and multichain staking"}),`
`,e.jsx(n.li,{children:"Public node implementation for verification and customization"}),`
`,e.jsx(n.li,{children:"Potential integration with intent solver networks"}),`
`]})]})}function d(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{d as default,a as frontmatter};
