var Ae=Object.defineProperty;var Oe=(n,e,t)=>e in n?Ae(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var S=(n,e,t)=>(Oe(n,typeof e!="symbol"?e+"":e,t),t),X=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var f=(n,e,t)=>(X(n,e,"read from private field"),t?t.call(n):e.get(n)),v=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},A=(n,e,t,s)=>(X(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t);var g=(n,e,t)=>(X(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const U="3.5";class Ve{getItem(e,t={}){let s=localStorage.getItem(e);return s?JSON.parse(s):(this.save(e,t),t)}async getUrl(e){let t=localStorage.getItem(e),s=t?JSON.parse(t):{};return s&&s.version===U?s.value:fetch(e).then(o=>o.json()).then(o=>(this.save(e,{version:U,value:o}),o))}save(e,t){localStorage.setItem(e,JSON.stringify(t))}clear(e){localStorage.setItem(e,"")}}const z=new Ve;class D{constructor(e,t={}){const s=z.getItem(e,t);return new Proxy(s,{set(r,i,a){return r[i]=a,z.save(e,s),!0}})}}const u=new D("config"),Ue=new D("commandGroupList",[]),L=new D("servers",{}),Ee=new D("imported",[]),ye=new D("updated",[]),G={},h=(n,e=1e3)=>{const t=document.getElementById("message");t&&t.remove();var s=document.createElement("div");s.id="message",s.innerText=n,document.body.appendChild(s),setTimeout(()=>{s.style.top="0px"},1),setTimeout(()=>{s.style.top=""},e)},O=document.getElementById("command-list");O.addEventListener("click",n=>{document.getElementById("choose").style.display="block",document.getElementById("output").style.display="flex",O.style.height="50vh",O.style.fontSize="0.8rem",O.style.maxWidth="50vh"},{once:!0});const P=new class{constructor(){S(this,"element");S(this,"showing");S(this,"timer");this.element=document.getElementById("mask"),this.showing=!1}set onclick(n){this.element.addEventListener("click",e=>{n(e)})}show(){this.timer&&(clearTimeout(this.timer),this.timer=null),this.element.style.pointerEvents="auto",this.element.style.display="block",setTimeout(()=>this.element.style.opacity="0.5",10)}hide(){this.element.removeEventListener("click",this.callbacks),this.element.style.opacity="0",this.element.style.pointerEvents="none",this.timer=setTimeout(()=>this.element.style.display="none",1e3)}togger(){this.showing?this.hide():this.show()}};HTMLElement.prototype.appendCommand=function(n,e){const t=document.createElement("span");t.className="command-head",t.innerHTML=n;const s=document.createElement("span");s.className="modal-select-item",s.innerHTML=e,this.appendChild(t),this.appendChild(s)};HTMLElement.prototype.injectCommand=function(n,e){this.innerHTML="",this.appendCommand(n,e)};HTMLElement.prototype.appendTag=function(...n){if(!(n!=null&&n.length))return;const e=this;n.forEach(t=>{t&&e.appendPreTag(t)})};HTMLElement.prototype.appendPreTag=function(n,e){const t=document.createElement("span");t.className="command-head",t.innerHTML=n,this.appendChild(t),e&&t.addEventListener("click",e)};class Z{constructor(e,t={switchable:!0}){if(this.element=document.getElementById(e),!this.element)throw new Error;if((t==null?void 0:t.switchable)===!1){this.clicked=!0;return}this.iconEmoji=this.element.innerHTML,this.element.innerHTML=`<span class="front">${this.iconEmoji}</span><span class="behind">\u274C</span>`,this.clicked=!1,this.element.addEventListener("click",s=>{this.element.style.transform=this.clicked?"":"rotateY(180deg)",this.clicked=!this.clicked})}show(){this.element.className="show"}hide(){this.element.className=""}front(){this.element.style.transform="",this.clicked=!1}behind(){this.element.style.transform="rotateY(180deg)",this.clicked=!0}onShow(e){e&&this.element.addEventListener("click",t=>{this.clicked&&e(t)})}onClose(e){e&&this.element.addEventListener("click",t=>{!this.clicked&&e(t)})}onClick(e){e&&this.element.addEventListener("click",t=>e(t))}}class re{constructor(e){if(this.element=document.getElementById(e),!this.element)throw new Error}bindIcon(e){this.icon=e,e.onShow(()=>this.show()),e.onClose(()=>this.hide())}show(){this.element.style.right="0",this.icon&&this.icon.behind()}hide(){this.element.style.right="",this.icon&&this.icon.front()}}const ze="modulepreload",_e=function(n,e){return new URL(n,e).href},ve={},Je=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=_e(r,s),r in ve)return;ve[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let m=o.length-1;m>=0;m--){const p=o[m];if(p.href===r&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":ze,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((m,p)=>{l.addEventListener("load",m),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},we=[{id:"zh-CN",text:"\u7B80\u4F53\u4E2D\u6587",alias:["zh"]},{id:"zh-TW",text:"\u7E41\u9AD4\u4E2D\u6587",alias:["zh-HK","zh-SG"]},{id:"en-US",text:"English",alias:["en","en-EG","en-AU","en-GB","en-CA","en-NZ","en-IE","en-ZA","en-JM","en-BZ","en-TT"]},{id:"ru",text:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A",alias:["ru-RU"]},{id:"de",text:"Deutsch",alias:["de-CH","de-AT","de-LU","de-LI"]},{id:"es",text:"espa\xF1ol",alias:["es-AR","es-GT","es-CR","es-PA","es-DO","es-MX","es-VE","es-CO","es-PE","es-EC","es-CL","es-UY","es-PY","es-BO","es-SV","es-HN","es-NI","es-PR"]},{id:"fr",text:"Fran\xE7ais",alias:["fr-BE","fr-CA","fr-CH","fr-LU"]},{id:"id",text:"bahasa Indonesia",alias:[]},{id:"ja",text:"\u65E5\u672C\u8A9E",alias:["ja-JP"]},{id:"ko",text:"\uD55C\uAD6D\uC5B4",alias:["ko-KR"]},{id:"vi",text:"Ti\u1EBFng Vi\u1EC7t",alias:[]},{id:"pt",text:"Portugu\xEAs",alias:[]},{id:"th",text:"\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22",alias:[]}];let c={loading:"Loading...",loadSuccess:"Load Successfully",loadFail:"Load Failure",placeholder:"place hold ",placechooser:"place choose ",noParam:"This command has no parameters",copySuccess:"Copy Success",copyFail:"Copy Failure, Please try again",chooseCommandFirst:"Select the Command first",showFilter:"Filters",commandPushed:"Pushed to Worktop",saveSuccess:"Save Success",serverNotDefined:"Server not specified",gettingServerInfo:"Acquiring server information...",getServerInfoSuccess:"Server information acquire successfully",getServerInfoFail:"Cannot connect to server",serverNotSupport:"Server does not support Remote Execute",cannotConnectServer:"Cannot connect to server",unboundPlayer:"Player has not been bound",playerNotFound:"Player not found",requestsTooFrequent:"Requests too frequent",verifycodeSended:"Verifycode has been sent",verifycodeError:"Verifycode Error",verifySuccess:"Verification success",verifyFail:"Verification failure",playerBound:"Binded UID: $UID",commandEmpty:"Command cannot be Empty",commandExecuted:"Command has been executed",commandExecuteFail:"Command execution failed",commandImportSuccess:"Command import successful",commandImportFail:"Command import failure",commandExportSuccess:"Command exported successfully, check your clipboard",commandNotChoose:"No command selected",commandUnmaned:"Command Unnamed",shareCodeEmpty:"Share Code cannot be Empty",updateFail:"Update Failed",unknowError:"Unknown error, please submit issue"};const ce=n=>{if(n||!u.lang){const t=n||navigator.language;for(const s of we){if(t===s.id){u.lang=s.id;break}s.alias.forEach(o=>{o===t&&(u.lang=s.id)})}u.lang||(u.lang="en-US")}z.getUrl(`./lang/${u.lang}.json`).then(t=>{c=t,document.querySelectorAll("[bind]").forEach(s=>{const o=s.getAttribute("bind-target"),r=c[s.getAttribute("bind")];if(!!r){if(o){s.setAttribute(o,r);return}s.innerHTML=r}})});const e=document.getElementById("lang-select");we.forEach(t=>{const s=document.createElement("option");s.innerHTML=t.text,s.value=t.id,e.appendChild(s)}),e.value=u.lang,e.onchange=async t=>{ce(e.value),(await Je(()=>Promise.resolve().then(()=>lt),void 0,import.meta.url)).initCommand()}};ce();const Me=n=>ae(`./data/${u.lang}/${U}/${n}.json`),We=async(n,e)=>{const t=await Me(e);for(const s of t){if(s.id&&s.id==n||s.ids&&s.ids.includes(n))return s;if(s.children){for(const o of s.children)if(o.id==n||o.ids&&o.ids.includes(n))return s}}throw new Error(`ModalId ${n} in ${e} notfound`)},Ye=n=>ae(`./data/${u.lang}/${U}/menu.json`,{showMessage:!1}).then(e=>e.filter(t=>t.type===n)).then(e=>{if(!(e!=null&&e.length))throw new Error;const t=[];return e.forEach(s=>{t.push(...s.filterGroups)}),t}),Ze=n=>{const e=[];return n.forEach(t=>{const s={name:t.name,children:[]};for(let o=0;o<t.data[0].length;o++)s.children.push({id:t.data[0][o],name:t.data[1][o]});e.push(s)}),e},Ce=document.getElementById("modal-select"),b=document.getElementById("modal-select-data"),k=document.getElementById("modal-search"),Le=document.getElementById("modal-search-clear"),be=document.getElementById("modal-srarch-setting");var M,B,H,$,te,x,ne;class Ke{constructor(e){v(this,B);v(this,$);v(this,x);S(this,"type");S(this,"param");v(this,M,void 0);S(this,"displayList");S(this,"clear",()=>{k.value="",this.show()});this.type=e.type,this.param=e,k.select=this,k.addEventListener("change",g(this,x,ne)),Le.addEventListener("click",this.clear),be.innerHTML="",Ye(this.type).then(t=>{A(this,M,document.createElement("details"));const s=document.createElement("summary");s.innerHTML=c.showFilter,f(this,M).appendChild(s),t.forEach(o=>{const r=document.createElement("div"),i=document.createElement("p");i.innerHTML=o.name,r.appendChild(i),o.filters.forEach(a=>{a=a.replace(" ","-"),r.appendPreTag(a,()=>{k.value+=` ${a} `,this.show(k.value)})}),f(this,M).appendChild(r)}),be.appendChild(f(this,M))})}show(e){b.innerHTML="",b.removeEventListener("scroll",g(this,B,H)),Me(this.type).then(t=>{Ce.classList.remove("hide"),P.onclick=o=>this.hide(),P.show();let s=t;if(e){const o=e.trim().split(/\s+/);s=t.reduce((r,i)=>{let a=i.name.includesMultiple(...o);if(!a&&i.filter&&i.filter.map(d=>d.replace(" ","-")).includesMultiple(...o)&&(a=!0),!a&&i.children){for(const d of i.children)if(d.name.includesMultiple(...o)||d.id&&o.includes(d.id)||d.ids&&d.ids.find(l=>o.includes(String(l)))){a=!0;break}}return a&&r.push(i),r},[])}this.displayList=s,g(this,$,te).call(this,this.displayList.slice(0,99)),this.displayList.length>100&&b.addEventListener("scroll",g(this,B,H))})}hide(){k.select=null,k.value="",b.removeEventListener("scroll",g(this,B,H)),k.removeEventListener("change",g(this,x,ne)),Le.removeEventListener("click",this.clear),Ce.classList.add("hide"),P.hide()}}M=new WeakMap,B=new WeakSet,H=function(e){if(e.target.scrollHeight-(e.target.clientHeight+e.target.scrollTop)>260)return;b.removeEventListener("scroll",g(this,B,H));let t=b.childElementCount;g(this,$,te).call(this,this.displayList.slice(t,t+99))},$=new WeakSet,te=function(e){e.forEach(t=>{var r,i,a;if(!((r=t.children)!=null&&r.length)&&(t.id||((i=t.ids)==null?void 0:i.length))){let d=(a=t.id)!=null?a:t.ids[0];const l=document.createElement("div");if(t.icon){const m=document.createElement("img");m.className="icon",m.src=t.icon,l.appendChild(m)}l.appendCommand(d,t.name),t.filter&&l.appendTag(...t.filter),b.appendChild(l),l.addEventListener("click",m=>{this.param.value={label:t.name,value:d},this.hide()});return}const s=document.createElement("details"),o=document.createElement("summary");o.innerHTML=t.name,t.filter&&o.appendTag(...t.filter.map(d=>d.replace(" ","-"))),s.appendChild(o),t.children.forEach(d=>{var p;const l=document.createElement("div");if(d.icon){const y=document.createElement("img");y.className="icon",y.src=d.icon,l.appendChild(y)}let m=(p=d.id)!=null?p:d.ids[0];l.appendTag(d.type),l.appendCommand(m,d.name),s.appendChild(l),l.addEventListener("click",y=>{this.param.value={label:d.name,value:m},this.hide()})}),b.appendChild(s)}),e.length==99&&b.addEventListener("scroll",g(this,B,H))},x=new WeakSet,ne=function(){this.show(k.value)};const ae=async(n,e={showMessage:!0,unzip:!1})=>{if(G[n])return G[n];e!=null&&e.showMessage&&h(c.loading,1e4);const t=z.getUrl(n).then(s=>(e!=null&&e.unzip&&(s=Ze(s)),G[n]=s,e!=null&&e.showMessage&&h(c.loadSuccess),s));return e!=null&&e.showMessage&&t.catch(()=>h(c.loadFail,1e4)),t};String.prototype.includesMultiple=function(...n){let e=!0;for(const t of n)if(!this.includes(t)){e=!1;break}return e};Array.prototype.includesMultiple=function(...n){let e=!0;for(const t of n)if(!this.includes(t)){e=!1;break}return e};String.prototype.copy=function(){navigator.clipboard.writeText(this).then(()=>h(c.copySuccess),n=>{console.warn(n),window.copyInputElement||(window.copyInputElement=document.createElement("input"));const e=window.copyInputElement;e.value=this,e.select(),h(document.execCommand("Copy",!1)?c.copySuccess:c.copyFail)})};String.prototype.getHash=function(){let n=0;for(let e=0;e<this.length;e++)n=(n<<5)-n+this.charCodeAt(e),n=n&n;return Math.abs(n)};const Ne=new Z("setting-icon"),He=new re("setting-bar");He.bindIcon(Ne);Ne.show();const Xe=document.getElementById("export-author");Xe.addEventListener("change",n=>{u.author=n.target.value});const Ge=document.getElementById("clear-cache");Ge.addEventListener("click",n=>{localStorage.clear(),location.reload()});const le=document.getElementById("remote-host"),Qe=document.getElementById("remote-uid"),et=document.getElementById("remote-player-count"),ke=document.getElementById("remote-server-version"),tt=document.getElementById("server-verify"),w=document.getElementById("remote-execute-status"),nt=document.getElementById("server-info");class de{constructor(e){var t,s,o,r,i,a;this.url=e,this.proxyParam={cache:"no-cache",headers:{reqip:e}},this.uid=(s=(t=L[e])==null?void 0:t.uid)!=null?s:"",this.token=(r=(o=L[e])==null?void 0:o.token)!=null?r:"",this.ready=(a=(i=L[e])==null?void 0:i.verified)!=null?a:!1,u.server=e,le.value=e,Qe.value=this.uid}buildPostParam(e){return{method:"post",body:JSON.stringify(e),headers:{reqip:this.url,"Content-Type":"application/json"}}}async getInfo(){return h(c.gettingServerInfo,5e3),fetch("/status/server",this.proxyParam).then(e=>e.json()).then(e=>(console.log(e),h(c.getServerInfoSuccess),e)).then(e=>{if(!e)throw new Error;const t=e.status;return ke.innerText=t.version,et.innerText=t.maxPlayer<=0?t.playerCount:`${t.playerCount} / ${t.maxPlayer}`,nt.className="",e}).catch(()=>{h(c.cannotConnectServer),w.innerHTML=c.cannotConnectServer,ke.innerText=c.getServerInfoFail})}async testCommandPlugin(){const e=this;return fetch("/opencommand/api",this.buildPostParam({action:"ping"})).then(t=>t.json()).then(t=>{var s;if(!(t!=null&&t.retcode))throw new Error;if((s=L[this.url])!=null&&s.verified){w.innerHTML=c.playerBound.replace("$UID",this.uid);return}tt.className="",w.innerHTML=c.unboundPlayer}).catch(()=>{e.ready=!1,w.innerHTML=c.serverNotSupport})}async sendVerifycode(e){const t=this;return fetch("/opencommand/api",this.buildPostParam({action:"sendCode",data:e})).then(s=>s.json()).then(s=>{if(s.retcode===404)throw h(c.playerNotFound,3e3),w.innerHTML=c.playerNotFound,new Error(s.message);if(s.retcode===403)throw h(c.requestsTooFrequent,3e3),w.innerHTML=c.requestsTooFrequent,new Error(s.message);if(s.retcode!==200)throw h(c.unknowError,3e3),w.innerHTML=c.unknowError,new Error(s.message);return t.token=s.data,L[t.url]={uid:e,token:s.data},h(c.verifycodeSended),w.innerHTML=c.verifycodeSended,s}).catch(s=>{console.warn(s)})}async checkVerifycode(e){const t=this;return fetch("/opencommand/api",this.buildPostParam({action:"verify",token:t.token,data:e})).then(s=>s.json()).then(s=>{if(s.retcode===403)throw h(c.requestsTooFrequent,3e3),w.innerHTML=c.requestsTooFrequent,new Error(s.message);if(s.retcode!==200)throw new Error(s.message);return t.ready=!0,L[t.url]={uid:L[t.url].uid,token:L[t.url].token,verified:!0},h(c.verifySuccess),w.innerHTML=c.verifySuccess,s}).catch(s=>console.warn(s))}async execCommand(e){if(!(e!=null&&e.length)){h(c.commandEmpty,3e3);return}const t=this,s=async o=>fetch("/opencommand/api",this.buildPostParam({action:"command",token:t.token,data:o})).then(r=>r.json()).then(r=>(h(c.commandExecuted),r)).catch(r=>{h(c.commandExecuteFail,3e3)});return Promise.all(e.reduce((o,r)=>{let i=he.stringify(r).replace("/","");return o.push(s(i)),o},[]))}clearData(){L[this.url]={},this.uid=void 0,this.token=void 0,this.ready=!1}}let E=u.server?new de(u.server):void 0;const st=n=>{E=new de(n),E.getInfo(),E.testCommandPlugin()};u.server&&(E.getInfo(),E.testCommandPlugin());const me=n=>{if(!E){h(c.serverNotDefined,3e3),He.show();return}E.execCommand(n)};le.addEventListener("change",n=>{!n.target.value.startsWith("https://")&&!n.target.value.startsWith("http://")&&(n.target.value="https://"+n.target.value),E=new de(n.target.value),E.getInfo(),E.testCommandPlugin();const e=document.getElementById("remote-uid"),t=document.getElementById("send-verifycode");t.onclick=()=>{E.sendVerifycode(parseInt(e.value))};const s=document.getElementById("remote-verifycode"),o=document.getElementById("check-verifycode");o.onclick=()=>{E.checkVerifycode(parseInt(s.value))}});const ot=new UIEvent("change");le.dispatchEvent(ot);class it{constructor(e){this.list=e.map(t=>new he(t))}filter(e){return this.list.filter(t=>t.head.includes(e)||t.label.includes(e))}}class he{constructor(e){Object.assign(this,e),this.params&&(this.params=e.params.map(t=>new ue(t,this)),this.version=u.version)}build(){Pe(this)}getDTO(){return{id:this.id,params:this.params.map(e=>e.getDTO())}}static stringify(e){return e.params.reduce((t,s)=>s?t+=" "+s:t,$e(e.id).head)}}class ue{constructor(e,t){Object.assign(this,e),this.parent=t,this.isModalSelect=!["number","text","select"].includes(this.type),this.subparam&&(this.subparam.isSub=!0,this.subparam=new ue(this.subparam,t));const s=this;this.value=e.value,Object.defineProperty(this,"value",{get(){return e.value},set(o){e.value=o,Pe(s.parent),this.inputDom&&(s.isModalSelect?this.inputDom.injectCommand(o.value,o.label):this.inputDom.value=o)}})}build(){this.value=this.value}getDTO(){var t,s;if(!this.value)return null;let e=(s=(t=this.value)==null?void 0:t.value)!=null?s:this.value;return this.head&&(e=this.head+e),this.subparam&&(e=e+","+this.subparam.value),e}}const _=document.getElementById("output-span");_.addEventListener("click",n=>{_.innerText.copy()});const Pe=(n,e)=>{e=e!=null?e:_,e.command=n,e.innerHTML="";const t=document.createElement("span");t.innerHTML=n.head,t.className="head-span",e.appendChild(t),n.params&&n.params.forEach(s=>{var a,d,l,m;if(!s.value)return;const o=document.createElement("span");let r=(d=(a=s.value)==null?void 0:a.value)!=null?d:s.value,i=(l=s==null?void 0:s.subparam)==null?void 0:l.value;o.innerHTML=` ${(m=s.head)!=null?m:""}${r}${i?`,${i}`:""}`,o.title=s.name,e.appendChild(o)})},rt=document.getElementById("command-exec");rt.addEventListener("click",n=>{me([_.command.getDTO()])});const Fe=document.getElementById("search-input"),pe=()=>{var n;return ae(`./data/${u.lang}/CommandList-${(n=u.commandVersion)!=null?n:"1.4.2"}.json`)},J=new Map,fe=async n=>pe().then(e=>(e.forEach(t=>J.set(t.id,t)),J.get(n)));fe();const $e=n=>J.get(n),F=async n=>{var s;u.commandVersion=(s=n!=null?n:u.commandVersion)!=null?s:"1.4.2";const e=await pe(),t=new it(e);return se(t.list),Fe.onchange=o=>{se(t.filter(r=>r.head.includes(o.target.value)||r.label.includes(o.target.value)))},t},q=document.getElementById("command-version-select");u.commandVersion&&(q.value=u.commandVersion);q.addEventListener("change",n=>{F(n.target.value).then(e=>{let t=Fe.value;se(t?e.filter(t):e.list)})});var Ie;F((Ie=u.commandVersion)!=null?Ie:q.value);const se=n=>{const e=document.getElementById("command-list");e.innerHTML="",n.forEach(t=>{const s=document.createElement("div");s.className="card";const o=document.createElement("input");o.type="radio",o.name="command",s.appendChild(o),s.appendCommand(t.head,t.label),e.appendChild(s),s.addEventListener("click",r=>{o.checked=!0,ct(t)})})},ct=n=>{var t;const e=document.getElementById("params");e.innerHTML="",(t=n==null?void 0:n.params)!=null&&t.length||(e.innerText=c.noParam),n.params.forEach(s=>{e.appendChild(at(s))}),n.build()},Se=n=>{let e;switch(n.type){case"number":e=document.createElement("input"),e.type="number",e.max=n.max,e.min=n.min,e.placeholder=c.placeholder+n.name;break;case"string":e=document.createElement("input"),e.type="text",e.placeholder=c.placeholder+n.name;break;case"select":if(e=document.createElement("select"),n.data)for(let t=0;t<n.data.value.length;t++){const s=document.createElement("option");s.value=n.data.value[t],s.innerHTML=n.data.label[t],e.appendChild(s)}e.placeholder=c.placechooser+n.name;break;default:e=document.createElement("div"),e.className="modal-select-input",e.placeholder=c.placechooser+n.name,e.addEventListener("click",t=>{new Ke(n).show()})}return n.inputDom=e,n.required&&n.value&&n.build(),e.addEventListener("change",t=>{n.value=t.target.value}),e},at=n=>{const e=document.createElement("div"),t=document.createElement("div");e.className="param";const s=document.createElement("span");if(s.className=n.required?"required-param":"optional-param",s.innerHTML=n.name,e.appendChild(s),t.appendChild(Se(n)),n.subparam){const o=Se(n.subparam);o.className="sub-param",o.placeholder=n.subparam.name,t.appendChild(o)}return e.appendChild(t),e},xe=document.getElementById("list"),oe=new Z("command-list-icon",{switchable:!1});document.getElementById("list-hide").addEventListener("click",n=>{xe.style.display="none",oe.show()});oe.onShow(n=>{xe.style.display="block",oe.hide()});const lt=Object.freeze(Object.defineProperty({__proto__:null,commandMap:J,getCommandList:pe,getCommandById:$e,getCommandByIdAsync:fe,initCommand:F,commandVersionSelectElement:q},Symbol.toStringTag,{value:"Module"})),dt=n=>ut(ft(n)),Te=n=>pt(ht(n));function mt(n){return n>64&&n<91?n-65:n>96&&n<123?n-71:n>47&&n<58?n+4:n===43?62:n===47?63:0}function ht(n,e){for(var t=n.replace(/[^A-Za-z0-9\+\/]/g,""),s=t.length,o=e?Math.ceil((s*3+1>>>2)/e)*e:s*3+1>>>2,r=new Uint8Array(o),i,a,d=0,l=0,m=0;m<s;m++)if(a=m&3,d|=mt(t.charCodeAt(m))<<18-6*a,a===3||s-m===1){for(i=0;i<3&&l<o;i++,l++)r[l]=d>>>(16>>>i&24)&255;d=0}return r}function V(n){return n<26?n+65:n<52?n+71:n<62?n-4:n===62?43:n===63?47:65}function ut(n){for(var e=(3-n.length%3)%3,t="",s,o=n.length,r=0,i=0;i<o;i++)s=i%3,r|=n[i]<<(16>>>s&24),(s===2||n.length-i===1)&&(t+=String.fromCharCode(V(r>>>18&63),V(r>>>12&63),V(r>>>6&63),V(r&63)),r=0);return e===0?t:t.substring(0,t.length-e)+(e===1?"=":"==")}function pt(n){for(var e="",t,s=n.length,o=0;o<s;o++)t=n[o],e+=String.fromCharCode(t>251&&t<254&&o+5<s?(t-252)*1073741824+(n[++o]-128<<24)+(n[++o]-128<<18)+(n[++o]-128<<12)+(n[++o]-128<<6)+n[++o]-128:t>247&&t<252&&o+4<s?(t-248<<24)+(n[++o]-128<<18)+(n[++o]-128<<12)+(n[++o]-128<<6)+n[++o]-128:t>239&&t<248&&o+3<s?(t-240<<18)+(n[++o]-128<<12)+(n[++o]-128<<6)+n[++o]-128:t>223&&t<240&&o+2<s?(t-224<<12)+(n[++o]-128<<6)+n[++o]-128:t>191&&t<224&&o+1<s?(t-192<<6)+n[++o]-128:t);return e}function ft(n){for(var e,t,s=n.length,o=0,r=0;r<s;r++)t=n.charCodeAt(r),o+=t<128?1:t<2048?2:t<65536?3:t<2097152?4:t<67108864?5:6;e=new Uint8Array(o);for(var i=0,a=0;i<o;a++)t=n.charCodeAt(a),t<128?e[i++]=t:t<2048?(e[i++]=192+(t>>>6),e[i++]=128+(t&63)):t<65536?(e[i++]=224+(t>>>12),e[i++]=128+(t>>>6&63),e[i++]=128+(t&63)):t<2097152?(e[i++]=240+(t>>>18),e[i++]=128+(t>>>12&63),e[i++]=128+(t>>>6&63),e[i++]=128+(t&63)):t<67108864?(e[i++]=248+(t>>>24),e[i++]=128+(t>>>18&63),e[i++]=128+(t>>>12&63),e[i++]=128+(t>>>6&63),e[i++]=128+(t&63)):(e[i++]=252+(t>>>30),e[i++]=128+(t>>>24&63),e[i++]=128+(t>>>18&63),e[i++]=128+(t>>>12&63),e[i++]=128+(t>>>6&63),e[i++]=128+(t&63));return e}class N{constructor(e=[],t={}){var s;this.set=new Set(e),this.head=t,t.author=(s=t==null?void 0:t.author)!=null?s:u.author}push(e){this.set.add(e)}delete(e){this.set.delete(e)}getList(){return[...this.set]}buildCommand(){return this.getList().reduce((e,t)=>e+=he.stringify(t)+`
`,"")}copyCommand(){this.buildCommand().copy()}toBase64(){return dt(JSON.stringify(this.getDTO()))}getDTO(){return{head:this.head,list:this.getList()}}static fromBase64(e){var t;try{const s=JSON.parse(Te(e));if(!((t=s==null?void 0:s.list)!=null&&t.length))throw new Error;return new N(s.list,s.head)}catch(s){return h(c.commandImportFail),console.error(s),console.warn({raw:e,fromBase64:Te(e)}),null}}static formDTO(e){return new N(e.list,e.head)}}HTMLDivElement.prototype.renderCommandDTO=function(n){fe(n.id).then(e=>{var t,s,o;if(this.appendCommand(e.head,(t=e.name)!=null?t:e.label),!!((s=n.params)!=null&&s.length))for(let r=0;r<n.params.length;r++){const i=n.params[r];if(!i)continue;const a=e.params[r];switch(a.type){case"number":case"string":case"select":this.appendTag(`${(o=a.symbol)!=null?o:""}${i}`);break;default:const d=this;We(i,a.type).then(l=>{var m;if(l.children){for(const p of l.children)if(p.icon&&(p.id==i||p.ids.some(y=>y==i))){const y=document.createElement("img");y.className="icon",y.src=p.icon,d.appendChild(y);return}}else if(l.icon){const p=document.createElement("img");p.className="icon",p.src=l.icon,d.appendChild(p)}d.appendTag(`${(m=a.symbol)!=null?m:""}${l.name}`)});break}}})};const Be=document.getElementById("share-modal"),gt=document.getElementById("export-update"),Et=document.getElementById("export-raw"),yt=document.getElementById("import-download"),vt=document.getElementById("import-raw"),Q=document.getElementById("share-code");var I,C,W,je,Y,De;class wt{constructor(e){v(this,W);v(this,Y);v(this,I,void 0);v(this,C,void 0);A(this,I,e),P.onclick=()=>this.hide(),gt.addEventListener("click",()=>g(this,W,je).call(this)),yt.addEventListener("click",()=>{if(!Q.value.length){h(c.shareCodeEmpty);return}this.download()}),Et.addEventListener("click",()=>this.copyRaw()),vt.addEventListener("click",()=>this.readRaw())}show(){Be.classList.remove("hide"),P.show()}hide(){Be.classList.add("hide"),P.hide()}download(e){e=e!=null?e:Q.value,fetch(`${window.location.origin}/share/${e}.gmh`).then(t=>t.text()).then(t=>{f(this,I).importCommand(t)}).catch(t=>{h(c.commandImportFail)})}copyRaw(){f(this,I).exportChosenCommand().copy()}readRaw(){f(this,I).importCommandFromClipboard().catch(e=>h(c.commandImportFail))}}I=new WeakMap,C=new WeakMap,W=new WeakSet,je=function(){const e=g(this,Y,De).call(this);ye.includes(f(this,C))||fetch(window.location.origin+"/api",e).then(t=>t.json()).then(t=>{if(t.retcode!=200){h(c.updateFail);return}Q.value=f(this,C),ye.push(f(this,C))`URL: ${window.location.origin+window.location.pathname}?import=${f(this,C)}\n\nCode: ${f(this,C)}`.copy()}).catch(()=>h(c.cannotConnectServer))},Y=new WeakSet,De=function(){const e=f(this,I).exportChosenCommand();return A(this,C,e.getHash()),{method:"post",body:e,headers:{hash:f(this,C),"Content-Type":"application/json"}}};var j,ie;class Ct{constructor(e){v(this,j);if(this.element=document.getElementById(e),!this.element)throw new Error;this.list=Ue,this.list.forEach(t=>g(this,j,ie).call(this,t)),this.chosenCommandGroupSet=new Set}push(e){var t;!((t=e.list)!=null&&t.length)||(this.list.push(e),g(this,j,ie).call(this,e))}delete(e){this.list.splice(this.list.indexOf(e),1),e.dom.remove()}execChosenCommand(){if(!this.chosenCommandGroupSet.size){h(c.commandNotChoose,3e3);return}const e=[...this.chosenCommandGroupSet].reduce((t,s)=>(t.push(...s.list),t),[]);me(e)}exportChosenCommand(){if(!this.chosenCommandGroupSet.size){h(c.commandNotChoose,3e3);return}return console.log(this.chosenCommandGroupSet),`gmh://${[...this.chosenCommandGroupSet].map(t=>N.formDTO(t).toBase64()).join("&")}!`}copyChosenCommand(){if(!this.chosenCommandGroupSet.size){h(c.commandNotChoose,3e3);return}[...this.chosenCommandGroupSet].map(e=>N.formDTO(e).buildCommand()).join(`
`).copy()}async importCommandFromClipboard(){this.importCommand(await navigator.clipboard.readText()).catch(e=>h(c.commandImportFail))}importCommand(e){const t=[],s=new RegExp("(?<=gmh:\\/\\/).*(?=!)","gm");let o;for(;(o=s.exec(e))!==null;)o.index===s.lastIndex&&s.lastIndex++,o.forEach((i,a)=>{t.push(...i.split("&"))});if(!t.length)throw new Error;const r=this;t.forEach(i=>{r.push(N.fromBase64(i).getDTO())}),h(c.commandImportSuccess)}}j=new WeakSet,ie=function(e){var d,l;const t=document.createElement("details");e.dom=t;const s=document.createElement("summary"),o=document.createElement("input");o.type="checkbox",s.appendChild(o),o.addEventListener("click",m=>{m.target.checked?this.chosenCommandGroupSet.add(e):this.chosenCommandGroupSet.delete(e)});const r=document.createElement("span");if(r.innerText=((d=e==null?void 0:e.head)==null?void 0:d.title)||c.commandUnmaned,s.appendChild(r),t.appendChild(s),(l=e==null?void 0:e.head)!=null&&l.description){const m=document.createElement("div");m.className="command-group-description",m.innerText=e.head.description,t.appendChild(m)}e.list.forEach(m=>{const p=document.createElement("div");p.renderCommandDTO(m),t.appendChild(p)});const i=document.createElement("div");i.classList.add("button-group-item"),i.innerHTML="\u274C",i.addEventListener("click",m=>{this.delete(e)}),s.appendChild(i),document.getElementById("saved-command-group").appendChild(t)};const R=new Ct("menu-list"),qe=document.getElementById("app");let T=!0;const ee=document.getElementById("menu-hide");ee.addEventListener("click",n=>{ee.className=T?"menu-icon-show":"menu-icon-hide",ee.innerHTML=T?"\u{1F448}":"\u{1F90F}",qe.className=T?"":"hide",T=!T});const ge=new Z("menu-icon"),Lt=new re("menu-list");Lt.bindIcon(ge);ge.show();ge.onClick(n=>{qe.className=T?"":"hide",T=!T});const bt=document.getElementById("menu-share"),kt=new wt(R);bt.addEventListener("click",()=>kt.show());const St=document.getElementById("menu-copy");St.addEventListener("click",()=>R.copyChosenCommand());const Tt=document.getElementById("menu-execute");Tt.addEventListener("click",()=>R.execChosenCommand());const Bt=new URL(location.href).searchParams;Bt.forEach((n,e)=>{switch(e){case"server":st(decodeURIComponent(n));break;case"import":if(parseInt(n)&&(n=`${window.location.origin}/share/${n}.gmh`),console.debug(n),Ee.includes(n))break;fetch(decodeURIComponent(n)).then(t=>t.text()).then(t=>R.importCommand(t)).catch(t=>h(c.commandImportFail,3e3)).finally(()=>Ee.push(n));break;case"lang":ce(n),F(u.commandVersion);break;case"version":if(n!=="1.2.1"&&n!=="1.4.2"&&n!=="GM")break;q.value=n,F(n);break}});const It=document.getElementById("worktop-command-list");class Mt{constructor(e){if(this.element=document.getElementById(e),!this.element)throw new Error;this.list=new N}pushCommand(e){this.list.push(e);const t=document.createElement("div");t.className="card";const s=document.createElement("div");s.classList.add("button-group-item"),s.innerHTML="\u274C",s.addEventListener("click",o=>{o.stopPropagation(),this.list.delete(e),t.remove()}),t.appendChild(s),t.renderCommandDTO(e),t.command=e,It.appendChild(t)}save(){R.push({head:{title:document.getElementById("worktop-title").value,description:document.getElementById("worktop-description").value},list:this.list.getList()}),h(c.saveSuccess)}execute(){console.log(this.list.getList()),me(this.list.getList())}export(){if(!this.list.set.size){h(c.commandNotChoose,3e3);return}return`gmh://${this.list.toBase64()}!`}}const Re=new Z("worktop-icon"),Nt=new re("worktop-bar");Nt.bindIcon(Re);Re.show();const K=new Mt("worktop-bar"),Ht=document.getElementById("output-span"),Pt=document.getElementById("command-push");Pt.addEventListener("click",n=>{const e=Ht.command.getDTO();K.pushCommand(e),h(c.commandPushed)});const Ft=document.getElementById("worktop-save");Ft.addEventListener("click",n=>K.save());const $t=document.getElementById("worktop-execute");$t.addEventListener("click",n=>K.execute());const xt=document.getElementById("worktop-copy");xt.addEventListener("click",n=>{K.list.copyCommand()});
