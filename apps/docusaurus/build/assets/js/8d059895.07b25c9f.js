"use strict";(self.webpackChunkaptos_docs=self.webpackChunkaptos_docs||[]).push([[2835],{22862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=n(63159),a=n(83581);const i={title:"2. Set up React App",id:"set-up-react-app"},r="2. Set up React App",l={id:"tutorials/build-e2e-dapp/set-up-react-app",title:"2. Set up React App",description:"This is the second chapter of the tutorial on building an end-to-end dapp on Aptos where you have already created a smart contract and are now setting up a React app.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/build-e2e-dapp/2-set-up-react-app.md",sourceDirName:"tutorials/build-e2e-dapp",slug:"/tutorials/build-e2e-dapp/set-up-react-app",permalink:"/tutorials/build-e2e-dapp/set-up-react-app",draft:!1,unlisted:!1,editUrl:"https://github.com/aptos-labs/developer-docs/edit/main/apps/docusaurus/docs/tutorials/build-e2e-dapp/2-set-up-react-app.md",tags:[],version:"current",lastUpdatedAt:1713535793,formattedLastUpdatedAt:"2024\u5e744\u670819\u65e5",sidebarPosition:2,frontMatter:{title:"2. Set up React App",id:"set-up-react-app"},sidebar:"appSidebar",previous:{title:"1. Create a Smart Contract",permalink:"/tutorials/build-e2e-dapp/create-a-smart-contract"},next:{title:"3. Add Wallet Support",permalink:"/tutorials/build-e2e-dapp/add-wallet-support"}},d={},c=[{value:"Set up the app",id:"set-up-the-app",level:2},{value:"Our dapp UI",id:"our-dapp-ui",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"2-set-up-react-app",children:"2. Set up React App"}),"\n",(0,s.jsxs)(t.p,{children:["This is the second chapter of the tutorial on ",(0,s.jsx)(t.a,{href:"/tutorials/build-e2e-dapp/e2e-dapp-index",children:"building an end-to-end dapp on Aptos"})," where you have already ",(0,s.jsx)(t.a,{href:"/tutorials/build-e2e-dapp/create-a-smart-contract",children:"created a smart contract"})," and are now setting up a React app."]}),"\n",(0,s.jsx)(t.h2,{id:"set-up-the-app",children:"Set up the app"}),"\n",(0,s.jsxs)(t.p,{children:["We will use the ",(0,s.jsx)(t.code,{children:"react"})," library to build the client side with ",(0,s.jsx)(t.a,{href:"https://create-react-app.dev/docs/getting-started#creating-an-app",children:"Create React App"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For the UI, we will use ",(0,s.jsx)(t.a,{href:"https://ant.design/",children:"Ant Design"}),". This is just a personal decision; you are welcome to use any different UI library/framework you wish."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In the root folder of the ",(0,s.jsx)(t.code,{children:"my-first-dapp"})," project, run:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx create-react-app client --template typescript\n"})}),"\n",(0,s.jsxs)(t.p,{children:["That will create a new ",(0,s.jsx)(t.code,{children:"client"})," folder in the current path:"]}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Your file structure should look something like:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"client-folder",src:n(1404).A+"",width:"586",height:"190"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run: ",(0,s.jsx)(t.code,{children:"cd client"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Run: ",(0,s.jsx)(t.code,{children:"npm start"})]}),"\n",(0,s.jsxs)(t.p,{children:["At this point you should have your app running on ",(0,s.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),", which displays the default React layout."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.code,{children:"client/src"})," directory, find all the React app files. Let\u2019s clean it up a bit."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Open the ",(0,s.jsx)(t.code,{children:"App.tsx"})," file and update its content to be:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"function App() {\n  return <div>My app goes here</div>;\n}\n\nexport default App;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you save the changes, you should see that the app content has changed in the browser and displays ",(0,s.jsx)(t.code,{children:"My app goes here"}),"."]}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.code,{children:"App.tsx"})," file and remove the ",(0,s.jsx)(t.code,{children:"import './App.css';"})," and ",(0,s.jsx)(t.code,{children:"import logo from './logo.svg';"})," lines. Since we remove the default imports on this file, we can remove some files in our project. Delete the files ",(0,s.jsx)(t.code,{children:"App.css"})," and ",(0,s.jsx)(t.code,{children:"logo.svg"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Open the ",(0,s.jsx)(t.code,{children:"index.tsx"})," file and remove the ",(0,s.jsx)(t.code,{children:"import './index.css';"})," line at the top of the file.\nNow you can also delete the ",(0,s.jsx)(t.code,{children:"src/index.css"})," file."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"our-dapp-ui",children:"Our dapp UI"}),"\n",(0,s.jsx)(t.p,{children:"First we will build the dapp UI layout. We have two UI states for the app:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"When an account hasn't created a list yet (on the left)."}),"\n",(0,s.jsxs)(t.li,{children:["When an account has created a list and can now add tasks to it (on the right).\n",(0,s.jsx)(t.img,{alt:"dapp-ui",src:n(18917).A+"",width:"2124",height:"984"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We will use the ",(0,s.jsx)(t.a,{href:"https://ant.design/",children:"Ant Design"})," library for our UI:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Stop the local server if running."}),"\n",(0,s.jsxs)(t.li,{children:["On to the ",(0,s.jsx)(t.code,{children:"client"})," directory and install our UI library package: ",(0,s.jsx)(t.code,{children:"npm i antd@5.1.4"})]}),"\n",(0,s.jsxs)(t.li,{children:["Update ",(0,s.jsx)(t.code,{children:"App.tsx"})," with the initial state UI:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'return (\n  <>\n    <Layout>\n      <Row align="middle">\n        <Col span={10} offset={2}>\n          <h1>Our todolist</h1>\n        </Col>\n        <Col span={12} style={{ textAlign: "right", paddingRight: "200px" }}>\n          <h1>Connect Wallet</h1>\n        </Col>\n      </Row>\n    </Layout>\n  </>\n);\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["Don't forget to import the ",(0,s.jsx)(t.em,{children:"components"})," we just added:"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'import { Layout, Row, Col } from "antd";\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsxs)(t.li,{children:["Run the local server with ",(0,s.jsx)(t.code,{children:"npm start"}),", you should see the ",(0,s.jsx)(t.em,{children:"header"})," that matches our UI mockup."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["It is now time to ",(0,s.jsx)(t.a,{href:"/tutorials/build-e2e-dapp/add-wallet-support",children:"add wallet support"})," in chapter 3."]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1404:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/build-e2e-dapp-img-2-192235cad91dd904e4a114a7690d7f1f.png"},18917:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/build-e2e-dapp-img-3-4c39d270f2b788de062ca26db99610f7.png"},83581:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(11855);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);