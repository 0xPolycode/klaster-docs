import{u as s,j as e}from"./index-T97jsVJK.js";const i=void 0;function c(t){const n={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"multichain-smart-contract-account",children:["Multichain Smart Contract Account",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichain-smart-contract-account",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:`The Klaster account system is built on top of ERC4337 Account Abstraction. Account wise, the main difference between
Klaster and other solutions is that Klaster tightly couples deployed Smart Contract Account instances across multiple
blockchains.`}),`
`,e.jsx(n.p,{children:`Simply put, this means that these accounts, deployed on multiple blockchain networks - have the ability to act as a single
account.`}),`
`,e.jsxs(n.p,{children:["Klaster uses the ",e.jsx(n.code,{children:"CREATE2"}),` opcode when deploying accounts. However, some blockchains - notably the zkSync ecosystem - don't
derive the accounts the same way that Ethereum does.`]}),`
`,e.jsxs(n.p,{children:["That's why the Klaster SDK uses an internal object called the ",e.jsx(n.code,{children:"MutltichainAccount"}),`, which holds all of the address deployments
for all of the blockchains.`]}),`
`,e.jsxs(n.p,{children:["Beyond holding the address deployments, the ",e.jsx(n.code,{children:"MultichainAccount"})," object holds the ",e.jsx(n.code,{children:"initData"}),` - which was the data used to derive
the account.`]}),`
`,e.jsxs(n.h3,{id:"deriving-accounts",children:["Deriving accounts",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deriving-accounts",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"Several key pieces of information determine which account address will be derived when loading a smart contract account:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Account vendor (e.g. Biconomy, Safe, ZeroDev, ...)"}),`
`,e.jsx(n.li,{children:"Factory data (derived from account init parameters, specific for each vendor)"}),`
`,e.jsx(n.li,{children:"Account blockchain (e.g. ETH, Base, OP, Polygon, AVAX all derive the same, while e.g. zkSync and Abstract derive differently)"}),`
`]}),`
`,e.jsxs(n.p,{children:["The Klaster Node exposes this as a utility endpoint ",e.jsx(n.code,{children:"https://<node-url>/v2/address/{VENDOR_ID}/0xFACTORY_DATA"})]}),`
`,e.jsxs(n.p,{children:["The vendor id is a Klaster defined string, definining every supported account vendor (e.g. ",e.jsx(n.code,{children:"SAFE_V141"})," or ",e.jsx(n.code,{children:"BICO_V2"}),`), while
factory data is encoded for every vendor, according to their standard.`]}),`
`,e.jsxs(n.p,{children:["e.g. for ",e.jsx(n.code,{children:"Safe"}),", the ",e.jsx(n.code,{children:"FactoryData"})," is derived from ",e.jsx(n.code,{children:"address[] signers, uint256 threshold, bytes32 salt"}),`, while for Biconomy -
it's derived from `,e.jsx(n.code,{children:"address owner, bytes32 salt"})]})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(c,{...t})}):c(t)}export{a as default,i as frontmatter};
