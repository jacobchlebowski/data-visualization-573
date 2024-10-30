(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[503],{1210:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seller-page",function(){return l(4285)}])},4285:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return a}});var s=l(5893);l(7294),l(8828);let i=l(7066).Z.create({baseURL:"https://0sy7wxlvx0.execute-api.us-east-2.amazonaws.com/AuctionHouse"});function a(){let e=e=>{let t={sellerUsername:document.getElementById("sellerUsername").innerText};console.log("Sending data:",t),i.post("/closeAccountSeller",t).then(function(e){400===e.data.statusCode?alert(e.data.error):200===e.data.statusCode&&(alert("Account successfully closed"),location.reload())}).catch(function(e){alert("Failed")})};return(0,s.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,s.jsx)("div",{className:"sellerUsername",children:(0,s.jsx)("label",{id:"sellerUsername",children:"test"})}),(0,s.jsxs)("div",{className:"addItemForm",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Upload image: "}),(0,s.jsx)("input",{className:"addItem-uploadImageInput",type:"text",placeholder:"image url"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Item Name: "}),(0,s.jsx)("input",{className:"addItem-itemNameInput",type:"text",placeholder:"item name"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Description: "}),(0,s.jsx)("input",{className:"addItem-descriptionInput",type:"text",placeholder:"description"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Initial Price: "}),(0,s.jsx)("input",{className:"addItem-initialPriceInput",type:"text",placeholder:"initial price"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Start Date: "}),(0,s.jsx)("input",{className:"addItem-startDateInput",type:"date",placeholder:"start date"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"End Date: "}),(0,s.jsx)("input",{className:"addItem-endDateInput",type:"date",placeholder:"end date"})]}),(0,s.jsx)("div",{className:"addItemButtonDiv",children:(0,s.jsx)("button",{className:"addItemButton",onClick:e=>{document.querySelector(".addItem-itemNameInput").value,document.querySelector(".addItem-uploadImageInput").value,document.querySelector(".addItem-descriptionInput").value,document.querySelector(".addItem-initialPriceInput").value,document.querySelector(".addItem-startDateInput").value,document.querySelector(".addItem-endDateInput").value},children:"Add item"})})]}),(0,s.jsxs)("div",{className:"editItemForm",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Item ID: "}),(0,s.jsx)("input",{className:"editItem-itemID",type:"text",placeholder:"item id"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Upload image: "}),(0,s.jsx)("input",{className:"editItem-uploadImageInput",type:"text",placeholder:"image url"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Item Name: "}),(0,s.jsx)("input",{className:"editItem-itemNameInput",type:"text",placeholder:"item name"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Description: "}),(0,s.jsx)("input",{className:"editItem-descriptionInput",type:"text",placeholder:"description"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Initial Price: "}),(0,s.jsx)("input",{className:"editItem-initialPriceInput",type:"text",placeholder:"initial price"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"Start Date: "}),(0,s.jsx)("input",{className:"editItem-startDateInput",type:"date",placeholder:"start date"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{children:"End Date: "}),(0,s.jsx)("input",{className:"editItem-endDateInput",type:"date",placeholder:"end date"})]}),(0,s.jsx)("div",{className:"editItemButtonDiv",children:(0,s.jsx)("button",{className:"editItemButton",children:"Edit item"})})]}),(0,s.jsxs)("div",{className:"sellerBalance",children:["Seller balance: $1000",(0,s.jsx)("button",{className:"closeAccountButton",onClick:t=>e(t),children:"Close Account"})]}),(0,s.jsx)("div",{className:"sellerItems",children:(0,s.jsx)("label",{children:"Items: "})}),(0,s.jsxs)("div",{className:"itemCard",children:[(0,s.jsx)("div",{className:"itemName",children:(0,s.jsx)("label",{children:"Item 1"})}),(0,s.jsxs)("div",{className:"itemCardleft",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{className:"itemImage",src:"https://play-lh.googleusercontent.com/27O5tpaYE82W6m30rJ_MX3-UvshlDM6O8oXDxb6GseYW2T7P8UNT19727MGmz-0q3w"})}),(0,s.jsx)("div",{children:(0,s.jsx)("label",{className:"itemStatus",children:"Status"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"archiveItem",children:"Archive"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"fulfillItem",children:"Fulfill"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"removeItem",children:"Remove"})})]}),(0,s.jsxs)("div",{className:"itemCardRight",children:[(0,s.jsx)("div",{children:(0,s.jsx)("label",{className:"itemPrice",children:"Price"})}),(0,s.jsx)("div",{children:(0,s.jsx)("label",{className:"itemDescription",children:"description"})}),(0,s.jsx)("div",{children:(0,s.jsx)("label",{className:"itemID",children:"Item ID:"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"itemPublishButton",children:"Publish"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"itemUnpublishButton",children:"Unpublish"})}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{className:"requestUnfreezeButton",children:"Request Unfreeze"})})]})]})]})}},8828:function(){}},function(e){e.O(0,[66,888,774,179],function(){return e(e.s=1210)}),_N_E=e.O()}]);