(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3799],{1573:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/farms-2",function(){return r(68833)}])},58951:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var a=r(85893),n=r(67294),s=r(95421),i=r(57592),l=r(94951),d=r(59988);function c(e){var t=e.from,r=e.to,c=e.earned,o=e.apr,u=e.liquidity,x=e.multiplier,m=e.children,p=(0,n.useState)(!1),f=p[0],g=p[1],h=t,y=r;return(0,a.jsxs)("div",{className:"relative mb-3 overflow-hidden rounded-lg bg-white shadow-card transition-all last:mb-0 hover:shadow-large dark:bg-light-dark",children:[(0,a.jsxs)("div",{className:"relative grid h-auto cursor-pointer grid-cols-2 items-center gap-3 py-4 sm:h-20 sm:grid-cols-3 sm:gap-6 sm:py-0 lg:grid-cols-5",onClick:function(){return g(!f)},children:[(0,a.jsx)("div",{className:"col-span-2 px-4 sm:col-auto sm:px-8",children:(0,a.jsx)(l.Z,{from:h,to:y})}),(0,a.jsxs)("div",{className:"px-4 text-xs font-medium uppercase tracking-wider text-black dark:text-white sm:px-8 sm:text-sm",children:[(0,a.jsx)("span",{className:"mb-1 block font-medium text-gray-600 dark:text-gray-400 sm:hidden",children:"Earned"}),c]}),(0,a.jsxs)("div",{className:"px-4 text-xs font-medium uppercase tracking-wider text-black dark:text-white sm:px-8 sm:text-sm",children:[(0,a.jsx)("span",{className:"mb-1 block font-medium text-gray-600 dark:text-gray-400 sm:hidden",children:"APR"}),o,(0,a.jsx)("span",{className:"hidden font-normal text-gray-600 dark:text-gray-400 sm:block",children:"Annualized"})]}),(0,a.jsx)("div",{className:"hidden px-4 text-xs font-medium uppercase tracking-wider text-black dark:text-white sm:px-8 sm:text-sm lg:block",children:u}),(0,a.jsx)("div",{className:"hidden px-4 text-xs font-medium uppercase tracking-wider text-black dark:text-white sm:px-8 sm:text-sm lg:block",children:x})]}),(0,a.jsx)(s.M,{initial:!1,children:f&&(0,a.jsx)(i.E.div,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.4,ease:"easeInOut"},children:(0,a.jsxs)("div",{className:"border-t border-dashed border-gray-200 px-4 py-4 dark:border-gray-700 sm:px-8 sm:py-6",children:[(0,a.jsxs)("div",{className:"mb-6 flex items-center justify-center rounded-lg bg-gray-100 p-3 text-center text-xs font-medium uppercase tracking-wider text-gray-900 dark:bg-gray-900 dark:text-white sm:h-13 sm:text-sm",children:["get ",t,"/",r," lp tokens for staking"]}),(0,a.jsx)("div",{className:"mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:hidden",children:(0,a.jsxs)("div",{className:"flex flex-col gap-3 sm:gap-4",children:[(0,a.jsx)(d.Z,{label:"Liquidity:",value:u,className:"text-xs sm:text-sm"}),(0,a.jsx)(d.Z,{label:"Multiplier:",value:x,className:"text-xs sm:text-sm"})]})}),m]})},"content")})]})}},59988:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var a=r(85893),n=r(94184),s=r.n(n);function i(e){var t=e.label,r=e.value,n=e.className;return(0,a.jsxs)("div",{className:s()("flex items-center justify-between dark:text-gray-300",n),children:[(0,a.jsx)("span",{className:"font-medium primary-font-family font-size-10",children:t}),(0,a.jsx)("span",{className:"primary-font-family font-size-10",children:r||"_ _"})]})}},49845:function(e,t,r){"use strict";r.d(t,{I:function(){return a}});var a=[{id:1,from:"BTC",to:"ETH",earned:"0",apr:"29.72%",liquidity:"$232,941,720",multiplier:"40x"},{id:2,from:"USDT",to:"BNB",earned:"0",apr:"25.20%",liquidity:"$132,941,720",multiplier:"10x"},{id:3,from:"USDC",to:"DOGE",earned:"0",apr:"33.73%",liquidity:"$332,941,720",multiplier:"22x"},{id:4,from:"BTC",to:"ADA",earned:"0",apr:"10.73%",liquidity:"$232,941,720",multiplier:"20x"},{id:5,from:"BNB",to:"USDC",earned:"0",apr:"20.73%",liquidity:"$132,941,720",multiplier:"34x"},{id:6,from:"ETH",to:"ADA",earned:"0",apr:"20.73%",liquidity:"$132,941,720",multiplier:"34x"}]},68833:function(e,t,r){"use strict";r.r(t);var a=r(85893),n=r(67294),s=r(2962),i=r(57592),l=r(94184),d=r.n(l),c=r(11355),o=r(11018),u=r(65451),x=r(35079),m=r(94261),p=r(77768),f=r(2248),g=r(40357),h=r(58951),y=r(49845),b=[{id:1,name:"Hot"},{id:2,name:"APR"},{id:3,name:"Earned"},{id:4,name:"Total staked"},{id:5,name:"Latest"}];function k(){var e=(0,n.useState)(b[0]),t=e[0],r=e[1];return(0,a.jsx)("div",{className:"relative w-full md:w-auto",children:(0,a.jsxs)(x.R,{value:t,onChange:r,children:[(0,a.jsxs)(x.R.Button,{className:"flex h-11 w-full items-center justify-between rounded-lg bg-gray-100 px-4 text-sm text-gray-900 dark:bg-light-dark dark:text-white md:w-36 lg:w-40 xl:w-56",children:[t.name,(0,a.jsx)(f._,{})]}),(0,a.jsx)(c.u,{enter:"ease-out duration-300",enterFrom:"opacity-0 ",enterTo:"opacity-100",leave:"ease-in duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0 ",children:(0,a.jsx)(x.R.Options,{className:"absolute left-0 z-10 mt-2 w-full origin-top-right rounded-lg bg-white p-3 shadow-large dark:bg-light-dark",children:b.map((function(e){return(0,a.jsx)(x.R.Option,{value:e,children:function(t){var r=t.selected;return(0,a.jsx)("div",{className:"block cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition dark:text-white  ".concat(r?"my-1 bg-gray-100 dark:bg-dark":"hover:bg-gray-50 dark:hover:bg-gray-700"),children:e.name})}},e.id)}))})})]})})}function v(){return(0,a.jsx)("form",{className:"relative flex w-full rounded-full md:w-auto lg:w-64 xl:w-80",noValidate:!0,role:"search",children:(0,a.jsxs)("label",{className:"flex w-full items-center",children:[(0,a.jsx)("input",{className:"h-11 w-full appearance-none rounded-lg border-2 border-gray-200 bg-transparent py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-10 rtl:pr-10 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500",placeholder:"Search farms",autoComplete:"off"}),(0,a.jsx)("span",{className:"pointer-events-none absolute flex h-full w-8 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-gray-500 sm:ltr:pl-3 sm:rtl:pr-3",children:(0,a.jsx)(g.W,{className:"h-4 w-4"})})]})})}function w(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return(0,a.jsxs)(p.r,{checked:t,onChange:r,className:"flex items-center gap-2 text-gray-400 sm:gap-3",children:[(0,a.jsx)("div",{className:d()(t?"bg-brand":"bg-gray-200 dark:bg-gray-500","relative inline-flex h-[22px] w-10 items-center rounded-full transition-colors duration-300"),children:(0,a.jsx)("span",{className:d()(t?"bg-white ltr:translate-x-5 rtl:-translate-x-5 dark:bg-light-dark":"bg-white ltr:translate-x-0.5 rtl:-translate-x-0.5 dark:bg-light-dark","inline-block h-[18px] w-[18px] transform rounded-full bg-white transition-transform duration-200")})}),(0,a.jsx)("span",{className:"inline-flex text-xs font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:text-sm",children:"Stacked only"})]})}function j(){var e=(0,n.useState)("live"),t=e[0],r=e[1];return(0,a.jsxs)(u.E,{value:t,onChange:r,className:"flex items-center sm:gap-3",children:[(0,a.jsx)(u.E.Option,{value:"live",children:function(e){var t=e.checked;return(0,a.jsxs)("span",{className:"relative flex h-11 w-20 cursor-pointer items-center justify-center rounded-lg text-center text-xs font-medium tracking-wider sm:w-24 sm:text-sm ".concat(t?"text-white":"text-brand"),children:[t&&(0,a.jsx)(i.E.span,{className:"absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large",layoutId:"statusIndicator"}),(0,a.jsx)("span",{className:"relative",children:"LIVE"})]})}}),(0,a.jsx)(u.E.Option,{value:"finished",children:function(e){var t=e.checked;return(0,a.jsxs)("span",{className:"relative flex h-11 w-20 cursor-pointer items-center justify-center rounded-lg text-center text-xs font-medium tracking-wider sm:w-24 sm:text-sm ".concat(t?"text-white":"text-brand"),children:[t&&(0,a.jsx)(i.E.span,{className:"absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large",layoutId:"statusIndicator"}),(0,a.jsx)("span",{className:"relative",children:"FINISHED"})]})}})]})}var N=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.PB,{title:"Farms",description:"Apexswap - Avalanche DEX"}),(0,a.jsxs)("div",{className:"mx-auto w-full sm:pt-8",children:[(0,a.jsxs)("div",{className:"mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center md:gap-6",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,a.jsx)(j,{}),(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsx)(w,{})})]}),(0,a.jsxs)("div",{className:"flex items-center gap-4 lg:gap-8",children:[(0,a.jsx)("div",{className:"hidden shrink-0 md:block",children:(0,a.jsx)(w,{})}),(0,a.jsx)(v,{}),(0,a.jsx)(k,{})]})]}),(0,a.jsxs)("div",{className:"mb-3 hidden grid-cols-3 gap-6 rounded-lg bg-white shadow-card dark:bg-light-dark sm:grid lg:grid-cols-5",children:[(0,a.jsx)("span",{className:"px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300",children:"Pool"}),(0,a.jsx)("span",{className:"px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300",children:"Earned"}),(0,a.jsx)("span",{className:"px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300",children:"APR"}),(0,a.jsx)("span",{className:"hidden px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300 lg:block",children:"Liquidity"}),(0,a.jsx)("span",{className:"hidden px-8 py-6 text-sm tracking-wider text-gray-500 dark:text-gray-300 lg:block",children:"Multiplier"})]}),y.I.map((function(e){return(0,a.jsxs)(h.Z,{from:e.from,to:e.to,earned:e.earned,apr:e.apr,liquidity:e.liquidity,multiplier:e.multiplier,children:[(0,a.jsxs)("div",{className:"mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-6",children:[(0,a.jsx)("div",{className:"text-xs font-medium uppercase text-black ltr:text-right rtl:text-left dark:text-white sm:text-sm",children:"Wallet balance: 0"}),(0,a.jsxs)("div",{className:"flex flex-col gap-3 text-xs font-medium uppercase text-black ltr:text-right rtl:text-left dark:text-white sm:text-sm",children:[(0,a.jsx)("span",{children:"Your Staked: 4.208 (0.03% of pool)"}),(0,a.jsx)("span",{children:"0.08 WBTC + 1753.60 ETH ($18.96)"})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"number",placeholder:"0.0",className:"spin-button-hidden h-13 w-full appearance-none rounded-lg border-solid border-gray-200 bg-body px-4 text-sm tracking-tighter text-gray-900 placeholder:text-gray-600 focus:border-gray-900 focus:shadow-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-600"}),(0,a.jsx)("span",{className:"pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-lg border border-solid bg-gray-100 px-2 py-1 text-xs uppercase text-gray-900 ltr:right-3 rtl:left-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:"Max"})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("input",{type:"number",placeholder:"0.0",className:"spin-button-hidden h-13 w-full appearance-none rounded-lg border-solid border-gray-200 bg-body px-4 text-sm tracking-tighter text-gray-900 placeholder:text-gray-600 focus:border-gray-900 focus:shadow-none focus:outline-none focus:ring-0 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-600"}),(0,a.jsx)("span",{className:"pointer-events-none absolute top-1/2 -translate-y-1/2 rounded-lg border border-solid bg-gray-100 px-2 py-1 text-xs uppercase text-gray-900 ltr:right-3 rtl:left-3 dark:border-gray-700 dark:bg-gray-800 dark:text-white",children:"Max"})]})]}),(0,a.jsxs)("div",{className:"mb-4 grid grid-cols-2 gap-4 sm:mb-6 sm:gap-6",children:[(0,a.jsx)(m.Z,{shape:"rounded",fullWidth:!0,size:"large",children:"STAKE"}),(0,a.jsx)(m.Z,{shape:"rounded",fullWidth:!0,size:"large",children:"UNSTAKE"})]}),(0,a.jsx)(m.Z,{shape:"rounded",fullWidth:!0,size:"large",children:"HARVEST"})]},e.id)}))]})]})};N.getLayout=function(e){return(0,a.jsx)(o.Z,{children:e})},t.default=N},77768:function(e,t,r){"use strict";r.d(t,{r:function(){return y}});var a=r(67294),n=r(12351),s=r(19946),i=r(61363),l=r(64103),d=r(95389),c=r(39516),o=r(14157),u=r(23784),x=r(46045),m=r(18689),p=r(73781);let f=(0,a.createContext)(null);f.displayName="GroupContext";let g=a.Fragment;let h=(0,n.yV)((function(e,t){let{checked:r,onChange:d,name:c,value:g,...h}=e,y=`headlessui-switch-${(0,s.M)()}`,b=(0,a.useContext)(f),k=(0,a.useRef)(null),v=(0,u.T)(k,t,null===b?null:b.setSwitch),w=(0,p.z)((()=>d(!r))),j=(0,p.z)((e=>{if((0,l.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),w()})),N=(0,p.z)((e=>{e.key===i.R.Space?(e.preventDefault(),w()):e.key===i.R.Enter&&(0,m.g)(e.currentTarget)})),E=(0,p.z)((e=>e.preventDefault())),_=(0,a.useMemo)((()=>({checked:r})),[r]),C={id:y,ref:v,role:"switch",type:(0,o.f)(e,k),tabIndex:0,"aria-checked":r,"aria-labelledby":null==b?void 0:b.labelledby,"aria-describedby":null==b?void 0:b.describedby,onClick:j,onKeyUp:N,onKeyPress:E};return a.createElement(a.Fragment,null,null!=c&&r&&a.createElement(x._,{features:x.A.Hidden,...(0,n.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:r,name:c,value:g})}),(0,n.sY)({ourProps:C,theirProps:h,slot:_,defaultTag:"button",name:"Switch"}))})),y=Object.assign(h,{Group:function(e){let[t,r]=(0,a.useState)(null),[s,i]=(0,d.b)(),[l,o]=(0,c.f)(),u=(0,a.useMemo)((()=>({switch:t,setSwitch:r,labelledby:s,describedby:l})),[t,r,s,l]),x=e;return a.createElement(o,{name:"Switch.Description"},a.createElement(i,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},a.createElement(f.Provider,{value:u},(0,n.sY)({ourProps:{},theirProps:x,defaultTag:g,name:"Switch.Group"}))))},Label:d._,Description:c.d})},95421:function(e,t,r){"use strict";r.d(t,{M:function(){return g}});var a=r(70655),n=r(67294),s=r(6337),i=r(4454),l=r(240),d=r(96681),c=r(76316),o=function(e){var t=e.children,r=e.initial,s=e.isPresent,i=e.onExitComplete,o=e.custom,x=e.presenceAffectsLayout,m=(0,d.h)(u),p=(0,c.M)(),f=(0,n.useMemo)((function(){return{id:p,initial:r,isPresent:s,custom:o,onExitComplete:function(e){var t,r;m.set(e,!0);try{for(var n=(0,a.__values)(m.values()),s=n.next();!s.done;s=n.next()){if(!s.value)return}}catch(l){t={error:l}}finally{try{s&&!s.done&&(r=n.return)&&r.call(n)}finally{if(t)throw t.error}}null===i||void 0===i||i()},register:function(e){return m.set(e,!1),function(){return m.delete(e)}}}}),x?void 0:[s]);return(0,n.useMemo)((function(){m.forEach((function(e,t){return m.set(t,!1)}))}),[s]),n.useEffect((function(){!s&&!m.size&&(null===i||void 0===i||i())}),[s]),n.createElement(l.O.Provider,{value:f},t)};function u(){return new Map}var x=r(25364),m=r(58868),p=r(65411),f=function(e){return e.key||""};var g=function(e){var t=e.children,r=e.custom,l=e.initial,d=void 0===l||l,c=e.onExitComplete,u=e.exitBeforeEnter,g=e.presenceAffectsLayout,h=void 0===g||g,y=(0,a.__read)((0,s.N)(),1)[0],b=(0,n.useContext)(x.p).forceRender;b&&(y=b);var k=(0,i.t)(),v=function(e){var t=[];return n.Children.forEach(e,(function(e){(0,n.isValidElement)(e)&&t.push(e)})),t}(t),w=v,j=new Set,N=(0,n.useRef)(w),E=(0,n.useRef)(new Map).current,_=(0,n.useRef)(!0);if((0,m.L)((function(){_.current=!1,function(e,t){e.forEach((function(e){var r=f(e);t.set(r,e)}))}(v,E),N.current=w})),(0,p.z)((function(){_.current=!0,E.clear(),j.clear()})),_.current)return n.createElement(n.Fragment,null,w.map((function(e){return n.createElement(o,{key:f(e),isPresent:!0,initial:!!d&&void 0,presenceAffectsLayout:h},e)})));w=(0,a.__spreadArray)([],(0,a.__read)(w),!1);for(var C=N.current.map(f),S=v.map(f),A=C.length,P=0;P<A;P++){var T=C[P];-1===S.indexOf(T)&&j.add(T)}return u&&j.size&&(w=[]),j.forEach((function(e){if(-1===S.indexOf(e)){var t=E.get(e);if(t){var a=C.indexOf(e);w.splice(a,0,n.createElement(o,{key:f(t),isPresent:!1,onExitComplete:function(){E.delete(e),j.delete(e);var t=N.current.findIndex((function(t){return t.key===e}));if(N.current.splice(t,1),!j.size){if(N.current=v,!1===k.current)return;y(),c&&c()}},custom:r,presenceAffectsLayout:h},t))}}})),w=w.map((function(e){var t=e.key;return j.has(t)?e:n.createElement(o,{key:f(e),isPresent:!0,presenceAffectsLayout:h},e)})),n.createElement(n.Fragment,null,j.size?w:w.map((function(e){return(0,n.cloneElement)(e)})))}},6337:function(e,t,r){"use strict";r.d(t,{N:function(){return l}});var a=r(70655),n=r(54735),s=r(67294),i=r(4454);function l(){var e=(0,i.t)(),t=(0,a.__read)((0,s.useState)(0),2),r=t[0],l=t[1],d=(0,s.useCallback)((function(){e.current&&l(r+1)}),[r]);return[(0,s.useCallback)((function(){return n.ZP.postRender(d)}),[d]),r]}},4454:function(e,t,r){"use strict";r.d(t,{t:function(){return s}});var a=r(67294),n=r(58868);function s(){var e=(0,a.useRef)(!1);return(0,n.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}}},function(e){e.O(0,[4951,9774,2888,179],(function(){return t=1573,e(e.s=t);var t}));var t=e.O();_N_E=t}]);