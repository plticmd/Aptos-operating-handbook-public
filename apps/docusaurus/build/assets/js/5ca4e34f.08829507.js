"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[2906],{29997:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(63159),r=t(83581);t(3688);const i={title:"Writing Move Scripts"},o="How can I write Move Scripts?",c={id:"move/move-on-aptos/scripts/writing-scripts",title:"Writing Move Scripts",description:"Move scripts can be written in tandem with Move contracts, but it's highly",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/move-on-aptos/scripts/writing-scripts.md",sourceDirName:"move/move-on-aptos/scripts",slug:"/move/move-on-aptos/scripts/writing-scripts",permalink:"/move/move-on-aptos/scripts/writing-scripts",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/move-on-aptos/scripts/writing-scripts.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Writing Move Scripts"},sidebar:"appSidebar",previous:{title:"Building with Move Scripts",permalink:"/move/move-on-aptos/scripts/"},next:{title:"Compiling Move Scripts",permalink:"/move/move-on-aptos/scripts/compiling-scripts"}},a={},l=[{value:"Package layout",id:"package-layout",level:2},{value:"Script syntax",id:"script-syntax",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"how-can-i-write-move-scripts",children:"How can I write Move Scripts?"}),"\n",(0,n.jsx)(s.p,{children:"Move scripts can be written in tandem with Move contracts, but it's highly\nsuggested to use a separate Move package for it. This will make it easier for\nyou to determine which bytecode file comes from the script."}),"\n",(0,n.jsx)(s.h2,{id:"package-layout",children:"Package layout"}),"\n",(0,n.jsx)(s.p,{children:"The package needs a Move.toml and a sources directory, similar to code modules."}),"\n",(0,n.jsx)(s.p,{children:"For example, we may have a directory layout like:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"my_project/\n\u251c\u2500\u2500 Move.toml\n\u2514\u2500\u2500 sources/\n    \u2514\u2500\u2500 my_script.move\n\n"})}),"\n",(0,n.jsx)(s.h2,{id:"script-syntax",children:"Script syntax"}),"\n",(0,n.jsx)(s.p,{children:"Scripts can be written exactly the same as modules on Aptos. Imports can be used\nfor any dependencies in the Move.toml file, and all public functions, including\nentry functions, can be called from the contract. There are a few limitations:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"There must be only one function in the contract, it will compile to that name."}),"\n",(0,n.jsxs)(s.li,{children:["Input arguments can only be one of\n[",(0,n.jsx)(s.code,{children:"u8"}),", ",(0,n.jsx)(s.code,{children:"u16"}),", ",(0,n.jsx)(s.code,{children:"u32"}),", ",(0,n.jsx)(s.code,{children:"u64"}),", ",(0,n.jsx)(s.code,{children:"u256"}),", ",(0,n.jsx)(s.code,{children:"address"}),", ",(0,n.jsx)(s.code,{children:"bool"}),", ",(0,n.jsx)(s.code,{children:"signer"}),", ",(0,n.jsx)(s.code,{children:"&signer"}),", ",(0,n.jsx)(s.code,{children:"vector<u8>"}),"].\nThere is no support for vectors of other types, or structs."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"An example below:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-move",children:"script {\n  use std::signer;\n  use aptos_framework::coin;\n  use aptos_framework::aptos_account;\n\n  fun transfer_half<Coin>(caller: &signer, receiver_address: address) {\n    // Retrieve the balance of the caller\n    let caller_address: address = signer::address_of(caller);\n    let balance: u64 = coin::balance<Coin>(caller_address);\n\n    // Send half to the receiver\n    let half = balance / 2;\n    aptos_account::transfer_coins<Coin>(caller, receiver_address, half);\n  }\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["For more specific details see:\n",(0,n.jsx)(s.a,{href:"/move/book/modules-and-scripts",children:"Move Book on Scripts"})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);