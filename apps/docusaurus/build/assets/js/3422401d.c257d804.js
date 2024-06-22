"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[8405],{59947:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var r=n(63159),i=n(83581);const t={title:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 \u30b9\u30c8\u30ea\u30fc\u30e0 \u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u884c"},o="\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u884c",d={id:"indexer/legacy/migration",title:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 \u30b9\u30c8\u30ea\u30fc\u30e0 \u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u884c",description:"\u73fe\u5728\u30ec\u30ac\u30b7\u30fc\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3092\u5b9f\u884c\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u306e\u4f7f\u7528\u3078\u79fb\u884c\u3059\u308b\u65b9\u6cd5\u3092\u30ac\u30a4\u30c9\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/indexer/legacy/migration.md",sourceDirName:"indexer/legacy",slug:"/indexer/legacy/migration",permalink:"/indexer/legacy/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/indexer/legacy/migration.md",tags:[],version:"current",lastUpdatedAt:1713439719,formattedLastUpdatedAt:"2024\u5e744\u670818\u65e5",frontMatter:{title:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3 \u30b9\u30c8\u30ea\u30fc\u30e0 \u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u884c"},sidebar:"appSidebar",previous:{title:"\u30ab\u30b9\u30bf\u30e0\u30c7\u30fc\u30bf\u30e2\u30c7\u30eb",permalink:"/indexer/legacy/custom-data-model"},next:{title:"Use Aptos SDKs",permalink:"/sdks/index"}},c={},l=[{value:"1. \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u8907\u88fd\u3059\u308b",id:"1-\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u8907\u88fd\u3059\u308b",level:2},{value:"2. \u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b",id:"2-\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b",level:2},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3A:\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u63a5\u7d9a\u3059\u308b",id:"\u30aa\u30d7\u30b7\u30e7\u30f3a\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u63a5\u7d9a\u3059\u308b",level:3},{value:"\u30aa\u30d7\u30b7\u30e7\u30f3B: \u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u578b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b",id:"\u30aa\u30d7\u30b7\u30e7\u30f3b-\u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u578b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b",level:3},{value:"3. (\u30aa\u30d7\u30b7\u30e7\u30f3)\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b",id:"3-\u30aa\u30d7\u30b7\u30e7\u30f3\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b",level:2},{value:"a. \u30ab\u30b9\u30bf\u30e0\u30c6\u30fc\u30d6\u30eb\u30b9\u30ad\u30fc\u30de\u3092\u79fb\u884c\u3059\u308b",id:"a-\u30ab\u30b9\u30bf\u30e0\u30c6\u30fc\u30d6\u30eb\u30b9\u30ad\u30fc\u30de\u3092\u79fb\u884c\u3059\u308b",level:3},{value:"b. \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30b3\u30fc\u30c9\u3092\u79fb\u884c\u3059\u308b",id:"b-\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30b3\u30fc\u30c9\u3092\u79fb\u884c\u3059\u308b",level:3},{value:"4. Diesel\u3067Postgres\u30c7\u30fc\u30bf\u30d9\u30fc\u3092\u57cb\u3081\u623b\u3059",id:"4-diesel\u3067postgres\u30c7\u30fc\u30bf\u30d9\u30fc\u3092\u57cb\u3081\u623b\u3059",level:2},{value:"5. \u79fb\u884c\u3055\u308c\u305f\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u5b9f\u884c\u3059\u308b",id:"5-\u79fb\u884c\u3055\u308c\u305f\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u5b9f\u884c\u3059\u308b",level:2},{value:"\u3088\u304f\u3042\u308b\u8cea\u554f",id:"\u3088\u304f\u3042\u308b\u8cea\u554f",level:2},{value:"1. \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u30fc\u306f\u66f4\u65b0\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u304b? \u66f4\u65b0\u3055\u308c\u308b\u5834\u5408\u3001\u4f55\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b\uff1f",id:"1-\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u30fc\u306f\u66f4\u65b0\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u304b-\u66f4\u65b0\u3055\u308c\u308b\u5834\u5408\u4f55\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b",level:3},{value:"2. \u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3067\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u304c\u3059\u3067\u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b?\u305d\u308c\u3089\u3092\u79fb\u884c\u3059\u308b\u306e\u306f\u7c21\u5358\u3067\u3059\u304b?",id:"2-\u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3067\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u304c\u3059\u3067\u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\u305d\u308c\u3089\u3092\u79fb\u884c\u3059\u308b\u306e\u306f\u7c21\u5358\u3067\u3059\u304b",level:3}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u884c",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u306e\u79fb\u884c"}),"\n",(0,r.jsx)(s.p,{children:"\u73fe\u5728\u30ec\u30ac\u30b7\u30fc\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3092\u5b9f\u884c\u3092\u5b9f\u884c\u3057\u3066\u3044\u308b\u5834\u5408\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u306e\u4f7f\u7528\u3078\u79fb\u884c\u3059\u308b\u65b9\u6cd5\u3092\u30ac\u30a4\u30c9\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u30b9\u30bf\u30c3\u30af\u3067\u306f\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306b\u8ffd\u52a0\u306e\u30b9\u30ec\u30c3\u30c9\u3092\u5099\u3048\u305f\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30eb\u30ce\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u3053\u308c\u306f\u7dad\u6301\u304c\u96e3\u3057\u304f\u30b3\u30b9\u30c8\u304c\u304b\u304b\u308a\u307e\u3059\u3002\u3055\u3089\u306b\u30ab\u30b9\u30bf\u30e0 \u30ed\u30b8\u30c3\u30af\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u3088\u308a\u5927\u304d\u306a\u30de\u30b7\u30f3\u304c\u5fc5\u8981\u306b\u306a\u308b\u304b\u3001\u7dda\u5f62\u306b\u62e1\u5f35\u3059\u308b\u8907\u6570\u306e\u30d5\u30eb\u30ce\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u3053\u306e\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u4f5c\u6210\u65b9\u6cd5\u3067\u306f",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/txn-stream/",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9"}),"\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/txn-stream/labs-hosted/",children:"\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9"}),"\u3092\u4f7f\u7528\u51fa\u6765\u3001",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/txn-stream/self-hosted",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u306e\u72ec\u81ea\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b9f\u884c "}),"\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"1-\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u8907\u88fd\u3059\u308b",children:"1. \u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u8907\u88fd\u3059\u308b"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"# SSH\ngit clone git@github.com:aptos-labs/aptos-indexer-processors.git\n\n# HTTPS\ngit clone https://github.com/aptos-labs/aptos-indexer-processors.git\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u30b5\u30fc\u30d3\u30b9\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u79fb\u52d5\u3057\u307e\u3059\u3002:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"cd aptos-indexer-processors\ncd rust/processor\n"})}),"\n",(0,r.jsx)(s.h2,{id:"2-\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b",children:"2. \u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b"}),"\n",(0,r.jsxs)(s.p,{children:["\u79fb\u884c\u3059\u308b\u30d7\u30ed\u30bb\u30c3\u30b5\u3054\u3068\u306b\u3001\u4ee5\u4e0b\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u3066\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u69cb\u6210\u30d5\u30a1\u30a4\u30eb\u306e\u5404\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u60c5\u5831\u306b\u3064\u3044\u3066\u306f",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/api/self-hosted/#configuration",children:"\u3053\u3061\u3089"}),".\n\u3092\u5fa1\u89a7\u4e0b\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"health_check_port: 8084\nserver_config:\n  processor_config:\n    type: default_processor\n  postgres_connection_string: <postgres_uri, e.g. postgresql://postgres:@localhost:5432/indexer>\n  indexer_grpc_data_service_address: <url_from_api_gateway>\n  indexer_grpc_http2_ping_interval_in_secs: 60\n  indexer_grpc_http2_ping_timeout_in_secs: 10\n  auth_token: <auto_token_from_api_gateway>\n  starting_version: 0 # optional\n  ending_version: 0 # optional\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(s.code,{children:"indexer_grpc_data_service_address"}),"\u306e URL\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6b21\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u3044\u305a\u308c\u304b\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u30aa\u30d7\u30b7\u30e7\u30f3a\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u63a5\u7d9a\u3059\u308b",children:"\u30aa\u30d7\u30b7\u30e7\u30f3A:\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u63a5\u7d9a\u3059\u308b"}),"\n",(0,r.jsxs)(s.p,{children:["\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u7528\u3059\u308b\u4e3b\u306a\u5229\u70b9\u306f\u3001\u5c06\u6765\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u30a2\u30fc\u30ab\u30a4\u30d6\u30d5\u30eb\u30ce\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u7121\u304f\u306a\u308b\u4e8b\u3067\u3059\u3002\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u306f\u30ec\u30fc\u30c8\u5236\u9650\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u30e9\u30dc\u304c\u30db\u30b9\u30c8\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u624b\u9806\u306f",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/txn-stream/labs-hosted",children:"\u3053\u3061\u3089"}),"\u3067\u898b\u3064\u304b\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"\u30aa\u30d7\u30b7\u30e7\u30f3b-\u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u578b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b",children:"\u30aa\u30d7\u30b7\u30e7\u30f3B: \u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u578b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,r.jsxs)(s.p,{children:["\u5fc5\u8981\u306a\u3089\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u306e\u81ea\u5df1\u30db\u30b9\u30c8\u578b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b9f\u884c\u3057\u3001\u305d\u308c\u306b\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002\u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u578b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u3092\u5b9f\u884c\u3059\u308b\u624b\u9806\u306f",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/txn-stream/self-hosted",children:"\u3053\u3061\u3089"}),"\u3067\u898b\u3064\u304b\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"3-\u30aa\u30d7\u30b7\u30e7\u30f3\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b",children:"3. (\u30aa\u30d7\u30b7\u30e7\u30f3)\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9\u3078\u79fb\u884c\u3059\u308b"}),"\n",(0,r.jsx)(s.p,{children:"\u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3067\u4f5c\u6210\u3055\u308c\u305f\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u6700\u521d\u304b\u3089\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u5f37\u304f\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\n\u65b0\u3057\u3044\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u3053\u306e\u79fb\u884c\u4e2d\u306b\u3059\u3079\u3066\u306e\u30ab\u30b9\u30bf\u30e0 \u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u79fb\u884c\u304c\u78ba\u5b9f\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"a-\u30ab\u30b9\u30bf\u30e0\u30c6\u30fc\u30d6\u30eb\u30b9\u30ad\u30fc\u30de\u3092\u79fb\u884c\u3059\u308b",children:"a. \u30ab\u30b9\u30bf\u30e0\u30c6\u30fc\u30d6\u30eb\u30b9\u30ad\u30fc\u30de\u3092\u79fb\u884c\u3059\u308b"}),"\n",(0,r.jsxs)(s.p,{children:["\u30ab\u30b9\u30bf\u30e0\u30b9\u30ad\u30fc\u30de\u3092\u79fb\u884c\u3059\u308b\u306b\u306f\u3001\u5404\u30ab\u30b9\u30bf\u30e0\u79fb\u884c\u3092",(0,r.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-indexer-processors/tree/main/rust/processor/migrations",children:(0,r.jsx)(s.code,{children:"migrations"})}),"\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h3,{id:"b-\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30b3\u30fc\u30c9\u3092\u79fb\u884c\u3059\u308b",children:"b. \u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u30fc\u30b3\u30fc\u30c9\u3092\u79fb\u884c\u3059\u308b"}),"\n",(0,r.jsxs)(s.p,{children:["\u30ab\u30b9\u30bf\u30e0 \u30d7\u30ed\u30bb\u30c3\u30b5\u3092",(0,r.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-indexer-processors/tree/main/rust/processor",children:(0,r.jsx)(s.code,{children:"processors"})}),"\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30b3\u30d4\u30fc\u3057\u3001\u95a2\u9023\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u30e2\u30c7\u30eb\u3092",(0,r.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-indexer-processors/tree/main/rust/processor/src/models",children:(0,r.jsx)(s.code,{children:"models"})}),"\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30b3\u30d4\u30fc\u3057\u3066\u3001\u30b3\u30fc\u30c9\u3092\u79fb\u884c\u3057\u307e\u3059\u3002\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u4ee5\u4e0b\u306eRust\u30b3\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3057\u3066\u3001\u6b8b\u308a\u306e\u30b3\u30fc\u30c9\u3068\u7d71\u5408\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-indexer-processors/blob/main/rust/processor/src/processors/mod.rs",children:(0,r.jsx)(s.code,{children:"mod.rs"})})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"pub enum Processor {\n    ...\n    CoinProcessor,\n    ...\n}\n\nimpl Processor {\n    ...\n    COIN_PROCESSOR_NAME => Self::CoinProcessor,\n    ...\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://github.com/aptos-labs/aptos-indexer-processors/blob/main/rust/processor/src/worker.rs",children:(0,r.jsx)(s.code,{children:"worker.rs"})})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"Processor::CoinProcessor => {\n    Arc::new(CoinTransactionProcessor::new(self.db_pool.clone()))\n},\n"})}),"\n",(0,r.jsx)(s.h2,{id:"4-diesel\u3067postgres\u30c7\u30fc\u30bf\u30d9\u30fc\u3092\u57cb\u3081\u623b\u3059",children:"4. Diesel\u3067Postgres\u30c7\u30fc\u30bf\u30d9\u30fc\u3092\u57cb\u3081\u623b\u3059"}),"\n",(0,r.jsx)(s.p,{children:"\u65b0\u3057\u3044\u30d7\u30ed\u30bb\u30c3\u30b5\u306f\u53e4\u3044\u30d7\u30ed\u30bb\u30c3\u30b5\u3068\u540c\u3058Postgres\u30b9\u30ad\u30fc\u30de\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u5b8c\u5168\u306a\u30d0\u30c3\u30af\u30d5\u30a3\u30eb\u3092\u884c\u3046\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002(\u7406\u60f3\u7684\u306b\u306f\u65b0\u3057\u3044DB\u306b\u5168\u90e8\u66f8\u304d\u8fbc\u3080)\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u30fc\u306e\u5909\u63db\u306e\u7d50\u679c\u3068\u3057\u3066\u4e00\u90e8\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u5c11\u3057\u7570\u306a\u308b\u305f\u3081\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u3053\u308c\u3089\u306e\u624b\u9806\u306f",(0,r.jsx)(s.a,{href:"https://docs.rs/diesel_migrations/latest/diesel_migrations/",children:"Diesel\u79fb\u884c"}),"\u306e\u4f7f\u7528\u306b\u7cbe\u901a\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u5168\u4f53\u306e\u79fb\u884c\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"DATABASE_URL=postgres://postgres@localhost:5432/postgres diesel migration run\n"})}),"\n",(0,r.jsx)(s.h2,{id:"5-\u79fb\u884c\u3055\u308c\u305f\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u5b9f\u884c\u3059\u308b",children:"5. \u79fb\u884c\u3055\u308c\u305f\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,r.jsx)(s.p,{children:"\u5358\u4e00\u30d7\u30ed\u30bb\u30c3\u30b5\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"cargo run --release -- -c config.yaml\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u8907\u6570\u306e\u30d7\u30ed\u30bb\u30c3\u30b5\u304c\u3042\u308b\u5834\u5408\u306f\u3001\u30d7\u30ed\u30bb\u30c3\u30b5\u3054\u3068\u306b\u30b5\u30fc\u30d3\u30b9\u306e\u500b\u5225\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(s.p,{children:["\u30d7\u30ed\u30bb\u30c3\u30b5\u3092Docker\u30a4\u30e1\u30fc\u30b8\u3068\u3057\u3066\u5b9f\u884c\u3059\u308b\u5834\u5408\u3001\u624b\u9806\u306f",(0,r.jsx)(s.a,{href:"https://aptos.dev/indexer/api/self-hosted#run-with-docker",children:"\u3053\u3053"}),"\u306b\u30ea\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u3088\u304f\u3042\u308b\u8cea\u554f",children:"\u3088\u304f\u3042\u308b\u8cea\u554f"}),"\n",(0,r.jsx)(s.h3,{id:"1-\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u30fc\u306f\u66f4\u65b0\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u304b-\u66f4\u65b0\u3055\u308c\u308b\u5834\u5408\u4f55\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b",children:"1. \u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u30fc\u306f\u66f4\u65b0\u3055\u308c\u308b\u4e88\u5b9a\u3067\u3059\u304b? \u66f4\u65b0\u3055\u308c\u308b\u5834\u5408\u3001\u4f55\u3092\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u304b\uff1f"}),"\n",(0,r.jsx)(s.p,{children:"\u30d7\u30ed\u30c8\u30b3\u30eb\u30d0\u30c3\u30d5\u30a1\u30fc\u30b9\u30ad\u30fc\u30de\u306f\u5c06\u6765\u66f4\u65b0\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4e0b\u4f4d\u4e92\u63db\u6027\u306e\u306a\u3044\u5909\u66f4\u306b\u3064\u3044\u3066\u306f\u3001\u30ea\u30ea\u30fc\u30b9\u30ce\u30fc\u30c8\u3067\u304a\u77e5\u3089\u305b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.h3,{id:"2-\u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3067\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u304c\u3059\u3067\u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b\u305d\u308c\u3089\u3092\u79fb\u884c\u3059\u308b\u306e\u306f\u7c21\u5358\u3067\u3059\u304b",children:"2. \u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u3067\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u304c\u3059\u3067\u306b\u8a18\u8ff0\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u306f\u3069\u3046\u3059\u308c\u3070\u3088\u3044\u3067\u3059\u304b?\u305d\u308c\u3089\u3092\u79fb\u884c\u3059\u308b\u306e\u306f\u7c21\u5358\u3067\u3059\u304b?"}),"\n",(0,r.jsx)(s.p,{children:"\u65b0\u3057\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u30b9\u30bf\u30c3\u30af\u306b\u306f\u53e4\u3044\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u30b9\u30bf\u30c3\u30af\u3068\u540c\u3058Postgres\u30b9\u30ad\u30fc\u30de\u304c\u3042\u308b\u305f\u3081\u3001\u30d7\u30ed\u30bb\u30c3\u30b5\u306e\u79fb\u884c\u306f\u7c21\u5358\u3067\u3059\u3002\u30ab\u30b9\u30bf\u30e0DB\u79fb\u884c\u304c\u9069\u7528\u3055\u308c\u308b\u69d8\u306b\u3001\u3053\u306e\u79fb\u884c\u7528\u306e\u65b0\u3057\u3044DB\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u3092\u5f37\u304f\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u3053\u306e\u30ac\u30a4\u30c9\u306e\u30b9\u30c6\u30c3\u30d7 3 \u306b\u5f93\u3063\u3066\u3001\u30ab\u30b9\u30bf\u30e0\u30ed\u30b8\u30c3\u30af\u3092\u65b0\u3057\u3044\u30d7\u30ed\u30bb\u30c3\u30b5\u30b9\u30bf\u30c3\u30af\u306b\u79fb\u884c\u3057\u307e\u3059\u3002"})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},83581:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>d});var r=n(11855);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);