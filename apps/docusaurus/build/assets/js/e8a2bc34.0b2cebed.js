"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[1373],{54026:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=s(63159),r=s(83581),a=(s(44517),s(32830),s(45496)),o=s(57376);const l={title:"Explore Aptos"},i="Use the Aptos Explorer",c={id:"guides/explore-aptos",title:"Explore Aptos",description:"The Aptos Explorer lets you delve into the activity on the Aptos blockchain in great detail, seeing transactions, validators, and account information. With the Aptos Explorer, you can ensure that the transactions performed on Aptos are accurately reflected. Note, the Aptos ecosystem has several other explorers to choose from.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/explore-aptos.md",sourceDirName:"guides",slug:"/guides/explore-aptos",permalink:"/guides/explore-aptos",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/guides/explore-aptos.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Explore Aptos"},sidebar:"aptosSidebar",previous:{title:"Governance",permalink:"/concepts/governance"},next:{title:"Latest Aptos Releases",permalink:"/releases/aptos-releases"}},d={},h=[{value:"Users",id:"users",level:2},{value:"Common tasks",id:"common-tasks",level:2},{value:"Select a network",id:"select-a-network",level:3},{value:"Find a transaction",id:"find-a-transaction",level:3},{value:"Find an account address",id:"find-an-account-address",level:3},{value:"Explorer pages",id:"explorer-pages",level:2},{value:"Explorer home",id:"explorer-home",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Transaction details",id:"transaction-details",level:3},{value:"Events",id:"events",level:4},{value:"Payload",id:"payload",level:4},{value:"Changes",id:"changes",level:4},{value:"Accounts",id:"accounts",level:3},{value:"Tokens",id:"tokens",level:4},{value:"Token details",id:"token-details",level:4},{value:"Resources",id:"resources",level:4},{value:"Modules",id:"modules",level:4},{value:"Info",id:"info",level:4},{value:"Blocks",id:"blocks",level:3},{value:"Block details",id:"block-details",level:3},{value:"Validators",id:"validators",level:3}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-the-aptos-explorer",children:"Use the Aptos Explorer"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://explorer.aptoslabs.com/",children:"Aptos Explorer"})," lets you delve into the activity on the Aptos blockchain in great detail, seeing transactions, validators, and account information. With the Aptos Explorer, you can ensure that the transactions performed on Aptos are accurately reflected. Note, the Aptos ecosystem has ",(0,n.jsx)(t.a,{href:"https://aptosfoundation.org/ecosystem/projects/explorers",children:"several other explorers"})," to choose from."]}),"\n",(0,n.jsxs)(t.p,{children:["The Aptos Explorer provides a one-step search engine across the blockchain to discover details about wallets, transactions, network analytics, user accounts, smart contracts, and more. The Aptos Explorer also offers dedicated pages for key elements of the blockchain and acts as the source of truth for all things Aptos. See the ",(0,n.jsx)(t.a,{href:"/reference/glossary",children:"Aptos Glossary"})," for definitions of many of the terms found here."]}),"\n",(0,n.jsx)(t.h2,{id:"users",children:"Users"}),"\n",(0,n.jsx)(t.p,{children:"The Aptos Explorer gives you a near real-time view into the status of the network and the activity related to the core on-chain entities. It serves these audiences and purposes by letting:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"App developers understand the behavior of the smart contracts and sender-receiver transaction flows."}),"\n",(0,n.jsx)(t.li,{children:"General users view and analyze Aptos blockchain activity on key entities - transactions, blocks, accounts, and resources."}),"\n",(0,n.jsx)(t.li,{children:"Node operators check the health of the network and maximize the value of operating the node."}),"\n",(0,n.jsx)(t.li,{children:"Token holders find the best node operator to delegate the tokens and earn a staking reward."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"common-tasks",children:"Common tasks"}),"\n",(0,n.jsx)(t.p,{children:"Follow the instructions here to conduct typical work in the Aptos Explorer."}),"\n",(0,n.jsx)(t.h3,{id:"select-a-network",children:"Select a network"}),"\n",(0,n.jsxs)(t.p,{children:["The Aptos Explorer renders data from all Aptos networks: Mainnet, Testnet, Devnet, and your local host if configured. See ",(0,n.jsx)(t.a,{href:"/nodes/networks",children:"Aptos Blockchain Networks"})," for a detailed view of their purposes and differences."]}),"\n",(0,n.jsxs)(t.p,{children:["To select a network in the ",(0,n.jsx)(t.a,{href:"https://explorer.aptoslabs.com/",children:"Aptos Explorer"}),", load the explorer and use the ",(0,n.jsx)(t.em,{children:"Select Network"})," drop-down menu at the top right to select your desired network."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Select Network in Aptos Explorer",sources:{light:(0,o.A)("/img/docs/0-explorer-select-network.png"),dark:(0,o.A)("/img/docs/0-explorer-select-network-dark.png")}})}),"\n",(0,n.jsx)(t.h3,{id:"find-a-transaction",children:"Find a transaction"}),"\n",(0,n.jsx)(t.p,{children:"One of the most common tasks is to track a transaction in Aptos Explorer. You may search by the account address, transaction version and hash, or block height and version."}),"\n",(0,n.jsx)(t.p,{children:"To find a transaction:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Enter the value in the ",(0,n.jsx)(t.em,{children:"Search transactions"})," field near the top of any page."]}),"\n",(0,n.jsx)(t.li,{children:"Do not press return."}),"\n",(0,n.jsx)(t.li,{children:"Click the transaction result that appears immediately below the search field, highlighted in green within the following screenshot:"}),"\n"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Search Aptos Explorer for a transaction",sources:{light:(0,o.A)("/img/docs/1-explorer-search-txn.png"),dark:(0,o.A)("/img/docs/1-explorer-search-txn-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["The resulting ",(0,n.jsx)(t.a,{href:"#transaction-details",children:"Transaction details"})," page appears."]}),"\n",(0,n.jsx)(t.h3,{id:"find-an-account-address",children:"Find an account address"}),"\n",(0,n.jsxs)(t.p,{children:["The simplest way to find your address is to use the ",(0,n.jsx)(t.a,{href:"https://petra.app/docs/use",children:"Aptos Petra Wallet"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Then simply append it to the following URL to load its details in the Aptos Explorer:\n",(0,n.jsx)(t.a,{href:"https://explorer.aptoslabs.com/account/",children:"https://explorer.aptoslabs.com/account/"})]}),"\n",(0,n.jsxs)(t.p,{children:["Like so:\n",(0,n.jsx)(t.a,{href:"https://explorer.aptoslabs.com/account/0x778bdeebb67d3914b181236c2f1f4acc0e561482fc265b9a5709488a97fb3303",children:"https://explorer.aptoslabs.com/account/0x778bdeebb67d3914b181236c2f1f4acc0e561482fc265b9a5709488a97fb3303"})]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"#accounts",children:"Accounts"})," for instructions on use."]}),"\n",(0,n.jsx)(t.h2,{id:"explorer-pages",children:"Explorer pages"}),"\n",(0,n.jsx)(t.p,{children:"This section walks you through the available screens in Aptos Explorer to help you find the information you need."}),"\n",(0,n.jsx)(t.h3,{id:"explorer-home",children:"Explorer home"}),"\n",(0,n.jsx)(t.p,{children:"The Aptos Explorer home page provides an immediate view into the total supply of Aptos coins, those that are now staked, transactions per second (TPS), and active validators on the network, as well as a rolling list of the latest transactions:"}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer home page",sources:{light:(0,o.A)("/img/docs/2-explorer-home.png"),dark:(0,o.A)("/img/docs/2-explorer-home-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Transactions"})," tab at the top or ",(0,n.jsx)(t.strong,{children:"View all Transactions"})," at the bottom to go to the ",(0,n.jsx)(t.a,{href:"#transactions",children:"Transactions"})," page."]}),"\n",(0,n.jsx)(t.h3,{id:"transactions",children:"Transactions"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Transactions"})," page displays all transactions on the Aptos blockchain in order, with the latest at the top of an ever-growing list."]}),"\n",(0,n.jsxs)(t.p,{children:["In the transactions list, single-click the ",(0,n.jsx)(t.strong,{children:"Hash"})," column to see and copy the hash for the transaction or double-click the hash to go directly to the transaction details for the hash."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Transactions page with hash highlighted",sources:{light:(0,o.A)("/img/docs/3-explorer-transactions.png"),dark:(0,o.A)("/img/docs/3-explorer-transactions-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["Otherwise, click anywhere else in the row of the desired transaction to load its ",(0,n.jsx)(t.a,{href:"#transaction-details",children:"Transaction details"})," page."]}),"\n",(0,n.jsx)(t.p,{children:"Use the controls at the bottom of the list to navigate back through transactions historically."}),"\n",(0,n.jsx)(t.h3,{id:"transaction-details",children:"Transaction details"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Transaction details"})," page reveals all information for a given transaction, starting with its default ",(0,n.jsx)(t.em,{children:"Overview"})," tab. There you can see a transaction's status, sender, version, gas fee, and much more:"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Transaction Details tab",sources:{light:(0,o.A)("/img/docs/4-explorer-txn-details.png"),dark:(0,o.A)("/img/docs/4-explorer-txn-details-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["Scrolling down on the Overview, you can also see the transaction's signature (with ",(0,n.jsx)(t.code,{children:"public_key"}),") and hashes for tracking."]}),"\n",(0,n.jsx)(t.p,{children:"The Transaction details page offers even more information in the following tabs."}),"\n",(0,n.jsx)(t.h4,{id:"events",children:"Events"}),"\n",(0,n.jsxs)(t.p,{children:["The Transaction details ",(0,n.jsx)(t.em,{children:"Events"})," tab shows the transaction's ",(0,n.jsx)(t.a,{href:"/reference/glossary#sequence-number",children:"sequence numbers"}),", including their types and data."]}),"\n",(0,n.jsx)(t.h4,{id:"payload",children:"Payload"}),"\n",(0,n.jsxs)(t.p,{children:["The Transaction details ",(0,n.jsx)(t.em,{children:"Payload"})," tab presents the transaction's actual code used. Click the down arrow at the bottom of the code block to expand it and see all contents."]}),"\n",(0,n.jsx)(t.h4,{id:"changes",children:"Changes"}),"\n",(0,n.jsxs)(t.p,{children:["The Transaction details ",(0,n.jsx)(t.em,{children:"Changes"})," tab shows the addresses, state key hashes, and data for each index in the transaction."]}),"\n",(0,n.jsx)(t.h3,{id:"accounts",children:"Accounts"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Accounts"})," page aggregates all transactions, tokens, and other resources in a single set of views starting with its default ",(0,n.jsx)(t.em,{children:"Transactions"})," tab:"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Accounts page",sources:{light:(0,o.A)("/img/docs/5-explorer-account.png"),dark:(0,o.A)("/img/docs/5-explorer-account-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["You can load your account page by appending your account address to:\n",(0,n.jsx)(t.a,{href:"https://explorer.aptoslabs.com/account/",children:"https://explorer.aptoslabs.com/account/"})]}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"#find-an-account-address",children:"Find account address"})," for more help."]}),"\n",(0,n.jsxs)(t.p,{children:["On the Accounts > Transactions tab, click any transaction to go to its ",(0,n.jsx)(t.a,{href:"#transaction-details",children:"Transaction details"})," page."]}),"\n",(0,n.jsxs)(t.p,{children:["As on the main ",(0,n.jsx)(t.a,{href:"#transactions",children:"Transactions"})," page, you may also single-click the ",(0,n.jsx)(t.strong,{children:"Hash"})," column to see and copy the hash for the transaction or double-click the hash to go directly to the transaction details for the hash."]}),"\n",(0,n.jsx)(t.p,{children:"As with Transactions, the Aptos Explorer provides tabs for additional information about the account."}),"\n",(0,n.jsx)(t.h4,{id:"tokens",children:"Tokens"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Tokens"})," tab presents any assets owned by the account, as well as details about the tokens themselves (name, collection, and more). Click any of the assets to go to the ",(0,n.jsx)(t.a,{href:"#token-details",children:"Token details"})," page."]}),"\n",(0,n.jsx)(t.h4,{id:"token-details",children:"Token details"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Token details"})," page contains:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Overview"})," tab including token name, owner, collection, creator, royalty, and more."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Activities"})," tab showing all transfer types, the addresses involved, property version, and amount."]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Token Activities tab",sources:{light:(0,o.A)("/img/docs/6-explorer-token-activities.png"),dark:(0,o.A)("/img/docs/6-explorer-token-activities-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["On either tab, click an address to go to the ",(0,n.jsx)(t.em,{children:"Account"})," page for the address."]}),"\n",(0,n.jsx)(t.h4,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Resources"})," tab presents a view of all types used by the account. Use the ",(0,n.jsx)(t.em,{children:"Collapse All"})," toggle at top right to see all types at once."]}),"\n",(0,n.jsx)(t.h4,{id:"modules",children:"Modules"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Modules"})," tab displays the source code and ABI used by the account. Select different modules on the left sidebar to view Move source code and ABI of a specific module. Use the expand button at the top right of the source code to expand the code for better readability."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Modules tab",sources:{light:(0,o.A)("/img/docs/10-explorer-modules.png"),dark:(0,o.A)("/img/docs/10-explorer-modules-dark.png")}})}),"\n",(0,n.jsx)(t.h4,{id:"info",children:"Info"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Info"})," tab shows the ",(0,n.jsx)(t.a,{href:"/reference/glossary#sequence-number",children:"sequence number"})," and authentication key used by the account."]}),"\n",(0,n.jsx)(t.h3,{id:"blocks",children:"Blocks"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Blocks"})," page presents a running list of the latest blocks to be committed to the Aptos blockchain."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Latest Blocks page",sources:{light:(0,o.A)("/img/docs/7-explorer-latest-blocks.png"),dark:(0,o.A)("/img/docs/7-explorer-latest-blocks-dark.png")}})}),"\n",(0,n.jsx)(t.p,{children:"Click the:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hash to see and copy the hash of the block."}),"\n",(0,n.jsx)(t.li,{children:"First version to go to the first transaction in the block."}),"\n",(0,n.jsx)(t.li,{children:"Last version to go to the last transaction in the block."}),"\n",(0,n.jsxs)(t.li,{children:["Block ID or anywhere else to go to the ",(0,n.jsx)(t.a,{href:"#block-details",children:"Block details"})," page."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"block-details",children:"Block details"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Block details"})," page contains:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Overview"})," tab including block height, versions, timestamp, proposer, epoch and round."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.em,{children:"Transactions"})," tab showing the version, status, type, hash, gas, and timestamp."]}),"\n"]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Block details page",sources:{light:(0,o.A)("/img/docs/8-explorer-block-transactions.png"),dark:(0,o.A)("/img/docs/8-explorer-block-transactions-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.em,{children:"Overview"})," tab, click the versions to go to the related transactions or double-click the address of the proposer to go to the ",(0,n.jsx)(t.em,{children:"Account"})," page for that address."]}),"\n",(0,n.jsxs)(t.p,{children:["On the ",(0,n.jsx)(t.em,{children:"Transactions"})," tab, click the desired row to go to the ",(0,n.jsx)(t.em,{children:"Transactions details"})," page."]}),"\n",(0,n.jsx)(t.h3,{id:"validators",children:"Validators"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Validators"})," page lists every validator on the Aptos blockchain, including their validator address, voting power, public key, fullnode address, and network address."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(a.A,{alt:"Aptos Explorer Validators page",sources:{light:(0,o.A)("/img/docs/9-explorer-validators.png"),dark:(0,o.A)("/img/docs/9-explorer-validators-dark.png")}})}),"\n",(0,n.jsxs)(t.p,{children:["Click the validator address to go to the ",(0,n.jsx)(t.em,{children:"Account"})," page for that address. Click the public key or any of the other addresses to see and copy their values."]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},32830:(e,t,s)=>{s.d(t,{A:()=>o});s(11855);var n=s(51038);const r={tabItem:"tabItem_fjQ6"};var a=s(63159);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:s,children:t})}},44517:(e,t,s)=>{s.d(t,{A:()=>A});var n=s(11855),r=s(51038),a=s(94663),o=s(53178),l=s(42394),i=s(31560),c=s(54169),d=s(76315);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function u(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,h]=x({queryString:s,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),f=(()=>{const e=c??g;return u({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=s(39634);const f={tabList:"tabList__eIX",tabItem:"tabItem_SzJH"};var v=s(63159);function j(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,s=i.indexOf(t),r=l[s].value;r!==n&&(c(t),o(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:h,onClick:d,...a,className:(0,r.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function b(e){let{lazy:t,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(b,{...e,...t})]})}function A(e){const t=(0,m.A)();return(0,v.jsx)(k,{...e,children:h(e.children)},String(t))}},83581:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(11855);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);