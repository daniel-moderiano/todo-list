(()=>{"use strict";let t={Inbox:[]},e="Inbox",n="";function r(){return JSON.parse(JSON.stringify(t))}function a(){return e}function o(t){e=t}function i(t,e,n,r,a=((t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})()){return{title:t,description:e,dueDate:n,priority:r,id:a}}function d(){localStorage.setItem("lists",JSON.stringify(t))}function s(){return JSON.parse(localStorage.getItem("lists"))}function u(e,n){let r=t[e].findIndex((t=>t.id===n));return-1===r?void console.log("ID not found"):t[e][r]}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function l(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function m(t){c(1,arguments);var e=l(t);return!isNaN(e)}var h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var g,w={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function v(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var d=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[d]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function p(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,d=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?_(s,(function(t){return t.test(d)})):b(s,(function(t){return t.test(d)}));i=t.valueCallback?t.valueCallback(u):u,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(d.length);return{value:i,rest:c}}}function b(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function _(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const C={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof h[t]?h[t]:1===e?h[t].one:h[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:function(t,e,n,r){return y[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:v({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:v({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:v({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:v({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:v({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(g.matchPattern);if(!n)return null;var r=n[0],a=t.match(g.parsePattern);if(!a)return null;var o=g.valueCallback?g.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function S(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function x(t,e){c(2,arguments);var n=l(t).getTime(),r=S(e);return new Date(n+r)}function q(t,e){c(2,arguments);var n=S(e);return x(t,-n)}function T(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const M=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===e?r%100:r,e.length)},k=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):T(n+1,2)},E=function(t,e){return T(t.getUTCDate(),e.length)},L=function(t,e){return T(t.getUTCHours()%12||12,e.length)},D=function(t,e){return T(t.getUTCHours(),e.length)},P=function(t,e){return T(t.getUTCMinutes(),e.length)},U=function(t,e){return T(t.getUTCSeconds(),e.length)},N=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),e.length)};var W=864e5;function Y(t){c(1,arguments);var e=1,n=l(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function O(t){c(1,arguments);var e=l(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=Y(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=Y(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function A(t){c(1,arguments);var e=O(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Y(n);return r}var z=6048e5;function F(t,e){c(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:S(a),i=null==n.weekStartsOn?o:S(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=l(t),s=d.getUTCDay(),u=(s<i?7:0)+s-i;return d.setUTCDate(d.getUTCDate()-u),d.setUTCHours(0,0,0,0),d}function H(t,e){c(1,arguments);var n=l(t,e),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,d=null==i?1:S(i),s=null==a.firstWeekContainsDate?d:S(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=new Date(0);u.setUTCFullYear(r+1,0,s),u.setUTCHours(0,0,0,0);var m=F(u,e),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var f=F(h,e);return n.getTime()>=m.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function X(t,e){c(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:S(a),i=null==n.firstWeekContainsDate?o:S(n.firstWeekContainsDate),d=H(t,e),s=new Date(0);s.setUTCFullYear(d,0,i),s.setUTCHours(0,0,0,0);var u=F(s,e);return u}var B=6048e5;function I(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+T(o,2)}function Q(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}const G={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return M(t,e)},Y:function(t,e,n,r){var a=H(t,r),o=a>0?a:1-a;return"YY"===e?T(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):T(o,e.length)},R:function(t,e){return T(O(t),e.length)},u:function(t,e){return T(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return k(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){c(1,arguments);var n=l(t),r=F(n,e).getTime()-X(n,e).getTime();return Math.round(r/B)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},I:function(t,e,n){var r=function(t){c(1,arguments);var e=l(t),n=Y(e).getTime()-A(e).getTime();return Math.round(n/z)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):T(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):E(t,e)},D:function(t,e,n){var r=function(t){c(1,arguments);var e=l(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/W)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):T(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return T(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return T(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return T(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return L(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):D(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):P(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):U(t,e)},S:function(t,e){return N(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Q(a);case"XXXX":case"XX":return j(a);case"XXXXX":case"XXX":default:return j(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Q(a);case"xxxx":case"xx":return j(a);case"xxxxx":case"xxx":default:return j(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+I(a,":");case"OOOO":default:return"GMT"+j(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+I(a,":");case"zzzz":default:return"GMT"+j(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return T(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return T((r._originalDate||t).getTime(),e.length)}};function R(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function J(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const $={p:J,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return R(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",R(a,e)).replace("{{time}}",J(o,e))}};function V(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var K=["D","DD"],Z=["YY","YYYY"];function tt(t){return-1!==K.indexOf(t)}function et(t){return-1!==Z.indexOf(t)}function nt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var rt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,at=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ot=/^'([^]*?)'?$/,it=/''/g,dt=/[a-zA-Z]/;function st(t){return t.match(ot)[1].replace(it,"'")}function ut(){!function(){const t=document.querySelector(".todos__list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild)}(),document.querySelector(".todos__current-list").textContent=a(),s()[a()].forEach((function(t){!function(t){const e=document.querySelector(".todos__list"),n=document.createElement("li"),r=document.createElement("div"),a=document.createElement("h5"),o=document.createElement("button"),i=document.createElement("img"),d=document.createElement("p"),s=document.createElement("p"),u=document.createElement("span"),h=document.createElement("div"),f=document.createElement("label"),g=document.createElement("input"),w=function(){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","24"),t.setAttribute("height","24"),e.setAttribute("fill","currentColor"),e.setAttribute("d","M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"),t.appendChild(e),t}(),y=document.createElement("button"),v=document.createElement("img");switch(n.classList.add("todo"),n.dataset.id=t.id,r.classList.add("todo__container"),r.dataset.id=t.id,a.classList.add("todo__title"),a.textContent=t.title,a.dataset.id=t.id,o.type="button",o.classList.add("todo__delete"),o.dataset.id=t.id,i.classList.add("todo__delete-icon"),i.dataset.id=t.id,i.src="icons/close.svg",d.classList.add("todo__description"),d.id="todo__description",d.dataset.id=t.id,s.classList.add("todo__date"),s.dataset.id=t.id,u.classList.add("todo__priority"),u.textContent=t.priority,h.className="checkbox-container",f.setAttribute("for","todo__checkbox"),f.classList.add("todo__label"),g.id="todo__checkbox",g.type="checkbox",g.classList.add("todo__checkbox"),g.setAttribute("aria-label","Mark task as completed"),g.dataset.id=t.id,t.priority){case"low":g.classList.add("todo__checkbox--low");break;case"medium":g.classList.add("todo__checkbox--medium");break;case"high":g.classList.add("todo__checkbox--high")}w.classList.add("tick"),y.className="todo__edit",y.type="button",v.classList.add("todo__edit-icon"),v.src="icons/edit.svg",v.dataset.id=t.id,""===t.description?d.style.display="none":d.textContent=t.description,""===t.dueDate?d.style.paddingBottom="0":s.textContent=`Due ${function(t){let e=parseInt(t.slice(0,4)),n=parseInt(t.slice(5,7))-1,r=parseInt(t.slice(8,10));return function(t,e,n){c(2,arguments);var r=String(e),a=n||{},o=a.locale||C,i=o.options&&o.options.firstWeekContainsDate,d=null==i?1:S(i),s=null==a.firstWeekContainsDate?d:S(a.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var u=o.options&&o.options.weekStartsOn,h=null==u?0:S(u),f=null==a.weekStartsOn?h:S(a.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=l(t);if(!m(g))throw new RangeError("Invalid time value");var w=q(g,V(g)),y={firstWeekContainsDate:s,weekStartsOn:f,locale:o,_originalDate:g};return r.match(at).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,$[e])(t,o.formatLong,y):t})).join("").match(rt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return st(n);var i=G[r];if(i)return!a.useAdditionalWeekYearTokens&&et(n)&&nt(n,e,t),!a.useAdditionalDayOfYearTokens&&tt(n)&&nt(n,e,t),i(w,n,o.localize,y);if(r.match(dt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(e,n,r),"d MMM yyyy")}(t.dueDate)}`,""===t.dueDate&&""===t.description&&(a.style.paddingBottom="0"),n.appendChild(r),h.appendChild(f),h.appendChild(w),h.appendChild(g),y.appendChild(v),o.appendChild(i),r.appendChild(h),r.appendChild(a),r.appendChild(d),r.appendChild(s),r.appendChild(u),r.appendChild(o),r.appendChild(y),e.appendChild(n)}(t)}))}function ct(t){document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.add("list-name--selected"):e.classList.remove("list-name--selected")}))}function lt(t){document.querySelectorAll(".list-item").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.add("list-item--selected"):e.classList.remove("list-item--selected")}))}function mt(t){const e=document.createElement("li"),n=document.createElement("h4"),r=document.createElement("button"),a=document.createElement("img");a.src="icons/list.svg",a.classList.add("list-icon"),e.classList.add("list-item"),e.dataset.name=t,n.textContent=t,n.classList.add("list-name"),n.dataset.name=t,r.classList.add("list-btn"),r.dataset.name=t,r.appendChild(function(){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path"),n=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","24px"),t.setAttribute("height","24px"),t.setAttribute("viewBox","0 0 24 24"),e.setAttribute("d","M0 0h24v24H0z"),e.setAttribute("fill","none"),n.setAttribute("d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),t.appendChild(e),t.appendChild(n),t}()),e.appendChild(a),e.appendChild(n),e.appendChild(r),document.querySelector(".added-lists__list").appendChild(e)}function ht(){!function(){const t=document.querySelector("#todo-form__list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild)}(),function(){const t=document.querySelector("#todo-form__list");for(const e in r()){const n=document.createElement("option");n.value=e,n.textContent=e,n.className="list-option",t.appendChild(n)}}(),document.querySelectorAll(".list-option").forEach((function(t){t.value===a()&&t.setAttribute("selected","")}))}function ft(){document.querySelectorAll(".added-lists__list li").forEach((function(t){t.remove()})),function(){let t=r();for(const e in t)"Inbox"!=e&&mt(e)}()}function gt(){return{title:document.querySelector("#todo-form__title").value,description:document.querySelector("#todo-form__description").value,dueDate:document.querySelector("#todo-form__date").value,priority:document.querySelector("#todo-form__priority").value,list:document.querySelector("#todo-form__list").value}}function wt(t){t.style.display="flex"}function yt(t){t.style.display="none"}function vt(t,e){t.target===e&&(e.style.display="none")}function pt(t,e){""===t.value.trim()?(e.disabled=!0,e.classList.contains("disabled")||e.classList.add("disabled")):(e.disabled=!1,e.classList.contains("disabled")&&e.classList.remove("disabled"))}localStorage.getItem("lists")&&(t=s()),d(),ft(),ut(),function(){const e=document.querySelector(".add-modal"),r=document.querySelector(".todo-form__btn"),a=document.querySelector(".add-modal__close"),o=document.querySelector("#todo-form__title");a.addEventListener("click",(()=>yt(e))),window.addEventListener("click",(t=>{vt(t,e)})),o.addEventListener("input",(()=>{pt(o,r)})),r.addEventListener("click",(()=>{e.classList.contains("edit")?(function(){let e=gt(),r=i(e.title,e.description,e.dueDate,e.priority);!function(e,n,r){let a=t[e].findIndex((t=>t.id===n));-1!==a?t[e][a]=r:console.log("ID not found")}(e.list,n,r)}(),d(),yt(e),ut()):(function(){let e=gt();var n,r;n=i(e.title,e.description,e.dueDate,e.priority),r=e.list,t[r].push(n)}(),d(),yt(e),ut())}))}(),function(){let t=document.querySelector(".list-modal");document.querySelector(".add-list").addEventListener("click",(()=>{document.querySelector("#list-form__input").value="",document.querySelector(".list-modal__btn").disabled=!0,wt(t),document.querySelector("#list-form__input").focus(),document.querySelector(".list-modal__btn").classList.add("disabled")})),document.querySelector(".list-modal__close").addEventListener("click",(()=>{yt(t)})),window.addEventListener("click",(e=>{vt(e,t)}))}(),function(){const t=document.querySelector(".add-modal");document.querySelector(".todos__new").addEventListener("click",(()=>{!function(){const t=document.querySelector(".todo-form__btn");document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",t.disabled=!0,t.classList.add("disabled"),t.textContent="Add task",document.querySelector(".add-modal").classList.remove("edit"),document.querySelector(".add-modal__title").textContent="New task"}(),ht(),wt(t),document.querySelector("#todo-form__title").focus()}))}(),function(){const e=document.querySelector(".list-modal"),n=document.querySelector(".list-modal__btn"),r=document.querySelector("#list-form__input");r.addEventListener("input",(()=>{pt(r,n)})),n.addEventListener("click",(()=>{var n;!function(e){for(const n in t)if(e===n)return!0;return!1}(r.value)?(n=r.value,t[n]=[],d(),ft(),o(r.value),ct(document.querySelector(`[data-name='${a()}']`)),lt(document.querySelector(`[data-name='${a()}']`)),ut(),yt(e)):alert("List already exists! Please enter a unique list name.")}))}(),function(){const t=document.querySelector(".view-modal");document.querySelector(".view-modal__close").addEventListener("click",(()=>yt(t))),window.addEventListener("click",(e=>{vt(e,t)}))}(),document.querySelector(".todos__list").addEventListener("click",(e=>{let r=e.target.classList;return r.contains("todo__delete-icon")||r.contains("todo__checkbox")?(function(e,n){let r=t[e].findIndex((t=>t.id===n));-1!==r?t[e].splice(r,1):console.log("ID not found")}(a(),e.target.dataset.id),d(),void ut()):r.contains("todo__edit-icon")?(i=e.target.dataset.id,n=i,o=u(a(),e.target.dataset.id),document.querySelector("#todo-form__title").value=o.title,document.querySelector("#todo-form__description").value=o.description,document.querySelector("#todo-form__date").value=o.dueDate,document.querySelector("#todo-form__priority").value=o.priority,document.querySelector(".add-modal").classList.add("edit"),document.querySelector(".add-modal__title").textContent="Edit task",document.querySelector(".todo-form__btn").textContent="Edit task",ht(),void wt(document.querySelector(".add-modal"))):r.contains("todo__title")||r.contains("todo__description")||r.contains("todo__container")||r.contains("todo__date")||r.contains("todo")?(function(t,e){let n=u(t,e),r=document.querySelector(".view-todo__priority"),a=document.querySelector(".view-todo__date");switch(document.querySelector(".view-modal__title").textContent=t,document.querySelector(".view-todo__title").textContent=n.title,document.querySelector(".view-todo__description").textContent=n.description,""===n.dueDate?a.textContent="":a.textContent=`Due ${n.dueDate}`,r.className="view-todo__priority",n.priority){case"low":r.textContent="!",r.classList.add("view-todo__priority--low");break;case"medium":r.textContent="!!",r.classList.add("view-todo__priority--med");break;case"high":r.textContent="!!!",r.classList.add("view-todo__priority--high");break;default:r.textContent=""}}(a(),e.target.dataset.id),void wt(document.querySelector(".view-modal"))):void 0;var o,i})),document.querySelector(".sidebar").addEventListener("click",(e=>{var n;e.target.classList.contains("list-btn")?(e.target.parentNode.remove(),n=e.target.dataset.name,delete t[n],d(),o("Inbox"),ct(document.querySelector("#inbox")),lt(document.querySelector("#inbox")),ut()):e.target.classList.contains("list-item")?(o(e.target.dataset.name),ct(e.target),lt(e.target),ut()):e.target.parentNode.classList.contains("list-item")&&(o(e.target.parentNode.dataset.name),ct(e.target.parentNode),lt(e.target.parentNode),ut())})),document.querySelector(".sidebar__collapse").addEventListener("click",(function(){const t=document.querySelector(".sidebar"),e=document.querySelector(".sidebar__collapse");"none"===window.getComputedStyle(t).float?(document.querySelector(".sidebar").classList.toggle("sidebar--mobile"),document.querySelector(".sidebar").classList.remove("sidebar--small"),e.classList.toggle("sidebar__collapse--left"),e.classList.remove("sidebar__collapse--right")):(e.classList.toggle("sidebar__collapse--right"),e.classList.remove("sidebar__collapse--left"),document.querySelector(".sidebar").classList.toggle("sidebar--small"))}))})();