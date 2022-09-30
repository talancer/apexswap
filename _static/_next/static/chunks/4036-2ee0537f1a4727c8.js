(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4036],{27484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",s="hour",a="day",u="week",c="month",f="quarter",l="year",h="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},S={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),o=n-i<0,s=e.clone().add(r+(o?-1:1),c);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:u,d:a,D:h,h:s,m:o,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",T={};T[D]=v;var $=function(t){return t instanceof O},g=function t(e,n,r){var i;if(!e)return D;if("string"==typeof e){var o=e.toLowerCase();T[o]&&(i=o),n&&(T[o]=n,i=o);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var a=e.name;T[a]=e,i=a}return!r&&i&&(D=i),i||!r&&D},M=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},w=S;w.l=g,w.i=$,w.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function v(t){this.$L=g(t.locale,null,!0),this.parse(t)}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return w},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return M(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<M(t)},y.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!w.u(e)||e,f=w.p(t),d=function(t,e){var i=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,y=this.$D,S="set"+(this.$u?"UTC":"");switch(f){case l:return r?d(1,0):d(31,11);case c:return r?d(1,v):d(0,v+1);case u:var D=this.$locale().weekStart||0,T=(m<D?m+7:m)-D;return d(r?y-T:y+(6-T),v);case a:case h:return p(S+"Hours",0);case s:return p(S+"Minutes",1);case o:return p(S+"Seconds",2);case i:return p(S+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,u=w.p(t),f="set"+(this.$u?"UTC":""),d=(n={},n[a]=f+"Date",n[h]=f+"Date",n[c]=f+"Month",n[l]=f+"FullYear",n[s]=f+"Hours",n[o]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[u],p=u===a?this.$D+(e-this.$W):e;if(u===c||u===l){var m=this.clone().set(h,1);m.$d[d](p),m.init(),this.$d=m.set(h,Math.min(this.$D,m.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[w.p(t)]()},y.add=function(r,f){var h,d=this;r=Number(r);var p=w.p(f),m=function(t){var e=M(d);return w.w(e.date(e.date()+Math.round(t*r)),d)};if(p===c)return this.set(c,this.$M+r);if(p===l)return this.set(l,this.$y+r);if(p===a)return m(1);if(p===u)return m(7);var v=(h={},h[o]=e,h[s]=n,h[i]=t,h)[p]||1,y=this.$d.getTime()+r*v;return w.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),o=this.$H,s=this.$m,a=this.$M,u=n.weekdays,c=n.months,f=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].substr(0,o)},l=function(t){return w.s(o%12||12,t,"0")},h=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:w.s(a+1,2,"0"),MMM:f(n.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,u,2),ddd:f(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(o),HH:w.s(o,2,"0"),h:l(1),hh:l(2),a:h(o,s,!0),A:h(o,s,!1),m:String(s),mm:w.s(s,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:i};return r.replace(m,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,d){var p,m=w.p(h),v=M(r),y=(v.utcOffset()-this.utcOffset())*e,S=this-v,D=w.m(this,v);return D=(p={},p[l]=D/12,p[c]=D,p[f]=D/3,p[u]=(S-y)/6048e5,p[a]=(S-y)/864e5,p[s]=S/n,p[o]=S/e,p[i]=S/t,p)[m]||S,d?D:w.a(D)},y.daysInMonth=function(){return this.endOf(c).$D},y.$locale=function(){return T[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=g(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return w.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),b=O.prototype;return M.prototype=b,[["$ms",r],["$s",i],["$m",o],["$H",s],["$W",a],["$M",c],["$y",l],["$D",h]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,O,M),t.$i=!0),M},M.locale=g,M.isDayjs=$,M.unix=function(t){return M(1e3*t)},M.en=T[D],M.Ls=T,M.p={},M}()},98130:function(t,e,n){"use strict";n.d(e,{Bu:function(){return m}});var r=n(67294),i=n(45697);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function l(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return l(this,n)}}function d(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),i=r?r[1]:"",o=r?r[3]:"",s=r?r[2]:n,a=s.length>=e?s:(d(Array(e)).map((function(){return"0"})).join("")+s).slice(-1*e);return"".concat(i).concat(a).concat(o)}var v={daysInHours:!1,zeroPadTime:2};function y(t,e){var n=t.days,r=t.hours,i=t.minutes,o=t.seconds,s=Object.assign(Object.assign({},v),e),a=s.daysInHours,u=s.zeroPadTime,c=s.zeroPadDays,f=void 0===c?u:c,l=Math.min(2,u),h=a?m(r+24*n,u):m(r,l);return{days:a?"":m(n,f),hours:h,minutes:m(i,l),seconds:m(o,l)}}var S=function(t){u(n,t);var e=h(n);function n(){var t;return o(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return a(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,r.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(r.Component);S.propTypes={count:i.number,children:i.element,onComplete:i.func};var D=function(t){u(n,t);var e=h(n);function n(t){var i;if(o(this,n),(i=e.call(this,t)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,r.createRef)(),i.tick=function(){var t=i.calcTimeDelta(),e=t.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(t,void 0,e)},i.start=function(){if(!i.isStarted()){var t=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=t?i.calcOffsetStartTimestamp()-t:0;var e=i.calcTimeDelta();i.setTimeDeltaState(e,"STARTED",i.props.onStart),i.props.controlled||e.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},i.handleOnComplete=function(t){i.props.onComplete&&i.props.onComplete(t)},t.date){var s=i.calcTimeDelta();i.state={timeDelta:s,status:s.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return a(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,r=t.precision,i=t.controlled,o=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.now,i=void 0===r?Date.now:r,o=n.precision,s=void 0===o?0:o,a=n.controlled,u=n.offsetTime,c=void 0===u?0:u,f=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,a||(e+=c);var l=a?e:e-i(),h=Math.min(20,Math.max(0,s)),d=Math.round(1e3*parseFloat(((f?l:Math.max(0,l))/1e3).toFixed(h))),p=Math.abs(d)/1e3;return{total:d,days:Math.floor(p/86400),hours:Math.floor(p/3600%24),minutes:Math.floor(p/60%60),seconds:Math.floor(p%60),milliseconds:Number((p%1*1e3).toFixed()),completed:d<=0}}(e,{now:n,precision:r,controlled:i,offsetTime:this.offsetTime,overtime:o})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var r=this;if(this.mounted){var i;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),i=this.handleOnComplete);return this.setState((function(n){var i=e||n.status;return t.completed&&!r.props.overtime?i="COMPLETED":e||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:t,status:i}}),(function(){n&&n(r.state.timeDelta),i&&i(r.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,r=t.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:y(i,{daysInHours:e,zeroPadTime:n,zeroPadDays:r})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,i=t.onComplete;return(0,r.createElement)(S,{ref:this.legacyCountdownRef,count:e,onComplete:i},n)}var o=this.props,s=o.className,a=o.overtime,u=o.children,c=o.renderer,f=this.getRenderProps();if(c)return c(f);if(u&&this.state.timeDelta.completed&&!a)return(0,r.cloneElement)(u,{countdown:f});var l=f.formatted,h=l.days,d=l.hours,p=l.minutes,m=l.seconds;return(0,r.createElement)("span",{className:s},f.total<0?"-":"",h,h?":":"",d,":",p,":",m)}}]),n}(r.Component);D.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),D.propTypes={date:(0,i.oneOfType)([(0,i.instanceOf)(Date),i.string,i.number]),daysInHours:i.bool,zeroPadTime:i.number,zeroPadDays:i.number,controlled:i.bool,intervalDelay:i.number,precision:i.number,autoStart:i.bool,overtime:i.bool,className:i.string,children:i.element,renderer:i.func,now:i.func,onMount:i.func,onStart:i.func,onPause:i.func,onStop:i.func,onTick:i.func,onComplete:i.func},e.ZP=D},64638:function(t,e,n){"use strict";var r=n(67294),i=n(88387),o=["mousedown","touchstart"];e.Z=function(t,e,n){void 0===n&&(n=o);var s=r.useRef(e);r.useEffect((function(){s.current=e}),[e]),r.useEffect((function(){for(var e=function(e){var n=t.current;n&&!n.contains(e.target)&&s.current(e)},r=0,o=n;r<o.length;r++){var a=o[r];i.on(document,a,e)}return function(){for(var t=0,r=n;t<r.length;t++){var o=r[t];i.off(document,o,e)}}}),[n,t])}}}]);