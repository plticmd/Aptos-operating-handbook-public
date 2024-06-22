"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[7582],{66557:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=i(63159),l=i(83581);const r={},c="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406",d={id:"guides/transaction-management",title:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406",description:"\u3053\u306e\u30ac\u30a4\u30c9\u306f\u3001Aptos\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u62e1\u5f35\u51fa\u6765\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406\u30cf\u30fc\u30cd\u30b9\u306e\u69cb\u7bc9\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/transaction-management.md",sourceDirName:"guides",slug:"/guides/transaction-management",permalink:"/guides/transaction-management",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/guides/transaction-management.md",tags:[],version:"current",lastUpdatedAt:1716499078,formattedLastUpdatedAt:"2024\u5e745\u670823\u65e5",frontMatter:{},sidebar:"appSidebar",previous:{title:"\u30b9\u30dd\u30f3\u30b5\u30fc\u30c9\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3",permalink:"/guides/sponsored-transactions"},next:{title:"\u8a8d\u8a3c\u30ad\u30fc\u306e\u30ed\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3",permalink:"/guides/account-management/key-rotation"}},t={},o=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u69cb\u7bc9",id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u69cb\u7bc9",level:2},{value:"\u5b9f\u88c5",id:"\u5b9f\u88c5",level:3},{value:"\u30b7\u30fc\u30b1\u30f3\u30b9No.\u306e\u7ba1\u7406",id:"\u30b7\u30fc\u30b1\u30f3\u30b9no\u306e\u7ba1\u7406",level:3},{value:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u7ba1\u7406",id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u7ba1\u7406",level:3},{value:"\u30ef\u30fc\u30ab\u30fc\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc",id:"\u30ef\u30fc\u30ab\u30fc\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc",level:3}];function h(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u306e\u30ac\u30a4\u30c9\u306f\u3001Aptos\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u62e1\u5f35\u51fa\u6765\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u7ba1\u7406\u30cf\u30fc\u30cd\u30b9\u306e\u69cb\u7bc9\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,s.jsx)(e.p,{children:"Aptos\u3067\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3068\u30a2\u30ab\u30a6\u30f3\u30c8\u30d9\u30fc\u30b9\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u63d0\u4f9b\u3059\u308b\u7f72\u540d\u304b\u627f\u8a8d\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc\u306e\u89b3\u70b9\u304b\u3089\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002Aptos\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u65b0\u3057\u3044\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u53d7\u4fe1\u3059\u308b\u3068\u3001\u4ee5\u4e0b\u306b\u95a2\u3057\u305f\u3044\u304f\u3064\u304b\u306e\u30eb\u30fc\u30eb\u3078\u5f93\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u9001\u4fe1\u3055\u308c\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u3088\u3063\u3066\u9069\u5207\u306b\u627f\u8a8d\u3055\u308c\u308b\u5fc5\u8981\u304c\u6709\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6700\u65b0\u306e\u53f0\u5e33\u66f4\u65b0\u304c\u5b9a\u7fa9\u3059\u308b\u73fe\u5728\u6642\u523b\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u671f\u9650\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3088\u308a\u524d\u3067\u3042\u308b\u5fc5\u8981\u304c\u6709\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u756a\u53f7\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u4ee5\u4e0a\u3067\u3042\u308b\u5fc5\u8981\u304c\u6709\u308a\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u521d\u306e\u30ce\u30fc\u30c9\u304c\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u53d7\u3051\u5165\u308c\u308b\u3068\u3001\u305d\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u8ffd\u52a0\u306e\u30eb\u30fc\u30eb\u306b\u3088\u3063\u3066\u305d\u306e\u30b7\u30b9\u30c6\u30e0\u3092\u901a\u904e\u3057\u307e\u3059\u3002\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b7\u30fc\u30b1\u30f3\u30b9No.\u304c\u73fe\u5728\u306e\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3088\u308a\u3082\u5927\u304d\u3044\u5834\u5408\u3001\u30d1\u30b9\u306e\u5168\u3066\u306e\u30ce\u30fc\u30c9\u304c\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u72b6\u614b\u3068\u73fe\u5728\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u9593\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3067\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u78ba\u8a8d\u51fa\u6765\u3066\u3044\u308b\u5834\u5408\u306e\u307f\u3001\u5408\u610f\u65b9\u5411\u3078\u9032\u884c\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b :"}),"\n",(0,s.jsx)(e.p,{children:"\u30a2\u30ea\u30b9\u306f\u73fe\u5728\u306e\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b7\u30fc\u30b1\u30f3\u30b9No.\u304c5\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u6240\u6709\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30a2\u30ea\u30b9\u306f\u30dc\u30d6\u306e\u30ce\u30fc\u30c9\u3078\u30b7\u30fc\u30b1\u30f3\u30b9No.6\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u63d0\u51fa\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30ce\u30fc\u30c9\u3092\u53d7\u3051\u5165\u308c\u308b\u30dc\u30d6\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u53d7\u3051\u5165\u308c\u307e\u3059\u304c\u3001\u30dc\u30d6\u306f5\u3092\u898b\u3066\u3044\u306a\u3044\u305f\u3081\u305d\u308c\u3092\u9032\u884c\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9032\u884c\u3055\u305b\u308b\u305f\u3081\u306b\u306f\u3001\u30a2\u30ea\u30b9\u304c\u30dc\u30d6\u3078\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3No.5\u3092\u9001\u4fe1\u3059\u308b\u304b\u30015\u304c\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u4e8b\u306e\u5408\u610f\u3092\u30dc\u30d6\u304c\u77e5\u3089\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u6709\u308a\u307e\u3059\u3002\u5f8c\u8005\u3067\u306f\u30a2\u30ea\u30b9\u306f\u4ed6\u306e\u30ce\u30fc\u30c9\u3092\u4ecb\u3057\u3066\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9001\u4fe1\u3057\u307e\u3057\u305f\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308c\u4ee5\u5916\u30672\u3064\u306e\u539f\u5247\u304c\u6b8b\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5358\u4e00\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3078\u9001\u4fe1\u3055\u308c\u308b\u30b3\u30df\u30c3\u30c8\u3055\u308c\u3066\u3044\u306a\u3044\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u6700\u5927100\u4fdd\u6301\u51fa\u6765\u307e\u3059\u3002\u305d\u308c\u4ee5\u4e0a\u306e\u5834\u5408\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u62d2\u5426\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u30a2\u30ea\u30b9\u304c\u6700\u521d\u306e100\u3092\u30ce\u30fc\u30c9\u30dc\u30d6\u3078\u9001\u4fe1\u3057\u3001\u6b21\u306e100\u3092\u30ce\u30fc\u30c9\u30ad\u30e3\u30ed\u30eb\u3078\u9001\u4fe1\u3057\u305f\u5834\u5408\u3001\u9ed9\u3063\u3066\u8d77\u3053\u308b\u53ef\u80fd\u6027\u304c\u6709\u308a\u307e\u3059\u3002\u305d\u308c\u3089\u4e21\u65b9\u306e\u30ce\u30fc\u30c9\u304c\u5171\u901a\u306e\u6d41\u308c\u3092\u5171\u6709\u3059\u308b\u306a\u3089\u3001\u305d\u306e\u6d41\u308c\u306f\u30dc\u30d6\u7d4c\u7531\u3067\u9001\u4fe1\u3057\u305f\u30a2\u30ea\u30b9\u306e100\u3092\u53d7\u3051\u5165\u308c\u307e\u3059\u304c\u3001\u30ad\u30e3\u30ed\u30eb\u7d4c\u7531\u3067\u9001\u4fe1\u3057\u305f\u30a2\u30ea\u30b9\u306e100\u306f\u9ed9\u3063\u3066\u62d2\u5426\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8907\u6570\u306e\u30ce\u30fc\u30c9\u3078\u306e\u7570\u306a\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u9001\u4fe1\u306f\u7d50\u679c\u3068\u3057\u3066\u3001\u5148\u884c\u3059\u308b\u5168\u3066\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u4e8b\u3092\u201d\u9001\u4fe1\u3055\u308c\u305f\u201d\u304c\u77e5\u308b\u307e\u3067\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u9001\u4fe1\u3057\u305f\u30ce\u30fc\u30c9\u304b\u3089\u9032\u884c\u3057\u306a\u3044\u3086\u3063\u304f\u308a\u3068\u3057\u305f\u89e3\u6c7a\u3068\u306a\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30a2\u30ea\u30b9\u304c\u30dc\u30d6\u7d4c\u7531\u3067\u6700\u521d\u306e50\u3092\u9001\u4fe1\u3057\u3001\u6b21\u306b\u30ad\u30e3\u30ed\u30eb\u7d4c\u7531\u306750\u3092\u9001\u4fe1\u3059\u308b\u5834\u5408\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u69cb\u7bc9",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u69cb\u7bc9"}),"\n",(0,s.jsx)(e.p,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30cb\u30e5\u30a2\u30f3\u30b9\u3092\u7406\u89e3\u3057\u305f\u306e\u3067\u3001\u5805\u7262\u306a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 \u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u69cb\u7bc9\u306b\u3064\u3044\u3066\u6df1\u5800\u308a\u3057\u307e\u3057\u3087\u3046\u3002\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u30b3\u30a2\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u69cb\u6210\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30b7\u30fc\u30b1\u30f3\u30b9No.\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u306f\u5358\u4e00\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u4f7f\u7528\u53ef\u80fd\u306a\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u7ba1\u7406\u3057\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u306e\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u53d7\u3051\u53d6\u308a\u3001\u30b7\u30fc\u30b1\u30f3\u30b9No.\u30b8\u30a7\u30cd\u30ec\u30fc\u30bf\u30fc\u304b\u3089\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u53d7\u3051\u53d6\u308a\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u30ad\u30fc\u3078\u30a2\u30af\u30bb\u30b9\u3057\u3066\u5b9f\u884c\u53ef\u80fd\u306a\u7f72\u540d\u6e08\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30783\u30d4\u30fc\u30b9\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3002\u3053\u308c\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3078\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u5f79\u5272\u3082\u6709\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30ef\u30fc\u30ab\u30fc\u3001\u30ea\u30fc\u30c0\u30fc\u30cf\u30fc\u30cd\u30b9\u306f\u8907\u6570\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5358\u4e00\u306e\u5171\u6709\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u7f72\u540d\u8005\u3092\u5171\u6709\u51fa\u6765\u308b\u69d8\u306b\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u73fe\u5728\u3001\u3053\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u5b9f\u8cea\u7684\u306a\u30ad\u30e5\u30fc\u3092\u69cb\u7bc9\u3057\u306a\u3044\u3001\u9045\u5ef6\u304c\u6b86\u3069\u7121\u3044\u9001\u4fe1\u304c\u5b9f\u884c\u3001\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3060\u3068\u4eee\u5b9a\u3057\u307e\u3059\u3002\u9ad8\u3044\u9700\u8981\u306b\u5bfe\u5fdc\u3059\u308b\u306b\u306f\u4ee5\u4e0b\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u3053\u306e\u4f5c\u696d\u3092\u62e1\u5f35\u3059\u308b\u5fc5\u8981\u304c\u6709\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u512a\u5148\u3057\u3066\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3078\u30b3\u30df\u30c3\u30c8\u3059\u308b\u69d8\u3001",(0,s.jsx)(e.code,{children:"base_gas_unit"}),"\u4fa1\u683c\u3092\u6700\u9069\u5316\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.li,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u51e6\u7406\u30ec\u30fc\u30c8\u304c\u671f\u9650\u30bf\u30a4\u30de\u30fc\u3092\u9069\u5207\u306b\u8a2d\u5b9a\u3055\u308c\u308b\u69d8\u51e6\u7406\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u5931\u6557\u306e\u6271\u3044\u306f\u7121\u8996\u3059\u308b\u304b\u9001\u4fe1\u3057\u76f4\u3059\u304b\u306e\u3069\u3061\u3089\u304b\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u30a2\u30ab\u30a6\u30f3\u30c8\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u5358\u4e00\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u7ba1\u7406\u3059\u308b\u5fc5\u8981\u304c\u6709\u308a\u307e\u3059\u3002\u3067\u306a\u3051\u308c\u3070\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u306e\u5404\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u30e1\u30e2\u30ea\u5185\u306e\u72b6\u614b\u304c\u53e4\u304f\u306a\u308a\u3001\u30b7\u30fc\u30b1\u30f3\u30b9No.\u304c\u91cd\u8907\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5b9f\u88c5",children:"\u5b9f\u88c5"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Python","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/aptos-labs/aptos-core/pull/7987",children:"\u30b7\u30fc\u30b1\u30f3\u30b9No.\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/aptos-labs/aptos-core/pull/7987",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30de\u30cd\u30fc\u30b8\u30e3\u30fc"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://github.com/aptos-labs/aptos-core/pull/7986",children:"\u30ef\u30fc\u30ab\u30fc\u30ea\u30fc\u30c0\u30fc\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8"})}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u30b7\u30fc\u30b1\u30f3\u30b9no\u306e\u7ba1\u7406",children:"\u30b7\u30fc\u30b1\u30f3\u30b9No.\u306e\u7ba1\u7406"}),"\n",(0,s.jsx)(e.p,{children:"\u5404\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u4ee5\u524d\u9001\u4fe1\u3055\u308c\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3078\u306e\u9023\u7d9a\u306e\u500b\u5225\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u304c\u5fc5\u8981\u3067\u3059\u3002\u3053\u308c\u306f\u4ee5\u4e0b\u306e\u30d7\u30ed\u30bb\u30b9\u3067\u63d0\u4f9b\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u8d77\u52d5\u6642\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u73fe\u5728\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3067\u30af\u30a8\u30ea\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u540c\u6642\u306b100\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u307e\u3067\u30b5\u30dd\u30fc\u30c8\u3057\u307e\u3059\u3002\u305d\u308c\u306f\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u306e\u78ba\u8a8d\u7121\u3057\u3067100\u30b7\u30fc\u30b1\u30f3\u30b9No.\u304c\u5206\u914d\u3059\u308b\u4e8b\u304c\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5b9f\u884c\u4e2d\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c100\u3042\u308b\u5834\u5408\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u30af\u30a8\u30ea\u3059\u308b\u4e8b\u3067\u5b9f\u969b\u306e\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u72b6\u614b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u73fe\u5728\u306e\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5b9f\u884c\u4e2d\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c100\u672a\u6e80\u306e\u5834\u5408\u306f\u30b9\u30c6\u30c3\u30d7\uff12\u3078\u623b\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u30010.1\u79d2\u9593\u30b9\u30ea\u30fc\u30d7\u3057\u3001\u73fe\u5728\u306e\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b7\u30fc\u30b1\u30f3\u30b9No.\u306e\u518d\u8a55\u4fa1\u3092\u7d9a\u3051\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5168\u3066\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u6709\u52b9\u671f\u9650\u304c\u5fc5\u8981\u3067\u3059\u3002\u6709\u52b9\u671f\u9650\u304c\u904e\u304e\u305f\u5834\u5408\u306f\u3001\u5931\u6557\u3057\u305f\u3068\u898b\u306a\u3057\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u30ea\u30bb\u30c3\u30c8\u3057\u307e\u3059\u3002\u7c21\u5358\u306a\u30b1\u30fc\u30b9\u3068\u3057\u3066\u306f\u6700\u5927\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3No.\u304c\u5b9f\u884c\u4e2d\u3001\u5931\u6557\u306e\u307f\u3092\u76e3\u8996\u3057\u3001\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u4ed6\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u3053\u308c\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4e26\u884c\u3057\u3066\u3001\u9001\u4fe1\u3055\u308c\u305f\u65b0\u3057\u3044\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u76e3\u8996\u3057\u307e\u3059\u3002\u6700\u3082\u65e9\u3044\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u305f\u3089\u3001\u305d\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u307e\u3067\u540c\u671f\u3057\u307e\u3059\u3002\u6b21\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3067\u3053\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u7e70\u308a\u8fd4\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f55\u304b\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u306f\u3001\u5168\u3066\u306e\u672a\u89e3\u6c7a\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u3059\u308b\u307e\u3067\u5f85\u6a5f\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d9a\u884c\u65b9\u6cd5\u306e\u6c7a\u5b9a\u3092\u4efb\u305b\u307e\u3059\u3002\u5931\u6557\u3057\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u518d\u751f\u3059\u308b\u7b49\u3002\u672a\u51e6\u7406\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u5f85\u6a5f\u3059\u308b\u6700\u5584\u306e\u65b9\u6cd5\u306f\u3001\u5143\u5e33\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u30af\u30a8\u30ea\u3057\u3001\u5c11\u306a\u304f\u3068\u3082\u6700\u5f8c\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u9001\u4fe1\u6642\u523b\u304b\u3089\u6700\u5927\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u304c\u7d4c\u904e\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u4e8b\u3067\u3059\u3002\u305d\u3053\u304b\u3089\u3001\u6700\u5f8c\u306b\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u4ee5\u964d\u306e\u5168\u3066\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u30b3\u30df\u30c3\u30c8\u3055\u308c\u3066\u3044\u308b\u304b\u3001\u30e1\u30e2\u30ea\u30d7\u30fc\u30eb\u5185\u306b\u9577\u304f\u5b58\u5728\u3057\u306a\u3044\u4e8b\u3092\u30e1\u30e2\u30ea\u30d7\u30fc\u30eb\u3067\u691c\u8a3c\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u7279\u5b9a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306eREST API\u3092\u30af\u30a8\u30ea\u3057\u3001\u73fe\u5728\u8a55\u4fa1\u3055\u308c\u3066\u3044\u308b\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3092\u6307\u5b9a\u3057\u3066\u3001\u5236\u9650\u30921\u3078\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30c1\u30a7\u30c3\u30af\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u30ed\u30fc\u30ab\u30eb\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3No.\u3092\u518d\u540c\u671f\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u3053\u308c\u3089\u306e\u5931\u6557\u306e\u51e6\u7406\u624b\u9806\u306f\u4ee5\u4e0b\u306e\u4e8b\u7531\u304b\u3089\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u30e1\u30e2\u30ea\u30d7\u30fc\u30eb\u306f\u671f\u9650\u5207\u308c\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u5373\u5ea7\u306b\u524a\u9664\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u3066\u3044\u308b\u5834\u5408\u3067\u3082\u3001\u65b0\u3057\u3044\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u65e2\u5b58\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4e0a\u66f8\u304d\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u3001\u3064\u307e\u308a\u5143\u5e33\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u304c\u6709\u52b9\u671f\u9650\u3092\u6c7a\u5b9a\u3057\u3001\u30ed\u30fc\u30ab\u30eb\u30ce\u30fc\u30c9\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u671f\u9650\u5207\u308c\u3067\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u304c\u767a\u751f\u3057\u305f\u5f8c\u306b\u30b3\u30df\u30c3\u30c8\u3055\u308c\u305f\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u78ba\u8a8d\u3057\u305f\u5f8c\u306b\u306e\u307f\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u7ba1\u7406",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u7ba1\u7406"}),"\n",(0,s.jsx)(e.p,{children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u9001\u4fe1\u3055\u308c\u308b\u3068\u3001\u3055\u307e\u3056\u307e\u306a\u624b\u9806\u304c\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"REST \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3078\u306e\u9001\u4fe1\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u9001\u4fe1\u4e2d\u306e\u30e1\u30e2\u30ea\u30d7\u30fc\u30eb\u3067\u306e\u5b9f\u884c\u524d\u691c\u8a3c\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5404\u4e0a\u6d41\u30ce\u30fc\u30c9\u3067\u5b9f\u884c\u524d\u691c\u8a3c\u304c\u884c\u308f\u308c\u308b\u30e1\u30e2\u30ea\u30d7\u30fc\u30eb\u304b\u3089\u30e1\u30e2\u30ea\u30d7\u30fc\u30eb\u3078\u306e\u9001\u4fe1\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u63d0\u6848\u3078\u306e\u7d44\u307f\u8fbc\u307f\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5b9f\u884c\u524d\u691c\u8a3c\u3092\u3082\u3046\u3072\u3068\u3064\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30b9\u30c8\u30ec\u30fc\u30b8\u3078\u306e\u30b3\u30df\u30c3\u30c8\u3068\u5b9f\u884c\u3002\nExecution and committing to storage."}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8003\u616e\u3059\u3079\u304d\u6f5c\u5728\u7684\u306a\u5931\u6557\u306e\u30b1\u30fc\u30b9\u304c\u6570\u591a\u304f\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u9001\u4fe1\u6642\u306e\u5931\u6557 (1\u30682):","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u8996\u6027: \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u5229\u7528\u3067\u304d\u306a\u3044\u304b\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u524d\u306e\u691c\u8a3c\u306b\u5931\u6557\u3057\u305f\u3068\u3044\u3046\u30a8\u30e9\u30fc\u3092\u53d7\u3051\u53d6\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u30a8\u30e9\u30fc\u304c\u53ef\u7528\u6027\u307e\u305f\u306f\u91cd\u8907\u3057\u305f\u30b7\u30fc\u30b1\u30f3\u30b9No.\u3068\u95a2\u9023\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u30a2\u30af\u30bb\u30b9\u304c\u53ef\u80fd\u3068\u306a\u308a\u3001\u30b7\u30fc\u30b1\u30f3\u30b9No.\u304c\u518d\u540c\u671f\u3055\u308c\u308b\u307e\u3067\u5f85\u3061\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u5b9f\u884c\u524d\u691c\u8a3c\u306e\u5931\u6557\u306f\u73fe\u5728\u5bfe\u8c61\u5916\u3067\u3059\u3002\n\u91cd\u8907\u3059\u308b\u30b7\u30fc\u30b1\u30f3\u30b9\u756a\u53f7\u306b\u95a2\u9023\u3059\u308b\u5931\u6557\u4ee5\u5916\u3067\u306f\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u7121\u52b9\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ad\u30fc\u3092\u767a\u884c\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u3001\u307e\u305f\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u767a\u884c\u3067\u30ac\u30b9\u7528\u306e\u5145\u5206\u306a\u8cc7\u91d1\u304c\u4e0d\u8db3\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u63d0\u51fa\u304b\u3089\u5b9f\u884c\u307e\u3067\u306e\u5931\u6557\uff083\u30014\u30015\uff09","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u8996\u6027: \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u304c\u5207\u308c\u308b\u307e\u3067\u5f85\u3064\u4e8b\u3067\u306e\u307f\u308f\u304b\u308a\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u3053\u308c\u3089\u306f\u3001\u4ee5\u524d\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u5b9f\u884c\u6642\u306b\u30a2\u30ab\u30a6\u30f3\u30c8\u304c\u5909\u66f4\u3055\u308c\u305f\u969b\u306e\u4ed6\u306e\u5b9f\u884c\u524d\u691c\u8a3c\u30a8\u30e9\u30fc\u3068\u540c\u3058\u3067\u3059\u3002\u30b7\u30fc\u30b1\u30f3\u30b9\u756a\u53f7\u304c\u91cd\u8907\u3057\u3066\u3044\u308b\u304b\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30ac\u30b9\u7528\u306e\u8cc7\u91d1\u304c\u4e0d\u8db3\u3057\u3066\u3044\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\u5b9f\u884c\u4e2d\u306e\u5931\u6557 (6):","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u53ef\u8996\u6027: \u3053\u308c\u3089\u306f\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3078\u30b3\u30df\u30c3\u30c8\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u3053\u308c\u3089\u306e\u30a8\u30e9\u30fc\u306f\u3001\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u72b6\u614b\u306e\u554f\u984c\u306e\u7d50\u679c\u3068\u3057\u3066\u767a\u751f\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u3001\u65b0\u3057\u3044\u5165\u672d\u304c\u5b9f\u969b\u306b\u306f\u73fe\u5728\u306e\u5165\u672d\u3088\u308a\u5b89\u3044\u53ef\u80fd\u6027\u304c\u3042\u308b\u30aa\u30fc\u30af\u30b7\u30e7\u30f3\u306a\u3069\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u3067\u3042\u308b\u50be\u5411\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u30ef\u30fc\u30ab\u30fc\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc",children:"\u30ef\u30fc\u30ab\u30fc\u3068\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u30fc"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0a\u8a18\u306e\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3059\u308b\u3068\u30011\u3064\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30d6\u30ed\u30c3\u30af\u306e\u5148\u982d\u304b\u3089\u30d6\u30ed\u30c3\u30af\u306e\u6700\u5f8c\u307e\u3067100\u4ee5\u4e0a\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u30d7\u30c3\u30b7\u30e5\u3067\u304d\u307e\u3059\u3002100\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u5168\u30661\u3064\u306e\u30d6\u30ed\u30c3\u30af\u5185\u3067\u6d88\u8cbb\u3055\u308c\u308b\u3068\u4eee\u5b9a\u3059\u308b\u3068\u3001\u6b21\u306e100\u30b9\u30ed\u30c3\u30c8\u304c\u5229\u7528\u53ef\u80fd\u3068\u306a\u308b\u307e\u3067\u5c11\u3057\u6642\u9593\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u9045\u5ef6\u3068\u8907\u6570\u6bb5\u968e\u306e\u30d1\u30a4\u30d7\u30e9\u30a4\u30f3\u306b\u3088\u308b\u7269\u3067\u3059\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3092\u6700\u5927\u9650\u306b\u6d3b\u7528\u3057\u3066\u5927\u91cf\u306e\u30b9\u30eb\u30fc\u30d7\u30c3\u30c8\u3092\u5b9f\u73fe\u3059\u308b\u306b\u306f\u3001\u5358\u4e00\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3060\u3051\u3067\u306f\u4e0d\u5145\u5206\u3067\u3059\u3002\u4ee3\u308f\u308a\u306b\u3001Aptos\u306f\u3001\n\u5171\u6709\u30a2\u30ab\u30a6\u30f3\u30c8(\u30ea\u30bd\u30fc\u30b9\u30a2\u30ab\u30a6\u30f3\u30c8\u3068\u3057\u3066\u3082\u77e5\u3089\u308c\u3066\u3044\u307e\u3059)\u3092\u901a\u3058\u3066\u4f5c\u696d\u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u8cac\u4efb\u3092\u5171\u6709\u3067\u304d\u308b\n\u30ef\u30fc\u30ab\u30fc\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u6982\u5ff5\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306e\u30e2\u30c7\u30eb\u3067\u306f\u3001\u5404\u5f93\u696d\u54e1\u306f\u5171\u6709\u30a2\u30ab\u30a6\u30f3\u30c8\u306e",(0,s.jsx)(e.code,{children:"SignerCap"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u305f\u3081\u3001\u5171\u6709\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u306a\u308a\u3059\u307e\u3057\u305f\u308a\u3001\u5171\u6709\u30a2\u30ab\u30a6\u30f3\u30c8\u306e",(0,s.jsx)(e.code,{children:"signer"}),"\u3092\u751f\u6210\u3057\u305f\u308a\u3067\u304d\u307e\u3059\u3002",(0,s.jsx)(e.code,{children:"signer"}),"\u3092\u53d6\u5f97\u3059\u308b\u3068\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u5171\u6709\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u7f72\u540d\u8005\u306b\u3088\u3063\u3066\u30b2\u30fc\u30c8\u3055\u308c\u305f\u30ed\u30b8\u30c3\u30af\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u5b9f\u884c\u53ef\u80fd\u3067\u3042\u308c\u3070\u3001\u5225\u306e\u30e2\u30c7\u30eb\u3068\u3057\u3066",(0,s.jsx)(e.code,{children:"signer"}),"\u304b\u3089\u8a31\u53ef\u3092\u5b8c\u5168\u306b\u5207\u308a\u96e2\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u56fa\u6709\u306e\u6a5f\u80fd\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u3053\u306e\u6a5f\u80fd\u3092\u5404\u30ef\u30fc\u30ab\u30fc\u3078\u4ed8\u4e0e\u3057\u3001\u5171\u6709\u30a4\u30f3\u30d5\u30e9\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u4e0a\u3067\u64cd\u4f5c\u51fa\u6765\u308b\u69d8\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f: \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u8aad\u307f\u8fbc\u307f\u3082\u3057\u304f\u306f\u66f8\u304d\u8fbc\u307f\u3067\u4f55\u304b\u885d\u7a81\u304c\u6709\u308b\u5834\u5408\u3001\u5171\u6709\u306e\u30a4\u30f3\u30d5\u30e9\u4e0a\u306e\u4e26\u5217\u5316\u306f\u5236\u9650\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u30d6\u30ed\u30c3\u30af\u3067\u8907\u6570\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u5b9f\u884c\u3055\u308c\u308b\u306e\u3092\u9632\u304e\u307e\u305b\u3093\u304c\u3001\u6700\u5927\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3078\u5f71\u97ff\u3092\u4e0e\u3048\u308b\u53ef\u80fd\u6027\u304c\u6709\u308a\u307e\u3059\u3002"})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},83581:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>d});var s=i(11855);const l={},r=s.createContext(l);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);