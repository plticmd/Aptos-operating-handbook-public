"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[9455],{26697:(t,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>p,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>c});var n=e(63159),o=e(83581);const d={title:"Python SDK(\u65e5\u672c\u8a9e)"},p="Aptos Python SDK",i={id:"sdks/python-sdk/index",title:"Python SDK(\u65e5\u672c\u8a9e)",description:"Aptos\u306f\u3001\u8efd\u304f\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3055\u308c\u305f\u516c\u5f0f\u306ePythonSDK\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001PyPi\u3067Aptos\u30b3\u30a2GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u5171\u306b\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002Python SDK\u306e\u6a5f\u80fd\u306e\u591a\u304f\u306fTypescript SDK\u3092\u8907\u88fd\u3057\u3066\u3044\u307e\u3059\u3002Python SDK\u306e\u4e3b\u306a\u76ee\u7684\u306f\u3001Python\u958b\u767a\u8005\u304c\u3059\u3050\u306bAptos\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u4ed8\u5c5e\u7269\u3068\u3057\u3066\u306eAptos\u306b\u7cbe\u901a\u3059\u308b\u4e8b\u3092\u652f\u63f4\u3059\u308b\u4e8b\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/python-sdk/index.md",sourceDirName:"sdks/python-sdk",slug:"/sdks/python-sdk/",permalink:"/sdks/python-sdk/",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/sdks/python-sdk/index.md",tags:[],version:"current",lastUpdatedAt:1713535793,formattedLastUpdatedAt:"2024\u5e744\u670819\u65e5",frontMatter:{title:"Python SDK(\u65e5\u672c\u8a9e)"},sidebar:"appSidebar",previous:{title:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-tests"},next:{title:"Rust SDK(\u65e5\u672c\u8a9e)",permalink:"/sdks/rust-sdk/"}},r={},c=[{value:"Python SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002",id:"python-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:2},{value:"pip\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002",id:"pip\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002",id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",level:3},{value:"\u57cb\u3081\u8fbc\u307f\u306b\u3088\u308b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u57cb\u3081\u8fbc\u307f\u306b\u3088\u308b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:3},{value:"Python SDK\u3092\u4f7f\u3046",id:"python-sdk\u3092\u4f7f\u3046",level:2}];function h(t){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"aptos-python-sdk",children:"Aptos Python SDK"}),"\n",(0,n.jsxs)(s.p,{children:["Aptos\u306f\u3001\u8efd\u304f\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3055\u308c\u305f\u516c\u5f0f\u306ePythonSDK\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002 \u3053\u308c\u306f\u3001",(0,n.jsx)(s.a,{href:"https://pypi.org/project/aptos-sdk/",children:"PyPi"}),"\u3067",(0,n.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/python/sdk",children:"Aptos\u30b3\u30a2GitHub\u30ea\u30dd\u30b8\u30c8\u30ea"}),"\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u5171\u306b\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002Python SDK\u306e\u6a5f\u80fd\u306e\u591a\u304f\u306f",(0,n.jsx)(s.a,{href:"/sdks/ts-sdk/",children:"Typescript SDK"}),"\u3092\u8907\u88fd\u3057\u3066\u3044\u307e\u3059\u3002Python SDK\u306e\u4e3b\u306a\u76ee\u7684\u306f\u3001Python\u958b\u767a\u8005\u304c\u3059\u3050\u306bAptos\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u4ed8\u5c5e\u7269\u3068\u3057\u3066\u306eAptos\u306b\u7cbe\u901a\u3059\u308b\u4e8b\u3092\u652f\u63f4\u3059\u308b\u4e8b\u3067\u3059\u3002"]}),"\n",(0,n.jsx)(s.h2,{id:"python-sdk\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"Python SDK\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["Python SDK\u306f",(0,n.jsx)(s.code,{children:"pip"}),"\u3092\u901a\u3057\u3066\u3001\u30bd\u30fc\u30b9\u304b\u3089\u3001\u307e\u305f\u306f\u57cb\u3081\u8fbc\u307f\u3067\u7c21\u5358\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"pip\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"pip\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"pip"}),"\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pip3 install aptos-sdk\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"aptos-sdk"}),"\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u30b5\u30a4\u30c8\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001macOS\u3067\u306f\u3001",(0,n.jsx)(s.code,{children:"~/Library/Python/3.8/lib/python/site-packages/aptos_sdk"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067",(0,n.jsx)(s.code,{children:"aptos-sdk"}),"\u304c\u898b\u3064\u304b\u308a\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u30bd\u30fc\u30b9\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u306b\u306f\u3001"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/aptos-labs/aptos-core\npip3 install aptos-core/ecosystem/python/sdk --user\n"})}),"\n",(0,n.jsx)(s.h3,{id:"\u57cb\u3081\u8fbc\u307f\u306b\u3088\u308b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u57cb\u3081\u8fbc\u307f\u306b\u3088\u308b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,n.jsx)(s.p,{children:"\u65e2\u5b58\u306ePython\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306bPython SDK\u3092\u57cb\u3081\u8fbc\u3080\u306b\u306f\u3001"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"cd /path/to/python/project\ncp -r /path/to/aptos-core/ecosystem/python/sdk/aptos-sdk aptos-sdk\n"})}),"\n",(0,n.jsx)(s.h2,{id:"python-sdk\u3092\u4f7f\u3046",children:"Python SDK\u3092\u4f7f\u3046"}),"\n",(0,n.jsxs)(s.p,{children:["Python SDK \u306e\u4f7f\u7528\u65b9\u6cd5\u3092\u793a\u3059\u30b3\u30fc\u30c9\u4f8b\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.jsx)(s.a,{href:"/tutorials/",children:"\u958b\u767a\u8005\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"}),"\u3092\u3054\u89a7\u4e0b\u3055\u3044\u3002"]})]})}function a(t={}){const{wrapper:s}={...(0,o.R)(),...t.components};return s?(0,n.jsx)(s,{...t,children:(0,n.jsx)(h,{...t})}):h(t)}},83581:(t,s,e)=>{e.d(s,{R:()=>p,x:()=>i});var n=e(11855);const o={},d=n.createContext(o);function p(t){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof t?t(s):{...s,...t}}),[s,t])}function i(t){let s;return s=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:p(t.components),n.createElement(d.Provider,{value:s},t.children)}}}]);