"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[1609],{13324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(63159),o=t(83581);const i={},r="Unit Tests",a={id:"move/book/unit-testing",title:"Unit Tests",description:"Unit testing for Move adds three new annotations to the Move source language:",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/book/unit-testing.md",sourceDirName:"move/book",slug:"/move/book/unit-testing",permalink:"/move/book/unit-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/book/unit-testing.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{},sidebar:"appSidebar",previous:{title:"Package Upgrades",permalink:"/move/book/package-upgrades"},next:{title:"Global Storage - Structure",permalink:"/move/book/global-storage-structure"}},d={},c=[{value:"Testing Annotations: Their Meaning and Usage",id:"testing-annotations-their-meaning-and-usage",level:2},{value:"Expected Failure",id:"expected-failure",level:3},{value:"Test parameters",id:"test-parameters",level:3},{value:"Arbitrary code to support tests",id:"arbitrary-code-to-support-tests",level:3},{value:"Running Unit Tests",id:"running-unit-tests",level:2},{value:"Example",id:"example",level:2},{value:"Running Tests",id:"running-tests",level:3},{value:"Using Test Flags",id:"using-test-flags",level:3},{value:"<code>-f &lt;str&gt;</code> or <code>--filter &lt;str&gt;</code>",id:"-f-str-or---filter-str",level:4},{value:"<code>--coverage</code>",id:"--coverage",level:4}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsx)(n.p,{children:"Unit testing for Move adds three new annotations to the Move source language:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"#[test]"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#[test_only]"}),", and"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"#[expected_failure]"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["They respectively mark a function as a test, mark a module or module member (",(0,s.jsx)(n.code,{children:"use"}),", function, or struct) as code to be included for testing only, and mark that a test is expected to fail. These annotations can be placed on a function with any visibility. Whenever a module or module member is annotated as ",(0,s.jsx)(n.code,{children:"#[test_only]"})," or ",(0,s.jsx)(n.code,{children:"#[test]"}),", it will not be included in the compiled bytecode unless it is compiled for testing."]}),"\n",(0,s.jsx)(n.h2,{id:"testing-annotations-their-meaning-and-usage",children:"Testing Annotations: Their Meaning and Usage"}),"\n",(0,s.jsxs)(n.p,{children:["Both the ",(0,s.jsx)(n.code,{children:"#[test]"})," and ",(0,s.jsx)(n.code,{children:"#[expected_failure]"})," annotations can be used either with or without arguments."]}),"\n",(0,s.jsxs)(n.p,{children:["Without arguments, the ",(0,s.jsx)(n.code,{children:"#[test]"})," annotation can only be placed on a function with no parameters. This annotation simply marks this function as a test to be run by the unit testing harness."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#[test] // OK\nfun this_is_a_test() { ... }\n\n#[test] // Will fail to compile since the test takes an argument\nfun this_is_not_correct(arg: signer) { ... }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"expected-failure",children:"Expected Failure"}),"\n",(0,s.jsxs)(n.p,{children:["A test can also be annotated as an ",(0,s.jsx)(n.code,{children:"#[expected_failure]"}),". This\nannotation marks that the test should is expected to raise an error."]}),"\n",(0,s.jsxs)(n.p,{children:["You can ensure that a test is aborting with a specific abort ",(0,s.jsx)(n.code,{children:"<code>"}),"\nby annotating it with ",(0,s.jsx)(n.code,{children:"#[expected_failure(abort_code = <code>)]"}),",\ncorresponding to the parameter to an ",(0,s.jsx)(n.code,{children:"abort"})," statement (or\nfailing ",(0,s.jsx)(n.code,{children:"assert!"})," macro)."]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of an ",(0,s.jsx)(n.code,{children:"abort_code"}),", an ",(0,s.jsx)(n.code,{children:"expected_failure"})," may specify program\nexecution errors, such as ",(0,s.jsx)(n.code,{children:"arithmetic_error"}),", ",(0,s.jsx)(n.code,{children:"major_status"}),",\n",(0,s.jsx)(n.code,{children:"vector_error"}),", and ",(0,s.jsx)(n.code,{children:"out_of_gas"}),". For more specificity, a\n",(0,s.jsx)(n.code,{children:"minor_status"})," may optionally be specified."]}),"\n",(0,s.jsxs)(n.p,{children:["If the error is expected from a specific location, that may also be specified:\n",(0,s.jsx)(n.code,{children:"#[expected_failure(abort_code = <code>, location = <loc>)]"}),".\nIf the test then fails with the right error but in a different module, the test will also fail.\nNote that ",(0,s.jsx)(n.code,{children:"<loc>"})," can be ",(0,s.jsx)(n.code,{children:"Self"}),"(in the current module) or a qualified name, e.g. ",(0,s.jsx)(n.code,{children:"vector::std"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Only functions that have the ",(0,s.jsx)(n.code,{children:"#[test]"})," annotation can also be annotated as an #",(0,s.jsx)(n.code,{children:"[expected_failure]"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#[test]\n#[expected_failure]\npublic fun this_test_will_abort_and_pass() { abort 1 }\n\n#[test]\n#[expected_failure]\npublic fun test_will_error_and_pass() { 1/0; }\n\n#[test]\n#[expected_failure(abort_code = 0, location = Self)]\npublic fun test_will_error_and_fail() { 1/0; }\n\n#[test, expected_failure] // Can have multiple in one attribute. This test will pass.\npublic fun this_other_test_will_abort_and_pass() { abort 1 }\n\n#[test]\n#[expected_failure(vector_error, minor_status = 1, location = Self)]\nfun borrow_out_of_range() { ... }\n#[test]\n#[expected_failure(abort_code = 26113, location = extensions::table)]\nfun test_destroy_fails() { ... }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"test-parameters",children:"Test parameters"}),"\n",(0,s.jsxs)(n.p,{children:["With arguments, a test annotation takes the form ",(0,s.jsx)(n.code,{children:"#[test(<param_name_1> = <address>, ..., <param_name_n> = <address>)]"}),". If a function is annotated in such a manner, the function's parameters must be a permutation of the parameters ",(0,s.jsx)(n.code,{children:"<param_name_1>, ..., <param_name_n>"}),", i.e., the order of these parameters as they occur in the function and their order in the test annotation do not have to be the same, but they must be able to be matched up with each other by name."]}),"\n",(0,s.jsxs)(n.p,{children:["Only parameters with a type of ",(0,s.jsx)(n.code,{children:"signer"})," are supported as test parameters. If a parameter other than ",(0,s.jsx)(n.code,{children:"signer"})," is supplied, the test will result in an error when run."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#[test(arg = @0xC0FFEE)] // OK\nfun this_is_correct_now(arg: signer) { ... }\n\n#[test(wrong_arg_name = @0xC0FFEE)] // Not correct: arg name doesn't match\nfun this_is_incorrect(arg: signer) { ... }\n\n#[test(a = @0xC0FFEE, b = @0xCAFE)] // OK. We support multiple signer arguments, but you must always provide a value for that argument\nfun this_works(a: signer, b: signer) { ... }\n\n// somewhere a named address is declared\n#[test_only] // test-only named addresses are supported\naddress TEST_NAMED_ADDR = @0x1;\n...\n#[test(arg = @TEST_NAMED_ADDR)] // Named addresses are supported!\nfun this_is_correct_now(arg: signer) { ... }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"arbitrary-code-to-support-tests",children:"Arbitrary code to support tests"}),"\n",(0,s.jsxs)(n.p,{children:["A module and any of its members can be declared as test only. In such a case the item will only be included in the compiled Move bytecode when compiled in test mode. Additionally, when compiled outside of test mode, any non-test ",(0,s.jsx)(n.code,{children:"use"}),"s of a ",(0,s.jsx)(n.code,{children:"#[test_only]"})," module will raise an error during compilation."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#[test_only] // test only attributes can be attached to modules\nmodule abc { ... }\n\n#[test_only] // test only attributes can be attached to named addresses\naddress ADDR = @0x1;\n\n#[test_only] // .. to uses\nuse 0x1::some_other_module;\n\n#[test_only] // .. to structs\nstruct SomeStruct { ... }\n\n#[test_only] // .. and functions. Can only be called from test code, but not a test\nfun test_only_function(...) { ... }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"running-unit-tests",children:"Running Unit Tests"}),"\n",(0,s.jsxs)(n.p,{children:["Unit tests for a Move package can be run with the ",(0,s.jsx)(n.code,{children:"aptos move test"})," command. See ",(0,s.jsx)(n.a,{href:"/move/book/packages",children:"package"})," for more info."]}),"\n",(0,s.jsxs)(n.p,{children:["When running tests, every test will either ",(0,s.jsx)(n.code,{children:"PASS"}),", ",(0,s.jsx)(n.code,{children:"FAIL"}),", or ",(0,s.jsx)(n.code,{children:"TIMEOUT"}),". If a test case fails, the location of the failure along with the function name that caused the failure will be reported if possible. You can see an example of this below."]}),"\n",(0,s.jsxs)(n.p,{children:["A test will be marked as timing out if it exceeds the maximum number of instructions that can be executed for any single test. This bound can be changed using the options below, and its default value is set to 100000 instructions. Additionally, while the result of a test is always deterministic, tests are run in parallel by default, so the ordering of test results in a test run is non-deterministic unless running with only one thread (see ",(0,s.jsx)(n.code,{children:"OPTIONS"})," below)."]}),"\n",(0,s.jsx)(n.p,{children:"There are also a number of options that can be passed to the unit testing binary to fine-tune testing and to help debug failing tests. These can be found using the help flag:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aptos move test -h\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"A simple module using some of the unit testing features is shown in the following example:"}),"\n",(0,s.jsx)(n.p,{children:"First create an empty package inside an empty directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aptos move init --name TestExample\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next add the following to the ",(0,s.jsx)(n.code,{children:"Move.toml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[dependencies]\nMoveStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir="aptos-move/framework/move-stdlib", rev = "main", addr_subst = { "std" = "0x1" } }\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Next add the following module under the ",(0,s.jsx)(n.code,{children:"sources"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// filename: sources/my_module.move\nmodule 0x1::my_module {\n\n    struct MyCoin has key { value: u64 }\n\n    public fun make_sure_non_zero_coin(coin: MyCoin): MyCoin {\n        assert!(coin.value > 0, 0);\n        coin\n    }\n\n    public fun has_coin(addr: address): bool {\n        exists<MyCoin>(addr)\n    }\n\n    #[test]\n    fun make_sure_non_zero_coin_passes() {\n        let coin = MyCoin { value: 1 };\n        let MyCoin { value: _ } = make_sure_non_zero_coin(coin);\n    }\n\n    #[test]\n    // Or #[expected_failure] if we don't care about the abort code\n    #[expected_failure(abort_code = 0, location = Self)]\n    fun make_sure_zero_coin_fails() {\n        let coin = MyCoin { value: 0 };\n        let MyCoin { value: _ } = make_sure_non_zero_coin(coin);\n    }\n\n    #[test_only] // test only helper function\n    fun publish_coin(account: &signer) {\n        move_to(account, MyCoin { value: 1 })\n    }\n\n    #[test(a = @0x1, b = @0x2)]\n    fun test_has_coin(a: signer, b: signer) {\n        publish_coin(&a);\n        publish_coin(&b);\n        assert!(has_coin(@0x1), 0);\n        assert!(has_coin(@0x2), 1);\n        assert!(!has_coin(@0x3), 1);\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"running-tests",children:"Running Tests"}),"\n",(0,s.jsxs)(n.p,{children:["You can then run these tests with the ",(0,s.jsx)(n.code,{children:"aptos move test"})," command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aptos move test\nBUILDING MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::my_module::make_sure_zero_coin_fails\n[ PASS    ] 0x1::my_module::test_has_coin\nTest result: OK. Total tests: 3; passed: 3; failed: 0\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-test-flags",children:"Using Test Flags"}),"\n",(0,s.jsxs)(n.h4,{id:"-f-str-or---filter-str",children:[(0,s.jsx)(n.code,{children:"-f <str>"})," or ",(0,s.jsx)(n.code,{children:"--filter <str>"})]}),"\n",(0,s.jsxs)(n.p,{children:["This will only run tests whose fully qualified name contains ",(0,s.jsx)(n.code,{children:"<str>"}),". For example if we wanted to only run tests with ",(0,s.jsx)(n.code,{children:'"zero_coin"'})," in their name:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aptos move test -f zero_coin\nCACHED MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::my_module::make_sure_zero_coin_fails\nTest result: OK. Total tests: 2; passed: 2; failed: 0\n"})}),"\n",(0,s.jsx)(n.h4,{id:"--coverage",children:(0,s.jsx)(n.code,{children:"--coverage"})}),"\n",(0,s.jsx)(n.p,{children:"This will compute code being covered by test cases and generate coverage summary."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aptos move test --coverage\nINCLUDING DEPENDENCY AptosFramework\nINCLUDING DEPENDENCY AptosStdlib\nINCLUDING DEPENDENCY MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::my_module::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::my_module::make_sure_zero_coin_fails\n[ PASS    ] 0x1::my_module::test_has_coin\nTest result: OK. Total tests: 3; passed: 3; failed: 0\n+-------------------------+\n| Move Coverage Summary   |\n+-------------------------+\nModule 0000000000000000000000000000000000000000000000000000000000000001::my_module\n>>> % Module coverage: 100.00\n+-------------------------+\n| % Move Coverage: 100.00  |\n+-------------------------+\nPlease use `aptos move coverage -h` for more detailed source or bytecode test coverage of this package\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then by running ",(0,s.jsx)(n.code,{children:"aptos move coverage"}),", we can get more detailed coverage information. These can be found using the help flag:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ aptos move coverage -h\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},83581:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(11855);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);