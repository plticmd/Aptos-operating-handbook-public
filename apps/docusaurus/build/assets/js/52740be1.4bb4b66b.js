"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[6479],{31896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var o=s(63159),c=s(83581);const i={title:"Running a Public Network"},l="\u30d1\u30d6\u30ea\u30c3\u30af\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5b9f\u884c",d={id:"tools/aptos-cli/use-cli/public-network/run-public-network",title:"Running a Public Network",description:"\u30c6\u30b9\u30c8\u306e\u305f\u3081\u306b\u81ea\u8eab\u306e\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3057\u305f\u3044\u3060\u3051\u306e\u5834\u5408\u306f\u3053\u3053\u3067\u305d\u306e\u65b9\u6cd5\u3092\u5b66\u7fd2\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/aptos-cli/use-cli/public-network/run-public-network.md",sourceDirName:"tools/aptos-cli/use-cli/public-network",slug:"/tools/aptos-cli/use-cli/public-network/run-public-network",permalink:"/tools/aptos-cli/use-cli/public-network/run-public-network",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/tools/aptos-cli/use-cli/public-network/run-public-network.md",tags:[],version:"current",lastUpdatedAt:1716555282,formattedLastUpdatedAt:"2024\u5e745\u670824\u65e5",frontMatter:{title:"Running a Public Network"},sidebar:"appSidebar",previous:{title:"Running a Local Network",permalink:"/tools/aptos-cli/use-cli/running-a-local-network"},next:{title:"Working With Move Contracts",permalink:"/tools/aptos-cli/use-cli/working-with-move-contracts"}},r={},t=[{value:"\u30b8\u30a7\u30cd\u30b7\u30b9\u30bb\u30ec\u30e2\u30cb\u30fc",id:"\u30b8\u30a7\u30cd\u30b7\u30b9\u30bb\u30ec\u30e2\u30cb\u30fc",level:2},{value:"\u30b8\u30a7\u30cd\u30b7\u30b9\u306e\u751f\u6210",id:"\u30b8\u30a7\u30cd\u30b7\u30b9\u306e\u751f\u6210",level:2},{value:"Aptos\u30b3\u30a2\u3092\u6e96\u5099\u3059\u308b",id:"aptos\u30b3\u30a2\u3092\u6e96\u5099\u3059\u308b",level:3},{value:"<code>layout</code>\u30d5\u30a1\u30a4\u30eb",id:"layout\u30d5\u30a1\u30a4\u30eb",level:3},{value:"Aptos\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u69cb\u7bc9",id:"aptos\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u69cb\u7bc9",level:3},{value:"<code>ValidatorConfiguration</code>\u30d5\u30a1\u30a4\u30eb",id:"validatorconfiguration\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u30b8\u30a7\u30cd\u30b7\u30b9\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b",id:"\u30b8\u30a7\u30cd\u30b7\u30b9\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b",level:3},{value:"<code>aptos-node</code>\u306e\u958b\u59cb",id:"aptos-node\u306e\u958b\u59cb",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u30d1\u30d6\u30ea\u30c3\u30af\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5b9f\u884c",children:"\u30d1\u30d6\u30ea\u30c3\u30af\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5b9f\u884c"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u306e\u305f\u3081\u306b\u81ea\u8eab\u306e\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3057\u305f\u3044\u3060\u3051\u306e\u5834\u5408\u306f",(0,o.jsx)(n.a,{href:"/tools/aptos-cli/use-cli/running-a-local-network",children:"\u3053\u3053"}),"\u3067\u305d\u306e\u65b9\u6cd5\u3092\u5b66\u7fd2\u3067\u304d\u307e\u3059\u3002"]})}),"\n",(0,o.jsx)(n.h2,{id:"\u30b8\u30a7\u30cd\u30b7\u30b9\u30bb\u30ec\u30e2\u30cb\u30fc",children:"\u30b8\u30a7\u30cd\u30b7\u30b9\u30bb\u30ec\u30e2\u30cb\u30fc"}),"\n",(0,o.jsxs)(n.p,{children:["\u3053\u306e",(0,o.jsx)(n.code,{children:"aptos"}),"\u30c4\u30fc\u30eb\u306f\u3001\u30b8\u30a7\u30cd\u30b7\u30b9\u30bb\u30ec\u30e2\u30cb\u30fc\u3092\u901a\u3058\u3066\u3001\u65b0\u3057\u3044\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u958b\u59cb\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\n\u30b8\u30a7\u30cd\u30b7\u30b9\u30bb\u30ec\u30e2\u30cb\u30fc\u306e\u51fa\u529b\u306f\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u30aa\u30f3\u30e9\u30a4\u30f3\u904b\u7528\u306e\u6e96\u5099\u3092\u3059\u308bMove\u6307\u5c0e\u306e\u51fa\u529b\u3067\u3059\u3002\u5165\u529b\u306f\u4ee5\u4e0b\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u30d0\u30ea\u30c7\u30fc\u30bf\u3068\u305d\u306e\u69cb\u6210\u306e\u30bb\u30c3\u30c8"}),"\n",(0,o.jsx)(n.li,{children:"Move\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u521d\u671f\u30bb\u30c3\u30c8\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u3057\u3066"}),"\n",(0,o.jsxs)(n.li,{children:["\u4ed6\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u533a\u5225\u3059\u308b\u30e6\u30cb\u30fc\u30af\u306a",(0,o.jsx)(n.code,{children:"ChainId"}),"\uff08u8\uff09"]}),"\n",(0,o.jsx)(n.li,{children:"\u30c6\u30b9\u30c8\u30c1\u30a7\u30fc\u30f3\u306b\u306f\u3001Aptos\u30b3\u30a4\u30f3\u306e\u30df\u30f3\u30c8\u3092\u7ba1\u7406\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3082\u5b58\u5728\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u30b8\u30a7\u30cd\u30b7\u30b9\u306e\u751f\u6210",children:"\u30b8\u30a7\u30cd\u30b7\u30b9\u306e\u751f\u6210"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\u30b8\u30a7\u30cd\u30b7\u30b9\u8a2d\u7acb\u8005\u306f",(0,o.jsx)(n.code,{children:"Layout"}),"\u3092\u69cb\u7bc9\u3057\u3066\u914d\u5e03\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"\u30b8\u30a7\u30cd\u30b7\u30b9\u8a2d\u7acb\u8005\u306fAptos\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3092\u6e96\u5099\u3057\u3001\u914d\u5e03\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u5404\u53c2\u52a0\u8005\u306f\u3001",(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u3092\u751f\u6210\u3057\u3001\u914d\u5e03\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5404\u53c2\u52a0\u8005\u306f\u3001\u7d50\u679c\u3068\u3057\u3066\u751f\u3058\u305f\u8ca2\u732e\u304b\u3089",(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u3092\u751f\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u30b8\u30a7\u30cd\u30b7\u30b9 \u30aa\u30fc\u30ac\u30ca\u30a4\u30b6\u30fc\u306f",(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u3092\u5b9f\u884c\u3057\u3066\u521d\u671f\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u5f15\u304d\u51fa\u3057\u3001\u914d\u5e03\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5404\u53c2\u52a0\u8005\u306f",(0,o.jsx)(n.code,{children:"aptos-node"}),"\u3092\u958b\u59cb\u3057\u307e\u3059\u3002",(0,o.jsx)(n.code,{children:"aptos-node"}),"\u306f\u8d77\u52d5\u6642\u306b\u3001\u30b8\u30a7\u30cd\u30b7\u30b9\u30aa\u30fc\u30ac\u30ca\u30a4\u30b6\u30fc\u306b\u3088\u3063\u3066\u63d0\u4f9b\u3055\u308c\u305f\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3067",(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(n.li,{children:"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306f\u3001\u30b9\u30c6\u30fc\u30af\u306e\u6700\u5c0f\u4eba\u6570\u304c\u5229\u7528\u53ef\u80fd\u3068\u306a\u308b\u3068\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"aptos\u30b3\u30a2\u3092\u6e96\u5099\u3059\u308b",children:"Aptos\u30b3\u30a2\u3092\u6e96\u5099\u3059\u308b"}),"\n",(0,o.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Aptos\u30bd\u30fc\u30b9\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002\u8a2d\u5b9a\u306f",(0,o.jsx)(n.a,{href:"/guides/building-from-source",children:"\u30bd\u30fc\u30b9\u304b\u3089Aptos\u3092\u69cb\u7bc9\u3059\u308b"}),"\u3092\u5fa1\u89a7\u4e0b\u3055\u3044\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"layout\u30d5\u30a1\u30a4\u30eb",children:[(0,o.jsx)(n.code,{children:"layout"}),"\u30d5\u30a1\u30a4\u30eb"]}),"\n",(0,o.jsx)(n.p,{children:"\u30ec\u30a4\u30a2\u30a6\u30c8\u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u3092\u542b\u307f\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"root_key"}),": Aptos\u30b3\u30a4\u30f3\u7ba1\u7406\u7528\u306e Ed25519 \u516c\u958b\u9375\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"users"}),": \u53c2\u52a0\u8005\u306e\u30bb\u30c3\u30c8"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"chain_id"}),": ",(0,o.jsx)(n.code,{children:"ChainId"}),"\u3082\u3057\u304f\u306f\u3001\u3053\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u4ed6\u306eAptos\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u533a\u5225\u3059\u308b\u4e00\u610f\u306e\u6574\u6570"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'root_key: "0xca3579457555c80fc7bb39964eb298c414fd60f81a2f8eedb0244ec07a26e575"\nusers:\n  - alice\n  - bob\nchain_id: 8\n'})}),"\n",(0,o.jsx)(n.h3,{id:"aptos\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u69cb\u7bc9",children:"Aptos\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u69cb\u7bc9"}),"\n",(0,o.jsx)(n.p,{children:"\u3042\u306a\u305f\u306eAptos\u30b3\u30a2\u30ea\u30dd\u30b8\u30c8\u30ea\u304b\u3089\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u69cb\u7bc9\u3057\u3066\u30d1\u30c3\u30b1\u30fc\u30b8\u5316\u3057\u307e\u3059\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cargo run --package framework\nmkdir aptos-framework-release\ncp aptos-framework/releases/artifacts/current/build/**/bytecode_modules/* aptos-framework-release\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306f",(0,o.jsx)(n.code,{children:"aptos-framework-release"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u3078\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.h3,{id:"validatorconfiguration\u30d5\u30a1\u30a4\u30eb",children:[(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u30d5\u30a1\u30a4\u30eb"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u30d5\u30a1\u30a4\u30eb\u306f\u4ee5\u4e0b\u3092\u542b\u307f\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"account_address"}),": \u3053\u306e\u30d0\u30ea\u30c7\u30fc\u30bf\u30fc\u3092\u7ba1\u7406\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3002\u3053\u308c\u306f\u3001",(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u30d5\u30a1\u30a4\u30eb\u5185\u3067\u63d0\u4f9b\u3055\u308c\u305f",(0,o.jsx)(n.code,{children:"account_key"}),"\u304b\u3089\u6d3e\u751f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"consensus_key"}),": \u30d0\u30ea\u30c7\u30fc\u30bf\u304b\u3089\u306e\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8a8d\u8a3c\u3059\u308b\u305f\u3081\u306e\u516c\u958b\u9375"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"account_key"}),": \u3053\u306e\u30d0\u30ea\u30c7\u30fc\u30bf\u30fc\u3092\u7ba1\u7406\u3059\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u516c\u958b\u9375\u3002\u3053\u308c\u306f",(0,o.jsx)(n.code,{children:"account_address"}),"\u3092\u6d3e\u751f\u3059\u308b\u305f\u3081\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"network_key"}),": \u30d0\u30ea\u30c7\u30fc\u30bf\u3068\u30d5\u30eb\u30ce\u30fc\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8a8d\u8a3c\u304a\u3088\u3073\u6697\u53f7\u5316\u306e\u4e21\u65b9\u3067\u4f7f\u7528\u3055\u308c\u308b\u516c\u958b\u9375\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"validator_host"}),": \u30d0\u30ea\u30c7\u30fc\u30bf\u304c\u5b58\u5728\u3059\u308b\u30cd\u30c3\u30c8\u30ef\u30fc\u30af \u30a2\u30c9\u30ec\u30b9\u3002\u3053\u308c\u306f",(0,o.jsx)(n.code,{children:"host"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3068",(0,o.jsx)(n.code,{children:"port"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u307f\u307e\u3059\u3002",(0,o.jsx)(n.code,{children:"host"}),"\u306f\u3001DNS\u540d\u307e\u305f\u306fIP\u30a2\u30c9\u30ec\u30b9\u306e\u3044\u305a\u308c\u304b\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u73fe\u5728\u306fIPv4\u306e\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"full_node_host"}),": \u30d5\u30eb\u30ce\u30fc\u30c9\u304c\u5b58\u5728\u3059\u308b\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30a2\u30c9\u30ec\u30b9\u3002\u3053\u308c\u306f",(0,o.jsx)(n.code,{children:"host"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3068",(0,o.jsx)(n.code,{children:"port"}),"\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u307f\u307e\u3059\u3002",(0,o.jsx)(n.code,{children:"host"}),"\u306fDNS\u540d\u307e\u305f\u306fIP\u30a2\u30c9\u30ec\u30b9\u306e\u3044\u305a\u308c\u304b\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u73fe\u5728\u306fIPv4\u306e\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"stake_amount"}),": \u3053\u306e\u30ce\u30fc\u30c9\u304c\u30b9\u30c6\u30fc\u30af\u3057\u3066\u3044\u308b\u30b3\u30a4\u30f3\u306e\u6570\u3002\u3053\u308c\u306f",(0,o.jsx)(n.code,{children:"1"}),"\u3067\u3042\u308b\u3068\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002\u4e88\u60f3\u3068\u9055\u3046\u5834\u5408\u306f\u3001\u69cb\u6210\u304c\u7121\u52b9\u3068\u898b\u306a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'account_address: ccd49f3ea764365ac21e99f029ca63a9b0fbfab1c8d8d5482900e4fa32c5448a\nconsensus_key: "0xa05b8f41057ac72f9ca99f5e3b1b787930f03ba5e448661f2a1fac98371775ee"\naccount_key: "0x3d15ab64c8b14c9aab95287fd0eb894aad0b4bd929a5581bcc8225b5688f053b"\nnetwork_key: "0x43ce1a4ac031b98bb1ee4a5cd72a4cca0fd72933d64b22cef4f1a61895c2e544"\nvalidator_host:\n  host: bobs_host\n  port: 6180\nfull_node_host:\n  host: bobs_host\n  port: 6182\nstake_amount: 1\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"aptos"}),"CLI\u3092\u4f7f\u7528\u3057\u3066\u3053\u308c\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u3042\u306a\u305f\u306e\u30d0\u30ea\u30c7\u30fc\u30bf\u306e\u30ad\u30fc\u3092\u751f\u6210\u3057\u307e\u3059"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cargo run --package aptos -- genesis generate-keys --output-dir bobs\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\u3042\u306a\u305f\u306e",(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u3092\u751f\u6210\u3057\u307e\u3059"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cargo run --package aptos -- \\\\\n    genesis set-validator-configuration \\\\\n    --keys-dir bobs \\\\\n    --username bob \\\\\n    --validator-host bobs_host:6180 \\\\\n    --full-node-host bobs_host:6180 \\\\\n    --local-repository-dir .\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["\u6700\u5f8c\u306e\u30b3\u30de\u30f3\u30c9\u306f\u3001",(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u751f\u6210\u306e\u305f\u3081\u4ed6\u306e\u53c2\u52a0\u8005\u3078\u914d\u5e03\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b",(0,o.jsx)(n.code,{children:"bob.yaml"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u7523\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"\u30b8\u30a7\u30cd\u30b7\u30b9\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b",children:"\u30b8\u30a7\u30cd\u30b7\u30b9\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u306f",(0,o.jsx)(n.code,{children:"layout"}),"\u30d5\u30a1\u30a4\u30eb\u3001\u500b\u3005\u306e\u5404",(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u30d5\u30a1\u30a4\u30eb\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u30ea\u30ea\u30fc\u30b9\u3092\u53d6\u5f97\u3057\u305f\u5f8c\u751f\u6210\u3067\u304d\u307e\u3059\u3002\u524d\u306e\u6bb5\u968e\u3067\u63d0\u4f9b\u3055\u308c\u305f",(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u6bb5\u968e\u304c",(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u306e\u751f\u6210\u306e\u305f\u3081\u306e\u914d\u5e03\u7269\u3068\u540c\u3058\u3067\u3042\u308b\u3053\u3068\u3092\u691c\u8a3c\u3059\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002\n\u4e0d\u4e00\u81f4\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u3059\u3079\u3066\u306e\u53c2\u52a0\u8005\u306b\u901a\u77e5\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3059\u308b\u306b\u306f\u3001"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"layout"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u30c7\u30a3\u30ec\u30af\u30c8\u30ea (\u4f8b:",(0,o.jsx)(n.code,{children:"genesis"}),")\u3078\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:["\u5168\u3066\u306e",(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u30d5\u30a1\u30a4\u30eb\u3092",(0,o.jsx)(n.code,{children:"genesis"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3078\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ValidatorConfiguration"}),"\u30d5\u30a1\u30a4\u30eb\u304c",(0,o.jsx)(n.code,{children:"layout"}),"\u30d5\u30a1\u30a4\u30eb\u5185\u306e",(0,o.jsx)(n.code,{children:"users"}),"\u306e\u30bb\u30c3\u30c8\u4e0b\u3078\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"genesiss"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u5185\u306b",(0,o.jsx)(n.code,{children:"framework"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092\u4f5c\u6210\u3057\u3001\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u30ea\u30ea\u30fc\u30b9",(0,o.jsx)(n.code,{children:".mv"}),"\u30d5\u30a1\u30a4\u30eb\u3092\u305d\u306e",(0,o.jsx)(n.code,{children:"framework"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"aptos"}),"CLI\u3092\u4f7f\u7528\u3057\u3066\u30b8\u30a7\u30cd\u30b7\u30b9\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"cargo run --package aptos -- genesis generate-genesis --local-repository-dir genesis\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"aptos-node\u306e\u958b\u59cb",children:[(0,o.jsx)(n.code,{children:"aptos-node"}),"\u306e\u958b\u59cb"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"genesis.blob"}),"\u3068\u30a6\u30a7\u30a4\u30dd\u30a4\u30f3\u30c8\u3092\u751f\u6210\u3057\u305f\u3089\u3001\u305d\u308c\u3089\u3092\u30d0\u30ea\u30c7\u30fc\u30bf\u30fc\u3068\u30d5\u30eb\u30ce\u30fc\u30c9\u306e\u69cb\u6210\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u914d\u7f6e\u3057\u3001\u3042\u306a\u305f\u306e\u30d0\u30ea\u30c7\u30fc\u30bf\u30fc\u3068\u30d5\u30eb\u30ce\u30fc\u30c9\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},83581:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var o=s(11855);const c={},i=o.createContext(c);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);