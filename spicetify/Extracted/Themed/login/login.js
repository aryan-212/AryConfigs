(()=>{var e,t={6814:e=>{e.exports={af:"af-ZA",am:"am-ET",ar:"ar",az:"az-AZ",bg:"bg-BG",bn:"bn-IN",bho:"bp",cs:"cs-CZ",da:"da-DK",de:"de-DE",el:"el-GR",es:"es-ES","es-419":"es-LA",et:"et-EE",fa:"fa-IR",fr:"fr-FR",fi:"fi-FI",fil:"fp-PH","fr-CA":"fr-CA",gu:"gu-IN",hu:"hu-HU",he:"he-IL",hi:"hi-IN",hr:"hr-HR",id:"id-ID",is:"is-IS",it:"it-IT",ja:"ja-JP",kn:"kn-IN",ko:"ko-KR",lt:"lt-LT",lv:"lv-LV",ml:"ml-IN",mr:"mr-IN",ms:"ms-MY",nb:"nb-NO",ne:"ne-NP",nl:"nl-NL",or:"or-IN","pa-IN":"pa-IN","pa-PK":"pa-PK",pl:"pl-PL","pt-PT":"pt-PT","pt-BR":"pt-BR",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",sr:"sr-RS",sv:"sv-SE",sw:"sw",ta:"ta-IN",te:"te-IN",th:"th-TH",tr:"tr-TR",uk:"uk-UA",ur:"ur",vi:"vi-VN","zh-CN":"zh-CN","zh-TW":"zh-TW",zu:"zu-ZA","ar-EG":"ar-EG","ar-MA":"ar-MA","ar-SA":"ar-SA",eu:"eu-ES",bs:"bs-BA",ca:"ca-ES","zh-HK":"zh-HK","en-GB":"en-GB",gl:"gl-ES",mk:"mk-MK","es-AR":"es-AR","es-MX":"es-MX"}},8955:(e,t,s)=>{"use strict";var n=s(7995),o=s(2033);var r=s(9496),i=s(6814),a=s.n(i);let l=function(e){return e.af="af",e.am="am",e.ar="ar",e.arEG="ar-EG",e.arMA="ar-MA",e.arSA="ar-SA",e.az="az",e.bg="bg",e.bn="bn",e.bho="bho",e.bs="bs",e.ca="ca",e.cs="cs",e.da="da",e.de="de",e.el="el",e.en="en",e.enGB="en-GB",e.es419="es-419",e.es="es",e.esAR="es-AR",e.esMX="es-MX",e.et="et",e.eu="eu",e.fa="fa",e.fi="fi",e.fil="fil",e.frCA="fr-CA",e.fr="fr",e.gl="gl",e.gu="gu",e.he="he",e.hi="hi",e.hr="hr",e.hu="hu",e.id="id",e.is="is",e.it="it",e.ja="ja",e.kn="kn",e.ko="ko",e.lt="lt",e.lv="lv",e.mk="mk",e.ml="ml",e.mr="mr",e.ms="ms",e.nb="nb",e.ne="ne",e.nl="nl",e.or="or",e.paIN="pa-IN",e.paPK="pa-PK",e.pl="pl",e.ptBR="pt-BR",e.ptPT="pt-PT",e.ro="ro",e.ru="ru",e.sk="sk",e.sl="sl",e.sr="sr",e.sv="sv",e.sw="sw",e.ta="ta",e.te="te",e.th="th",e.tr="tr",e.uk="uk",e.ur="ur",e.vi="vi",e.zhCN="zh-CN",e.zhHK="zh-HK",e.zhTW="zh-TW",e.zu="zu",e}({});var c=function(e){return e.AR="، ",e.FA="، ",e.EN=", ",e}(c||{}),d=function(e){return e.ZERO="zero",e.ONE="one",e.TWO="two",e.FEW="few",e.MANY="many",e.OTHER="other",e}(d||{});let u={};const g=e=>"ar"===e?"ar-u-nu-latn":e;function p(e){const t=`(?:${e.join("|")})`;return new RegExp(String.raw`(\{${t}\}|%${t}%)`,"g")}const h=new class{_relativeTimeFormat=null;_dateTimeFormats=new Map;constructor(){this._dictionary={},this._locale=l.en,this._urlLocale=l.en}getDateTimeFormat(e){const t=JSON.stringify(Object.keys(e).sort().map((t=>({[t]:e[t]}))));let s=this._dateTimeFormats.get(t);return void 0===s&&(s=new Intl.DateTimeFormat(g(this._locale),e),this._dateTimeFormats.set(t,s)),s}getRelativeTimeFormat(){return null===this._relativeTimeFormat&&(this._relativeTimeFormat=void 0===Intl.RelativeTimeFormat?null:new Intl.RelativeTimeFormat(this._locale)),this._relativeTimeFormat}getDictionary(){return this._dictionary}setDictionary(e){this._dictionary=e}setLocale(e){this._locale=e,this._dateTimeFormats.clear(),this._relativeTimeFormat=null}setUrlLocale(e){this._urlLocale=e}getLocale(){return this._locale}getUrlLocale(){return this._urlLocale}getSmartlingLocale(){const e=this._locale;return a()[e]||e}toLocaleLowerCase(e){return e?.toLocaleLowerCase(this._locale)}toLocaleUpperCase(e){return e?.toLocaleUpperCase(this._locale)}get(e,...t){const s=e in this._dictionary?this._dictionary[e]:e;let n="";if("string"!=typeof s){const e=t[0],o=((e,t)=>{try{return(u[e]||(u[e]=new Intl.PluralRules(e))).select(t)}catch{return d.OTHER}})(this._locale,parseInt(e,10)),r=s[o];void 0!==r?n=r:s.other&&(n=s.other)}else n=s;if(/%\d%/.test(n)){if(!["desktop.login.DefaultErrorMessage","desktop.login.ErrorProxyAuthRequired","desktop.login.MissingUserInfoMessage","desktop.login.RegionMismatchMessage","desktop.login.ClientUpdateFail","desktop.login.FbUserNotFoundSignUp","desktop-auth.error"].includes(e))throw new Error("i18n: The placeholder format %0% is legacy and is only allowed for existing strings.")}const o={},i={};t.forEach(((e,t)=>{const s="object"!=typeof e||null===e||(0,r.isValidElement)(e)?[[t,e]]:Object.entries(e);for(const[e,t]of s)(0,r.isValidElement)(t)?i[e]=t:void 0!==t&&(o[e]=t)})),n=n.replace(p(Object.keys(o)),((e,t)=>{const s=t.slice(1,-1),n=o[s];return"number"==typeof n?this.formatNumber(n):n}));const a=Object.keys(i);return a.length?(0,r.createElement)(r.Fragment,null,n.split(p(a)).map(((e,t)=>{if(t%2){const t=e.slice(1,-1),s=i[t];return(0,r.cloneElement)(s,{key:s.key??t})}return e})).filter((e=>""!==e))):n}getSeparator(){switch(this._locale){case l.ar:return c.AR;case l.fa:return c.FA;default:return c.EN}}formatNumber(e,t){return e.toLocaleString(g(this._locale),t)}formatNumberCompact(e){return this.formatNumber(e,{notation:"compact",maximumFractionDigits:1})}formatDate(e,t=null){const s=t||{year:"numeric",month:"long",day:"numeric"};return this.getDateTimeFormat(s).format(e)}formatRelativeDate(e,t=null){const s=new Date(Date.now());e=new Date(e);const n=this.getRelativeTimeFormat(),o=e.getTime()-s.getTime(),r=Math.abs(o)<2592e6;if(null!==n&&r){const{weeks:e,days:t,hours:s,minutes:r,seconds:a}=(i=o,{seconds:Math.round(i/1e3),minutes:Math.round(i/1e3/60),hours:Math.round(i/1e3/60/60),days:Math.round(i/1e3/60/60/24),weeks:Math.round(i/1e3/60/60/24/7)});return Math.abs(t)>=7?n.format(e,"weeks"):Math.abs(s)>=24?n.format(t,"days"):Math.abs(r)>=60?n.format(s,"hours"):Math.abs(a)>=60?n.format(r,"minutes"):n.format(a,"seconds")}var i;return this.formatDate(e,t)}__resetForTests(){this._dictionary={},this._locale=l.en,u={}}};var f=s(5530),m=s.n(f);var w=s(1697),_=s(7583),y=s(8484),x=s(7146);const k="https://www.spotify.com/redirect/account-page/",v="showSettings",b={id:"UnknownLoginErrorMessage"},S={id:"DefaultErrorMessage",replace:[v]},N={127:{id:"SessionTerminatedMessage"},3:{id:"BadCredentialsMessage"},4:{id:"ErrorResolvingDNS"},53:{id:"ErrorProxyUnauthorized"},54:{id:"ErrorProxyForbidden"},55:{id:"ErrorProxyAuthRequired",replace:[v]},400:b,401:b,402:{id:"CriticalUpdate"},403:{id:"UserBannedMessage"},404:b,405:b,406:{id:"UserNotAllowedOnPlatformMessage"},407:{id:"MissingUserInfoMessage",replace:[k]},408:{id:"RegionMismatchMessage",replace:[k,"https://www.spotify.com/redirect/upgrade-product/"]},409:{id:"PremiumUsersOnlyMessage"},410:{id:"BadCredentialsMessage"},411:b,412:{id:"BadCredentialsMessage"},413:{id:"CreateUserDeniedMessage"},414:b,415:b,416:b,417:{id:"FacebookCredentialsMisusedMessage"},418:b,"critical-update-error":{id:"ClientUpdateFail",replace:["https://www.spotify.com/redirect/download/"]}},E={1:b,2:b,3:{id:"BadCredentialsMessage"},4:b,5:b,6:b,7:b,8:b,9:b},O={1:{silent:!0},2:b,3:b,4:{id:"SessionExpiredMessage"},5:S};const C="H5vfurs7KNEs9Io5DUA7",A="qfBRU_bttJde7gy46oAB",j="ypTrzM1PtlrZp04qs6Eq",R="oHZmDpK0SrWDaXhPjUtC",I="lAHowB9HYfAUrg9UaSde";var M=s(4637);var T=function(e){return e[e.SUCCESS=0]="SUCCESS",e[e.OPERATION_ABORTED=1]="OPERATION_ABORTED",e[e.OPERATION_TIMED_OUT=2]="OPERATION_TIMED_OUT",e[e.LOGIN_BAD_CREDENTIALS=3]="LOGIN_BAD_CREDENTIALS",e[e.LOGIN_BAD_APP_KEY=4]="LOGIN_BAD_APP_KEY",e[e.LOGIN_BAD_CLIENT_VERSION_INFO=5]="LOGIN_BAD_CLIENT_VERSION_INFO",e[e.STORAGE_INITIALIZATION_FAILED=6]="STORAGE_INITIALIZATION_FAILED",e[e.MULTIPLE_LOGIN_NOT_ALLOWED=7]="MULTIPLE_LOGIN_NOT_ALLOWED",e[e.OPERATION_CANCELLED=8]="OPERATION_CANCELLED",e[e.BAD_DEVICE_INFO=9]="BAD_DEVICE_INFO",e[e.INTERNAL_ERROR=10]="INTERNAL_ERROR",e}(T||{});const P=function({logger:e,showSettings:t}){const[n,o]=(0,r.useState)(""),[i,a]=(0,r.useState)(!1),[l,c]=(0,r.useState)(!1),d=(0,r.useRef)(0);(0,r.useEffect)((()=>{e.logPageView({page:"auth-on-web"})}),[e]);const u=async t=>{const n=++d.current,r=m().create().toString();c(t),o(""),a(!0),e.logAction({page:"auth-on-web",action_type:"click",action_intent:t?"sign-up-with-browser":"log-in-with-browser",action_hash:r});try{await(i={name:"login-accounts",args:[{method:"login-accounts",enableSignup:t,actionHash:r}]},s.g&&"function"==typeof s.g._getSpotifyModule?new Promise(((e,t)=>{s.g._getSpotifyModule("bridge").executeRequest(JSON.stringify(i),{onSuccess:e,onFailure:t})})):null),e.logAction({page:"auth-on-web",action_type:"view",action_intent:t?"show-success-signup":"show-success-login"},{flush:!1}),await e.finalFlush(),location.href="spotify:app:xpui"}catch(s){const r="string"==typeof s?JSON.parse(s):s;if(n!==d.current)return void e.logAction({page:"auth-on-web",action_type:"view",action_intent:t?"sign-up-with-browser-cancelled-by-new-attempt":"log-in-with-browser-cancelled-by-new-attempt",item_id:r?.errorReference});a(!1);let i=function(e,t,s){if(0===t)return!1;if(!e&&!t)return!1;let n=N;switch(e){case"session":n=E;break;case"desktop_login_accounts":n=O}const o=n[t]||S;if(o.silent)return!1;const r=o.replace||[];let i="";switch(o.id){case"UnknownLoginErrorMessage":i=h.get("desktop.login.UnknownLoginErrorMessage");break;case"DefaultErrorMessage":i=h.get("desktop.login.DefaultErrorMessage",r[0]);break;case"SessionTerminatedMessage":i=h.get("desktop.login.SessionTerminatedMessage");break;case"SessionExpiredMessage":i=h.get("desktop.login.SessionExpiredMessage");break;case"BadCredentialsMessage":i=h.get("desktop.login.BadCredentialsMessage");break;case"ErrorResolvingDNS":i=h.get("desktop.login.ErrorResolvingDNS");break;case"ErrorProxyUnauthorized":i=h.get("desktop.login.ErrorProxyUnauthorized");break;case"ErrorProxyForbidden":i=h.get("desktop.login.ErrorProxyForbidden");break;case"ErrorProxyAuthRequired":i=h.get("desktop.login.ErrorProxyAuthRequired",r[0]);break;case"CriticalUpdate":i=h.get("desktop.login.CriticalUpdate");break;case"UserBannedMessage":i=h.get("desktop.login.UserBannedMessage");break;case"UserNotAllowedOnPlatformMessage":i=h.get("desktop.login.UserNotAllowedOnPlatformMessage");break;case"MissingUserInfoMessage":i=h.get("desktop.login.MissingUserInfoMessage",r[0]);break;case"RegionMismatchMessage":i=h.get("desktop.login.RegionMismatchMessage",r[0],r[1]);break;case"PremiumUsersOnlyMessage":i=h.get("desktop.login.PremiumUsersOnlyMessage");break;case"CreateUserDeniedMessage":i=h.get("desktop.login.CreateUserDeniedMessage");break;case"ClientUpdateFail":i=h.get("desktop.login.ClientUpdateFail",r[0]);break;case"FbUserNotFoundSignUp":i=h.get("desktop.login.FbUserNotFoundSignUp",r[0])}return s?`${i}<br>${h.get("desktop.login.errorCode",s)}`:i}(r.errorCategory,r.errorCode,r.errorReference);"desktop_login_accounts"===r.errorCategory&&r.errorCode===T.OPERATION_TIMED_OUT&&(i=t?h.get("desktop-auth.login.signup-time-out"):h.get("desktop-auth.login.login-time-out")),o(i||""),e.logAction({page:"auth-on-web",action_type:"view",action_intent:t?"show-error-signup":"show-error-login",item_id:r?.errorReference})}var i};return(0,M.jsx)("main",{"data-testid":"login",children:i?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(w.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:C,children:l?h.get("desktop-auth.login.go-to-browser-signup"):h.get("desktop-auth.login.go-to-browser-login")}),(0,M.jsxs)("button",{className:j,onClick:()=>{a(!1),e.logAction({page:"auth-on-web",action_type:"click",action_intent:"try-again"})},children:[(0,M.jsx)(w.D,{as:"span",variant:"ballad",semanticColor:"textSubdued",children:h.get("desktop-auth.login.not-seeing-browser")})," ",(0,M.jsx)(w.D,{as:"span",variant:"balladBold",semanticColor:"textBase",children:h.get("desktop-auth.login.try-again")})]})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(w.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:C,children:[h.get("desktop-auth.login.millions-of-songs"),(0,M.jsx)("br",{}),h.get("desktop-auth.login.free-on-spotify")]}),n&&(0,M.jsxs)("div",{className:R,role:"alert",onClick:e=>{if(e.currentTarget.getAttribute("data-action")){"showSettings"===e.currentTarget.getAttribute("data-action")&&t()}},"aria-live":"assertive",children:[(0,M.jsx)(_.l,{className:I}),(0,M.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]}),(0,M.jsx)(y.D,{onClick:()=>{u(!1)},iconTrailing:x.T,"data-testid":"login-button",children:h.get("desktop-auth.login.log-in-with-browser")}),(0,M.jsxs)("button",{className:A,onClick:()=>{u(!0)},children:[(0,M.jsx)(w.D,{as:"span",variant:"ballad",semanticColor:"textSubdued",children:h.get("desktop-auth.login.new-to-spotify")}),(0,M.jsx)(w.D,{as:"span",variant:"balladBold",semanticColor:"textBase",children:h.get("desktop-auth.login.sign-up-with-browser")}),(0,M.jsx)(x.T,{iconSize:16,semanticColor:"textBase"})]})]})})};var F=s(4875),D=s.n(F);const L=2,U=3,B=4,W={"auto-detect":{label:()=>h.get("desktop.settings.proxy.autodetect")},"no-proxy":{label:()=>h.get("desktop.settings.proxy.noproxy")},http:{label:()=>h.get("desktop.settings.proxy.http")},socks4:{label:()=>h.get("desktop.settings.proxy.socks4")},socks5:{label:()=>h.get("desktop.settings.proxy.socks5")}},z=[{enumKey:"auto-detect",enumValue:0},{enumKey:"no-proxy",enumValue:1},{enumKey:"http",enumValue:2},{enumKey:"socks4",enumValue:3},{enumKey:"socks5",enumValue:4}];var H=s(3940);const K="mpdBa62OP4Fr5wvCsa89",G="acVhMt5pELcXQyLaaPuV",V="AavUTirpKSAHapguSAy0",J="SkbGMKYv49KtJNB5XxdX",q="qfjicQPaTTPrLWJWRxMQ",Z=({id:e,type:t,placeHolder:s,inputRef:n,handleOnChange:o})=>(0,M.jsx)("input",{type:t||"text",id:e,"data-testid":e,className:J,placeholder:s,ref:n,onChange:o}),$=({children:e,label:t})=>(0,M.jsx)(H.c,{label:t,className:q,children:e});var X=s(2842),Q=s.n(X);function Y(){return"Safari"===Q().parse(window.navigator.userAgent).browser.name}const ee="zrvvPyoxE6wQNqnu0yWA",te="jmu6DFPvhxRl0wSfmv2O",se=({value:e,id:t,children:s,disabled:n,onSelect:o,className:r,dir:i})=>(0,M.jsx)("span",{className:r,children:(0,M.jsx)("select",{className:D()(ee,{[te]:Y()}),value:e?.toString(),id:t,disabled:n,onBlur:()=>{},onChange:e=>{o(e.target.value)},dir:i,children:s})}),ne=(0,r.createContext)(void 0),oe=({children:e})=>{const[t,s]=(0,r.useState)(!1),[n,o]=(0,r.useState)(new Set),i=(0,r.useCallback)(((e,t)=>{o((s=>{if(s.has(e)===t)return s;const n=new Set(s);return t?n.add(e):n.delete(e),n}))}),[]),a=n.size>0;return(0,M.jsx)(ne.Provider,{value:{sectionMatch:t,setSectionMatch:s,sectionContainsMatch:a,setSectionFilterMatchQueryValue:i},children:e})},re=()=>{const e=(0,r.useContext)(ne);if(void 0===e)throw new Error("useSectionMatchState() must be used within a SectionFilterMatchContextProvider");return e};(0,s(9563).Ue)((e=>({lastFilterState:"",lastFilteredUri:"",setLastState:(t,s)=>{e({lastFilterState:t,lastFilteredUri:s})}})));const ie=(0,r.createContext)({setFilter:()=>{throw new Error("setFilter must be used within a FilterProvider")},filter:""});s(7835);const ae=new Intl.Collator(void 0,{sensitivity:"base",usage:"search"}),le=/\p{White_Space}/u,ce=/\p{P}/u,de=/\p{sc=Han}/u;function ue(e){return null!==e&&le.test(e)}function ge(e){return null!==e&&(e<="/"||e>=":"&&e<="@"||"\\"===e||ue(e))}function pe(e){return null!==e&&ce.test(e)}function he(e){return null!==e&&de.test(e)}class fe{constructor(e,t,s){if(t<0||s<0||t+s>e.length)throw new RangeError;this.data=e,this.offset=t,this.length=s,this.position=0}static from(e){const t=Array.from(e.normalize("NFC"));return new fe(t,0,t.length)}toString(){return this.data.slice(this.offset,this.offset+this.length).join("")}slice(e=0,t=this.length){if(e<0||t>this.length)throw new RangeError;const s=this.offset+e,n=t-e;return new fe(this.data,s,n)}nextCodePoint(){return this.position===this.length?null:this.data[this.offset+this.position++]}}function me(e){let t;do{t=e.nextCodePoint()}while(null!==t&&ue(t)||pe(t));return t}function we(e,t){let s=me(e),n=me(t);if(null===n)return{offset:0,length:0};const o=e.offset+e.position-1;let r=e.offset+e.position;for(;;){if(null===s&&null===n)return{offset:o,length:r-o};if(null===n)return{offset:o,length:r-o};if(null===s)return null;if(0!==ae.compare(s,n))return null;r=e.offset+e.position,s=me(e),n=me(t)}}function _e(e,t){let s,n,o;do{n=e.position,s=e.nextCodePoint()}while(null!==s&&ue(s));if(t?.segmentQuotedStrings&&function(e){return null!==e&&('"'===e||"'"===e)}(s)){const t=s;n=e.position;do{o=e.position,s=e.nextCodePoint()}while(null!==s&&s!==t);return null===s&&n===o?null:e.slice(n,o)}do{if(o=e.position,t?.segmentCJKUnifieIdeographs&&he(s))break;s=e.nextCodePoint()}while(null!==s&&!ge(s));return null===s&&n===o?null:e.slice(n,o)}function ye(e){return _e(e,{segmentQuotedStrings:!0,segmentCJKUnifieIdeographs:!1})}function xe(e){return _e(e,{segmentQuotedStrings:!1,segmentCJKUnifieIdeographs:!0})}function ke(e,t){const s=[];for(let n=xe(e);null!==n;n=xe(e)){let o=we(n,t.slice());null===o?(o=we(e.slice(n.offset),t.slice()),null===o||s.push(o)):s.push(o)}return s}function ve(e,t){return e.offset===t.offset&&e.length===t.length}const be=(e,t)=>"string"==typeof e&&"string"==typeof t?!(e.length>0)||null!==function(e,...t){const s=fe.from(e),n=[];for(let e=ye(s);null!==e;e=ye(s)){const s=[];for(let n=0;n<t.length;++n){const o=t[n],r=ke(fe.from(o),e);for(const e of r)s.push({text:o,range:e})}if(0===s.length)return null;n.push(...s.filter(((e,t,s)=>e.range.length>0&&s.findIndex((t=>ve(e.range,t.range)))===t)))}return n.length>0?n:null}(e,t):"boolean"!=typeof e||e,Se={section:"c6TyNYOUJRIsjYZJZofy",hidden:"V4Bh2Ch7KvYUdn2s9ZdX"};function Ne({children:e,filterMatchQuery:t}){const{filter:s}=(0,r.useContext)(ie),{setSectionMatch:n,sectionContainsMatch:o}=re(),i=be(s,t);(0,r.useEffect)((()=>{n(i)}),[i,n]);const a=!i&&!o;return(0,M.jsx)("div",{className:D()(Se.section,{[Se.hidden]:a}),children:e})}function Ee(e){return(0,M.jsx)(oe,{children:(0,M.jsx)(Ne,{...e})})}var Oe=s(9237),Ce=s.n(Oe);const Ae={highlightedText:"M0E2Al6URHV3iyoDbvi_"};function je({searchWords:e,textToHighlight:t,...s}){return 0===e.length||e.every((e=>!e))?(0,M.jsx)(M.Fragment,{children:t}):(0,M.jsx)(Ce(),{highlightClassName:Ae.highlightedText,searchWords:e,textToHighlight:t,autoEscape:!0,...s})}function Re({children:e}){const{filter:t}=(0,r.useContext)(ie);return(0,M.jsx)(w.D,{as:"h2",variant:"cello",semanticColor:"textBase",children:(0,M.jsx)(je,{searchWords:[t],textToHighlight:e})})}var Ie=s(9919);const Me="gvcgOXnAiNKEe_z92_lw";function Te({onClick:e}){return(0,M.jsx)(Ie.P,{className:Me,onClick:e,children:h.get("settings.restartApp")})}const Pe=(e,t,s)=>{let n=`${e}:${t}`;switch(s){case L:n+="@http";break;case U:n+="@socks4";break;case B:n+="@socks5"}return n},Fe=({addr:e,mode:t,pass:s,user:n,setValue:o,restartContainer:i,fullWidth:a})=>{const l=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),u=(0,r.useRef)(null),[g,p]=(0,r.useState)(""),[f,m]=(0,r.useState)(""),[w,_]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const[t,s]=e?.split(/[:@]+/)||["",""];p(t),m(s),l.current&&(l.current.value=t),c.current&&(c.current.value=s)}),[e]),(0,r.useEffect)((()=>{u.current&&s&&(u.current.value=s.toString())}),[s]),(0,r.useEffect)((()=>{d.current&&n&&(d.current.value=n.toString())}),[n]);const y=(0,r.useCallback)((({target:e})=>{const s=Pe(e.value,f,t||0);p(e.value),o("network.proxy.addr",s),_(!0)}),[t,f,o]),x=(0,r.useCallback)((({target:e})=>{const s=Pe(g,e.value,t||0);m(e.value),o("network.proxy.addr",s),_(!0)}),[t,g,o]),k=(0,r.useCallback)((({target:e})=>{o("network.proxy.user",e.value),_(!0)}),[o]),v=(0,r.useCallback)((({target:e})=>{o("network.proxy.pass",e.value),_(!0)}),[o]),b=0!==t&&1!==t,S=t!==U;return(0,M.jsxs)(Ee,{filterMatchQuery:h.get("desktop.settings.proxy.title"),children:[(0,M.jsx)(Re,{children:h.get("desktop.settings.proxy.title")}),(0,M.jsxs)("div",{className:D()(G,a?V:null),children:[(0,M.jsx)($,{label:h.get("desktop.settings.proxy.type"),children:(0,M.jsx)(se,{id:"network.proxy.mode",value:t,onSelect:e=>{const t=parseInt(e,10);o("network.proxy.mode",t),_(!0)},children:z.map((({enumKey:e,enumValue:t})=>(0,M.jsx)("option",{value:t,"data-testid":e,children:W[e]?W[e].label():""},e)))})}),b?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("div",{className:K,children:[(0,M.jsx)($,{label:h.get("desktop.settings.proxy.host"),children:(0,M.jsx)(Z,{id:"network.proxy.host",handleOnChange:y,placeHolder:h.get("desktop.settings.proxy.host"),inputRef:l})}),(0,M.jsx)($,{label:h.get("desktop.settings.proxy.port"),children:(0,M.jsx)(Z,{id:"network.proxy.port",type:"number",handleOnChange:x,placeHolder:h.get("desktop.settings.proxy.port"),inputRef:c})})]}),(0,M.jsxs)("div",{className:S?K:void 0,children:[(0,M.jsx)($,{label:h.get("desktop.settings.proxy.user"),children:(0,M.jsx)(Z,{id:"network.proxy.user",handleOnChange:k,placeHolder:h.get("desktop.settings.proxy.user"),inputRef:d})}),S?(0,M.jsx)($,{label:h.get("desktop.settings.proxy.pass"),children:(0,M.jsx)(Z,{id:"network.proxy.pass",handleOnChange:v,placeHolder:h.get("desktop.settings.proxy.pass"),type:"password",inputRef:u})}):null]})]}):null,w&&(0,M.jsx)("div",{children:(0,M.jsx)(Te,{onClick:i})})]})]})},De="sp://proxy/v1/";function Le(){const[e,t]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async function(){return new Promise(((e,t)=>{window.sendCosmosRequest({request:JSON.stringify({method:"GET",uri:De}),persistent:!1,onSuccess:s=>{const n=JSON.parse(s);200!==n.status&&t(new Error(`Failed to fetch proxy settings (status code: ${n.status})`));const o=JSON.parse(n.body);e({mode:o["network.proxy.mode"],address:o["network.proxy.addr"],username:o["network.proxy.user"],password:o["network.proxy.pass"]})},onFailure:(e,s)=>{t(e)}})}))})().then(t)}),[t]);return{settings:e,updateSettings:(0,r.useCallback)((e=>{(async function(e){return new Promise(((t,s)=>{const n={"network.proxy.mode":e.mode};[L,U,B].includes(e.mode)&&(n["network.proxy.addr"]=e.address,n["network.proxy.user"]=e.username),[L,B].includes(e.mode)&&(n["network.proxy.pass"]=e.password),window.sendCosmosRequest({request:JSON.stringify({method:"PUT",uri:De,body:JSON.stringify(n)}),persistent:!1,onSuccess:()=>{t()},onFailure:(e,t)=>{s(e)}})}))})(e).then((()=>t({...e})))}),[t])}}function Ue(){return(0,r.useCallback)((()=>async function(){return new Promise(((e,t)=>{window.sendCosmosRequest({request:JSON.stringify({method:"POST",uri:"sp://desktop/v1/restart"}),persistent:!1,onSuccess:()=>{e()},onFailure:(e,s)=>{t(e)}})}))}()),[])}const Be="BuzoTjBZd1UqCn6DmFJr",We="HKamyJi9H31s99erfVyG";function ze(){return(0,M.jsxs)("div",{className:We,children:[(0,M.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"12px",width:"56px",x:"0px",y:"0px",viewBox:"0 0 1 100",xmlSpace:"preserve","data-testid":"loadingIcon",children:[(0,M.jsx)("circle",{className:Be,cx:"-140",cy:"50",r:"32"}),(0,M.jsx)("circle",{className:Be,cx:"0",cy:"50",r:"32"}),(0,M.jsx)("circle",{className:Be,cx:"140",cy:"50",r:"32"})]}),(0,M.jsx)("span",{className:"hidden-visually",children:h.get("page.loading")})]})}const He=["network.proxy.mode","network.proxy.addr","network.proxy.user","network.proxy.pass"];const Ke=()=>{const{settings:e,updateSettings:t}=Le(),s=Ue(),n=(0,r.useCallback)(((s,n)=>{if(null!==e&&function(e){return!!He.includes(e)}(s)){const o=e;switch(s){case"network.proxy.mode":o.mode=n;break;case"network.proxy.addr":o.address=n;break;case"network.proxy.user":o.username=n;break;case"network.proxy.pass":o.password=n}t(o)}return Promise.resolve()}),[e,t]);return(0,M.jsxs)("main",{className:"Settings","aria-labelledby":"settings-form-title","data-testid":"settings",children:[(0,M.jsx)("h1",{className:"HeroText",id:"settings-form-title",children:h.get("desktop.login.PreferencesLink")}),null!==e?(0,M.jsx)(Fe,{mode:e.mode,addr:e.address,user:e.username,pass:e.password,setValue:n,restartContainer:s,fullWidth:!0}):(0,M.jsx)(ze,{})]})},Ge=({mode:e,showLogin:t,showSettings:s,logger:n})=>(0,M.jsx)("footer",{className:"Footer",role:"contentinfo",children:"settings"===e?(0,M.jsx)("a",{className:"Footer__link",href:"#",onClick:()=>{n.logAction({page:"settings",action_type:"click",action_intent:"back-to-login"}),t()},"data-ta-id":"login-footer-settings-back-to-login",children:h.get("desktop.login.Back")}):(0,M.jsx)("a",{className:"Footer__link",href:"#",onClick:()=>{n.logAction({page:"settings",action_type:"click",action_intent:"open-page-settings"}),s()},"data-ta-id":"login-footer-settings",children:h.get("desktop.login.PreferencesLink")})}),Ve=()=>(0,M.jsxs)("header",{className:"Header",children:[(0,M.jsx)("h1",{className:"hidden-visually",children:"Spotify"}),(0,M.jsx)("img",{className:"Header__logo",src:"images/logo.svg",alt:""})]});var Je=s(4205),qe=s(6994);const Ze=({initialMode:e="login",logger:t})=>{const[s,n]=(0,r.useState)(e),o=function(e){const t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current}(s);(0,r.useEffect)((()=>{!async function(){new Promise(((e,t)=>{window.sendCosmosRequest({request:JSON.stringify({method:"POST",uri:"sp://messages/v1/container/control",body:'{"type":"view_loaded", "name":"/loginUI"}'}),persistent:!1,onSuccess:()=>{e()},onFailure:(e,s)=>{t(e)}})}))}()}),[]),(0,r.useEffect)((()=>{"login"===s?t.logPageView({page:"login"}):"settings"===s&&t.logPageView({page:"login/settings"})}),[s,t]);const i=o?`__${s} __${o}-to-${s}`:"",a=()=>n("settings");return(0,M.jsxs)("main",{className:"App","data-ta-id":"login-app","data-testid":"login-app","data-ta-login-mode":s,children:[(0,M.jsxs)("div",{className:"fakeWebPlayer",children:[(0,M.jsx)("aside",{}),(0,M.jsxs)("footer",{children:[(0,M.jsx)("div",{className:"fakeWebPlayer__footer-left"}),(0,M.jsx)("div",{className:"fakeWebPlayer__footer-center"}),(0,M.jsx)("div",{className:"fakeWebPlayer__footer-right"})]}),(0,M.jsx)("main",{children:(0,M.jsx)("div",{className:"fakeWebPlayer__content"})})]}),(0,M.jsx)("div",{className:`App__content ${i}`,children:(0,M.jsx)(qe.Z,{mode:"in-out",children:(0,M.jsx)(Je.Z,{timeout:{appear:0,enter:0,exit:650},children:(0,M.jsxs)("div",{className:`App__modal ${i}`,children:[(0,M.jsx)(Ve,{}),"settings"===s?(0,M.jsx)(Ke,{}):(0,M.jsx)(P,{showSettings:a,logger:t}),(0,M.jsx)(Ge,{mode:s,showLogin:()=>n("login"),showSettings:a,logger:t})]})},i)})})]},"main1")};var $e=s(3075);var Xe=s(5578);const Qe=(e,t)=>{const s=e.event_sender_context_information;return[(0,Xe.UY)({version_code:s.client_version_int,version_string:s.client_version_string}),(0,Xe.jx)(t),(0,Xe.IE)(s.installation_id),(0,Xe.CF)({device_id:s.device_id,device_manufacturer:s.device_manufacturer,device_model:s.device_model,os_version:s.os_version,platform_type:s.platform_type})]};var Ye=s(6760);let et=function(e){return e.Web="Web",e.PWA="PWA",e.Desktop="Desktop",e}({}),tt=function(e){return e.macOS="macOS",e.Windows="Windows",e.Linux="Linux",e.ChromeOS="ChromeOS",e.Other="Other",e}({});const st={BROWSER_EDGE:"spotify__browser--is-edge",BROWSER_SAFARI:"spotify__browser--is-safari",OS_MACOS:"spotify__os--is-macos",OS_WINDOWS:"spotify__os--is-windows",OS_LINUX:"spotify__os--is-linux",OS_CHROMEOS:"spotify__os--is-chromeos",CONTAINER_DESKTOP:"spotify__container--is-desktop",CONTAINER_PWA:"spotify__container--is-pwa",CONTAINER_WEB:"spotify__container--is-web"};function nt(e,t){var s;s=Object.values(st),document.documentElement.classList.remove(...s);const n=[];"Microsoft Edge"===Q().parse(window.navigator.userAgent).browser.name?n.push(st.BROWSER_EDGE):Y()&&n.push(st.BROWSER_SAFARI),t===tt.macOS?n.push(st.OS_MACOS):t===tt.Windows?n.push(st.OS_WINDOWS):t===tt.Linux?n.push(st.OS_LINUX):t===tt.ChromeOS&&n.push(st.OS_CHROMEOS),e===et.Desktop?n.push(st.CONTAINER_DESKTOP):e===et.PWA?n.push(st.CONTAINER_PWA):e===et.Web&&n.push(st.CONTAINER_WEB),function(e){e.forEach((e=>{document.documentElement.classList.add(e)}))}(n)}var ot=s(9990),rt=s(8390),it=s(4779);const at=/Spotify\/(?<version>.+)\s/;function lt(){if(!!window.navigator.userAgent.match(at))return et.Desktop;const e="serviceWorker"in window.navigator,t=window.matchMedia("(display-mode: standalone)").matches,s="Windows"in window;return e&&(t||s)?et.PWA:et.Web}const ct=/Spotify\/(?<version>.+)\s/;function dt(){const e=window.navigator.userAgent.match(ct);return e?.groups?.version||"unknown"}var ut=s(7963);const gt=m().create().toString(),pt="has-used-app",ht=!window.localStorage.getItem(pt);ht&&window.localStorage.setItem(pt,"true");const ft=window.localStorage,mt=()=>{const e=ft.getItem("utmParameters");let t;try{t=e?JSON.parse(e).referral:""}catch(e){t=""}return t};class wt{constructor(e){this._eventSender=e}logPageView({page:e}){this.logAction({page:e,action_type:"pageview",action_intent:""})}logAction({page:e,action_type:t,action_intent:s,item_id:n,action_hash:o},r){this._eventSender.send((0,ut.e)({action_type:t,action_intent:s,action_page:e,action_item_id:n,action_hash:o,device_is_new_install:ht,device_locale:window.__spotify.locale,device_referrer:mt(),ab_flags:"",session_id:gt}),r)}async finalFlush(){await this._eventSender.finalFlush()}}(0,s(1369).JP)({name:"enableNothing",description:"Property to that does nothing.",default:!1});(0,Ye.hb)(),async function(){for(const e of[window.__spotify.locale,l.en])try{const t=await fetch(`i18n/${e}.json`).then((e=>e.json()));return h.setLocale(e),void h.setDictionary(t)}catch(e){0}throw new Error("Cannot find a suitable locale! Something is wrong: talk to #desktop.")}().then((async function(){nt(lt(),function(){const e=Q().parse(window.navigator.userAgent).os.name;return"macOS"===e?tt.macOS:"Windows"===e?tt.Windows:"Linux"===e?tt.Linux:"Chrome OS"===e?tt.ChromeOS:tt.Other}());const e=function(){const e=(0,$e.qy)({providers:{endpoints:(0,$e.uG)(),token:()=>Promise.reject()}});return e.connect(),e}(),t="65b708073fc0480ea92a077233ca87bd",s=((e,t,s,n,o,r)=>(0,Xe.mi)({transport:t,suppressPersist:!1,context:Qe(e,s),storagePrefix:o,ownerProvider:n,useOptimizedESS2NA:r}))(window.__spotify,e,t,(()=>null),`${t}-loginui`,!1),i=new wt(s),a=window.__spotify&&window.__spotify.locale;a&&document.documentElement.setAttribute("lang",a);const l=rt.L.addMiddleware(it._);n.render((0,M.jsx)(o.zj,{children:(0,M.jsx)(ot.nD,{resolver:l,context:{username:null},options:{clientId:"client-desktop-ui-app-login",timeout:5e3,transport:e,eventSender:s,version:dt(),installationId:window.__spotify.event_sender_context_information?.installation_id},children:(0,M.jsx)(r.Suspense,{fallback:null,children:(0,M.jsx)(Ze,{logger:i})})})}),document.getElementById("main")),document.documentElement.setAttribute("dir",window.__spotify.localization_is_rtl?"rtl":"ltr"),(0,Ye.wm)("UI init phase is done for login")}))}},s={};function n(e){var o=s[e];if(void 0!==o)return o.exports;var r=s[e]={id:e,loaded:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=t,e=[],n.O=(t,s,o,r)=>{if(!s){var i=1/0;for(d=0;d<e.length;d++){for(var[s,o,r]=e[d],a=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((e=>n.O[e](s[l])))?s.splice(l--,1):(a=!1,r<i&&(i=r));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,o,r]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={535:0};n.O.j=t=>0===e[t];var t=(t,s)=>{var o,r,[i,a,l]=s,c=0;if(i.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var d=l(n)}for(t&&t(s);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},s=("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})(),n.nc=void 0;var o=n.O(void 0,[569],(()=>n(8955)));o=n.O(o)})();
//# sourceMappingURL=login.js.map