"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[2068],{72131:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>_,contentTitle:()=>u,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>p});var t=s(63159),a=s(83581),c=s(3688),r=s(45745),o=s(99156),i=s(41987),l=s(28693);const d={title:"Arguments in JSON Tutorial"},u="JSON\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u5f15\u6570",h={id:"tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial",title:"Arguments in JSON Tutorial",description:"\u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial.md",sourceDirName:"tools/aptos-cli/use-cli/move-tutorials",slug:"/tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial",permalink:"/tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/tools/aptos-cli/use-cli/move-tutorials/arguments-in-json-tutorial.md",tags:[],version:"current",lastUpdatedAt:1718709339,formattedLastUpdatedAt:"2024\u5e746\u670818\u65e5",frontMatter:{title:"Arguments in JSON Tutorial"},sidebar:"appSidebar",previous:{title:"Working With Move Contracts",permalink:"/tools/aptos-cli/use-cli/working-with-move-contracts"},next:{title:"Multisig Governance Tutorial",permalink:"/tools/aptos-cli/use-cli/move-tutorials/multi-signature-tutorial"}},_={},p=[{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831",level:2},{value:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30d7\u30ed\u30a4",id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30d7\u30ed\u30a4",level:2},{value:"\u30a8\u30f3\u30c8\u30ea\u30fc\u95a2\u6570",id:"\u30a8\u30f3\u30c8\u30ea\u30fc\u95a2\u6570",level:2},{value:"View\u95a2\u6570",id:"view\u95a2\u6570",level:2},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"json\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u5f15\u6570",children:"JSON\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u5f15\u6570"}),"\n",(0,t.jsx)(n.h2,{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831",children:"\u30d1\u30c3\u30b1\u30fc\u30b8\u60c5\u5831"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u306f\u4ee5\u4e0b\u306e\u30de\u30cb\u30d5\u30a7\u30b9\u30c8\u3092\u542b\u3080",(0,t.jsxs)(n.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/cli_args",children:[(0,t.jsx)(n.code,{children:"CliArgs"}),"\u30b5\u30f3\u30d7\u30eb\u30d1\u30c3\u30b1\u30fc\u30b8"]}),"\u3092\u53c2\u7167\u3057\u307e\u3059\u3002"]}),"\n","\n",(0,t.jsx)(c.A,{language:"toml",title:"Move.toml",children:r.A}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u3053\u3067\u3001\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u540d\u524d\u4ed8\u304d\u30a2\u30c9\u30ec\u30b9",(0,t.jsx)(n.code,{children:"test_account"}),"\u306e\u4e0b\u3078\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u307e\u3059"]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3067\u4f5c\u696d\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3092",(0,t.jsx)(n.a,{href:"https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/move-examples/cli_args",children:(0,t.jsx)(n.code,{children:"aptos-move/move-examples/cli_args"})}),"\u3078\u79fb\u52d5\u3057\u307e\u3059\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd <aptos-core-parent-directory>/aptos-core/aptos-move/move-examples/cli_args\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30d7\u30ed\u30a4",children:"\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30c7\u30d7\u30ed\u30a4"}),"\n",(0,t.jsx)(n.p,{children:"\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30c7\u30d7\u30ed\u30a4\u3059\u308bAce\u306e\u30d0\u30cb\u30c6\u30a3\u30a2\u30c9\u30ec\u30b9\u3092\u30de\u30a4\u30cb\u30f3\u30b0\u3057\u3066\u958b\u59cb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=Command",children:"aptos key generate \\\n    --vanity-prefix 0xace \\\n    --output-file ace.key\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": {\n    "Account Address:": "0xacef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",\n    "PublicKey Path": "ace.key.pub",\n    "PrivateKey Path": "ace.key"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u6b63\u78ba\u306a\u30a2\u30ab\u30a6\u30f3\u30c8\u30a2\u30c9\u30ec\u30b9\u306f\u5b9f\u884c\u3054\u3068\u306b\u7570\u306a\u308a\u307e\u3059\u304c\u3001\u30d0\u30cb\u30c6\u30a3\u30d7\u30ec\u30d5\u30a3\u30c3\u30af\u30b9\u306f\u5909\u66f4\u3057\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"Ace\u306e\u30a2\u30c9\u30ec\u30b9\u3092\u30b7\u30a7\u30eb\u5909\u6570\u3078\u4fdd\u5b58\u3057\u3066\u3001\u5f8c\u3067\u30a4\u30f3\u30e9\u30a4\u30f3\u3067\u547c\u3073\u51fa\u305b\u308b\u69d8\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Your exact address should vary\nace_addr=0xacef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u30d5\u30a9\u30fc\u30bb\u30c3\u30c8\uff08dev\u30cd\u30c3\u30c8\u307e\u305f\u306f\u30c6\u30b9\u30c8\u30cd\u30c3\u30c8\uff09\u3092\u5229\u7528\u3057Ace\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u8cc7\u91d1\u3092\u5165\u91d1\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=Command",children:"aptos account fund-with-faucet --account $ace_addr\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": "Added 100000000 Octas to account acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46"\n}\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"Ace\u306e\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u516c\u958b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=Command",children:"aptos move publish \\\n    --named-addresses test_account=$ace_addr \\\n    --private-key-file ace.key \\\n    --assume-yes\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": {\n    "transaction_hash": "0x1d7b074dd95724c5459a1c30fe4cb3875e7b0478cc90c87c8e3f21381625bec1",\n    "gas_used": 1294,\n    "gas_unit_price": 100,\n    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",\n    "sequence_number": 0,\n    "success": true,\n    "timestamp_us": 1685077849297587,\n    "version": 528422121,\n    "vm_status": "Executed successfully"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u30a8\u30f3\u30c8\u30ea\u30fc\u95a2\u6570",children:"\u30a8\u30f3\u30c8\u30ea\u30fc\u95a2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u30d1\u30c3\u30b1\u30fc\u30b8\u5185\u306e\u552f\u4e00\u306e\u30e2\u30b8\u30e5\u30fc\u30eb",(0,t.jsx)(n.code,{children:"cli_args.move"}),"\u306f\u3001\u69d8\u3005\u306a\u30c7\u30fc\u30bf\u578b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064\u5358\u7d14\u306a",(0,t.jsx)(n.code,{children:"Holder"}),"\u30ea\u30bd\u30fc\u30b9\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="cli_args.move\u306e\u30db\u30eb\u30c0\u30fc"',children:"module test_account::cli_args {\n    use std::signer;\n    use aptos_std::type_info::{Self, TypeInfo};\n    use std::string::String;\n\n    struct Holder has key, drop {\n        u8_solo: u8,\n        bytes: vector<u8>,\n        utf8_string: String,\n        bool_vec: vector<bool>,\n        address_vec_vec: vector<vector<address>>,\n        type_info_1: TypeInfo,\n        type_info_2: TypeInfo,\n    } \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8907\u6570\u306e\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30d9\u30af\u30bf\u30fc\u3092\u6301\u3064\u516c\u958b\u30a8\u30f3\u30c8\u30ea\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="cli_args.move\u306e\u30bb\u30c3\u30bf\u30fc\u95a2\u6570"',children:"/// Set values in a `Holder` under `account`.\npublic entry fun set_vals<T1, T2>(\n    account: signer,\n    u8_solo: u8,\n    bytes: vector<u8>,\n    utf8_string: String,\n    bool_vec: vector<bool>,\n    address_vec_vec: vector<vector<address>>,\n) acquires Holder {\n    let account_addr = signer::address_of(&account);\n    if (exists<Holder>(account_addr)) {\n        move_from<Holder>(account_addr);\n    };\n    move_to(&account, Holder {\n        u8_solo,\n        bytes,\n        utf8_string,\n        bool_vec,\n        address_vec_vec,\n        type_info_1: type_info::type_of<T1>(),\n        type_info_2: type_info::type_of<T2>(),\n    });\n} \n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u30d1\u30c3\u30b1\u30fc\u30b8\u304c\u516c\u958b\u3055\u308c\u305f\u5f8c",(0,t.jsx)(n.code,{children:"set_vals()"}),"\u3092\u547c\u3073\u51fa\u3059\u305f\u3081\u3001",(0,t.jsx)(n.code,{children:"aptos move run"}),"\u3092\u4f7f\u7528\u51fa\u6765\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089\u30d9\u30af\u30bf\u30fc(\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30d9\u30af\u30c8\u30eb\u3092\u542b\u3080) \u3092\u5f15\u6570\u3068\u3057\u3066\u6e21\u3059\u306b\u306f\u3001\u5f15\u7528\u7b26\u3067\u30a8\u30b9\u30b1\u30fc\u30d7\u3055\u308c\u305fJSON\u69cb\u6587\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="\u30cd\u30b9\u30c8\u3055\u308c\u305f\u30d9\u30af\u30c8\u30eb\u5f15\u6570\u3092\u6301\u3064\u95a2\u6570\u3092CLI\u304b\u3089\u5b9f\u884c\u3059\u308b"',children:'aptos move run \\\n    --function-id $ace_addr::cli_args::set_vals \\\n    --type-args \\\n        0x1::account::Account \\\n        0x1::chain_id::ChainId \\\n    --args \\\n        u8:123 \\\n        "hex:0x1234" \\\n        "string:hello, world\\! \u2665" \\\n        "bool:[false, true, false, false]" \\\n        \'address:[["0xace", "0xbee"], ["0xcad"], []]\' \\\n    --private-key-file ace.key \\\n    --assume-yes\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": {\n    "transaction_hash": "0x5e141dc6c28e86fa9f5594de93d07a014264ebadfb99be6db922a929eb1da24f",\n    "gas_used": 504,\n    "gas_unit_price": 100,\n    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",\n    "sequence_number": 1,\n    "success": true,\n    "timestamp_us": 1685077888820037,\n    "version": 528422422,\n    "vm_status": "Executed successfully"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.p,{children:"\u95a2\u6570ID\u3001\u578b\u5f15\u6570\u3001\u5f15\u6570\u306f\u3001JSON\u30d5\u30a1\u30a4\u30eb\u3067\u6307\u5b9a\u3057\u3066\u3082\u826f\u3044\u3067\u3059\u3002"}),"\n","\n",(0,t.jsx)(c.A,{language:"json",title:"entry_function_arguments.json",children:o.A}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u3053\u3067\u306e",(0,t.jsx)(n.code,{children:"aptos move run"}),"\u306e\u547c\u3073\u51fa\u3057\u306f\u4ee5\u4e0b\u306e\u69d8\u306a\u611f\u3058\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="Running function with JSON input file"',children:"aptos move run \\\n    --json-file entry_function_arguments.json \\\n    --private-key-file ace.key \\\n    --assume-yes\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": {\n    "transaction_hash": "0x60a32315bb48bf6d31629332f6b1a3471dd0cb016fdee8d0bb7dcd0be9833e60",\n    "gas_used": 3,\n    "gas_unit_price": 100,\n    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",\n    "sequence_number": 2,\n    "success": true,\n    "timestamp_us": 1685077961499641,\n    "version": 528422965,\n    "vm_status": "Executed successfully"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3092\u81ea\u5206\u3067\u5b9f\u884c\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001 ",(0,t.jsx)(n.code,{children:"entry_function_arguments.json"}),"\u306e",(0,t.jsx)(n.code,{children:"<test_account>"}),"\u3092Ace\u306e\u5b9f\u969b\u306e\u30a2\u30c9\u30ec\u30b9\u3078\u7f6e\u304d\u63db\u3048\u308b\u4e8b\u3092\u5fd8\u308c\u306a\u3044\u3067\u4e0b\u3055\u3044\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"view\u95a2\u6570",children:"View\u95a2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Holder"}),"\u306e\u5024\u304c\u8a2d\u5b9a\u3055\u308c\u308b\u3068\u3001",(0,t.jsx)(n.code,{children:"reveal()"}),"view\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u6700\u521d\u306e3\u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u578b\u5f15\u6570\u3092\u6700\u5f8c\u306e2\u3064\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u6bd4\u8f03\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="View\u95a2\u6570"',children:"    struct RevealResult has drop {\n        u8_solo: u8,\n        bytes: vector<u8>,\n        utf8_string: String,\n        bool_vec: vector<bool>,\n        address_vec_vec: vector<vector<address>>,\n        type_info_1_match: bool,\n        type_info_2_match: bool\n    }\n\n    #[view]\n    /// Pack into a `RevealResult` the first three fields in host's\n    /// `Holder`, as well as two `bool` flags denoting if `T1` & `T2`\n    /// respectively match `Holder.type_info_1` & `Holder.type_info_2`,\n    /// then return the `RevealResult`.\n    public fun reveal<T1, T2>(host: address): RevealResult acquires Holder {\n        let holder_ref = borrow_global<Holder>(host);\n        RevealResult {\n            u8_solo: holder_ref.u8_solo,\n            bytes: holder_ref.bytes,\n            utf8_string: holder_ref.utf8_string,\n            bool_vec: holder_ref.bool_vec,\n            address_vec_vec: holder_ref.address_vec_vec,\n            type_info_1_match:\n                type_info::type_of<T1>() == holder_ref.type_info_1,\n            type_info_2_match:\n                type_info::type_of<T2>() == holder_ref.type_info_2\n        }\n    }\n\n} \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306e\u30d3\u30e5\u30fc\u95a2\u6570\u306f\u3001CLI\u307e\u305f\u306fJSON\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u7279\u5b9a\u3055\u308c\u305f\u5f15\u6570\u3092\u4f7f\u7528\u3057\u3066\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="CLI\u7d4c\u7531\u306e\u5f15\u6570"',children:"aptos move view \\\n    --function-id $ace_addr::cli_args::reveal \\\n    --type-args \\\n        0x1::account::Account \\\n        0x1::account::Account \\\n    --args address:$ace_addr\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="JSON\u30d5\u30a1\u30a4\u30eb\u7d4c\u7531\u306e\u5f15\u6570"',children:"aptos move view --json-file view_function_arguments.json\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3092\u81ea\u5206\u3067\u5b9f\u884c\u3057\u3088\u3046\u3068\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,t.jsx)(n.code,{children:"view_function_arguments.json"}),"\u306e",(0,t.jsx)(n.code,{children:"<test_account>"}),"\u3092Ace\u306e\u5b9f\u969b\u306e\u30a2\u30c9\u30ec\u30b9\u306b\u7f6e\u304d\u63db\u3048\u308b\u4e8b\u3092\u5fd8\u308c\u306a\u3044\u3067\u4e0b\u3055\u3044(2\u56de)\u3002"]})}),"\n","\n",(0,t.jsx)(c.A,{language:"json",title:"view_function_arguments.json",children:i.A}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="\u51fa\u529b"',children:'{\n  "Result": [\n    {\n      "address_vec_vec": [\n        [\n          "0xace",\n          "0xbee"\n        ],\n        [\n          "0xcad"\n        ],\n        []\n      ],\n      "bool_vec": [\n        false,\n        true,\n        false,\n        false\n      ],\n      "bytes": "0x1234",\n      "type_info_1_match": true,\n      "type_info_2_match": false,\n      "u8_solo": 123,\n      "utf8_string": "hello, world! \u2665"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u306fsetter\u95a2\u6570\u306e\u30e9\u30c3\u30d1\u30fc\u3067\u3042\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3001",(0,t.jsx)(n.code,{children:"set_vals.move"}),"\u3082\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",metastring:'title="\u30b9\u30af\u30ea\u30d7\u30c8"',children:"script {\n    use test_account::cli_args;\n    use std::vector;\n    use std::string::String;\n\n    /// Get a `bool` vector where each element indicates `true` if the\n    /// corresponding element in `u8_vec` is greater than `u8_solo`.\n    /// Then pack `address_solo` in a `vector<vector<<address>>` and\n    /// pass resulting argument set to public entry function.\n    fun set_vals<T1, T2>(\n        account: signer,\n        u8_solo: u8,\n        bytes: vector<u8>,\n        utf8_string: String,\n        u8_vec: vector<u8>,\n        address_solo: address,\n    ) {\n        let bool_vec = vector::map_ref(&u8_vec, |e_ref| *e_ref > u8_solo);\n        let addr_vec_vec = vector[vector[address_solo]];\n        cli_args::set_vals<T1, T2>(account, u8_solo, bytes, utf8_string, bool_vec, addr_vec_vec);\n    }\n} \n"})}),"\n",(0,t.jsx)(n.p,{children:"\u307e\u305a\u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u307e\u3059(\u3053\u308c\u306b\u3088\u308a\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u307e\u3059)\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="\u30b3\u30f3\u30d1\u30a4\u30eb"',children:"aptos move compile --named-addresses test_account=$ace_addr\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": [\n    "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46::cli_args"\n  ]\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b21\u306f",(0,t.jsx)(n.code,{children:"aptos move run-script"}),"\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="CLI\u7d4c\u7531\u306e\u5f15\u6570"',children:'aptos move run-script \\\n    --compiled-script-path build/CliArgs/bytecode_scripts/set_vals.mv \\\n    --type-args \\\n        0x1::account::Account \\\n        0x1::chain_id::ChainId \\\n    --args \\\n        u8:123 \\\n        "hex:0x1234" \\\n        "string:hello, world\\! \u2665" \\\n        "u8:[122, 123, 124, 125]" \\\n        address:"0xace" \\\n    --private-key-file ace.key \\\n    --assume-yes\n'})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": {\n    "transaction_hash": "0x1d644eba8187843cc43919469112339bc2c435a49a733ac813b7bc6c79770152",\n    "gas_used": 3,\n    "gas_unit_price": 100,\n    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",\n    "sequence_number": 3,\n    "success": true,\n    "timestamp_us": 1685078415935612,\n    "version": 528426413,\n    "vm_status": "Executed successfully"\n  }\n}\n'})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="JSON\u30d5\u30a1\u30a4\u30eb\u7d4c\u7531\u306e\u5f15\u6570"',children:"aptos move run-script \\\n    --compiled-script-path build/CliArgs/bytecode_scripts/set_vals.mv \\\n    --json-file script_function_arguments.json \\\n    --private-key-file ace.key \\\n    --assume-yes\n"})}),"\n",(0,t.jsxs)(s,{children:[(0,t.jsx)("summary",{children:"\u51fa\u529b"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{\n  "Result": {\n    "transaction_hash": "0x840e2d6a5ab80d5a570effb3665f775f1755e0fd8d76e52bfa7241aaade883d7",\n    "gas_used": 3,\n    "gas_unit_price": 100,\n    "sender": "acef1b9b7d4ab208b99fed60746d18dcd74865edb7eb3c3f1428233988e4ba46",\n    "sequence_number": 4,\n    "success": true,\n    "timestamp_us": 1685078516832128,\n    "version": 528427132,\n    "vm_status": "Executed successfully"\n  }\n}\n'})})]}),"\n","\n","\n",(0,t.jsx)(c.A,{language:"json",title:"script_function_arguments.json",children:l.A}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u306e\u3088\u3046\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u306f\u4e21\u65b9\u3068\u3082\u3001\u4ee5\u4e0b\u306e",(0,t.jsx)(n.code,{children:"reveal()"}),"\u30d3\u30e5\u30fc\u95a2\u6570\u3092\u51fa\u529b\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="View\u95a2\u6570\u547c\u3073\u51fa\u3057"',children:"aptos move view \\\n    --function-id $ace_addr::cli_args::reveal \\\n    --type-args \\\n        0x1::account::Account \\\n        0x1::chain_id::ChainId \\\n    --args address:$ace_addr\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="View\u95a2\u6570\u306e\u51fa\u529b"',children:'{\n  "Result": [\n    {\n      "address_vec_vec": [["0xace"]],\n      "bool_vec": [false, false, true, true],\n      "bytes": "0x1234",\n      "type_info_1_match": true,\n      "type_info_2_match": true,\n      "u8_solo": 123,\n      "utf8_string": "hello, world! \u2665"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["\u3053\u306e\u8a18\u4e8b\u306e\u57f7\u7b46\u6642\u70b9\u3067\u306f\u3001",(0,t.jsx)(n.code,{children:"aptos"}),"CLI\u306f",(0,t.jsx)(n.code,{children:"u8"}),"\u578b\u306e\u30d9\u30af\u30bf\u30fc\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570\u5f15\u6570\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u304a\u308a\u3001\u30d9\u30af\u30bf\u30fc\u306e\u6df1\u3055\u306f1\u307e\u3067\u3067\u3059\u3002\u5f93\u3063\u3066",(0,t.jsx)(n.code,{children:"vector<address>"}),"\u3068",(0,t.jsx)(n.code,{children:"vector<vector<u8>>"}),"\u306f\u7121\u52b9\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u95a2\u6570\u5f15\u6570\u578b\u3067\u3059\u3002"]})})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},45745:(e,n,s)=>{s.d(n,{A:()=>t});const t='[package]\nname = "CliArgs"\nversion = "0.1.0"\nupgrade_policy = "compatible"\n\n[addresses]\ntest_account = "_"\n\n[dependencies]\nAptosFramework = { git = "https://github.com/aptos-labs/aptos-core.git", rev = "mainnet", subdir = "aptos-move/framework/aptos-framework" }'},99156:(e,n,s)=>{s.d(n,{A:()=>t});const t='{\n  "function_id": "<test_account>::cli_args::set_vals",\n  "type_args": ["0x1::account::Account", "0x1::chain_id::ChainId"],\n  "args": [\n    {\n      "type": "u8",\n      "value": 123\n    },\n    {\n      "type": "hex",\n      "value": "0x1234"\n    },\n    {\n      "type": "string",\n      "value": "hello, world! \u2665"\n    },\n    {\n      "type": "bool",\n      "value": [false, true, false, false]\n    },\n    {\n      "type": "address",\n      "value": [["0xace", "0xbee"], ["0xcad"], []]\n    }\n  ]\n}\n'},28693:(e,n,s)=>{s.d(n,{A:()=>t});const t='{\n  "type_args": ["0x1::account::Account", "0x1::chain_id::ChainId"],\n  "args": [\n    {\n      "type": "u8",\n      "value": 123\n    },\n    {\n      "type": "hex",\n      "value": "0x1234"\n    },\n    {\n      "type": "string",\n      "value": "hello, world! \u2665"\n    },\n    {\n      "type": "u8",\n      "value": [122, 123, 124, 125]\n    },\n    {\n      "type": "address",\n      "value": "0xace"\n    }\n  ]\n}\n'},41987:(e,n,s)=>{s.d(n,{A:()=>t});const t='{\n  "function_id": "<test_account>::cli_args::reveal",\n  "type_args": ["0x1::account::Account", "0x1::account::Account"],\n  "args": [\n    {\n      "type": "address",\n      "value": "<test_account>"\n    }\n  ]\n}\n'}}]);