"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[632],{28105:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=s(63159),o=s(83581);const a={title:"Bootstrap from a Backup"},i="Bootstrap from a Backup",r={id:"nodes/full-node/aptos-db-restore",title:"Bootstrap from a Backup",description:"This document describes how to bootstrap an Aptos node using a backup. This can be done on all node types, including",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/nodes/full-node/aptos-db-restore.md",sourceDirName:"nodes/full-node",slug:"/nodes/full-node/aptos-db-restore",permalink:"/nodes/full-node/aptos-db-restore",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/nodes/full-node/aptos-db-restore.md",tags:[],version:"current",lastUpdatedAt:1713535793,formattedLastUpdatedAt:"2024\u5e744\u670819\u65e5",frontMatter:{title:"Bootstrap from a Backup"},sidebar:"nodeSidebar",previous:{title:"Bootstrap from a Snapshot",permalink:"/nodes/full-node/bootstrap-fullnode"},next:{title:"Configure a Node",permalink:"/nodes/configure/configure-index"}},l={},d=[{value:"Public backup files",id:"public-backup-files",level:2},{value:"Restore an Aptos DB",id:"restore-an-aptos-db",level:2},{value:"Bootstrap to the latest version",id:"bootstrap-to-the-latest-version",level:3},{value:"Restore over a specific time period",id:"restore-over-a-specific-time-period",level:3},{value:"Restore a full history from genesis",id:"restore-a-full-history-from-genesis",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"bootstrap-from-a-backup",children:"Bootstrap from a Backup"}),"\n",(0,n.jsx)(t.p,{children:"This document describes how to bootstrap an Aptos node using a backup. This can be done on all node types, including\nvalidators, VFNs and PFNs. Bootstrapping using a backup helps node operators achieve two goals:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Quickly bootstrap a database to start a new or failed node."}),"\n",(0,n.jsx)(t.li,{children:"Efficiently recover data from any specific period in the blockchain's history (e.g., from genesis to a target version)."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To achieve these goals, the Aptos database restore tool lets you use existing ",(0,n.jsx)(t.a,{href:"#public-backup-files",children:"public backup files"})," to restore\nthe database of a node. This includes the transaction history containing events, write sets, and key-value pairs. Using\nthe tool, you can restore transactions from any historical range, or restore the database to the latest version in the\nbackup. The public backup files are backed by cryptographic proofs and stored on both AWS and Google Cloud for easy\naccess."]}),"\n",(0,n.jsx)(t.h2,{id:"public-backup-files",children:"Public backup files"}),"\n",(0,n.jsx)(t.p,{children:"Aptos Labs maintains a few publicly accessible database backups by continuously querying a PFN and storing the backup\ndata in remote storage, such as Amazon S3 or Google Cloud Storage. The links to this backup data can be seen below:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"AWS Backup Data"}),(0,n.jsx)(t.th,{children:"Google Cloud Backup Data"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Testnet"}),(0,n.jsx)(t.td,{children:"Discontinued"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-networks/blob/main/testnet/backups/gcs.yaml",children:"https://github.com/aptos-labs/aptos-networks/blob/main/testnet/backups/gcs.yaml"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Mainnet"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-networks/blob/main/mainnet/backups/s3-public.yaml",children:"https://github.com/aptos-labs/aptos-networks/blob/main/mainnet/backups/s3-public.yaml"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-networks/blob/main/mainnet/backups/gcs.yaml",children:"https://github.com/aptos-labs/aptos-networks/blob/main/mainnet/backups/gcs.yaml"})})]})]})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Backups are only created for ",(0,n.jsx)(t.code,{children:"testnet"})," and ",(0,n.jsx)(t.code,{children:"mainnet"}),". Given that ",(0,n.jsx)(t.code,{children:"devnet"})," is wiped frequently, it is not useful to maintain backups for it."]})}),"\n",(0,n.jsx)(t.p,{children:"The backup files consist of three types of data that can be used to reconstruct the blockchain DB:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"epoch_ending"})," \u2013 This contains the ledger_info at the ending block of each epoch since the genesis. This data can be used to prove the epoch's provenance from the genesis and validator set of each epoch."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"state_snapshot"})," \u2013 This contains a snapshot of the blockchain's state Merkle tree (SMT) and key values at a certain version."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"transaction"})," \u2013 This contains the raw transaction metadata, payload, the executed outputs of the transaction after VM, and the cryptographic proofs of the transaction in the ledger history."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Each type of data in the backup storage is organized as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The metadata file in the metadata folder contains the range of each backup and the relative path to the backup folder."}),"\n",(0,n.jsx)(t.li,{children:"The backup contains a manifest file and all the actual chunked data files."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"See the diagram below for a visual representation of the backup data structure:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"aptos-db-restore.png",src:s(40983).A+"",width:"2000",height:"1420"})}),"\n",(0,n.jsx)(t.h2,{id:"restore-an-aptos-db",children:"Restore an Aptos DB"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/tools/aptos-cli/use-cli/use-aptos-cli",children:"Aptos CLI"})," supports two kinds of restore operations for Aptos nodes:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Recreating a database with a minimal transaction history at a user-specified transaction version (or the latest version offered by the backup)."}),"\n",(0,n.jsx)(t.li,{children:"Restoring the database over a specific period. In addition to the above, this option ensures that the recreated database carries the ledger history of the user-designated version range."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Aptos CLI 1.0.14 or newer is needed to perform these operations. Additionally, depending on whether you use AWS or\nGoogle Cloud, install ",(0,n.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"})," or ",(0,n.jsx)(t.a,{href:"https://cloud.google.com/storage/docs/gsutil_install",children:"gsutil"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"The sections below provide examples of how to use the Aptos CLI to restore a database from a backup."}),"\n",(0,n.jsx)(t.h3,{id:"bootstrap-to-the-latest-version",children:"Bootstrap to the latest version"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"aptos node bootstrap-db"})," command can quickly restore a database from the latest snapshot back to a target version,\nbut it does not restore the transaction history prior to the target version."]}),"\n",(0,n.jsx)(t.p,{children:"Use the following options to run the command:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"target-version"})," \u2013 The sync will begin from this period onwards in the transaction history (towards the latest version)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"command-adapter-config"})," \u2013 The path to one of the ",(0,n.jsx)(t.a,{href:"#public-backup-files",children:"YAML configuration files"})," that specifies the location of the public backup files and commands used by our backup and restore tool to interact with the remote storage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"target-db-dir"})," \u2013 The target DB path to write the restored database."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"aptos node bootstrap-db \\\n    --target-version 500000000 \\\n    --command-adapter-config /path/to/s3-public.yaml \\\n    --target-db-dir /path/to/local/db\n"})}),"\n",(0,n.jsx)(t.h3,{id:"restore-over-a-specific-time-period",children:"Restore over a specific time period"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"aptos node bootstrap-db"})," command can restore the transaction history within a specified period, along with the state Merkle tree at the target version."]}),"\n",(0,n.jsx)(t.p,{children:"Use the following options to run the command:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"ledger-history-start-version"})," \u2013 The sync will begin from this period onwards in the transaction history (towards the target version)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"target-version"})," \u2013 The sync will end at this period in the transaction history."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"command-adapter-config"})," \u2013 The path to one of the ",(0,n.jsx)(t.a,{href:"#public-backup-files",children:"YAML configuration files"})," that specifies the location of the public backup files and commands used by our backup and restore tool to interact with the remote storage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"target-db-dir"})," \u2013 The target DB path to write the restored database."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"aptos node bootstrap-db \\\n    --ledger-history-start-version 150000000 \\\n    --target-version 155000000\n    --command-adapter-config /path/to/s3-public.yaml \\\n    --target-db-dir /path/to/local/db\n"})}),"\n",(0,n.jsx)(t.h3,{id:"restore-a-full-history-from-genesis",children:"Restore a full history from genesis"}),"\n",(0,n.jsxs)(t.p,{children:["To restore an Aptos node with the full history from genesis, set ",(0,n.jsx)(t.code,{children:"ledger-history-start-version"})," to 0 and\ndisable the pruner by following the instructions in the ",(0,n.jsx)(t.a,{href:"/guides/data-pruning",children:"disabling the ledger pruner"})," section before\nstarting the node. Note: performing a full history restore requires a significant amount of resources and time.\nSee the resource requirements below."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Open File Limit"}),": Set the open file limit to 10K, e.g., using ",(0,n.jsx)(t.code,{children:"ulimit -n 10000"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Testnet"}),": If you are restoring a testnet node, you will need the following resources:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Disk"}),": 1.5TB"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"RAM"}),": 32GB"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mainnet"}),": If you are restoring a mainnet node, you will need the following resources:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Disk"}),": 1TB"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"RAM"}),": 32GB"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Example command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"aptos node bootstrap-db \\\n--ledger-history-start-version 0 \\\n--target-version use_the_largest_version_in_backup \\\n--command-adapter-config /path/to/s3-public.yaml \\\n--target-db-dir /path/to/local/db\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you don't specify the target_version (via ",(0,n.jsx)(t.code,{children:"--target-version"}),"), the tool will use the latest version in the backup as the target version."]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},40983:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/aptos-db-restore-8fdae939879491fa501a629434502028.png"},83581:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>r});var n=s(11855);const o={},a=n.createContext(o);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);