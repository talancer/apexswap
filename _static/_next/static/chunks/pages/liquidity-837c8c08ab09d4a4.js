(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7385],{42886:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/liquidity",function(){return n(54631)}])},97830:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),i=n(67294),a=n(5152),s=n.n(a),l=n(95421),o=n(57592),d=n(94184),c=n.n(d),x=n(2248),u=n(64638),m=n(86538),h=n(60217);function f(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=s()((function(){return n.e(9336).then(n.bind(n,89336))}),{loadableGenerated:{webpack:function(){return[89336]}}}),g=/^[0-9]*[.,]?[0-9]*$/;function v(e){var t,n,a=e.label,s=e.isInbox,d=void 0!==s&&s,v=e.onToggleTokens,b=e.showvalue,j=e.tokenBalance,y=e.onChangeTokenIndex,w=e.onchangeAmount,N=(e.data,e.defaultValue),k=void 0===N?0:N,Z=e.coinIndex,C=void 0===Z?0:Z,E=(e.usdPrice,f(e,["label","isInbox","onToggleTokens","showvalue","tokenBalance","onChangeTokenIndex","onchangeAmount","data","defaultValue","coinIndex","usdPrice"]),(0,i.useContext)(h.o)),F=E.coinslist,I=(E.getCoinDecimals,E.getCoinName,(0,i.useState)(k)),_=I[0],z=I[1],T=(0,i.useState)(F[C]),O=T[0],B=T[1],D=(0,i.useState)(!1),P=D[0],A=D[1],R=(0,i.useRef)(null);(0,u.Z)(R,(function(){A(!1)})),(0,m.N)(P);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:" block min-h-[70px] rounded-t-[10px] px-4 transition-colors duration-200 dark:bg-[#4910BA]",children:[(0,r.jsxs)("div",{className:"mt-0.5 mb-0.5 flex min-h-[10px] flex-row justify-between",children:[(0,r.jsxs)("span",{className:"mt-2 mb-0.5 block min-h-[10px] text-xs text-gray-600 dark:text-white",children:[a," "]}),d?(0,r.jsxs)("div",{className:"flex flex-row gap-1",children:[(0,r.jsx)("div",{className:"mt-2 mb-0.5 block min-h-[10px] border-b border-b-white text-right text-xs text-gray-600 dark:text-white",style:{cursor:"pointer"},onClick:function(){z(j/2),w(j/2)},children:"50%"}),(0,r.jsx)("div",{className:"mt-2 mb-0.5 block min-h-[10px] border-b border-b-white text-right text-xs text-gray-600 dark:text-white",style:{cursor:"pointer"},onClick:function(){z(j),w(j)},children:"Max"})]}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsxs)("div",{className:"flex min-h-[60px] flex-row items-center justify-between",children:[(0,r.jsxs)("button",{onClick:function(){return A(!0)},className:"flex min-w-[80px] items-center font-medium outline-none dark:text-gray-100",children:[v?null===(t=F[C])||void 0===t?void 0:t.icon2:null===O||void 0===O?void 0:O.icon2," ",(0,r.jsx)("span",{className:"ltr:ml-2 rtl:mr-2",children:v?null===(n=F[C])||void 0===n?void 0:n.code:null===O||void 0===O?void 0:O.code}),(0,r.jsx)(x._,{className:"ltr:ml-1.5 rtl:mr-1.5"})]}),(0,r.jsx)("input",{type:"text",value:d?_:null===b||void 0===b?void 0:b.toFixed(6),placeholder:"0.0",inputMode:"decimal",onChange:function(e){if(e.target.value.match(g)){z(e.target.value);O.code,e.target.value;w(e.target.value)}},className:c()("h-[23px] w-1/2 rounded-[10px] border-0 px-4 text-right outline-none dark:bg-[#000B2F]/10 dark:focus:ring-0")})]})]}),(0,r.jsx)("div",{className:"py-auto block min-h-[28px] rounded-b-[10px] px-4 dark:bg-[#FFFFFF]",children:(0,r.jsxs)("div",{className:"mb-1 flex flex-row justify-between",children:[(0,r.jsxs)("span",{className:"mt-1 text-black primary-font-family font-size-10 font-weight-500",children:["Balance: ",null===j||void 0===j?void 0:j.toFixed(6)]}),(0,r.jsx)("div",{className:"font-xs mt-1 text-right text-black primary-font-family font-size-10 font-weight-500",children:d&&j>0?"".concat(Number(_/j*100).toFixed(3),"%"):d?"---":""})]})})]}),(0,r.jsx)(l.M,{children:P&&(0,r.jsxs)(o.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:"fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-gray-700 bg-opacity-60 p-4 text-center backdrop-blur xs:p-5",children:[(0,r.jsx)("span",{className:"inline-block h-full align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(o.E.div,{initial:{scale:1.05},animate:{scale:1},exit:{scale:1.05},transition:{duration:.3},ref:R,className:"inline-block text-left align-middle",children:(0,r.jsx)(p,{onSelect:function(e){return function(e){B(e);var t=F.findIndex((function(t){return t.address==e.address}));y(t),A(!1)}(e)},onClose:function(){A(!1)}})})]})})]})}v.displayName="CoinInput"},59988:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),i=n(94184),a=n.n(i);function s(e){var t=e.label,n=e.value,i=e.className;return(0,r.jsxs)("div",{className:a()("flex items-center justify-between dark:text-gray-300",i),children:[(0,r.jsx)("span",{className:"font-medium primary-font-family font-size-10",children:t}),(0,r.jsx)("span",{className:"primary-font-family font-size-10",children:n||"_ _"})]})}},11258:function(e,t,n){"use strict";n.r(t),n.d(t,{MenuItems:function(){return g},default:function(){return v}});var r=n(85893),i=n(67294),a=n(31374),s=n(94261),l=n(72510),o=n(11355),d=n(48785),c=n(90305),x=n(79016),u=n(80275),m=n(2248),h=n(75364),f=n(67109),p=n(19502);function g(){return(0,r.jsx)("div",{className:"flex items-center xl:px-10 2xl:px-14 3xl:px-16 primary-font-family",children:p.menuItems.map((function(e,t){return(0,r.jsx)(r.Fragment,{children:(null===e||void 0===e?void 0:e.dropdownItems)?(0,r.jsx)("div",{className:"relative mx-4 first:ml-0 last:mr-0",children:(0,r.jsxs)(l.v,{children:[(0,r.jsxs)(l.v.Button,{className:"flex items-center text-xs font-medium text-white transition hover:text-[#FEB58D] focus:text-[#FEB58D]",children:[(0,r.jsx)("span",{className:"font-size-14 font-weight-600",children:e.name}),(0,r.jsx)("span",{className:"z-[1] transition-transform duration-200 ltr:ml-3 rtl:mr-3",children:(0,r.jsx)(m._,{})})]}),(0,r.jsx)(o.u,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4",enterTo:"opacity-100 translate-y-0",leave:"ease-in duration-300",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-4",children:(0,r.jsx)(l.v.Items,{className:"absolute left-0 mt-5 w-32 origin-top-right rounded-lg bg-white shadow-large dark:bg-gray-800",children:e.dropdownItems.map((function(e,t){return(0,r.jsx)(l.v.Item,{children:(0,r.jsx)(d.Z,{href:e.href,className:"block rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700",activeClassName:"!bg-gray-100 dark:!bg-light-dark my-1 last:mb-0 first:mt-0",children:e.name})},t)}))})})]})},t):(0,r.jsx)(d.Z,{href:e.href,className:"mx-4 text-base text-white transition first:ml-0 last:mr-0 hover:text-[#FEB58D] focus:text-[#FEB58D] font-size-14 font-weight-600",activeClassName:"text-gray-900",children:e.name},t)})}))})}function v(){var e=(0,u.y)().closeDrawer;return(0,r.jsxs)("div",{className:"relative w-full max-w-full bg-white dark:bg-dark xs:w-80",children:[(0,r.jsxs)("div",{className:"flex h-24 items-center justify-between overflow-hidden px-6 py-4",children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)("div",{className:"md:hidden",children:(0,r.jsx)(s.Z,{title:"Close",color:"white",shape:"circle",variant:"transparent",size:"small",onClick:e,children:(0,r.jsx)(x.x,{className:"h-auto w-2.5"})})})]}),(0,r.jsx)(c.Z,{style:{height:"calc(100% - 96px)"},children:(0,r.jsx)("div",{className:"px-6 pb-5 2xl:px-8",children:(0,r.jsx)("div",{className:"mt-12",children:p.menuItems.map((function(e,t){return(0,r.jsx)(h.s,{name:e.name,href:e.href,icon:e.icon,dropdownItems:e.dropdownItems},t)}))})})}),(0,r.jsx)("div",{className:"absolute right-0 bottom-4 z-10 px-6",children:(0,r.jsx)(f.Z,{})})]})}},32078:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),i=n(13347),a=n(31374),s="/_next/static/media/background-image.a212d313.png",l=(n(97744),n(48785),n(2097)),o=n(43534),d=n(80275),c=n(36545),x=n(11258),u=n(67109);function m(){(0,o.t)(),(0,l.G)();var e=(0,d.y)();e.openDrawer,e.isOpen;return(0,r.jsx)("div",{className:"order-last flex shrink-0 items-center",children:(0,r.jsx)("div",{className:"hidden gap-2 sm:gap-3 lg:flex lg:gap-4",children:(0,r.jsx)(u.Z,{})})})}function h(){(0,i.Z)();var e=(0,l.G)(),t=(0,o.t)(),n=(0,d.y)(),s=n.openDrawer,u=n.isOpen;return(0,r.jsxs)("nav",{className:"fixed top-0 z-30  flex w-full items-center justify-between px-4 transition-all duration-300 ltr:right-0 rtl:left-0 sm:px-6 lg:px-8 xl:px-10 3xl:px-12 h-12 backdrop-blur dark:bg-opacity-100 sm:h-16",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"hidden lg:mr-6 lg:block xl:hidden",children:(0,r.jsx)(c.Z,{isOpen:u,onClick:function(){return s("DRAWER_MENU")},color:"white",className:"shadow-main dark:border dark:border-solid dark:border-gray-700 dark:bg-red-dark dark:text-white"})}),(0,r.jsx)(a.Z,{}),t&&-1==["xs","sm","md","lg"].indexOf(e)&&(0,r.jsx)(x.MenuItems,{})]}),(0,r.jsx)(m,{})]})}function f(e){var t=e.children;return(0,r.jsxs)("div",{className:"min-w-fit w-full min-h-screen bg-light-100 bg-[#0D0C52] flex flex-col main-bg",style:{backgroundImage:"url(".concat(s,")")},children:[(0,r.jsx)(h,{}),(0,r.jsx)("main",{className:"mx-auto min-w-fit pb-32 pt-16 px-10 sm:pt-24 ",children:t})]})}},2097:function(e,t,n){"use strict";n.d(t,{G:function(){return r}});var r=(0,n(1558).Z)({xs:480,sm:640,md:768,lg:1024,xl:1280,"2xl":1440,"3xl":1780,"4xl":2160})},86538:function(e,t,n){"use strict";n.d(t,{N:function(){return i}});var r=n(67294);function i(e){(0,r.useEffect)((function(){var t=document.documentElement.style.paddingRight,n=window.innerWidth-document.documentElement.clientWidth;return e?(document.documentElement.style.paddingRight="".concat(n,"px"),window.document.documentElement.style.overflow="hidden"):document.documentElement.style.removeProperty("overflow"),function(){document.documentElement.style.paddingRight=t}}),[e])}},54631:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(2962),a=n(32078),s=n(94261),l=n(97830),o=n(59988),d=n(10377),c=n(48785),x=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.PB,{title:"Liquidity",description:"Apexswap - Avalanche DEX"}),(0,r.jsx)("div",{className:"text-sm ",children:(0,r.jsxs)("div",{className:" mt-6 w-full max-w-lg rounded-lg border border-[#374151] bg-white shadow-card dark:bg-[#161b1d] xs:p-4 xs:pt-5",children:[(0,r.jsx)("div",{className:"mb-5 border-b border-dashed border-gray-200 pb-5 dark:border-gray-800 xs:mb-7 xs:pb-6",children:(0,r.jsxs)("div",{className:"relative flex flex-col gap-3",children:[(0,r.jsx)(l.Z,{label:"From",exchangeRate:0,defaultCoinIndex:0,getCoinValue:function(e){return console.log("From coin value:",e)}}),(0,r.jsx)("div",{className:"absolute top-1/2 left-1/2 z-[1] -mt-4 -ml-4 rounded-full bg-white shadow-large dark:bg-gray-600",children:(0,r.jsx)(s.Z,{size:"mini",color:"gray",shape:"circle",variant:"transparent",children:(0,r.jsx)(d.v,{className:"h-auto w-3"})})}),(0,r.jsx)(l.Z,{label:"To",exchangeRate:0,defaultCoinIndex:1,getCoinValue:function(e){return console.log("To coin value:",e)}})]})}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 xs:gap-[18px]",children:[(0,r.jsx)(o.Z,{label:"13.77 eth per btc",value:"0%"}),(0,r.jsx)(o.Z,{label:"0.072631 Btc per ETH",value:"Share of Pool"})]}),(0,r.jsxs)("div",{className:"mt-6 grid grid-cols-2 gap-2.5 xs:mt-8",children:[(0,r.jsx)(c.Z,{href:"/liquidity-position",children:(0,r.jsx)(s.Z,{size:"large",shape:"rounded",fullWidth:!0,className:"uppercase",children:"Approve BTC"})}),(0,r.jsx)(c.Z,{href:"/liquidity-position",children:(0,r.jsx)(s.Z,{size:"large",shape:"rounded",fullWidth:!0,className:"uppercase",children:"Approve ETH"})})]})]})})]})};x.getLayout=function(e){return(0,r.jsx)(a.Z,{children:e})},t.default=x}},function(e){e.O(0,[4268,9774,2888,179],(function(){return t=42886,e(e.s=t);var t}));var t=e.O();_N_E=t}]);