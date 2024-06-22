"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[3724],{14580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(63159),s=n(83581);const a={title:"Creating objects"},c="Creating Objects",r={id:"move/move-on-aptos/objects/creating-objects",title:"Creating objects",description:"When first creating an object, it will have a resource",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/move-on-aptos/objects/creating-objects.md",sourceDirName:"move/move-on-aptos/objects",slug:"/move/move-on-aptos/objects/creating-objects",permalink:"/move/move-on-aptos/objects/creating-objects",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/move-on-aptos/objects/creating-objects.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Creating objects"},sidebar:"appSidebar",previous:{title:"Building with Objects",permalink:"/move/move-on-aptos/objects/"},next:{title:"Configuring objects",permalink:"/move/move-on-aptos/objects/configuring-objects"}},l={},d=[{value:"Creating a deletable object",id:"creating-a-deletable-object",level:2},{value:"Deletable Objects",id:"deletable-objects",level:3},{value:"Creating a non-deletable object",id:"creating-a-non-deletable-object",level:2},{value:"Named objects",id:"named-objects",level:3},{value:"Sticky objects",id:"sticky-objects",level:3}];function i(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-objects",children:"Creating Objects"}),"\n",(0,o.jsxs)(t.p,{children:["When first creating an object, it will have a resource\nnamed ",(0,o.jsx)(t.code,{children:"0x1::object::ObjectCore"}),"\nadded. This contains metadata about the object, as well as information about the\nowner of the object."]}),"\n",(0,o.jsx)(t.p,{children:"Objects can be created in multiple ways depending on your needs. They can be\nbroken into two main types of objects:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Deletable objects"}),"\n",(0,o.jsx)(t.li,{children:"Non-deletable objects"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-deletable-object",children:"Creating a deletable object"}),"\n",(0,o.jsx)(t.p,{children:"Generally, users want objects to be deletable. If an object is deletable, then\nstorage refunds can be acquired by deleting the object, saving on gas."}),"\n",(0,o.jsx)(t.h3,{id:"deletable-objects",children:"Deletable Objects"}),"\n",(0,o.jsx)(t.p,{children:"Create object generates a random unique address based on the transaction hash\nand\na counter. The addresses of the objects are always unique and this is the\npreferred\nway to make most objects."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-move",children:"module my_addr::object_playground {\n  use std::signer;\n  use aptos_framework::object;\n\n  entry fun create_my_object(caller: &signer) {\n    let caller_address = signer::address_of(caller);\n    let constructor_ref = object::create_object(caller_address);\n    // ...\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"creating-a-non-deletable-object",children:"Creating a non-deletable object"}),"\n",(0,o.jsx)(t.p,{children:"Non-deletable objects are useful for certain situations that need a guarantee of\nan existing object. There are two ways to handle this on Aptos:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Named objects"}),"\n",(0,o.jsx)(t.li,{children:"Sticky objects"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"named-objects",children:"Named objects"}),"\n",(0,o.jsx)(t.p,{children:"Create named object lets you create an object with a fixed seed. This makes it\neasy to later"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-move",children:'module my_addr::object_playground {\n  use std::signer;\n  use aptos_framework::object;\n\n  /// Seed for my named object, must be globally unique to the creating account\n  const NAME: vector<u8> = b"MyAwesomeObject";\n\n  entry fun create_my_object(caller: &signer) {\n    let caller_address = signer::address_of(caller);\n    let constructor_ref = object::create_named_object(caller_address, NAME);\n    // ...\n  }\n\n  #[view]\n  fun has_object(creator: address): bool {\n    let object_address = object::create_object_address(&creator, NAME);\n    object_exists<0x1::object::ObjectCore>(object_address)\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"sticky-objects",children:"Sticky objects"}),"\n",(0,o.jsx)(t.p,{children:"This is exactly the same as deletable objects, but the object\ncannot be deleted. This is necessary for uses like fungible asset metadata that\nwould want to not be deleted."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-move",children:"module my_addr::object_playground {\n  use std::signer;\n  use aptos_framework::object;\n\n  entry fun create_my_object(caller: &signer) {\n    let caller_address = signer::address_of(caller);\n    let constructor_ref = object::create_sticky_object(caller_address);\n    // ...\n  }\n}\n"})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},83581:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var o=n(11855);const s={},a=o.createContext(s);function c(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);