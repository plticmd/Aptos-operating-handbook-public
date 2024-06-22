"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[8618],{21781:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=r(63159),i=r(83581);const o={},t="Signer",d={id:"move/book/signer",title:"Signer",description:"signer is a built-in Move resource type. A signer is a",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/book/signer.md",sourceDirName:"move/book",slug:"/move/book/signer",permalink:"/move/book/signer",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/book/signer.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{},sidebar:"appSidebar",previous:{title:"Vector",permalink:"/move/book/vector"},next:{title:"References",permalink:"/move/book/references"}},a={},c=[{value:"Comparison to <code>address</code>",id:"comparison-to-address",level:2},{value:"<code>signer</code> Operators",id:"signer-operators",level:2},{value:"Ownership",id:"ownership",level:2}];function l(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"signer",children:"Signer"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"signer"})," is a built-in Move resource type. A ",(0,n.jsx)(s.code,{children:"signer"})," is a\n",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Object-capability_model",children:"capability"})," that allows the holder to act on\nbehalf of a particular ",(0,n.jsx)(s.code,{children:"address"}),". You can think of the native implementation as being:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-move",children:"struct signer has drop { a: address }\n"})}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.code,{children:"signer"})," is somewhat similar to a Unix ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/User_identifier",children:"UID"})," in\nthat it represents a user authenticated by code ",(0,n.jsx)(s.em,{children:"outside"})," of Move (e.g., by checking a cryptographic\nsignature or password)."]}),"\n",(0,n.jsxs)(s.h2,{id:"comparison-to-address",children:["Comparison to ",(0,n.jsx)(s.code,{children:"address"})]}),"\n",(0,n.jsxs)(s.p,{children:["A Move program can create any ",(0,n.jsx)(s.code,{children:"address"})," value without special permission using address literals:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-move",children:"let a1 = @0x1;\nlet a2 = @0x2;\n// ... and so on for every other possible address\n"})}),"\n",(0,n.jsxs)(s.p,{children:["However, ",(0,n.jsx)(s.code,{children:"signer"})," values are special because they cannot be created via literals or\ninstructions--only by the Move VM. Before the VM runs a script with parameters of type ",(0,n.jsx)(s.code,{children:"signer"}),", it\nwill automatically create ",(0,n.jsx)(s.code,{children:"signer"})," values and pass them into the script:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-move",children:"script {\n    use std::signer;\n    fun main(s: signer) {\n        assert!(signer::address_of(&s) == @0x42, 0);\n    }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This script will abort with code ",(0,n.jsx)(s.code,{children:"0"})," if the script is sent from any address other than ",(0,n.jsx)(s.code,{children:"0x42"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["A Move script can have an arbitrary number of ",(0,n.jsx)(s.code,{children:"signer"}),"s as long as the ",(0,n.jsx)(s.code,{children:"signer"}),"s are a prefix\nto any other arguments. In other words, all of the ",(0,n.jsx)(s.code,{children:"signer"})," arguments must come first:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-move",children:"script {\n    use std::signer;\n    fun main(s1: signer, s2: signer, x: u64, y: u8) {\n        // ...\n    }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This is useful for implementing ",(0,n.jsx)(s.em,{children:"multi-signer scripts"})," that atomically act with the authority of\nmultiple parties. For example, an extension of the script above could perform an atomic currency\nswap between ",(0,n.jsx)(s.code,{children:"s1"})," and ",(0,n.jsx)(s.code,{children:"s2"}),"."]}),"\n",(0,n.jsxs)(s.h2,{id:"signer-operators",children:[(0,n.jsx)(s.code,{children:"signer"})," Operators"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"std::signer"})," standard library module provides two utility functions over ",(0,n.jsx)(s.code,{children:"signer"})," values:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Function"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"signer::address_of(&signer): address"})}),(0,n.jsxs)(s.td,{children:["Return the ",(0,n.jsx)(s.code,{children:"address"})," wrapped by this ",(0,n.jsx)(s.code,{children:"&signer"}),"."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"signer::borrow_address(&signer): &address"})}),(0,n.jsxs)(s.td,{children:["Return a reference to the ",(0,n.jsx)(s.code,{children:"address"})," wrapped by this ",(0,n.jsx)(s.code,{children:"&signer"}),"."]})]})]})]}),"\n",(0,n.jsxs)(s.p,{children:["In addition, the ",(0,n.jsx)(s.code,{children:"move_to<T>(&signer, T)"})," ",(0,n.jsx)(s.a,{href:"/move/book/global-storage-operators",children:"global storage operator"}),"\nrequires a ",(0,n.jsx)(s.code,{children:"&signer"})," argument to publish a resource ",(0,n.jsx)(s.code,{children:"T"})," under ",(0,n.jsx)(s.code,{children:"signer.address"}),"'s account. This\nensures that only an authenticated user can elect to publish a resource under their ",(0,n.jsx)(s.code,{children:"address"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"ownership",children:"Ownership"}),"\n",(0,n.jsxs)(s.p,{children:["Unlike simple scalar values, ",(0,n.jsx)(s.code,{children:"signer"})," values are not copyable, meaning they cannot be copied from\nany operation whether it be through an explicit ",(0,n.jsx)(s.a,{href:"/move/book/variables#move-and-copy",children:(0,n.jsx)(s.code,{children:"copy"})})," instruction\nor through a ",(0,n.jsxs)(s.a,{href:"/move/book/references#reading-and-writing-through-references",children:["dereference ",(0,n.jsx)(s.code,{children:"*"})]}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},83581:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>d});var n=r(11855);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);