"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9331],{87226:function(e,t,n){n.d(t,{$:function(){return z}});var r=n(14293),a=n.n(r),i=n(18446),o=n.n(i),u=n(23560),l=n.n(u),s=n(1469),c=n.n(s),f=n(67294),p=n(94184),d=n.n(p),y=n(74524),m=n(13481),h=n(48710),v=n(86641),b=n(43815),g=n(2763),x=n(69055),A=n(52017),O=n(47523),P=n(77718),S=n(79896);function k(e){return k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function I(){return I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var a=F(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==k(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,i=M(u);function u(){var e;D(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).state={isAnimationFinished:!1},e.id=(0,x.EL)("recharts-bar-"),e.handleAnimationEnd=function(){var t=e.props.onAnimationEnd;e.setState({isAnimationFinished:!0}),t&&t()},e.handleAnimationStart=function(){var t=e.props.onAnimationStart;e.setState({isAnimationFinished:!1}),t&&t()},e}return t=u,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curData:e.data,prevData:t.curData}:e.data!==t.curData?{curData:e.data}:null}},{key:"renderRectangle",value:function(e,t){return f.isValidElement(e)?f.cloneElement(e,t):l()(e)?e(t):f.createElement(m.A,t)}}],(n=[{key:"renderRectanglesStatically",value:function(e){var t=this,n=this.props.shape,r=(0,S.L6)(this.props);return e&&e.map((function(e,a){var i=R(R(R({},r),e),{},{index:a});return f.createElement(h.m,I({className:"recharts-bar-rectangle"},(0,S.bw)(t.props,e,a),{key:"rectangle-".concat(a)}),u.renderRectangle(n,i))}))}},{key:"renderRectanglesWithAnimation",value:function(){var e=this,t=this.props,n=t.data,r=t.layout,a=t.isAnimationActive,i=t.animationBegin,o=t.animationDuration,u=t.animationEasing,l=t.animationId,s=this.state.prevData;return f.createElement(y.ZP,{begin:i,duration:o,isActive:a,easing:u,from:{t:0},to:{t:1},key:"bar-".concat(l),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(t){var a=t.t,i=n.map((function(e,t){var n=s&&s[t];if(n){var i=(0,x.k4)(n.x,e.x),o=(0,x.k4)(n.y,e.y),u=(0,x.k4)(n.width,e.width),l=(0,x.k4)(n.height,e.height);return R(R({},e),{},{x:i(a),y:o(a),width:u(a),height:l(a)})}if("horizontal"===r){var c=(0,x.k4)(0,e.height)(a);return R(R({},e),{},{y:e.y+e.height-c,height:c})}var f=(0,x.k4)(0,e.width)(a);return R(R({},e),{},{width:f})}));return f.createElement(h.m,null,e.renderRectanglesStatically(i))}))}},{key:"renderRectangles",value:function(){var e=this.props,t=e.data,n=e.isAnimationActive,r=this.state.prevData;return!(n&&t&&t.length)||r&&o()(r,t)?this.renderRectanglesStatically(t):this.renderRectanglesWithAnimation()}},{key:"renderBackground",value:function(){var e=this,t=this.props.data,n=(0,S.L6)(this.props.background);return t.map((function(t,r){t.value;var a=t.background,i=w(t,["value","background"]);if(!a)return null;var o=R(R(R(R(R({},i),{},{fill:"#eee"},a),n),(0,S.bw)(e.props,t,r)),{},{index:r,key:"background-bar-".concat(r),className:"recharts-bar-background-rectangle"});return u.renderRectangle(e.props.background,o)}))}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.data,n=e.xAxis,r=e.yAxis,a=e.layout,i=e.children,o=(0,A.NN)(i,v.W.displayName);if(!o)return null;var u="vertical"===a?t[0].height/2:t[0].width/2;function l(e,t){return{x:e.x,y:e.y,value:e.value,errorVal:(0,P.F$)(e,t)}}return o.map((function(e,i){return f.cloneElement(e,{key:"error-bar-".concat(i),data:t,xAxis:n,yAxis:r,layout:a,offset:u,dataPointFormatter:l})}))}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.data,r=e.className,i=e.xAxis,o=e.yAxis,u=e.left,l=e.top,s=e.width,c=e.height,p=e.isAnimationActive,y=e.background,m=e.id;if(t||!n||!n.length)return null;var v=this.state.isAnimationFinished,b=d()("recharts-bar",r),x=i&&i.allowDataOverflow||o&&o.allowDataOverflow,A=a()(m)?this.id:m;return f.createElement(h.m,{className:b},x?f.createElement("defs",null,f.createElement("clipPath",{id:"clipPath-".concat(A)},f.createElement("rect",{x:u,y:l,width:s,height:c}))):null,f.createElement(h.m,{className:"recharts-bar-rectangles",clipPath:x?"url(#clipPath-".concat(A,")"):null},y?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(),(!p||v)&&g.e.renderCallByParent(this.props,n))}}])&&T(t.prototype,n),r&&T(t,r),u}(f.PureComponent);z.displayName="Bar",z.defaultProps={xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",isAnimationActive:!O.x.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"},z.getComposedData=function(e){var t=e.props,n=e.item,r=e.barPosition,a=e.bandSize,i=e.xAxis,o=e.yAxis,u=e.xAxisTicks,l=e.yAxisTicks,s=e.stackedData,f=e.dataStartIndex,p=e.displayedData,d=e.offset,y=(0,P.Bu)(r,n);if(!y)return null;var m=t.layout,h=n.props,v=h.dataKey,g=h.children,O=h.minPointSize,S="horizontal"===m?o:i,k=s?S.scale.domain():null,w=(0,P.Yj)({numericAxis:S}),I=(0,A.NN)(g,b.b.displayName),E=p.map((function(e,t){var r,p,d,h,b,g;if(s?r=(0,P.Vv)(s[f+t],k):(r=(0,P.F$)(e,v),c()(r)||(r=[w,r])),"horizontal"===m){if(p=(0,P.Fy)({axis:i,ticks:u,bandSize:a,offset:y.offset,entry:e,index:t}),d=o.scale(r[1]),h=y.size,b=o.scale(r[0])-o.scale(r[1]),g={x:p,y:o.y,width:h,height:o.height},Math.abs(O)>0&&Math.abs(b)<Math.abs(O)){var A=(0,x.uY)(b||O)*(Math.abs(O)-Math.abs(b));d-=A,b+=A}}else p=i.scale(r[0]),d=(0,P.Fy)({axis:o,ticks:l,bandSize:a,offset:y.offset,entry:e,index:t}),h=i.scale(r[1])-i.scale(r[0]),b=y.size,g={x:i.x,y:d,width:i.width,height:b},Math.abs(O)>0&&Math.abs(h)<Math.abs(O)&&(h+=(0,x.uY)(h||O)*(Math.abs(O)-Math.abs(h)));return R(R(R({},e),{},{x:p,y:d,width:h,height:b,value:s?r:r[1],payload:e,background:g},I&&I[t]&&I[t].props),{},{tooltipPayload:[(0,P.Qo)(n,e)],tooltipPosition:{x:p+h/2,y:d+b/2}})}));return R({data:E,layout:m},d)}},86641:function(e,t,n){n.d(t,{W:function(){return c}});var r=n(67294),a=n(48710),i=n(79896);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e){var t=e.offset,n=e.layout,l=e.width,c=e.dataKey,f=e.data,p=e.dataPointFormatter,d=e.xAxis,y=e.yAxis,m=s(e,["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"]),h=(0,i.L6)(m),v=f.map((function(e,i){var s=p(e,c),f=s.x,m=s.y,v=s.value,b=s.errorVal;if(!b)return null;var g,x,A=[];if(Array.isArray(b)){var O=u(b,2);g=O[0],x=O[1]}else g=x=b;if("vertical"===n){var P=d.scale,S=m+t,k=S+l,w=S-l,I=P(v-g),E=P(v+x);A.push({x1:E,y1:k,x2:E,y2:w}),A.push({x1:I,y1:S,x2:E,y2:S}),A.push({x1:I,y1:k,x2:I,y2:w})}else if("horizontal"===n){var R=y.scale,j=f+t,D=j-l,T=j+l,C=R(v-g),M=R(v+x);A.push({x1:D,y1:M,x2:T,y2:M}),A.push({x1:j,y1:C,x2:j,y2:M}),A.push({x1:D,y1:C,x2:T,y2:C})}return r.createElement(a.m,o({className:"recharts-errorBar",key:"bar-".concat(i)},h),A.map((function(e,t){return r.createElement("line",o({},e,{key:"line-".concat(t)}))})))}));return r.createElement(a.m,{className:"recharts-errorBars"},v)}c.defaultProps={stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"},c.displayName="ErrorBar"},56880:function(e,t,n){n.d(t,{x:function(){return z}});var r=n(18446),a=n.n(r),i=n(23560),o=n.n(i),u=n(14293),l=n.n(u),s=n(67294),c=n(74524),f=n(94184),p=n.n(f),d=n(33508),y=n(93061),m=n(48710),h=n(2763),v=n(86641),b=n(69055),g=n(52017),x=n(47523),A=n(77718),O=n(79896);function P(e){return P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var a=F(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,i=M(u);function u(){var e;D(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=i.call.apply(i,[this].concat(n))).mainCurve=void 0,e.state={isAnimationFinished:!0,totalLength:0},e.getStrokeDasharray=function(e,t,n){for(var r=n.reduce((function(e,t){return e+t})),a=Math.floor(e/r),i=e%r,o=t-e,l=[],s=0,c=0;;c+=n[s],++s)if(c+n[s]>i){l=[].concat(R(n.slice(0,s)),[i-c]);break}var f=l.length%2===0?[0,o]:[o];return[].concat(R(u.repeat(n,a)),R(l),f).map((function(e){return"".concat(e,"px")})).join(", ")},e.id=(0,b.EL)("recharts-line-"),e.pathRef=function(t){e.mainCurve=t},e.handleAnimationEnd=function(){e.setState({isAnimationFinished:!0}),e.props.onAnimationEnd&&e.props.onAnimationEnd()},e.handleAnimationStart=function(){e.setState({isAnimationFinished:!1}),e.props.onAnimationStart&&e.props.onAnimationStart()},e}return t=u,r=[{key:"getDerivedStateFromProps",value:function(e,t){return e.animationId!==t.prevAnimationId?{prevAnimationId:e.animationId,curPoints:e.points,prevPoints:t.curPoints}:e.points!==t.curPoints?{curPoints:e.points}:null}},{key:"repeat",value:function(e,t){for(var n=e.length%2!==0?[].concat(R(e),[0]):e,r=[],a=0;a<t;++a)r=[].concat(R(r),R(n));return r}},{key:"renderDotItem",value:function(e,t){var n;if(s.isValidElement(e))n=s.cloneElement(e,t);else if(o()(e))n=e(t);else{var r=p()("recharts-line-dot",e?e.className:"");n=s.createElement(y.o,k({},t,{className:r}))}return n}}],(n=[{key:"componentDidMount",value:function(){if(this.props.isAnimationActive){var e=this.getTotalLength();this.setState({totalLength:e})}}},{key:"getTotalLength",value:function(){var e=this.mainCurve;try{return e&&e.getTotalLength&&e.getTotalLength()||0}catch(t){return 0}}},{key:"renderErrorBar",value:function(){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var e=this.props,t=e.points,n=e.xAxis,r=e.yAxis,a=e.layout,i=e.children,o=(0,g.NN)(i,v.W.displayName);if(!o)return null;function u(e,t){return{x:e.x,y:e.y,value:e.value,errorVal:(0,A.F$)(e.payload,t)}}return o.map((function(e,i){return s.cloneElement(e,{key:"bar-".concat(i),data:t,xAxis:n,yAxis:r,layout:a,dataPointFormatter:u})}))}},{key:"renderDots",value:function(e,t){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var n=this.props,r=n.dot,a=n.points,i=n.dataKey,o=(0,O.L6)(this.props),l=(0,O.L6)(r,!0),c=a.map((function(e,t){var n=I(I(I({key:"dot-".concat(t),r:3},o),l),{},{value:e.value,dataKey:i,cx:e.x,cy:e.y,index:t,payload:e.payload});return u.renderDotItem(r,n)})),f={clipPath:e?"url(#clipPath-".concat(t,")"):null};return s.createElement(m.m,k({className:"recharts-line-dots",key:"dots"},f),c)}},{key:"renderCurveStatically",value:function(e,t,n,r){var a=this.props,i=a.type,o=a.layout,u=a.connectNulls,l=(a.ref,S(a,["type","layout","connectNulls","ref"])),c=I(I(I({},(0,O.L6)(l,!0)),{},{fill:"none",className:"recharts-line-curve",clipPath:t?"url(#clipPath-".concat(n,")"):null,points:e},r),{},{type:i,layout:o,connectNulls:u});return s.createElement(d.H,k({},c,{pathRef:this.pathRef}))}},{key:"renderCurveWithAnimation",value:function(e,t){var n=this,r=this.props,a=r.points,i=r.strokeDasharray,o=r.isAnimationActive,u=r.animationBegin,l=r.animationDuration,f=r.animationEasing,p=r.animationId,d=r.animateNewValues,y=r.width,m=r.height,h=this.state,v=h.prevPoints,g=h.totalLength;return s.createElement(c.ZP,{begin:u,duration:l,isActive:o,easing:f,from:{t:0},to:{t:1},key:"line-".concat(p),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},(function(r){var o=r.t;if(v){var u=v.length/a.length,l=a.map((function(e,t){var n=Math.floor(t*u);if(v[n]){var r=v[n],a=(0,b.k4)(r.x,e.x),i=(0,b.k4)(r.y,e.y);return I(I({},e),{},{x:a(o),y:i(o)})}if(d){var l=(0,b.k4)(2*y,e.x),s=(0,b.k4)(m/2,e.y);return I(I({},e),{},{x:l(o),y:s(o)})}return I(I({},e),{},{x:e.x,y:e.y})}));return n.renderCurveStatically(l,e,t)}var s,c=(0,b.k4)(0,g)(o);if(i){var f="".concat(i).split(/[,\s]+/gim).map((function(e){return parseFloat(e)}));s=n.getStrokeDasharray(c,g,f)}else s="".concat(c,"px ").concat(g-c,"px");return n.renderCurveStatically(a,e,t,{strokeDasharray:s})}))}},{key:"renderCurve",value:function(e,t){var n=this.props,r=n.points,i=n.isAnimationActive,o=this.state,u=o.prevPoints,l=o.totalLength;return i&&r&&r.length&&(!u&&l>0||!a()(u,r))?this.renderCurveWithAnimation(e,t):this.renderCurveStatically(r,e,t)}},{key:"render",value:function(){var e=this.props,t=e.hide,n=e.dot,r=e.points,a=e.className,i=e.xAxis,o=e.yAxis,u=e.top,c=e.left,f=e.width,d=e.height,y=e.isAnimationActive,v=e.id;if(t||!r||!r.length)return null;var b=this.state.isAnimationFinished,g=1===r.length,x=p()("recharts-line",a),A=i&&i.allowDataOverflow||o&&o.allowDataOverflow,O=l()(v)?this.id:v;return s.createElement(m.m,{className:x},A?s.createElement("defs",null,s.createElement("clipPath",{id:"clipPath-".concat(O)},s.createElement("rect",{x:c,y:u,width:f,height:d}))):null,!g&&this.renderCurve(A,O),this.renderErrorBar(),(g||n)&&this.renderDots(A,O),(!y||b)&&h.e.renderCallByParent(this.props,r))}}])&&T(t.prototype,n),r&&T(t,r),u}(s.PureComponent);z.displayName="Line",z.defaultProps={xAxisId:0,yAxisId:0,connectNulls:!1,activeDot:!0,dot:!0,legendType:"line",stroke:"#3182bd",strokeWidth:1,fill:"#fff",points:[],isAnimationActive:!x.x.isSsr,animateNewValues:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",hide:!1},z.getComposedData=function(e){var t=e.props,n=e.xAxis,r=e.yAxis,a=e.xAxisTicks,i=e.yAxisTicks,o=e.dataKey,u=e.bandSize,s=e.displayedData,c=e.offset,f=t.layout;return I({points:s.map((function(e,t){var s=(0,A.F$)(e,o);return"horizontal"===f?{x:(0,A.Hv)({axis:n,ticks:a,bandSize:u,entry:e,index:t}),y:l()(s)?null:r.scale(s),value:s,payload:e}:{x:l()(s)?null:n.scale(s),y:(0,A.Hv)({axis:r,ticks:i,bandSize:u,entry:e,index:t}),value:s,payload:e}})),layout:f},c)}},94831:function(e,t,n){n.d(t,{v:function(){return l}});var r=n(36943),a=n(87226),i=n(3023),o=n(75358),u=n(97187),l=(0,r.z)({chartName:"BarChart",GraphicalChild:a.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:i.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:u.t9})},98687:function(e,t,n){n.d(t,{w:function(){return l}});var r=n(36943),a=n(56880),i=n(3023),o=n(75358),u=n(97187),l=(0,r.z)({chartName:"LineChart",GraphicalChild:a.x,axisComponents:[{axisType:"xAxis",AxisComp:i.K},{axisType:"yAxis",AxisComp:o.B}],formatAxisMap:u.t9})},72510:function(e,t,n){n.d(t,{v:function(){return B}});var r,a,i=n(67294),o=n(32984),u=n(12351),l=n(9362),s=n(94192),c=n(16723),f=n(23784),p=n(19946),d=n(61363),y=n(11497),m=n(64103),h=n(84575),v=n(90292),b=n(31591),g=n(16567),x=n(14157),A=n(51074),O=n(73781),P=((a=P||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a),S=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(S||{}),k=((r=k||{})[r.OpenMenu=0]="OpenMenu",r[r.CloseMenu=1]="CloseMenu",r[r.GoToItem=2]="GoToItem",r[r.Search=3]="Search",r[r.ClearSearch=4]="ClearSearch",r[r.RegisterItem=5]="RegisterItem",r[r.UnregisterItem=6]="UnregisterItem",r);function w(e,t=(e=>e)){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=(0,h.z2)(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),a=n?r.indexOf(n):null;return-1===a&&(a=null),{items:r,activeItemIndex:a}}let I={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=w(e),a=(0,y.d)(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:a,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),a=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled})),i=a?e.items.indexOf(a):-1;return-1===i||i===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=w(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...n}},6:(e,t)=>{let n=w(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},E=(0,i.createContext)(null);function R(e){let t=(0,i.useContext)(E);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,R),t}return t}function j(e,t){return(0,o.E)(t.type,I,e,t)}E.displayName="MenuContext";let D=i.Fragment,T=(0,u.yV)((function(e,t){let n=(0,i.useReducer)(j,{menuState:1,buttonRef:(0,i.createRef)(),itemsRef:(0,i.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:a,buttonRef:l},s]=n,c=(0,f.T)(t);(0,v.O)([l,a],((e,t)=>{var n;s({type:1}),(0,h.sP)(t,h.tJ.Loose)||(e.preventDefault(),null==(n=l.current)||n.focus())}),0===r);let p=(0,i.useMemo)((()=>({open:0===r})),[r]),d=e,y={ref:c};return i.createElement(E.Provider,{value:n},i.createElement(g.up,{value:(0,o.E)(r,{0:g.ZM.Open,1:g.ZM.Closed})},(0,u.sY)({ourProps:y,theirProps:d,slot:p,defaultTag:D,name:"Menu"})))})),C=(0,u.yV)((function(e,t){var n;let[r,a]=R("Menu.Button"),o=(0,f.T)(r.buttonRef,t),l=`headlessui-menu-button-${(0,p.M)()}`,c=(0,s.G)(),h=(0,O.z)((e=>{switch(e.key){case d.R.Space:case d.R.Enter:case d.R.ArrowDown:e.preventDefault(),e.stopPropagation(),a({type:0}),c.nextFrame((()=>a({type:2,focus:y.T.First})));break;case d.R.ArrowUp:e.preventDefault(),e.stopPropagation(),a({type:0}),c.nextFrame((()=>a({type:2,focus:y.T.Last})))}})),v=(0,O.z)((e=>{if(e.key===d.R.Space)e.preventDefault()})),b=(0,O.z)((t=>{if((0,m.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===r.menuState?(a({type:1}),c.nextFrame((()=>{var e;return null==(e=r.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),a({type:0})))})),g=(0,i.useMemo)((()=>({open:0===r.menuState})),[r]),A=e,P={ref:o,id:l,type:(0,x.f)(e,r.buttonRef),"aria-haspopup":!0,"aria-controls":null==(n=r.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===r.menuState,onKeyDown:h,onKeyUp:v,onClick:b};return(0,u.sY)({ourProps:P,theirProps:A,slot:g,defaultTag:"button",name:"Menu.Button"})})),M=u.AN.RenderStrategy|u.AN.Static,N=(0,u.yV)((function(e,t){var n,r;let[a,o]=R("Menu.Items"),c=(0,f.T)(a.itemsRef,t),m=(0,A.i)(a.itemsRef),h=`headlessui-menu-items-${(0,p.M)()}`,v=(0,s.G)(),x=(0,g.oJ)(),P=null!==x?x===g.ZM.Open:0===a.menuState;(0,i.useEffect)((()=>{let e=a.itemsRef.current;!e||0===a.menuState&&e!==(null==m?void 0:m.activeElement)&&e.focus({preventScroll:!0})}),[a.menuState,a.itemsRef,m]),(0,b.B)({container:a.itemsRef.current,enabled:0===a.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let S=(0,O.z)((e=>{var t,n;switch(v.dispose(),e.key){case d.R.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),o({type:3,value:e.key});case d.R.Enter:if(e.preventDefault(),e.stopPropagation(),o({type:1}),null!==a.activeItemIndex){let{dataRef:e}=a.items[a.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}(0,l.k)().nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),o({type:2,focus:y.T.Next});case d.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),o({type:2,focus:y.T.Previous});case d.R.Home:case d.R.PageUp:return e.preventDefault(),e.stopPropagation(),o({type:2,focus:y.T.First});case d.R.End:case d.R.PageDown:return e.preventDefault(),e.stopPropagation(),o({type:2,focus:y.T.Last});case d.R.Escape:e.preventDefault(),e.stopPropagation(),o({type:1}),(0,l.k)().nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case d.R.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(o({type:3,value:e.key}),v.setTimeout((()=>o({type:4})),350))}})),k=(0,O.z)((e=>{if(e.key===d.R.Space)e.preventDefault()})),w=(0,i.useMemo)((()=>({open:0===a.menuState})),[a]),I=e,E={"aria-activedescendant":null===a.activeItemIndex||null==(n=a.items[a.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=a.buttonRef.current)?void 0:r.id,id:h,onKeyDown:S,onKeyUp:k,role:"menu",tabIndex:0,ref:c};return(0,u.sY)({ourProps:E,theirProps:I,slot:w,defaultTag:"div",features:M,visible:P,name:"Menu.Items"})})),F=i.Fragment,z=(0,u.yV)((function(e,t){let{disabled:n=!1,...r}=e,[a,o]=R("Menu.Item"),s=`headlessui-menu-item-${(0,p.M)()}`,d=null!==a.activeItemIndex&&a.items[a.activeItemIndex].id===s,m=(0,i.useRef)(null),h=(0,f.T)(t,m);(0,c.e)((()=>{if(0!==a.menuState||!d||0===a.activationTrigger)return;let e=(0,l.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=m.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[m,d,a.menuState,a.activationTrigger,a.activeItemIndex]);let v=(0,i.useRef)({disabled:n,domRef:m});(0,c.e)((()=>{v.current.disabled=n}),[v,n]),(0,c.e)((()=>{var e,t;v.current.textValue=null==(t=null==(e=m.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[v,m]),(0,c.e)((()=>(o({type:5,id:s,dataRef:v}),()=>o({type:6,id:s}))),[v,s]);let b=(0,O.z)((e=>{if(n)return e.preventDefault();o({type:1}),(0,l.k)().nextFrame((()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))})),g=(0,O.z)((()=>{if(n)return o({type:2,focus:y.T.Nothing});o({type:2,focus:y.T.Specific,id:s})})),x=(0,O.z)((()=>{n||d||o({type:2,focus:y.T.Specific,id:s,trigger:0})})),A=(0,O.z)((()=>{n||!d||o({type:2,focus:y.T.Nothing})})),P=(0,i.useMemo)((()=>({active:d,disabled:n})),[d,n]);return(0,u.sY)({ourProps:{id:s,ref:h,role:"menuitem",tabIndex:!0===n?void 0:-1,"aria-disabled":!0===n||void 0,disabled:void 0,onClick:b,onFocus:g,onPointerMove:x,onMouseMove:x,onPointerLeave:A,onMouseLeave:A},theirProps:r,slot:P,defaultTag:F,name:"Menu.Item"})})),B=Object.assign(T,{Button:C,Items:N,Item:z})}}]);