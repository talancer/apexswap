"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2454],{2454:function(t,e,n){function r(){}n.d(e,{$:function(){return be},A:function(){return L},B:function(){return s},C:function(){return d},D:function(){return Ae},E:function(){return G},F:function(){return q},G:function(){return fe},H:function(){return F},I:function(){return tt},J:function(){return he},K:function(){return Ie},L:function(){return ye},M:function(){return ve},N:function(){return xe},O:function(){return je},P:function(){return R},Q:function(){return g},R:function(){return dt},S:function(){return gt},T:function(){return I},U:function(){return ie},V:function(){return m},W:function(){return k},X:function(){return sn},Y:function(){return ot},Z:function(){return rt},_:function(){return st},a:function(){return Ce},a0:function(){return Q},a1:function(){return ln},a2:function(){return rn},a3:function(){return gn},a4:function(){return lt},a5:function(){return dn},a6:function(){return nn},a7:function(){return ce},a8:function(){return T},a9:function(){return Ee},aA:function(){return wn},aB:function(){return vn},aC:function(){return pt},aD:function(){return Mn},aE:function(){return pe},aF:function(){return r},aG:function(){return V},aH:function(){return X},aI:function(){return B},aJ:function(){return $},aK:function(){return D},aL:function(){return Z},aM:function(){return le},aN:function(){return it},aO:function(){return nt},aa:function(){return Ye},ab:function(){return We},ac:function(){return w},ad:function(){return o},ae:function(){return ht},af:function(){return hn},ag:function(){return de},ah:function(){return P},ai:function(){return p},aj:function(){return S},ak:function(){return et},al:function(){return Pe},am:function(){return en},an:function(){return Pn},ao:function(){return Tn},ap:function(){return bn},aq:function(){return yn},ar:function(){return pn},as:function(){return me},at:function(){return we},au:function(){return ge},av:function(){return _e},aw:function(){return Se},ax:function(){return Re},ay:function(){return On},az:function(){return U},b:function(){return c},c:function(){return re},d:function(){return se},e:function(){return vt},f:function(){return _},g:function(){return u},h:function(){return Fe},i:function(){return a},j:function(){return O},k:function(){return i},l:function(){return at},m:function(){return l},n:function(){return h},o:function(){return mn},p:function(){return J},q:function(){return bt},r:function(){return ft},s:function(){return N},t:function(){return z},u:function(){return ut},v:function(){return f},w:function(){return yt},x:function(){return H},y:function(){return Qe},z:function(){return W}});const o=function(){let t=0;return function(){return t++}}();function i(t){return null===t||"undefined"===typeof t}function c(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function a(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const u=t=>("number"===typeof t||t instanceof Number)&&isFinite(+t);function s(t,e){return u(t)?t:e}function f(t,e){return"undefined"===typeof t?e:t}const l=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,h=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function d(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function g(t,e,n,r){let o,i,u;if(c(t))if(i=t.length,r)for(o=i-1;o>=0;o--)e.call(n,t[o],o);else for(o=0;o<i;o++)e.call(n,t[o],o);else if(a(t))for(u=Object.keys(t),i=u.length,o=0;o<i;o++)e.call(n,t[u[o]],u[o])}function p(t,e){let n,r,o,i;if(!t||!e||t.length!==e.length)return!1;for(n=0,r=t.length;n<r;++n)if(o=t[n],i=e[n],o.datasetIndex!==i.datasetIndex||o.index!==i.index)return!1;return!0}function b(t){if(c(t))return t.map(b);if(a(t)){const e=Object.create(null),n=Object.keys(t),r=n.length;let o=0;for(;o<r;++o)e[n[o]]=b(t[n[o]]);return e}return t}function y(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function x(t,e,n,r){if(!y(t))return;const o=e[t],i=n[t];a(o)&&a(i)?m(o,i,r):e[t]=b(i)}function m(t,e,n){const r=c(e)?e:[e],o=r.length;if(!a(t))return t;const i=(n=n||{}).merger||x;for(let c=0;c<o;++c){if(!a(e=r[c]))continue;const o=Object.keys(e);for(let r=0,c=o.length;r<c;++r)i(o[r],t,e,n)}return t}function w(t,e){return m(t,e,{merger:v})}function v(t,e,n){if(!y(t))return;const r=e[t],o=n[t];a(r)&&a(o)?w(r,o):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=b(o))}const M={"":t=>t,x:t=>t.x,y:t=>t.y};function _(t,e){const n=M[e]||(M[e]=function(t){const e=function(t){const e=t.split("."),n=[];let r="";for(const o of e)r+=o,r.endsWith("\\")?r=r.slice(0,-1)+".":(n.push(r),r="");return n}(t);return t=>{for(const n of e){if(""===n)break;t=t&&t[n]}return t}}(e));return n(t)}function k(t){return t.charAt(0).toUpperCase()+t.slice(1)}const O=t=>"undefined"!==typeof t,T=t=>"function"===typeof t,P=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0};function S(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}const R=Math.PI,I=2*R,j=I+R,C=Number.POSITIVE_INFINITY,A=R/180,F=R/2,Y=R/4,E=2*R/3,W=Math.log10,N=Math.sign;function B(t){const e=Math.round(t);t=D(t,e,t/1e3)?e:t;const n=Math.pow(10,Math.floor(W(t))),r=t/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function L(t){const e=[],n=Math.sqrt(t);let r;for(r=1;r<n;r++)t%r===0&&(e.push(r),e.push(t/r));return n===(0|n)&&e.push(n),e.sort(((t,e)=>t-e)).pop(),e}function H(t){return!isNaN(parseFloat(t))&&isFinite(t)}function D(t,e,n){return Math.abs(t-e)<n}function $(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function X(t,e,n){let r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r][n],isNaN(i)||(e.min=Math.min(e.min,i),e.max=Math.max(e.max,i))}function z(t){return t*(R/180)}function q(t){return t*(180/R)}function Z(t){if(!u(t))return;let e=1,n=0;for(;Math.round(t*e)/e!==t;)e*=10,n++;return n}function Q(t,e){const n=e.x-t.x,r=e.y-t.y,o=Math.sqrt(n*n+r*r);let i=Math.atan2(r,n);return i<-.5*R&&(i+=I),{angle:i,distance:o}}function V(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function K(t,e){return(t-e+j)%I-R}function U(t){return(t%I+I)%I}function J(t,e,n,r){const o=U(t),i=U(e),c=U(n),a=U(i-o),u=U(c-o),s=U(o-i),f=U(o-c);return o===i||o===c||r&&i===c||a>u&&s<f}function G(t,e,n){return Math.max(e,Math.min(n,t))}function tt(t){return G(t,-32768,32767)}function et(t,e,n,r=1e-6){return t>=Math.min(e,n)-r&&t<=Math.max(e,n)+r}function nt(t,e,n){n=n||(n=>t[n]<e);let r,o=t.length-1,i=0;for(;o-i>1;)r=i+o>>1,n(r)?i=r:o=r;return{lo:i,hi:o}}const rt=(t,e,n,r)=>nt(t,n,r?r=>t[r][e]<=n:r=>t[r][e]<n),ot=(t,e,n)=>nt(t,n,(r=>t[r][e]>=n));function it(t,e,n){let r=0,o=t.length;for(;r<o&&t[r]<e;)r++;for(;o>r&&t[o-1]>n;)o--;return r>0||o<t.length?t.slice(r,o):t}const ct=["push","pop","shift","splice","unshift"];function at(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),ct.forEach((e=>{const n="_onData"+k(e),r=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const o=r.apply(this,e);return t._chartjs.listeners.forEach((t=>{"function"===typeof t[n]&&t[n](...e)})),o}})})))}function ut(t,e){const n=t._chartjs;if(!n)return;const r=n.listeners,o=r.indexOf(e);-1!==o&&r.splice(o,1),r.length>0||(ct.forEach((e=>{delete t[e]})),delete t._chartjs)}function st(t){const e=new Set;let n,r;for(n=0,r=t.length;n<r;++n)e.add(t[n]);return e.size===r?t:Array.from(e)}const ft="undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame;function lt(t,e,n){const r=n||(t=>Array.prototype.slice.call(t));let o=!1,i=[];return function(...n){i=r(n),o||(o=!0,ft.call(window,(()=>{o=!1,t.apply(e,i)})))}}function ht(t,e){let n;return function(...r){return e?(clearTimeout(n),n=setTimeout(t,e,r)):t.apply(this,r),e}}const dt=t=>"start"===t?"left":"end"===t?"right":"center",gt=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,pt=(t,e,n,r)=>t===(r?"left":"right")?n:"center"===t?(e+n)/2:e;function bt(t,e,n){const r=e.length;let o=0,i=r;if(t._sorted){const{iScale:c,_parsed:a}=t,u=c.axis,{min:s,max:f,minDefined:l,maxDefined:h}=c.getUserBounds();l&&(o=G(Math.min(rt(a,c.axis,s).lo,n?r:rt(e,u,c.getPixelForValue(s)).lo),0,r-1)),i=h?G(Math.max(rt(a,c.axis,f,!0).hi+1,n?0:rt(e,u,c.getPixelForValue(f),!0).hi+1),o,r)-o:r-o}return{start:o,count:i}}function yt(t){const{xScale:e,yScale:n,_scaleRanges:r}=t,o={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!r)return t._scaleRanges=o,!0;const i=r.xmin!==e.min||r.xmax!==e.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,o),i}const xt=t=>0===t||1===t,mt=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*I/n),wt=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*I/n)+1,vt={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*F),easeOutSine:t=>Math.sin(t*F),easeInOutSine:t=>-.5*(Math.cos(R*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>xt(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>xt(t)?t:mt(t,.075,.3),easeOutElastic:t=>xt(t)?t:wt(t,.075,.3),easeInOutElastic(t){const e=.1125;return xt(t)?t:t<.5?.5*mt(2*t,e,.45):.5+.5*wt(2*t-1,e,.45)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-vt.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*vt.easeInBounce(2*t):.5*vt.easeOutBounce(2*t-1)+.5};function Mt(t){return t+.5|0}const _t=(t,e,n)=>Math.max(Math.min(t,n),e);function kt(t){return _t(Mt(2.55*t),0,255)}function Ot(t){return _t(Mt(255*t),0,255)}function Tt(t){return _t(Mt(t/2.55)/100,0,1)}function Pt(t){return _t(Mt(100*t),0,100)}const St={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Rt=[..."0123456789ABCDEF"],It=t=>Rt[15&t],jt=t=>Rt[(240&t)>>4]+Rt[15&t],Ct=t=>(240&t)>>4===(15&t);function At(t){var e=(t=>Ct(t.r)&&Ct(t.g)&&Ct(t.b)&&Ct(t.a))(t)?It:jt;return t?"#"+e(t.r)+e(t.g)+e(t.b)+((t,e)=>t<255?e(t):"")(t.a,e):void 0}const Ft=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Yt(t,e,n){const r=e*Math.min(n,1-n),o=(e,o=(e+t/30)%12)=>n-r*Math.max(Math.min(o-3,9-o,1),-1);return[o(0),o(8),o(4)]}function Et(t,e,n){const r=(r,o=(r+t/60)%6)=>n-n*e*Math.max(Math.min(o,4-o,1),0);return[r(5),r(3),r(1)]}function Wt(t,e,n){const r=Yt(t,1,.5);let o;for(e+n>1&&(o=1/(e+n),e*=o,n*=o),o=0;o<3;o++)r[o]*=1-e-n,r[o]+=e;return r}function Nt(t){const e=t.r/255,n=t.g/255,r=t.b/255,o=Math.max(e,n,r),i=Math.min(e,n,r),c=(o+i)/2;let a,u,s;return o!==i&&(s=o-i,u=c>.5?s/(2-o-i):s/(o+i),a=function(t,e,n,r,o){return t===o?(e-n)/r+(e<n?6:0):e===o?(n-t)/r+2:(t-e)/r+4}(e,n,r,s,o),a=60*a+.5),[0|a,u||0,c]}function Bt(t,e,n,r){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,r)).map(Ot)}function Lt(t,e,n){return Bt(Yt,t,e,n)}function Ht(t){return(t%360+360)%360}function Dt(t){const e=Ft.exec(t);let n,r=255;if(!e)return;e[5]!==n&&(r=e[6]?kt(+e[5]):Ot(+e[5]));const o=Ht(+e[2]),i=+e[3]/100,c=+e[4]/100;return n="hwb"===e[1]?function(t,e,n){return Bt(Wt,t,e,n)}(o,i,c):"hsv"===e[1]?function(t,e,n){return Bt(Et,t,e,n)}(o,i,c):Lt(o,i,c),{r:n[0],g:n[1],b:n[2],a:r}}const $t={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Xt={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};let zt;function qt(t){zt||(zt=function(){const t={},e=Object.keys(Xt),n=Object.keys($t);let r,o,i,c,a;for(r=0;r<e.length;r++){for(c=a=e[r],o=0;o<n.length;o++)i=n[o],a=a.replace(i,$t[i]);i=parseInt(Xt[c],16),t[a]=[i>>16&255,i>>8&255,255&i]}return t}(),zt.transparent=[0,0,0,0]);const e=zt[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}const Zt=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;const Qt=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,Vt=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function Kt(t,e,n){if(t){let r=Nt(t);r[e]=Math.max(0,Math.min(r[e]+r[e]*n,0===e?360:1)),r=Lt(r),t.r=r[0],t.g=r[1],t.b=r[2]}}function Ut(t,e){return t?Object.assign(e||{},t):t}function Jt(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=Ot(t[3]))):(e=Ut(t,{r:0,g:0,b:0,a:1})).a=Ot(e.a),e}function Gt(t){return"r"===t.charAt(0)?function(t){const e=Zt.exec(t);let n,r,o,i=255;if(e){if(e[7]!==n){const t=+e[7];i=e[8]?kt(t):_t(255*t,0,255)}return n=+e[1],r=+e[3],o=+e[5],n=255&(e[2]?kt(n):_t(n,0,255)),r=255&(e[4]?kt(r):_t(r,0,255)),o=255&(e[6]?kt(o):_t(o,0,255)),{r:n,g:r,b:o,a:i}}}(t):Dt(t)}class te{constructor(t){if(t instanceof te)return t;const e=typeof t;let n;"object"===e?n=Jt(t):"string"===e&&(n=function(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*St[t[1]],g:255&17*St[t[2]],b:255&17*St[t[3]],a:5===n?17*St[t[4]]:255}:7!==n&&9!==n||(e={r:St[t[1]]<<4|St[t[2]],g:St[t[3]]<<4|St[t[4]],b:St[t[5]]<<4|St[t[6]],a:9===n?St[t[7]]<<4|St[t[8]]:255})),e}(t)||qt(t)||Gt(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Ut(this._rgb);return t&&(t.a=Tt(t.a)),t}set rgb(t){this._rgb=Jt(t)}rgbString(){return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${Tt(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0;var t}hexString(){return this._valid?At(this._rgb):void 0}hslString(){return this._valid?function(t){if(!t)return;const e=Nt(t),n=e[0],r=Pt(e[1]),o=Pt(e[2]);return t.a<255?`hsla(${n}, ${r}%, ${o}%, ${Tt(t.a)})`:`hsl(${n}, ${r}%, ${o}%)`}(this._rgb):void 0}mix(t,e){if(t){const n=this.rgb,r=t.rgb;let o;const i=e===o?.5:e,c=2*i-1,a=n.a-r.a,u=((c*a===-1?c:(c+a)/(1+c*a))+1)/2;o=1-u,n.r=255&u*n.r+o*r.r+.5,n.g=255&u*n.g+o*r.g+.5,n.b=255&u*n.b+o*r.b+.5,n.a=i*n.a+(1-i)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,n){const r=Vt(Tt(t.r)),o=Vt(Tt(t.g)),i=Vt(Tt(t.b));return{r:Ot(Qt(r+n*(Vt(Tt(e.r))-r))),g:Ot(Qt(o+n*(Vt(Tt(e.g))-o))),b:Ot(Qt(i+n*(Vt(Tt(e.b))-i))),a:t.a+n*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new te(this.rgb)}alpha(t){return this._rgb.a=Ot(t),this}clearer(t){return this._rgb.a*=1-t,this}greyscale(){const t=this._rgb,e=Mt(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){return this._rgb.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Kt(this._rgb,2,t),this}darken(t){return Kt(this._rgb,2,-t),this}saturate(t){return Kt(this._rgb,1,t),this}desaturate(t){return Kt(this._rgb,1,-t),this}rotate(t){return function(t,e){var n=Nt(t);n[0]=Ht(n[0]+e),n=Lt(n),t.r=n[0],t.g=n[1],t.b=n[2]}(this._rgb,t),this}}function ee(t){return new te(t)}function ne(t){if(t&&"object"===typeof t){const e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function re(t){return ne(t)?t:ee(t)}function oe(t){return ne(t)?t:ee(t).saturate(.5).darken(.1).hexString()}const ie=Object.create(null),ce=Object.create(null);function ae(t,e){if(!e)return t;const n=e.split(".");for(let r=0,o=n.length;r<o;++r){const e=n[r];t=t[e]||(t[e]=Object.create(null))}return t}function ue(t,e,n){return"string"===typeof e?m(ae(t,e),n):m(ae(t,""),e)}var se=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>oe(e.backgroundColor),this.hoverBorderColor=(t,e)=>oe(e.borderColor),this.hoverColor=(t,e)=>oe(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return ue(this,t,e)}get(t){return ae(this,t)}describe(t,e){return ue(ce,t,e)}override(t,e){return ue(ie,t,e)}route(t,e,n,r){const o=ae(this,t),i=ae(this,n),c="_"+e;Object.defineProperties(o,{[c]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[c],e=i[r];return a(t)?Object.assign({},e,t):f(t,e)},set(t){this[c]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function fe(t,e,n,r,o){let i=e[o];return i||(i=e[o]=t.measureText(o).width,n.push(o)),i>r&&(r=i),r}function le(t,e,n,r){let o=(r=r||{}).data=r.data||{},i=r.garbageCollect=r.garbageCollect||[];r.font!==e&&(o=r.data={},i=r.garbageCollect=[],r.font=e),t.save(),t.font=e;let a=0;const u=n.length;let s,f,l,h,d;for(s=0;s<u;s++)if(h=n[s],void 0!==h&&null!==h&&!0!==c(h))a=fe(t,o,i,a,h);else if(c(h))for(f=0,l=h.length;f<l;f++)d=h[f],void 0===d||null===d||c(d)||(a=fe(t,o,i,a,d));t.restore();const g=i.length/2;if(g>n.length){for(s=0;s<g;s++)delete o[i[s]];i.splice(0,g)}return a}function he(t,e,n){const r=t.currentDevicePixelRatio,o=0!==n?Math.max(n/2,.5):0;return Math.round((e-o)*r)/r+o}function de(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function ge(t,e,n,r){pe(t,e,n,r,null)}function pe(t,e,n,r,o){let i,c,a,u,s,f;const l=e.pointStyle,h=e.rotation,d=e.radius;let g=(h||0)*A;if(l&&"object"===typeof l&&(i=l.toString(),"[object HTMLImageElement]"===i||"[object HTMLCanvasElement]"===i))return t.save(),t.translate(n,r),t.rotate(g),t.drawImage(l,-l.width/2,-l.height/2,l.width,l.height),void t.restore();if(!(isNaN(d)||d<=0)){switch(t.beginPath(),l){default:o?t.ellipse(n,r,o/2,d,0,0,I):t.arc(n,r,d,0,I),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(g)*d,r-Math.cos(g)*d),g+=E,t.lineTo(n+Math.sin(g)*d,r-Math.cos(g)*d),g+=E,t.lineTo(n+Math.sin(g)*d,r-Math.cos(g)*d),t.closePath();break;case"rectRounded":s=.516*d,u=d-s,c=Math.cos(g+Y)*u,a=Math.sin(g+Y)*u,t.arc(n-c,r-a,s,g-R,g-F),t.arc(n+a,r-c,s,g-F,g),t.arc(n+c,r+a,s,g,g+F),t.arc(n-a,r+c,s,g+F,g+R),t.closePath();break;case"rect":if(!h){u=Math.SQRT1_2*d,f=o?o/2:u,t.rect(n-f,r-u,2*f,2*u);break}g+=Y;case"rectRot":c=Math.cos(g)*d,a=Math.sin(g)*d,t.moveTo(n-c,r-a),t.lineTo(n+a,r-c),t.lineTo(n+c,r+a),t.lineTo(n-a,r+c),t.closePath();break;case"crossRot":g+=Y;case"cross":c=Math.cos(g)*d,a=Math.sin(g)*d,t.moveTo(n-c,r-a),t.lineTo(n+c,r+a),t.moveTo(n+a,r-c),t.lineTo(n-a,r+c);break;case"star":c=Math.cos(g)*d,a=Math.sin(g)*d,t.moveTo(n-c,r-a),t.lineTo(n+c,r+a),t.moveTo(n+a,r-c),t.lineTo(n-a,r+c),g+=Y,c=Math.cos(g)*d,a=Math.sin(g)*d,t.moveTo(n-c,r-a),t.lineTo(n+c,r+a),t.moveTo(n+a,r-c),t.lineTo(n-a,r+c);break;case"line":c=o?o/2:Math.cos(g)*d,a=Math.sin(g)*d,t.moveTo(n-c,r-a),t.lineTo(n+c,r+a);break;case"dash":t.moveTo(n,r),t.lineTo(n+Math.cos(g)*d,r+Math.sin(g)*d)}t.fill(),e.borderWidth>0&&t.stroke()}}function be(t,e,n){return n=n||.5,!e||t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function ye(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function xe(t){t.restore()}function me(t,e,n,r,o){if(!e)return t.lineTo(n.x,n.y);if("middle"===o){const r=(e.x+n.x)/2;t.lineTo(r,e.y),t.lineTo(r,n.y)}else"after"===o!==!!r?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function we(t,e,n,r){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(r?e.cp1x:e.cp2x,r?e.cp1y:e.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function ve(t,e,n,r,o,a={}){const u=c(e)?e:[e],s=a.strokeWidth>0&&""!==a.strokeColor;let f,l;for(t.save(),t.font=o.string,function(t,e){e.translation&&t.translate(e.translation[0],e.translation[1]);i(e.rotation)||t.rotate(e.rotation);e.color&&(t.fillStyle=e.color);e.textAlign&&(t.textAlign=e.textAlign);e.textBaseline&&(t.textBaseline=e.textBaseline)}(t,a),f=0;f<u.length;++f)l=u[f],s&&(a.strokeColor&&(t.strokeStyle=a.strokeColor),i(a.strokeWidth)||(t.lineWidth=a.strokeWidth),t.strokeText(l,n,r,a.maxWidth)),t.fillText(l,n,r,a.maxWidth),Me(t,n,r,l,a),r+=o.lineHeight;t.restore()}function Me(t,e,n,r,o){if(o.strikethrough||o.underline){const i=t.measureText(r),c=e-i.actualBoundingBoxLeft,a=e+i.actualBoundingBoxRight,u=n-i.actualBoundingBoxAscent,s=n+i.actualBoundingBoxDescent,f=o.strikethrough?(u+s)/2:s;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=o.decorationWidth||2,t.moveTo(c,f),t.lineTo(a,f),t.stroke()}}function _e(t,e){const{x:n,y:r,w:o,h:i,radius:c}=e;t.arc(n+c.topLeft,r+c.topLeft,c.topLeft,-F,R,!0),t.lineTo(n,r+i-c.bottomLeft),t.arc(n+c.bottomLeft,r+i-c.bottomLeft,c.bottomLeft,R,F,!0),t.lineTo(n+o-c.bottomRight,r+i),t.arc(n+o-c.bottomRight,r+i-c.bottomRight,c.bottomRight,F,0,!0),t.lineTo(n+o,r+c.topRight),t.arc(n+o-c.topRight,r+c.topRight,c.topRight,0,-F,!0),t.lineTo(n+c.topLeft,r)}const ke=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),Oe=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function Te(t,e){const n=(""+t).match(ke);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t}function Pe(t,e){const n={},r=a(e),o=r?Object.keys(e):e,i=a(t)?r?n=>f(t[n],t[e[n]]):e=>t[e]:()=>t;for(const c of o)n[c]=+i(c)||0;return n}function Se(t){return Pe(t,{top:"y",right:"x",bottom:"y",left:"x"})}function Re(t){return Pe(t,["topLeft","topRight","bottomLeft","bottomRight"])}function Ie(t){const e=Se(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function je(t,e){t=t||{},e=e||se.font;let n=f(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let r=f(t.style,e.style);r&&!(""+r).match(Oe)&&(console.warn('Invalid font style specified: "'+r+'"'),r="");const o={family:f(t.family,e.family),lineHeight:Te(f(t.lineHeight,e.lineHeight),n),size:n,style:r,weight:f(t.weight,e.weight),string:""};return o.string=function(t){return!t||i(t.size)||i(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(o),o}function Ce(t,e,n,r){let o,i,a,u=!0;for(o=0,i=t.length;o<i;++o)if(a=t[o],void 0!==a&&(void 0!==e&&"function"===typeof a&&(a=a(e),u=!1),void 0!==n&&c(a)&&(a=a[n%a.length],u=!1),void 0!==a))return r&&!u&&(r.cacheable=!1),a}function Ae(t,e,n){const{min:r,max:o}=t,i=h(e,(o-r)/2),c=(t,e)=>n&&0===t?0:t+e;return{min:c(r,-Math.abs(i)),max:c(o,i)}}function Fe(t,e){return Object.assign(Object.create(t),e)}function Ye(t,e=[""],n=t,r,o=(()=>t[0])){O(r)||(r=qe("_fallback",t));const i={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:r,_getTarget:o,override:o=>Ye([o,...t],e,n,r)};return new Proxy(i,{deleteProperty:(e,n)=>(delete e[n],delete e._keys,delete t[0][n],!0),get:(n,r)=>Le(n,r,(()=>function(t,e,n,r){let o;for(const i of e)if(o=qe(Ne(i,t),n),O(o))return Be(t,o)?Xe(n,r,t,o):o}(r,e,t,n))),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>Ze(t).includes(e),ownKeys:t=>Ze(t),set(t,e,n){const r=t._storage||(t._storage=o());return t[e]=r[e]=n,delete t._keys,!0}})}function Ee(t,e,n,r){const o={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:We(t,r),setContext:e=>Ee(t,e,n,r),override:o=>Ee(t.override(o),e,n,r)};return new Proxy(o,{deleteProperty:(e,n)=>(delete e[n],delete t[n],!0),get:(t,e,n)=>Le(t,e,(()=>function(t,e,n){const{_proxy:r,_context:o,_subProxy:i,_descriptors:u}=t;let s=r[e];T(s)&&u.isScriptable(e)&&(s=function(t,e,n,r){const{_proxy:o,_context:i,_subProxy:c,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+t);a.add(t),e=e(i,c||r),a.delete(t),Be(t,e)&&(e=Xe(o._scopes,o,t,e));return e}(e,s,t,n));c(s)&&s.length&&(s=function(t,e,n,r){const{_proxy:o,_context:i,_subProxy:c,_descriptors:u}=n;if(O(i.index)&&r(t))e=e[i.index%e.length];else if(a(e[0])){const n=e,r=o._scopes.filter((t=>t!==n));e=[];for(const a of n){const n=Xe(r,o,t,a);e.push(Ee(n,i,c&&c[t],u))}}return e}(e,s,t,u.isIndexable));Be(e,s)&&(s=Ee(s,o,i&&i[e],u));return s}(t,e,n))),getOwnPropertyDescriptor:(e,n)=>e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n),getPrototypeOf:()=>Reflect.getPrototypeOf(t),has:(e,n)=>Reflect.has(t,n),ownKeys:()=>Reflect.ownKeys(t),set:(e,n,r)=>(t[n]=r,delete e[n],!0)})}function We(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:r=e.indexable,_allKeys:o=e.allKeys}=t;return{allKeys:o,scriptable:n,indexable:r,isScriptable:T(n)?n:()=>n,isIndexable:T(r)?r:()=>r}}const Ne=(t,e)=>t?t+k(e):e,Be=(t,e)=>a(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function Le(t,e,n){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];const r=n();return t[e]=r,r}function He(t,e,n){return T(t)?t(e,n):t}const De=(t,e)=>!0===t?e:"string"===typeof t?_(e,t):void 0;function $e(t,e,n,r,o){for(const i of e){const e=De(n,i);if(e){t.add(e);const i=He(e._fallback,n,o);if(O(i)&&i!==n&&i!==r)return i}else if(!1===e&&O(r)&&n!==r)return null}return!1}function Xe(t,e,n,r){const o=e._rootScopes,i=He(e._fallback,n,r),u=[...t,...o],s=new Set;s.add(r);let f=ze(s,u,n,i||n,r);return null!==f&&((!O(i)||i===n||(f=ze(s,u,i,f,r),null!==f))&&Ye(Array.from(s),[""],o,i,(()=>function(t,e,n){const r=t._getTarget();e in r||(r[e]={});const o=r[e];if(c(o)&&a(n))return n;return o}(e,n,r))))}function ze(t,e,n,r,o){for(;n;)n=$e(t,e,n,r,o);return n}function qe(t,e){for(const n of e){if(!n)continue;const e=n[t];if(O(e))return e}}function Ze(t){let e=t._keys;return e||(e=t._keys=function(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter((t=>!t.startsWith("_"))))e.add(t);return Array.from(e)}(t._scopes)),e}function Qe(t,e,n,r){const{iScale:o}=t,{key:i="r"}=this._parsing,c=new Array(r);let a,u,s,f;for(a=0,u=r;a<u;++a)s=a+n,f=e[s],c[a]={r:o.parse(_(f,i),s)};return c}const Ve=Number.EPSILON||1e-14,Ke=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ue=t=>"x"===t?"y":"x";function Je(t,e,n,r){const o=t.skip?e:t,i=e,c=n.skip?e:n,a=V(i,o),u=V(c,i);let s=a/(a+u),f=u/(a+u);s=isNaN(s)?0:s,f=isNaN(f)?0:f;const l=r*s,h=r*f;return{previous:{x:i.x-l*(c.x-o.x),y:i.y-l*(c.y-o.y)},next:{x:i.x+h*(c.x-o.x),y:i.y+h*(c.y-o.y)}}}function Ge(t,e="x"){const n=Ue(e),r=t.length,o=Array(r).fill(0),i=Array(r);let c,a,u,s=Ke(t,0);for(c=0;c<r;++c)if(a=u,u=s,s=Ke(t,c+1),u){if(s){const t=s[e]-u[e];o[c]=0!==t?(s[n]-u[n])/t:0}i[c]=a?s?N(o[c-1])!==N(o[c])?0:(o[c-1]+o[c])/2:o[c-1]:o[c]}!function(t,e,n){const r=t.length;let o,i,c,a,u,s=Ke(t,0);for(let f=0;f<r-1;++f)u=s,s=Ke(t,f+1),u&&s&&(D(e[f],0,Ve)?n[f]=n[f+1]=0:(o=n[f]/e[f],i=n[f+1]/e[f],a=Math.pow(o,2)+Math.pow(i,2),a<=9||(c=3/Math.sqrt(a),n[f]=o*c*e[f],n[f+1]=i*c*e[f])))}(t,o,i),function(t,e,n="x"){const r=Ue(n),o=t.length;let i,c,a,u=Ke(t,0);for(let s=0;s<o;++s){if(c=a,a=u,u=Ke(t,s+1),!a)continue;const o=a[n],f=a[r];c&&(i=(o-c[n])/3,a[`cp1${n}`]=o-i,a[`cp1${r}`]=f-i*e[s]),u&&(i=(u[n]-o)/3,a[`cp2${n}`]=o+i,a[`cp2${r}`]=f+i*e[s])}}(t,i,e)}function tn(t,e,n){return Math.max(Math.min(t,n),e)}function en(t,e,n,r,o){let i,c,a,u;if(e.spanGaps&&(t=t.filter((t=>!t.skip))),"monotone"===e.cubicInterpolationMode)Ge(t,o);else{let n=r?t[t.length-1]:t[0];for(i=0,c=t.length;i<c;++i)a=t[i],u=Je(n,a,t[Math.min(i+1,c-(r?0:1))%c],e.tension),a.cp1x=u.previous.x,a.cp1y=u.previous.y,a.cp2x=u.next.x,a.cp2y=u.next.y,n=a}e.capBezierPoints&&function(t,e){let n,r,o,i,c,a=be(t[0],e);for(n=0,r=t.length;n<r;++n)c=i,i=a,a=n<r-1&&be(t[n+1],e),i&&(o=t[n],c&&(o.cp1x=tn(o.cp1x,e.left,e.right),o.cp1y=tn(o.cp1y,e.top,e.bottom)),a&&(o.cp2x=tn(o.cp2x,e.left,e.right),o.cp2y=tn(o.cp2y,e.top,e.bottom)))}(t,n)}function nn(){return"undefined"!==typeof window&&"undefined"!==typeof document}function rn(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function on(t,e,n){let r;return"string"===typeof t?(r=parseInt(t,10),-1!==t.indexOf("%")&&(r=r/100*e.parentNode[n])):r=t,r}const cn=t=>window.getComputedStyle(t,null);const an=["top","right","bottom","left"];function un(t,e,n){const r={};n=n?"-"+n:"";for(let o=0;o<4;o++){const i=an[o];r[i]=parseFloat(t[e+"-"+i+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}function sn(t,e){if("native"in t)return t;const{canvas:n,currentDevicePixelRatio:r}=e,o=cn(n),i="border-box"===o.boxSizing,c=un(o,"padding"),a=un(o,"border","width"),{x:u,y:s,box:f}=function(t,e){const n=t.touches,r=n&&n.length?n[0]:t,{offsetX:o,offsetY:i}=r;let c,a,u=!1;if(((t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot))(o,i,t.target))c=o,a=i;else{const t=e.getBoundingClientRect();c=r.clientX-t.left,a=r.clientY-t.top,u=!0}return{x:c,y:a,box:u}}(t,n),l=c.left+(f&&a.left),h=c.top+(f&&a.top);let{width:d,height:g}=e;return i&&(d-=c.width+a.width,g-=c.height+a.height),{x:Math.round((u-l)/d*n.width/r),y:Math.round((s-h)/g*n.height/r)}}const fn=t=>Math.round(10*t)/10;function ln(t,e,n,r){const o=cn(t),i=un(o,"margin"),c=on(o.maxWidth,t,"clientWidth")||C,a=on(o.maxHeight,t,"clientHeight")||C,u=function(t,e,n){let r,o;if(void 0===e||void 0===n){const i=rn(t);if(i){const t=i.getBoundingClientRect(),c=cn(i),a=un(c,"border","width"),u=un(c,"padding");e=t.width-u.width-a.width,n=t.height-u.height-a.height,r=on(c.maxWidth,i,"clientWidth"),o=on(c.maxHeight,i,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:r||C,maxHeight:o||C}}(t,e,n);let{width:s,height:f}=u;if("content-box"===o.boxSizing){const t=un(o,"border","width"),e=un(o,"padding");s-=e.width+t.width,f-=e.height+t.height}return s=Math.max(0,s-i.width),f=Math.max(0,r?Math.floor(s/r):f-i.height),s=fn(Math.min(s,c,u.maxWidth)),f=fn(Math.min(f,a,u.maxHeight)),s&&!f&&(f=fn(s/2)),{width:s,height:f}}function hn(t,e,n){const r=e||1,o=Math.floor(t.height*r),i=Math.floor(t.width*r);t.height=o/r,t.width=i/r;const c=t.canvas;return c.style&&(n||!c.style.height&&!c.style.width)&&(c.style.height=`${t.height}px`,c.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==r||c.height!==o||c.width!==i)&&(t.currentDevicePixelRatio=r,c.height=o,c.width=i,t.ctx.setTransform(r,0,0,r,0,0),!0)}const dn=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}return t}();function gn(t,e){const n=function(t,e){return cn(t).getPropertyValue(e)}(t,e),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function pn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function bn(t,e,n,r){return{x:t.x+n*(e.x-t.x),y:"middle"===r?n<.5?t.y:e.y:"after"===r?n<1?t.y:e.y:n>0?e.y:t.y}}function yn(t,e,n,r){const o={x:t.cp2x,y:t.cp2y},i={x:e.cp1x,y:e.cp1y},c=pn(t,o,n),a=pn(o,i,n),u=pn(i,e,n),s=pn(c,a,n),f=pn(a,u,n);return pn(s,f,n)}const xn=new Map;function mn(t,e,n){return function(t,e){e=e||{};const n=t+JSON.stringify(e);let r=xn.get(n);return r||(r=new Intl.NumberFormat(t,e),xn.set(n,r)),r}(e,n).format(t)}function wn(t,e,n){return t?function(t,e){return{x:n=>t+t+e-n,setWidth(t){e=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}}(e,n):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function vn(t,e){let n,r;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,r=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=r)}function Mn(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function _n(t){return"angle"===t?{between:J,compare:K,normalize:U}:{between:et,compare:(t,e)=>t-e,normalize:t=>t}}function kn({start:t,end:e,count:n,loop:r,style:o}){return{start:t%n,end:e%n,loop:r&&(e-t+1)%n===0,style:o}}function On(t,e,n){if(!n)return[t];const{property:r,start:o,end:i}=n,c=e.length,{compare:a,between:u,normalize:s}=_n(r),{start:f,end:l,loop:h,style:d}=function(t,e,n){const{property:r,start:o,end:i}=n,{between:c,normalize:a}=_n(r),u=e.length;let s,f,{start:l,end:h,loop:d}=t;if(d){for(l+=u,h+=u,s=0,f=u;s<f&&c(a(e[l%u][r]),o,i);++s)l--,h--;l%=u,h%=u}return h<l&&(h+=u),{start:l,end:h,loop:d,style:t.style}}(t,e,n),g=[];let p,b,y,x=!1,m=null;const w=()=>x||u(o,y,p)&&0!==a(o,y),v=()=>!x||0===a(i,p)||u(i,y,p);for(let M=f,_=f;M<=l;++M)b=e[M%c],b.skip||(p=s(b[r]),p!==y&&(x=u(p,o,i),null===m&&w()&&(m=0===a(p,o)?M:_),null!==m&&v()&&(g.push(kn({start:m,end:M,loop:h,count:c,style:d})),m=null),_=M,y=p));return null!==m&&g.push(kn({start:m,end:l,loop:h,count:c,style:d})),g}function Tn(t,e){const n=[],r=t.segments;for(let o=0;o<r.length;o++){const i=On(r[o],t.points,e);i.length&&n.push(...i)}return n}function Pn(t,e){const n=t.points,r=t.options.spanGaps,o=n.length;if(!o)return[];const i=!!t._loop,{start:c,end:a}=function(t,e,n,r){let o=0,i=e-1;if(n&&!r)for(;o<e&&!t[o].skip;)o++;for(;o<e&&t[o].skip;)o++;for(o%=e,n&&(i+=o);i>o&&t[i%e].skip;)i--;return i%=e,{start:o,end:i}}(n,o,i,r);if(!0===r)return Sn(t,[{start:c,end:a,loop:i}],n,e);return Sn(t,function(t,e,n,r){const o=t.length,i=[];let c,a=e,u=t[e];for(c=e+1;c<=n;++c){const n=t[c%o];n.skip||n.stop?u.skip||(r=!1,i.push({start:e%o,end:(c-1)%o,loop:r}),e=a=n.stop?c:null):(a=c,u.skip&&(e=c)),u=n}return null!==a&&i.push({start:e%o,end:a%o,loop:r}),i}(n,c,a<c?a+o:a,!!t._fullLoop&&0===c&&a===o-1),n,e)}function Sn(t,e,n,r){return r&&r.setContext&&n?function(t,e,n,r){const o=t._chart.getContext(),i=Rn(t.options),{_datasetIndex:c,options:{spanGaps:a}}=t,u=n.length,s=[];let f=i,l=e[0].start,h=l;function d(t,e,r,o){const i=a?-1:1;if(t!==e){for(t+=u;n[t%u].skip;)t-=i;for(;n[e%u].skip;)e+=i;t%u!==e%u&&(s.push({start:t%u,end:e%u,loop:r,style:o}),f=o,l=e%u)}}for(const g of e){l=a?l:g.start;let t,e=n[l%u];for(h=l+1;h<=g.end;h++){const i=n[h%u];t=Rn(r.setContext(Fe(o,{type:"segment",p0:e,p1:i,p0DataIndex:(h-1)%u,p1DataIndex:h%u,datasetIndex:c}))),In(t,f)&&d(l,h-1,g.loop,f),e=i,f=t}l<h-1&&d(l,h-1,g.loop,f)}return s}(t,e,n,r):e}function Rn(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function In(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}}}]);