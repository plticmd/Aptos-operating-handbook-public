"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[2104],{78402:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var d=s(63159),a=s(83581);const o={},i="Packages",t={id:"move/book/packages",title:"Packages",description:"Packages allow Move programmers to more easily re-use code and share it",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/book/packages.md",sourceDirName:"move/book",slug:"/move/book/packages",permalink:"/move/book/packages",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/book/packages.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{},sidebar:"appSidebar",previous:{title:"\u30d5\u30ec\u30f3\u30ba",permalink:"/move/book/friends"},next:{title:"Package Upgrades",permalink:"/move/book/package-upgrades"}},r={},c=[{value:"Package Layout and Manifest Syntax",id:"package-layout-and-manifest-syntax",level:2},{value:"Move.toml",id:"movetoml",level:3},{value:"Named Addresses During Compilation",id:"named-addresses-during-compilation",level:2},{value:"Declaration",id:"declaration",level:3},{value:"Scoping and Renaming of Named Addresses",id:"scoping-and-renaming-of-named-addresses",level:2},{value:"Instantiation",id:"instantiation",level:3},{value:"Usage, Artifacts, and Data Structures",id:"usage-artifacts-and-data-structures",level:2},{value:"Usage",id:"usage",level:3},{value:"Using Bytecode for Dependencies",id:"using-bytecode-for-dependencies",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:2},{value:"Recommended structure",id:"recommended-structure",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"packages",children:"Packages"}),"\n",(0,d.jsx)(n.p,{children:"Packages allow Move programmers to more easily re-use code and share it\nacross projects. The Move package system allows programmers to easily do the following:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"Define a package containing Move code;"}),"\n",(0,d.jsxs)(n.li,{children:["Parameterize a package by ",(0,d.jsx)(n.a,{href:"/move/book/address",children:"named addresses"}),";"]}),"\n",(0,d.jsx)(n.li,{children:"Import and use packages in other Move code and instantiate named addresses;"}),"\n",(0,d.jsx)(n.li,{children:"Build packages and generate associated compilation artifacts from packages; and"}),"\n",(0,d.jsx)(n.li,{children:"Work with a common interface around compiled Move artifacts."}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"package-layout-and-manifest-syntax",children:"Package Layout and Manifest Syntax"}),"\n",(0,d.jsxs)(n.p,{children:["A Move package source directory contains a ",(0,d.jsx)(n.code,{children:"Move.toml"})," package manifest\nfile along with a set of subdirectories:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"a_move_package\n\u251c\u2500\u2500 Move.toml      (required)\n\u251c\u2500\u2500 sources        (required)\n\u251c\u2500\u2500 examples       (optional, test & dev mode)\n\u251c\u2500\u2500 scripts        (optional)\n\u251c\u2500\u2500 doc_templates  (optional)\n\u2514\u2500\u2500 tests          (optional, test mode)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["The directories marked ",(0,d.jsx)(n.code,{children:"required"})," ",(0,d.jsx)(n.em,{children:"must"})," be present in order for the directory\nto be considered a Move package and to be compiled. Optional directories can\nbe present, and if so will be included in the compilation process. Depending on\nthe mode that the package is built with (",(0,d.jsx)(n.code,{children:"test"})," or ",(0,d.jsx)(n.code,{children:"dev"}),"), the ",(0,d.jsx)(n.code,{children:"tests"})," and\n",(0,d.jsx)(n.code,{children:"examples"})," directories will be included as well."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"sources"})," directory can contain both Move modules and Move scripts (both\nMove scripts and modules containing script functions). The ",(0,d.jsx)(n.code,{children:"examples"}),"\ndirectory can hold additional code to be used only for development and/or\ntutorial purposes that will not be included when compiled outside ",(0,d.jsx)(n.code,{children:"test"})," or\n",(0,d.jsx)(n.code,{children:"dev"})," mode."]}),"\n",(0,d.jsxs)(n.p,{children:["A ",(0,d.jsx)(n.code,{children:"scripts"})," directory is supported so Move scripts can be separated\nfrom modules if that is desired by the package author. The ",(0,d.jsx)(n.code,{children:"scripts"}),"\ndirectory will always be included for compilation if it is present.\nDocumentation will be built using any documentation templates present in\nthe ",(0,d.jsx)(n.code,{children:"doc_templates"})," directory."]}),"\n",(0,d.jsx)(n.h3,{id:"movetoml",children:"Move.toml"}),"\n",(0,d.jsxs)(n.p,{children:["The Move package manifest is defined within the ",(0,d.jsx)(n.code,{children:"Move.toml"})," file and has the\nfollowing syntax. Optional fields are marked with ",(0,d.jsx)(n.code,{children:"*"}),", ",(0,d.jsx)(n.code,{children:"+"})," denotes\none or more elements:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = <string>                  # e.g., "MoveStdlib"\nversion = "<uint>.<uint>.<uint>" # e.g., "0.1.1"\nlicense* = <string>              # e.g., "MIT", "GPL", "Apache 2.0"\nauthors* = [<string>]            # e.g., ["Joe Smith (joesmith@noemail.com)", "Jane Smith (janesmith@noemail.com)"]\n\n[addresses]  # (Optional section) Declares named addresses in this package and instantiates named addresses in the package graph\n# One or more lines declaring named addresses in the following format\n<addr_name> = "_" | "<hex_address>" # e.g., std = "_" or my_addr = "0xC0FFEECAFE"\n\n[dependencies] # (Optional section) Paths to dependencies and instantiations or renamings of named addresses from each dependency\n# One or more lines declaring dependencies in the following format\n<string> = { local = <string>, addr_subst* = { (<string> = (<string> | "<hex_address>"))+ } } # local dependencies\n<string> = { git = <URL ending in .git>, subdir=<path to dir containing Move.toml inside git repo>, rev=<git commit hash>, addr_subst* = { (<string> = (<string> | "<hex_address>"))+ } } # git dependencies\n\n[dev-addresses] # (Optional section) Same as [addresses] section, but only included in "dev" and "test" modes\n# One or more lines declaring dev named addresses in the following format\n<addr_name> = "_" | "<hex_address>" # e.g., std = "_" or my_addr = "0xC0FFEECAFE"\n\n[dev-dependencies] # (Optional section) Same as [dependencies] section, but only included in "dev" and "test" modes\n# One or more lines declaring dev dependencies in the following format\n<string> = { local = <string>, addr_subst* = { (<string> = (<string> | <address>))+ } }\n'})}),"\n",(0,d.jsx)(n.p,{children:"An example of a minimal package manifest with one local dependency and one git dependency:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = "AName"\nversion = "0.0.0"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["An example of a more standard package manifest that also includes the Move\nstandard library and instantiates the named address ",(0,d.jsx)(n.code,{children:"Std"})," from it with the\naddress value ",(0,d.jsx)(n.code,{children:"0x1"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = "AName"\nversion = "0.0.0"\nlicense = "Apache 2.0"\n\n[addresses]\naddress_to_be_filled_in = "_"\nspecified_address = "0xB0B"\n\n[dependencies]\n# Local dependency\nLocalDep = { local = "projects/move-awesomeness", addr_subst = { "std" = "0x1" } }\n# Git dependency\nMoveStdlib = { git = "https://github.com/diem/diem.git", subdir="language/move-stdlib", rev = "56ab033cc403b489e891424a629e76f643d4fb6b" }\n\n[dev-addresses] # For use when developing this module\naddress_to_be_filled_in = "0x101010101"\n'})}),"\n",(0,d.jsx)(n.p,{children:"Most of the sections in the package manifest are self-explanatory, but named\naddresses can be a bit difficult to understand, so it's worth examining them in\na bit more detail."}),"\n",(0,d.jsx)(n.h2,{id:"named-addresses-during-compilation",children:"Named Addresses During Compilation"}),"\n",(0,d.jsxs)(n.p,{children:["Recall that Move has ",(0,d.jsx)(n.a,{href:"/move/book/address",children:"named addresses"})," and that\nnamed addresses cannot be declared in Move. Because of this, until now\nnamed addresses and their values needed to be passed to the compiler on the\ncommand line. With the Move package system this is no longer needed, and\nyou can declare named addresses in the package, instantiate other named\naddresses in scope, and rename named addresses from other packages within\nthe Move package system manifest file. Let's go through each of these\nindividually:"]}),"\n",(0,d.jsx)(n.h3,{id:"declaration",children:"Declaration"}),"\n",(0,d.jsxs)(n.p,{children:["Let's say we have a Move module in ",(0,d.jsx)(n.code,{children:"example_pkg/sources/A.move"})," as follows:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-move",children:"module named_addr::A {\n    public fun x(): address { @named_addr }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["We could in ",(0,d.jsx)(n.code,{children:"example_pkg/Move.toml"})," declare the named address ",(0,d.jsx)(n.code,{children:"named_addr"})," in\ntwo different ways. The first:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = "ExamplePkg"\n...\n[addresses]\nnamed_addr = "_"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Declares ",(0,d.jsx)(n.code,{children:"named_addr"})," as a named address in the package ",(0,d.jsx)(n.code,{children:"ExamplePkg"})," and\nthat ",(0,d.jsx)(n.em,{children:"this address can be any valid address value"}),". Therefore, an importing\npackage can pick the value of the named address ",(0,d.jsx)(n.code,{children:"named_addr"})," to be any address\nit wishes. Intuitively you can think of this as parameterizing the package\n",(0,d.jsx)(n.code,{children:"ExamplePkg"})," by the named address ",(0,d.jsx)(n.code,{children:"named_addr"}),", and the package can then be\ninstantiated later on by an importing package."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"named_addr"})," can also be declared as:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = "ExamplePkg"\n...\n[addresses]\nnamed_addr = "0xCAFE"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["which states that the named address ",(0,d.jsx)(n.code,{children:"named_addr"})," is exactly ",(0,d.jsx)(n.code,{children:"0xCAFE"})," and cannot be\nchanged. This is useful so other importing packages can use this named\naddress without needing to worry about the exact value assigned to it."]}),"\n",(0,d.jsx)(n.p,{children:"With these two different declaration methods, there are two ways that\ninformation about named addresses can flow in the package graph:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:'The former ("unassigned named addresses") allows named address values to flow\nfrom the importation site to the declaration site.'}),"\n",(0,d.jsx)(n.li,{children:'The latter ("assigned named addresses") allows named address values to flow\nfrom the declaration site upwards in the package graph to usage sites.'}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"With these two methods for flowing named address information throughout the\npackage graph the rules around scoping and renaming become important to\nunderstand."}),"\n",(0,d.jsx)(n.h2,{id:"scoping-and-renaming-of-named-addresses",children:"Scoping and Renaming of Named Addresses"}),"\n",(0,d.jsxs)(n.p,{children:["A named address ",(0,d.jsx)(n.code,{children:"N"})," in a package ",(0,d.jsx)(n.code,{children:"P"})," is in scope if:"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["It declares a named address ",(0,d.jsx)(n.code,{children:"N"}),"; or"]}),"\n",(0,d.jsxs)(n.li,{children:["A package in one of ",(0,d.jsx)(n.code,{children:"P"}),"'s transitive dependencies declares the named address\n",(0,d.jsx)(n.code,{children:"N"})," and there is a dependency path in the package graph between ",(0,d.jsx)(n.code,{children:"P"})," and the\ndeclaring package of ",(0,d.jsx)(n.code,{children:"N"})," with no renaming of ",(0,d.jsx)(n.code,{children:"N"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Additionally, every named address in a package is exported. Because of this and\nthe above scoping rules each package can be viewed as coming with a set of\nnamed addresses that will be brought into scope when the package is imported,\ne.g., if the ",(0,d.jsx)(n.code,{children:"ExamplePkg"})," package was imported, that importation would bring\ninto scope the ",(0,d.jsx)(n.code,{children:"named_addr"})," named address. Because of this, if ",(0,d.jsx)(n.code,{children:"P"})," imports two\npackages ",(0,d.jsx)(n.code,{children:"P1"})," and ",(0,d.jsx)(n.code,{children:"P2"})," both of which declare a named address ",(0,d.jsx)(n.code,{children:"N"})," an issue\narises in ",(0,d.jsx)(n.code,{children:"P"}),': which "',(0,d.jsx)(n.code,{children:"N"}),'" is meant when ',(0,d.jsx)(n.code,{children:"N"})," is referred to in ",(0,d.jsx)(n.code,{children:"P"}),"? The one\nfrom ",(0,d.jsx)(n.code,{children:"P1"})," or ",(0,d.jsx)(n.code,{children:"P2"}),"? To prevent this ambiguity around which package a named\naddress is coming from, we enforce that the sets of scopes introduced by all\ndependencies in a package are disjoint, and provide a way to ",(0,d.jsx)(n.em,{children:"rename named\naddresses"})," when the package that brings them into scope is imported."]}),"\n",(0,d.jsxs)(n.p,{children:["Renaming a named address when importing can be done as follows in our ",(0,d.jsx)(n.code,{children:"P"}),",\n",(0,d.jsx)(n.code,{children:"P1"}),", and ",(0,d.jsx)(n.code,{children:"P2"})," example above:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = "P"\n...\n[dependencies]\nP1 = { local = "some_path_to_P1", addr_subst = { "P1N" = "N" } }\nP2 = { local = "some_path_to_P2"  }\n'})}),"\n",(0,d.jsxs)(n.p,{children:["With this renaming ",(0,d.jsx)(n.code,{children:"N"})," refers to the ",(0,d.jsx)(n.code,{children:"N"})," from ",(0,d.jsx)(n.code,{children:"P2"})," and ",(0,d.jsx)(n.code,{children:"P1N"})," will refer to ",(0,d.jsx)(n.code,{children:"N"}),"\ncoming from ",(0,d.jsx)(n.code,{children:"P1"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"module N::A {\n    public fun x(): address { @P1N }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["It is important to note that ",(0,d.jsx)(n.em,{children:"renaming is not local"}),": once a named address ",(0,d.jsx)(n.code,{children:"N"}),"\nhas been renamed to ",(0,d.jsx)(n.code,{children:"N2"})," in a package ",(0,d.jsx)(n.code,{children:"P"})," all packages that import ",(0,d.jsx)(n.code,{children:"P"})," will not\nsee ",(0,d.jsx)(n.code,{children:"N"})," but only ",(0,d.jsx)(n.code,{children:"N2"})," unless ",(0,d.jsx)(n.code,{children:"N"})," is reintroduced from outside of ",(0,d.jsx)(n.code,{children:"P"}),'. This is\nwhy rule (2) in the scoping rules at the start of this section specifies a\n"dependency path in the package graph between ',(0,d.jsx)(n.code,{children:"P"})," and the declaring\npackage of ",(0,d.jsx)(n.code,{children:"N"})," with no renaming of ",(0,d.jsx)(n.code,{children:"N"}),'."']}),"\n",(0,d.jsx)(n.h3,{id:"instantiation",children:"Instantiation"}),"\n",(0,d.jsx)(n.p,{children:"Named addresses can be instantiated multiple times across the package graph as\nlong as it is always with the same value. It is an error if the same named\naddress (regardless of renaming) is instantiated with differing values across\nthe package graph."}),"\n",(0,d.jsxs)(n.p,{children:["A Move package can only be compiled if all named addresses resolve to a value.\nThis presents issues if the package wishes to expose an uninstantiated named\naddress. This is what the ",(0,d.jsx)(n.code,{children:"[dev-addresses]"})," section solves. This section can\nset values for named addresses, but cannot introduce any named addresses.\nAdditionally, only the ",(0,d.jsx)(n.code,{children:"[dev-addresses]"})," in the root package are included in\n",(0,d.jsx)(n.code,{children:"dev"})," mode. For example a root package with the following manifest would not compile\noutside of ",(0,d.jsx)(n.code,{children:"dev"})," mode since ",(0,d.jsx)(n.code,{children:"named_addr"})," would be uninstantiated:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'[package]\nname = "ExamplePkg"\n...\n[addresses]\nnamed_addr = "_"\n\n[dev-addresses]\nnamed_addr = "0xC0FFEE"\n'})}),"\n",(0,d.jsx)(n.h2,{id:"usage-artifacts-and-data-structures",children:"Usage, Artifacts, and Data Structures"}),"\n",(0,d.jsxs)(n.p,{children:["The Move package system comes with a command line option as part of the Move\nCLI ",(0,d.jsx)(n.code,{children:"move <flags> <command> <command_flags>"}),". Unless a\nparticular path is provided, all package commands will run in the current working\ndirectory. The full list of commands and flags for the Move CLI can be found by\nrunning ",(0,d.jsx)(n.code,{children:"move --help"}),"."]}),"\n",(0,d.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,d.jsxs)(n.p,{children:["A package can be compiled either through the Move CLI commands, or as a library\ncommand in Rust with the function ",(0,d.jsx)(n.code,{children:"compile_package"}),". This will create a\n",(0,d.jsx)(n.code,{children:"CompiledPackage"})," that holds the compiled bytecode along with other compilation\nartifacts (source maps, documentation, ABIs) in memory. This ",(0,d.jsx)(n.code,{children:"CompiledPackage"}),"\ncan be converted to an ",(0,d.jsx)(n.code,{children:"OnDiskPackage"})," and vice versa -- the latter being the data of\nthe ",(0,d.jsx)(n.code,{children:"CompiledPackage"})," laid out in the file system in the following format:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"a_move_package\n\u251c\u2500\u2500 Move.toml\n...\n\u2514\u2500\u2500 build\n    \u251c\u2500\u2500 <dep_pkg_name>\n    \u2502   \u251c\u2500\u2500 BuildInfo.yaml\n    \u2502   \u251c\u2500\u2500 bytecode_modules\n    \u2502   \u2502   \u2514\u2500\u2500 *.mv\n    \u2502   \u251c\u2500\u2500 source_maps\n    \u2502   \u2502   \u2514\u2500\u2500 *.mvsm\n    \u2502   \u251c\u2500\u2500 bytecode_scripts\n    \u2502   \u2502   \u2514\u2500\u2500 *.mv\n    \u2502   \u251c\u2500\u2500 abis\n    \u2502   \u2502   \u251c\u2500\u2500 *.abi\n    \u2502   \u2502   \u2514\u2500\u2500 <module_name>/*.abi\n    \u2502   \u2514\u2500\u2500 sources\n    \u2502       \u2514\u2500\u2500 *.move\n    ...\n    \u2514\u2500\u2500 <dep_pkg_name>\n        \u251c\u2500\u2500 BuildInfo.yaml\n        ...\n        \u2514\u2500\u2500 sources\n"})}),"\n",(0,d.jsxs)(n.p,{children:["See the ",(0,d.jsx)(n.code,{children:"move-package"})," crate for more information on these data structures and\nhow to use the Move package system as a Rust library."]}),"\n",(0,d.jsx)(n.h2,{id:"using-bytecode-for-dependencies",children:"Using Bytecode for Dependencies"}),"\n",(0,d.jsxs)(n.p,{children:["Move bytecode can be used as dependencies when the Move source code for those dependencies are not available locally. To use this feature, you will need co-locate the files in directories at the same level and then specify their paths in the corresponding ",(0,d.jsx)(n.code,{children:"Move.toml"})," files."]}),"\n",(0,d.jsx)(n.h2,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,d.jsxs)(n.p,{children:["Using local bytecode as dependencies requires bytecode files to be downloaded locally, and the actual address for each named address must be specified in either ",(0,d.jsx)(n.code,{children:"Move.toml"})," or through ",(0,d.jsx)(n.code,{children:"--named-addresses"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Note, both ",(0,d.jsx)(n.code,{children:"aptos move prove"})," and ",(0,d.jsx)(n.code,{children:"aptos move test"})," commands, currently, do not support bytecode as dependencies."]}),"\n",(0,d.jsx)(n.h2,{id:"recommended-structure",children:"Recommended structure"}),"\n",(0,d.jsxs)(n.p,{children:["We use an example to illustrate the development flow of using this feature. Suppose we want to compile the package ",(0,d.jsx)(n.code,{children:"A"}),". The package layout is:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rust",children:"./A\n\u251c\u2500\u2500 Move.toml\n\u251c\u2500\u2500 sources\n  \u251c AModule.move\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"A.move"})," is defined below, depending on the modules ",(0,d.jsx)(n.code,{children:"Bar"})," and ",(0,d.jsx)(n.code,{children:"Foo"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rust",children:"module A::AModule {\n    use B::Bar;\n    use C::Foo;\n    public fun foo(): u64 {\n        Bar::foo() + Foo::bar()\n    }\n}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Suppose the source of ",(0,d.jsx)(n.code,{children:"Bar"})," and ",(0,d.jsx)(n.code,{children:"Foo"})," are not available but the corresponding bytecode ",(0,d.jsx)(n.code,{children:"Bar.mv"})," and ",(0,d.jsx)(n.code,{children:"Foo.mv"})," are available locally. To use them as dependencies, we would:"]}),"\n",(0,d.jsxs)(n.p,{children:["Specify ",(0,d.jsx)(n.code,{children:"Move.toml"})," for ",(0,d.jsx)(n.code,{children:"Bar"})," and ",(0,d.jsx)(n.code,{children:"Foo"}),". Note that named addresses are already instantiated with the actual address in the bytecode. In our example, the actual address for ",(0,d.jsx)(n.code,{children:"C"})," is already bound to ",(0,d.jsx)(n.code,{children:"0x3"}),". As a result, ",(0,d.jsx)(n.code,{children:"[addresses]"})," must be specified ",(0,d.jsx)(n.code,{children:"C"})," as ",(0,d.jsx)(n.code,{children:"0x3"}),", as shown below:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rust",children:'[package]\nname = "Foo"\nversion = "0.0.0"\n[addresses]\nC = "0x3"\n'})}),"\n",(0,d.jsxs)(n.p,{children:["Place the bytecode file and the corresponding ",(0,d.jsx)(n.code,{children:"Move.toml"})," file in the same directory with the bytecode in a ",(0,d.jsx)(n.code,{children:"build"})," subdirectory. Note an empty ",(0,d.jsx)(n.code,{children:"sources"})," directory is ",(0,d.jsx)(n.strong,{children:"required"}),". For instance, the layout of the folder ",(0,d.jsx)(n.code,{children:"B"})," (for the package ",(0,d.jsx)(n.code,{children:"Bar"}),") and ",(0,d.jsx)(n.code,{children:"C"})," (for the package ",(0,d.jsx)(n.code,{children:"Foo"}),") would resemble:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rust",children:"./B\n\u251c\u2500\u2500 Move.toml\n\u251c\u2500\u2500 sources\n\u251c\u2500\u2500 build\n \u251c Bar.mv\n"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rust",children:"./C\n\u251c\u2500\u2500 Move.toml\n\u251c\u2500\u2500 sources\n\u251c\u2500\u2500 build\n  \u251c\u2500\u2500 Foo\n   \u251c\u2500\u2500bytecode_modules\n     \u251c Foo.mv\n"})}),"\n",(0,d.jsxs)(n.p,{children:["Specify ",(0,d.jsx)(n.code,{children:"[dependencies]"})," in the ",(0,d.jsx)(n.code,{children:"Move.toml"})," of the target (first) package with the location of the dependent (secondary) packages. For instance, assuming all three package directories are at the same level, ",(0,d.jsx)(n.code,{children:"Move.toml"})," of ",(0,d.jsx)(n.code,{children:"A"})," would resemble:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-rust",children:'[package]\nname = "A"\nversion = "0.0.0"\n[addresses]\nA = "0x2"\n[dependencies]\nBar = { local = "../B" }\nFoo = { local = "../C" }\n'})}),"\n",(0,d.jsx)(n.p,{children:"Note that if both the bytecode and the source code of the same package exist in the search paths, the compiler will complain that the declaration is duplicated."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},83581:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var d=s(11855);const a={},o=d.createContext(a);function i(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);