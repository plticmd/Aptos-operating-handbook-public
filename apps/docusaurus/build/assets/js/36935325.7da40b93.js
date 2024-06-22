"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[2731],{74626:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(63159),a=t(83581);const i={title:"Core Layer",slug:"typescript-sdk-core-layer"},r=void 0,c={id:"sdks/legacy-ts-sdk/sdk-core-layer",title:"Core Layer",description:"The core SDK layer exposes the functionalities needed by most applications:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/legacy-ts-sdk/sdk-core-layer.md",sourceDirName:"sdks/legacy-ts-sdk",slug:"/sdks/legacy-ts-sdk/typescript-sdk-core-layer",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-core-layer",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/sdks/legacy-ts-sdk/sdk-core-layer.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Core Layer",slug:"typescript-sdk-core-layer"},sidebar:"appSidebar",previous:{title:"IndexerClient Class",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-indexer-client-class"},next:{title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30ec\u30a4\u30e4\u30fc",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-plugins-layer"}},o={},d=[{value:"Transaction Builder",id:"transaction-builder",level:2},{value:"Generate transaction",id:"generate-transaction",level:3},{value:"AptosAccount class",id:"aptosaccount-class",level:2}];function l(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"The core SDK layer exposes the functionalities needed by most applications:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Key generation"}),"\n",(0,n.jsx)(s.li,{children:"Transaction signing and submission"}),"\n",(0,n.jsx)(s.li,{children:"Transaction status querying"}),"\n",(0,n.jsx)(s.li,{children:"Information retrieval techniques"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"transaction-builder",children:"Transaction Builder"}),"\n",(0,n.jsx)(s.p,{children:"The Aptos TypeScript SDK exposes five transaction builder classes:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/TransactionBuilder.html",children:"TransactionBuilder"})," that takes in a Signing Message (serialized raw transaction) and returns a signature."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/TransactionBuilderEd25519.html",children:"TransactionBuilderEd25519"})," extends the TransactionBuilder class and provides a signing method for raw transactions with a single public key."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/TransactionBuilderMultiEd25519.html",children:"TransactionBuilderMultiEd25519"})," extends the TransactionBuilder class and provides a signing method for signing a raw transaction with a multi-signature public key."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/TransactionBuilderABI.html",children:"TransactionBuilderABI"})," builds raw transactions based on ABI."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/TransactionBuilderRemoteABI.html",children:"TransactionBuilderRemoteABI"})," downloads JSON ABIs from the fullnodes. It then translates the JSON ABIs to the format accepted by TransactionBuilderABI."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The Transaction Builder contains the TypeScript types for constructing the transaction payloads. The Transaction Builder within the TypeScript SDK supports the following transaction payloads:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Entry Function"}),"\n",(0,n.jsx)(s.li,{children:"Script"}),"\n",(0,n.jsx)(s.li,{children:"MultiSig Transaction"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"generate-transaction",children:"Generate transaction"}),"\n",(0,n.jsx)(s.p,{children:"The TypeScript SDK provides 2 efficient ways to generate a raw transaction that can be signed and submitted to chain"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Using the ",(0,n.jsx)(s.code,{children:"generateTransaction()"})," method. This method accepts an ",(0,n.jsx)(s.code,{children:"entry function payload"})," type and is available for entry function transaction submission. It uses the ",(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/TransactionBuilderRemoteABI.html",children:"TransactionBuilderRemoteABI"})," to fetch the ABI from chain, serializes the payload arguments based on the entry function argument types and generates and return a raw transaction that can be signed and submitted to chain."]}),"\n",(0,n.jsxs)(s.li,{children:["Using the ",(0,n.jsx)(s.code,{children:"generateRawTransaction()"})," method. This method accept any transaction payload type (entry, script, multisig) and expects the passed in arguments to be serialized. It then generates and returns a raw transaction that can be signed and submitted to chain."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In addition, The Aptos SDK supports transaction status queries (success, failure, pending), by transaction hash."}),"\n",(0,n.jsx)(s.h2,{id:"aptosaccount-class",children:"AptosAccount class"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/classes/AptosAccount.html",children:"AptosAccount"})," class has a constructor that creates a new account instance or retrieves an existing account instance. Additionally, this class provides the methods for:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Generating ",(0,n.jsx)(s.a,{href:"https://ed25519.cr.yp.to/",children:"Ed25519"})," key pairs. The Ed25519 public keys can be used to derive the chain account addresses, while the private keys should be kept private for transaction signing."]}),"\n",(0,n.jsx)(s.li,{children:"Signing a bytes buffer with an Ed25519 public key."}),"\n",(0,n.jsx)(s.li,{children:"Deriving initial account addresses from the public keys."}),"\n",(0,n.jsx)(s.li,{children:"Retrieving a resource account address by source address and seeds."}),"\n",(0,n.jsx)(s.li,{children:"Deriving account address, public key, and private key."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},83581:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>c});var n=t(11855);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);