"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[3149],{47616:(s,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=e(63159),c=e(83581);const i={title:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",slug:"typescript-sdk-tests"},r="\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",o={id:"sdks/legacy-ts-sdk/sdk-tests",title:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",description:"TypeScriptSDK\u306f\u3001src/tests/\u30d5\u30a9\u30eb\u30c0\u30fc\u4e0b\u306b\u3042\u308be2e\u3068unit\u306e2\u7a2e\u985e\u306e\u30c6\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/legacy-ts-sdk/sdk-tests.md",sourceDirName:"sdks/legacy-ts-sdk",slug:"/sdks/legacy-ts-sdk/typescript-sdk-tests",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/sdks/legacy-ts-sdk/sdk-tests.md",tags:[],version:"current",lastUpdatedAt:1713535793,formattedLastUpdatedAt:"2024\u5e744\u670819\u65e5",frontMatter:{title:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",slug:"typescript-sdk-tests"},sidebar:"appSidebar",previous:{title:"\u30d7\u30e9\u30b0\u30a4\u30f3\u30ec\u30a4\u30e4\u30fc",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-plugins-layer"},next:{title:"Python SDK(\u65e5\u672c\u8a9e)",permalink:"/sdks/python-sdk/"}},d={},l=[{value:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3068BCS",id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3068bcs",level:2}];function a(s){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c",children:"\u30c6\u30b9\u30c8\u3068\u691c\u8a3c"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScriptSDK\u306f\u3001",(0,n.jsx)(t.code,{children:"src/tests/"}),"\u30d5\u30a9\u30eb\u30c0\u30fc\u4e0b\u306b\u3042\u308b",(0,n.jsx)(t.code,{children:"e2e"}),"\u3068",(0,n.jsx)(t.code,{children:"unit"}),"\u306e2\u7a2e\u985e\u306e\u30c6\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"e2e"}),"\u30c6\u30b9\u30c8 \u2013 \u30a8\u30f3\u30c9to\u30a8\u30f3\u30c9\u30c6\u30b9\u30c8\u306f\u3001SDK\u30e1\u30bd\u30c3\u30c9\u304b\u3089\u59cb\u307e\u308a\u3001REST/\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI\u3068\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u5bfe\u8a71\u3057\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30ec\u30d9\u30eb\u306b\u81f3\u308b\u307e\u3067\u306e\u30a8\u30f3\u30c9to\u30a8\u30f3\u30c9\u64cd\u4f5c\u306e\u30c6\u30b9\u30c8\u3092\u3059\u308b\u4e8b\u304c\u76ee\u7684\u3067\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u9001\u4fe1\u3055\u308c\u305f\u304b\u3069\u3046\u304b\u3092\u30c6\u30b9\u30c8\u3059\u308b\u306b\u306f\u3001SDK\u304c\u4e88\u671f\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u69cb\u7bc9\u3059\u308b\u3053\u3068\u304b\u3089\u59cb\u3081\u3001REST API\u306b\u9001\u4fe1\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u30dd\u30b9\u30c8\u3057\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3066\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u5b8c\u5168\u306b\u9001\u4fe1\u3055\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"unit"}),"\u30c6\u30b9\u30c8 \u2013 \u5358\u4f53\u30c6\u30b9\u30c8\u306f\u3001\u63d0\u4f9b\u3055\u308c\u305f\u5165\u529b\u3092\u4f7f\u7528\u3057\u3066SDK\u5185\u306e\u95a2\u6570\u306e\u51fa\u529b\u3092\u30c6\u30b9\u30c8\u3059\u308b\u4e8b\u304c\u76ee\u7684\u3067\u3059\u3002\u4f8b\u3048\u3070\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u30a2\u30c9\u30ec\u30b9\u304c\u6709\u52b9\u304b\u3069\u3046\u304b\u3092\u30c6\u30b9\u30c8\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3068bcs",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3068BCS"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.rs/bcs/latest/bcs/",children:"BCS"}),"\u306f\u3001\u7f72\u540d\u3001\u9001\u4fe1\u3059\u308b\u305f\u3081\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u7d44\u307f\u7acb\u3066\u30b7\u30ea\u30a2\u30eb\u5316\u3059\u308b\u969b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u7570\u306a\u308b\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306b\u306f\u7570\u306a\u308b\u30d7\u30ea\u30df\u30c6\u30a3\u30d6\u578b\u306e\u5236\u7d04 (\u4f8b: \u30d0\u30a4\u30c8\u9577\u3001\u5024\u306e\u7bc4\u56f2\u306a\u3069) \u3068\u3055\u307e\u3056\u307e\u306a\u8907\u5408\u7684\u306a\u578b\u306e\u30b5\u30dd\u30fc\u30c8 (\u4f8b: enum\u3001struct\u3001class\u7b49)\u304c\u3042\u308b\u4e8b\u3092\u8003\u3048\u308b\u3068\u3001\u30c7\u30fc\u30bf\u3092\u30b7\u30ea\u30a2\u30eb\u5316\u3057\u305f\u30b3\u30fc\u30c9\u3092\u691c\u8a3c\u3059\u308b\u306e\u306f\u56f0\u96e3\u3067\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:"Aptos SDK \u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3068BCS\u3092\u4ee5\u4e0b\u306e2\u3064\u306e\u65b9\u6cd5\u3067\u691c\u8a3c\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u6700\u521d\u306e\u30ec\u30d9\u30eb\u306e\u691c\u8a3c\u306f\u3001\u5358\u4f53\u30c6\u30b9\u30c8\u3068\u30a8\u30f3\u30c9to\u30a8\u30f3\u30c9(e2e)\u30c6\u30b9\u30c8\u3092\u901a\u3057\u3066\u884c\u308f\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["BCS \u30b7\u30ea\u30a2\u30e9\u30a4\u30b6\u30fc\u306e\u5358\u4f53\u30c6\u30b9\u30c8\u306e\u4f8b\u306f\u3001",(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/tests/unit/serializer.test.ts",children:(0,n.jsx)(t.code,{children:"serializer.test.ts"})}),"\u306b\u3042\u308a\u307e\u3059\u3002"]}),(0,n.jsxs)(t.p,{children:["BCS\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9001\u4fe1\u3059\u308b\u305f\u3081\u306ee2e\u30c6\u30b9\u30c8\u306e\u4f8b\u306f\u3001",(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/blob/f4a7820a61f22ed8306219621402d96f70379d20/ecosystem/typescript/sdk/src/tests/e2e/aptos_client.test.ts#L78",children:(0,n.jsx)(t.code,{children:"aptos_client.test.ts"})}),"\u306b\u3042\u308a\u307e\u3059\u3002"]})]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"\u691c\u8a3c\u306e2\u756a\u76ee\u306e\u30ec\u30d9\u30eb\u306f\u3001\u30c6\u30b9\u30c8\u30d9\u30af\u30c8\u30eb\u3092\u4f7f\u7528\u3057\u305f\u30d5\u30a1\u30b8\u30f3\u30b0\u30c6\u30b9\u30c8\u3067\u3059\u3002\u30c6\u30b9\u30c8\u30d9\u30af\u30c8\u30eb\u306f\u3001Aptos\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3067\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u306e\u3068\u540c\u3058\u30b3\u30fc\u30c9\u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059\u3002\u30c6\u30b9\u30c8\u30d9\u30af\u30c8\u30eb\u306fJSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u914d\u5217\u3067\u3059\u3002\u5404JSON\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30e9\u30f3\u30c0\u30e0\u5316\u3055\u308c\u305f\u5165\u529b\u3068\u4e88\u671f\u3055\u308c\u305f\u51fa\u529b\u3092\u542b\u307f\u307e\u3059\u3002 AptosSDK\u306f\u3001\u30c6\u30b9\u30c8\u30d9\u30af\u30c8\u30eb\u3092\u89e3\u6790\u304a\u3088\u3073\u30ed\u30fc\u30c9\u3057\u3066\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30d3\u30eb\u30c0\u30fc\u3068BCS\u306e\u5b9f\u88c5\u3092\u691c\u8a3c\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"2\u3064\u306e\u30c6\u30b9\u30c8\u30d9\u30af\u30c8\u30eb\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u308c\u305e\u308c\u304c1\u7a2e\u985e\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30da\u30a4\u30ed\u30fc\u30c9\u3092\u30ab\u30d0\u30fc\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/api/goldens/aptos_api__tests__transaction_vector_test__test_entry_function_payload.json",children:"\u30a8\u30f3\u30c8\u30ea\u30fc\u95a2\u6570"}),"\u30d9\u30af\u30c8\u30eb"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/api/goldens/aptos_api__tests__transaction_vector_test__test_script_payload.json",children:"\u30b9\u30af\u30ea\u30d7\u30c8"}),"\u30d9\u30af\u30c8\u30eb"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u30d9\u30af\u30c8\u30eb\u30a2\u30a4\u30c6\u30e0\u306f\u4e00\u76ee\u77ad\u7136\u3067\u3059\u304c\u3001\u30b9\u30da\u30fc\u30b9\u3092\u7bc0\u7d04\u3057\u30c7\u30fc\u30bf\u306e\u30aa\u30fc\u30d0\u30fc\u30d5\u30ed\u30fc\u3092\u56de\u907f\u3059\u308b\u305f\u3081\u3001\u7279\u5225\u306a\u30b7\u30ea\u30a2\u30eb\u5316\u30e1\u30bd\u30c3\u30c9\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u8a73\u7d30\u306f\u4ee5\u4e0b\u3067\u89e3\u8aac\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"\u3059\u3079\u3066\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u30a2\u30c9\u30ec\u30b9\u306f16\u9032\u30b3\u30fc\u30c9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.li,{children:["\u30a8\u30f3\u30c8\u30ea\u30fc\u95a2\u6570\u306e",(0,n.jsx)(t.code,{children:"args"}),"(\u5f15\u6570)\u306f16\u9032\u30b3\u30fc\u30c9\u5316\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.li,{children:"U64\u3001U128\u306e\u6570\u5024\u306f\u6587\u5b57\u5217\u30ea\u30c6\u30e9\u30eb\u3068\u3057\u3066\u30b7\u30ea\u30a2\u30eb\u5316\u3055\u308c\u3001\u30c7\u30fc\u30bf\u306e\u5207\u308a\u6368\u3066\u3092\u56de\u907f\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.li,{children:"U8\u306f(\u6587\u5b57\u5217\u3067\u306f\u306a\u304f)\u6570\u5024\u3068\u3057\u3066\u30b7\u30ea\u30a2\u30eb\u5316\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsxs)(t.li,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u306e",(0,n.jsx)(t.code,{children:"code"}),"\u3068\u30e2\u30b8\u30e5\u30fc\u30ebBundle\u306f16\u9032\u30b3\u30fc\u30c9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["\u30bf\u30a4\u30d7\u30b9\u30af\u30ea\u30d7\u30c8SDK\u304c\u30d9\u30af\u30c8\u30eb\u691c\u8a3c\u3092\u884c\u3046\u65b9\u6cd5\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/tests/unit/transaction_vector.test.ts",children:(0,n.jsx)(t.code,{children:"transaction_vector.test.ts"})}),"\u30b3\u30fc\u30c9\u4f8b\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})})]})}function p(s={}){const{wrapper:t}={...(0,c.R)(),...s.components};return t?(0,n.jsx)(t,{...s,children:(0,n.jsx)(a,{...s})}):a(s)}},83581:(s,t,e)=>{e.d(t,{R:()=>r,x:()=>o});var n=e(11855);const c={},i=n.createContext(c);function r(s){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(t):{...t,...s}}),[t,s])}function o(s){let t;return t=s.disableParentContext?"function"==typeof s.components?s.components(c):s.components||c:r(s.components),n.createElement(i.Provider,{value:t},s.children)}}}]);