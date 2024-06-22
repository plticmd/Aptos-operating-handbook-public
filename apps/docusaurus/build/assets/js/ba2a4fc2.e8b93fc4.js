"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[3306],{96989:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=o(63159),r=o(83581);const s={},i="Structs and Resources",a={id:"move/book/structs-and-resources",title:"Structs and Resources",description:"A struct is a user-defined data structure containing typed fields. Structs can store any",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/move/book/structs-and-resources.md",sourceDirName:"move/book",slug:"/move/book/structs-and-resources",permalink:"/move/book/structs-and-resources",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/move/book/structs-and-resources.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{},sidebar:"appSidebar",previous:{title:"\u95a2\u6570",permalink:"/move/book/functions"},next:{title:"\u5b9a\u6570",permalink:"/move/book/constants"}},l={},c=[{value:"Defining Structs",id:"defining-structs",level:2},{value:"Naming",id:"naming",level:3},{value:"Using Structs",id:"using-structs",level:2},{value:"Creating Structs",id:"creating-structs",level:3},{value:"Destroying Structs via Pattern Matching",id:"destroying-structs-via-pattern-matching",level:3},{value:"Borrowing Structs and Fields",id:"borrowing-structs-and-fields",level:3},{value:"Reading and Writing Fields",id:"reading-and-writing-fields",level:3},{value:"Privileged Struct Operations",id:"privileged-struct-operations",level:2},{value:"Ownership",id:"ownership",level:2},{value:"Storing Resources in Global Storage",id:"storing-resources-in-global-storage",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Coin",id:"example-1-coin",level:3},{value:"Example 2: Geometry",id:"example-2-geometry",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"structs-and-resources",children:"Structs and Resources"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.em,{children:"struct"})," is a user-defined data structure containing typed fields. Structs can store any\nnon-reference type, including other structs."]}),"\n",(0,t.jsxs)(n.p,{children:["We often refer to struct values as ",(0,t.jsx)(n.em,{children:"resources"})," if they cannot be copied and cannot be dropped. In\nthis case, resource values must have ownership transferred by the end of the function. This property\nmakes resources particularly well served for defining global storage schemas or for representing\nimportant values (such as a token)."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, structs are linear and ephemeral. By this we mean that they: cannot be copied, cannot be\ndropped, and cannot be stored in global storage. This means that all values have to have ownership\ntransferred (linear) and the values must be dealt with by the end of the program's execution\n(ephemeral). We can relax this behavior by giving the struct ",(0,t.jsx)(n.a,{href:"/move/book/abilities",children:"abilities"})," which allow\nvalues to be copied or dropped and also to be stored in global storage or to define global storage\nschemas."]}),"\n",(0,t.jsx)(n.h2,{id:"defining-structs",children:"Defining Structs"}),"\n",(0,t.jsx)(n.p,{children:"Structs must be defined inside a module:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo { x: u64, y: bool }\n    struct Bar {}\n    struct Baz { foo: Foo, }\n    //                   ^ note: it is fine to have a trailing comma\n}\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Structs cannot be recursive, so the following definition is invalid:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"struct Foo { x: Foo }\n//              ^ error! Foo cannot contain Foo\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned above: by default, a struct declaration is linear and ephemeral. So to allow the value\nto be used with certain operations (that copy it, drop it, store it in global storage, or use it as\na storage schema), structs can be granted ",(0,t.jsx)(n.a,{href:"/move/book/abilities",children:"abilities"})," by annotating them with\n",(0,t.jsx)(n.code,{children:"has <ability>"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo has copy, drop { x: u64, y: bool }\n}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For more details, see the ",(0,t.jsx)(n.a,{href:"/move/book/abilities#annotating-structs",children:"annotating structs"})," section."]}),"\n",(0,t.jsx)(n.h3,{id:"naming",children:"Naming"}),"\n",(0,t.jsxs)(n.p,{children:["Structs must start with a capital letter ",(0,t.jsx)(n.code,{children:"A"})," to ",(0,t.jsx)(n.code,{children:"Z"}),". After the first letter, struct names can\ncontain underscores ",(0,t.jsx)(n.code,{children:"_"}),", letters ",(0,t.jsx)(n.code,{children:"a"})," to ",(0,t.jsx)(n.code,{children:"z"}),", letters ",(0,t.jsx)(n.code,{children:"A"})," to ",(0,t.jsx)(n.code,{children:"Z"}),", or digits ",(0,t.jsx)(n.code,{children:"0"})," to ",(0,t.jsx)(n.code,{children:"9"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"struct Foo {}\nstruct BAR {}\nstruct B_a_z_4_2 {}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This naming restriction of starting with ",(0,t.jsx)(n.code,{children:"A"})," to ",(0,t.jsx)(n.code,{children:"Z"})," is in place to give room for future language\nfeatures. It may or may not be removed later."]}),"\n",(0,t.jsx)(n.h2,{id:"using-structs",children:"Using Structs"}),"\n",(0,t.jsx)(n.h3,{id:"creating-structs",children:"Creating Structs"}),"\n",(0,t.jsx)(n.p,{children:'Values of a struct type can be created (or "packed") by indicating the struct name, followed by\nvalue for each field:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo has drop { x: u64, y: bool }\n    struct Baz has drop { foo: Foo }\n\n    fun example() {\n        let foo = Foo { x: 0, y: false };\n        let baz = Baz { foo };\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you initialize a struct field with a local variable whose name is the same as the field, you can\nuse the following shorthand:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let baz = Baz { foo: foo };\n// is equivalent to\nlet baz = Baz { foo };\n"})}),"\n",(0,t.jsx)(n.p,{children:'This is called sometimes called "field name punning".'}),"\n",(0,t.jsx)(n.h3,{id:"destroying-structs-via-pattern-matching",children:"Destroying Structs via Pattern Matching"}),"\n",(0,t.jsx)(n.p,{children:"Struct values can be destroyed by binding or assigning them patterns."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo { x: u64, y: bool }\n    struct Bar { foo: Foo }\n    struct Baz {}\n\n    fun example_destroy_foo() {\n        let foo = Foo { x: 3, y: false };\n        let Foo { x, y: foo_y } = foo;\n        //        ^ shorthand for `x: x`\n\n        // two new bindings\n        //   x: u64 = 3\n        //   foo_y: bool = false\n    }\n\n    fun example_destroy_foo_wildcard() {\n        let foo = Foo { x: 3, y: false };\n        let Foo { x, y: _ } = foo;\n\n        // only one new binding since y was bound to a wildcard\n        //   x: u64 = 3\n    }\n\n    fun example_destroy_foo_assignment() {\n        let x: u64;\n        let y: bool;\n        Foo { x, y } = Foo { x: 3, y: false };\n\n        // mutating existing variables x & y\n        //   x = 3, y = false\n    }\n\n    fun example_foo_ref() {\n        let foo = Foo { x: 3, y: false };\n        let Foo { x, y } = &foo;\n\n        // two new bindings\n        //   x: &u64\n        //   y: &bool\n    }\n\n    fun example_foo_ref_mut() {\n        let foo = Foo { x: 3, y: false };\n        let Foo { x, y } = &mut foo;\n\n        // two new bindings\n        //   x: &mut u64\n        //   y: &mut bool\n    }\n\n    fun example_destroy_bar() {\n        let bar = Bar { foo: Foo { x: 3, y: false } };\n        let Bar { foo: Foo { x, y } } = bar;\n        //             ^ nested pattern\n\n        // two new bindings\n        //   x: u64 = 3\n        //   y: bool = false\n    }\n\n    fun example_destroy_baz() {\n        let baz = Baz {};\n        let Baz {} = baz;\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"borrowing-structs-and-fields",children:"Borrowing Structs and Fields"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"&"})," and ",(0,t.jsx)(n.code,{children:"&mut"})," operator can be used to create references to structs or fields. These examples\ninclude some optional type annotations (e.g., ",(0,t.jsx)(n.code,{children:": &Foo"}),") to demonstrate the type of operations."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet foo_ref: &Foo = &foo;\nlet y: bool = foo_ref.y;          // reading a field via a reference to the struct\nlet x_ref: &u64 = &foo.x;\n\nlet x_ref_mut: &mut u64 = &mut foo.x;\n*x_ref_mut = 42;            // modifying a field via a mutable reference\n"})}),"\n",(0,t.jsx)(n.p,{children:"It is possible to borrow inner fields of nested structs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet bar = Bar { foo };\n\nlet x_ref = &bar.foo.x;\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also borrow a field via a reference to a struct:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet foo_ref = &foo;\nlet x_ref = &foo_ref.x;\n// this has the same effect as let x_ref = &foo.x\n"})}),"\n",(0,t.jsx)(n.h3,{id:"reading-and-writing-fields",children:"Reading and Writing Fields"}),"\n",(0,t.jsx)(n.p,{children:"If you need to read and copy a field's value, you can then dereference the borrowed field:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet bar = Bar { foo: copy foo };\nlet x: u64 = *&foo.x;\nlet y: bool = *&foo.y;\nlet foo2: Foo = *&bar.foo;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If the field is implicitly copyable, the dot operator can be used to read fields of a struct without\nany borrowing. (Only scalar values with the ",(0,t.jsx)(n.code,{children:"copy"})," ability are implicitly copyable.)"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet x = foo.x;  // x == 3\nlet y = foo.y;  // y == true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Dot operators can be chained to access nested fields:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let baz = Baz { foo: Foo { x: 3, y: true } };\nlet x = baz.foo.x; // x = 3;\n"})}),"\n",(0,t.jsx)(n.p,{children:"However, this is not permitted for fields that contain non-primitive types, such a vector or another\nstruct:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet bar = Bar { foo };\nlet foo2: Foo = *&bar.foo;\nlet foo3: Foo = bar.foo; // error! must add an explicit copy with *&\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The reason behind this design decision is that copying a vector or another struct might be an\nexpensive operation. It is important for a programmer to be aware of this copy and make others aware\nwith the explicit syntax ",(0,t.jsx)(n.code,{children:"*&"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"In addition, reading from fields, the dot syntax can be used to modify fields, regardless of the\nfield being a primitive type or some other struct."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nfoo.x = 42;     // foo = Foo { x: 42, y: true }\nfoo.y = !foo.y; // foo = Foo { x: 42, y: false }\nlet bar = Bar { foo };            // bar = Bar { foo: Foo { x: 42, y: false } }\nbar.foo.x = 52;                   // bar = Bar { foo: Foo { x: 52, y: false } }\nbar.foo = Foo { x: 62, y: true }; // bar = Bar { foo: Foo { x: 62, y: true } }\n"})}),"\n",(0,t.jsx)(n.p,{children:"The dot syntax also works via a reference to a struct:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"let foo = Foo { x: 3, y: true };\nlet foo_ref = &mut foo;\nfoo_ref.x = foo_ref.x + 1;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"privileged-struct-operations",children:"Privileged Struct Operations"}),"\n",(0,t.jsxs)(n.p,{children:["Most struct operations on a struct type ",(0,t.jsx)(n.code,{children:"T"})," can only be performed inside the module that declares\n",(0,t.jsx)(n.code,{children:"T"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Struct types can only be created ("packed"), destroyed ("unpacked") inside the module that defines\nthe struct.'}),"\n",(0,t.jsx)(n.li,{children:"The fields of a struct are only accessible inside the module that defines the struct."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Following these rules, if you want to modify your struct outside the module, you will need to\nprovide public APIs for them. The end of the chapter contains some examples of this."}),"\n",(0,t.jsxs)(n.p,{children:["However, struct ",(0,t.jsx)(n.em,{children:"types"})," are always visible to another module or script:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"// m.move\naddress 0x2 {\nmodule m {\n    struct Foo has drop { x: u64 }\n\n    public fun new_foo(): Foo {\n        Foo { x: 42 }\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"// n.move\naddress 0x2 {\nmodule n {\n    use 0x2::m;\n\n    struct Wrapper has drop {\n        foo: m::Foo\n    }\n\n    fun f1(foo: m::Foo) {\n        let x = foo.x;\n        //      ^ error! cannot access fields of `foo` here\n    }\n\n    fun f2() {\n        let foo_wrapper = Wrapper { foo: m::new_foo() };\n    }\n}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note that structs do not have visibility modifiers (e.g., ",(0,t.jsx)(n.code,{children:"public"})," or ",(0,t.jsx)(n.code,{children:"private"}),")."]}),"\n",(0,t.jsx)(n.h2,{id:"ownership",children:"Ownership"}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned above in ",(0,t.jsx)(n.a,{href:"#defining-structs",children:"Defining Structs"}),", structs are by default linear and\nephemeral. This means they cannot be copied or dropped. This property can be very useful when\nmodeling real world resources like money, as you do not want money to be duplicated or get lost in\ncirculation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo { x: u64 }\n\n    public fun copying_resource() {\n        let foo = Foo { x: 100 };\n        let foo_copy = copy foo; // error! 'copy'-ing requires the 'copy' ability\n        let foo_ref = &foo;\n        let another_copy = *foo_ref // error! dereference requires the 'copy' ability\n    }\n\n    public fun destroying_resource1() {\n        let foo = Foo { x: 100 };\n\n        // error! when the function returns, foo still contains a value.\n        // This destruction requires the 'drop' ability\n    }\n\n    public fun destroying_resource2(f: &mut Foo) {\n        *f = Foo { x: 100 } // error!\n                            // destroying the old value via a write requires the 'drop' ability\n    }\n}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To fix the second example (",(0,t.jsx)(n.code,{children:"fun destroying_resource1"}),'), you would need to manually "unpack" the\nresource:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo { x: u64 }\n\n    public fun destroying_resource1_fixed() {\n        let foo = Foo { x: 100 };\n        let Foo { x: _ } = foo;\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Recall that you are only able to deconstruct a resource within the module in which it is defined.\nThis can be leveraged to enforce certain invariants in a system, for example, conservation of money."}),"\n",(0,t.jsxs)(n.p,{children:["If on the other hand, your struct does not represent something valuable, you can add the abilities\n",(0,t.jsx)(n.code,{children:"copy"})," and ",(0,t.jsx)(n.code,{children:"drop"})," to get a struct value that might feel more familiar from other programming\nlanguages:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    struct Foo has copy, drop { x: u64 }\n\n    public fun run() {\n        let foo = Foo { x: 100 };\n        let foo_copy = copy foo;\n        // ^ this code copies foo, whereas `let x = foo` or\n        // `let x = move foo` both move foo\n\n        let x = foo.x;            // x = 100\n        let x_copy = foo_copy.x;  // x = 100\n\n        // both foo and foo_copy are implicitly discarded when the function returns\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"storing-resources-in-global-storage",children:"Storing Resources in Global Storage"}),"\n",(0,t.jsxs)(n.p,{children:["Only structs with the ",(0,t.jsx)(n.code,{children:"key"})," ability can be saved directly in\n",(0,t.jsx)(n.a,{href:"/move/book/global-storage-operators",children:"persistent global storage"}),". All values stored within those ",(0,t.jsx)(n.code,{children:"key"}),"\nstructs must have the ",(0,t.jsx)(n.code,{children:"store"})," ability. See the ",(0,t.jsx)(n.a,{href:"./abilities",children:"ability"})," and\n",(0,t.jsx)(n.a,{href:"/move/book/global-storage-operators",children:"global storage"})," chapters for more detail."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.p,{children:["Here are two short examples of how you might use structs to represent valuable data (in the case of\n",(0,t.jsx)(n.code,{children:"Coin"}),") or more classical data (in the case of ",(0,t.jsx)(n.code,{children:"Point"})," and ",(0,t.jsx)(n.code,{children:"Circle"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"example-1-coin",children:"Example 1: Coin"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule m {\n    // We do not want the Coin to be copied because that would be duplicating this \"money\",\n    // so we do not give the struct the 'copy' ability.\n    // Similarly, we do not want programmers to destroy coins, so we do not give the struct the\n    // 'drop' ability.\n    // However, we *want* users of the modules to be able to store this coin in persistent global\n    // storage, so we grant the struct the 'store' ability. This struct will only be inside of\n    // other resources inside of global storage, so we do not give the struct the 'key' ability.\n    struct Coin has store {\n        value: u64,\n    }\n\n    public fun mint(value: u64): Coin {\n        // You would want to gate this function with some form of access control to prevent\n        // anyone using this module from minting an infinite amount of coins.\n        Coin { value }\n    }\n\n    public fun withdraw(coin: &mut Coin, amount: u64): Coin {\n        assert!(coin.balance >= amount, 1000);\n        coin.value = coin.value - amount;\n        Coin { value: amount }\n    }\n\n    public fun deposit(coin: &mut Coin, other: Coin) {\n        let Coin { value } = other;\n        coin.value = coin.value + value;\n    }\n\n    public fun split(coin: Coin, amount: u64): (Coin, Coin) {\n        let other = withdraw(&mut coin, amount);\n        (coin, other)\n    }\n\n    public fun merge(coin1: Coin, coin2: Coin): Coin {\n        deposit(&mut coin1, coin2);\n        coin1\n    }\n\n    public fun destroy_zero(coin: Coin) {\n        let Coin { value } = coin;\n        assert!(value == 0, 1001);\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example-2-geometry",children:"Example 2: Geometry"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule point {\n    struct Point has copy, drop, store {\n        x: u64,\n        y: u64,\n    }\n\n    public fun new(x: u64, y: u64): Point {\n        Point {\n            x, y\n        }\n    }\n\n    public fun x(p: &Point): u64 {\n        p.x\n    }\n\n    public fun y(p: &Point): u64 {\n        p.y\n    }\n\n    fun abs_sub(a: u64, b: u64): u64 {\n        if (a < b) {\n            b - a\n        }\n        else {\n            a - b\n        }\n    }\n\n    public fun dist_squared(p1: &Point, p2: &Point): u64 {\n        let dx = abs_sub(p1.x, p2.x);\n        let dy = abs_sub(p1.y, p2.y);\n        dx*dx + dy*dy\n    }\n}\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-move",children:"address 0x2 {\nmodule circle {\n    use 0x2::point::{Self, Point};\n\n    struct Circle has copy, drop, store {\n        center: Point,\n        radius: u64,\n    }\n\n    public fun new(center: Point, radius: u64): Circle {\n        Circle { center, radius }\n    }\n\n    public fun overlaps(c1: &Circle, c2: &Circle): bool {\n        let dist_squared_value = point::dist_squared(&c1.center, &c2.center);\n        let r1 = c1.radius;\n        let r2 = c2.radius;\n        dist_squared_value <= r1*r1 + 2*r1*r2 + r2*r2\n    }\n}\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},83581:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var t=o(11855);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);