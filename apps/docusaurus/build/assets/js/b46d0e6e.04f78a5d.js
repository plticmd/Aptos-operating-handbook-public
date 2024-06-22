"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[1649],{34164:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=i(63159),d=i(83581),a=i(45496),o=i(57376);const s={title:"Identity and Configuration"},r="Node Identity and Configuration",l={id:"nodes/identity-and-configuration",title:"Identity and Configuration",description:"When installing a node on an Aptos network, the installation steps require you to work with identities and configurations. This document describes how to interpret the terms identity and configuration, and presents a description of the identity YAML files.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/nodes/identity-and-configuration.md",sourceDirName:"nodes",slug:"/nodes/identity-and-configuration",permalink:"/nodes/identity-and-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/nodes/identity-and-configuration.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Identity and Configuration"}},c={},h=[{value:"Concept",id:"concept",level:2},{value:"Machine",id:"machine",level:3},{value:"Identity",id:"identity",level:4},{value:"Configuration",id:"configuration",level:4},{value:"Persona",id:"persona",level:3},{value:"Identity and configuration",id:"identity-and-configuration",level:4},{value:"Description of identity YAML files",id:"description-of-identity-yaml-files",level:2},{value:"public-keys.yaml",id:"public-keysyaml",level:3},{value:"Example",id:"example",level:4},{value:"Description",id:"description",level:4},{value:"private-keys.yaml",id:"private-keysyaml",level:3},{value:"Example",id:"example-1",level:4},{value:"Description",id:"description-1",level:4},{value:"validator-identity.yaml",id:"validator-identityyaml",level:3},{value:"Example",id:"example-2",level:4},{value:"Description",id:"description-2",level:4},{value:"validator-full-node-identity.yaml",id:"validator-full-node-identityyaml",level:3},{value:"Example",id:"example-3",level:4},{value:"Description",id:"description-3",level:4}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"node-identity-and-configuration",children:"Node Identity and Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["When installing a node on an Aptos network, the installation steps require you to work with identities and configurations. This document describes how to interpret the terms ",(0,t.jsx)(n.strong,{children:"identity"})," and ",(0,t.jsx)(n.strong,{children:"configuration"}),", and presents a description of the identity YAML files."]}),"\n",(0,t.jsx)(n.h2,{id:"concept",children:"Concept"}),"\n",(0,t.jsx)(n.p,{children:"This section presents a mental-model view of an identity and configuration. It is meant to help make the node installation process easy."}),"\n",(0,t.jsxs)(n.p,{children:["The terms ",(0,t.jsx)(n.strong,{children:"identity"})," and ",(0,t.jsx)(n.strong,{children:"configuration"})," should be understood in the following way:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The terms ",(0,t.jsx)(n.strong,{children:"validator node"}),", ",(0,t.jsx)(n.strong,{children:"fullnode"}),", and ",(0,t.jsx)(n.strong,{children:"validator fullnode"})," refer to the machine (physical or virtual)."]}),"\n",(0,t.jsxs)(n.li,{children:["The terms ",(0,t.jsx)(n.strong,{children:"operator"}),", ",(0,t.jsx)(n.strong,{children:"owner"})," and ",(0,t.jsx)(n.strong,{children:"voter"})," refer to the persona."]}),"\n",(0,t.jsx)(n.li,{children:"A machine has both an identity and a configuration. They are defined in separate YAML files. A persona's identity and configuration are combined into a single YAML file."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"machine",children:"Machine"}),"\n",(0,t.jsx)(n.h4,{id:"identity",children:"Identity"}),"\n",(0,t.jsxs)(n.p,{children:["Machine ",(0,t.jsx)(n.strong,{children:"identity"})," is defined in a YAML file. An identity is established by means of keys. A machine identity YAML contains only private keys. Moreover, an identity YAML always contains the associated blockchain account address."]}),"\n",(0,t.jsxs)(n.p,{children:["A machine identity YAML has the string ",(0,t.jsx)(n.code,{children:"identity"})," in its name. For example:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["validator-",(0,t.jsx)(n.strong,{children:"identity"}),".yaml contains the private keys for the validator node."]}),"\n",(0,t.jsxs)(n.li,{children:["validator-full-node-",(0,t.jsx)(n.strong,{children:"identity"}),".yaml contains the private keys for validator fullnode and public fullnode."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Hence, if you are looking for your machine\u2019s private keys, look for YAML filenames with ",(0,t.jsx)(n.code,{children:"identity"})," in them."]}),"\n",(0,t.jsx)(n.h4,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Machine ",(0,t.jsx)(n.strong,{children:"configuration"})," is also defined in a YAML file. A machine configuration YAML ",(0,t.jsx)(n.strong,{children:"never contains any key, public or private"}),". For example, the configuration YAML files validator.yaml, fullnode.yaml, docker-compose.yaml and docker-compose-fullnode.yaml ",(0,t.jsx)(n.strong,{children:"do not contain any keys."})]}),"\n",(0,t.jsx)(n.p,{children:"As noted earlier, a machine has an identity and a configuration. Hence:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For a validator node, identity is defined in validator-",(0,t.jsx)(n.strong,{children:"identity"}),".yaml and configuration is in validator.yaml."]}),"\n",(0,t.jsxs)(n.li,{children:["For a validator fullnode, its identity is defined in validator-full-node-",(0,t.jsx)(n.strong,{children:"identity"}),".yaml and its configuration is defined in fullnode.yaml."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"persona",children:"Persona"}),"\n",(0,t.jsx)(n.h4,{id:"identity-and-configuration",children:"Identity and configuration"}),"\n",(0,t.jsx)(n.p,{children:"A persona has a single YAML that combines the persona\u2019s identity and configuration information. For example, for the three personas, owner, operator and voter:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An owner's identity-configuration is defined in ",(0,t.jsx)(n.strong,{children:"owner.yaml"}),". The owner.yaml contains the public keys and blockchain account addresses for owner, operator and voter, and some owner-specific configuration such as stake amount and commission percentage."]}),"\n",(0,t.jsxs)(n.li,{children:["An operator\u2019s identity-configuration is defined in ",(0,t.jsx)(n.strong,{children:"operator.yaml"}),". The operator.yaml contains public keys and blockchain account address for the operator and some machine configuration information plus a consensus public key and consensus proof of possession key. ",(0,t.jsx)(n.strong,{children:"Only the operator has the consensus keys."})," Neither the owner nor the voter has the consensus keys."]}),"\n",(0,t.jsx)(n.li,{children:"A voter's identity-configuration, i.e., voter.yaml, does not exist."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"description-of-identity-yaml-files",children:"Description of identity YAML files"}),"\n",(0,t.jsx)(n.p,{children:"This section explains the following key and identity YAML files that are generated during the deployment of a validator node:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"public-keys.yaml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"private-keys.yaml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validator-identity.yaml"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"validator-full-node-identity.yaml"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The following command is used to generate the above key and identity YAML files. See, for example, ",(0,t.jsx)(n.a,{href:"/nodes/validator-node/operator/running-validator-node/run-validator-node-using-aws",children:"Step 10 while using AWS to deploy the validator node"}),", or in ",(0,t.jsx)(n.a,{href:"/nodes/validator-node/operator/running-validator-node/run-validator-node-using-gcp",children:"Step 10 while using GCP"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"aptos genesis generate-keys --output-dir ~/$WORKSPACE/keys\n"})}),"\n",(0,t.jsx)(n.p,{children:"See below a diagram that shows how the identities for the validator node and validator fullnode are derived from the private and public keys:"}),"\n",(0,t.jsx)(a.A,{alt:"Signed Transaction Flow",sources:{light:(0,o.A)("/img/docs/key-yamls.svg"),dark:(0,o.A)("/img/docs/key-yamls-dark.svg")}}),"\n",(0,t.jsx)(n.h3,{id:"public-keysyaml",children:"public-keys.yaml"}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Click below to see an example YAML configuration:"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"public-keys.yaml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\naccount_address: a5a643aa695fc5f34927386c8d767cddcc0607933f40c89a7ad78de7804965b8\naccount_public_key: "0x9ccfc50f334064e1b24455029a5bc1646a2c4dd2b1433de1364470692ba6b99b"\nconsensus_public_key: "0xa7e8334381d9f80d33d70da543aea22c87fe9862ab7df5cbef9ee11b5285b89c56e0e7a3a78c1561833b2d6fa4d9d4bf"\nconsensus_proof_of_possession: "0xa51dfd1734e581df99c4c637324ee38c3e48e51c61c1e1dd03bd5a84cf1cd5b2fa00e976b9a9ea0e0908f0d53085318c03f24de3ebf86b07ff883effe0142e0d3f24c7c1e36dd198ea4d8eb6f5c5a2f3a188de22720bd1914a9effa6f595de38"\nfull_node_network_public_key: "0xa6845691a00d6cfdaa9823c4d12b2b5e13d2ecfdc3049d0f2838c805bfd01633"\nvalidator_network_public_key: "0x71f2642aeaa6cbfacf75663cf14d2f6e9e1bd890f9bc1c96900fd225cce01836"\n'})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"public-keys.yaml"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_address"}),(0,t.jsx)(n.td,{children:"The Aptos blockchain account address for the operator, i.e., the persona who deploys the validator node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_public_key"}),(0,t.jsx)(n.td,{children:"The public key associated with the blockchain account."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"consensus_public_key"}),(0,t.jsx)(n.td,{children:"Used only by the operator for validation purpose."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"consensus_proof_of_possession"}),(0,t.jsx)(n.td,{children:"Used only by the operator for validation purpose."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"full_node_network_public_key"}),(0,t.jsx)(n.td,{children:"The public key for the fullnode by which a VFN (validator fullnode) or a PFN (public fullnode) is identified in the Aptos network."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"validator_network_public_key"}),(0,t.jsx)(n.td,{children:"The public key for the validator node and by which the validator node is identified in the Aptos network."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"private-keysyaml",children:"private-keys.yaml"}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Click below to see an example YAML configuration:"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"private-keys.yaml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\naccount_address: a5a643aa695fc5f34927386c8d767cddcc0607933f40c89a7ad78de7804965b8\naccount_private_key: "0x80478d60a52f54a88e7095abf48b1f4294a335b30f1066cd73768b9b789e833f"\nconsensus_private_key: "0x4aedda33ef3fd71243eb2a926307d8826c95b9939f88e753d62d9bc577e99916"\nfull_node_network_private_key: "0x689c11c6e5405219b5eae1312086c801e3a044946afc74429e5157b46fb65b61"\nvalidator_network_private_key: "0xa03ec46b24f2f1066d7980dc13b4baf722ba60c367e498e47a657ba0815adb58"\n'})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"private-keys.yaml"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_address"}),(0,t.jsx)(n.td,{children:"The Aptos blockchain account address for the operator, i.e., the persona who deploys the validator node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_private_key"}),(0,t.jsx)(n.td,{children:"The private key associated with the blockchain account."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"consensus_private_key"}),(0,t.jsx)(n.td,{children:"The consensus private key, used only by the operator for validation purpose and for rotating the consensus key."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"full_node_network_private_key"}),(0,t.jsx)(n.td,{children:"The private key for the fullnode. Whoever holds this private key will be able to establish the ownership of the VFN and PFN in the Aptos network."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"validator_network_private_key"}),(0,t.jsx)(n.td,{children:"The private key for the validator node. Whoever holds this private key will be able to establish the ownership of the validator node in the Aptos network."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"validator-identityyaml",children:"validator-identity.yaml"}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Click below to see an example YAML configuration:"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"validator-identity.yaml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\naccount_address: a5a643aa695fc5f34927386c8d767cddcc0607933f40c89a7ad78de7804965b8\naccount_private_key: "0x80478d60a52f54a88e7095abf48b1f4294a335b30f1066cd73768b9b789e833f"\nconsensus_private_key: "0x4aedda33ef3fd71243eb2a926307d8826c95b9939f88e753d62d9bc577e99916"\nnetwork_private_key: "0xa03ec46b24f2f1066d7980dc13b4baf722ba60c367e498e47a657ba0815adb58"\n'})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-2",children:"Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"validator-identity.yaml"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_address"}),(0,t.jsx)(n.td,{children:"The Aptos blockchain account address for the operator, i.e., the persona who deploys the validator node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_private_key"}),(0,t.jsx)(n.td,{children:"The private key associated with the blockchain account."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"consensus_private_key"}),(0,t.jsx)(n.td,{children:"The consensus private key, used only by the operator for validation purpose and for rotating the consensus key."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"network_private_key"}),(0,t.jsx)(n.td,{children:"The private key for the validator node. Whoever holds this private key will be able to establish the ownership of the validator node in the Aptos network."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"validator-full-node-identityyaml",children:"validator-full-node-identity.yaml"}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Click below to see an example YAML configuration:"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"validator-full-node-identity.yaml"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'---\naccount_address: a5a643aa695fc5f34927386c8d767cddcc0607933f40c89a7ad78de7804965b8\nnetwork_private_key: "0x689c11c6e5405219b5eae1312086c801e3a044946afc74429e5157b46fb65b61"\n'})})]}),"\n",(0,t.jsx)(n.h4,{id:"description-3",children:"Description"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"validator-full-node-identity.yaml"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"account_address"}),(0,t.jsx)(n.td,{children:"The Aptos blockchain account address for the operator, i.e., the persona who deploys the validator node."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"network_private_key"}),(0,t.jsx)(n.td,{children:"The private key for the fullnode. Whoever holds this private key will be able to establish the ownership of the VFN and PFN in the Aptos network."})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},83581:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(11855);const d={},a=t.createContext(d);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);