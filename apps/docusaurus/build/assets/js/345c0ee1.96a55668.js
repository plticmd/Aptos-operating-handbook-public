"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[733],{3108:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=s(63159),i=s(83581);const r={title:"TypeScript Index",slug:"index",hidden:!1},c="Legacy TypeScript SDK",d={id:"sdks/legacy-ts-sdk/index",title:"TypeScript Index",description:"This documentation is for the legacy TypeScript SDK, aka aptos. For a more robust and better SDK support, we recommend upgrading to the new TypeScript SDK @aptos-labs/ts-sdk. Take a look at the documentation and the migration guide",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/legacy-ts-sdk/index.md",sourceDirName:"sdks/legacy-ts-sdk",slug:"/sdks/legacy-ts-sdk/index",permalink:"/sdks/legacy-ts-sdk/index",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/sdks/legacy-ts-sdk/index.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"TypeScript Index",slug:"index",hidden:!1},sidebar:"appSidebar",previous:{title:"Typescript",permalink:"/sdks/ts-sdk/typescript"},next:{title:"TypeScript SDK Architecture",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-overview"}},p={},o=[{value:"Installing the TypeScript SDK",id:"installing-the-typescript-sdk",level:2},{value:"Using the TypeScript SDK",id:"using-the-typescript-sdk",level:2},{value:"TypeScript SDK Architecture",id:"typescript-sdk-architecture",level:2},{value:"Additional information",id:"additional-information",level:2},{value:"TypeScript SDK Source code",id:"typescript-sdk-source-code",level:3},{value:"TypeScript SDK at NPM",id:"typescript-sdk-at-npm",level:3},{value:"TypeScript SDK Reference",id:"typescript-sdk-reference",level:3},{value:"TypeScript SDK Reference Source",id:"typescript-sdk-reference-source",level:3}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"legacy-typescript-sdk",children:"Legacy TypeScript SDK"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This documentation is for the ",(0,n.jsx)(t.strong,{children:"legacy TypeScript SDK"}),", aka ",(0,n.jsx)(t.code,{children:"aptos"}),". For a more robust and better SDK support, we recommend upgrading to the ",(0,n.jsx)(t.strong,{children:"new TypeScript SDK"})," ",(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-ts-sdk",children:"@aptos-labs/ts-sdk"}),". Take a look at the ",(0,n.jsx)(t.a,{href:"/sdks/ts-sdk/",children:"documentation"})," and the ",(0,n.jsx)(t.a,{href:"/sdks/ts-sdk/migration-guide",children:"migration guide"})]})}),"\n",(0,n.jsxs)(t.p,{children:["Aptos provides a fully supported TypeScript SDK with the source code in the ",(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/typescript/sdk",children:"Aptos-core GitHub"})," repository."]}),"\n",(0,n.jsx)(t.h2,{id:"installing-the-typescript-sdk",children:"Installing the TypeScript SDK"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Make sure you ",(0,n.jsx)(t.a,{href:"/tools/aptos-cli/install-cli/",children:"downloaded the latest precompiled binary for the Aptos CLI"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On a terminal run the below command to install the TypeScript SDK from ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/aptos",children:"npmjs"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm i aptos\n"})}),"\n",(0,n.jsx)(t.p,{children:"or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add aptos\n"})}),"\n",(0,n.jsx)(t.p,{children:"or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"pnpm add aptos\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsx)(t.p,{children:"The above command installs the TS SDK and should not be confused as installing the Aptos CLI."})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-the-typescript-sdk",children:"Using the TypeScript SDK"}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"/tutorials/",children:"Developer Tutorials"})," for code examples showing how to use the Typescript SDK."]}),"\n",(0,n.jsx)(t.h2,{id:"typescript-sdk-architecture",children:"TypeScript SDK Architecture"}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"/sdks/legacy-ts-sdk/typescript-sdk-overview",children:"TypeScript SDK Architecture"})," for the components that make up the TypeScript SDK."]}),"\n",(0,n.jsx)(t.h2,{id:"additional-information",children:"Additional information"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"typescript-sdk-source-code",children:(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/ecosystem/typescript/sdk",children:"TypeScript SDK Source code"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"typescript-sdk-at-npm",children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/aptos",children:"TypeScript SDK at NPM"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"typescript-sdk-reference",children:(0,n.jsx)(t.a,{href:"https://aptos-labs.github.io/ts-sdk-doc/",children:"TypeScript SDK Reference"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.h3,{id:"typescript-sdk-reference-source",children:(0,n.jsx)(t.a,{href:"https://github.com/aptos-labs/ts-sdk-doc",children:"TypeScript SDK Reference Source"})}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},83581:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>d});var n=s(11855);const i={},r=n.createContext(i);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);