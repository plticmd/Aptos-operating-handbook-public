"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[9693],{41300:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=o(63159),s=o(83581);const i={title:"Verify a PFN",slug:"verify-pfn",sidebar_position:10},r=void 0,c={id:"nodes/full-node/verify-pfn",title:"Verify a PFN",description:"After deploying your PFN, you can verify that it is operating correctly by checking several of the PFN's metrics.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/nodes/full-node/verify-pfn.md",sourceDirName:"nodes/full-node",slug:"/nodes/full-node/verify-pfn",permalink:"/nodes/full-node/verify-pfn",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/nodes/full-node/verify-pfn.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",sidebarPosition:10,frontMatter:{title:"Verify a PFN",slug:"verify-pfn",sidebar_position:10},sidebar:"nodeSidebar",previous:{title:"Using GCP",permalink:"/nodes/full-node/deployments/deploy-a-pfn-gcp"},next:{title:"Modify a PFN",permalink:"/nodes/modify/modify-index"}},d={},l=[{value:"Verify synchronization",id:"verify-synchronization",level:3},{value:"(Optional) Verify outbound network connections",id:"optional-verify-outbound-network-connections",level:3},{value:"(Optional) Examine Docker ledger size",id:"optional-examine-docker-ledger-size",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"After deploying your PFN, you can verify that it is operating correctly by checking several of the PFN's metrics.\nThis document describes the common types of checks that you might wish to perform."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["You can learn more about Aptos metrics in the ",(0,t.jsx)(n.a,{href:"/nodes/measure/node-inspection-service",children:"Node Inspection Service"})," documents."]})}),"\n",(0,t.jsx)(n.h3,{id:"verify-synchronization",children:"Verify synchronization"}),"\n",(0,t.jsxs)(n.p,{children:["During the initial synchronization of your PFN, there may be a lot of data to transfer (read more about how state\nsync works in the ",(0,t.jsx)(n.a,{href:"/guides/state-sync",children:"state sync"})," guide). You can monitor state sync progress\nby querying the metrics port to see what version your node is currently synced to. Run the following example\ncommand to see the currently synced version of your node:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl 127.0.0.1:9101/metrics 2> /dev/null | grep "aptos_state_sync_version{.*\\"synced\\"}" | awk \'{print $2}\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"The command will output the current synced version of your node. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"71000\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Compare the synced version returned by this command (e.g., ",(0,t.jsx)(n.code,{children:"71000"}),") with the highest version shown on the\n",(0,t.jsx)(n.a,{href:"https://explorer.aptoslabs.com/?network=mainnet",children:"Aptos explorer page"}),". If your node is catching up to the highest\nversion, it is synchronizing correctly. It is fine if the explorer page differs by a few versions, as the explorer\nnodes may sync with some variance."]}),"\n",(0,t.jsxs)(n.admonition,{title:"Using fast sync?",type:"caution",children:[(0,t.jsxs)(n.p,{children:["If your node is fast syncing, the command may show ",(0,t.jsx)(n.code,{children:"0"})," until it has finally caught up. To verify that the node is\nfast syncing, run the following command:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl 127.0.0.1:9101/metrics 2> /dev/null | grep "aptos_state_sync_version{.*\\"synced_states\\"}" | awk \'{print $2}\'\n'})}),(0,t.jsxs)(n.p,{children:["This should show an increasing number of synced states. It may take several hours for your node to fast sync to the\nlatest version. Eventually, once fast syncing is complete, the ",(0,t.jsx)(n.code,{children:'aptos_state_sync_version{.*"synced"}'})," command will\nreturn the current synced version of your node."]}),(0,t.jsxs)(n.p,{children:["You can read more about fast syncing here: ",(0,t.jsx)(n.a,{href:"/guides/state-sync#bootstrapping-phase",children:"State sync bootstrapping"}),"."]})]}),"\n",(0,t.jsx)(n.h3,{id:"optional-verify-outbound-network-connections",children:"(Optional) Verify outbound network connections"}),"\n",(0,t.jsxs)(n.p,{children:["If you wish, you can also check the outbound network connections for your PFN. The number of outbound network\nconnections should be more than ",(0,t.jsx)(n.code,{children:"0"})," for healthy PFNs. Run the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl 127.0.0.1:9101/metrics 2> /dev/null | grep "aptos_connections{direction=\\"outbound\\""\n'})}),"\n",(0,t.jsx)(n.p,{children:"The above command will output the number of outbound network connections for your node. For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl 127.0.0.1:9101/metrics 2> /dev/null | grep "aptos_connections{direction=\\"outbound\\""\naptos_connections{direction="outbound",network_id="Public",peer_id="aabd651f",role_type="full_node"} 3\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If the number of outbound connections returned is ",(0,t.jsx)(n.code,{children:"0"}),", then it means your node cannot connect to the Aptos blockchain. If this happens to you, follow these steps to resolve the issue:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Update your node to the latest release by following the ",(0,t.jsx)(n.a,{href:"/nodes/full-node/update-fullnode-with-new-devnet-releases",children:"Update your Node"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Remove any ",(0,t.jsx)(n.code,{children:"seed"})," peers you may have added to your configuration file. The seeds may be preventing you from\nconnecting to the network. Seed peers are discussed in the ",(0,t.jsx)(n.a,{href:"/nodes/full-node/fullnode-network-connections#connecting-to-seed-peers",children:"Connecting your PFN to seed peers"})," section."]}),"\n",(0,t.jsxs)(n.li,{children:["Ensure that you have used the correct ",(0,t.jsx)(n.code,{children:"genesis.blob"})," and ",(0,t.jsx)(n.code,{children:"waypoint.txt"})," files for your network. This is a common error."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"optional-examine-docker-ledger-size",children:"(Optional) Examine Docker ledger size"}),"\n",(0,t.jsx)(n.p,{children:"If you are running your PFN using Docker, you can monitor the size of the blockchain ledger by entering the Docker\ncontainer and checking the size. This will allow you to see how much storage the blockchain ledger is currently consuming."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["First, run ",(0,t.jsx)(n.code,{children:"docker container ls"})," on your terminal and copy the NAME field output. This will be a string similar to ",(0,t.jsx)(n.code,{children:"public_full_node_fullnode_1"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Next, run these commands to check the storage size consumed by the ledger, using the NAME field you copied over in place of ",(0,t.jsx)(n.code,{children:"public_full_node_fullnode_1"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Obtain the container ID:\nid=$(docker container ls | grep public_full_node_fullnode_1 | grep -oE "^[0-9a-zA-Z]+")\n\n# Enter the container:\ndocker exec -it $id /bin/bash\n\n# Observe the volume (ledger) size:\ndu -cs -BM /opt/aptos/data\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},83581:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(11855);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);