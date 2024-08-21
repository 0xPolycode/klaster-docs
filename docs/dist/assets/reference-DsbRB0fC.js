import{u as r,j as e}from"./index-D75nsQEW.js";const d={title:"klaster-sdk",description:"undefined"};function i(n){const s={a:"a",blockquote:"blockquote",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"klaster-sdk"})," • ",e.jsx(s.strong,{children:"Docs"})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.header,{children:e.jsxs(s.h1,{id:"klaster-sdk",children:["klaster-sdk",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#klaster-sdk",children:e.jsx(s.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsxs(s.h2,{id:"classes",children:["Classes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#classes",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"encodingservice",children:["EncodingService",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodingservice",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"A service for encoding user operations (UserOps) for Smart Contract Accounts in the Klaster ecosystem."}),`
`,e.jsx(s.p,{children:`This service provides methods to encode single and batch transactions into UserOps
that can be processed by the Klaster Node. It intelligently chooses between single
and batch encoding to optimize for gas efficiency and ensure atomic execution of
multiple transactions when needed.`}),`
`,e.jsxs(s.h4,{id:"constructors",children:["Constructors",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#constructors",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"new-encodingservice",children:["new EncodingService()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#new-encodingservice",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"new EncodingService"}),"(): ",e.jsx(s.a,{href:"README.md#encodingservice",children:e.jsx(s.code,{children:"EncodingService"})})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"returns",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#encodingservice",children:e.jsx(s.code,{children:"EncodingService"})})}),`
`,e.jsxs(s.h4,{id:"methods",children:["Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"encodebatchcall",children:["encodeBatchCall()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodebatchcall",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"static"})," ",e.jsx(s.strong,{children:"encodeBatchCall"}),"(",e.jsx(s.code,{children:"txs"}),", ",e.jsx(s.code,{children:"chainId"}),", ",e.jsx(s.code,{children:"masterWallet"}),", ",e.jsx(s.code,{children:"salt"}),"): ",e.jsx(s.a,{href:"README.md#apiuserop",children:e.jsx(s.code,{children:"ApiUserOp"})})]}),`
`]}),`
`,e.jsx(s.p,{children:"Encodes multiple transactions into a single UserOp for batch execution on a Smart Contract Account."}),`
`,e.jsx(s.p,{children:`This method prepares a UserOp that, when executed, will call the 'executeBatch' function
on the Smart Contract Account, allowing multiple transactions to be executed atomically.
This can lead to significant gas savings compared to executing transactions individually.`}),`
`,e.jsxs(s.h6,{id:"parameters",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"txs"}),": ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})}),"[]"]}),`
`,e.jsx(s.p,{children:"An array of transactions to be encoded for batch execution."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The ID of the blockchain where the transactions will be executed."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"masterWallet"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:"The address of the master wallet from which the Smart Contract Account is derived."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.p,{children:"A unique value used in conjunction with the masterWallet to derive the Smart Contract Account address."}),`
`,e.jsxs(s.h6,{id:"returns-1",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#apiuserop",children:e.jsx(s.code,{children:"ApiUserOp"})})}),`
`,e.jsx(s.p,{children:"A UserOp object representing the batch execution, which can be sent to the Klaster Node for quoting and execution."}),`
`,e.jsxs(s.h6,{id:"example",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOp"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" EncodingService."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeBatchCall"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ["})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    { to: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", value: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", data: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", gasLimit: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"21000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    { to: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", value: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", data: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", gasLimit: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"50000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ],"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  '0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'uniqueSalt'"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,e.jsxs(s.h6,{id:"defined-in",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/encoding.service.ts#L80",children:"utils/encoding.service.ts:80"})}),`
`,e.jsxs(s.h5,{id:"encodeuseropcall",children:["encodeUserOpCall()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodeuseropcall",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"static"})," ",e.jsx(s.strong,{children:"encodeUserOpCall"}),"(",e.jsx(s.code,{children:"tx"}),", ",e.jsx(s.code,{children:"chainId"}),", ",e.jsx(s.code,{children:"masterWallet"}),", ",e.jsx(s.code,{children:"salt"}),"): ",e.jsx(s.a,{href:"README.md#apiuserop",children:e.jsx(s.code,{children:"ApiUserOp"})})]}),`
`]}),`
`,e.jsx(s.p,{children:"Encodes a single transaction into a UserOp for execution on a Smart Contract Account."}),`
`,e.jsx(s.p,{children:`This method prepares a UserOp that, when executed, will call the 'execute' function
on the Smart Contract Account derived from the provided masterWallet and salt.`}),`
`,e.jsxs(s.h6,{id:"parameters-1",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"tx"}),": ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})})]}),`
`,e.jsx(s.p,{children:"The transaction to be encoded."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The ID of the blockchain where the transaction will be executed."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"masterWallet"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:"The address of the master wallet from which the Smart Contract Account is derived."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.p,{children:"A unique value used in conjunction with the masterWallet to derive the Smart Contract Account address."}),`
`,e.jsxs(s.h6,{id:"returns-2",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#apiuserop",children:e.jsx(s.code,{children:"ApiUserOp"})})}),`
`,e.jsx(s.p,{children:"A UserOp object that can be sent to the Klaster Node for quoting and execution."}),`
`,e.jsxs(s.h6,{id:"example-1",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" userOp"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" EncodingService."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeUserOpCall"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { to: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", value: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", data: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", gasLimit: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"21000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  '0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"  'uniqueSalt'"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})})]})}),`
`,e.jsxs(s.h6,{id:"defined-in-1",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/encoding.service.ts#L35",children:"utils/encoding.service.ts:35"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"klastersdk",children:["KlasterSDK",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#klastersdk",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`KlasterSDK creates an instance of the SDK used to communicate with
the Klaster protocol. It offers typed information for all the types
used to communicate with the protocol, as well as utility functions
for encoding tokens, transactions and accounts.`}),`
`,e.jsxs(s.h4,{id:"constructors-1",children:["Constructors",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#constructors-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"new-klastersdk",children:["new KlasterSDK()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#new-klastersdk",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"new KlasterSDK"}),"(",e.jsx(s.code,{children:"config"}),"): ",e.jsx(s.a,{href:"README.md#klastersdk",children:e.jsx(s.code,{children:"KlasterSDK"})})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"parameters-2",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"config"}),": ",e.jsx(s.a,{href:"README.md#config",children:e.jsx(s.code,{children:"Config"})})]}),`
`,e.jsxs(s.h6,{id:"returns-3",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#klastersdk",children:e.jsx(s.code,{children:"KlasterSDK"})})}),`
`,e.jsxs(s.h6,{id:"defined-in-2",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L78",children:"index.ts:78"})}),`
`,e.jsxs(s.h4,{id:"properties",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"activeaccountsalt",children:["activeAccountSalt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#activeaccountsalt",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"activeAccountSalt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-3",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L74",children:"index.ts:74"})}),`
`,e.jsxs(s.h5,{id:"masteraddress",children:["masterAddress",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#masteraddress",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"masterAddress"}),": `0x${string}`"]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-4",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L76",children:"index.ts:76"})}),`
`,e.jsxs(s.h4,{id:"methods-1",children:["Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"autoexecute",children:["autoExecute()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#autoexecute",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"autoExecute"}),"(",e.jsx(s.code,{children:"itx"}),", ",e.jsx(s.code,{children:"signHash"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#executeresponse",children:e.jsx(s.code,{children:"ExecuteResponse"})}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Automatically fetches a quote and executes the Interchain Transaction (iTx)."}),`
`,e.jsx(s.p,{children:`This function streamlines the process of executing an iTx by combining the quote
fetching and execution steps. It automatically handles the flow of getting a quote,
signing the iTx hash, and executing the transaction.`}),`
`,e.jsxs(s.h6,{id:"parameters-3",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"itx"}),": ",e.jsx(s.a,{href:"README.md#interchaintransaction",children:e.jsx(s.code,{children:"InterchainTransaction"})})]}),`
`,e.jsx(s.p,{children:`The interchain transaction object containing
the transactions you wish to execute. This should include all necessary
information for the iTx, such as actions and payment details.`}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"signHash"})]}),`
`,e.jsx(s.p,{children:`A function to sign the iTx hash with a private key.
This function should take a hash string (prefixed with '0x') and return
a Promise resolving to the signed hash string.`}),`
`,e.jsxs(s.h6,{id:"returns-4",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#executeresponse",children:e.jsx(s.code,{children:"ExecuteResponse"})}),">"]}),`
`,e.jsx(s.p,{children:`A promise that resolves to an ExecuteResponse object,
containing the iTx hash of the executed transaction.`}),`
`,e.jsxs(s.h6,{id:"async",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"throws",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`May throw errors during the quote fetching, signing, or execution phases.
These could include network errors, signing failures, or execution issues.`}),`
`,e.jsxs(s.h6,{id:"example-2",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" itx"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  actions: ["}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"],  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Array of actions to be executed"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  paymentInfo: "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // Payment information"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" signHash"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"hash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Implement your signing logic here"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" signedHash;"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" result"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"autoExecute"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(itx, signHash);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'iTx executed successfully. Hash:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", result.iTxHash);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'AutoExecute failed:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h6,{id:"remarks",children:["Remarks",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#remarks",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:`The signHash function must return a properly signed hash. Ensure you're using
the correct signing method (e.g., personalSign) to avoid execution errors.`}),`
`,e.jsx(s.li,{children:`This function abstracts away the separate steps of quoting and executing,
making it more convenient for straightforward iTx executions.`}),`
`]}),`
`,e.jsxs(s.h6,{id:"see",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#getquote",children:"getQuote"})," - Used internally to fetch the quote."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#execute",children:"execute"})," - Used internally to execute the transaction."]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-5",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L397",children:"index.ts:397"})}),`
`,e.jsxs(s.h5,{id:"changeaccountsalt",children:["changeAccountSalt()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#changeaccountsalt",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"changeAccountSalt"}),"(",e.jsx(s.code,{children:"salt"}),"): ",e.jsx(s.code,{children:"void"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Changes the salt value used for deriving ERC4337 multichain smart accounts."}),`
`,e.jsxs(s.p,{children:["This function updates the ",e.jsx(s.code,{children:"activeAccountSalt"}),` parameter of the SDK instance. The salt,
in combination with the connected Externally Owned Account (EOA), is used to
deterministically derive ERC4337 compliant multichain smart contract accounts.
Changing this salt will result in deriving a different smart contract account
for all subsequent operations.`]}),`
`,e.jsxs(s.h6,{id:"parameters-4",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.p,{children:`The new salt value to be used for account derivation.
This should be a unique string that, when combined with
the EOA address, produces a unique smart account address.`}),`
`,e.jsxs(s.h6,{id:"returns-5",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"void"})}),`
`,e.jsxs(s.h6,{id:"example-3",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Assuming 'klasterSDK' is an initialized instance of the Klaster SDK"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"changeAccountSalt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'uniqueSaltValue123'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,e.jsxs(s.h6,{id:"note",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Changing the account salt will affect all future account derivations and operations.
It does not affect previously derived accounts or ongoing transactions. Ensure you understand
the implications of changing this salt in the context of your application.`}),`
`,e.jsxs(s.h6,{id:"see-1",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`For more information on ERC4337 and account abstraction, visit:
`,e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-4337%7CEIP-4337:",children:"Account Abstraction"})]}),`
`,e.jsxs(s.h6,{id:"defined-in-6",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L136",children:"index.ts:136"})}),`
`,e.jsxs(s.h5,{id:"changemasteraddress",children:["changeMasterAddress()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#changemasteraddress",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"changeMasterAddress"}),"(",e.jsx(s.code,{children:"wallet"}),"): ",e.jsx(s.code,{children:"void"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Changes the master wallet address used for deriving ERC4337 multichain smart accounts."}),`
`,e.jsxs(s.p,{children:["This function updates the ",e.jsx(s.code,{children:"masterAddress"}),` parameter of the SDK instance. The master address,
in combination with a salt value, is used to deterministically derive ERC4337 compliant
multichain smart contract accounts. Changing this address will result in deriving
different smart contract accounts for all subsequent operations.`]}),`
`,e.jsxs(s.h6,{id:"parameters-5",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"wallet"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:`The new master wallet address to be used for account derivation.
This should be a valid Ethereum address.`}),`
`,e.jsxs(s.h6,{id:"returns-6",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"void"})}),`
`,e.jsxs(s.h6,{id:"throws-1",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"May throw an error if the provided address is invalid."}),`
`,e.jsxs(s.h6,{id:"example-4",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Assuming 'klasterSDK' is an initialized instance of the Klaster SDK"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"changeMasterAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x742d35Cc6634C0532925a3b844Bc454e4438f44e'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})]})}),`
`,e.jsxs(s.h6,{id:"note-1",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Changing the master address will affect all future account derivations and operations.
It does not affect previously derived accounts or ongoing transactions. Ensure you understand
the implications of changing this address in the context of your application.`}),`
`,e.jsxs(s.h6,{id:"see-2",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[`For more information on ERC4337 and account abstraction, visit:
`,e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-4337%7CEIP-4337:",children:"Account Abstraction"})]}),`
`,e.jsxs(s.h6,{id:"defined-in-7",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L107",children:"index.ts:107"})}),`
`,e.jsxs(s.h5,{id:"encodetxfee",children:["encodeTxFee()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodetxfee",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"encodeTxFee"}),"(",e.jsx(s.code,{children:"paymentToken"}),", ",e.jsx(s.code,{children:"chainId"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#apipaymentdata",children:e.jsx(s.code,{children:"ApiPaymentData"})}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"A helper function that prepares an ApiPaymentData object for transaction fee payments."}),`
`,e.jsx(s.p,{children:`This asynchronous function simplifies the process of creating an ApiPaymentData object,
which is used to specify how transaction fees should be paid on the Klaster Protocol.
It combines information from the multichain account, the current SDK configuration,
and the specified payment token to create a complete payment data structure.`}),`
`,e.jsxs(s.h6,{id:"parameters-6",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"paymentToken"}),": ",e.jsx(s.a,{href:"README.md#paymenttokensymbol",children:e.jsx(s.code,{children:"PaymentTokenSymbol"})})]}),`
`,e.jsx(s.p,{children:`A string representing the symbol of the token being used for
payments. e.g. ETH, USDC, MATIC, WSTETH, ...`}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The chainId of the chain on which you wish to execute the payment."}),`
`,e.jsxs(s.h6,{id:"returns-7",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#apipaymentdata",children:e.jsx(s.code,{children:"ApiPaymentData"})}),">"]}),`
`,e.jsx(s.p,{children:"A promise that resolves to an ApiPaymentData object containing:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"chainId: The chain ID where the payment will be processed"}),`
`,e.jsx(s.li,{children:"masterWallet: The address of the master wallet used in the SDK."}),`
`,e.jsx(s.li,{children:"salt: The salt used for deriving the multichain account."}),`
`,e.jsx(s.li,{children:"token: The address of the token to be used for payment."}),`
`]}),`
`,e.jsxs(s.h6,{id:"async-1",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"throws-2",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"May throw an error if:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"There's an issue retrieving the multichain account."}),`
`,e.jsx(s.li,{children:"The specified payment token is not found or invalid."}),`
`,e.jsx(s.li,{children:"Any other unexpected error occurs during the process."}),`
`]}),`
`,e.jsxs(s.h6,{id:"example-5",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Assuming 'klasterSDK' is an initialized instance of the Klaster SDK"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" paymentData"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"encodeTxFee"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'USDC'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", optimism.id);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Payment data:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", paymentData);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Failed to encode transaction fee:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h6,{id:"note-2",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`This function uses the current state of the SDK, including the master wallet address.
Make sure these are set correctly before calling this function.`}),`
`,e.jsxs(s.h6,{id:"see-3",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#getmultichainaccount",children:"getMultichainAccount"})," - Used internally to fetch the current multichain account."]}),`
`,e.jsx(s.li,{children:"getPaymentToken - Used internally to resolve the token address from the ChainTokenPair."}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-8",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L227",children:"index.ts:227"})}),`
`,e.jsxs(s.h5,{id:"execute",children:["execute()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#execute",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"execute"}),"(",e.jsx(s.code,{children:"response"}),", ",e.jsx(s.code,{children:"signedHash"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#executeresponse",children:e.jsx(s.code,{children:"ExecuteResponse"})}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Executes the Interchain Transaction (iTx) based on a quote response and signed hash."}),`
`,e.jsx(s.p,{children:`This function triggers the execution of an iTx on the Klaster network. Once called
with a valid signed hash, the execution becomes irreversible.`}),`
`,e.jsxs(s.h6,{id:"parameters-7",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"response"}),": ",e.jsx(s.a,{href:"README.md#quoteresponse",children:e.jsx(s.code,{children:"QuoteResponse"})})]}),`
`,e.jsxs(s.p,{children:["The response object returned from calling the ",e.jsx(s.code,{children:"quote"}),`
endpoint. This contains necessary information for execution.`]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"signedHash"}),": ",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.p,{children:"The iTx hash, signed by the wallet using the personalSign method."}),`
`,e.jsxs(s.h6,{id:"returns-8",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#executeresponse",children:e.jsx(s.code,{children:"ExecuteResponse"})}),">"]}),`
`,e.jsx(s.p,{children:`A promise that resolves to an ExecuteResponse object
containing the iTx hash of the executed transaction.`}),`
`,e.jsxs(s.h6,{id:"async-2",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"throws-3",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`May throw an error if the execution fails, if the signed hash is invalid,
or if there are network issues.`}),`
`,e.jsxs(s.h6,{id:"remarks-1",children:["Remarks",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#remarks-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`IMPORTANT: The hash must be signed using the personalSign method.
If you encounter an "invalid merkle hash" error, ensure you're using the correct
signing method. Some libraries may default to a different signing scheme.`}),`
`,e.jsxs(s.h6,{id:"example-6",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" quoteResponse"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getQuote"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signedHash"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" wallet."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"personalSign"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(quoteResponse.hash);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" executeResponse"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"execute"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(quoteResponse, signedHash);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Execution successful. iTx hash:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", executeResponse.iTxHash);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Execution failed:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h6,{id:"see-4",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#getquote",children:"getQuote"})," - Used to obtain the necessary QuoteResponse."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"https://eips.ethereum.org/EIPS/eip-191",children:"https://eips.ethereum.org/EIPS/eip-191"})," - EIP-191 for signed data standard."]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-9",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L342",children:"index.ts:342"})}),`
`,e.jsxs(s.h5,{id:"getmultichainaccount",children:["getMultichainAccount()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getmultichainaccount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"getMultichainAccount"}),"(): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#multichainaccount",children:e.jsx(s.code,{children:"MultichainAccount"})}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Fetches the multichain ERC4337 account derived from the current masterWallet and salt."}),`
`,e.jsxs(s.p,{children:[`This asynchronous function retrieves the multichain smart contract account that is
deterministically derived using the `,e.jsx(s.code,{children:"masterWallet"})," and ",e.jsx(s.code,{children:"salt"}),` parameters set during
SDK initialization or subsequently updated.`]}),`
`,e.jsx(s.p,{children:`The derived account is compliant with the ERC4337 standard for account abstraction
and can be used across multiple blockchain networks.`}),`
`,e.jsxs(s.h6,{id:"returns-9",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#multichainaccount",children:e.jsx(s.code,{children:"MultichainAccount"})}),">"]}),`
`,e.jsx(s.p,{children:`A promise that resolves to a MultichainAccount object.
The object contains:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"salt: The current active account salt used for derivation."}),`
`,e.jsx(s.li,{children:"address: The derived multichain smart contract account address."}),`
`]}),`
`,e.jsxs(s.h6,{id:"async-3",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"throws-4",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`May throw an error if there's an issue communicating with the node service
or if the account derivation fails.`}),`
`,e.jsxs(s.h6,{id:"example-7",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Assuming 'klasterSDK' is an initialized instance of the Klaster SDK"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" account"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getMultichainAccount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Derived account:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", account.address);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Used salt:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", account.salt);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Failed to fetch multichain account:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h6,{id:"note-3",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["This function uses the current values of ",e.jsx(s.code,{children:"masterWallet"})," and ",e.jsx(s.code,{children:"salt"}),`. If you need
to derive a different account, use `,e.jsx(s.code,{children:"changeMasterAddress()"})," or ",e.jsx(s.code,{children:"changeAccountSalt()"}),`
before calling this function.`]}),`
`,e.jsxs(s.h6,{id:"see-5",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#changemasteraddress",children:"changeMasterAddress"})," - To change the master wallet address."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#changeaccountsalt",children:"changeAccountSalt"})," - To change the account salt."]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-10",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L176",children:"index.ts:176"})}),`
`,e.jsxs(s.h5,{id:"getquote",children:["getQuote()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getquote",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"getQuote"}),"(",e.jsx(s.code,{children:"itx"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#quoteresponse",children:e.jsx(s.code,{children:"QuoteResponse"})}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Fetches a quote for the interchain transaction (iTx)."}),`
`,e.jsx(s.p,{children:`This asynchronous function processes an InterchainTransaction object to obtain a quote
from the Klaster Node. The quote contains the full iTx information as well as the
required payment information for executing the transaction.`}),`
`,e.jsxs(s.h6,{id:"parameters-8",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"itx"}),": ",e.jsx(s.a,{href:"README.md#interchaintransaction",children:e.jsx(s.code,{children:"InterchainTransaction"})})]}),`
`,e.jsx(s.p,{children:`The full Interchain Transaction object. This object
should contain an array of actions and payment information.`}),`
`,e.jsxs(s.h6,{id:"returns-10",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#quoteresponse",children:e.jsx(s.code,{children:"QuoteResponse"})}),">"]}),`
`,e.jsx(s.p,{children:`A promise that resolves to a QuoteResponse object
containing the full iTx information and required payment details.`}),`
`,e.jsxs(s.h6,{id:"async-4",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"throws-5",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Throws an error if the actions array in the iTx is empty."}),`
`,e.jsxs(s.h6,{id:"throws-6",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`May throw errors from the EncodingService or the node service if there
are issues encoding the actions or fetching the quote.`}),`
`,e.jsxs(s.h6,{id:"example-8",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" itx"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  actions: ["})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      txs: [{ to: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", value: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", data: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", gasLimit: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"21000"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"n"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }],"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  ],"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  paymentInfo: { "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" } "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ApiPaymentData object"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" quote"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"getQuote"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(itx);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Received quote:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", quote);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Failed to get quote:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h6,{id:"note-4",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["This function uses the current values of ",e.jsx(s.code,{children:"masterAddress"})," and ",e.jsx(s.code,{children:"activeAccountSalt"}),`
from the SDK instance for encoding user operations.`]}),`
`,e.jsxs(s.h6,{id:"see-6",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#encodeuseropcall",children:"EncodingService.encodeUserOpCall"})," - Used for encoding single transaction actions."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#encodebatchcall",children:"EncodingService.encodeBatchCall"})," - Used for encoding multi-transaction actions."]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-11",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-11",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L282",children:"index.ts:282"})}),`
`,e.jsxs(s.h5,{id:"transferandexecute",children:["transferAndExecute()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#transferandexecute",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"transferAndExecute"}),"(",e.jsx(s.code,{children:"params"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#executeresponse",children:e.jsx(s.code,{children:"ExecuteResponse"})}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:`Transfers ERC20 tokens to the multichain smart contract account and
executes the desired actions across multiple blockchains.`}),`
`,e.jsx(s.p,{children:"This function performs two main operations:"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Transfers ERC20 tokens to the smart contract account."}),`
`,e.jsx(s.li,{children:"Executes an interchain transaction (iTx) after the transfer is confirmed."}),`
`]}),`
`,e.jsxs(s.h6,{id:"parameters-9",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params"})]}),`
`,e.jsx(s.p,{children:"The parameters object containing transfer and execution instructions."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.executeItx"})]}),`
`,e.jsx(s.p,{children:"Instructions for executing the interchain transaction."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.executeItx.iTx"}),": ",e.jsx(s.a,{href:"README.md#interchaintransaction",children:e.jsx(s.code,{children:"InterchainTransaction"})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.executeItx.signItxHashAction"})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.transferToSmartAccount"})]}),`
`,e.jsx(s.p,{children:"Instructions for transferring ERC20 tokens to the smart account."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.transferToSmartAccount.amountToTransfer"}),": ",e.jsx(s.code,{children:"bigint"})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.transferToSmartAccount.chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.transferToSmartAccount.executeTxAction"})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.transferToSmartAccount.tokenToTransfer"}),": `0x${string}`"]}),`
`,e.jsxs(s.h6,{id:"returns-11",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-11",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.a,{href:"README.md#executeresponse",children:e.jsx(s.code,{children:"ExecuteResponse"})}),">"]}),`
`,e.jsx(s.p,{children:"A promise that resolves to the execution response of the iTx."}),`
`,e.jsxs(s.h6,{id:"async-5",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"throws-7",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"May throw errors during the token transfer, quote fetching, signing, or execution phases."}),`
`,e.jsxs(s.h6,{id:"example-9",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" result"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" klasterSDK."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"transferAndExecute"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  transferToSmartAccount: {"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    tokenToTransfer: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:",  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// ERC20 token address"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    amountToTransfer: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BigInt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"),  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Amount in smallest unit"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:",  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Ethereum mainnet"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    executeTxAction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"tx"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"      // Implement your transaction execution logic here"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"      await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" yourProvider."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"sendTransaction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tx);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  },"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  executeItx: {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    iTx: {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"      // Your interchain transaction object"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    },"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"    signItxHashAction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"async"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("}),e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"hash"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"      // Implement your signing logic here"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"      return"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" yourSigner."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"signMessage"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(hash);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,e.jsxs(s.h6,{id:"remarks-2",children:["Remarks",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#remarks-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.code,{children:"executeTxAction"}),` function should handle the actual sending of the transfer transaction to the blockchain.
Consult the Klaster documentation for details on implementing this with your specific provider.`]}),`
`,e.jsxs(s.li,{children:["The ",e.jsx(s.code,{children:"signItxHashAction"}),` function should handle the signing of the iTx hash.
Ensure you're using the correct signing method as specified in the Klaster documentation.`]}),`
`,e.jsx(s.li,{children:"This function will wait for the transfer transaction to be accepted before proceeding with the iTx execution."}),`
`]}),`
`,e.jsxs(s.h6,{id:"see-7",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Klaster documentation for detailed information on implementing ",e.jsx(s.code,{children:"executeTxAction"})," and ",e.jsx(s.code,{children:"signItxHashAction"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#buildtransfererc20fromeoatx",children:"buildTransferERC20FromEoaTx"})," - Used internally to construct the transfer transaction."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#getquote",children:"getQuote"})," - Used internally to fetch the quote for the iTx."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"README.md#execute",children:"execute"})," - Used internally to execute the iTx."]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-12",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-12",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L466",children:"index.ts:466"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"saltutil",children:["SaltUtil",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#saltutil",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Utility class for generating salt values used in KlasterSDK functions."}),`
`,e.jsx(s.p,{children:`Salt values are crucial for deriving unique smart contract accounts within the Klaster ecosystem.
This class provides methods to generate salts for different account scenarios.`}),`
`,e.jsxs(s.h4,{id:"constructors-2",children:["Constructors",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#constructors-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"new-saltutil",children:["new SaltUtil()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#new-saltutil",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"new SaltUtil"}),"(): ",e.jsx(s.a,{href:"README.md#saltutil",children:e.jsx(s.code,{children:"SaltUtil"})})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"returns-12",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-12",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#saltutil",children:e.jsx(s.code,{children:"SaltUtil"})})}),`
`,e.jsxs(s.h4,{id:"methods-2",children:["Methods",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#methods-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"accountat",children:["accountAt()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#accountat",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"static"})," ",e.jsx(s.strong,{children:"accountAt"}),"(",e.jsx(s.code,{children:"i"}),"): ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Generates a salt for an account at a specific index."}),`
`,e.jsx(s.p,{children:"This method allows for deterministic generation of salts for multiple accounts."}),`
`,e.jsxs(s.h6,{id:"parameters-10",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"i"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The index of the account, starting from 0."}),`
`,e.jsxs(s.h6,{id:"returns-13",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-13",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"string"})}),`
`,e.jsx(s.p,{children:"A salt value corresponding to the given index."}),`
`,e.jsxs(s.h6,{id:"example-10",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" thirdAccountSalt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SaltUtil."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"accountAt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"2"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(thirdAccountSalt); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// Outputs: "2"'})]})]})}),`
`,e.jsxs(s.h6,{id:"defined-in-13",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-13",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/salt.service.ts#L33",children:"utils/salt.service.ts:33"})}),`
`,e.jsxs(s.h5,{id:"customaccount",children:["customAccount()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#customaccount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"static"})," ",e.jsx(s.strong,{children:"customAccount"}),"(",e.jsx(s.code,{children:"salt"}),"): ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Allows for the use of a custom salt value."}),`
`,e.jsx(s.p,{children:"This method provides flexibility for users who want to use their own salt values."}),`
`,e.jsxs(s.h6,{id:"parameters-11",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-11",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.p,{children:"A custom salt value."}),`
`,e.jsxs(s.h6,{id:"returns-14",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-14",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"string"})}),`
`,e.jsx(s.p,{children:"The provided custom salt value."}),`
`,e.jsxs(s.h6,{id:"example-11",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-11",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" customSalt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SaltUtil."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"customAccount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"mySuperUniqueValue"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(customSalt); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// Outputs: "mySuperUniqueValue"'})]})]})}),`
`,e.jsxs(s.h6,{id:"remarks-3",children:["Remarks",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#remarks-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`When using custom salts, ensure they are unique to avoid account collisions.
Custom salts should be securely generated and managed to maintain account security.`}),`
`,e.jsxs(s.h6,{id:"defined-in-14",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-14",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/salt.service.ts#L53",children:"utils/salt.service.ts:53"})}),`
`,e.jsxs(s.h5,{id:"firstaccount",children:["firstAccount()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#firstaccount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"static"})," ",e.jsx(s.strong,{children:"firstAccount"}),"(): ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Generates a salt for the first (default) account."}),`
`,e.jsxs(s.h6,{id:"returns-15",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-15",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"string"})}),`
`,e.jsx(s.p,{children:'A salt value of "0", representing the first account.'}),`
`,e.jsxs(s.h6,{id:"example-12",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-12",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" firstAccountSalt"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" SaltUtil."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"firstAccount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(firstAccountSalt); "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'// Outputs: "0"'})]})]})}),`
`,e.jsxs(s.h6,{id:"defined-in-15",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-15",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/salt.service.ts#L17",children:"utils/salt.service.ts:17"})}),`
`,e.jsxs(s.h2,{id:"interfaces",children:["Interfaces",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interfaces",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"apipaymentdata",children:["ApiPaymentData",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apipaymentdata",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the payment data structure for gas costs and transaction fees in the Klaster API.
This interface defines the necessary information for processing payments related to
user operations on the Klaster network.`}),`
`,e.jsx(s.p,{children:"ApiPaymentData"}),`
`,e.jsxs(s.h4,{id:"properties-1",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"chainid",children:["chainId",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The ID of the blockchain network on which the payment for
the gas cost and transaction fees will be processed. This determines the specific
blockchain where the payment transaction will occur.`}),`
`,e.jsxs(s.h6,{id:"defined-in-16",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-16",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L52",children:"types.ts:52"})}),`
`,e.jsxs(s.h5,{id:"masterwallet",children:["masterWallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#masterwallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"masterWallet"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:`The address of the Externally Owned Account (EOA) from which
the Klaster Multichain Smart Account is derived.`}),`
`,e.jsxs(s.h6,{id:"defined-in-17",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-17",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L49",children:"types.ts:49"})}),`
`,e.jsxs(s.h5,{id:"salt",children:["salt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#salt",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`A unique value used in conjunction with the masterWallet address
to calculate the Klaster Multichain Smart Account address. This ensures unique account
addresses for the same EOA.`}),`
`,e.jsxs(s.h6,{id:"defined-in-18",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-18",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L50",children:"types.ts:50"})}),`
`,e.jsxs(s.h5,{id:"token",children:["token",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#token",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"token"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The address of the ERC20 token that will be used to pay for
the gas cost and transaction fees associated with the user operation.`}),`
`,e.jsxs(s.h6,{id:"defined-in-19",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-19",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L51",children:"types.ts:51"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"apiuserop",children:["ApiUserOp",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#apiuserop",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the user operation format expected as input by the Klaster Node API.
This interface defines the structure for ERC-4337 compliant user operations
specifically tailored for Klaster Multichain Smart Accounts.`}),`
`,e.jsx(s.p,{children:"ApiUserOp"}),`
`,e.jsxs(s.h4,{id:"properties-2",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"calldata",children:["callData",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#calldata",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"callData"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The encoded function call data to be executed on the blockchain.
This represents the actual operation the user wants to perform.`}),`
`,e.jsxs(s.h6,{id:"defined-in-20",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-20",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L25",children:"types.ts:25"})}),`
`,e.jsxs(s.h5,{id:"callgaslimit",children:["callGasLimit",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#callgaslimit",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"callGasLimit"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The maximum amount of gas that can be used for the execution
of the callData on the target blockchain. This is part of the ERC-4337 specification for
account abstraction.`}),`
`,e.jsxs(s.h6,{id:"defined-in-21",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-21",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L26",children:"types.ts:26"})}),`
`,e.jsxs(s.h5,{id:"chainid-1",children:["chainId",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The ID of the blockchain network where the UserOp is to be executed.
This determines which network the operation will be sent to.`}),`
`,e.jsxs(s.h6,{id:"defined-in-22",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-22",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L27",children:"types.ts:27"})}),`
`,e.jsxs(s.h5,{id:"masterwallet-1",children:["masterWallet",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#masterwallet-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"masterWallet"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:`The address of the Externally Owned Account (EOA) from which
the Klaster Multichain Smart Account is derived.`}),`
`,e.jsxs(s.h6,{id:"defined-in-23",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-23",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L23",children:"types.ts:23"})}),`
`,e.jsxs(s.h5,{id:"salt-1",children:["salt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#salt-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`A unique value used in conjunction with the masterWallet address
to calculate the Klaster Multichain Smart Account address. This ensures unique account
addresses for the same EOA.`}),`
`,e.jsxs(s.h6,{id:"defined-in-24",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-24",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L24",children:"types.ts:24"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"erc4337userop",children:["ERC4337UserOp",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#erc4337userop",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the full ERC-4337 UserOperation standard object format.
This interface defines the structure of a user operation as specified in the ERC-4337 standard
for account abstraction in Ethereum.`}),`
`,e.jsx(s.p,{children:"ERC4337UserOp"}),`
`,e.jsxs(s.h4,{id:"properties-3",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"calldata-1",children:["callData",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#calldata-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"callData"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The data to be passed to the sender during the main execution call."}),`
`,e.jsxs(s.h6,{id:"defined-in-25",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-25",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L77",children:"types.ts:77"})}),`
`,e.jsxs(s.h5,{id:"callgaslimit-1",children:["callGasLimit",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#callgaslimit-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"callGasLimit"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The gas limit for the main execution call."}),`
`,e.jsxs(s.h6,{id:"defined-in-26",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-26",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L78",children:"types.ts:78"})}),`
`,e.jsxs(s.h5,{id:"initcode",children:["initCode",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initcode",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"initCode"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The initialization code for the account if it hasn't been deployed yet. Empty string if the account is already deployed."}),`
`,e.jsxs(s.h6,{id:"defined-in-27",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-27",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L76",children:"types.ts:76"})}),`
`,e.jsxs(s.h5,{id:"maxfeepergas",children:["maxFeePerGas",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#maxfeepergas",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"maxFeePerGas"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The maximum total fee per gas the sender is willing to pay (including the priority fee)."}),`
`,e.jsxs(s.h6,{id:"defined-in-28",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-28",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L81",children:"types.ts:81"})}),`
`,e.jsxs(s.h5,{id:"maxpriorityfeepergas",children:["maxPriorityFeePerGas",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#maxpriorityfeepergas",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"maxPriorityFeePerGas"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The maximum priority fee per gas the sender is willing to pay."}),`
`,e.jsxs(s.h6,{id:"defined-in-29",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-29",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L82",children:"types.ts:82"})}),`
`,e.jsxs(s.h5,{id:"nonce",children:["nonce",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nonce",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"nonce"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"A unique identifier to prevent replay attacks, typically managed by the account itself."}),`
`,e.jsxs(s.h6,{id:"defined-in-30",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-30",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L75",children:"types.ts:75"})}),`
`,e.jsxs(s.h5,{id:"paymasteranddata",children:["paymasterAndData",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymasteranddata",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"paymasterAndData"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The address of the paymaster sponsoring the transaction, followed by extra data to send to the paymaster. Empty string if there's no paymaster."}),`
`,e.jsxs(s.h6,{id:"defined-in-31",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-31",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L83",children:"types.ts:83"})}),`
`,e.jsxs(s.h5,{id:"preverificationgas",children:["preVerificationGas",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#preverificationgas",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"preVerificationGas"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The amount of gas to compensate the bundler for pre-verification execution and calldata."}),`
`,e.jsxs(s.h6,{id:"defined-in-32",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-32",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L80",children:"types.ts:80"})}),`
`,e.jsxs(s.h5,{id:"sender",children:["sender",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#sender",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"sender"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:"The address of the smart contract account that will make the transaction."}),`
`,e.jsxs(s.h6,{id:"defined-in-33",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-33",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L74",children:"types.ts:74"})}),`
`,e.jsxs(s.h5,{id:"signature",children:["signature",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signature",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"signature"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The signature over the entire UserOperation, to be validated during verification."}),`
`,e.jsxs(s.h6,{id:"defined-in-34",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-34",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L84",children:"types.ts:84"})}),`
`,e.jsxs(s.h5,{id:"verificationgaslimit",children:["verificationGasLimit",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#verificationgaslimit",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"verificationGasLimit"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The gas limit for the verification step."}),`
`,e.jsxs(s.h6,{id:"defined-in-35",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-35",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L79",children:"types.ts:79"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"executeresponse",children:["ExecuteResponse",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#executeresponse",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the response model returned by the /execute route of the Klaster Node API.
This interface encapsulates the result of initiating the execution of an interchain transaction.`}),`
`,e.jsx(s.p,{children:"ExecuteResponse"}),`
`,e.jsxs(s.h4,{id:"properties-4",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"itxhash",children:["iTxHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itxhash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"iTxHash"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The hash of the Klaster Interchain Transaction (iTx) that has been
submitted for execution. This hash serves as a unique identifier for the interchain transaction
and can be used to track or reference the transaction's status and outcome across multiple chains.`}),`
`,e.jsxs(s.h6,{id:"defined-in-36",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-36",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L154",children:"types.ts:154"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"executedaction",children:["ExecutedAction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#executedaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the model returned by the Klaster Node API after an Action has been executed.
This interface provides detailed information about the execution status and parameters
of a user operation processed by Klaster.`}),`
`,e.jsx(s.p,{children:"ExecutedAction"}),`
`,e.jsxs(s.h4,{id:"properties-5",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"chainid-2",children:["chainId",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The identifier of the blockchain network on which the userOp is executed."}),`
`,e.jsxs(s.h6,{id:"defined-in-37",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-37",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L112",children:"types.ts:112"})}),`
`,e.jsxs(s.h5,{id:"executiondata",children:["executionData",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#executiondata",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"executionData"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The callData of the executed action, representing the actual operation performed."}),`
`,e.jsxs(s.h6,{id:"defined-in-38",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-38",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L115",children:"types.ts:115"})}),`
`,e.jsxs(s.h5,{id:"executionstatus",children:["executionStatus",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#executionstatus",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"executionStatus"}),": ",e.jsx(s.code,{children:'"SUCCESS"'})," | ",e.jsx(s.code,{children:'"PENDING"'})," | ",e.jsx(s.code,{children:'"FAILED"'})]}),`
`]}),`
`,e.jsx(s.p,{children:"The current status of the UserOp execution:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:'"SUCCESS": The operation was successfully executed.'}),`
`,e.jsx(s.li,{children:'"FAILED": The operation failed during execution.'}),`
`,e.jsx(s.li,{children:`"PENDING": The Klaster node is waiting for conditions to be met before execution.
This status is part of the Klaster spec and is particularly relevant for multichain actions
where execution conditions on the destination chain may depend on prior token bridging.`}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-39",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-39",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L114",children:"types.ts:114"})}),`
`,e.jsxs(s.h5,{id:"lowerboundtimestap",children:["lowerBoundTimestap",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lowerboundtimestap",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"lowerBoundTimestap"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The earliest timestamp at which the userOp will be executed on the target blockchain."}),`
`,e.jsxs(s.h6,{id:"defined-in-40",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-40",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L110",children:"types.ts:110"})}),`
`,e.jsxs(s.h5,{id:"maxgaslimit",children:["maxGasLimit",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#maxgaslimit",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"maxGasLimit"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The maximum gas limit allowed for the execution of this userOp."}),`
`,e.jsxs(s.h6,{id:"defined-in-41",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-41",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L113",children:"types.ts:113"})}),`
`,e.jsxs(s.h5,{id:"upperboundtimestamp",children:["upperBoundTimestamp",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upperboundtimestamp",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"upperBoundTimestamp"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The latest timestamp by which the userOp will be executed on the target blockchain."}),`
`,e.jsxs(s.h6,{id:"defined-in-42",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-42",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L111",children:"types.ts:111"})}),`
`,e.jsxs(s.h5,{id:"userop",children:["userOp",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#userop",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"userOp"}),": ",e.jsx(s.a,{href:"README.md#erc4337userop",children:e.jsx(s.code,{children:"ERC4337UserOp"})})]}),`
`]}),`
`,e.jsx(s.p,{children:"The full ERC-4337 UserOperation object that was executed."}),`
`,e.jsxs(s.h6,{id:"defined-in-43",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-43",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L108",children:"types.ts:108"})}),`
`,e.jsxs(s.h5,{id:"userophash",children:["userOpHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#userophash",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"userOpHash"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The hash of the userOp, serving as a unique identifier for the operation."}),`
`,e.jsxs(s.h6,{id:"defined-in-44",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-44",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L109",children:"types.ts:109"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"itxuserop",children:["ITxUserOp",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itxuserop",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the minimal UserOperation required for a fully described Klaster Interchain Transaction model.
This interface defines the structure for actions that can be performed on a single chain within
a Klaster Interchain Transaction.`}),`
`,e.jsx(s.p,{children:"ITxUserOp"}),`
`,e.jsxs(s.h4,{id:"properties-6",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"chainid-3",children:["chainId",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid-3",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsx(s.p,{children:"The identifier of the blockchain network on which the transaction(s) will be executed."}),`
`,e.jsxs(s.h6,{id:"defined-in-45",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-45",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L212",children:"types.ts:212"})}),`
`,e.jsxs(s.h5,{id:"lowerboundtime",children:["lowerBoundTime?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#lowerboundtime",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"optional"})," ",e.jsx(s.strong,{children:"lowerBoundTime"}),": ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Optional. The earliest timestamp at which the transaction(s) can be executed."}),`
`,e.jsxs(s.h6,{id:"defined-in-46",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-46",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L214",children:"types.ts:214"})}),`
`,e.jsxs(s.h5,{id:"txs",children:["txs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#txs",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"txs"}),": ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})}),"[]"]}),`
`]}),`
`,e.jsx(s.p,{children:"An array of raw transactions to be executed on the specified chain."}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"If this array contains a single transaction, the 'execute' function will be called on the smart contract account."}),`
`,e.jsx(s.li,{children:"If this array contains multiple transactions, the 'batchExecute' function will be called on the smart contract account."}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-47",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-47",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L211",children:"types.ts:211"})}),`
`,e.jsxs(s.h5,{id:"upperboundtime",children:["upperBoundTime?",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#upperboundtime",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"optional"})," ",e.jsx(s.strong,{children:"upperBoundTime"}),": ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Optional. The latest timestamp by which the transaction(s) should be executed."}),`
`,e.jsxs(s.h6,{id:"defined-in-48",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-48",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L213",children:"types.ts:213"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"interchaintransaction",children:["InterchainTransaction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#interchaintransaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"properties-7",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-7",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"actions",children:["actions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#actions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"actions"}),": ",e.jsx(s.a,{href:"README.md#itxuserop",children:e.jsx(s.code,{children:"ITxUserOp"})}),"[]"]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-49",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-49",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L193",children:"types.ts:193"})}),`
`,e.jsxs(s.h5,{id:"paymentinfo",children:["paymentInfo",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymentinfo",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"paymentInfo"}),": ",e.jsx(s.a,{href:"README.md#apipaymentdata",children:e.jsx(s.code,{children:"ApiPaymentData"})})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-50",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-50",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L194",children:"types.ts:194"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"itxstatusresponse",children:["ItxStatusResponse",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itxstatusresponse",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the response model returned by the /explorer route of the Klaster Node API.
This interface provides detailed information about the status and execution details of an interchain transaction.`}),`
`,e.jsx(s.p,{children:"ItxStatusResponse"}),`
`,e.jsxs(s.h4,{id:"properties-8",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"commitment",children:["commitment",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#commitment",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"commitment"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The cryptographic commitment generated by the Klaster node, guaranteeing
the execution of the interchain transaction.`}),`
`,e.jsxs(s.h6,{id:"defined-in-51",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-51",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L183",children:"types.ts:183"})}),`
`,e.jsxs(s.h5,{id:"itxhash-1",children:["itxHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itxhash-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"itxHash"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The hash of the Klaster Interchain Transaction (iTx). Serves as a unique identifier
for the interchain transaction.`}),`
`,e.jsxs(s.h6,{id:"defined-in-52",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-52",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L181",children:"types.ts:181"})}),`
`,e.jsxs(s.h5,{id:"node",children:["node",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#node",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"node"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:"The address of the Klaster node that is responsible for executing the interchain transaction."}),`
`,e.jsxs(s.h6,{id:"defined-in-53",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-53",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L182",children:"types.ts:182"})}),`
`,e.jsxs(s.h5,{id:"paymentinfo-1",children:["paymentInfo",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymentinfo-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"paymentInfo"}),": ",e.jsx(s.a,{href:"README.md#apipaymentdata",children:e.jsx(s.code,{children:"ApiPaymentData"})})," & ",e.jsx(s.code,{children:"object"})]}),`
`]}),`
`,e.jsx(s.p,{children:`Contains information about the payment for the transaction, including the token
used and the actual amount quoted for the execution.`}),`
`,e.jsxs(s.h6,{id:"type-declaration",children:["Type declaration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#type-declaration",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h6,{id:"tokenamount",children:["tokenAmount",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tokenamount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"tokenAmount"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"tokenvalue",children:["tokenValue",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#tokenvalue",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"tokenValue"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-54",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-54",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L184",children:"types.ts:184"})}),`
`,e.jsxs(s.h5,{id:"userops",children:["userOps",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#userops",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"userOps"}),": ",e.jsx(s.a,{href:"README.md#executedaction",children:e.jsx(s.code,{children:"ExecutedAction"})}),"[]"]}),`
`]}),`
`,e.jsx(s.p,{children:`An array of ExecutedAction objects, each representing the status and
details of a user operation executed as part of this interchain transaction across different chains.`}),`
`,e.jsxs(s.h6,{id:"defined-in-55",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-55",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L188",children:"types.ts:188"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"multichainaccount",children:["MultichainAccount",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#multichainaccount",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents a Klaster Multichain Smart Contract account model.
This interface defines the essential properties of a smart contract account
that can operate across multiple blockchain networks.`}),`
`,e.jsx(s.p,{children:"MultichainAccount"}),`
`,e.jsxs(s.h4,{id:"properties-9",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"address",children:["address",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#address",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"address"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:`The unique address of the multichain smart contract account.
This address is (mostly) consistent across all supported blockchain networks, allowing
for unified identity and seamless cross-chain operations. Some exceptions to the generated
address being consistent are blockchains in the zkSync ecosystem & any other ecosystem where
the CREATE2 opcode doesn't behave the same way as on Ethereum mainnet.`}),`
`,e.jsxs(s.h6,{id:"defined-in-56",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-56",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L258",children:"types.ts:258"})}),`
`,e.jsxs(s.h5,{id:"salt-2",children:["salt",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#salt-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"salt"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`A unique value used in the account creation process.
The salt, combined with other parameters (such as the owner's address),
ensures that the account address is unique and deterministically generated
across all supported chains.`}),`
`,e.jsxs(s.h6,{id:"defined-in-57",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-57",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L259",children:"types.ts:259"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"quoteresponse",children:["QuoteResponse",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#quoteresponse",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Represents the model returned by the Klaster Node API when a user requests a quote for an interchain transaction.
This interface provides detailed information about the quote, including the transaction hash,
node commitment, and the user operations to be executed across multiple chains.`}),`
`,e.jsx(s.p,{children:"QuoteResponse"}),`
`,e.jsxs(s.h4,{id:"properties-10",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"commitment-1",children:["commitment",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#commitment-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"commitment"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The cryptographic commitment generated by the Klaster node.
This commitment guarantees the execution of the quoted interchain transaction.`}),`
`,e.jsxs(s.h6,{id:"defined-in-58",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-58",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L138",children:"types.ts:138"})}),`
`,e.jsxs(s.h5,{id:"itxhash-2",children:["itxHash",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#itxhash-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"itxHash"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:`The hash of the Klaster Interchain Transaction. This serves
as a unique identifier for the entire interchain operation.`}),`
`,e.jsxs(s.h6,{id:"defined-in-59",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-59",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L137",children:"types.ts:137"})}),`
`,e.jsxs(s.h5,{id:"node-1",children:["node",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#node-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"node"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:`The address of the Klaster node that has returned the quote and
committed itself to executing the interchain transaction.`}),`
`,e.jsxs(s.h6,{id:"defined-in-60",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-60",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L139",children:"types.ts:139"})}),`
`,e.jsxs(s.h5,{id:"paymentinfo-2",children:["paymentInfo",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymentinfo-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"paymentInfo"}),": ",e.jsx(s.a,{href:"README.md#apipaymentdata",children:e.jsx(s.code,{children:"ApiPaymentData"})})]}),`
`]}),`
`,e.jsx(s.p,{children:`Contains information about the payment for the
transaction, including the token to be used and the chain on which the payment will occur.`}),`
`,e.jsxs(s.h6,{id:"defined-in-61",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-61",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L140",children:"types.ts:140"})}),`
`,e.jsxs(s.h5,{id:"userops-1",children:["userOps",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#userops-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"userOps"}),": ",e.jsx(s.a,{href:"README.md#erc4337userop",children:e.jsx(s.code,{children:"ERC4337UserOp"})}),"[]"]}),`
`]}),`
`,e.jsx(s.p,{children:`An array of all UserOperations across all chains that
the node has committed to executing as part of this interchain transaction. Each UserOp
represents a specific action on a particular blockchain within the interchain transaction.`}),`
`,e.jsxs(s.h6,{id:"defined-in-62",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-62",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L141",children:"types.ts:141"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"rawtransaction",children:["RawTransaction",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#rawtransaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["Represents a raw transaction as expected by the ",e.jsx(s.code,{children:"execute"})," and ",e.jsx(s.code,{children:"batchExecute"}),` functions
of smart contract wallets compliant with the ERC-4337 standard.
This interface defines the structure for a single transaction to be executed
as part of a user operation in account abstraction.`]}),`
`,e.jsx(s.p,{children:"RawTransaction"}),`
`,e.jsxs(s.h4,{id:"properties-11",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-11",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"data",children:["data",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#data",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"data"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The input data of the transaction, typically the encoded function
call for contract interactions. For simple value transfers, this can be an empty string.`}),`
`,e.jsxs(s.h6,{id:"defined-in-63",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-63",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L236",children:"types.ts:236"})}),`
`,e.jsxs(s.h5,{id:"gaslimit",children:["gasLimit",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#gaslimit",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"gasLimit"}),": ",e.jsx(s.code,{children:"bigint"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The maximum amount of gas that can be used for executing
this transaction, represented as a bigint. This helps prevent unexpectedly high gas costs.`}),`
`,e.jsxs(s.h6,{id:"defined-in-64",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-64",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L237",children:"types.ts:237"})}),`
`,e.jsxs(s.h5,{id:"to",children:["to",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#to",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"to"}),": `0x${string}`"]}),`
`]}),`
`,e.jsx(s.p,{children:`The recipient address of the transaction. This can be a contract
address for contract interactions or an EOA for simple transfers.`}),`
`,e.jsxs(s.h6,{id:"defined-in-65",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-65",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L234",children:"types.ts:234"})}),`
`,e.jsxs(s.h5,{id:"value",children:["value",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#value",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"value"}),": ",e.jsx(s.code,{children:"bigint"})]}),`
`]}),`
`,e.jsx(s.p,{children:`The amount of native currency (e.g., ETH) to be sent with the
transaction, represented as a bigint. Use 0n for transactions that don't transfer value.`}),`
`,e.jsxs(s.h6,{id:"defined-in-66",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-66",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L235",children:"types.ts:235"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"supportedpaymenttokeninfo",children:["SupportedPaymentTokenInfo",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supportedpaymenttokeninfo",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"properties-12",children:["Properties",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#properties-12",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"node-2",children:["node",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#node-2",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"node"}),": `0x${string}`"]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-67",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-67",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L267",children:"types.ts:267"})}),`
`,e.jsxs(s.h5,{id:"supported_chains",children:["supported_chains",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported_chains",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"supported_chains"}),": ",e.jsx(s.code,{children:"object"}),"[]"]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-68",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-68",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L268",children:"types.ts:268"})}),`
`,e.jsxs(s.h5,{id:"supported_gas_tokens",children:["supported_gas_tokens",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#supported_gas_tokens",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"supported_gas_tokens"}),": ",e.jsx(s.code,{children:"object"}),"[]"]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-69",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-69",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L272",children:"types.ts:272"})}),`
`,e.jsxs(s.h5,{id:"version",children:["version",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#version",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"version"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsxs(s.h6,{id:"defined-in-70",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-70",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/types.ts#L266",children:"types.ts:266"})}),`
`,e.jsxs(s.h2,{id:"type-aliases",children:["Type Aliases",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#type-aliases",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"config",children:["Config",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#config",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"Config"}),": ",e.jsx(s.code,{children:"object"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Configuration options for initializing the Klaster SDK."}),`
`,e.jsxs(s.h4,{id:"type-declaration-1",children:["Type declaration",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#type-declaration-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h5,{id:"masteraddress-1",children:["masterAddress",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#masteraddress-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"masterAddress"}),": ",e.jsx(s.code,{children:"Address"})]}),`
`]}),`
`,e.jsxs(s.h5,{id:"nodeurl",children:["nodeUrl",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#nodeurl",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"nodeUrl"}),": ",e.jsx(s.code,{children:"string"})]}),`
`]}),`
`,e.jsxs(s.h4,{id:"defined-in-71",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-71",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L34",children:"index.ts:34"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"paymenttokensymbol",children:["PaymentTokenSymbol",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#paymenttokensymbol",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"PaymentTokenSymbol"}),": ",e.jsx(s.code,{children:'"ETH"'})," | ",e.jsx(s.code,{children:'"WETH"'})," | ",e.jsx(s.code,{children:'"LINK"'})," | ",e.jsx(s.code,{children:'"USDC"'})," | ",e.jsx(s.code,{children:'"wstETH"'})," | ",e.jsx(s.code,{children:'"USDT"'})," | ",e.jsx(s.code,{children:'"MATIC"'})," | ",e.jsx(s.code,{children:'"WMATIC"'})," | ",e.jsx(s.code,{children:'"stMATIC"'})," | ",e.jsx(s.code,{children:'"AVAX"'})," | ",e.jsx(s.code,{children:'"WAVAX"'})," | ",e.jsx(s.code,{children:'"BNB"'})," | ",e.jsx(s.code,{children:'"WBNB"'})," | ",e.jsx(s.code,{children:'"axlUSDC"'})," | ",e.jsx(s.code,{children:'"crUSDC"'})," | ",e.jsx(s.code,{children:'"BSC-USD"'})]}),`
`]}),`
`,e.jsx(s.p,{children:`Represents the symbol of a payment token supported by the system.
These symbols correspond to various tokens
that can be used for payments across different blockchain networks.`}),`
`,e.jsxs(s.h4,{id:"defined-in-72",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-72",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/token-resolver.service.ts#L88",children:"utils/token-resolver.service.ts:88"})}),`
`,e.jsxs(s.h2,{id:"functions",children:["Functions",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#functions",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h3,{id:"buildtokenstrategy",children:["buildTokenStrategy()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#buildtokenstrategy",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"buildTokenStrategy"}),"(",e.jsx(s.code,{children:"__namedParameters"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"TokenStrategy"}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:`Builds a strategy for using tokens across multiple chains to satisfy a given amount.
Ensures all tokens have the same number of decimals.`}),`
`,e.jsxs(s.h4,{id:"parameters-12",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-12",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"__namedParameters"}),": ",e.jsx(s.code,{children:"BuildTokenStrategyOptions"})]}),`
`,e.jsxs(s.h4,{id:"returns-16",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-16",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"TokenStrategy"}),">"]}),`
`,e.jsx(s.p,{children:"A promise that resolves to either:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"An array of StrategyItem objects, each containing a chainId and an amount to use from that chain."}),`
`,e.jsx(s.li,{children:"null if the total balance across all chains is insufficient to satisfy the requested amount."}),`
`]}),`
`,e.jsxs(s.h4,{id:"throws-8",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Throws an error if:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"There's an issue fetching balances or decimals"}),`
`,e.jsx(s.li,{children:"The token addresses are invalid"}),`
`,e.jsx(s.li,{children:"Tokens across different chains have different numbers of decimals"}),`
`]}),`
`,e.jsxs(s.h4,{id:"example-13",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-13",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tokenMapping"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:",  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// USDC on Optimism"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  8453"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'"}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // USDC on Base"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" chainConfigs"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", rpcUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://mainnet.optimism.io'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"8453"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", rpcUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://mainnet.base.org'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"];"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" strategy"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" buildTokenStrategy"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(tokenMapping, chainConfigs, "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BigInt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"25000"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"ascending"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (strategy) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Strategy found:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", strategy);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:'  // Possible output: [{ chainId: 8453, amount: BigInt("4000") }, { chainId: 10, amount: BigInt("21000") }]'})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"else"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Not enough tokens available across all chains'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h4,{id:"defined-in-73",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-73",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/unified-balance.service.ts#L254",children:"utils/unified-balance.service.ts:254"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"buildtransfererc20fromeoatx",children:["buildTransferERC20FromEoaTx()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#buildtransfererc20fromeoatx",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"buildTransferERC20FromEoaTx"}),"(",e.jsx(s.code,{children:"params"}),"): ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})})]}),`
`]}),`
`,e.jsx(s.p,{children:`Builds a transaction to transfer ERC20 tokens from an Externally Owned Account (EOA)
to another account, typically a smart contract account.`}),`
`,e.jsx(s.p,{children:`This function constructs a RawTransaction object that, when executed, will transfer
the specified amount of ERC20 tokens from the sending EOA to the recipient address.
It's commonly used to fund smart contract accounts with tokens.`}),`
`,e.jsxs(s.h4,{id:"parameters-13",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-13",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params"})]}),`
`,e.jsx(s.p,{children:"The parameters for building the transaction."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.amount"}),": ",e.jsx(s.code,{children:"bigint"})]}),`
`,e.jsx(s.p,{children:"The amount of tokens to transfer, in the token's smallest unit (e.g., wei for ETH-like tokens)."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The ID of the blockchain network where the transaction will be executed."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.recipient"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:"The address of the account receiving the tokens."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.token"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:"The address of the ERC20 token contract."}),`
`,e.jsxs(s.h4,{id:"returns-17",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-17",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})})}),`
`,e.jsx(s.p,{children:`A RawTransaction object ready to be signed and broadcasted.
The object includes:`}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"to: The address of the ERC20 token contract."}),`
`,e.jsx(s.li,{children:"value: Always 0n for ERC20 transfers."}),`
`,e.jsx(s.li,{children:"data: The encoded function call data for the ERC20 'transfer' function."}),`
`,e.jsx(s.li,{children:"gasLimit: A predefined gas limit set to 55000 (adjust if necessary for different tokens or networks)."}),`
`]}),`
`,e.jsxs(s.h4,{id:"example-14",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-14",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" txParams"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  recipient: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x742d35Cc6634C0532925a3b844Bc454e4438f44e'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  amount: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BigInt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1000000"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"), "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// 1 USDC if USDC has 6 decimals"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  token: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'"}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // USDC on Ethereum mainnet"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" rawTx"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" buildTransferERC20FromEoaTx"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(txParams);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// rawTx can now be signed and sent to the network"})})]})}),`
`,e.jsxs(s.h4,{id:"defined-in-74",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-74",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/utils.service.ts#L127",children:"utils/utils.service.ts:127"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"createtokenmapping",children:["createTokenMapping()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#createtokenmapping",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"createTokenMapping"}),"(",e.jsx(s.code,{children:"tokens"}),"): ",e.jsx(s.code,{children:"TokenMapping"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Creates a TokenMapping object from an array of TokenInfo objects."}),`
`,e.jsx(s.p,{children:`This function generates a mapping of chain IDs to token addresses, which is used
in other Klaster SDK functions like getUnifiedBalance. It allows for easy
specification of token addresses across multiple chains.`}),`
`,e.jsxs(s.h4,{id:"parameters-14",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-14",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"tokens"}),": ",e.jsx(s.code,{children:"TokenInfo"}),"[]"]}),`
`,e.jsx(s.p,{children:"An array of TokenInfo objects. Each TokenInfo should contain:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"chain: The chain ID (number) where the token is deployed."}),`
`,e.jsx(s.li,{children:"address: The address (string) of the token contract on the specified chain."}),`
`]}),`
`,e.jsxs(s.h4,{id:"returns-18",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-18",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"TokenMapping"})}),`
`,e.jsx(s.p,{children:"An object where keys are chain IDs and values are token addresses."}),`
`,e.jsxs(s.h4,{id:"throws-9",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Throws an error if duplicate chain IDs are provided in the input array."}),`
`,e.jsxs(s.h4,{id:"example-15",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-15",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createTokenMapping } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'klaster-sdk'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Create a mapping for USDC across multiple chains"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" usdcMapping"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createTokenMapping"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chain: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Ethereum Mainnet"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chain: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }, "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Optimism"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chain: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"137"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x2791bca1f2de4661ed88a30c99a7a9449aa84174'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Polygon"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(usdcMapping);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Output:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// {"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//   1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//   10: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//   137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174'"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// }"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// This mapping can then be used in other SDK functions:"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" balance"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" getUnifiedBalance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  mapping: usdcMapping,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x...'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  chainConfigs: ["}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"});"})})]})}),`
`,e.jsxs(s.h4,{id:"see-8",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-8",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"For using the created mapping, see the documentation for getUnifiedBalance."}),`
`,e.jsxs(s.h4,{id:"defined-in-75",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-75",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/unified-balance.service.ts#L75",children:"utils/unified-balance.service.ts:75"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"encodeaction",children:["encodeAction()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodeaction",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"encodeAction"}),"(",e.jsx(s.code,{children:"txs"}),", ",e.jsx(s.code,{children:"chainId"}),"): ",e.jsx(s.code,{children:"object"})]}),`
`]}),`
`,e.jsx(s.p,{children:"A syntactic helper for creating action objects in the Klaster SDK."}),`
`,e.jsx(s.p,{children:`This function combines an array of RawTransactions with a chain ID into an object.
It's used to provide a consistent coding style when working with actions in the Klaster SDK.`}),`
`,e.jsxs(s.h4,{id:"parameters-15",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-15",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"txs"}),": ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})}),"[]"]}),`
`,e.jsx(s.p,{children:"An array of RawTransaction objects."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The ID of the blockchain for this action."}),`
`,e.jsxs(s.h4,{id:"returns-19",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-19",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"object"})}),`
`,e.jsx(s.p,{children:"An object containing the transactions and chain ID."}),`
`,e.jsxs(s.h5,{id:"chainid-4",children:["chainId",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#chainid-4",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`]}),`
`,e.jsxs(s.h5,{id:"txs-1",children:["txs",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#txs-1",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"txs"}),": ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})}),"[]"]}),`
`]}),`
`,e.jsxs(s.h4,{id:"example-16",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-16",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" action"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" encodeAction"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"([{ "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }, { "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }], "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]})})}),`
`,e.jsxs(s.h4,{id:"defined-in-76",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-76",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/itx.service.ts#L36",children:"utils/itx.service.ts:36"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"encodebridgingdatafromstrategy",children:["encodeBridgingDataFromStrategy()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodebridgingdatafromstrategy",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"encodeBridgingDataFromStrategy"}),"(",e.jsx(s.code,{children:"options"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"object"}),"[]>"]}),`
`]}),`
`,e.jsx(s.p,{children:"Encodes bridging data from a token strategy for multiple chains."}),`
`,e.jsx(s.p,{children:`This function takes a token strategy (typically generated by buildTokenStrategy) and encodes
the necessary data for bridging tokens from multiple source chains to a single destination chain.
It uses the provided encodeSingleBridgeData function to generate the specific bridging data for each chain.`}),`
`,e.jsxs(s.h4,{id:"parameters-16",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-16",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"options"}),": ",e.jsx(s.code,{children:"EncodeBridgingDataFromStrategyOptions"})]}),`
`,e.jsx(s.p,{children:"The options for encoding bridging data."}),`
`,e.jsxs(s.h4,{id:"returns-20",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-20",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"object"}),"[]>"]}),`
`,e.jsx(s.p,{children:`A promise that resolves to an array of RawTransaction objects,
each containing the encoded bridging data for a single chain in the strategy.`}),`
`,e.jsxs(s.h4,{id:"throws-10",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-10",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Throws an error if the strategy is null, indicating no feasible strategy exists,
or if a token address is not found for a chain in the strategy.`}),`
`,e.jsxs(s.h4,{id:"example-17",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-17",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tokenMapping"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:",  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// USDC on Optimism"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"  8453"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:": "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913'"}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:" // USDC on Base"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" strategy"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BigInt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"15000"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") },"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"8453"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", amount: "}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"BigInt"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"5000"'}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"];"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" encodeSingleBridgeData"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" async"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" ("})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  tokenAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  sourceChainId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  destinationChainId"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  amount"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#E36209","--shiki-dark":"#F69D50"},children:"  multichainAddress"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"=>"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Implement your specific bridge encoding logic here"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // This is just a placeholder implementation"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  return"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    to: multichainAddress,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    value: "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    gasLimit: "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"//"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    data: "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Data encoded by your bridge encoding implementation"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  };"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" bridgingData"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" encodeBridgingDataFromStrategy"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    strategy,"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    tokenMapping,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    destinationChainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:",  "}),e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Ethereum mainnet"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    multichainAddress: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x1234567890123456789012345678901234567890'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    encodeSingleBridgeData"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  });"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(bridgingData);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"  // Output will be an array of RawTransaction objects, one for each chain in the strategy"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Error encoding bridging data:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error.message);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h4,{id:"defined-in-77",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-77",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/unified-balance.service.ts#L435",children:"utils/unified-balance.service.ts:435"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"encodeitx",children:["encodeItx()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodeitx",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"encodeItx"}),"(",e.jsx(s.code,{children:"itx"}),"): ",e.jsx(s.a,{href:"README.md#interchaintransaction",children:e.jsx(s.code,{children:"InterchainTransaction"})})]}),`
`]}),`
`,e.jsx(s.p,{children:"A syntactic helper for creating InterchainTransaction objects in the Klaster SDK."}),`
`,e.jsx(s.p,{children:`This function returns its input unchanged. Its purpose is to provide a consistent
coding style when working with the Klaster SDK, allowing for a more fluent and
readable way of creating InterchainTransaction objects.`}),`
`,e.jsxs(s.h4,{id:"parameters-17",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-17",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"itx"}),": ",e.jsx(s.a,{href:"README.md#interchaintransaction",children:e.jsx(s.code,{children:"InterchainTransaction"})})]}),`
`,e.jsx(s.p,{children:'The InterchainTransaction object to be "encoded".'}),`
`,e.jsxs(s.h4,{id:"returns-21",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-21",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#interchaintransaction",children:e.jsx(s.code,{children:"InterchainTransaction"})})}),`
`,e.jsx(s.p,{children:"The same InterchainTransaction object, unchanged."}),`
`,e.jsxs(s.h4,{id:"example-18",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-18",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Instead of:"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// const iTx: InterchainTransaction = { ... };"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Use:"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" iTx"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" encodeItx"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" });"})]})]})}),`
`,e.jsxs(s.h4,{id:"defined-in-78",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-78",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/itx.service.ts#L19",children:"utils/itx.service.ts:19"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"encodetx",children:["encodeTx()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#encodetx",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"encodeTx"}),"(",e.jsx(s.code,{children:"tx"}),"): ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})})]}),`
`]}),`
`,e.jsx(s.p,{children:"A syntactic helper for working with RawTransaction objects in the Klaster SDK."}),`
`,e.jsx(s.p,{children:`This function returns its input unchanged. Its purpose is to provide a consistent
coding style when working with the Klaster SDK, allowing for a more fluent way
of handling RawTransaction objects.`}),`
`,e.jsxs(s.h4,{id:"parameters-18",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-18",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"tx"}),": ",e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})})]}),`
`,e.jsx(s.p,{children:'The RawTransaction object to be "encoded".'}),`
`,e.jsxs(s.h4,{id:"returns-22",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-22",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#rawtransaction",children:e.jsx(s.code,{children:"RawTransaction"})})}),`
`,e.jsx(s.p,{children:"The same RawTransaction object, unchanged."}),`
`,e.jsxs(s.h4,{id:"example-19",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-19",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(s.code,{children:e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" tx"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" encodeTx"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({ "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"..."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" });"})]})})}),`
`,e.jsxs(s.h4,{id:"defined-in-79",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-79",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/itx.service.ts#L53",children:"utils/itx.service.ts:53"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"fetchinjectedaddress",children:["fetchInjectedAddress()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#fetchinjectedaddress",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"fetchInjectedAddress"}),"(): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"Address"})," | ",e.jsx(s.code,{children:"undefined"}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Fetches the primary Ethereum address from an injected web3 wallet provider (e.g., MetaMask)."}),`
`,e.jsx(s.p,{children:`This function creates a wallet client using the viem library and the injected Ethereum provider.
It then retrieves the list of addresses associated with the wallet and returns the first address.`}),`
`,e.jsxs(s.h4,{id:"returns-23",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-23",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"Address"})," | ",e.jsx(s.code,{children:"undefined"}),">"]}),`
`,e.jsx(s.p,{children:"A promise that resolves to:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"The primary Ethereum address (type Address) if available."}),`
`,e.jsx(s.li,{children:"undefined if no addresses are associated with the wallet or if the wallet is locked."}),`
`]}),`
`,e.jsxs(s.h4,{id:"async-6",children:["Async",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#async-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.h4,{id:"function",children:["Function",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#function",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"fetchInjectedAddress"}),`
`,e.jsxs(s.h4,{id:"throws-11",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-11",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Throws an error if:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"No injected Ethereum provider is detected (i.e., window.ethereum is undefined)."}),`
`,e.jsx(s.li,{children:"The user denies permission to access their accounts."}),`
`,e.jsx(s.li,{children:"There's an issue connecting to the Ethereum network."}),`
`]}),`
`,e.jsxs(s.h4,{id:"example-20",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-20",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" fetchInjectedAddress"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  if"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (address) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Connected wallet address:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"else"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'No wallet address found or wallet is locked'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  }"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Error fetching wallet address:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h4,{id:"requires",children:["Requires",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#requires",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"viem"}),`
`,e.jsxs(s.h4,{id:"see-9",children:["See",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#see-9",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://viem.sh/docs/clients/wallet.html%7CViem",children:"Wallet Client Documentation"})}),`
`,e.jsxs(s.h4,{id:"note-5",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note-5",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`This function is designed to work in a browser environment and requires
a web3-enabled browser with an injected Ethereum provider (like MetaMask).
It will not work in a Node.js environment or browsers without an Ethereum wallet.`}),`
`,e.jsxs(s.h4,{id:"defined-in-80",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-80",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/utils.service.ts#L47",children:"utils/utils.service.ts:47"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"getunifiedbalance",children:["getUnifiedBalance()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#getunifiedbalance",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"getUnifiedBalance"}),"(",e.jsx(s.code,{children:"params"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"UnifiedBalanceResult"}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Fetches and aggregates token balances across multiple blockchains for a given address."}),`
`,e.jsxs(s.h4,{id:"parameters-19",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-19",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params"})]}),`
`,e.jsx(s.p,{children:"The parameters for the function."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.address"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:"The address for which to fetch the token balances."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.chainConfigs"}),": ",e.jsx(s.code,{children:"ChainConfig"}),"[]"]}),`
`,e.jsx(s.p,{children:"An array of objects, each containing a chainId and an rpcUrl."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"params.mapping"}),": ",e.jsx(s.code,{children:"TokenMapping"})]}),`
`,e.jsx(s.p,{children:"An object mapping chain IDs to token addresses."}),`
`,e.jsxs(s.h4,{id:"returns-24",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-24",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"UnifiedBalanceResult"}),">"]}),`
`,e.jsx(s.p,{children:"A promise that resolves to an object containing:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"amount: The total balance across all chains as a bigint."}),`
`,e.jsx(s.li,{children:"decimals: The number of decimals for the token."}),`
`]}),`
`,e.jsxs(s.h4,{id:"throws-12",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-12",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"Throws an error in the following cases:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"If tokens across different chains have different numbers of decimals."}),`
`,e.jsx(s.li,{children:"If no valid tokens are found in the mapping."}),`
`]}),`
`,e.jsxs(s.h4,{id:"example-21",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-21",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { createTokenMapping, getUnifiedBalance } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'klaster-sdk'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Create a token mapping for USDC"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" usdcMapping"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" createTokenMapping"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(["})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chain: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  { chain: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x0b2c639c533813f4aa9d7837caf62653d097ff85'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"]);"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Fetch the unified balance"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" result"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" getUnifiedBalance"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"({"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    mapping: usdcMapping,"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    address: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x063B3184a74C510b5c6f5bBd122CC19689E0c706'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    chainConfigs: ["})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      { chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"1"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", rpcUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://eth-mainnet.g.alchemy.com/v2/your-api-key'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" },"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"      { chainId: "}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:"10"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", rpcUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://opt-mainnet.g.alchemy.com/v2/your-api-key'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" }"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    ]"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  });"})}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"`Unified USDC Balance: ${"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"result"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"amount"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"} (${"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"result"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"."}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"decimals"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"} decimals)`"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:");"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Error fetching unified balance:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error.message);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h4,{id:"defined-in-81",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-81",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/unified-balance.service.ts#L130",children:"utils/unified-balance.service.ts:130"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"initklaster",children:["initKlaster()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#initklaster",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"initKlaster"}),"(",e.jsx(s.code,{children:"config"}),"): ",e.jsx(s.a,{href:"README.md#klastersdk",children:e.jsx(s.code,{children:"KlasterSDK"})})]}),`
`]}),`
`,e.jsx(s.p,{children:"Initializes the Klaster SDK with the provided configuration."}),`
`,e.jsx(s.p,{children:`This function serves as the entry point for using the Klaster SDK. It creates and
returns a new instance of the KlasterSDK class, configured with the provided options.`}),`
`,e.jsxs(s.h4,{id:"parameters-20",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-20",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"config"}),": ",e.jsx(s.a,{href:"README.md#config",children:e.jsx(s.code,{children:"Config"})})]}),`
`,e.jsx(s.p,{children:"The configuration options for the Klaster SDK."}),`
`,e.jsxs(s.h4,{id:"returns-25",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-25",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"README.md#klastersdk",children:e.jsx(s.code,{children:"KlasterSDK"})})}),`
`,e.jsx(s.p,{children:"A new instance of the KlasterSDK, ready for use."}),`
`,e.jsxs(s.h4,{id:"example-22",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-22",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"import"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" { initKlaster, Config } "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"from"}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'klaster-sdk'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" config"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Config"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  nodeUrl: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'https://klaster-node.example.com'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:","})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  masterAddress: "}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'0x742d35Cc6634C0532925a3b844Bc454e4438f44e'"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"};"})}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" klasterSDK"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" initKlaster"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(config);"})]}),`
`,e.jsx(s.span,{className:"line","data-empty-line":!0,children:" "}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"// Now you can use klasterSDK to interact with the Klaster ecosystem"})})]})}),`
`,e.jsxs(s.h4,{id:"throws-13",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-13",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Throws an error if the provided configuration is invalid or if
the SDK fails to initialize for any reason.`}),`
`,e.jsxs(s.h4,{id:"defined-in-82",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-82",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/index.ts#L62",children:"index.ts:62"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"resolvetoken",children:["resolveToken()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#resolvetoken",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"resolveToken"}),"(",e.jsx(s.code,{children:"symbol"}),", ",e.jsx(s.code,{children:"chainId"}),"): ",e.jsx(s.code,{children:"TokenInfo"})]}),`
`]}),`
`,e.jsx(s.p,{children:"Resolves a payment token based on its symbol and the chain ID."}),`
`,e.jsxs(s.h4,{id:"parameters-21",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-21",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"symbol"}),": ",e.jsx(s.a,{href:"README.md#paymenttokensymbol",children:e.jsx(s.code,{children:"PaymentTokenSymbol"})})]}),`
`,e.jsx(s.p,{children:"The symbol of the payment token to resolve."}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"chainId"}),": ",e.jsx(s.code,{children:"number"})]}),`
`,e.jsx(s.p,{children:"The ID of the blockchain network."}),`
`,e.jsxs(s.h4,{id:"returns-26",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-26",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.code,{children:"TokenInfo"})}),`
`,e.jsx(s.p,{children:"A promise that resolves to the token information."}),`
`,e.jsxs(s.h4,{id:"throws-14",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-14",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"If the token cannot be resolved for the given chain ID."}),`
`,e.jsxs(s.h4,{id:"defined-in-83",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-83",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/token-resolver.service.ts#L114",children:"utils/token-resolver.service.ts:114"})}),`
`,e.jsx(s.hr,{}),`
`,e.jsxs(s.h3,{id:"signwithinjectedwallet",children:["signWithInjectedWallet()",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#signwithinjectedwallet",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:[e.jsx(s.strong,{children:"signWithInjectedWallet"}),"(",e.jsx(s.code,{children:"address"}),", ",e.jsx(s.code,{children:"message"}),"): ",e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"string"}),">"]}),`
`]}),`
`,e.jsx(s.p,{children:"Signs a message using the injected Ethereum provider (e.g., MetaMask) in the browser."}),`
`,e.jsxs(s.p,{children:["This function uses the ",e.jsx(s.code,{children:"personal_sign"}),` method to create a signature with the user's
Ethereum account. It requires a web3-enabled browser with an injected Ethereum provider.`]}),`
`,e.jsxs(s.h4,{id:"parameters-22",children:["Parameters",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#parameters-22",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"address"}),": `0x${string}`"]}),`
`,e.jsx(s.p,{children:`The Ethereum address to sign the message with. This should
be an address that the user controls in their injected wallet.`}),`
`,e.jsxs(s.p,{children:["• ",e.jsx(s.strong,{children:"message"}),": ",e.jsx(s.code,{children:"string"})]}),`
`,e.jsx(s.p,{children:`The message to be signed. This will be converted to UTF-8
and prefixed with "\\x19Ethereum Signed Message:\\n" before signing.`}),`
`,e.jsxs(s.h4,{id:"returns-27",children:["Returns",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#returns-27",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"Promise"}),"<",e.jsx(s.code,{children:"string"}),">"]}),`
`,e.jsx(s.p,{children:`A promise that resolves to the signature string.
The signature is in hexadecimal format.`}),`
`,e.jsxs(s.h4,{id:"throws-15",children:["Throws",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#throws-15",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`Throws an error if the injected Ethereum provider is not available,
if the user rejects the signature request, or if there's any other
issue during the signing process.`}),`
`,e.jsxs(s.h4,{id:"example-23",children:["Example",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#example-23",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"try"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" address"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" message"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" 'Hello, Ethereum!'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"  const"}),e.jsx(s.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" signature"}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" ="}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" await"}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" signWithInjectedWallet"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(address, message);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"log"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Signature:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", signature);"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"} "}),e.jsx(s.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"catch"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" (error) {"})]}),`
`,e.jsxs(s.span,{className:"line",children:[e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"  console."}),e.jsx(s.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"error"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),e.jsx(s.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:"'Error signing message:'"}),e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", error);"})]}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,e.jsxs(s.h4,{id:"note-6",children:["Note",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#note-6",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:`This function is designed to work in a browser environment and requires
a web3-enabled browser with an injected Ethereum provider (like MetaMask).
It will not work in a Node.js environment or browsers without an Ethereum wallet.`}),`
`,e.jsxs(s.h4,{id:"defined-in-84",children:["Defined in",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#defined-in-84",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://github.com/0xPolycode/klaster-sdk/blob/1f17e7ced490541b1f7944b66e5cd8a0899e68c4/src/utils/utils.service.ts#L86",children:"utils/utils.service.ts:86"})})]})}function t(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{t as default,d as frontmatter};
