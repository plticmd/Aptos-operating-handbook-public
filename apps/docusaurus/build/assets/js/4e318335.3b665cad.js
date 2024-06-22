"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[837],{72892:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>t});var s=o(63159),i=o(83581);const r={},c="While, For, and Loop",d={id:"move/book/loops",title:"While, For, and Loop",description:"Move offers three constructs for looping: while, for, and loop.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/book/loops.md",sourceDirName:"move/book",slug:"/move/book/loops",permalink:"/move/book/loops",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/book/loops.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{},sidebar:"appSidebar",previous:{title:"\u6761\u4ef6\u6587",permalink:"/move/book/conditionals"},next:{title:"\u95a2\u6570",permalink:"/move/book/functions"}},l={},t=[{value:"<code>while</code> loops",id:"while-loops",level:2},{value:"<code>break</code>",id:"break",level:3},{value:"<code>continue</code>",id:"continue",level:3},{value:"The type of <code>break</code> and <code>continue</code>",id:"the-type-of-break-and-continue",level:3},{value:"The <code>for</code> expression",id:"the-for-expression",level:2},{value:"<code>break</code> and <code>continue</code> in <code>for</code> loops",id:"break-and-continue-in-for-loops",level:3},{value:"The <code>loop</code> expression",id:"the-loop-expression",level:2},{value:"The type of <code>while</code>, <code>loop</code>, and <code>for</code> expression",id:"the-type-of-while-loop-and-for-expression",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"while-for-and-loop",children:"While, For, and Loop"}),"\n",(0,s.jsxs)(n.p,{children:["Move offers three constructs for looping: ",(0,s.jsx)(n.code,{children:"while"}),", ",(0,s.jsx)(n.code,{children:"for"}),", and ",(0,s.jsx)(n.code,{children:"loop"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"while-loops",children:[(0,s.jsx)(n.code,{children:"while"})," loops"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"while"})," construct repeats the body (an expression of type unit) until the condition (an expression of type ",(0,s.jsx)(n.code,{children:"bool"}),") evaluates to ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of simple ",(0,s.jsx)(n.code,{children:"while"})," loop that computes the sum of the numbers from ",(0,s.jsx)(n.code,{children:"1"})," to ",(0,s.jsx)(n.code,{children:"n"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun sum(n: u64): u64 {\n    let sum = 0;\n    let i = 1;\n    while (i <= n) {\n        sum = sum + i;\n        i = i + 1\n    };\n\n    sum\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Infinite loops are allowed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun foo() {\n    while (true) { }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"break",children:(0,s.jsx)(n.code,{children:"break"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"break"})," expression can be used to exit a loop before the condition evaluates to ",(0,s.jsx)(n.code,{children:"false"}),". For example, this loop uses ",(0,s.jsx)(n.code,{children:"break"})," to find the smallest factor of ",(0,s.jsx)(n.code,{children:"n"})," that's greater than 1:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun smallest_factor(n: u64): u64 {\n    // assuming the input is not 0 or 1\n    let i = 2;\n    while (i <= n) {\n        if (n % i == 0) break;\n        i = i + 1\n    };\n\n    i\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"break"})," expression cannot be used outside of a loop."]}),"\n",(0,s.jsx)(n.h3,{id:"continue",children:(0,s.jsx)(n.code,{children:"continue"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"continue"})," expression skips the rest of the loop and continues to the next iteration. This loop uses ",(0,s.jsx)(n.code,{children:"continue"})," to compute the sum of ",(0,s.jsx)(n.code,{children:"1, 2, ..., n"}),", except when the number is divisible by 10:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun sum_intermediate(n: u64): u64 {\n    let sum = 0;\n    let i = 0;\n    while (i < n) {\n        i = i + 1;\n        if (i % 10 == 0) continue;\n        sum = sum + i;\n    };\n\n    sum\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"continue"})," expression cannot be used outside of a loop."]}),"\n",(0,s.jsxs)(n.h3,{id:"the-type-of-break-and-continue",children:["The type of ",(0,s.jsx)(n.code,{children:"break"})," and ",(0,s.jsx)(n.code,{children:"continue"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"break"})," and ",(0,s.jsx)(n.code,{children:"continue"}),", much like ",(0,s.jsx)(n.code,{children:"return"})," and ",(0,s.jsx)(n.code,{children:"abort"}),", can have any type. The following examples illustrate where this flexible typing can be helpful:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun pop_smallest_while_not_equal(\n    v1: vector<u64>,\n    v2: vector<u64>,\n): vector<u64> {\n    let result = vector::empty();\n    while (!vector::is_empty(&v1) && !vector::is_empty(&v2)) {\n        let u1 = *vector::borrow(&v1, vector::length(&v1) - 1);\n        let u2 = *vector::borrow(&v2, vector::length(&v2) - 1);\n        let popped =\n            if (u1 < u2) vector::pop_back(&mut v1)\n            else if (u2 < u1) vector::pop_back(&mut v2)\n            else break; // Here, `break` has type `u64`\n        vector::push_back(&mut result, popped);\n    };\n\n    result\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun pick(\n    indexes: vector<u64>,\n    v1: &vector<address>,\n    v2: &vector<address>\n): vector<address> {\n    let len1 = vector::length(v1);\n    let len2 = vector::length(v2);\n    let result = vector::empty();\n    while (!vector::is_empty(&indexes)) {\n        let index = vector::pop_back(&mut indexes);\n        let chosen_vector =\n            if (index < len1) v1\n            else if (index < len2) v2\n            else continue; // Here, `continue` has type `&vector<address>`\n        vector::push_back(&mut result, *vector::borrow(chosen_vector, index))\n    };\n\n    result\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"the-for-expression",children:["The ",(0,s.jsx)(n.code,{children:"for"})," expression"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"for"})," expression iterates over a range defined using integer-typed ",(0,s.jsx)(n.code,{children:"lower_bound"})," (inclusive) and ",(0,s.jsx)(n.code,{children:"upper_bound"})," (non-inclusive) expressions, executing its loop body for each element of the range. ",(0,s.jsx)(n.code,{children:"for"})," is designed for scenarios where the number of iterations of a loop is determined by a specific range."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example of a ",(0,s.jsx)(n.code,{children:"for"})," loop that computes the sum of the elements in a range from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"n-1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun sum(n: u64): u64 {\n    let sum = 0;\n    for (i in 0..n) {\n        sum = sum + i;\n    };\n\n    sum\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The loop iterator variable (",(0,s.jsx)(n.code,{children:"i"})," in the above example) currently must be a numeric type (inferred from the bounds), and the bounds ",(0,s.jsx)(n.code,{children:"0"})," and ",(0,s.jsx)(n.code,{children:"n"})," here can be replaced by arbitrary numeric expressions. Each is only evaluated once at the start of the loop. The iterator variable ",(0,s.jsx)(n.code,{children:"i"})," is assigned the ",(0,s.jsx)(n.code,{children:"lower_bound"})," (in this case ",(0,s.jsx)(n.code,{children:"0"}),") and incremented after each loop iteration; the loop exits when the iterator ",(0,s.jsx)(n.code,{children:"i"})," reaches or exceeds ",(0,s.jsx)(n.code,{children:"upper_bound"})," (in this case ",(0,s.jsx)(n.code,{children:"n"}),")."]}),"\n",(0,s.jsxs)(n.h3,{id:"break-and-continue-in-for-loops",children:[(0,s.jsx)(n.code,{children:"break"})," and ",(0,s.jsx)(n.code,{children:"continue"})," in ",(0,s.jsx)(n.code,{children:"for"})," loops"]}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.code,{children:"while"})," loops, the ",(0,s.jsx)(n.code,{children:"break"})," expression can be used in ",(0,s.jsx)(n.code,{children:"for"})," loops to exit prematurely. The ",(0,s.jsx)(n.code,{children:"continue"})," expression can be used to skip the current iteration and move to the next. Here's an example that demonstrates the use of both ",(0,s.jsx)(n.code,{children:"break"})," and ",(0,s.jsx)(n.code,{children:"continue"}),". The loop will iterate through numbers from ",(0,s.jsx)(n.code,{children:"0"})," to ",(0,s.jsx)(n.code,{children:"n-1"}),", summing up them up. It will skip numbers that are divisible by ",(0,s.jsx)(n.code,{children:"3"})," (using ",(0,s.jsx)(n.code,{children:"continue"}),") and stop when it encounters a number greater than ",(0,s.jsx)(n.code,{children:"10"})," (using ",(0,s.jsx)(n.code,{children:"break"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun sum_conditional(n: u64): u64 {\n    let sum = 0;\n    for (iter in 0..n) {\n        if (iter > 10) {\n            break; // Exit the loop if the number is greater than 10\n        }\n        if (iter % 3 == 0) {\n            continue; // Skip the current iteration if the number is divisible by 3\n        }\n\n        sum = sum + iter;\n    };\n\n    sum\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"the-loop-expression",children:["The ",(0,s.jsx)(n.code,{children:"loop"})," expression"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"loop"})," expression repeats the loop body (an expression with type ",(0,s.jsx)(n.code,{children:"()"}),") until it hits a ",(0,s.jsx)(n.code,{children:"break"})]}),"\n",(0,s.jsxs)(n.p,{children:["Without a ",(0,s.jsx)(n.code,{children:"break"}),", the loop will continue forever"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun foo() {\n    let i = 0;\n    loop { i = i + 1 }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here is an example that uses ",(0,s.jsx)(n.code,{children:"loop"})," to write the ",(0,s.jsx)(n.code,{children:"sum"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun sum(n: u64): u64 {\n    let sum = 0;\n    let i = 0;\n    loop {\n        i = i + 1;\n        if (i > n) break;\n        sum = sum + i\n    };\n\n    sum\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you might expect, ",(0,s.jsx)(n.code,{children:"continue"})," can also be used inside a ",(0,s.jsx)(n.code,{children:"loop"}),". Here is ",(0,s.jsx)(n.code,{children:"sum_intermediate"})," from above rewritten using ",(0,s.jsx)(n.code,{children:"loop"})," instead of ",(0,s.jsx)(n.code,{children:"while"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"fun sum_intermediate(n: u64): u64 {\n    let sum = 0;\n    let i = 0;\n    loop {\n        i = i + 1;\n        if (i % 10 == 0) continue;\n        if (i > n) break;\n        sum = sum + i\n    };\n\n    sum\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"the-type-of-while-loop-and-for-expression",children:["The type of ",(0,s.jsx)(n.code,{children:"while"}),", ",(0,s.jsx)(n.code,{children:"loop"}),", and ",(0,s.jsx)(n.code,{children:"for"})," expression"]}),"\n",(0,s.jsxs)(n.p,{children:["Move loops are typed expressions. The ",(0,s.jsx)(n.code,{children:"while"})," and ",(0,s.jsx)(n.code,{children:"for"})," expression always has type ",(0,s.jsx)(n.code,{children:"()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"let () = while (i < 10) { i = i + 1 };\nlet () = for (i in 0..10) {};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"loop"})," contains a ",(0,s.jsx)(n.code,{children:"break"}),", the expression has type unit ",(0,s.jsx)(n.code,{children:"()"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"(loop { if (i < 10) i = i + 1 else break }: ());\nlet () = loop { if (i < 10) i = i + 1 else break };\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"loop"})," does not have a ",(0,s.jsx)(n.code,{children:"break"}),", ",(0,s.jsx)(n.code,{children:"loop"})," can have any type much like ",(0,s.jsx)(n.code,{children:"return"}),", ",(0,s.jsx)(n.code,{children:"abort"}),", ",(0,s.jsx)(n.code,{children:"break"}),", and ",(0,s.jsx)(n.code,{children:"continue"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-move",children:"(loop (): u64);\n(loop (): address);\n(loop (): &vector<vector<u8>>);\n"})})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},83581:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>d});var s=o(11855);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);