"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[6151],{10878:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(63159),n=t(83581);const a={title:"Aptos Standards"},r="Aptos\u6a19\u6e96",i={id:"standards/index",title:"Aptos Standards",description:"\u6a19\u6e96\u306f\u3001\u3059\u3079\u3066\u306e\u958b\u767a\u8005\u304c\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u5171\u901a\u306e\u76f8\u4e92\u904b\u7528\u53ef\u80fd\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u3001Aptos \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a6\u30a9\u30ec\u30c3\u30c8\u9593\u306e\u4e92\u63db\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306e\u30eb\u30fc\u30eb\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002hippospace\u304c\u63d0\u4f9b\u3059\u308bAptos\u306e\u65e2\u77e5\u306e\u30b3\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u30a2\u30c9\u30ec\u30b9\u306e\u30ea\u30b9\u30c8\u3092\u5fa1\u89a7\u4e0b\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/standards/index.md",sourceDirName:"standards",slug:"/standards/",permalink:"/standards/",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/standards/index.md",tags:[],version:"current",lastUpdatedAt:1716397055,formattedLastUpdatedAt:"2024\u5e745\u670822\u65e5",frontMatter:{title:"Aptos Standards"},sidebar:"appSidebar",previous:{title:"Supporting Resources",permalink:"/move/prover/supporting-resources"},next:{title:"Object",permalink:"/standards/aptos-object"}},d={},l=[{value:"Move\u6a19\u6e96",id:"move\u6a19\u6e96",level:2},{value:"Aptos\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",id:"aptos\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",level:3},{value:"\u8cc7\u7523\u6a19\u6e96",id:"\u8cc7\u7523\u6a19\u6e96",level:2},{value:"\u30c7\u30b8\u30bf\u30eb\u8cc7\u7523(DA)",id:"\u30c7\u30b8\u30bf\u30eb\u8cc7\u7523da",level:3},{value:"\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523(FA)",id:"\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523fa",level:3},{value:"\u30a6\u30a9\u30ec\u30c3\u30c8\u6a19\u6e96",id:"\u30a6\u30a9\u30ec\u30c3\u30c8\u6a19\u6e96",level:2},{value:"Aptos\u30a6\u30a9\u30ec\u30c3\u30c8",id:"aptos\u30a6\u30a9\u30ec\u30c3\u30c8",level:3},{value:"\u5f93\u6765\u306e\u6a19\u6e96",id:"\u5f93\u6765\u306e\u6a19\u6e96",level:2},{value:"Aptos\u30c8\u30fc\u30af\u30f3",id:"aptos\u30c8\u30fc\u30af\u30f3",level:3},{value:"Aptos\u30b3\u30a4\u30f3",id:"aptos\u30b3\u30a4\u30f3",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"aptos\u6a19\u6e96",children:"Aptos\u6a19\u6e96"}),"\n",(0,o.jsxs)(s.p,{children:["\u6a19\u6e96\u306f\u3001\u3059\u3079\u3066\u306e\u958b\u767a\u8005\u304c\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u5171\u901a\u306e\u76f8\u4e92\u904b\u7528\u53ef\u80fd\u306a\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306f\u3001Aptos \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30a6\u30a9\u30ec\u30c3\u30c8\u9593\u306e\u4e92\u63db\u6027\u3092\u78ba\u4fdd\u3059\u308b\u305f\u3081\u306e\u30eb\u30fc\u30eb\u3067\u69cb\u6210\u3055\u308c\u3066\u3044\u307e\u3059\u3002hippospace\u304c\u63d0\u4f9b\u3059\u308bAptos\u306e",(0,o.jsx)(s.a,{href:"https://github.com/hippospace/aptos-coin-list",children:"\u65e2\u77e5\u306e\u30b3\u30a4\u30f3\u30ea\u30bd\u30fc\u30b9\u30a2\u30c9\u30ec\u30b9\u306e\u30ea\u30b9\u30c8"}),"\u3092\u5fa1\u89a7\u4e0b\u3055\u3044\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"move\u6a19\u6e96",children:"Move\u6a19\u6e96"}),"\n",(0,o.jsx)(s.h3,{id:"aptos\u30aa\u30d6\u30b8\u30a7\u30af\u30c8",children:(0,o.jsx)(s.a,{href:"/standards/aptos-object",children:"Aptos\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/object.move",children:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb"}),"\u306fMove\u304c\u8907\u96d1\u306a\u30bf\u30a4\u30d7\u3092\u5358\u4e00\u30a2\u30c9\u30ec\u30b9\u306b\u4fdd\u5b58\u3055\u308c\u305f\u30ea\u30bd\u30fc\u30b9\u306e\u30bb\u30c3\u30c8\u3068\u3057\u3066\u8868\u3059\u4e8b\u304c\u51fa\u6765\u3001\u30ad\u30e1\u306e\u7d30\u304b\u3044\u30ea\u30bd\u30fc\u30b9\u5236\u5fa1\u3068\u6240\u6709\u6a29\u7ba1\u7406\u304c\u53ef\u80fd\u306a\u8c4a\u5bcc\u306a\u6a5f\u80fd\u30e2\u30c7\u30eb\u3092\u4e0e\u3048\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u8cc7\u7523\u6a19\u6e96",children:"\u8cc7\u7523\u6a19\u6e96"}),"\n",(0,o.jsx)(s.h3,{id:"\u30c7\u30b8\u30bf\u30eb\u8cc7\u7523da",children:(0,o.jsx)(s.a,{href:"/standards/digital-asset",children:"\u30c7\u30b8\u30bf\u30eb\u8cc7\u7523(DA)"})}),"\n",(0,o.jsxs)(s.p,{children:["\u65b0\u3057\u3044",(0,o.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-token-objects/sources/token.move",children:"Aptos\u30c7\u30b8\u30bf\u30eb\u8cc7\u7523\u6a19\u6e96"}),"\u3067\u53ef\u80fd\u3068\u306a\u308b\u306e\u306f\u3001"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u8c4a\u5bcc\u3067\u67d4\u8edf\u306a\u8cc7\u7523\u3068\u53ce\u96c6\u54c1\u3002"}),"\n",(0,o.jsxs)(s.li,{children:["\u57fa\u672c\u6a5f\u80fd\u3092\u7c21\u5358\u306b\u5f37\u5316\u3057\u3066\u3001\u3088\u308a\u8c4a\u5bcc\u306a\u30ab\u30b9\u30bf\u30e0\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u3053\u306e\u4f8b\u306f",(0,o.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-token-objects/sources/aptos_token.move",children:"aptos_token module"}),"\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"\u30c7\u30b8\u30bf\u30eb\u8cc7\u7523(DA)\u306f\u3001NFT\u3082\u3057\u304f\u306f\u534a\u4ee3\u66ff\u30c8\u30fc\u30af\u30f3\u3092\u69cb\u7bc9\u3057\u305f\u3044\u65b0\u3057\u3044\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u307e\u305f\u306f\u30d7\u30ed\u30c8\u30b3\u30eb\u3078\u63a8\u5968\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsx)(s.h3,{id:"\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523fa",children:(0,o.jsx)(s.a,{href:"/standards/fungible-asset",children:"\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523(FA)"})}),"\n",(0,o.jsxs)(s.p,{children:["\u65b0\u3057\u3044",(0,o.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/fungible_asset.move",children:"Aptos\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523\u6a19\u6e96"}),"\u306f\u3001\u30b7\u30f3\u30d7\u30eb\u3067\u578b\u5b89\u5168\u306a\u6a19\u6e96\u3067\u3042\u308a\u3001Aptos\u30b3\u30a4\u30f3\u306e\u5165\u308c\u66ff\u3048\u3092\u610f\u56f3\u3059\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u30e2\u30c7\u30eb\u3092\u57fa\u6e96\u3068\u3057\u305f\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523\u3068\u3044\u3046\u610f\u5473\u3067\u3059\u3002\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523(FA)\u306f\u4ee3\u66ff\u53ef\u80fd\u8cc7\u7523\u306e\u4f5c\u6210\u3068\u7ba1\u7406\u306e\u305f\u3081\u306e\u3088\u308a\u591a\u304f\u306e\u6a5f\u80fd\u3068\u67d4\u8edf\u6027\u3092Aptos move\u958b\u767a\u8005\u3078\u63d0\u4f9b\u3057\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(s.h2,{id:"\u30a6\u30a9\u30ec\u30c3\u30c8\u6a19\u6e96",children:"\u30a6\u30a9\u30ec\u30c3\u30c8\u6a19\u6e96"}),"\n",(0,o.jsx)(s.h3,{id:"aptos\u30a6\u30a9\u30ec\u30c3\u30c8",children:(0,o.jsx)(s.a,{href:"/standards/wallets",children:"Aptos\u30a6\u30a9\u30ec\u30c3\u30c8"})}),"\n",(0,o.jsx)(s.p,{children:"\u30a6\u30a9\u30ec\u30c3\u30c8\u6a19\u6e96\u306f\u5168\u3066\u306e\u30a6\u30a9\u30ec\u30c3\u30c8\u304c\u4e3b\u306a\u6a5f\u80fd\u3067\u306f\u540c\u3058\u6a5f\u80fd\u3092\u4f7f\u3046\u4e8b\u3092\u4fdd\u8a3c\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u304c\u542b\u3080\u306e\u306f\u3001"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u540c\u3058\u30cb\u30fc\u30e2\u30cb\u30c3\u30af\u306a\u306e\u3067\u3001\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u9593\u3067\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u79fb\u52d5\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/integration/wallet-adapter-concept",children:"\u30a6\u30a9\u30ec\u30c3\u30c8\u30a2\u30c0\u30d7\u30bf\u30fc"}),"\u3067\u5168\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5171\u901a\u306e\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3068\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u5bfe\u8a71\u51fa\u6765\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"\u5f93\u6765\u306e\u6a19\u6e96",children:"\u5f93\u6765\u306e\u6a19\u6e96"}),"\n",(0,o.jsx)(s.h3,{id:"aptos\u30c8\u30fc\u30af\u30f3",children:(0,o.jsx)(s.a,{href:"/standards/aptos-token",children:"Aptos\u30c8\u30fc\u30af\u30f3"})}),"\n",(0,o.jsxs)(s.p,{children:["\u53e4\u3044\u65e2\u5b58\u306e",(0,o.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-token/sources/token.move",children:"\u30c8\u30fc\u30af\u30f3\u30e2\u30b8\u30e5\u30fc\u30eb"}),"\u306f\u3001"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u8c4a\u5bcc\u3067\u67d4\u8edf\u306a\u8cc7\u7523\u3068\u53ce\u96c6\u54c1\u3092\u30ab\u30d7\u30bb\u30eb\u5316\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u8cc7\u7523\u306f\u500b\u5225(\u5c11\u6570\u3067\u306f\u306a\u3044)\u3067\u3042\u308a\u3001\u4ee3\u66ff\u53ef\u80fd\u3001\u534a\u4ee3\u66ff\u53ef\u80fd\u3001\u307e\u305f\u306f\u975e\u4ee3\u66ff\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,o.jsxs)(s.li,{children:["\u30c8\u30fc\u30af\u30f3\u6a19\u6e96\u306f\u3001\u305d\u308c\u81ea\u8eab\u306e",(0,o.jsx)(s.code,{children:"0x3"}),"\u30a2\u30c9\u30ec\u30b9\u306e",(0,o.jsx)(s.code,{children:"AptosToken"}),"\u30d1\u30c3\u30b1\u30fc\u30b8\u3078\u542b\u307e\u308c\u3066\u3044\u3066\u3001\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u30fc\u304b\u3089\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u57fa\u6e96\u3068\u3057\u305f\u3001\u8fc5\u901f\u306a\u53cd\u5fa9\u3092\u53ef\u80fd\u3068\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"aptos\u30b3\u30a4\u30f3",children:(0,o.jsx)(s.a,{href:"/standards/aptos-coin",children:"Aptos\u30b3\u30a4\u30f3"})}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/coin.move",children:"\u30b3\u30a4\u30f3\u30e2\u30b8\u30e5\u30fc\u30eb"}),"\u306f\u3001\u30b7\u30f3\u30d7\u30eb\u3067\u30bf\u30a4\u30d7\u30bb\u30fc\u30d5\u3067\u4ee3\u66ff\u53ef\u80fd\u306a\u30a2\u30bb\u30c3\u30c8\u3092\u76ee\u7684\u3068\u3057\u305f\u8efd\u91cf\u306e\u6a19\u6e96\u3067\u3059\u3002\u30b3\u30a4\u30f3\u6a19\u6e96\u306f\u3001\u4ee5\u4e0b\u306e\u4e8b\u3092\u4fdd\u8a3c\u3059\u308b\u305f\u3081\u72ec\u81ea\u306eMove\u30e2\u30b8\u30e5\u30fc\u30eb\u3078\u5206\u96e2\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u30e6\u30fc\u30b6\u30fc\u306f\u9ad8\u3044\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u4f4e\u3044\u30ac\u30b9\u9593\u63a5\u8cbb\u306e\u30b7\u30f3\u30d7\u30eb\u306a\u30c8\u30fc\u30af\u30f3\u3092\u4f5c\u6210\u3057\u3066\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,o.jsx)(s.li,{children:"\u30b3\u30a4\u30f3\u6a19\u6e96\u306fptos \u30b3\u30a2 \u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u4e00\u90e8\u306a\u306e\u3067\u3001\u30ac\u30b9\u901a\u8ca8\u3092\u542b\u3080\u901a\u8ca8\u306b\u4f7f\u7528\u51fa\u6765\u307e\u3059\u3002"}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},83581:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>i});var o=t(11855);const n={},a=o.createContext(n);function r(e){const s=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:s},e.children)}}}]);