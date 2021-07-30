(()=>{"use strict";let t={Inbox:[]},e="Inbox",n="";function r(){return e}function a(t){e=t}function o(t,e,n,r,a=((t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})()){return{title:t,description:e,dueDate:n,priority:r,id:a}}function i(e,n){t[n].push(e)}function s(){localStorage.setItem("lists",JSON.stringify(t))}function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function d(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function c(t){u(1,arguments);var e=d(t);return!isNaN(e)}i(o("Laundry for white clothes and towels","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint officiis quo incidunt repudiandae sed, accusamus veniam voluptatem consequuntur! Labore pariatur eaque voluptate deserunt ipsum corporis nemo distinctio numquam perspiciatis!","2021-07-28","low"),"Inbox");var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var f,h={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function w(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=a.width?String(a.width):o;r=t.formattingValues[i]||t.formattingValues[o]}else{var s=t.defaultWidth,u=a.width?String(a.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function y(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,s=o[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(u)?b(u,(function(t){return t.test(s)})):v(u,(function(t){return t.test(s)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(s.length);return{value:i,rest:c}}}function v(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function b(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const p={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof l[t]?l[t]:1===e?l[t].one:l[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:h,formatRelative:function(t,e,n,r){return g[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:w({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:w({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:w({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:w({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:w({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(f={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(f.matchPattern);if(!n)return null;var r=n[0],a=t.match(f.parsePattern);if(!a)return null;var o=f.valueCallback?f.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function _(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function C(t,e){u(2,arguments);var n=d(t).getTime(),r=_(e);return new Date(n+r)}function S(t,e){u(2,arguments);var n=_(e);return C(t,-n)}function T(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const x=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===e?r%100:r,e.length)},M=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):T(n+1,2)},q=function(t,e){return T(t.getUTCDate(),e.length)},L=function(t,e){return T(t.getUTCHours()%12||12,e.length)},k=function(t,e){return T(t.getUTCHours(),e.length)},E=function(t,e){return T(t.getUTCMinutes(),e.length)},D=function(t,e){return T(t.getUTCSeconds(),e.length)},P=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),e.length)};var U=864e5;function N(t){u(1,arguments);var e=1,n=d(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function W(t){u(1,arguments);var e=d(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=N(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=N(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function Y(t){u(1,arguments);var e=W(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=N(n);return r}var O=6048e5;function A(t,e){u(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,o=null==a?0:_(a),i=null==n.weekStartsOn?o:_(n.weekStartsOn);if(!(i>=0&&i<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=d(t),c=s.getUTCDay(),l=(c<i?7:0)+c-i;return s.setUTCDate(s.getUTCDate()-l),s.setUTCHours(0,0,0,0),s}function z(t,e){u(1,arguments);var n=d(t,e),r=n.getUTCFullYear(),a=e||{},o=a.locale,i=o&&o.options&&o.options.firstWeekContainsDate,s=null==i?1:_(i),c=null==a.firstWeekContainsDate?s:_(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var m=A(l,e),f=new Date(0);f.setUTCFullYear(r,0,c),f.setUTCHours(0,0,0,0);var h=A(f,e);return n.getTime()>=m.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function H(t,e){u(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:_(a),i=null==n.firstWeekContainsDate?o:_(n.firstWeekContainsDate),s=z(t,e),d=new Date(0);d.setUTCFullYear(s,0,i),d.setUTCHours(0,0,0,0);var c=A(d,e);return c}var F=6048e5;function X(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+T(o,2)}function Q(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):j(t,e)}function j(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}const B={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return x(t,e)},Y:function(t,e,n,r){var a=z(t,r),o=a>0?a:1-a;return"YY"===e?T(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):T(o,e.length)},R:function(t,e){return T(W(t),e.length)},u:function(t,e){return T(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){u(1,arguments);var n=d(t),r=A(n,e).getTime()-H(n,e).getTime();return Math.round(r/F)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):T(a,e.length)},I:function(t,e,n){var r=function(t){u(1,arguments);var e=d(t),n=N(e).getTime()-Y(e).getTime();return Math.round(n/O)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):T(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):q(t,e)},D:function(t,e,n){var r=function(t){u(1,arguments);var e=d(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/U)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):T(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return T(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return T(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return T(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return L(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):k(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):D(t,e)},S:function(t,e){return P(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return Q(a);case"XXXX":case"XX":return j(a);case"XXXXX":case"XXX":default:return j(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return Q(a);case"xxxx":case"xx":return j(a);case"xxxxx":case"xxx":default:return j(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+X(a,":");case"OOOO":default:return"GMT"+j(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+X(a,":");case"zzzz":default:return"GMT"+j(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return T(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return T((r._originalDate||t).getTime(),e.length)}};function I(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function G(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const R={p:G,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],o=r[2];if(!o)return I(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",I(a,e)).replace("{{time}}",G(o,e))}};function J(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var V=["D","DD"],$=["YY","YYYY"];function K(t){return-1!==V.indexOf(t)}function Z(t){return-1!==$.indexOf(t)}function tt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,at=/''/g,ot=/[a-zA-Z]/;function it(t){return t.match(rt)[1].replace(at,"'")}function st(){JSON.parse(localStorage.getItem("lists"))[r()].forEach((function(t){!function(t){const e=document.querySelector(".todos__list"),n=document.createElement("li"),r=document.createElement("div"),a=document.createElement("h5"),o=document.createElement("button"),i=document.createElement("p"),s=document.createElement("p"),l=document.createElement("span"),m=document.createElement("div"),f=document.createElement("label"),h=document.createElement("input"),g=function(){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","24"),t.setAttribute("height","24"),e.setAttribute("fill","currentColor"),e.setAttribute("d","M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"),t.appendChild(e),t}(),w=document.createElement("button"),y=document.createElement("img");switch(n.classList.add("todo"),n.dataset.id=t.id,r.classList.add("todo__container"),a.classList.add("todo__title"),a.textContent=t.title,o.type="button",o.classList.add("todo__delete"),o.innerHTML="&times;",o.dataset.id=t.id,i.classList.add("todo__description"),i.classList.add("truncate"),i.id="todo__description",s.classList.add("todo__date"),l.classList.add("todo__priority"),l.textContent=t.priority,m.className="checkbox-container",f.setAttribute("for","todo__checkbox"),f.classList.add("todo__label"),h.id="todo__checkbox",h.type="checkbox",h.classList.add("todo__checkbox"),h.setAttribute("aria-label","Mark task as completed"),h.dataset.id=t.id,t.priority){case"low":h.classList.add("todo__checkbox--low");break;case"medium":h.classList.add("todo__checkbox--medium");break;case"high":h.classList.add("todo__checkbox--high")}g.classList.add("tick"),w.className="todo__edit",w.type="button",y.classList.add("todo__edit-icon"),y.src="../src/icons/edit.svg",y.dataset.id=t.id,""===t.description?i.style.display="none":i.textContent=t.description,i.addEventListener("click",(()=>{i.classList.toggle("truncate")})),""===t.dueDate?i.style.paddingBottom="0":s.textContent=`Due ${function(t){let e=parseInt(t.slice(0,4)),n=parseInt(t.slice(5,7))-1,r=parseInt(t.slice(8,10));return function(t,e,n){u(2,arguments);var r=String(e),a=n||{},o=a.locale||p,i=o.options&&o.options.firstWeekContainsDate,s=null==i?1:_(i),l=null==a.firstWeekContainsDate?s:_(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=o.options&&o.options.weekStartsOn,f=null==m?0:_(m),h=null==a.weekStartsOn?f:_(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var g=d(t);if(!c(g))throw new RangeError("Invalid time value");var w=S(g,J(g)),y={firstWeekContainsDate:l,weekStartsOn:h,locale:o,_originalDate:g};return r.match(nt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,R[e])(t,o.formatLong,y):t})).join("").match(et).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return it(n);var i=B[r];if(i)return!a.useAdditionalWeekYearTokens&&Z(n)&&tt(n,e,t),!a.useAdditionalDayOfYearTokens&&K(n)&&tt(n,e,t),i(w,n,o.localize,y);if(r.match(ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(e,n,r),"d MMM yyyy")}(t.dueDate)}`,""===t.dueDate&&""===t.description&&(a.style.paddingBottom="0"),n.appendChild(r),m.appendChild(f),m.appendChild(g),m.appendChild(h),w.appendChild(y),r.appendChild(m),r.appendChild(a),r.appendChild(i),r.appendChild(s),r.appendChild(l),r.appendChild(o),r.appendChild(w),e.appendChild(n)}(t)}))}function ut(){!function(){const t=document.querySelector(".todos__list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild)}(),document.querySelector(".todos__current-list").textContent=r(),st()}function dt(t){document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.add("list-name--selected"):e.classList.remove("list-name--selected")}))}function ct(){!function(){const t=document.querySelector("#todo-form__list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild)}(),function(){const e=document.querySelector("#todo-form__list");for(const n in JSON.parse(JSON.stringify(t))){const t=document.createElement("option");t.value=n,t.textContent=n,t.className="list-option",e.appendChild(t)}}(),document.querySelectorAll(".list-option").forEach((function(t){t.value===r()&&t.setAttribute("selected","")}))}function lt(){return{title:document.querySelector("#todo-form__title").value,description:document.querySelector("#todo-form__description").value,dueDate:document.querySelector("#todo-form__date").value,priority:document.querySelector("#todo-form__priority").value,list:document.querySelector("#todo-form__list").value}}function mt(t){t.style.display="flex"}function ft(t){t.style.display="none"}function ht(t,e){t.target===e&&(e.style.display="none")}function gt(t,e){""===t.value.trim()?(e.disabled=!0,e.classList.contains("disabled")||e.classList.add("disabled")):(e.disabled=!1,e.classList.contains("disabled")&&e.classList.remove("disabled"))}s(),ut(),function(){const e=document.querySelector(".add-modal"),r=document.querySelector(".todo-form__btn"),a=document.querySelector(".add-modal__close"),u=document.querySelector("#todo-form__title");a.addEventListener("click",(()=>ft(e))),window.addEventListener("click",(t=>{ht(t,e)})),u.addEventListener("input",(()=>{gt(u,r)})),r.addEventListener("click",(()=>{e.classList.contains("edit")?(function(){let e=lt(),r=o(e.title,e.description,e.dueDate,e.priority);!function(e,n,r){let a=t[e].findIndex((t=>t.id===n));-1!==a?t[e][a]=r:console.log("ID not found")}(e.list,n,r)}(),s(),ft(e),ut()):(function(){let t=lt();i(o(t.title,t.description,t.dueDate,t.priority),t.list)}(),s(),ft(e),ut())}))}(),function(){let t=document.querySelector(".list-modal");document.querySelector(".add-list").addEventListener("click",(()=>{document.querySelector("#list-form__input").value="",document.querySelector(".list-modal__btn").disabled=!0,mt(t),document.querySelector("#list-form__input").focus(),document.querySelector(".list-modal__btn").classList.add("disabled")})),document.querySelector(".list-modal__close").addEventListener("click",(()=>{ft(t)})),window.addEventListener("click",(e=>{ht(e,t)}))}(),function(){const t=document.querySelector(".add-modal");document.querySelector(".todos__new").addEventListener("click",(()=>{!function(){const t=document.querySelector(".todo-form__btn");document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",t.disabled=!0,t.classList.add("disabled"),document.querySelector(".add-modal").classList.remove("edit")}(),ct(),mt(t),document.querySelector("#todo-form__title").focus()}))}(),function(){const e=document.querySelector(".list-modal"),n=document.querySelector(".list-modal__btn"),o=document.querySelector("#list-form__input");o.addEventListener("input",(()=>{gt(o,n)})),n.addEventListener("click",(()=>{var n;!function(e){for(const n in t)if(e===n)return!0;return!1}(o.value)?(n=o.value,t[n]=[],s(),function(t){const e=document.createElement("li"),n=document.createElement("h4"),r=document.createElement("button"),a=document.createElement("img");a.src="../src/icons/list.svg",a.classList.add("icon"),e.classList.add("list-item"),e.dataset.name=t,n.textContent=t,n.classList.add("list-name"),n.dataset.name=t,r.innerHTML="&times;",r.classList.add("list-btn"),r.dataset.name=t,e.appendChild(a),e.appendChild(n),e.appendChild(r),document.querySelector(".added-lists__list").appendChild(e)}(o.value),a(o.value),dt(document.querySelector(`[data-name='${r()}']`)),ut(),ft(e)):alert("List already exists! Please enter a unique list name.")}))}(),document.querySelector(".todos__list").addEventListener("click",(e=>{var a,o;"todo__delete"===e.target.className||e.target.classList.contains("todo__checkbox")?(function(e,n){let r=t[e].findIndex((t=>t.id===n));-1!==r?t[e].splice(r,1):console.log("ID not found")}(r(),e.target.dataset.id),s(),ut()):"todo__edit-icon"===e.target.className&&(o=e.target.dataset.id,n=o,a=function(e,n){let r=t[e].findIndex((t=>t.id===n));return-1===r?void console.log("ID not found"):t[e][r]}(r(),e.target.dataset.id),document.querySelector("#todo-form__title").value=a.title,document.querySelector("#todo-form__description").value=a.description,document.querySelector("#todo-form__date").value=a.dueDate,document.querySelector("#todo-form__priority").value=a.priority,document.querySelector(".add-modal").classList.add("edit"),document.querySelector(".todo-form__btn").textContent="Edit task",ct(),mt(document.querySelector(".add-modal")))})),document.querySelector(".sidebar").addEventListener("click",(e=>{var n;e.target.classList.contains("list-btn")?(e.target.parentNode.remove(),n=e.target.dataset.name,delete t[n],s(),a("Inbox"),dt(document.querySelector("#inbox")),ut()):e.target.classList.contains("list-item")?(a(e.target.dataset.name),dt(e.target),ut()):e.target.parentNode.classList.contains("list-item")&&(a(e.target.parentNode.dataset.name),dt(e.target.parentNode),ut())})),document.querySelector(".sidebar__collapse").addEventListener("click",(function(){const t=document.querySelector(".sidebar"),e=document.querySelector(".sidebar__collapse");"none"===window.getComputedStyle(t).float?(document.querySelector(".sidebar").classList.toggle("sidebar--mobile"),document.querySelector(".sidebar").classList.remove("sidebar--small"),e.classList.toggle("sidebar__collapse--left"),e.classList.remove("sidebar__collapse--right")):(e.classList.toggle("sidebar__collapse--right"),e.classList.remove("sidebar__collapse--left"),document.querySelector(".sidebar").classList.toggle("sidebar--small"))}))})();