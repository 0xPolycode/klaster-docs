import{u as s,j as e}from"./index-CMKOqEG3.js";const a=void 0;function i(t){const n={a:"a",code:"code",div:"div",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.h2,{id:"interchain-transaction",children:["Interchain Transaction",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interchain-transaction",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"InterchainTransaction"})," or ",e.jsx(n.code,{children:"iTx"}),` is the beating heart of the Klaster protocol. It's an object containing two or more
transactions to be executed on one or more blockchain networks - encoded in a merkle tree.`]}),`
`,e.jsxs(n.h4,{id:"details",children:["Details",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#details",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:`The leafs of the tree are the transactions contained in the interchain transaction. They define all of the actions which can be
executed by the iTx.`}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The root hash of the merkle tree is called the ",e.jsx(n.strong,{children:"Interchain Transcation Hash"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["Every ",e.jsx(n.code,{children:"iTx"})," is uniquely defined by it's iTx hash"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["In order to execute the ",e.jsx(n.code,{children:"iTx"}),", the user signs the ",e.jsx(n.code,{children:"iTx hash"}),` with their private key and sends the signed hash, togehter with
the list of the `,e.jsx(n.code,{children:"leaf"})," transactions - to a Klaster Node."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["The first transaction in the ",e.jsx(n.code,{children:"iTx"})," is always the transaction fee payment transaction."]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://i.imgur.com/Uqun3NL.png",alt:"iTx"})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{h as default,a as frontmatter};
