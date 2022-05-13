(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function n(n){t(1,arguments);var a=e(n);return!isNaN(a)}var a={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function r(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var o,i={date:r({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:r({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:r({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},d={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function s(t){return function(e,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,i=r.width?String(r.width):o;a=t.formattingValues[i]||t.formattingValues[o]}else{var d=t.defaultWidth,s=r.width?String(r.width):t.defaultWidth;a=t.values[s]||t.values[d]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function u(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,d=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?l(s,(function(t){return t.test(d)})):c(s,(function(t){return t.test(d)}));i=t.valueCallback?t.valueCallback(u):u,i=n.valueCallback?n.valueCallback(i):i;var m=e.slice(d.length);return{value:i,rest:m}}}function c(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function l(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const m={code:"en-US",formatDistance:function(t,e,n){var r;return n=n||{},r="string"==typeof a[t]?a[t]:1===e?a[t].one:a[t].other.replace("{{count}}",e),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:i,formatRelative:function(t,e,n,a){return d[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:s({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:s({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:s({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:s({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:s({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(o.matchPattern);if(!n)return null;var a=n[0],r=t.match(o.parsePattern);if(!r)return null;var i=o.valueCallback?o.valueCallback(r[0]):r[0];i=e.valueCallback?e.valueCallback(i):i;var d=t.slice(a.length);return{value:i,rest:d}}),era:u({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:u({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:u({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:u({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:u({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function f(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function h(n,a){t(2,arguments);var r=e(n).getTime(),o=f(a);return new Date(r+o)}function g(e,n){t(2,arguments);var a=f(n);return h(e,-a)}function w(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const v=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return w("yy"===e?a%100:a,e.length)},y=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):w(n+1,2)},b=function(t,e){return w(t.getUTCDate(),e.length)},p=function(t,e){return w(t.getUTCHours()%12||12,e.length)},_=function(t,e){return w(t.getUTCHours(),e.length)},C=function(t,e){return w(t.getUTCMinutes(),e.length)},S=function(t,e){return w(t.getUTCSeconds(),e.length)},x=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return w(Math.floor(a*Math.pow(10,n-3)),e.length)};var q=864e5;function T(n){t(1,arguments);var a=1,r=e(n),o=r.getUTCDay(),i=(o<a?7:0)+o-a;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function k(n){t(1,arguments);var a=e(n),r=a.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=T(o),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var s=T(d);return a.getTime()>=i.getTime()?r+1:a.getTime()>=s.getTime()?r:r-1}function M(e){t(1,arguments);var n=k(e),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var r=T(a);return r}var E=6048e5;function L(n,a){t(1,arguments);var r=a||{},o=r.locale,i=o&&o.options&&o.options.weekStartsOn,d=null==i?0:f(i),s=null==r.weekStartsOn?d:f(r.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=e(n),c=u.getUTCDay(),l=(c<s?7:0)+c-s;return u.setUTCDate(u.getUTCDate()-l),u.setUTCHours(0,0,0,0),u}function D(n,a){t(1,arguments);var r=e(n,a),o=r.getUTCFullYear(),i=a||{},d=i.locale,s=d&&d.options&&d.options.firstWeekContainsDate,u=null==s?1:f(s),c=null==i.firstWeekContainsDate?u:f(i.firstWeekContainsDate);if(!(c>=1&&c<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(o+1,0,c),l.setUTCHours(0,0,0,0);var m=L(l,a),h=new Date(0);h.setUTCFullYear(o,0,c),h.setUTCHours(0,0,0,0);var g=L(h,a);return r.getTime()>=m.getTime()?o+1:r.getTime()>=g.getTime()?o:o-1}function P(e,n){t(1,arguments);var a=n||{},r=a.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:f(o),d=null==a.firstWeekContainsDate?i:f(a.firstWeekContainsDate),s=D(e,n),u=new Date(0);u.setUTCFullYear(s,0,d),u.setUTCHours(0,0,0,0);var c=L(u,n);return c}var U=6048e5;function N(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+w(o,2)}function W(t,e){return t%60==0?(t>0?"-":"+")+w(Math.abs(t)/60,2):Y(t,e)}function Y(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+w(Math.floor(r/60),2)+n+w(r%60,2)}const O={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return v(t,e)},Y:function(t,e,n,a){var r=D(t,a),o=r>0?r:1-r;return"YY"===e?w(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):w(o,e.length)},R:function(t,e){return w(k(t),e.length)},u:function(t,e){return w(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return w(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return w(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return y(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return w(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(n,a,r,o){var i=function(n,a){t(1,arguments);var r=e(n),o=L(r,a).getTime()-P(r,a).getTime();return Math.round(o/U)+1}(n,o);return"wo"===a?r.ordinalNumber(i,{unit:"week"}):w(i,a.length)},I:function(n,a,r){var o=function(n){t(1,arguments);var a=e(n),r=T(a).getTime()-M(a).getTime();return Math.round(r/E)+1}(n);return"Io"===a?r.ordinalNumber(o,{unit:"week"}):w(o,a.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(n,a,r){var o=function(n){t(1,arguments);var a=e(n),r=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var o=a.getTime(),i=r-o;return Math.floor(i/q)+1}(n);return"Do"===a?r.ordinalNumber(o,{unit:"dayOfYear"}):w(o,a.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return w(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return w(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return w(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return p(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):_(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):w(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):w(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):C(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):S(t,e)},S:function(t,e){return x(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return W(r);case"XXXX":case"XX":return Y(r);case"XXXXX":case"XXX":default:return Y(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return W(r);case"xxxx":case"xx":return Y(r);case"xxxxx":case"xxx":default:return Y(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+N(r,":");case"OOOO":default:return"GMT"+Y(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+N(r,":");case"zzzz":default:return"GMT"+Y(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return w(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return w((a._originalDate||t).getTime(),e.length)}};function A(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}}function z(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}}const F={p:z,P:function(t,e){var n,a=t.match(/(P+)(p+)?/),r=a[1],o=a[2];if(!o)return A(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;case"PPPP":default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",A(r,e)).replace("{{time}}",z(o,e))}};function H(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var j=["D","DD"],X=["YY","YYYY"];function B(t){return-1!==j.indexOf(t)}function Q(t){return-1!==X.indexOf(t)}function G(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,V=/''/g,K=/[a-zA-Z]/;function $(t){return t.match(J)[1].replace(V,"'")}let Z=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")),"");var tt,et,nt,at,rt,ot,it={Inbox:[]},dt="Inbox",st="";function ut(){return JSON.parse(JSON.stringify(it))}function ct(){return dt}function lt(t){dt=t}function mt(t,e,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Z();return{title:t,description:e,dueDate:n,priority:a,id:r}}function ft(){localStorage.setItem("lists",JSON.stringify(it))}function ht(){return JSON.parse(localStorage.getItem("lists"))}function gt(t,e){var n=it[t].findIndex((function(t){return t.id===e}));return-1!==n?it[t][n]:"ID not found"}function wt(a){var r,o,i,d,s,u,c=document.querySelector(".todos__list"),l=document.createElement("li"),h=document.createElement("div"),w=document.createElement("h5"),v=document.createElement("button"),y=document.createElement("img"),b=document.createElement("p"),p=document.createElement("p"),_=document.createElement("span"),C=document.createElement("div"),S=document.createElement("label"),x=document.createElement("input"),q=(r=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","path"),r.setAttribute("width","24"),r.setAttribute("height","24"),o.setAttribute("fill","currentColor"),o.setAttribute("d","M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"),r.appendChild(o),r),T=document.createElement("button"),k=document.createElement("img");switch(l.classList.add("todo"),l.dataset.id=a.id,h.classList.add("todo__container"),h.dataset.id=a.id,w.classList.add("todo__title"),w.textContent=a.title,w.dataset.id=a.id,v.type="button",v.classList.add("todo__delete"),v.dataset.id=a.id,v.setAttribute("aria-label","Delete task"),y.classList.add("todo__delete-icon"),y.dataset.id=a.id,y.src="icons/close.svg",b.classList.add("todo__description"),b.id="todo__description",b.dataset.id=a.id,p.classList.add("todo__date"),p.dataset.id=a.id,_.classList.add("todo__priority"),_.textContent=a.priority,C.className="checkbox-container",S.setAttribute("for","todo__checkbox"),S.classList.add("todo__label"),x.id="todo__checkbox",x.type="checkbox",x.classList.add("todo__checkbox"),x.setAttribute("aria-label","Mark task as completed"),x.dataset.id=a.id,a.priority){case"low":x.classList.add("todo__checkbox--low");break;case"medium":x.classList.add("todo__checkbox--medium");break;case"high":x.classList.add("todo__checkbox--high")}q.classList.add("tick"),T.className="todo__edit",T.type="button",T.setAttribute("aria-label","Edit task"),k.classList.add("todo__edit-icon"),k.src="icons/edit.svg",k.dataset.id=a.id,""===a.description?b.style.display="none":b.textContent=a.description,""===a.dueDate?b.style.paddingBottom="0":p.textContent="Due ".concat((i=a.dueDate,d=parseInt(i.slice(0,4)),s=parseInt(i.slice(5,7))-1,u=parseInt(i.slice(8,10)),function(a,r,o){t(2,arguments);var i=String(r),d=o||{},s=d.locale||m,u=s.options&&s.options.firstWeekContainsDate,c=null==u?1:f(u),l=null==d.firstWeekContainsDate?c:f(d.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=s.options&&s.options.weekStartsOn,w=null==h?0:f(h),v=null==d.weekStartsOn?w:f(d.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var y=e(a);if(!n(y))throw new RangeError("Invalid time value");var b=g(y,H(y)),p={firstWeekContainsDate:l,weekStartsOn:v,locale:s,_originalDate:y};return i.match(R).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,F[e])(t,s.formatLong,p):t})).join("").match(I).map((function(t){if("''"===t)return"'";var e=t[0];if("'"===e)return $(t);var n=O[e];if(n)return!d.useAdditionalWeekYearTokens&&Q(t)&&G(t,r,a),!d.useAdditionalDayOfYearTokens&&B(t)&&G(t,r,a),n(b,t,s.localize,p);if(e.match(K))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return t})).join("")}(new Date(d,s,u),"d MMM yyyy"))),""===a.dueDate&&""===a.description&&(w.style.paddingBottom="0"),l.appendChild(h),C.appendChild(S),C.appendChild(q),C.appendChild(x),T.appendChild(k),v.appendChild(y),h.appendChild(C),h.appendChild(w),h.appendChild(b),h.appendChild(p),h.appendChild(_),h.appendChild(v),h.appendChild(T),c.appendChild(l)}function vt(){!function(){for(var t=document.querySelector(".todos__list");t.lastElementChild;)t.removeChild(t.lastElementChild)}(),document.querySelector(".todos__current-list").textContent=ct(),ht()[ct()].forEach((function(t){wt(t)}))}function yt(t){document.querySelectorAll(".list-name").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.add("list-name--selected"):e.classList.remove("list-name--selected")}))}function bt(t){document.querySelectorAll(".list-item").forEach((function(e){e.dataset.name===t.dataset.name?e.classList.add("list-item--selected"):e.classList.remove("list-item--selected")}))}function pt(){var t;!function(){for(var t=document.querySelector("#todo-form__list");t.lastElementChild;)t.removeChild(t.lastElementChild)}(),t=document.querySelector("#todo-form__list"),Object.keys(ut()).forEach((function(e){var n=document.createElement("option");n.value=e,n.textContent=e,n.className="list-option",t.appendChild(n)})),document.querySelectorAll(".list-option").forEach((function(t){t.value===ct()&&t.setAttribute("selected","")}))}function _t(){document.querySelectorAll(".added-lists__list li").forEach((function(t){t.remove()})),Object.keys(ut()).forEach((function(t){"Inbox"!==t&&function(t){var e,n,a,r=document.createElement("li"),o=document.createElement("h4"),i=document.createElement("button"),d=document.createElement("img");d.src="icons/list.svg",d.classList.add("list-icon"),r.classList.add("list-item"),r.dataset.name=t,o.textContent=t,o.classList.add("list-name"),o.dataset.name=t,i.classList.add("list-btn"),i.dataset.name=t,i.appendChild((e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=document.createElementNS("http://www.w3.org/2000/svg","path"),a=document.createElementNS("http://www.w3.org/2000/svg","path"),e.setAttribute("width","24px"),e.setAttribute("height","24px"),e.setAttribute("viewBox","0 0 24 24"),n.setAttribute("d","M0 0h24v24H0z"),n.setAttribute("fill","none"),a.setAttribute("d","M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"),e.appendChild(n),e.appendChild(a),e)),i.setAttribute("aria-label","Delete this list"),r.appendChild(d),r.appendChild(o),r.appendChild(i),document.querySelector(".added-lists__list").appendChild(r)}(t)}))}function Ct(){return{title:document.querySelector("#todo-form__title").value,description:document.querySelector("#todo-form__description").value,dueDate:document.querySelector("#todo-form__date").value,priority:document.querySelector("#todo-form__priority").value,list:document.querySelector("#todo-form__list").value}}function St(t){t.style.display="flex"}function xt(t){t.style.display="none"}function qt(t,e){t.target===e&&(e.style.display="none")}function Tt(t,e){""===t.value.trim()?(e.disabled=!0,e.classList.contains("disabled")||e.classList.add("disabled")):(e.disabled=!1,e.classList.contains("disabled")&&e.classList.remove("disabled"))}localStorage.getItem("lists")&&(it=ht()),ft(),_t(),vt(),tt=document.querySelector(".add-modal"),et=document.querySelector(".todo-form__btn"),nt=document.querySelector(".add-modal__close"),at=document.querySelector("#todo-form__title"),nt.addEventListener("click",(function(){return xt(tt)})),window.addEventListener("click",(function(t){qt(t,tt)})),at.addEventListener("input",(function(){Tt(at,et)})),et.addEventListener("click",(function(){var t,e,n,a,r,o;tt.classList.contains("edit")?(r=Ct(),o=mt(r.title,r.description,r.dueDate,r.priority),t=r.list,e=st,n=o,a=it[t].findIndex((function(t){return t.id===e})),it[t][a]=n,ft(),xt(tt),vt()):(function(){var t,e,n=Ct();t=mt(n.title,n.description,n.dueDate,n.priority),e=n.list,it[e].push(t)}(),ft(),xt(tt),vt())})),ot=document.querySelector(".list-modal"),document.querySelector(".add-list").addEventListener("click",(function(){document.querySelector("#list-form__input").value="",document.querySelector(".list-modal__btn").disabled=!0,St(ot),document.querySelector("#list-form__input").focus(),document.querySelector(".list-modal__btn").classList.add("disabled")})),document.querySelector(".list-modal__close").addEventListener("click",(function(){xt(ot)})),window.addEventListener("click",(function(t){qt(t,ot)})),function(){var t=document.querySelector(".add-modal");document.querySelector(".todos__new").addEventListener("click",(function(){var e;e=document.querySelector(".todo-form__btn"),document.querySelector("#todo-form__title").value="",document.querySelector("#todo-form__description").value="",document.querySelector("#todo-form__date").value="",document.querySelector("#todo-form__priority").value="",e.disabled=!0,e.classList.add("disabled"),e.textContent="Add task",document.querySelector(".add-modal").classList.remove("edit"),document.querySelector(".add-modal__title").textContent="New task",document.querySelector(".todo-form__list").disabled=!1,pt(),St(t),document.querySelector("#todo-form__title").focus()}))}(),function(){var t=document.querySelector(".list-modal"),e=document.querySelector(".list-modal__btn"),n=document.querySelector("#list-form__input");n.addEventListener("input",(function(){Tt(n,e)})),e.addEventListener("click",(function(){var e,a;a=n.value,Object.keys(it).some((function(t){return t===a}))?alert("List already exists! Please enter a unique list name."):(e=n.value,it[e]=[],ft(),_t(),lt(n.value),yt(document.querySelector("[data-name='".concat(ct(),"']"))),bt(document.querySelector("[data-name='".concat(ct(),"']"))),vt(),xt(t))}))}(),rt=document.querySelector(".view-modal"),document.querySelector(".view-modal__close").addEventListener("click",(function(){return xt(rt)})),window.addEventListener("click",(function(t){qt(t,rt)})),document.querySelector(".todos__list").addEventListener("click",(function(t){var e,n,a,r,o=t.target.classList;return o.contains("todo__delete-icon")||o.contains("todo__checkbox")?(e=ct(),n=t.target.dataset.id,a=it[e].findIndex((function(t){return t.id===n})),it[e].splice(a,1),ft(),void vt()):o.contains("todo__edit-icon")?(function(t){st=t}(t.target.dataset.id),r=gt(ct(),t.target.dataset.id),document.querySelector("#todo-form__title").value=r.title,document.querySelector("#todo-form__description").value=r.description,document.querySelector("#todo-form__date").value=r.dueDate,document.querySelector("#todo-form__priority").value=r.priority,document.querySelector(".add-modal").classList.add("edit"),document.querySelector(".add-modal__title").textContent="Edit task",document.querySelector(".todo-form__btn").textContent="Edit task",pt(),document.querySelector(".todo-form__list").setAttribute("disabled",!0),void St(document.querySelector(".add-modal"))):void((o.contains("todo__title")||o.contains("todo__description")||o.contains("todo__container")||o.contains("todo__date")||o.contains("todo"))&&(function(t,e){var n=gt(t,e),a=document.querySelector(".view-todo__priority"),r=document.querySelector(".view-todo__date");switch(document.querySelector(".view-modal__title").textContent=t,document.querySelector(".view-todo__title").textContent=n.title,document.querySelector(".view-todo__description").textContent=n.description,""===n.dueDate?r.textContent="":r.textContent="Due ".concat(n.dueDate),a.className="view-todo__priority",n.priority){case"low":a.textContent="!",a.classList.add("view-todo__priority--low");break;case"medium":a.textContent="!!",a.classList.add("view-todo__priority--med");break;case"high":a.textContent="!!!",a.classList.add("view-todo__priority--high");break;default:a.textContent=""}}(ct(),t.target.dataset.id),St(document.querySelector(".view-modal"))))})),document.querySelector(".sidebar").addEventListener("click",(function(t){var e;t.target.classList.contains("list-btn")?(t.target.parentNode.remove(),e=t.target.dataset.name,delete it[e],ft(),lt("Inbox"),yt(document.querySelector("#inbox")),bt(document.querySelector("#inbox")),vt()):t.target.classList.contains("list-item")?(lt(t.target.dataset.name),yt(t.target),bt(t.target),vt()):t.target.parentNode.classList.contains("list-item")&&(lt(t.target.parentNode.dataset.name),yt(t.target.parentNode),bt(t.target.parentNode),vt())})),document.querySelector(".sidebar__collapse").addEventListener("click",(function(){var t=document.querySelector(".sidebar"),e=document.querySelector(".sidebar__collapse");"none"===window.getComputedStyle(t).float?(document.querySelector(".sidebar").classList.toggle("sidebar--mobile"),document.querySelector(".sidebar").classList.remove("sidebar--small"),e.classList.toggle("sidebar__collapse--left"),e.classList.remove("sidebar__collapse--right")):(e.classList.toggle("sidebar__collapse--right"),e.classList.remove("sidebar__collapse--left"),document.querySelector(".sidebar").classList.toggle("sidebar--small"))}))})();