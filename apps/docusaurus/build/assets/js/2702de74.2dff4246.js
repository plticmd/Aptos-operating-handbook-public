"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[5216],{78156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var o=t(63159),s=t(83581);const a={title:"Bootstrap from a Snapshot",sidebar_position:14},i="Bootstrap from a Snapshot",r={id:"nodes/full-node/bootstrap-fullnode",title:"Bootstrap from a Snapshot",description:"This document describes how to bootstrap an Aptos node quickly using a snapshot. This can be done on all node types,",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/nodes/full-node/bootstrap-fullnode.md",sourceDirName:"nodes/full-node",slug:"/nodes/full-node/bootstrap-fullnode",permalink:"/nodes/full-node/bootstrap-fullnode",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/nodes/full-node/bootstrap-fullnode.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",sidebarPosition:14,frontMatter:{title:"Bootstrap from a Snapshot",sidebar_position:14},sidebar:"nodeSidebar",previous:{title:"Bootstrap a Node",permalink:"/nodes/operations/operations-index"},next:{title:"Bootstrap from a Backup",permalink:"/nodes/full-node/aptos-db-restore"}},d={},h=[{value:"Find an existing snapshot",id:"find-an-existing-snapshot",level:2},{value:"Use a snapshot",id:"use-a-snapshot",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"bootstrap-from-a-snapshot",children:"Bootstrap from a Snapshot"}),"\n",(0,o.jsx)(n.p,{children:"This document describes how to bootstrap an Aptos node quickly using a snapshot. This can be done on all node types,\nincluding validators, VFNs and PFNs."}),"\n",(0,o.jsxs)(n.p,{children:["Although you can bootstrap a new node using ",(0,o.jsx)(n.a,{href:"/guides/state-sync",children:"state sync"}),", this might not be the fastest approach after the network\nhas been running for a while; it can either take too much time, or it won't be able to fetch all the required data since\nother nodes may have already pruned their ledger history. To avoid this, you can bootstrap your node using an\nexisting snapshot, which is simply a copy of the storage data of an existing node."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Mainnet snapshots",type:"danger",children:[(0,o.jsxs)(n.p,{children:["It is not recommended to use snapshots for bootstrapping nodes in ",(0,o.jsx)(n.strong,{children:"mainnet"}),". This is because snapshots\nare not verified by the Aptos software. As a result, the snapshot may be invalid or contain incorrect data. To prevent\nsecurity concerns, we recommend using snapshots only in test environments, e.g., ",(0,o.jsx)(n.strong,{children:"devnet"})," and ",(0,o.jsx)(n.strong,{children:"testnet"}),"."]}),(0,o.jsxs)(n.p,{children:["If you must bootstrap a node using a ",(0,o.jsx)(n.strong,{children:"mainnet"})," snapshot, you should either generate the snapshot yourself\nor obtain it from a trusted source. You should also verify the snapshot's integrity and authenticity before using it\n(e.g., via cryptographic signatures and checksums)."]})]}),"\n",(0,o.jsx)(n.h2,{id:"find-an-existing-snapshot",children:"Find an existing snapshot"}),"\n",(0,o.jsx)(n.p,{children:"There are a number of snapshots that can be downloaded from different Aptos community members. These include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["BWareLabs (Testnet and Mainnet): ",(0,o.jsx)(n.a,{href:"https://bwarelabs.com/snapshots",children:"BWareLabs Aptos Node Snapshots"})]}),"\n",(0,o.jsxs)(n.li,{children:["Polkachu (Mainnet): ",(0,o.jsx)(n.a,{href:"https://polkachu.com/aptos_snapshots/aptos",children:"Polkachu Aptos Node Snapshots"})]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"Questions about snapshot data",type:"tip",children:(0,o.jsxs)(n.p,{children:["Depending on how the snapshot is constructed and compressed, the snapshot files may be different sizes. If you have any\nquestions about the snapshot data, or run into any issues, please reach out to the Aptos community members directly\nvia the ",(0,o.jsx)(n.a,{href:"https://discord.com/channels/945856774056083548/953421979136962560",children:"#node-support"})," channel in ",(0,o.jsx)(n.a,{href:"https://discord.gg/aptosnetwork",children:"Aptos Discord"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"use-a-snapshot",children:"Use a snapshot"}),"\n",(0,o.jsxs)(n.p,{children:["To use a snapshot, simply download and copy the files to the location of the storage database for your node.\nThis location can be found and updated in the fullnode ",(0,o.jsx)(n.code,{children:"yaml"})," configuration file under ",(0,o.jsx)(n.code,{children:"data_dir"}),".\nSee the example tutorial (",(0,o.jsx)(n.a,{href:"/nodes/full-node/verify-pfn",children:"Run a PFN"}),") for how to configure the data directory."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},83581:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(11855);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);