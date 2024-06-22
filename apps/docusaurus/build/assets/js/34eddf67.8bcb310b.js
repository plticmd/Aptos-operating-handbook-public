"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[5306],{28953:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=s(63159),t=s(83581);const o={title:"Running a Local Network"},i="CLIAptos CLI\u7d4c\u7531\u3067\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3059\u308b",l={id:"tools/aptos-cli/use-cli/running-a-local-network",title:"Running a Local Network",description:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u3001\u30b3\u30fc\u30c9\u3092\u30c6\u30b9\u30c8\u3059\u308b\u6642\u5f79\u7acb\u3061\u307e\u3059\u3002\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306e\u3088\u3046\u306aAptos\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u306f\u3069\u306e\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u3082\u63a5\u7d9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u4e3b\u306b\u6b21\u306e3\u3064\u306e\u4e8b\u7531\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/aptos-cli/use-cli/running-a-local-network.md",sourceDirName:"tools/aptos-cli/use-cli",slug:"/tools/aptos-cli/use-cli/running-a-local-network",permalink:"/tools/aptos-cli/use-cli/running-a-local-network",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/tools/aptos-cli/use-cli/running-a-local-network.md",tags:[],version:"current",lastUpdatedAt:1716499078,formattedLastUpdatedAt:"2024\u5e745\u670823\u65e5",frontMatter:{title:"Running a Local Network"},sidebar:"appSidebar",previous:{title:"Use Aptos CLI with Ledger",permalink:"/tools/aptos-cli/use-cli/use-aptos-ledger"},next:{title:"Running a Public Network",permalink:"/tools/aptos-cli/use-cli/public-network/run-public-network"}},c={},d=[{value:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8d77\u52d5\u6642\u306e\u4e00\u822c\u7684\u306a\u30a8\u30e9\u30fc",id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8d77\u52d5\u6642\u306e\u4e00\u822c\u7684\u306a\u30a8\u30e9\u30fc",level:2},{value:"\u30a2\u30c9\u30ec\u30b9\u306f\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",id:"\u30a2\u30c9\u30ec\u30b9\u306f\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",level:3},{value:"\u958b\u3044\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u591a\u3059\u304e\u308b\u30a8\u30e9\u30fc",id:"\u958b\u3044\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u591a\u3059\u304e\u308b\u30a8\u30e9\u30fc",level:3},{value:"Docker\u306f\u5229\u7528\u51fa\u6765\u307e\u305b\u3093",id:"docker\u306f\u5229\u7528\u51fa\u6765\u307e\u305b\u3093",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u3046",id:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u3046",level:2},{value:"TypeScript SDK\u3092\u69cb\u6210\u3059\u308b",id:"typescript-sdk\u3092\u69cb\u6210\u3059\u308b",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u518d\u8a2d\u5b9a",id:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u518d\u8a2d\u5b9a",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cliaptos-cli\u7d4c\u7531\u3067\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3059\u308b",children:"CLIAptos CLI\u7d4c\u7531\u3067\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u3001\u30b3\u30fc\u30c9\u3092\u30c6\u30b9\u30c8\u3059\u308b\u6642\u5f79\u7acb\u3061\u307e\u3059\u3002\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8\u306e\u3088\u3046\u306aAptos\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u306f\u3069\u306e\u30d7\u30ed\u30c0\u30af\u30b7\u30e7\u30f3\u3082\u63a5\u7d9a\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u304c\u3001\u4e3b\u306b\u6b21\u306e3\u3064\u306e\u4e8b\u7531\u3067\u5f79\u7acb\u3061\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u30ec\u30fc\u30c8\u5236\u9650\u306a\u3057:"})," Node API\u3001Indexer API\u3001Faucet\u7b49\u306e\u30db\u30b9\u30c8\u3055\u308c\u305f\u30b5\u30fc\u30d3\u30b9\u3068\u30ec\u30fc\u30c8\u5236\u9650\u306a\u3057\u3067\u3084\u308a\u53d6\u308a\u3057\u3066\u3001\u30c6\u30b9\u30c8\u3092\u9ad8\u901f\u5316\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u518d\u73fe\u6027:"})," \u7279\u5b9a\u306e\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u30b7\u30ca\u30ea\u30aa\u3092\u8a2d\u5b9a\u3057\u3001\u3044\u3064\u3067\u3082\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u6700\u521d\u304b\u3089\u518d\u8d77\u52d5\u3057\u3066\u767d\u7d19\u306e\u72b6\u614b\u306b\u623b\u3059\u4e8b\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ad8\u6709\u7528\u6027"}),": Aptos\u306edevnet\u304a\u3088\u3073testnet\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u5b9a\u671f\u7684\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3055\u308c\u308b\u305f\u3081\u3001\u305d\u306e\u9593\u306f\u5229\u7528\u3067\u304d\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f\u3001\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306b\u30a2\u30af\u30bb\u30b9\u51fa\u6765\u306a\u3044\u5834\u5408\u3067\u3082\u5e38\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u958b\u59cb",children:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u958b\u59cb"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/tools/aptos-cli/install-cli/",children:"Aptos CLI"}),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"}),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u3053\u308c\u306f\u3001\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI\u3092\u5b9f\u884c\u3057\u3066\u672c\u756a\u74b0\u5883\u306e\u69d8\u306a\u74b0\u5883\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u306e\u307f\u5fc5\u8981\u3067\u3059\u3002Aptos SDK\u7b49\u306e\u591a\u304f\u306e\u30c0\u30a6\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30c4\u30fc\u30eb\u306f\u3001\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u81ea\u52d5\u66f4\u65b0\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u3001Docker\u306f",(0,r.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker\u30c7\u30b9\u30af\u30c8\u30c3\u30d7"}),"\u7d4c\u7531\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Docker\u3092\u8d77\u52d5\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001\u65b0\u3057\u3044\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aptos node run-local-testnet --with-indexer-api\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u6ce8:\xa0\u540d\u524d(",(0,r.jsx)(n.code,{children:"local-testnet"}),")\u306b\u3082\u95a2\u308f\u3089\u305a\u3001\u3053\u308c\u306f Aptos\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\u3067\u4f55\u3082\u305b\u305a\u3001\u30de\u30b7\u30f3\u3067\u5b8c\u5168\u306b\u30ed\u30fc\u30ab\u30eb\u306a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u3068\u540c\u69d8\u306e\u51fa\u529b\u304c\u8868\u793a\u3055\u308c\u308b\u3053\u3068\u304c\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Readiness endpoint: http://0.0.0.0:8070/\n\nIndexer API is starting, please wait...\nNode API is starting, please wait...\nTransaction stream is starting, please wait...\nPostgres is starting, please wait...\nFaucet is starting, please wait...\n\nCompleted generating configuration:\n        Log file: "/Users/dport/.aptos/testnet/validator.log"\n        Test dir: "/Users/dport/.aptos/testnet"\n        Aptos root key path: "/Users/dport/.aptos/testnet/mint.key"\n        Waypoint: 0:397412c0f96b10fa3daa24bfda962671c3c3ae484e2d67ed60534750e2311f3d\n        ChainId: 4\n        REST API endpoint: http://0.0.0.0:8080\n        Metrics endpoint: http://0.0.0.0:9101/metrics\n        Aptosnet fullnode network endpoint: /ip4/0.0.0.0/tcp/6181\n        Indexer gRPC node stream endpoint: 0.0.0.0:50051\n\nAptos is running, press ctrl-c to exit\n\nNode API is ready. Endpoint: http://0.0.0.0:8080/\nPostgres is ready. Endpoint: postgres://postgres@127.0.0.1:5433/local_testnet\nTransaction stream is ready. Endpoint: http://0.0.0.0:50051/\nIndexer API is ready. Endpoint: http://127.0.0.1:8090/\nFaucet is ready. Endpoint: http://127.0.0.1:8081/\n\nApplying post startup steps...\n\nSetup is complete, you can now use the localnet!\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Setup is complete, you can now use the localnet!"}),"\u306e\u6700\u7d42\u884c\u3092\u5f85\u3061\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e",(0,r.jsx)(n.a,{href:"#common-errors-on-network-startup",children:"\u4e00\u822c\u7684\u306a\u30a8\u30e9\u30fc"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u3078\u9032\u3093\u3067\u4e0b\u3055\u3044\u3002"]})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8a18\u306e\u51fa\u529b\u4f8b\u304b\u3089\u5206\u304b\u308b\u69d8\u306b\u3001\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u5b9f\u884c\u3055\u308c\u308b\u3068\u3001\u4ee5\u4e0b\u306e\u30b5\u30fc\u30d3\u30b9\u3078\u30a2\u30af\u30bb\u30b9\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/nodes/aptos-api-spec",children:"\u30ce\u30fc\u30c9API"}),": \u3053\u308c\u306f\u30ce\u30fc\u30c9\u4e0a\u3067\u76f4\u63a5\u5b9f\u884c\u3055\u308c\u308bREST API\u3067\u3059\u3002\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u9001\u4fe1\u306a\u3069\u306e\u30b3\u30a2\u66f8\u304d\u8fbc\u307f\u6a5f\u80fd\u3068\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u30ea\u30bd\u30fc\u30b9\u3084Move\u30e2\u30b8\u30e5\u30fc\u30eb\u60c5\u5831\u306e\u8aad\u307f\u53d6\u308a\u7b49\u306e\u9650\u5b9a\u3055\u308c\u305f\u8aad\u307f\u53d6\u308a\u6a5f\u80fd\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/indexer/api/",children:"\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI"}),":\u3053\u308c\u306f\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u4ed8\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30c7\u30fc\u30bf\u3078\u306e\u8c4a\u5bcc\u306a\u8aad\u307f\u53d6\u308a\u30a2\u30af\u30bb\u30b9\u3092\u63d0\u4f9b\u3059\u308b",(0,r.jsx)(n.a,{href:"https://graphql.org/",children:"GraphQL"}),"API\u3067\u3059\u3002\n\u4e0a\u8a18\u306e\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI\u306eURL",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8090/",children:"http://127.0.0.1:8090"}),"\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30a4\u30f3\u30c7\u30af\u30b5\u30fcGraphQL API\u306e\u30af\u30a8\u30ea\u306b\u5f79\u7acb\u3064Web UI\u3067\u3042\u308bHasura\u30b3\u30f3\u30bd\u30fc\u30eb\u304c\u958b\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/indexer/txn-stream/",children:"\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30b9\u30c8\u30ea\u30fc\u30e0\u30b5\u30fc\u30d3\u30b9"}),": \u3053\u308c\u306f\u3001\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI\u304c\u4f7f\u7528\u3059\u308b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306egRPC\u30b9\u30c8\u30ea\u30fc\u30e0\u3067\u3059\u3002\u3053\u308c\u306f",(0,r.jsx)(n.a,{href:"/indexer/custom-processors/",children:"\u30ab\u30b9\u30bf\u30e0\u30d7\u30ed\u30bb\u30c3\u30b5"}),"\u3092\u958b\u767a\u3057\u3066\u3044\u308b\u5834\u5408\u306b\u306e\u307f\u95a2\u4fc2\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.postgresql.org/",children:"Postgres"}),":\n\u3053\u308c\u306f\u3001\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u30d7\u30ed\u30bb\u30c3\u30b5\u304c\u66f8\u304d\u8fbc\u3080\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u3067\u3059\u3002\u30a4\u30f3\u30c7\u30af\u30b5\u30fcAPI\u306f\u3053\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u304b\u3089\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/reference/glossary#faucet",children:"\u30d5\u30a9\u30fc\u30bb\u30c3\u30c8"}),": \u3053\u308c\u3092\u4f7f\u7528\u3057\u3066\u3001\u30ed\u30fc\u30ab\u30eb \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u4e0a\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u8cc7\u91d1\u3092\u6295\u5165\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u3053\u308c\u3089\u306e\u30b5\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5b9f\u884c\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001\u305d\u308c\u3089\u3092\u7121\u52b9\u306b\u3059\u308b\u30d5\u30e9\u30b0\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u66f8\u3044\u3066\u3044\u3066\u3001\u30ed\u30fc\u30ab\u30eb \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u3059\u3079\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u306b\u5bfe\u5fdc\u3059\u308b\u307e\u3067\u5f85\u6a5f\u3057\u305f\u3044\u5834\u5408\u306f\u3001 ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:8070"}),"\u3078GET\u30ea\u30af\u30a8\u30b9\u30c8\u51fa\u6765\u307e\u3059\u3002\u6700\u521d\u306f http \u30b3\u30fc\u30c9",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503",children:"503"}),"\u304c\u8fd4\u3055\u308c\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200",children:"200"}),"\u304c\u8fd4\u3055\u308c\u305f\u5834\u5408\u306f\u3001\u5168\u3066\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u6e96\u5099\u5b8c\u4e86\u3067\u3042\u308b\u4e8b\u3092\u610f\u5473\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30ed\u30fc\u30ab\u30eb \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u8d77\u52d5\u3059\u308b\u3068\u304d\u306b\u6e21\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u7570\u306a\u308b\u30d5\u30e9\u30b0\u3084\u3001\u7279\u5b9a\u306e\u30b5\u30fc\u30d3\u30b9\u304c\u5b9f\u884c\u3055\u308c\u308b\u30dd\u30fc\u30c8\u306e\u5909\u66f4\u306a\u3069\u306e\u69cb\u6210\u8a2d\u5b9a\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001help \u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aptos node run-local-testnet --help\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8d77\u52d5\u6642\u306e\u4e00\u822c\u7684\u306a\u30a8\u30e9\u30fc",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8d77\u52d5\u6642\u306e\u4e00\u822c\u7684\u306a\u30a8\u30e9\u30fc"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u30ed\u30fc\u30ab\u30eb \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u6b63\u5e38\u306b\u8d77\u52d5\u3057\u305f\u5834\u5408\u306f",(0,r.jsx)(n.a,{href:"#using-the-local-network",children:"\u30ed\u30fc\u30ab\u30eb \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u4f7f\u7528"}),"\u3078\u9032\u307f\u307e\u3059\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"\u30a2\u30c9\u30ec\u30b9\u306f\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059",children:"\u30a2\u30c9\u30ec\u30b9\u306f\u3059\u3067\u306b\u4f7f\u7528\u3055\u308c\u3066\u3044\u307e\u3059"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"panicked at 'error binding to 0.0.0.0:8080: error creating server listener: Address already in use (os error 48)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u5fc5\u8981\u3068\u3059\u308b\u30dd\u30fc\u30c8\u306e1\u3064\u304c\u65e2\u306b\u5225\u306e\u30d7\u30ed\u30bb\u30b9\u306b\u3088\u3063\u3066\u4f7f\u7528\u3055\u308c\u3066\u3044\u308b\u4e8b\u3092\u610f\u5473\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Unix\u30b7\u30b9\u30c6\u30e0\u3067\u3053\u308c\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u304c\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lsof -i :8080"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u30d7\u30ed\u30bb\u30b9\u306e\u540d\u524d\u3068 PID\u3092\u8b58\u5225\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"kill <pid>"}),"\u3092\u5b9f\u884c\u3057\u3001PID\u304c\u5206\u304b\u3063\u305f\u3089\u5b9f\u884c\u3057\u3066\u3001\u305d\u306e\u30dd\u30fc\u30c8\u3092\u89e3\u653e\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u958b\u3044\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u591a\u3059\u304e\u308b\u30a8\u30e9\u30fc",children:"\u958b\u3044\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u591a\u3059\u304e\u308b\u30a8\u30e9\u30fc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'panicked at crates/aptos/src/node/local_testnet/logging.rs:64:10:\ncalled `Result::unwrap()` on an `Err` value: Os { code: 24, kind: Uncategorized, message: \\"Too many open files\\" }"""\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u306f\u3001\u30b7\u30b9\u30c6\u30e0\u4e0a\u3067\u958b\u3044\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u304c\u591a\u904e\u304e\u308b\u4e8a\u3092\u610f\u5473\u3057\u307e\u3059\u3002\u591a\u304f\u306e Unix \u30b7\u30b9\u30c6\u30e0\u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u3092",(0,r.jsx)(n.code,{children:".zshrc"}),"\u8ffd\u3078\u52a0\u3059\u308b\u4e8b\u3067\u3001\u958b\u3044\u3066\u3044\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u6700\u5927\u6570\u3092\u5897\u3084\u3059\u4e8b\u304c\u51fa\u6765\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ulimit -n 32768\n"})}),"\n",(0,r.jsx)(n.h3,{id:"docker\u306f\u5229\u7528\u51fa\u6765\u307e\u305b\u3093",children:"Docker\u306f\u5229\u7528\u51fa\u6765\u307e\u305b\u3093"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Unexpected error: Failed to apply pre-run steps for Postgres: Docker is not available, confirm it is installed and running. On Linux you may need to use sudo\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u4fee\u6b63\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docker --version"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001docker\n\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"docker info"}),"\u3092\u5b9f\u884c\u3057\u3066Docker\u30c7\u30fc\u30e2\u30f3\u304c\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002(\u3053\u306e\u30a8\u30e9\u30fc\u304c",(0,r.jsx)(n.code,{children:"Cannot connect to the Docker daemon"}),"\u3068\u8a00\u3063\u3066\u3044\u308b\u5834\u5408\u3001Docker\u306f\u5b9f\u884c\u3055\u308c\u3066\u3044\u307e\u305b\u3093)"]}),"\n",(0,r.jsxs)(n.li,{children:["Docker\u306b\u63a5\u7d9a\u3059\u308b\u305f\u3081\u306e\u30bd\u30b1\u30c3\u30c8\u304c\u30de\u30b7\u30f3\u4e0a\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5834\u6240\u306b\u5b58\u5728\u3059\u308b\u4e8b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u4e0b\u3055\u3044\u3002\u4f8b\u3048\u3070\u3001Unix \u30b7\u30b9\u30c6\u30e0\u3067\u306f\u3001",(0,r.jsx)(n.code,{children:"/var/run/docker.sock"}),"\u304c\u5b58\u5728\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u5b58\u5728\u3057\u306a\u3044\u5834\u5408\u306f\u3001Docker\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u3092\u958b\u3044\u3066\n",(0,r.jsx)(n.code,{children:"Settings -> Advanced -> Allow the default Docker socket to be used."}),"\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u307e\u305f\u306f\u3001",(0,r.jsx)(n.code,{children:"docker context inspect | grep Host"}),"\u3092\u5b9f\u884c\u3057\u3066Docker\u30bd\u30b1\u30c3\u30c8\u306e\u5834\u6240\u3092\u898b\u3064\u3051\u308b\u4e8b\u304c\u51fa\u6765\u307e\u3059\u3002\u305d\u3057\u3066\u3001",(0,r.jsx)(n.code,{children:"sudo ln -s /Users/dport/.docker/run/docker.sock /var/run/docker.sock"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u305d\u306e\u5834\u6240\u3092\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u5834\u6240\u3078symlink\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u3046",children:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u3046"}),"\n",(0,r.jsx)(n.p,{children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u304c\u7a3c\u50cd\u3057\u3066\u3044\u308b\u306e\u3067\u3001\u4ed6\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3068\u540c\u69d8\u306b\u4f7f\u7528\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u3057\u305f\u304c\u3063\u3066\u3001\u4ee5\u4e0b\u306e\u69d8\u306b\u30ed\u30fc\u30ab\u30eb\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u51fa\u6765\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aptos init --profile <your-profile-name> --network local\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u305d\u306e\u5f8c\u3001\u305d\u306e\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u4eca\u5f8c\u4f7f\u7528\u3059\u308b\u30b3\u30de\u30f3\u30c9\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070",(0,r.jsx)(n.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/hello_blockchain",children:(0,r.jsx)(n.code,{children:"hello_blockchain"})}),"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u3088\u3046\u306a Move\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u516c\u958b\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aptos move publish --profile <your-profile-name> --package-dir /opt/git/aptos-core/aptos-move/move-examples/hello_blockchain --named-addresses HelloBlockchain=local\n"})}),"\n",(0,r.jsx)(n.h3,{id:"typescript-sdk\u3092\u69cb\u6210\u3059\u308b",children:"TypeScript SDK\u3092\u69cb\u6210\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["TypeScript SDK\u3067\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8(",(0,r.jsx)(n.code,{children:"Aptos"}),")\u3092\u521d\u671f\u5316\u3059\u308b\u6642\u3001\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30afURL\u3092\u4f7f\u7528\u51fa\u6765\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";\n\nconst network = Network.LOCAL;\nconst config = new AptosConfig({ network });\nconst client = new Aptos(config);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u518d\u8a2d\u5b9a",children:"\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u518d\u8a2d\u5b9a"}),"\n",(0,r.jsx)(n.p,{children:"\u958b\u767a\u4e2d\u3001\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u521d\u671f\u72b6\u614b\u3078\u30ea\u30bb\u30c3\u30c8\u3059\u308b\u3068\u4fbf\u5229\u306a\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u3078\u4f8b\u3092\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Move \u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u4e0b\u4f4d\u4e92\u63db\u6027\u306e\u306a\u3044\u5909\u66f4\u3092\u52a0\u3048\u305f\u306e\u3067\u3001\u540d\u524d\u3092\u5909\u66f4\u3057\u305f\u308a\u65b0\u3057\u3044\u30a2\u30ab\u30a6\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u305f\u308a\u305b\u305a\u518d\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u3042\u306a\u305f\u306f",(0,r.jsx)(n.a,{href:"https://aptos.dev/indexer/custom-processors/",children:"\u30ab\u30b9\u30bf\u30e0\u30a4\u30f3\u30c7\u30af\u30b5\u30fc\u30d7\u30ed\u30bb\u30c3\u30b5"}),"\u3092\u69cb\u7bc9\u3057\u3066\u304a\u308a\u3001\u65b0\u3057\u3044\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3057\u3066\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u30a2\u30ab\u30a6\u30f3\u30c8\u3001\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306a\u3069\u3001\u30c1\u30a7\u30fc\u30f3\u4e0a\u306e\u5168\u3066\u306e\u72b6\u614b\u3092\u30af\u30ea\u30a2\u3057\u305f\u3044\u3068\u8003\u3048\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u771f\u65b0\u3057\u3044\u30ed\u30fc\u30ab\u30eb\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"--force-restart"}),"\u30d5\u30e9\u30b0\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aptos node run-local-testnet --force-restart\n\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u305d\u306e\u5f8c\u3001\u4f5c\u696d\u5185\u5bb9\u3092\u8aa4\u3063\u3066\u524a\u9664\u3057\u306a\u3044\u69d8\u3001\u672c\u5f53\u306b\u30c1\u30a7\u30fc\u30f3\u3092\u518d\u958b\u3059\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Are you sure you want to delete the existing chain? [yes/no]\n> yes\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u8868\u793a\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u306f\u3001 ",(0,r.jsx)(n.code,{children:"--assume-yes"}),"\u3082\u540c\u69d8\u306b\u542b\u3081\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aptos node run-local-testnet --force-restart --assume-yes\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},83581:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var r=s(11855);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);