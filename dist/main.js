(()=>{"use strict";let t={Inbox:[]},e="Inbox";function n(){return e}function r(t){e=t}function a(t,e,n,r,a=((t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})()){return{title:t,description:e,dueDate:n,priority:r,id:a}}function i(e,n){t[n].push(e)}function o(){localStorage.setItem("lists",JSON.stringify(t))}function u(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function s(t){u(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(t){u(1,arguments);var e=s(t);return!isNaN(e)}i(a("Laundry","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint officiis quo incidunt repudiandae sed, accusamus veniam voluptatem consequuntur! Labore pariatur eaque voluptate deserunt ipsum corporis nemo distinctio numquam perspiciatis!","2021-07-28","low"),"Inbox");var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var m,f={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function g(t){return function(e,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,o=a.width?String(a.width):i;r=t.formattingValues[o]||t.formattingValues[i]}else{var u=t.defaultWidth,s=a.width?String(a.width):t.defaultWidth;r=t.values[s]||t.values[u]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function w(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?y(s,(function(t){return t.test(u)})):v(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(u.length);return{value:o,rest:c}}}function v(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function y(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const b={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof c[t]?c[t]:1===e?c[t].one:c[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:f,formatRelative:function(t,e,n,r){return h[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:g({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:g({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:g({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:g({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:g({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(m={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(m.matchPattern);if(!n)return null;var r=n[0],a=t.match(m.parsePattern);if(!a)return null;var i=m.valueCallback?m.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:w({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:w({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:w({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:w({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function p(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function C(t,e){u(2,arguments);var n=s(t).getTime(),r=p(e);return new Date(n+r)}function T(t,e){u(2,arguments);var n=p(e);return C(t,-n)}function S(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const M=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return S("yy"===e?r%100:r,e.length)},_=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):S(n+1,2)},x=function(t,e){return S(t.getUTCDate(),e.length)},k=function(t,e){return S(t.getUTCHours()%12||12,e.length)},E=function(t,e){return S(t.getUTCHours(),e.length)},q=function(t,e){return S(t.getUTCMinutes(),e.length)},L=function(t,e){return S(t.getUTCSeconds(),e.length)},D=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return S(Math.floor(r*Math.pow(10,n-3)),e.length)};var P=864e5;function U(t){u(1,arguments);var e=1,n=s(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function N(t){u(1,arguments);var e=s(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=U(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=U(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function W(t){u(1,arguments);var e=N(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=U(n);return r}var Y=6048e5;function O(t,e){u(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:p(a),o=null==n.weekStartsOn?i:p(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=s(t),c=d.getUTCDay(),l=(c<o?7:0)+c-o;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function z(t,e){u(1,arguments);var n=s(t,e),r=n.getUTCFullYear(),a=e||{},i=a.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=null==o?1:p(o),c=null==a.firstWeekContainsDate?d:p(a.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,c),l.setUTCHours(0,0,0,0);var m=O(l,e),f=new Date(0);f.setUTCFullYear(r,0,c),f.setUTCHours(0,0,0,0);var h=O(f,e);return n.getTime()>=m.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function H(t,e){u(1,arguments);var n=e||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:p(a),o=null==n.firstWeekContainsDate?i:p(n.firstWeekContainsDate),s=z(t,e),d=new Date(0);d.setUTCFullYear(s,0,o),d.setUTCHours(0,0,0,0);var c=O(d,e);return c}var A=6048e5;function F(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+S(i,2)}function X(t,e){return t%60==0?(t>0?"-":"+")+S(Math.abs(t)/60,2):Q(t,e)}function Q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+S(Math.floor(a/60),2)+n+S(a%60,2)}const j={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return M(t,e)},Y:function(t,e,n,r){var a=z(t,r),i=a>0?a:1-a;return"YY"===e?S(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):S(i,e.length)},R:function(t,e){return S(N(t),e.length)},u:function(t,e){return S(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return S(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return S(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return _(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return S(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){u(1,arguments);var n=s(t),r=O(n,e).getTime()-H(n,e).getTime();return Math.round(r/A)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):S(a,e.length)},I:function(t,e,n){var r=function(t){u(1,arguments);var e=s(t),n=U(e).getTime()-W(e).getTime();return Math.round(n/Y)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):S(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):x(t,e)},D:function(t,e,n){var r=function(t){u(1,arguments);var e=s(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/P)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):S(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return S(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return S(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return S(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return k(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):E(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):S(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):q(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):L(t,e)},S:function(t,e){return D(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return X(a);case"XXXX":case"XX":return Q(a);case"XXXXX":case"XXX":default:return Q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return X(a);case"xxxx":case"xx":return Q(a);case"xxxxx":case"xxx":default:return Q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+F(a,":");case"OOOO":default:return"GMT"+Q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+F(a,":");case"zzzz":default:return"GMT"+Q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return S(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return S((r._originalDate||t).getTime(),e.length)}};function B(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function G(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const I={p:G,P:function(t,e){var n,r=t.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return B(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",B(a,e)).replace("{{time}}",G(i,e))}};function R(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var J=["D","DD"],V=["YY","YYYY"];function $(t){return-1!==J.indexOf(t)}function K(t){return-1!==V.indexOf(t)}function Z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,at=/[a-zA-Z]/;function it(t){return t.match(nt)[1].replace(rt,"'")}function ot(){JSON.parse(localStorage.getItem("lists"))[n()].forEach((function(t){!function(t){const e=document.querySelector(".todos__list"),n=document.createElement("li"),r=document.createElement("div"),a=document.createElement("h5"),i=document.createElement("button"),o=document.createElement("p"),c=document.createElement("p"),l=document.createElement("span"),m=document.createElement("div"),f=document.createElement("label"),h=document.createElement("input"),g=function(){let t=document.createElementNS("http://www.w3.org/2000/svg","svg"),e=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("width","24"),t.setAttribute("height","24"),e.setAttribute("fill","currentColor"),e.setAttribute("d","M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"),t.appendChild(e),t}();n.classList.add("todo"),n.dataset.id=t.id,r.classList.add("todo__container"),a.classList.add("todo__title"),a.textContent=t.title,i.type="button",i.classList.add("todo__delete"),i.innerHTML="&times;",i.dataset.id=t.id,o.classList.add("todo__description"),o.classList.add("truncate"),o.id="todo__description",c.classList.add("todo__date"),l.classList.add("todo__priority"),l.textContent=t.priority,m.className="checkbox-container",f.setAttribute("for","todo__checkbox"),f.classList.add("todo__label"),h.id="todo__checkbox",h.type="checkbox",h.classList.add("todo__checkbox"),h.setAttribute("aria-label","Mark task as completed"),h.dataset.id=t.id,g.classList.add("tick"),""===t.description?o.style.display="none":o.textContent=t.description,o.addEventListener("click",(()=>{o.classList.toggle("truncate")})),""===t.dueDate?o.style.paddingBottom="0":c.textContent=`Due ${function(t){let e=parseInt(t.slice(0,4)),n=parseInt(t.slice(5,7))-1,r=parseInt(t.slice(8,10));return function(t,e,n){u(2,arguments);var r=String(e),a=n||{},i=a.locale||b,o=i.options&&i.options.firstWeekContainsDate,c=null==o?1:p(o),l=null==a.firstWeekContainsDate?c:p(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=i.options&&i.options.weekStartsOn,f=null==m?0:p(m),h=null==a.weekStartsOn?f:p(a.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=s(t);if(!d(g))throw new RangeError("Invalid time value");var w=T(g,R(g)),v={firstWeekContainsDate:l,weekStartsOn:h,locale:i,_originalDate:g};return r.match(et).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,I[e])(t,i.formatLong,v):t})).join("").match(tt).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return it(n);var o=j[r];if(o)return!a.useAdditionalWeekYearTokens&&K(n)&&Z(n,e,t),!a.useAdditionalDayOfYearTokens&&$(n)&&Z(n,e,t),o(w,n,i.localize,v);if(r.match(at))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(new Date(e,n,r),"d MMM yyyy")}(t.dueDate)}`,""===t.dueDate&&""===t.description&&(a.style.paddingBottom="0"),n.appendChild(r),m.appendChild(f),m.appendChild(g),m.appendChild(h),r.appendChild(m),r.appendChild(a),r.appendChild(o),r.appendChild(c),r.appendChild(l),r.appendChild(i),e.appendChild(n)}(t)}))}function ut(){!function(){const t=document.querySelector(".todos__list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild)}(),document.querySelector(".todos__current-list").textContent=n(),ot()}function st(t){document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.contains("list-name--selected")||e.classList.toggle("list-name--selected"):e.classList.remove("list-name--selected")}))}function dt(){let t={title:document.querySelector("#todo-form__title").value,description:document.querySelector("#todo-form__description").value,dueDate:document.querySelector("#todo-form__date").value,priority:document.querySelector("#todo-form__priority").value,list:document.querySelector("#todo-form__list").value};i(a(t.title,t.description,t.dueDate,t.priority),t.list)}function ct(t){t.style.display="flex"}function lt(t){t.style.display="none"}function mt(t,e){t.target===e&&(e.style.display="none")}function ft(t,e){""===t.value.trim()?(e.disabled=!0,e.classList.contains("disabled")||e.classList.add("disabled")):(e.disabled=!1,e.classList.contains("disabled")&&e.classList.remove("disabled"))}function ht(){return document.querySelector("#list-form__input").value}o(),ut(),function(){const e=document.querySelector(".add-modal");document.querySelector(".add-modal__close").addEventListener("click",(()=>{lt(e)}));const n=document.querySelector(".todos__new");n.addEventListener("click",(function(){document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",r.disabled=!0,r.classList.add("disabled")})),n.addEventListener("click",(()=>{!function(){const t=document.querySelector("#todo-form__list");for(;t.lastElementChild;)t.removeChild(t.lastElementChild)}(),function(){const e=document.querySelector("#todo-form__list");for(const n in JSON.parse(JSON.stringify(t))){const t=document.createElement("option");t.value=n,t.textContent=n,e.appendChild(t)}}()})),n.addEventListener("click",(()=>{ct(e)})),n.addEventListener("click",(()=>{document.querySelector("#todo-form__title").focus()}));const r=document.querySelector(".todo-form__btn");window.addEventListener("click",(t=>{mt(t,e)})),document.querySelector("#todo-form__list").value,r.addEventListener("click",dt),r.addEventListener("click",(()=>{lt(e)})),r.addEventListener("click",o),r.addEventListener("click",ut)}(),function(){let t=document.querySelector(".list-modal");document.querySelector(".add-list").addEventListener("click",(()=>{document.querySelector("#list-form__input").value="",document.querySelector(".list-modal__btn").disabled=!0,ct(t),document.querySelector("#list-form__input").focus(),document.querySelector(".list-modal__btn").classList.add("disabled")})),document.querySelector(".list-modal__close").addEventListener("click",(()=>{lt(t)})),window.addEventListener("click",(e=>{mt(e,t)}))}(),document.querySelector(".sidebar").addEventListener("click",(e=>{var n;e.target.classList.contains("list-btn")?(e.target.parentNode.remove(),n=e.target.dataset.name,delete t[n],o(),r("Inbox"),st(document.querySelector("#inbox")),ut()):e.target.classList.contains("list-item")?(r(e.target.dataset.name),st(e.target),ut()):e.target.parentNode.classList.contains("list-item")&&(r(e.target.parentNode.dataset.name),st(e.target.parentNode),ut())})),function(t){const e=document.querySelector("#todo-form__title"),n=document.querySelector(".todo-form__btn");n.disabled=!0,e.addEventListener("input",(()=>{ft(e,n)}))}(),function(){const e=document.querySelector(".list-modal__btn"),a=document.querySelector("#list-form__input");e.disabled=!0,a.addEventListener("input",(()=>{ft(a,e)})),e.addEventListener("click",(()=>{var e;!function(e){for(const n in t)if(e===n)return!0;return!1}(ht())?(e=ht(),t[e]=[],o(),function(t){const e=document.createElement("li"),n=document.createElement("h4"),r=document.createElement("button"),a=document.createElement("img");a.src="../src/icons/list.svg",a.classList.add("icon"),e.classList.add("list-item"),e.dataset.name=t,n.textContent=t,n.classList.add("list-name"),n.dataset.name=t,r.innerHTML="&times;",r.classList.add("list-btn"),r.dataset.name=t,e.appendChild(a),e.appendChild(n),e.appendChild(r),document.querySelector(".added-lists__list").appendChild(e)}(ht()),r(ht()),st(document.querySelector(`[data-name='${n()}']`)),ut(),lt(document.querySelector(".list-modal"))):alert("List already exists! Please enter a unique list name.")}))}(),document.querySelector(".todos__list").addEventListener("click",(e=>{"todo__delete"!==e.target.className&&"todo__checkbox"!==e.target.className||(function(e,n){let r=t[e].findIndex((t=>t.id===n));-1!==r?t[e].splice(r,1):console.log("ID not found")}(n(),e.target.dataset.id),o(),ut())}))})();