"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[2978],{10075:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(63159),r=t(83581);const i={title:"IndexerClient Class",slug:"typescript-sdk-indexer-client-class"},a=void 0,c={id:"sdks/legacy-ts-sdk/indexer-client",title:"IndexerClient Class",description:"The IndexerClient is responsible for handling the communication between the client-side application and the blockchain network. It uses the Hasura framework to generate a set of GraphQL queries that can be used to retrieve data from the blockchain. The queries are optimized for performance and can retrieve data in real-time.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/sdks/legacy-ts-sdk/indexer-client.md",sourceDirName:"sdks/legacy-ts-sdk",slug:"/sdks/legacy-ts-sdk/typescript-sdk-indexer-client-class",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-indexer-client-class",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/sdks/legacy-ts-sdk/indexer-client.md",tags:[],version:"current",lastUpdatedAt:1713276994,formattedLastUpdatedAt:"2024\u5e744\u670816\u65e5",frontMatter:{title:"IndexerClient Class",slug:"typescript-sdk-indexer-client-class"},sidebar:"appSidebar",previous:{title:"AptosClient Class",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-aptos-client-class"},next:{title:"Core Layer",permalink:"/sdks/legacy-ts-sdk/typescript-sdk-core-layer"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Make API fetch calls",id:"make-api-fetch-calls",level:2},{value:"Use custom queries",id:"use-custom-queries",level:2},{value:"Generate queries",id:"generate-queries",level:2},{value:"Write an Indexer query",id:"write-an-indexer-query",level:3},{value:"Generate TypeScript queries",id:"generate-typescript-queries",level:3},{value:"SDK GraphQL configuration file",id:"sdk-graphql-configuration-file",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/providers/indexer.ts",children:"IndexerClient"})," is responsible for handling the communication between the client-side application and the blockchain network. It uses the ",(0,s.jsx)(n.a,{href:"https://hasura.io/",children:"Hasura framework"})," to generate a set of ",(0,s.jsx)(n.a,{href:"https://cloud.hasura.io/public/graphiql?endpoint=https://api.mainnet.aptoslabs.com/v1/graphql",children:"GraphQL queries"})," that can be used to retrieve data from the blockchain. The queries are optimized for performance and can retrieve data in real-time."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To use the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," class, you will need to create an instance of ",(0,s.jsx)(n.code,{children:"IndexerClient"})," and call the desired API method. The ",(0,s.jsx)(n.code,{children:"IndexerClient"})," object will handle the HTTP requests and responses and return the result to your application."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Before using the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," class, you will need to configure it with the necessary parameters. These parameters may include the Hasura endpoint URL, custom configuration, and any other required settings. You can configure the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," class by passing in the necessary parameters when you initialize the client object."]}),"\n",(0,s.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,s.jsxs)(n.p,{children:["To initialize the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," class, you will need to pass in the necessary configuration parameters. Here is an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { IndexerClient } from "aptos";\n\nconst client = new IndexerClient(\n  "https://api.testnet.aptoslabs.com/v1/graphql",\n);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"make-api-fetch-calls",children:"Make API fetch calls"}),"\n",(0,s.jsxs)(n.p,{children:["To make an API call, you will need to call the appropriate method on the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," object. The method name and parameters will depend on the specific API you are using. Here is an example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const accountNFTs = await client.getAccountNFTs("0x123");\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we are using the ",(0,s.jsx)(n.code,{children:"getAccountNFTs()"})," method to retrieve the NFT of an account with the address ",(0,s.jsx)(n.code,{children:"0x123"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"use-custom-queries",children:"Use custom queries"}),"\n",(0,s.jsx)(n.p,{children:"The TypeScript SDK provides frequently used queries by different users and/or apps and makes sure the queries are well-structured to retrieve the current response."}),"\n",(0,s.jsxs)(n.p,{children:["With that being said, one can structure custom queries and use the SDK to query the Aptos Indexer API. For that, the SDK exports a ",(0,s.jsx)(n.code,{children:"queryIndexer()"})," method that accepts a ",(0,s.jsx)(n.code,{children:"GraphqlQuery"})," type argument. The ",(0,s.jsx)(n.code,{children:"GraphqlQuery"})," type has a ",(0,s.jsx)(n.code,{children:"query"})," field of type ",(0,s.jsx)(n.code,{children:"string"})," and an optional ",(0,s.jsx)(n.code,{children:"variable"})," field of an ",(0,s.jsx)(n.code,{children:"object"})," type."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is the ",(0,s.jsx)(n.code,{children:"GraphqlQuery"})," type definition."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type GraphqlQuery = {\n  query: string;\n  variables?: {};\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To use the ",(0,s.jsx)(n.code,{children:"queryIndexer()"})," method, one should pass the GraphQL query. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const query: string = `query getAccountTokensCount($owner_address: String) {\n  current_token_ownerships_aggregate(where: { owner_address: { _eq: $owner_address }, amount: { _gt: "0" } }) {\n    aggregate {\n      count\n    }\n  }\n}`;\nconst variables = { owner_address: "0x123" };\nconst graphqlQuery = { query, variables };\nconst accountTokensCount = await client.queryIndexer(graphqlQuery);\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Be aware that it queries the network endpoint you passed in when initializing the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," class."]})}),"\n",(0,s.jsx)(n.h2,{id:"generate-queries",children:"Generate queries"}),"\n",(0,s.jsxs)(n.p,{children:["To generate an Indexer query that can be used within the SDK, we can write a GraphQL query (based on the ",(0,s.jsx)(n.a,{href:"https://cloud.hasura.io/public/graphiql?endpoint=https://api.mainnet.aptoslabs.com/v1/graphql",children:"Indexer schema"}),") and use the SDK to generate a TypeScript query."]}),"\n",(0,s.jsx)(n.h3,{id:"write-an-indexer-query",children:"Write an Indexer query"}),"\n",(0,s.jsxs)(n.p,{children:["All Indexer queries, which are basically GraphQL queries, live under the ",(0,s.jsx)(n.code,{children:"src/indexer/queries/"})," folder. In this folder, we create a ",(0,s.jsx)(n.code,{children:".graphql"})," file for each query we want the SDK to support. For example, a ",(0,s.jsx)(n.code,{children:".graphql"})," file with a GraphQL query can be:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-graphql",children:'query getAccountTokensCount($owner_address: String) {\n  current_token_ownerships_aggregate(\n    where: { owner_address: { _eq: $owner_address }, amount: { _gt: "0" } }\n  ) {\n    aggregate {\n      count\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"generate-typescript-queries",children:"Generate TypeScript queries"}),"\n",(0,s.jsxs)(n.p,{children:["Once we have created a ",(0,s.jsx)(n.code,{children:".graphql"})," file with a GraphQL query, we can generate TypeScript code based on that query, so we can use it with the TypeScript SDK by running the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:"pnpm run indexer-codegen\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That command runs the ",(0,s.jsx)(n.code,{children:"graphql-codegen"})," command that generates code from the Indexer GraphQL schema based on the SDK configuration file."]}),"\n",(0,s.jsx)(n.h3,{id:"sdk-graphql-configuration-file",children:"SDK GraphQL configuration file"}),"\n",(0,s.jsxs)(n.p,{children:["The TypeScript SDK uses a configuration file for ",(0,s.jsx)(n.a,{href:"https://the-guild.dev/graphql/codegen",children:"@graphql-codegen"}),", a code generation tool for GraphQL."]}),"\n",(0,s.jsxs)(n.p,{children:["The SDK ",(0,s.jsx)(n.a,{href:"https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/indexer/codegen.yml",children:"configuration file"})," defines how ",(0,s.jsx)(n.code,{children:"@graphql-codegen"})," should generate TypeScript code from a GraphQL schema and queries. Let's break down some of the key elements of this file:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"schema"})," \u2013 Specifies the location of the GraphQL schema file that ",(0,s.jsx)(n.code,{children:"@graphql-codegen"})," should use for code generation. In this case, it is using the Aptos Indexer ",(0,s.jsx)(n.code,{children:"mainnet"})," schema."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"documents"})," - Specifies the location of the GraphQL operation files that ",(0,s.jsx)(n.code,{children:"@graphql-codegen"})," should use for code generation. In this case, it is using the ",(0,s.jsx)(n.code,{children:"src/indexer/queries/"})," location (as mentioned in the previous section) and includes all files with the ",(0,s.jsx)(n.code,{children:".graphql"})," extension."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"generates"})," \u2013 Defines the output files that ",(0,s.jsx)(n.code,{children:"@graphql-codegen"})," should generate based on the schema and operations. In this case, it is generating the types, operations and queries."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"plugins"})," \u2013 Specifies the plugins that ",(0,s.jsx)(n.code,{children:"@graphql-codegen"})," should use for code generation. In this case, it is using the ",(0,s.jsx)(n.code,{children:"typescript"})," plugin to generate TypeScript typings from the GraphQL schema, ",(0,s.jsx)(n.code,{children:"typescript-operations"})," plugin to generate TypeScript typings for GraphQL operations and ",(0,s.jsx)(n.code,{children:"typescript-graphql-request"})," plugin to generate function for making GraphQL requests ."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can use the ",(0,s.jsx)(n.code,{children:"IndexerClient"})," class directly or the ",(0,s.jsx)(n.a,{href:"/sdks/legacy-ts-sdk/typescript-sdk-client-layer",children:"Provider"})," class (preferred)."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},83581:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(11855);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);