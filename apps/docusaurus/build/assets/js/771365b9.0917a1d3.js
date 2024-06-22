"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[361],{59083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(63159),s=n(83581);n(45496),n(57376);const o={title:"Object"},a="Object",i={id:"standards/aptos-object",title:"Object",description:"The Object model allows Move to represent a complex type as a set of resources stored within a single address and offers a rich capability model that allows for fine-grained resource control and ownership management.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/standards/aptos-object.md",sourceDirName:"standards",slug:"/standards/aptos-object",permalink:"/standards/aptos-object",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/standards/aptos-object.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"Object"},sidebar:"appSidebar",previous:{title:"Aptos Standards",permalink:"/standards/"},next:{title:"Aptos Coin (Legacy)",permalink:"/standards/aptos-coin"}},c={},d=[{value:"Comparison with the account resources model",id:"comparison-with-the-account-resources-model",level:2},{value:"Structure",id:"structure",level:2},{value:"Object resource group",id:"object-resource-group",level:3},{value:"Object Lifecycle",id:"object-lifecycle",level:2},{value:"Creation",id:"creation",level:3},{value:"Object capabilities (refs)",id:"object-capabilities-refs",level:3},{value:"Object reference",id:"object-reference",level:3},{value:"Events",id:"events",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"object",children:"Object"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/aptos-move/framework/aptos-framework/sources/object.move",children:"Object model"})," allows Move to represent a complex type as a set of resources stored within a single address and offers a rich capability model that allows for fine-grained resource control and ownership management."]}),"\n",(0,r.jsx)(t.p,{children:"In the object model, an NFT or token can place common token data within a Token resource, object data within an ObjectCore resource, and then specialize into additional resources as necessary. For example, a Player object could define a player within a game and be an NFT at the same time. The ObjectCore itself stores both the address of the current owner and the appropriate data for creating event streams."}),"\n",(0,r.jsxs)(t.p,{children:["For more usage based details checkout ",(0,r.jsx)(t.a,{href:"/move/move-on-aptos/objects/",children:"Building With Objects"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"comparison-with-the-account-resources-model",children:"Comparison with the account resources model"}),"\n",(0,r.jsx)(t.p,{children:"The existing Aptos data model emphasizes the use of the store ability within Move. Store allows for a struct to exist within any struct that is stored on-chain. As a result, data can live anywhere within any struct and at any address. While this provides great flexibility it has many limitations:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Data is not be guaranteed to be accessible, for example, it can be placed within a user-defined resource that may violate expectations for that data, e.g., a creator attempting to burn an NFT put into a user-defined store. This can be confusing to both the users and creators of this data."}),"\n",(0,r.jsxs)(t.li,{children:["Data of differing types can be stored to a single data structure (e.g., map, vector) via ",(0,r.jsx)(t.code,{children:"any"}),", but for complex data types ",(0,r.jsx)(t.code,{children:"any"})," incurs additional costs within Move as each access requires deserialization. It also can lead to confusion if API developers expect that a specific any field changes the type it represents."]}),"\n",(0,r.jsx)(t.li,{children:"While resource accounts allow for greater autonomy of data, they do so inefficiently for objects and do not take advantage of resource groups."}),"\n",(0,r.jsx)(t.li,{children:"Data cannot be recursively composable, because Move currently prohibits recursive data structures. Furthermore, experience suggests that true recursive data structures can lead to security vulnerabilities."}),"\n",(0,r.jsx)(t.li,{children:"Existing data cannot be easily referenced from entry functions, for example, supporting string validation requires many lines of code. Attempting to make tables directly becomes impractical as keys can be composed of many types, thus specializing to support within entry functions becomes complex."}),"\n",(0,r.jsx)(t.li,{children:"Events cannot be emitted from data but from an account that may not be associated with the data."}),"\n",(0,r.jsx)(t.li,{children:"Transferring logic is limited to the APIs provided in the respective modules and generally requires loading resources on both the sender and receiver adding unnecessary cost overheads."}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Object is a core primitive in Aptos Move and created via the object module at 0x1::object"})}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(t.p,{children:"An object is stored in the ObjectGroup resource group, which enables other resources within the object to be co-located for data locality and data cost savings. It's important to note that not all resources within an object need to be co-located within the ObjectGroup, and it's up to the developer of an object to determine their data layout."}),"\n",(0,r.jsx)(t.h3,{id:"object-resource-group",children:"Object resource group"}),"\n",(0,r.jsx)(t.p,{children:"Object is a container for resources that are stored within a single address. These resources usually represent related data often accessed together and should be stored within a single address for data locality and cost savings.\nWhen created, an object has a resource group, ObjectGroup, by default:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[resource_group(scope = global)]\nstruct ObjectGroup { }\n"})}),"\n",(0,r.jsx)(t.p,{children:"Each object also has the core ObjectCore resource with fundamental properties:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[resource_group_member(group = aptos_framework::object::ObjectGroup)]\nstruct ObjectCore has key {\n    /// Used by guid to guarantee globally unique objects and create event streams\n    guid_creation_num: u64,\n    /// The address (object or account) that owns this object\n    owner: address,\n    /// Object transferring is a common operation, this allows for disabling and enabling\n    /// transfers. Bypassing the use of a the TransferRef.\n    allow_ungated_transfer: bool,\n    /// Emitted events upon transferring of ownership.\n    transfer_events: event::EventHandle<TransferEvent>,\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"After creating an object, creators can extend with additional resources. For example, an exchange can create an object for each of its liquidity pools and add a resource to track the pool's liquidity."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[resource_group_member(group = aptos_framework::object::ObjectGroup)]\nstruct LiquidityPool has key {\n    token_a: Object<FungibleAsset>,\n    token_b: Object<FungibleAsset>,\n    reserves_a: u128,\n    reserves_b: u128\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the above code, ",(0,r.jsx)(t.code,{children:"token_a"})," and ",(0,r.jsx)(t.code,{children:"token_b"})," are references to other objects. Specifically, ",(0,r.jsx)(t.code,{children:"Object<T>"})," is a reference to an object stored at a given address that contains ",(0,r.jsx)(t.code,{children:"T"})," resource. In this example, they're fungible assets (similar to coins). This is covered in more detail in the ",(0,r.jsx)(t.a,{href:"/standards/fungible-asset",children:"Aptos Fungible Asset Standard"}),".\nLiquidityPool resource is part of the ObjectGroup resource group. This means that the LiquidityPool resource is stored in the same storage slot as the ObjectCore resource. This is more storage and gas efficient for reading and writing data."]}),"\n",(0,r.jsx)(t.p,{children:"LiquidityPool resource can be added during construction of the object:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use aptos_framework::object::{Self, Object};\nuse aptos_framework::fungible_asset::FungibleAsset;\n\npublic fun create_liquidity_pool(\n    token_a: Object<FungibleAsset>,\n    token_b: Object<FungibleAsset>,\n    reserves_a: u128,\n    reserves_b: u128\n): Object<LiquidityPool> {\n    let exchange_signer = &get_exchange_signer();\n    let liquidity_pool_constructor_ref = &object::create_object_from_account(exchange_signer);\n    let liquidity_pool_signer = &object::generate_signer(liquidity_pool_constructor_ref);\n    move_to(liquidity_pool_signer, LiquidityPool {\n        token_a: token_a,\n        token_b: token_b,\n        reserves_a: reserves_a,\n        reserves_b: reserves_b\n    });\n    object::object_from_constructor_ref(liquidity_pool_constructor_ref)\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"More resources can also be added post-creation if the exchange module stores the ExtendRef. This is covered in more detail in the Capabilities section."}),"\n",(0,r.jsx)(t.h2,{id:"object-lifecycle",children:"Object Lifecycle"}),"\n",(0,r.jsx)(t.h3,{id:"creation",children:"Creation"}),"\n",(0,r.jsx)(t.p,{children:"Objects can be created via several different functions provided in the object module:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"/// Create a new named object and return the ConstructorRef. Named objects can be queried globally\n/// by knowing the user generated seed used to create them. Named objects cannot be deleted.\npublic fun create_named_object(creator: &signer, seed: vector<u8>): ConstructorRef;\n\n/// Create a new object by generating a random unique address based on transaction hash.\n/// The unique address is computed sha3_256([transaction hash | auid counter | 0xFB]).\npublic fun create_object(owner_address: address): ConstructorRef\n\n/// Same as `create_object` except the object to be created will be undeletable.\npublic fun create_sticky_object(owner_address: address): ConstructorRef\n"})}),"\n",(0,r.jsx)(t.p,{children:"These functions generate object addresses in different schemas:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"create_named_object"})," generates an address from the caller-provided seed and creator address. This is a deterministic address that can be queried globally. The formula used is sha3(creator address + seed + 0xFD)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"create_object"})," generates an address from the caller's address and a auid generated by hashing the transaction hash of this transaction and a sequence number specific to this transaction. The formula used is sha3(creator address + auid counter + 0xFB)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"create_sticky_object"})," generates an address from the caller's address and a auid generated by hashing the transaction hash of this transaction and a sequence number specific to this transaction. The object will be undeletable The formula used is sha3(creator address + auid counter + 0xFB)."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Note that since named objects have deterministic addresses, they cannot be deleted. This is to prevent a malicious user from creating an object with the same seed as a named object and deleting it."}),"\n",(0,r.jsx)(t.h3,{id:"object-capabilities-refs",children:"Object capabilities (refs)"}),"\n",(0,r.jsx)(t.p,{children:'The object creation functions all return a transient ConstructorRef that cannot be stored. ConstructorRef allows adding resources to an object (see example from the previous section).\nConstructorRef can also be used to generate the other capabilities (or "refs") that are used to manage the object:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"/// Generates the DeleteRef, which can be used to remove Object from global storage.\npublic fun generate_delete_ref(ref: &ConstructorRef): DeleteRef;\n\n/// Generates the ExtendRef, which can be used to add new events and resources to the object.\npublic fun generate_extend_ref(ref: &ConstructorRef): ExtendRef;\n\n/// Generates the TransferRef, which can be used to manage object transfers.\npublic fun generate_transfer_ref(ref: &ConstructorRef): TransferRef;\n\n/// Create a signer for the ConstructorRef\npublic fun generate_signer(ref: &ConstructorRef): signer;\n"})}),"\n",(0,r.jsx)(t.p,{children:"These refs can be stored and used to manage the object."}),"\n",(0,r.jsx)(t.p,{children:"DeleteRef can be used to delete the object:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use aptos_framework::object::{Object, DeleteRef};\n\nstruct DeleteRefStore has key {\n    delete_ref: DeleteRef,\n}\n\npublic fun delete_liquidity_pool(liquidity_pool: Object<LiquidityPool>) {\n    let liquidity_pool_address = object::object_address(liquidity_pool);\n    // Remove all resources added to the liquidity pool object.\n    let LiquidityPool {\n        token_a: _,\n        token_b: _,\n        reserves_a: _,\n        reserves_b: _\n    } = move_from<LiquidityPool>(liquidity_pool_address);\n    let DeleteRefStore { delete_ref } = move_from<DeleteRefStore>(liquidity_pool_address);\n    // Delete the object itself.\n    object::delete_object(delete_ref);\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["ExtendRef can be used to add resources to the object like the LiquidityPool resource in the previous section:\nTransferRef can be used to disable owner-transfer when ",(0,r.jsx)(t.code,{children:"ungated_transfer_allowed = true"})," or to forcefully transfer the object without the owner being involved:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"use aptos_framework::object::{Object, TransferRef};\n\nstruct TransferRefStore has key {\n    transfer_ref: TransferRef,\n}\n\npublic fun disable_owner_transfer(liquidity_pool: Object<LiquidityPool>) {\n    let liquidity_pool_address = object::object_address(liquidity_pool);\n    let transfer_ref = &borrow_global_mut<TransferRefStore>(liquidity_pool_address).transfer_ref;\n    object::disable_ungated_transfer(transfer_ref);\n}\n\npublic fun creator_transfer(liquidity_pool: Object<LiquidityPool>, new_owner: address) {\n    let liquidity_pool_address = object::object_address(liquidity_pool);\n    let transfer_ref = &borrow_global_mut<TransferRefStore>(liquidity_pool_address).transfer_ref;\n    object::transfer_with_ref(object::generate_linear_transfer_ref(transfer_ref), new_owner);\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once the resources have been created on an object, they can be modified by the creator modules without the refs/ Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"public entry fun modify_reserves(liquidity_pool: Object<LiquidityPool>) {\n    let liquidity_pool = &mut borrow_global_mut<LiquidityPool>(liquidity_pool);\n    liquidity_pool.reserves_a = liquidity_pool.reserves_a + 1000;\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"object-reference",children:"Object reference"}),"\n",(0,r.jsx)(t.p,{children:"A reference to the object can be generated any time and stored in a resource as part of an object or account:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"/// Returns the address of within a ConstructorRef\npublic fun object_from_constructor_ref<T: key>(ref: &ConstructorRef): Object<T>;\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Object<T>"})," is a reference around the object address with the guarantee that ",(0,r.jsx)(t.code,{children:"T"})," exists when the reference is created. For example, we can create an ",(0,r.jsx)(t.code,{children:"Object<LiquidityPool>"})," for a liquidity pool object.\nCreating an object reference with a non-existent ",(0,r.jsx)(t.code,{children:"T"})," will fail at runtime.\nNote that after references are created and stored, they do not guarantee that the resource ",(0,r.jsx)(t.code,{children:"T"})," or the entire object itself has not been deleted."]}),"\n",(0,r.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.p,{children:"Objects come with transfer_events by default, which are emitted when the object is transferred. Transfer events are stored in the ObjectCore resource."}),"\n",(0,r.jsx)(t.p,{children:"Additionally, similar to account resources, events can be added in an object's resources. The object module offers the following functions to create event handles for objects:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"/// Create a guid for the object, typically used for events\npublic fun create_guid(object: &signer): guid::GUID;\n\n/// Generate a new event handle.\npublic fun new_event_handle<T: drop + store>(object: &signer): event::EventHandle<T>;\n"})}),"\n",(0,r.jsx)(t.p,{children:"These event handles can be stored in the custom resources added to the object. Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"struct LiquidityPoolEventStore has key {\n    create_events: event::EventHandle<CreateLiquidtyPoolEvent>,\n}\n\nstruct CreateLiquidtyPoolEvent {\n    token_a: address,\n    token_b: address,\n    reserves_a: u128,\n    reserves_b: u128,\n}\n\npublic entry fun create_liquidity_pool_with_events() {\n    let exchange_signer = &get_exchange_signer();\n    let liquidity_pool_constructor_ref = &object::create_object_from_account(exchange_signer);\n    let liquidity_pool_signer = &object::generate_signer(liquidity_pool_constructor_ref);\n    let event_handle = object::new_event_handle<CreateLiquidtyPoolEvent>(liquidity_pool_signer);\n    event::emit<CreateLiquidtyPoolEvent>(event_handle, CreateLiquidtyPoolEvent {\n        token_a: token_a,\n        token_b: token_b,\n        reserves_a: reserves_a,\n        reserves_b: reserves_b,\n    });\n    let liquidity_pool = move_to(liquidity_pool_signer, LiquidityPool {\n        token_a: token_a,\n        token_b: token_b,\n        reserves_a: reserves_a,\n        reserves_b: reserves_b,\n        create_events: event_handle,\n    });\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},83581:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(11855);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);