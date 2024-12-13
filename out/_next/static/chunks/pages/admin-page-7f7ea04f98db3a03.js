(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{6763:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-page",function(){return a(9735)}])},9735:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(5893),n=a(7294);a(8477);let l=a(7066).Z.create({baseURL:"https://0sy7wxlvx0.execute-api.us-east-2.amazonaws.com/AuctionHouse"});function d(){let e;let[t,a]=(0,n.useState)([]),[d,i]=(0,n.useState)([]),[r,c]=(0,n.useState)(""),[o,u]=(0,n.useState)(""),[h,m]=(0,n.useState)(""),[x,j]=(0,n.useState)(""),[f,p]=(0,n.useState)(""),b=e=>{l.post("/freezeitemAdmin",{itemID:e}).then(e=>{200===e.data.statusCode?(alert("Item successfully frozen"),a(e.data.data),console.log(e.data.data),g("")):alert(e.data.error)}).catch(()=>alert("Failed to freeze item."))},v=e=>{l.post("/unfreezeitemAdmin",{itemID:e}).then(e=>{200===e.data.statusCode?(alert("Item successfully unfrozen"),a(e.data.data),g("")):alert(e.data.error)}).catch(()=>alert("Failed to unfreeze item."))},g=e=>{let t={username:"admin"};console.log("sending data..."),console.log(t),l.post("/adminPopulateItems",t).then(function(e){400===e.data.statusCode?alert(e.data.error):200===e.data.statusCode&&(console.log(e.data.data),a(e.data.data))}).catch(function(e){alert("Failed")})};return console.log("Sending data:",e={username:"auction"}),l.post("/getBalance",e).then(function(e){400===e.data.statusCode?alert(e.data.error):200===e.data.statusCode&&c(e.data.value)}).catch(function(e){alert("Failed")}),(0,s.jsxs)("div",{className:"page-container",children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,s.jsxs)("div",{style:{flex:1,display:"flex",justifyContent:"space-between"},children:[(0,s.jsx)("div",{className:"adminBalance",children:"admin"}),(0,s.jsx)("div",{id:"adminBalance",className:"adminBalance",children:null!==r?"House Funds: $".concat(Number(r).toFixed(2)):"Loading balance..."}),(0,s.jsxs)("div",{className:"adminItems",children:[(0,s.jsx)("button",{className:"reviewItems",onClick:e=>g(e),children:"Populate Items"}),(0,s.jsx)("label",{children:"Items: "})]}),(0,s.jsx)("div",{className:"itemTable",children:t&&t.length>0?(0,s.jsxs)("table",{className:"items",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Item |"}),(0,s.jsx)("th",{children:"Freeze Item |"}),(0,s.jsx)("th",{children:"Unfreeze Item |"}),(0,s.jsx)("th",{children:"Requested to be unfrozen?"})]})}),(0,s.jsx)("tbody",{children:t.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.itemName}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"freezeItem",disabled:"true"===e.isFrozen,onClick:()=>b(e.id),children:"Freeze Item"})}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"unfreezeItem",disabled:"false"===e.isFrozen,onClick:()=>v(e.id),children:"Unfreeze Item"})}),(0,s.jsx)("td",{children:e.requestUnfreeze})]},t))})]}):(0,s.jsx)("p",{children:"No items to display"})})]}),(0,s.jsx)("div",{className:"report-container",children:(0,s.jsxs)("div",{className:"report-div",children:[(0,s.jsx)("div",{className:"report-title",children:"Report"}),(0,s.jsx)("div",{className:"itemTable",style:{display:"flex",justifyContent:"center"},children:d&&d.length>0?(0,s.jsxs)("table",{className:"items",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Item Name"}),(0,s.jsx)("th",{children:"Profit"}),(0,s.jsx)("th",{children:"Sale Date"}),(0,s.jsx)("th",{children:"Seller"})]})}),(0,s.jsx)("tbody",{children:d.map((e,t)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:e.itemName}),(0,s.jsx)("td",{children:Number(e.price).toFixed(2)}),(0,s.jsx)("td",{children:e.saleDate}),(0,s.jsx)("td",{children:e.seller})]},t))})]}):(0,s.jsx)("p",{children:"No items to display"})})]})})]}),(0,s.jsxs)("div",{className:"bottom-buttons",children:[(0,s.jsx)("button",{className:"button",onClick:()=>{l.post("/generateAuctionReport").then(function(e){console.log(e),400===e.data.statusCode?alert(e.data.error):200===e.data.statusCode?(console.log(e.data.value.balance),c(e.data.value.balance),i(e.data.value.data)):201===e.data.statusCode&&i([])}).catch(function(e){alert("Failed")})},children:"Generate Report"}),(0,s.jsxs)("div",{className:"forensics-filters",children:[(0,s.jsxs)("label",{children:["Start Date:",(0,s.jsx)("input",{type:"datetime-local",value:o,onChange:e=>u(e.target.value)})]}),(0,s.jsxs)("label",{children:["End Date:",(0,s.jsx)("input",{type:"datetime-local",value:h,onChange:e=>m(e.target.value)})]}),(0,s.jsxs)("label",{children:["Min Price:",(0,s.jsx)("input",{type:"number",value:x,onChange:e=>j(e.target.value)})]}),(0,s.jsxs)("label",{children:["Max Price:",(0,s.jsx)("input",{type:"number",value:f,onChange:e=>p(e.target.value)})]})]}),(0,s.jsx)("button",{className:"button",onClick:()=>{let e=""!==o?o:"0000-01-01",t=""!==h?h:"9999-12-31",a=""!==x?x:0,s=""!==f?f:1e8;console.log(e,t,a,s);let n={start:e,end:t,min:a,max:s};console.log(n),l.post("/generateForensicReport",n).then(function(e){console.log(e),400===e.data.statusCode?alert(e.data.error):200===e.data.statusCode?(console.log(e.data.value.balance),i(e.data.value.data)):201===e.data.statusCode&&i([])}).catch(function(e){alert("Failed")})},children:"Generate Forensics Report"})]})]})}},8477:function(){}},function(e){e.O(0,[66,888,774,179],function(){return e(e.s=6763)}),_N_E=e.O()}]);