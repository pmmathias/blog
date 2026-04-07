const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MobileUI-DeR4zWVi.js","assets/MobileInput-CkiISwYS.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const K1="modulepreload",$1=function(n){return"/vogelsimulator/"+n},Hf={},Wf=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=$1(c),c in Hf)return;Hf[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":K1,l||(u.as="script"),u.crossOrigin="",u.href=c,a&&u.setAttribute("nonce",a),document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="183",Qr={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Z1=0,Xf=1,J1=2,Dc=1,Q1=2,sa=3,Hi=0,An=1,gi=2,ds=0,eo=1,jf=2,qf=3,Yf=4,ev=5,Qs=100,tv=101,nv=102,iv=103,sv=104,rv=200,ov=201,av=202,cv=203,Vh=204,Gh=205,lv=206,hv=207,uv=208,dv=209,fv=210,pv=211,mv=212,gv=213,_v=214,Hh=0,Wh=1,Xh=2,ro=3,jh=4,qh=5,Yh=6,Kh=7,cd=0,vv=1,xv=2,Vi=0,k0=1,z0=2,V0=3,ld=4,G0=5,H0=6,W0=7,Kf="attached",yv="detached",X0=300,dr=301,oo=302,Gl=303,Hl=304,al=306,Ln=1e3,Oi=1001,Gc=1002,qt=1003,j0=1004,ra=1005,Yt=1006,Nc=1007,hs=1008,Gn=1009,q0=1010,Y0=1011,va=1012,hd=1013,Wi=1014,oi=1015,Xi=1016,ud=1017,dd=1018,xa=1020,K0=35902,$0=35899,Z0=1021,J0=1022,ai=1023,ps=1026,tr=1027,fd=1028,pd=1029,ao=1030,md=1031,gd=1033,Uc=33776,Fc=33777,Oc=33778,Bc=33779,$h=35840,Zh=35841,Jh=35842,Qh=35843,eu=36196,tu=37492,nu=37496,iu=37488,su=37489,ru=37490,ou=37491,au=37808,cu=37809,lu=37810,hu=37811,uu=37812,du=37813,fu=37814,pu=37815,mu=37816,gu=37817,_u=37818,vu=37819,xu=37820,yu=37821,Mu=36492,Su=36494,bu=36495,Eu=36283,Tu=36284,Au=36285,wu=36286,Mv=2200,Sv=2201,bv=2202,ya=2300,Ma=2301,Wl=2302,$f=2303,Yr=2400,Kr=2401,Hc=2402,_d=2500,Ev=2501,Tv=0,Q0=1,Ru=2,Av=3200,vd=0,wv=1,Is="",Rt="srgb",wn="srgb-linear",Wc="linear",lt="srgb",Sr=7680,Zf=519,Rv=512,Cv=513,Pv=514,xd=515,Iv=516,Lv=517,yd=518,Dv=519,Cu=35044,Jf="300 es",Bi=2e3,Sa=2001;function Nv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Uv(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fv(){const n=ba("canvas");return n.style.display="block",n}const Qf={};function Xc(...n){const e="THREE."+n.shift();console.log(e,...n)}function eg(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function we(...n){n=eg(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Fe(...n){n=eg(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function jc(...n){const e=n.join(" ");e in Qf||(Qf[e]=!0,we(...n))}function Ov(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Bv={[Hh]:Wh,[Xh]:Yh,[jh]:Kh,[ro]:qh,[Wh]:Hh,[Yh]:Xh,[Kh]:jh,[qh]:ro};class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ep=1234567;const ha=Math.PI/180,co=180/Math.PI;function yi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Md(n,e){return(n%e+e)%e}function kv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function zv(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function Vv(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function Gv(n,e=1){return e-Math.abs(Md(n,e*2)-e)}function Hv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Wv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function jv(n,e){return n+Math.random()*(e-n)}function qv(n){return n*(.5-Math.random())}function Yv(n){n!==void 0&&(ep=n);let e=ep+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kv(n){return n*ha}function $v(n){return n*co}function Zv(n){return(n&n-1)===0&&n!==0}function Jv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ex(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const qc={DEG2RAD:ha,RAD2DEG:co,generateUUID:yi,clamp:$e,euclideanModulo:Md,mapLinear:kv,inverseLerp:zv,lerp:ua,damp:Vv,pingpong:Gv,smoothstep:Hv,smootherstep:Wv,randInt:Xv,randFloat:jv,randFloatSpread:qv,seededRandom:Yv,degToRad:Kv,radToDeg:$v,isPowerOfTwo:Zv,ceilPowerOfTwo:Jv,floorPowerOfTwo:Qv,setQuaternionFromProperEuler:ex,normalize:ht,denormalize:_i};class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+_*a}else{c=c*p+d*a,l=l*p+f*a,h=h*p+g*a,u=u*p+_*a;const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new P,tp=new xn;class Xe{constructor(e,t,i,s,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l)}set(e,t,i,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],y=s[1],S=s[4],b=s[7],w=s[2],T=s[5],R=s[8];return r[0]=o*_+a*y+c*w,r[3]=o*m+a*S+c*T,r[6]=o*p+a*b+c*R,r[1]=l*_+h*y+u*w,r[4]=l*m+h*S+u*T,r[7]=l*p+h*b+u*R,r[2]=d*_+f*y+g*w,r[5]=d*m+f*S+g*T,r[8]=d*p+f*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(jl.makeScale(e,t)),this}rotate(e){return this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jl=new Xe,np=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ip=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tx(){const n={enabled:!0,workingColorSpace:wn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=to(s.r),s.g=to(s.g),s.b=to(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Is?Wc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return jc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return jc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wn]:{primaries:e,whitePoint:i,transfer:Wc,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:np,fromXYZ:ip,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),n}const Je=tx();function fs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function to(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let br;class nx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=ba("canvas")),br.width=e.width,br.height=e.height;const s=br.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fs(t[i]/255)*255):t[i]=fs(t[i]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ix=0;class Sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ql(s[o].image)):r.push(ql(s[o]))}else r=ql(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let sx=0;const Yl=new P;class $t extends zs{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=Oi,s=Oi,r=Yt,o=hs,a=ai,c=Gn,l=$t.DEFAULT_ANISOTROPY,h=Is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=yi(),this.name="",this.source=new Sd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=X0;$t.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(l+1)/2,b=(f+1)/2,w=(p+1)/2,T=(h+d)/4,R=(u+_)/4,x=(g+m)/4;return S>b&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=R/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=T/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=R/r,s=x/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rx extends zs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new $t(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Sd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends rx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class tg extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ox extends $t{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ve{constructor(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(e,t,i,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Er.setFromMatrixColumn(e,0).length(),r=1/Er.setFromMatrixColumn(e,1).length(),o=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,cx)}lookAt(e,t,i){const s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ms.crossVectors(i,Fn),Ms.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ms.crossVectors(i,Fn)),Ms.normalize(),Xa.crossVectors(Fn,Ms),s[0]=Ms.x,s[4]=Xa.x,s[8]=Fn.x,s[1]=Ms.y,s[5]=Xa.y,s[9]=Fn.y,s[2]=Ms.z,s[6]=Xa.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],S=i[7],b=i[11],w=i[15],T=s[0],R=s[4],x=s[8],E=s[12],k=s[1],C=s[5],D=s[9],O=s[13],z=s[2],B=s[6],F=s[10],G=s[14],Z=s[3],K=s[7],le=s[11],de=s[15];return r[0]=o*T+a*k+c*z+l*Z,r[4]=o*R+a*C+c*B+l*K,r[8]=o*x+a*D+c*F+l*le,r[12]=o*E+a*O+c*G+l*de,r[1]=h*T+u*k+d*z+f*Z,r[5]=h*R+u*C+d*B+f*K,r[9]=h*x+u*D+d*F+f*le,r[13]=h*E+u*O+d*G+f*de,r[2]=g*T+_*k+m*z+p*Z,r[6]=g*R+_*C+m*B+p*K,r[10]=g*x+_*D+m*F+p*le,r[14]=g*E+_*O+m*G+p*de,r[3]=y*T+S*k+b*z+w*Z,r[7]=y*R+S*C+b*B+w*K,r[11]=y*x+S*D+b*F+w*le,r[15]=y*E+S*O+b*G+w*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=c*f-l*d,S=a*f-l*u,b=a*d-c*u,w=o*f-l*h,T=o*d-c*h,R=o*u-a*h;return t*(_*y-m*S+p*b)-i*(g*y-m*w+p*T)+s*(g*S-_*w+p*R)-r*(g*b-_*T+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*a-i*o,S=t*c-s*o,b=t*l-r*o,w=i*c-s*a,T=i*l-r*a,R=s*l-r*c,x=h*_-u*g,E=h*m-d*g,k=h*p-f*g,C=u*m-d*_,D=u*p-f*_,O=d*p-f*m,z=y*O-S*D+b*C+w*k-T*E+R*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/z;return e[0]=(a*O-c*D+l*C)*B,e[1]=(s*D-i*O-r*C)*B,e[2]=(_*R-m*T+p*w)*B,e[3]=(d*T-u*R-f*w)*B,e[4]=(c*k-o*O-l*E)*B,e[5]=(t*O-s*k+r*E)*B,e[6]=(m*b-g*R-p*S)*B,e[7]=(h*R-d*b+f*S)*B,e[8]=(o*D-a*k+l*x)*B,e[9]=(i*k-t*D-r*x)*B,e[10]=(g*T-_*b+p*y)*B,e[11]=(u*b-h*T-f*y)*B,e[12]=(a*E-o*C-c*x)*B,e[13]=(t*C-i*E+s*x)*B,e[14]=(_*S-g*w-m*y)*B,e[15]=(h*w-u*S+d*y)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,y=c*l,S=c*h,b=c*u,w=i.x,T=i.y,R=i.z;return s[0]=(1-(_+p))*w,s[1]=(f+b)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+S)*R,s[9]=(m-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Er.set(s[0],s[1],s[2]).length();const a=Er.set(s[4],s[5],s[6]).length(),c=Er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),fi.copy(this);const l=1/o,h=1/a,u=1/c;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=h,fi.elements[5]*=h,fi.elements[6]*=h,fi.elements[8]*=u,fi.elements[9]*=u,fi.elements[10]*=u,t.setFromRotationMatrix(fi),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,s,r,o,a=Bi,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Bi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Sa)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Bi,c=!1){const l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Bi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Sa)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new P,fi=new Ve,ax=new P(0,0,0),cx=new P(1,1,1),Ms=new P,Xa=new P,Fn=new P,sp=new Ve,rp=new xn;class bi{constructor(e=0,t=0,i=0,s=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lx=0;const op=new P,Tr=new xn,ns=new Ve,ja=new P,Ho=new P,hx=new P,ux=new xn,ap=new P(1,0,0),cp=new P(0,1,0),lp=new P(0,0,1),hp={type:"added"},dx={type:"removed"},Ar={type:"childadded",child:null},Kl={type:"childremoved",child:null};class xt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new P,t=new bi,i=new xn,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Xe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,t){return Tr.setFromAxisAngle(e,t),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis(ap,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return op.copy(e).applyQuaternion(this.quaternion),this.position.add(op.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ap,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(Ho,ja,this.up):ns.lookAt(ja,Ho,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(ns),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xt.DEFAULT_UP=new P(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tn extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class $l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ss={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Zl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=Md(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Zl(o,r,e+1/3),this.g=Zl(o,r,e),this.b=Zl(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function i(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const i=ig[e.toLowerCase()];return i!==void 0?this.setHex(i,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Je.workingToColorSpace(mn.copy(this),e),Math.round($e(mn.r*255,0,255))*65536+Math.round($e(mn.g*255,0,255))*256+Math.round($e(mn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(mn.copy(this),t);const i=mn.r,s=mn.g,r=mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Rt){Je.workingToColorSpace(mn.copy(this),e);const t=mn.r,i=mn.g,s=mn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ss),this.setHSL(Ss.h+e,Ss.s+t,Ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ss),e.getHSL(qa);const i=ua(Ss.h,qa.h,t),s=ua(Ss.s,qa.s,t),r=ua(Ss.l,qa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new Le;Le.NAMES=ig;class bd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new bd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class up extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new P,is=new P,Jl=new P,ss=new P,wr=new P,Rr=new P,dp=new P,Ql=new P,eh=new P,th=new P,nh=new vt,ih=new vt,sh=new vt;class ri{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pi.subVectors(e,t),s.cross(pi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pi.subVectors(s,t),is.subVectors(i,t),Jl.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(is),c=pi.dot(Jl),l=is.dot(is),h=is.dot(Jl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,i,s,r,o,a,c){return this.getBarycoord(e,t,i,s,ss)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ss.x),c.addScaledVector(o,ss.y),c.addScaledVector(a,ss.z),c)}static getInterpolatedAttribute(e,t,i,s,r,o){return nh.setScalar(0),ih.setScalar(0),sh.setScalar(0),nh.fromBufferAttribute(e,t),ih.fromBufferAttribute(e,i),sh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nh,r.x),o.addScaledVector(ih,r.y),o.addScaledVector(sh,r.z),o}static isFrontFacing(e,t,i,s){return pi.subVectors(i,t),is.subVectors(e,t),pi.cross(is).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),pi.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;wr.subVectors(s,i),Rr.subVectors(r,i),Ql.subVectors(e,i);const c=wr.dot(Ql),l=Rr.dot(Ql);if(c<=0&&l<=0)return t.copy(i);eh.subVectors(e,s);const h=wr.dot(eh),u=Rr.dot(eh);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(i).addScaledVector(wr,o);th.subVectors(e,r);const f=wr.dot(th),g=Rr.dot(th);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Rr,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return dp.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(dp,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(wr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ei{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Ka.subVectors(this.max,Wo),Cr.subVectors(e.a,Wo),Pr.subVectors(e.b,Wo),Ir.subVectors(e.c,Wo),bs.subVectors(Pr,Cr),Es.subVectors(Ir,Pr),Xs.subVectors(Cr,Ir);let t=[0,-bs.z,bs.y,0,-Es.z,Es.y,0,-Xs.z,Xs.y,bs.z,0,-bs.x,Es.z,0,-Es.x,Xs.z,0,-Xs.x,-bs.y,bs.x,0,-Es.y,Es.x,0,-Xs.y,Xs.x,0];return!rh(t,Cr,Pr,Ir,Ka)||(t=[1,0,0,0,1,0,0,0,1],!rh(t,Cr,Pr,Ir,Ka))?!1:($a.crossVectors(bs,Es),t=[$a.x,$a.y,$a.z],rh(t,Cr,Pr,Ir,Ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rs=[new P,new P,new P,new P,new P,new P,new P,new P],mi=new P,Ya=new Ei,Cr=new P,Pr=new P,Ir=new P,bs=new P,Es=new P,Xs=new P,Wo=new P,Ka=new P,$a=new P,js=new P;function rh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){js.fromArray(n,r);const a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),c=e.dot(js),l=t.dot(js),h=i.dot(js);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Vt=new P,Za=new Ie;let px=0;class cn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cu,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cu&&(e.usage=this.usage),e}}class sg extends cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rg extends cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends cn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const mx=new Ei,Xo=new P,oh=new P;class qi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(oh)),this.expandByPoint(Xo.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gx=0;const Jn=new Ve,ah=new xt,Lr=new P,On=new Ei,jo=new Ei,rn=new P;class yn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nv(e)?rg:sg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return ah.lookAt(e),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(On.min,jo.min),On.expandByPoint(rn),rn.addVectors(On.max,jo.max),On.expandByPoint(rn)):(On.expandByPoint(jo.min),On.expandByPoint(jo.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(Lr.fromBufferAttribute(e,l),rn.add(Lr)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<i.count;x++)a[x]=new P,c[x]=new P;const l=new P,h=new P,u=new P,d=new Ie,f=new Ie,g=new Ie,_=new P,m=new P;function p(x,E,k){l.fromBufferAttribute(i,x),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,k),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,k),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[x].add(_),a[E].add(_),a[k].add(_),c[x].add(m),c[E].add(m),c[k].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,E=y.length;x<E;++x){const k=y[x],C=k.start,D=k.count;for(let O=C,z=C+D;O<z;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new P,b=new P,w=new P,T=new P;function R(x){w.fromBufferAttribute(s,x),T.copy(w);const E=a[x];S.copy(E),S.sub(w.multiplyScalar(w.dot(E))).normalize(),b.crossVectors(T,E);const C=b.dot(c[x])<0?-1:1;o.setXYZW(x,S.x,S.y,S.z,C)}for(let x=0,E=y.length;x<E;++x){const k=y[x],C=k.start,D=k.count;for(let O=C,z=C+D;O<z;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new cn(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class og{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cu,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new P;class Ea{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ea(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let _x=0;class li extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=eo,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vh&&(i.blendSrc=this.blendSrc),this.blendDst!==Gh&&(i.blendDst=this.blendDst),this.blendEquation!==Qs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $r extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Dr;const qo=new P,Nr=new P,Ur=new P,Fr=new Ie,Yo=new Ie,ag=new Ve,Ja=new P,Ko=new P,Qa=new P,fp=new Ie,ch=new Ie,pp=new Ie;class oa extends xt{constructor(e=new $r){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new yn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new og(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new Ea(i,3,0,!1)),Dr.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new Ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),ag.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Ur.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ec(Ja.set(-.5,-.5,0),Ur,o,Nr,s,r),ec(Ko.set(.5,-.5,0),Ur,o,Nr,s,r),ec(Qa.set(.5,.5,0),Ur,o,Nr,s,r),fp.set(0,0),ch.set(1,0),pp.set(1,1);let a=e.ray.intersectTriangle(Ja,Ko,Qa,!1,qo);if(a===null&&(ec(Ko.set(-.5,.5,0),Ur,o,Nr,s,r),ch.set(0,1),a=e.ray.intersectTriangle(Ja,Qa,Ko,!1,qo),a===null))return;const c=e.ray.origin.distanceTo(qo);c<e.near||c>e.far||t.push({distance:c,point:qo.clone(),uv:ri.getInterpolation(qo,Ja,Ko,Qa,fp,ch,pp,new Ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ec(n,e,t,i,s,r){Fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Yo.x=r*Fr.x-s*Fr.y,Yo.y=s*Fr.x+r*Fr.y):Yo.copy(Fr),n.copy(e),n.x+=Yo.x,n.y+=Yo.y,n.applyMatrix4(ag)}const os=new P,lh=new P,tc=new P,Ts=new P,hh=new P,nc=new P,uh=new P;class Da{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){lh.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(lh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(tc),a=Ts.dot(this.direction),c=-Ts.dot(tc),l=Ts.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lh).addScaledVector(tc,d),f}intersectSphere(e,t){os.subVectors(e.center,this.origin);const i=os.dot(this.direction),s=os.dot(os)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,i,s,r){hh.subVectors(t,e),nc.subVectors(i,e),uh.crossVectors(hh,nc);let o=this.direction.dot(uh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,e);const c=a*this.direction.dot(nc.crossVectors(Ts,nc));if(c<0)return null;const l=a*this.direction.dot(hh.cross(Ts));if(l<0||c+l>o)return null;const h=-a*Ts.dot(uh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nr extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mp=new Ve,qs=new Da,ic=new qi,gp=new P,sc=new P,rc=new P,oc=new P,dh=new P,ac=new P,_p=new P,cc=new P;class Wt extends xt{constructor(e=new yn,t=new nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ac.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(dh.fromBufferAttribute(u,e),o?ac.addScaledVector(dh,h):ac.addScaledVector(dh.sub(t),h))}t.add(ac)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(ic.containsPoint(qs.origin)===!1&&(qs.intersectSphere(ic,gp)===null||qs.origin.distanceToSquared(gp)>(e.far-e.near)**2))&&(mp.copy(r).invert(),qs.copy(e.ray).applyMatrix4(mp),!(i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=S;b<w;b+=3){const T=a.getX(b),R=a.getX(b+1),x=a.getX(b+2);s=lc(this,p,e,i,l,h,u,T,R,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);s=lc(this,o,e,i,l,h,u,y,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,w=S;b<w;b+=3){const T=b,R=b+1,x=b+2;s=lc(this,p,e,i,l,h,u,T,R,x),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const y=m,S=m+1,b=m+2;s=lc(this,o,e,i,l,h,u,y,S,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function vx(n,e,t,i,s,r,o,a){let c;if(e.side===An?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,e.side===Hi,a),c===null)return null;cc.copy(a),cc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(cc);return l<t.near||l>t.far?null:{distance:l,point:cc.clone(),object:n}}function lc(n,e,t,i,s,r,o,a,c,l){n.getVertexPosition(a,sc),n.getVertexPosition(c,rc),n.getVertexPosition(l,oc);const h=vx(n,e,t,i,sc,rc,oc,_p);if(h){const u=new P;ri.getBarycoord(_p,sc,rc,oc,u),s&&(h.uv=ri.getInterpolatedAttribute(s,a,c,l,u,new Ie)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,c,l,u,new Ie)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new P,materialIndex:0};ri.getNormal(sc,rc,oc,d.normal),h.face=d,h.barycoord=u}return h}const vp=new P,xp=new vt,yp=new vt,xx=new P,Mp=new Ve,hc=new P,fh=new qi,Sp=new Ve,ph=new Da;class yx extends Wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kf,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ei),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(s),e.ray.intersectsSphere(fh)!==!1&&(Sp.copy(s).invert(),ph.copy(e.ray).applyMatrix4(Sp),!(this.boundingBox!==null&&ph.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ph)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yv?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;xp.fromBufferAttribute(s.attributes.skinIndex,e),yp.fromBufferAttribute(s.attributes.skinWeight,e),vp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=yp.getComponent(r);if(o!==0){const a=xp.getComponent(r);Mp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(xx.copy(vp).applyMatrix4(Mp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cg extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ed extends $t{constructor(e=null,t=1,i=1,s,r,o,a,c,l=qt,h=qt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bp=new Ve,Mx=new Ve;class Td{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Mx;bp.multiplyMatrices(a,t[r]),bp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ed(t,e,e,ai,oi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(we("Skeleton: No bone found with UUID:",r),o=new cg),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Pu extends cn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Or=new Ve,Ep=new Ve,uc=[],Tp=new Ei,Sx=new Ve,$o=new Wt,Zo=new qi;class Yc extends Wt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pu(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Tp.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Tp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Or),Zo.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Or),Ep.multiplyMatrices(i,Or),$o.matrixWorld=Ep,$o.raycast(e,uc);for(let o=0,a=uc.length;o<a;o++){const c=uc[o];c.instanceId=r,c.object=this,t.push(c)}uc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Pu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ed(new Float32Array(s*this.count),s,this.count,fd,oi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mh=new P,bx=new P,Ex=new Xe;class cs{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=mh.subVectors(i,t).cross(bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(mh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ex.getNormalMatrix(e),s=this.coplanarPoint(mh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ys=new qi,Tx=new Ie(.5,.5),dc=new P;class cl{constructor(e=new cs,t=new cs,i=new cs,s=new cs,r=new cs,o=new cs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],S=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,p-g,w-y).normalize(),s[1].setComponents(l+o,f+h,p+g,w+y).normalize(),s[2].setComponents(l+a,f+u,p+_,w+S).normalize(),s[3].setComponents(l-a,f-u,p-_,w-S).normalize(),i)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,f-d,p-m,w-b).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-b).normalize(),t===Bi)s[5].setComponents(l+c,f+d,p+m,w+b).normalize();else if(t===Sa)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ys)}intersectsSprite(e){Ys.center.set(0,0,0);const t=Tx.distanceTo(e.center);return Ys.radius=.7071067811865476+t,Ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ys)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(dc.x=s.normal.x>0?e.max.x:e.min.x,dc.y=s.normal.y>0?e.max.y:e.min.y,dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lg extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kc=new P,$c=new P,Ap=new Ve,Jo=new Da,fc=new qi,gh=new P,wp=new P;class Ad extends xt{constructor(e=new yn,t=new lg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Kc.fromBufferAttribute(t,s-1),$c.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Kc.distanceTo($c);e.setAttribute("lineDistance",new un(i,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fc.copy(i.boundingSphere),fc.applyMatrix4(s),fc.radius+=r,e.ray.intersectsSphere(fc)===!1)return;Ap.copy(s).invert(),Jo.copy(e.ray).applyMatrix4(Ap);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),y=h.getX(_+1),S=pc(this,e,Jo,c,p,y,_);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=pc(this,e,Jo,c,_,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=pc(this,e,Jo,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=pc(this,e,Jo,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pc(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Kc.fromBufferAttribute(a,s),$c.fromBufferAttribute(a,r),t.distanceSqToSegment(Kc,$c,gh,wp)>i)return;gh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(gh);if(!(l<e.near||l>e.far))return{distance:l,point:wp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Rp=new P,Cp=new P;class Ax extends Ad{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Rp.fromBufferAttribute(t,s),Cp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Rp.distanceTo(Cp);e.setAttribute("lineDistance",new un(i,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wx extends Ad{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hg extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pp=new Ve,Iu=new Da,mc=new qi,gc=new P;class Rx extends xt{constructor(e=new yn,t=new hg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,e.ray.intersectsSphere(mc)===!1)return;Pp.copy(s).invert(),Iu.copy(e.ray).applyMatrix4(Pp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);gc.fromBufferAttribute(u,m),Ip(gc,m,c,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)gc.fromBufferAttribute(u,g),Ip(gc,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ip(n,e,t,i,s,r,o){const a=Iu.distanceSqToPoint(n);if(a<t){const c=new P;Iu.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ug extends $t{constructor(e=[],t=dr,i,s,r,o,a,c,l,h){super(e,t,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zr extends $t{constructor(e,t,i,s,r,o,a,c,l){super(e,t,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ta extends $t{constructor(e,t,i=Wi,s,r,o,a=qt,c=qt,l,h=ps,u=1){if(h!==ps&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cx extends Ta{constructor(e,t=Wi,i=dr,s,r,o=qt,a=qt,c,l=ps){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class dg extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vs extends yn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new un(l,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(u,2));function g(_,m,p,y,S,b,w,T,R,x,E){const k=b/R,C=w/x,D=b/2,O=w/2,z=T/2,B=R+1,F=x+1;let G=0,Z=0;const K=new P;for(let le=0;le<F;le++){const de=le*C-O;for(let he=0;he<B;he++){const Be=he*k-D;K[_]=Be*y,K[m]=de*S,K[p]=z,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=T>0?1:-1,h.push(K.x,K.y,K.z),u.push(he/R),u.push(1-le/x),G+=1}}for(let le=0;le<x;le++)for(let de=0;de<R;de++){const he=d+de+B*le,Be=d+de+B*(le+1),bt=d+(de+1)+B*(le+1),St=d+(de+1)+B*le;c.push(he,Be,St),c.push(Be,bt,St),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class To extends yn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new un(u,3)),this.setAttribute("normal",new un(d,3)),this.setAttribute("uv",new un(f,2));function y(){const b=new P,w=new P;let T=0;const R=(t-e)/i;for(let x=0;x<=r;x++){const E=[],k=x/r,C=k*(t-e)+e;for(let D=0;D<=s;D++){const O=D/s,z=O*c+a,B=Math.sin(z),F=Math.cos(z);w.x=C*B,w.y=-k*i+m,w.z=C*F,u.push(w.x,w.y,w.z),b.set(B,R,F).normalize(),d.push(b.x,b.y,b.z),f.push(O,1-k),E.push(g++)}_.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){const k=_[E][x],C=_[E+1][x],D=_[E+1][x+1],O=_[E][x+1];(e>0||E!==0)&&(h.push(k,C,O),T+=3),(t>0||E!==r-1)&&(h.push(C,D,O),T+=3)}l.addGroup(p,T,0),p+=T}function S(b){const w=g,T=new Ie,R=new P;let x=0;const E=b===!0?e:t,k=b===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*k,0),d.push(0,k,0),f.push(.5,.5),g++;const C=g;for(let D=0;D<=s;D++){const z=D/s*c+a,B=Math.cos(z),F=Math.sin(z);R.x=E*F,R.y=m*k,R.z=E*B,u.push(R.x,R.y,R.z),d.push(0,k,0),T.x=B*.5+.5,T.y=F*.5*k+.5,f.push(T.x,T.y),g++}for(let D=0;D<s;D++){const O=w+D,z=C+D;b===!0?h.push(z,z+1,O):h.push(z+1,z,O),x+=3}l.addGroup(p,x,b===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ll extends To{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ll(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Os extends yn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const y=p*d-o;for(let S=0;S<l;S++){const b=S*u-r;g.push(b,-y,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){const S=y+l*p,b=y+l*(p+1),w=y+1+l*(p+1),T=y+1+l*p;f.push(S,b,T),f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.width,e.height,e.widthSegments,e.heightSegments)}}class ir extends yn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const y=[],S=p/i;let b=0;p===0&&o===0?b=.5/t:p===i&&c===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){const T=w/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+S*a),u.y=e*Math.cos(o+S*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+b,1-S),y.push(l++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const S=h[p][y+1],b=h[p][y],w=h[p+1][y],T=h[p+1][y+1];(p!==0||o>0)&&f.push(S,b,T),(p!==i-1||c<Math.PI)&&f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new un(g,3)),this.setAttribute("normal",new un(_,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function lo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function En(n){const e={};for(let t=0;t<n.length;t++){const i=lo(n[t]);for(const s in i)e[s]=i[s]}return e}function Px(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fg(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Zc={clone:lo,merge:En};var Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jn extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dx extends jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wd extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yi extends wd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class da extends li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=cd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nx extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Av,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ux extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _c(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Fx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Lp(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=n[a+c]}return s}function pg(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Ao{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ox extends Ao{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kr:r=e,a=2*t-i;break;case Hc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kr:o=e,c=2*i-t;break;case Hc:o=1,c=i+s[1]-s[0];break;default:o=e-1,c=t}const l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+y*o[l+w]+S*o[c+w]+b*o[u+w];return r}}class mg extends Ao{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Bx extends Ao{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class kx extends Ao{interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.settings||this.DefaultSettings_,u=h.inTangents,d=h.outTangents;if(!u||!d){const _=(i-t)/(s-t),m=1-_;for(let p=0;p!==a;++p)r[p]=o[l+p]*m+o[c+p]*_;return r}const f=a*2,g=e-1;for(let _=0;_!==a;++_){const m=o[l+_],p=o[c+_],y=g*f+_*2,S=d[y],b=d[y+1],w=e*f+_*2,T=u[w],R=u[w+1];let x=(i-t)/(s-t),E,k,C,D,O;for(let z=0;z<8;z++){E=x*x,k=E*x,C=1-x,D=C*C,O=D*C;const F=O*t+3*D*x*S+3*C*E*T+k*s-i;if(Math.abs(F)<1e-10)break;const G=3*D*(S-t)+6*C*x*(T-S)+3*E*(s-T);if(Math.abs(G)<1e-10)break;x=x-F/G,x=Math.max(0,Math.min(1,x))}r[_]=O*m+3*D*x*b+3*C*E*R+k*p}return r}}class Ti{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new kx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case Wl:t=this.InterpolantFactoryMethodSmooth;break;case $f:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return we("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return $f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Fe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Fe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){Fe("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Fe("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Uv(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){Fe("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Ma;class wo extends Ti{constructor(e,t,i){super(e,t,i)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=ya;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class gg extends Ti{constructor(e,t,i,s){super(e,t,i,s)}}gg.prototype.ValueTypeName="color";class ho extends Ti{constructor(e,t,i,s){super(e,t,i,s)}}ho.prototype.ValueTypeName="number";class zx extends Ao{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class uo extends Ti{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new zx(this.times,this.values,this.getValueSize(),e)}}uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Ti{constructor(e,t,i){super(e,t,i)}}Ro.prototype.ValueTypeName="string";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=ya;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class fo extends Ti{constructor(e,t,i,s){super(e,t,i,s)}}fo.prototype.ValueTypeName="vector";class Lu{constructor(e="",t=-1,i=[],s=_d){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Gx(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(Ti.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Fx(c);c=Lp(c,1,h),l=Lp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ho(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Fe("AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];pg(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}s.push(new ho(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+t[u].name+"]";i(fo,f+".position",d,"pos",s),i(uo,f+".quaternion",d,"rot",s),i(fo,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Vx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ho;case"vector":case"vector2":case"vector3":case"vector4":return fo;case"color":return gg;case"quaternion":return uo;case"bool":case"boolean":return wo;case"string":return Ro}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Gx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Vx(n.type);if(n.times===void 0){const t=[],i=[];pg(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const us={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Dp(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Dp(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Dp(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Hx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Wx=new Hx;class Co{constructor(e){this.manager=e!==void 0?e:Wx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Co.DEFAULT_MATERIAL_NAME="__DEFAULT";const as={};class Xx extends Error{constructor(e,t){super(e),this.response=t}}class _g extends Co{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=us.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(as[e]!==void 0){as[e].push({onLoad:t,onProgress:i,onError:s});return}as[e]=[],as[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=as[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:b})=>{if(S)p.close();else{_+=b.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,R=h.length;T<R;T++){const x=h[T];x.onProgress&&x.onProgress(w)}p.enqueue(b),y()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Xx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{us.add(`file:${e}`,l);const h=as[e];delete as[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=as[e];if(h===void 0)throw this.manager.itemError(e),l;delete as[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Br=new WeakMap;class jx extends Co{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Br.get(o);u===void 0&&(u=[],Br.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=ba("img");function c(){h(),t&&t(this);const u=Br.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Br.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),us.remove(`image:${e}`);const d=Br.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Br.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),us.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class hl extends Co{constructor(e){super(e)}load(e,t,i,s){const r=new $t,o=new jx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ul extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const _h=new Ve,Np=new P,Up=new P;class Rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Np.setFromMatrixPosition(e.matrixWorld),t.position.copy(Np),Up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Up),t.updateMatrixWorld(),_h.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Sa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new P,xc=new xn,Pi=new P;class vg extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vc,xc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,xc,Pi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(vc,xc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,xc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const As=new P,Fp=new Ie,Op=new Ie;class _n extends vg{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,Fp,Op),t.subVectors(Op,Fp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class qx extends Rd{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=co*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yx extends ul{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Kx extends Rd{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class $x extends ul{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Kx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class dl extends vg{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zx extends Rd{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends ul{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Zx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Jx extends ul{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const vh=new WeakMap;class Qx extends Co{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(vh.has(o)===!0)s&&s(vh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return us.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),vh.set(c,l),us.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});us.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const kr=-90,zr=1;class e2 extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(kr,zr,e,t);s.layers=this.layers,this.add(s);const r=new _n(kr,zr,e,t);r.layers=this.layers,this.add(r);const o=new _n(kr,zr,e,t);o.layers=this.layers,this.add(o);const a=new _n(kr,zr,e,t);a.layers=this.layers,this.add(a);const c=new _n(kr,zr,e,t);c.layers=this.layers,this.add(c);const l=new _n(kr,zr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class t2 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class n2{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)i[r+a]=i[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(i,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(i,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){a.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,o=s;r!==o;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[i+o]}_slerp(e,t,i,s){xn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const o=this._workIndex*r;xn.multiplyQuaternionsFlat(e,o,e,t,e,i),xn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,i,s,r){const o=1-s;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[i+a]*s}}_lerpAdditive(e,t,i,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[i+o]*s}}}const Cd="\\[\\]\\.:\\/",i2=new RegExp("["+Cd+"]","g"),Pd="[^"+Cd+"]",s2="[^"+Cd.replace("\\.","")+"]",r2=/((?:WC+[\/:])*)/.source.replace("WC",Pd),o2=/(WCOD+)?/.source.replace("WCOD",s2),a2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),c2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),l2=new RegExp("^"+r2+o2+a2+c2+"$"),h2=["material","materials","bones","map"];class u2{constructor(e,t,i){const s=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i2,"")}static parseTrackName(e){const t=l2.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);h2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=i(a.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Fe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Fe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Fe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Fe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Fe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Fe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;Fe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Fe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=u2;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class d2{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Yr,endingEnd:Yr};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Sv,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ev:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case _d:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const o=i===bv;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(i===Mv){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Kr,s.endingEnd=Kr):(e?s.endingStart=this.zeroSlopeAtStart?Kr:Yr:s.endingStart=Hc,t?s.endingEnd=this.zeroSlopeAtEnd?Kr:Yr:s.endingEnd=Hc)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=i,this}}const f2=new Float32Array(1);class yg extends zs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new n2(ot.create(i,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new mg(new Float32Array(2),new Float32Array(2),1,f2),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?Lu.findByName(s,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(i===void 0&&(o!==null?i=o.blendMode:i=_d),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new d2(this,o,t,i);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?Lu.findByName(i,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(s,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const o in i){const a=i[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Bp{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class p2 extends zs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kp(n,e,t,i){const s=m2(i);switch(t){case Z0:return n*e;case fd:return n*e/s.components*s.byteLength;case pd:return n*e/s.components*s.byteLength;case ao:return n*e*2/s.components*s.byteLength;case md:return n*e*2/s.components*s.byteLength;case J0:return n*e*3/s.components*s.byteLength;case ai:return n*e*4/s.components*s.byteLength;case gd:return n*e*4/s.components*s.byteLength;case Uc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(n,16)*Math.max(e,8)/4;case $h:case Jh:return Math.max(n,8)*Math.max(e,8)/2;case eu:case tu:case iu:case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case nu:case ru:case ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case pu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case mu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case gu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mu:case Su:case bu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Eu:case Tu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Au:case wu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m2(n){switch(n){case Gn:case q0:return{byteLength:1,components:1};case va:case Y0:case Xi:return{byteLength:2,components:1};case ud:case dd:return{byteLength:2,components:4};case Wi:case hd:case oi:return{byteLength:4,components:1};case K0:case $0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mg(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function g2(n){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var _2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,x2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,O2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,B2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,H2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q2="gl_FragColor = linearToOutputTexel( gl_FragColor );",Y2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ly=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,my=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_M=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,UM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:_2,alphahash_pars_fragment:v2,alphamap_fragment:x2,alphamap_pars_fragment:y2,alphatest_fragment:M2,alphatest_pars_fragment:S2,aomap_fragment:b2,aomap_pars_fragment:E2,batching_pars_vertex:T2,batching_vertex:A2,begin_vertex:w2,beginnormal_vertex:R2,bsdfs:C2,iridescence_fragment:P2,bumpmap_pars_fragment:I2,clipping_planes_fragment:L2,clipping_planes_pars_fragment:D2,clipping_planes_pars_vertex:N2,clipping_planes_vertex:U2,color_fragment:F2,color_pars_fragment:O2,color_pars_vertex:B2,color_vertex:k2,common:z2,cube_uv_reflection_fragment:V2,defaultnormal_vertex:G2,displacementmap_pars_vertex:H2,displacementmap_vertex:W2,emissivemap_fragment:X2,emissivemap_pars_fragment:j2,colorspace_fragment:q2,colorspace_pars_fragment:Y2,envmap_fragment:K2,envmap_common_pars_fragment:$2,envmap_pars_fragment:Z2,envmap_pars_vertex:J2,envmap_physical_pars_fragment:ly,envmap_vertex:Q2,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:sy,lightmap_pars_fragment:ry,lights_lambert_fragment:oy,lights_lambert_pars_fragment:ay,lights_pars_begin:cy,lights_toon_fragment:hy,lights_toon_pars_fragment:uy,lights_phong_fragment:dy,lights_phong_pars_fragment:fy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:gy,lights_fragment_maps:_y,lights_fragment_end:vy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:yy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:Sy,map_fragment:by,map_pars_fragment:Ey,map_particle_fragment:Ty,map_particle_pars_fragment:Ay,metalnessmap_fragment:wy,metalnessmap_pars_fragment:Ry,morphinstance_vertex:Cy,morphcolor_vertex:Py,morphnormal_vertex:Iy,morphtarget_pars_vertex:Ly,morphtarget_vertex:Dy,normal_fragment_begin:Ny,normal_fragment_maps:Uy,normal_pars_fragment:Fy,normal_pars_vertex:Oy,normal_vertex:By,normalmap_pars_fragment:ky,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:Vy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Hy,opaque_fragment:Wy,packing:Xy,premultiplied_alpha_fragment:jy,project_vertex:qy,dithering_fragment:Yy,dithering_pars_fragment:Ky,roughnessmap_fragment:$y,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Jy,shadowmap_pars_vertex:Qy,shadowmap_vertex:eM,shadowmask_pars_fragment:tM,skinbase_vertex:nM,skinning_pars_vertex:iM,skinning_vertex:sM,skinnormal_vertex:rM,specularmap_fragment:oM,specularmap_pars_fragment:aM,tonemapping_fragment:cM,tonemapping_pars_fragment:lM,transmission_fragment:hM,transmission_pars_fragment:uM,uv_pars_fragment:dM,uv_pars_vertex:fM,uv_vertex:pM,worldpos_vertex:mM,background_vert:gM,background_frag:_M,backgroundCube_vert:vM,backgroundCube_frag:xM,cube_vert:yM,cube_frag:MM,depth_vert:SM,depth_frag:bM,distance_vert:EM,distance_frag:TM,equirect_vert:AM,equirect_frag:wM,linedashed_vert:RM,linedashed_frag:CM,meshbasic_vert:PM,meshbasic_frag:IM,meshlambert_vert:LM,meshlambert_frag:DM,meshmatcap_vert:NM,meshmatcap_frag:UM,meshnormal_vert:FM,meshnormal_frag:OM,meshphong_vert:BM,meshphong_frag:kM,meshphysical_vert:zM,meshphysical_frag:VM,meshtoon_vert:GM,meshtoon_frag:HM,points_vert:WM,points_frag:XM,shadow_vert:jM,shadow_frag:qM,sprite_vert:YM,sprite_frag:KM},oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Fi={basic:{uniforms:En([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:En([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:En([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:En([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:En([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:En([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:En([oe.points,oe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:En([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:En([oe.common,oe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:En([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:En([oe.sprite,oe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:En([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:En([oe.lights,oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Fi.physical={uniforms:En([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const yc={r:0,b:0,g:0},Ks=new bi,$M=new Ve;function ZM(n,e,t,i,s,r){const o=new Le(0);let a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const b=y.backgroundBlurriness>0;S=e.get(S,b)}return S}function g(y){let S=!1;const b=f(y);b===null?m(o,a):b&&b.isColor&&(m(b,1),S=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(y,S){const b=f(S);b&&(b.isCubeTexture||b.mapping===al)?(l===void 0&&(l=new Wt(new Vs(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:lo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ks.copy(S.backgroundRotation),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($M.makeRotationFromEuler(Ks)),l.material.toneMapped=Je.getTransfer(b.colorSpace)!==lt,(h!==b||u!==b.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wt(new Os(2,2),new jn({name:"BackgroundMaterial",uniforms:lo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==lt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,S){y.getRGB(yc,fg(n)),t.buffers.color.setClear(yc.r,yc.g,yc.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:g,addToRenderList:_,dispose:p}}function JM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(C,D,O,z,B){let F=!1;const G=u(C,z,O,D);r!==G&&(r=G,l(r.object)),F=f(C,z,O,B),F&&g(C,z,O,B),B!==null&&e.update(B,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,b(C,D,O,z),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function u(C,D,O,z){const B=z.wireframe===!0;let F=i[D.id];F===void 0&&(F={},i[D.id]=F);const G=C.isInstancedMesh===!0?C.id:0;let Z=F[G];Z===void 0&&(Z={},F[G]=Z);let K=Z[O.id];K===void 0&&(K={},Z[O.id]=K);let le=K[B];return le===void 0&&(le=d(c()),K[B]=le),le}function d(C){const D=[],O=[],z=[];for(let B=0;B<t;B++)D[B]=0,O[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:z,object:C,attributes:{},index:null}}function f(C,D,O,z){const B=r.attributes,F=D.attributes;let G=0;const Z=O.getAttributes();for(const K in Z)if(Z[K].location>=0){const de=B[K];let he=F[K];if(he===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),de===void 0||de.attribute!==he||he&&de.data!==he.data)return!0;G++}return r.attributesNum!==G||r.index!==z}function g(C,D,O,z){const B={},F=D.attributes;let G=0;const Z=O.getAttributes();for(const K in Z)if(Z[K].location>=0){let de=F[K];de===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(de=C.instanceColor));const he={};he.attribute=de,de&&de.data&&(he.data=de.data),B[K]=he,G++}r.attributes=B,r.attributesNum=G,r.index=z}function _(){const C=r.newAttributes;for(let D=0,O=C.length;D<O;D++)C[D]=0}function m(C){p(C,0)}function p(C,D){const O=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;O[C]=1,z[C]===0&&(n.enableVertexAttribArray(C),z[C]=1),B[C]!==D&&(n.vertexAttribDivisor(C,D),B[C]=D)}function y(){const C=r.newAttributes,D=r.enabledAttributes;for(let O=0,z=D.length;O<z;O++)D[O]!==C[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function S(C,D,O,z,B,F,G){G===!0?n.vertexAttribIPointer(C,D,O,B,F):n.vertexAttribPointer(C,D,O,z,B,F)}function b(C,D,O,z){_();const B=z.attributes,F=O.getAttributes(),G=D.defaultAttributeValues;for(const Z in F){const K=F[Z];if(K.location>=0){let le=B[Z];if(le===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const de=le.normalized,he=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const bt=Be.buffer,St=Be.type,Y=Be.bytesPerElement,ne=St===n.INT||St===n.UNSIGNED_INT||le.gpuType===hd;if(le.isInterleavedBufferAttribute){const re=le.data,We=re.stride,Ue=le.offset;if(re.isInstancedInterleavedBuffer){for(let ke=0;ke<K.locationSize;ke++)p(K.location+ke,re.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ke=0;ke<K.locationSize;ke++)m(K.location+ke);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let ke=0;ke<K.locationSize;ke++)S(K.location+ke,he/K.locationSize,St,de,We*Y,(Ue+he/K.locationSize*ke)*Y,ne)}else{if(le.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)p(K.location+re,le.meshPerAttribute);C.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let re=0;re<K.locationSize;re++)m(K.location+re);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let re=0;re<K.locationSize;re++)S(K.location+re,he/K.locationSize,St,de,he*Y,he/K.locationSize*re*Y,ne)}}else if(G!==void 0){const de=G[Z];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(K.location,de);break;case 3:n.vertexAttrib3fv(K.location,de);break;case 4:n.vertexAttrib4fv(K.location,de);break;default:n.vertexAttrib1fv(K.location,de)}}}}y()}function w(){E();for(const C in i){const D=i[C];for(const O in D){const z=D[O];for(const B in z){const F=z[B];for(const G in F)h(F[G].object),delete F[G];delete z[B]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const D=i[C.id];for(const O in D){const z=D[O];for(const B in z){const F=z[B];for(const G in F)h(F[G].object),delete F[G];delete z[B]}}delete i[C.id]}function R(C){for(const D in i){const O=i[D];for(const z in O){const B=O[z];if(B[C.id]===void 0)continue;const F=B[C.id];for(const G in F)h(F[G].object),delete F[G];delete B[C.id]}}}function x(C){for(const D in i){const O=i[D],z=C.isInstancedMesh===!0?C.id:0,B=O[z];if(B!==void 0){for(const F in B){const G=B[F];for(const Z in G)h(G[Z].object),delete G[Z];delete B[F]}delete O[z],Object.keys(O).length===0&&delete i[D]}}}function E(){k(),o=!0,r!==s&&(r=s,l(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:k,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function QM(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function eS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ai&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const x=R===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Gn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==oi&&!x)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(we("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,maxSamples:w,samples:T}}function tS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new cs,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:i,S=y*4;let b=p.clippingState||null;c.value=b,b=h(g,d,S,f);for(let w=0;w!==S;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=f;S!==_;++S,b+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Ds=4,zp=[.125,.215,.35,.446,.526,.582],er=20,nS=256,Qo=new dl,Vp=new Le;let xh=null,yh=0,Mh=0,Sh=!1;const iS=new P;class Du{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=iS}=r;xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,yh,Mh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Xi,format:ai,colorSpace:wn,depthBuffer:!1},s=Gp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sS(r)),this._blurMaterial=oS(r,e,t),this._ggxMaterial=rS(r,e,t)}return s}_compileMaterial(e){const t=new Wt(new yn,e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,i,s,r){const c=new _n(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vp),u.toneMapping=Vi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Vs,new nr({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Vp),p=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):b===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const w=this._cubeSize;Vr(s,b*w,S>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===dr||e.mapping===oo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Vr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Qo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ds?i-g+Ds:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Vr(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Qo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Vr(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Qo)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Fe("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=l;const d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*er-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):er;m>er&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let y=0;for(let R=0;R<er;++R){const x=R/_,E=Math.exp(-x*x/2);p.push(E),R===0?y+=E:R<m&&(y+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const b=this._sizeLods[s],w=3*b*(s>S-Ds?s-S+Ds:0),T=4*(this._cubeSize-b);Vr(t,w,T,3*b,2*b),c.setRenderTarget(t),c.render(u,Qo)}}function sS(n){const e=[],t=[],i=[];let s=n;const r=n-Ds+1+zp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Ds?c=zp[o-n+Ds-1]:o===0&&(c=0),t.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),S=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,x=T>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];y.set(E,_*g*T),S.set(d,m*g*T);const k=[T,T,T,T,T,T];b.set(k,p*g*T)}const w=new yn;w.setAttribute("position",new cn(y,_)),w.setAttribute("uv",new cn(S,m)),w.setAttribute("faceIndex",new cn(b,p)),i.push(new Wt(w,null)),s>Ds&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Gp(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function rS(n,e,t){return new jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function oS(n,e,t){const i=new Float32Array(er),s=new P(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Hp(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Wp(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Sg extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ug(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vs(5,5,5),r=new jn({name:"CubemapFromEquirect",uniforms:lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:An,blending:ds});r.uniforms.tEquirect.value=t;const o=new Wt(s,r),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=Yt),new e2(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function aS(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Gl||f===Hl)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Sg(g.height);return _.fromEquirectangularTexture(n,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const f=d.mapping,g=f===Gl||f===Hl,_=f===dr||f===oo;if(g||_){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Du(n)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return g&&y&&y.height>0||_&&y&&c(y)?(i===null&&(i=new Du(n)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===Gl?d.mapping=dr:f===Hl&&(d.mapping=oo),d}function c(d){let f=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){const f=d.target;f.removeEventListener("dispose",l);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function cS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&jc("WebGLRenderer: "+i+" extension not supported."),s}}}function lS(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const y=f.array;_=f.version;for(let S=0,b=y.length;S<b;S+=3){const w=y[S+0],T=y[S+1],R=y[S+2];d.push(w,T,T,R,R,w)}}else{const y=g.array;_=g.version;for(let S=0,b=y.length/3-1;S<b;S+=3){const w=S+0,T=S+1,R=S+2;d.push(w,T,T,R,R,w)}}const m=new(g.count>=65535?rg:sg)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function hS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*_[y];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function uS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Fe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dS(n,e,t){const i=new WeakMap,s=new vt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*w*4*u),R=new tg(T,b,w,u);R.type=oi,R.needsUpdate=!0;const x=S*4;for(let k=0;k<u;k++){const C=m[k],D=p[k],O=y[k],z=b*w*4*k;for(let B=0;B<C.count;B++){const F=B*x;f===!0&&(s.fromBufferAttribute(C,B),T[z+F+0]=s.x,T[z+F+1]=s.y,T[z+F+2]=s.z,T[z+F+3]=0),g===!0&&(s.fromBufferAttribute(D,B),T[z+F+4]=s.x,T[z+F+5]=s.y,T[z+F+6]=s.z,T[z+F+7]=0),_===!0&&(s.fromBufferAttribute(O,B),T[z+F+8]=s.x,T[z+F+9]=s.y,T[z+F+10]=s.z,T[z+F+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Ie(b,w)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function fS(n,e,t,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}const pS={[k0]:"LINEAR_TONE_MAPPING",[z0]:"REINHARD_TONE_MAPPING",[V0]:"CINEON_TONE_MAPPING",[ld]:"ACES_FILMIC_TONE_MAPPING",[H0]:"AGX_TONE_MAPPING",[W0]:"NEUTRAL_TONE_MAPPING",[G0]:"CUSTOM_TONE_MAPPING"};function mS(n,e,t,i,s){const r=new Mi(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Mi(e,t,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),a=new yn;a.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new un([0,2,0,0,2,0],2));const c=new Dx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Wt(a,c),h=new dl(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(y,S){r.setSize(y,S),o.setSize(y,S);for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(y,S)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const S=r.width,b=r.height;for(let w=0;w<m.length;w++){const T=m[w];T.setSize&&T.setSize(S,b)}},this.begin=function(y,S){if(f||y.toneMapping===Vi&&m.length===0)return!1;if(_=S,S!==null){const b=S.width,w=S.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=Vi,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=g,f=!0;let b=r,w=o;for(let T=0;T<m.length;T++){const R=m[T];if(R.enabled!==!1&&(R.render(y,w,b,S),R.needsSwap!==!1)){const x=b;b=w,w=x}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,c.defines={},Je.getTransfer(u)===lt&&(c.defines.SRGB_TRANSFER="");const T=pS[d];T&&(c.defines[T]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(_),y.render(l,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const bg=new $t,Nu=new Ta(1,1),Eg=new tg,Tg=new ox,Ag=new ug,Xp=[],jp=[],qp=new Float32Array(16),Yp=new Float32Array(9),Kp=new Float32Array(4);function Po(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Xp[s];if(r===void 0&&(r=new Float32Array(s),Xp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pl(n,e){let t=jp[e];t===void 0&&(t=new Int32Array(e),jp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function yS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Kp.set(i),n.uniformMatrix2fv(this.addr,!1,Kp),en(t,i)}}function MS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;Yp.set(i),n.uniformMatrix3fv(this.addr,!1,Yp),en(t,i)}}function SS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;qp.set(i),n.uniformMatrix4fv(this.addr,!1,qp),en(t,i)}}function bS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function wS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function IS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nu.compareFunction=t.isReversedDepthBuffer()?yd:xd,r=Nu):r=bg,t.setTexture2D(e||r,s)}function LS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tg,s)}function DS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ag,s)}function NS(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Eg,s)}function US(n){switch(n){case 5126:return gS;case 35664:return _S;case 35665:return vS;case 35666:return xS;case 35674:return yS;case 35675:return MS;case 35676:return SS;case 5124:case 35670:return bS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return wS;case 36294:return RS;case 36295:return CS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return IS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return NS}}function FS(n,e){n.uniform1fv(this.addr,e)}function OS(n,e){const t=Po(e,this.size,2);n.uniform2fv(this.addr,t)}function BS(n,e){const t=Po(e,this.size,3);n.uniform3fv(this.addr,t)}function kS(n,e){const t=Po(e,this.size,4);n.uniform4fv(this.addr,t)}function zS(n,e){const t=Po(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function VS(n,e){const t=Po(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function GS(n,e){const t=Po(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function HS(n,e){n.uniform1iv(this.addr,e)}function WS(n,e){n.uniform2iv(this.addr,e)}function XS(n,e){n.uniform3iv(this.addr,e)}function jS(n,e){n.uniform4iv(this.addr,e)}function qS(n,e){n.uniform1uiv(this.addr,e)}function YS(n,e){n.uniform2uiv(this.addr,e)}function KS(n,e){n.uniform3uiv(this.addr,e)}function $S(n,e){n.uniform4uiv(this.addr,e)}function ZS(n,e,t){const i=this.cache,s=e.length,r=pl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Nu:o=bg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function JS(n,e,t){const i=this.cache,s=e.length,r=pl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Tg,r[o])}function QS(n,e,t){const i=this.cache,s=e.length,r=pl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ag,r[o])}function e3(n,e,t){const i=this.cache,s=e.length,r=pl(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Eg,r[o])}function t3(n){switch(n){case 5126:return FS;case 35664:return OS;case 35665:return BS;case 35666:return kS;case 35674:return zS;case 35675:return VS;case 35676:return GS;case 5124:case 35670:return HS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return jS;case 5125:return qS;case 36294:return YS;case 36295:return KS;case 36296:return $S;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return e3}}class n3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=US(t.type)}}class i3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t3(t.type)}}class s3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function $p(n,e){n.seq.push(e),n.map[e.id]=e}function r3(n,e,t){const i=n.name,s=i.length;for(bh.lastIndex=0;;){const r=bh.exec(i),o=bh.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$p(t,l===void 0?new n3(a,n,e):new i3(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new s3(a),$p(t,u)),t=u}}}class kc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);r3(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Zp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o3=37297;let a3=0;function c3(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Jp=new Xe;function l3(n){Je._getMatrix(Jp,Je.workingColorSpace,n);const e=`mat3( ${Jp.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Wc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+c3(n.getShaderSource(e),a)}else return r}function h3(n,e){const t=l3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const u3={[k0]:"Linear",[z0]:"Reinhard",[V0]:"Cineon",[ld]:"ACESFilmic",[H0]:"AgX",[W0]:"Neutral",[G0]:"Custom"};function d3(n,e){const t=u3[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mc=new P;function f3(){Je.getLuminanceCoefficients(Mc);const n=Mc.x.toFixed(4),e=Mc.y.toFixed(4),t=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(aa).join(`
`)}function m3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g3(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function aa(n){return n!==""}function em(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(n){return n.replace(_3,x3)}const v3=new Map;function x3(n,e){let t=je[e];if(t===void 0){const i=v3.get(e);if(i!==void 0)t=je[i],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Uu(t)}const y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(n){return n.replace(y3,M3)}function M3(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function im(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const S3={[Dc]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function b3(n){return S3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E3={[dr]:"ENVMAP_TYPE_CUBE",[oo]:"ENVMAP_TYPE_CUBE",[al]:"ENVMAP_TYPE_CUBE_UV"};function T3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":E3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const A3={[oo]:"ENVMAP_MODE_REFRACTION"};function w3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":A3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R3={[cd]:"ENVMAP_BLENDING_MULTIPLY",[vv]:"ENVMAP_BLENDING_MIX",[xv]:"ENVMAP_BLENDING_ADD"};function C3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R3[n.combine]||"ENVMAP_BLENDING_NONE"}function P3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function I3(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=b3(t),l=T3(t),h=w3(t),u=C3(t),d=P3(t),f=p3(t),g=m3(r),_=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(aa).join(`
`),p.length>0&&(p+=`
`)):(m=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(aa).join(`
`),p=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?je.tonemapping_pars_fragment:"",t.toneMapping!==Vi?d3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,h3("linearToOutputTexel",t.outputColorSpace),f3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(aa).join(`
`)),o=Uu(o),o=em(o,t),o=tm(o,t),a=Uu(a),a=em(a,t),a=tm(a,t),o=nm(o),a=nm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,b=y+p+a,w=Zp(s,s.VERTEX_SHADER,S),T=Zp(s,s.FRAGMENT_SHADER,b);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(n.debug.checkShaderErrors){const D=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(w)||"",z=s.getShaderInfoLog(T)||"",B=D.trim(),F=O.trim(),G=z.trim();let Z=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,T);else{const le=Qp(s,w,"vertex"),de=Qp(s,T,"fragment");Fe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+le+`
`+de)}else B!==""?we("WebGLProgram: Program Info Log:",B):(F===""||G==="")&&(K=!1);K&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:G,prefix:p}})}s.deleteShader(w),s.deleteShader(T),x=new kc(s,_),E=g3(s,_)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(_,o3)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a3++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let L3=0;class D3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new N3(e),t.set(e,i)),i}}class N3{constructor(e){this.id=L3++,this.code=e,this.usedTimes=0}}function U3(n,e,t,i,s,r){const o=new ng,a=new D3,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,E,k,C,D){const O=C.fog,z=D.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=e.get(x.envMap||B,F),Z=G&&G.mapping===al?G.image.height:null,K=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&we("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const le=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=le!==void 0?le.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let Be,bt,St,Y;if(K){const ct=Fi[K];Be=ct.vertexShader,bt=ct.fragmentShader}else Be=x.vertexShader,bt=x.fragmentShader,a.update(x),St=a.getVertexShaderID(x),Y=a.getFragmentShaderID(x);const ne=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),We=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,ke=!!x.map,nn=!!x.matcap,et=!!G,at=!!x.aoMap,mt=!!x.lightMap,qe=!!x.bumpMap,Ut=!!x.normalMap,I=!!x.displacementMap,zt=!!x.emissiveMap,rt=!!x.metalnessMap,yt=!!x.roughnessMap,Me=x.anisotropy>0,A=x.clearcoat>0,v=x.dispersion>0,N=x.iridescence>0,q=x.sheen>0,$=x.transmission>0,j=Me&&!!x.anisotropyMap,ge=A&&!!x.clearcoatMap,ie=A&&!!x.clearcoatNormalMap,Pe=A&&!!x.clearcoatRoughnessMap,Oe=N&&!!x.iridescenceMap,J=N&&!!x.iridescenceThicknessMap,ee=q&&!!x.sheenColorMap,_e=q&&!!x.sheenRoughnessMap,xe=!!x.specularMap,ue=!!x.specularColorMap,Ye=!!x.specularIntensityMap,L=$&&!!x.transmissionMap,se=$&&!!x.thicknessMap,te=!!x.gradientMap,pe=!!x.alphaMap,Q=x.alphaTest>0,X=!!x.alphaHash,ve=!!x.extensions;let Ge=Vi;x.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ge=n.toneMapping);const Mt={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:bt,defines:x.defines,customVertexShaderID:St,customFragmentShaderID:Y,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:Ue,batchingColor:Ue&&D._colorsTexture!==null,instancing:We,instancingColor:We&&D.instanceColor!==null,instancingMorph:We&&D.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:wn,alphaToCoverage:!!x.alphaToCoverage,map:ke,matcap:nn,envMap:et,envMapMode:et&&G.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:mt,bumpMap:qe,normalMap:Ut,displacementMap:I,emissiveMap:zt,normalMapObjectSpace:Ut&&x.normalMapType===wv,normalMapTangentSpace:Ut&&x.normalMapType===vd,metalnessMap:rt,roughnessMap:yt,anisotropy:Me,anisotropyMap:j,clearcoat:A,clearcoatMap:ge,clearcoatNormalMap:ie,clearcoatRoughnessMap:Pe,dispersion:v,iridescence:N,iridescenceMap:Oe,iridescenceThicknessMap:J,sheen:q,sheenColorMap:ee,sheenRoughnessMap:_e,specularMap:xe,specularColorMap:ue,specularIntensityMap:Ye,transmission:$,transmissionMap:L,thicknessMap:se,gradientMap:te,opaque:x.transparent===!1&&x.blending===eo&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:Q,alphaHash:X,combine:x.combine,mapUv:ke&&g(x.map.channel),aoMapUv:at&&g(x.aoMap.channel),lightMapUv:mt&&g(x.lightMap.channel),bumpMapUv:qe&&g(x.bumpMap.channel),normalMapUv:Ut&&g(x.normalMap.channel),displacementMapUv:I&&g(x.displacementMap.channel),emissiveMapUv:zt&&g(x.emissiveMap.channel),metalnessMapUv:rt&&g(x.metalnessMap.channel),roughnessMapUv:yt&&g(x.roughnessMap.channel),anisotropyMapUv:j&&g(x.anisotropyMap.channel),clearcoatMapUv:ge&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(x.sheenRoughnessMap.channel),specularMapUv:xe&&g(x.specularMap.channel),specularColorMapUv:ue&&g(x.specularColorMap.channel),specularIntensityMapUv:Ye&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:se&&g(x.thicknessMap.channel),alphaMapUv:pe&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ut||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(ke||pe),fog:!!O,useFog:x.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:re,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:he,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:ke&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||Ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function m(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)E.push(k),E.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(p(E,x),y(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),x.push(o.mask)}function S(x){const E=f[x.type];let k;if(E){const C=Fi[E];k=Zc.clone(C.uniforms)}else k=x.uniforms;return k}function b(x,E){let k=h.get(E);return k!==void 0?++k.usedTimes:(k=new I3(n,E,x,s),l.push(k),h.set(E,k)),k}function w(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:R}}function F3(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function O3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,_,m,p){let y=n[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},n[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function c(d,f,g,_,m,p){const y=a(d,f,g,_,m,p);g.transmission>0?i.push(y):g.transparent===!0?s.push(y):t.push(y)}function l(d,f,g,_,m,p){const y=a(d,f,g,_,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||O3),i.length>1&&i.sort(f||sm),s.length>1&&s.sort(f||sm)}function u(){for(let d=e,f=n.length;d<f;d++){const g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function B3(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new rm,n.set(i,[o])):s>=r.length?(o=new rm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function k3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function z3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let V3=0;function G3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function H3(n){const e=new k3,t=z3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new Ve,o=new Ve;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,b=0,w=0,T=0,R=0;l.sort(G3);for(let E=0,k=l.length;E<k;E++){const C=l[E],D=C.color,O=C.intensity,z=C.distance;let B=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===ao?B=C.shadow.map.texture:B=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(C.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(C.sh.coefficients[F],O);R++}else if(C.isDirectionalLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[f]=Z,i.directionalShadowMap[f]=B,i.directionalShadowMatrix[f]=C.shadow.matrix,y++}i.directional[f]=F,f++}else if(C.isSpotLight){const F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(D).multiplyScalar(O),F.distance=z,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,i.spot[_]=F;const G=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,G.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[_]=G.matrix,C.castShadow){const Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=B,b++}_++}else if(C.isRectAreaLight){const F=e.get(C);F.color.copy(D).multiplyScalar(O),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=F,m++}else if(C.isPointLight){const F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){const G=C.shadow,Z=t.get(C);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=F,g++}else if(C.isHemisphereLight){const F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(O),F.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==f||x.pointLength!==g||x.spotLength!==_||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==b||x.numSpotMaps!==w||x.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=f,x.pointLength=g,x.spotLength=_,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=b,x.numSpotMaps=w,x.numLightProbes=R,i.version=V3++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const S=l[p];if(S.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function om(n){const e=new H3(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function W3(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new om(n),e.set(s,[a])):r>=o.length?(a=new om(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const X3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q3=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Y3=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],am=new Ve,ea=new P,Eh=new P;function K3(n,e,t){let i=new cl;const s=new Ie,r=new Ie,o=new vt,a=new Nx,c=new Ux,l={},h=t.maxTextureSize,u={[Hi]:An,[An]:Hi,[gi]:gi},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:X3,fragmentShader:j3}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new yn;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let p=this.type;this.render=function(T,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Q1&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Dc);const E=n.getRenderTarget(),k=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),D=n.state;D.setBlending(ds),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=p!==this.type;O&&R.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(B=>B.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,B=T.length;z<B;z++){const F=T[z],G=F.shadow;if(G===void 0){we("WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const Z=G.getFrameExtents();s.multiply(Z),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,G.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=K,G.map===null||O===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===sa){if(F.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Mi(s.x,s.y,{format:ao,type:Xi,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),G.map.texture.name=F.name+".shadowMap",G.map.depthTexture=new Ta(s.x,s.y,oi),G.map.depthTexture.name=F.name+".shadowMapDepth",G.map.depthTexture.format=ps,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt}else F.isPointLight?(G.map=new Sg(s.x),G.map.depthTexture=new Cx(s.x,Wi)):(G.map=new Mi(s.x,s.y),G.map.depthTexture=new Ta(s.x,s.y,Wi)),G.map.depthTexture.name=F.name+".shadowMap",G.map.depthTexture.format=ps,this.type===Dc?(G.map.depthTexture.compareFunction=K?yd:xd,G.map.depthTexture.minFilter=Yt,G.map.depthTexture.magFilter=Yt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qt,G.map.depthTexture.magFilter=qt);G.camera.updateProjectionMatrix()}const le=G.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<le;de++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,de),n.clear();else{de===0&&(n.setRenderTarget(G.map),n.clear());const he=G.getViewport(de);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),D.viewport(o)}if(F.isPointLight){const he=G.camera,Be=G.matrix,bt=F.distance||he.far;bt!==he.far&&(he.far=bt,he.updateProjectionMatrix()),ea.setFromMatrixPosition(F.matrixWorld),he.position.copy(ea),Eh.copy(he.position),Eh.add(q3[de]),he.up.copy(Y3[de]),he.lookAt(Eh),he.updateMatrixWorld(),Be.makeTranslation(-ea.x,-ea.y,-ea.z),am.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),G._frustum.setFromProjectionMatrix(am,he.coordinateSystem,he.reversedDepth)}else G.updateMatrices(F);i=G.getFrustum(),b(R,x,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===sa&&y(G,x),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,k,C)};function y(T,R){const x=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Mi(s.x,s.y,{format:ao,type:Xi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,x,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,x,f,_,null)}function S(T,R,x,E){let k=null;const C=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)k=C;else if(k=x.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const D=k.uuid,O=R.uuid;let z=l[D];z===void 0&&(z={},l[D]=z);let B=z[O];B===void 0&&(B=k.clone(),z[O]=B,R.addEventListener("dispose",w)),k=B}if(k.visible=R.visible,k.wireframe=R.wireframe,E===sa?k.side=R.shadowSide!==null?R.shadowSide:R.side:k.side=R.shadowSide!==null?R.shadowSide:u[R.side],k.alphaMap=R.alphaMap,k.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,k.map=R.map,k.clipShadows=R.clipShadows,k.clippingPlanes=R.clippingPlanes,k.clipIntersection=R.clipIntersection,k.displacementMap=R.displacementMap,k.displacementScale=R.displacementScale,k.displacementBias=R.displacementBias,k.wireframeLinewidth=R.wireframeLinewidth,k.linewidth=R.linewidth,x.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const D=n.properties.get(k);D.light=x}return k}function b(T,R,x,E,k){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===sa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const O=e.update(T),z=T.material;if(Array.isArray(z)){const B=O.groups;for(let F=0,G=B.length;F<G;F++){const Z=B[F],K=z[Z.materialIndex];if(K&&K.visible){const le=S(T,K,E,k);T.onBeforeShadow(n,T,R,x,O,le,Z),n.renderBufferDirect(x,null,O,le,T,Z),T.onAfterShadow(n,T,R,x,O,le,Z)}}}else if(z.visible){const B=S(T,z,E,k);T.onBeforeShadow(n,T,R,x,O,B,null),n.renderBufferDirect(x,null,O,B,T,null),T.onAfterShadow(n,T,R,x,O,B,null)}}const D=T.children;for(let O=0,z=D.length;O<z;O++)b(D[O],R,x,E,k)}function w(T){T.target.removeEventListener("dispose",w);for(const x in l){const E=l[x],k=T.target.uuid;k in E&&(E[k].dispose(),delete E[k])}}}function $3(n,e){function t(){let L=!1;const se=new vt;let te=null;const pe=new vt(0,0,0,0);return{setMask:function(Q){te!==Q&&!L&&(n.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){L=Q},setClear:function(Q,X,ve,Ge,Mt){Mt===!0&&(Q*=Ge,X*=Ge,ve*=Ge),se.set(Q,X,ve,Ge),pe.equals(se)===!1&&(n.clearColor(Q,X,ve,Ge),pe.copy(se))},reset:function(){L=!1,te=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,te=null,pe=null,Q=null;return{setReversed:function(X){if(se!==X){const ve=e.get("EXT_clip_control");X?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=X;const Ge=Q;Q=null,this.setClear(Ge)}},getReversed:function(){return se},setTest:function(X){X?ne(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(X){te!==X&&!L&&(n.depthMask(X),te=X)},setFunc:function(X){if(se&&(X=Bv[X]),pe!==X){switch(X){case Hh:n.depthFunc(n.NEVER);break;case Wh:n.depthFunc(n.ALWAYS);break;case Xh:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case jh:n.depthFunc(n.EQUAL);break;case qh:n.depthFunc(n.GEQUAL);break;case Yh:n.depthFunc(n.GREATER);break;case Kh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=X}},setLocked:function(X){L=X},setClear:function(X){Q!==X&&(Q=X,se&&(X=1-X),n.clearDepth(X))},reset:function(){L=!1,te=null,pe=null,Q=null,se=!1}}}function s(){let L=!1,se=null,te=null,pe=null,Q=null,X=null,ve=null,Ge=null,Mt=null;return{setTest:function(ct){L||(ct?ne(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(ct){se!==ct&&!L&&(n.stencilMask(ct),se=ct)},setFunc:function(ct,es,ts){(te!==ct||pe!==es||Q!==ts)&&(n.stencilFunc(ct,es,ts),te=ct,pe=es,Q=ts)},setOp:function(ct,es,ts){(X!==ct||ve!==es||Ge!==ts)&&(n.stencilOp(ct,es,ts),X=ct,ve=es,Ge=ts)},setLocked:function(ct){L=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){L=!1,se=null,te=null,pe=null,Q=null,X=null,ve=null,Ge=null,Mt=null}}}const r=new t,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,b=null,w=null,T=null,R=new Le(0,0,0),x=0,E=!1,k=null,C=null,D=null,O=null,z=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,G=0;const Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=G>=2);let K=null,le={};const de=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Be=new vt().fromArray(de),bt=new vt().fromArray(he);function St(L,se,te,pe){const Q=new Uint8Array(4),X=n.createTexture();n.bindTexture(L,X),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ve=0;ve<te;ve++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(se+ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return X}const Y={};Y[n.TEXTURE_2D]=St(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=St(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=St(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=St(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(ro),qe(!1),Ut(Xf),ne(n.CULL_FACE),at(ds);function ne(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function re(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function We(L,se){return u[L]!==se?(n.bindFramebuffer(L,se),u[L]=se,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ue(L,se){let te=f,pe=!1;if(L){te=d.get(se),te===void 0&&(te=[],d.set(se,te));const Q=L.textures;if(te.length!==Q.length||te[0]!==n.COLOR_ATTACHMENT0){for(let X=0,ve=Q.length;X<ve;X++)te[X]=n.COLOR_ATTACHMENT0+X;te.length=Q.length,pe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,pe=!0);pe&&n.drawBuffers(te)}function ke(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const nn={[Qs]:n.FUNC_ADD,[tv]:n.FUNC_SUBTRACT,[nv]:n.FUNC_REVERSE_SUBTRACT};nn[iv]=n.MIN,nn[sv]=n.MAX;const et={[rv]:n.ZERO,[ov]:n.ONE,[av]:n.SRC_COLOR,[Vh]:n.SRC_ALPHA,[fv]:n.SRC_ALPHA_SATURATE,[uv]:n.DST_COLOR,[lv]:n.DST_ALPHA,[cv]:n.ONE_MINUS_SRC_COLOR,[Gh]:n.ONE_MINUS_SRC_ALPHA,[dv]:n.ONE_MINUS_DST_COLOR,[hv]:n.ONE_MINUS_DST_ALPHA,[pv]:n.CONSTANT_COLOR,[mv]:n.ONE_MINUS_CONSTANT_COLOR,[gv]:n.CONSTANT_ALPHA,[_v]:n.ONE_MINUS_CONSTANT_ALPHA};function at(L,se,te,pe,Q,X,ve,Ge,Mt,ct){if(L===ds){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(ne(n.BLEND),_=!0),L!==ev){if(L!==m||ct!==E){if((p!==Qs||b!==Qs)&&(n.blendEquation(n.FUNC_ADD),p=Qs,b=Qs),ct)switch(L){case eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFunc(n.ONE,n.ONE);break;case qf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Fe("WebGLState: Invalid blending: ",L);break}else switch(L){case eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case qf:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yf:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",L);break}y=null,S=null,w=null,T=null,R.set(0,0,0),x=0,m=L,E=ct}return}Q=Q||se,X=X||te,ve=ve||pe,(se!==p||Q!==b)&&(n.blendEquationSeparate(nn[se],nn[Q]),p=se,b=Q),(te!==y||pe!==S||X!==w||ve!==T)&&(n.blendFuncSeparate(et[te],et[pe],et[X],et[ve]),y=te,S=pe,w=X,T=ve),(Ge.equals(R)===!1||Mt!==x)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Mt),R.copy(Ge),x=Mt),m=L,E=!1}function mt(L,se){L.side===gi?re(n.CULL_FACE):ne(n.CULL_FACE);let te=L.side===An;se&&(te=!te),qe(te),L.blending===eo&&L.transparent===!1?at(ds):at(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const pe=L.stencilWrite;a.setTest(pe),pe&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),zt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function qe(L){k!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),k=L)}function Ut(L){L!==Z1?(ne(n.CULL_FACE),L!==C&&(L===Xf?n.cullFace(n.BACK):L===J1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),C=L}function I(L){L!==D&&(F&&n.lineWidth(L),D=L)}function zt(L,se,te){L?(ne(n.POLYGON_OFFSET_FILL),(O!==se||z!==te)&&(O=se,z=te,o.getReversed()&&(se=-se),n.polygonOffset(se,te))):re(n.POLYGON_OFFSET_FILL)}function rt(L){L?ne(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function yt(L){L===void 0&&(L=n.TEXTURE0+B-1),K!==L&&(n.activeTexture(L),K=L)}function Me(L,se,te){te===void 0&&(K===null?te=n.TEXTURE0+B-1:te=K);let pe=le[te];pe===void 0&&(pe={type:void 0,texture:void 0},le[te]=pe),(pe.type!==L||pe.texture!==se)&&(K!==te&&(n.activeTexture(te),K=te),n.bindTexture(L,se||Y[L]),pe.type=L,pe.texture=se)}function A(){const L=le[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function q(){try{n.texSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function $(){try{n.texSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ie(){try{n.texStorage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Pe(){try{n.texStorage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function Oe(){try{n.texImage2D(...arguments)}catch(L){Fe("WebGLState:",L)}}function J(){try{n.texImage3D(...arguments)}catch(L){Fe("WebGLState:",L)}}function ee(L){Be.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function _e(L){bt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),bt.copy(L))}function xe(L,se){let te=l.get(se);te===void 0&&(te=new WeakMap,l.set(se,te));let pe=te.get(L);pe===void 0&&(pe=n.getUniformBlockIndex(se,L.name),te.set(L,pe))}function ue(L,se){const pe=l.get(se).get(L);c.get(se)!==pe&&(n.uniformBlockBinding(se,pe,L.__bindingPointIndex),c.set(se,pe))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,le={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,y=null,S=null,b=null,w=null,T=null,R=new Le(0,0,0),x=0,E=!1,k=null,C=null,D=null,O=null,z=null,Be.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:re,bindFramebuffer:We,drawBuffers:Ue,useProgram:ke,setBlending:at,setMaterial:mt,setFlipSided:qe,setCullFace:Ut,setLineWidth:I,setPolygonOffset:zt,setScissorTest:rt,activeTexture:yt,bindTexture:Me,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Oe,texImage3D:J,updateUBOMapping:xe,uniformBlockBinding:ue,texStorage2D:ie,texStorage3D:Pe,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:j,compressedTexSubImage3D:ge,scissor:ee,viewport:_e,reset:Ye}}function Z3(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ie,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):ba("canvas")}function _(A,v,N){let q=1;const $=Me(A);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(q*$.width),ge=Math.floor(q*$.height);u===void 0&&(u=g(j,ge));const ie=v?g(j,ge):u;return ie.width=j,ie.height=ge,ie.getContext("2d").drawImage(A,0,0,j,ge),we("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+ge+")."),ie}else return"data"in A&&we("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,v,N,q,$=!1){if(A!==null){if(n[A]!==void 0)return n[A];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=v;if(v===n.RED&&(N===n.FLOAT&&(j=n.R32F),N===n.HALF_FLOAT&&(j=n.R16F),N===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.R8UI),N===n.UNSIGNED_SHORT&&(j=n.R16UI),N===n.UNSIGNED_INT&&(j=n.R32UI),N===n.BYTE&&(j=n.R8I),N===n.SHORT&&(j=n.R16I),N===n.INT&&(j=n.R32I)),v===n.RG&&(N===n.FLOAT&&(j=n.RG32F),N===n.HALF_FLOAT&&(j=n.RG16F),N===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RG8UI),N===n.UNSIGNED_SHORT&&(j=n.RG16UI),N===n.UNSIGNED_INT&&(j=n.RG32UI),N===n.BYTE&&(j=n.RG8I),N===n.SHORT&&(j=n.RG16I),N===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RGB8UI),N===n.UNSIGNED_SHORT&&(j=n.RGB16UI),N===n.UNSIGNED_INT&&(j=n.RGB32UI),N===n.BYTE&&(j=n.RGB8I),N===n.SHORT&&(j=n.RGB16I),N===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),N===n.UNSIGNED_INT&&(j=n.RGBA32UI),N===n.BYTE&&(j=n.RGBA8I),N===n.SHORT&&(j=n.RGBA16I),N===n.INT&&(j=n.RGBA32I)),v===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),v===n.RGBA){const ge=$?Wc:Je.getTransfer(q);N===n.FLOAT&&(j=n.RGBA32F),N===n.HALF_FLOAT&&(j=n.RGBA16F),N===n.UNSIGNED_BYTE&&(j=ge===lt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(A,v){let N;return A?v===null||v===Wi||v===xa?N=n.DEPTH24_STENCIL8:v===oi?N=n.DEPTH32F_STENCIL8:v===va&&(N=n.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wi||v===xa?N=n.DEPTH_COMPONENT24:v===oi?N=n.DEPTH_COMPONENT32F:v===va&&(N=n.DEPTH_COMPONENT16),N}function w(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==qt&&A.minFilter!==Yt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){const v=A.target;v.removeEventListener("dispose",T),x(v),v.isVideoTexture&&h.delete(v)}function R(A){const v=A.target;v.removeEventListener("dispose",R),k(v)}function x(A){const v=i.get(A);if(v.__webglInit===void 0)return;const N=A.source,q=d.get(N);if(q){const $=q[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(A),Object.keys(q).length===0&&d.delete(N)}i.remove(A)}function E(A){const v=i.get(A);n.deleteTexture(v.__webglTexture);const N=A.source,q=d.get(N);delete q[v.__cacheKey],o.memory.textures--}function k(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let $=0;$<v.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[q][$]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=A.textures;for(let q=0,$=N.length;q<$;q++){const j=i.get(N[q]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(N[q])}i.remove(A)}let C=0;function D(){C=0}function O(){const A=C;return A>=s.maxTextures&&we("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function z(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function B(A,v){const N=i.get(A);if(A.isVideoTexture&&rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const q=A.image;if(q===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(N,A,v);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+v)}function F(A,v){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){Y(N,A,v);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+v)}function G(A,v){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){Y(N,A,v);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+v)}function Z(A,v){const N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){ne(N,A,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+v)}const K={[Ln]:n.REPEAT,[Oi]:n.CLAMP_TO_EDGE,[Gc]:n.MIRRORED_REPEAT},le={[qt]:n.NEAREST,[j0]:n.NEAREST_MIPMAP_NEAREST,[ra]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Nc]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},de={[Rv]:n.NEVER,[Dv]:n.ALWAYS,[Cv]:n.LESS,[xd]:n.LEQUAL,[Pv]:n.EQUAL,[yd]:n.GEQUAL,[Iv]:n.GREATER,[Lv]:n.NOTEQUAL};function he(A,v){if(v.type===oi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Yt||v.magFilter===Nc||v.magFilter===ra||v.magFilter===hs||v.minFilter===Yt||v.minFilter===Nc||v.minFilter===ra||v.minFilter===hs)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[v.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,le[v.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,de[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==ra&&v.minFilter!==hs||v.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Be(A,v){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",T));const q=v.source;let $=d.get(q);$===void 0&&($={},d.set(q,$));const j=z(v);if(j!==A.__cacheKey){$[j]===void 0&&($[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[j].usedTimes++;const ge=$[A.__cacheKey];ge!==void 0&&($[A.__cacheKey].usedTimes--,ge.usedTimes===0&&E(v)),A.__cacheKey=j,A.__webglTexture=$[j].texture}return N}function bt(A,v,N){return Math.floor(Math.floor(A/N)/v)}function St(A,v,N,q){const j=A.updateRanges;if(j.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,N,q,v.data);else{j.sort((J,ee)=>J.start-ee.start);let ge=0;for(let J=1;J<j.length;J++){const ee=j[ge],_e=j[J],xe=ee.start+ee.count,ue=bt(_e.start,v.width,4),Ye=bt(ee.start,v.width,4);_e.start<=xe+1&&ue===Ye&&bt(_e.start+_e.count-1,v.width,4)===ue?ee.count=Math.max(ee.count,_e.start+_e.count-ee.start):(++ge,j[ge]=_e)}j.length=ge+1;const ie=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Oe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let J=0,ee=j.length;J<ee;J++){const _e=j[J],xe=Math.floor(_e.start/4),ue=Math.ceil(_e.count/4),Ye=xe%v.width,L=Math.floor(xe/v.width),se=ue,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ye,L,se,te,N,q,v.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Oe)}}function Y(A,v,N){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);const $=Be(A,v),j=v.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+N);const ge=i.get(j);if(j.version!==ge.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const ie=Je.getPrimaries(Je.workingColorSpace),Pe=v.colorSpace===Is?null:Je.getPrimaries(v.colorSpace),Oe=v.colorSpace===Is||ie===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let J=_(v.image,!1,s.maxTextureSize);J=yt(v,J);const ee=r.convert(v.format,v.colorSpace),_e=r.convert(v.type);let xe=S(v.internalFormat,ee,_e,v.colorSpace,v.isVideoTexture);he(q,v);let ue;const Ye=v.mipmaps,L=v.isVideoTexture!==!0,se=ge.__version===void 0||$===!0,te=j.dataReady,pe=w(v,J);if(v.isDepthTexture)xe=b(v.format===tr,v.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,xe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,xe,J.width,J.height,0,ee,_e,null));else if(v.isDataTexture)if(Ye.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,pe,xe,Ye[0].width,Ye[0].height);for(let Q=0,X=Ye.length;Q<X;Q++)ue=Ye[Q],L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ee,_e,ue.data):t.texImage2D(n.TEXTURE_2D,Q,xe,ue.width,ue.height,0,ee,_e,ue.data);v.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,pe,xe,J.width,J.height),te&&St(v,J,ee,_e)):t.texImage2D(n.TEXTURE_2D,0,xe,J.width,J.height,0,ee,_e,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,Ye[0].width,Ye[0].height,J.depth);for(let Q=0,X=Ye.length;Q<X;Q++)if(ue=Ye[Q],v.format!==ai)if(ee!==null)if(L){if(te)if(v.layerUpdates.size>0){const ve=kp(ue.width,ue.height,v.format,v.type);for(const Ge of v.layerUpdates){const Mt=ue.data.subarray(Ge*ve/ue.data.BYTES_PER_ELEMENT,(Ge+1)*ve/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ge,ue.width,ue.height,1,ee,Mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,J.depth,ee,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,xe,ue.width,ue.height,J.depth,0,ue.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ue.width,ue.height,J.depth,ee,_e,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,xe,ue.width,ue.height,J.depth,0,ee,_e,ue.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,pe,xe,Ye[0].width,Ye[0].height);for(let Q=0,X=Ye.length;Q<X;Q++)ue=Ye[Q],v.format!==ai?ee!==null?L?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ee,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,xe,ue.width,ue.height,0,ue.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ue.width,ue.height,ee,_e,ue.data):t.texImage2D(n.TEXTURE_2D,Q,xe,ue.width,ue.height,0,ee,_e,ue.data)}else if(v.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,xe,J.width,J.height,J.depth),te)if(v.layerUpdates.size>0){const Q=kp(J.width,J.height,v.format,v.type);for(const X of v.layerUpdates){const ve=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,ee,_e,ve)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ee,_e,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,J.width,J.height,J.depth,0,ee,_e,J.data);else if(v.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,pe,xe,J.width,J.height,J.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ee,_e,J.data)):t.texImage3D(n.TEXTURE_3D,0,xe,J.width,J.height,J.depth,0,ee,_e,J.data);else if(v.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,pe,xe,J.width,J.height);else{let Q=J.width,X=J.height;for(let ve=0;ve<pe;ve++)t.texImage2D(n.TEXTURE_2D,ve,xe,Q,X,0,ee,_e,null),Q>>=1,X>>=1}}else if(Ye.length>0){if(L&&se){const Q=Me(Ye[0]);t.texStorage2D(n.TEXTURE_2D,pe,xe,Q.width,Q.height)}for(let Q=0,X=Ye.length;Q<X;Q++)ue=Ye[Q],L?te&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ee,_e,ue):t.texImage2D(n.TEXTURE_2D,Q,xe,ee,_e,ue);v.generateMipmaps=!1}else if(L){if(se){const Q=Me(J);t.texStorage2D(n.TEXTURE_2D,pe,xe,Q.width,Q.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,_e,J)}else t.texImage2D(n.TEXTURE_2D,0,xe,ee,_e,J);m(v)&&p(q),ge.__version=j.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ne(A,v,N){if(v.image.length!==6)return;const q=Be(A,v),$=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+N);const j=i.get($);if($.version!==j.__version||q===!0){t.activeTexture(n.TEXTURE0+N);const ge=Je.getPrimaries(Je.workingColorSpace),ie=v.colorSpace===Is?null:Je.getPrimaries(v.colorSpace),Pe=v.colorSpace===Is||ge===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Oe=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let X=0;X<6;X++)!Oe&&!J?ee[X]=_(v.image[X],!0,s.maxCubemapSize):ee[X]=J?v.image[X].image:v.image[X],ee[X]=yt(v,ee[X]);const _e=ee[0],xe=r.convert(v.format,v.colorSpace),ue=r.convert(v.type),Ye=S(v.internalFormat,xe,ue,v.colorSpace),L=v.isVideoTexture!==!0,se=j.__version===void 0||q===!0,te=$.dataReady;let pe=w(v,_e);he(n.TEXTURE_CUBE_MAP,v);let Q;if(Oe){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ye,_e.width,_e.height);for(let X=0;X<6;X++){Q=ee[X].mipmaps;for(let ve=0;ve<Q.length;ve++){const Ge=Q[ve];v.format!==ai?xe!==null?L?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,0,0,Ge.width,Ge.height,xe,Ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,Ye,Ge.width,Ge.height,0,Ge.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,0,0,Ge.width,Ge.height,xe,ue,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve,Ye,Ge.width,Ge.height,0,xe,ue,Ge.data)}}}else{if(Q=v.mipmaps,L&&se){Q.length>0&&pe++;const X=Me(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ye,X.width,X.height)}for(let X=0;X<6;X++)if(J){L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ee[X].width,ee[X].height,xe,ue,ee[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ye,ee[X].width,ee[X].height,0,xe,ue,ee[X].data);for(let ve=0;ve<Q.length;ve++){const Mt=Q[ve].image[X].image;L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,0,0,Mt.width,Mt.height,xe,ue,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,Ye,Mt.width,Mt.height,0,xe,ue,Mt.data)}}else{L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xe,ue,ee[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ye,xe,ue,ee[X]);for(let ve=0;ve<Q.length;ve++){const Ge=Q[ve];L?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,0,0,xe,ue,Ge.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ve+1,Ye,xe,ue,Ge.image[X])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function re(A,v,N,q,$,j){const ge=r.convert(N.format,N.colorSpace),ie=r.convert(N.type),Pe=S(N.internalFormat,ge,ie,N.colorSpace),Oe=i.get(v),J=i.get(N);if(J.__renderTarget=v,!Oe.__hasExternalTextures){const ee=Math.max(1,v.width>>j),_e=Math.max(1,v.height>>j);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,j,Pe,ee,_e,v.depth,0,ge,ie,null):t.texImage2D($,j,Pe,ee,_e,0,ge,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),zt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,J.__webglTexture,0,I(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,J.__webglTexture,j),t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(A,v,N){if(n.bindRenderbuffer(n.RENDERBUFFER,A),v.depthBuffer){const q=v.depthTexture,$=q&&q.isDepthTexture?q.type:null,j=b(v.stencilBuffer,$),ge=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;zt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),j,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,A)}else{const q=v.textures;for(let $=0;$<q.length;$++){const j=q[$],ge=r.convert(j.format,j.colorSpace),ie=r.convert(j.type),Pe=S(j.internalFormat,ge,ie,j.colorSpace);zt(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(v),Pe,v.width,v.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(v),Pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(A,v,N){const q=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",T)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),he(n.TEXTURE_CUBE_MAP,v.depthTexture);const Oe=r.convert(v.depthTexture.format),J=r.convert(v.depthTexture.type);let ee;v.depthTexture.format===ps?ee=n.DEPTH_COMPONENT24:v.depthTexture.format===tr&&(ee=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ee,v.width,v.height,0,Oe,J,null)}}else B(v.depthTexture,0);const j=$.__webglTexture,ge=I(v),ie=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Pe=v.depthTexture.format===tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===ps)zt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ie,j,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ie,j,0);else if(v.depthTexture.format===tr)zt(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ie,j,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ie,j,0);else throw new Error("Unknown depthTexture format")}function ke(A){const v=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Ue(v.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?Ue(v.__webglFramebuffer[0],A,0):Ue(v.__webglFramebuffer,A,0)}else if(N){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),We(v.__webglDepthbuffer[q],A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),We(v.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nn(A,v,N){const q=i.get(A);v!==void 0&&re(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ke(A)}function et(A){const v=A.texture,N=i.get(A),q=i.get(v);A.addEventListener("dispose",R);const $=A.textures,j=A.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,o.memory.textures++),j){N.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ie]=[];for(let Pe=0;Pe<v.mipmaps.length;Pe++)N.__webglFramebuffer[ie][Pe]=n.createFramebuffer()}else N.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ie=0;ie<v.mipmaps.length;ie++)N.__webglFramebuffer[ie]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(ge)for(let ie=0,Pe=$.length;ie<Pe;ie++){const Oe=i.get($[ie]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&zt(A)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){const Pe=$[ie];N.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ie]);const Oe=r.convert(Pe.format,Pe.colorSpace),J=r.convert(Pe.type),ee=S(Pe.internalFormat,Oe,J,Pe.colorSpace,A.isXRRenderTarget===!0),_e=I(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,ee,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,N.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),We(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),he(n.TEXTURE_CUBE_MAP,v);for(let ie=0;ie<6;ie++)if(v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)re(N.__webglFramebuffer[ie][Pe],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Pe);else re(N.__webglFramebuffer[ie],A,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ie=0,Pe=$.length;ie<Pe;ie++){const Oe=$[ie],J=i.get(Oe);let ee=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ee=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),he(ee,Oe),re(N.__webglFramebuffer,A,Oe,n.COLOR_ATTACHMENT0+ie,ee,0),m(Oe)&&p(ee)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),he(ie,v),v.mipmaps&&v.mipmaps.length>0)for(let Pe=0;Pe<v.mipmaps.length;Pe++)re(N.__webglFramebuffer[Pe],A,v,n.COLOR_ATTACHMENT0,ie,Pe);else re(N.__webglFramebuffer,A,v,n.COLOR_ATTACHMENT0,ie,0);m(v)&&p(ie),t.unbindTexture()}A.depthBuffer&&ke(A)}function at(A){const v=A.textures;for(let N=0,q=v.length;N<q;N++){const $=v[N];if(m($)){const j=y(A),ge=i.get($).__webglTexture;t.bindTexture(j,ge),p(j),t.unbindTexture()}}}const mt=[],qe=[];function Ut(A){if(A.samples>0){if(zt(A)===!1){const v=A.textures,N=A.width,q=A.height;let $=n.COLOR_BUFFER_BIT;const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(A),ie=v.length>1;if(ie)for(let Oe=0;Oe<v.length;Oe++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const Pe=A.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Oe=0;Oe<v.length;Oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Oe]);const J=i.get(v[Oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,$,n.NEAREST),c===!0&&(mt.length=0,qe.length=0,mt.push(n.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(mt.push(j),qe.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Oe=0;Oe<v.length;Oe++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.RENDERBUFFER,ge.__webglColorRenderbuffer[Oe]);const J=i.get(v[Oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Oe,n.TEXTURE_2D,J,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function I(A){return Math.min(s.maxSamples,A.samples)}function zt(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function yt(A,v){const N=A.colorSpace,q=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==wn&&N!==Is&&(Je.getTransfer(N)===lt?(q!==ai||$!==Gn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",N)),v}function Me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=nn,this.setupRenderTarget=et,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=re,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function J3(n,e){function t(i,s=Is){let r;const o=Je.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===ud)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===K0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$0)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===q0)return n.BYTE;if(i===Y0)return n.SHORT;if(i===va)return n.UNSIGNED_SHORT;if(i===hd)return n.INT;if(i===Wi)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===Xi)return n.HALF_FLOAT;if(i===Z0)return n.ALPHA;if(i===J0)return n.RGB;if(i===ai)return n.RGBA;if(i===ps)return n.DEPTH_COMPONENT;if(i===tr)return n.DEPTH_STENCIL;if(i===fd)return n.RED;if(i===pd)return n.RED_INTEGER;if(i===ao)return n.RG;if(i===md)return n.RG_INTEGER;if(i===gd)return n.RGBA_INTEGER;if(i===Uc||i===Fc||i===Oc||i===Bc)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$h||i===Zh||i===Jh||i===Qh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eu||i===tu)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===nu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===iu)return r.COMPRESSED_R11_EAC;if(i===su)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ru)return r.COMPRESSED_RG11_EAC;if(i===ou)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===au||i===cu||i===lu||i===hu||i===uu||i===du||i===fu||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===au)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===du)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===pu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_u)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yu)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mu||i===Su||i===bu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mu)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eu||i===Tu||i===Au||i===wu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Eu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Au)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xa?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Q3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new dg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new jn({vertexShader:Q3,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Os(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends zs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new tb,p={},y=t.getContextAttributes();let S=null,b=null;const w=[],T=[],R=new Ie;let x=null;const E=new _n;E.viewport=new vt;const k=new _n;k.viewport=new vt;const C=[E,k],D=new t2;let O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=w[Y];return ne===void 0&&(ne=new $l,w[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=w[Y];return ne===void 0&&(ne=new $l,w[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=w[Y];return ne===void 0&&(ne=new $l,w[Y]=ne),ne.getHandSpace()};function B(Y){const ne=T.indexOf(Y.inputSource);if(ne===-1)return;const re=w[ne];re!==void 0&&(re.update(Y.inputSource,Y.frame,l||o),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<w.length;Y++){const ne=T[Y];ne!==null&&(T[Y]=null,w[Y].disconnect(ne))}O=null,z=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(S),f=null,d=null,u=null,s=null,b=null,St.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",F),s.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,We=null,Ue=null;y.depth&&(Ue=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?tr:ps,We=y.stencil?xa:Wi);const ke={colorFormat:t.RGBA8,depthFormat:Ue,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ke),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Mi(d.textureWidth,d.textureHeight,{format:ai,type:Gn,depthTexture:new Ta(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Mi(f.framebufferWidth,f.framebufferHeight,{format:ai,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let ne=0;ne<Y.removed.length;ne++){const re=Y.removed[ne],We=T.indexOf(re);We>=0&&(T[We]=null,w[We].disconnect(re))}for(let ne=0;ne<Y.added.length;ne++){const re=Y.added[ne];let We=T.indexOf(re);if(We===-1){for(let ke=0;ke<w.length;ke++)if(ke>=T.length){T.push(re),We=ke;break}else if(T[ke]===null){T[ke]=re,We=ke;break}if(We===-1)break}const Ue=w[We];Ue&&Ue.connect(re)}}const Z=new P,K=new P;function le(Y,ne,re){Z.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);const We=Z.distanceTo(K),Ue=ne.projectionMatrix.elements,ke=re.projectionMatrix.elements,nn=Ue[14]/(Ue[10]-1),et=Ue[14]/(Ue[10]+1),at=(Ue[9]+1)/Ue[5],mt=(Ue[9]-1)/Ue[5],qe=(Ue[8]-1)/Ue[0],Ut=(ke[8]+1)/ke[0],I=nn*qe,zt=nn*Ut,rt=We/(-qe+Ut),yt=rt*-qe;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(yt),Y.translateZ(rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ue[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Me=nn+rt,A=et+rt,v=I-yt,N=zt+(We-yt),q=at*et/A*Me,$=mt*et/A*Me;Y.projectionMatrix.makePerspective(v,N,q,$,Me,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ne=Y.near,re=Y.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(re=m.depthFar)),D.near=k.near=E.near=ne,D.far=k.far=E.far=re,(O!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,z=D.far),D.layers.mask=Y.layers.mask|6,E.layers.mask=D.layers.mask&-5,k.layers.mask=D.layers.mask&-3;const We=Y.parent,Ue=D.cameras;de(D,We);for(let ke=0;ke<Ue.length;ke++)de(Ue[ke],We);Ue.length===2?le(D,E,k):D.projectionMatrix.copy(E.projectionMatrix),he(Y,D,We)};function he(Y,ne,re){re===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=co*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Y){return p[Y]};let Be=null;function bt(Y,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){const re=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let We=!1;re.length!==D.cameras.length&&(D.cameras.length=0,We=!0);for(let et=0;et<re.length;et++){const at=re[et];let mt=null;if(f!==null)mt=f.getViewport(at);else{const Ut=u.getViewSubImage(d,at);mt=Ut.viewport,et===0&&(e.setRenderTargetTextures(b,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(b))}let qe=C[et];qe===void 0&&(qe=new _n,qe.layers.enable(et),qe.viewport=new vt,C[et]=qe),qe.matrix.fromArray(at.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(at.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(mt.x,mt.y,mt.width,mt.height),et===0&&(D.matrix.copy(qe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),We===!0&&D.cameras.push(qe)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const et=u.getDepthInformation(re[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(Ue&&Ue.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let et=0;et<re.length;et++){const at=re[et].camera;if(at){let mt=p[at];mt||(mt=new dg,p[at]=mt);const qe=u.getCameraImage(at);mt.sourceTexture=qe}}}}for(let re=0;re<w.length;re++){const We=T[re],Ue=w[re];We!==null&&Ue!==void 0&&Ue.update(We,ne,l||o)}Be&&Be(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const St=new Mg;St.setAnimationLoop(bt),this.setAnimationLoop=function(Y){Be=Y},this.dispose=function(){}}}const $s=new bi,ib=new Ve;function sb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,b){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,b=y.envMapRotation;S&&(m.envMap.value=S,$s.copy(b),$s.x*=-1,$s.y*=-1,$s.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler($s)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function rb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){const b=S.program;i.uniformBlockBinding(y,b)}function l(y,S){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));const w=S.program;i.updateUBOMapping(y,w);const T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const S=u();y.__bindingPointIndex=S;const b=n.createBuffer(),w=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=s[y.id],b=y.uniforms,w=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,R=b.length;T<R;T++){const x=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,k=x.length;E<k;E++){const C=x[E];if(f(C,T,E,w)===!0){const D=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let B=0;B<O.length;B++){const F=O[B],G=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,D+z,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,S,b,w){const T=y.value,R=S+"_"+b;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const x=w[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return w[R]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function g(y){const S=y.uniforms;let b=0;const w=16;for(let R=0,x=S.length;R<x;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let k=0,C=E.length;k<C;k++){const D=E[k],O=Array.isArray(D.value)?D.value:[D.value];for(let z=0,B=O.length;z<B;z++){const F=O[z],G=_(F),Z=b%w,K=Z%G.boundary,le=Z+K;b+=K,le!==0&&w-le<G.storage&&(b+=w-le),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=G.storage}}}const T=b%w;return T>0&&(b+=w-T),y.__size=b,y.__cache={},this}function _(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function ab(){return Ii===null&&(Ii=new Ed(ob,16,16,ao,Xi),Ii.name="DFG_LUT",Ii.minFilter=Yt,Ii.magFilter=Yt,Ii.wrapS=Oi,Ii.wrapT=Oi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class cb{constructor(e={}){const{canvas:t=Fv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=f,m=new Set([gd,md,pd]),p=new Set([Gn,Wi,va,xa,ud,dd]),y=new Uint32Array(4),S=new Int32Array(4);let b=null,w=null;const T=[],R=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let k=!1;this._outputColorSpace=Rt;let C=0,D=0,O=null,z=-1,B=null;const F=new vt,G=new vt;let Z=null;const K=new Le(0);let le=0,de=t.width,he=t.height,Be=1,bt=null,St=null;const Y=new vt(0,0,de,he),ne=new vt(0,0,de,he);let re=!1;const We=new cl;let Ue=!1,ke=!1;const nn=new Ve,et=new P,at=new vt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ut(){return O===null?Be:1}let I=i;function zt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ad}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const U="webgl2";if(I=zt(U,M),I===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Fe("WebGLRenderer: "+M.message),M}let rt,yt,Me,A,v,N,q,$,j,ge,ie,Pe,Oe,J,ee,_e,xe,ue,Ye,L,se,te,pe;function Q(){rt=new cS(I),rt.init(),se=new J3(I,rt),yt=new eS(I,rt,e,se),Me=new $3(I,rt),yt.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),A=new uS(I),v=new F3,N=new Z3(I,rt,Me,v,yt,se,A),q=new aS(E),$=new g2(I),te=new JM(I,$),j=new lS(I,$,A,te),ge=new fS(I,j,$,te,A),ue=new dS(I,yt,N),ee=new tS(v),ie=new U3(E,q,rt,yt,te,ee),Pe=new sb(E,v),Oe=new B3,J=new W3(rt),xe=new ZM(E,q,Me,ge,g,c),_e=new K3(E,ge,yt),pe=new rb(I,A,yt,Me),Ye=new QM(I,rt,A),L=new hS(I,rt,A),A.programs=ie.programs,E.capabilities=yt,E.extensions=rt,E.properties=v,E.renderLists=Oe,E.shadowMap=_e,E.state=Me,E.info=A}Q(),_!==Gn&&(x=new mS(_,t.width,t.height,s,r));const X=new nb(E,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=rt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=rt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(M){M!==void 0&&(Be=M,this.setSize(de,he,!1))},this.getSize=function(M){return M.set(de,he)},this.setSize=function(M,U,W=!0){if(X.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}de=M,he=U,t.width=Math.floor(M*Be),t.height=Math.floor(U*Be),W===!0&&(t.style.width=M+"px",t.style.height=U+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(de*Be,he*Be).floor()},this.setDrawingBufferSize=function(M,U,W){de=M,he=U,Be=W,t.width=Math.floor(M*W),t.height=Math.floor(U*W),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===Gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(Y)},this.setViewport=function(M,U,W,H){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,U,W,H),Me.viewport(F.copy(Y).multiplyScalar(Be).round())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,U,W,H){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,U,W,H),Me.scissor(G.copy(ne).multiplyScalar(Be).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(M){Me.setScissorTest(re=M)},this.setOpaqueSort=function(M){bt=M},this.setTransparentSort=function(M){St=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,W=!0){let H=0;if(M){let V=!1;if(O!==null){const ae=O.texture.format;V=m.has(ae)}if(V){const ae=O.texture.type,fe=p.has(ae),ce=xe.getClearColor(),ye=xe.getClearAlpha(),Te=ce.r,He=ce.g,Ke=ce.b;fe?(y[0]=Te,y[1]=He,y[2]=Ke,y[3]=ye,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=Te,S[1]=He,S[2]=Ke,S[3]=ye,I.clearBufferiv(I.COLOR,0,S))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Mt,!1),xe.dispose(),Oe.dispose(),J.dispose(),v.dispose(),q.dispose(),ge.dispose(),te.dispose(),pe.dispose(),ie.dispose(),X.dispose(),X.removeEventListener("sessionstart",Uf),X.removeEventListener("sessionend",Ff),Hs.stop()};function ve(M){M.preventDefault(),Xc("WebGLRenderer: Context Lost."),k=!0}function Ge(){Xc("WebGLRenderer: Context Restored."),k=!1;const M=A.autoReset,U=_e.enabled,W=_e.autoUpdate,H=_e.needsUpdate,V=_e.type;Q(),A.autoReset=M,_e.enabled=U,_e.autoUpdate=W,_e.needsUpdate=H,_e.type=V}function Mt(M){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ct(M){const U=M.target;U.removeEventListener("dispose",ct),es(U)}function es(M){ts(M),v.remove(M)}function ts(M){const U=v.get(M).programs;U!==void 0&&(U.forEach(function(W){ie.releaseProgram(W)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,W,H,V,ae){U===null&&(U=mt);const fe=V.isMesh&&V.matrixWorld.determinant()<0,ce=H1(M,U,W,H,V);Me.setMaterial(H,fe);let ye=W.index,Te=1;if(H.wireframe===!0){if(ye=j.getWireframeAttribute(W),ye===void 0)return;Te=2}const He=W.drawRange,Ke=W.attributes.position;let Re=He.start*Te,ut=(He.start+He.count)*Te;ae!==null&&(Re=Math.max(Re,ae.start*Te),ut=Math.min(ut,(ae.start+ae.count)*Te)),ye!==null?(Re=Math.max(Re,0),ut=Math.min(ut,ye.count)):Ke!=null&&(Re=Math.max(Re,0),ut=Math.min(ut,Ke.count));const Ft=ut-Re;if(Ft<0||Ft===1/0)return;te.setup(V,H,ce,W,ye);let Lt,dt=Ye;if(ye!==null&&(Lt=$.get(ye),dt=L,dt.setIndex(Lt)),V.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*Ut()),dt.setMode(I.LINES)):dt.setMode(I.TRIANGLES);else if(V.isLine){let fn=H.linewidth;fn===void 0&&(fn=1),Me.setLineWidth(fn*Ut()),V.isLineSegments?dt.setMode(I.LINES):V.isLineLoop?dt.setMode(I.LINE_LOOP):dt.setMode(I.LINE_STRIP)}else V.isPoints?dt.setMode(I.POINTS):V.isSprite&&dt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)jc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const fn=V._multiDrawStarts,Se=V._multiDrawCounts,Un=V._multiDrawCount,nt=ye?$.get(ye).bytesPerElement:1,di=v.get(H).currentProgram.getUniforms();for(let Ci=0;Ci<Un;Ci++)di.setValue(I,"_gl_DrawID",Ci),dt.render(fn[Ci]/nt,Se[Ci])}else if(V.isInstancedMesh)dt.renderInstances(Re,Ft,V.count);else if(W.isInstancedBufferGeometry){const fn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Se=Math.min(W.instanceCount,fn);dt.renderInstances(Re,Ft,Se)}else dt.render(Re,Ft)};function Nf(M,U,W){M.transparent===!0&&M.side===gi&&M.forceSinglePass===!1?(M.side=An,M.needsUpdate=!0,Wa(M,U,W),M.side=Hi,M.needsUpdate=!0,Wa(M,U,W),M.side=gi):Wa(M,U,W)}this.compile=function(M,U,W=null){W===null&&(W=M),w=J.get(W),w.init(U),R.push(w),W.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),M!==W&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ae=V.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const ce=ae[fe];Nf(ce,W,V),H.add(ce)}else Nf(ae,W,V),H.add(ae)}),w=R.pop(),H},this.compileAsync=function(M,U,W=null){const H=this.compile(M,U,W);return new Promise(V=>{function ae(){if(H.forEach(function(fe){v.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){V(M);return}setTimeout(ae,10)}rt.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let zl=null;function G1(M){zl&&zl(M)}function Uf(){Hs.stop()}function Ff(){Hs.start()}const Hs=new Mg;Hs.setAnimationLoop(G1),typeof self<"u"&&Hs.setContext(self),this.setAnimationLoop=function(M){zl=M,X.setAnimationLoop(M),M===null?Hs.stop():Hs.start()},X.addEventListener("sessionstart",Uf),X.addEventListener("sessionend",Ff),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const W=X.enabled===!0&&X.isPresenting===!0,H=x!==null&&(O===null||W)&&x.begin(E,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,U,O),w=J.get(M,R.length),w.init(U),R.push(w),nn.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),We.setFromProjectionMatrix(nn,Bi,U.reversedDepth),ke=this.localClippingEnabled,Ue=ee.init(this.clippingPlanes,ke),b=Oe.get(M,T.length),b.init(),T.push(b),X.enabled===!0&&X.isPresenting===!0){const fe=E.xr.getDepthSensingMesh();fe!==null&&Vl(fe,U,-1/0,E.sortObjects)}Vl(M,U,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(bt,St),qe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,qe&&xe.addToRenderList(b,M),this.info.render.frame++,Ue===!0&&ee.beginShadows();const V=w.state.shadowsArray;if(_e.render(V,M,U),Ue===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&x.hasRenderPass())===!1){const fe=b.opaque,ce=b.transmissive;if(w.setupLights(),U.isArrayCamera){const ye=U.cameras;if(ce.length>0)for(let Te=0,He=ye.length;Te<He;Te++){const Ke=ye[Te];Bf(fe,ce,M,Ke)}qe&&xe.render(M);for(let Te=0,He=ye.length;Te<He;Te++){const Ke=ye[Te];Of(b,M,Ke,Ke.viewport)}}else ce.length>0&&Bf(fe,ce,M,U),qe&&xe.render(M),Of(b,M,U)}O!==null&&D===0&&(N.updateMultisampleRenderTarget(O),N.updateRenderTargetMipmap(O)),H&&x.end(E),M.isScene===!0&&M.onAfterRender(E,M,U),te.resetDefaultState(),z=-1,B=null,R.pop(),R.length>0?(w=R[R.length-1],Ue===!0&&ee.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function Vl(M,U,W,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||We.intersectsSprite(M)){H&&at.setFromMatrixPosition(M.matrixWorld).applyMatrix4(nn);const fe=ge.update(M),ce=M.material;ce.visible&&b.push(M,fe,ce,W,at.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||We.intersectsObject(M))){const fe=ge.update(M),ce=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),at.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),at.copy(fe.boundingSphere.center)),at.applyMatrix4(M.matrixWorld).applyMatrix4(nn)),Array.isArray(ce)){const ye=fe.groups;for(let Te=0,He=ye.length;Te<He;Te++){const Ke=ye[Te],Re=ce[Ke.materialIndex];Re&&Re.visible&&b.push(M,fe,Re,W,at.z,Ke)}}else ce.visible&&b.push(M,fe,ce,W,at.z,null)}}const ae=M.children;for(let fe=0,ce=ae.length;fe<ce;fe++)Vl(ae[fe],U,W,H)}function Of(M,U,W,H){const{opaque:V,transmissive:ae,transparent:fe}=M;w.setupLightsView(W),Ue===!0&&ee.setGlobalState(E.clippingPlanes,W),H&&Me.viewport(F.copy(H)),V.length>0&&Ha(V,U,W),ae.length>0&&Ha(ae,U,W),fe.length>0&&Ha(fe,U,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Bf(M,U,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){const Re=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Mi(1,1,{generateMipmaps:!0,type:Re?Xi:Gn,minFilter:hs,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const ae=w.state.transmissionRenderTarget[H.id],fe=H.viewport||F;ae.setSize(fe.z*E.transmissionResolutionScale,fe.w*E.transmissionResolutionScale);const ce=E.getRenderTarget(),ye=E.getActiveCubeFace(),Te=E.getActiveMipmapLevel();E.setRenderTarget(ae),E.getClearColor(K),le=E.getClearAlpha(),le<1&&E.setClearColor(16777215,.5),E.clear(),qe&&xe.render(W);const He=E.toneMapping;E.toneMapping=Vi;const Ke=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Ue===!0&&ee.setGlobalState(E.clippingPlanes,H),Ha(M,W,H),N.updateMultisampleRenderTarget(ae),N.updateRenderTargetMipmap(ae),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let ut=0,Ft=U.length;ut<Ft;ut++){const Lt=U[ut],{object:dt,geometry:fn,material:Se,group:Un}=Lt;if(Se.side===gi&&dt.layers.test(H.layers)){const nt=Se.side;Se.side=An,Se.needsUpdate=!0,kf(dt,W,H,fn,Se,Un),Se.side=nt,Se.needsUpdate=!0,Re=!0}}Re===!0&&(N.updateMultisampleRenderTarget(ae),N.updateRenderTargetMipmap(ae))}E.setRenderTarget(ce,ye,Te),E.setClearColor(K,le),Ke!==void 0&&(H.viewport=Ke),E.toneMapping=He}function Ha(M,U,W){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ae=M.length;V<ae;V++){const fe=M[V],{object:ce,geometry:ye,group:Te}=fe;let He=fe.material;He.allowOverride===!0&&H!==null&&(He=H),ce.layers.test(W.layers)&&kf(ce,U,W,ye,He,Te)}}function kf(M,U,W,H,V,ae){M.onBeforeRender(E,U,W,H,V,ae),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(E,U,W,H,M,ae),V.transparent===!0&&V.side===gi&&V.forceSinglePass===!1?(V.side=An,V.needsUpdate=!0,E.renderBufferDirect(W,U,H,V,M,ae),V.side=Hi,V.needsUpdate=!0,E.renderBufferDirect(W,U,H,V,M,ae),V.side=gi):E.renderBufferDirect(W,U,H,V,M,ae),M.onAfterRender(E,U,W,H,V,ae)}function Wa(M,U,W){U.isScene!==!0&&(U=mt);const H=v.get(M),V=w.state.lights,ae=w.state.shadowsArray,fe=V.state.version,ce=ie.getParameters(M,V.state,ae,U,W),ye=ie.getProgramCacheKey(ce);let Te=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const He=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=q.get(M.envMap||H.environment,He),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Te===void 0&&(M.addEventListener("dispose",ct),Te=new Map,H.programs=Te);let Ke=Te.get(ye);if(Ke!==void 0){if(H.currentProgram===Ke&&H.lightsStateVersion===fe)return Vf(M,ce),Ke}else ce.uniforms=ie.getUniforms(M),M.onBeforeCompile(ce,E),Ke=ie.acquireProgram(ce,ye),Te.set(ye,Ke),H.uniforms=ce.uniforms;const Re=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=ee.uniform),Vf(M,ce),H.needsLights=X1(M),H.lightsStateVersion=fe,H.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),H.currentProgram=Ke,H.uniformsList=null,Ke}function zf(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=kc.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Vf(M,U){const W=v.get(M);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function H1(M,U,W,H,V){U.isScene!==!0&&(U=mt),N.resetTextureUnits();const ae=U.fog,fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,ce=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wn,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Te=q.get(H.envMap||fe,ye),He=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ke=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!W.morphAttributes.position,ut=!!W.morphAttributes.normal,Ft=!!W.morphAttributes.color;let Lt=Vi;H.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Lt=E.toneMapping);const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fn=dt!==void 0?dt.length:0,Se=v.get(H),Un=w.state.lights;if(Ue===!0&&(ke===!0||M!==B)){const sn=M===B&&H.id===z;ee.setState(H,M,sn)}let nt=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Un.state.version||Se.outputColorSpace!==ce||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Te||H.fog===!0&&Se.fog!==ae||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==He||Se.vertexTangents!==Ke||Se.morphTargets!==Re||Se.morphNormals!==ut||Se.morphColors!==Ft||Se.toneMapping!==Lt||Se.morphTargetsCount!==fn)&&(nt=!0):(nt=!0,Se.__version=H.version);let di=Se.currentProgram;nt===!0&&(di=Wa(H,U,V));let Ci=!1,Ws=!1,yr=!1;const gt=di.getUniforms(),ln=Se.uniforms;if(Me.useProgram(di.program)&&(Ci=!0,Ws=!0,yr=!0),H.id!==z&&(z=H.id,Ws=!0),Ci||B!==M){Me.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),gt.setValue(I,"projectionMatrix",M.projectionMatrix),gt.setValue(I,"viewMatrix",M.matrixWorldInverse);const ys=gt.map.cameraPosition;ys!==void 0&&ys.setValue(I,et.setFromMatrixPosition(M.matrixWorld)),yt.logarithmicDepthBuffer&&gt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,Ws=!0,yr=!0)}if(Se.needsLights&&(Un.state.directionalShadowMap.length>0&&gt.setValue(I,"directionalShadowMap",Un.state.directionalShadowMap,N),Un.state.spotShadowMap.length>0&&gt.setValue(I,"spotShadowMap",Un.state.spotShadowMap,N),Un.state.pointShadowMap.length>0&&gt.setValue(I,"pointShadowMap",Un.state.pointShadowMap,N)),V.isSkinnedMesh){gt.setOptional(I,V,"bindMatrix"),gt.setOptional(I,V,"bindMatrixInverse");const sn=V.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),gt.setValue(I,"boneTexture",sn.boneTexture,N))}V.isBatchedMesh&&(gt.setOptional(I,V,"batchingTexture"),gt.setValue(I,"batchingTexture",V._matricesTexture,N),gt.setOptional(I,V,"batchingIdTexture"),gt.setValue(I,"batchingIdTexture",V._indirectTexture,N),gt.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&gt.setValue(I,"batchingColorTexture",V._colorsTexture,N));const xs=W.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&ue.update(V,W,di),(Ws||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,gt.setValue(I,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(ln.envMapIntensity.value=U.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=ab()),Ws&&(gt.setValue(I,"toneMappingExposure",E.toneMappingExposure),Se.needsLights&&W1(ln,yr),ae&&H.fog===!0&&Pe.refreshFogUniforms(ln,ae),Pe.refreshMaterialUniforms(ln,H,Be,he,w.state.transmissionRenderTarget[M.id]),kc.upload(I,zf(Se),ln,N)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(kc.upload(I,zf(Se),ln,N),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(I,"center",V.center),gt.setValue(I,"modelViewMatrix",V.modelViewMatrix),gt.setValue(I,"normalMatrix",V.normalMatrix),gt.setValue(I,"modelMatrix",V.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const sn=H.uniformsGroups;for(let ys=0,Mr=sn.length;ys<Mr;ys++){const Gf=sn[ys];pe.update(Gf,di),pe.bind(Gf,di)}}return di}function W1(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function X1(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,U,W){const H=v.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=U,v.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const W=v.get(M);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0};const j1=I.createFramebuffer();this.setRenderTarget=function(M,U=0,W=0){O=M,C=U,D=W;let H=null,V=!1,ae=!1;if(M){const ce=v.get(M);if(ce.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(I.FRAMEBUFFER,ce.__webglFramebuffer),F.copy(M.viewport),G.copy(M.scissor),Z=M.scissorTest,Me.viewport(F),Me.scissor(G),Me.setScissorTest(Z),z=-1;return}else if(ce.__webglFramebuffer===void 0)N.setupRenderTarget(M);else if(ce.__hasExternalTextures)N.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const He=M.depthTexture;if(ce.__boundDepthTexture!==He){if(He!==null&&v.has(He)&&(M.width!==He.image.width||M.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(M)}}const ye=M.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ae=!0);const Te=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Te[U])?H=Te[U][W]:H=Te[U],V=!0):M.samples>0&&N.useMultisampledRTT(M)===!1?H=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Te)?H=Te[W]:H=Te,F.copy(M.viewport),G.copy(M.scissor),Z=M.scissorTest}else F.copy(Y).multiplyScalar(Be).floor(),G.copy(ne).multiplyScalar(Be).floor(),Z=re;if(W!==0&&(H=j1),Me.bindFramebuffer(I.FRAMEBUFFER,H)&&Me.drawBuffers(M,H),Me.viewport(F),Me.scissor(G),Me.setScissorTest(Z),V){const ce=v.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ce.__webglTexture,W)}else if(ae){const ce=U;for(let ye=0;ye<M.textures.length;ye++){const Te=v.get(M.textures[ye]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ye,Te.__webglTexture,W,ce)}}else if(M!==null&&W!==0){const ce=v.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ce.__webglTexture,W)}z=-1},this.readRenderTargetPixels=function(M,U,W,H,V,ae,fe,ce=0){if(!(M&&M.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){Me.bindFramebuffer(I.FRAMEBUFFER,ye);try{const Te=M.textures[ce],He=Te.format,Ke=Te.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ce),!yt.textureFormatReadable(He)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Ke)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&W>=0&&W<=M.height-V&&I.readPixels(U,W,H,V,se.convert(He),se.convert(Ke),ae)}finally{const Te=O!==null?v.get(O).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(M,U,W,H,V,ae,fe,ce=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye)if(U>=0&&U<=M.width-H&&W>=0&&W<=M.height-V){Me.bindFramebuffer(I.FRAMEBUFFER,ye);const Te=M.textures[ce],He=Te.format,Ke=Te.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ce),!yt.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,ae.byteLength,I.STREAM_READ),I.readPixels(U,W,H,V,se.convert(He),se.convert(Ke),0);const ut=O!==null?v.get(O).__webglFramebuffer:null;Me.bindFramebuffer(I.FRAMEBUFFER,ut);const Ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ov(I,Ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ae),I.deleteBuffer(Re),I.deleteSync(Ft),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,W=0){const H=Math.pow(2,-W),V=Math.floor(M.image.width*H),ae=Math.floor(M.image.height*H),fe=U!==null?U.x:0,ce=U!==null?U.y:0;N.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,fe,ce,V,ae),Me.unbindTexture()};const q1=I.createFramebuffer(),Y1=I.createFramebuffer();this.copyTextureToTexture=function(M,U,W=null,H=null,V=0,ae=0){let fe,ce,ye,Te,He,Ke,Re,ut,Ft;const Lt=M.isCompressedTexture?M.mipmaps[ae]:M.image;if(W!==null)fe=W.max.x-W.min.x,ce=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,Te=W.min.x,He=W.min.y,Ke=W.isBox3?W.min.z:0;else{const ln=Math.pow(2,-V);fe=Math.floor(Lt.width*ln),ce=Math.floor(Lt.height*ln),M.isDataArrayTexture?ye=Lt.depth:M.isData3DTexture?ye=Math.floor(Lt.depth*ln):ye=1,Te=0,He=0,Ke=0}H!==null?(Re=H.x,ut=H.y,Ft=H.z):(Re=0,ut=0,Ft=0);const dt=se.convert(U.format),fn=se.convert(U.type);let Se;U.isData3DTexture?(N.setTexture3D(U,0),Se=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(N.setTexture2DArray(U,0),Se=I.TEXTURE_2D_ARRAY):(N.setTexture2D(U,0),Se=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Un=I.getParameter(I.UNPACK_ROW_LENGTH),nt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),di=I.getParameter(I.UNPACK_SKIP_PIXELS),Ci=I.getParameter(I.UNPACK_SKIP_ROWS),Ws=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Te),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke);const yr=M.isDataArrayTexture||M.isData3DTexture,gt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const ln=v.get(M),xs=v.get(U),sn=v.get(ln.__renderTarget),ys=v.get(xs.__renderTarget);Me.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,ys.__webglFramebuffer);for(let Mr=0;Mr<ye;Mr++)yr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(M).__webglTexture,V,Ke+Mr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,v.get(U).__webglTexture,ae,Ft+Mr)),I.blitFramebuffer(Te,He,fe,ce,Re,ut,fe,ce,I.DEPTH_BUFFER_BIT,I.NEAREST);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||v.has(M)){const ln=v.get(M),xs=v.get(U);Me.bindFramebuffer(I.READ_FRAMEBUFFER,q1),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,Y1);for(let sn=0;sn<ye;sn++)yr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ln.__webglTexture,V,Ke+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ln.__webglTexture,V),gt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xs.__webglTexture,ae,Ft+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xs.__webglTexture,ae),V!==0?I.blitFramebuffer(Te,He,fe,ce,Re,ut,fe,ce,I.COLOR_BUFFER_BIT,I.NEAREST):gt?I.copyTexSubImage3D(Se,ae,Re,ut,Ft+sn,Te,He,fe,ce):I.copyTexSubImage2D(Se,ae,Re,ut,Te,He,fe,ce);Me.bindFramebuffer(I.READ_FRAMEBUFFER,null),Me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gt?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Se,ae,Re,ut,Ft,fe,ce,ye,dt,fn,Lt.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Se,ae,Re,ut,Ft,fe,ce,ye,dt,Lt.data):I.texSubImage3D(Se,ae,Re,ut,Ft,fe,ce,ye,dt,fn,Lt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ae,Re,ut,fe,ce,dt,fn,Lt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ae,Re,ut,Lt.width,Lt.height,dt,Lt.data):I.texSubImage2D(I.TEXTURE_2D,ae,Re,ut,fe,ce,dt,fn,Lt);I.pixelStorei(I.UNPACK_ROW_LENGTH,Un),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,di),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ci),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ws),ae===0&&U.generateMipmaps&&I.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&N.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?N.setTextureCube(M,0):M.isData3DTexture?N.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?N.setTexture2DArray(M,0):N.setTexture2D(M,0),Me.unbindTexture()},this.resetState=function(){C=0,D=0,O=null,Me.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const cm={type:"change"},Id={type:"start"},wg={type:"end"},Sc=new Da,lm=new cs,lb=Math.cos(70*qc.DEG2RAD),jt=new P,Rn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Th=1e-6;class hb extends p2{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new xn,this._lastTargetPosition=new P,this._quat=new xn().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bp,this._sphericalDelta=new Bp,this._scale=1,this._panOffset=new P,this._rotateStart=new Ie,this._rotateEnd=new Ie,this._rotateDelta=new Ie,this._panStart=new Ie,this._panEnd=new Ie,this._panDelta=new Ie,this._dollyStart=new Ie,this._dollyEnd=new Ie,this._dollyDelta=new Ie,this._dollyDirection=new P,this._mouse=new Ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=db.bind(this),this._onPointerDown=ub.bind(this),this._onPointerUp=fb.bind(this),this._onContextMenu=yb.bind(this),this._onMouseWheel=gb.bind(this),this._onKeyDown=_b.bind(this),this._onTouchStart=vb.bind(this),this._onTouchMove=xb.bind(this),this._onMouseDown=pb.bind(this),this._onMouseMove=mb.bind(this),this._interceptControlDown=Mb.bind(this),this._interceptControlUp=Sb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cm),this.update(),this.state=ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),s<-Math.PI?s+=Rn:s>Math.PI&&(s-=Rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=jt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Sc.origin.copy(this.object.position),Sc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sc.direction))<lb?this.object.lookAt(this.target):(lm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sc.intersectPlane(lm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Th||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Th||this._lastTargetPosition.distanceToSquared(this.target)>Th?(this.dispatchEvent(cm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rn/60*this.autoRotateSpeed*e:Rn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let r=jt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ie,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ub(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function db(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function fb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wg),this.state=ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ft.DOLLY;break;case Qr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}break;case Qr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Id)}function mb(n){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gb(n){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(n.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(wg))}function _b(n){this.enabled!==!1&&this._handleKeyDown(n)}function vb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case qr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ft.TOUCH_ROTATE;break;case qr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case qr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ft.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Id)}function xb(n){switch(this._trackPointer(n),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ft.NONE}}function yb(n){this.enabled!==!1&&n.preventDefault()}function Mb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bb(){const n=new cb({antialias:!0});n.setSize(window.innerWidth,window.innerHeight);const e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1;n.setPixelRatio(e?1:Math.min(window.devicePixelRatio,2)),n.toneMapping=ld,n.toneMappingExposure=1,document.body.appendChild(n.domElement);let t=null;function i(){n.setSize(window.innerWidth,window.innerHeight),window.__camera&&(window.__camera.aspect=window.innerWidth/window.innerHeight,window.__camera.updateProjectionMatrix())}return window.addEventListener("resize",()=>{i(),clearTimeout(t),t=setTimeout(i,100),setTimeout(i,300),setTimeout(i,500)}),window.addEventListener("orientationchange",()=>{setTimeout(i,100),setTimeout(i,300),setTimeout(i,600)}),n}class ml extends Wt{constructor(){const e=ml.SkyShader,t=new jn({name:e.name,uniforms:Zc.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:An,depthWrite:!1});super(new Vs(1,1,1),t),this.isSky=!0}}ml.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},up:{value:new P(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float time;

		// Cloud noise functions
		float hash( vec2 p ) {
			return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 );
		}

		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			f = f * f * ( 3.0 - 2.0 * f );
			float a = hash( i );
			float b = hash( i + vec2( 1.0, 0.0 ) );
			float c = hash( i + vec2( 0.0, 1.0 ) );
			float d = hash( i + vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
		}

		float fbm( vec2 p ) {
			float value = 0.0;
			float amplitude = 0.5;
			for ( int i = 0; i < 5; i ++ ) {
				value += amplitude * noise( p );
				p *= 2.0;
				amplitude *= 0.5;
			}
			return value;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Multi-octave noise for fluffy clouds
				float cloudNoise = fbm( cloudUV * 1000.0 );
				cloudNoise += 0.5 * fbm( cloudUV * 2000.0 + 3.7 );
				cloudNoise = cloudNoise * 0.5 + 0.5;

				// Apply coverage threshold
				float cloudMask = smoothstep( 1.0 - cloudCoverage, 1.0 - cloudCoverage + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.1 + 0.2 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting based on sun position
				float sunInfluence = dot( direction, vSunDirection ) * 0.5 + 0.5;
				float daylight = max( 0.0, vSunDirection.y * 2.0 );

				// Base cloud color affected by atmosphere
				vec3 atmosphereColor = Lin * 0.04;
				vec3 cloudColor = mix( vec3( 0.3 ), vec3( 1.0 ), daylight );
				cloudColor = mix( cloudColor, atmosphereColor + vec3( 1.0 ), sunInfluence * 0.5 );
				cloudColor *= vSunE * 0.00002;

				// Blend clouds with sky
				texColor = mix( texColor, cloudColor, cloudMask * cloudDensity );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const ki=6e3,Ne=ki/2,Eb=256,Aa=8,Gr=ki/Aa,Ld=900,hm=60,Dd=600,Tb=3,Nd=50,Ab=.3,wb=-15,Rb=-50,Cb=400,Ot=15,Pb=200,um=150,dm=4e3,Ib=20,Lb=80,fm=-9.81,pm=.7,Db=1.225,bc=3.5,Nb=.08,Ub=1.6,mm=2*Math.PI,Fb=.025,Ob=.08,Bb=60,kb=.3,zb=.25,Vb=.6,gm=100,Gb=-80,_m=4,Hb=2,Wb=2.5,Xb=3.5,jb=1,Ec=.7,Rg=600,Cg=5e3,Fu=60,qb=2,Yb=8e3,Kb=5,$b=128;function Zb(n){const e=new up,t=new ml;t.scale.setScalar(45e4),e.add(t);const i=t.material.uniforms;i.turbidity.value=10,i.rayleigh.value=3,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.7;const s=20,r=180,o=qc.degToRad(90-s),a=qc.degToRad(r),c=new P().setFromSphericalCoords(1,o,a);i.sunPosition.value.copy(c);const l=new Du(n);l.compileEquirectangularShader();const h=new up;h.add(t.clone());const u=l.fromScene(h,0,.1,1e3).texture;e.background=u,e.environment=u,l.dispose(),e.add(t);const d=new Le(11587816);e.fog=new bd(d,Rg,Cg);const f=new Jx(16777215,.4);e.add(f);const g=new xg(16777215,1.2);return g.position.copy(c).multiplyScalar(500),e.add(g),e}const vm=1/30;class Jb{constructor(){this._callbacks=[],this._running=!1,this._lastTime=0}onUpdate(e){this._callbacks.push(e)}start(){this._running=!0,this._lastTime=performance.now(),this._tick()}stop(){this._running=!1}_tick(){if(!this._running)return;requestAnimationFrame(()=>this._tick());const e=performance.now();let t=(e-this._lastTime)/1e3;this._lastTime=e,t>vm&&(t=vm);for(const i of this._callbacks)i(t)}}class Qb{constructor(){this.lift=0,this.roll=0,this.pitch=0,this.wingSpread=1,this.source="keyboard",this.forceKeyboard=!1,this.poseAvailable=!1,this.onModeChange=null,this._keys={},this._poseInput=null,window.addEventListener("keydown",e=>{if(this._keys[e.code]=!0,e.code==="KeyT"){this.forceKeyboard=!this.forceKeyboard;const t=this.forceKeyboard?"KEYBOARD":"WEBCAM";console.log(`Input mode: ${t}`);let i=document.getElementById("mode-overlay");i||(i=document.createElement("div"),i.id="mode-overlay",i.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);color:white;font-size:32px;font-family:sans-serif;text-shadow:2px 2px 4px rgba(0,0,0,0.8);pointer-events:none;z-index:200;transition:opacity 0.5s;",document.body.appendChild(i)),i.textContent=`Mode: ${t}`,i.style.opacity="1",setTimeout(()=>{i.style.opacity="0"},1500),this.onModeChange&&this.onModeChange(this.forceKeyboard)}}),window.addEventListener("keyup",e=>{this._keys[e.code]=!1})}setPoseInput(e){this._poseInput=e}update(e){if(!this.forceKeyboard&&this.poseAvailable&&this._poseInput){this.source="pose",this.lift=this._poseInput.flapStrength,this.roll=this._poseInput.roll,this.pitch=this._poseInput.pitch,this.wingSpread=this._poseInput.wingSpread??1;return}this.source="keyboard",this.lift=this._keys.Space?1:0,this.roll=0,(this._keys.KeyA||this._keys.ArrowLeft)&&(this.roll=1),(this._keys.KeyD||this._keys.ArrowRight)&&(this.roll=-1),this._keys.KeyW||this._keys.ArrowUp?(this.wingSpread=0,this.pitch=-.5):this._keys.KeyS||this._keys.ArrowDown?(this.wingSpread=1,this.pitch=.6):(this.wingSpread=1,this.pitch=0)}}class eE{constructor(){this.el=document.createElement("div"),this.el.id="hud",this.el.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      color: white;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      pointer-events: none;
      z-index: 100;
      line-height: 1.6;
    `,document.body.appendChild(this.el),this.flapIndicator=document.createElement("div"),this.flapIndicator.id="flap-indicator",this.flapIndicator.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border: 2px solid rgba(255,255,255,0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      pointer-events: none;
      z-index: 100;
      transition: background 0.2s;
    `,this.flapIndicator.textContent="~",document.body.appendChild(this.flapIndicator),this.hint=document.createElement("div"),this.hint.style.cssText=`
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255,255,255,0.7);
      font-family: sans-serif;
      font-size: 13px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
      pointer-events: none;
      z-index: 100;
      text-align: center;
    `,this.hint.innerHTML="SPACE = Flap &nbsp;|&nbsp; A/D = Turn &nbsp;|&nbsp; W/S = Pitch &nbsp;|&nbsp; F = Toggle Flight Mode",document.body.appendChild(this.hint)}update(e,t=!1,i="keyboard"){const s=Math.round(e.altitude),r=Math.round(e.speed*3.6),o=Math.round((e.yaw*180/Math.PI%360+360)%360),a=Math.round(e.angleOfAttack*180/Math.PI),c=e.isStalling?'<span style="color:#ff4444;font-weight:bold">STALL</span><br>':"",l=i==="pose"?'<span style="color:#44ff44">WEBCAM</span>':'<span style="color:#ffaa44">KEYBOARD</span>';this.el.innerHTML=`
      ${c}
      ${l}<br>
      ALT: ${s}m<br>
      SPD: ${r} km/h<br>
      HDG: ${o}&deg;<br>
      AoA: ${a}&deg;
    `,t?(this.flapIndicator.style.background="rgba(255, 200, 50, 0.5)",this.flapIndicator.textContent="^"):(this.flapIndicator.style.background="transparent",this.flapIndicator.textContent="~")}}const Tc=[{id:"FLAP!",label:"Flap",desc:"Hands up+down",color:"#ffdd00"},{id:"GLIDE",label:"Glide",desc:"Hands above",color:"#66ccff"},{id:"DIVE",label:"Dive",desc:"Hands below",color:"#ff4444"},{id:"CLIMB",label:"Climb",desc:"Arms high",color:"#44ff88"},{id:"TURN LEFT",label:"Turn L",desc:"Left arm up",color:"#ff88ff"},{id:"TURN RIGHT",label:"Turn R",desc:"Right arm up",color:"#ffaa44"}];function tE(n,e,t,i,s,r){const o=e+i/2,a=t+s*.15,c=t+s*.3,l=t+s*.6,h=t+s*.9,u=i*.35;n.lineWidth=2,n.lineCap="round",n.beginPath(),n.arc(o,a,s*.08,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(o,a+s*.08),n.lineTo(o,l),n.stroke(),n.beginPath(),n.moveTo(o,l),n.lineTo(o-i*.15,h),n.moveTo(o,l),n.lineTo(o+i*.15,h),n.stroke();const d=o,f=o;let g,_,m,p;switch(r){case"FLAP!":g=o-u,_=c-s*.15,m=o+u,p=c-s*.15;break;case"GLIDE":g=o-u,_=c,m=o+u,p=c;break;case"DIVE":g=o-u*.7,_=c+s*.15,m=o+u*.7,p=c+s*.15,n.beginPath(),n.moveTo(o,t+s*.02),n.lineTo(o,t+s*.15),n.moveTo(o-3,t+s*.11),n.lineTo(o,t+s*.15),n.lineTo(o+3,t+s*.11),n.stroke();break;case"CLIMB":g=o-u,_=c-s*.1,m=o+u,p=c-s*.1;break;case"TURN LEFT":g=o-u*.7,_=c-s*.25,m=o+u,p=c+s*.05;break;case"TURN RIGHT":g=o-u,_=c+s*.05,m=o+u*.7,p=c-s*.25;break;default:g=o-u,_=c,m=o+u,p=c}if(n.beginPath(),n.moveTo(d,c),n.lineTo(g,_),n.moveTo(f,c),n.lineTo(m,p),n.stroke(),r==="FLAP!"){const y=c-s*.25,S=c+s*.05;for(const b of[-u*.6,u*.6])n.beginPath(),n.moveTo(o+b,S),n.lineTo(o+b,y),n.moveTo(o+b-3,y+5),n.lineTo(o+b,y),n.lineTo(o+b+3,y+5),n.stroke()}}class nE{constructor(e){if(this.video=e,this._currentGesture="GLIDE",this.container=document.createElement("div"),this.container.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 200;
      pointer-events: none;
    `,document.body.appendChild(this.container),this._leftCards=this._createCardColumn(Tc.slice(0,3)),this.container.appendChild(this._leftCards),this._videoContainer=document.createElement("div"),this._videoContainer.style.cssText=`
      width: 220px;
      height: 165px;
      border: 2px solid rgba(255,255,255,0.4);
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      background: rgba(0,0,0,0.5);
    `,e){const t=e.cloneNode();t.srcObject=e.srcObject,t.style.cssText="width:100%;height:100%;object-fit:cover;transform:scaleX(-1);",t.play(),this._videoContainer.appendChild(t)}this.canvas=document.createElement("canvas"),this.canvas.width=220,this.canvas.height=165,this.canvas.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this._videoContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this._videoContainer),this._rightCards=this._createCardColumn(Tc.slice(3,6)),this.container.appendChild(this._rightCards),this._cardElements={},this.container.querySelectorAll("[data-gesture]").forEach(t=>{this._cardElements[t.dataset.gesture]=t})}_createCardColumn(e){const t=document.createElement("div");t.style.cssText="display:flex;flex-direction:column;gap:6px;";for(const i of e){const s=document.createElement("div");s.dataset.gesture=i.id,s.style.cssText=`
        width: 80px;
        height: 70px;
        border: 2px solid rgba(255,255,255,0.2);
        border-radius: 6px;
        background: rgba(0,0,0,0.4);
        padding: 2px;
        transition: border-color 0.2s, background 0.2s;
        position: relative;
      `;const r=document.createElement("canvas");r.width=76,r.height=45,r.style.cssText="width:100%;display:block;";const o=r.getContext("2d");o.strokeStyle="rgba(255,255,255,0.7)",tE(o,0,0,76,45,i.id),s.appendChild(r);const a=document.createElement("div");a.style.cssText=`
        text-align:center;font-size:9px;color:rgba(255,255,255,0.7);
        font-family:sans-serif;line-height:1.1;
      `,a.innerHTML=`<b>${i.label}</b><br>${i.desc}`,s.appendChild(a),t.appendChild(s)}return t}drawSkeleton(e){const t=this.ctx,i=this.canvas.width,s=this.canvas.height;if(t.clearRect(0,0,i,s),!e){t.font="bold 14px sans-serif",t.textAlign="center",t.fillStyle="#ff6666",t.fillText("No tracking",i/2,s/2);return}const r=[[11,13],[13,15],[12,14],[14,16],[11,12],[11,23],[12,24],[23,24]];t.strokeStyle="rgba(0, 255, 128, 0.8)",t.lineWidth=2;for(const[o,a]of r){const c=e[o],l=e[a];!c||!l||(t.beginPath(),t.moveTo((1-c.x)*i,c.y*s),t.lineTo((1-l.x)*i,l.y*s),t.stroke())}for(const o of[15,16]){const a=e[o];if(!a)continue;const c=(a.visibility??1)>.4&&a.x>.01&&a.x<.99;t.fillStyle=c?"rgba(50,255,100,1)":"rgba(255,50,50,1)",t.beginPath(),t.arc((1-a.x)*i,a.y*s,5,0,Math.PI*2),t.fill()}for(const o of[11,12,13,14]){const a=e[o];a&&(t.fillStyle="rgba(255,200,50,0.9)",t.beginPath(),t.arc((1-a.x)*i,a.y*s,3,0,Math.PI*2),t.fill())}}showGesture(e){this._currentGesture=e;for(const[r,o]of Object.entries(this._cardElements))if(r===e){const a=Tc.find(c=>c.id===r);o.style.borderColor=a?a.color:"#fff",o.style.background="rgba(255,255,255,0.15)"}else o.style.borderColor="rgba(255,255,255,0.2)",o.style.background="rgba(0,0,0,0.4)";const t=this.ctx,i=this.canvas.width,s=Tc.find(r=>r.id===e);t.font="bold 16px sans-serif",t.textAlign="center",t.fillStyle=s?s.color:"#fff",t.shadowColor="black",t.shadowBlur=4,t.fillText(e,i/2,20),t.shadowBlur=0}show(){this.container.style.display="flex"}hide(){this.container.style.display="none"}}function Ns(n,e,t){return Math.max(e,Math.min(t,n))}function iE(n,e,t,i,s){return i+(n-e)/(t-e)*(s-i)}function ze(n,e){return n+Math.random()*(e-n)}function sE(n=Ld,e=null){const t=[],i=Math.floor(n*Ab),s=n-i;for(let a=0;a<s;a++)t.push({cx:ze(-Ne,Ne),cz:ze(-Ne,Ne),radius:ze(hm,Dd),height:ze(Tb,Nd)});const r=10+Math.floor(Math.random()*6);for(let a=0;a<r;a++)t.push({cx:ze(-Ne*.7,Ne*.7),cz:ze(-Ne*.7,Ne*.7),radius:ze(80,250),height:ze(100,220)});for(let a=0;a<i;a++)t.push({cx:ze(-Ne,Ne),cz:ze(-Ne,Ne),radius:ze(hm,Cb),height:ze(Rb,wb)});const o=60;for(let a=0;a<o;a++){const c=Math.random()*Math.PI*2,l=Ne*(.55+Math.random()*.35);t.push({cx:Math.cos(c)*l,cz:Math.sin(c)*l,radius:ze(40,180),height:ze(-80,-25)})}return t}function Pg(n,e,t){let i=0;for(const a of t){const c=n-a.cx,l=e-a.cz,h=c*c+l*l,u=a.radius*a.radius,d=1-h/u;d>0&&(i+=a.height*d)}const s=Math.sqrt(n*n+e*e),r=Ne*.55,o=Ne*.9;if(s>r){const a=Math.min((s-r)/(o-r),1),c=1-a*a;i=i*c-(1-c)*30}return i}function rE(n,e=512){console.time("Heightmap cache");const t=new Float32Array(e*e),i=ki/e;for(let r=0;r<e;r++){const o=-Ne+(r+.5)*i;for(let a=0;a<e;a++){const c=-Ne+(a+.5)*i;t[r*e+a]=Pg(c,o,n)}}console.timeEnd("Heightmap cache");function s(r,o){const a=(r+Ne)/i-.5,c=(o+Ne)/i-.5,l=Math.floor(a),h=Math.floor(c),u=a-l,d=c-h,f=Math.max(0,Math.min(l,e-1)),g=Math.max(0,Math.min(l+1,e-1)),_=Math.max(0,Math.min(h,e-1)),m=Math.max(0,Math.min(h+1,e-1)),p=t[_*e+f],y=t[_*e+g],S=t[m*e+f],b=t[m*e+g];return(p*(1-u)+y*u)*(1-d)+(S*(1-u)+b*u)*d}return{get:s,data:t,resolution:e}}let Ou=null;function oE(n){Ou=n}function Dn(n,e,t){return Ou?Ou.get(n,e):Pg(n,e,t)}function aE(n,e,t,i){const s=Math.floor(Eb/Aa),r=new Os(Gr,Gr,s,s);r.rotateX(-Math.PI/2);const o=-Ne+n*Gr+Gr/2,a=-Ne+e*Gr+Gr/2,c=r.attributes.position;for(let d=0;d<c.count;d++){const f=c.getX(d),g=c.getZ(d),_=f+o,m=g+a,p=Dn(_,m,t);c.setY(d,p)}c.needsUpdate=!0,r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere();const l=r.attributes.uv,h=$b/Aa;for(let d=0;d<l.count;d++){const f=l.getX(d),g=l.getY(d);l.setXY(d,(n+f)*h,(e+g)*h)}l.needsUpdate=!0;const u=new Wt(r,i);return u.position.set(o,0,a),u.userData.chunkX=n,u.userData.chunkZ=e,u}function cE(n,e,t){try{const i=JSON.stringify(n),s=new Uint8Array(e.buffer);let r="";for(let a=0;a<s.length;a+=4096)r+=String.fromCharCode.apply(null,s.slice(a,a+4096));const o=btoa(r);localStorage.setItem("world_arcs",i),localStorage.setItem("world_heightmap",o),localStorage.setItem("world_resolution",String(t)),localStorage.setItem("world_version",`${Ld}_${ki}_${Dd}_${Nd}_v8`),console.log("World cached to localStorage")}catch(i){console.warn("Could not cache world:",i.message)}}function lE(){try{const n=`${Ld}_${ki}_${Dd}_${Nd}_v8`;if(localStorage.getItem("world_version")!==n)return null;const e=localStorage.getItem("world_arcs"),t=localStorage.getItem("world_heightmap"),i=parseInt(localStorage.getItem("world_resolution"));if(!e||!t||!i)return null;console.time("Load cached world");const s=JSON.parse(e),r=atob(t),o=new Uint8Array(r.length);for(let c=0;c<r.length;c++)o[c]=r.charCodeAt(c);const a=new Float32Array(o.buffer);return console.timeEnd("Load cached world"),{arcs:s,data:a,resolution:i}}catch(n){return console.warn("Cache load failed:",n.message),null}}function hE(n){let e,t;const i=lE();if(i){console.log("Using cached world!"),e=i.arcs;const o=i.resolution,a=i.data,c=ki/o;t={get(l,h){const u=(l+Ne)/c-.5,d=(h+Ne)/c-.5,f=Math.floor(u),g=Math.floor(d),_=u-f,m=d-g,p=Math.max(0,Math.min(f,o-1)),y=Math.max(0,Math.min(f+1,o-1)),S=Math.max(0,Math.min(g,o-1)),b=Math.max(0,Math.min(g+1,o-1)),w=a[S*o+p],T=a[S*o+y],R=a[b*o+p],x=a[b*o+y];return(w*(1-_)+T*_)*(1-m)+(R*(1-_)+x*_)*m},data:a,resolution:o}}else console.log("Generating new world..."),e=sE(),t=rE(e),cE(e,t.data,t.resolution);oE(t);const s=new Tn;s.name="terrain";const r=[];console.time("Terrain chunks");for(let o=0;o<Aa;o++)for(let a=0;a<Aa;a++){const c=aE(o,a,e,n);s.add(c),r.push(c)}return console.timeEnd("Terrain chunks"),{chunks:r,arcs:e,group:s}}class xm extends Wt{constructor(e,t={}){super(e),this.isWater=!0;const i=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new P(.70707,.70707,0),u=new Le(t.sunColor!==void 0?t.sunColor:16777215),d=new Le(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new P(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Hi,m=t.fog!==void 0?t.fog:!1,p=new cs,y=new P,S=new P,b=new P,w=new Ve,T=new P(0,0,-1),R=new vt,x=new P,E=new P,k=new vt,C=new Ve,D=new _n,O=new Mi(s,r,{type:Xi}),z={name:"MirrorShader",uniforms:Zc.merge([oe.fog,oe.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new Le(8355711)},sunDirection:{value:new P(.70707,.70707,0)},eye:{value:new P},waterColor:{value:new Le(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},B=new jn({name:z.name,uniforms:Zc.clone(z.uniforms),vertexShader:z.vertexShader,fragmentShader:z.fragmentShader,lights:!0,side:_,fog:m});B.uniforms.mirrorSampler.value=O.texture,B.uniforms.textureMatrix.value=C,B.uniforms.alpha.value=a,B.uniforms.time.value=c,B.uniforms.normalSampler.value=l,B.uniforms.sunColor.value=u,B.uniforms.waterColor.value=d,B.uniforms.sunDirection.value=h,B.uniforms.distortionScale.value=g,B.uniforms.eye.value=f,i.material=B,i.onBeforeRender=function(F,G,Z){if(S.setFromMatrixPosition(i.matrixWorld),b.setFromMatrixPosition(Z.matrixWorld),w.extractRotation(i.matrixWorld),y.set(0,0,1),y.applyMatrix4(w),x.subVectors(S,b),x.dot(y)>0)return;x.reflect(y).negate(),x.add(S),w.extractRotation(Z.matrixWorld),T.set(0,0,-1),T.applyMatrix4(w),T.add(b),E.subVectors(S,T),E.reflect(y).negate(),E.add(S),D.position.copy(x),D.up.set(0,1,0),D.up.applyMatrix4(w),D.up.reflect(y),D.lookAt(E),D.far=Z.far,D.updateMatrixWorld(),D.projectionMatrix.copy(Z.projectionMatrix),C.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),C.multiply(D.projectionMatrix),C.multiply(D.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,S),p.applyMatrix4(D.matrixWorldInverse),R.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const K=D.projectionMatrix;k.x=(Math.sign(R.x)+K.elements[8])/K.elements[0],k.y=(Math.sign(R.y)+K.elements[9])/K.elements[5],k.z=-1,k.w=(1+K.elements[10])/K.elements[14],R.multiplyScalar(2/R.dot(k)),K.elements[2]=R.x,K.elements[6]=R.y,K.elements[10]=R.z+1-o,K.elements[14]=R.w,f.setFromMatrixPosition(Z.matrixWorld);const le=F.getRenderTarget(),de=F.xr.enabled,he=F.shadowMap.autoUpdate;i.visible=!1,F.xr.enabled=!1,F.shadowMap.autoUpdate=!1,F.setRenderTarget(O),F.state.buffers.depth.setMask(!0),F.autoClear===!1&&F.clear(),F.render(G,D),i.visible=!0,F.xr.enabled=de,F.shadowMap.autoUpdate=he,F.setRenderTarget(le);const Be=Z.viewport;Be!==void 0&&F.state.viewport(Be)}}}function uE(n){const e=new Os(ki*4,ki*4),t=new xm(e,{textureWidth:512,textureHeight:512,waterNormals:new hl().load("textures/waternormals.jpg",o=>{o.wrapS=Ln,o.wrapT=Ln},void 0,()=>{const o=document.createElement("canvas"),a=512;o.width=a,o.height=a;const c=o.getContext("2d");c.fillStyle="#8080ff",c.fillRect(0,0,a,a);for(let h=0;h<3;h++){const u=[200,400,800][h],d=[20,8,3][h],f=[20,12,6][h];for(let g=0;g<u;g++){const _=Math.random()*a,m=Math.random()*a,p=1+Math.random()*d,y=Math.random()*Math.PI*2,S=128+Math.floor(Math.cos(y)*f),b=128+Math.floor(Math.sin(y)*f),w=c.createRadialGradient(_,m,0,_,m,p);w.addColorStop(0,`rgb(${S}, ${b}, 255)`),w.addColorStop(1,"rgb(128, 128, 255)"),c.fillStyle=w,c.beginPath(),c.arc(_,m,p,0,Math.PI*2),c.fill()}}const l=new Zr(o);l.wrapS=Ln,l.wrapT=Ln,t.material.uniforms.normalSampler.value=l}),sunDirection:new P().copy(n.position).normalize(),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:!1});t.rotation.x=-Math.PI/2,t.position.y=Ot;const i=new xm(new Os(ki*4,ki*4),{textureWidth:512,textureHeight:512,waterNormals:t.material.uniforms.normalSampler.value,sunDirection:new P().copy(n.position).normalize(),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:!1});i.rotation.x=Math.PI/2,i.position.y=Ot-.05;const s=new Tn;s.add(t),s.add(i);function r(o){t.material.uniforms.time.value+=o,i.material.uniforms.time.value+=o}return{mesh:s,update:r}}const Qn=Ne*3;function dE(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.clearRect(0,0,256,256);const i=8+Math.floor(Math.random()*6);for(let s=0;s<i;s++){const r=128+(Math.random()-.5)*256*.5,o=256/2+(Math.random()-.5)*256*.3,a=30+Math.random()*50,c=t.createRadialGradient(r,o,0,r,o,a);c.addColorStop(0,"rgba(255, 255, 255, 0.8)"),c.addColorStop(.5,"rgba(255, 255, 255, 0.3)"),c.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=c,t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill()}return e}function fE(){const n=new Tn;n.name="clouds";const e=[];for(let o=0;o<4;o++){const a=dE(),c=new Zr(a);e.push(c)}const i=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1?Math.floor(um*.3):um;for(let o=0;o<i;o++){const a=e[Math.floor(Math.random()*e.length)],c=new $r({map:a,transparent:!0,opacity:.6+Math.random()*.3,depthWrite:!1}),l=new oa(c),h=ze(120,350);l.scale.set(h,h*.35,1),l.position.set(ze(-Qn,Qn),Pb+ze(-50,80),ze(-Qn,Qn)),n.add(l)}const s=n.children.map(()=>({x:ze(-2,2),z:ze(-1,1)}));function r(o){for(let a=0;a<n.children.length;a++){const c=n.children[a],l=s[a];c.position.x+=l.x*o,c.position.z+=l.z*o,c.position.x>Qn&&(c.position.x=-Qn),c.position.x<-Qn&&(c.position.x=Qn),c.position.z>Qn&&(c.position.z=-Qn),c.position.z<-Qn&&(c.position.z=Qn)}}return{group:n,update:r}}function Ac(n,e){let t=n*374761393+e*668265263;return t=(t^t>>13)*1274126177,(t^t>>16)/2147483648}function ym(n){return n*n*(3-2*n)}function pE(n,e){const t=Math.floor(n),i=Math.floor(e),s=ym(n-t),r=ym(e-i),o=Ac(t,i),a=Ac(t+1,i),c=Ac(t,i+1),l=Ac(t+1,i+1);return o+s*(a-o)+r*(c-o)+s*r*(o-a-c+l)}function Ig(n,e,t=4){let i=0,s=1,r=1,o=0;for(let a=0;a<t;a++)i+=s*pE(n*r,e*r),o+=s,s*=.5,r*=2;return i/o}function Lg(n,e,t,i,s,r,o,a){n.beginPath(),n.moveTo(e-s/2,t),n.lineTo(e-r/2,i),n.lineTo(e+r/2,i),n.lineTo(e+s/2,t),n.closePath(),n.fillStyle=o,n.fill();const c=i-t;for(let l=0;l<15;l++){const h=t+Math.random()*c,u=(h-t)/c,d=s+(r-s)*u,f=e-d/2+Math.random()*d;n.strokeStyle=a,n.lineWidth=.5+Math.random(),n.globalAlpha=.3+Math.random()*.3,n.beginPath(),n.moveTo(f,h),n.lineTo(f+(Math.random()-.5)*2,h+3+Math.random()*6),n.stroke()}n.globalAlpha=1}function Dg(n,e,t,i,s,r){const o=4+Math.floor(Math.random()*4);for(let a=0;a<o;a++){const c=.15+Math.random()*.5,l=t+c*(i-t),h=Math.random()>.5?1:-1,u=s*(.3+Math.random()*.5),d=l-5-Math.random()*15;n.strokeStyle=r,n.lineWidth=1+Math.random()*2,n.globalAlpha=.6,n.beginPath(),n.moveTo(e,l),n.quadraticCurveTo(e+h*u*.6,l-5,e+h*u,d),n.stroke()}n.globalAlpha=1}function In(n,e,t,i,s,r=60){const o=n.createRadialGradient(e+2,t+3,0,e+2,t+3,i*1.05);o.addColorStop(0,"rgba(0, 20, 0, 0.3)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=o,n.beginPath(),n.arc(e+2,t+3,i*1.05,0,Math.PI*2),n.fill();for(let a=0;a<r;a++){const c=Math.random()*Math.PI*2,l=Math.random()*i*.85,h=e+Math.cos(c)*l,u=t+Math.sin(c)*l*.9,d=3+Math.random()*(i*.25),f=s[Math.floor(Math.random()*s.length)];n.fillStyle=f,n.globalAlpha=.6+Math.random()*.4,n.beginPath(),n.arc(h,u,d,0,Math.PI*2),n.fill()}for(let a=0;a<r*.3;a++){const c=-Math.PI*.8+Math.random()*Math.PI*.6,l=Math.random()*i*.7,h=e+Math.cos(c)*l,u=t+Math.sin(c)*l,d=2+Math.random()*(i*.15);n.fillStyle="rgba(120, 200, 80, 0.3)",n.beginPath(),n.arc(h,u,d,0,Math.PI*2),n.fill()}n.globalAlpha=1}function mE(n=256,e=512){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");i.clearRect(0,0,n,e);const s=n/2,r=e*.42,o=e*.98;Lg(i,s,r,o,n*.06,n*.09,"#5a3a1a","#3a2510"),Dg(i,s,r,r+(o-r)*.4,n*.3,"#4a2a12");const a=["rgb(35, 85, 25)","rgb(45, 105, 30)","rgb(55, 120, 35)","rgb(40, 95, 28)","rgb(60, 130, 40)","rgb(30, 75, 20)"];return In(i,s-n*.08,e*.32,n*.28,a,80),In(i,s+n*.1,e*.28,n*.25,a,70),In(i,s,e*.2,n*.22,a,60),In(i,s-n*.05,e*.12,n*.16,a,40),In(i,s+n*.18,e*.35,n*.12,a,25),In(i,s-n*.2,e*.25,n*.1,a,20),t}function gE(n=256,e=512){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");i.clearRect(0,0,n,e);const s=n/2;Lg(i,s,e*.12,e*.98,n*.03,n*.05,"#3a2008","#2a1505");const r=8,o=["rgb(15, 55, 15)","rgb(20, 65, 20)","rgb(25, 75, 25)","rgb(18, 60, 18)","rgb(30, 80, 28)"];for(let a=0;a<r;a++){const c=a/r,l=e*.08+c*e*.6,h=n*.06+(1-c)*n*.2,u=e*.08,d=20+Math.floor((1-c)*15);for(let f=0;f<d;f++){const g=s+(Math.random()-.5)*h*2,_=l+Math.random()*u,m=3+Math.random()*6,p=4+Math.random()*8,y=o[Math.floor(Math.random()*o.length)];i.fillStyle=y,i.globalAlpha=.7+Math.random()*.3,i.beginPath(),i.moveTo(g,_-p),i.lineTo(g-m,_+p*.3),i.lineTo(g+m,_+p*.3),i.closePath(),i.fill()}i.fillStyle=o[a%o.length],i.globalAlpha=.5,i.beginPath(),i.moveTo(s,l-u*.5),i.quadraticCurveTo(s-h*.8,l,s-h,l+u*.6),i.lineTo(s+h,l+u*.6),i.quadraticCurveTo(s+h*.8,l,s,l-u*.5),i.fill()}i.globalAlpha=1;for(let a=0;a<8;a++){const c=s+(Math.random()-.5)*n*.15,l=e*.05+Math.random()*e*.15;i.fillStyle="rgba(220, 230, 240, 0.15)",i.beginPath(),i.arc(c,l,3+Math.random()*5,0,Math.PI*2),i.fill()}return t}function _E(n=256,e=512){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");i.clearRect(0,0,n,e);const s=n/2,r=e*.3,o=e*.98,a=n*.04,c=n*.06;i.beginPath(),i.moveTo(s-a/2,r),i.lineTo(s-c/2,o),i.lineTo(s+c/2,o),i.lineTo(s+a/2,r),i.closePath(),i.fillStyle="#e8e0d0",i.fill();const l=o-r;for(let u=0;u<20;u++){const d=r+Math.random()*l,f=(d-r)/l,g=a+(c-a)*f;i.fillStyle=`rgba(50, 40, 35, ${.2+Math.random()*.4})`;const _=1+Math.random()*2;i.fillRect(s-g/2,d,g,_)}for(let u=0;u<6;u++){const d=r+Math.random()*l,f=(d-r)/l,g=a+(c-a)*f;i.strokeStyle="rgba(180, 170, 155, 0.5)",i.lineWidth=.5,i.beginPath();const _=(Math.random()>.5?1:-1)*(2+Math.random()*3);i.moveTo(s-g/2,d),i.quadraticCurveTo(s-g/2-_,d+5,s-g/2,d+10),i.stroke()}Dg(i,s,r,r+l*.3,n*.2,"#b0a090");const h=["rgb(80, 160, 50)","rgb(90, 175, 60)","rgb(100, 185, 70)","rgb(110, 190, 75)","rgb(70, 145, 45)","rgb(120, 200, 80)"];return In(i,s-n*.06,e*.24,n*.18,h,50),In(i,s+n*.08,e*.2,n*.16,h,45),In(i,s,e*.14,n*.14,h,35),In(i,s+n*.15,e*.28,n*.1,h,20),In(i,s-n*.14,e*.17,n*.08,h,15),t}function vE(n=256,e=256){const t=document.createElement("canvas");t.width=n,t.height=e;const i=t.getContext("2d");i.clearRect(0,0,n,e);const s=n/2,r=e*.55,o=["rgb(30, 70, 18)","rgb(40, 85, 25)","rgb(50, 100, 30)","rgb(35, 78, 22)","rgb(55, 110, 35)","rgb(25, 62, 15)"];In(i,s,r,n*.38,o,100),In(i,s-n*.1,r-e*.05,n*.25,o,50),In(i,s+n*.12,r+e*.03,n*.2,o,40);for(let a=0;a<8;a++){const c=Math.random()*Math.PI*2,l=Math.random()*n*.25,h=s+Math.cos(c)*l,u=r+Math.sin(c)*l*.7;i.fillStyle=Math.random()>.5?`rgba(200, 60, 40, ${.4+Math.random()*.3})`:`rgba(220, 200, 60, ${.3+Math.random()*.3})`,i.beginPath(),i.arc(h,u,1.5+Math.random()*2,0,Math.PI*2),i.fill()}return t}function xE(n=1,e=.8,t="oak"){const i=[],s=n*.5,r=n*.55,o=e*.06,a=new To(o*.7,o,s,5);if(a.translate(0,s/2,0),i.push(a),t==="pine")for(let c=0;c<3;c++){const l=c/3,h=e*(.35-l*.1),u=r*.45,d=new ll(h,u,6);d.translate(0,s+l*r*.35+u*.4,0),i.push(d)}else if(t==="birch"){const c=new ir(e*.25,6,5);c.scale(1,1.4,1),c.translate(0,s+r*.35,0),i.push(c)}else if(t==="bush"){const c=new ir(e*.5,6,4);c.scale(1,.5,1),c.translate(0,n*.25,0),i.push(c)}else{const c=new ir(e*.35,6,5);c.translate(0,s+r*.3,0),i.push(c);const l=new ir(e*.25,5,4);l.translate(e*.1,s+r*.5,e*.05),i.push(l)}return yE(i)}function yE(n){let e=0,t=0;for(const l of n)e+=l.attributes.position.count,t+=l.index?l.index.count:0;const i=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*2),o=[];let a=0;for(const l of n){const h=l.attributes.position,u=l.attributes.normal,d=l.attributes.uv;for(let f=0;f<h.count;f++)i[(a+f)*3]=h.getX(f),i[(a+f)*3+1]=h.getY(f),i[(a+f)*3+2]=h.getZ(f),s[(a+f)*3]=u.getX(f),s[(a+f)*3+1]=u.getY(f),s[(a+f)*3+2]=u.getZ(f),r[(a+f)*2]=d.getX(f),r[(a+f)*2+1]=d.getY(f);if(l.index)for(let f=0;f<l.index.count;f++)o.push(l.index.array[f]+a);a+=h.count}const c=new yn;return c.setAttribute("position",new cn(i,3)),c.setAttribute("normal",new cn(s,3)),c.setAttribute("uv",new cn(r,2)),o.length>0&&c.setIndex(o),c}const Ng=[{name:"oak",genCanvas:mE,geoArgs:[1,.8],heightRange:[0,60],heightScale:[10,18],widthFactor:.8},{name:"pine",genCanvas:gE,geoArgs:[1,.5],heightRange:[15,100],heightScale:[12,22],widthFactor:.5},{name:"birch",genCanvas:_E,geoArgs:[1,.65],heightRange:[10,55],heightScale:[10,16],widthFactor:.65},{name:"bush",genCanvas:()=>vE(256,256),geoArgs:[1,1.5],heightRange:[0,40],heightScale:[3,6],widthFactor:1.5}];function ME(n){return Ng.filter(e=>n>=e.heightRange[0]&&n<=e.heightRange[1])}function SE(n,e=[]){const t={oak:{trunk:5913114,crown:2779934},pine:{trunk:3809288,crown:1722904},birch:{trunk:15261904,crown:5941818},bush:{trunk:4864538,crown:2779674}},i=Ng.map(a=>{const c=t[a.name]||t.oak,l=xE(a.geoArgs[0],a.geoArgs[1],a.name),h=new da({color:c.crown});return{type:a,geo:l,mat:h,transforms:[]}}),r=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1||"ontouchstart"in window?Math.floor(dm*.25):dm;for(let a=0;a<r;a++){const c=ze(-Ne*.9,Ne*.9),l=ze(-Ne*.9,Ne*.9);if(Dn(c,l,n)<Ot+3)continue;const u=Math.floor(ze(Ib,Lb)),d=20+Math.random()*40;for(let f=0;f<u;f++){const g=Math.random()*Math.PI*2,_=Math.random()*d,m=c+Math.cos(g)*_,p=l+Math.sin(g)*_;if(Math.abs(m)>Ne*.95||Math.abs(p)>Ne*.95)continue;const y=Dn(m,p,n);if(y<Ot+3||Ig(m*.01,p*.01,3)<-.2)continue;let b=!1;for(const k of e){const C=m-k.x,D=p-k.z;if(C*C+D*D<(k.r+5)*(k.r+5)){b=!0;break}}if(b)continue;const w=ME(y);if(w.length===0)continue;const T=w[Math.floor(Math.random()*w.length)],R=i.find(k=>k.type.name===T.name),x=ze(T.heightScale[0],T.heightScale[1]),E=x*T.widthFactor+Math.random()*2;R.transforms.push({x:m,y,z:p,height:x,width:E})}}const o=new Tn;o.name="forest";for(const a of i){if(a.transforms.length===0)continue;const c=new Yc(a.geo,a.mat,a.transforms.length);c.name=`trees-${a.type.name}`;const l=new xt;for(let h=0;h<a.transforms.length;h++){const u=a.transforms[h];l.position.set(u.x,u.y,u.z),l.scale.set(u.width,u.height,u.width),l.rotation.y=Math.random()*Math.PI,l.updateMatrix(),c.setMatrixAt(h,l.matrix)}c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,o.add(c)}return o}const bE=400,EE=6,Ah=25,Mm=70,Sm=.25,TE={house:{w:[6,10],h:[5,8],d:[7,12],roofH:[3,5]},barn:{w:[10,14],h:[6,8],d:[14,18],roofH:[4,5]},tower:{w:[4,5],h:[12,18],d:[4,5],roofH:[4,5]},hotel:{w:[15,25],h:[12,22],d:[12,20],roofH:[2,2]},highrise:{w:[10,18],h:[35,70],d:[10,18],roofH:[1,1]}};function bm(n,e,t){const s=Dn(n,e,t),r=Dn(n+2,e,t),o=Dn(n,e+2,t);return Math.sqrt(((r-s)/2)**2+((o-s)/2)**2)}function AE(){const n=new hl;function e(t){const i=n.load(t);return i.wrapS=Ln,i.wrapT=Ln,i.colorSpace=Rt,i}return{brickTex:e("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_006/brick_wall_006_diff_1k.jpg"),concreteTex:e("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/concrete_wall_008/concrete_wall_008_diff_1k.jpg"),roofTex:e("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/roof_tiles/roof_tiles_diff_1k.jpg")}}function wE(n){const{brickTex:e,concreteTex:t,roofTex:i}=AE(),s=new da({map:e}),r=new da({map:t}),o=new da({map:i}),a=new Tn;a.name="buildings";const c=[];for(let m=0;m<bE;m++){const p=ze(-Ne*.75,Ne*.75),y=ze(-Ne*.75,Ne*.75),S=Dn(p,y,n);if(S<Ot+3||S>Mm||bm(p,y,n)>Sm)continue;const b=Ig(p*.01,y*.01,3);if(b>.5)continue;const w=b<-.1,T=w?30+Math.random()*20:15+Math.random()*15,R=Math.floor(ze(w?Ah*.7:EE,Ah));for(let x=0;x<R;x++){const E=p+ze(-T,T),k=y+ze(-T,T),C=Dn(E,k,n);if(C<Ot+3||C>Mm||bm(E,k,n)>Sm)continue;const D=Math.random();let O;w?D<.25?O="house":D<.35?O="barn":D<.5?O="tower":D<.75?O="hotel":O="highrise":D<.55?O="house":D<.75?O="barn":D<.85?O="tower":D<.95?O="hotel":O="highrise";const z=12;let B=!1;for(const de of c){const he=E-de.x,Be=k-de.z;if(he*he+Be*Be<z*z){B=!0;break}}if(B)continue;const F=TE[O],G=ze(F.w[0],F.w[1]),Z=ze(F.h[0],F.h[1]),K=ze(F.d[0],F.d[1]),le=ze(F.roofH[0],F.roofH[1]);c.push({x:E,y:C+.2,z:k,rot:Math.random()*Math.PI*2,bw:G,bh:Z,bd:K,rh:le,type:O})}}const l=new Set(["hotel","highrise"]),h=c.filter(m=>!l.has(m.type)),u=c.filter(m=>l.has(m.type)),d=new Vs(1,1,1),f=new ll(1,1,4);f.rotateY(Math.PI/4);function g(m,p,y){if(m.length===0)return;const S=new Yc(d,p,m.length);S.name=`${y}-walls`;const b=new Yc(f,o,m.length);b.name=`${y}-roofs`;const w=new xt;for(let T=0;T<m.length;T++){const R=m[T];w.position.set(R.x,R.y+R.bh/2,R.z),w.rotation.set(0,R.rot,0),w.scale.set(R.bw,R.bh,R.bd),w.updateMatrix(),S.setMatrixAt(T,w.matrix),w.position.set(R.x,R.y+R.bh+R.rh/2,R.z),w.scale.set(R.bw*.75,R.rh,R.bd*.75),w.updateMatrix(),b.setMatrixAt(T,w.matrix)}S.instanceMatrix.needsUpdate=!0,b.instanceMatrix.needsUpdate=!0,S.frustumCulled=!1,b.frustumCulled=!1,a.add(S),a.add(b)}g(h,s,"traditional"),g(u,r,"modern");const _=c.map(m=>({x:m.x,z:m.z,r:Math.max(m.bw,m.bd)*.7}));return{group:a,positions:_}}function vi(n,e,t,i){const s=new Vs(n,e,t);return new Wt(s,i)}function xi(n,e={}){return new da({color:n,...e})}function wh(n,e,t,i,s,r,o){const c=o*4,l=xi(15788760),h=vi(s,c,r,l);h.position.set(e,t+c/2,i),n.add(h);const u=xi(13404245),d=vi(s+1,.5,r+1,u);d.position.set(e,t+c+.25,i),n.add(d);const f=xi(4487082),g=vi(s*.85,c*.8,.2,f);g.position.set(e,t+c*.45,i-r/2-.1),n.add(g);const _=g.clone();_.position.set(e,t+c*.45,i+r/2+.1),n.add(_);const m=xi(1136042,{emissive:1136042,emissiveIntensity:.3}),p=vi(s*.6,2,.3,m);p.position.set(e,t+c+2,i-r/2-.5),n.add(p)}function Em(n,e,t,i,s,r){const o=xi(2263244,{transparent:!0,opacity:.7}),a=vi(s,1.5,r,o);a.position.set(e,t-.5,i),n.add(a);const c=xi(15658734),l=.5,h=[vi(s+l*2,.3,l,c),vi(s+l*2,.3,l,c),vi(l,.3,r,c),vi(l,.3,r,c)];h[0].position.set(e,t+.15,i-r/2-l/2),h[1].position.set(e,t+.15,i+r/2+l/2),h[2].position.set(e-s/2-l/2,t+.15,i),h[3].position.set(e+s/2+l/2,t+.15,i),h.forEach(u=>n.add(u))}function Rh(n,e,t,i,s,r){const o=xi(14540253),a=vi(3,s,3,o);a.position.set(e,t+s/2,i),n.add(a);const c=xi(r),l=new To(.8,.8,s*1.3,8);l.rotateZ(.4);const h=new Wt(l,c);h.position.set(e+3,t+s*.5,i),n.add(h)}function RE(n,e,t,i,s=8){const r=xi(9136404),o=new To(.2,.35,s,6),a=new Wt(o,r);a.position.set(e,t+s/2,i),n.add(a);const c=xi(2263842),l=new Wt(new ir(2.5,6,4),c);l.position.set(e,t+s+1,i),l.scale.set(1,.6,1),n.add(l)}function CE(n){const e=new Tn,t=n;wh(e,0,t,-15,80,25,8),wh(e,55,t,-15,40,18,5),wh(e,-50,t,-10,35,15,4),Em(e,-5,t,20,30,15),Em(e,30,t,25,12,8),Rh(e,15,t,40,12,2263295),Rh(e,-20,t,38,9,16729156),Rh(e,-35,t,35,6,4513160);for(let s=0;s<6;s++){const r=ze(-40,50),o=ze(10,50);RE(e,r,t,o,6+Math.random()*5)}const i=xi(15658700);for(let s=0;s<8;s++){const r=vi(.8,.3,2,i);r.position.set(ze(-30,40),t+.15,ze(35,48)),r.rotation.y=Math.random()*.3,e.add(r)}return e}function PE(n){const e=new Tn;e.name="hotel-resorts";const t=15,i=[];for(let s=0;s<500&&i.length<t;s++){const r=Math.random()*Math.PI*2,o=Ne*(.15+Math.random()*.45),a=Math.cos(r)*o,c=Math.sin(r)*o,l=Dn(a,c,n);if(l<Ot+2||l>Ot+40)continue;const h=Dn(a+5,c,n),u=Dn(a,c+5,n);if(Math.sqrt(((h-l)/5)**2+((u-l)/5)**2)>.15)continue;let f=!1;for(const _ of i)if(Math.sqrt((a-_.x)**2+(c-_.z)**2)<100){f=!0;break}if(f)continue;const g=CE(l);g.position.set(a,0,c),g.rotation.y=r+Math.PI,e.add(g),i.push({x:a,z:c})}return console.log(`Hotel resorts placed: ${i.length}`),e}function gl(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,{canvas:t,ctx:t.getContext("2d")}}function IE(n){const{canvas:e,ctx:t}=gl(128,64),i=t.createLinearGradient(20,10,20,54);i.addColorStop(0,`hsl(${n}, 80%, 65%)`),i.addColorStop(.5,`hsl(${n}, 90%, 50%)`),i.addColorStop(1,`hsl(${n+20}, 70%, 40%)`),t.fillStyle=i,t.beginPath(),t.ellipse(55,32,35,18,0,0,Math.PI*2),t.fill();for(let s=0;s<5;s++){const r=30+s*12;t.strokeStyle=`hsla(${n+40}, 100%, 80%, 0.4)`,t.lineWidth=2,t.beginPath(),t.moveTo(r,18),t.lineTo(r+3,46),t.stroke()}t.fillStyle=`hsl(${n+10}, 85%, 55%)`,t.beginPath(),t.moveTo(90,32),t.lineTo(120,12),t.lineTo(120,52),t.closePath(),t.fill(),t.fillStyle=`hsla(${n-10}, 70%, 60%, 0.7)`,t.beginPath(),t.ellipse(50,14,15,8,-.3,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(30,28,5,0,Math.PI*2),t.fill(),t.fillStyle="#111",t.beginPath(),t.arc(31,28,2.5,0,Math.PI*2),t.fill();for(let s=0;s<8;s++)t.fillStyle=`hsla(${n+60}, 100%, 90%, ${.3+Math.random()*.4})`,t.beginPath(),t.arc(35+Math.random()*40,20+Math.random()*24,1+Math.random()*2,0,Math.PI*2),t.fill();return e}function LE(){const{canvas:n,ctx:e}=gl(192,64),t=e.createLinearGradient(0,10,0,54);t.addColorStop(0,"#556677"),t.addColorStop(.6,"#445566"),t.addColorStop(1,"#e8e8e8"),e.fillStyle=t,e.beginPath(),e.moveTo(10,32),e.quadraticCurveTo(50,10,120,20),e.lineTo(165,30),e.lineTo(185,15),e.lineTo(180,35),e.lineTo(185,55),e.lineTo(165,38),e.lineTo(120,44),e.quadraticCurveTo(50,54,10,32),e.fill(),e.fillStyle="#445566",e.beginPath(),e.moveTo(80,20),e.lineTo(95,2),e.lineTo(110,20),e.closePath(),e.fill(),e.fillStyle="#111",e.beginPath(),e.arc(28,30,3,0,Math.PI*2),e.fill(),e.strokeStyle="#334455",e.lineWidth=1;for(let i=0;i<3;i++)e.beginPath(),e.moveTo(42+i*5,26),e.lineTo(42+i*5,38),e.stroke();return n}function DE(n){const{canvas:e,ctx:t}=gl(256,96),i=n==="humpback",s=t.createLinearGradient(0,10,0,86);if(s.addColorStop(0,i?"#3a4a5a":"#2a3a4a"),s.addColorStop(.7,i?"#4a5a6a":"#3a4a5a"),s.addColorStop(1,"#8a9aaa"),t.fillStyle=s,t.beginPath(),t.moveTo(15,48),t.quadraticCurveTo(60,12,160,25),t.quadraticCurveTo(200,35,220,40),t.lineTo(250,25),t.lineTo(245,48),t.lineTo(250,70),t.lineTo(220,55),t.quadraticCurveTo(200,60,160,70),t.quadraticCurveTo(60,82,15,48),t.fill(),t.fillStyle=i?"#8a9aaa":"#7a8a9a",t.beginPath(),t.ellipse(100,65,70,15,0,0,Math.PI),t.fill(),t.fillStyle="#111",t.beginPath(),t.arc(35,44,3,0,Math.PI*2),t.fill(),i)for(let r=0;r<6;r++)t.fillStyle="#4a5a6a",t.beginPath(),t.arc(20+r*8,35+Math.random()*8,2+Math.random()*2,0,Math.PI*2),t.fill();return t.fillStyle=i?"#3a4a5a":"#2a3a4a",t.beginPath(),t.ellipse(80,68,i?35:20,8,.2,0,Math.PI*2),t.fill(),e}function NE(n){const{canvas:e,ctx:t}=gl(64,96),i={pink:["#ff69b4","#ff1493","#ff85c8"],green:["#32cd32","#228b22","#7cfc00"],orange:["#ff8c00","#ff6347","#ffa500"],purple:["#9370db","#8a2be2","#ba55d3"],red:["#dc143c","#b22222","#ff4444"]},s=i[n]||i.pink;if(n==="pink"||n==="red"){t.strokeStyle=s[1],t.lineWidth=4,t.lineCap="round",t.beginPath(),t.moveTo(32,90),t.lineTo(32,40),t.stroke();const o=[[32,40,17,20],[32,40,50,15],[32,55,12,38],[32,55,48,42],[32,65,20,55],[32,65,46,50]];for(const[a,c,l,h]of o)t.strokeStyle=s[Math.floor(Math.random()*s.length)],t.lineWidth=2+Math.random()*2,t.beginPath(),t.moveTo(a,c),t.lineTo(l,h),t.stroke(),t.fillStyle=s[0],t.beginPath(),t.arc(l,h,3+Math.random()*3,0,Math.PI*2),t.fill()}else if(n==="green"){t.strokeStyle=s[0],t.lineWidth=3,t.lineCap="round";for(let r=0;r<3;r++){const o=15+r*17;t.strokeStyle=s[r%s.length],t.lineWidth=2+Math.random()*2,t.beginPath(),t.moveTo(o,90);for(let a=85;a>10;a-=10)t.lineTo(o+Math.sin(a*.1+r)*8,a);t.stroke();for(let a=70;a>15;a-=15)t.fillStyle=s[1],t.beginPath(),t.ellipse(o+Math.sin(a*.1+r)*6,a,5,3,Math.sin(a)*.5,0,Math.PI*2),t.fill()}}else{t.fillStyle=s[1],t.fillRect(27,50,10,40);const o=t.createRadialGradient(32,40,0,32,40,25);o.addColorStop(0,s[0]),o.addColorStop(1,s[2]),t.fillStyle=o,t.beginPath(),t.ellipse(32,40,25,18,0,0,Math.PI*2),t.fill();for(let a=0;a<6;a++)t.fillStyle="rgba(255,255,255,0.3)",t.beginPath(),t.arc(32+(Math.random()-.5)*30,35+Math.random()*15,2+Math.random()*3,0,Math.PI*2),t.fill()}return e}class UE{constructor(e,t){this.scene=e,this._arcs=t,this.group=new Tn,this.group.name="underwater",e.add(this.group),this._isUnderwater=!1,this._overlay=null,this._originalFogColor=null,this._originalFogNear=0,this._originalFogFar=0,this._createSeabedArcs(),this._createOverlay(),this._createFish(),this._createWhalesAndSharks(),this._createCoral()}_createSeabedArcs(){this._seabedArcs=[];for(let t=0;t<80;t++){const i=Math.random()*Math.PI*2,s=Ne*(.5+Math.random()*.4);this._seabedArcs.push({cx:Math.cos(i)*s,cz:Math.sin(i)*s,radius:40+Math.random()*150,depth:10+Math.random()*30})}}_getSeabedHeight(e,t){let i=Dn(e,t,this._arcs);if(i<Ot)for(const s of this._seabedArcs){const r=e-s.cx,o=t-s.cz,a=r*r+o*o,c=s.radius*s.radius,l=1-a/c;l>0&&(i-=s.depth*l)}return i}_createOverlay(){this._overlay=document.createElement("div"),this._overlay.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(5,20,50,0.5) 0%, rgba(10,40,80,0.35) 50%, rgba(5,30,60,0.5) 100%);
      pointer-events: none; z-index: 50;
      transition: opacity 0.5s;
      opacity: 0;
    `,document.body.appendChild(this._overlay)}_validOceanPos(e=.85,t=5){for(let i=0;i<80;i++){const s=ze(-Ne*e,Ne*e),r=ze(-Ne*e,Ne*e),o=this._getSeabedHeight(s,r),a=Ot-o;if(a<t)continue;if(Math.sqrt(s*s+r*r)>Ne*.4||a>8)return{x:s,z:r,seabed:o,depth:a}}return null}_validWaterPos(e=.85){for(let t=0;t<50;t++){const i=ze(-Ne*e,Ne*e),s=ze(-Ne*e,Ne*e),r=this._getSeabedHeight(i,s);if(r<Ot-2)return{x:i,z:s,seabed:r}}return null}_createFish(){const t=[0,30,60,180,210,300].map(i=>{const s=new Zr(IE(i));return s.colorSpace=Rt,s});new Os(1,.5),this._fishData=[],this._fishMeshes=[];for(let i=0;i<t.length;i++){const s=new $r({map:t[i],transparent:!0,fog:!1}),r=[],o=800;for(let a=0;a<o*4&&r.length<o;a++){const c=this._validOceanPos(.85,15);if(!c)continue;const l=Math.pow(Math.min(c.depth/30,1),2);if(Math.random()>l)continue;const h=ze(Math.max(c.seabed+1,Ot-c.depth),Ot-1);r.push({...c,y:h})}for(const a of r){const c=new oa(s),l=1+Math.random()*2.5;c.scale.set(l*2,l,1),c.position.set(a.x,a.y,a.z),this.group.add(c),this._fishData.push({obj:c,speed:2+Math.random()*5,dir:Math.random()*Math.PI*2,wobble:Math.random()*6})}}}_createWhalesAndSharks(){const e=new Zr(LE());e.colorSpace=Rt;for(let t=0;t<8;t++){const i=this._validOceanPos(.7,20);if(!i)continue;const s=new $r({map:e,transparent:!0,fog:!1}),r=new oa(s);r.scale.set(12,4,1),r.position.set(i.x,ze(Ot-10,Ot-3),i.z),this.group.add(r),this._fishData.push({obj:r,speed:3+Math.random()*3,dir:Math.random()*Math.PI*2,wobble:Math.random()*6})}for(const t of["humpback","sperm"]){const i=new Zr(DE(t));i.colorSpace=Rt;const s=t==="humpback"?3:2;for(let r=0;r<s;r++){const o=this._validOceanPos(.6,30);if(!o)continue;const a=new $r({map:i,transparent:!0,fog:!1}),c=new oa(a),l=t==="humpback"?25:20;c.scale.set(l,l*.375,1),c.position.set(o.x,ze(Ot-12,Ot-5),o.z),this.group.add(c),this._fishData.push({obj:c,speed:1+Math.random()*1.5,dir:Math.random()*Math.PI*2,wobble:Math.random()*6})}}}_createCoral(){const t=["pink","green","orange","purple","red"].map(i=>{const s=new Zr(NE(i));return s.colorSpace=Rt,s});for(let i=0;i<4e3;i++){const s=this._validWaterPos(.75);if(!s)continue;const r=Ot-s.seabed;if(r<3)continue;const o=Math.min(r/12,1);if(Math.random()>o)continue;const a=Math.floor(Math.random()*t.length),c=new $r({map:t[a],transparent:!0,fog:!1}),l=new oa(c),h=2+Math.random()*5;l.scale.set(h*.7,h,1),l.position.set(s.x,s.seabed+h*.4,s.z),this.group.add(l)}}update(e,t){const i=this._isUnderwater;if(this._isUnderwater=t<Ot,this.group.visible=this._isUnderwater,this._isUnderwater!==i&&(this._overlay.style.opacity=this._isUnderwater?"1":"0",this.scene.fog&&(this._isUnderwater?(this._originalFogColor=this.scene.fog.color.clone(),this._originalFogNear=this.scene.fog.near,this._originalFogFar=this.scene.fog.far,this.scene.fog.color.set(332848),this.scene.fog.near=5,this.scene.fog.far=80):(this.scene.fog.color.copy(this._originalFogColor),this.scene.fog.near=this._originalFogNear,this.scene.fog.far=this._originalFogFar))),this._isUnderwater){const s=Ne*.85;for(const r of this._fishData){r.wobble+=e*2;const o=r.obj;o.position.x+=Math.cos(r.dir)*r.speed*e,o.position.z+=Math.sin(r.dir)*r.speed*e,o.position.y+=Math.sin(r.wobble)*.3*e,Math.random()<.003&&(r.dir+=(Math.random()-.5)*.5),o.position.x>s&&(o.position.x=-s),o.position.x<-s&&(o.position.x=s),o.position.z>s&&(o.position.z=-s),o.position.z<-s&&(o.position.z=s)}}}}const FE=5,OE=4;class Ud{constructor(e,t=0){this.bounds=e,this.depth=t,this.children=null,this.items=[]}insert(e){if(this.bounds.intersectsBox(e.bbox)){if(this.children){for(const t of this.children)t.insert(e);return}this.items.push(e),this.items.length>OE&&this.depth<FE&&this._subdivide()}}queryFrustum(e,t){if(e.intersectsBox(this.bounds))if(this.children)for(const i of this.children)i.queryFrustum(e,t);else for(const i of this.items)t.includes(i.data)||t.push(i.data)}_subdivide(){const e=this.bounds.min,t=this.bounds.max,i=new P().addVectors(e,t).multiplyScalar(.5);this.children=[];for(let s=0;s<2;s++)for(let r=0;r<2;r++)for(let o=0;o<2;o++){const a=new P(s===0?e.x:i.x,r===0?e.y:i.y,o===0?e.z:i.z),c=new P(s===0?i.x:t.x,r===0?i.y:t.y,o===0?i.z:t.z);this.children.push(new Ud(new Ei(a,c),this.depth+1))}for(const s of this.items)for(const r of this.children)r.insert(s);this.items=[]}}class BE{constructor(){const e=new Ei(new P(-Ne,-200,-Ne),new P(Ne,2e3,Ne));this.root=new Ud(e)}insertMesh(e){e.geometry.boundingBox||e.geometry.computeBoundingBox();const t=e.geometry.boundingBox.clone();t.applyMatrix4(e.matrixWorld),t.expandByScalar(50),this.root.insert({bbox:t,data:e})}queryFrustum(e){const t=[];return this.root.queryFrustum(e,t),t}}class kE{constructor(e,t){this.octree=e,this.allChunks=t,this._frustum=new cl,this._projScreenMatrix=new Ve}update(e){this._projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._projScreenMatrix);const t=this.octree.queryFrustum(this._frustum),i=new Set(t);for(const s of this.allChunks)s.visible=i.has(s)}}const zE=`
varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vViewDist;

void main() {
  vUv = uv;
  // World-space normal (NOT view-space!) so slope is camera-independent
  vNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vec4 viewPos = viewMatrix * worldPos;
  vViewDist = length(viewPos.xyz); // linear distance from camera
  gl_Position = projectionMatrix * viewPos;
}
`,VE=`
uniform sampler2D sandTex;
uniform sampler2D grassTex;
uniform sampler2D rockTex;
uniform sampler2D snowTex;
uniform sampler2D forestTex;
uniform sampler2D gravelTex;

uniform float waterLevel;
uniform float sandEnd;
uniform float grassEnd;
uniform float rockEnd;

uniform vec3 sunDirection;
uniform float ambientIntensity;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec2 vUv;
varying vec3 vWorldPos;
varying vec3 vNormal;
varying float vViewDist;

// Hash-based procedural noise (no texture needed)
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f); // smoothstep
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Multi-octave noise for natural variation
float fbmNoise(vec2 p) {
  float v = 0.0;
  v += noise(p * 0.02) * 0.5;
  v += noise(p * 0.05) * 0.3;
  v += noise(p * 0.1) * 0.2;
  return v; // 0..1
}

void main() {
  float h = vWorldPos.y;
  float slope = 1.0 - vNormal.y; // 0 = flat, 1 = vertical cliff

  // Procedural noise for breaking up uniform height bands
  float n = fbmNoise(vWorldPos.xz) * 2.0 - 1.0; // -1..1
  float hNoise = h + n * 10.0; // ±10 units variation on blend thresholds

  // Sample textures at different scales for variety
  vec3 sand = texture2D(sandTex, vUv * 0.5).rgb * vec3(1.3, 1.2, 0.75); // strong warm yellow tint
  vec3 forest = texture2D(forestTex, vUv * 0.9).rgb;
  vec3 grass = texture2D(grassTex, vUv * 1.0).rgb * vec3(0.85, 1.1, 0.75); // boost green channel
  vec3 rock = texture2D(rockTex, vUv * 1.3).rgb;
  vec3 gravel = texture2D(gravelTex, vUv * 1.1).rgb;
  // Snow: mix texture with strong white to ensure it reads as "snow"
  vec3 snowSample = texture2D(snowTex, vUv * 0.4).rgb;
  vec3 snow = mix(vec3(0.95, 0.97, 1.0), snowSample, 0.25); // 75% white + 25% texture detail

  // 5-layer height blending: Sand → Grass → Earth → Rock → Snow
  // Earth zone sits between grass and rock
  float earthEnd = grassEnd + (rockEnd - grassEnd) * 0.5; // midpoint between grass and rock

  float sandFactor  = 1.0 - smoothstep(waterLevel - 5.0, sandEnd + 5.0 + n * 4.0, hNoise);
  float grassFactor = smoothstep(sandEnd - 3.0, sandEnd + 5.0 + n * 2.0, hNoise)
                    * (1.0 - smoothstep(grassEnd - 8.0, grassEnd + 8.0, hNoise));
  float earthFactor = smoothstep(grassEnd - 8.0, grassEnd + 8.0, hNoise)
                    * (1.0 - smoothstep(earthEnd - 5.0, earthEnd + 5.0, hNoise));
  float rockFactor  = smoothstep(earthEnd - 5.0, earthEnd + 5.0, hNoise)
                    * (1.0 - smoothstep(rockEnd - 8.0, rockEnd + 8.0, hNoise));
  float snowFactor  = smoothstep(rockEnd - 8.0, rockEnd + 8.0, hNoise);

  // Steep slopes become rock (below snow line only)
  float slopeRock = smoothstep(0.25, 0.55, slope);
  float belowSnowLine = 1.0 - smoothstep(rockEnd - 5.0, rockEnd + 5.0, h);
  rockFactor = max(rockFactor, slopeRock * 0.7 * belowSnowLine);
  grassFactor *= (1.0 - slopeRock * belowSnowLine);
  earthFactor *= (1.0 - slopeRock * belowSnowLine * 0.5);
  sandFactor *= (1.0 - slopeRock * 0.5);

  // Normalize (fallback to grass if all factors are zero)
  float total = sandFactor + grassFactor + earthFactor + rockFactor + snowFactor;
  if (total < 0.01) {
    grassFactor = 1.0;
    total = 1.0;
  }
  sandFactor /= total;
  grassFactor /= total;
  earthFactor /= total;
  rockFactor /= total;
  snowFactor /= total;

  vec3 color = sand * sandFactor + grass * grassFactor + forest * earthFactor
             + rock * rockFactor + snow * snowFactor;

  // Lambertian lighting
  float NdotL = max(dot(vNormal, sunDirection), 0.0);
  float light = ambientIntensity + (1.0 - ambientIntensity) * NdotL;
  color *= light;

  // Fog — linear view distance (view-angle independent)
  float fogFactor = smoothstep(fogNear, fogFar, vViewDist);
  color = mix(color, fogColor, fogFactor);

  gl_FragColor = vec4(color, 1.0);
}
`;function GE(n,e){return new jn({vertexShader:zE,fragmentShader:VE,uniforms:{sandTex:{value:n.sandTex},grassTex:{value:n.grassTex},rockTex:{value:n.rockTex},snowTex:{value:n.snowTex},forestTex:{value:n.forestTex},gravelTex:{value:n.gravelTex},waterLevel:{value:e.waterLevel},sandEnd:{value:e.sandEnd},grassEnd:{value:e.grassEnd},rockEnd:{value:e.rockEnd},sunDirection:{value:e.sunDirection},ambientIntensity:{value:.6},fogColor:{value:e.fogColor},fogNear:{value:e.fogNear},fogFar:{value:e.fogFar}},side:gi})}const Tm=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1||"ontouchstart"in window;function Hr(n){const e=new hl().load(n);return e.wrapS=Ln,e.wrapT=Ln,e.colorSpace=Rt,e}function HE(n){let e=new P(.4,.6,.2).normalize();n.traverse(S=>{S.isDirectionalLight&&(e=S.position.clone().normalize())});const t=n.fog?n.fog.color:new Le(11587816),i={sandTex:Hr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/sandy_gravel/sandy_gravel_diff_1k.jpg"),grassTex:Hr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/leafy_grass/leafy_grass_diff_1k.jpg"),rockTex:Hr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/rock_boulder_cracked/rock_boulder_cracked_diff_1k.jpg"),snowTex:Hr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/snow_field_aerial/snow_field_aerial_col_1k.jpg"),forestTex:Hr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/forest_ground_04/forest_ground_04_diff_1k.jpg"),gravelTex:Hr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/gravel_floor/gravel_floor_diff_1k.jpg")},s=GE(i,{waterLevel:Ot,sandEnd:Ot+8,grassEnd:35,rockEnd:95,sunDirection:e,fogColor:t,fogNear:Rg,fogFar:Cg});console.time("Terrain");const{chunks:r,arcs:o,group:a}=hE(s);n.add(a),console.timeEnd("Terrain");let c=null;n.traverse(S=>{S.isDirectionalLight&&(c=S)});const l=uE(c);n.add(l.mesh);const h=fE();n.add(h.group),console.time("Houses");const{group:u,positions:d}=wE(o);n.add(u);let f=0;if(u.traverse(S=>{S.isInstancedMesh&&(console.log(`  ${S.name}: ${S.count} instances`),f+=S.count)}),console.log(`Total buildings: ${f}`),console.timeEnd("Houses"),!Tm){const S=PE(o);n.add(S)}console.time("Forest");const g=SE(o,d);n.add(g),console.timeEnd("Forest");const _=Tm?null:new UE(n,o);console.time("Octree");const m=new BE;a.updateMatrixWorld(!0);for(const S of r)m.insertMesh(S);const p=new kE(m,r);console.timeEnd("Octree");function y(S,b,w){l.update(S),h.update(S),p.update(b),_&&_.update(S,w)}return{update:y,arcs:o,terrainChunks:r}}class WE{constructor(){this.position=new P(0,150,0),this.velocity=new P(0,0,10),this.forward=new P(0,0,-1),this.up=new P(0,1,0),this.right=new P(1,0,0),this.yaw=Math.PI,this.pitch=0,this.roll=0,this.speed=10,this.altitude=60,this.angleOfAttack=0,this.liftCoefficient=0,this.isStalling=!1,this.flapPhase=0,this.flapCooldown=0,this.flapStrengthScale=1,this.wingSpread=1}updateVectors(){this.forward.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch)).normalize();const e=new P(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize(),t=new P().crossVectors(e,this.forward).normalize();this.up.copy(t).multiplyScalar(Math.cos(this.roll)).addScaledVector(e,-Math.sin(this.roll)),this.up.normalize(),this.right.crossVectors(this.forward,this.up).normalize(),this.speed=this.velocity.length(),this.altitude=this.position.y}}class XE{constructor(e){this.state=e}flap(e){e>0&&this.state.flapCooldown<=0&&(this.state.flapPhase=kb,this.state.flapStrengthScale=e,this.state.flapCooldown=zb)}applyRoll(e,t){const i=e*jb;this.state.roll+=(i-this.state.roll)*Xb*t,this.state.yaw+=this.state.roll*Hb*t}applyPitch(e,t){const i=e*Ec;this.state.pitch+=(i-this.state.pitch)*Wb*t,this.state.pitch=Ns(this.state.pitch,-Ec-.1,Ec+.1)}_computeAoA(){const e=this.state;if(e.velocity.length()<.5)return 0;const i=e.velocity.clone().normalize(),s=Ns(i.dot(e.forward),-1,1),r=Math.acos(s);return(i.dot(e.up)<0?1:-1)*r}_computeCL(e){return(Math.sign(e)||1)*Math.min(mm*Math.abs(e),Ub)}update(e){const t=this.state;t.updateVectors();const i=t.velocity.length(),s=.5*Db*i*i,r=pm*t.wingSpread;t.angleOfAttack=this._computeAoA();let o=this._computeCL(t.angleOfAttack);t.flapPhase>0&&(o+=Vb),t.liftCoefficient=o,t.isStalling=!1;const a=s*r*Math.abs(o)/bc;if(i>1){const g=t.velocity.clone().normalize(),_=t.up.clone();_.addScaledVector(g,-_.dot(g));const m=_.length();m>.01&&(_.divideScalar(m),t.velocity.addScaledVector(_,a*Math.sign(o)*e))}const c=mm*Nb,l=s*r*c/bc;t.velocity.y+=l*e;const h=Math.max(r,pm*.15),u=Fb+Ob*o*o,d=s*h*u/bc;if(i>.1){const g=t.velocity.clone().normalize().negate();t.velocity.addScaledVector(g,d*e)}if(t.velocity.y+=fm*e,t.flapPhase>0){const g=Bb*(t.flapStrengthScale||1)/bc,_=t.forward.clone();_.y+=.9,_.normalize(),t.velocity.addScaledVector(_,g*e),t.flapPhase-=e}if(t.flapCooldown>0&&(t.flapCooldown-=e),i>2&&t.wingSpread>.5&&t.flapPhase<=0){const g=t.velocity.clone().normalize(),_=Math.asin(Ns(g.y,-.8,.8));t.pitch+=(_-t.pitch)*.8*e}if(t.wingSpread<.5){const g=1-t.wingSpread/.5;t.pitch-=g*15*e,t.pitch=Ns(t.pitch,-Math.PI*.45,Ec),t.velocity.y+=fm*1*g*e;const _=Math.sqrt(t.velocity.x*t.velocity.x+t.velocity.z*t.velocity.z);if(_>5&&t.pitch<-.2){const m=g*3*e,p=_*m;t.velocity.y-=p;const y=Math.max(0,1-m);t.velocity.x*=y,t.velocity.z*=y}t.velocity.addScaledVector(t.forward,8*g*e)}t.altitude<15&&(t.velocity.multiplyScalar(1-1*e),t.velocity.y+=8*e,t.flapPhase>0&&(t.velocity.y+=15*e)),t.velocity.y=Math.max(t.velocity.y,Gb);const f=t.velocity.length();if(f>gm*.7){const g=f/gm,_=Math.pow(g-.7,2)*30;t.velocity.multiplyScalar(1-_*e)}t.position.addScaledVector(t.velocity,e),t.speed=t.velocity.length(),t.altitude=t.position.y}enforceGround(e){if(e<14){const i=Math.max(e,-80)+1;this.state.position.y<i&&(this.state.position.y=i,this.state.velocity.y<0&&(this.state.velocity.y=0));return}const t=e+1;this.state.position.y<t&&(this.state.position.y=t,this.state.velocity.y<0&&(this.state.velocity.y=0),this.state.pitch*=.9,this.state.speed<_m&&this.state.velocity.addScaledVector(this.state.forward,_m))}}class jE{constructor(e,t){this.camera=e,this.state=t,this._pos=new P,this._lookTarget=new P,this._roll=0,this._fov=Fu,this._initialized=!1}update(e){const t=this.state,i=t.position.clone().addScaledVector(t.forward,-15).add(new P(0,Kb,0)),s=t.position.clone();this._initialized||(this._pos.copy(i),this._lookTarget.copy(s),this._initialized=!0);const r=1-Math.exp(-2.5*e),o=1-Math.exp(-3*e);this._pos.lerp(i,r),this._lookTarget.lerp(s,o),this._roll+=(t.roll*.4-this._roll)*r;const a=t.speed/40,c=Fu+Math.max(0,a-1.5)*15;if(this._fov+=(c-this._fov)*r,this.camera.position.copy(this._pos),this.camera.lookAt(this._lookTarget),Math.abs(this._roll)>.001){const l=this.camera.quaternion.clone(),h=new xn().setFromAxisAngle(new P(0,0,1),this._roll);this.camera.quaternion.copy(l).multiply(h)}this.camera.fov=this._fov,this.camera.updateProjectionMatrix()}}function Am(n,e){if(e===Tv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Ru||e===Q0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Ru)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function qE(n){const e=new Map,t=new Map,i=n.clone();return Ug(n,i,function(s,r){e.set(r,s),t.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Ug(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Ug(n.children[i],e.children[i],t)}class Fg extends Co{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new JE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new cT(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new hT(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new wm(t,Ze.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wm(t,Ze.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new uT(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=fa.extractUrlBase(e);o=fa.resolveURL(l,this.path)}else o=fa.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new _g(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Og){try{o[Ze.KHR_BINARY_GLTF]=new dT(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new TT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:o[u]=new $E;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[u]=new fT(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[u]=new pT;break;case Ze.KHR_MESH_QUANTIZATION:o[u]=new mT;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function YE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function kt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KE{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Le(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],wn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new xg(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $x(h),l.distance=u;break;case"spot":l=new Yx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ni(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}}class $E{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return nr}extendParams(e,t,i){const s=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],wn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}}class ZE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class JE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ie(r,r)}return Promise.all(s)}}class QE{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class eT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class tT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,Rt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class nT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class iT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const r=i.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(r[0],r[1],r[2],wn),Promise.all(s)}}class sT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class rT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const r=i.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(r[0],r[1],r[2],wn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,Rt)),Promise.all(s)}}class oT{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class aT{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class cT{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lT{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}}class hT{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}}class wm{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class uT{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const l of s.primitives)if(l.mode!==ii.TRIANGLES&&l.mode!==ii.TRIANGLE_STRIP&&l.mode!==ii.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Ve,m=new P,p=new xn,y=new P(1,1,1),S=new Yc(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),S.setMatrixAt(b,_.compose(m,p,y));for(const b in c)if(b==="_COLOR_0"){const w=c[b];S.instanceColor=new Pu(w.array,w.itemSize,w.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);xt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Og="glTF",ta=12,Rm={JSON:1313821514,BIN:5130562};class dT{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ta),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ta,r=new DataView(e,ta);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Rm.JSON){const l=new Uint8Array(e,ta+o,a);this.content=i.decode(l)}else if(c===Rm.BIN){const l=ta+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=Bu[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Bu[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],f=no[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},a,l,wn,d)})})}}class pT{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mT{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Bg extends Ao{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,y=1-m,S=p-d+u;for(let b=0;b!==a;b++){const w=o[_+b+a],T=o[_+b+c]*h,R=o[g+b+a],x=o[g+b]*h;r[b]=y*w+S*T+m*R+p*x}return r}}const gT=new xn;class _T extends Bg{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return gT.fromArray(r).normalize().toArray(r),r}}const ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cm={9728:qt,9729:Yt,9984:j0,9985:Nc,9986:ra,9987:hs},Pm={33071:Oi,33648:Gc,10497:Ln},Ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vT={CUBICSPLINE:void 0,LINEAR:Ma,STEP:ya},Ph={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new wd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),n.DefaultMaterial}function Zs(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ni(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yT(n,e,t){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function MT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ST(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ih(t.attributes):e=n.indices+":"+Ih(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ih(n.targets[i]);return e}function Ih(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function ku(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ET=new Ve;class TT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new YE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new hl(this.options.manager):this.textureLoader=new Qx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _g(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Zs(r,a,s),Ni(a,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(fa.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ch[s.type],a=no[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new cn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ch[s.type],l=no[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let S=t.cache.get(y);S||(_=new l(a,p*f,s.count*f/h),S=new og(_,f/h),t.cache.add(y,S)),m=new Ea(S,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),m=new cn(_,c,g);if(s.sparse!==void 0){const p=Ch.SCALAR,y=no[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,w=new y(o[1],S,s.sparse.count*p),T=new l(o[2],b,s.sparse.count*c);a!==null&&(m=new cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,x=w.length;R<x;R++){const E=w[R];if(m.setX(E,T[R*c]),c>=2&&m.setY(E,T[R*c+1]),c>=3&&m.setZ(E,T[R*c+2]),c>=4&&m.setW(E,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Cm[d.magFilter]||Yt,h.minFilter=Cm[d.minFilter]||hs,h.wrapS=Pm[d.wrapS]||Ln,h.wrapT=Pm[d.wrapT]||Ln,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Yt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new $t(_);m.needsUpdate=!0,d(m)}),t.load(fa.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ni(u,o),u.userData.mimeType=o.mimeType||bT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new hg,li.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new lg,li.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return wd}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const u=s[Ze.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],wn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gi);const h=r.alphaMode||Ph.OPAQUE;if(h===Ph.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ph.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==nr&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==nr&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==nr){const u=r.emissiveFactor;a.emissive=new Le().setRGB(u[0],u[1],u[2],wn)}return r.emissiveTexture!==void 0&&o!==nr&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Ni(u,r),t.associations.set(u,{materials:e}),r.extensions&&Zs(s,u,r),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Im(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=ST(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Im(new yn,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?xT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const y=l[f];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new yx(_,y):new Wt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?p.geometry=Am(p.geometry,Q0):m.mode===ii.TRIANGLE_FAN&&(p.geometry=Am(p.geometry,Ru));else if(m.mode===ii.LINES)p=new Ax(_,y);else if(m.mode===ii.LINE_STRIP)p=new Ad(_,y);else if(m.mode===ii.LINE_LOOP)p=new wx(_,y);else if(m.mode===ii.POINTS)p=new Rx(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&MT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ni(p,r),m.extensions&&Zs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Zs(s,u[0],r),u[0];const d=new Tn;r.extensions&&Zs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new _n(qc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new dl(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ni(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const d=new Ve;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Td(a,c)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,b=d.length;S<b;S++){const w=d[S],T=f[S],R=g[S],x=_[S],E=m[S];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const k=i._createAnimationTracks(w,T,R,x,E);if(k)for(let C=0;C<k.length;C++)p.push(k[C])}const y=new Lu(r,void 0,p);return Ni(y,s),y})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(i.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ET)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new P().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new cg:l.length>1?h=new Tn:l.length===1?h=l[0]:h=new xt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ni(h,r),r.extensions&&Zs(i,h,r),r.matrix!==void 0){const u=new Ve;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Tn;i.name&&(r.name=s.createUniqueName(i.name)),Ni(r,i),i.extensions&&Zs(t,r,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){const d=c[h];d.parent!==null?r.add(qE(d)):r.add(d)}const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof li||d instanceof $t)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ws[r.path]===ws.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(ws[r.path]){case ws.weights:l=ho;break;case ws.rotation:l=uo;break;case ws.translation:case ws.scale:l=fo;break;default:switch(i.itemSize){case 1:l=ho;break;case 2:case 3:default:l=fo;break}break}const h=s.interpolation!==void 0?vT[s.interpolation]:Ma,u=this._getArrayFromAccessor(i);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+ws[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=ku(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof uo?_T:Bg;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function AT(n,e,t){const i=e.attributes,s=new Ei;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=ku(no[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=ku(no[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new qi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Im(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(const o in i){const a=Bu[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Je.workingColorSpace!==wn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Ni(n,e),AT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?yT(n,e.targets,t):n})}class wT{constructor(e){this._scene=e,this._model=null,this._mixer=null,this._action=null,this._loaded=!1,this._smoothPos=new P,this._smoothQuat=new xn,this._initialized=!1,this._load()}_load(){new Fg().load("models/Stork.glb",t=>{this._model=t.scene,this._model.name="bird-stork",this._model.scale.setScalar(.04),this._model.traverse(i=>{i.isMesh&&(i.castShadow=!1,i.receiveShadow=!1,i.material&&(i.material.envMap=null,i.material.metalness!==void 0&&(i.material.metalness=0),i.material.roughness!==void 0&&(i.material.roughness=.8),i.material.needsUpdate=!0))}),this._scene.add(this._model),t.animations&&t.animations.length>0&&(this._mixer=new yg(this._model),this._action=this._mixer.clipAction(t.animations[0]),this._action.play()),this._loaded=!0,console.log("Stork model loaded")},void 0,t=>{console.warn("Failed to load Stork model:",t)})}update(e,t,i){if(!this._loaded||!this._model)return;const s=e.position.clone();this._initialized||(this._smoothPos.copy(s),this._initialized=!0);const r=1-Math.exp(-5*t);this._smoothPos.lerp(s,r),this._model.position.copy(this._smoothPos);const o=this._smoothPos.clone().add(e.forward),a=new xt;a.position.copy(this._smoothPos),a.lookAt(o),a.rotateZ(-e.roll),this._smoothQuat.slerp(a.quaternion,r),this._model.quaternion.copy(this._smoothQuat),this._mixer&&this._action&&(e.flapPhase>0?(this._action.paused=!1,this._action.timeScale=1.5):e.wingSpread>.7?(this._action.paused=!1,this._action.timeScale=.15):e.wingSpread<.3?(this._action.paused=!1,this._action.timeScale=.3):(this._action.paused=!1,this._action.timeScale=.4),this._mixer.update(t))}}class RT{constructor(e,t=24){this._scene=e,this._count=t,this._boids=[],this._model=null,this._loaded=!1,this._load()}_load(){new Fg().load("models/Stork.glb",t=>{this._model=t.scene,this._animation=t.animations[0]||null;for(let i=0;i<this._count;i++){const s=this._model.clone();s.scale.setScalar(.03),s.traverse(l=>{l.isMesh&&l.material&&(l.material.envMap=null,l.material.metalness!==void 0&&(l.material.metalness=0),l.material.roughness!==void 0&&(l.material.roughness=.8),l.material.needsUpdate=!0)}),this._scene.add(s);let r=null,o=null;this._animation&&(r=new yg(s),o=r.clipAction(this._animation),o.play(),o.time=Math.random()*2,o.timeScale=.8+Math.random()*.4);const a=Math.floor(i/2)+1,c=i%2===0?-1:1;this._boids.push({mesh:s,mixer:r,action:o,formationOffset:new P(c*a*3,(Math.random()-.5)*1.5,-a*2.5),pos:new P,wobble:Math.random()*Math.PI*2,wobbleSpeed:.5+Math.random()*.5,wobbleAmp:.3+Math.random()*.3,initialized:!1})}for(const i of this._boids)i.mesh.visible=!1;this._loaded=!0,this._phase="away",this._phaseTimer=5,this._flyDuration=10,this._awayDuration=20,console.log(`Flock loaded: ${this._count} boids (appear periodically)`)})}update(e,t){if(!this._loaded)return;if(this._phaseTimer-=t,this._phase==="away"&&this._phaseTimer<=0){this._phase="arriving",this._phaseTimer=3;for(const a of this._boids){a.mesh.visible=!0;const c=a.formationOffset.clone();c.z-=80,c.x*=3,c.y+=10+Math.random()*10,a.pos.copy(e.position).add(c),a.initialized=!0}}else if(this._phase==="arriving"&&this._phaseTimer<=0)this._phase="flying",this._phaseTimer=this._flyDuration;else if(this._phase==="flying"&&this._phaseTimer<=0)this._phase="departing",this._phaseTimer=3;else if(this._phase==="departing"&&this._phaseTimer<=0){this._phase="away",this._phaseTimer=this._awayDuration+Math.random()*10;for(const a of this._boids)a.mesh.visible=!1;return}if(this._phase==="away")return;const i=e.position,s=e.forward,r=e.right,o=this._phase==="departing"?(3-this._phaseTimer)/3:0;for(const a of this._boids){const c=a.formationOffset,l=i.clone().addScaledVector(s,c.z).addScaledVector(r,c.x).add(new P(0,c.y,0));o>0&&(l.y+=o*30,l.x+=Math.sign(c.x)*o*40,l.z-=o*50),a.wobble+=a.wobbleSpeed*t,l.x+=Math.sin(a.wobble)*a.wobbleAmp,l.y+=Math.cos(a.wobble*1.3)*a.wobbleAmp*.5;const h=this._phase==="arriving"?1.5:3.5,u=1-Math.exp(-h*t);a.pos.lerp(l,u),a.mesh.position.copy(a.pos);const d=a.pos.clone().add(s);a.mesh.lookAt(d),a.mesh.rotateZ(-e.roll*.6),a.mixer&&(e.flapPhase>0?a.action.timeScale=1.2+Math.random()*.3:e.wingSpread>.7?a.action.timeScale=.15:a.action.timeScale=.4,a.mixer.update(t))}}scatter(){for(const e of this._boids)e.wobbleAmp=2+Math.random()*3,setTimeout(()=>{e.wobbleAmp=.3+Math.random()*.3},2e3)}}class CT{constructor(){this.video=null,this.stream=null,this.ready=!1}async init(){this.video=document.createElement("video"),this.video.setAttribute("playsinline",""),this.video.setAttribute("autoplay",""),this.video.style.display="none",document.body.appendChild(this.video);try{return this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.ready=!0,this.video}catch(e){return console.warn("Webcam access denied or unavailable:",e.message),this.ready=!1,null}}dispose(){this.stream&&this.stream.getTracks().forEach(e=>e.stop()),this.video&&this.video.parentNode&&this.video.parentNode.removeChild(this.video),this.ready=!1}}var po=typeof self<"u"?self:{};function kg(n,e){e:{for(var t=["CLOSURE_FLAGS"],i=po,s=0;s<t.length;s++)if((i=i[t[s]])==null){t=null;break e}t=i}return(n=t&&t[n])!=null?n:e}function Js(){throw Error("Invalid UTF8")}function Lm(n,e){return e=String.fromCharCode.apply(null,e),n==null?e:n+e}let wc,Lh;const PT=typeof TextDecoder<"u";let IT;const LT=typeof TextEncoder<"u";function zg(n){if(LT)n=(IT||(IT=new TextEncoder)).encode(n);else{let t=0;const i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var e=n.charCodeAt(s);if(e<128)i[t++]=e;else{if(e<2048)i[t++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<n.length){const r=n.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[t++]=e>>18|240,i[t++]=e>>12&63|128,i[t++]=e>>6&63|128,i[t++]=63&e|128;continue}s--}e=65533}i[t++]=e>>12|224,i[t++]=e>>6&63|128}i[t++]=63&e|128}}n=t===i.length?i:i.subarray(0,t)}return n}function Vg(n){po.setTimeout(()=>{throw n},0)}var zu,DT=kg(610401301,!1),Dm=kg(748402147,!0);function Nm(){var n=po.navigator;return n&&(n=n.userAgent)?n:""}const Um=po.navigator;function _l(n){return _l[" "](n),n}zu=Um&&Um.userAgentData||null,_l[" "]=function(){};const Gg={};let ca=null;function NT(n){const e=n.length;let t=3*e/4;t%3?t=Math.floor(t):"=.".indexOf(n[e-1])!=-1&&(t="=.".indexOf(n[e-2])!=-1?t-2:t-1);const i=new Uint8Array(t);let s=0;return function(r,o){function a(l){for(;c<r.length;){const h=r.charAt(c++),u=ca[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Hg();let c=0;for(;;){const l=a(-1),h=a(0),u=a(64),d=a(64);if(d===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),d!=64&&o(u<<6&192|d))}}(n,function(r){i[s++]=r}),s!==t?i.subarray(0,s):i}function Hg(){if(!ca){ca={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let t=0;t<5;t++){const i=n.concat(e[t].split(""));Gg[t]=i;for(let s=0;s<i.length;s++){const r=i[s];ca[r]===void 0&&(ca[r]=s)}}}}var UT=typeof Uint8Array<"u",Wg=!(!(DT&&zu&&zu.brands.length>0)&&(Nm().indexOf("Trident")!=-1||Nm().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Fm=/[-_.]/g,FT={"-":"+",_:"/",".":"="};function OT(n){return FT[n]||""}function Xg(n){if(!Wg)return NT(n);n=Fm.test(n)?n.replace(Fm,OT):n,n=atob(n);const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}function Fd(n){return UT&&n!=null&&n instanceof Uint8Array}var mo={};function fr(){return BT||(BT=new Gi(null,mo))}function Od(n){jg(mo);var e=n.g;return(e=e==null||Fd(e)?e:typeof e=="string"?Xg(e):null)==null?e:n.g=e}var Gi=class{h(){return new Uint8Array(Od(this)||0)}constructor(n,e){if(jg(e),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};let BT,kT;function jg(n){if(n!==mo)throw Error("illegal external caller")}function qg(n,e){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=e}function Vu(n){return qg(n=Error(n),"warning"),n}function go(n,e){if(n!=null){var t=kT??(kT={}),i=t[n]||0;i>=e||(t[n]=i+1,qg(n=Error(),"incident"),Vg(n))}}function Io(){return typeof BigInt=="function"}var Lo=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Ki(n,e,t=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?t&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():e}var zT=Ki("jas",void 0,!0),Om=Ki(void 0,"0di"),na=Ki(void 0,"1oa"),Wn=Ki(void 0,Symbol()),VT=Ki(void 0,"0ub"),GT=Ki(void 0,"0ubs"),Gu=Ki(void 0,"0ubsb"),HT=Ki(void 0,"0actk"),_o=Ki("m_m","Pa",!0),Bm=Ki();const Yg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Kg=Object.defineProperties,be=Lo?zT:"Ga";var gr;const km=[];function Na(n,e){Lo||be in n||Kg(n,Yg),n[be]|=e}function tn(n,e){Lo||be in n||Kg(n,Yg),n[be]=e}function Ua(n){return Na(n,34),n}function wa(n){return Na(n,8192),n}tn(km,7),gr=Object.freeze(km);var vo={};function qn(n,e){return e===void 0?n.h!==pr&&!!(2&(0|n.v[be])):!!(2&e)&&n.h!==pr}const pr={};function Bd(n,e){if(n!=null){if(typeof n=="string")n=n?new Gi(n,mo):fr();else if(n.constructor!==Gi)if(Fd(n))n=n.length?new Gi(new Uint8Array(n),mo):fr();else{if(!e)throw Error();n=void 0}}return n}class zm{constructor(e,t,i){this.g=e,this.h=t,this.l=i}next(){const e=this.g.next();return e.done||(e.value=this.h.call(this.l,e.value)),e}[Symbol.iterator](){return this}}var WT=Object.freeze({});function $g(n,e,t){const i=128&e?0:-1,s=n.length;var r;(r=!!s)&&(r=(r=n[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const o=s+(r?-1:0);for(e=128&e?1:0;e<o;e++)t(e-i,n[e]);if(r){n=n[s-1];for(const a in n)!isNaN(a)&&t(+a,n[a])}}var Zg={};function Do(n){return 128&n?Zg:void 0}function vl(n){return n.Na=!0,n}var XT=vl(n=>typeof n=="number"),Vm=vl(n=>typeof n=="string"),jT=vl(n=>typeof n=="boolean"),xl=typeof po.BigInt=="function"&&typeof po.BigInt(0)=="bigint";function Xn(n){var e=n;if(Vm(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(XT(e)&&!Number.isSafeInteger(e))throw Error(String(e));return xl?BigInt(n):n=jT(n)?n?"1":"0":Vm(n)?n.trim()||"0":String(n)}var Hu=vl(n=>xl?n>=YT&&n<=$T:n[0]==="-"?Gm(n,qT):Gm(n,KT));const qT=Number.MIN_SAFE_INTEGER.toString(),YT=xl?BigInt(Number.MIN_SAFE_INTEGER):void 0,KT=Number.MAX_SAFE_INTEGER.toString(),$T=xl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Gm(n,e){if(n.length>e.length)return!1;if(n.length<e.length||n===e)return!0;for(let t=0;t<n.length;t++){const i=n[t],s=e[t];if(i>s)return!1;if(i<s)return!0}}const ZT=typeof Uint8Array.prototype.slice=="function";let JT,wt=0,Gt=0;function Hm(n){const e=n>>>0;wt=e,Gt=(n-e)/4294967296>>>0}function xo(n){if(n<0){Hm(-n);const[e,t]=Vd(wt,Gt);wt=e>>>0,Gt=t>>>0}else Hm(n)}function kd(n){const e=JT||(JT=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+n,!0),Gt=0,wt=e.getUint32(0,!0)}function Jg(n,e){const t=4294967296*e+(n>>>0);return Number.isSafeInteger(t)?t:Ra(n,e)}function QT(n,e){return Xn(Io()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(n>>>0)):Ra(n,e))}function Qg(n,e){return Io()?Xn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(n)))):Xn(zd(n,e))}function Ra(n,e){if(n>>>=0,(e>>>=0)<=2097151)var t=""+(4294967296*e+n);else Io()?t=""+(BigInt(e)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(t=16777215&(n>>>24|e<<8))+6710656*(e=e>>16&65535),t+=8147497*e,e*=2,n>=1e7&&(t+=n/1e7>>>0,n%=1e7),t>=1e7&&(e+=t/1e7>>>0,t%=1e7),t=e+Wm(t)+Wm(n));return t}function Wm(n){return n=String(n),"0000000".slice(n.length)+n}function zd(n,e){if(2147483648&e)if(Io())n=""+(BigInt(0|e)<<BigInt(32)|BigInt(n>>>0));else{const[t,i]=Vd(n,e);n="-"+Ra(t,i)}else n=Ra(n,e);return n}function yl(n){if(n.length<16)xo(Number(n));else if(Io())n=BigInt(n),wt=Number(n&BigInt(4294967295))>>>0,Gt=Number(n>>BigInt(32)&BigInt(4294967295));else{const e=+(n[0]==="-");Gt=wt=0;const t=n.length;for(let i=e,s=(t-e)%6+e;s<=t;i=s,s+=6){const r=Number(n.slice(i,s));Gt*=1e6,wt=1e6*wt+r,wt>=4294967296&&(Gt+=Math.trunc(wt/4294967296),Gt>>>=0,wt>>>=0)}if(e){const[i,s]=Vd(wt,Gt);wt=i,Gt=s}}}function Vd(n,e){return e=~e,n?n=1+~n:e+=1,[n,e]}function Si(n){return Array.prototype.slice.call(n)}const Fa=typeof BigInt=="function"?BigInt.asIntN:void 0,eA=typeof BigInt=="function"?BigInt.asUintN:void 0,mr=Number.isSafeInteger,Ml=Number.isFinite,yo=Math.trunc,tA=Xn(0);function la(n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);return n}function zi(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function Ca(n){if(n!=null&&typeof n!="boolean"){var e=typeof n;throw Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`)}return n}function e_(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}const nA=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Oa(n){switch(typeof n){case"bigint":return!0;case"number":return Ml(n);case"string":return nA.test(n);default:return!1}}function No(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Ml(n)?0|n:void 0}function t_(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return Ml(n)?n>>>0:void 0}function n_(n){const e=n.length;return(n[0]==="-"?e<20||e===20&&n<="-9223372036854775808":e<19||e===19&&n<="9223372036854775807")?n:(yl(n),zd(wt,Gt))}function Gd(n){if(n=yo(n),!mr(n)){xo(n);var e=wt,t=Gt;(n=2147483648&t)&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),n=typeof(e=Jg(e,t))=="number"?n?-e:e:n?"-"+e:e}return n}function i_(n){var e=yo(Number(n));return mr(e)?String(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),n_(n))}function s_(n){var e=yo(Number(n));return mr(e)?Xn(e):((e=n.indexOf("."))!==-1&&(n=n.substring(0,e)),Io()?Xn(Fa(64,BigInt(n))):Xn(n_(n)))}function r_(n){return mr(n)?n=Xn(Gd(n)):(n=yo(n),mr(n)?n=String(n):(xo(n),n=zd(wt,Gt)),n=Xn(n)),n}function Jc(n){const e=typeof n;return n==null?n:e==="bigint"?Xn(Fa(64,n)):Oa(n)?e==="string"?s_(n):r_(n):void 0}function o_(n){if(typeof n!="string")throw Error();return n}function Ba(n){if(n!=null&&typeof n!="string")throw Error();return n}function dn(n){return n==null||typeof n=="string"?n:void 0}function Hd(n,e,t,i){return n!=null&&n[_o]===vo?n:Array.isArray(n)?((i=(t=0|n[be])|32&i|2&i)!==t&&tn(n,i),new e(n)):(t?2&i?((n=e[Om])||(Ua((n=new e).v),n=e[Om]=n),e=n):e=new e:e=void 0,e)}function iA(n,e,t){if(e)e:{if(!Oa(e=n))throw Vu("int64");switch(typeof e){case"string":e=s_(e);break e;case"bigint":e=Xn(Fa(64,e));break e;default:e=r_(e)}}else e=Jc(n);return(n=e)==null?t?tA:void 0:n}const sA={};let rA=function(){try{return _l(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Dh{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,t){return this.g.set(e,t),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,t){return this.g.forEach(e,t)}[Symbol.iterator](){return this.entries()}}const oA=rA?(Object.setPrototypeOf(Dh.prototype,Map.prototype),Object.defineProperties(Dh.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Dh):class extends Map{constructor(){super()}};function Xm(n){return n}function Nh(n){if(2&n.J)throw Error("Cannot mutate an immutable Map")}var ms=class extends oA{constructor(n,e,t=Xm,i=Xm){super(),this.J=0|n[be],this.K=e,this.S=t,this.fa=this.K?aA:i;for(let s=0;s<n.length;s++){const r=n[s],o=t(r[0],!1,!0);let a=r[1];e?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(n){return wa(Array.from(super.entries(),n))}clear(){Nh(this),super.clear()}delete(n){return Nh(this),super.delete(this.S(n,!0,!1))}entries(){if(this.K){var n=super.keys();n=new zm(n,cA,this)}else n=super.entries();return n}values(){if(this.K){var n=super.keys();n=new zm(n,ms.prototype.get,this)}else n=super.values();return n}forEach(n,e){this.K?super.forEach((t,i,s)=>{n.call(e,s.get(i),i,s)}):super.forEach(n,e)}set(n,e){return Nh(this),(n=this.S(n,!0,!1))==null?this:e==null?(super.delete(n),this):super.set(n,this.fa(e,!0,!0,this.K,!1,this.J))}Ma(n){const e=this.S(n[0],!1,!0);n=n[1],n=this.K?n===void 0?null:n:this.fa(n,!1,!0,void 0,!1,this.J),super.set(e,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const e=super.get(n);if(e!==void 0){var t=this.K;return t?((t=this.fa(e,!1,!0,t,this.ra,this.J))!==e&&super.set(n,t),t):e}}[Symbol.iterator](){return this.entries()}};function aA(n,e,t,i,s,r){return n=Hd(n,i,t,r),s&&(n=Xd(n)),n}function cA(n){return[n,this.get(n)]}let lA;function jm(){return lA||(lA=new ms(Ua([]),void 0,void 0,void 0,sA))}function Sl(n){return Wn?n[Wn]:void 0}function Qc(n,e){for(const t in n)!isNaN(t)&&e(n,+t,n[t])}ms.prototype.toJSON=void 0;var Wu=class{};const hA={Ka:!0};function uA(n,e){e<100||go(GT,1)}function bl(n,e,t,i){const s=i!==void 0;i=!!i;var r,o=Wn;!s&&Lo&&o&&(r=n[o])&&Qc(r,uA),o=[];var a=n.length;let c;r=4294967295;let l=!1;const h=!!(64&e),u=h?128&e?0:-1:void 0;1&e||(c=a&&n[a-1],c!=null&&typeof c=="object"&&c.constructor===Object?r=--a:c=void 0,!h||128&e||s||(l=!0,r=r-u+u)),e=void 0;for(var d=0;d<a;d++){let f=n[d];if(f!=null&&(f=t(f,i))!=null)if(h&&d>=r){const g=d-u;(e??(e={}))[g]=f}else o[d]=f}if(c)for(let f in c){if((a=c[f])==null||(a=t(a,i))==null)continue;let g;d=+f,h&&!Number.isNaN(d)&&(g=d+u)<r?o[g]=a:(e??(e={}))[f]=a}return e&&(l?o.push(e):o[r]=e),s&&Wn&&(n=Sl(n))&&n instanceof Wu&&(o[Wn]=function(f){const g=new Wu;return Qc(f,(_,m,p)=>{g[m]=Si(p)}),g.da=f.da,g}(n)),o}function dA(n){return n[0]=Pa(n[0]),n[1]=Pa(n[1]),n}function Pa(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return Hu(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Array.isArray(n)){var e=0|n[be];return n.length===0&&1&e?void 0:bl(n,e,Pa)}if(n!=null&&n[_o]===vo)return a_(n);if(n instanceof Gi){if((e=n.g)==null)n="";else if(typeof e=="string")n=e;else{if(Wg){for(var t="",i=0,s=e.length-10240;i<s;)t+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));t+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(t)}else{t===void 0&&(t=0),Hg(),t=Gg[t],i=Array(Math.floor(e.length/3)),s=t[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],o=e[l+1],a=e[l+2],c=t[r>>2];r=t[(3&r)<<4|o>>4],o=t[(15&o)<<2|a>>6],a=t[63&a],i[h++]=c+r+o+a}switch(c=0,a=s,e.length-l){case 2:a=t[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=t[e>>2]+t[(3&e)<<4|c>>4]+a+s}e=i.join("")}n=n.g=e}return n}return n instanceof ms?n=n.size!==0?n.V(dA):void 0:void 0}return n}let fA,pA;function a_(n){return bl(n=n.v,0|n[be],Pa)}function or(n,e){return c_(n,e[0],e[1])}function c_(n,e,t,i=0){if(n==null){var s=32;t?(n=[t],s|=128):n=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(s=0|n[be],Dm&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&function(){if(Dm)throw Error("carr");go(HT,5)}(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&tn(n,s|i),n;if(t&&(s|=128,t!==n[0]))throw Error("mid");e:{s|=64;var r=(t=n).length;if(r){var o=r-1;const c=t[o];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((o-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in c)(r=+a)<o&&(t[r+e]=c[a],delete c[a]);s=-16760833&s|(1023&o)<<14;break e}}if(e){if((a=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return tn(n,64|s|i),n}function mA(n,e){if(typeof n!="object")return n;if(Array.isArray(n)){var t=0|n[be];return n.length===0&&1&t?void 0:qm(n,t,e)}if(n!=null&&n[_o]===vo)return Ym(n);if(n instanceof ms){if(2&(e=n.J))return n;if(!n.size)return;if(t=Ua(n.V()),n.K)for(n=0;n<t.length;n++){const i=t[n];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[_o]===vo?Ym(s):Array.isArray(s)?qm(s,0|s[be],!!(32&e)):void 0,i[1]=s}return t}return n instanceof Gi?n:void 0}function qm(n,e,t){return 2&e||(!t||4096&e||16&e?n=Uo(n,e,!1,t&&!(16&e)):(Na(n,34),4&e&&Object.freeze(n))),n}function Wd(n,e,t){return n=new n.constructor(e),t&&(n.h=pr),n.m=pr,n}function Ym(n){const e=n.v,t=0|e[be];return qn(n,t)?n:jd(n,e,t)?Wd(n,e):Uo(e,t)}function Uo(n,e,t,i){return i??(i=!!(34&e)),n=bl(n,e,mA,i),i=32,t&&(i|=2),tn(n,e=16769217&e|i),n}function Xd(n){const e=n.v,t=0|e[be];return qn(n,t)?jd(n,e,t)?Wd(n,e,!0):new n.constructor(Uo(e,t,!1)):n}function Fo(n){if(n.h!==pr)return!1;var e=n.v;return Na(e=Uo(e,0|e[be]),2048),n.v=e,n.h=void 0,n.m=void 0,!0}function Oo(n){if(!Fo(n)&&qn(n,0|n.v[be]))throw Error()}function _r(n,e){e===void 0&&(e=0|n[be]),32&e&&!(4096&e)&&tn(n,4096|e)}function jd(n,e,t){return!!(2&t)||!(!(32&t)||4096&t)&&(tn(e,2|t),n.h=pr,!0)}const l_=Xn(0),Rs={};function Ct(n,e,t,i,s){if((e=gs(n.v,e,t,s))!==null||i&&n.m!==pr)return e}function gs(n,e,t,i){if(e===-1)return null;const s=e+(t?0:-1),r=n.length-1;let o,a;if(!(r<1+(t?0:-1))){if(s>=r)if(o=n[r],o!=null&&typeof o=="object"&&o.constructor===Object)t=o[e],a=!0;else{if(s!==r)return;t=o}else t=n[s];if(i&&t!=null){if((i=i(t))==null)return i;if(!Object.is(i,t))return a?o[e]=i:n[s]=i,i}return t}}function pt(n,e,t,i){Oo(n),Zt(n=n.v,0|n[be],e,t,i)}function Zt(n,e,t,i,s){const r=t+(s?0:-1);var o=n.length-1;if(o>=1+(s?0:-1)&&r>=o){const a=n[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[t]=i,e}return r<=o?(n[r]=i,e):(i!==void 0&&(t>=(o=(e??(e=0|n[be]))>>14&1023||536870912)?i!=null&&(n[o+(s?0:-1)]={[t]:i}):n[r]=i),e)}function sr(){return WT===void 0?2:4}function rr(n,e,t,i,s){let r=n.v,o=0|r[be];i=qn(n,o)?1:i,s=!!s||i===3,i===2&&Fo(n)&&(r=n.v,o=0|r[be]);let a=(n=qd(r,e))===gr?7:0|n[be],c=Yd(a,o);var l=!(4&c);if(l){4&c&&(n=Si(n),a=0,c=cr(c,o),o=Zt(r,o,e,n));let h=0,u=0;for(;h<n.length;h++){const d=t(n[h]);d!=null&&(n[u++]=d)}u<h&&(n.length=u),t=-513&(4|c),c=t&=-1025,c&=-4097}return c!==a&&(tn(n,c),2&c&&Object.freeze(n)),h_(n,c,r,o,e,i,l,s)}function h_(n,e,t,i,s,r,o,a){let c=e;return r===1||r===4&&(2&e||!(16&e)&&32&i)?ar(e)||((e|=!n.length||o&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&tn(n,e),Object.freeze(n)):(r===2&&ar(e)&&(n=Si(n),c=0,e=cr(e,i),i=Zt(t,i,s,n)),ar(e)||(a||(e|=16),e!==c&&tn(n,e))),2&e||!(4096&e||16&e)||_r(t,i),n}function qd(n,e,t){return n=gs(n,e,t),Array.isArray(n)?n:gr}function Yd(n,e){return 2&e&&(n|=2),1|n}function ar(n){return!!(2&n)&&!!(4&n)||!!(256&n)}function u_(n){return Bd(n,!0)}function d_(n){n=Si(n);for(let e=0;e<n.length;e++){const t=n[e]=Si(n[e]);Array.isArray(t[1])&&(t[1]=Ua(t[1]))}return wa(n)}function Ps(n,e,t,i){Oo(n),Zt(n=n.v,0|n[be],e,(i==="0"?Number(t)===0:t===i)?void 0:t)}function Bo(n,e,t){if(2&e)throw Error();const i=Do(e);let s=qd(n,t,i),r=s===gr?7:0|s[be],o=Yd(r,e);return(2&o||ar(o)||16&o)&&(o===r||ar(o)||tn(s,o),s=Si(s),r=0,o=cr(o,e),Zt(n,e,t,s,i)),o&=-13,o!==r&&tn(s,o),s}function Uh(n,e){var t=i1;return $d(Kd(n=n.v),n,void 0,t)===e?e:-1}function Kd(n){if(Lo)return n[na]??(n[na]=new Map);if(na in n)return n[na];const e=new Map;return Object.defineProperty(n,na,{value:e}),e}function f_(n,e,t,i,s){const r=Kd(n),o=$d(r,n,e,t,s);return o!==i&&(o&&(e=Zt(n,e,o,void 0,s)),r.set(t,i)),e}function $d(n,e,t,i,s){let r=n.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){const a=i[o];gs(e,a,s)!=null&&(r!==0&&(t=Zt(e,t,r,void 0,s)),r=a)}return n.set(i,r),r}function Zd(n,e,t){let i=0|n[be];const s=Do(i),r=gs(n,t,s);let o;if(r!=null&&r[_o]===vo){if(!qn(r))return Fo(r),r.v;o=r.v}else Array.isArray(r)&&(o=r);if(o){const a=0|o[be];2&a&&(o=Uo(o,a))}return o=or(o,e),o!==r&&Zt(n,i,t,o,s),o}function p_(n,e,t,i,s){let r=!1;if((i=gs(n,i,s,o=>{const a=Hd(o,t,!1,e);return r=a!==o&&a!=null,a}))!=null)return r&&!qn(i)&&_r(n,e),i}function it(n,e,t,i){let s=n.v,r=0|s[be];if((e=p_(s,r,e,t,i))==null)return e;if(r=0|s[be],!qn(n,r)){const o=Xd(e);o!==e&&(Fo(n)&&(s=n.v,r=0|s[be]),r=Zt(s,r,t,e=o,i),_r(s,r))}return e}function m_(n,e,t,i,s,r,o,a){var c=qn(n,t);r=c?1:r,o=!!o||r===3,c=a&&!c,(r===2||c)&&Fo(n)&&(t=0|(e=n.v)[be]);var l=(n=qd(e,s))===gr?7:0|n[be],h=Yd(l,t);if(a=!(4&h)){var u=n,d=t;const f=!!(2&h);f&&(d|=2);let g=!f,_=!0,m=0,p=0;for(;m<u.length;m++){const y=Hd(u[m],i,!1,d);if(y instanceof i){if(!f){const S=qn(y);g&&(g=!S),_&&(_=S)}u[p++]=y}}p<m&&(u.length=p),h|=4,h=_?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(tn(n,h),2&h&&Object.freeze(n)),c&&!(8&h||!n.length&&(r===1||r===4&&(2&h||!(16&h)&&32&t)))){for(ar(h)&&(n=Si(n),h=cr(h,t),t=Zt(e,t,s,n)),i=n,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Xd(u))&&(i[l]=h);c|=8,tn(n,h=c=i.length?4096|c:-4097&c)}return h_(n,h,e,t,s,r,a,o)}function _s(n,e,t){const i=n.v;return m_(n,i,0|i[be],e,t,sr(),!1,!0)}function g_(n){return n==null&&(n=void 0),n}function De(n,e,t,i,s){return pt(n,t,i=g_(i),s),i&&!qn(i)&&_r(n.v),n}function pa(n,e,t,i){e:{var s=i=g_(i);Oo(n);const r=n.v;let o=0|r[be];if(s==null){const a=Kd(r);if($d(a,r,o,t)!==e)break e;a.set(t,0)}else o=f_(r,o,t,e);Zt(r,o,e,s)}i&&!qn(i)&&_r(n.v)}function cr(n,e){return-273&(2&e?2|n:-3&n)}function Jd(n,e,t,i){var s=i;Oo(n),n=m_(n,i=n.v,0|i[be],t,e,2,!0),s=s??new t,n.push(s),e=t=n===gr?7:0|n[be],(s=qn(s))?(t&=-9,n.length===1&&(t&=-4097)):t|=4096,t!==e&&tn(n,t),s||_r(i)}function ci(n,e,t){return No(Ct(n,e,void 0,t))}function Bt(n,e){return Ct(n,e,void 0,void 0,zi)??0}function vs(n,e,t){if(t!=null){if(typeof t!="number"||!Ml(t))throw Vu("int32");t|=0}pt(n,e,t)}function Ce(n,e,t){pt(n,e,la(t))}function Yn(n,e,t){Ps(n,e,Ba(t),"")}function el(n,e,t){{Oo(n);const o=n.v;let a=0|o[be];if(t==null)Zt(o,a,e);else{var i=n=t===gr?7:0|t[be],s=ar(n),r=s||Object.isFrozen(t);for(s||(n=0),r||(t=Si(t),i=0,n=cr(n,a),r=!1),n|=5,n|=(4&n?512&n?512:1024&n?1024:0:void 0)??1024,s=0;s<t.length;s++){const c=t[s],l=o_(c);Object.is(c,l)||(r&&(t=Si(t),i=0,n=cr(n,a),r=!1),t[s]=l)}n!==i&&(r&&(t=Si(t),n=cr(n,a)),tn(t,n)),Zt(o,a,e,t)}}}function El(n,e,t){Oo(n),rr(n,e,dn,2,!0).push(o_(t))}var Wr=class{constructor(n,e,t){if(this.buffer=n,t&&!e)throw Error();this.g=e}};function Qd(n,e){if(typeof n=="string")return new Wr(Xg(n),e);if(Array.isArray(n))return new Wr(new Uint8Array(n),e);if(n.constructor===Uint8Array)return new Wr(n,!1);if(n.constructor===ArrayBuffer)return n=new Uint8Array(n),new Wr(n,!1);if(n.constructor===Gi)return e=Od(n)||new Uint8Array(0),new Wr(e,!0,n);if(n instanceof Uint8Array)return n=n.constructor===Uint8Array?n:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),new Wr(n,!1);throw Error()}function ef(n,e){let t,i=0,s=0,r=0;const o=n.h;let a=n.g;do t=o[a++],i|=(127&t)<<r,r+=7;while(r<32&&128&t);if(r>32)for(s|=(127&t)>>4,r=3;r<32&&128&t;r+=7)t=o[a++],s|=(127&t)<<r;if(lr(n,a),!(128&t))return e(i>>>0,s>>>0);throw Error()}function tf(n){let e=0,t=n.g;const i=t+10,s=n.h;for(;t<i;){const r=s[t++];if(e|=r,(128&r)==0)return lr(n,t),!!(127&e)}throw Error()}function Bs(n){const e=n.h;let t=n.g,i=e[t++],s=127&i;if(128&i&&(i=e[t++],s|=(127&i)<<7,128&i&&(i=e[t++],s|=(127&i)<<14,128&i&&(i=e[t++],s|=(127&i)<<21,128&i&&(i=e[t++],s|=i<<28,128&i&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++]&&128&e[t++])))))throw Error();return lr(n,t),s}function ji(n){return Bs(n)>>>0}function tl(n){var e=n.h;const t=n.g;var i=e[t],s=e[t+1];const r=e[t+2];return e=e[t+3],lr(n,n.g+4),n=2*((s=(i<<0|s<<8|r<<16|e<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:n*(1/0):i==0?1401298464324817e-60*n*s:n*Math.pow(2,i-150)*(s+8388608)}function gA(n){return Bs(n)}function lr(n,e){if(n.g=e,e>n.l)throw Error()}function __(n,e){if(e<0)throw Error();const t=n.g;if((e=t+e)>n.l)throw Error();return n.g=e,t}function v_(n,e){if(e==0)return fr();var t=__(n,e);return n.Y&&n.j?t=n.h.subarray(t,t+e):(n=n.h,t=t===(e=t+e)?new Uint8Array(0):ZT?n.slice(t,e):new Uint8Array(n.subarray(t,e))),t.length==0?fr():new Gi(t,mo)}var Km=[];function x_(n,e,t,i){if(nl.length){const s=nl.pop();return s.o(i),s.g.init(n,e,t,i),s}return new _A(n,e,t,i)}function y_(n){n.g.clear(),n.l=-1,n.h=-1,nl.length<100&&nl.push(n)}function M_(n){var e=n.g;if(e.g==e.l)return!1;n.m=n.g.g;var t=ji(n.g);if(e=t>>>3,!((t&=7)>=0&&t<=5)||e<1)throw Error();return n.l=e,n.h=t,!0}function zc(n){switch(n.h){case 0:n.h!=0?zc(n):tf(n.g);break;case 1:lr(n=n.g,n.g+8);break;case 2:if(n.h!=2)zc(n);else{var e=ji(n.g);lr(n=n.g,n.g+e)}break;case 5:lr(n=n.g,n.g+4);break;case 3:for(e=n.l;;){if(!M_(n))throw Error();if(n.h==4){if(n.l!=e)throw Error();break}zc(n)}break;default:throw Error()}}function ka(n,e,t){const i=n.g.l;var s=ji(n.g);let r=(s=n.g.g+s)-i;if(r<=0&&(n.g.l=s,t(e,n,void 0,void 0,void 0),r=s-n.g.g),r)throw Error();return n.g.g=s,n.g.l=i,e}function nf(n){var e=ji(n.g),t=__(n=n.g,e);if(n=n.h,PT){var i,s=n;(i=Lh)||(i=Lh=new TextDecoder("utf-8",{fatal:!0})),e=t+e,s=t===0&&e===s.length?s:s.subarray(t,e);try{var r=i.decode(s)}catch(a){if(wc===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),wc=!0}catch{wc=!1}}throw!wc&&(Lh=void 0),a}}else{e=(r=t)+e,t=[];let a,c=null;for(;r<e;){var o=n[r++];o<128?t.push(o):o<224?r>=e?Js():(a=n[r++],o<194||(192&a)!=128?(r--,Js()):t.push((31&o)<<6|63&a)):o<240?r>=e-1?Js():(a=n[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=n[r++]))!=128?(r--,Js()):t.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=e-2?Js():(a=n[r++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,Js()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,t.push(55296+(o>>10&1023),56320+(1023&o)))):Js(),t.length>=8192&&(c=Lm(c,t),t.length=0)}r=Lm(c,t)}return r}function S_(n){const e=ji(n.g);return v_(n.g,e)}function Tl(n,e,t){var i=ji(n.g);for(i=n.g.g+i;n.g.g<i;)t.push(e(n.g))}var _A=class{constructor(n,e,t,i){if(Km.length){const s=Km.pop();s.init(n,e,t,i),n=s}else n=new class{constructor(s,r,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,o,a)}init(s,r,o,{Y:a=!1,ea:c=!1}={}){this.Y=a,this.ea=c,s&&(s=Qd(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(n,e,t,i);this.g=n,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:n=!1}={}){this.ha=n}},nl=[];function $m(n){return n?/^\d+$/.test(n)?(yl(n),new Xu(wt,Gt)):null:vA||(vA=new Xu(0,0))}var Xu=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let vA;function Zm(n){return n?/^-?\d+$/.test(n)?(yl(n),new ju(wt,Gt)):null:xA||(xA=new ju(0,0))}var ju=class{constructor(n,e){this.h=n>>>0,this.g=e>>>0}};let xA;function io(n,e,t){for(;t>0||e>127;)n.g.push(127&e|128),e=(e>>>7|t<<25)>>>0,t>>>=7;n.g.push(e)}function ko(n,e){for(;e>127;)n.g.push(127&e|128),e>>>=7;n.g.push(e)}function Al(n,e){if(e>=0)ko(n,e);else{for(let t=0;t<9;t++)n.g.push(127&e|128),e>>=7;n.g.push(1)}}function sf(n){var e=wt;n.g.push(e>>>0&255),n.g.push(e>>>8&255),n.g.push(e>>>16&255),n.g.push(e>>>24&255)}function Mo(n,e){e.length!==0&&(n.l.push(e),n.h+=e.length)}function hi(n,e,t){ko(n.g,8*e+t)}function rf(n,e){return hi(n,e,2),e=n.g.end(),Mo(n,e),e.push(n.h),e}function of(n,e){var t=e.pop();for(t=n.h+n.g.length()-t;t>127;)e.push(127&t|128),t>>>=7,n.h++;e.push(t),n.h++}function wl(n,e,t){hi(n,e,2),ko(n.g,t.length),Mo(n,n.g.end()),Mo(n,t)}function il(n,e,t,i){t!=null&&(e=rf(n,e),i(t,n),of(n,e))}function $i(){const n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var af=$i(),b_=$i(),cf=$i(),lf=$i(),hf=$i(),E_=$i(),yA=$i(),Rl=$i(),T_=$i(),A_=$i();function Zi(n,e,t){var i=n.v;Wn&&Wn in i&&(i=i[Wn])&&delete i[e.g],e.h?e.j(n,e.h,e.g,t,e.l):e.j(n,e.g,t,e.l)}var Ee=class{constructor(n,e){this.v=c_(n,e,void 0,2048)}toJSON(){return a_(this)}j(){var s;var n=tw,e=this.v,t=n.g,i=Wn;if(Lo&&i&&((s=e[i])==null?void 0:s[t])!=null&&go(VT,3),e=n.g,Bm&&Wn&&Bm===void 0&&(i=(t=this.v)[Wn])&&(i=i.da))try{i(t,e,hA)}catch(r){Vg(r)}return n.h?n.m(this,n.h,n.g,n.l):n.m(this,n.g,n.defaultValue,n.l)}clone(){const n=this.v,e=0|n[be];return jd(this,n,e)?Wd(this,n,!0):new this.constructor(Uo(n,e,!1))}};Ee.prototype[_o]=vo,Ee.prototype.toString=function(){return this.v.toString()};var zo=class{constructor(n,e,t){this.g=n,this.h=e,n=af,this.l=!!n&&t===n||!1}};function Cl(n,e){return new zo(n,e,af)}function w_(n,e,t,i,s){il(n,t,I_(e,i),s)}const MA=Cl(function(n,e,t,i,s){return n.h===2&&(ka(n,Zd(e,i,t),s),!0)},w_),SA=Cl(function(n,e,t,i,s){return n.h===2&&(ka(n,Zd(e,i,t),s),!0)},w_);var Pl=Symbol(),Il=Symbol(),qu=Symbol(),Jm=Symbol(),Qm=Symbol();let R_,C_;function vr(n,e,t,i){var s=i[n];if(s)return s;(s={}).qa=i,s.T=function(u){switch(typeof u){case"boolean":return fA||(fA=[0,void 0,!0]);case"number":return u>0?void 0:u===0?pA||(pA=[0,void 0]):[-u,void 0];case"string":return[0,u];case"object":return u}}(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++o])=="function"&&(s.ma=!0,R_??(R_=r),C_??(C_=i[o+1]),r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof zo?u=r:(u=MA,o--),u==null?void 0:u.l){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){const d=a[c];l?t(s,c,u,l,d):e(s,c,u,d)}}return i[n]=s}function P_(n){return Array.isArray(n)?n[0]instanceof zo?n:[SA,n]:[n,void 0]}function I_(n,e){return n instanceof Ee?n.v:Array.isArray(n)?or(n,e):void 0}function uf(n,e,t,i){const s=t.g;n[e]=i?(r,o,a)=>s(r,o,a,i):s}function df(n,e,t,i,s){const r=t.g;let o,a;n[e]=(c,l,h)=>r(c,l,h,a||(a=vr(Il,uf,df,i).T),o||(o=ff(i)),s)}function ff(n){let e=n[qu];if(e!=null)return e;const t=vr(Il,uf,df,n);return e=t.ma?(i,s)=>R_(i,s,t):(i,s)=>{for(;M_(s)&&s.h!=4;){var r=s.l,o=t[r];if(o==null){var a=t.ba;a&&(a=a[r])&&(a=EA(a))!=null&&(o=t[r]=a)}if(o==null||!o(s,i,r)){if(o=(a=s).m,zc(a),a.ha)var c=void 0;else c=a.g.g-o,a.g.g=o,c=v_(a.g,c);o=void 0,a=i,c&&((o=a[Wn]??(a[Wn]=new Wu))[r]??(o[r]=[])).push(c)}}return(i=Sl(i))&&(i.da=t.qa[Qm]),!0},n[qu]=e,n[Qm]=bA.bind(n),e}function bA(n,e,t,i){var s=this[Il];const r=this[qu],o=or(void 0,s.T),a=Sl(n);if(a){var c=!1,l=s.ba;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(const f of d){h=x_(f);try{c=!0,r(o,h)}finally{y_(h)}}else i==null||i(n,u,d)},e==null)Qc(a,s);else if(a!=null){const h=a[e];h&&s(a,e,h)}if(c){let h=0|n[be];if(2&h&&2048&h&&!(t!=null&&t.Ka))throw Error();const u=Do(h),d=(f,g)=>{if(gs(n,f,u)!=null){if((t==null?void 0:t.Qa)===1)return;throw Error()}g!=null&&(h=Zt(n,h,f,g,u)),delete a[f]};e==null?$g(o,0|o[be],(f,g)=>{d(f,g)}):d(e,gs(o,e,u))}}}}function EA(n){const e=(n=P_(n))[0].g;if(n=n[1]){const t=ff(n),i=vr(Il,uf,df,n).T;return(s,r,o)=>e(s,r,o,i,t)}return e}function Ll(n,e,t){n[e]=t.h}function Dl(n,e,t,i){let s,r;const o=t.h;n[e]=(a,c,l)=>o(a,c,l,r||(r=vr(Pl,Ll,Dl,i).T),s||(s=L_(i)))}function L_(n){let e=n[Jm];if(!e){const t=vr(Pl,Ll,Dl,n);e=(i,s)=>D_(i,s,t),n[Jm]=e}return e}function D_(n,e,t){$g(n,0|n[be],(i,s)=>{if(s!=null){var r=function(o,a){var c=o[a];if(c)return c;if((c=o.ba)&&(c=c[a])){var l=(c=P_(c))[0].h;if(c=c[1]){const h=L_(c),u=vr(Pl,Ll,Dl,c).T;c=o.ma?C_(u,h):(d,f,g)=>l(d,f,g,u,h)}else c=l;return o[a]=c}}(t,i);r?r(e,s,i):i<500||go(Gu,3)}}),(n=Sl(n))&&Qc(n,(i,s,r)=>{for(Mo(e,e.g.end()),i=0;i<r.length;i++)Mo(e,Od(r[i])||new Uint8Array(0))})}const TA=Xn(0);function Vo(n,e){if(Array.isArray(e)){var t=0|e[be];if(4&t)return e;for(var i=0,s=0;i<e.length;i++){const r=n(e[i]);r!=null&&(e[s++]=r)}return s<i&&(e.length=s),(n=-1537&(5|t))!==t&&tn(e,n),2&n&&Object.freeze(e),e}}function Mn(n,e,t){return new zo(n,e,t)}function Go(n,e,t){return new zo(n,e,t)}function Sn(n,e,t){Zt(n,0|n[be],e,t,Do(0|n[be]))}var AA=Cl(function(n,e,t,i,s){if(n.h!==2)return!1;if(n=Si(n=ka(n,or([void 0,void 0],i),s)),s=Do(i=0|e[be]),2&i)throw Error();let r=gs(e,t,s);if(r instanceof ms)2&r.J?(r=r.V(),r.push(n),Zt(e,i,t,r,s)):r.Ma(n);else if(Array.isArray(r)){var o=0|r[be];8192&o||tn(r,o|=8192),2&o&&(r=d_(r),Zt(e,i,t,r,s)),r.push(n)}else Zt(e,i,t,wa([n]),s);return!0},function(n,e,t,i,s){if(e instanceof ms)e.forEach((r,o)=>{il(n,t,or([o,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){const o=e[r];Array.isArray(o)&&il(n,t,or(o,i),s)}wa(e)}});function N_(n,e,t){(e=zi(e))!=null&&(hi(n,t,5),n=n.g,kd(e),sf(n))}function U_(n,e,t){if(e=function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(Fa(64,i));if(Oa(i)){if(s==="string")return i_(i);if(s==="number")return Gd(i)}}(e),e!=null&&(typeof e=="string"&&Zm(e),e!=null))switch(hi(n,t,0),typeof e){case"number":n=n.g,xo(e),io(n,wt,Gt);break;case"bigint":t=BigInt.asUintN(64,e),t=new ju(Number(t&BigInt(4294967295)),Number(t>>BigInt(32))),io(n.g,t.h,t.g);break;default:t=Zm(e),io(n.g,t.h,t.g)}}function F_(n,e,t){(e=No(e))!=null&&e!=null&&(hi(n,t,0),Al(n.g,e))}function O_(n,e,t){(e=e_(e))!=null&&(hi(n,t,0),n.g.g.push(e?1:0))}function B_(n,e,t){(e=dn(e))!=null&&wl(n,t,zg(e))}function k_(n,e,t,i,s){il(n,t,I_(e,i),s)}function z_(n,e,t){(e=e==null||typeof e=="string"||e instanceof Gi?e:void 0)!=null&&wl(n,t,Qd(e,!0).buffer)}function V_(n,e,t){(e=t_(e))!=null&&e!=null&&(hi(n,t,0),ko(n.g,e))}function G_(n,e,t){return(n.h===5||n.h===2)&&(e=Bo(e,0|e[be],t),n.h==2?Tl(n,tl,e):e.push(tl(n.g)),!0)}var Ht=Mn(function(n,e,t){return n.h===5&&(Sn(e,t,tl(n.g)),!0)},N_,Rl),wA=Go(G_,function(n,e,t){if((e=Vo(zi,e))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(hi(i,s,5),i=i.g,kd(r),sf(i))}},Rl),pf=Go(G_,function(n,e,t){if((e=Vo(zi,e))!=null&&e.length){hi(n,t,2),ko(n.g,4*e.length);for(let i=0;i<e.length;i++)t=n.g,kd(e[i]),sf(t)}},Rl),RA=Mn(function(n,e,t){return n.h===5&&(Sn(e,t,(n=tl(n.g))===0?void 0:n),!0)},N_,Rl),ks=Mn(function(n,e,t){return n.h!==0?n=!1:(Sn(e,t,ef(n.g,Qg)),n=!0),n},U_,E_),Fh=Mn(function(n,e,t){return n.h!==0?e=!1:(Sn(e,t,(n=ef(n.g,Qg))===TA?void 0:n),e=!0),e},U_,E_),CA=Mn(function(n,e,t){return n.h!==0?n=!1:(Sn(e,t,ef(n.g,QT)),n=!0),n},function(n,e,t){if(e=function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(eA(64,i));if(Oa(i)){if(s==="string")return s=yo(Number(i)),mr(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(yl(i),i=Ra(wt,Gt))),i;if(s==="number")return(i=yo(i))>=0&&mr(i)||(xo(i),i=Jg(wt,Gt)),i}}(e),e!=null&&(typeof e=="string"&&$m(e),e!=null))switch(hi(n,t,0),typeof e){case"number":n=n.g,xo(e),io(n,wt,Gt);break;case"bigint":t=BigInt.asUintN(64,e),t=new Xu(Number(t&BigInt(4294967295)),Number(t>>BigInt(32))),io(n.g,t.h,t.g);break;default:t=$m(e),io(n.g,t.h,t.g)}},yA),Kt=Mn(function(n,e,t){return n.h===0&&(Sn(e,t,Bs(n.g)),!0)},F_,lf),za=Go(function(n,e,t){return(n.h===0||n.h===2)&&(e=Bo(e,0|e[be],t),n.h==2?Tl(n,Bs,e):e.push(Bs(n.g)),!0)},function(n,e,t){if((e=Vo(No,e))!=null&&e.length){t=rf(n,t);for(let i=0;i<e.length;i++)Al(n.g,e[i]);of(n,t)}},lf),Jr=Mn(function(n,e,t){return n.h===0&&(Sn(e,t,(n=Bs(n.g))===0?void 0:n),!0)},F_,lf),Pt=Mn(function(n,e,t){return n.h===0&&(Sn(e,t,tf(n.g)),!0)},O_,b_),hr=Mn(function(n,e,t){return n.h===0&&(Sn(e,t,(n=tf(n.g))===!1?void 0:n),!0)},O_,b_),gn=Go(function(n,e,t){return n.h===2&&(n=nf(n),Bo(e,0|e[be],t).push(n),!0)},function(n,e,t){if((e=Vo(dn,e))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&wl(i,s,zg(r))}},cf),Ls=Mn(function(n,e,t){return n.h===2&&(Sn(e,t,(n=nf(n))===""?void 0:n),!0)},B_,cf),_t=Mn(function(n,e,t){return n.h===2&&(Sn(e,t,nf(n)),!0)},B_,cf),an=function(n,e,t=af){return new zo(n,e,t)}(function(n,e,t,i,s){return n.h===2&&(i=or(void 0,i),Bo(e,0|e[be],t).push(i),ka(n,i,s),!0)},function(n,e,t,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)k_(n,e[r],t,i,s);1&(n=0|e[be])||tn(e,1|n)}}),Tt=Cl(function(n,e,t,i,s,r){if(n.h!==2)return!1;let o=0|e[be];return f_(e,o,r,t,Do(o)),ka(n,e=Zd(e,i,t),s),!0},k_),H_=Mn(function(n,e,t){return n.h===2&&(Sn(e,t,S_(n)),!0)},z_,T_),PA=Go(function(n,e,t){return(n.h===0||n.h===2)&&(e=Bo(e,0|e[be],t),n.h==2?Tl(n,ji,e):e.push(ji(n.g)),!0)},function(n,e,t){if((e=Vo(t_,e))!=null)for(let o=0;o<e.length;o++){var i=n,s=t,r=e[o];r!=null&&(hi(i,s,0),ko(i.g,r))}},hf),IA=Mn(function(n,e,t){return n.h===0&&(Sn(e,t,(n=ji(n.g))===0?void 0:n),!0)},V_,hf),vn=Mn(function(n,e,t){return n.h===0&&(Sn(e,t,Bs(n.g)),!0)},function(n,e,t){(e=No(e))!=null&&(e=parseInt(e,10),hi(n,t,0),Al(n.g,e))},A_);class LA{constructor(e,t){var i=$n;this.g=e,this.h=t,this.m=it,this.j=De,this.defaultValue=void 0,this.l=i.Oa!=null?Zg:void 0}register(){_l(this)}}function Ji(n,e){return new LA(n,e)}function Gs(n,e){return(t,i)=>{{const r={ea:!0};i&&Object.assign(r,i),t=x_(t,void 0,void 0,r);try{const o=new n,a=o.v;ff(e)(a,t);var s=o}finally{y_(t)}}return s}}function Nl(n){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};D_(this.v,e,vr(Pl,Ll,Dl,n)),Mo(e,e.g.end());const t=new Uint8Array(e.h),i=e.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];t.set(a,r),r+=a.length}return e.l=[t],t}}var e0=class extends Ee{constructor(n){super(n)}},t0=[0,Ls,Mn(function(n,e,t){return n.h===2&&(Sn(e,t,(n=S_(n))===fr()?void 0:n),!0)},function(n,e,t){if(e!=null){if(e instanceof Ee){const i=e.Ra;return void(i?(e=i(e),e!=null&&wl(n,t,Qd(e,!0).buffer)):go(Gu,3))}if(Array.isArray(e))return void go(Gu,3)}z_(n,e,t)},T_)];let Oh,n0=globalThis.trustedTypes;function i0(n){var e;return Oh===void 0&&(Oh=function(){let t=null;if(!n0)return t;try{const i=s=>s;t=n0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return t}()),n=(e=Oh)?e.createScriptURL(n):n,new class{constructor(t){this.g=t}toString(){return this.g+""}}(n)}function Rc(n,...e){if(e.length===0)return i0(n[0]);let t=n[0];for(let i=0;i<e.length;i++)t+=encodeURIComponent(e[i])+n[i+1];return i0(t)}var W_=[0,Kt,vn,Pt,-1,za,vn,-1,Pt],DA=class extends Ee{constructor(n){super(n)}},X_=[0,Pt,_t,Pt,vn,-1,Go(function(n,e,t){return(n.h===0||n.h===2)&&(e=Bo(e,0|e[be],t),n.h==2?Tl(n,gA,e):e.push(Bs(n.g)),!0)},function(n,e,t){if((e=Vo(No,e))!=null&&e.length){t=rf(n,t);for(let i=0;i<e.length;i++)Al(n.g,e[i]);of(n,t)}},A_),_t,-1,[0,Pt,-1],vn,Pt,-1],j_=[0,3,Pt,-1,2,[0,[2],Kt,Tt,[0,Mn(function(n,e,t){return n.h===0&&(Sn(e,t,ji(n.g)),!0)},V_,hf)]],[0,vn,Pt,vn,Pt,vn,Pt,_t,-1],[0,[3,4],_t,-1,Tt,[0,Kt],Tt,[0,vn]],[0]],q_=[0,_t,-2],s0=class extends Ee{constructor(n){super(n)}},Y_=[0],K_=[0,Kt,Pt,1,Pt,-4],$n=class extends Ee{constructor(n){super(n,2)}},Jt={};Jt[336783863]=[0,_t,Pt,-1,Kt,[0,[1,2,3,4,5,6,7,8,9],Tt,Y_,Tt,X_,Tt,q_,Tt,K_,Tt,W_,Tt,[0,_t,-2],Tt,[0,_t,vn],Tt,j_,Tt,[0,vn,-1,Pt]],[0,_t],Pt,[0,[1,3],[2,4],Tt,[0,za],-1,Tt,[0,gn],-1,an,[0,_t,-1]],_t];var r0=[0,Fh,-1,hr,-3,Fh,za,Ls,Jr,Fh,-1,hr,Jr,hr,-2,Ls];function At(n,e){El(n,3,e)}function Qe(n,e){El(n,4,e)}var Nn=class extends Ee{constructor(n){super(n,500)}o(n){return De(this,0,7,n)}},ma=[-1,{}],o0=[0,_t,1,ma],a0=[0,_t,gn,ma];function ui(n,e){Jd(n,1,Nn,e)}function It(n,e){El(n,10,e)}function st(n,e){El(n,15,e)}var Zn=class extends Ee{constructor(n){super(n,500)}o(n){return De(this,0,1001,n)}},$_=[-500,an,[-500,Ls,-1,gn,-3,[-2,Jt,Pt],an,t0,Jr,-1,o0,a0,an,[0,Ls,hr],Ls,r0,Jr,gn,987,gn],4,an,[-500,_t,-1,[-1,{}],998,_t],an,[-500,_t,gn,-1,[-2,{},Pt],997,gn,-1],Jr,an,[-500,_t,gn,ma,998,gn],gn,Jr,o0,a0,an,[0,Ls,-1,ma],gn,-2,r0,Ls,-1,hr,[0,hr,IA],978,ma,an,t0];Zn.prototype.g=Nl($_);var NA=Gs(Zn,$_),UA=class extends Ee{constructor(n){super(n)}},Z_=class extends Ee{constructor(n){super(n)}g(){return _s(this,UA,1)}},J_=[0,an,[0,Kt,Ht,_t,-1]],Ul=Gs(Z_,J_),FA=class extends Ee{constructor(n){super(n)}},OA=class extends Ee{constructor(n){super(n)}},Bh=class extends Ee{constructor(n){super(n)}l(){return it(this,FA,2)}g(){return _s(this,OA,5)}},Q_=Gs(class extends Ee{constructor(n){super(n)}},[0,gn,za,pf,[0,vn,[0,Kt,-3],[0,Ht,-3],[0,Kt,-1,[0,an,[0,Kt,-2]]],an,[0,Ht,-1,_t,Ht]],_t,-1,ks,an,[0,Kt,Ht],gn,ks]),e1=class extends Ee{constructor(n){super(n)}},so=Gs(class extends Ee{constructor(n){super(n)}},[0,an,[0,Ht,-4]]),t1=class extends Ee{constructor(n){super(n)}},Va=Gs(class extends Ee{constructor(n){super(n)}},[0,an,[0,Ht,-4]]),BA=class extends Ee{constructor(n){super(n)}},kA=[0,Kt,-1,pf,vn],n1=class extends Ee{constructor(n){super(n)}};n1.prototype.g=Nl([0,Ht,-4,ks]);var zA=class extends Ee{constructor(n){super(n)}},VA=Gs(class extends Ee{constructor(n){super(n)}},[0,an,[0,1,Kt,_t,J_],ks]),c0=class extends Ee{constructor(n){super(n)}},GA=class extends Ee{constructor(n){super(n)}na(){const n=Ct(this,1,void 0,void 0,u_);return n??fr()}},HA=class extends Ee{constructor(n){super(n)}},i1=[1,2],WA=Gs(class extends Ee{constructor(n){super(n)}},[0,an,[0,i1,Tt,[0,pf],Tt,[0,H_],Kt,_t],ks]),mf=class extends Ee{constructor(n){super(n)}},s1=[0,_t,Kt,Ht,gn,-1],l0=class extends Ee{constructor(n){super(n)}},XA=[0,Pt,-1],h0=class extends Ee{constructor(n){super(n)}},Vc=[1,2,3,4,5,6],sl=class extends Ee{constructor(n){super(n)}g(){return Ct(this,1,void 0,void 0,u_)!=null}l(){return dn(Ct(this,2))!=null}},Nt=class extends Ee{constructor(n){super(n)}g(){return e_(Ct(this,2))??!1}},r1=[0,H_,_t,[0,Kt,ks,-1],[0,CA,ks]],Xt=[0,r1,Pt,[0,Vc,Tt,K_,Tt,X_,Tt,W_,Tt,Y_,Tt,q_,Tt,j_],vn],Fl=class extends Ee{constructor(n){super(n)}},gf=[0,Xt,Ht,-1,Kt],jA=Ji(502141897,Fl);Jt[502141897]=gf;var qA=Gs(class extends Ee{constructor(n){super(n)}},[0,[0,vn,-1,wA,PA],kA]),o1=class extends Ee{constructor(n){super(n)}},a1=class extends Ee{constructor(n){super(n)}},Yu=[0,Xt,Ht,[0,Xt],Pt],YA=Ji(508968150,a1);Jt[508968150]=[0,Xt,gf,Yu,Ht,[0,[0,r1]]],Jt[508968149]=Yu;var Xr=class extends Ee{constructor(n){super(n)}l(){return it(this,mf,2)}g(){pt(this,2)}},c1=[0,Xt,s1];Jt[478825465]=c1;var KA=class extends Ee{constructor(n){super(n)}},l1=class extends Ee{constructor(n){super(n)}},_f=class extends Ee{constructor(n){super(n)}},vf=class extends Ee{constructor(n){super(n)}},h1=class extends Ee{constructor(n){super(n)}},u0=[0,Xt,[0,Xt],c1,-1],u1=[0,Xt,Ht,Kt],xf=[0,Xt,Ht],d1=[0,Xt,u1,xf,Ht],$A=Ji(479097054,h1);Jt[479097054]=[0,Xt,d1,u0],Jt[463370452]=u0,Jt[464864288]=u1;var ZA=Ji(462713202,vf);Jt[462713202]=d1,Jt[474472470]=xf;var JA=class extends Ee{constructor(n){super(n)}},f1=class extends Ee{constructor(n){super(n)}},p1=class extends Ee{constructor(n){super(n)}},m1=class extends Ee{constructor(n){super(n)}},yf=[0,Xt,Ht,-1,Kt],Ku=[0,Xt,Ht,Pt];m1.prototype.g=Nl([0,Xt,xf,[0,Xt],gf,Yu,yf,Ku]);var g1=class extends Ee{constructor(n){super(n)}},QA=Ji(456383383,g1);Jt[456383383]=[0,Xt,s1];var _1=class extends Ee{constructor(n){super(n)}},ew=Ji(476348187,_1);Jt[476348187]=[0,Xt,XA];var v1=class extends Ee{constructor(n){super(n)}},d0=class extends Ee{constructor(n){super(n)}},x1=[0,vn,-1],tw=Ji(458105876,class extends Ee{constructor(n){super(n)}g(){let n;var e=this.v;const t=0|e[be];return n=qn(this,t),e=function(i,s,r,o){var a=d0;!o&&Fo(i)&&(r=0|(s=i.v)[be]);var c=gs(s,2);if(i=!1,c==null){if(o)return jm();c=[]}else if(c.constructor===ms){if(!(2&c.J)||o)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[be])):c=[];if(o){if(!c.length)return jm();i||(i=!0,Ua(c))}else i&&(i=!1,wa(c),c=d_(c));return!i&&32&r&&Na(c,32),r=Zt(s,r,2,o=new ms(c,a,iA,void 0)),i||_r(s,r),o}(this,e,t,n),!n&&d0&&(e.ra=!0),e}});Jt[458105876]=[0,x1,AA,[!0,ks,[0,_t,-1,gn]],[0,za,Pt,vn]];var Mf=class extends Ee{constructor(n){super(n)}},y1=Ji(458105758,Mf);Jt[458105758]=[0,Xt,_t,x1];var kh=class extends Ee{constructor(n){super(n)}},f0=[0,RA,-1,hr],nw=class extends Ee{constructor(n){super(n)}},M1=class extends Ee{constructor(n){super(n)}},$u=[1,2];M1.prototype.g=Nl([0,$u,Tt,f0,Tt,[0,an,f0]]);var S1=class extends Ee{constructor(n){super(n)}},iw=Ji(443442058,S1);Jt[443442058]=[0,Xt,_t,Kt,Ht,gn,-1,Pt,Ht],Jt[514774813]=yf;var b1=class extends Ee{constructor(n){super(n)}},sw=Ji(516587230,b1);function Zu(n,e){return e=e?e.clone():new mf,n.displayNamesLocale!==void 0?pt(e,1,Ba(n.displayNamesLocale)):n.displayNamesLocale===void 0&&pt(e,1),n.maxResults!==void 0?vs(e,2,n.maxResults):"maxResults"in n&&pt(e,2),n.scoreThreshold!==void 0?Ce(e,3,n.scoreThreshold):"scoreThreshold"in n&&pt(e,3),n.categoryAllowlist!==void 0?el(e,4,n.categoryAllowlist):"categoryAllowlist"in n&&pt(e,4),n.categoryDenylist!==void 0?el(e,5,n.categoryDenylist):"categoryDenylist"in n&&pt(e,5),e}function E1(n){const e=Number(n);return Number.isSafeInteger(e)?e:String(n)}function Sf(n,e=-1,t=""){return{categories:n.map(i=>({index:ci(i,1)??0??-1,score:Bt(i,2)??0,categoryName:dn(Ct(i,3))??""??"",displayName:dn(Ct(i,4))??""??""})),headIndex:e,headName:t}}function rw(n){const e={classifications:_s(n,zA,1).map(t=>{var i;return Sf(((i=it(t,Z_,4))==null?void 0:i.g())??[],ci(t,2)??0,dn(Ct(t,3))??"")})};return function(t){return t==null?t:typeof t=="bigint"?(Hu(t)?t=Number(t):(t=Fa(64,t),t=Hu(t)?Number(t):String(t)),t):Oa(t)?typeof t=="number"?Gd(t):i_(t):void 0}(Ct(n,2,void 0,void 0,Jc))!=null&&(e.timestampMs=E1(Ct(n,2,void 0,void 0,Jc)??l_)),e}function T1(n){var o,a;var e=rr(n,3,zi,sr()),t=rr(n,2,No,sr()),i=rr(n,1,dn,sr()),s=rr(n,9,dn,sr());const r={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)r.categories.push({score:e[c],index:t[c]??-1,categoryName:i[c]??"",displayName:s[c]??""});if((e=(o=it(n,Bh,4))==null?void 0:o.l())&&(r.boundingBox={originX:ci(e,1,Rs)??0,originY:ci(e,2,Rs)??0,width:ci(e,3,Rs)??0,height:ci(e,4,Rs)??0,angle:0}),(a=it(n,Bh,4))==null?void 0:a.g().length)for(const c of it(n,Bh,4).g())r.keypoints.push({x:Ct(c,1,void 0,Rs,zi)??0,y:Ct(c,2,void 0,Rs,zi)??0,score:Ct(c,4,void 0,Rs,zi)??0,label:dn(Ct(c,3,void 0,Rs))??""});return r}function Ol(n){const e=[];for(const t of _s(n,t1,1))e.push({x:Bt(t,1)??0,y:Bt(t,2)??0,z:Bt(t,3)??0,visibility:Bt(t,4)??0});return e}function ga(n){const e=[];for(const t of _s(n,e1,1))e.push({x:Bt(t,1)??0,y:Bt(t,2)??0,z:Bt(t,3)??0,visibility:Bt(t,4)??0});return e}function p0(n){return Array.from(n,e=>e>127?e-256:e)}function m0(n,e){if(n.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${e.length}).`);let t=0,i=0,s=0;for(let r=0;r<n.length;r++)t+=n[r]*e[r],i+=n[r]*n[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return t/Math.sqrt(i*s)}let Cc;Jt[516587230]=[0,Xt,yf,Ku,Ht],Jt[518928384]=Ku;const ow=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function A1(n){if(n)return!0;if(Cc===void 0)try{await WebAssembly.instantiate(ow),Cc=!0}catch{Cc=!1}return Cc}async function Pc(n,e,t){return{wasmLoaderPath:`${e}/${n}_${t=`wasm${t?"_module":""}${await A1(t)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${e}/${n}_${t}.wasm`}}var jr=class{};function w1(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function g0(n){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=n.toString(),e.crossOrigin="anonymous",new Promise((t,i)=>{e.addEventListener("load",()=>{t()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(n.toString())}catch(e){if(!(e instanceof TypeError))throw e;await self.import(n.toString())}}function R1(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Ae(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),t(e=n.i.stringToNewUTF8(e)),n.i._free(e)}function _0(n,e,t){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(t?n.i._bindTextureToStream(t):n.i._bindTextureToCanvas(),!(t=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),n.i.gpuOriginForWebTexturesIsBottomLeft&&t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=R1(e);return!n.l||i===n.i.canvas.width&&s===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=s),[i,s]}function v0(n,e,t){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=n.i.stringToNewUTF8(e[s]);e=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,e>>2),t(e);for(const s of i)n.i._free(s);n.i._free(e)}function Li(n,e,t){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=t}function Cs(n,e,t){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[e]=(s,r,o)=>{r?(t(i,o),i=[]):i.push(s)}}jr.forVisionTasks=function(n,e=!1){return Pc("vision",n??Rc``,e)},jr.forTextTasks=function(n,e=!1){return Pc("text",n??Rc``,e)},jr.forGenAiTasks=function(n,e=!1){return Pc("genai",n??Rc``,e)},jr.forAudioTasks=function(n,e=!1){return Pc("audio",n??Rc``,e)},jr.isSimdSupported=function(n=!1){return A1(n)};async function aw(n,e,t,i){return n=await(async(s,r,o,a,c)=>{if(r&&await g0(r),!self.ModuleFactory||o&&(await g0(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(n,t.wasmLoaderPath,t.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?t.wasmBinaryPath.toString():t.assetBinaryPath&&s.endsWith(".data")?t.assetBinaryPath.toString():s}),await n.o(i),n}function zh(n,e){const t=it(n.baseOptions,sl,1)||new sl;typeof e=="string"?(pt(t,2,Ba(e)),pt(t,1)):e instanceof Uint8Array&&(pt(t,1,Bd(e,!1)),pt(t,2)),De(n.baseOptions,0,1,t)}function x0(n){try{const e=n.H.length;if(e===1)throw Error(n.H[0].message);if(e>1)throw Error("Encountered multiple errors: "+n.H.map(t=>t.message).join(", "))}finally{n.H=[]}}function me(n,e){n.C=Math.max(n.C,e)}function Bl(n,e){n.B=new Nn,Yn(n.B,2,"PassThroughCalculator"),At(n.B,"free_memory"),Qe(n.B,"free_memory_unused_out"),It(e,"free_memory"),ui(e,n.B)}function So(n,e){At(n.B,e),Qe(n.B,e+"_unused_out")}function kl(n){n.g.addBoolToStream(!0,"free_memory",n.C)}var Ju=class{constructor(n){this.g=n,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(n,e=!0){var t,i,s,r,o,a;if(e){const c=n.baseOptions||{};if((t=n.baseOptions)!=null&&t.modelAssetBuffer&&((i=n.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=it(this.baseOptions,sl,1))!=null&&s.g()||(r=it(this.baseOptions,sl,1))!=null&&r.l()||(o=n.baseOptions)!=null&&o.modelAssetBuffer||(a=n.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,h){let u=it(l.baseOptions,h0,3);if(!u){var d=u=new h0,f=new s0;pa(d,4,Vc,f)}"delegate"in h&&(h.delegate==="GPU"?(h=u,d=new DA,pa(h,2,Vc,d)):(h=u,d=new s0,pa(h,4,Vc,d))),De(l.baseOptions,0,3,u)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),zh(this,"/model.dat"),this.m(),this.L()});if(c.modelAssetBuffer instanceof Uint8Array)zh(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return async function(l){const h=[];for(var u=0;;){const{done:d,value:f}=await l.read();if(d)break;h.push(f),u+=f.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(u),u=0;for(const d of h)l.set(d,u),u+=d.length;return l}(c.modelAssetBuffer).then(l=>{zh(this,l),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let n;if(this.g.ca(e=>{n=NA(e)}),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,e){this.g.attachErrorListener((t,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(n,e),this.B=void 0,x0(this)}finishProcessing(){this.g.finishProcessing(),x0(this)}close(){this.B=void 0,this.g.closeGraph()}};function Us(n,e){if(!n)throw Error(`Unable to obtain required WebGL resource: ${e}`);return n}Ju.prototype.close=Ju.prototype.close;class cw{constructor(e,t,i,s){this.g=e,this.h=t,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function y0(n,e,t){const i=n.g;if(t=Us(i.createShader(t),"Failed to create WebGL shader"),i.shaderSource(t,e),i.compileShader(t),!i.getShaderParameter(t,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(t)}`);return i.attachShader(n.h,t),t}function M0(n,e){const t=n.g,i=Us(t.createVertexArray(),"Failed to create vertex array");t.bindVertexArray(i);const s=Us(t.createBuffer(),"Failed to create buffer");t.bindBuffer(t.ARRAY_BUFFER,s),t.enableVertexAttribArray(n.O),t.vertexAttribPointer(n.O,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const r=Us(t.createBuffer(),"Failed to create buffer");return t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(n.L),t.vertexAttribPointer(n.L,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),t.STATIC_DRAW),t.bindBuffer(t.ARRAY_BUFFER,null),t.bindVertexArray(null),new cw(t,i,s,r)}function bf(n,e){if(n.g){if(e!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=e}function lw(n,e,t,i){return bf(n,e),n.h||(n.m(),n.D()),t?(n.u||(n.u=M0(n,!0)),t=n.u):(n.A||(n.A=M0(n,!1)),t=n.A),e.useProgram(n.h),t.bind(),n.l(),n=i(),t.g.bindVertexArray(null),n}function C1(n,e,t){return bf(n,e),n=Us(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),n}function P1(n,e,t){bf(n,e),n.B||(n.B=Us(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,n.B),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function hw(n){var e;(e=n.g)==null||e.bindFramebuffer(n.g.FRAMEBUFFER,null)}var I1=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=Us(n.createProgram(),"Failed to create WebGL program"),this.X=y0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.W=y0(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.O=n.getAttribLocation(this.h,"aVertex"),this.L=n.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.X),n.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function ls(n,e){switch(e){case 0:return n.g.find(t=>t instanceof Uint8Array);case 1:return n.g.find(t=>t instanceof Float32Array);case 2:return n.g.find(t=>typeof WebGLTexture<"u"&&t instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Qu(n){var e=ls(n,1);if(!e){if(e=ls(n,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(n.width*n.height);const i=bo(n);var t=Ef(n);if(P1(t,i,L1(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){t=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,t);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=t[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,e)}n.g.push(e)}return e}function L1(n){let e=ls(n,2);if(!e){const t=bo(n);e=N1(n);const i=Qu(n),s=D1(n);t.texImage2D(t.TEXTURE_2D,0,s,n.width,n.height,0,t.RED,t.FLOAT,i),ed(n)}return e}function bo(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Us(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function D1(n){if(n=bo(n),!Ic)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))Ic=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ic=n.R16F}return Ic}function Ef(n){return n.l||(n.l=new I1),n.l}function N1(n){const e=bo(n);e.viewport(0,0,n.width,n.height),e.activeTexture(e.TEXTURE0);let t=ls(n,2);return t||(t=C1(Ef(n),e,n.m?e.LINEAR:e.NEAREST),n.g.push(t),n.j=!0),e.bindTexture(e.TEXTURE_2D,t),t}function ed(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var Ic,on=class{constructor(n,e,t,i,s,r,o){this.g=n,this.m=e,this.j=t,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--S0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!ls(this,0)}ka(){return!!ls(this,1)}R(){return!!ls(this,2)}ja(){return(e=ls(n=this,0))||(e=Qu(n),e=new Uint8Array(e.map(t=>Math.round(255*t))),n.g.push(e)),e;var n,e}ia(){return Qu(this)}N(){return L1(this)}clone(){const n=[];for(const e of this.g){let t;if(e instanceof Uint8Array)t=new Uint8Array(e);else if(e instanceof Float32Array)t=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=bo(this),s=Ef(this);i.activeTexture(i.TEXTURE1),t=C1(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,t);const r=D1(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),P1(s,i,t),lw(s,i,!1,()=>{N1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ed(this)}),hw(s),ed(this)}}n.push(t)}return new on(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&bo(this).deleteTexture(ls(this,2)),S0=-1}};on.prototype.close=on.prototype.close,on.prototype.clone=on.prototype.clone,on.prototype.getAsWebGLTexture=on.prototype.N,on.prototype.getAsFloat32Array=on.prototype.ia,on.prototype.getAsUint8Array=on.prototype.ja,on.prototype.hasWebGLTexture=on.prototype.R,on.prototype.hasFloat32Array=on.prototype.ka,on.prototype.hasUint8Array=on.prototype.Fa;var S0=250;function Ai(...n){return n.map(([e,t])=>({start:e,end:t}))}const uw=function(n){return class extends n{Ja(){this.i._registerModelResourcesGraphService()}}}((b0=class{constructor(n,e){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:w1()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const e=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(e),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,e){const t=n.length,i=this.i._malloc(t);this.i.HEAPU8.set(n,i),e?this.i._changeBinaryGraph(t,i):this.i._changeTextGraph(t,i),this.i._free(i)}configureAudio(n,e,t,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ae(this,i||"input_audio",r=>{Ae(this,s=s||"audio_header",o=>{this.i._configureAudio(r,o,n,e??0,t)})})}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ca(n){Li(this,"__graph_config__",e=>{n(e)}),Ae(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=e}addAudioToStream(n,e,t){this.addAudioToStreamWithShape(n,0,0,e,t)}addAudioToStreamWithShape(n,e,t,i,s){const r=4*n.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(n,this.g/4),Ae(this,i,o=>{this.i._addAudioToInputStream(this.g,e,t,o,s)})}addGpuBufferToStream(n,e,t){Ae(this,e,i=>{const[s,r]=_0(this,n,i);this.i._addBoundTextureToStream(i,s,r,t)})}addBoolToStream(n,e,t){Ae(this,e,i=>{this.i._addBoolToInputStream(n,i,t)})}addDoubleToStream(n,e,t){Ae(this,e,i=>{this.i._addDoubleToInputStream(n,i,t)})}addFloatToStream(n,e,t){Ae(this,e,i=>{this.i._addFloatToInputStream(n,i,t)})}addIntToStream(n,e,t){Ae(this,e,i=>{this.i._addIntToInputStream(n,i,t)})}addUintToStream(n,e,t){Ae(this,e,i=>{this.i._addUintToInputStream(n,i,t)})}addStringToStream(n,e,t){Ae(this,e,i=>{Ae(this,n,s=>{this.i._addStringToInputStream(s,i,t)})})}addStringRecordToStream(n,e,t){Ae(this,e,i=>{v0(this,Object.keys(n),s=>{v0(this,Object.values(n),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,t)})})})}addProtoToStream(n,e,t,i){Ae(this,t,s=>{Ae(this,e,r=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,r,s,i),this.i._free(o)})})}addEmptyPacketToStream(n,e){Ae(this,n,t=>{this.i._addEmptyPacketToInputStream(t,e)})}addBoolVectorToStream(n,e,t){Ae(this,e,i=>{const s=this.i._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,t)})}addDoubleVectorToStream(n,e,t){Ae(this,e,i=>{const s=this.i._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,t)})}addFloatVectorToStream(n,e,t){Ae(this,e,i=>{const s=this.i._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,t)})}addIntVectorToStream(n,e,t){Ae(this,e,i=>{const s=this.i._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,t)})}addUintVectorToStream(n,e,t){Ae(this,e,i=>{const s=this.i._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,t)})}addStringVectorToStream(n,e,t){Ae(this,e,i=>{const s=this.i._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Ae(this,r,o=>{this.i._addStringVectorEntry(s,o)});this.i._addStringVectorToInputStream(s,i,t)})}addBoolToInputSidePacket(n,e){Ae(this,e,t=>{this.i._addBoolToInputSidePacket(n,t)})}addDoubleToInputSidePacket(n,e){Ae(this,e,t=>{this.i._addDoubleToInputSidePacket(n,t)})}addFloatToInputSidePacket(n,e){Ae(this,e,t=>{this.i._addFloatToInputSidePacket(n,t)})}addIntToInputSidePacket(n,e){Ae(this,e,t=>{this.i._addIntToInputSidePacket(n,t)})}addUintToInputSidePacket(n,e){Ae(this,e,t=>{this.i._addUintToInputSidePacket(n,t)})}addStringToInputSidePacket(n,e){Ae(this,e,t=>{Ae(this,n,i=>{this.i._addStringToInputSidePacket(i,t)})})}addProtoToInputSidePacket(n,e,t){Ae(this,t,i=>{Ae(this,e,s=>{const r=this.i._malloc(n.length);this.i.HEAPU8.set(n,r),this.i._addProtoToInputSidePacket(r,n.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(n,e){Ae(this,e,t=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,t)})}addDoubleVectorToInputSidePacket(n,e){Ae(this,e,t=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,t)})}addFloatVectorToInputSidePacket(n,e){Ae(this,e,t=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,t)})}addIntVectorToInputSidePacket(n,e){Ae(this,e,t=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,t)})}addUintVectorToInputSidePacket(n,e){Ae(this,e,t=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,t)})}addStringVectorToInputSidePacket(n,e){Ae(this,e,t=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Ae(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,t)})}attachBoolListener(n,e){Li(this,n,e),Ae(this,n,t=>{this.i._attachBoolListener(t)})}attachBoolVectorListener(n,e){Cs(this,n,e),Ae(this,n,t=>{this.i._attachBoolVectorListener(t)})}attachIntListener(n,e){Li(this,n,e),Ae(this,n,t=>{this.i._attachIntListener(t)})}attachIntVectorListener(n,e){Cs(this,n,e),Ae(this,n,t=>{this.i._attachIntVectorListener(t)})}attachUintListener(n,e){Li(this,n,e),Ae(this,n,t=>{this.i._attachUintListener(t)})}attachUintVectorListener(n,e){Cs(this,n,e),Ae(this,n,t=>{this.i._attachUintVectorListener(t)})}attachDoubleListener(n,e){Li(this,n,e),Ae(this,n,t=>{this.i._attachDoubleListener(t)})}attachDoubleVectorListener(n,e){Cs(this,n,e),Ae(this,n,t=>{this.i._attachDoubleVectorListener(t)})}attachFloatListener(n,e){Li(this,n,e),Ae(this,n,t=>{this.i._attachFloatListener(t)})}attachFloatVectorListener(n,e){Cs(this,n,e),Ae(this,n,t=>{this.i._attachFloatVectorListener(t)})}attachStringListener(n,e){Li(this,n,e),Ae(this,n,t=>{this.i._attachStringListener(t)})}attachStringVectorListener(n,e){Cs(this,n,e),Ae(this,n,t=>{this.i._attachStringVectorListener(t)})}attachProtoListener(n,e,t){Li(this,n,e),Ae(this,n,i=>{this.i._attachProtoListener(i,t||!1)})}attachProtoVectorListener(n,e,t){Cs(this,n,e),Ae(this,n,i=>{this.i._attachProtoVectorListener(i,t||!1)})}attachAudioListener(n,e,t){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Li(this,n,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Ae(this,n,i=>{this.i._attachAudioListener(i,t||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends b0{get ga(){return this.i}pa(n,e,t){Ae(this,e,i=>{const[s,r]=_0(this,n,i);this.ga._addBoundTextureAsImageToStream(i,s,r,t)})}Z(n,e){Li(this,n,e),Ae(this,n,t=>{this.ga._attachImageListener(t)})}aa(n,e){Cs(this,n,e),Ae(this,n,t=>{this.ga._attachImageVectorListener(t)})}}));var b0,wi=class extends uw{};async function tt(n,e,t){return async function(i,s,r,o){return aw(i,s,r,o)}(n,t.canvas??(w1()?void 0:document.createElement("canvas")),e,t)}function U1(n,e,t,i){if(n.U){const r=new n1;if(t!=null&&t.regionOfInterest){if(!n.oa)throw Error("This task doesn't support region-of-interest.");var s=t.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ce(r,1,(s.left+s.right)/2),Ce(r,2,(s.top+s.bottom)/2),Ce(r,4,s.right-s.left),Ce(r,3,s.bottom-s.top)}else Ce(r,1,.5),Ce(r,2,.5),Ce(r,4,1),Ce(r,3,1);if(t!=null&&t.rotationDegrees){if((t==null?void 0:t.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ce(r,5,-Math.PI*t.rotationDegrees/180),(t==null?void 0:t.rotationDegrees)%180!=0){const[o,a]=R1(e);t=Bt(r,3)*a/o,s=Bt(r,4)*o/a,Ce(r,4,t),Ce(r,3,s)}}n.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",n.U,i)}n.g.pa(e,n.X,i??performance.now()),n.finishProcessing()}function Ri(n,e,t){var i;if((i=n.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");U1(n,e,t,n.C+1)}function Qi(n,e,t,i){var s;if(!((s=n.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");U1(n,e,t,i)}function Eo(n,e,t,i){var s=e.data;const r=e.width,o=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return n=new on([s],t,!1,n.g.i.canvas,n.P,r,e),i?n.clone():n}var Kn=class extends Ju{constructor(n,e,t,i){super(n),this.g=n,this.X=e,this.U=t,this.oa=i,this.P=new I1}l(n,e=!0){if("runningMode"in n&&pt(this.baseOptions,2,Ca(!!n.runningMode&&n.runningMode!=="IMAGE")),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,e)}close(){this.P.close(),super.close()}};Kn.prototype.close=Kn.prototype.close;var ei=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect_in",!1),this.j={detections:[]},De(n=this.h=new Fl,0,1,e=new Nt),Ce(this.h,2,.5),Ce(this.h,3,.3)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Ce(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Ce(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,e){return this.j={detections:[]},Ri(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Qi(this,n,t,e),this.j}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect_in"),st(n,"detections");const e=new $n;Zi(e,jA,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect_in"),Qe(t,"DETECTIONS:detections"),t.o(e),ui(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=Q_(r),this.j.detections.push(T1(i));me(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ei.prototype.detectForVideo=ei.prototype.G,ei.prototype.detect=ei.prototype.F,ei.prototype.setOptions=ei.prototype.o,ei.createFromModelPath=async function(n,e){return tt(ei,n,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(n,e){return tt(ei,n,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(n,e){return tt(ei,n,e)};var Tf=Ai([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Af=Ai([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),wf=Ai([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),F1=Ai([474,475],[475,476],[476,477],[477,474]),Rf=Ai([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Cf=Ai([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),O1=Ai([469,470],[470,471],[471,472],[472,469]),Pf=Ai([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),B1=[...Tf,...Af,...wf,...Rf,...Cf,...Pf],k1=Ai([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function E0(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Dt=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,De(n=this.h=new a1,0,1,e=new Nt),this.A=new o1,De(this.h,0,3,this.A),this.u=new Fl,De(this.h,0,2,this.u),vs(this.u,4,1),Ce(this.u,2,.5),Ce(this.A,2,.5),Ce(this.h,4,.5)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return"numFaces"in n&&vs(this.u,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Ce(this.u,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Ce(this.A,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,e){return E0(this),Ri(this,n,e),this.j}G(n,e,t){return E0(this),Qi(this,n,t,e),this.j}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect"),st(n,"face_landmarks");const e=new $n;Zi(e,YA,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),Qe(t,"NORM_LANDMARKS:face_landmarks"),t.o(e),ui(n,t),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(const r of i)i=Va(r),this.j.faceLandmarks.push(Ol(i));me(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{me(this,i)}),this.outputFaceBlendshapes&&(st(n,"blendshapes"),Qe(t,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=Ul(r),this.j.faceBlendshapes.push(Sf(i.g()??[]));me(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{me(this,i)})),this.outputFacialTransformationMatrixes&&(st(n,"face_geometry"),Qe(t,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=it(i=qA(r),BA,2))&&this.j.facialTransformationMatrixes.push({rows:ci(i,1)??0??0,columns:ci(i,2)??0??0,data:rr(i,3,zi,sr()).slice()??[]});me(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{me(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Dt.prototype.detectForVideo=Dt.prototype.G,Dt.prototype.detect=Dt.prototype.F,Dt.prototype.setOptions=Dt.prototype.o,Dt.createFromModelPath=function(n,e){return tt(Dt,n,{baseOptions:{modelAssetPath:e}})},Dt.createFromModelBuffer=function(n,e){return tt(Dt,n,{baseOptions:{modelAssetBuffer:e}})},Dt.createFromOptions=function(n,e){return tt(Dt,n,e)},Dt.FACE_LANDMARKS_LIPS=Tf,Dt.FACE_LANDMARKS_LEFT_EYE=Af,Dt.FACE_LANDMARKS_LEFT_EYEBROW=wf,Dt.FACE_LANDMARKS_LEFT_IRIS=F1,Dt.FACE_LANDMARKS_RIGHT_EYE=Rf,Dt.FACE_LANDMARKS_RIGHT_EYEBROW=Cf,Dt.FACE_LANDMARKS_RIGHT_IRIS=O1,Dt.FACE_LANDMARKS_FACE_OVAL=Pf,Dt.FACE_LANDMARKS_CONTOURS=B1,Dt.FACE_LANDMARKS_TESSELATION=k1;var If=Ai([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function T0(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function A0(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function w0(n,e=!0){const t=[];for(const s of n){var i=Ul(s);n=[];for(const r of i.g())i=e&&ci(r,1)!=null?ci(r,1)??0:-1,n.push({score:Bt(r,2)??0,index:i,categoryName:dn(Ct(r,3))??""??"",displayName:dn(Ct(r,4))??""??""});t.push(n)}return t}var Bn=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],De(n=this.j=new h1,0,1,e=new Nt),this.u=new vf,De(this.j,0,2,this.u),this.D=new _f,De(this.u,0,3,this.D),this.A=new l1,De(this.u,0,2,this.A),this.h=new KA,De(this.j,0,3,this.h),Ce(this.A,2,.5),Ce(this.u,4,.5),Ce(this.D,2,.5)}get baseOptions(){return it(this.j,Nt,1)}set baseOptions(n){De(this.j,0,1,n)}o(n){var s,r,o,a;if(vs(this.A,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ce(this.A,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.u,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ce(this.D,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var e=new Xr,t=e,i=Zu(n.cannedGesturesClassifierOptions,(s=it(this.h,Xr,3))==null?void 0:s.l());De(t,0,2,i),De(this.h,0,3,e)}else n.cannedGesturesClassifierOptions===void 0&&((r=it(this.h,Xr,3))==null||r.g());return n.customGesturesClassifierOptions?(De(t=e=new Xr,0,2,i=Zu(n.customGesturesClassifierOptions,(o=it(this.h,Xr,4))==null?void 0:o.l())),De(this.h,0,4,e)):n.customGesturesClassifierOptions===void 0&&((a=it(this.h,Xr,4))==null||a.g()),this.l(n)}Ha(n,e){return T0(this),Ri(this,n,e),A0(this)}Ia(n,e,t){return T0(this),Qi(this,n,t,e),A0(this)}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect"),st(n,"hand_gestures"),st(n,"hand_landmarks"),st(n,"world_hand_landmarks"),st(n,"handedness");const e=new $n;Zi(e,$A,this.j);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),Qe(t,"HAND_GESTURES:hand_gestures"),Qe(t,"LANDMARKS:hand_landmarks"),Qe(t,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(t,"HANDEDNESS:handedness"),t.o(e),ui(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i){i=Va(r);const o=[];for(const a of _s(i,t1,1))o.push({x:Bt(a,1)??0,y:Bt(a,2)??0,z:Bt(a,3)??0,visibility:Bt(a,4)??0});this.landmarks.push(o)}me(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i){i=so(r);const o=[];for(const a of _s(i,e1,1))o.push({x:Bt(a,1)??0,y:Bt(a,2)??0,z:Bt(a,3)??0,visibility:Bt(a,4)??0});this.worldLandmarks.push(o)}me(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...w0(i,!1)),me(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{me(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...w0(i)),me(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function R0(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Bn.prototype.recognizeForVideo=Bn.prototype.Ia,Bn.prototype.recognize=Bn.prototype.Ha,Bn.prototype.setOptions=Bn.prototype.o,Bn.createFromModelPath=function(n,e){return tt(Bn,n,{baseOptions:{modelAssetPath:e}})},Bn.createFromModelBuffer=function(n,e){return tt(Bn,n,{baseOptions:{modelAssetBuffer:e}})},Bn.createFromOptions=function(n,e){return tt(Bn,n,e)},Bn.HAND_CONNECTIONS=If;var kn=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],De(n=this.h=new vf,0,1,e=new Nt),this.u=new _f,De(this.h,0,3,this.u),this.j=new l1,De(this.h,0,2,this.j),vs(this.j,3,1),Ce(this.j,2,.5),Ce(this.u,2,.5),Ce(this.h,4,.5)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return"numHands"in n&&vs(this.j,3,n.numHands??1),"minHandDetectionConfidence"in n&&Ce(this.j,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Ce(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ri(this,n,e),R0(this)}G(n,e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Qi(this,n,t,e),R0(this)}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect"),st(n,"hand_landmarks"),st(n,"world_hand_landmarks"),st(n,"handedness");const e=new $n;Zi(e,ZA,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),Qe(t,"LANDMARKS:hand_landmarks"),Qe(t,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(t,"HANDEDNESS:handedness"),t.o(e),ui(n,t),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i)i=Va(r),this.landmarks.push(Ol(i));me(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i)i=so(r),this.worldLandmarks.push(ga(i));me(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{me(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const c of i){i=Ul(c);const l=[];for(const h of i.g())l.push({score:Bt(h,2)??0,index:ci(h,1)??0??-1,categoryName:dn(Ct(h,3))??""??"",displayName:dn(Ct(h,4))??""??""});a.push(l)}o.call(r,...a),me(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};kn.prototype.detectForVideo=kn.prototype.G,kn.prototype.detect=kn.prototype.F,kn.prototype.setOptions=kn.prototype.o,kn.createFromModelPath=function(n,e){return tt(kn,n,{baseOptions:{modelAssetPath:e}})},kn.createFromModelBuffer=function(n,e){return tt(kn,n,{baseOptions:{modelAssetBuffer:e}})},kn.createFromOptions=function(n,e){return tt(kn,n,e)},kn.HAND_CONNECTIONS=If;var z1=Ai([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function C0(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function P0(n){try{if(!n.D)return n.h;n.D(n.h)}finally{kl(n)}}function Lc(n,e){n=Va(n),e.push(Ol(n))}var Et=class extends Kn{constructor(n,e){super(new wi(n,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,De(n=this.j=new m1,0,1,e=new Nt),this.I=new _f,De(this.j,0,2,this.I),this.W=new JA,De(this.j,0,3,this.W),this.u=new Fl,De(this.j,0,4,this.u),this.O=new o1,De(this.j,0,5,this.O),this.A=new f1,De(this.j,0,6,this.A),this.M=new p1,De(this.j,0,7,this.M),Ce(this.u,2,.5),Ce(this.u,3,.3),Ce(this.O,2,.5),Ce(this.A,2,.5),Ce(this.A,3,.3),Ce(this.M,2,.5),Ce(this.I,2,.5)}get baseOptions(){return it(this.j,Nt,1)}set baseOptions(n){De(this.j,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&Ce(this.u,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Ce(this.u,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Ce(this.O,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Ce(this.A,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Ce(this.A,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Ce(this.M,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Ce(this.I,2,n.minHandLandmarksConfidence??.5),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.D=typeof e=="function"?e:t,C0(this),Ri(this,n,i),P0(this)}G(n,e,t,i){const s=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:i,C0(this),Qi(this,n,s,e),P0(this)}m(){var n=new Zn;It(n,"input_frames_image"),st(n,"pose_landmarks"),st(n,"pose_world_landmarks"),st(n,"face_landmarks"),st(n,"left_hand_landmarks"),st(n,"left_hand_world_landmarks"),st(n,"right_hand_landmarks"),st(n,"right_hand_world_landmarks");const e=new $n,t=new e0;Yn(t,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(s,r){if(r!=null)if(Array.isArray(r))pt(s,2,bl(r,0,Pa));else{if(!(typeof r=="string"||r instanceof Gi||Fd(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ps(s,2,Bd(r,!1),fr())}}(t,this.j.g());const i=new Nn;Yn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Jd(i,8,e0,t),At(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),ui(n,i),Bl(this,n),this.g.attachProtoListener("pose_landmarks",(s,r)=>{Lc(s,this.h.poseLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var o=this.h.poseWorldLandmarks;s=so(s),o.push(ga(s)),me(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{me(this,s)}),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),So(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[Eo(this,s,!0,!this.D)],me(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],me(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{Lc(s,this.h.faceLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{me(this,s)}),this.outputFaceBlendshapes&&(st(n,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Ul(s),o.push(Sf(s.g()??[]))),me(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{me(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{Lc(s,this.h.leftHandLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var o=this.h.leftHandWorldLandmarks;s=so(s),o.push(ga(s)),me(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{Lc(s,this.h.rightHandLandmarks),me(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{me(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var o=this.h.rightHandWorldLandmarks;s=so(s),o.push(ga(s)),me(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{me(this,s)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Et.prototype.detectForVideo=Et.prototype.G,Et.prototype.detect=Et.prototype.F,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(n,e){return tt(Et,n,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(n,e){return tt(Et,n,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(n,e){return tt(Et,n,e)},Et.HAND_CONNECTIONS=If,Et.POSE_CONNECTIONS=z1,Et.FACE_LANDMARKS_LIPS=Tf,Et.FACE_LANDMARKS_LEFT_EYE=Af,Et.FACE_LANDMARKS_LEFT_EYEBROW=wf,Et.FACE_LANDMARKS_LEFT_IRIS=F1,Et.FACE_LANDMARKS_RIGHT_EYE=Rf,Et.FACE_LANDMARKS_RIGHT_EYEBROW=Cf,Et.FACE_LANDMARKS_RIGHT_IRIS=O1,Et.FACE_LANDMARKS_FACE_OVAL=Pf,Et.FACE_LANDMARKS_CONTOURS=B1,Et.FACE_LANDMARKS_TESSELATION=k1;var ti=class extends Kn{constructor(n,e){super(new wi(n,e),"input_image","norm_rect",!0),this.j={classifications:[]},De(n=this.h=new g1,0,1,e=new Nt)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return De(this.h,0,2,Zu(n,it(this.h,mf,2))),this.l(n)}sa(n,e){return this.j={classifications:[]},Ri(this,n,e),this.j}ta(n,e,t){return this.j={classifications:[]},Qi(this,n,t,e),this.j}m(){var n=new Zn;It(n,"input_image"),It(n,"norm_rect"),st(n,"classifications");const e=new $n;Zi(e,QA,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),At(t,"IMAGE:input_image"),At(t,"NORM_RECT:norm_rect"),Qe(t,"CLASSIFICATIONS:classifications"),t.o(e),ui(n,t),this.g.attachProtoListener("classifications",(i,s)=>{this.j=rw(VA(i)),me(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ti.prototype.classifyForVideo=ti.prototype.ta,ti.prototype.classify=ti.prototype.sa,ti.prototype.setOptions=ti.prototype.o,ti.createFromModelPath=function(n,e){return tt(ti,n,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(n,e){return tt(ti,n,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(n,e){return tt(ti,n,e)};var zn=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect",!0),this.h=new _1,this.embeddings={embeddings:[]},De(n=this.h,0,1,e=new Nt)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){var e=this.h,t=it(this.h,l0,2);return t=t?t.clone():new l0,n.l2Normalize!==void 0?pt(t,1,Ca(n.l2Normalize)):"l2Normalize"in n&&pt(t,1),n.quantize!==void 0?pt(t,2,Ca(n.quantize)):"quantize"in n&&pt(t,2),De(e,0,2,t),this.l(n)}za(n,e){return Ri(this,n,e),this.embeddings}Aa(n,e,t){return Qi(this,n,t,e),this.embeddings}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect"),st(n,"embeddings_out");const e=new $n;Zi(e,ew,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),Qe(t,"EMBEDDINGS:embeddings_out"),t.o(e),ui(n,t),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=WA(i),this.embeddings=function(r){return{embeddings:_s(r,HA,1).map(o=>{var l,h;const a={headIndex:ci(o,3)??0??-1,headName:dn(Ct(o,4))??""??""};var c=o.v;return p_(c,0|c[be],c0,Uh(o,1))!==void 0?(o=rr(o=it(o,c0,Uh(o,1),void 0),1,zi,sr()),a.floatEmbedding=o.slice()):(c=new Uint8Array(0),a.quantizedEmbedding=((h=(l=it(o,GA,Uh(o,2),void 0))==null?void 0:l.na())==null?void 0:h.h())??c),a}),timestampMs:E1(Ct(r,2,void 0,void 0,Jc)??l_)}}(i),me(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};zn.cosineSimilarity=function(n,e){if(n.floatEmbedding&&e.floatEmbedding)n=m0(n.floatEmbedding,e.floatEmbedding);else{if(!n.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=m0(p0(n.quantizedEmbedding),p0(e.quantizedEmbedding))}return n},zn.prototype.embedForVideo=zn.prototype.Aa,zn.prototype.embed=zn.prototype.za,zn.prototype.setOptions=zn.prototype.o,zn.createFromModelPath=function(n,e){return tt(zn,n,{baseOptions:{modelAssetPath:e}})},zn.createFromModelBuffer=function(n,e){return tt(zn,n,{baseOptions:{modelAssetBuffer:e}})},zn.createFromOptions=function(n,e){return tt(zn,n,e)};var td=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){var n,e;(n=this.confidenceMasks)==null||n.forEach(t=>{t.close()}),(e=this.categoryMask)==null||e.close()}};function dw(n){var t,i;const e=function(s){return _s(s,Nn,1)}(n.ca()).filter(s=>(dn(Ct(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(n.u=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(t=it(e[0],$n,7))==null?void 0:t.j())==null?void 0:i.g())??new Map).forEach((s,r)=>{n.u[Number(r)]=dn(Ct(s,1))??""})}function I0(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function L0(n){try{const e=new td(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return e;n.j(e)}finally{kl(n)}}td.prototype.close=td.prototype.close;var Cn=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Mf,this.A=new v1,De(this.h,0,3,this.A),De(n=this.h,0,1,e=new Nt)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,Ba(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}L(){dw(this)}segment(n,e,t){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:t,I0(this),Ri(this,n,i),L0(this)}La(n,e,t,i){const s=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:i,I0(this),Qi(this,n,s,e),L0(this)}Da(){return this.u}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect");const e=new $n;Zi(e,y1,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),t.o(e),ui(n,t),Bl(this,n),this.outputConfidenceMasks&&(st(n,"confidence_masks"),Qe(t,"CONFIDENCE_MASKS:confidence_masks"),So(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Eo(this,r,!0,!this.j)),me(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(st(n,"category_mask"),Qe(t,"CATEGORY_MASK:category_mask"),So(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=Eo(this,i,!1,!this.j),me(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),st(n,"quality_scores"),Qe(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,me(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Cn.prototype.getLabels=Cn.prototype.Da,Cn.prototype.segmentForVideo=Cn.prototype.La,Cn.prototype.segment=Cn.prototype.segment,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(n,e){return tt(Cn,n,{baseOptions:{modelAssetPath:e}})},Cn.createFromModelBuffer=function(n,e){return tt(Cn,n,{baseOptions:{modelAssetBuffer:e}})},Cn.createFromOptions=function(n,e){return tt(Cn,n,e)};var nd=class{constructor(n,e,t){this.confidenceMasks=n,this.categoryMask=e,this.qualityScores=t}close(){var n,e;(n=this.confidenceMasks)==null||n.forEach(t=>{t.close()}),(e=this.categoryMask)==null||e.close()}};nd.prototype.close=nd.prototype.close;var Di=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Mf,this.u=new v1,De(this.h,0,3,this.u),De(n=this.h,0,1,e=new Nt)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}segment(n,e,t,i){const s=typeof t!="function"?t:{};if(this.j=typeof t=="function"?t:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,t=this.C+1,i=new M1,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new kh;Ps(r,3,Ca(!0),!1),Ps(r,1,la(e.keypoint.x),0),Ps(r,2,la(e.keypoint.y),0),pa(i,1,$u,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new nw;for(r of e.scribble)Ps(e=new kh,3,Ca(!0),!1),Ps(e,1,la(r.x),0),Ps(e,2,la(r.y),0),Jd(a,1,kh,e);pa(i,2,$u,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",t),Ri(this,n,s);e:{try{const a=new nd(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break e}this.j(a)}finally{kl(this)}o=void 0}return o}m(){var n=new Zn;It(n,"image_in"),It(n,"roi_in"),It(n,"norm_rect_in");const e=new $n;Zi(e,y1,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),At(t,"IMAGE:image_in"),At(t,"ROI:roi_in"),At(t,"NORM_RECT:norm_rect_in"),t.o(e),ui(n,t),Bl(this,n),this.outputConfidenceMasks&&(st(n,"confidence_masks"),Qe(t,"CONFIDENCE_MASKS:confidence_masks"),So(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Eo(this,r,!0,!this.j)),me(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],me(this,i)})),this.outputCategoryMask&&(st(n,"category_mask"),Qe(t,"CATEGORY_MASK:category_mask"),So(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=Eo(this,i,!1,!this.j),me(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,me(this,i)})),st(n,"quality_scores"),Qe(t,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,me(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Di.prototype.segment=Di.prototype.segment,Di.prototype.setOptions=Di.prototype.o,Di.createFromModelPath=function(n,e){return tt(Di,n,{baseOptions:{modelAssetPath:e}})},Di.createFromModelBuffer=function(n,e){return tt(Di,n,{baseOptions:{modelAssetBuffer:e}})},Di.createFromOptions=function(n,e){return tt(Di,n,e)};var ni=class extends Kn{constructor(n,e){super(new wi(n,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},De(n=this.h=new S1,0,1,e=new Nt)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?pt(this.h,2,Ba(n.displayNamesLocale)):"displayNamesLocale"in n&&pt(this.h,2),n.maxResults!==void 0?vs(this.h,3,n.maxResults):"maxResults"in n&&pt(this.h,3),n.scoreThreshold!==void 0?Ce(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&pt(this.h,4),n.categoryAllowlist!==void 0?el(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&pt(this.h,5),n.categoryDenylist!==void 0?el(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&pt(this.h,6),this.l(n)}F(n,e){return this.j={detections:[]},Ri(this,n,e),this.j}G(n,e,t){return this.j={detections:[]},Qi(this,n,t,e),this.j}m(){var n=new Zn;It(n,"input_frame_gpu"),It(n,"norm_rect"),st(n,"detections");const e=new $n;Zi(e,iw,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),At(t,"IMAGE:input_frame_gpu"),At(t,"NORM_RECT:norm_rect"),Qe(t,"DETECTIONS:detections"),t.o(e),ui(n,t),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=Q_(r),this.j.detections.push(T1(i));me(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{me(this,i)}),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ni.prototype.detectForVideo=ni.prototype.G,ni.prototype.detect=ni.prototype.F,ni.prototype.setOptions=ni.prototype.o,ni.createFromModelPath=async function(n,e){return tt(ni,n,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(n,e){return tt(ni,n,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(n,e){return tt(ni,n,e)};var id=class{constructor(n,e,t){this.landmarks=n,this.worldLandmarks=e,this.segmentationMasks=t}close(){var n;(n=this.segmentationMasks)==null||n.forEach(e=>{e.close()})}};function D0(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function N0(n){try{const e=new id(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.u)return e;n.u(e)}finally{kl(n)}}id.prototype.close=id.prototype.close;var Pn=class extends Kn{constructor(n,e){super(new wi(n,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,De(n=this.h=new b1,0,1,e=new Nt),this.A=new p1,De(this.h,0,3,this.A),this.j=new f1,De(this.h,0,2,this.j),vs(this.j,4,1),Ce(this.j,2,.5),Ce(this.A,2,.5),Ce(this.h,4,.5)}get baseOptions(){return it(this.h,Nt,1)}set baseOptions(n){De(this.h,0,1,n)}o(n){return"numPoses"in n&&vs(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Ce(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Ce(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Ce(this.A,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,e,t){const i=typeof e!="function"?e:{};return this.u=typeof e=="function"?e:t,D0(this),Ri(this,n,i),N0(this)}G(n,e,t,i){const s=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:i,D0(this),Qi(this,n,s,e),N0(this)}m(){var n=new Zn;It(n,"image_in"),It(n,"norm_rect"),st(n,"normalized_landmarks"),st(n,"world_landmarks"),st(n,"segmentation_masks");const e=new $n;Zi(e,sw,this.h);const t=new Nn;Yn(t,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),At(t,"IMAGE:image_in"),At(t,"NORM_RECT:norm_rect"),Qe(t,"NORM_LANDMARKS:normalized_landmarks"),Qe(t,"WORLD_LANDMARKS:world_landmarks"),t.o(e),ui(n,t),Bl(this,n),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(const r of i)i=Va(r),this.landmarks.push(Ol(i));me(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],me(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(const r of i)i=so(r),this.worldLandmarks.push(ga(i));me(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],me(this,i)}),this.outputSegmentationMasks&&(Qe(t,"SEGMENTATION_MASK:segmentation_masks"),So(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Eo(this,r,!0,!this.u)),me(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],me(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pn.prototype.detectForVideo=Pn.prototype.G,Pn.prototype.detect=Pn.prototype.F,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(n,e){return tt(Pn,n,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(n,e){return tt(Pn,n,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(n,e){return tt(Pn,n,e)},Pn.POSE_CONNECTIONS=z1;class fw{constructor(){this.landmarker=null,this.lastResult=null,this.ready=!1,this._lastTimestamp=-1}async init(){try{const e=await jr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");this.landmarker=await Pn.createFromOptions(e,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1}),this.ready=!0}catch(e){console.warn("PoseDetector init failed:",e.message),this.ready=!1}}detect(e){if(!this.ready||!this.landmarker)return null;const t=performance.now();if(t<=this._lastTimestamp)return this.lastResult;this._lastTimestamp=t;try{const i=this.landmarker.detectForVideo(e,t);i.landmarks&&i.landmarks.length>0?this.lastResult=i.landmarks[0]:this.lastResult=null}catch{this.lastResult=null}return this.lastResult}}const pw=11,mw=15,gw=12,_w=16,vw=0;class xw{constructor(){this.calibrated=!1,this.restNoseY=.35,this._handsAbove=!0,this._stateChanges=[],this._lastFlapTime=0,this.flapStrength=0,this.roll=0,this.pitch=0,this.wingSpread=1,this.gesture="GLIDE",this._diveActive=!1,this._diveCounter=0,this._missingFrames=0,this._lastGesture="GLIDE",this._gestureHoldTime=0,this.leftVisible=!1,this.rightVisible=!1}calibrate(e){if(!e)return;const t=e[vw];t&&(this.restNoseY=t.y),this.calibrated=!0}_isVisible(e){return e?(e.visibility??1)>.3&&e.x>.02&&e.x<.98:!1}analyze(e){const t=performance.now();if(!e||e.length<17)return this._missingFrames++,this._missingFrames>5&&(this.flapStrength*=.85,this.roll*=.9,this.pitch*=.9,this.wingSpread+=(1-this.wingSpread)*.1,this._diveActive=!1,this._diveCounter=0,this.gesture="NO TRACKING"),this._output();this._missingFrames=0;const i=e[pw],s=e[mw],r=e[gw],o=e[_w];if(this.leftVisible=this._isVisible(s)&&this._isVisible(i),this.rightVisible=this._isVisible(o)&&this._isVisible(r),!this.leftVisible&&!this.rightVisible)return this.wingSpread+=(1-this.wingSpread)*.1,this._diveActive=!1,this._diveCounter=0,this.gesture="GLIDE",this._output();let a=!1,c=!1,l=0,h=0;this.leftVisible&&(l=i.y-s.y,a=l>.02),this.rightVisible&&(h=r.y-o.y,c=h>.02),this.leftVisible&&!this.rightVisible?(c=a,h=l):this.rightVisible&&!this.leftVisible&&(a=c,l=h);const u=a&&c,d=!a&&!c,f=(l+h)/2,g=this._handsAbove;this._handsAbove=u,u!==g&&this._stateChanges.push(t),this._stateChanges=this._stateChanges.filter(R=>t-R<3e3);let _=0;for(let R=1;R<this._stateChanges.length;R++)this._stateChanges[R]-this._stateChanges[R-1]<1500?_++:_=0;_>=3?(this.flapStrength=Ns(this._stateChanges.length/6,.5,1),this._lastFlapTime=t):t-this._lastFlapTime<400?this.flapStrength=Math.max(this.flapStrength*.9,.3):(this.flapStrength*=.85,this.flapStrength<.05&&(this.flapStrength=0));const m=this.flapStrength>.1;d&&!m?this._diveCounter=Math.min(this._diveCounter+1,20):this._diveCounter=Math.max(this._diveCounter-2,0),this._diveCounter>=8&&(this._diveActive=!0),this._diveCounter<3&&(this._diveActive=!1);const p=h-l,y=Ns(p*2.5,-1,1);this.roll+=(y-this.roll)*.04;let S;m?S=.1:S=Ns(f*3,-.7,.7),this.pitch+=(S-this.pitch)*.04;const b=t-this._lastFlapTime<600;let w;b?w=1:w=Ns(iE(f,-.12,.06,0,1),0,1),this.wingSpread+=(w-this.wingSpread)*.05;let T;return this._diveActive?T="DIVE":m?T="FLAP!":this.pitch>.15?T="CLIMB":this.pitch<-.15?T="DIVE":Math.abs(this.roll)>.12?T=this.roll>0?"TURN LEFT":"TURN RIGHT":T="GLIDE",T!==this._lastGesture?t-this._gestureHoldTime>300&&(this.gesture=T,this._lastGesture=T,this._gestureHoldTime=t):(this.gesture=T,this._gestureHoldTime=t),this._output()}_output(){return{flapStrength:this.flapStrength,roll:this.roll,pitch:this.pitch,wingSpread:this.wingSpread,diveActive:this._diveActive}}}class yw{constructor(){this.active=!1,this._steps=[],this._currentStep=0,this._stepTimer=0}start(e){this._steps=e,this._currentStep=0,this._stepTimer=0,this.active=!0,console.log(`Autopilot started: ${e.length} steps`)}stop(){this.active=!1,this._steps=[],console.log("Autopilot stopped")}update(e,t){if(!this.active||this._currentStep>=this._steps.length)return this.active&&(this.active=!1,console.log("Autopilot sequence complete")),!1;const i=this._steps[this._currentStep];this._stepTimer+=e;const s=i.action;return t.lift=0,t.roll=0,t.pitch=0,t.wingSpread=1,(s==="flap"||s==="flapLeft"||s==="flapRight"||s==="flapClimb")&&(t.lift=1),s==="dive"&&(t.wingSpread=0,t.pitch=-.5),(s==="climb"||s==="flapClimb")&&(t.pitch=.6),(s==="turnLeft"||s==="flapLeft")&&(t.roll=1),(s==="turnRight"||s==="flapRight")&&(t.roll=-1),this._stepTimer>=i.duration&&(this._stepTimer=0,this._currentStep++,this._currentStep<this._steps.length&&console.log(`Autopilot step ${this._currentStep}/${this._steps.length}: ${this._steps[this._currentStep].action}`)),!0}}const Mw=[{action:"flapClimb",duration:3},{action:"glide",duration:2},{action:"flapLeft",duration:3},{action:"glide",duration:2},{action:"flapRight",duration:3},{action:"flap",duration:2},{action:"dive",duration:3},{action:"flapClimb",duration:3},{action:"turnLeft",duration:4},{action:"glide",duration:3}];let U0,F0,O0;const Lf=bb(),Ga=Zb(Lf),ur=new _n(Fu,window.innerWidth/window.innerHeight,qb,Yb);ur.position.set(0,80,150);window.__camera=ur;const xr=new hb(ur,Lf.domElement);xr.target.set(0,20,0);xr.enableDamping=!0;xr.dampingFactor=.1;const sd=HE(Ga),Vn=new WE;let rl=0;for(let n=-200;n<=200;n+=50)for(let e=-200;e<=200;e+=50)rl=Math.max(rl,Dn(n,e,sd.arcs));Vn.position.y=rl+80;Vn.altitude=Vn.position.y;console.log(`Spawn height: ${Vn.position.y.toFixed(0)}m (terrain max nearby: ${rl.toFixed(0)}m)`);const ia=new XE(Vn),Sw=new jE(ur,Vn),bw=new wT(Ga);let rd=null;!("ontouchstart"in window)&&navigator.maxTouchPoints<=1&&(rd=new RT(Ga,24));const hn=new Qb;hn.onModeChange=n=>{Hn&&(n?Hn.hide():Hn.show())};let Ui=null,B0=null,od=!1;(async()=>{const n=await Wf(()=>import("./MobileInput-CkiISwYS.js"),[]);U0=n.MobileInput,F0=n.isMobileDevice,od=F0(),od&&(O0=(await Wf(()=>import("./MobileUI-DeR4zWVi.js"),__vite__mapDeps([0,1]))).MobileUI,Ui=new U0,B0=new O0(Ui),Fs.hint.style.display="none",B0.onStart(()=>{console.log("Mobile game started");let t=0;document.addEventListener("touchend",()=>{const i=Date.now();i-t<300&&(Ui.calibrate(),console.log("Recalibrated")),t=i})}))})();const Fs=new eE,Ia=new yw;window.__scene=Ga;window.__startAutopilot=n=>{si||(si=!0,xr.enabled=!1,Fs.el.style.display="block",Fs.flapIndicator.style.display="flex"),Ia.start(n||Mw)};window.__stopAutopilot=()=>Ia.stop();const La=new CT,_a=new fw,ol=new xw;let Hn=null,Df=!1,si=!0;async function Ew(){if("ontouchstart"in window||navigator.maxTouchPoints>0){console.log("Touch device detected — skipping webcam init");return}const n=await La.init();if(!n){console.warn("Webcam not available, using keyboard only.");return}if(await _a.init(),!_a.ready){console.warn("Pose detection not available, using keyboard only.");return}Hn=new nE(n),Df=!0,hn.poseAvailable=!0,hn.forceKeyboard?Hn.hide():Hn.show(),setTimeout(()=>{const e=_a.detect(La.video);e&&(ol.calibrate(e),console.log("Pose calibrated! Raise and lower arms to fly."))},2e3)}window.addEventListener("keydown",n=>{if(n.code==="KeyF"&&(si=!si,xr.enabled=!si,Fs.el.style.display=si?"block":"none",Fs.flapIndicator.style.display=si?"flex":"none",si&&Hn?Hn.show():Hn&&Hn.hide(),Fs.hint.innerHTML=si?"SPACE = Flap &nbsp;|&nbsp; A/D = Turn &nbsp;|&nbsp; W = Dive &nbsp;|&nbsp; S = Climb &nbsp;|&nbsp; T = Toggle Webcam/Keys &nbsp;|&nbsp; F = Debug Cam &nbsp;|&nbsp; C = Recalibrate":"F = Enter Flight Mode &nbsp;|&nbsp; Mouse = Orbit Camera"),n.code==="KeyP"&&(Ia.active?Ia.stop():window.__startAutopilot()),n.code==="KeyR"&&!si&&(localStorage.removeItem("world_arcs"),localStorage.removeItem("world_heightmap"),localStorage.removeItem("world_resolution"),localStorage.removeItem("world_version"),console.log("World cache cleared — reloading..."),location.reload()),n.code==="KeyC"&&si&&Df){const e=_a.detect(La.video);e&&(ol.calibrate(e),console.log("Recalibrated!"))}});xr.enabled=!1;Fs.hint.innerHTML="SPACE = Flap &nbsp;|&nbsp; A/D = Turn &nbsp;|&nbsp; W = Dive &nbsp;|&nbsp; S = Climb &nbsp;|&nbsp; T = Toggle Webcam/Keys &nbsp;|&nbsp; F = Debug Cam &nbsp;|&nbsp; P = Autopilot";const V1=new Jb;V1.onUpdate(n=>{if(sd.update(n,ur,Vn.altitude),si){if(Df&&La.ready){const t=_a.detect(La.video),i=ol.analyze(t);hn.setPoseInput(i),Hn&&(Hn.drawSkeleton(t),Hn.showGesture(ol.gesture))}hn.update(n),Ia.update(n,hn),Ui&&Ui.active&&(Ui.update(n),hn.source="mobile",hn.pitch=Ui.pitch,hn.roll=Ui.roll,hn.lift=Ui.lift,hn.wingSpread=Ui.wingSpread),Vn.wingSpread=hn.wingSpread,ia.flap(hn.lift),ia.applyRoll(hn.roll,n),ia.applyPitch(hn.pitch,n),ia.update(n);const e=Dn(Vn.position.x,Vn.position.z,sd.arcs);ia.enforceGround(e),Sw.update(n),bw.update(Vn,n,ur),rd&&rd.update(Vn,n),Fs.update(Vn,hn.lift>0,hn.source)}else xr.update();Lf.render(Ga,ur)});V1.start();od||Ew();export{Ns as c};
