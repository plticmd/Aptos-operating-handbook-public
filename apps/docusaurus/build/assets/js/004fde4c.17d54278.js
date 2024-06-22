"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[7579],{61262:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=s(63159),t=s(83581),l=s(44517),i=s(32830);const o={title:"Building Aptos From Source"},c="\u30bd\u30fc\u30b9\u304b\u3089 Aptos \u3092\u69cb\u7bc9\u3059\u308b",a={id:"guides/building-from-source",title:"Building Aptos From Source",description:"\u30d0\u30a4\u30ca\u30ea\u30ea\u30ea\u30fc\u30b9\u306f\u5229\u7528\u53ef\u80fd\u3067\u3059\u304c\u3001\u30bd\u30fc\u30b9\u304b\u3089\u30d3\u30eb\u30c9\u3057\u305f\u308a\u3001Aptos\u30c4\u30fc\u30eb\u3067\u958b\u767a\u3057\u305f\u308a\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u69d8\u306b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/building-from-source.md",sourceDirName:"guides",slug:"/guides/building-from-source",permalink:"/guides/building-from-source",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/guides/building-from-source.md",tags:[],version:"current",lastUpdatedAt:1717324438,formattedLastUpdatedAt:"2024\u5e746\u67082\u65e5",frontMatter:{title:"Building Aptos From Source"},sidebar:"appSidebar",previous:{title:"\u8a8d\u8a3c\u30ad\u30fc\u306e\u30ed\u30fc\u30c6\u30fc\u30b7\u30e7\u30f3",permalink:"/guides/account-management/key-rotation"}},d={},u=[{value:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",level:2},{value:"Aptos\u30b3\u30a2\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",id:"aptos\u30b3\u30a2\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",level:2},{value:"(\u30aa\u30d7\u30b7\u30e7\u30f3)\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3059\u308b",id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3059\u308b",level:3},{value:"build dependencies\u306e\u8a2d\u5b9a",id:"build-dependencies\u306e\u8a2d\u5b9a",level:2},{value:"\u8ffd\u52a0\u306e\u30c4\u30fc\u30eb",id:"\u8ffd\u52a0\u306e\u30c4\u30fc\u30eb",level:3},{value:"TypeScript",id:"typescript",level:4},{value:"Aptos\u306e\u69cb\u7bc9",id:"aptos\u306e\u69cb\u7bc9",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u30bd\u30fc\u30b9\u304b\u3089-aptos-\u3092\u69cb\u7bc9\u3059\u308b",children:"\u30bd\u30fc\u30b9\u304b\u3089 Aptos \u3092\u69cb\u7bc9\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/tools/aptos-cli/install-cli/",children:"\u30d0\u30a4\u30ca\u30ea\u30ea\u30ea\u30fc\u30b9\u306f\u5229\u7528\u53ef\u80fd\u3067\u3059"}),"\u304c\u3001\u30bd\u30fc\u30b9\u304b\u3089\u30d3\u30eb\u30c9\u3057\u305f\u308a\u3001Aptos\u30c4\u30fc\u30eb\u3067\u958b\u767a\u3057\u305f\u308a\u3059\u308b\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u69d8\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0",children:"\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0"}),"\n",(0,r.jsx)(n.p,{children:"Aptos\u306fLinux\u3001macOS\u3001Windows\u7b49\u3001\u69d8\u3005\u306a\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0\u30b7\u30b9\u30c6\u30e0\u3067\u69cb\u7bc9\u51fa\u6765\u307e\u3059\u3002\nAptos \u306f Linux \u3068 macOS \u3067\u5e83\u7bc4\u56f2\u3067\u30c6\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001Windows\u3067\u306f\u305d\u308c\u307b\u3069\u30c6\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002\u79c1\u9054\u306f\u4ee5\u4e0b\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Linux - Ubuntu\u30d0\u30fc\u30b8\u30e7\u30f320.04\u306822.04"}),"\n",(0,r.jsx)(n.li,{children:"macOS - macOS Monterey\u4ee5\u5f8c"}),"\n",(0,r.jsx)(n.li,{children:"Microsoft Windows - Windows10\u300111\u3001Windows\u30b5\u30fc\u30d0\u30fc2022+"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"aptos\u30b3\u30a2\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b",children:"Aptos\u30b3\u30a2\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002aptos-core\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u306b\u306fGit\u304c\u5fc5\u8981\u306a\u306e\u3067\u3001\u7d9a\u884c\u3059\u308b\u524d\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u516c\u5f0f",(0,r.jsx)(n.a,{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",children:"Git\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8"}),"\u306e\u6307\u793a\u306b\u5f93\u3044\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u51fa\u6765\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Aptos\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002Aptos\u30ea\u30dd\u30b8\u30c8\u30ea(repo)\u3092\u30af\u30ed\u30fc\u30f3\u3059\u308b\u306b\u306f\u3001\u307e\u305a\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u30d7\u30ed\u30f3\u30d7\u30c8 (macOS/Linux\u306e\u5834\u5408\u306f\u30bf\u30fc\u30df\u30ca\u30eb\u3001Windows\u306e\u5834\u5408\u306fPowerShell)\u3092\u958b\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u6b21\u306b\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u3001GitHub\u304b\u3089Git\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u30af\u30ed\u30fc\u30f3\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git clone https://github.com/aptos-labs/aptos-core.git\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4eca\u304b\u3089 ",(0,r.jsx)(n.em,{children:"changing directory"})," \u304b",(0,r.jsx)(n.code,{children:"cd"}),"\u3092\u4f7f\u3044\u3001\u65b0\u3057\u304f\u4f5c\u6210\u3055\u308c\u305f",(0,r.jsx)(n.code,{children:"aptos-core"}),"\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd aptos-core\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30aa\u30d7\u30b7\u30e7\u30f3\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3059\u308b",children:"(\u30aa\u30d7\u30b7\u30e7\u30f3)\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["devnet\n\u30aa\u30d7\u30b7\u30e7\u30f3\u3068\u3057\u3066\u3001\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3057\u3066Aptos\u30ce\u30fc\u30c9\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u6700\u521d\u306e\u958b\u767a\u3067",(0,r.jsx)(n.code,{children:"devnet"}),"\u3092\u30c1\u30a7\u30c3\u30af\u30a2\u30a6\u30c8\u3059\u308b\u4e8b\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002\u305d\u306e\u9055\u3044\u306b\u3064\u3044\u3066\u306f",(0,r.jsx)(n.a,{href:"/guides/system-integrators-guide#choose-a-network",children:"\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u9078\u629e"}),"\u3092\u5fa1\u89a7\u4e0b\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u30ea\u30ea\u30fc\u30b9\u30d6\u30e9\u30f3\u30c1"}),(0,r.jsxs)(l.A,{groupId:"network",children:[(0,r.jsx)(i.A,{value:"devnet",label:"Devnet",children:(0,r.jsx)(n.p,{children:"git checkout --track origin/devnet"})}),(0,r.jsx)(i.A,{value:"testnet",label:"\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8",default:!0,children:(0,r.jsx)(n.p,{children:"git checkout --track origin/testnet"})}),(0,r.jsx)(i.A,{value:"mainnet",label:"\u30e1\u30a4\u30f3\u30cd\u30c3\u30c8",children:(0,r.jsx)(n.p,{children:"git checkout --track origin/mainnet"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"build-dependencies\u306e\u8a2d\u5b9a",children:"build dependencies\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(n.p,{children:["Aptos\u30b3\u30a2\u306e\u69cb\u7bc9\u3001\u30c6\u30b9\u30c8\u3001\u691c\u67fb\u3067\u5fc5\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u958b\u767a\u74b0\u5883\u3092\u6e96\u5099\u3057\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u305f\u3081\u9078\u629e\u3057\u305f\u30e1\u30ab\u30cb\u30ba\u30e0\u3068\u95a2\u4fc2\u306a\u304f\u3001",(0,r.jsx)(n.strong,{children:"\u30c4\u30fc\u30eb\u30c1\u30a7\u30fc\u30f3\u5168\u4f53\u3092\u6700\u65b0\u306e\u72b6\u614b\u306b\u4fdd\u3064\u3053\u3068\u304c\u4e0d\u53ef\u6b20\u3067\u3059"}),"\u3002\n\u5f8c\u3067\u554f\u984c\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f\u3001\u5168\u3066\u306e\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u66f4\u65b0\u3057\u3066\u518d\u8a66\u884c\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"macOS"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"> \u81ea\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f7f\u7528"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"brew"}),"\u30d1\u30c3\u30b1\u30fc\u30b8 \u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044: ",(0,r.jsx)(n.a,{href:"https://brew.sh/",children:"https://brew.sh/"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u958b\u767a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7 \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u3066\u74b0\u5883\u3092\u6e96\u5099\u3057\u307e\u3059\u3002",(0,r.jsx)(n.code,{children:"./scripts/dev_setup.sh"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u73fe\u5728\u306e\u30b7\u30a7\u30eb\u74b0\u5883\u3092\u66f4\u65b0\u3057\u307e\u3059: ",(0,r.jsx)(n.code,{children:"source ~/.cargo/env"}),"."]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306f",(0,r.jsx)(n.code,{children:"./scripts/dev_setup.sh --help"}),"\u306e\u5b9f\u884c\u3067\u78ba\u8a8d\u51fa\u6765\u307e\u3059\u3002"]})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"> \u4f9d\u5b58\u95a2\u4fc2\u306e\u624b\u52d5\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"})}),(0,r.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u6a5f\u80fd\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u3092\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u304c\u3001",(0,r.jsx)(n.strong,{children:"\u304a\u52e7\u3081\u3057\u307e\u305b\u3093"}),"\u3002"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://cmake.org/download/",children:"CMake"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://releases.llvm.org/",children:"LLVM"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://lld.llvm.org/",children:"LLD"})}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Linux"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"> \u81ea\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f7f\u7528"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u958b\u767a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7 \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u3066\u74b0\u5883\u3092\u6e96\u5099\u3057\u307e\u3059\u3002: ",(0,r.jsx)(n.code,{children:"./scripts/dev_setup.sh"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u73fe\u5728\u306e\u30b7\u30a7\u30eb\u74b0\u5883\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002: ",(0,r.jsx)(n.code,{children:"source ~/.cargo/env"})]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d7\u30b7\u30e7\u30f3\u306f",(0,r.jsx)(n.code,{children:"./scripts/dev_setup.sh --help"}),"\u306e\u5b9f\u884c\u3067\u78ba\u8a8d\u51fa\u6765\u307e\u3059\u3002"]})}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"> \u4f9d\u5b58\u95a2\u4fc2\u306e\u624b\u52d5\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"})}),(0,r.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u6a5f\u80fd\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u3053\u308c\u3089\u3092\u624b\u52d5\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u304c\u3001",(0,r.jsx)(n.strong,{children:"\u304a\u52e7\u3081\u3057\u307e\u305b\u3093"}),"\u3002"]}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://cmake.org/download/",children:"CMake"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://releases.llvm.org/",children:"LLVM"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://packages.ubuntu.com/jammy/libssl-dev",children:"libssl-dev"})," and ",(0,r.jsx)(n.a,{href:"https://packages.ubuntu.com/jammy/libclang-dev",children:"libclang-dev"})]}),"\n"]})]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Windows"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"> \u81ea\u52d5\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f7f\u7528"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u7ba1\u7406\u8005\u3068\u3057\u3066 PowerShell \u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u958b\u767a\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7 \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5b9f\u884c\u3057\u3066\u74b0\u5883\u3092\u6e96\u5099\u3057\u307e\u3059\u3002: ",(0,r.jsx)(n.code,{children:"PowerShell -ExecutionPolicy Bypass -File ./scripts/windows_dev_setup.ps1"})]}),"\n",(0,r.jsx)(n.li,{children:"\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u5f8c\u3001\u65b0\u3057\u3044PowerShell\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"}),"\n"]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"> \u4f9d\u5b58\u95a2\u4fc2\u306e\u624b\u52d5\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"})}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://releases.llvm.org/",children:"LLVM"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"https://github.com/llvm/llvm-project/releases/tag/llvmorg-15.0.7",children:"\u6700\u65b0\u306e\u30d3\u30eb\u30c9\u6e08\u307f\u30ea\u30ea\u30fc\u30b9"}),"\u306f\u3001GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u3092\u5fa1\u89a7\u4e0b\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://visualstudio.microsoft.com/downloads/#build-tools-for-visual-studio-2022",children:"Microsoft Visual Studio Build Tools for Windows"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u4e2d\u306b\u300cC++\u306b\u3088\u308b\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u958b\u767a\u300d\u30683\u3064\u306e\u8ffd\u52a0\u30aa\u30d7\u30b7\u30e7\u30f3(MSVC C++\u30d3\u30eb\u30c9\u30c4\u30fc\u30eb\u3001Windows10/11SDK\u3001Windows\u7528C++CMake\u30c4\u30fc\u30eb)\u3092\u9078\u629e\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Windows ARM\u306e\u5834\u5408\u306f",(0,r.jsx)(n.a,{href:"https://visualstudio.microsoft.com/vs",children:"Visual Studio"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Visual Studio/Build Tools \u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u6642\u306b\u307e\u3060\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f",(0,r.jsx)(n.a,{href:"https://cmake.org/download/",children:"CMake"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\n6.\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u5f8c\u3001\u65b0\u3057\u3044PowerShell\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u958b\u304d\u307e\u3059\u3002"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u8ffd\u52a0\u306e\u30c4\u30fc\u30eb",children:"\u8ffd\u52a0\u306e\u30c4\u30fc\u30eb"}),"\n",(0,r.jsxs)(n.p,{children:["macOS \u307e\u305f\u306f Linux \u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3067",(0,r.jsx)(n.code,{children:"scripts/dev_setup.sh"}),"\u304c\u5fc5\u8981\u306a\u5834\u5408\u306f\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u8ffd\u52a0\u306e\u30c4\u30fc\u30eb\u304c\u5229\u7528\u51fa\u6765\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"typescript",children:"TypeScript"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/sdks/ts-sdk/",children:"\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u305fSDK\u306e\u4f7f\u7528\u306f\u3001npm/pnpm/yarn\u304b\u3089\u5b9f\u73fe\u3067\u304d\u307e\u3059\u3002"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"aptos\u306e\u69cb\u7bc9",children:"Aptos\u306e\u69cb\u7bc9"}),"\n",(0,r.jsx)(n.p,{children:"\u4f5c\u696d\u74b0\u5883\u304c\u3042\u308b\u304b\u3069\u3046\u304b\u3092\u78ba\u8a8d\u3059\u308b\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u3001\u5168\u3066\u3092\u30d3\u30eb\u30c9\u3057\u3066\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u4e8b\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cargo build\ncargo test -- --skip prover\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8a18\u306eMove Prover\u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001prover\u30c6\u30b9\u30c8\u3092\u30b9\u30ad\u30c3\u30d7\u3059\u308b\u5fc5\u8981\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u7279\u5b9a\u306e\u30c4\u30fc\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"cargo build"}),"\u3068",(0,r.jsx)(n.code,{children:"cargo run"}),"\u306e\u305f\u3081\u306e\u63a8\u5968\u30d1\u30bf\u30fc\u30f3\u304c\u6709\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guides/local-development-network",children:"\u30ed\u30fc\u30ab\u30eb\u958b\u767a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3092\u5b9f\u884c\u3059\u308b"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/indexer/legacy/indexer-fullnode",children:"\u30a4\u30f3\u30c7\u30af\u30b5\u30fc"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/nodes/measure/node-health-checker",children:"\u30ce\u30fc\u30c9\u30d8\u30eb\u30b9\u30c1\u30a7\u30c3\u30ab\u30fc"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/guides/running-a-local-multi-node-network",children:"\u30ed\u30fc\u30ab\u30eb\u30de\u30eb\u30c1\u30ce\u30fc\u30c9\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306e\u5b9f\u884c"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},32830:(e,n,s)=>{s.d(n,{A:()=>i});s(11855);var r=s(51038);const t={tabItem:"tabItem_fjQ6"};var l=s(63159);function i(e){let{children:n,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,i),hidden:s,children:n})}},44517:(e,n,s)=>{s.d(n,{A:()=>y});var r=s(11855),t=s(51038),l=s(94663),i=s(53178),o=s(42394),c=s(31560),a=s(54169),d=s(76315);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[a,u]=x({queryString:s,groupId:t}),[j,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),f=(()=>{const e=a??j;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=s(39634);const f={tabList:"tabList__eIX",tabItem:"tabItem_SzJH"};var g=s(63159);function b(e){let{className:n,block:s,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),t=o[s].value;t!==r&&(a(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},83581:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(11855);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);