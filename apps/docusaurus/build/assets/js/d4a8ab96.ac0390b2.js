"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[3876],{88749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(63159),l=t(83581);const i={title:"Install CLI by Script"},o="script\u3067CLI\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",c={id:"tools/aptos-cli/install-cli/automated-install",title:"Install CLI by Script",description:"\u3053\u306eaptos\u30c4\u30fc\u30eb\u306f\u3001Aptos \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u958b\u767a\u3057\u3001Move \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u30c7\u30d0\u30c3\u30b0\u3057\u3001\u30ce\u30fc\u30c9\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30b3\u30de\u30f3\u30c9 \u30e9\u30a4\u30f3 \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9 (CLI) \u3067\u3059\u3002\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u81ea\u52d5\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066aptosCLI \u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/aptos-cli/install-cli/automated-install.md",sourceDirName:"tools/aptos-cli/install-cli",slug:"/tools/aptos-cli/install-cli/automated-install",permalink:"/tools/aptos-cli/install-cli/automated-install",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/tools/aptos-cli/install-cli/automated-install.md",tags:[],version:"current",lastUpdatedAt:1717781175,formattedLastUpdatedAt:"2024\u5e746\u67087\u65e5",frontMatter:{title:"Install CLI by Script"},sidebar:"appSidebar",previous:{title:"Install the Aptos CLI",permalink:"/tools/aptos-cli/install-cli/"},next:{title:"Download CLI Binaries",permalink:"/tools/aptos-cli/install-cli/download-cli-binaries"}},r={},d=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"script\u3067cli\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b",children:"script\u3067CLI\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u306e",(0,s.jsx)(n.code,{children:"aptos"}),"\u30c4\u30fc\u30eb\u306f\u3001Aptos \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u958b\u767a\u3057\u3001Move \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u30c7\u30d0\u30c3\u30b0\u3057\u3001\u30ce\u30fc\u30c9\u64cd\u4f5c\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30b3\u30de\u30f3\u30c9 \u30e9\u30a4\u30f3 \u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9 (CLI) \u3067\u3059\u3002\u3053\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3067\u306f\u81ea\u52d5\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f7f\u7528\u3057\u3066",(0,s.jsx)(n.code,{children:"aptos"}),"CLI \u30c4\u30fc\u30eb\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u65b9\u6cd5\u306b\u3064\u3044\u3066\u89e3\u8aac\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u524d\u63d0\u6761\u4ef6",children:"\u524d\u63d0\u6761\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u307e\u305a\u3001Python 3.6 \u4ee5\u964d\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ python3 --version\nPython 3.9.13\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f",(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"python.org"}),"\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u624b\u9806\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u306e\u624b\u9806\u306b\u5f93\u3063\u3066\u3001\u3055\u307e\u3056\u307e\u306a\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306b Aptos CLI \u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30aa\u30da\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 \u30b7\u30b9\u30c6\u30e0\u306b\u95a2\u4fc2\u306a\u304f\u3001\u5e38\u306b Aptos CLI \u306e\u6700\u65b0\u30ea\u30ea\u30fc\u30b9\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"macOS / Linux / Linux \u7528Windows \u30b5\u30d6\u30b7\u30b9\u30c6\u30e0 (WSL)"}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u624b\u9806\u306f\u3001Ubuntu 20.04\u3001Ubuntu 22.04\u3001Arch Linux\u3001macOS (ARM)\u3001\u304a\u3088\u3073 WSL \u3067\u30c6\u30b9\u30c8\u3055\u308c\u3066\u304a\u308a\u3001",(0,s.jsx)(n.code,{children:"curl"}),"\u307e\u305f\u306f",(0,s.jsx)(n.code,{children:"wget"}),"\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u3066\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u51fa\u6765\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u307e\u3059\u3002"]})}),(0,s.jsxs)(n.p,{children:["\u30bf\u30fc\u30df\u30ca\u30eb\u3067\u6b21\u306e",(0,s.jsx)(n.code,{children:"curl"}),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3\n'})}),(0,s.jsxs)(n.p,{children:["\u307e\u305f\u306f",(0,s.jsx)(n.code,{children:"wget"}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'wget -qO- "https://aptos.dev/scripts/install_cli.py" | python3\n'})}),(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u305f\u5834\u5408\u306f:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Couldn't find distutils or packaging. We cannot check the current version of the CLI. We will install the latest version.\n"})}),(0,s.jsxs)(n.p,{children:["\u307e\u305a",(0,s.jsx)(n.code,{children:"packaging"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u4e8b\u3092\u8003\u3048\u3066\u4e0b\u3055\u3044\u3002:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"pip3 install packaging\n"})})]})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Windows (NT)"}),(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"\u3053\u308c\u3089\u306e\u624b\u9806\u306f Windows 11 \u3067\u30c6\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"})}),(0,s.jsx)(n.p,{children:"PowerShell \u306e\u5834\u5408:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:'iwr "https://aptos.dev/scripts/install_cli.py" -useb | Select-Object -ExpandProperty Content | python3\n'})}),(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ModuleNotFoundError"}),"\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u305f\u5834\u5408\u306f: ",(0,s.jsx)(n.code,{children:"No module named packaging"}),"(\u540d\u524d\u4ed8\u304d\u30d1\u30c3\u30b1\u30fc\u30b8\u30f3\u30b0\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u3042\u308a\u307e\u305b\u3093)\u307e\u305a\u3001",(0,s.jsx)(n.code,{children:"packaging"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Shell",children:"pip3 install packaging\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u66f4\u65b0",children:"\u66f4\u65b0"}),"\n",(0,s.jsxs)(n.p,{children:["Aptos CLI \u306e\u66f4\u65b0\u3092\u30c8\u30ea\u30ac\u30fc\u3059\u308b\u306b\u306f\u3001",(0,s.jsx)(n.code,{children:"aptos update"}),"\u3092\u5b9f\u884c\u3057\u3001\u6210\u529f\u3092\u793a\u3059\u51fa\u529b\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "Result": "CLI already up to date (v1.0.4)"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u3042\u308b\u3044\u306f\u3001",(0,s.jsx)(n.code,{children:"python3 install_cli.py"}),"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb \u30b9\u30af\u30ea\u30d7\u30c8\u3092\u518d\u5ea6\u5b9f\u884c\u3057\u3066\u6b21\u306e\u3088\u3046\u306a\u51fa\u529b\u3092\u53d7\u3051\u53d6\u308a\u3001CLI \u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Latest CLI release: 1.0.4\nCurrently installed CLI: 1.0.4\n\nThe latest version (1.0.4) is already installed.\n"})})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},83581:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(11855);const l={},i=s.createContext(l);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);