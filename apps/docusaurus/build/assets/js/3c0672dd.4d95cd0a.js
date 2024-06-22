"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[5684],{23172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(63159),s=n(83581);n(3688);const r={title:"Building with Objects"},a="What are objects?",c={id:"move/move-on-aptos/objects/index",title:"Building with Objects",description:"The Move language controls access to resources using the store ability and",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/move-on-aptos/objects/index.md",sourceDirName:"move/move-on-aptos/objects",slug:"/move/move-on-aptos/objects/",permalink:"/move/move-on-aptos/objects/",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/move-on-aptos/objects/index.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Building with Objects"},sidebar:"appSidebar",previous:{title:"Advanced Move Guides",permalink:"/move/aptos-move"},next:{title:"Creating objects",permalink:"/move/move-on-aptos/objects/creating-objects"}},i={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"what-are-objects",children:"What are objects?"}),"\n",(0,o.jsx)(t.p,{children:"The Move language controls access to resources using the store ability and\naccounts. The Object model provides a way to associate a collection of resources\nwith a single address, using centralized resource control and ownership\nmanagement. An Object is a container for resources at a single address which can\nbe managed and accessed as a group for efficiency. The contract creating an\nObject can define custom behaviors around changes and transfers of those\nresources."}),"\n",(0,o.jsxs)(t.p,{children:["It's simply represented as an ",(0,o.jsx)(t.code,{children:"ObjectCore"})," struct, which keeps track of the\nowner of the ",(0,o.jsx)(t.code,{children:"Object"})," and transfer permissions. Along with the ability to store\nresources with an ",(0,o.jsx)(t.code,{children:"ObjectGroup"}),". You can find more technical details at the\n",(0,o.jsx)(t.a,{href:"/standards/aptos-object",children:"Object standard"})," page, and view the code at the\n",(0,o.jsx)(t.a,{href:"/reference/move",children:"framework generated object documentation"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"An example of creating and transferring an object:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-move",children:"module my_addr::object_playground {\n  use std::signer;\n  use aptos_framework::object::{self, ObjectCore};\n\n  entry fun create_and_transfer(caller: &signer, destination: address) {\n    // Create object\n    let caller_address = signer::address_of(caller);\n    let constructor_ref = object::create_object(caller_address);\n\n    // Set up the object...\n\n    // Transfer to destination\n    let object = object::object_from_constructor_ref<ObjectCore>(\n      &constructor_ref\n    );\n    object::transfer(caller, object, destination);\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h1,{id:"learn-more-about-using-objects",children:"Learn more about using Objects"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/move/move-on-aptos/objects/creating-objects",children:"Creating objects"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/move/move-on-aptos/objects/configuring-objects",children:"Configuring objects"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/move/move-on-aptos/objects/using-objects",children:"Using objects"})}),"\n"]}),"\n",(0,o.jsx)(t.h1,{id:"more-details",children:"More details"}),"\n",(0,o.jsx)(t.p,{children:"For more details on objects, checkout:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/standards/aptos-object",children:"Object standards"})," page."]}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/reference/move/##?branch=mainnet&page=aptos-framework/doc/object.md",children:"Framework generated object documentation"})}),"\n"]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);