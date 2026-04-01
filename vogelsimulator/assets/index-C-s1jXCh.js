(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="183",Ur={ROTATE:0,DOLLY:1,PAN:2},Lr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},e_=0,Ff=1,n_=2,Ka=1,i_=2,Ro=3,Zi=0,gn=1,ri=2,ji=0,Fr=1,Nf=2,Of=3,Bf=4,s_=5,Fs=100,r_=101,o_=102,a_=103,l_=104,c_=200,h_=201,u_=202,f_=203,Vc=204,Gc=205,d_=206,p_=207,m_=208,g_=209,__=210,v_=211,x_=212,M_=213,S_=214,Hc=0,Wc=1,Xc=2,kr=3,Yc=4,qc=5,jc=6,Kc=7,iu=0,y_=1,E_=2,wi=0,nm=1,im=2,sm=3,su=4,rm=5,om=6,am=7,lm=300,js=301,zr=302,jl=303,Kl=304,_l=306,ci=1e3,qi=1001,$c=1002,nn=1003,b_=1004,fa=1005,hn=1006,$l=1007,Os=1008,Dn=1009,cm=1010,hm=1011,Vo=1012,ru=1013,Ri=1014,hi=1015,Pi=1016,ou=1017,au=1018,Go=1020,um=35902,fm=35899,dm=1021,pm=1022,ui=1023,Ji=1026,Bs=1027,lu=1028,cu=1029,Vr=1030,hu=1031,uu=1033,$a=33776,Za=33777,Ja=33778,Qa=33779,Zc=35840,Jc=35841,Qc=35842,th=35843,eh=36196,nh=37492,ih=37496,sh=37488,rh=37489,oh=37490,ah=37491,lh=37808,ch=37809,hh=37810,uh=37811,fh=37812,dh=37813,ph=37814,mh=37815,gh=37816,_h=37817,vh=37818,xh=37819,Mh=37820,Sh=37821,yh=36492,Eh=36494,bh=36495,Th=36283,Ah=36284,wh=36285,Ch=36286,T_=3200,mm=0,A_=1,_s="",Ve="srgb",Gr="srgb-linear",il="linear",ae="srgb",or=7680,kf=519,w_=512,C_=513,R_=514,fu=515,P_=516,L_=517,du=518,D_=519,Rh=35044,zf="300 es",bi=2e3,Ho=2001;function I_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Wo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function U_(){const e=Wo("canvas");return e.style.display="block",e}const Vf={};function sl(...e){const t="THREE."+e.shift();console.log(t,...e)}function gm(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=gm(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Zt(...e){e=gm(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function rl(...e){const t=e.join(" ");t in Vf||(Vf[t]=!0,Nt(...e))}function F_(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const N_={[Hc]:Wc,[Xc]:jc,[Yc]:Kc,[kr]:qc,[Wc]:Hc,[jc]:Xc,[Kc]:Yc,[qc]:kr};class Qs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gf=1234567;const Uo=Math.PI/180,Xo=180/Math.PI;function Ki(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[e&255]+an[e>>8&255]+an[e>>16&255]+an[e>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function pu(e,t){return(e%t+t)%t}function O_(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function B_(e,t,n){return e!==t?(n-e)/(t-e):0}function Fo(e,t,n){return(1-n)*e+n*t}function k_(e,t,n,i){return Fo(e,t,1-Math.exp(-n*i))}function z_(e,t=1){return t-Math.abs(pu(e,t*2)-t)}function V_(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function G_(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function H_(e,t){return e+Math.floor(Math.random()*(t-e+1))}function W_(e,t){return e+Math.random()*(t-e)}function X_(e){return e*(.5-Math.random())}function Y_(e){e!==void 0&&(Gf=e);let t=Gf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q_(e){return e*Uo}function j_(e){return e*Xo}function K_(e){return(e&e-1)===0&&e!==0}function $_(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Z_(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function J_(e,t,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":e.set(a*h,l*f,l*u,a*c);break;case"YZY":e.set(l*u,a*h,l*f,a*c);break;case"ZXZ":e.set(l*f,l*u,a*h,a*c);break;case"XZX":e.set(a*h,l*g,l*d,a*c);break;case"YXY":e.set(l*d,a*h,l*g,a*c);break;case"ZYZ":e.set(l*g,l*d,a*h,a*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function le(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Ph={DEG2RAD:Uo,RAD2DEG:Xo,generateUUID:Ki,clamp:jt,euclideanModulo:pu,mapLinear:O_,inverseLerp:B_,lerp:Fo,damp:k_,pingpong:z_,smoothstep:V_,smootherstep:G_,randInt:H_,randFloat:W_,randFloatSpread:X_,seededRandom:Y_,degToRad:q_,radToDeg:j_,isPowerOfTwo:K_,ceilPowerOfTwo:$_,floorPowerOfTwo:Z_,setQuaternionFromProperEuler:J_,normalize:le,denormalize:oi};class Dt{constructor(t=0,n=0){Dt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,a=Math.sin(a*S)/b,l=l*p+u*a,c=c*p+d*a,h=h*p+g*a,f=f*p+x*a}else{l=l*p+u*a,c=c*p+d*a,h=h*p+g*a,f=f*p+x*a;const S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[n]=a*g+h*f+l*d-c*u,t[n+1]=l*g+h*u+c*f-a*d,t[n+2]=c*g+h*d+a*u-l*f,t[n+3]=h*g-a*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,n=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Hf.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Hf.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zl=new L,Hf=new Qi;class Gt{constructor(t,n,i,s,r,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c)}set(t,n,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],x=s[0],m=s[3],p=s[6],S=s[1],b=s[4],y=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*x+a*S+l*C,r[3]=o*m+a*b+l*A,r[6]=o*p+a*y+l*w,r[1]=c*x+h*S+f*C,r[4]=c*m+h*b+f*A,r[7]=c*p+h*y+f*w,r[2]=u*x+d*S+g*C,r[5]=u*m+d*b+g*A,r[8]=u*p+d*y+g*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,d=c*r-o*l,g=n*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=u*x,t[4]=(h*n-s*l)*x,t[5]=(s*r-a*n)*x,t[6]=d*x,t[7]=(i*l-c*n)*x,t[8]=(o*n-i*r)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Jl.makeScale(t,n)),this}rotate(t){return this.premultiply(Jl.makeRotation(-t)),this}translate(t,n){return this.premultiply(Jl.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jl=new Gt,Wf=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xf=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q_(){const e={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_s?il:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Gr]:{primaries:t,whitePoint:i,transfer:il,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:i,transfer:ae,toXYZ:Wf,fromXYZ:Xf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}const Jt=Q_();function $i(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Nr(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let ar;class t1{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ar===void 0&&(ar=Wo("canvas")),ar.width=t.width,ar.height=t.height;const s=ar.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ar}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Wo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$i(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let e1=0;class mu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ql(s[o].image)):r.push(Ql(s[o]))}else r=Ql(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function Ql(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?t1.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}let n1=0;const tc=new L;class sn extends Qs{constructor(t=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=qi,s=qi,r=hn,o=Os,a=ui,l=Dn,c=sn.DEFAULT_ANISOTROPY,h=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Ki(),this.name="",this.source=new mu(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ci:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case $c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ci:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case $c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=lm;sn.DEFAULT_ANISOTROPY=1;class ye{constructor(t=0,n=0,i=0,s=1){ye.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,y=(d+1)/2,C=(p+1)/2,A=(h+u)/4,w=(f+x)/4,v=(g+m)/4;return b>y&&b>C?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=A/i,r=w/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=v/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=v/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-x)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i1 extends Qs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new ye(0,0,t,n),this.scissorTest=!1,this.viewport=new ye(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new sn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new mu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends i1{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class _m extends sn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class s1 extends sn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ie{constructor(t,n,i,s,r,o,a,l,c,h,f,u,d,g,x,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c,h,f,u,d,g,x,m)}set(t,n,i,s,r,o,a,l,c,h,f,u,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,s=1/lr.setFromMatrixColumn(t,0).length(),r=1/lr.setFromMatrixColumn(t,1).length(),o=1/lr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,x=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=d+g*c,n[5]=u-x*c,n[9]=-a*l,n[2]=x-u*c,n[6]=g+d*c,n[10]=o*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,g=c*h,x=c*f;n[0]=u+x*a,n[4]=g*a-d,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=d*a-g,n[6]=x+u*a,n[10]=o*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,g=c*h,x=c*f;n[0]=u-x*a,n[4]=-o*f,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*h,n[9]=x-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,x=a*f;n[0]=l*h,n[4]=g*c-d,n[8]=u*c+x,n[1]=l*f,n[5]=x*c+u,n[9]=d*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const u=o*l,d=o*c,g=a*l,x=a*c;n[0]=l*h,n[4]=x-u*f,n[8]=g*f+d,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=d*f+g,n[10]=u-x*f}else if(t.order==="XZY"){const u=o*l,d=o*c,g=a*l,x=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=u*f+x,n[5]=o*h,n[9]=d*f-g,n[2]=g*f-d,n[6]=a*h,n[10]=x*f+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r1,t,o1)}lookAt(t,n,i){const s=this.elements;return An.subVectors(t,n),An.lengthSq()===0&&(An.z=1),An.normalize(),ls.crossVectors(i,An),ls.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ls.crossVectors(i,An)),ls.normalize(),da.crossVectors(An,ls),s[0]=ls.x,s[4]=da.x,s[8]=An.x,s[1]=ls.y,s[5]=da.y,s[9]=An.y,s[2]=ls.z,s[6]=da.z,s[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],b=i[7],y=i[11],C=i[15],A=s[0],w=s[4],v=s[8],E=s[12],W=s[1],R=s[5],U=s[9],O=s[13],G=s[2],B=s[6],N=s[10],k=s[14],Z=s[3],K=s[7],ct=s[11],ft=s[15];return r[0]=o*A+a*W+l*G+c*Z,r[4]=o*w+a*R+l*B+c*K,r[8]=o*v+a*U+l*N+c*ct,r[12]=o*E+a*O+l*k+c*ft,r[1]=h*A+f*W+u*G+d*Z,r[5]=h*w+f*R+u*B+d*K,r[9]=h*v+f*U+u*N+d*ct,r[13]=h*E+f*O+u*k+d*ft,r[2]=g*A+x*W+m*G+p*Z,r[6]=g*w+x*R+m*B+p*K,r[10]=g*v+x*U+m*N+p*ct,r[14]=g*E+x*O+m*k+p*ft,r[3]=S*A+b*W+y*G+C*Z,r[7]=S*w+b*R+y*B+C*K,r[11]=S*v+b*U+y*N+C*ct,r[15]=S*E+b*O+y*k+C*ft,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],S=l*d-c*u,b=a*d-c*f,y=a*u-l*f,C=o*d-c*h,A=o*u-l*h,w=o*f-a*h;return n*(x*S-m*b+p*y)-i*(g*S-m*C+p*A)+s*(g*b-x*C+p*w)-r*(g*y-x*A+m*w)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=n*a-i*o,b=n*l-s*o,y=n*c-r*o,C=i*l-s*a,A=i*c-r*a,w=s*c-r*l,v=h*x-f*g,E=h*m-u*g,W=h*p-d*g,R=f*m-u*x,U=f*p-d*x,O=u*p-d*m,G=S*O-b*U+y*R+C*W-A*E+w*v;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/G;return t[0]=(a*O-l*U+c*R)*B,t[1]=(s*U-i*O-r*R)*B,t[2]=(x*w-m*A+p*C)*B,t[3]=(u*A-f*w-d*C)*B,t[4]=(l*W-o*O-c*E)*B,t[5]=(n*O-s*W+r*E)*B,t[6]=(m*y-g*w-p*b)*B,t[7]=(h*w-u*y+d*b)*B,t[8]=(o*U-a*W+c*v)*B,t[9]=(i*W-n*U-r*v)*B,t[10]=(g*A-x*y+p*S)*B,t[11]=(f*y-h*A-d*S)*B,t[12]=(a*E-o*R-l*v)*B,t[13]=(n*R-i*E+s*v)*B,t[14]=(x*b-g*C-m*S)*B,t[15]=(h*C-f*b+u*S)*B,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,f=a+a,u=r*c,d=r*h,g=r*f,x=o*h,m=o*f,p=a*f,S=l*c,b=l*h,y=l*f,C=i.x,A=i.y,w=i.z;return s[0]=(1-(x+p))*C,s[1]=(d+y)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(u+p))*A,s[6]=(m+S)*A,s[7]=0,s[8]=(g+b)*w,s[9]=(m-S)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=lr.set(s[0],s[1],s[2]).length();const a=lr.set(s[4],s[5],s[6]).length(),l=lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);const c=1/o,h=1/a,f=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=f,ni.elements[9]*=f,ni.elements[10]*=f,n.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(t,n,i,s,r,o,a=bi,l=!1){const c=this.elements,h=2*r/(n-t),f=2*r/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===bi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ho)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=bi,l=!1){const c=this.elements,h=2/(n-t),f=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===bi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ho)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const lr=new L,ni=new ie,r1=new L(0,0,0),o1=new L(1,1,1),ls=new L,da=new L,An=new L,Yf=new ie,qf=new Qi;class Li{constructor(t=0,n=0,i=0,s=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yf,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return qf.setFromEuler(this),this.setFromQuaternion(qf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class vm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let a1=0;const jf=new L,cr=new Qi,zi=new ie,pa=new L,go=new L,l1=new L,c1=new Qi,Kf=new L(1,0,0),$f=new L(0,1,0),Zf=new L(0,0,1),Jf={type:"added"},h1={type:"removed"},hr={type:"childadded",child:null},ec={type:"childremoved",child:null};class He extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new L,n=new Li,i=new Qi,s=new L(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Gt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return cr.setFromAxisAngle(t,n),this.quaternion.multiply(cr),this}rotateOnWorldAxis(t,n){return cr.setFromAxisAngle(t,n),this.quaternion.premultiply(cr),this}rotateX(t){return this.rotateOnAxis(Kf,t)}rotateY(t){return this.rotateOnAxis($f,t)}rotateZ(t){return this.rotateOnAxis(Zf,t)}translateOnAxis(t,n){return jf.copy(t).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Kf,t)}translateY(t){return this.translateOnAxis($f,t)}translateZ(t){return this.translateOnAxis(Zf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?pa.copy(t):pa.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(go,pa,this.up):zi.lookAt(pa,go,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(zi),this.quaternion.premultiply(cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jf),hr.child=t,this.dispatchEvent(hr),hr.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(h1),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jf),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,l1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,c1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}He.DEFAULT_UP=new L(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zn extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ma={h:0,s:0,l:0};function ic(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class qt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=pu(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=ic(o,r,t+1/3),this.g=ic(o,r,t),this.b=ic(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=Ve){function i(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ve){const i=xm[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return Jt.workingToColorSpace(ln.copy(this),t),Math.round(jt(ln.r*255,0,255))*65536+Math.round(jt(ln.g*255,0,255))*256+Math.round(jt(ln.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(ln.copy(this),n);const i=ln.r,s=ln.g,r=ln.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(ln.copy(this),n),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ve){Jt.workingToColorSpace(ln.copy(this),t);const n=ln.r,i=ln.g,s=ln.b;return t!==Ve?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(cs),this.setHSL(cs.h+t,cs.s+n,cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(cs),t.getHSL(ma);const i=Fo(cs.h,ma.h,n),s=Fo(cs.s,ma.s,n),r=Fo(cs.l,ma.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new qt;qt.NAMES=xm;class gu{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=n,this.far=i}clone(){return new gu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qf extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ii=new L,Vi=new L,sc=new L,Gi=new L,ur=new L,fr=new L,td=new L,rc=new L,oc=new L,ac=new L,lc=new ye,cc=new ye,hc=new ye;class $n{constructor(t=new L,n=new L,i=new L){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),ii.subVectors(t,n),s.cross(ii);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){ii.subVectors(s,n),Vi.subVectors(i,n),sc.subVectors(t,n);const o=ii.dot(ii),a=ii.dot(Vi),l=ii.dot(sc),c=Vi.dot(Vi),h=Vi.dot(sc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(t,n,i,s,r,o,a,l){return this.getBarycoord(t,n,i,s,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(t,n,i,s,r,o){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(t,n),cc.fromBufferAttribute(t,i),hc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lc,r.x),o.addScaledVector(cc,r.y),o.addScaledVector(hc,r.z),o}static isFrontFacing(t,n,i,s){return ii.subVectors(i,n),Vi.subVectors(t,n),ii.cross(Vi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ii.cross(Vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return $n.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return $n.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let o,a;ur.subVectors(s,i),fr.subVectors(r,i),rc.subVectors(t,i);const l=ur.dot(rc),c=fr.dot(rc);if(l<=0&&c<=0)return n.copy(i);oc.subVectors(t,s);const h=ur.dot(oc),f=fr.dot(oc);if(h>=0&&f<=h)return n.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(ur,o);ac.subVectors(t,r);const d=ur.dot(ac),g=fr.dot(ac);if(g>=0&&d<=g)return n.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(fr,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return td.subVectors(r,s),a=(f-h)/(f-h+(d-g)),n.copy(s).addScaledVector(td,a);const p=1/(m+x+u);return o=x*p,a=u*p,n.copy(i).addScaledVector(ur,o).addScaledVector(fr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rs{constructor(t=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),_a.subVectors(this.max,_o),dr.subVectors(t.a,_o),pr.subVectors(t.b,_o),mr.subVectors(t.c,_o),hs.subVectors(pr,dr),us.subVectors(mr,pr),Cs.subVectors(dr,mr);let n=[0,-hs.z,hs.y,0,-us.z,us.y,0,-Cs.z,Cs.y,hs.z,0,-hs.x,us.z,0,-us.x,Cs.z,0,-Cs.x,-hs.y,hs.x,0,-us.y,us.x,0,-Cs.y,Cs.x,0];return!uc(n,dr,pr,mr,_a)||(n=[1,0,0,0,1,0,0,0,1],!uc(n,dr,pr,mr,_a))?!1:(va.crossVectors(hs,us),n=[va.x,va.y,va.z],uc(n,dr,pr,mr,_a))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hi=[new L,new L,new L,new L,new L,new L,new L,new L],si=new L,ga=new rs,dr=new L,pr=new L,mr=new L,hs=new L,us=new L,Cs=new L,_o=new L,_a=new L,va=new L,Rs=new L;function uc(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Rs.fromArray(e,r);const a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=t.dot(Rs),c=n.dot(Rs),h=i.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ne=new L,xa=new Dt;let f1=0;class _n{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:f1++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xa.fromBufferAttribute(this,n),xa.applyMatrix3(t),this.setXY(n,xa.x,xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix3(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyMatrix4(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.applyNormalMatrix(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ne.fromBufferAttribute(this,n),Ne.transformDirection(t),this.setXYZ(n,Ne.x,Ne.y,Ne.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=oi(n,this.array)),n}setX(t,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=oi(n,this.array)),n}setY(t,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=oi(n,this.array)),n}setZ(t,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=oi(n,this.array)),n}setW(t,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=le(n,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}}class Mm extends _n{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Sm extends _n{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class vn extends _n{constructor(t,n,i){super(new Float32Array(t),n,i)}}const d1=new rs,vo=new L,fc=new L;class ta{constructor(t=new L,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):d1.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vo.subVectors(t,this.center);const n=vo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vo.copy(t.center).add(fc)),this.expandByPoint(vo.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let p1=0;const Hn=new ie,dc=new He,gr=new L,wn=new rs,xo=new rs,Ze=new L;class zn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p1++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I_(t)?Sm:Mm)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Gt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,n,i){return Hn.makeTranslation(t,n,i),this.applyMatrix4(Hn),this}scale(t,n,i){return Hn.makeScale(t,n,i),this.applyMatrix4(Hn),this}lookAt(t){return dc.lookAt(t),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ta);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];xo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(wn.min,xo.min),wn.expandByPoint(Ze),Ze.addVectors(wn.max,xo.max),wn.expandByPoint(Ze)):(wn.expandByPoint(xo.min),wn.expandByPoint(xo.max))}wn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ze));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(gr.fromBufferAttribute(t,c),Ze.add(gr)),s=Math.max(s,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new L,l[v]=new L;const c=new L,h=new L,f=new L,u=new Dt,d=new Dt,g=new Dt,x=new L,m=new L;function p(v,E,W){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,W),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,W),h.sub(c),f.sub(c),d.sub(u),g.sub(u);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(R),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[v].add(x),a[E].add(x),a[W].add(x),l[v].add(m),l[E].add(m),l[W].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,E=S.length;v<E;++v){const W=S[v],R=W.start,U=W.count;for(let O=R,G=R+U;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const b=new L,y=new L,C=new L,A=new L;function w(v){C.fromBufferAttribute(s,v),A.copy(C);const E=a[v];b.copy(E),b.sub(C.multiplyScalar(C.dot(E))).normalize(),y.crossVectors(A,E);const R=y.dot(l[v])<0?-1:1;o.setXYZW(v,b.x,b.y,b.z,R)}for(let v=0,E=S.length;v<E;++v){const W=S[v],R=W.start,U=W.count;for(let O=R,G=R+U;O<G;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Ze.fromBufferAttribute(t,n),Ze.normalize(),t.setXYZ(n,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new _n(u,h,f)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m1{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new L;class ol{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyMatrix4(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.applyNormalMatrix(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)pn.fromBufferAttribute(this,n),pn.transformDirection(t),this.setXYZ(n,pn.x,pn.y,pn.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=oi(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=oi(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=oi(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=oi(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=oi(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=le(n,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=le(n,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new _n(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ol(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let g1=0;class eo extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Fr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vc&&(i.blendSrc=this.blendSrc),this.blendDst!==Gc&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dr extends eo{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _r;const Mo=new L,vr=new L,xr=new L,Mr=new Dt,So=new Dt,ym=new ie,Ma=new L,yo=new L,Sa=new L,ed=new Dt,pc=new Dt,nd=new Dt;class Po extends He{constructor(t=new Dr){if(super(),this.isSprite=!0,this.type="Sprite",_r===void 0){_r=new zn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new m1(n,5);_r.setIndex([0,1,2,0,2,3]),_r.setAttribute("position",new ol(i,3,0,!1)),_r.setAttribute("uv",new ol(i,2,3,!1))}this.geometry=_r,this.material=t,this.center=new Dt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vr.setFromMatrixScale(this.matrixWorld),ym.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vr.multiplyScalar(-xr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ya(Ma.set(-.5,-.5,0),xr,o,vr,s,r),ya(yo.set(.5,-.5,0),xr,o,vr,s,r),ya(Sa.set(.5,.5,0),xr,o,vr,s,r),ed.set(0,0),pc.set(1,0),nd.set(1,1);let a=t.ray.intersectTriangle(Ma,yo,Sa,!1,Mo);if(a===null&&(ya(yo.set(-.5,.5,0),xr,o,vr,s,r),pc.set(0,1),a=t.ray.intersectTriangle(Ma,Sa,yo,!1,Mo),a===null))return;const l=t.ray.origin.distanceTo(Mo);l<t.near||l>t.far||n.push({distance:l,point:Mo.clone(),uv:$n.getInterpolation(Mo,Ma,yo,Sa,ed,pc,nd,new Dt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ya(e,t,n,i,s,r){Mr.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(So.x=r*Mr.x-s*Mr.y,So.y=s*Mr.x+r*Mr.y):So.copy(Mr),e.copy(t),e.x+=So.x,e.y+=So.y,e.applyMatrix4(ym)}const Wi=new L,mc=new L,Ea=new L,fs=new L,gc=new L,ba=new L,_c=new L;class Em{constructor(t=new L,n=new L(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Wi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){mc.copy(t).add(n).multiplyScalar(.5),Ea.copy(n).sub(t).normalize(),fs.copy(this.origin).sub(mc);const r=t.distanceTo(n)*.5,o=-this.direction.dot(Ea),a=fs.dot(this.direction),l=-fs.dot(Ea),c=fs.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,d=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(mc).addScaledVector(Ea,u),d}intersectSphere(t,n){Wi.subVectors(t.center,this.origin);const i=Wi.dot(this.direction),s=Wi.dot(Wi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,n,i,s,r){gc.subVectors(n,t),ba.subVectors(i,t),_c.crossVectors(gc,ba);let o=this.direction.dot(_c),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fs.subVectors(this.origin,t);const l=a*this.direction.dot(ba.crossVectors(fs,ba));if(l<0)return null;const c=a*this.direction.dot(gc.cross(fs));if(c<0||l+c>o)return null;const h=-a*fs.dot(_c);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bm extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const id=new ie,Ps=new Em,Ta=new ta,sd=new L,Aa=new L,wa=new L,Ca=new L,vc=new L,Ra=new L,rd=new L,Pa=new L;class tn extends He{constructor(t=new zn,n=new bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(vc.fromBufferAttribute(f,t),o?Ra.addScaledVector(vc,h):Ra.addScaledVector(vc.sub(n),h))}n.add(Ra)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ps.copy(t.ray).recast(t.near),!(Ta.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Ta,sd)===null||Ps.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(id.copy(r).invert(),Ps.copy(t.ray).applyMatrix4(id),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Ps)))}_computeIntersections(t,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=b;y<C;y+=3){const A=a.getX(y),w=a.getX(y+1),v=a.getX(y+2);s=La(this,p,t,i,c,h,f,A,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);s=La(this,o,t,i,c,h,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=b;y<C;y+=3){const A=y,w=y+1,v=y+2;s=La(this,p,t,i,c,h,f,A,w,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const S=m,b=m+1,y=m+2;s=La(this,o,t,i,c,h,f,S,b,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function _1(e,t,n,i,s,r,o,a){let l;if(t.side===gn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Zi,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Pa);return c<n.near||c>n.far?null:{distance:c,point:Pa.clone(),object:e}}function La(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,Aa),e.getVertexPosition(l,wa),e.getVertexPosition(c,Ca);const h=_1(e,t,n,i,Aa,wa,Ca,rd);if(h){const f=new L;$n.getBarycoord(rd,Aa,wa,Ca,f),s&&(h.uv=$n.getInterpolatedAttribute(s,a,l,c,f,new Dt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,l,c,f,new Dt)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,f,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};$n.getNormal(Aa,wa,Ca,u.normal),h.face=u,h.barycoord=f}return h}class Tm extends sn{constructor(t=null,n=1,i=1,s,r,o,a,l,c=nn,h=nn,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class od extends _n{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Sr=new ie,ad=new ie,Da=[],ld=new rs,v1=new ie,Eo=new tn,bo=new ta;class Lh extends tn{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new od(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,v1)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Sr),ld.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(ld)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ta),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Sr),bo.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(bo)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,n){const i=this.matrixWorld,s=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),t.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Sr),ad.multiplyMatrices(i,Sr),Eo.matrixWorld=ad,Eo.raycast(t,Da);for(let o=0,a=Da.length;o<a;o++){const l=Da[o];l.instanceId=r,l.object=this,n.push(l)}Da.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new od(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Tm(new Float32Array(s*this.count),s,this.count,lu,hi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xc=new L,x1=new L,M1=new Gt;class Xi{constructor(t=new L(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=xc.subVectors(i,n).cross(x1.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(xc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||M1.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new ta,S1=new Dt(.5,.5),Ia=new L;class vl{constructor(t=new Xi,n=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=bi,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],b=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-o,d-h,p-g,C-S).normalize(),s[1].setComponents(c+o,d+h,p+g,C+S).normalize(),s[2].setComponents(c+a,d+f,p+x,C+b).normalize(),s[3].setComponents(c-a,d-f,p-x,C-b).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,p-m,C-y).normalize();else if(s[4].setComponents(c-l,d-u,p-m,C-y).normalize(),n===bi)s[5].setComponents(c+l,d+u,p+m,C+y).normalize();else if(n===Ho)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const n=S1.distanceTo(t.center);return Ls.radius=.7071067811865476+n,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Am extends sn{constructor(t=[],n=js,i,s,r,o,a,l,c,h){super(t,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ks extends sn{constructor(t,n,i,s,r,o,a,l,c){super(t,n,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yo extends sn{constructor(t,n,i=Ri,s,r,o,a=nn,l=nn,c,h=Ji,f=1){if(h!==Ji&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:n,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class y1 extends Yo{constructor(t,n=Ri,i=js,s,r,o=nn,a=nn,l,c=Ji){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wm extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bs extends zn{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(h,3)),this.setAttribute("uv",new vn(f,2));function g(x,m,p,S,b,y,C,A,w,v,E){const W=y/w,R=C/v,U=y/2,O=C/2,G=A/2,B=w+1,N=v+1;let k=0,Z=0;const K=new L;for(let ct=0;ct<N;ct++){const ft=ct*R-O;for(let ht=0;ht<B;ht++){const Ft=ht*W-U;K[x]=Ft*S,K[m]=ft*b,K[p]=G,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),f.push(ht/w),f.push(1-ct/v),k+=1}}for(let ct=0;ct<v;ct++)for(let ft=0;ft<w;ft++){const ht=u+ft+B*ct,Ft=u+ft+B*(ct+1),xe=u+(ft+1)+B*(ct+1),ve=u+(ft+1)+B*ct;l.push(ht,Ft,ve),l.push(Ft,xe,ve),Z+=6}a.addGroup(d,Z,E),d+=Z,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ea extends zn{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const x=[],m=i/2;let p=0;S(),o===!1&&(t>0&&b(!0),n>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new vn(f,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function S(){const y=new L,C=new L;let A=0;const w=(n-t)/i;for(let v=0;v<=r;v++){const E=[],W=v/r,R=W*(n-t)+t;for(let U=0;U<=s;U++){const O=U/s,G=O*l+a,B=Math.sin(G),N=Math.cos(G);C.x=R*B,C.y=-W*i+m,C.z=R*N,f.push(C.x,C.y,C.z),y.set(B,w,N).normalize(),u.push(y.x,y.y,y.z),d.push(O,1-W),E.push(g++)}x.push(E)}for(let v=0;v<s;v++)for(let E=0;E<r;E++){const W=x[E][v],R=x[E+1][v],U=x[E+1][v+1],O=x[E][v+1];(t>0||E!==0)&&(h.push(W,R,O),A+=3),(n>0||E!==r-1)&&(h.push(R,U,O),A+=3)}c.addGroup(p,A,0),p+=A}function b(y){const C=g,A=new Dt,w=new L;let v=0;const E=y===!0?t:n,W=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*W,0),u.push(0,W,0),d.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const G=U/s*l+a,B=Math.cos(G),N=Math.sin(G);w.x=E*N,w.y=m*W,w.z=E*B,f.push(w.x,w.y,w.z),u.push(0,W,0),A.x=B*.5+.5,A.y=N*.5*W+.5,d.push(A.x,A.y),g++}for(let U=0;U<s;U++){const O=C+U,G=R+U;y===!0?h.push(G,G+1,O):h.push(G+1,G,O),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _u extends ea{constructor(t=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new _u(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends zn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=n/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*u-o;for(let b=0;b<c;b++){const y=b*f-r;g.push(y,-S,0),x.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const b=S+c*p,y=S+c*(p+1),C=S+1+c*(p+1),A=S+1+c*p;d.push(b,y,A),d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class vu extends zn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new L,u=new L,d=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const S=[],b=p/i;let y=0;p===0&&o===0?y=.5/n:p===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const A=C/n;f.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),f.y=t*Math.cos(o+b*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(A+y,1-b),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<n;S++){const b=h[p][S+1],y=h[p][S],C=h[p+1][S],A=h[p+1][S+1];(p!==0||o>0)&&d.push(b,y,A),(p!==i-1||l<Math.PI)&&d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(x,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Hr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function mn(e){const t={};for(let n=0;n<e.length;n++){const i=Hr(e[n]);for(const s in i)t[s]=i[s]}return t}function E1(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Cm(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const al={clone:Hr,merge:mn};var b1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b1,this.fragmentShader=T1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hr(t.uniforms),this.uniformsGroups=E1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class A1 extends Nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class No extends eo{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mm,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=iu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class w1 extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class C1 extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(cd(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!cd(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function cd(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class R1{constructor(t,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const P1=new R1;class xu{constructor(t){this.manager=t!==void 0?t:P1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}xu.DEFAULT_MATERIAL_NAME="__DEFAULT";const yr=new WeakMap;class L1 extends xu{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(o),r.manager.itemEnd(t)},0);else{let f=yr.get(o);f===void 0&&(f=[],yr.set(o,f)),f.push({onLoad:n,onError:s})}return o}const a=Wo("img");function l(){h(),n&&n(this);const f=yr.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}yr.delete(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),Mc.remove(`image:${t}`);const u=yr.get(this)||[];for(let d=0;d<u.length;d++){const g=u[d];g.onError&&g.onError(f)}yr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mc.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Mu extends xu{constructor(t){super(t)}load(t,n,i,s){const r=new sn,o=new L1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}}class Rm extends He{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Sc=new ie,hd=new L,ud=new L;class D1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vl,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;hd.setFromMatrixPosition(t.matrixWorld),n.position.copy(hd),ud.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(ud),n.updateMatrixWorld(),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ho||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ua=new L,Fa=new Qi,xi=new L;class Pm extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ua,Fa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,xi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Ua,Fa,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ds=new L,fd=new Dt,dd=new Dt;class Ln extends Pm{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-t/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ds.x,ds.y).multiplyScalar(-t/ds.z)}getViewSize(t,n){return this.getViewBounds(t,fd,dd),n.subVectors(dd,fd)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Uo*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Su extends Pm{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I1 extends D1{constructor(){super(new Su(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class U1 extends Rm{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new I1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class F1 extends Rm{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Er=-90,br=1;class N1 extends He{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Er,br,t,n);s.layers=this.layers,this.add(s);const r=new Ln(Er,br,t,n);r.layers=this.layers,this.add(r);const o=new Ln(Er,br,t,n);o.layers=this.layers,this.add(o);const a=new Ln(Er,br,t,n);a.layers=this.layers,this.add(a);const l=new Ln(Er,br,t,n);l.layers=this.layers,this.add(l);const c=new Ln(Er,br,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class O1 extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pd{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(jt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class B1 extends Qs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Nt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function md(e,t,n,i){const s=k1(i);switch(n){case dm:return e*t;case lu:return e*t/s.components*s.byteLength;case cu:return e*t/s.components*s.byteLength;case Vr:return e*t*2/s.components*s.byteLength;case hu:return e*t*2/s.components*s.byteLength;case pm:return e*t*3/s.components*s.byteLength;case ui:return e*t*4/s.components*s.byteLength;case uu:return e*t*4/s.components*s.byteLength;case $a:case Za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jc:case th:return Math.max(e,16)*Math.max(t,8)/4;case Zc:case Qc:return Math.max(e,8)*Math.max(t,8)/2;case eh:case nh:case sh:case rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ih:case oh:case ah:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ch:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case hh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case dh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sh:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case yh:case Eh:case bh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Th:case Ah:return Math.ceil(e/4)*Math.ceil(t/4)*8;case wh:case Ch:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k1(e){switch(e){case Dn:case cm:return{byteLength:1,components:1};case Vo:case hm:case Pi:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case Ri:case ru:case hi:return{byteLength:4,components:1};case um:case fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lm(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function z1(e){const t=new WeakMap;function n(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(e.bindBuffer(c,a),f.length===0)e.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const x=f[d];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var V1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,j1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
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
#endif`,$1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tv=`#ifdef USE_IRIDESCENCE
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
#endif`,ev=`#ifdef USE_BUMPMAP
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hv=`#define PI 3.141592653589793
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
} // validated`,uv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_v="gl_FragColor = linearToOutputTexel( gl_FragColor );",vv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xv=`#ifdef USE_ENVMAP
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
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cv=`#ifdef USE_GRADIENTMAP
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
}`,Rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dv=`uniform bool receiveShadow;
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
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bv=`PhysicalMaterial material;
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
#endif`,kv=`uniform sampler2D dfgLUT;
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
}`,zv=`
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
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$v=`#if defined( USE_POINTS_UV )
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
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,t2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`#ifdef USE_MORPHTARGETS
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
#endif`,i2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,r2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c2=`#ifdef USE_NORMALMAP
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
#endif`,h2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,u2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,d2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,g2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T2=`float getShadowMask() {
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
}`,A2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w2=`#ifdef USE_SKINNING
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
#endif`,C2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
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
#endif`,P2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U2=`#ifdef USE_TRANSMISSION
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
#endif`,F2=`#ifdef USE_TRANSMISSION
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
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V2=`uniform sampler2D t2D;
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
}`,G2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`#include <common>
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
}`,q2=`#if DEPTH_PACKING == 3200
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
}`,j2=`#define DISTANCE
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
}`,K2=`#define DISTANCE
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`uniform float scale;
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
}`,Q2=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,ex=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define LAMBERT
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
}`,sx=`#define MATCAP
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
}`,rx=`#define MATCAP
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
}`,ox=`#define NORMAL
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
}`,ax=`#define NORMAL
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
}`,lx=`#define PHONG
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
}`,cx=`#define PHONG
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
}`,hx=`#define STANDARD
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
}`,ux=`#define STANDARD
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
}`,fx=`#define TOON
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
}`,dx=`#define TOON
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
}`,px=`uniform float size;
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
}`,mx=`uniform vec3 diffuse;
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
}`,gx=`#include <common>
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
}`,_x=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,xx=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:V1,alphahash_pars_fragment:G1,alphamap_fragment:H1,alphamap_pars_fragment:W1,alphatest_fragment:X1,alphatest_pars_fragment:Y1,aomap_fragment:q1,aomap_pars_fragment:j1,batching_pars_vertex:K1,batching_vertex:$1,begin_vertex:Z1,beginnormal_vertex:J1,bsdfs:Q1,iridescence_fragment:tv,bumpmap_pars_fragment:ev,clipping_planes_fragment:nv,clipping_planes_pars_fragment:iv,clipping_planes_pars_vertex:sv,clipping_planes_vertex:rv,color_fragment:ov,color_pars_fragment:av,color_pars_vertex:lv,color_vertex:cv,common:hv,cube_uv_reflection_fragment:uv,defaultnormal_vertex:fv,displacementmap_pars_vertex:dv,displacementmap_vertex:pv,emissivemap_fragment:mv,emissivemap_pars_fragment:gv,colorspace_fragment:_v,colorspace_pars_fragment:vv,envmap_fragment:xv,envmap_common_pars_fragment:Mv,envmap_pars_fragment:Sv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Iv,envmap_vertex:Ev,fog_vertex:bv,fog_pars_vertex:Tv,fog_fragment:Av,fog_pars_fragment:wv,gradientmap_pars_fragment:Cv,lightmap_pars_fragment:Rv,lights_lambert_fragment:Pv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Dv,lights_toon_fragment:Uv,lights_toon_pars_fragment:Fv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Ov,lights_physical_fragment:Bv,lights_physical_pars_fragment:kv,lights_fragment_begin:zv,lights_fragment_maps:Vv,lights_fragment_end:Gv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Wv,logdepthbuf_pars_vertex:Xv,logdepthbuf_vertex:Yv,map_fragment:qv,map_pars_fragment:jv,map_particle_fragment:Kv,map_particle_pars_fragment:$v,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:Jv,morphinstance_vertex:Qv,morphcolor_vertex:t2,morphnormal_vertex:e2,morphtarget_pars_vertex:n2,morphtarget_vertex:i2,normal_fragment_begin:s2,normal_fragment_maps:r2,normal_pars_fragment:o2,normal_pars_vertex:a2,normal_vertex:l2,normalmap_pars_fragment:c2,clearcoat_normal_fragment_begin:h2,clearcoat_normal_fragment_maps:u2,clearcoat_pars_fragment:f2,iridescence_pars_fragment:d2,opaque_fragment:p2,packing:m2,premultiplied_alpha_fragment:g2,project_vertex:_2,dithering_fragment:v2,dithering_pars_fragment:x2,roughnessmap_fragment:M2,roughnessmap_pars_fragment:S2,shadowmap_pars_fragment:y2,shadowmap_pars_vertex:E2,shadowmap_vertex:b2,shadowmask_pars_fragment:T2,skinbase_vertex:A2,skinning_pars_vertex:w2,skinning_vertex:C2,skinnormal_vertex:R2,specularmap_fragment:P2,specularmap_pars_fragment:L2,tonemapping_fragment:D2,tonemapping_pars_fragment:I2,transmission_fragment:U2,transmission_pars_fragment:F2,uv_pars_fragment:N2,uv_pars_vertex:O2,uv_vertex:B2,worldpos_vertex:k2,background_vert:z2,background_frag:V2,backgroundCube_vert:G2,backgroundCube_frag:H2,cube_vert:W2,cube_frag:X2,depth_vert:Y2,depth_frag:q2,distance_vert:j2,distance_frag:K2,equirect_vert:$2,equirect_frag:Z2,linedashed_vert:J2,linedashed_frag:Q2,meshbasic_vert:tx,meshbasic_frag:ex,meshlambert_vert:nx,meshlambert_frag:ix,meshmatcap_vert:sx,meshmatcap_frag:rx,meshnormal_vert:ox,meshnormal_frag:ax,meshphong_vert:lx,meshphong_frag:cx,meshphysical_vert:hx,meshphysical_frag:ux,meshtoon_vert:fx,meshtoon_frag:dx,points_vert:px,points_frag:mx,shadow_vert:gx,shadow_frag:_x,sprite_vert:vx,sprite_frag:xx},ot={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Ei={basic:{uniforms:mn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:mn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:mn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:mn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:mn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new qt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:mn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:mn([ot.points,ot.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:mn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:mn([ot.common,ot.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:mn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:mn([ot.sprite,ot.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:mn([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:mn([ot.lights,ot.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Ei.physical={uniforms:mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Na={r:0,b:0,g:0},Ds=new Li,Mx=new ie;function Sx(e,t,n,i,s,r){const o=new qt(0);let a=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let b=S.isScene===!0?S.background:null;if(b&&b.isTexture){const y=S.backgroundBlurriness>0;b=t.get(b,y)}return b}function g(S){let b=!1;const y=d(S);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(S,b){const y=d(b);y&&(y.isCubeTexture||y.mapping===_l)?(c===void 0&&(c=new tn(new bs(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Hr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ds.copy(b.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(Ds)),c.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ae,(h!==y||f!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=e.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new tn(new ts(2,2),new Nn({name:"BackgroundMaterial",uniforms:Hr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(y.colorSpace)!==ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=e.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,b){S.getRGB(Na,Cm(e)),n.buffers.color.setClear(Na.r,Na.g,Na.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,b=1){o.set(S),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:x,dispose:p}}function yx(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(R,U,O,G,B){let N=!1;const k=f(R,G,O,U);r!==k&&(r=k,c(r.object)),N=d(R,G,O,B),N&&g(R,G,O,B),B!==null&&t.update(B,e.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,y(R,U,O,G),B!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return e.createVertexArray()}function c(R){return e.bindVertexArray(R)}function h(R){return e.deleteVertexArray(R)}function f(R,U,O,G){const B=G.wireframe===!0;let N=i[U.id];N===void 0&&(N={},i[U.id]=N);const k=R.isInstancedMesh===!0?R.id:0;let Z=N[k];Z===void 0&&(Z={},N[k]=Z);let K=Z[O.id];K===void 0&&(K={},Z[O.id]=K);let ct=K[B];return ct===void 0&&(ct=u(l()),K[B]=ct),ct}function u(R){const U=[],O=[],G=[];for(let B=0;B<n;B++)U[B]=0,O[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:G,object:R,attributes:{},index:null}}function d(R,U,O,G){const B=r.attributes,N=U.attributes;let k=0;const Z=O.getAttributes();for(const K in Z)if(Z[K].location>=0){const ft=B[K];let ht=N[K];if(ht===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ft===void 0||ft.attribute!==ht||ht&&ft.data!==ht.data)return!0;k++}return r.attributesNum!==k||r.index!==G}function g(R,U,O,G){const B={},N=U.attributes;let k=0;const Z=O.getAttributes();for(const K in Z)if(Z[K].location>=0){let ft=N[K];ft===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ft=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ft=R.instanceColor));const ht={};ht.attribute=ft,ft&&ft.data&&(ht.data=ft.data),B[K]=ht,k++}r.attributes=B,r.attributesNum=k,r.index=G}function x(){const R=r.newAttributes;for(let U=0,O=R.length;U<O;U++)R[U]=0}function m(R){p(R,0)}function p(R,U){const O=r.newAttributes,G=r.enabledAttributes,B=r.attributeDivisors;O[R]=1,G[R]===0&&(e.enableVertexAttribArray(R),G[R]=1),B[R]!==U&&(e.vertexAttribDivisor(R,U),B[R]=U)}function S(){const R=r.newAttributes,U=r.enabledAttributes;for(let O=0,G=U.length;O<G;O++)U[O]!==R[O]&&(e.disableVertexAttribArray(O),U[O]=0)}function b(R,U,O,G,B,N,k){k===!0?e.vertexAttribIPointer(R,U,O,B,N):e.vertexAttribPointer(R,U,O,G,B,N)}function y(R,U,O,G){x();const B=G.attributes,N=O.getAttributes(),k=U.defaultAttributeValues;for(const Z in N){const K=N[Z];if(K.location>=0){let ct=B[Z];if(ct===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(ct=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(ct=R.instanceColor)),ct!==void 0){const ft=ct.normalized,ht=ct.itemSize,Ft=t.get(ct);if(Ft===void 0)continue;const xe=Ft.buffer,ve=Ft.type,j=Ft.bytesPerElement,nt=ve===e.INT||ve===e.UNSIGNED_INT||ct.gpuType===ru;if(ct.isInterleavedBufferAttribute){const rt=ct.data,Vt=rt.stride,It=ct.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<K.locationSize;Ot++)p(K.location+Ot,rt.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<K.locationSize;Ot++)m(K.location+Ot);e.bindBuffer(e.ARRAY_BUFFER,xe);for(let Ot=0;Ot<K.locationSize;Ot++)b(K.location+Ot,ht/K.locationSize,ve,ft,Vt*j,(It+ht/K.locationSize*Ot)*j,nt)}else{if(ct.isInstancedBufferAttribute){for(let rt=0;rt<K.locationSize;rt++)p(K.location+rt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let rt=0;rt<K.locationSize;rt++)m(K.location+rt);e.bindBuffer(e.ARRAY_BUFFER,xe);for(let rt=0;rt<K.locationSize;rt++)b(K.location+rt,ht/K.locationSize,ve,ft,ht*j,ht/K.locationSize*rt*j,nt)}}else if(k!==void 0){const ft=k[Z];if(ft!==void 0)switch(ft.length){case 2:e.vertexAttrib2fv(K.location,ft);break;case 3:e.vertexAttrib3fv(K.location,ft);break;case 4:e.vertexAttrib4fv(K.location,ft);break;default:e.vertexAttrib1fv(K.location,ft)}}}}S()}function C(){E();for(const R in i){const U=i[R];for(const O in U){const G=U[O];for(const B in G){const N=G[B];for(const k in N)h(N[k].object),delete N[k];delete G[B]}}delete i[R]}}function A(R){if(i[R.id]===void 0)return;const U=i[R.id];for(const O in U){const G=U[O];for(const B in G){const N=G[B];for(const k in N)h(N[k].object),delete N[k];delete G[B]}}delete i[R.id]}function w(R){for(const U in i){const O=i[U];for(const G in O){const B=O[G];if(B[R.id]===void 0)continue;const N=B[R.id];for(const k in N)h(N[k].object),delete N[k];delete B[R.id]}}}function v(R){for(const U in i){const O=i[U],G=R.isInstancedMesh===!0?R.id:0,B=O[G];if(B!==void 0){for(const N in B){const k=B[N];for(const Z in k)h(k[Z].object),delete k[Z];delete B[N]}delete O[G],Object.keys(O).length===0&&delete i[U]}}}function E(){W(),o=!0,r!==s&&(r=s,c(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Ex(e,t,n){let i;function s(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(e.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];n.update(d,i,1)}function l(c,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bx(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ui&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const v=w===Pi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Dn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==hi&&!v)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),S=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),b=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,maxSamples:C,samples:A}}function Tx(e){const t=this;let n=null,i=0,s=!1,r=!1;const o=new Xi,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){n=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=e.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:i,b=S*4;let y=p.clippingState||null;l.value=y,y=h(g,u,b,d);for(let C=0;C!==b;++C)y[C]=n[C];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=d;b!==x;++b,y+=4)o.copy(f[b]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const xs=4,gd=[.125,.215,.35,.446,.526,.582],Ns=20,Ax=256,To=new Su,_d=new qt;let yc=null,Ec=0,bc=0,Tc=!1;const wx=new L;class Dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=wx}=r;yc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,Ec,bc),this._renderer.xr.enabled=Tc,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===js||t.mapping===zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Pi,format:ui,colorSpace:Gr,depthBuffer:!1},s=vd(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vd(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cx(r)),this._blurMaterial=Px(r,t,n),this._ggxMaterial=Rx(r,t,n)}return s}_compileMaterial(t){const n=new tn(new zn,t);this._renderer.compile(n,To)}_sceneToCubeUV(t,n,i,s,r){const l=new Ln(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(_d),f.toneMapping=wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tn(new bs,new bm({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(_d),p=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const C=this._cubeSize;Tr(s,y*C,b>2?C:0,C,C),f.setRenderTarget(s),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=S}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===js||t.mapping===zr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Tr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,To)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-xs?i-g+xs:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-n,Tr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,To),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Tr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,To)}_blur(t,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Zt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[s];f.material=c;const u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ns-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ns;m>Ns&&Nt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const p=[];let S=0;for(let w=0;w<Ns;++w){const v=w/x,E=Math.exp(-v*v/2);p.push(E),w===0?S+=E:w<m&&(S+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;const y=this._sizeLods[s],C=3*y*(s>b-xs?s-b+xs:0),A=4*(this._cubeSize-y);Tr(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(f,To)}}function Cx(e){const t=[],n=[],i=[];let s=e;const r=e-xs+1+gd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>e-xs?l=gd[o-e+xs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),b=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,v=A>2?0:-1,E=[w,v,0,w+2/3,v,0,w+2/3,v+1,0,w,v,0,w+2/3,v+1,0,w,v+1,0];S.set(E,x*g*A),b.set(u,m*g*A);const W=[A,A,A,A,A,A];y.set(W,p*g*A)}const C=new zn;C.setAttribute("position",new _n(S,x)),C.setAttribute("uv",new _n(b,m)),C.setAttribute("faceIndex",new _n(y,p)),i.push(new tn(C,null)),s>xs&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function vd(e,t,n){const i=new di(e,t,n);return i.texture.mapping=_l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Rx(e,t,n){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ax,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Px(e,t,n){const i=new Float32Array(Ns),s=new L(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function xd(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Md(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function xl(){return`

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
	`}class Dm extends di{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Am(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bs(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:ji});r.uniforms.tEquirect.value=n;const o=new tn(s,r),a=n.minFilter;return n.minFilter===Os&&(n.minFilter=hn),new N1(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}}function Lx(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===jl||d===Kl)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new Dm(g.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const d=u.mapping,g=d===jl||d===Kl,x=d===js||d===zr;if(g||x){let m=n.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Dh(e)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return g&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new Dh(e)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===jl?u.mapping=js:d===Kl&&(u.mapping=zr),u}function l(u){let d=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&d++;return d===g}function c(u){const d=u.target;d.removeEventListener("dispose",c);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function f(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Dx(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&rl("WebGLRenderer: "+i+" extension not supported."),s}}}function Ix(e,t,n,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,n.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],e.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(d!==null){const S=d.array;x=d.version;for(let b=0,y=S.length;b<y;b+=3){const C=S[b+0],A=S[b+1],w=S[b+2];u.push(C,A,A,w,w,C)}}else{const S=g.array;x=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const C=b+0,A=b+1,w=b+2;u.push(C,A,A,w,w,C)}}const m=new(g.count>=65535?Sm:Mm)(u,1);m.version=x;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ux(e,t,n){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){e.drawElements(i,d,r,u*o),n.update(d,i,1)}function c(u,d,g){g!==0&&(e.drawElementsInstanced(i,d,r,u*o,g),n.update(d,i,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function f(u,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*x[S];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Fx(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Nx(e,t,n){const i=new WeakMap,s=new ye;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let W=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",W)};var d=W;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const w=new Float32Array(C*A*4*f),v=new _m(w,C,A,f);v.type=hi,v.needsUpdate=!0;const E=y*4;for(let R=0;R<f;R++){const U=p[R],O=S[R],G=b[R],B=C*A*4*R;for(let N=0;N<U.count;N++){const k=N*E;g===!0&&(s.fromBufferAttribute(U,N),w[B+k+0]=s.x,w[B+k+1]=s.y,w[B+k+2]=s.z,w[B+k+3]=0),x===!0&&(s.fromBufferAttribute(O,N),w[B+k+4]=s.x,w[B+k+5]=s.y,w[B+k+6]=s.z,w[B+k+7]=0),m===!0&&(s.fromBufferAttribute(G,N),w[B+k+8]=s.x,w[B+k+9]=s.y,w[B+k+10]=s.z,w[B+k+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:v,size:new Dt(C,A)},i.set(a,u),a.addEventListener("dispose",W)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:r}}function Ox(e,t,n,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const Bx={[nm]:"LINEAR_TONE_MAPPING",[im]:"REINHARD_TONE_MAPPING",[sm]:"CINEON_TONE_MAPPING",[su]:"ACES_FILMIC_TONE_MAPPING",[om]:"AGX_TONE_MAPPING",[am]:"NEUTRAL_TONE_MAPPING",[rm]:"CUSTOM_TONE_MAPPING"};function kx(e,t,n,i,s){const r=new di(t,n,{type:e,depthBuffer:i,stencilBuffer:s}),o=new di(t,n,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),a=new zn;a.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new vn([0,2,0,0,2,0],2));const l=new A1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new tn(a,l),h=new Su(-1,1,1,-1,0,1);let f=null,u=null,d=!1,g,x=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),o.setSize(S,b);for(let y=0;y<m.length;y++){const C=m[y];C.setSize&&C.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,y=r.height;for(let C=0;C<m.length;C++){const A=m[C];A.setSize&&A.setSize(b,y)}},this.begin=function(S,b){if(d||S.toneMapping===wi&&m.length===0)return!1;if(x=b,b!==null){const y=b.width,C=b.height;(r.width!==y||r.height!==C)&&this.setSize(y,C)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,d=!0;let y=r,C=o;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(S,C,y,b),w.needsSwap!==!1)){const v=y;y=C,C=v}}if(f!==S.outputColorSpace||u!==S.toneMapping){f=S.outputColorSpace,u=S.toneMapping,l.defines={},Jt.getTransfer(f)===ae&&(l.defines.SRGB_TRANSFER="");const A=Bx[u];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(x),S.render(c,h),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Im=new sn,Ih=new Yo(1,1),Um=new _m,Fm=new s1,Nm=new Am,Sd=[],yd=[],Ed=new Float32Array(16),bd=new Float32Array(9),Td=new Float32Array(4);function no(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=Sd[s];if(r===void 0&&(r=new Float32Array(s),Sd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ml(e,t){let n=yd[t];n===void 0&&(n=new Int32Array(t),yd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function zx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Vx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function Gx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function Hx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function Wx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(Ye(n,i))return;Td.set(i),e.uniformMatrix2fv(this.addr,!1,Td),qe(n,i)}}function Xx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(Ye(n,i))return;bd.set(i),e.uniformMatrix3fv(this.addr,!1,bd),qe(n,i)}}function Yx(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(Ye(n,i))return;Ed.set(i),e.uniformMatrix4fv(this.addr,!1,Ed),qe(n,i)}}function qx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function Kx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function $x(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function Zx(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Jx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function Qx(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function t3(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function e3(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Ih.compareFunction=n.isReversedDepthBuffer()?du:fu,r=Ih):r=Im,n.setTexture2D(t||r,s)}function n3(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Fm,s)}function i3(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Nm,s)}function s3(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Um,s)}function r3(e){switch(e){case 5126:return zx;case 35664:return Vx;case 35665:return Gx;case 35666:return Hx;case 35674:return Wx;case 35675:return Xx;case 35676:return Yx;case 5124:case 35670:return qx;case 35667:case 35671:return jx;case 35668:case 35672:return Kx;case 35669:case 35673:return $x;case 5125:return Zx;case 36294:return Jx;case 36295:return Qx;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return s3}}function o3(e,t){e.uniform1fv(this.addr,t)}function a3(e,t){const n=no(t,this.size,2);e.uniform2fv(this.addr,n)}function l3(e,t){const n=no(t,this.size,3);e.uniform3fv(this.addr,n)}function c3(e,t){const n=no(t,this.size,4);e.uniform4fv(this.addr,n)}function h3(e,t){const n=no(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function u3(e,t){const n=no(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function f3(e,t){const n=no(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function d3(e,t){e.uniform1iv(this.addr,t)}function p3(e,t){e.uniform2iv(this.addr,t)}function m3(e,t){e.uniform3iv(this.addr,t)}function g3(e,t){e.uniform4iv(this.addr,t)}function _3(e,t){e.uniform1uiv(this.addr,t)}function v3(e,t){e.uniform2uiv(this.addr,t)}function x3(e,t){e.uniform3uiv(this.addr,t)}function M3(e,t){e.uniform4uiv(this.addr,t)}function S3(e,t,n){const i=this.cache,s=t.length,r=Ml(n,s);Ye(i,r)||(e.uniform1iv(this.addr,r),qe(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=Ih:o=Im;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function y3(e,t,n){const i=this.cache,s=t.length,r=Ml(n,s);Ye(i,r)||(e.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||Fm,r[o])}function E3(e,t,n){const i=this.cache,s=t.length,r=Ml(n,s);Ye(i,r)||(e.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||Nm,r[o])}function b3(e,t,n){const i=this.cache,s=t.length,r=Ml(n,s);Ye(i,r)||(e.uniform1iv(this.addr,r),qe(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||Um,r[o])}function T3(e){switch(e){case 5126:return o3;case 35664:return a3;case 35665:return l3;case 35666:return c3;case 35674:return h3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return d3;case 35667:case 35671:return p3;case 35668:case 35672:return m3;case 35669:case 35673:return g3;case 5125:return _3;case 36294:return v3;case 36295:return x3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return S3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return E3;case 36289:case 36303:case 36311:case 36292:return b3}}class A3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=r3(n.type)}}class w3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=T3(n.type)}}class C3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,n[a.id],i)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Ad(e,t){e.seq.push(t),e.map[t.id]=t}function R3(e,t,n){const i=e.name,s=i.length;for(Ac.lastIndex=0;;){const r=Ac.exec(i),o=Ac.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ad(n,c===void 0?new A3(a,e,t):new w3(a,e,t));break}else{let f=n.map[a];f===void 0&&(f=new C3(a),Ad(n,f)),n=f}}}class tl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(n,o),l=t.getUniformLocation(n,a.name);R3(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in n&&i.push(o)}return i}}function wd(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const P3=37297;let L3=0;function D3(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Cd=new Gt;function I3(e){Jt._getMatrix(Cd,Jt.workingColorSpace,e);const t=`mat3( ${Cd.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case il:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Rd(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+D3(e.getShaderSource(t),a)}else return r}function U3(e,t){const n=I3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const F3={[nm]:"Linear",[im]:"Reinhard",[sm]:"Cineon",[su]:"ACESFilmic",[om]:"AgX",[am]:"Neutral",[rm]:"Custom"};function N3(e,t){const n=F3[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oa=new L;function O3(){Jt.getLuminanceCoefficients(Oa);const e=Oa.x.toFixed(4),t=Oa.y.toFixed(4),n=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function k3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function z3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),o=r.name;let a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Lo(e){return e!==""}function Pd(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ld(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(e){return e.replace(V3,H3)}const G3=new Map;function H3(e,t){let n=Ht[t];if(n===void 0){const i=G3.get(t);if(i!==void 0)n=Ht[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uh(n)}const W3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(e){return e.replace(W3,X3)}function X3(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Id(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Y3={[Ka]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function q3(e){return Y3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j3={[js]:"ENVMAP_TYPE_CUBE",[zr]:"ENVMAP_TYPE_CUBE",[_l]:"ENVMAP_TYPE_CUBE_UV"};function K3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":j3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const $3={[zr]:"ENVMAP_MODE_REFRACTION"};function Z3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":$3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J3={[iu]:"ENVMAP_BLENDING_MULTIPLY",[y_]:"ENVMAP_BLENDING_MIX",[E_]:"ENVMAP_BLENDING_ADD"};function Q3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":J3[e.combine]||"ENVMAP_BLENDING_NONE"}function tM(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function eM(e,t,n,i){const s=e.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=q3(n),c=K3(n),h=Z3(n),f=Q3(n),u=tM(n),d=B3(n),g=k3(r),x=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(m=[Id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[Id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Ht.tonemapping_pars_fragment:"",n.toneMapping!==wi?N3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,U3("linearToOutputTexel",n.outputColorSpace),O3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lo).join(`
`)),o=Uh(o),o=Pd(o,n),o=Ld(o,n),a=Uh(a),a=Pd(a,n),a=Ld(a,n),o=Dd(o),a=Dd(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,y=S+p+a,C=wd(s,s.VERTEX_SHADER,b),A=wd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,C),s.attachShader(x,A),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(e.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(C)||"",G=s.getShaderInfoLog(A)||"",B=U.trim(),N=O.trim(),k=G.trim();let Z=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,C,A);else{const ct=Rd(s,C,"vertex"),ft=Rd(s,A,"fragment");Zt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ct+`
`+ft)}else B!==""?Nt("WebGLProgram: Program Info Log:",B):(N===""||k==="")&&(K=!1);K&&(R.diagnostics={runnable:Z,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(C),s.deleteShader(A),v=new tl(s,x),E=z3(s,x)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let W=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(x,P3)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=L3++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new sM(t),n.set(t,i)),i}}class sM{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}}function rM(e,t,n,i,s,r){const o=new vm,a=new iM,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,E,W,R,U){const O=R.fog,G=U.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=t.get(v.envMap||B,N),Z=k&&k.mapping===_l?k.image.height:null,K=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Nt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=ct!==void 0?ct.length:0;let ht=0;G.morphAttributes.position!==void 0&&(ht=1),G.morphAttributes.normal!==void 0&&(ht=2),G.morphAttributes.color!==void 0&&(ht=3);let Ft,xe,ve,j;if(K){const oe=Ei[K];Ft=oe.vertexShader,xe=oe.fragmentShader}else Ft=v.vertexShader,xe=v.fragmentShader,a.update(v),ve=a.getVertexShaderID(v),j=a.getFragmentShaderID(v);const nt=e.getRenderTarget(),rt=e.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,It=U.isBatchedMesh===!0,Ot=!!v.map,Ke=!!v.matcap,$t=!!k,re=!!v.aoMap,de=!!v.lightMap,Wt=!!v.bumpMap,Le=!!v.normalMap,P=!!v.displacementMap,Fe=!!v.emissiveMap,se=!!v.metalnessMap,ge=!!v.roughnessMap,St=v.anisotropy>0,T=v.clearcoat>0,_=v.dispersion>0,I=v.iridescence>0,q=v.sheen>0,$=v.transmission>0,Y=St&&!!v.anisotropyMap,gt=T&&!!v.clearcoatMap,it=T&&!!v.clearcoatNormalMap,Rt=T&&!!v.clearcoatRoughnessMap,Ut=I&&!!v.iridescenceMap,J=I&&!!v.iridescenceThicknessMap,tt=q&&!!v.sheenColorMap,_t=q&&!!v.sheenRoughnessMap,xt=!!v.specularMap,ut=!!v.specularColorMap,Xt=!!v.specularIntensityMap,D=$&&!!v.transmissionMap,st=$&&!!v.thicknessMap,et=!!v.gradientMap,pt=!!v.alphaMap,Q=v.alphaTest>0,X=!!v.alphaHash,vt=!!v.extensions;let kt=wi;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=e.toneMapping);const _e={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:Ft,fragmentShader:xe,defines:v.defines,customVertexShaderID:ve,customFragmentShaderID:j,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:It,batchingColor:It&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:nt===null?e.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Gr,alphaToCoverage:!!v.alphaToCoverage,map:Ot,matcap:Ke,envMap:$t,envMapMode:$t&&k.mapping,envMapCubeUVHeight:Z,aoMap:re,lightMap:de,bumpMap:Wt,normalMap:Le,displacementMap:P,emissiveMap:Fe,normalMapObjectSpace:Le&&v.normalMapType===A_,normalMapTangentSpace:Le&&v.normalMapType===mm,metalnessMap:se,roughnessMap:ge,anisotropy:St,anisotropyMap:Y,clearcoat:T,clearcoatMap:gt,clearcoatNormalMap:it,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:I,iridescenceMap:Ut,iridescenceThicknessMap:J,sheen:q,sheenColorMap:tt,sheenRoughnessMap:_t,specularMap:xt,specularColorMap:ut,specularIntensityMap:Xt,transmission:$,transmissionMap:D,thicknessMap:st,gradientMap:et,opaque:v.transparent===!1&&v.blending===Fr&&v.alphaToCoverage===!1,alphaMap:pt,alphaTest:Q,alphaHash:X,combine:v.combine,mapUv:Ot&&g(v.map.channel),aoMapUv:re&&g(v.aoMap.channel),lightMapUv:de&&g(v.lightMap.channel),bumpMapUv:Wt&&g(v.bumpMap.channel),normalMapUv:Le&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:Fe&&g(v.emissiveMap.channel),metalnessMapUv:se&&g(v.metalnessMap.channel),roughnessMapUv:ge&&g(v.roughnessMap.channel),anisotropyMapUv:Y&&g(v.anisotropyMap.channel),clearcoatMapUv:gt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:it&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ut&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_t&&g(v.sheenRoughnessMap.channel),specularMapUv:xt&&g(v.specularMap.channel),specularColorMapUv:ut&&g(v.specularColorMap.channel),specularIntensityMapUv:Xt&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:st&&g(v.thicknessMap.channel),alphaMapUv:pt&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Le||St),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Ot||pt),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&Le===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&W.length>0,shadowMapType:e.shadowMap.type,toneMapping:kt,decodeVideoTexture:Ot&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ae,decodeVideoTextureEmissive:Fe&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function m(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)E.push(W),E.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(p(E,v),S(E,v),E.push(e.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function b(v){const E=d[v.type];let W;if(E){const R=Ei[E];W=al.clone(R.uniforms)}else W=v.uniforms;return W}function y(v,E){let W=h.get(E);return W!==void 0?++W.usedTimes:(W=new eM(e,E,v,s),c.push(W),h.set(E,W)),W}function C(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){a.remove(v)}function w(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:C,releaseShaderCache:A,programs:c,dispose:w}}function oM(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function aM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ud(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Fd(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,x,m,p){let S=e[t];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},e[t]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=o(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,d,g,x,m,p){const S=a(u,d,g,x,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(u,d,g,x,m,p){const S=a(u,d,g,x,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):n.unshift(S)}function h(u,d){n.length>1&&n.sort(u||aM),i.length>1&&i.sort(d||Ud),s.length>1&&s.sort(d||Ud)}function f(){for(let u=t,d=e.length;u<d;u++){const g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function lM(){let e=new WeakMap;function t(i,s){const r=e.get(i);let o;return r===void 0?(o=new Fd,e.set(i,[o])):s>=r.length?(o=new Fd,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function cM(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new L,color:new qt};break;case"SpotLight":n={position:new L,direction:new L,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=n,n}}}function hM(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let uM=0;function fM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function dM(e){const t=new cM,n=hM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const s=new L,r=new ie,o=new ie;function a(c){let h=0,f=0,u=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,S=0,b=0,y=0,C=0,A=0,w=0;c.sort(fM);for(let E=0,W=c.length;E<W;E++){const R=c[E],U=R.color,O=R.intensity,G=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Vr?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*O,f+=U.g*O,u+=U.b*O;else if(R.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(R.sh.coefficients[N],O);w++}else if(R.isDirectionalLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const k=R.shadow,Z=n.get(R);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=B,i.directionalShadowMatrix[d]=R.shadow.matrix,S++}i.directional[d]=N,d++}else if(R.isSpotLight){const N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(U).multiplyScalar(O),N.distance=G,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,i.spot[x]=N;const k=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,k.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[x]=k.matrix,R.castShadow){const Z=n.get(R);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[x]=Z,i.spotShadowMap[x]=B,y++}x++}else if(R.isRectAreaLight){const N=t.get(R);N.color.copy(U).multiplyScalar(O),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=N,m++}else if(R.isPointLight){const N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const k=R.shadow,Z=n.get(R);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=N,g++}else if(R.isHemisphereLight){const N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(O),N.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[p]=N,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const v=i.hash;(v.directionalLength!==d||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==b||v.numSpotShadows!==y||v.numSpotMaps!==C||v.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,v.directionalLength=d,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=b,v.numSpotShadows=y,v.numSpotMaps=C,v.numLightProbes=w,i.version=uM++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(b.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=i.point[u];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Nd(e){const t=new dM(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){t.setup(n)}function l(h){t.setupView(n,h)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function pM(e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Nd(e),t.set(s,[a])):r>=o.length?(a=new Nd(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const mM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
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
}`,_M=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],vM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Od=new ie,Ao=new L,wc=new L;function xM(e,t,n){let i=new vl;const s=new Dt,r=new Dt,o=new ye,a=new w1,l=new C1,c={},h=n.maxTextureSize,f={[Zi]:gn,[gn]:Zi,[ri]:ri},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:mM,fragmentShader:gM}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new zn;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let p=this.type;this.render=function(A,w,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===i_&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ka);const E=e.getRenderTarget(),W=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),U=e.state;U.setBlending(ji),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==this.type;O&&w.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(B=>B.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,B=A.length;G<B;G++){const N=A[G],k=N.shadow;if(k===void 0){Nt("WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Z=k.getFrameExtents();s.multiply(Z),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,k.mapSize.y=r.y));const K=e.state.buffers.depth.getReversed();if(k.camera._reversedDepth=K,k.map===null||O===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ro){if(N.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new di(s.x,s.y,{format:Vr,type:Pi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),k.map.texture.name=N.name+".shadowMap",k.map.depthTexture=new Yo(s.x,s.y,hi),k.map.depthTexture.name=N.name+".shadowMapDepth",k.map.depthTexture.format=Ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn}else N.isPointLight?(k.map=new Dm(s.x),k.map.depthTexture=new y1(s.x,Ri)):(k.map=new di(s.x,s.y),k.map.depthTexture=new Yo(s.x,s.y,Ri)),k.map.depthTexture.name=N.name+".shadowMap",k.map.depthTexture.format=Ji,this.type===Ka?(k.map.depthTexture.compareFunction=K?du:fu,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn);k.camera.updateProjectionMatrix()}const ct=k.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<ct;ft++){if(k.map.isWebGLCubeRenderTarget)e.setRenderTarget(k.map,ft),e.clear();else{ft===0&&(e.setRenderTarget(k.map),e.clear());const ht=k.getViewport(ft);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),U.viewport(o)}if(N.isPointLight){const ht=k.camera,Ft=k.matrix,xe=N.distance||ht.far;xe!==ht.far&&(ht.far=xe,ht.updateProjectionMatrix()),Ao.setFromMatrixPosition(N.matrixWorld),ht.position.copy(Ao),wc.copy(ht.position),wc.add(_M[ft]),ht.up.copy(vM[ft]),ht.lookAt(wc),ht.updateMatrixWorld(),Ft.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Od.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Od,ht.coordinateSystem,ht.reversedDepth)}else k.updateMatrices(N);i=k.getFrustum(),y(w,v,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===Ro&&S(k,v),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(E,W,R)};function S(A,w){const v=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new di(s.x,s.y,{format:Vr,type:Pi})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,v,u,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,v,d,x,null)}function b(A,w,v,E){let W=null;const R=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)W=R;else if(W=v.isPointLight===!0?l:a,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=W.uuid,O=w.uuid;let G=c[U];G===void 0&&(G={},c[U]=G);let B=G[O];B===void 0&&(B=W.clone(),G[O]=B,w.addEventListener("dispose",C)),W=B}if(W.visible=w.visible,W.wireframe=w.wireframe,E===Ro?W.side=w.shadowSide!==null?w.shadowSide:w.side:W.side=w.shadowSide!==null?w.shadowSide:f[w.side],W.alphaMap=w.alphaMap,W.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,W.map=w.map,W.clipShadows=w.clipShadows,W.clippingPlanes=w.clippingPlanes,W.clipIntersection=w.clipIntersection,W.displacementMap=w.displacementMap,W.displacementScale=w.displacementScale,W.displacementBias=w.displacementBias,W.wireframeLinewidth=w.wireframeLinewidth,W.linewidth=w.linewidth,v.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const U=e.properties.get(W);U.light=v}return W}function y(A,w,v,E,W){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&W===Ro)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const O=t.update(A),G=A.material;if(Array.isArray(G)){const B=O.groups;for(let N=0,k=B.length;N<k;N++){const Z=B[N],K=G[Z.materialIndex];if(K&&K.visible){const ct=b(A,K,E,W);A.onBeforeShadow(e,A,w,v,O,ct,Z),e.renderBufferDirect(v,null,O,ct,A,Z),A.onAfterShadow(e,A,w,v,O,ct,Z)}}}else if(G.visible){const B=b(A,G,E,W);A.onBeforeShadow(e,A,w,v,O,B,null),e.renderBufferDirect(v,null,O,B,A,null),A.onAfterShadow(e,A,w,v,O,B,null)}}const U=A.children;for(let O=0,G=U.length;O<G;O++)y(U[O],w,v,E,W)}function C(A){A.target.removeEventListener("dispose",C);for(const v in c){const E=c[v],W=A.target.uuid;W in E&&(E[W].dispose(),delete E[W])}}}function MM(e,t){function n(){let D=!1;const st=new ye;let et=null;const pt=new ye(0,0,0,0);return{setMask:function(Q){et!==Q&&!D&&(e.colorMask(Q,Q,Q,Q),et=Q)},setLocked:function(Q){D=Q},setClear:function(Q,X,vt,kt,_e){_e===!0&&(Q*=kt,X*=kt,vt*=kt),st.set(Q,X,vt,kt),pt.equals(st)===!1&&(e.clearColor(Q,X,vt,kt),pt.copy(st))},reset:function(){D=!1,et=null,pt.set(-1,0,0,0)}}}function i(){let D=!1,st=!1,et=null,pt=null,Q=null;return{setReversed:function(X){if(st!==X){const vt=t.get("EXT_clip_control");X?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),st=X;const kt=Q;Q=null,this.setClear(kt)}},getReversed:function(){return st},setTest:function(X){X?nt(e.DEPTH_TEST):rt(e.DEPTH_TEST)},setMask:function(X){et!==X&&!D&&(e.depthMask(X),et=X)},setFunc:function(X){if(st&&(X=N_[X]),pt!==X){switch(X){case Hc:e.depthFunc(e.NEVER);break;case Wc:e.depthFunc(e.ALWAYS);break;case Xc:e.depthFunc(e.LESS);break;case kr:e.depthFunc(e.LEQUAL);break;case Yc:e.depthFunc(e.EQUAL);break;case qc:e.depthFunc(e.GEQUAL);break;case jc:e.depthFunc(e.GREATER);break;case Kc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=X}},setLocked:function(X){D=X},setClear:function(X){Q!==X&&(Q=X,st&&(X=1-X),e.clearDepth(X))},reset:function(){D=!1,et=null,pt=null,Q=null,st=!1}}}function s(){let D=!1,st=null,et=null,pt=null,Q=null,X=null,vt=null,kt=null,_e=null;return{setTest:function(oe){D||(oe?nt(e.STENCIL_TEST):rt(e.STENCIL_TEST))},setMask:function(oe){st!==oe&&!D&&(e.stencilMask(oe),st=oe)},setFunc:function(oe,Bi,ki){(et!==oe||pt!==Bi||Q!==ki)&&(e.stencilFunc(oe,Bi,ki),et=oe,pt=Bi,Q=ki)},setOp:function(oe,Bi,ki){(X!==oe||vt!==Bi||kt!==ki)&&(e.stencilOp(oe,Bi,ki),X=oe,vt=Bi,kt=ki)},setLocked:function(oe){D=oe},setClear:function(oe){_e!==oe&&(e.clearStencil(oe),_e=oe)},reset:function(){D=!1,st=null,et=null,pt=null,Q=null,X=null,vt=null,kt=null,_e=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,b=null,y=null,C=null,A=null,w=new qt(0,0,0),v=0,E=!1,W=null,R=null,U=null,O=null,G=null;const B=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,k=0;const Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),N=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),N=k>=2);let K=null,ct={};const ft=e.getParameter(e.SCISSOR_BOX),ht=e.getParameter(e.VIEWPORT),Ft=new ye().fromArray(ft),xe=new ye().fromArray(ht);function ve(D,st,et,pt){const Q=new Uint8Array(4),X=e.createTexture();e.bindTexture(D,X),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let vt=0;vt<et;vt++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,Q):e.texImage2D(st+vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Q);return X}const j={};j[e.TEXTURE_2D]=ve(e.TEXTURE_2D,e.TEXTURE_2D,1),j[e.TEXTURE_CUBE_MAP]=ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[e.TEXTURE_2D_ARRAY]=ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),j[e.TEXTURE_3D]=ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(e.DEPTH_TEST),o.setFunc(kr),Wt(!1),Le(Ff),nt(e.CULL_FACE),re(ji);function nt(D){h[D]!==!0&&(e.enable(D),h[D]=!0)}function rt(D){h[D]!==!1&&(e.disable(D),h[D]=!1)}function Vt(D,st){return f[D]!==st?(e.bindFramebuffer(D,st),f[D]=st,D===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=st),D===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=st),!0):!1}function It(D,st){let et=d,pt=!1;if(D){et=u.get(st),et===void 0&&(et=[],u.set(st,et));const Q=D.textures;if(et.length!==Q.length||et[0]!==e.COLOR_ATTACHMENT0){for(let X=0,vt=Q.length;X<vt;X++)et[X]=e.COLOR_ATTACHMENT0+X;et.length=Q.length,pt=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,pt=!0);pt&&e.drawBuffers(et)}function Ot(D){return g!==D?(e.useProgram(D),g=D,!0):!1}const Ke={[Fs]:e.FUNC_ADD,[r_]:e.FUNC_SUBTRACT,[o_]:e.FUNC_REVERSE_SUBTRACT};Ke[a_]=e.MIN,Ke[l_]=e.MAX;const $t={[c_]:e.ZERO,[h_]:e.ONE,[u_]:e.SRC_COLOR,[Vc]:e.SRC_ALPHA,[__]:e.SRC_ALPHA_SATURATE,[m_]:e.DST_COLOR,[d_]:e.DST_ALPHA,[f_]:e.ONE_MINUS_SRC_COLOR,[Gc]:e.ONE_MINUS_SRC_ALPHA,[g_]:e.ONE_MINUS_DST_COLOR,[p_]:e.ONE_MINUS_DST_ALPHA,[v_]:e.CONSTANT_COLOR,[x_]:e.ONE_MINUS_CONSTANT_COLOR,[M_]:e.CONSTANT_ALPHA,[S_]:e.ONE_MINUS_CONSTANT_ALPHA};function re(D,st,et,pt,Q,X,vt,kt,_e,oe){if(D===ji){x===!0&&(rt(e.BLEND),x=!1);return}if(x===!1&&(nt(e.BLEND),x=!0),D!==s_){if(D!==m||oe!==E){if((p!==Fs||y!==Fs)&&(e.blendEquation(e.FUNC_ADD),p=Fs,y=Fs),oe)switch(D){case Fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Nf:e.blendFunc(e.ONE,e.ONE);break;case Of:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Bf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Zt("WebGLState: Invalid blending: ",D);break}else switch(D){case Fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Nf:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Of:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bf:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",D);break}S=null,b=null,C=null,A=null,w.set(0,0,0),v=0,m=D,E=oe}return}Q=Q||st,X=X||et,vt=vt||pt,(st!==p||Q!==y)&&(e.blendEquationSeparate(Ke[st],Ke[Q]),p=st,y=Q),(et!==S||pt!==b||X!==C||vt!==A)&&(e.blendFuncSeparate($t[et],$t[pt],$t[X],$t[vt]),S=et,b=pt,C=X,A=vt),(kt.equals(w)===!1||_e!==v)&&(e.blendColor(kt.r,kt.g,kt.b,_e),w.copy(kt),v=_e),m=D,E=!1}function de(D,st){D.side===ri?rt(e.CULL_FACE):nt(e.CULL_FACE);let et=D.side===gn;st&&(et=!et),Wt(et),D.blending===Fr&&D.transparent===!1?re(ji):re(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const pt=D.stencilWrite;a.setTest(pt),pt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Fe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(e.SAMPLE_ALPHA_TO_COVERAGE):rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){W!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),W=D)}function Le(D){D!==e_?(nt(e.CULL_FACE),D!==R&&(D===Ff?e.cullFace(e.BACK):D===n_?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):rt(e.CULL_FACE),R=D}function P(D){D!==U&&(N&&e.lineWidth(D),U=D)}function Fe(D,st,et){D?(nt(e.POLYGON_OFFSET_FILL),(O!==st||G!==et)&&(O=st,G=et,o.getReversed()&&(st=-st),e.polygonOffset(st,et))):rt(e.POLYGON_OFFSET_FILL)}function se(D){D?nt(e.SCISSOR_TEST):rt(e.SCISSOR_TEST)}function ge(D){D===void 0&&(D=e.TEXTURE0+B-1),K!==D&&(e.activeTexture(D),K=D)}function St(D,st,et){et===void 0&&(K===null?et=e.TEXTURE0+B-1:et=K);let pt=ct[et];pt===void 0&&(pt={type:void 0,texture:void 0},ct[et]=pt),(pt.type!==D||pt.texture!==st)&&(K!==et&&(e.activeTexture(et),K=et),e.bindTexture(D,st||j[D]),pt.type=D,pt.texture=st)}function T(){const D=ct[K];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{e.compressedTexImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function I(){try{e.compressedTexImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function q(){try{e.texSubImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function $(){try{e.texSubImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function Y(){try{e.compressedTexSubImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function gt(){try{e.compressedTexSubImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function it(){try{e.texStorage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function Rt(){try{e.texStorage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function Ut(){try{e.texImage2D(...arguments)}catch(D){Zt("WebGLState:",D)}}function J(){try{e.texImage3D(...arguments)}catch(D){Zt("WebGLState:",D)}}function tt(D){Ft.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),Ft.copy(D))}function _t(D){xe.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function xt(D,st){let et=c.get(st);et===void 0&&(et=new WeakMap,c.set(st,et));let pt=et.get(D);pt===void 0&&(pt=e.getUniformBlockIndex(st,D.name),et.set(D,pt))}function ut(D,st){const pt=c.get(st).get(D);l.get(st)!==pt&&(e.uniformBlockBinding(st,pt,D.__bindingPointIndex),l.set(st,pt))}function Xt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},K=null,ct={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,S=null,b=null,y=null,C=null,A=null,w=new qt(0,0,0),v=0,E=!1,W=null,R=null,U=null,O=null,G=null,Ft.set(0,0,e.canvas.width,e.canvas.height),xe.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:rt,bindFramebuffer:Vt,drawBuffers:It,useProgram:Ot,setBlending:re,setMaterial:de,setFlipSided:Wt,setCullFace:Le,setLineWidth:P,setPolygonOffset:Fe,setScissorTest:se,activeTexture:ge,bindTexture:St,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:Ut,texImage3D:J,updateUBOMapping:xt,uniformBlockBinding:ut,texStorage2D:it,texStorage3D:Rt,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:Y,compressedTexSubImage3D:gt,scissor:tt,viewport:_t,reset:Xt}}function SM(e,t,n,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return d?new OffscreenCanvas(T,_):Wo("canvas")}function x(T,_,I){let q=1;const $=St(T);if(($.width>I||$.height>I)&&(q=I/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*$.width),gt=Math.floor(q*$.height);f===void 0&&(f=g(Y,gt));const it=_?g(Y,gt):f;return it.width=Y,it.height=gt,it.getContext("2d").drawImage(T,0,0,Y,gt),Nt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+gt+")."),it}else return"data"in T&&Nt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){e.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(T,_,I,q,$=!1){if(T!==null){if(e[T]!==void 0)return e[T];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===e.RED&&(I===e.FLOAT&&(Y=e.R32F),I===e.HALF_FLOAT&&(Y=e.R16F),I===e.UNSIGNED_BYTE&&(Y=e.R8)),_===e.RED_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.R8UI),I===e.UNSIGNED_SHORT&&(Y=e.R16UI),I===e.UNSIGNED_INT&&(Y=e.R32UI),I===e.BYTE&&(Y=e.R8I),I===e.SHORT&&(Y=e.R16I),I===e.INT&&(Y=e.R32I)),_===e.RG&&(I===e.FLOAT&&(Y=e.RG32F),I===e.HALF_FLOAT&&(Y=e.RG16F),I===e.UNSIGNED_BYTE&&(Y=e.RG8)),_===e.RG_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.RG8UI),I===e.UNSIGNED_SHORT&&(Y=e.RG16UI),I===e.UNSIGNED_INT&&(Y=e.RG32UI),I===e.BYTE&&(Y=e.RG8I),I===e.SHORT&&(Y=e.RG16I),I===e.INT&&(Y=e.RG32I)),_===e.RGB_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),I===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),I===e.UNSIGNED_INT&&(Y=e.RGB32UI),I===e.BYTE&&(Y=e.RGB8I),I===e.SHORT&&(Y=e.RGB16I),I===e.INT&&(Y=e.RGB32I)),_===e.RGBA_INTEGER&&(I===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),I===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),I===e.UNSIGNED_INT&&(Y=e.RGBA32UI),I===e.BYTE&&(Y=e.RGBA8I),I===e.SHORT&&(Y=e.RGBA16I),I===e.INT&&(Y=e.RGBA32I)),_===e.RGB&&(I===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),I===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),_===e.RGBA){const gt=$?il:Jt.getTransfer(q);I===e.FLOAT&&(Y=e.RGBA32F),I===e.HALF_FLOAT&&(Y=e.RGBA16F),I===e.UNSIGNED_BYTE&&(Y=gt===ae?e.SRGB8_ALPHA8:e.RGBA8),I===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),I===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(T,_){let I;return T?_===null||_===Ri||_===Go?I=e.DEPTH24_STENCIL8:_===hi?I=e.DEPTH32F_STENCIL8:_===Vo&&(I=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ri||_===Go?I=e.DEPTH_COMPONENT24:_===hi?I=e.DEPTH_COMPONENT32F:_===Vo&&(I=e.DEPTH_COMPONENT16),I}function C(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),v(_),_.isVideoTexture&&h.delete(_)}function w(T){const _=T.target;_.removeEventListener("dispose",w),W(_)}function v(T){const _=i.get(T);if(_.__webglInit===void 0)return;const I=T.source,q=u.get(I);if(q){const $=q[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(T),Object.keys(q).length===0&&u.delete(I)}i.remove(T)}function E(T){const _=i.get(T);e.deleteTexture(_.__webglTexture);const I=T.source,q=u.get(I);delete q[_.__cacheKey],o.memory.textures--}function W(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let $=0;$<_.__webglFramebuffer[q].length;$++)e.deleteFramebuffer(_.__webglFramebuffer[q][$]);else e.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)e.deleteFramebuffer(_.__webglFramebuffer[q]);else e.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&e.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&e.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&e.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=T.textures;for(let q=0,$=I.length;q<$;q++){const Y=i.get(I[q]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(I[q])}i.remove(T)}let R=0;function U(){R=0}function O(){const T=R;return T>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function G(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function B(T,_){const I=i.get(T);if(T.isVideoTexture&&se(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&I.__version!==T.version){const q=T.image;if(q===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(I,T,_);return}}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,I.__webglTexture,e.TEXTURE0+_)}function N(T,_){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){j(I,T,_);return}else T.isExternalTexture&&(I.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,I.__webglTexture,e.TEXTURE0+_)}function k(T,_){const I=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){j(I,T,_);return}n.bindTexture(e.TEXTURE_3D,I.__webglTexture,e.TEXTURE0+_)}function Z(T,_){const I=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&I.__version!==T.version){nt(I,T,_);return}n.bindTexture(e.TEXTURE_CUBE_MAP,I.__webglTexture,e.TEXTURE0+_)}const K={[ci]:e.REPEAT,[qi]:e.CLAMP_TO_EDGE,[$c]:e.MIRRORED_REPEAT},ct={[nn]:e.NEAREST,[b_]:e.NEAREST_MIPMAP_NEAREST,[fa]:e.NEAREST_MIPMAP_LINEAR,[hn]:e.LINEAR,[$l]:e.LINEAR_MIPMAP_NEAREST,[Os]:e.LINEAR_MIPMAP_LINEAR},ft={[w_]:e.NEVER,[D_]:e.ALWAYS,[C_]:e.LESS,[fu]:e.LEQUAL,[R_]:e.EQUAL,[du]:e.GEQUAL,[P_]:e.GREATER,[L_]:e.NOTEQUAL};function ht(T,_){if(_.type===hi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===$l||_.magFilter===fa||_.magFilter===Os||_.minFilter===hn||_.minFilter===$l||_.minFilter===fa||_.minFilter===Os)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,K[_.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,K[_.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,K[_.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,ct[_.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==fa&&_.minFilter!==Os||_.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");e.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ft(T,_){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const q=_.source;let $=u.get(q);$===void 0&&($={},u.set(q,$));const Y=G(_);if(Y!==T.__cacheKey){$[Y]===void 0&&($[Y]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,I=!0),$[Y].usedTimes++;const gt=$[T.__cacheKey];gt!==void 0&&($[T.__cacheKey].usedTimes--,gt.usedTimes===0&&E(_)),T.__cacheKey=Y,T.__webglTexture=$[Y].texture}return I}function xe(T,_,I){return Math.floor(Math.floor(T/I)/_)}function ve(T,_,I,q){const Y=T.updateRanges;if(Y.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,_.width,_.height,I,q,_.data);else{Y.sort((J,tt)=>J.start-tt.start);let gt=0;for(let J=1;J<Y.length;J++){const tt=Y[gt],_t=Y[J],xt=tt.start+tt.count,ut=xe(_t.start,_.width,4),Xt=xe(tt.start,_.width,4);_t.start<=xt+1&&ut===Xt&&xe(_t.start+_t.count-1,_.width,4)===ut?tt.count=Math.max(tt.count,_t.start+_t.count-tt.start):(++gt,Y[gt]=_t)}Y.length=gt+1;const it=e.getParameter(e.UNPACK_ROW_LENGTH),Rt=e.getParameter(e.UNPACK_SKIP_PIXELS),Ut=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,_.width);for(let J=0,tt=Y.length;J<tt;J++){const _t=Y[J],xt=Math.floor(_t.start/4),ut=Math.ceil(_t.count/4),Xt=xt%_.width,D=Math.floor(xt/_.width),st=ut,et=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Xt),e.pixelStorei(e.UNPACK_SKIP_ROWS,D),n.texSubImage2D(e.TEXTURE_2D,0,Xt,D,st,et,I,q,_.data)}T.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,it),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ut)}}function j(T,_,I){let q=e.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=e.TEXTURE_3D);const $=Ft(T,_),Y=_.source;n.bindTexture(q,T.__webglTexture,e.TEXTURE0+I);const gt=i.get(Y);if(Y.version!==gt.__version||$===!0){n.activeTexture(e.TEXTURE0+I);const it=Jt.getPrimaries(Jt.workingColorSpace),Rt=_.colorSpace===_s?null:Jt.getPrimaries(_.colorSpace),Ut=_.colorSpace===_s||it===Rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let J=x(_.image,!1,s.maxTextureSize);J=ge(_,J);const tt=r.convert(_.format,_.colorSpace),_t=r.convert(_.type);let xt=b(_.internalFormat,tt,_t,_.colorSpace,_.isVideoTexture);ht(q,_);let ut;const Xt=_.mipmaps,D=_.isVideoTexture!==!0,st=gt.__version===void 0||$===!0,et=Y.dataReady,pt=C(_,J);if(_.isDepthTexture)xt=y(_.format===Bs,_.type),st&&(D?n.texStorage2D(e.TEXTURE_2D,1,xt,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,xt,J.width,J.height,0,tt,_t,null));else if(_.isDataTexture)if(Xt.length>0){D&&st&&n.texStorage2D(e.TEXTURE_2D,pt,xt,Xt[0].width,Xt[0].height);for(let Q=0,X=Xt.length;Q<X;Q++)ut=Xt[Q],D?et&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ut.width,ut.height,tt,_t,ut.data):n.texImage2D(e.TEXTURE_2D,Q,xt,ut.width,ut.height,0,tt,_t,ut.data);_.generateMipmaps=!1}else D?(st&&n.texStorage2D(e.TEXTURE_2D,pt,xt,J.width,J.height),et&&ve(_,J,tt,_t)):n.texImage2D(e.TEXTURE_2D,0,xt,J.width,J.height,0,tt,_t,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&st&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,xt,Xt[0].width,Xt[0].height,J.depth);for(let Q=0,X=Xt.length;Q<X;Q++)if(ut=Xt[Q],_.format!==ui)if(tt!==null)if(D){if(et)if(_.layerUpdates.size>0){const vt=md(ut.width,ut.height,_.format,_.type);for(const kt of _.layerUpdates){const _e=ut.data.subarray(kt*vt/ut.data.BYTES_PER_ELEMENT,(kt+1)*vt/ut.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,kt,ut.width,ut.height,1,tt,_e)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,J.depth,tt,ut.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,xt,ut.width,ut.height,J.depth,0,ut.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?et&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ut.width,ut.height,J.depth,tt,_t,ut.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,xt,ut.width,ut.height,J.depth,0,tt,_t,ut.data)}else{D&&st&&n.texStorage2D(e.TEXTURE_2D,pt,xt,Xt[0].width,Xt[0].height);for(let Q=0,X=Xt.length;Q<X;Q++)ut=Xt[Q],_.format!==ui?tt!==null?D?et&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,ut.width,ut.height,tt,ut.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,xt,ut.width,ut.height,0,ut.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?et&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ut.width,ut.height,tt,_t,ut.data):n.texImage2D(e.TEXTURE_2D,Q,xt,ut.width,ut.height,0,tt,_t,ut.data)}else if(_.isDataArrayTexture)if(D){if(st&&n.texStorage3D(e.TEXTURE_2D_ARRAY,pt,xt,J.width,J.height,J.depth),et)if(_.layerUpdates.size>0){const Q=md(J.width,J.height,_.format,_.type);for(const X of _.layerUpdates){const vt=J.data.subarray(X*Q/J.data.BYTES_PER_ELEMENT,(X+1)*Q/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,X,J.width,J.height,1,tt,_t,vt)}_.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,tt,_t,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,xt,J.width,J.height,J.depth,0,tt,_t,J.data);else if(_.isData3DTexture)D?(st&&n.texStorage3D(e.TEXTURE_3D,pt,xt,J.width,J.height,J.depth),et&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,tt,_t,J.data)):n.texImage3D(e.TEXTURE_3D,0,xt,J.width,J.height,J.depth,0,tt,_t,J.data);else if(_.isFramebufferTexture){if(st)if(D)n.texStorage2D(e.TEXTURE_2D,pt,xt,J.width,J.height);else{let Q=J.width,X=J.height;for(let vt=0;vt<pt;vt++)n.texImage2D(e.TEXTURE_2D,vt,xt,Q,X,0,tt,_t,null),Q>>=1,X>>=1}}else if(Xt.length>0){if(D&&st){const Q=St(Xt[0]);n.texStorage2D(e.TEXTURE_2D,pt,xt,Q.width,Q.height)}for(let Q=0,X=Xt.length;Q<X;Q++)ut=Xt[Q],D?et&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,tt,_t,ut):n.texImage2D(e.TEXTURE_2D,Q,xt,tt,_t,ut);_.generateMipmaps=!1}else if(D){if(st){const Q=St(J);n.texStorage2D(e.TEXTURE_2D,pt,xt,Q.width,Q.height)}et&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,tt,_t,J)}else n.texImage2D(e.TEXTURE_2D,0,xt,tt,_t,J);m(_)&&p(q),gt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function nt(T,_,I){if(_.image.length!==6)return;const q=Ft(T,_),$=_.source;n.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+I);const Y=i.get($);if($.version!==Y.__version||q===!0){n.activeTexture(e.TEXTURE0+I);const gt=Jt.getPrimaries(Jt.workingColorSpace),it=_.colorSpace===_s?null:Jt.getPrimaries(_.colorSpace),Rt=_.colorSpace===_s||gt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ut=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,tt=[];for(let X=0;X<6;X++)!Ut&&!J?tt[X]=x(_.image[X],!0,s.maxCubemapSize):tt[X]=J?_.image[X].image:_.image[X],tt[X]=ge(_,tt[X]);const _t=tt[0],xt=r.convert(_.format,_.colorSpace),ut=r.convert(_.type),Xt=b(_.internalFormat,xt,ut,_.colorSpace),D=_.isVideoTexture!==!0,st=Y.__version===void 0||q===!0,et=$.dataReady;let pt=C(_,_t);ht(e.TEXTURE_CUBE_MAP,_);let Q;if(Ut){D&&st&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Xt,_t.width,_t.height);for(let X=0;X<6;X++){Q=tt[X].mipmaps;for(let vt=0;vt<Q.length;vt++){const kt=Q[vt];_.format!==ui?xt!==null?D?et&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt,0,0,kt.width,kt.height,xt,kt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt,Xt,kt.width,kt.height,0,kt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt,0,0,kt.width,kt.height,xt,ut,kt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt,Xt,kt.width,kt.height,0,xt,ut,kt.data)}}}else{if(Q=_.mipmaps,D&&st){Q.length>0&&pt++;const X=St(tt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,Xt,X.width,X.height)}for(let X=0;X<6;X++)if(J){D?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,tt[X].width,tt[X].height,xt,ut,tt[X].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Xt,tt[X].width,tt[X].height,0,xt,ut,tt[X].data);for(let vt=0;vt<Q.length;vt++){const _e=Q[vt].image[X].image;D?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt+1,0,0,_e.width,_e.height,xt,ut,_e.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt+1,Xt,_e.width,_e.height,0,xt,ut,_e.data)}}else{D?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,xt,ut,tt[X]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Xt,xt,ut,tt[X]);for(let vt=0;vt<Q.length;vt++){const kt=Q[vt];D?et&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt+1,0,0,xt,ut,kt.image[X]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+X,vt+1,Xt,xt,ut,kt.image[X])}}}m(_)&&p(e.TEXTURE_CUBE_MAP),Y.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function rt(T,_,I,q,$,Y){const gt=r.convert(I.format,I.colorSpace),it=r.convert(I.type),Rt=b(I.internalFormat,gt,it,I.colorSpace),Ut=i.get(_),J=i.get(I);if(J.__renderTarget=_,!Ut.__hasExternalTextures){const tt=Math.max(1,_.width>>Y),_t=Math.max(1,_.height>>Y);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,Y,Rt,tt,_t,_.depth,0,gt,it,null):n.texImage2D($,Y,Rt,tt,_t,0,gt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,T),Fe(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,$,J.__webglTexture,0,P(_)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,$,J.__webglTexture,Y),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(T,_,I){if(e.bindRenderbuffer(e.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,$=q&&q.isDepthTexture?q.type:null,Y=y(_.stencilBuffer,$),gt=_.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(_)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,P(_),Y,_.width,_.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,P(_),Y,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Y,_.width,_.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,gt,e.RENDERBUFFER,T)}else{const q=_.textures;for(let $=0;$<q.length;$++){const Y=q[$],gt=r.convert(Y.format,Y.colorSpace),it=r.convert(Y.type),Rt=b(Y.internalFormat,gt,it,Y.colorSpace);Fe(_)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,P(_),Rt,_.width,_.height):I?e.renderbufferStorageMultisample(e.RENDERBUFFER,P(_),Rt,_.width,_.height):e.renderbufferStorage(e.RENDERBUFFER,Rt,_.width,_.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function It(T,_,I){const q=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),ht(e.TEXTURE_CUBE_MAP,_.depthTexture);const Ut=r.convert(_.depthTexture.format),J=r.convert(_.depthTexture.type);let tt;_.depthTexture.format===Ji?tt=e.DEPTH_COMPONENT24:_.depthTexture.format===Bs&&(tt=e.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,tt,_.width,_.height,0,Ut,J,null)}}else B(_.depthTexture,0);const Y=$.__webglTexture,gt=P(_),it=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+I:e.TEXTURE_2D,Rt=_.depthTexture.format===Bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ji)Fe(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Rt,it,Y,0,gt):e.framebufferTexture2D(e.FRAMEBUFFER,Rt,it,Y,0);else if(_.depthTexture.format===Bs)Fe(_)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Rt,it,Y,0,gt):e.framebufferTexture2D(e.FRAMEBUFFER,Rt,it,Y,0);else throw new Error("Unknown depthTexture format")}function Ot(T){const _=i.get(T),I=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let q=0;q<6;q++)It(_.__webglFramebuffer[q],T,q);else{const q=T.texture.mipmaps;q&&q.length>0?It(_.__webglFramebuffer[0],T,0):It(_.__webglFramebuffer,T,0)}else if(I){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=e.createRenderbuffer(),Vt(_.__webglDepthbuffer[q],T,!1);else{const $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=e.createRenderbuffer(),Vt(_.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,Y)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(T,_,I){const q=i.get(T);_!==void 0&&rt(q.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),I!==void 0&&Ot(T)}function $t(T){const _=T.texture,I=i.get(T),q=i.get(_);T.addEventListener("dispose",w);const $=T.textures,Y=T.isWebGLCubeRenderTarget===!0,gt=$.length>1;if(gt||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=_.version,o.memory.textures++),Y){I.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[it]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)I.__webglFramebuffer[it][Rt]=e.createFramebuffer()}else I.__webglFramebuffer[it]=e.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)I.__webglFramebuffer[it]=e.createFramebuffer()}else I.__webglFramebuffer=e.createFramebuffer();if(gt)for(let it=0,Rt=$.length;it<Rt;it++){const Ut=i.get($[it]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=e.createTexture(),o.memory.textures++)}if(T.samples>0&&Fe(T)===!1){I.__webglMultisampledFramebuffer=e.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){const Rt=$[it];I.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,I.__webglColorRenderbuffer[it]);const Ut=r.convert(Rt.format,Rt.colorSpace),J=r.convert(Rt.type),tt=b(Rt.internalFormat,Ut,J,Rt.colorSpace,T.isXRRenderTarget===!0),_t=P(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,_t,tt,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,I.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=e.createRenderbuffer(),Vt(I.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),ht(e.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)rt(I.__webglFramebuffer[it][Rt],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,Rt);else rt(I.__webglFramebuffer[it],T,_,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(_)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(gt){for(let it=0,Rt=$.length;it<Rt;it++){const Ut=$[it],J=i.get(Ut);let tt=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(tt=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(tt,J.__webglTexture),ht(tt,Ut),rt(I.__webglFramebuffer,T,Ut,e.COLOR_ATTACHMENT0+it,tt,0),m(Ut)&&p(tt)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(it=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,q.__webglTexture),ht(it,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)rt(I.__webglFramebuffer[Rt],T,_,e.COLOR_ATTACHMENT0,it,Rt);else rt(I.__webglFramebuffer,T,_,e.COLOR_ATTACHMENT0,it,0);m(_)&&p(it),n.unbindTexture()}T.depthBuffer&&Ot(T)}function re(T){const _=T.textures;for(let I=0,q=_.length;I<q;I++){const $=_[I];if(m($)){const Y=S(T),gt=i.get($).__webglTexture;n.bindTexture(Y,gt),p(Y),n.unbindTexture()}}}const de=[],Wt=[];function Le(T){if(T.samples>0){if(Fe(T)===!1){const _=T.textures,I=T.width,q=T.height;let $=e.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,gt=i.get(T),it=_.length>1;if(it)for(let Ut=0;Ut<_.length;Ut++)n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Rt=T.texture.mipmaps;Rt&&Rt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ut=0;Ut<_.length;Ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,gt.__webglColorRenderbuffer[Ut]);const J=i.get(_[Ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,I,q,0,0,I,q,$,e.NEAREST),l===!0&&(de.length=0,Wt.length=0,de.push(e.COLOR_ATTACHMENT0+Ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(de.push(Y),Wt.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Wt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let Ut=0;Ut<_.length;Ut++){n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ut,e.RENDERBUFFER,gt.__webglColorRenderbuffer[Ut]);const J=i.get(_[Ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,gt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ut,e.TEXTURE_2D,J,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[_])}}}function P(T){return Math.min(s.maxSamples,T.samples)}function Fe(T){const _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function se(T){const _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ge(T,_){const I=T.colorSpace,q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||I!==Gr&&I!==_s&&(Jt.getTransfer(I)===ae?(q!==ui||$!==Dn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",I)),_}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=Ke,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function yM(e,t){function n(i,s=_s){let r;const o=Jt.getTransfer(s);if(i===Dn)return e.UNSIGNED_BYTE;if(i===ou)return e.UNSIGNED_SHORT_4_4_4_4;if(i===au)return e.UNSIGNED_SHORT_5_5_5_1;if(i===um)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===fm)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===cm)return e.BYTE;if(i===hm)return e.SHORT;if(i===Vo)return e.UNSIGNED_SHORT;if(i===ru)return e.INT;if(i===Ri)return e.UNSIGNED_INT;if(i===hi)return e.FLOAT;if(i===Pi)return e.HALF_FLOAT;if(i===dm)return e.ALPHA;if(i===pm)return e.RGB;if(i===ui)return e.RGBA;if(i===Ji)return e.DEPTH_COMPONENT;if(i===Bs)return e.DEPTH_STENCIL;if(i===lu)return e.RED;if(i===cu)return e.RED_INTEGER;if(i===Vr)return e.RG;if(i===hu)return e.RG_INTEGER;if(i===uu)return e.RGBA_INTEGER;if(i===$a||i===Za||i===Ja||i===Qa)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zc||i===Jc||i===Qc||i===th)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===th)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===nh||i===ih||i===sh||i===rh||i===oh||i===ah)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===eh||i===nh)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ih)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===sh)return r.COMPRESSED_R11_EAC;if(i===rh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===oh)return r.COMPRESSED_RG11_EAC;if(i===ah)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lh||i===ch||i===hh||i===uh||i===fh||i===dh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===Mh||i===Sh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ch)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ph)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_h)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sh)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===Eh||i===bh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yh)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Th||i===Ah||i===wh||i===Ch)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Th)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ch)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Go?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const EM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`;class TM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new wm(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Nn({vertexShader:EM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new ts(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends Qs{constructor(t,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new TM,p={},S=n.getContextAttributes();let b=null,y=null;const C=[],A=[],w=new Dt;let v=null;const E=new Ln;E.viewport=new ye;const W=new Ln;W.viewport=new ye;const R=[E,W],U=new O1;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=C[j];return nt===void 0&&(nt=new nc,C[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=C[j];return nt===void 0&&(nt=new nc,C[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=C[j];return nt===void 0&&(nt=new nc,C[j]=nt),nt.getHandSpace()};function B(j){const nt=A.indexOf(j.inputSource);if(nt===-1)return;const rt=C[nt];rt!==void 0&&(rt.update(j.inputSource,j.frame,c||o),rt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let j=0;j<C.length;j++){const nt=A[j];nt!==null&&(A[j]=null,C[j].disconnect(nt))}O=null,G=null,m.reset();for(const j in p)delete p[j];t.setRenderTarget(b),d=null,u=null,f=null,s=null,y=null,ve.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Vt=null,It=null;S.depth&&(It=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=S.stencil?Bs:Ji,Vt=S.stencil?Go:Ri);const Ot={colorFormat:n.RGBA8,depthFormat:It,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new di(u.textureWidth,u.textureHeight,{format:ui,type:Dn,depthTexture:new Yo(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const rt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new di(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(j){for(let nt=0;nt<j.removed.length;nt++){const rt=j.removed[nt],Vt=A.indexOf(rt);Vt>=0&&(A[Vt]=null,C[Vt].disconnect(rt))}for(let nt=0;nt<j.added.length;nt++){const rt=j.added[nt];let Vt=A.indexOf(rt);if(Vt===-1){for(let Ot=0;Ot<C.length;Ot++)if(Ot>=A.length){A.push(rt),Vt=Ot;break}else if(A[Ot]===null){A[Ot]=rt,Vt=Ot;break}if(Vt===-1)break}const It=C[Vt];It&&It.connect(rt)}}const Z=new L,K=new L;function ct(j,nt,rt){Z.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(rt.matrixWorld);const Vt=Z.distanceTo(K),It=nt.projectionMatrix.elements,Ot=rt.projectionMatrix.elements,Ke=It[14]/(It[10]-1),$t=It[14]/(It[10]+1),re=(It[9]+1)/It[5],de=(It[9]-1)/It[5],Wt=(It[8]-1)/It[0],Le=(Ot[8]+1)/Ot[0],P=Ke*Wt,Fe=Ke*Le,se=Vt/(-Wt+Le),ge=se*-Wt;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ge),j.translateZ(se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),It[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const St=Ke+se,T=$t+se,_=P-ge,I=Fe+(Vt-ge),q=re*$t/T*St,$=de*$t/T*St;j.projectionMatrix.makePerspective(_,I,q,$,St,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ft(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let nt=j.near,rt=j.far;m.texture!==null&&(m.depthNear>0&&(nt=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),U.near=W.near=E.near=nt,U.far=W.far=E.far=rt,(O!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,G=U.far),U.layers.mask=j.layers.mask|6,E.layers.mask=U.layers.mask&-5,W.layers.mask=U.layers.mask&-3;const Vt=j.parent,It=U.cameras;ft(U,Vt);for(let Ot=0;Ot<It.length;Ot++)ft(It[Ot],Vt);It.length===2?ct(U,E,W):U.projectionMatrix.copy(E.projectionMatrix),ht(j,U,Vt)};function ht(j,nt,rt){rt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(rt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let Ft=null;function xe(j,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Vt=!1;rt.length!==U.cameras.length&&(U.cameras.length=0,Vt=!0);for(let $t=0;$t<rt.length;$t++){const re=rt[$t];let de=null;if(d!==null)de=d.getViewport(re);else{const Le=f.getViewSubImage(u,re);de=Le.viewport,$t===0&&(t.setRenderTargetTextures(y,Le.colorTexture,Le.depthStencilTexture),t.setRenderTarget(y))}let Wt=R[$t];Wt===void 0&&(Wt=new Ln,Wt.layers.enable($t),Wt.viewport=new ye,R[$t]=Wt),Wt.matrix.fromArray(re.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(re.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(de.x,de.y,de.width,de.height),$t===0&&(U.matrix.copy(Wt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Vt===!0&&U.cameras.push(Wt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const $t=f.getDepthInformation(rt[0]);$t&&$t.isValid&&$t.texture&&m.init($t,s.renderState)}if(It&&It.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let $t=0;$t<rt.length;$t++){const re=rt[$t].camera;if(re){let de=p[re];de||(de=new wm,p[re]=de);const Wt=f.getCameraImage(re);de.sourceTexture=Wt}}}}for(let rt=0;rt<C.length;rt++){const Vt=A[rt],It=C[rt];Vt!==null&&It!==void 0&&It.update(Vt,nt,c||o)}Ft&&Ft(j,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const ve=new Lm;ve.setAnimationLoop(xe),this.setAnimationLoop=function(j){Ft=j},this.dispose=function(){}}}const Is=new Li,wM=new ie;function CM(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cm(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,y){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,Is.copy(y),Is.x*=-1,Is.y*=-1,Is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),m.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(Is)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function RM(e,t,n,i){let s={},r={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const y=b.program;i.uniformBlockBinding(S,y)}function c(S,b){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(S,C);const A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){const b=f();S.__bindingPointIndex=b;const y=e.createBuffer(),C=S.__size,A=S.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,C,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,b,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const b=s[S.id],y=S.uniforms,C=S.__cache;e.bindBuffer(e.UNIFORM_BUFFER,b);for(let A=0,w=y.length;A<w;A++){const v=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,W=v.length;E<W;E++){const R=v[E];if(d(R,A,E,C)===!0){const U=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let B=0;B<O.length;B++){const N=O[B],k=x(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,e.bufferSubData(e.UNIFORM_BUFFER,U+G,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,G),G+=k.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,U,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(S,b,y,C){const A=S.value,w=b+"_"+y;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const v=C[w];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return C[w]=A,!0}else if(v.equals(A)===!1)return v.copy(A),!0}return!1}function g(S){const b=S.uniforms;let y=0;const C=16;for(let w=0,v=b.length;w<v;w++){const E=Array.isArray(b[w])?b[w]:[b[w]];for(let W=0,R=E.length;W<R;W++){const U=E[W],O=Array.isArray(U.value)?U.value:[U.value];for(let G=0,B=O.length;G<B;G++){const N=O[G],k=x(N),Z=y%C,K=Z%k.boundary,ct=Z+K;y+=K,ct!==0&&C-ct<k.storage&&(y+=C-ct),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=k.storage}}}const A=y%C;return A>0&&(y+=C-A),S.__size=y,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Nt("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),e.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const S in s)e.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const PM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mi=null;function LM(){return Mi===null&&(Mi=new Tm(PM,16,16,Vr,Pi),Mi.name="DFG_LUT",Mi.minFilter=hn,Mi.magFilter=hn,Mi.wrapS=qi,Mi.wrapT=qi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}class DM{constructor(t={}){const{canvas:n=U_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Dn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=d,m=new Set([uu,hu,cu]),p=new Set([Dn,Ri,Vo,Go,ou,au]),S=new Uint32Array(4),b=new Int32Array(4);let y=null,C=null;const A=[],w=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let W=!1;this._outputColorSpace=Ve;let R=0,U=0,O=null,G=-1,B=null;const N=new ye,k=new ye;let Z=null;const K=new qt(0);let ct=0,ft=n.width,ht=n.height,Ft=1,xe=null,ve=null;const j=new ye(0,0,ft,ht),nt=new ye(0,0,ft,ht);let rt=!1;const Vt=new vl;let It=!1,Ot=!1;const Ke=new ie,$t=new L,re=new ye,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Le(){return O===null?Ft:1}let P=i;function Fe(M,F){return n.getContext(M,F)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nu}`),n.addEventListener("webglcontextlost",vt,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",_e,!1),P===null){const F="webgl2";if(P=Fe(F,M),P===null)throw Fe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Zt("WebGLRenderer: "+M.message),M}let se,ge,St,T,_,I,q,$,Y,gt,it,Rt,Ut,J,tt,_t,xt,ut,Xt,D,st,et,pt;function Q(){se=new Dx(P),se.init(),st=new yM(P,se),ge=new bx(P,se,t,st),St=new MM(P,se),ge.reversedDepthBuffer&&u&&St.buffers.depth.setReversed(!0),T=new Fx(P),_=new oM,I=new SM(P,se,St,_,ge,st,T),q=new Lx(E),$=new z1(P),et=new yx(P,$),Y=new Ix(P,$,T,et),gt=new Ox(P,Y,$,et,T),ut=new Nx(P,ge,I),tt=new Tx(_),it=new rM(E,q,se,ge,et,tt),Rt=new CM(E,_),Ut=new lM,J=new pM(se),xt=new Sx(E,q,St,gt,g,l),_t=new xM(E,gt,ge),pt=new RM(P,T,ge,St),Xt=new Ex(P,se,T),D=new Ux(P,se,T),T.programs=it.programs,E.capabilities=ge,E.extensions=se,E.properties=_,E.renderLists=Ut,E.shadowMap=_t,E.state=St,E.info=T}Q(),x!==Dn&&(v=new kx(x,n.width,n.height,s,r));const X=new AM(E,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(M){M!==void 0&&(Ft=M,this.setSize(ft,ht,!1))},this.getSize=function(M){return M.set(ft,ht)},this.setSize=function(M,F,H=!0){if(X.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=M,ht=F,n.width=Math.floor(M*Ft),n.height=Math.floor(F*Ft),H===!0&&(n.style.width=M+"px",n.style.height=F+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ft*Ft,ht*Ft).floor()},this.setDrawingBufferSize=function(M,F,H){ft=M,ht=F,Ft=H,n.width=Math.floor(M*H),n.height=Math.floor(F*H),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(x===Dn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,F,H,V){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,F,H,V),St.viewport(N.copy(j).multiplyScalar(Ft).round())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,F,H,V){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,F,H,V),St.scissor(k.copy(nt).multiplyScalar(Ft).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(M){St.setScissorTest(rt=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){ve=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,H=!0){let V=0;if(M){let z=!1;if(O!==null){const at=O.texture.format;z=m.has(at)}if(z){const at=O.texture.type,dt=p.has(at),lt=xt.getClearColor(),Mt=xt.getClearAlpha(),Tt=lt.r,zt=lt.g,Yt=lt.b;dt?(S[0]=Tt,S[1]=zt,S[2]=Yt,S[3]=Mt,P.clearBufferuiv(P.COLOR,0,S)):(b[0]=Tt,b[1]=zt,b[2]=Yt,b[3]=Mt,P.clearBufferiv(P.COLOR,0,b))}else V|=P.COLOR_BUFFER_BIT}F&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",vt,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),xt.dispose(),Ut.dispose(),J.dispose(),_.dispose(),q.dispose(),gt.dispose(),et.dispose(),pt.dispose(),it.dispose(),X.dispose(),X.removeEventListener("sessionstart",wf),X.removeEventListener("sessionend",Cf),As.stop()};function vt(M){M.preventDefault(),sl("WebGLRenderer: Context Lost."),W=!0}function kt(){sl("WebGLRenderer: Context Restored."),W=!1;const M=T.autoReset,F=_t.enabled,H=_t.autoUpdate,V=_t.needsUpdate,z=_t.type;Q(),T.autoReset=M,_t.enabled=F,_t.autoUpdate=H,_t.needsUpdate=V,_t.type=z}function _e(M){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function oe(M){const F=M.target;F.removeEventListener("dispose",oe),Bi(F)}function Bi(M){ki(M),_.remove(M)}function ki(M){const F=_.get(M).programs;F!==void 0&&(F.forEach(function(H){it.releaseProgram(H)}),M.isShaderMaterial&&it.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,H,V,z,at){F===null&&(F=de);const dt=z.isMesh&&z.matrixWorld.determinant()<0,lt=Kg(M,F,H,V,z);St.setMaterial(V,dt);let Mt=H.index,Tt=1;if(V.wireframe===!0){if(Mt=Y.getWireframeAttribute(H),Mt===void 0)return;Tt=2}const zt=H.drawRange,Yt=H.attributes.position;let wt=zt.start*Tt,ce=(zt.start+zt.count)*Tt;at!==null&&(wt=Math.max(wt,at.start*Tt),ce=Math.min(ce,(at.start+at.count)*Tt)),Mt!==null?(wt=Math.max(wt,0),ce=Math.min(ce,Mt.count)):Yt!=null&&(wt=Math.max(wt,0),ce=Math.min(ce,Yt.count));const De=ce-wt;if(De<0||De===1/0)return;et.setup(z,V,lt,H,Mt);let Ce,he=Xt;if(Mt!==null&&(Ce=$.get(Mt),he=D,he.setIndex(Ce)),z.isMesh)V.wireframe===!0?(St.setLineWidth(V.wireframeLinewidth*Le()),he.setMode(P.LINES)):he.setMode(P.TRIANGLES);else if(z.isLine){let on=V.linewidth;on===void 0&&(on=1),St.setLineWidth(on*Le()),z.isLineSegments?he.setMode(P.LINES):z.isLineLoop?he.setMode(P.LINE_LOOP):he.setMode(P.LINE_STRIP)}else z.isPoints?he.setMode(P.POINTS):z.isSprite&&he.setMode(P.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))he.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const on=z._multiDrawStarts,yt=z._multiDrawCounts,Tn=z._multiDrawCount,te=Mt?$.get(Mt).bytesPerElement:1,ei=_.get(V).currentProgram.getUniforms();for(let vi=0;vi<Tn;vi++)ei.setValue(P,"_gl_DrawID",vi),he.render(on[vi]/te,yt[vi])}else if(z.isInstancedMesh)he.renderInstances(wt,De,z.count);else if(H.isInstancedBufferGeometry){const on=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,yt=Math.min(H.instanceCount,on);he.renderInstances(wt,De,yt)}else he.render(wt,De)};function Af(M,F,H){M.transparent===!0&&M.side===ri&&M.forceSinglePass===!1?(M.side=gn,M.needsUpdate=!0,ua(M,F,H),M.side=Zi,M.needsUpdate=!0,ua(M,F,H),M.side=ri):ua(M,F,H)}this.compile=function(M,F,H=null){H===null&&(H=M),C=J.get(H),C.init(F),w.push(C),H.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(C.pushLight(z),z.castShadow&&C.pushShadow(z))}),C.setupLights();const V=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const lt=at[dt];Af(lt,H,z),V.add(lt)}else Af(at,H,z),V.add(at)}),C=w.pop(),V},this.compileAsync=function(M,F,H=null){const V=this.compile(M,F,H);return new Promise(z=>{function at(){if(V.forEach(function(dt){_.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){z(M);return}setTimeout(at,10)}se.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Yl=null;function jg(M){Yl&&Yl(M)}function wf(){As.stop()}function Cf(){As.start()}const As=new Lm;As.setAnimationLoop(jg),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(M){Yl=M,X.setAnimationLoop(M),M===null?As.stop():As.start()},X.addEventListener("sessionstart",wf),X.addEventListener("sessionend",Cf),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const H=X.enabled===!0&&X.isPresenting===!0,V=v!==null&&(O===null||H)&&v.begin(E,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,F,O),C=J.get(M,w.length),C.init(F),w.push(C),Ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Vt.setFromProjectionMatrix(Ke,bi,F.reversedDepth),Ot=this.localClippingEnabled,It=tt.init(this.clippingPlanes,Ot),y=Ut.get(M,A.length),y.init(),A.push(y),X.enabled===!0&&X.isPresenting===!0){const dt=E.xr.getDepthSensingMesh();dt!==null&&ql(dt,F,-1/0,E.sortObjects)}ql(M,F,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(xe,ve),Wt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Wt&&xt.addToRenderList(y,M),this.info.render.frame++,It===!0&&tt.beginShadows();const z=C.state.shadowsArray;if(_t.render(z,M,F),It===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&v.hasRenderPass())===!1){const dt=y.opaque,lt=y.transmissive;if(C.setupLights(),F.isArrayCamera){const Mt=F.cameras;if(lt.length>0)for(let Tt=0,zt=Mt.length;Tt<zt;Tt++){const Yt=Mt[Tt];Pf(dt,lt,M,Yt)}Wt&&xt.render(M);for(let Tt=0,zt=Mt.length;Tt<zt;Tt++){const Yt=Mt[Tt];Rf(y,M,Yt,Yt.viewport)}}else lt.length>0&&Pf(dt,lt,M,F),Wt&&xt.render(M),Rf(y,M,F)}O!==null&&U===0&&(I.updateMultisampleRenderTarget(O),I.updateRenderTargetMipmap(O)),V&&v.end(E),M.isScene===!0&&M.onAfterRender(E,M,F),et.resetDefaultState(),G=-1,B=null,w.pop(),w.length>0?(C=w[w.length-1],It===!0&&tt.setGlobalState(E.clippingPlanes,C.state.camera)):C=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function ql(M,F,H,V){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)C.pushLight(M),M.castShadow&&C.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Vt.intersectsSprite(M)){V&&re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ke);const dt=gt.update(M),lt=M.material;lt.visible&&y.push(M,dt,lt,H,re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Vt.intersectsObject(M))){const dt=gt.update(M),lt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),re.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),re.copy(dt.boundingSphere.center)),re.applyMatrix4(M.matrixWorld).applyMatrix4(Ke)),Array.isArray(lt)){const Mt=dt.groups;for(let Tt=0,zt=Mt.length;Tt<zt;Tt++){const Yt=Mt[Tt],wt=lt[Yt.materialIndex];wt&&wt.visible&&y.push(M,dt,wt,H,re.z,Yt)}}else lt.visible&&y.push(M,dt,lt,H,re.z,null)}}const at=M.children;for(let dt=0,lt=at.length;dt<lt;dt++)ql(at[dt],F,H,V)}function Rf(M,F,H,V){const{opaque:z,transmissive:at,transparent:dt}=M;C.setupLightsView(H),It===!0&&tt.setGlobalState(E.clippingPlanes,H),V&&St.viewport(N.copy(V)),z.length>0&&ha(z,F,H),at.length>0&&ha(at,F,H),dt.length>0&&ha(dt,F,H),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Pf(M,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[V.id]===void 0){const wt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[V.id]=new di(1,1,{generateMipmaps:!0,type:wt?Pi:Dn,minFilter:Os,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const at=C.state.transmissionRenderTarget[V.id],dt=V.viewport||N;at.setSize(dt.z*E.transmissionResolutionScale,dt.w*E.transmissionResolutionScale);const lt=E.getRenderTarget(),Mt=E.getActiveCubeFace(),Tt=E.getActiveMipmapLevel();E.setRenderTarget(at),E.getClearColor(K),ct=E.getClearAlpha(),ct<1&&E.setClearColor(16777215,.5),E.clear(),Wt&&xt.render(H);const zt=E.toneMapping;E.toneMapping=wi;const Yt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),C.setupLightsView(V),It===!0&&tt.setGlobalState(E.clippingPlanes,V),ha(M,H,V),I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at),se.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ce=0,De=F.length;ce<De;ce++){const Ce=F[ce],{object:he,geometry:on,material:yt,group:Tn}=Ce;if(yt.side===ri&&he.layers.test(V.layers)){const te=yt.side;yt.side=gn,yt.needsUpdate=!0,Lf(he,H,V,on,yt,Tn),yt.side=te,yt.needsUpdate=!0,wt=!0}}wt===!0&&(I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at))}E.setRenderTarget(lt,Mt,Tt),E.setClearColor(K,ct),Yt!==void 0&&(V.viewport=Yt),E.toneMapping=zt}function ha(M,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let z=0,at=M.length;z<at;z++){const dt=M[z],{object:lt,geometry:Mt,group:Tt}=dt;let zt=dt.material;zt.allowOverride===!0&&V!==null&&(zt=V),lt.layers.test(H.layers)&&Lf(lt,F,H,Mt,zt,Tt)}}function Lf(M,F,H,V,z,at){M.onBeforeRender(E,F,H,V,z,at),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(E,F,H,V,M,at),z.transparent===!0&&z.side===ri&&z.forceSinglePass===!1?(z.side=gn,z.needsUpdate=!0,E.renderBufferDirect(H,F,V,z,M,at),z.side=Zi,z.needsUpdate=!0,E.renderBufferDirect(H,F,V,z,M,at),z.side=ri):E.renderBufferDirect(H,F,V,z,M,at),M.onAfterRender(E,F,H,V,z,at)}function ua(M,F,H){F.isScene!==!0&&(F=de);const V=_.get(M),z=C.state.lights,at=C.state.shadowsArray,dt=z.state.version,lt=it.getParameters(M,z.state,at,F,H),Mt=it.getProgramCacheKey(lt);let Tt=V.programs;V.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const zt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;V.envMap=q.get(M.envMap||V.environment,zt),V.envMapRotation=V.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",oe),Tt=new Map,V.programs=Tt);let Yt=Tt.get(Mt);if(Yt!==void 0){if(V.currentProgram===Yt&&V.lightsStateVersion===dt)return If(M,lt),Yt}else lt.uniforms=it.getUniforms(M),M.onBeforeCompile(lt,E),Yt=it.acquireProgram(lt,Mt),Tt.set(Mt,Yt),V.uniforms=lt.uniforms;const wt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=tt.uniform),If(M,lt),V.needsLights=Zg(M),V.lightsStateVersion=dt,V.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Yt,V.uniformsList=null,Yt}function Df(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=tl.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function If(M,F){const H=_.get(M);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Kg(M,F,H,V,z){F.isScene!==!0&&(F=de),I.resetTextureUnits();const at=F.fog,dt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,lt=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Gr,Mt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Tt=q.get(V.envMap||dt,Mt),zt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!H.morphAttributes.position,ce=!!H.morphAttributes.normal,De=!!H.morphAttributes.color;let Ce=wi;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ce=E.toneMapping);const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,on=he!==void 0?he.length:0,yt=_.get(V),Tn=C.state.lights;if(It===!0&&(Ot===!0||M!==B)){const $e=M===B&&V.id===G;tt.setState(V,M,$e)}let te=!1;V.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Tn.state.version||yt.outputColorSpace!==lt||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==Tt||V.fog===!0&&yt.fog!==at||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==tt.numPlanes||yt.numIntersection!==tt.numIntersection)||yt.vertexAlphas!==zt||yt.vertexTangents!==Yt||yt.morphTargets!==wt||yt.morphNormals!==ce||yt.morphColors!==De||yt.toneMapping!==Ce||yt.morphTargetsCount!==on)&&(te=!0):(te=!0,yt.__version=V.version);let ei=yt.currentProgram;te===!0&&(ei=ua(V,F,z));let vi=!1,ws=!1,sr=!1;const pe=ei.getUniforms(),en=yt.uniforms;if(St.useProgram(ei.program)&&(vi=!0,ws=!0,sr=!0),V.id!==G&&(G=V.id,ws=!0),vi||B!==M){St.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(P,"projectionMatrix",M.projectionMatrix),pe.setValue(P,"viewMatrix",M.matrixWorldInverse);const as=pe.map.cameraPosition;as!==void 0&&as.setValue(P,$t.setFromMatrixPosition(M.matrixWorld)),ge.logarithmicDepthBuffer&&pe.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),B!==M&&(B=M,ws=!0,sr=!0)}if(yt.needsLights&&(Tn.state.directionalShadowMap.length>0&&pe.setValue(P,"directionalShadowMap",Tn.state.directionalShadowMap,I),Tn.state.spotShadowMap.length>0&&pe.setValue(P,"spotShadowMap",Tn.state.spotShadowMap,I),Tn.state.pointShadowMap.length>0&&pe.setValue(P,"pointShadowMap",Tn.state.pointShadowMap,I)),z.isSkinnedMesh){pe.setOptional(P,z,"bindMatrix"),pe.setOptional(P,z,"bindMatrixInverse");const $e=z.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),pe.setValue(P,"boneTexture",$e.boneTexture,I))}z.isBatchedMesh&&(pe.setOptional(P,z,"batchingTexture"),pe.setValue(P,"batchingTexture",z._matricesTexture,I),pe.setOptional(P,z,"batchingIdTexture"),pe.setValue(P,"batchingIdTexture",z._indirectTexture,I),pe.setOptional(P,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(P,"batchingColorTexture",z._colorsTexture,I));const os=H.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&ut.update(z,H,ei),(ws||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,pe.setValue(P,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=LM()),ws&&(pe.setValue(P,"toneMappingExposure",E.toneMappingExposure),yt.needsLights&&$g(en,sr),at&&V.fog===!0&&Rt.refreshFogUniforms(en,at),Rt.refreshMaterialUniforms(en,V,Ft,ht,C.state.transmissionRenderTarget[M.id]),tl.upload(P,Df(yt),en,I)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(tl.upload(P,Df(yt),en,I),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(P,"center",z.center),pe.setValue(P,"modelViewMatrix",z.modelViewMatrix),pe.setValue(P,"normalMatrix",z.normalMatrix),pe.setValue(P,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $e=V.uniformsGroups;for(let as=0,rr=$e.length;as<rr;as++){const Uf=$e[as];pt.update(Uf,ei),pt.bind(Uf,ei)}}return ei}function $g(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Zg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,F,H){const V=_.get(M);V.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(M.texture).__webglTexture=F,_.get(M.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:H,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const H=_.get(M);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0};const Jg=P.createFramebuffer();this.setRenderTarget=function(M,F=0,H=0){O=M,R=F,U=H;let V=null,z=!1,at=!1;if(M){const lt=_.get(M);if(lt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(P.FRAMEBUFFER,lt.__webglFramebuffer),N.copy(M.viewport),k.copy(M.scissor),Z=M.scissorTest,St.viewport(N),St.scissor(k),St.setScissorTest(Z),G=-1;return}else if(lt.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(lt.__hasExternalTextures)I.rebindTextures(M,_.get(M.texture).__webglTexture,_.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const zt=M.depthTexture;if(lt.__boundDepthTexture!==zt){if(zt!==null&&_.has(zt)&&(M.width!==zt.image.width||M.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(at=!0);const Tt=_.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[F])?V=Tt[F][H]:V=Tt[F],z=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?V=_.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?V=Tt[H]:V=Tt,N.copy(M.viewport),k.copy(M.scissor),Z=M.scissorTest}else N.copy(j).multiplyScalar(Ft).floor(),k.copy(nt).multiplyScalar(Ft).floor(),Z=rt;if(H!==0&&(V=Jg),St.bindFramebuffer(P.FRAMEBUFFER,V)&&St.drawBuffers(M,V),St.viewport(N),St.scissor(k),St.setScissorTest(Z),z){const lt=_.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,lt.__webglTexture,H)}else if(at){const lt=F;for(let Mt=0;Mt<M.textures.length;Mt++){const Tt=_.get(M.textures[Mt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Mt,Tt.__webglTexture,H,lt)}}else if(M!==null&&H!==0){const lt=_.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,lt.__webglTexture,H)}G=-1},this.readRenderTargetPixels=function(M,F,H,V,z,at,dt,lt=0){if(!(M&&M.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){St.bindFramebuffer(P.FRAMEBUFFER,Mt);try{const Tt=M.textures[lt],zt=Tt.format,Yt=Tt.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+lt),!ge.textureFormatReadable(zt)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Yt)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-V&&H>=0&&H<=M.height-z&&P.readPixels(F,H,V,z,st.convert(zt),st.convert(Yt),at)}finally{const Tt=O!==null?_.get(O).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,F,H,V,z,at,dt,lt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=_.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt)if(F>=0&&F<=M.width-V&&H>=0&&H<=M.height-z){St.bindFramebuffer(P.FRAMEBUFFER,Mt);const Tt=M.textures[lt],zt=Tt.format,Yt=Tt.type;if(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+lt),!ge.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),P.readPixels(F,H,V,z,st.convert(zt),st.convert(Yt),0);const ce=O!==null?_.get(O).__webglFramebuffer:null;St.bindFramebuffer(P.FRAMEBUFFER,ce);const De=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await F_(P,De,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(wt),P.deleteSync(De),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,H=0){const V=Math.pow(2,-H),z=Math.floor(M.image.width*V),at=Math.floor(M.image.height*V),dt=F!==null?F.x:0,lt=F!==null?F.y:0;I.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,dt,lt,z,at),St.unbindTexture()};const Qg=P.createFramebuffer(),t_=P.createFramebuffer();this.copyTextureToTexture=function(M,F,H=null,V=null,z=0,at=0){let dt,lt,Mt,Tt,zt,Yt,wt,ce,De;const Ce=M.isCompressedTexture?M.mipmaps[at]:M.image;if(H!==null)dt=H.max.x-H.min.x,lt=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,zt=H.min.y,Yt=H.isBox3?H.min.z:0;else{const en=Math.pow(2,-z);dt=Math.floor(Ce.width*en),lt=Math.floor(Ce.height*en),M.isDataArrayTexture?Mt=Ce.depth:M.isData3DTexture?Mt=Math.floor(Ce.depth*en):Mt=1,Tt=0,zt=0,Yt=0}V!==null?(wt=V.x,ce=V.y,De=V.z):(wt=0,ce=0,De=0);const he=st.convert(F.format),on=st.convert(F.type);let yt;F.isData3DTexture?(I.setTexture3D(F,0),yt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(I.setTexture2DArray(F,0),yt=P.TEXTURE_2D_ARRAY):(I.setTexture2D(F,0),yt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const Tn=P.getParameter(P.UNPACK_ROW_LENGTH),te=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ei=P.getParameter(P.UNPACK_SKIP_PIXELS),vi=P.getParameter(P.UNPACK_SKIP_ROWS),ws=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tt),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Yt);const sr=M.isDataArrayTexture||M.isData3DTexture,pe=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const en=_.get(M),os=_.get(F),$e=_.get(en.__renderTarget),as=_.get(os.__renderTarget);St.bindFramebuffer(P.READ_FRAMEBUFFER,$e.__webglFramebuffer),St.bindFramebuffer(P.DRAW_FRAMEBUFFER,as.__webglFramebuffer);for(let rr=0;rr<Mt;rr++)sr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(M).__webglTexture,z,Yt+rr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(F).__webglTexture,at,De+rr)),P.blitFramebuffer(Tt,zt,dt,lt,wt,ce,dt,lt,P.DEPTH_BUFFER_BIT,P.NEAREST);St.bindFramebuffer(P.READ_FRAMEBUFFER,null),St.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||_.has(M)){const en=_.get(M),os=_.get(F);St.bindFramebuffer(P.READ_FRAMEBUFFER,Qg),St.bindFramebuffer(P.DRAW_FRAMEBUFFER,t_);for(let $e=0;$e<Mt;$e++)sr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,z,Yt+$e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,z),pe?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,os.__webglTexture,at,De+$e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,os.__webglTexture,at),z!==0?P.blitFramebuffer(Tt,zt,dt,lt,wt,ce,dt,lt,P.COLOR_BUFFER_BIT,P.NEAREST):pe?P.copyTexSubImage3D(yt,at,wt,ce,De+$e,Tt,zt,dt,lt):P.copyTexSubImage2D(yt,at,wt,ce,Tt,zt,dt,lt);St.bindFramebuffer(P.READ_FRAMEBUFFER,null),St.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(yt,at,wt,ce,De,dt,lt,Mt,he,on,Ce.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,at,wt,ce,De,dt,lt,Mt,he,Ce.data):P.texSubImage3D(yt,at,wt,ce,De,dt,lt,Mt,he,on,Ce):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,at,wt,ce,dt,lt,he,on,Ce.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,at,wt,ce,Ce.width,Ce.height,he,Ce.data):P.texSubImage2D(P.TEXTURE_2D,at,wt,ce,dt,lt,he,on,Ce);P.pixelStorei(P.UNPACK_ROW_LENGTH,Tn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,te),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ei),P.pixelStorei(P.UNPACK_SKIP_ROWS,vi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ws),at===0&&F.generateMipmaps&&P.generateMipmap(yt),St.unbindTexture()},this.initRenderTarget=function(M){_.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){R=0,U=0,O=null,St.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}}const Bd={type:"change"},yu={type:"start"},Om={type:"end"},Ba=new Em,kd=new Xi,IM=Math.cos(70*Ph.DEG2RAD),ze=new L,xn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cc=1e-6;class UM extends B1{constructor(t,n=null){super(t,n),this.state=ue.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ur.ROTATE,MIDDLE:Ur.DOLLY,RIGHT:Ur.PAN},this.touches={ONE:Lr.ROTATE,TWO:Lr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Qi,this._lastTargetPosition=new L,this._quat=new Qi().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pd,this._sphericalDelta=new pd,this._scale=1,this._panOffset=new L,this._rotateStart=new Dt,this._rotateEnd=new Dt,this._rotateDelta=new Dt,this._panStart=new Dt,this._panEnd=new Dt,this._panDelta=new Dt,this._dollyStart=new Dt,this._dollyEnd=new Dt,this._dollyDelta=new Dt,this._dollyDirection=new L,this._mouse=new Dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NM.bind(this),this._onPointerDown=FM.bind(this),this._onPointerUp=OM.bind(this),this._onContextMenu=WM.bind(this),this._onMouseWheel=zM.bind(this),this._onKeyDown=VM.bind(this),this._onTouchStart=GM.bind(this),this._onTouchMove=HM.bind(this),this._onMouseDown=BM.bind(this),this._onMouseMove=kM.bind(this),this._interceptControlDown=XM.bind(this),this._interceptControlUp=YM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bd),this.update(),this.state=ue.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;ze.copy(n).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),s<-Math.PI?s+=xn:s>Math.PI&&(s-=xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),n.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ze.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ba.origin.copy(this.object.position),Ba.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ba.direction))<IM?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ba.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cc||this._lastTargetPosition.distanceToSquared(this.target)>Cc?(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){ze.setFromMatrixColumn(n,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,n){this.screenSpacePanning===!0?ze.setFromMatrixColumn(n,1):(ze.setFromMatrixColumn(n,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ze.copy(s).sub(this.target);let r=ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Dt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function FM(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function NM(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function OM(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Om),this.state=ue.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function BM(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=ue.DOLLY;break;case Ur.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}break;case Ur.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(yu)}function kM(e){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function zM(e){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(e.preventDefault(),this.dispatchEvent(yu),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Om))}function VM(e){this.enabled!==!1&&this._handleKeyDown(e)}function GM(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Lr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=ue.TOUCH_ROTATE;break;case Lr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Lr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=ue.TOUCH_DOLLY_PAN;break;case Lr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(yu)}function HM(e){switch(this._trackPointer(e),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=ue.NONE}}function WM(e){this.enabled!==!1&&e.preventDefault()}function XM(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function YM(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qM(){const e=new DM({antialias:!0});return e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.toneMapping=su,e.toneMappingExposure=1,document.body.appendChild(e.domElement),window.addEventListener("resize",()=>{e.setSize(window.innerWidth,window.innerHeight)}),e}class Sl extends tn{constructor(){const t=Sl.SkyShader,n=new Nn({name:t.name,uniforms:al.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:gn,depthWrite:!1});super(new bs(1,1,1),n),this.isSky=!0}}Sl.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},time:{value:0}},vertexShader:`
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

		}`};const Ti=6e3,Lt=Ti/2,jM=256,qo=8,Ar=Ti/qo,Eu=900,zd=60,bu=600,KM=3,Tu=50,$M=.3,ZM=-15,JM=-50,QM=400,Ie=15,tS=200,eS=150,nS=4e3,iS=20,sS=80,Vd=-9.81,Gd=.7,rS=1.225,ka=3.5,oS=.08,aS=1.6,Hd=2*Math.PI,lS=.025,cS=.08,hS=60,uS=.3,fS=.25,dS=.6,Wd=100,pS=-80,Xd=4,mS=2,gS=2.5,_S=3.5,vS=1,za=.7,Bm=600,km=5e3,Fh=60,xS=2,MS=8e3,SS=5,yS=128;function ES(e){const t=new Qf,n=new Sl;n.scale.setScalar(45e4),t.add(n);const i=n.material.uniforms;i.turbidity.value=10,i.rayleigh.value=3,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.7;const s=20,r=180,o=Ph.degToRad(90-s),a=Ph.degToRad(r),l=new L().setFromSphericalCoords(1,o,a);i.sunPosition.value.copy(l);const c=new Dh(e);c.compileEquirectangularShader();const h=new Qf;h.add(n.clone());const f=c.fromScene(h,0,.1,1e3).texture;t.background=f,t.environment=f,c.dispose(),t.add(n);const u=new qt(11587816);t.fog=new gu(u,Bm,km);const d=new F1(16777215,.4);t.add(d);const g=new U1(16777215,1.2);return g.position.copy(l).multiplyScalar(500),t.add(g),t}const Yd=1/30;class bS{constructor(){this._callbacks=[],this._running=!1,this._lastTime=0}onUpdate(t){this._callbacks.push(t)}start(){this._running=!0,this._lastTime=performance.now(),this._tick()}stop(){this._running=!1}_tick(){if(!this._running)return;requestAnimationFrame(()=>this._tick());const t=performance.now();let n=(t-this._lastTime)/1e3;this._lastTime=t,n>Yd&&(n=Yd);for(const i of this._callbacks)i(n)}}class TS{constructor(){this.lift=0,this.roll=0,this.pitch=0,this.wingSpread=1,this.source="keyboard",this.forceKeyboard=!1,this.poseAvailable=!1,this.onModeChange=null,this._keys={},this._poseInput=null,window.addEventListener("keydown",t=>{if(this._keys[t.code]=!0,t.code==="KeyT"){this.forceKeyboard=!this.forceKeyboard;const n=this.forceKeyboard?"KEYBOARD":"WEBCAM";console.log(`Input mode: ${n}`);let i=document.getElementById("mode-overlay");i||(i=document.createElement("div"),i.id="mode-overlay",i.style.cssText="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);color:white;font-size:32px;font-family:sans-serif;text-shadow:2px 2px 4px rgba(0,0,0,0.8);pointer-events:none;z-index:200;transition:opacity 0.5s;",document.body.appendChild(i)),i.textContent=`Mode: ${n}`,i.style.opacity="1",setTimeout(()=>{i.style.opacity="0"},1500),this.onModeChange&&this.onModeChange(this.forceKeyboard)}}),window.addEventListener("keyup",t=>{this._keys[t.code]=!1})}setPoseInput(t){this._poseInput=t}update(t){if(!this.forceKeyboard&&this.poseAvailable&&this._poseInput){this.source="pose",this.lift=this._poseInput.flapStrength,this.roll=this._poseInput.roll,this.pitch=this._poseInput.pitch,this.wingSpread=this._poseInput.wingSpread??1;return}this.source="keyboard",this.lift=this._keys.Space?1:0,this.roll=0,(this._keys.KeyA||this._keys.ArrowLeft)&&(this.roll=1),(this._keys.KeyD||this._keys.ArrowRight)&&(this.roll=-1),this._keys.KeyW||this._keys.ArrowUp?(this.wingSpread=0,this.pitch=-.5):this._keys.KeyS||this._keys.ArrowDown?(this.wingSpread=1,this.pitch=.6):(this.wingSpread=1,this.pitch=0)}}class AS{constructor(){this.el=document.createElement("div"),this.el.id="hud",this.el.style.cssText=`
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
    `,this.hint.innerHTML="SPACE = Flap &nbsp;|&nbsp; A/D = Turn &nbsp;|&nbsp; W/S = Pitch &nbsp;|&nbsp; F = Toggle Flight Mode",document.body.appendChild(this.hint)}update(t,n=!1,i="keyboard"){const s=Math.round(t.altitude),r=Math.round(t.speed*3.6),o=Math.round((t.yaw*180/Math.PI%360+360)%360),a=Math.round(t.angleOfAttack*180/Math.PI),l=t.isStalling?'<span style="color:#ff4444;font-weight:bold">STALL</span><br>':"",c=i==="pose"?'<span style="color:#44ff44">WEBCAM</span>':'<span style="color:#ffaa44">KEYBOARD</span>';this.el.innerHTML=`
      ${l}
      ${c}<br>
      ALT: ${s}m<br>
      SPD: ${r} km/h<br>
      HDG: ${o}&deg;<br>
      AoA: ${a}&deg;
    `,n?(this.flapIndicator.style.background="rgba(255, 200, 50, 0.5)",this.flapIndicator.textContent="^"):(this.flapIndicator.style.background="transparent",this.flapIndicator.textContent="~")}}const Va=[{id:"FLAP!",label:"Flap",desc:"Hands up+down",color:"#ffdd00"},{id:"GLIDE",label:"Glide",desc:"Hands above",color:"#66ccff"},{id:"DIVE",label:"Dive",desc:"Hands below",color:"#ff4444"},{id:"CLIMB",label:"Climb",desc:"Arms high",color:"#44ff88"},{id:"TURN LEFT",label:"Turn L",desc:"Left arm up",color:"#ff88ff"},{id:"TURN RIGHT",label:"Turn R",desc:"Right arm up",color:"#ffaa44"}];function wS(e,t,n,i,s,r){const o=t+i/2,a=n+s*.15,l=n+s*.3,c=n+s*.6,h=n+s*.9,f=i*.35;e.lineWidth=2,e.lineCap="round",e.beginPath(),e.arc(o,a,s*.08,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(o,a+s*.08),e.lineTo(o,c),e.stroke(),e.beginPath(),e.moveTo(o,c),e.lineTo(o-i*.15,h),e.moveTo(o,c),e.lineTo(o+i*.15,h),e.stroke();const u=o,d=o;let g,x,m,p;switch(r){case"FLAP!":g=o-f,x=l-s*.15,m=o+f,p=l-s*.15;break;case"GLIDE":g=o-f,x=l,m=o+f,p=l;break;case"DIVE":g=o-f*.7,x=l+s*.15,m=o+f*.7,p=l+s*.15,e.beginPath(),e.moveTo(o,n+s*.02),e.lineTo(o,n+s*.15),e.moveTo(o-3,n+s*.11),e.lineTo(o,n+s*.15),e.lineTo(o+3,n+s*.11),e.stroke();break;case"CLIMB":g=o-f,x=l-s*.1,m=o+f,p=l-s*.1;break;case"TURN LEFT":g=o-f*.7,x=l-s*.25,m=o+f,p=l+s*.05;break;case"TURN RIGHT":g=o-f,x=l+s*.05,m=o+f*.7,p=l-s*.25;break;default:g=o-f,x=l,m=o+f,p=l}if(e.beginPath(),e.moveTo(u,l),e.lineTo(g,x),e.moveTo(d,l),e.lineTo(m,p),e.stroke(),r==="FLAP!"){const S=l-s*.25,b=l+s*.05;for(const y of[-f*.6,f*.6])e.beginPath(),e.moveTo(o+y,b),e.lineTo(o+y,S),e.moveTo(o+y-3,S+5),e.lineTo(o+y,S),e.lineTo(o+y+3,S+5),e.stroke()}}class CS{constructor(t){if(this.video=t,this._currentGesture="GLIDE",this.container=document.createElement("div"),this.container.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 200;
      pointer-events: none;
    `,document.body.appendChild(this.container),this._leftCards=this._createCardColumn(Va.slice(0,3)),this.container.appendChild(this._leftCards),this._videoContainer=document.createElement("div"),this._videoContainer.style.cssText=`
      width: 220px;
      height: 165px;
      border: 2px solid rgba(255,255,255,0.4);
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      background: rgba(0,0,0,0.5);
    `,t){const n=t.cloneNode();n.srcObject=t.srcObject,n.style.cssText="width:100%;height:100%;object-fit:cover;transform:scaleX(-1);",n.play(),this._videoContainer.appendChild(n)}this.canvas=document.createElement("canvas"),this.canvas.width=220,this.canvas.height=165,this.canvas.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this._videoContainer.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.container.appendChild(this._videoContainer),this._rightCards=this._createCardColumn(Va.slice(3,6)),this.container.appendChild(this._rightCards),this._cardElements={},this.container.querySelectorAll("[data-gesture]").forEach(n=>{this._cardElements[n.dataset.gesture]=n})}_createCardColumn(t){const n=document.createElement("div");n.style.cssText="display:flex;flex-direction:column;gap:6px;";for(const i of t){const s=document.createElement("div");s.dataset.gesture=i.id,s.style.cssText=`
        width: 80px;
        height: 70px;
        border: 2px solid rgba(255,255,255,0.2);
        border-radius: 6px;
        background: rgba(0,0,0,0.4);
        padding: 2px;
        transition: border-color 0.2s, background 0.2s;
        position: relative;
      `;const r=document.createElement("canvas");r.width=76,r.height=45,r.style.cssText="width:100%;display:block;";const o=r.getContext("2d");o.strokeStyle="rgba(255,255,255,0.7)",wS(o,0,0,76,45,i.id),s.appendChild(r);const a=document.createElement("div");a.style.cssText=`
        text-align:center;font-size:9px;color:rgba(255,255,255,0.7);
        font-family:sans-serif;line-height:1.1;
      `,a.innerHTML=`<b>${i.label}</b><br>${i.desc}`,s.appendChild(a),n.appendChild(s)}return n}drawSkeleton(t){const n=this.ctx,i=this.canvas.width,s=this.canvas.height;if(n.clearRect(0,0,i,s),!t){n.font="bold 14px sans-serif",n.textAlign="center",n.fillStyle="#ff6666",n.fillText("No tracking",i/2,s/2);return}const r=[[11,13],[13,15],[12,14],[14,16],[11,12],[11,23],[12,24],[23,24]];n.strokeStyle="rgba(0, 255, 128, 0.8)",n.lineWidth=2;for(const[o,a]of r){const l=t[o],c=t[a];!l||!c||(n.beginPath(),n.moveTo((1-l.x)*i,l.y*s),n.lineTo((1-c.x)*i,c.y*s),n.stroke())}for(const o of[15,16]){const a=t[o];if(!a)continue;const l=(a.visibility??1)>.4&&a.x>.01&&a.x<.99;n.fillStyle=l?"rgba(50,255,100,1)":"rgba(255,50,50,1)",n.beginPath(),n.arc((1-a.x)*i,a.y*s,5,0,Math.PI*2),n.fill()}for(const o of[11,12,13,14]){const a=t[o];a&&(n.fillStyle="rgba(255,200,50,0.9)",n.beginPath(),n.arc((1-a.x)*i,a.y*s,3,0,Math.PI*2),n.fill())}}showGesture(t){this._currentGesture=t;for(const[r,o]of Object.entries(this._cardElements))if(r===t){const a=Va.find(l=>l.id===r);o.style.borderColor=a?a.color:"#fff",o.style.background="rgba(255,255,255,0.15)"}else o.style.borderColor="rgba(255,255,255,0.2)",o.style.background="rgba(0,0,0,0.4)";const n=this.ctx,i=this.canvas.width,s=Va.find(r=>r.id===t);n.font="bold 16px sans-serif",n.textAlign="center",n.fillStyle=s?s.color:"#fff",n.shadowColor="black",n.shadowBlur=4,n.fillText(t,i/2,20),n.shadowBlur=0}show(){this.container.style.display="flex"}hide(){this.container.style.display="none"}}function Ms(e,t,n){return Math.max(t,Math.min(n,e))}function RS(e,t,n,i,s){return i+(e-t)/(n-t)*(s-i)}function Bt(e,t){return e+Math.random()*(t-e)}function PS(e=Eu,t=null){const n=[],i=Math.floor(e*$M),s=e-i;for(let a=0;a<s;a++)n.push({cx:Bt(-Lt,Lt),cz:Bt(-Lt,Lt),radius:Bt(zd,bu),height:Bt(KM,Tu)});const r=10+Math.floor(Math.random()*6);for(let a=0;a<r;a++)n.push({cx:Bt(-Lt*.7,Lt*.7),cz:Bt(-Lt*.7,Lt*.7),radius:Bt(80,250),height:Bt(100,220)});for(let a=0;a<i;a++)n.push({cx:Bt(-Lt,Lt),cz:Bt(-Lt,Lt),radius:Bt(zd,QM),height:Bt(JM,ZM)});const o=60;for(let a=0;a<o;a++){const l=Math.random()*Math.PI*2,c=Lt*(.55+Math.random()*.35);n.push({cx:Math.cos(l)*c,cz:Math.sin(l)*c,radius:Bt(40,180),height:Bt(-80,-25)})}return n}function zm(e,t,n){let i=0;for(const a of n){const l=e-a.cx,c=t-a.cz,h=l*l+c*c,f=a.radius*a.radius,u=1-h/f;u>0&&(i+=a.height*u)}const s=Math.sqrt(e*e+t*t),r=Lt*.55,o=Lt*.9;if(s>r){const a=Math.min((s-r)/(o-r),1),l=1-a*a;i=i*l-(1-l)*30}return i}function LS(e,t=512){console.time("Heightmap cache");const n=new Float32Array(t*t),i=Ti/t;for(let r=0;r<t;r++){const o=-Lt+(r+.5)*i;for(let a=0;a<t;a++){const l=-Lt+(a+.5)*i;n[r*t+a]=zm(l,o,e)}}console.timeEnd("Heightmap cache");function s(r,o){const a=(r+Lt)/i-.5,l=(o+Lt)/i-.5,c=Math.floor(a),h=Math.floor(l),f=a-c,u=l-h,d=Math.max(0,Math.min(c,t-1)),g=Math.max(0,Math.min(c+1,t-1)),x=Math.max(0,Math.min(h,t-1)),m=Math.max(0,Math.min(h+1,t-1)),p=n[x*t+d],S=n[x*t+g],b=n[m*t+d],y=n[m*t+g];return(p*(1-f)+S*f)*(1-u)+(b*(1-f)+y*f)*u}return{get:s,data:n,resolution:t}}let Nh=null;function DS(e){Nh=e}function En(e,t,n){return Nh?Nh.get(e,t):zm(e,t,n)}function IS(e,t,n,i){const s=Math.floor(jM/qo),r=new ts(Ar,Ar,s,s);r.rotateX(-Math.PI/2);const o=-Lt+e*Ar+Ar/2,a=-Lt+t*Ar+Ar/2,l=r.attributes.position;for(let u=0;u<l.count;u++){const d=l.getX(u),g=l.getZ(u),x=d+o,m=g+a,p=En(x,m,n);l.setY(u,p)}l.needsUpdate=!0,r.computeVertexNormals(),r.computeBoundingBox(),r.computeBoundingSphere();const c=r.attributes.uv,h=yS/qo;for(let u=0;u<c.count;u++){const d=c.getX(u),g=c.getY(u);c.setXY(u,(e+d)*h,(t+g)*h)}c.needsUpdate=!0;const f=new tn(r,i);return f.position.set(o,0,a),f.userData.chunkX=e,f.userData.chunkZ=t,f}function US(e,t,n){try{const i=JSON.stringify(e),s=new Uint8Array(t.buffer);let r="";for(let a=0;a<s.length;a+=4096)r+=String.fromCharCode.apply(null,s.slice(a,a+4096));const o=btoa(r);localStorage.setItem("world_arcs",i),localStorage.setItem("world_heightmap",o),localStorage.setItem("world_resolution",String(n)),localStorage.setItem("world_version",`${Eu}_${Ti}_${bu}_${Tu}_v8`),console.log("World cached to localStorage")}catch(i){console.warn("Could not cache world:",i.message)}}function FS(){try{const e=`${Eu}_${Ti}_${bu}_${Tu}_v8`;if(localStorage.getItem("world_version")!==e)return null;const t=localStorage.getItem("world_arcs"),n=localStorage.getItem("world_heightmap"),i=parseInt(localStorage.getItem("world_resolution"));if(!t||!n||!i)return null;console.time("Load cached world");const s=JSON.parse(t),r=atob(n),o=new Uint8Array(r.length);for(let l=0;l<r.length;l++)o[l]=r.charCodeAt(l);const a=new Float32Array(o.buffer);return console.timeEnd("Load cached world"),{arcs:s,data:a,resolution:i}}catch(e){return console.warn("Cache load failed:",e.message),null}}function NS(e){let t,n;const i=FS();if(i){console.log("Using cached world!"),t=i.arcs;const o=i.resolution,a=i.data,l=Ti/o;n={get(c,h){const f=(c+Lt)/l-.5,u=(h+Lt)/l-.5,d=Math.floor(f),g=Math.floor(u),x=f-d,m=u-g,p=Math.max(0,Math.min(d,o-1)),S=Math.max(0,Math.min(d+1,o-1)),b=Math.max(0,Math.min(g,o-1)),y=Math.max(0,Math.min(g+1,o-1)),C=a[b*o+p],A=a[b*o+S],w=a[y*o+p],v=a[y*o+S];return(C*(1-x)+A*x)*(1-m)+(w*(1-x)+v*x)*m},data:a,resolution:o}}else console.log("Generating new world..."),t=PS(),n=LS(t),US(t,n.data,n.resolution);DS(n);const s=new Zn;s.name="terrain";const r=[];console.time("Terrain chunks");for(let o=0;o<qo;o++)for(let a=0;a<qo;a++){const l=IS(o,a,t,e);s.add(l),r.push(l)}return console.timeEnd("Terrain chunks"),{chunks:r,arcs:t,group:s}}class qd extends tn{constructor(t,n={}){super(t),this.isWater=!0;const i=this,s=n.textureWidth!==void 0?n.textureWidth:512,r=n.textureHeight!==void 0?n.textureHeight:512,o=n.clipBias!==void 0?n.clipBias:0,a=n.alpha!==void 0?n.alpha:1,l=n.time!==void 0?n.time:0,c=n.waterNormals!==void 0?n.waterNormals:null,h=n.sunDirection!==void 0?n.sunDirection:new L(.70707,.70707,0),f=new qt(n.sunColor!==void 0?n.sunColor:16777215),u=new qt(n.waterColor!==void 0?n.waterColor:8355711),d=n.eye!==void 0?n.eye:new L(0,0,0),g=n.distortionScale!==void 0?n.distortionScale:20,x=n.side!==void 0?n.side:Zi,m=n.fog!==void 0?n.fog:!1,p=new Xi,S=new L,b=new L,y=new L,C=new ie,A=new L(0,0,-1),w=new ye,v=new L,E=new L,W=new ye,R=new ie,U=new Ln,O=new di(s,r,{type:Pi}),G={name:"MirrorShader",uniforms:al.merge([ot.fog,ot.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new ie},sunColor:{value:new qt(8355711)},sunDirection:{value:new L(.70707,.70707,0)},eye:{value:new L},waterColor:{value:new qt(5592405)}}]),vertexShader:`
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
				}`},B=new Nn({name:G.name,uniforms:al.clone(G.uniforms),vertexShader:G.vertexShader,fragmentShader:G.fragmentShader,lights:!0,side:x,fog:m});B.uniforms.mirrorSampler.value=O.texture,B.uniforms.textureMatrix.value=R,B.uniforms.alpha.value=a,B.uniforms.time.value=l,B.uniforms.normalSampler.value=c,B.uniforms.sunColor.value=f,B.uniforms.waterColor.value=u,B.uniforms.sunDirection.value=h,B.uniforms.distortionScale.value=g,B.uniforms.eye.value=d,i.material=B,i.onBeforeRender=function(N,k,Z){if(b.setFromMatrixPosition(i.matrixWorld),y.setFromMatrixPosition(Z.matrixWorld),C.extractRotation(i.matrixWorld),S.set(0,0,1),S.applyMatrix4(C),v.subVectors(b,y),v.dot(S)>0)return;v.reflect(S).negate(),v.add(b),C.extractRotation(Z.matrixWorld),A.set(0,0,-1),A.applyMatrix4(C),A.add(y),E.subVectors(b,A),E.reflect(S).negate(),E.add(b),U.position.copy(v),U.up.set(0,1,0),U.up.applyMatrix4(C),U.up.reflect(S),U.lookAt(E),U.far=Z.far,U.updateMatrixWorld(),U.projectionMatrix.copy(Z.projectionMatrix),R.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),R.multiply(U.projectionMatrix),R.multiply(U.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(S,b),p.applyMatrix4(U.matrixWorldInverse),w.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const K=U.projectionMatrix;W.x=(Math.sign(w.x)+K.elements[8])/K.elements[0],W.y=(Math.sign(w.y)+K.elements[9])/K.elements[5],W.z=-1,W.w=(1+K.elements[10])/K.elements[14],w.multiplyScalar(2/w.dot(W)),K.elements[2]=w.x,K.elements[6]=w.y,K.elements[10]=w.z+1-o,K.elements[14]=w.w,d.setFromMatrixPosition(Z.matrixWorld);const ct=N.getRenderTarget(),ft=N.xr.enabled,ht=N.shadowMap.autoUpdate;i.visible=!1,N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(O),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(k,U),i.visible=!0,N.xr.enabled=ft,N.shadowMap.autoUpdate=ht,N.setRenderTarget(ct);const Ft=Z.viewport;Ft!==void 0&&N.state.viewport(Ft)}}}function OS(e){const t=new ts(Ti*4,Ti*4),n=new qd(t,{textureWidth:512,textureHeight:512,waterNormals:new Mu().load("textures/water-normal.jpg",o=>{o.wrapS=ci,o.wrapT=ci},void 0,()=>{const o=document.createElement("canvas"),a=512;o.width=a,o.height=a;const l=o.getContext("2d");l.fillStyle="#8080ff",l.fillRect(0,0,a,a);for(let h=0;h<3;h++){const f=[200,400,800][h],u=[20,8,3][h],d=[20,12,6][h];for(let g=0;g<f;g++){const x=Math.random()*a,m=Math.random()*a,p=1+Math.random()*u,S=Math.random()*Math.PI*2,b=128+Math.floor(Math.cos(S)*d),y=128+Math.floor(Math.sin(S)*d),C=l.createRadialGradient(x,m,0,x,m,p);C.addColorStop(0,`rgb(${b}, ${y}, 255)`),C.addColorStop(1,"rgb(128, 128, 255)"),l.fillStyle=C,l.beginPath(),l.arc(x,m,p,0,Math.PI*2),l.fill()}}const c=new ks(o);c.wrapS=ci,c.wrapT=ci,n.material.uniforms.normalSampler.value=c}),sunDirection:new L().copy(e.position).normalize(),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:!1});n.rotation.x=-Math.PI/2,n.position.y=Ie;const i=new qd(new ts(Ti*4,Ti*4),{textureWidth:512,textureHeight:512,waterNormals:n.material.uniforms.normalSampler.value,sunDirection:new L().copy(e.position).normalize(),sunColor:16777215,waterColor:7695,distortionScale:3.7,fog:!1});i.rotation.x=Math.PI/2,i.position.y=Ie-.05;const s=new Zn;s.add(n),s.add(i);function r(o){n.material.uniforms.time.value+=o,i.material.uniforms.time.value+=o}return{mesh:s,update:r}}const Wn=Lt*3;function BS(){const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");n.clearRect(0,0,256,256);const i=8+Math.floor(Math.random()*6);for(let s=0;s<i;s++){const r=128+(Math.random()-.5)*256*.5,o=256/2+(Math.random()-.5)*256*.3,a=30+Math.random()*50,l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(255, 255, 255, 0.8)"),l.addColorStop(.5,"rgba(255, 255, 255, 0.3)"),l.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=l,n.beginPath(),n.arc(r,o,a,0,Math.PI*2),n.fill()}return t}function kS(){const e=new Zn;e.name="clouds";const t=[];for(let s=0;s<4;s++){const r=BS(),o=new ks(r);t.push(o)}for(let s=0;s<eS;s++){const r=t[Math.floor(Math.random()*t.length)],o=new Dr({map:r,transparent:!0,opacity:.6+Math.random()*.3,depthWrite:!1}),a=new Po(o),l=Bt(120,350);a.scale.set(l,l*.35,1),a.position.set(Bt(-Wn,Wn),tS+Bt(-50,80),Bt(-Wn,Wn)),e.add(a)}const n=e.children.map(()=>({x:Bt(-2,2),z:Bt(-1,1)}));function i(s){for(let r=0;r<e.children.length;r++){const o=e.children[r],a=n[r];o.position.x+=a.x*s,o.position.z+=a.z*s,o.position.x>Wn&&(o.position.x=-Wn),o.position.x<-Wn&&(o.position.x=Wn),o.position.z>Wn&&(o.position.z=-Wn),o.position.z<-Wn&&(o.position.z=Wn)}}return{group:e,update:i}}function Ga(e,t){let n=e*374761393+t*668265263;return n=(n^n>>13)*1274126177,(n^n>>16)/2147483648}function jd(e){return e*e*(3-2*e)}function zS(e,t){const n=Math.floor(e),i=Math.floor(t),s=jd(e-n),r=jd(t-i),o=Ga(n,i),a=Ga(n+1,i),l=Ga(n,i+1),c=Ga(n+1,i+1);return o+s*(a-o)+r*(l-o)+s*r*(o-a-l+c)}function Vm(e,t,n=4){let i=0,s=1,r=1,o=0;for(let a=0;a<n;a++)i+=s*zS(e*r,t*r),o+=s,s*=.5,r*=2;return i/o}function Gm(e,t,n,i,s,r,o,a){e.beginPath(),e.moveTo(t-s/2,n),e.lineTo(t-r/2,i),e.lineTo(t+r/2,i),e.lineTo(t+s/2,n),e.closePath(),e.fillStyle=o,e.fill();const l=i-n;for(let c=0;c<15;c++){const h=n+Math.random()*l,f=(h-n)/l,u=s+(r-s)*f,d=t-u/2+Math.random()*u;e.strokeStyle=a,e.lineWidth=.5+Math.random(),e.globalAlpha=.3+Math.random()*.3,e.beginPath(),e.moveTo(d,h),e.lineTo(d+(Math.random()-.5)*2,h+3+Math.random()*6),e.stroke()}e.globalAlpha=1}function Hm(e,t,n,i,s,r){const o=4+Math.floor(Math.random()*4);for(let a=0;a<o;a++){const l=.15+Math.random()*.5,c=n+l*(i-n),h=Math.random()>.5?1:-1,f=s*(.3+Math.random()*.5),u=c-5-Math.random()*15;e.strokeStyle=r,e.lineWidth=1+Math.random()*2,e.globalAlpha=.6,e.beginPath(),e.moveTo(t,c),e.quadraticCurveTo(t+h*f*.6,c-5,t+h*f,u),e.stroke()}e.globalAlpha=1}function yn(e,t,n,i,s,r=60){const o=e.createRadialGradient(t+2,n+3,0,t+2,n+3,i*1.05);o.addColorStop(0,"rgba(0, 20, 0, 0.3)"),o.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=o,e.beginPath(),e.arc(t+2,n+3,i*1.05,0,Math.PI*2),e.fill();for(let a=0;a<r;a++){const l=Math.random()*Math.PI*2,c=Math.random()*i*.85,h=t+Math.cos(l)*c,f=n+Math.sin(l)*c*.9,u=3+Math.random()*(i*.25),d=s[Math.floor(Math.random()*s.length)];e.fillStyle=d,e.globalAlpha=.6+Math.random()*.4,e.beginPath(),e.arc(h,f,u,0,Math.PI*2),e.fill()}for(let a=0;a<r*.3;a++){const l=-Math.PI*.8+Math.random()*Math.PI*.6,c=Math.random()*i*.7,h=t+Math.cos(l)*c,f=n+Math.sin(l)*c,u=2+Math.random()*(i*.15);e.fillStyle="rgba(120, 200, 80, 0.3)",e.beginPath(),e.arc(h,f,u,0,Math.PI*2),e.fill()}e.globalAlpha=1}function VS(e=256,t=512){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.clearRect(0,0,e,t);const s=e/2,r=t*.42,o=t*.98;Gm(i,s,r,o,e*.06,e*.09,"#5a3a1a","#3a2510"),Hm(i,s,r,r+(o-r)*.4,e*.3,"#4a2a12");const a=["rgb(35, 85, 25)","rgb(45, 105, 30)","rgb(55, 120, 35)","rgb(40, 95, 28)","rgb(60, 130, 40)","rgb(30, 75, 20)"];return yn(i,s-e*.08,t*.32,e*.28,a,80),yn(i,s+e*.1,t*.28,e*.25,a,70),yn(i,s,t*.2,e*.22,a,60),yn(i,s-e*.05,t*.12,e*.16,a,40),yn(i,s+e*.18,t*.35,e*.12,a,25),yn(i,s-e*.2,t*.25,e*.1,a,20),n}function GS(e=256,t=512){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.clearRect(0,0,e,t);const s=e/2;Gm(i,s,t*.12,t*.98,e*.03,e*.05,"#3a2008","#2a1505");const r=8,o=["rgb(15, 55, 15)","rgb(20, 65, 20)","rgb(25, 75, 25)","rgb(18, 60, 18)","rgb(30, 80, 28)"];for(let a=0;a<r;a++){const l=a/r,c=t*.08+l*t*.6,h=e*.06+(1-l)*e*.2,f=t*.08,u=20+Math.floor((1-l)*15);for(let d=0;d<u;d++){const g=s+(Math.random()-.5)*h*2,x=c+Math.random()*f,m=3+Math.random()*6,p=4+Math.random()*8,S=o[Math.floor(Math.random()*o.length)];i.fillStyle=S,i.globalAlpha=.7+Math.random()*.3,i.beginPath(),i.moveTo(g,x-p),i.lineTo(g-m,x+p*.3),i.lineTo(g+m,x+p*.3),i.closePath(),i.fill()}i.fillStyle=o[a%o.length],i.globalAlpha=.5,i.beginPath(),i.moveTo(s,c-f*.5),i.quadraticCurveTo(s-h*.8,c,s-h,c+f*.6),i.lineTo(s+h,c+f*.6),i.quadraticCurveTo(s+h*.8,c,s,c-f*.5),i.fill()}i.globalAlpha=1;for(let a=0;a<8;a++){const l=s+(Math.random()-.5)*e*.15,c=t*.05+Math.random()*t*.15;i.fillStyle="rgba(220, 230, 240, 0.15)",i.beginPath(),i.arc(l,c,3+Math.random()*5,0,Math.PI*2),i.fill()}return n}function HS(e=256,t=512){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.clearRect(0,0,e,t);const s=e/2,r=t*.3,o=t*.98,a=e*.04,l=e*.06;i.beginPath(),i.moveTo(s-a/2,r),i.lineTo(s-l/2,o),i.lineTo(s+l/2,o),i.lineTo(s+a/2,r),i.closePath(),i.fillStyle="#e8e0d0",i.fill();const c=o-r;for(let f=0;f<20;f++){const u=r+Math.random()*c,d=(u-r)/c,g=a+(l-a)*d;i.fillStyle=`rgba(50, 40, 35, ${.2+Math.random()*.4})`;const x=1+Math.random()*2;i.fillRect(s-g/2,u,g,x)}for(let f=0;f<6;f++){const u=r+Math.random()*c,d=(u-r)/c,g=a+(l-a)*d;i.strokeStyle="rgba(180, 170, 155, 0.5)",i.lineWidth=.5,i.beginPath();const x=(Math.random()>.5?1:-1)*(2+Math.random()*3);i.moveTo(s-g/2,u),i.quadraticCurveTo(s-g/2-x,u+5,s-g/2,u+10),i.stroke()}Hm(i,s,r,r+c*.3,e*.2,"#b0a090");const h=["rgb(80, 160, 50)","rgb(90, 175, 60)","rgb(100, 185, 70)","rgb(110, 190, 75)","rgb(70, 145, 45)","rgb(120, 200, 80)"];return yn(i,s-e*.06,t*.24,e*.18,h,50),yn(i,s+e*.08,t*.2,e*.16,h,45),yn(i,s,t*.14,e*.14,h,35),yn(i,s+e*.15,t*.28,e*.1,h,20),yn(i,s-e*.14,t*.17,e*.08,h,15),n}function WS(e=256,t=256){const n=document.createElement("canvas");n.width=e,n.height=t;const i=n.getContext("2d");i.clearRect(0,0,e,t);const s=e/2,r=t*.55,o=["rgb(30, 70, 18)","rgb(40, 85, 25)","rgb(50, 100, 30)","rgb(35, 78, 22)","rgb(55, 110, 35)","rgb(25, 62, 15)"];yn(i,s,r,e*.38,o,100),yn(i,s-e*.1,r-t*.05,e*.25,o,50),yn(i,s+e*.12,r+t*.03,e*.2,o,40);for(let a=0;a<8;a++){const l=Math.random()*Math.PI*2,c=Math.random()*e*.25,h=s+Math.cos(l)*c,f=r+Math.sin(l)*c*.7;i.fillStyle=Math.random()>.5?`rgba(200, 60, 40, ${.4+Math.random()*.3})`:`rgba(220, 200, 60, ${.3+Math.random()*.3})`,i.beginPath(),i.arc(h,f,1.5+Math.random()*2,0,Math.PI*2),i.fill()}return n}function XS(e=14,t=8){const n=[];for(let i=0;i<3;i++){const s=i*Math.PI/3,r=new ts(t,e),o=new ie;o.makeRotationY(s),o.setPosition(0,e/2,0),r.applyMatrix4(o),n.push(r)}return YS(n)}function YS(e){let t=0,n=0;for(const c of e)t+=c.attributes.position.count,n+=c.index?c.index.count:0;const i=new Float32Array(t*3),s=new Float32Array(t*3),r=new Float32Array(t*2),o=[];let a=0;for(const c of e){const h=c.attributes.position,f=c.attributes.normal,u=c.attributes.uv;for(let d=0;d<h.count;d++)i[(a+d)*3]=h.getX(d),i[(a+d)*3+1]=h.getY(d),i[(a+d)*3+2]=h.getZ(d),s[(a+d)*3]=f.getX(d),s[(a+d)*3+1]=f.getY(d),s[(a+d)*3+2]=f.getZ(d),r[(a+d)*2]=u.getX(d),r[(a+d)*2+1]=u.getY(d);if(c.index)for(let d=0;d<c.index.count;d++)o.push(c.index.array[d]+a);a+=h.count}const l=new zn;return l.setAttribute("position",new _n(i,3)),l.setAttribute("normal",new _n(s,3)),l.setAttribute("uv",new _n(r,2)),o.length>0&&l.setIndex(o),l}const Wm=[{name:"oak",genCanvas:VS,geoArgs:[1,.8],heightRange:[0,60],heightScale:[10,18],widthFactor:.8},{name:"pine",genCanvas:GS,geoArgs:[1,.5],heightRange:[15,100],heightScale:[12,22],widthFactor:.5},{name:"birch",genCanvas:HS,geoArgs:[1,.65],heightRange:[10,55],heightScale:[10,16],widthFactor:.65},{name:"bush",genCanvas:()=>WS(256,256),geoArgs:[1,1.5],heightRange:[0,40],heightScale:[3,6],widthFactor:1.5}];function qS(e){return Wm.filter(t=>e>=t.heightRange[0]&&e<=t.heightRange[1])}function jS(e,t=[]){const n=Wm.map(s=>{const r=s.genCanvas(),o=new ks(r);o.colorSpace=Ve;const a=XS(s.geoArgs[0],s.geoArgs[1]),l=new No({map:o,transparent:!1,alphaTest:.4,side:ri,depthWrite:!0});return{type:s,geo:a,mat:l,transforms:[]}});for(let s=0;s<nS;s++){const r=Bt(-Lt*.9,Lt*.9),o=Bt(-Lt*.9,Lt*.9);if(En(r,o,e)<Ie+3)continue;const l=Math.floor(Bt(iS,sS)),c=20+Math.random()*40;for(let h=0;h<l;h++){const f=Math.random()*Math.PI*2,u=Math.random()*c,d=r+Math.cos(f)*u,g=o+Math.sin(f)*u;if(Math.abs(d)>Lt*.95||Math.abs(g)>Lt*.95)continue;const x=En(d,g,e);if(x<Ie+3||Vm(d*.01,g*.01,3)<-.2)continue;let p=!1;for(const w of t){const v=d-w.x,E=g-w.z;if(v*v+E*E<(w.r+5)*(w.r+5)){p=!0;break}}if(p)continue;const S=qS(x);if(S.length===0)continue;const b=S[Math.floor(Math.random()*S.length)],y=n.find(w=>w.type.name===b.name),C=Bt(b.heightScale[0],b.heightScale[1]),A=C*b.widthFactor+Math.random()*2;y.transforms.push({x:d,y:x,z:g,height:C,width:A})}}const i=new Zn;i.name="forest";for(const s of n){if(s.transforms.length===0)continue;const r=new Lh(s.geo,s.mat,s.transforms.length);r.name=`trees-${s.type.name}`;const o=new He;for(let a=0;a<s.transforms.length;a++){const l=s.transforms[a];o.position.set(l.x,l.y,l.z),o.scale.set(l.width,l.height,l.width),o.rotation.y=Math.random()*Math.PI,o.updateMatrix(),r.setMatrixAt(a,o.matrix)}r.instanceMatrix.needsUpdate=!0,r.frustumCulled=!1,i.add(r)}return i}const KS=400,$S=6,Rc=25,Kd=70,$d=.25,ZS={house:{w:[6,10],h:[5,8],d:[7,12],roofH:[3,5]},barn:{w:[10,14],h:[6,8],d:[14,18],roofH:[4,5]},tower:{w:[4,5],h:[12,18],d:[4,5],roofH:[4,5]},hotel:{w:[15,25],h:[12,22],d:[12,20],roofH:[2,2]},highrise:{w:[10,18],h:[35,70],d:[10,18],roofH:[1,1]}};function Zd(e,t,n){const s=En(e,t,n),r=En(e+2,t,n),o=En(e,t+2,n);return Math.sqrt(((r-s)/2)**2+((o-s)/2)**2)}function JS(){const e=new Mu;function t(n){const i=e.load(n);return i.wrapS=ci,i.wrapT=ci,i.colorSpace=Ve,i}return{brickTex:t("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_006/brick_wall_006_diff_1k.jpg"),concreteTex:t("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/concrete_wall_008/concrete_wall_008_diff_1k.jpg"),roofTex:t("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/roof_tiles/roof_tiles_diff_1k.jpg")}}function QS(e){const{brickTex:t,concreteTex:n,roofTex:i}=JS(),s=new No({map:t}),r=new No({map:n}),o=new No({map:i}),a=new Zn;a.name="buildings";const l=[];for(let m=0;m<KS;m++){const p=Bt(-Lt*.75,Lt*.75),S=Bt(-Lt*.75,Lt*.75),b=En(p,S,e);if(b<Ie+3||b>Kd||Zd(p,S,e)>$d)continue;const y=Vm(p*.01,S*.01,3);if(y>.5)continue;const C=y<-.1,A=C?30+Math.random()*20:15+Math.random()*15,w=Math.floor(Bt(C?Rc*.7:$S,Rc));for(let v=0;v<w;v++){const E=p+Bt(-A,A),W=S+Bt(-A,A),R=En(E,W,e);if(R<Ie+3||R>Kd||Zd(E,W,e)>$d)continue;const U=Math.random();let O;C?U<.25?O="house":U<.35?O="barn":U<.5?O="tower":U<.75?O="hotel":O="highrise":U<.55?O="house":U<.75?O="barn":U<.85?O="tower":U<.95?O="hotel":O="highrise";const G=12;let B=!1;for(const ft of l){const ht=E-ft.x,Ft=W-ft.z;if(ht*ht+Ft*Ft<G*G){B=!0;break}}if(B)continue;const N=ZS[O],k=Bt(N.w[0],N.w[1]),Z=Bt(N.h[0],N.h[1]),K=Bt(N.d[0],N.d[1]),ct=Bt(N.roofH[0],N.roofH[1]);l.push({x:E,y:R+.2,z:W,rot:Math.random()*Math.PI*2,bw:k,bh:Z,bd:K,rh:ct,type:O})}}const c=new Set(["hotel","highrise"]),h=l.filter(m=>!c.has(m.type)),f=l.filter(m=>c.has(m.type)),u=new bs(1,1,1),d=new _u(1,1,4);d.rotateY(Math.PI/4);function g(m,p,S){if(m.length===0)return;const b=new Lh(u,p,m.length);b.name=`${S}-walls`;const y=new Lh(d,o,m.length);y.name=`${S}-roofs`;const C=new He;for(let A=0;A<m.length;A++){const w=m[A];C.position.set(w.x,w.y+w.bh/2,w.z),C.rotation.set(0,w.rot,0),C.scale.set(w.bw,w.bh,w.bd),C.updateMatrix(),b.setMatrixAt(A,C.matrix),C.position.set(w.x,w.y+w.bh+w.rh/2,w.z),C.scale.set(w.bw*.75,w.rh,w.bd*.75),C.updateMatrix(),y.setMatrixAt(A,C.matrix)}b.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,b.frustumCulled=!1,y.frustumCulled=!1,a.add(b),a.add(y)}g(h,s,"traditional"),g(f,r,"modern");const x=l.map(m=>({x:m.x,z:m.z,r:Math.max(m.bw,m.bd)*.7}));return{group:a,positions:x}}function ai(e,t,n,i){const s=new bs(e,t,n);return new tn(s,i)}function fi(e,t={}){return new No({color:e,...t})}function Pc(e,t,n,i,s,r,o){const l=o*4,c=fi(15788760),h=ai(s,l,r,c);h.position.set(t,n+l/2,i),e.add(h);const f=fi(13404245),u=ai(s+1,.5,r+1,f);u.position.set(t,n+l+.25,i),e.add(u);const d=fi(4487082);for(let m=0;m<o;m++){const p=n+m*4+2.4,S=ai(s*.9,4*.4,.2,d);S.position.set(t,p,i-r/2-.1),e.add(S);const b=S.clone();b.position.set(t,p,i+r/2+.1),e.add(b)}const g=fi(1136042,{emissive:1136042,emissiveIntensity:.3}),x=ai(s*.6,2,.3,g);x.position.set(t,n+l+2,i-r/2-.5),e.add(x)}function Jd(e,t,n,i,s,r){const o=fi(2263244,{transparent:!0,opacity:.7}),a=ai(s,1.5,r,o);a.position.set(t,n-.5,i),e.add(a);const l=fi(15658734),c=.5,h=[ai(s+c*2,.3,c,l),ai(s+c*2,.3,c,l),ai(c,.3,r,l),ai(c,.3,r,l)];h[0].position.set(t,n+.15,i-r/2-c/2),h[1].position.set(t,n+.15,i+r/2+c/2),h[2].position.set(t-s/2-c/2,n+.15,i),h[3].position.set(t+s/2+c/2,n+.15,i),h.forEach(f=>e.add(f))}function Lc(e,t,n,i,s,r){const o=fi(14540253),a=ai(3,s,3,o);a.position.set(t,n+s/2,i),e.add(a);const l=fi(r),c=new ea(.8,.8,s*1.3,8);c.rotateZ(.4);const h=new tn(c,l);h.position.set(t+3,n+s*.5,i),e.add(h)}function ty(e,t,n,i,s=8){const r=fi(9136404),o=new ea(.2,.35,s,6),a=new tn(o,r);a.position.set(t,n+s/2,i),e.add(a);const l=fi(2263842),c=new tn(new vu(2.5,6,4),l);c.position.set(t,n+s+1,i),c.scale.set(1,.6,1),e.add(c)}function ey(e){const t=new Zn,n=e;Pc(t,0,n,-15,80,25,8),Pc(t,55,n,-15,40,18,5),Pc(t,-50,n,-10,35,15,4),Jd(t,-5,n,20,30,15),Jd(t,30,n,25,12,8),Lc(t,15,n,40,12,2263295),Lc(t,-20,n,38,9,16729156),Lc(t,-35,n,35,6,4513160);for(let s=0;s<15;s++){const r=Bt(-40,50),o=Bt(10,50);ty(t,r,n,o,6+Math.random()*5)}const i=fi(15658700);for(let s=0;s<20;s++){const r=ai(.8,.3,2,i);r.position.set(Bt(-30,40),n+.15,Bt(35,48)),r.rotation.y=Math.random()*.3,t.add(r)}return t}function ny(e){const t=new Zn;t.name="hotel-resorts";const n=15,i=[];for(let s=0;s<500&&i.length<n;s++){const r=Math.random()*Math.PI*2,o=Lt*(.15+Math.random()*.45),a=Math.cos(r)*o,l=Math.sin(r)*o,c=En(a,l,e);if(c<Ie+2||c>Ie+40)continue;const h=En(a+5,l,e),f=En(a,l+5,e);if(Math.sqrt(((h-c)/5)**2+((f-c)/5)**2)>.15)continue;let d=!1;for(const x of i)if(Math.sqrt((a-x.x)**2+(l-x.z)**2)<100){d=!0;break}if(d)continue;const g=ey(c);g.position.set(a,0,l),g.rotation.y=r+Math.PI,t.add(g),i.push({x:a,z:l})}return console.log(`Hotel resorts placed: ${i.length}`),t}function yl(e,t){const n=document.createElement("canvas");return n.width=e,n.height=t,{canvas:n,ctx:n.getContext("2d")}}function iy(e){const{canvas:t,ctx:n}=yl(128,64),i=n.createLinearGradient(20,10,20,54);i.addColorStop(0,`hsl(${e}, 80%, 65%)`),i.addColorStop(.5,`hsl(${e}, 90%, 50%)`),i.addColorStop(1,`hsl(${e+20}, 70%, 40%)`),n.fillStyle=i,n.beginPath(),n.ellipse(55,32,35,18,0,0,Math.PI*2),n.fill();for(let s=0;s<5;s++){const r=30+s*12;n.strokeStyle=`hsla(${e+40}, 100%, 80%, 0.4)`,n.lineWidth=2,n.beginPath(),n.moveTo(r,18),n.lineTo(r+3,46),n.stroke()}n.fillStyle=`hsl(${e+10}, 85%, 55%)`,n.beginPath(),n.moveTo(90,32),n.lineTo(120,12),n.lineTo(120,52),n.closePath(),n.fill(),n.fillStyle=`hsla(${e-10}, 70%, 60%, 0.7)`,n.beginPath(),n.ellipse(50,14,15,8,-.3,0,Math.PI*2),n.fill(),n.fillStyle="#fff",n.beginPath(),n.arc(30,28,5,0,Math.PI*2),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(31,28,2.5,0,Math.PI*2),n.fill();for(let s=0;s<8;s++)n.fillStyle=`hsla(${e+60}, 100%, 90%, ${.3+Math.random()*.4})`,n.beginPath(),n.arc(35+Math.random()*40,20+Math.random()*24,1+Math.random()*2,0,Math.PI*2),n.fill();return t}function sy(){const{canvas:e,ctx:t}=yl(192,64),n=t.createLinearGradient(0,10,0,54);n.addColorStop(0,"#556677"),n.addColorStop(.6,"#445566"),n.addColorStop(1,"#e8e8e8"),t.fillStyle=n,t.beginPath(),t.moveTo(10,32),t.quadraticCurveTo(50,10,120,20),t.lineTo(165,30),t.lineTo(185,15),t.lineTo(180,35),t.lineTo(185,55),t.lineTo(165,38),t.lineTo(120,44),t.quadraticCurveTo(50,54,10,32),t.fill(),t.fillStyle="#445566",t.beginPath(),t.moveTo(80,20),t.lineTo(95,2),t.lineTo(110,20),t.closePath(),t.fill(),t.fillStyle="#111",t.beginPath(),t.arc(28,30,3,0,Math.PI*2),t.fill(),t.strokeStyle="#334455",t.lineWidth=1;for(let i=0;i<3;i++)t.beginPath(),t.moveTo(42+i*5,26),t.lineTo(42+i*5,38),t.stroke();return e}function ry(e){const{canvas:t,ctx:n}=yl(256,96),i=e==="humpback",s=n.createLinearGradient(0,10,0,86);if(s.addColorStop(0,i?"#3a4a5a":"#2a3a4a"),s.addColorStop(.7,i?"#4a5a6a":"#3a4a5a"),s.addColorStop(1,"#8a9aaa"),n.fillStyle=s,n.beginPath(),n.moveTo(15,48),n.quadraticCurveTo(60,12,160,25),n.quadraticCurveTo(200,35,220,40),n.lineTo(250,25),n.lineTo(245,48),n.lineTo(250,70),n.lineTo(220,55),n.quadraticCurveTo(200,60,160,70),n.quadraticCurveTo(60,82,15,48),n.fill(),n.fillStyle=i?"#8a9aaa":"#7a8a9a",n.beginPath(),n.ellipse(100,65,70,15,0,0,Math.PI),n.fill(),n.fillStyle="#111",n.beginPath(),n.arc(35,44,3,0,Math.PI*2),n.fill(),i)for(let r=0;r<6;r++)n.fillStyle="#4a5a6a",n.beginPath(),n.arc(20+r*8,35+Math.random()*8,2+Math.random()*2,0,Math.PI*2),n.fill();return n.fillStyle=i?"#3a4a5a":"#2a3a4a",n.beginPath(),n.ellipse(80,68,i?35:20,8,.2,0,Math.PI*2),n.fill(),t}function oy(e){const{canvas:t,ctx:n}=yl(64,96),i={pink:["#ff69b4","#ff1493","#ff85c8"],green:["#32cd32","#228b22","#7cfc00"],orange:["#ff8c00","#ff6347","#ffa500"],purple:["#9370db","#8a2be2","#ba55d3"],red:["#dc143c","#b22222","#ff4444"]},s=i[e]||i.pink;if(e==="pink"||e==="red"){n.strokeStyle=s[1],n.lineWidth=4,n.lineCap="round",n.beginPath(),n.moveTo(32,90),n.lineTo(32,40),n.stroke();const o=[[32,40,17,20],[32,40,50,15],[32,55,12,38],[32,55,48,42],[32,65,20,55],[32,65,46,50]];for(const[a,l,c,h]of o)n.strokeStyle=s[Math.floor(Math.random()*s.length)],n.lineWidth=2+Math.random()*2,n.beginPath(),n.moveTo(a,l),n.lineTo(c,h),n.stroke(),n.fillStyle=s[0],n.beginPath(),n.arc(c,h,3+Math.random()*3,0,Math.PI*2),n.fill()}else if(e==="green"){n.strokeStyle=s[0],n.lineWidth=3,n.lineCap="round";for(let r=0;r<3;r++){const o=15+r*17;n.strokeStyle=s[r%s.length],n.lineWidth=2+Math.random()*2,n.beginPath(),n.moveTo(o,90);for(let a=85;a>10;a-=10)n.lineTo(o+Math.sin(a*.1+r)*8,a);n.stroke();for(let a=70;a>15;a-=15)n.fillStyle=s[1],n.beginPath(),n.ellipse(o+Math.sin(a*.1+r)*6,a,5,3,Math.sin(a)*.5,0,Math.PI*2),n.fill()}}else{n.fillStyle=s[1],n.fillRect(27,50,10,40);const o=n.createRadialGradient(32,40,0,32,40,25);o.addColorStop(0,s[0]),o.addColorStop(1,s[2]),n.fillStyle=o,n.beginPath(),n.ellipse(32,40,25,18,0,0,Math.PI*2),n.fill();for(let a=0;a<6;a++)n.fillStyle="rgba(255,255,255,0.3)",n.beginPath(),n.arc(32+(Math.random()-.5)*30,35+Math.random()*15,2+Math.random()*3,0,Math.PI*2),n.fill()}return t}class ay{constructor(t,n){this.scene=t,this._arcs=n,this.group=new Zn,this.group.name="underwater",t.add(this.group),this._isUnderwater=!1,this._overlay=null,this._originalFogColor=null,this._originalFogNear=0,this._originalFogFar=0,this._createSeabedArcs(),this._createOverlay(),this._createFish(),this._createWhalesAndSharks(),this._createCoral()}_createSeabedArcs(){this._seabedArcs=[];for(let n=0;n<80;n++){const i=Math.random()*Math.PI*2,s=Lt*(.5+Math.random()*.4);this._seabedArcs.push({cx:Math.cos(i)*s,cz:Math.sin(i)*s,radius:40+Math.random()*150,depth:10+Math.random()*30})}}_getSeabedHeight(t,n){let i=En(t,n,this._arcs);if(i<Ie)for(const s of this._seabedArcs){const r=t-s.cx,o=n-s.cz,a=r*r+o*o,l=s.radius*s.radius,c=1-a/l;c>0&&(i-=s.depth*c)}return i}_createOverlay(){this._overlay=document.createElement("div"),this._overlay.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(180deg, rgba(5,20,50,0.5) 0%, rgba(10,40,80,0.35) 50%, rgba(5,30,60,0.5) 100%);
      pointer-events: none; z-index: 50;
      transition: opacity 0.5s;
      opacity: 0;
    `,document.body.appendChild(this._overlay)}_validOceanPos(t=.85,n=5){for(let i=0;i<80;i++){const s=Bt(-Lt*t,Lt*t),r=Bt(-Lt*t,Lt*t),o=this._getSeabedHeight(s,r),a=Ie-o;if(a<n)continue;if(Math.sqrt(s*s+r*r)>Lt*.4||a>8)return{x:s,z:r,seabed:o,depth:a}}return null}_validWaterPos(t=.85){for(let n=0;n<50;n++){const i=Bt(-Lt*t,Lt*t),s=Bt(-Lt*t,Lt*t),r=this._getSeabedHeight(i,s);if(r<Ie-2)return{x:i,z:s,seabed:r}}return null}_createFish(){const n=[0,30,60,180,210,300].map(i=>{const s=new ks(iy(i));return s.colorSpace=Ve,s});new ts(1,.5),this._fishData=[],this._fishMeshes=[];for(let i=0;i<n.length;i++){const s=new Dr({map:n[i],transparent:!0,fog:!1}),r=[],o=800;for(let a=0;a<o*4&&r.length<o;a++){const l=this._validOceanPos(.85,15);if(!l)continue;const c=Math.pow(Math.min(l.depth/30,1),2);if(Math.random()>c)continue;const h=Bt(Math.max(l.seabed+1,Ie-l.depth),Ie-1);r.push({...l,y:h})}for(const a of r){const l=new Po(s),c=1+Math.random()*2.5;l.scale.set(c*2,c,1),l.position.set(a.x,a.y,a.z),this.group.add(l),this._fishData.push({obj:l,speed:2+Math.random()*5,dir:Math.random()*Math.PI*2,wobble:Math.random()*6})}}}_createWhalesAndSharks(){const t=new ks(sy());t.colorSpace=Ve;for(let n=0;n<8;n++){const i=this._validOceanPos(.7,20);if(!i)continue;const s=new Dr({map:t,transparent:!0,fog:!1}),r=new Po(s);r.scale.set(12,4,1),r.position.set(i.x,Bt(Ie-10,Ie-3),i.z),this.group.add(r),this._fishData.push({obj:r,speed:3+Math.random()*3,dir:Math.random()*Math.PI*2,wobble:Math.random()*6})}for(const n of["humpback","sperm"]){const i=new ks(ry(n));i.colorSpace=Ve;const s=n==="humpback"?3:2;for(let r=0;r<s;r++){const o=this._validOceanPos(.6,30);if(!o)continue;const a=new Dr({map:i,transparent:!0,fog:!1}),l=new Po(a),c=n==="humpback"?25:20;l.scale.set(c,c*.375,1),l.position.set(o.x,Bt(Ie-12,Ie-5),o.z),this.group.add(l),this._fishData.push({obj:l,speed:1+Math.random()*1.5,dir:Math.random()*Math.PI*2,wobble:Math.random()*6})}}}_createCoral(){const n=["pink","green","orange","purple","red"].map(i=>{const s=new ks(oy(i));return s.colorSpace=Ve,s});for(let i=0;i<4e3;i++){const s=this._validWaterPos(.75);if(!s)continue;const r=Ie-s.seabed;if(r<3)continue;const o=Math.min(r/12,1);if(Math.random()>o)continue;const a=Math.floor(Math.random()*n.length),l=new Dr({map:n[a],transparent:!0,fog:!1}),c=new Po(l),h=2+Math.random()*5;c.scale.set(h*.7,h,1),c.position.set(s.x,s.seabed+h*.4,s.z),this.group.add(c)}}update(t,n){const i=this._isUnderwater;if(this._isUnderwater=n<Ie,this._isUnderwater!==i&&(this._overlay.style.opacity=this._isUnderwater?"1":"0",this.scene.fog&&(this._isUnderwater?(this._originalFogColor=this.scene.fog.color.clone(),this._originalFogNear=this.scene.fog.near,this._originalFogFar=this.scene.fog.far,this.scene.fog.color.set(332848),this.scene.fog.near=5,this.scene.fog.far=80):(this.scene.fog.color.copy(this._originalFogColor),this.scene.fog.near=this._originalFogNear,this.scene.fog.far=this._originalFogFar))),this._isUnderwater){const s=Lt*.85;for(const r of this._fishData){r.wobble+=t*2;const o=r.obj;o.position.x+=Math.cos(r.dir)*r.speed*t,o.position.z+=Math.sin(r.dir)*r.speed*t,o.position.y+=Math.sin(r.wobble)*.3*t,Math.random()<.003&&(r.dir+=(Math.random()-.5)*.5),o.position.x>s&&(o.position.x=-s),o.position.x<-s&&(o.position.x=s),o.position.z>s&&(o.position.z=-s),o.position.z<-s&&(o.position.z=s)}}}}const ly=5,cy=4;class Au{constructor(t,n=0){this.bounds=t,this.depth=n,this.children=null,this.items=[]}insert(t){if(this.bounds.intersectsBox(t.bbox)){if(this.children){for(const n of this.children)n.insert(t);return}this.items.push(t),this.items.length>cy&&this.depth<ly&&this._subdivide()}}queryFrustum(t,n){if(t.intersectsBox(this.bounds))if(this.children)for(const i of this.children)i.queryFrustum(t,n);else for(const i of this.items)n.includes(i.data)||n.push(i.data)}_subdivide(){const t=this.bounds.min,n=this.bounds.max,i=new L().addVectors(t,n).multiplyScalar(.5);this.children=[];for(let s=0;s<2;s++)for(let r=0;r<2;r++)for(let o=0;o<2;o++){const a=new L(s===0?t.x:i.x,r===0?t.y:i.y,o===0?t.z:i.z),l=new L(s===0?i.x:n.x,r===0?i.y:n.y,o===0?i.z:n.z);this.children.push(new Au(new rs(a,l),this.depth+1))}for(const s of this.items)for(const r of this.children)r.insert(s);this.items=[]}}class hy{constructor(){const t=new rs(new L(-Lt,-200,-Lt),new L(Lt,2e3,Lt));this.root=new Au(t)}insertMesh(t){t.geometry.boundingBox||t.geometry.computeBoundingBox();const n=t.geometry.boundingBox.clone();n.applyMatrix4(t.matrixWorld),n.expandByScalar(50),this.root.insert({bbox:n,data:t})}queryFrustum(t){const n=[];return this.root.queryFrustum(t,n),n}}class uy{constructor(t,n){this.octree=t,this.allChunks=n,this._frustum=new vl,this._projScreenMatrix=new ie}update(t){this._projScreenMatrix.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(this._projScreenMatrix);const n=this.octree.queryFrustum(this._frustum),i=new Set(n);for(const s of this.allChunks)s.visible=i.has(s)}}const fy=`
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
`,dy=`
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
`;function py(e,t){return new Nn({vertexShader:fy,fragmentShader:dy,uniforms:{sandTex:{value:e.sandTex},grassTex:{value:e.grassTex},rockTex:{value:e.rockTex},snowTex:{value:e.snowTex},forestTex:{value:e.forestTex},gravelTex:{value:e.gravelTex},waterLevel:{value:t.waterLevel},sandEnd:{value:t.sandEnd},grassEnd:{value:t.grassEnd},rockEnd:{value:t.rockEnd},sunDirection:{value:t.sunDirection},ambientIntensity:{value:.6},fogColor:{value:t.fogColor},fogNear:{value:t.fogNear},fogFar:{value:t.fogFar}},side:ri})}function wr(e){const t=new Mu().load(e);return t.wrapS=ci,t.wrapT=ci,t.colorSpace=Ve,t}function my(e){let t=new L(.4,.6,.2).normalize();e.traverse(y=>{y.isDirectionalLight&&(t=y.position.clone().normalize())});const n=e.fog?e.fog.color:new qt(11587816),i={sandTex:wr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/sandy_gravel/sandy_gravel_diff_1k.jpg"),grassTex:wr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/leafy_grass/leafy_grass_diff_1k.jpg"),rockTex:wr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/rock_boulder_cracked/rock_boulder_cracked_diff_1k.jpg"),snowTex:wr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/snow_field_aerial/snow_field_aerial_col_1k.jpg"),forestTex:wr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/forest_ground_04/forest_ground_04_diff_1k.jpg"),gravelTex:wr("https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/gravel_floor/gravel_floor_diff_1k.jpg")},s=py(i,{waterLevel:Ie,sandEnd:Ie+8,grassEnd:35,rockEnd:95,sunDirection:t,fogColor:n,fogNear:Bm,fogFar:km});console.time("Terrain");const{chunks:r,arcs:o,group:a}=NS(s);e.add(a),console.timeEnd("Terrain");let l=null;e.traverse(y=>{y.isDirectionalLight&&(l=y)});const c=OS(l);e.add(c.mesh);const h=kS();e.add(h.group),console.time("Houses");const{group:f,positions:u}=QS(o);e.add(f);let d=0;f.traverse(y=>{y.isInstancedMesh&&(console.log(`  ${y.name}: ${y.count} instances`),d+=y.count)}),console.log(`Total buildings: ${d}`),console.timeEnd("Houses");const g=ny(o);e.add(g),console.time("Forest");const x=jS(o,u);e.add(x),console.timeEnd("Forest");const m=new ay(e,o);console.time("Octree");const p=new hy;a.updateMatrixWorld(!0);for(const y of r)p.insertMesh(y);const S=new uy(p,r);console.timeEnd("Octree");function b(y,C,A){c.update(y),h.update(y),S.update(C),m.update(y,A)}return{update:b,arcs:o,terrainChunks:r}}class gy{constructor(){this.position=new L(0,150,0),this.velocity=new L(0,0,10),this.forward=new L(0,0,-1),this.up=new L(0,1,0),this.right=new L(1,0,0),this.yaw=Math.PI,this.pitch=0,this.roll=0,this.speed=10,this.altitude=60,this.angleOfAttack=0,this.liftCoefficient=0,this.isStalling=!1,this.flapPhase=0,this.flapCooldown=0,this.flapStrengthScale=1,this.wingSpread=1}updateVectors(){this.forward.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch)).normalize();const t=new L(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize(),n=new L().crossVectors(t,this.forward).normalize();this.up.copy(n).multiplyScalar(Math.cos(this.roll)).addScaledVector(t,-Math.sin(this.roll)),this.up.normalize(),this.right.crossVectors(this.forward,this.up).normalize(),this.speed=this.velocity.length(),this.altitude=this.position.y}}class _y{constructor(t){this.state=t}flap(t){t>0&&this.state.flapCooldown<=0&&(this.state.flapPhase=uS,this.state.flapStrengthScale=t,this.state.flapCooldown=fS)}applyRoll(t,n){const i=t*vS;this.state.roll+=(i-this.state.roll)*_S*n,this.state.yaw+=this.state.roll*mS*n}applyPitch(t,n){const i=t*za;this.state.pitch+=(i-this.state.pitch)*gS*n,this.state.pitch=Ms(this.state.pitch,-za-.1,za+.1)}_computeAoA(){const t=this.state;if(t.velocity.length()<.5)return 0;const i=t.velocity.clone().normalize(),s=Ms(i.dot(t.forward),-1,1),r=Math.acos(s);return(i.dot(t.up)<0?1:-1)*r}_computeCL(t){return(Math.sign(t)||1)*Math.min(Hd*Math.abs(t),aS)}update(t){const n=this.state;n.updateVectors();const i=n.velocity.length(),s=.5*rS*i*i,r=Gd*n.wingSpread;n.angleOfAttack=this._computeAoA();let o=this._computeCL(n.angleOfAttack);n.flapPhase>0&&(o+=dS),n.liftCoefficient=o,n.isStalling=!1;const a=s*r*Math.abs(o)/ka;if(i>1){const g=n.velocity.clone().normalize(),x=n.up.clone();x.addScaledVector(g,-x.dot(g));const m=x.length();m>.01&&(x.divideScalar(m),n.velocity.addScaledVector(x,a*Math.sign(o)*t))}const l=Hd*oS,c=s*r*l/ka;n.velocity.y+=c*t;const h=Math.max(r,Gd*.15),f=lS+cS*o*o,u=s*h*f/ka;if(i>.1){const g=n.velocity.clone().normalize().negate();n.velocity.addScaledVector(g,u*t)}if(n.velocity.y+=Vd*t,n.flapPhase>0){const g=hS*(n.flapStrengthScale||1)/ka,x=n.forward.clone();x.y+=.9,x.normalize(),n.velocity.addScaledVector(x,g*t),n.flapPhase-=t}if(n.flapCooldown>0&&(n.flapCooldown-=t),i>2&&n.wingSpread>.5&&n.flapPhase<=0){const g=n.velocity.clone().normalize(),x=Math.asin(Ms(g.y,-.8,.8));n.pitch+=(x-n.pitch)*.8*t}if(n.wingSpread<.5){const g=1-n.wingSpread/.5;n.pitch-=g*15*t,n.pitch=Ms(n.pitch,-Math.PI*.45,za),n.velocity.y+=Vd*1*g*t;const x=Math.sqrt(n.velocity.x*n.velocity.x+n.velocity.z*n.velocity.z);if(x>5&&n.pitch<-.2){const m=g*3*t,p=x*m;n.velocity.y-=p;const S=Math.max(0,1-m);n.velocity.x*=S,n.velocity.z*=S}n.velocity.addScaledVector(n.forward,8*g*t)}n.altitude<15&&(n.velocity.multiplyScalar(1-1*t),n.velocity.y+=8*t,n.flapPhase>0&&(n.velocity.y+=15*t)),n.velocity.y=Math.max(n.velocity.y,pS);const d=n.velocity.length();if(d>Wd*.7){const g=d/Wd,x=Math.pow(g-.7,2)*30;n.velocity.multiplyScalar(1-x*t)}n.position.addScaledVector(n.velocity,t),n.speed=n.velocity.length(),n.altitude=n.position.y}enforceGround(t){if(t<14){const i=Math.max(t,-80)+1;this.state.position.y<i&&(this.state.position.y=i,this.state.velocity.y<0&&(this.state.velocity.y=0));return}const n=t+1;this.state.position.y<n&&(this.state.position.y=n,this.state.velocity.y<0&&(this.state.velocity.y=0),this.state.pitch*=.9,this.state.speed<Xd&&this.state.velocity.addScaledVector(this.state.forward,Xd))}}class vy{constructor(t,n){this.camera=t,this.state=n,this._pos=new L,this._lookTarget=new L,this._roll=0,this._fov=Fh,this._initialized=!1}update(t){const n=this.state,i=n.position.clone().addScaledVector(n.forward,-15).add(new L(0,SS,0)),s=n.position.clone();this._initialized||(this._pos.copy(i),this._lookTarget.copy(s),this._initialized=!0);const r=1-Math.exp(-3*t);this._pos.lerp(i,r),this._lookTarget.lerp(s,r),this._roll+=(n.roll*.4-this._roll)*r;const o=n.speed/40,a=Fh+Math.max(0,o-1.5)*15;if(this._fov+=(a-this._fov)*r,this.camera.position.copy(this._pos),this.camera.lookAt(this._lookTarget),Math.abs(this._roll)>.001){const l=this.camera.quaternion.clone(),c=new Qi().setFromAxisAngle(new L(0,0,1),this._roll);this.camera.quaternion.copy(l).multiply(c)}this.camera.fov=this._fov,this.camera.updateProjectionMatrix()}}class xy{constructor(){this.video=null,this.stream=null,this.ready=!1}async init(){this.video=document.createElement("video"),this.video.setAttribute("playsinline",""),this.video.setAttribute("autoplay",""),this.video.style.display="none",document.body.appendChild(this.video);try{return this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"},audio:!1}),this.video.srcObject=this.stream,await this.video.play(),this.ready=!0,this.video}catch(t){return console.warn("Webcam access denied or unavailable:",t.message),this.ready=!1,null}}dispose(){this.stream&&this.stream.getTracks().forEach(t=>t.stop()),this.video&&this.video.parentNode&&this.video.parentNode.removeChild(this.video),this.ready=!1}}var Wr=typeof self<"u"?self:{};function Xm(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=Wr,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function Us(){throw Error("Invalid UTF8")}function Qd(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Ha,Dc;const My=typeof TextDecoder<"u";let Sy;const yy=typeof TextEncoder<"u";function Ym(e){if(yy)e=(Sy||(Sy=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){const r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function qm(e){Wr.setTimeout(()=>{throw e},0)}var Oh,Ey=Xm(610401301,!1),tp=Xm(748402147,!0);function ep(){var e=Wr.navigator;return e&&(e=e.userAgent)?e:""}const np=Wr.navigator;function El(e){return El[" "](e),e}Oh=np&&np.userAgentData||null,El[" "]=function(){};const jm={};let Do=null;function by(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return function(r,o){function a(c){for(;l<r.length;){const h=r.charAt(l++),f=Do[h];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}Km();let l=0;for(;;){const c=a(-1),h=a(0),f=a(64),u=a(64);if(u===64&&c===-1)break;o(c<<2|h>>4),f!=64&&(o(h<<4&240|f>>2),u!=64&&o(f<<6&192|u))}}(e,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function Km(){if(!Do){Do={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));jm[n]=i;for(let s=0;s<i.length;s++){const r=i[s];Do[r]===void 0&&(Do[r]=s)}}}}var Ty=typeof Uint8Array<"u",$m=!(!(Ey&&Oh&&Oh.brands.length>0)&&(ep().indexOf("Trident")!=-1||ep().indexOf("MSIE")!=-1))&&typeof btoa=="function";const ip=/[-_.]/g,Ay={"-":"+",_:"/",".":"="};function wy(e){return Ay[e]||""}function Zm(e){if(!$m)return by(e);e=ip.test(e)?e.replace(ip,wy):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function wu(e){return Ty&&e!=null&&e instanceof Uint8Array}var Xr={};function Ks(){return Cy||(Cy=new Ci(null,Xr))}function Cu(e){Jm(Xr);var t=e.g;return(t=t==null||wu(t)?t:typeof t=="string"?Zm(t):null)==null?t:e.g=t}var Ci=class{h(){return new Uint8Array(Cu(this)||0)}constructor(e,t){if(Jm(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let Cy,Ry;function Jm(e){if(e!==Xr)throw Error("illegal external caller")}function Qm(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Bh(e){return Qm(e=Error(e),"warning"),e}function Yr(e,t){if(e!=null){var n=Ry??(Ry={}),i=n[e]||0;i>=t||(n[e]=i+1,Qm(e=Error(),"incident"),qm(e))}}function io(){return typeof BigInt=="function"}var so=typeof Symbol=="function"&&typeof Symbol()=="symbol";function Ii(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var Py=Ii("jas",void 0,!0),sp=Ii(void 0,"0di"),wo=Ii(void 0,"1oa"),Un=Ii(void 0,Symbol()),Ly=Ii(void 0,"0ub"),Dy=Ii(void 0,"0ubs"),kh=Ii(void 0,"0ubsb"),Iy=Ii(void 0,"0actk"),qr=Ii("m_m","Pa",!0),rp=Ii();const t0={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},e0=Object.defineProperties,Et=so?Py:"Ga";var tr;const op=[];function na(e,t){so||Et in e||e0(e,t0),e[Et]|=t}function je(e,t){so||Et in e||e0(e,t0),e[Et]=t}function ia(e){return na(e,34),e}function jo(e){return na(e,8192),e}je(op,7),tr=Object.freeze(op);var jr={};function On(e,t){return t===void 0?e.h!==$s&&!!(2&(0|e.v[Et])):!!(2&t)&&e.h!==$s}const $s={};function Ru(e,t){if(e!=null){if(typeof e=="string")e=e?new Ci(e,Xr):Ks();else if(e.constructor!==Ci)if(wu(e))e=e.length?new Ci(new Uint8Array(e),Xr):Ks();else{if(!t)throw Error();e=void 0}}return e}class ap{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var Uy=Object.freeze({});function n0(e,t,n){const i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const o=s+(r?-1:0);for(t=128&t?1:0;t<o;t++)n(t-i,e[t]);if(r){e=e[s-1];for(const a in e)!isNaN(a)&&n(+a,e[a])}}var i0={};function ro(e){return 128&e?i0:void 0}function bl(e){return e.Na=!0,e}var Fy=bl(e=>typeof e=="number"),lp=bl(e=>typeof e=="string"),Ny=bl(e=>typeof e=="boolean"),Tl=typeof Wr.BigInt=="function"&&typeof Wr.BigInt(0)=="bigint";function Fn(e){var t=e;if(lp(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(Fy(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Tl?BigInt(e):e=Ny(e)?e?"1":"0":lp(e)?e.trim()||"0":String(e)}var zh=bl(e=>Tl?e>=By&&e<=zy:e[0]==="-"?cp(e,Oy):cp(e,ky));const Oy=Number.MIN_SAFE_INTEGER.toString(),By=Tl?BigInt(Number.MIN_SAFE_INTEGER):void 0,ky=Number.MAX_SAFE_INTEGER.toString(),zy=Tl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function cp(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}const Vy=typeof Uint8Array.prototype.slice=="function";let Gy,be=0,Oe=0;function hp(e){const t=e>>>0;be=t,Oe=(e-t)/4294967296>>>0}function Kr(e){if(e<0){hp(-e);const[t,n]=Du(be,Oe);be=t>>>0,Oe=n>>>0}else hp(e)}function Pu(e){const t=Gy||(Gy=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Oe=0,be=t.getUint32(0,!0)}function s0(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Ko(e,t)}function Hy(e,t){return Fn(io()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Ko(e,t))}function r0(e,t){return io()?Fn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):Fn(Lu(e,t))}function Ko(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else io()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+up(n)+up(e));return n}function up(e){return e=String(e),"0000000".slice(e.length)+e}function Lu(e,t){if(2147483648&t)if(io())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Du(e,t);e="-"+Ko(n,i)}else e=Ko(e,t);return e}function Al(e){if(e.length<16)Kr(Number(e));else if(io())e=BigInt(e),be=Number(e&BigInt(4294967295))>>>0,Oe=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Oe=be=0;const n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){const r=Number(e.slice(i,s));Oe*=1e6,be=1e6*be+r,be>=4294967296&&(Oe+=Math.trunc(be/4294967296),Oe>>>=0,be>>>=0)}if(t){const[i,s]=Du(be,Oe);be=i,Oe=s}}}function Du(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function pi(e){return Array.prototype.slice.call(e)}const sa=typeof BigInt=="function"?BigInt.asIntN:void 0,Wy=typeof BigInt=="function"?BigInt.asUintN:void 0,Zs=Number.isSafeInteger,wl=Number.isFinite,$r=Math.trunc,Xy=Fn(0);function Io(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Ai(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function $o(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function o0(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const Yy=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ra(e){switch(typeof e){case"bigint":return!0;case"number":return wl(e);case"string":return Yy.test(e);default:return!1}}function oo(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return wl(e)?0|e:void 0}function a0(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return wl(e)?e>>>0:void 0}function l0(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Al(e),Lu(be,Oe))}function Iu(e){if(e=$r(e),!Zs(e)){Kr(e);var t=be,n=Oe;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=s0(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function c0(e){var t=$r(Number(e));return Zs(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),l0(e))}function h0(e){var t=$r(Number(e));return Zs(t)?Fn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),io()?Fn(sa(64,BigInt(e))):Fn(l0(e)))}function u0(e){return Zs(e)?e=Fn(Iu(e)):(e=$r(e),Zs(e)?e=String(e):(Kr(e),e=Lu(be,Oe)),e=Fn(e)),e}function ll(e){const t=typeof e;return e==null?e:t==="bigint"?Fn(sa(64,e)):ra(e)?t==="string"?h0(e):u0(e):void 0}function f0(e){if(typeof e!="string")throw Error();return e}function oa(e){if(e!=null&&typeof e!="string")throw Error();return e}function rn(e){return e==null||typeof e=="string"?e:void 0}function Uu(e,t,n,i){return e!=null&&e[qr]===jr?e:Array.isArray(e)?((i=(n=0|e[Et])|32&i|2&i)!==n&&je(e,i),new t(e)):(n?2&i?((e=t[sp])||(ia((e=new t).v),e=t[sp]=e),t=e):t=new t:t=void 0,t)}function qy(e,t,n){if(t)t:{if(!ra(t=e))throw Bh("int64");switch(typeof t){case"string":t=h0(t);break t;case"bigint":t=Fn(sa(64,t));break t;default:t=u0(t)}}else t=ll(e);return(e=t)==null?n?Xy:void 0:e}const jy={};let Ky=function(){try{return El(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Ic{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const $y=Ky?(Object.setPrototypeOf(Ic.prototype,Map.prototype),Object.defineProperties(Ic.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ic):class extends Map{constructor(){super()}};function fp(e){return e}function Uc(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var es=class extends $y{constructor(e,t,n=fp,i=fp){super(),this.J=0|e[Et],this.K=t,this.S=n,this.fa=this.K?Zy:i;for(let s=0;s<e.length;s++){const r=e[s],o=n(r[0],!1,!0);let a=r[1];t?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(e){return jo(Array.from(super.entries(),e))}clear(){Uc(this),super.clear()}delete(e){return Uc(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new ap(e,Jy,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new ap(e,es.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach((n,i,s)=>{e.call(t,s.get(i),i,s)}):super.forEach(e,t)}set(e,t){return Uc(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function Zy(e,t,n,i,s,r){return e=Uu(e,i,n,r),s&&(e=Nu(e)),e}function Jy(e){return[e,this.get(e)]}let Qy;function dp(){return Qy||(Qy=new es(ia([]),void 0,void 0,void 0,jy))}function Cl(e){return Un?e[Un]:void 0}function cl(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}es.prototype.toJSON=void 0;var Vh=class{};const tE={Ka:!0};function eE(e,t){t<100||Yr(Dy,1)}function Rl(e,t,n,i){const s=i!==void 0;i=!!i;var r,o=Un;!s&&so&&o&&(r=e[o])&&cl(r,eE),o=[];var a=e.length;let l;r=4294967295;let c=!1;const h=!!(64&t),f=h?128&t?0:-1:void 0;1&t||(l=a&&e[a-1],l!=null&&typeof l=="object"&&l.constructor===Object?r=--a:l=void 0,!h||128&t||s||(c=!0,r=r-f+f)),t=void 0;for(var u=0;u<a;u++){let d=e[u];if(d!=null&&(d=n(d,i))!=null)if(h&&u>=r){const g=u-f;(t??(t={}))[g]=d}else o[u]=d}if(l)for(let d in l){if((a=l[d])==null||(a=n(a,i))==null)continue;let g;u=+d,h&&!Number.isNaN(u)&&(g=u+f)<r?o[g]=a:(t??(t={}))[d]=a}return t&&(c?o.push(t):o[r]=t),s&&Un&&(e=Cl(e))&&e instanceof Vh&&(o[Un]=function(d){const g=new Vh;return cl(d,(x,m,p)=>{g[m]=pi(p)}),g.da=d.da,g}(e)),o}function nE(e){return e[0]=Zo(e[0]),e[1]=Zo(e[1]),e}function Zo(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return zh(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[Et];return e.length===0&&1&t?void 0:Rl(e,t,Zo)}if(e!=null&&e[qr]===jr)return d0(e);if(e instanceof Ci){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if($m){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Km(),n=jm[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let c=0,h=0;for(;c<t.length-2;c+=3){var r=t[c],o=t[c+1],a=t[c+2],l=n[r>>2];r=n[(3&r)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[h++]=l+r+o+a}switch(l=0,a=s,t.length-c){case 2:a=n[(15&(l=t[c+1]))<<2]||s;case 1:t=t[c],i[h]=n[t>>2]+n[(3&t)<<4|l>>4]+a+s}t=i.join("")}e=e.g=t}return e}return e instanceof es?e=e.size!==0?e.V(nE):void 0:void 0}return e}let iE,sE;function d0(e){return Rl(e=e.v,0|e[Et],Zo)}function Gs(e,t){return p0(e,t[0],t[1])}function p0(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[Et],tp&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&function(){if(tp)throw Error("carr");Yr(Iy,5)}(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&je(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var o=r-1;const l=n[o];if(l!=null&&typeof l=="object"&&l.constructor===Object){if((o-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in l)(r=+a)<o&&(n[r+t]=l[a],delete l[a]);s=-16760833&s|(1023&o)<<14;break t}}if(t){if((a=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return je(e,64|s|i),e}function rE(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[Et];return e.length===0&&1&n?void 0:pp(e,n,t)}if(e!=null&&e[qr]===jr)return mp(e);if(e instanceof es){if(2&(t=e.J))return e;if(!e.size)return;if(n=ia(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[qr]===jr?mp(s):Array.isArray(s)?pp(s,0|s[Et],!!(32&t)):void 0,i[1]=s}return n}return e instanceof Ci?e:void 0}function pp(e,t,n){return 2&t||(!n||4096&t||16&t?e=ao(e,t,!1,n&&!(16&t)):(na(e,34),4&t&&Object.freeze(e))),e}function Fu(e,t,n){return e=new e.constructor(t),n&&(e.h=$s),e.m=$s,e}function mp(e){const t=e.v,n=0|t[Et];return On(e,n)?e:Ou(e,t,n)?Fu(e,t):ao(t,n)}function ao(e,t,n,i){return i??(i=!!(34&t)),e=Rl(e,t,rE,i),i=32,n&&(i|=2),je(e,t=16769217&t|i),e}function Nu(e){const t=e.v,n=0|t[Et];return On(e,n)?Ou(e,t,n)?Fu(e,t,!0):new e.constructor(ao(t,n,!1)):e}function lo(e){if(e.h!==$s)return!1;var t=e.v;return na(t=ao(t,0|t[Et]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function co(e){if(!lo(e)&&On(e,0|e.v[Et]))throw Error()}function er(e,t){t===void 0&&(t=0|e[Et]),32&t&&!(4096&t)&&je(e,4096|t)}function Ou(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(je(t,2|n),e.h=$s,!0)}const m0=Fn(0),ps={};function Te(e,t,n,i,s){if((t=ns(e.v,t,n,s))!==null||i&&e.m!==$s)return t}function ns(e,t,n,i){if(t===-1)return null;const s=t+(n?0:-1),r=e.length-1;let o,a;if(!(r<1+(n?0:-1))){if(s>=r)if(o=e[r],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[t],a=!0;else{if(s!==r)return;n=o}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[t]=i:e[s]=i,i}return n}}function fe(e,t,n,i){co(e),We(e=e.v,0|e[Et],t,n,i)}function We(e,t,n,i,s){const r=n+(s?0:-1);var o=e.length-1;if(o>=1+(s?0:-1)&&r>=o){const a=e[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,t}return r<=o?(e[r]=i,t):(i!==void 0&&(n>=(o=(t??(t=0|e[Et]))>>14&1023||536870912)?i!=null&&(e[o+(s?0:-1)]={[n]:i}):e[r]=i),t)}function zs(){return Uy===void 0?2:4}function Vs(e,t,n,i,s){let r=e.v,o=0|r[Et];i=On(e,o)?1:i,s=!!s||i===3,i===2&&lo(e)&&(r=e.v,o=0|r[Et]);let a=(e=Bu(r,t))===tr?7:0|e[Et],l=ku(a,o);var c=!(4&l);if(c){4&l&&(e=pi(e),a=0,l=Ws(l,o),o=We(r,o,t,e));let h=0,f=0;for(;h<e.length;h++){const u=n(e[h]);u!=null&&(e[f++]=u)}f<h&&(e.length=f),n=-513&(4|l),l=n&=-1025,l&=-4097}return l!==a&&(je(e,l),2&l&&Object.freeze(e)),g0(e,l,r,o,t,i,c,s)}function g0(e,t,n,i,s,r,o,a){let l=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?Hs(t)||((t|=!e.length||o&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==l&&je(e,t),Object.freeze(e)):(r===2&&Hs(t)&&(e=pi(e),l=0,t=Ws(t,i),i=We(n,i,s,e)),Hs(t)||(a||(t|=16),t!==l&&je(e,t))),2&t||!(4096&t||16&t)||er(n,i),e}function Bu(e,t,n){return e=ns(e,t,n),Array.isArray(e)?e:tr}function ku(e,t){return 2&t&&(e|=2),1|e}function Hs(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function _0(e){return Ru(e,!0)}function v0(e){e=pi(e);for(let t=0;t<e.length;t++){const n=e[t]=pi(e[t]);Array.isArray(n[1])&&(n[1]=ia(n[1]))}return jo(e)}function gs(e,t,n,i){co(e),We(e=e.v,0|e[Et],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ho(e,t,n){if(2&t)throw Error();const i=ro(t);let s=Bu(e,n,i),r=s===tr?7:0|s[Et],o=ku(r,t);return(2&o||Hs(o)||16&o)&&(o===r||Hs(o)||je(s,o),s=pi(s),r=0,o=Ws(o,t),We(e,t,n,s,i)),o&=-13,o!==r&&je(s,o),s}function Fc(e,t){var n=cg;return Vu(zu(e=e.v),e,void 0,n)===t?t:-1}function zu(e){if(so)return e[wo]??(e[wo]=new Map);if(wo in e)return e[wo];const t=new Map;return Object.defineProperty(e,wo,{value:t}),t}function x0(e,t,n,i,s){const r=zu(e),o=Vu(r,e,t,n,s);return o!==i&&(o&&(t=We(e,t,o,void 0,s)),r.set(n,i)),t}function Vu(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){const a=i[o];ns(t,a,s)!=null&&(r!==0&&(n=We(t,n,r,void 0,s)),r=a)}return e.set(i,r),r}function Gu(e,t,n){let i=0|e[Et];const s=ro(i),r=ns(e,n,s);let o;if(r!=null&&r[qr]===jr){if(!On(r))return lo(r),r.v;o=r.v}else Array.isArray(r)&&(o=r);if(o){const a=0|o[Et];2&a&&(o=ao(o,a))}return o=Gs(o,t),o!==r&&We(e,i,n,o,s),o}function M0(e,t,n,i,s){let r=!1;if((i=ns(e,i,s,o=>{const a=Uu(o,n,!1,t);return r=a!==o&&a!=null,a}))!=null)return r&&!On(i)&&er(e,t),i}function ee(e,t,n,i){let s=e.v,r=0|s[Et];if((t=M0(s,r,t,n,i))==null)return t;if(r=0|s[Et],!On(e,r)){const o=Nu(t);o!==t&&(lo(e)&&(s=e.v,r=0|s[Et]),r=We(s,r,n,t=o,i),er(s,r))}return t}function S0(e,t,n,i,s,r,o,a){var l=On(e,n);r=l?1:r,o=!!o||r===3,l=a&&!l,(r===2||l)&&lo(e)&&(n=0|(t=e.v)[Et]);var c=(e=Bu(t,s))===tr?7:0|e[Et],h=ku(c,n);if(a=!(4&h)){var f=e,u=n;const d=!!(2&h);d&&(u|=2);let g=!d,x=!0,m=0,p=0;for(;m<f.length;m++){const S=Uu(f[m],i,!1,u);if(S instanceof i){if(!d){const b=On(S);g&&(g=!b),x&&(x=b)}f[p++]=S}}p<m&&(f.length=p),h|=4,h=x?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==c&&(je(e,h),2&h&&Object.freeze(e)),l&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(Hs(h)&&(e=pi(e),h=Ws(h,n),n=We(t,n,s,e)),i=e,l=h,c=0;c<i.length;c++)(f=i[c])!==(h=Nu(f))&&(i[c]=h);l|=8,je(e,h=l=i.length?4096|l:-4097&l)}return g0(e,h,t,n,s,r,a,o)}function is(e,t,n){const i=e.v;return S0(e,i,0|i[Et],t,n,zs(),!1,!0)}function y0(e){return e==null&&(e=void 0),e}function Pt(e,t,n,i,s){return fe(e,n,i=y0(i),s),i&&!On(i)&&er(e.v),e}function Oo(e,t,n,i){t:{var s=i=y0(i);co(e);const r=e.v;let o=0|r[Et];if(s==null){const a=zu(r);if(Vu(a,r,o,n)!==t)break t;a.set(n,0)}else o=x0(r,o,n,t);We(r,o,t,s)}i&&!On(i)&&er(e.v)}function Ws(e,t){return-273&(2&t?2|e:-3&e)}function Hu(e,t,n,i){var s=i;co(e),e=S0(e,i=e.v,0|i[Et],n,t,2,!0),s=s??new n,e.push(s),t=n=e===tr?7:0|e[Et],(s=On(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&je(e,n),s||er(i)}function Jn(e,t,n){return oo(Te(e,t,void 0,n))}function Ue(e,t){return Te(e,t,void 0,void 0,Ai)??0}function ss(e,t,n){if(n!=null){if(typeof n!="number"||!wl(n))throw Bh("int32");n|=0}fe(e,t,n)}function Ct(e,t,n){fe(e,t,Io(n))}function Bn(e,t,n){gs(e,t,oa(n),"")}function hl(e,t,n){{co(e);const o=e.v;let a=0|o[Et];if(n==null)We(o,a,t);else{var i=e=n===tr?7:0|n[Et],s=Hs(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=pi(n),i=0,e=Ws(e,a),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<n.length;s++){const l=n[s],c=f0(l);Object.is(l,c)||(r&&(n=pi(n),i=0,e=Ws(e,a),r=!1),n[s]=c)}e!==i&&(r&&(n=pi(n),e=Ws(e,a)),je(n,e)),We(o,a,t,n)}}}function Pl(e,t,n){co(e),Vs(e,t,rn,2,!0).push(f0(n))}var Cr=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Wu(e,t){if(typeof e=="string")return new Cr(Zm(e),t);if(Array.isArray(e))return new Cr(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Cr(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Cr(e,!1);if(e.constructor===Ci)return t=Cu(e)||new Uint8Array(0),new Cr(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Cr(e,!1);throw Error()}function Xu(e,t){let n,i=0,s=0,r=0;const o=e.h;let a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(Xs(e,a),!(128&n))return t(i>>>0,s>>>0);throw Error()}function Yu(e){let t=0,n=e.g;const i=n+10,s=e.h;for(;n<i;){const r=s[n++];if(t|=r,(128&r)==0)return Xs(e,n),!!(127&t)}throw Error()}function ys(e){const t=e.h;let n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return Xs(e,n),s}function Di(e){return ys(e)>>>0}function ul(e){var t=e.h;const n=e.g;var i=t[n],s=t[n+1];const r=t[n+2];return t=t[n+3],Xs(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function oE(e){return ys(e)}function Xs(e,t){if(e.g=t,t>e.l)throw Error()}function E0(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function b0(e,t){if(t==0)return Ks();var n=E0(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):Vy?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Ks():new Ci(n,Xr)}var gp=[];function T0(e,t,n,i){if(fl.length){const s=fl.pop();return s.o(i),s.g.init(e,t,n,i),s}return new aE(e,t,n,i)}function A0(e){e.g.clear(),e.l=-1,e.h=-1,fl.length<100&&fl.push(e)}function w0(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=Di(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function el(e){switch(e.h){case 0:e.h!=0?el(e):Yu(e.g);break;case 1:Xs(e=e.g,e.g+8);break;case 2:if(e.h!=2)el(e);else{var t=Di(e.g);Xs(e=e.g,e.g+t)}break;case 5:Xs(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!w0(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}el(e)}break;default:throw Error()}}function aa(e,t,n){const i=e.g.l;var s=Di(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function qu(e){var t=Di(e.g),n=E0(e=e.g,t);if(e=e.h,My){var i,s=e;(i=Dc)||(i=Dc=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(Ha===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ha=!0}catch{Ha=!1}}throw!Ha&&(Dc=void 0),a}}else{t=(r=n)+t,n=[];let a,l=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?Us():(a=e[r++],o<194||(192&a)!=128?(r--,Us()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?Us():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,Us()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?Us():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,Us()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Us(),n.length>=8192&&(l=Qd(l,n),n.length=0)}r=Qd(l,n)}return r}function C0(e){const t=Di(e.g);return b0(e.g,t)}function Ll(e,t,n){var i=Di(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var aE=class{constructor(e,t,n,i){if(gp.length){const s=gp.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,o,a)}init(s,r,o,{Y:a=!1,ea:l=!1}={}){this.Y=a,this.ea=l,s&&(s=Wu(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},fl=[];function _p(e){return e?/^\d+$/.test(e)?(Al(e),new Gh(be,Oe)):null:lE||(lE=new Gh(0,0))}var Gh=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let lE;function vp(e){return e?/^-?\d+$/.test(e)?(Al(e),new Hh(be,Oe)):null:cE||(cE=new Hh(0,0))}var Hh=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let cE;function Or(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function uo(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Dl(e,t){if(t>=0)uo(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function ju(e){var t=be;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function Zr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Qn(e,t,n){uo(e.g,8*t+n)}function Ku(e,t){return Qn(e,t,2),t=e.g.end(),Zr(e,t),t.push(e.h),t}function $u(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Il(e,t,n){Qn(e,t,2),uo(e.g,n.length),Zr(e,e.g.end()),Zr(e,n)}function dl(e,t,n,i){n!=null&&(t=Ku(e,t),i(n,e),$u(e,t))}function Ui(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Zu=Ui(),R0=Ui(),Ju=Ui(),Qu=Ui(),tf=Ui(),P0=Ui(),hE=Ui(),Ul=Ui(),L0=Ui(),D0=Ui();function Fi(e,t,n){var i=e.v;Un&&Un in i&&(i=i[Un])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var bt=class{constructor(e,t){this.v=p0(e,t,void 0,2048)}toJSON(){return d0(this)}j(){var s;var e=XE,t=this.v,n=e.g,i=Un;if(so&&i&&((s=t[i])==null?void 0:s[n])!=null&&Yr(Ly,3),t=e.g,rp&&Un&&rp===void 0&&(i=(n=this.v)[Un])&&(i=i.da))try{i(n,t,tE)}catch(r){qm(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[Et];return Ou(this,e,t)?Fu(this,e,!0):new this.constructor(ao(e,t,!1))}};bt.prototype[qr]=jr,bt.prototype.toString=function(){return this.v.toString()};var fo=class{constructor(e,t,n){this.g=e,this.h=t,e=Zu,this.l=!!e&&n===e||!1}};function Fl(e,t){return new fo(e,t,Zu)}function I0(e,t,n,i,s){dl(e,n,O0(t,i),s)}const uE=Fl(function(e,t,n,i,s){return e.h===2&&(aa(e,Gu(t,i,n),s),!0)},I0),fE=Fl(function(e,t,n,i,s){return e.h===2&&(aa(e,Gu(t,i,n),s),!0)},I0);var Nl=Symbol(),Ol=Symbol(),Wh=Symbol(),xp=Symbol(),Mp=Symbol();let U0,F0;function nr(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=function(f){switch(typeof f){case"boolean":return iE||(iE=[0,void 0,!0]);case"number":return f>0?void 0:f===0?sE||(sE=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}}(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++o])=="function"&&(s.ma=!0,U0??(U0=r),F0??(F0=i[o+1]),r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var l=0;l<r.length;l++)a[r[l]]=r;r=i[++o]}for(l=1;r!==void 0;){let f;typeof r=="number"&&(l+=r,r=i[++o]);var c=void 0;if(r instanceof fo?f=r:(f=uE,o--),f==null?void 0:f.l){r=i[++o],c=i;var h=o;typeof r=="function"&&(r=r(),c[h]=r),c=r}for(h=l+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);l<h;l++){const u=a[l];c?n(s,l,f,c,u):t(s,l,f,u)}}return i[e]=s}function N0(e){return Array.isArray(e)?e[0]instanceof fo?e:[fE,e]:[e,void 0]}function O0(e,t){return e instanceof bt?e.v:Array.isArray(e)?Gs(e,t):void 0}function ef(e,t,n,i){const s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function nf(e,t,n,i,s){const r=n.g;let o,a;e[t]=(l,c,h)=>r(l,c,h,a||(a=nr(Ol,ef,nf,i).T),o||(o=sf(i)),s)}function sf(e){let t=e[Wh];if(t!=null)return t;const n=nr(Ol,ef,nf,e);return t=n.ma?(i,s)=>U0(i,s,n):(i,s)=>{for(;w0(s)&&s.h!=4;){var r=s.l,o=n[r];if(o==null){var a=n.ba;a&&(a=a[r])&&(a=pE(a))!=null&&(o=n[r]=a)}if(o==null||!o(s,i,r)){if(o=(a=s).m,el(a),a.ha)var l=void 0;else l=a.g.g-o,a.g.g=o,l=b0(a.g,l);o=void 0,a=i,l&&((o=a[Un]??(a[Un]=new Vh))[r]??(o[r]=[])).push(l)}}return(i=Cl(i))&&(i.da=n.qa[Mp]),!0},e[Wh]=t,e[Mp]=dE.bind(e),t}function dE(e,t,n,i){var s=this[Ol];const r=this[Wh],o=Gs(void 0,s.T),a=Cl(e);if(a){var l=!1,c=s.ba;if(c){if(s=(h,f,u)=>{if(u.length!==0)if(c[f])for(const d of u){h=T0(d);try{l=!0,r(o,h)}finally{A0(h)}}else i==null||i(e,f,u)},t==null)cl(a,s);else if(a!=null){const h=a[t];h&&s(a,t,h)}if(l){let h=0|e[Et];if(2&h&&2048&h&&!(n!=null&&n.Ka))throw Error();const f=ro(h),u=(d,g)=>{if(ns(e,d,f)!=null){if((n==null?void 0:n.Qa)===1)return;throw Error()}g!=null&&(h=We(e,h,d,g,f)),delete a[d]};t==null?n0(o,0|o[Et],(d,g)=>{u(d,g)}):u(t,ns(o,t,f))}}}}function pE(e){const t=(e=N0(e))[0].g;if(e=e[1]){const n=sf(e),i=nr(Ol,ef,nf,e).T;return(s,r,o)=>t(s,r,o,i,n)}return t}function Bl(e,t,n){e[t]=n.h}function kl(e,t,n,i){let s,r;const o=n.h;e[t]=(a,l,c)=>o(a,l,c,r||(r=nr(Nl,Bl,kl,i).T),s||(s=B0(i)))}function B0(e){let t=e[xp];if(!t){const n=nr(Nl,Bl,kl,e);t=(i,s)=>k0(i,s,n),e[xp]=t}return t}function k0(e,t,n){n0(e,0|e[Et],(i,s)=>{if(s!=null){var r=function(o,a){var l=o[a];if(l)return l;if((l=o.ba)&&(l=l[a])){var c=(l=N0(l))[0].h;if(l=l[1]){const h=B0(l),f=nr(Nl,Bl,kl,l).T;l=o.ma?F0(f,h):(u,d,g)=>c(u,d,g,f,h)}else l=c;return o[a]=l}}(n,i);r?r(t,s,i):i<500||Yr(kh,3)}}),(e=Cl(e))&&cl(e,(i,s,r)=>{for(Zr(t,t.g.end()),i=0;i<r.length;i++)Zr(t,Cu(r[i])||new Uint8Array(0))})}const mE=Fn(0);function po(e,t){if(Array.isArray(t)){var n=0|t[Et];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){const r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&je(t,e),2&e&&Object.freeze(t),t}}function fn(e,t,n){return new fo(e,t,n)}function mo(e,t,n){return new fo(e,t,n)}function dn(e,t,n){We(e,0|e[Et],t,n,ro(0|e[Et]))}var gE=Fl(function(e,t,n,i,s){if(e.h!==2)return!1;if(e=pi(e=aa(e,Gs([void 0,void 0],i),s)),s=ro(i=0|t[Et]),2&i)throw Error();let r=ns(t,n,s);if(r instanceof es)2&r.J?(r=r.V(),r.push(e),We(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var o=0|r[Et];8192&o||je(r,o|=8192),2&o&&(r=v0(r),We(t,i,n,r,s)),r.push(e)}else We(t,i,n,jo([e]),s);return!0},function(e,t,n,i,s){if(t instanceof es)t.forEach((r,o)=>{dl(e,n,Gs([o,r],i),s)});else if(Array.isArray(t)){for(let r=0;r<t.length;r++){const o=t[r];Array.isArray(o)&&dl(e,n,Gs(o,i),s)}jo(t)}});function z0(e,t,n){(t=Ai(t))!=null&&(Qn(e,n,5),e=e.g,Pu(t),ju(e))}function V0(e,t,n){if(t=function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(sa(64,i));if(ra(i)){if(s==="string")return c0(i);if(s==="number")return Iu(i)}}(t),t!=null&&(typeof t=="string"&&vp(t),t!=null))switch(Qn(e,n,0),typeof t){case"number":e=e.g,Kr(t),Or(e,be,Oe);break;case"bigint":n=BigInt.asUintN(64,t),n=new Hh(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Or(e.g,n.h,n.g);break;default:n=vp(t),Or(e.g,n.h,n.g)}}function G0(e,t,n){(t=oo(t))!=null&&t!=null&&(Qn(e,n,0),Dl(e.g,t))}function H0(e,t,n){(t=o0(t))!=null&&(Qn(e,n,0),e.g.g.push(t?1:0))}function W0(e,t,n){(t=rn(t))!=null&&Il(e,n,Ym(t))}function X0(e,t,n,i,s){dl(e,n,O0(t,i),s)}function Y0(e,t,n){(t=t==null||typeof t=="string"||t instanceof Ci?t:void 0)!=null&&Il(e,n,Wu(t,!0).buffer)}function q0(e,t,n){(t=a0(t))!=null&&t!=null&&(Qn(e,n,0),uo(e.g,t))}function j0(e,t,n){return(e.h===5||e.h===2)&&(t=ho(t,0|t[Et],n),e.h==2?Ll(e,ul,t):t.push(ul(e.g)),!0)}var Be=fn(function(e,t,n){return e.h===5&&(dn(t,n,ul(e.g)),!0)},z0,Ul),_E=mo(j0,function(e,t,n){if((t=po(Ai,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Qn(i,s,5),i=i.g,Pu(r),ju(i))}},Ul),rf=mo(j0,function(e,t,n){if((t=po(Ai,t))!=null&&t.length){Qn(e,n,2),uo(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Pu(t[i]),ju(n)}},Ul),vE=fn(function(e,t,n){return e.h===5&&(dn(t,n,(e=ul(e.g))===0?void 0:e),!0)},z0,Ul),Es=fn(function(e,t,n){return e.h!==0?e=!1:(dn(t,n,Xu(e.g,r0)),e=!0),e},V0,P0),Nc=fn(function(e,t,n){return e.h!==0?t=!1:(dn(t,n,(e=Xu(e.g,r0))===mE?void 0:e),t=!0),t},V0,P0),xE=fn(function(e,t,n){return e.h!==0?e=!1:(dn(t,n,Xu(e.g,Hy)),e=!0),e},function(e,t,n){if(t=function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(Wy(64,i));if(ra(i)){if(s==="string")return s=$r(Number(i)),Zs(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(Al(i),i=Ko(be,Oe))),i;if(s==="number")return(i=$r(i))>=0&&Zs(i)||(Kr(i),i=s0(be,Oe)),i}}(t),t!=null&&(typeof t=="string"&&_p(t),t!=null))switch(Qn(e,n,0),typeof t){case"number":e=e.g,Kr(t),Or(e,be,Oe);break;case"bigint":n=BigInt.asUintN(64,t),n=new Gh(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Or(e.g,n.h,n.g);break;default:n=_p(t),Or(e.g,n.h,n.g)}},hE),Ge=fn(function(e,t,n){return e.h===0&&(dn(t,n,ys(e.g)),!0)},G0,Qu),la=mo(function(e,t,n){return(e.h===0||e.h===2)&&(t=ho(t,0|t[Et],n),e.h==2?Ll(e,ys,t):t.push(ys(e.g)),!0)},function(e,t,n){if((t=po(oo,t))!=null&&t.length){n=Ku(e,n);for(let i=0;i<t.length;i++)Dl(e.g,t[i]);$u(e,n)}},Qu),Ir=fn(function(e,t,n){return e.h===0&&(dn(t,n,(e=ys(e.g))===0?void 0:e),!0)},G0,Qu),Ae=fn(function(e,t,n){return e.h===0&&(dn(t,n,Yu(e.g)),!0)},H0,R0),Ys=fn(function(e,t,n){return e.h===0&&(dn(t,n,(e=Yu(e.g))===!1?void 0:e),!0)},H0,R0),cn=mo(function(e,t,n){return e.h===2&&(e=qu(e),ho(t,0|t[Et],n).push(e),!0)},function(e,t,n){if((t=po(rn,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Il(i,s,Ym(r))}},Ju),vs=fn(function(e,t,n){return e.h===2&&(dn(t,n,(e=qu(e))===""?void 0:e),!0)},W0,Ju),me=fn(function(e,t,n){return e.h===2&&(dn(t,n,qu(e)),!0)},W0,Ju),Qe=function(e,t,n=Zu){return new fo(e,t,n)}(function(e,t,n,i,s){return e.h===2&&(i=Gs(void 0,i),ho(t,0|t[Et],n).push(i),aa(e,i,s),!0)},function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)X0(e,t[r],n,i,s);1&(e=0|t[Et])||je(t,1|e)}}),Se=Fl(function(e,t,n,i,s,r){if(e.h!==2)return!1;let o=0|t[Et];return x0(t,o,r,n,ro(o)),aa(e,t=Gu(t,i,n),s),!0},X0),K0=fn(function(e,t,n){return e.h===2&&(dn(t,n,C0(e)),!0)},Y0,L0),ME=mo(function(e,t,n){return(e.h===0||e.h===2)&&(t=ho(t,0|t[Et],n),e.h==2?Ll(e,Di,t):t.push(Di(e.g)),!0)},function(e,t,n){if((t=po(a0,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(Qn(i,s,0),uo(i.g,r))}},tf),SE=fn(function(e,t,n){return e.h===0&&(dn(t,n,(e=Di(e.g))===0?void 0:e),!0)},q0,tf),un=fn(function(e,t,n){return e.h===0&&(dn(t,n,ys(e.g)),!0)},function(e,t,n){(t=oo(t))!=null&&(t=parseInt(t,10),Qn(e,n,0),Dl(e.g,t))},D0);class yE{constructor(t,n){var i=Vn;this.g=t,this.h=n,this.m=ee,this.j=Pt,this.defaultValue=void 0,this.l=i.Oa!=null?i0:void 0}register(){El(this)}}function Ni(e,t){return new yE(e,t)}function Ts(e,t){return(n,i)=>{{const r={ea:!0};i&&Object.assign(r,i),n=T0(n,void 0,void 0,r);try{const o=new e,a=o.v;sf(t)(a,n);var s=o}finally{A0(n)}}return s}}function zl(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};k0(this.v,t,nr(Nl,Bl,kl,e)),Zr(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var Sp=class extends bt{constructor(e){super(e)}},yp=[0,vs,fn(function(e,t,n){return e.h===2&&(dn(t,n,(e=C0(e))===Ks()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof bt){const i=t.Ra;return void(i?(t=i(t),t!=null&&Il(e,n,Wu(t,!0).buffer)):Yr(kh,3))}if(Array.isArray(t))return void Yr(kh,3)}Y0(e,t,n)},L0)];let Oc,Ep=globalThis.trustedTypes;function bp(e){var t;return Oc===void 0&&(Oc=function(){let n=null;if(!Ep)return n;try{const i=s=>s;n=Ep.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),e=(t=Oc)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function Wa(e,...t){if(t.length===0)return bp(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return bp(n)}var $0=[0,Ge,un,Ae,-1,la,un,-1,Ae],EE=class extends bt{constructor(e){super(e)}},Z0=[0,Ae,me,Ae,un,-1,mo(function(e,t,n){return(e.h===0||e.h===2)&&(t=ho(t,0|t[Et],n),e.h==2?Ll(e,oE,t):t.push(ys(e.g)),!0)},function(e,t,n){if((t=po(oo,t))!=null&&t.length){n=Ku(e,n);for(let i=0;i<t.length;i++)Dl(e.g,t[i]);$u(e,n)}},D0),me,-1,[0,Ae,-1],un,Ae,-1],J0=[0,3,Ae,-1,2,[0,[2],Ge,Se,[0,fn(function(e,t,n){return e.h===0&&(dn(t,n,Di(e.g)),!0)},q0,tf)]],[0,un,Ae,un,Ae,un,Ae,me,-1],[0,[3,4],me,-1,Se,[0,Ge],Se,[0,un]],[0]],Q0=[0,me,-2],Tp=class extends bt{constructor(e){super(e)}},tg=[0],eg=[0,Ge,Ae,1,Ae,-4],Vn=class extends bt{constructor(e){super(e,2)}},Xe={};Xe[336783863]=[0,me,Ae,-1,Ge,[0,[1,2,3,4,5,6,7,8,9],Se,tg,Se,Z0,Se,Q0,Se,eg,Se,$0,Se,[0,me,-2],Se,[0,me,un],Se,J0,Se,[0,un,-1,Ae]],[0,me],Ae,[0,[1,3],[2,4],Se,[0,la],-1,Se,[0,cn],-1,Qe,[0,me,-1]],me];var Ap=[0,Nc,-1,Ys,-3,Nc,la,vs,Ir,Nc,-1,Ys,Ir,Ys,-2,vs];function Ee(e,t){Pl(e,3,t)}function Kt(e,t){Pl(e,4,t)}var bn=class extends bt{constructor(e){super(e,500)}o(e){return Pt(this,0,7,e)}},Bo=[-1,{}],wp=[0,me,1,Bo],Cp=[0,me,cn,Bo];function ti(e,t){Hu(e,1,bn,t)}function we(e,t){Pl(e,10,t)}function ne(e,t){Pl(e,15,t)}var Gn=class extends bt{constructor(e){super(e,500)}o(e){return Pt(this,0,1001,e)}},ng=[-500,Qe,[-500,vs,-1,cn,-3,[-2,Xe,Ae],Qe,yp,Ir,-1,wp,Cp,Qe,[0,vs,Ys],vs,Ap,Ir,cn,987,cn],4,Qe,[-500,me,-1,[-1,{}],998,me],Qe,[-500,me,cn,-1,[-2,{},Ae],997,cn,-1],Ir,Qe,[-500,me,cn,Bo,998,cn],cn,Ir,wp,Cp,Qe,[0,vs,-1,Bo],cn,-2,Ap,vs,-1,Ys,[0,Ys,SE],978,Bo,Qe,yp];Gn.prototype.g=zl(ng);var bE=Ts(Gn,ng),TE=class extends bt{constructor(e){super(e)}},ig=class extends bt{constructor(e){super(e)}g(){return is(this,TE,1)}},sg=[0,Qe,[0,Ge,Be,me,-1]],Vl=Ts(ig,sg),AE=class extends bt{constructor(e){super(e)}},wE=class extends bt{constructor(e){super(e)}},Bc=class extends bt{constructor(e){super(e)}l(){return ee(this,AE,2)}g(){return is(this,wE,5)}},rg=Ts(class extends bt{constructor(e){super(e)}},[0,cn,la,rf,[0,un,[0,Ge,-3],[0,Be,-3],[0,Ge,-1,[0,Qe,[0,Ge,-2]]],Qe,[0,Be,-1,me,Be]],me,-1,Es,Qe,[0,Ge,Be],cn,Es]),og=class extends bt{constructor(e){super(e)}},Br=Ts(class extends bt{constructor(e){super(e)}},[0,Qe,[0,Be,-4]]),ag=class extends bt{constructor(e){super(e)}},ca=Ts(class extends bt{constructor(e){super(e)}},[0,Qe,[0,Be,-4]]),CE=class extends bt{constructor(e){super(e)}},RE=[0,Ge,-1,rf,un],lg=class extends bt{constructor(e){super(e)}};lg.prototype.g=zl([0,Be,-4,Es]);var PE=class extends bt{constructor(e){super(e)}},LE=Ts(class extends bt{constructor(e){super(e)}},[0,Qe,[0,1,Ge,me,sg],Es]),Rp=class extends bt{constructor(e){super(e)}},DE=class extends bt{constructor(e){super(e)}na(){const e=Te(this,1,void 0,void 0,_0);return e??Ks()}},IE=class extends bt{constructor(e){super(e)}},cg=[1,2],UE=Ts(class extends bt{constructor(e){super(e)}},[0,Qe,[0,cg,Se,[0,rf],Se,[0,K0],Ge,me],Es]),of=class extends bt{constructor(e){super(e)}},hg=[0,me,Ge,Be,cn,-1],Pp=class extends bt{constructor(e){super(e)}},FE=[0,Ae,-1],Lp=class extends bt{constructor(e){super(e)}},nl=[1,2,3,4,5,6],pl=class extends bt{constructor(e){super(e)}g(){return Te(this,1,void 0,void 0,_0)!=null}l(){return rn(Te(this,2))!=null}},Pe=class extends bt{constructor(e){super(e)}g(){return o0(Te(this,2))??!1}},ug=[0,K0,me,[0,Ge,Es,-1],[0,xE,Es]],ke=[0,ug,Ae,[0,nl,Se,eg,Se,Z0,Se,$0,Se,tg,Se,Q0,Se,J0],un],Gl=class extends bt{constructor(e){super(e)}},af=[0,ke,Be,-1,Ge],NE=Ni(502141897,Gl);Xe[502141897]=af;var OE=Ts(class extends bt{constructor(e){super(e)}},[0,[0,un,-1,_E,ME],RE]),fg=class extends bt{constructor(e){super(e)}},dg=class extends bt{constructor(e){super(e)}},Xh=[0,ke,Be,[0,ke],Ae],BE=Ni(508968150,dg);Xe[508968150]=[0,ke,af,Xh,Be,[0,[0,ug]]],Xe[508968149]=Xh;var Rr=class extends bt{constructor(e){super(e)}l(){return ee(this,of,2)}g(){fe(this,2)}},pg=[0,ke,hg];Xe[478825465]=pg;var kE=class extends bt{constructor(e){super(e)}},mg=class extends bt{constructor(e){super(e)}},lf=class extends bt{constructor(e){super(e)}},cf=class extends bt{constructor(e){super(e)}},gg=class extends bt{constructor(e){super(e)}},Dp=[0,ke,[0,ke],pg,-1],_g=[0,ke,Be,Ge],hf=[0,ke,Be],vg=[0,ke,_g,hf,Be],zE=Ni(479097054,gg);Xe[479097054]=[0,ke,vg,Dp],Xe[463370452]=Dp,Xe[464864288]=_g;var VE=Ni(462713202,cf);Xe[462713202]=vg,Xe[474472470]=hf;var GE=class extends bt{constructor(e){super(e)}},xg=class extends bt{constructor(e){super(e)}},Mg=class extends bt{constructor(e){super(e)}},Sg=class extends bt{constructor(e){super(e)}},uf=[0,ke,Be,-1,Ge],Yh=[0,ke,Be,Ae];Sg.prototype.g=zl([0,ke,hf,[0,ke],af,Xh,uf,Yh]);var yg=class extends bt{constructor(e){super(e)}},HE=Ni(456383383,yg);Xe[456383383]=[0,ke,hg];var Eg=class extends bt{constructor(e){super(e)}},WE=Ni(476348187,Eg);Xe[476348187]=[0,ke,FE];var bg=class extends bt{constructor(e){super(e)}},Ip=class extends bt{constructor(e){super(e)}},Tg=[0,un,-1],XE=Ni(458105876,class extends bt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[Et];return e=On(this,n),t=function(i,s,r,o){var a=Ip;!o&&lo(i)&&(r=0|(s=i.v)[Et]);var l=ns(s,2);if(i=!1,l==null){if(o)return dp();l=[]}else if(l.constructor===es){if(!(2&l.J)||o)return l;l=l.V()}else Array.isArray(l)?i=!!(2&(0|l[Et])):l=[];if(o){if(!l.length)return dp();i||(i=!0,ia(l))}else i&&(i=!1,jo(l),l=v0(l));return!i&&32&r&&na(l,32),r=We(s,r,2,o=new es(l,a,qy,void 0)),i||er(s,r),o}(this,t,n,e),!e&&Ip&&(t.ra=!0),t}});Xe[458105876]=[0,Tg,gE,[!0,Es,[0,me,-1,cn]],[0,la,Ae,un]];var ff=class extends bt{constructor(e){super(e)}},Ag=Ni(458105758,ff);Xe[458105758]=[0,ke,me,Tg];var kc=class extends bt{constructor(e){super(e)}},Up=[0,vE,-1,Ys],YE=class extends bt{constructor(e){super(e)}},wg=class extends bt{constructor(e){super(e)}},qh=[1,2];wg.prototype.g=zl([0,qh,Se,Up,Se,[0,Qe,Up]]);var Cg=class extends bt{constructor(e){super(e)}},qE=Ni(443442058,Cg);Xe[443442058]=[0,ke,me,Ge,Be,cn,-1,Ae,Be],Xe[514774813]=uf;var Rg=class extends bt{constructor(e){super(e)}},jE=Ni(516587230,Rg);function jh(e,t){return t=t?t.clone():new of,e.displayNamesLocale!==void 0?fe(t,1,oa(e.displayNamesLocale)):e.displayNamesLocale===void 0&&fe(t,1),e.maxResults!==void 0?ss(t,2,e.maxResults):"maxResults"in e&&fe(t,2),e.scoreThreshold!==void 0?Ct(t,3,e.scoreThreshold):"scoreThreshold"in e&&fe(t,3),e.categoryAllowlist!==void 0?hl(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&fe(t,4),e.categoryDenylist!==void 0?hl(t,5,e.categoryDenylist):"categoryDenylist"in e&&fe(t,5),t}function Pg(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function df(e,t=-1,n=""){return{categories:e.map(i=>({index:Jn(i,1)??0??-1,score:Ue(i,2)??0,categoryName:rn(Te(i,3))??""??"",displayName:rn(Te(i,4))??""??""})),headIndex:t,headName:n}}function KE(e){const t={classifications:is(e,PE,1).map(n=>{var i;return df(((i=ee(n,ig,4))==null?void 0:i.g())??[],Jn(n,2)??0,rn(Te(n,3))??"")})};return function(n){return n==null?n:typeof n=="bigint"?(zh(n)?n=Number(n):(n=sa(64,n),n=zh(n)?Number(n):String(n)),n):ra(n)?typeof n=="number"?Iu(n):c0(n):void 0}(Te(e,2,void 0,void 0,ll))!=null&&(t.timestampMs=Pg(Te(e,2,void 0,void 0,ll)??m0)),t}function Lg(e){var o,a;var t=Vs(e,3,Ai,zs()),n=Vs(e,2,oo,zs()),i=Vs(e,1,rn,zs()),s=Vs(e,9,rn,zs());const r={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)r.categories.push({score:t[l],index:n[l]??-1,categoryName:i[l]??"",displayName:s[l]??""});if((t=(o=ee(e,Bc,4))==null?void 0:o.l())&&(r.boundingBox={originX:Jn(t,1,ps)??0,originY:Jn(t,2,ps)??0,width:Jn(t,3,ps)??0,height:Jn(t,4,ps)??0,angle:0}),(a=ee(e,Bc,4))==null?void 0:a.g().length)for(const l of ee(e,Bc,4).g())r.keypoints.push({x:Te(l,1,void 0,ps,Ai)??0,y:Te(l,2,void 0,ps,Ai)??0,score:Te(l,4,void 0,ps,Ai)??0,label:rn(Te(l,3,void 0,ps))??""});return r}function Hl(e){const t=[];for(const n of is(e,ag,1))t.push({x:Ue(n,1)??0,y:Ue(n,2)??0,z:Ue(n,3)??0,visibility:Ue(n,4)??0});return t}function ko(e){const t=[];for(const n of is(e,og,1))t.push({x:Ue(n,1)??0,y:Ue(n,2)??0,z:Ue(n,3)??0,visibility:Ue(n,4)??0});return t}function Fp(e){return Array.from(e,t=>t>127?t-256:t)}function Np(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let Xa;Xe[516587230]=[0,ke,uf,Yh,Be],Xe[518928384]=Yh;const $E=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Dg(e){if(e)return!0;if(Xa===void 0)try{await WebAssembly.instantiate($E),Xa=!0}catch{Xa=!1}return Xa}async function Ya(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await Dg(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Pr=class{};function Ig(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Op(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;await self.import(e.toString())}}function Ug(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function At(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Bp(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=Ug(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function kp(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const s of i)e.i._free(s);e.i._free(t)}function Si(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function ms(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Pr.forVisionTasks=function(e,t=!1){return Ya("vision",e??Wa``,t)},Pr.forTextTasks=function(e,t=!1){return Ya("text",e??Wa``,t)},Pr.forGenAiTasks=function(e,t=!1){return Ya("genai",e??Wa``,t)},Pr.forAudioTasks=function(e,t=!1){return Ya("audio",e??Wa``,t)},Pr.isSimdSupported=function(e=!1){return Dg(e)};async function ZE(e,t,n,i){return e=await(async(s,r,o,a,l)=>{if(r&&await Op(r),!self.ModuleFactory||o&&(await Op(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((r=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new s(l,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function zc(e,t){const n=ee(e.baseOptions,pl,1)||new pl;typeof t=="string"?(fe(n,2,oa(t)),fe(n,1)):t instanceof Uint8Array&&(fe(n,1,Ru(t,!1)),fe(n,2)),Pt(e.baseOptions,0,1,n)}function zp(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map(n=>n.message).join(", "))}finally{e.H=[]}}function mt(e,t){e.C=Math.max(e.C,t)}function Wl(e,t){e.B=new bn,Bn(e.B,2,"PassThroughCalculator"),Ee(e.B,"free_memory"),Kt(e.B,"free_memory_unused_out"),we(t,"free_memory"),ti(t,e.B)}function Jr(e,t){Ee(e.B,t),Kt(e.B,t+"_unused_out")}function Xl(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Kh=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,s,r,o,a;if(t){const l=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=ee(this.baseOptions,pl,1))!=null&&s.g()||(r=ee(this.baseOptions,pl,1))!=null&&r.l()||(o=e.baseOptions)!=null&&o.modelAssetBuffer||(a=e.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,h){let f=ee(c.baseOptions,Lp,3);if(!f){var u=f=new Lp,d=new Tp;Oo(u,4,nl,d)}"delegate"in h&&(h.delegate==="GPU"?(h=f,u=new EE,Oo(h,2,nl,u)):(h=f,u=new Tp,Oo(h,4,nl,u))),Pt(c.baseOptions,0,3,f)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),zc(this,"/model.dat"),this.m(),this.L()});if(l.modelAssetBuffer instanceof Uint8Array)zc(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const h=[];for(var f=0;;){const{done:u,value:d}=await c.read();if(u)break;h.push(d),f+=d.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];c=new Uint8Array(f),f=0;for(const u of h)c.set(u,f),f+=u.length;return c}(l.modelAssetBuffer).then(c=>{zc(this,c),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca(t=>{e=bE(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,zp(this)}finishProcessing(){this.g.finishProcessing(),zp(this)}close(){this.B=void 0,this.g.closeGraph()}};function Ss(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Kh.prototype.close=Kh.prototype.close;class JE{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Vp(e,t,n){const i=e.g;if(n=Ss(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function Gp(e,t){const n=e.g,i=Ss(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=Ss(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=Ss(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new JE(n,i,s,r)}function pf(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function QE(e,t,n,i){return pf(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=Gp(e,!0)),n=e.u):(e.A||(e.A=Gp(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Fg(e,t,n){return pf(e,t),e=Ss(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Ng(e,t,n){pf(e,t),e.B||(e.B=Ss(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function tb(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Og=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Ss(e.createProgram(),"Failed to create WebGL program"),this.X=Vp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=Vp(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function Yi(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function $h(e){var t=Yi(e,1);if(!t){if(t=Yi(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=Qr(e);var n=mf(e);if(Ng(n,i,Bg(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Bg(e){let t=Yi(e,2);if(!t){const n=Qr(e);t=zg(e);const i=$h(e),s=kg(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),Zh(e)}return t}function Qr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Ss(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function kg(e){if(e=Qr(e),!qa)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))qa=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");qa=e.R16F}return qa}function mf(e){return e.l||(e.l=new Og),e.l}function zg(e){const t=Qr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Yi(e,2);return n||(n=Fg(mf(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Zh(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var qa,Je=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Hp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Yi(this,0)}ka(){return!!Yi(this,1)}R(){return!!Yi(this,2)}ja(){return(t=Yi(e=this,0))||(t=$h(e),t=new Uint8Array(t.map(n=>Math.round(255*n))),e.g.push(t)),t;var e,t}ia(){return $h(this)}N(){return Bg(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=Qr(this),s=mf(this);i.activeTexture(i.TEXTURE1),n=Fg(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=kg(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Ng(s,i,n),QE(s,i,!1,()=>{zg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Zh(this)}),tb(s),Zh(this)}}e.push(n)}return new Je(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Qr(this).deleteTexture(Yi(this,2)),Hp=-1}};Je.prototype.close=Je.prototype.close,Je.prototype.clone=Je.prototype.clone,Je.prototype.getAsWebGLTexture=Je.prototype.N,Je.prototype.getAsFloat32Array=Je.prototype.ia,Je.prototype.getAsUint8Array=Je.prototype.ja,Je.prototype.hasWebGLTexture=Je.prototype.R,Je.prototype.hasFloat32Array=Je.prototype.ka,Je.prototype.hasUint8Array=Je.prototype.Fa;var Hp=250;function mi(...e){return e.map(([t,n])=>({start:t,end:n}))}const eb=function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}}((Wp=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Ig()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),At(this,i||"input_audio",r=>{At(this,s=s||"audio_header",o=>{this.i._configureAudio(r,o,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Si(this,"__graph_config__",t=>{e(t)}),At(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){const r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),At(this,i,o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)})}addGpuBufferToStream(e,t,n){At(this,t,i=>{const[s,r]=Bp(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(e,t,n){At(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){At(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){At(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){At(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){At(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){At(this,t,i=>{At(this,e,s=>{this.i._addStringToInputStream(s,i,n)})})}addStringRecordToStream(e,t,n){At(this,t,i=>{kp(this,Object.keys(e),s=>{kp(this,Object.values(e),r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){At(this,n,s=>{At(this,t,r=>{const o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)})})}addEmptyPacketToStream(e,t){At(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(e,t,n){At(this,t,i=>{const s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of e)At(this,r,o=>{this.i._addStringVectorEntry(s,o)});this.i._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(e,t){At(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){At(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){At(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){At(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){At(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){At(this,t,n=>{At(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){At(this,n,i=>{At(this,t,s=>{const r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)})})}addBoolVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){At(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of e)At(this,s,r=>{this.i._addStringVectorEntry(i,r)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){Si(this,e,t),At(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){ms(this,e,t),At(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){Si(this,e,t),At(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){ms(this,e,t),At(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){Si(this,e,t),At(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){ms(this,e,t),At(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){Si(this,e,t),At(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){ms(this,e,t),At(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){Si(this,e,t),At(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){ms(this,e,t),At(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){Si(this,e,t),At(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){ms(this,e,t),At(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){Si(this,e,t),At(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){ms(this,e,t),At(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Si(this,e,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)}),At(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Wp{get ga(){return this.i}pa(e,t,n){At(this,t,i=>{const[s,r]=Bp(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)})}Z(e,t){Si(this,e,t),At(this,e,n=>{this.ga._attachImageListener(n)})}aa(e,t){ms(this,e,t),At(this,e,n=>{this.ga._attachImageVectorListener(n)})}}));var Wp,gi=class extends eb{};async function Qt(e,t,n){return async function(i,s,r,o){return ZE(i,s,r,o)}(e,n.canvas??(Ig()?void 0:document.createElement("canvas")),t,n)}function Vg(e,t,n,i){if(e.U){const r=new lg;if(n!=null&&n.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ct(r,1,(s.left+s.right)/2),Ct(r,2,(s.top+s.bottom)/2),Ct(r,4,s.right-s.left),Ct(r,3,s.bottom-s.top)}else Ct(r,1,.5),Ct(r,2,.5),Ct(r,4,1),Ct(r,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ct(r,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=Ug(t);n=Ue(r,3)*a/o,s=Ue(r,4)*o/a,Ct(r,4,n),Ct(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function _i(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Vg(e,t,n,e.C+1)}function Oi(e,t,n,i){var s;if(!((s=e.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Vg(e,t,n,i)}function to(e,t,n,i){var s=t.data;const r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new Je([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var kn=class extends Kh{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new Og}l(e,t=!0){if("runningMode"in e&&fe(this.baseOptions,2,$o(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};kn.prototype.close=kn.prototype.close;var Xn=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Pt(e=this.h=new Gl,0,1,t=new Pe),Ct(this.h,2,.5),Ct(this.h,3,.3)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&Ct(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&Ct(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},_i(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Oi(this,e,n,t),this.j}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect_in"),ne(e,"detections");const t=new Vn;Fi(t,NE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect_in"),Kt(n,"DETECTIONS:detections"),n.o(t),ti(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=rg(r),this.j.detections.push(Lg(i));mt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Xn.prototype.detectForVideo=Xn.prototype.G,Xn.prototype.detect=Xn.prototype.F,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=async function(e,t){return Qt(Xn,e,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(e,t){return Qt(Xn,e,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(e,t){return Qt(Xn,e,t)};var gf=mi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),_f=mi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),vf=mi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Gg=mi([474,475],[475,476],[476,477],[477,474]),xf=mi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Mf=mi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Hg=mi([469,470],[470,471],[471,472],[472,469]),Sf=mi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Wg=[...gf,..._f,...vf,...xf,...Mf,...Sf],Xg=mi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Xp(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Re=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Pt(e=this.h=new dg,0,1,t=new Pe),this.A=new fg,Pt(this.h,0,3,this.A),this.u=new Gl,Pt(this.h,0,2,this.u),ss(this.u,4,1),Ct(this.u,2,.5),Ct(this.A,2,.5),Ct(this.h,4,.5)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"numFaces"in e&&ss(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&Ct(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&Ct(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&Ct(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return Xp(this),_i(this,e,t),this.j}G(e,t,n){return Xp(this),Oi(this,e,n,t),this.j}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect"),ne(e,"face_landmarks");const t=new Vn;Fi(t,BE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),ti(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,s)=>{for(const r of i)i=ca(r),this.j.faceLandmarks.push(Hl(i));mt(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{mt(this,i)}),this.outputFaceBlendshapes&&(ne(e,"blendshapes"),Kt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=Vl(r),this.j.faceBlendshapes.push(df(i.g()??[]));mt(this,s)}),this.g.attachEmptyPacketListener("blendshapes",i=>{mt(this,i)})),this.outputFacialTransformationMatrixes&&(ne(e,"face_geometry"),Kt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=ee(i=OE(r),CE,2))&&this.j.facialTransformationMatrixes.push({rows:Jn(i,1)??0??0,columns:Jn(i,2)??0??0,data:Vs(i,3,Ai,zs()).slice()??[]});mt(this,s)}),this.g.attachEmptyPacketListener("face_geometry",i=>{mt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Re.prototype.detectForVideo=Re.prototype.G,Re.prototype.detect=Re.prototype.F,Re.prototype.setOptions=Re.prototype.o,Re.createFromModelPath=function(e,t){return Qt(Re,e,{baseOptions:{modelAssetPath:t}})},Re.createFromModelBuffer=function(e,t){return Qt(Re,e,{baseOptions:{modelAssetBuffer:t}})},Re.createFromOptions=function(e,t){return Qt(Re,e,t)},Re.FACE_LANDMARKS_LIPS=gf,Re.FACE_LANDMARKS_LEFT_EYE=_f,Re.FACE_LANDMARKS_LEFT_EYEBROW=vf,Re.FACE_LANDMARKS_LEFT_IRIS=Gg,Re.FACE_LANDMARKS_RIGHT_EYE=xf,Re.FACE_LANDMARKS_RIGHT_EYEBROW=Mf,Re.FACE_LANDMARKS_RIGHT_IRIS=Hg,Re.FACE_LANDMARKS_FACE_OVAL=Sf,Re.FACE_LANDMARKS_CONTOURS=Wg,Re.FACE_LANDMARKS_TESSELATION=Xg;var yf=mi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Yp(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function qp(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function jp(e,t=!0){const n=[];for(const s of e){var i=Vl(s);e=[];for(const r of i.g())i=t&&Jn(r,1)!=null?Jn(r,1)??0:-1,e.push({score:Ue(r,2)??0,index:i,categoryName:rn(Te(r,3))??""??"",displayName:rn(Te(r,4))??""??""});n.push(e)}return n}var Cn=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pt(e=this.j=new gg,0,1,t=new Pe),this.u=new cf,Pt(this.j,0,2,this.u),this.D=new lf,Pt(this.u,0,3,this.D),this.A=new mg,Pt(this.u,0,2,this.A),this.h=new kE,Pt(this.j,0,3,this.h),Ct(this.A,2,.5),Ct(this.u,4,.5),Ct(this.D,2,.5)}get baseOptions(){return ee(this.j,Pe,1)}set baseOptions(e){Pt(this.j,0,1,e)}o(e){var s,r,o,a;if(ss(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&Ct(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Ct(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Ct(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Rr,n=t,i=jh(e.cannedGesturesClassifierOptions,(s=ee(this.h,Rr,3))==null?void 0:s.l());Pt(n,0,2,i),Pt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((r=ee(this.h,Rr,3))==null||r.g());return e.customGesturesClassifierOptions?(Pt(n=t=new Rr,0,2,i=jh(e.customGesturesClassifierOptions,(o=ee(this.h,Rr,4))==null?void 0:o.l())),Pt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((a=ee(this.h,Rr,4))==null||a.g()),this.l(e)}Ha(e,t){return Yp(this),_i(this,e,t),qp(this)}Ia(e,t,n){return Yp(this),Oi(this,e,n,t),qp(this)}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect"),ne(e,"hand_gestures"),ne(e,"hand_landmarks"),ne(e,"world_hand_landmarks"),ne(e,"handedness");const t=new Vn;Fi(t,zE,this.j);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"HAND_GESTURES:hand_gestures"),Kt(n,"LANDMARKS:hand_landmarks"),Kt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Kt(n,"HANDEDNESS:handedness"),n.o(t),ti(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i){i=ca(r);const o=[];for(const a of is(i,ag,1))o.push({x:Ue(a,1)??0,y:Ue(a,2)??0,z:Ue(a,3)??0,visibility:Ue(a,4)??0});this.landmarks.push(o)}mt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i){i=Br(r);const o=[];for(const a of is(i,og,1))o.push({x:Ue(a,1)??0,y:Ue(a,2)??0,z:Ue(a,3)??0,visibility:Ue(a,4)??0});this.worldLandmarks.push(o)}mt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...jp(i,!1)),mt(this,s)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{mt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...jp(i)),mt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Kp(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Cn.prototype.recognizeForVideo=Cn.prototype.Ia,Cn.prototype.recognize=Cn.prototype.Ha,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return Qt(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return Qt(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return Qt(Cn,e,t)},Cn.HAND_CONNECTIONS=yf;var Rn=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Pt(e=this.h=new cf,0,1,t=new Pe),this.u=new lf,Pt(this.h,0,3,this.u),this.j=new mg,Pt(this.h,0,2,this.j),ss(this.j,3,1),Ct(this.j,2,.5),Ct(this.u,2,.5),Ct(this.h,4,.5)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"numHands"in e&&ss(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&Ct(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&Ct(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&Ct(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],_i(this,e,t),Kp(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Oi(this,e,n,t),Kp(this)}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect"),ne(e,"hand_landmarks"),ne(e,"world_hand_landmarks"),ne(e,"handedness");const t=new Vn;Fi(t,VE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"LANDMARKS:hand_landmarks"),Kt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Kt(n,"HANDEDNESS:handedness"),n.o(t),ti(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(const r of i)i=ca(r),this.landmarks.push(Hl(i));mt(this,s)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(const r of i)i=Br(r),this.worldLandmarks.push(ko(i));mt(this,s)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{mt(this,i)}),this.g.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const l of i){i=Vl(l);const c=[];for(const h of i.g())c.push({score:Ue(h,2)??0,index:Jn(h,1)??0??-1,categoryName:rn(Te(h,3))??""??"",displayName:rn(Te(h,4))??""??""});a.push(c)}o.call(r,...a),mt(this,s)}),this.g.attachEmptyPacketListener("handedness",i=>{mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Rn.prototype.detectForVideo=Rn.prototype.G,Rn.prototype.detect=Rn.prototype.F,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=function(e,t){return Qt(Rn,e,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(e,t){return Qt(Rn,e,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(e,t){return Qt(Rn,e,t)},Rn.HAND_CONNECTIONS=yf;var Yg=mi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function $p(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Zp(e){try{if(!e.D)return e.h;e.D(e.h)}finally{Xl(e)}}function ja(e,t){e=ca(e),t.push(Hl(e))}var Me=class extends kn{constructor(e,t){super(new gi(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Pt(e=this.j=new Sg,0,1,t=new Pe),this.I=new lf,Pt(this.j,0,2,this.I),this.W=new GE,Pt(this.j,0,3,this.W),this.u=new Gl,Pt(this.j,0,4,this.u),this.O=new fg,Pt(this.j,0,5,this.O),this.A=new xg,Pt(this.j,0,6,this.A),this.M=new Mg,Pt(this.j,0,7,this.M),Ct(this.u,2,.5),Ct(this.u,3,.3),Ct(this.O,2,.5),Ct(this.A,2,.5),Ct(this.A,3,.3),Ct(this.M,2,.5),Ct(this.I,2,.5)}get baseOptions(){return ee(this.j,Pe,1)}set baseOptions(e){Pt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&Ct(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&Ct(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&Ct(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&Ct(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&Ct(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&Ct(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&Ct(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,$p(this),_i(this,e,i),Zp(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,$p(this),Oi(this,e,s,t),Zp(this)}m(){var e=new Gn;we(e,"input_frames_image"),ne(e,"pose_landmarks"),ne(e,"pose_world_landmarks"),ne(e,"face_landmarks"),ne(e,"left_hand_landmarks"),ne(e,"left_hand_world_landmarks"),ne(e,"right_hand_landmarks"),ne(e,"right_hand_world_landmarks");const t=new Vn,n=new Sp;Bn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(s,r){if(r!=null)if(Array.isArray(r))fe(s,2,Rl(r,0,Zo));else{if(!(typeof r=="string"||r instanceof Ci||wu(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");gs(s,2,Ru(r,!1),Ks())}}(n,this.j.g());const i=new bn;Bn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Hu(i,8,Sp,n),Ee(i,"IMAGE:input_frames_image"),Kt(i,"POSE_LANDMARKS:pose_landmarks"),Kt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Kt(i,"FACE_LANDMARKS:face_landmarks"),Kt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Kt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Kt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Kt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),ti(e,i),Wl(this,e),this.g.attachProtoListener("pose_landmarks",(s,r)=>{ja(s,this.h.poseLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("pose_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("pose_world_landmarks",(s,r)=>{var o=this.h.poseWorldLandmarks;s=Br(s),o.push(ko(s)),mt(this,r)}),this.g.attachEmptyPacketListener("pose_world_landmarks",s=>{mt(this,s)}),this.outputPoseSegmentationMasks&&(Kt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Jr(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(s,r)=>{this.h.poseSegmentationMasks=[to(this,s,!0,!this.D)],mt(this,r)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.h.poseSegmentationMasks=[],mt(this,s)})),this.g.attachProtoListener("face_landmarks",(s,r)=>{ja(s,this.h.faceLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",s=>{mt(this,s)}),this.outputFaceBlendshapes&&(ne(e,"extra_blendshapes"),Kt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Vl(s),o.push(df(s.g()??[]))),mt(this,r)}),this.g.attachEmptyPacketListener("extra_blendshapes",s=>{mt(this,s)})),this.g.attachProtoListener("left_hand_landmarks",(s,r)=>{ja(s,this.h.leftHandLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("left_hand_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var o=this.h.leftHandWorldLandmarks;s=Br(s),o.push(ko(s)),mt(this,r)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("right_hand_landmarks",(s,r)=>{ja(s,this.h.rightHandLandmarks),mt(this,r)}),this.g.attachEmptyPacketListener("right_hand_landmarks",s=>{mt(this,s)}),this.g.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var o=this.h.rightHandWorldLandmarks;s=Br(s),o.push(ko(s)),mt(this,r)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",s=>{mt(this,s)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Me.prototype.detectForVideo=Me.prototype.G,Me.prototype.detect=Me.prototype.F,Me.prototype.setOptions=Me.prototype.o,Me.createFromModelPath=function(e,t){return Qt(Me,e,{baseOptions:{modelAssetPath:t}})},Me.createFromModelBuffer=function(e,t){return Qt(Me,e,{baseOptions:{modelAssetBuffer:t}})},Me.createFromOptions=function(e,t){return Qt(Me,e,t)},Me.HAND_CONNECTIONS=yf,Me.POSE_CONNECTIONS=Yg,Me.FACE_LANDMARKS_LIPS=gf,Me.FACE_LANDMARKS_LEFT_EYE=_f,Me.FACE_LANDMARKS_LEFT_EYEBROW=vf,Me.FACE_LANDMARKS_LEFT_IRIS=Gg,Me.FACE_LANDMARKS_RIGHT_EYE=xf,Me.FACE_LANDMARKS_RIGHT_EYEBROW=Mf,Me.FACE_LANDMARKS_RIGHT_IRIS=Hg,Me.FACE_LANDMARKS_FACE_OVAL=Sf,Me.FACE_LANDMARKS_CONTOURS=Wg,Me.FACE_LANDMARKS_TESSELATION=Xg;var Yn=class extends kn{constructor(e,t){super(new gi(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},Pt(e=this.h=new yg,0,1,t=new Pe)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return Pt(this.h,0,2,jh(e,ee(this.h,of,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},_i(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Oi(this,e,n,t),this.j}m(){var e=new Gn;we(e,"input_image"),we(e,"norm_rect"),ne(e,"classifications");const t=new Vn;Fi(t,HE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ee(n,"IMAGE:input_image"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"CLASSIFICATIONS:classifications"),n.o(t),ti(e,n),this.g.attachProtoListener("classifications",(i,s)=>{this.j=KE(LE(i)),mt(this,s)}),this.g.attachEmptyPacketListener("classifications",i=>{mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Yn.prototype.classifyForVideo=Yn.prototype.ta,Yn.prototype.classify=Yn.prototype.sa,Yn.prototype.setOptions=Yn.prototype.o,Yn.createFromModelPath=function(e,t){return Qt(Yn,e,{baseOptions:{modelAssetPath:t}})},Yn.createFromModelBuffer=function(e,t){return Qt(Yn,e,{baseOptions:{modelAssetBuffer:t}})},Yn.createFromOptions=function(e,t){return Qt(Yn,e,t)};var Pn=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!0),this.h=new Eg,this.embeddings={embeddings:[]},Pt(e=this.h,0,1,t=new Pe)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){var t=this.h,n=ee(this.h,Pp,2);return n=n?n.clone():new Pp,e.l2Normalize!==void 0?fe(n,1,$o(e.l2Normalize)):"l2Normalize"in e&&fe(n,1),e.quantize!==void 0?fe(n,2,$o(e.quantize)):"quantize"in e&&fe(n,2),Pt(t,0,2,n),this.l(e)}za(e,t){return _i(this,e,t),this.embeddings}Aa(e,t,n){return Oi(this,e,n,t),this.embeddings}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect"),ne(e,"embeddings_out");const t=new Vn;Fi(t,WE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"EMBEDDINGS:embeddings_out"),n.o(t),ti(e,n),this.g.attachProtoListener("embeddings_out",(i,s)=>{i=UE(i),this.embeddings=function(r){return{embeddings:is(r,IE,1).map(o=>{var c,h;const a={headIndex:Jn(o,3)??0??-1,headName:rn(Te(o,4))??""??""};var l=o.v;return M0(l,0|l[Et],Rp,Fc(o,1))!==void 0?(o=Vs(o=ee(o,Rp,Fc(o,1),void 0),1,Ai,zs()),a.floatEmbedding=o.slice()):(l=new Uint8Array(0),a.quantizedEmbedding=((h=(c=ee(o,DE,Fc(o,2),void 0))==null?void 0:c.na())==null?void 0:h.h())??l),a}),timestampMs:Pg(Te(r,2,void 0,void 0,ll)??m0)}}(i),mt(this,s)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Pn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=Np(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=Np(Fp(e.quantizedEmbedding),Fp(t.quantizedEmbedding))}return e},Pn.prototype.embedForVideo=Pn.prototype.Aa,Pn.prototype.embed=Pn.prototype.za,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(e,t){return Qt(Pn,e,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(e,t){return Qt(Pn,e,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(e,t){return Qt(Pn,e,t)};var Jh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function nb(e){var n,i;const t=function(s){return is(s,bn,1)}(e.ca()).filter(s=>(rn(Te(s,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=ee(t[0],Vn,7))==null?void 0:n.j())==null?void 0:i.g())??new Map).forEach((s,r)=>{e.u[Number(r)]=rn(Te(s,1))??""})}function Jp(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Qp(e){try{const t=new Jh(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{Xl(e)}}Jh.prototype.close=Jh.prototype.close;var Mn=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ff,this.A=new bg,Pt(this.h,0,3,this.A),Pt(e=this.h,0,1,t=new Pe)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?fe(this.h,2,oa(e.displayNamesLocale)):"displayNamesLocale"in e&&fe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){nb(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Jp(this),_i(this,e,i),Qp(this)}La(e,t,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Jp(this),Oi(this,e,s,t),Qp(this)}Da(){return this.u}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect");const t=new Vn;Fi(t,Ag,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect"),n.o(t),ti(e,n),Wl(this,e),this.outputConfidenceMasks&&(ne(e,"confidence_masks"),Kt(n,"CONFIDENCE_MASKS:confidence_masks"),Jr(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>to(this,r,!0,!this.j)),mt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],mt(this,i)})),this.outputCategoryMask&&(ne(e,"category_mask"),Kt(n,"CATEGORY_MASK:category_mask"),Jr(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=to(this,i,!1,!this.j),mt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,mt(this,i)})),ne(e,"quality_scores"),Kt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,mt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Mn.prototype.getLabels=Mn.prototype.Da,Mn.prototype.segmentForVideo=Mn.prototype.La,Mn.prototype.segment=Mn.prototype.segment,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(e,t){return Qt(Mn,e,{baseOptions:{modelAssetPath:t}})},Mn.createFromModelBuffer=function(e,t){return Qt(Mn,e,{baseOptions:{modelAssetBuffer:t}})},Mn.createFromOptions=function(e,t){return Qt(Mn,e,t)};var Qh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};Qh.prototype.close=Qh.prototype.close;var yi=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ff,this.u=new bg,Pt(this.h,0,3,this.u),Pt(e=this.h,0,1,t=new Pe)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new wg,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new kc;gs(r,3,$o(!0),!1),gs(r,1,Io(t.keypoint.x),0),gs(r,2,Io(t.keypoint.y),0),Oo(i,1,qh,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new YE;for(r of t.scribble)gs(t=new kc,3,$o(!0),!1),gs(t,1,Io(r.x),0),gs(t,2,Io(r.y),0),Hu(a,1,kc,t);Oo(i,2,qh,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),_i(this,e,s);t:{try{const a=new Qh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break t}this.j(a)}finally{Xl(this)}o=void 0}return o}m(){var e=new Gn;we(e,"image_in"),we(e,"roi_in"),we(e,"norm_rect_in");const t=new Vn;Fi(t,Ag,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),Ee(n,"IMAGE:image_in"),Ee(n,"ROI:roi_in"),Ee(n,"NORM_RECT:norm_rect_in"),n.o(t),ti(e,n),Wl(this,e),this.outputConfidenceMasks&&(ne(e,"confidence_masks"),Kt(n,"CONFIDENCE_MASKS:confidence_masks"),Jr(this,"confidence_masks"),this.g.aa("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>to(this,r,!0,!this.j)),mt(this,s)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],mt(this,i)})),this.outputCategoryMask&&(ne(e,"category_mask"),Kt(n,"CATEGORY_MASK:category_mask"),Jr(this,"category_mask"),this.g.Z("category_mask",(i,s)=>{this.categoryMask=to(this,i,!1,!this.j),mt(this,s)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,mt(this,i)})),ne(e,"quality_scores"),Kt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,mt(this,s)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};yi.prototype.segment=yi.prototype.segment,yi.prototype.setOptions=yi.prototype.o,yi.createFromModelPath=function(e,t){return Qt(yi,e,{baseOptions:{modelAssetPath:t}})},yi.createFromModelBuffer=function(e,t){return Qt(yi,e,{baseOptions:{modelAssetBuffer:t}})},yi.createFromOptions=function(e,t){return Qt(yi,e,t)};var qn=class extends kn{constructor(e,t){super(new gi(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Pt(e=this.h=new Cg,0,1,t=new Pe)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?fe(this.h,2,oa(e.displayNamesLocale)):"displayNamesLocale"in e&&fe(this.h,2),e.maxResults!==void 0?ss(this.h,3,e.maxResults):"maxResults"in e&&fe(this.h,3),e.scoreThreshold!==void 0?Ct(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&fe(this.h,4),e.categoryAllowlist!==void 0?hl(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&fe(this.h,5),e.categoryDenylist!==void 0?hl(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&fe(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},_i(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},Oi(this,e,n,t),this.j}m(){var e=new Gn;we(e,"input_frame_gpu"),we(e,"norm_rect"),ne(e,"detections");const t=new Vn;Fi(t,qE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ee(n,"IMAGE:input_frame_gpu"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"DETECTIONS:detections"),n.o(t),ti(e,n),this.g.attachProtoVectorListener("detections",(i,s)=>{for(const r of i)i=rg(r),this.j.detections.push(Lg(i));mt(this,s)}),this.g.attachEmptyPacketListener("detections",i=>{mt(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};qn.prototype.detectForVideo=qn.prototype.G,qn.prototype.detect=qn.prototype.F,qn.prototype.setOptions=qn.prototype.o,qn.createFromModelPath=async function(e,t){return Qt(qn,e,{baseOptions:{modelAssetPath:t}})},qn.createFromModelBuffer=function(e,t){return Qt(qn,e,{baseOptions:{modelAssetBuffer:t}})},qn.createFromOptions=function(e,t){return Qt(qn,e,t)};var tu=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function tm(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function em(e){try{const t=new tu(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{Xl(e)}}tu.prototype.close=tu.prototype.close;var Sn=class extends kn{constructor(e,t){super(new gi(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Pt(e=this.h=new Rg,0,1,t=new Pe),this.A=new Mg,Pt(this.h,0,3,this.A),this.j=new xg,Pt(this.h,0,2,this.j),ss(this.j,4,1),Ct(this.j,2,.5),Ct(this.A,2,.5),Ct(this.h,4,.5)}get baseOptions(){return ee(this.h,Pe,1)}set baseOptions(e){Pt(this.h,0,1,e)}o(e){return"numPoses"in e&&ss(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&Ct(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&Ct(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&Ct(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,tm(this),_i(this,e,i),em(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,tm(this),Oi(this,e,s,t),em(this)}m(){var e=new Gn;we(e,"image_in"),we(e,"norm_rect"),ne(e,"normalized_landmarks"),ne(e,"world_landmarks"),ne(e,"segmentation_masks");const t=new Vn;Fi(t,jE,this.h);const n=new bn;Bn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ee(n,"IMAGE:image_in"),Ee(n,"NORM_RECT:norm_rect"),Kt(n,"NORM_LANDMARKS:normalized_landmarks"),Kt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),ti(e,n),Wl(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(const r of i)i=ca(r),this.landmarks.push(Hl(i));mt(this,s)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],mt(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(const r of i)i=Br(r),this.worldLandmarks.push(ko(i));mt(this,s)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],mt(this,i)}),this.outputSegmentationMasks&&(Kt(n,"SEGMENTATION_MASK:segmentation_masks"),Jr(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>to(this,r,!0,!this.u)),mt(this,s)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],mt(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Sn.prototype.detectForVideo=Sn.prototype.G,Sn.prototype.detect=Sn.prototype.F,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(e,t){return Qt(Sn,e,{baseOptions:{modelAssetPath:t}})},Sn.createFromModelBuffer=function(e,t){return Qt(Sn,e,{baseOptions:{modelAssetBuffer:t}})},Sn.createFromOptions=function(e,t){return Qt(Sn,e,t)},Sn.POSE_CONNECTIONS=Yg;class ib{constructor(){this.landmarker=null,this.lastResult=null,this.ready=!1,this._lastTimestamp=-1}async init(){try{const t=await Pr.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");this.landmarker=await Sn.createFromOptions(t,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task",delegate:"GPU"},runningMode:"VIDEO",numPoses:1}),this.ready=!0}catch(t){console.warn("PoseDetector init failed:",t.message),this.ready=!1}}detect(t){if(!this.ready||!this.landmarker)return null;const n=performance.now();if(n<=this._lastTimestamp)return this.lastResult;this._lastTimestamp=n;try{const i=this.landmarker.detectForVideo(t,n);i.landmarks&&i.landmarks.length>0?this.lastResult=i.landmarks[0]:this.lastResult=null}catch{this.lastResult=null}return this.lastResult}}const sb=11,rb=15,ob=12,ab=16,lb=0;class cb{constructor(){this.calibrated=!1,this.restNoseY=.35,this._handsAbove=!0,this._stateChanges=[],this._lastFlapTime=0,this.flapStrength=0,this.roll=0,this.pitch=0,this.wingSpread=1,this.gesture="GLIDE",this._diveActive=!1,this._diveCounter=0,this._missingFrames=0,this._lastGesture="GLIDE",this._gestureHoldTime=0,this.leftVisible=!1,this.rightVisible=!1}calibrate(t){if(!t)return;const n=t[lb];n&&(this.restNoseY=n.y),this.calibrated=!0}_isVisible(t){return t?(t.visibility??1)>.3&&t.x>.02&&t.x<.98:!1}analyze(t){const n=performance.now();if(!t||t.length<17)return this._missingFrames++,this._missingFrames>5&&(this.flapStrength*=.85,this.roll*=.9,this.pitch*=.9,this.wingSpread+=(1-this.wingSpread)*.1,this._diveActive=!1,this._diveCounter=0,this.gesture="NO TRACKING"),this._output();this._missingFrames=0;const i=t[sb],s=t[rb],r=t[ob],o=t[ab];if(this.leftVisible=this._isVisible(s)&&this._isVisible(i),this.rightVisible=this._isVisible(o)&&this._isVisible(r),!this.leftVisible&&!this.rightVisible)return this.wingSpread+=(1-this.wingSpread)*.1,this._diveActive=!1,this._diveCounter=0,this.gesture="GLIDE",this._output();let a=!1,l=!1,c=0,h=0;this.leftVisible&&(c=i.y-s.y,a=c>.02),this.rightVisible&&(h=r.y-o.y,l=h>.02),this.leftVisible&&!this.rightVisible?(l=a,h=c):this.rightVisible&&!this.leftVisible&&(a=l,c=h);const f=a&&l,u=!a&&!l,d=(c+h)/2,g=this._handsAbove;this._handsAbove=f,f!==g&&this._stateChanges.push(n),this._stateChanges=this._stateChanges.filter(w=>n-w<3e3);let x=0;for(let w=1;w<this._stateChanges.length;w++)this._stateChanges[w]-this._stateChanges[w-1]<1500?x++:x=0;x>=3?(this.flapStrength=Ms(this._stateChanges.length/6,.5,1),this._lastFlapTime=n):n-this._lastFlapTime<400?this.flapStrength=Math.max(this.flapStrength*.9,.3):(this.flapStrength*=.85,this.flapStrength<.05&&(this.flapStrength=0));const m=this.flapStrength>.1;u&&!m?this._diveCounter=Math.min(this._diveCounter+1,20):this._diveCounter=Math.max(this._diveCounter-2,0),this._diveCounter>=8&&(this._diveActive=!0),this._diveCounter<3&&(this._diveActive=!1);const p=h-c,S=Ms(p*2.5,-1,1);this.roll+=(S-this.roll)*.04;let b;m?b=.1:b=Ms(d*3,-.7,.7),this.pitch+=(b-this.pitch)*.04;const y=n-this._lastFlapTime<600;let C;y?C=1:C=Ms(RS(d,-.12,.06,0,1),0,1),this.wingSpread+=(C-this.wingSpread)*.05;let A;return this._diveActive?A="DIVE":m?A="FLAP!":this.pitch>.15?A="CLIMB":this.pitch<-.15?A="DIVE":Math.abs(this.roll)>.12?A=this.roll>0?"TURN LEFT":"TURN RIGHT":A="GLIDE",A!==this._lastGesture?n-this._gestureHoldTime>300&&(this.gesture=A,this._lastGesture=A,this._gestureHoldTime=n):(this.gesture=A,this._gestureHoldTime=n),this._output()}_output(){return{flapStrength:this.flapStrength,roll:this.roll,pitch:this.pitch,wingSpread:this.wingSpread,diveActive:this._diveActive}}}class hb{constructor(){this.active=!1,this._steps=[],this._currentStep=0,this._stepTimer=0}start(t){this._steps=t,this._currentStep=0,this._stepTimer=0,this.active=!0,console.log(`Autopilot started: ${t.length} steps`)}stop(){this.active=!1,this._steps=[],console.log("Autopilot stopped")}update(t,n){if(!this.active||this._currentStep>=this._steps.length)return this.active&&(this.active=!1,console.log("Autopilot sequence complete")),!1;const i=this._steps[this._currentStep];this._stepTimer+=t;const s=i.action;return n.lift=0,n.roll=0,n.pitch=0,n.wingSpread=1,(s==="flap"||s==="flapLeft"||s==="flapRight"||s==="flapClimb")&&(n.lift=1),s==="dive"&&(n.wingSpread=0,n.pitch=-.5),(s==="climb"||s==="flapClimb")&&(n.pitch=.6),(s==="turnLeft"||s==="flapLeft")&&(n.roll=1),(s==="turnRight"||s==="flapRight")&&(n.roll=-1),this._stepTimer>=i.duration&&(this._stepTimer=0,this._currentStep++,this._currentStep<this._steps.length&&console.log(`Autopilot step ${this._currentStep}/${this._steps.length}: ${this._steps[this._currentStep].action}`)),!0}}const ub=[{action:"flapClimb",duration:3},{action:"glide",duration:2},{action:"flapLeft",duration:3},{action:"glide",duration:2},{action:"flapRight",duration:3},{action:"flap",duration:2},{action:"dive",duration:3},{action:"flapClimb",duration:3},{action:"turnLeft",duration:4},{action:"glide",duration:3}],Ef=qM(),bf=ES(Ef),Js=new Ln(Fh,window.innerWidth/window.innerHeight,xS,MS);Js.position.set(0,80,150);window.addEventListener("resize",()=>{Js.aspect=window.innerWidth/window.innerHeight,Js.updateProjectionMatrix()});const ir=new UM(Js,Ef.domElement);ir.target.set(0,20,0);ir.enableDamping=!0;ir.dampingFactor=.1;const eu=my(bf),li=new gy;let ml=0;for(let e=-200;e<=200;e+=50)for(let t=-200;t<=200;t+=50)ml=Math.max(ml,En(e,t,eu.arcs));li.position.y=ml+80;li.altitude=li.position.y;console.log(`Spawn height: ${li.position.y.toFixed(0)}m (terrain max nearby: ${ml.toFixed(0)}m)`);const Co=new _y(li),fb=new vy(Js,li),jn=new TS;jn.onModeChange=e=>{In&&(e?In.hide():In.show())};const qs=new AS,Jo=new hb;window.__scene=bf;window.__startAutopilot=e=>{Kn||(Kn=!0,ir.enabled=!1,qs.el.style.display="block",qs.flapIndicator.style.display="flex"),Jo.start(e||ub)};window.__stopAutopilot=()=>Jo.stop();const Qo=new xy,zo=new ib,gl=new cb;let In=null,Tf=!1,Kn=!0;async function db(){const e=await Qo.init();if(!e){console.warn("Webcam not available, using keyboard only.");return}if(await zo.init(),!zo.ready){console.warn("Pose detection not available, using keyboard only.");return}In=new CS(e),Tf=!0,jn.poseAvailable=!0,jn.forceKeyboard?In.hide():In.show(),setTimeout(()=>{const t=zo.detect(Qo.video);t&&(gl.calibrate(t),console.log("Pose calibrated! Raise and lower arms to fly."))},2e3)}window.addEventListener("keydown",e=>{if(e.code==="KeyF"&&(Kn=!Kn,ir.enabled=!Kn,qs.el.style.display=Kn?"block":"none",qs.flapIndicator.style.display=Kn?"flex":"none",Kn&&In?In.show():In&&In.hide(),qs.hint.innerHTML=Kn?"SPACE = Flap &nbsp;|&nbsp; A/D = Turn &nbsp;|&nbsp; W = Dive &nbsp;|&nbsp; S = Climb &nbsp;|&nbsp; T = Toggle Webcam/Keys &nbsp;|&nbsp; F = Debug Cam &nbsp;|&nbsp; C = Recalibrate":"F = Enter Flight Mode &nbsp;|&nbsp; Mouse = Orbit Camera"),e.code==="KeyP"&&(Jo.active?Jo.stop():window.__startAutopilot()),e.code==="KeyR"&&!Kn&&(localStorage.removeItem("world_arcs"),localStorage.removeItem("world_heightmap"),localStorage.removeItem("world_resolution"),localStorage.removeItem("world_version"),console.log("World cache cleared — reloading..."),location.reload()),e.code==="KeyC"&&Kn&&Tf){const t=zo.detect(Qo.video);t&&(gl.calibrate(t),console.log("Recalibrated!"))}});ir.enabled=!1;qs.hint.innerHTML="SPACE = Flap &nbsp;|&nbsp; A/D = Turn &nbsp;|&nbsp; W = Dive &nbsp;|&nbsp; S = Climb &nbsp;|&nbsp; T = Toggle Webcam/Keys &nbsp;|&nbsp; F = Debug Cam &nbsp;|&nbsp; P = Autopilot";const qg=new bS;qg.onUpdate(e=>{if(eu.update(e,Js,li.altitude),Kn){if(Tf&&Qo.ready){const n=zo.detect(Qo.video),i=gl.analyze(n);jn.setPoseInput(i),In&&(In.drawSkeleton(n),In.showGesture(gl.gesture))}jn.update(e),Jo.update(e,jn),li.wingSpread=jn.wingSpread,Co.flap(jn.lift),Co.applyRoll(jn.roll,e),Co.applyPitch(jn.pitch,e),Co.update(e);const t=En(li.position.x,li.position.z,eu.arcs);Co.enforceGround(t),fb.update(e),qs.update(li,jn.lift>0,jn.source)}else ir.update();Ef.render(bf,Js)});qg.start();db();
