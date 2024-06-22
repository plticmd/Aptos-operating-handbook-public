"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[9011],{21793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>i});var c=t(63159),a=t(83581);const s={title:"Account"},o="Account",r={id:"sdks/ts-sdk/account",title:"Account",description:"The SDK provides an Account class for creating and managing accounts on Aptos network.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/ts-sdk/account.md",sourceDirName:"sdks/ts-sdk",slug:"/sdks/ts-sdk/account",permalink:"/sdks/ts-sdk/account",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/sdks/ts-sdk/account.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Account"},sidebar:"appSidebar",previous:{title:"Migration Guide",permalink:"/sdks/ts-sdk/migration-guide"},next:{title:"SDK Configuration",permalink:"/sdks/ts-sdk/sdk-configuration"}},d={},i=[{value:"Generate a new account",id:"generate-a-new-account",level:2},{value:"Derive an account from private key",id:"derive-an-account-from-private-key",level:2},{value:"Derive an account from private key and address",id:"derive-an-account-from-private-key-and-address",level:2},{value:"Derive an account from derivation path",id:"derive-an-account-from-derivation-path",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"account",children:"Account"}),"\n",(0,c.jsxs)(n.p,{children:["The SDK provides an ",(0,c.jsx)(n.code,{children:"Account"})," class for creating and managing ",(0,c.jsx)(n.a,{href:"/concepts/accounts",children:"accounts"})," on Aptos network."]}),"\n",(0,c.jsxs)(n.p,{children:["Following ",(0,c.jsx)(n.a,{href:"https://github.com/aptos-foundation/AIPs/blob/main/aips/aip-55.md",children:"AIP-55"})," the SDK supports ",(0,c.jsx)(n.code,{children:"Legacy"})," and ",(0,c.jsx)(n.code,{children:"Unified"})," authentications. ",(0,c.jsx)(n.code,{children:"Legacy"})," includes ",(0,c.jsx)(n.code,{children:"ED25519"})," and ",(0,c.jsx)(n.code,{children:"MultiED25519"})," and ",(0,c.jsx)(n.code,{children:"Unified"})," includes ",(0,c.jsx)(n.code,{children:"SingleSender"})," and ",(0,c.jsx)(n.code,{children:"MultiSender"})," authenticators."]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"SingleSender"})," supports any single signer authenticator (currently is ",(0,c.jsx)(n.code,{children:"ED25519"})," and ",(0,c.jsx)(n.code,{children:"Secp256k1"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"MultiSender"})," supports any multi signers authenticator (Currently is ",(0,c.jsx)(n.code,{children:"MultiED25519"}),")"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Account"})," class supports different static methods to generate and/or derive an account"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Account.generate()"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Account.fromPrivateKey()"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Account.fromPrivateKeyAndAddress()"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Account.fromDerivationPath()"})}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"generate-a-new-account",children:"Generate a new account"}),"\n",(0,c.jsxs)(n.p,{children:["To generate a new account (or a new key pair), the SDK provides a ",(0,c.jsx)(n.code,{children:"generate()"})," static method on the ",(0,c.jsx)(n.code,{children:"Account"})," class."]}),"\n",(0,c.jsxs)(n.p,{children:["Account generation supports all current Aptos supported key schemes, ",(0,c.jsx)(n.code,{children:"Legacy Ed25519"}),", ",(0,c.jsx)(n.code,{children:"Single Sender Ed25519"})," and ",(0,c.jsx)(n.code,{children:"Single Sender Secp256k1"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"const account = Account.generate(); // defaults to Legacy Ed25519\nconst account = Account.generate({ scheme: SigningSchemeInput.Secp256k1 }); // Single Sender Secp256k1\nconst account = Account.generate({\n  scheme: SigningSchemeInput.Ed25519,\n  legacy: false,\n}); // Single Sender Ed25519\n"})}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsx)(n.p,{children:"Creating an account with the SDK creates it locally, to create the account on chain we should fund it."}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"const transaction = await aptos.fundAccount({\n  accountAddress: account.accountAddress,\n  amount: 100,\n});\n"})})]}),"\n",(0,c.jsx)(n.h2,{id:"derive-an-account-from-private-key",children:"Derive an account from private key"}),"\n",(0,c.jsxs)(n.p,{children:["The SDK supports deriving an account from a private key with ",(0,c.jsx)(n.code,{children:"fromPrivateKey()"})," static method.\nThis method uses a local calculation and therefore is used to derive an ",(0,c.jsx)(n.code,{children:"Account"})," that has not had its authentication key rotated."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"// to derive an account with a legacy Ed25519 key scheme\nconst privateKey = new Ed25519PrivateKey(privateKeyBytes);\nconst account = Account.fromPrivateKey({ privateKey });\n\n// to derive an account with a Single Sender Ed25519 key scheme\nconst privateKey = new Ed25519PrivateKey(privateKeyBytes);\nconst account = Account.fromPrivateKey({ privateKey, legacy: false });\n\n// to derive an account with a Single Sender Secp256k1 key scheme\nconst privateKey = new Secp256k1PrivateKey(privateKeyBytes);\nconst account = Account.fromPrivateKey({ privateKey });\n"})}),"\n",(0,c.jsx)(n.h2,{id:"derive-an-account-from-private-key-and-address",children:"Derive an account from private key and address"}),"\n",(0,c.jsxs)(n.p,{children:["The SDK supports deriving an account from a private key and address with ",(0,c.jsx)(n.code,{children:"fromPrivateKeyAndAddress()"})," static method."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"// to derive an account with a legacy Ed25519 key scheme\nconst privateKey = new Ed25519PrivateKey(privateKeyBytes);\nconst accountAddress = AccountAddress.from(address);\nconst account = Account.fromPrivateKeyAndAddress({\n  privateKey,\n  address: accountAddress,\n  legacy: true,\n});\n\n// to derive an account with a Single Sender Ed25519 key scheme\nconst privateKey = new Ed25519PrivateKey(privateKeyBytes);\nconst accountAddress = AccountAddress.from(address);\nconst account = Account.fromPrivateKeyAndAddress({\n  privateKey,\n  address: accountAddress,\n  legacy: false,\n});\n\n// to derive an account with a Single Sender Secp256k1 key scheme\nconst privateKey = new Secp256k1PrivateKey(privateKeyBytes);\nconst accountAddress = AccountAddress.from(address);\nconst account = Account.fromPrivateKeyAndAddress({\n  privateKey,\n  address: accountAddress,\n});\n"})}),"\n",(0,c.jsx)(n.h2,{id:"derive-an-account-from-derivation-path",children:"Derive an account from derivation path"}),"\n",(0,c.jsxs)(n.p,{children:["The SDK supports deriving an account from derivation path with ",(0,c.jsx)(n.code,{children:"fromDerivationPath()"})," static method."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"// to derive an account with a legacy Ed25519 key scheme\nconst { mnemonic, address, path } = wallet;\nconst account = Account.fromDerivationPath({\n  path,\n  mnemonic,\n  scheme: SigningSchemeInput.Ed25519,\n});\n\n// to derive an account with a Single Sender Ed25519 key scheme\nconst { mnemonic, address, path } = wallet;\nconst account = Account.fromDerivationPath({\n  path,\n  mnemonic,\n  scheme: SigningSchemeInput.Ed25519,\n  legacy: false,\n});\n\n// to derive an account with a Single Sender Secp256k1 key scheme\nconst { mnemonic, address, path } = wallet;\nconst account = Account.fromDerivationPath({\n  path,\n  mnemonic,\n  scheme: SigningSchemeInput.Secp256k1Ecdsa,\n});\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},83581:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var c=t(11855);const a={},s=c.createContext(a);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);