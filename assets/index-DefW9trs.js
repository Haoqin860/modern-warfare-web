(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qa="166",kc=0,wo=1,Hc=2,ql=1,Kl=2,On=3,Jn=0,He=1,Ne=2,Vn=0,$e=1,Ze=2,bo=3,Eo=4,Vc=5,fi=100,Gc=101,Wc=102,Xc=103,Yc=104,qc=200,Kc=201,Zc=202,$c=203,ma=204,ga=205,jc=206,Qc=207,Jc=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,ah=0,oh=1,lh=2,pr=3,ch=4,hh=5,uh=6,dh=7,Zl=0,fh=1,ph=2,An=0,$l=1,jl=2,Ql=3,Jl=4,mh=5,tc=6,ec=7,nc=300,Zi=301,$i=302,mr=303,_a=304,br=306,ji=1e3,mi=1001,va=1002,Ge=1003,gh=1004,Ds=1005,gn=1006,Ir=1007,gi=1008,Wn=1009,ic=1010,sc=1011,Es=1012,Ja=1013,vi=1014,kn=1015,Cn=1016,to=1017,eo=1018,Qi=1020,rc=35902,ac=1021,oc=1022,rn=1023,lc=1024,cc=1025,qi=1026,Ji=1027,hc=1028,no=1029,uc=1030,io=1031,so=1033,lr=33776,cr=33777,hr=33778,ur=33779,xa=35840,Ma=35841,Sa=35842,ya=35843,wa=36196,ba=37492,Ea=37496,Ta=37808,Aa=37809,Ca=37810,Ra=37811,Pa=37812,La=37813,Da=37814,Ia=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,za=37820,Ba=37821,dr=36492,ka=36494,Ha=36495,dc=36283,Va=36284,Ga=36285,Wa=36286,_h=3200,vh=3201,fc=0,xh=1,Bn="",Pe="srgb",ti="srgb-linear",ro="display-p3",Er="display-p3-linear",gr="linear",re="srgb",_r="rec709",vr="p3",Si=7680,To=519,Mh=512,Sh=513,yh=514,pc=515,wh=516,bh=517,Eh=518,Th=519,Xa=35044,Ao="300 es",Hn=2e3,xr=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Co=1234567;const ws=Math.PI/180,Ts=180/Math.PI;function Gn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Be(s,t,e){return Math.max(t,Math.min(e,s))}function ao(s,t){return(s%t+t)%t}function Ah(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ch(s,t,e){return s!==t?(e-s)/(t-s):0}function bs(s,t,e){return(1-e)*s+e*t}function Rh(s,t,e,n){return bs(s,t,1-Math.exp(-e*n))}function Ph(s,t=1){return t-Math.abs(ao(s,t*2)-t)}function Lh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Dh(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ih(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Uh(s,t){return s+Math.random()*(t-s)}function Nh(s){return s*(.5-Math.random())}function Fh(s){s!==void 0&&(Co=s);let t=Co+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Oh(s){return s*ws}function zh(s){return s*Ts}function Bh(s){return(s&s-1)===0&&s!==0}function kh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vh(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*m,o*c);break;case"YXY":s.set(l*m,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ee(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Qe={DEG2RAD:ws,RAD2DEG:Ts,generateUUID:Gn,clamp:Be,euclideanModulo:ao,mapLinear:Ah,inverseLerp:Ch,lerp:bs,damp:Rh,pingpong:Ph,smoothstep:Lh,smootherstep:Dh,randInt:Ih,randFloat:Uh,randFloatSpread:Nh,seededRandom:Fh,degToRad:Oh,radToDeg:zh,isPowerOfTwo:Bh,ceilPowerOfTwo:kh,floorPowerOfTwo:Hh,setQuaternionFromProperEuler:Vh,normalize:ee,denormalize:_n};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],S=i[1],y=i[4],b=i[7],U=i[2],A=i[5],T=i[8];return r[0]=a*_+o*S+l*U,r[3]=a*p+o*y+l*A,r[6]=a*f+o*b+l*T,r[1]=c*_+h*S+d*U,r[4]=c*p+h*y+d*A,r[7]=c*f+h*b+d*T,r[2]=u*_+m*S+g*U,r[5]=u*p+m*y+g*A,r[8]=u*f+m*b+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,m=c*r-a*l,g=e*d+n*u+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=m*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ur.makeScale(t,e)),this}rotate(t){return this.premultiply(Ur.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ur.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Ft;function mc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Mr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gh(){const s=Mr("canvas");return s.style.display="block",s}const Ro={};function oo(s){s in Ro||(Ro[s]=!0,console.warn(s))}function Wh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Po=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lo=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[ti]:{transfer:gr,primaries:_r,toReference:s=>s,fromReference:s=>s},[Pe]:{transfer:re,primaries:_r,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Er]:{transfer:gr,primaries:vr,toReference:s=>s.applyMatrix3(Lo),fromReference:s=>s.applyMatrix3(Po)},[ro]:{transfer:re,primaries:vr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lo),fromReference:s=>s.applyMatrix3(Po).convertLinearToSRGB()}},Xh=new Set([ti,Er]),Jt={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Xh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Is[t].toReference,i=Is[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Is[s].primaries},getTransfer:function(s){return s===Bn?gr:Is[s].transfer}};function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yi;class Yh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=Mr("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ki(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ki(e[n]/255)*255):e[n]=Ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qh=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fr(i[a].image)):r.push(Fr(i[a]))}else r=Fr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kh=0;class Fe extends ns{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=mi,i=mi,r=gn,a=gi,o=rn,l=Wn,c=Fe.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Gn(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=nc;Fe.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(m+1)/2,U=(f+1)/2,A=(h+u)/4,T=(d+_)/4,D=(g+p)/4;return y>b&&y>U?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=T/n):b>U?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=A/i,r=D/i):U<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(U),n=T/r,i=D/r),this.set(n,i,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zh extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new gc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _c extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $h extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==m||h!==g){let p=1-o;const f=l*u+c*m+h*g+d*_,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const U=Math.sqrt(y),A=Math.atan2(U,f*S);p=Math.sin(p*A)/U,o=Math.sin(o*A)/U}const b=o*S;if(l=l*p+u*b,c=c*p+m*b,h=h*p+g*b,d=d*p+_*b,p===1-o){const U=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=U,c*=U,h*=U,d*=U}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*u,t[e+1]=l*g+h*u+c*d-o*m,t[e+2]=c*g+h*m+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),m=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"YXZ":this._x=u*h*d+c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"ZXY":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d-u*m*g;break;case"ZYX":this._x=u*h*d-c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d+u*m*g;break;case"YZX":this._x=u*h*d+c*m*g,this._y=c*m*d+u*h*g,this._z=c*h*g-u*m*d,this._w=c*h*d-u*m*g;break;case"XZY":this._x=u*h*d-c*m*g,this._y=c*m*d-u*h*g,this._z=c*h*g+u*m*d,this._w=c*h*d+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Do.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Do.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new E,Do=new xi;class Cs{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Ns.subVectors(this.max,os),wi.subVectors(t.a,os),bi.subVectors(t.b,os),Ei.subVectors(t.c,os),Yn.subVectors(bi,wi),qn.subVectors(Ei,bi),ni.subVectors(wi,Ei);let e=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-ni.z,ni.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,ni.z,0,-ni.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-ni.y,ni.x,0];return!zr(e,wi,bi,Ei,Ns)||(e=[1,0,0,0,1,0,0,0,1],!zr(e,wi,bi,Ei,Ns))?!1:(Fs.crossVectors(Yn,qn),e=[Fs.x,Fs.y,Fs.z],zr(e,wi,bi,Ei,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new E,new E,new E,new E,new E,new E,new E,new E],hn=new E,Us=new Cs,wi=new E,bi=new E,Ei=new E,Yn=new E,qn=new E,ni=new E,os=new E,Ns=new E,Fs=new E,ii=new E;function zr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ii.fromArray(s,r);const o=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jh=new Cs,ls=new E,Br=new E;class lo{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ls.subVectors(t,this.center);const e=ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ls.copy(t.center).add(Br)),this.expandByPoint(ls.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new E,kr=new E,Os=new E,Kn=new E,Hr=new E,zs=new E,Vr=new E;class vc{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){kr.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Os),o=Kn.dot(this.direction),l=-Kn.dot(Os),c=Kn.lengthSq(),h=Math.abs(1-a*a);let d,u,m,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,m=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(kr).addScaledVector(Os,u),m}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,i,r){Hr.subVectors(e,t),zs.subVectors(n,t),Vr.crossVectors(Hr,zs);let a=this.direction.dot(Vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Kn.subVectors(this.origin,t);const l=o*this.direction.dot(zs.crossVectors(Kn,zs));if(l<0)return null;const c=o*this.direction.dot(Hr.cross(Kn));if(c<0||l+c>a)return null;const h=-o*Kn.dot(Vr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,i,r,a,o,l,c,h,d,u,m,g,_,p){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,d,u,m,g,_,p)}set(t,e,n,i,r,a,o,l,c,h,d,u,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ti.setFromMatrixColumn(t,0).length(),r=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,m=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,m=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,m=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,m=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qh,t,Jh)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Zn.crossVectors(n,Ye),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Zn.crossVectors(n,Ye)),Zn.normalize(),Bs.crossVectors(Ye,Zn),i[0]=Zn.x,i[4]=Bs.x,i[8]=Ye.x,i[1]=Zn.y,i[5]=Bs.y,i[9]=Ye.y,i[2]=Zn.z,i[6]=Bs.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],S=n[3],y=n[7],b=n[11],U=n[15],A=i[0],T=i[4],D=i[8],w=i[12],x=i[1],R=i[5],z=i[9],F=i[13],W=i[2],V=i[6],B=i[10],q=i[14],G=i[3],at=i[7],gt=i[11],_t=i[15];return r[0]=a*A+o*x+l*W+c*G,r[4]=a*T+o*R+l*V+c*at,r[8]=a*D+o*z+l*B+c*gt,r[12]=a*w+o*F+l*q+c*_t,r[1]=h*A+d*x+u*W+m*G,r[5]=h*T+d*R+u*V+m*at,r[9]=h*D+d*z+u*B+m*gt,r[13]=h*w+d*F+u*q+m*_t,r[2]=g*A+_*x+p*W+f*G,r[6]=g*T+_*R+p*V+f*at,r[10]=g*D+_*z+p*B+f*gt,r[14]=g*w+_*F+p*q+f*_t,r[3]=S*A+y*x+b*W+U*G,r[7]=S*T+y*R+b*V+U*at,r[11]=S*D+y*z+b*B+U*gt,r[15]=S*w+y*F+b*q+U*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+r*l*d-i*c*d-r*o*u+n*c*u+i*o*m-n*l*m)+_*(+e*l*m-e*c*u+r*a*u-i*a*m+i*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+f*(-i*o*h-e*l*d+e*o*u+i*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],S=d*p*c-_*u*c+_*l*m-o*p*m-d*l*f+o*u*f,y=g*u*c-h*p*c-g*l*m+a*p*m+h*l*f-a*u*f,b=h*_*c-g*d*c+g*o*m-a*_*m-h*o*f+a*d*f,U=g*d*l-h*_*l-g*o*u+a*_*u+h*o*p-a*d*p,A=e*S+n*y+i*b+r*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=S*T,t[1]=(_*u*r-d*p*r-_*i*m+n*p*m+d*i*f-n*u*f)*T,t[2]=(o*p*r-_*l*r+_*i*c-n*p*c-o*i*f+n*l*f)*T,t[3]=(d*l*r-o*u*r-d*i*c+n*u*c+o*i*m-n*l*m)*T,t[4]=y*T,t[5]=(h*p*r-g*u*r+g*i*m-e*p*m-h*i*f+e*u*f)*T,t[6]=(g*l*r-a*p*r-g*i*c+e*p*c+a*i*f-e*l*f)*T,t[7]=(a*u*r-h*l*r+h*i*c-e*u*c-a*i*m+e*l*m)*T,t[8]=b*T,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*f-e*d*f)*T,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*m-e*o*m)*T,t[12]=U*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*p+e*d*p)*T,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*T,t[15]=(a*d*i-h*o*i+h*n*l-e*d*l-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,m=r*h,g=r*d,_=a*h,p=a*d,f=o*d,S=l*c,y=l*h,b=l*d,U=n.x,A=n.y,T=n.z;return i[0]=(1-(_+f))*U,i[1]=(m+b)*U,i[2]=(g-y)*U,i[3]=0,i[4]=(m-b)*A,i[5]=(1-(u+f))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(g+y)*T,i[9]=(p-S)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ti.set(i[0],i[1],i[2]).length();const a=Ti.set(i[4],i[5],i[6]).length(),o=Ti.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);const c=1/r,h=1/a,d=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=d,un.elements[9]*=d,un.elements[10]*=d,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Hn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let m,g;if(o===Hn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Hn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*c,m=(n+i)*h;let g,_;if(o===Hn)g=(a+r)*d,_=-2*d;else if(o===xr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new E,un=new le,Qh=new E(0,0,0),Jh=new E(1,1,1),Zn=new E,Bs=new E,Ye=new E,Io=new le,Uo=new xi;class Sn{constructor(t=0,e=0,n=0,i=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Io.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Io,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class co{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tu=0;const No=new E,Ai=new xi,In=new le,ks=new E,cs=new E,eu=new E,nu=new xi,Fo=new E(1,0,0),Oo=new E(0,1,0),zo=new E(0,0,1),Bo={type:"added"},iu={type:"removed"},Ci={type:"childadded",child:null},Gr={type:"childremoved",child:null};class xe extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new E,e=new Sn,n=new xi,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Ft}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(zo,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(zo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(cs,ks,this.up):In.lookAt(ks,cs,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(In),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bo),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(iu),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bo),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,t,eu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new E(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new E,Un=new E,Wr=new E,Nn=new E,Ri=new E,Pi=new E,ko=new E,Xr=new E,Yr=new E,qr=new E;class vn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){dn.subVectors(i,e),Un.subVectors(n,e),Wr.subVectors(t,e);const a=dn.dot(dn),o=dn.dot(Un),l=dn.dot(Wr),c=Un.dot(Un),h=Un.dot(Wr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),Un.subVectors(t,e),dn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),dn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ri.subVectors(i,n),Pi.subVectors(r,n),Xr.subVectors(t,n);const l=Ri.dot(Xr),c=Pi.dot(Xr);if(l<=0&&c<=0)return e.copy(n);Yr.subVectors(t,i);const h=Ri.dot(Yr),d=Pi.dot(Yr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ri,a);qr.subVectors(t,r);const m=Ri.dot(qr),g=Pi.dot(qr);if(g>=0&&m<=g)return e.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ko.subVectors(r,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(ko,o);const f=1/(p+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Kr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=ao(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kr(a,r,t+1/3),this.g=Kr(a,r,t),this.b=Kr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=xc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Jt.fromWorkingColorSpace(De.copy(this),t),Math.round(Be(De.r*255,0,255))*65536+Math.round(Be(De.g*255,0,255))*256+Math.round(Be(De.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,r=De.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Pe){Jt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Hs);const n=bs($n.h,Hs.h,e),i=bs($n.s,Hs.s,e),r=bs($n.l,Hs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Rt;Rt.NAMES=xc;let su=0;class is extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=$e,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$e&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Tn extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new E,Vs=new xt;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return oo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Xa&&(t.usage=this.usage),t}}class Mc extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sc extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ru=0;const Je=new le,Zr=new xe,Li=new E,qe=new Cs,hs=new Cs,we=new E;class ln extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mc(t)?Sc:Mc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Zr.lookAt(t),Zr.updateMatrix(),this.applyMatrix4(Zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(qe.min,hs.min),qe.expandByPoint(we),we.addVectors(qe.max,hs.max),qe.expandByPoint(we)):(qe.expandByPoint(hs.min),qe.expandByPoint(hs.max))}qe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(t,c),we.add(Li)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new E,l[D]=new E;const c=new E,h=new E,d=new E,u=new xt,m=new xt,g=new xt,_=new E,p=new E;function f(D,w,x){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,D),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),m.sub(u),g.sub(u);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(R),o[D].add(_),o[w].add(_),o[x].add(_),l[D].add(p),l[w].add(p),l[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,w=S.length;D<w;++D){const x=S[D],R=x.start,z=x.count;for(let F=R,W=R+z;F<W;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new E,b=new E,U=new E,A=new E;function T(D){U.fromBufferAttribute(i,D),A.copy(U);const w=o[D];y.copy(w),y.sub(U.multiplyScalar(U.dot(w))).normalize(),b.crossVectors(A,w);const R=b.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,R)}for(let D=0,w=S.length;D<w;++D){const x=S[D],R=x.start,z=x.count;for(let F=R,W=R+z;F<W;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,m=e.count;u<m;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[m++]}return new Mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],m=t(u,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ho=new le,si=new vc,Gs=new lo,Vo=new E,Di=new E,Ii=new E,Ui=new E,$r=new E,Ws=new E,Xs=new xt,Ys=new xt,qs=new xt,Go=new E,Wo=new E,Xo=new E,Ks=new E,Zs=new E;class bt extends xe{constructor(t=new ln,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ws.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&($r.fromBufferAttribute(d,t),a?Ws.addScaledVector($r,h):Ws.addScaledVector($r.sub(e),h))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(r),si.copy(t.ray).recast(t.near),!(Gs.containsPoint(si.origin)===!1&&(si.intersectSphere(Gs,Vo)===null||si.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(Ho.copy(r).invert(),si.copy(t.ray).applyMatrix4(Ho),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,U=y;b<U;b+=3){const A=o.getX(b),T=o.getX(b+1),D=o.getX(b+2);i=$s(this,f,t,n,c,h,d,A,T,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=o.getX(p),y=o.getX(p+1),b=o.getX(p+2);i=$s(this,a,t,n,c,h,d,S,y,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],f=a[p.materialIndex],S=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,U=y;b<U;b+=3){const A=b,T=b+1,D=b+2;i=$s(this,f,t,n,c,h,d,A,T,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const S=p,y=p+1,b=p+2;i=$s(this,a,t,n,c,h,d,S,y,b),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function au(s,t,e,n,i,r,a,o){let l;if(t.side===He?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Jn,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:s}}function $s(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,Di),s.getVertexPosition(l,Ii),s.getVertexPosition(c,Ui);const h=au(s,t,e,n,Di,Ii,Ui,Ks);if(h){i&&(Xs.fromBufferAttribute(i,o),Ys.fromBufferAttribute(i,l),qs.fromBufferAttribute(i,c),h.uv=vn.getInterpolation(Ks,Di,Ii,Ui,Xs,Ys,qs,new xt)),r&&(Xs.fromBufferAttribute(r,o),Ys.fromBufferAttribute(r,l),qs.fromBufferAttribute(r,c),h.uv1=vn.getInterpolation(Ks,Di,Ii,Ui,Xs,Ys,qs,new xt)),a&&(Go.fromBufferAttribute(a,o),Wo.fromBufferAttribute(a,l),Xo.fromBufferAttribute(a,c),h.normal=vn.getInterpolation(Ks,Di,Ii,Ui,Go,Wo,Xo,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new E,materialIndex:0};vn.getNormal(Di,Ii,Ui,d.normal),h.face=d}return h}class Me extends ln{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(d,2));function g(_,p,f,S,y,b,U,A,T,D,w){const x=b/T,R=U/D,z=b/2,F=U/2,W=A/2,V=T+1,B=D+1;let q=0,G=0;const at=new E;for(let gt=0;gt<B;gt++){const _t=gt*R-F;for(let Gt=0;Gt<V;Gt++){const ne=Gt*x-z;at[_]=ne*S,at[p]=_t*y,at[f]=W,c.push(at.x,at.y,at.z),at[_]=0,at[p]=0,at[f]=A>0?1:-1,h.push(at.x,at.y,at.z),d.push(Gt/T),d.push(1-gt/D),q+=1}}for(let gt=0;gt<D;gt++)for(let _t=0;_t<T;_t++){const Gt=u+_t+V*gt,ne=u+_t+V*(gt+1),X=u+(_t+1)+V*(gt+1),J=u+(_t+1)+V*gt;l.push(Gt,ne,J),l.push(ne,X,J),G+=6}o.addGroup(m,G,w),m+=G,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ts(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=ts(s[e]);for(const i in n)t[i]=n[i]}return t}function ou(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const As={clone:ts,merge:ze};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Hn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new E,Yo=new xt,qo=new xt;class Ve extends wc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Yo,qo),e.subVectors(qo,Yo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Fi=1;class hu extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(Ni,Fi,t,e);i.layers=this.layers,this.add(i);const r=new Ve(Ni,Fi,t,e);r.layers=this.layers,this.add(r);const a=new Ve(Ni,Fi,t,e);a.layers=this.layers,this.add(a);const o=new Ve(Ni,Fi,t,e);o.layers=this.layers,this.add(o);const l=new Ve(Ni,Fi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(Ni,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bc extends Fe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uu extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new bc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Me(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Vn});r.uniforms.tEquirect.value=e;const a=new bt(i,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=gn),new hu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const jr=new E,du=new E,fu=new Ft;class hi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=jr.subVectors(n,e).cross(du.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fu.getNormalMatrix(t),i=this.coplanarPoint(jr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new lo,js=new E;class ho{constructor(t=new hi,e=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],S=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-r,u-c,p-m,b-f).normalize(),n[1].setComponents(l+r,u+c,p+m,b+f).normalize(),n[2].setComponents(l+a,u+h,p+g,b+S).normalize(),n[3].setComponents(l-a,u-h,p-g,b-S).normalize(),n[4].setComponents(l-o,u-d,p-_,b-y).normalize(),e===Hn)n[5].setComponents(l+o,u+d,p+_,b+y).normalize();else if(e===xr)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(js.x=i.normal.x>0?t.max.x:t.min.x,js.y=i.normal.y>0?t.max.y:t.min.y,js.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function pu(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(s.bindBuffer(c,o),d.count===-1&&u.length===0&&s.bufferSubData(c,0,h),u.length!==0){for(let m=0,g=u.length;m<g;m++){const _=u[m];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Ue extends ln{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=t/o,u=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){const S=f*u-a;for(let y=0;y<c;y++){const b=y*d-r;g.push(b,-S,0),_.push(0,0,1),p.push(y/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const y=S+c*f,b=S+c*(f+1),U=S+1+c*(f+1),A=S+1+c*f;m.push(y,b,A),m.push(b,U,A)}this.setIndex(m),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.widthSegments,t.heightSegments)}}var mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
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
#endif`,_u=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Su=`#ifdef USE_AOMAP
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
#endif`,yu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wu=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ru=`#ifdef USE_BUMPMAP
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
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ou=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zu=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Bu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ku=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qu=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
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
#endif`,od=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bd=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Od=`#ifdef USE_NORMALMAP
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
#endif`,zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jd=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sf=`#ifdef USE_SKINNING
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
#endif`,rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,af=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cf=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hf=`#ifdef USE_TRANSMISSION
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gf=`uniform sampler2D t2D;
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
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sf=`#include <common>
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
}`,yf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wf=`#define DISTANCE
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
}`,bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`uniform float scale;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Rf=`#include <common>
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#define LAMBERT
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
}`,Df=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,If=`#define MATCAP
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
}`,Uf=`#define MATCAP
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
}`,Nf=`#define NORMAL
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
}`,Ff=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Of=`#define PHONG
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
}`,zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Bf=`#define STANDARD
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
}`,kf=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Hf=`#define TOON
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
}`,Vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Gf=`uniform float size;
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#include <common>
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
}`,Yf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:mu,alphahash_pars_fragment:gu,alphamap_fragment:_u,alphamap_pars_fragment:vu,alphatest_fragment:xu,alphatest_pars_fragment:Mu,aomap_fragment:Su,aomap_pars_fragment:yu,batching_pars_vertex:wu,batching_vertex:bu,begin_vertex:Eu,beginnormal_vertex:Tu,bsdfs:Au,iridescence_fragment:Cu,bumpmap_pars_fragment:Ru,clipping_planes_fragment:Pu,clipping_planes_pars_fragment:Lu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Iu,color_fragment:Uu,color_pars_fragment:Nu,color_pars_vertex:Fu,color_vertex:Ou,common:zu,cube_uv_reflection_fragment:Bu,defaultnormal_vertex:ku,displacementmap_pars_vertex:Hu,displacementmap_vertex:Vu,emissivemap_fragment:Gu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:Yu,envmap_fragment:qu,envmap_common_pars_fragment:Ku,envmap_pars_fragment:Zu,envmap_pars_vertex:$u,envmap_physical_pars_fragment:od,envmap_vertex:ju,fog_vertex:Qu,fog_pars_vertex:Ju,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:sd,lights_lambert_pars_fragment:rd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:hd,lights_phong_pars_fragment:ud,lights_physical_fragment:dd,lights_physical_pars_fragment:fd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:_d,logdepthbuf_pars_fragment:vd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:yd,map_particle_fragment:wd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphinstance_vertex:Ad,morphcolor_vertex:Cd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:Od,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:kd,iridescence_pars_fragment:Hd,opaque_fragment:Vd,packing:Gd,premultiplied_alpha_fragment:Wd,project_vertex:Xd,dithering_fragment:Yd,dithering_pars_fragment:qd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:Zd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:Jd,skinbase_vertex:tf,skinning_pars_vertex:ef,skinning_vertex:nf,skinnormal_vertex:sf,specularmap_fragment:rf,specularmap_pars_fragment:af,tonemapping_fragment:of,tonemapping_pars_fragment:lf,transmission_fragment:cf,transmission_pars_fragment:hf,uv_pars_fragment:uf,uv_pars_vertex:df,uv_vertex:ff,worldpos_vertex:pf,background_vert:mf,background_frag:gf,backgroundCube_vert:_f,backgroundCube_frag:vf,cube_vert:xf,cube_frag:Mf,depth_vert:Sf,depth_frag:yf,distanceRGBA_vert:wf,distanceRGBA_frag:bf,equirect_vert:Ef,equirect_frag:Tf,linedashed_vert:Af,linedashed_frag:Cf,meshbasic_vert:Rf,meshbasic_frag:Pf,meshlambert_vert:Lf,meshlambert_frag:Df,meshmatcap_vert:If,meshmatcap_frag:Uf,meshnormal_vert:Nf,meshnormal_frag:Ff,meshphong_vert:Of,meshphong_frag:zf,meshphysical_vert:Bf,meshphysical_frag:kf,meshtoon_vert:Hf,meshtoon_frag:Vf,points_vert:Gf,points_frag:Wf,shadow_vert:Xf,shadow_frag:Yf,sprite_vert:qf,sprite_frag:Kf},st={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},En={basic:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:ze([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:ze([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:ze([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:ze([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:ze([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:ze([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:ze([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:ze([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:ze([st.common,st.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:ze([st.lights,st.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};En.physical={uniforms:ze([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Qs={r:0,b:0,g:0},ai=new Sn,Zf=new le;function $f(s,t,e,n,i,r,a){const o=new Rt(0);let l=r===!0?0:1,c,h,d=null,u=0,m=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const b=g(S);b===null?f(o,l):b&&b.isColor&&(f(b,1),y=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(S,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===br)?(h===void 0&&(h=new bt(new Me(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:ts(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ai.copy(y.backgroundRotation),ai.x*=-1,ai.y*=-1,ai.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(ai)),h.material.toneMapped=Jt.getTransfer(b.colorSpace)!==re,(d!==b||u!==b.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,m=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new bt(new Ue(2,2),new ke({name:"BackgroundMaterial",uniforms:ts(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(b.colorSpace)!==re,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,m=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,y){S.getRGB(Qs,yc(s)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:_,addToRenderList:p}}function jf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(x,R,z,F,W){let V=!1;const B=d(F,z,R);r!==B&&(r=B,c(r.object)),V=m(x,F,z,W),V&&g(x,F,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(x,R,z,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function d(x,R,z){const F=z.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let V=W[R.id];V===void 0&&(V={},W[R.id]=V);let B=V[F];return B===void 0&&(B=u(l()),V[F]=B),B}function u(x){const R=[],z=[],F=[];for(let W=0;W<e;W++)R[W]=0,z[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,R,z,F){const W=r.attributes,V=R.attributes;let B=0;const q=z.getAttributes();for(const G in q)if(q[G].location>=0){const gt=W[G];let _t=V[G];if(_t===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),gt===void 0||gt.attribute!==_t||_t&&gt.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(x,R,z,F){const W={},V=R.attributes;let B=0;const q=z.getAttributes();for(const G in q)if(q[G].location>=0){let gt=V[G];gt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor));const _t={};_t.attribute=gt,gt&&gt.data&&(_t.data=gt.data),W[G]=_t,B++}r.attributes=W,r.attributesNum=B,r.index=F}function _(){const x=r.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function p(x){f(x,0)}function f(x,R){const z=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;z[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),W[x]!==R&&(s.vertexAttribDivisor(x,R),W[x]=R)}function S(){const x=r.newAttributes,R=r.enabledAttributes;for(let z=0,F=R.length;z<F;z++)R[z]!==x[z]&&(s.disableVertexAttribArray(z),R[z]=0)}function y(x,R,z,F,W,V,B){B===!0?s.vertexAttribIPointer(x,R,z,W,V):s.vertexAttribPointer(x,R,z,F,W,V)}function b(x,R,z,F){_();const W=F.attributes,V=z.getAttributes(),B=R.defaultAttributeValues;for(const q in V){const G=V[q];if(G.location>=0){let at=W[q];if(at===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){const gt=at.normalized,_t=at.itemSize,Gt=t.get(at);if(Gt===void 0)continue;const ne=Gt.buffer,X=Gt.type,J=Gt.bytesPerElement,ft=X===s.INT||X===s.UNSIGNED_INT||at.gpuType===Ja;if(at.isInterleavedBufferAttribute){const ct=at.data,Dt=ct.stride,Ot=at.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<G.locationSize;kt++)f(G.location+kt,ct.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<G.locationSize;kt++)p(G.location+kt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let kt=0;kt<G.locationSize;kt++)y(G.location+kt,_t/G.locationSize,X,gt,Dt*J,(Ot+_t/G.locationSize*kt)*J,ft)}else{if(at.isInstancedBufferAttribute){for(let ct=0;ct<G.locationSize;ct++)f(G.location+ct,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ct=0;ct<G.locationSize;ct++)p(G.location+ct);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let ct=0;ct<G.locationSize;ct++)y(G.location+ct,_t/G.locationSize,X,gt,_t*J,_t/G.locationSize*ct*J,ft)}}else if(B!==void 0){const gt=B[q];if(gt!==void 0)switch(gt.length){case 2:s.vertexAttrib2fv(G.location,gt);break;case 3:s.vertexAttrib3fv(G.location,gt);break;case 4:s.vertexAttrib4fv(G.location,gt);break;default:s.vertexAttrib1fv(G.location,gt)}}}}S()}function U(){D();for(const x in n){const R=n[x];for(const z in R){const F=R[z];for(const W in F)h(F[W].object),delete F[W];delete R[z]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const z in R){const F=R[z];for(const W in F)h(F[W].object),delete F[W];delete R[z]}delete n[x.id]}function T(x){for(const R in n){const z=n[R];if(z[x.id]===void 0)continue;const F=z[x.id];for(const W in F)h(F[W].object),delete F[W];delete z[x.id]}}function D(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function Qf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function l(c,h,d,u){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==rn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!T)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:f,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:b,maxSamples:U}}function tp(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new hi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||i;return i=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const S=r?0:n,y=S*4;let b=f.clippingState||null;l.value=b,b=h(g,u,y,m);for(let U=0;U!==y;++U)b[U]=e[U];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let y=0,b=m;y!==_;++y,b+=4)a.copy(d[y]).applyMatrix4(S,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function ep(s){let t=new WeakMap;function e(a,o){return o===mr?a.mapping=Zi:o===_a&&(a.mapping=$i),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mr||o===_a)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uu(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uo extends wc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Yi=4,Ko=[.125,.215,.35,.446,.526,.582],pi=20,Qr=new uo,Zo=new Rt;let Jr=null,ta=0,ea=0,na=!1;const ui=(1+Math.sqrt(5))/2,Oi=1/ui,$o=[new E(-ui,Oi,0),new E(ui,Oi,0),new E(-Oi,0,ui),new E(Oi,0,ui),new E(0,ui,-Oi),new E(0,ui,Oi),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class Ya{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Jr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Jr,ta,ea),this._renderer.xr.enabled=na,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jr=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Cn,format:rn,colorSpace:ti,depthBuffer:!1},i=jo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=np(r)),this._blurMaterial=ip(r,t,e)}return i}_compileMaterial(t){const e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,i){const o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Zo),h.toneMapping=An,h.autoClear=!1;const m=new Tn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new bt(new Me,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Zo),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):S===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const y=this._cubeSize;Js(i,S*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===$i;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=$o[(i-r-1)%$o.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new bt(this._lodPlanes[i],c),u=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const f=[];let S=0;for(let T=0;T<pi;++T){const D=T/_,w=Math.exp(-D*D/2);f.push(w),T===0?S+=w:T<p&&(S+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const b=this._sizeLods[i],U=3*b*(i>y-Yi?i-y+Yi:0),A=4*(this._cubeSize-b);Js(e,U,A,3*b,2*b),l.setRenderTarget(e),l.render(d,Qr)}}function np(s){const t=[],e=[],n=[];let i=s;const r=s-Yi+1+Ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Yi?l=Ko[a-s+Yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),y=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,D=A>2?0:-1,w=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];S.set(w,_*g*A),y.set(u,p*g*A);const x=[A,A,A,A,A,A];b.set(x,f*g*A)}const U=new ln;U.setAttribute("position",new Mn(S,_)),U.setAttribute("uv",new Mn(y,p)),U.setAttribute("faceIndex",new Mn(b,f)),t.push(U),i>Yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function jo(s,t,e){const n=new on(s,t,e);return n.texture.mapping=br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ip(s,t,e){const n=new Float32Array(pi),i=new E(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Qo(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Jo(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}function sp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===mr||l===_a,h=l===Zi||l===$i;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Ya(s)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Ya(s)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rp(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ap(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}u.removeEventListener("dispose",a),delete i[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],s.ARRAY_BUFFER)}}function c(d){const u=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let y=0,b=S.length;y<b;y+=3){const U=S[y+0],A=S[y+1],T=S[y+2];u.push(U,A,A,T,T,U)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,b=S.length/3-1;y<b;y+=3){const U=y+0,A=y+1,T=y+2;u.push(U,A,A,T,T,U)}}else return;const p=new(mc(u)?Sc:Mc)(u,1);p.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,p)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function op(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,m){s.drawElements(n,m,r,u*a),e.update(m,n,1)}function c(u,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,u*a,g),e.update(m,n,g))}function h(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];e.update(p,n,1)}function d(u,m,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<u.length;f++)c(u[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=m[S];for(let S=0;S<_.length;S++)e.update(f,n,_[S])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function lp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cp(s,t,e){const n=new WeakMap,i=new oe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let x=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let U=o.attributes.position.count*b,A=1;U>t.maxTextureSize&&(A=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const T=new Float32Array(U*A*4*d),D=new _c(T,U,A,d);D.type=kn,D.needsUpdate=!0;const w=b*4;for(let R=0;R<d;R++){const z=f[R],F=S[R],W=y[R],V=U*A*4*R;for(let B=0;B<z.count;B++){const q=B*w;g===!0&&(i.fromBufferAttribute(z,B),T[V+q+0]=i.x,T[V+q+1]=i.y,T[V+q+2]=i.z,T[V+q+3]=0),_===!0&&(i.fromBufferAttribute(F,B),T[V+q+4]=i.x,T[V+q+5]=i.y,T[V+q+6]=i.z,T[V+q+7]=0),p===!0&&(i.fromBufferAttribute(W,B),T[V+q+8]=i.x,T[V+q+9]=i.y,T[V+q+10]=i.z,T[V+q+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:D,size:new xt(U,A)},n.set(o,u),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function hp(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Tc extends Fe{constructor(t,e,n,i,r,a,o,l,c,h=qi){if(h!==qi&&h!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===qi&&(n=vi),n===void 0&&h===Ji&&(n=Qi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ac=new Fe,tl=new Tc(1,1),Cc=new _c,Rc=new $h,Pc=new bc,el=[],nl=[],il=new Float32Array(16),sl=new Float32Array(9),rl=new Float32Array(4);function ss(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=el[i];if(r===void 0&&(r=new Float32Array(i),el[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Tr(s,t){let e=nl[t];e===void 0&&(e=new Int32Array(t),nl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function up(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function mp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;rl.set(n),s.uniformMatrix2fv(this.addr,!1,rl),ye(e,n)}}function gp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;sl.set(n),s.uniformMatrix3fv(this.addr,!1,sl),ye(e,n)}}function _p(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;il.set(n),s.uniformMatrix4fv(this.addr,!1,il),ye(e,n)}}function vp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Sp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function yp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function wp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Ep(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Tp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(tl.compareFunction=pc,r=tl):r=Ac,e.setTexture2D(t||r,i)}function Ap(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rc,i)}function Cp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Pc,i)}function Rp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cc,i)}function Pp(s){switch(s){case 5126:return up;case 35664:return dp;case 35665:return fp;case 35666:return pp;case 35674:return mp;case 35675:return gp;case 35676:return _p;case 5124:case 35670:return vp;case 35667:case 35671:return xp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return yp;case 36294:return wp;case 36295:return bp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ap;case 35680:case 36300:case 36308:case 36293:return Cp;case 36289:case 36303:case 36311:case 36292:return Rp}}function Lp(s,t){s.uniform1fv(this.addr,t)}function Dp(s,t){const e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function Ip(s,t){const e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function Up(s,t){const e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function Np(s,t){const e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Fp(s,t){const e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Op(s,t){const e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zp(s,t){s.uniform1iv(this.addr,t)}function Bp(s,t){s.uniform2iv(this.addr,t)}function kp(s,t){s.uniform3iv(this.addr,t)}function Hp(s,t){s.uniform4iv(this.addr,t)}function Vp(s,t){s.uniform1uiv(this.addr,t)}function Gp(s,t){s.uniform2uiv(this.addr,t)}function Wp(s,t){s.uniform3uiv(this.addr,t)}function Xp(s,t){s.uniform4uiv(this.addr,t)}function Yp(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ac,r[a])}function qp(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Rc,r[a])}function Kp(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Pc,r[a])}function Zp(s,t,e){const n=this.cache,i=t.length,r=Tr(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Cc,r[a])}function $p(s){switch(s){case 5126:return Lp;case 35664:return Dp;case 35665:return Ip;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return zp;case 35667:case 35671:return Bp;case 35668:case 35672:return kp;case 35669:case 35673:return Hp;case 5125:return Vp;case 36294:return Gp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}class jp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pp(e.type)}}class Qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$p(e.type)}}class Jp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function al(s,t){s.seq.push(t),s.map[t.id]=t}function tm(s,t,e){const n=s.name,i=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){al(e,c===void 0?new jp(o,s,t):new Qp(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Jp(o),al(e,d)),e=d}}}class fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);tm(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ol(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const em=37297;let nm=0;function im(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function sm(s){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(s);let n;switch(t===e?n="":t===vr&&e===_r?n="LinearDisplayP3ToLinearSRGB":t===_r&&e===vr&&(n="LinearSRGBToLinearDisplayP3"),s){case ti:case Er:return[n,"LinearTransferOETF"];case Pe:case ro:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ll(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+im(s.getShaderSource(t),a)}else return i}function rm(s,t){const e=sm(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function am(s,t){let e;switch(t){case $l:e="Linear";break;case jl:e="Reinhard";break;case Ql:e="OptimizedCineon";break;case Jl:e="ACESFilmic";break;case tc:e="AgX";break;case ec:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function om(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function lm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cm(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ss(s){return s!==""}function cl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(s){return s.replace(hm,dm)}const um=new Map;function dm(s,t){let e=Nt[t];if(e===void 0){const n=um.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qa(e)}const fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(s){return s.replace(fm,pm)}function pm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function mm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function gm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zi:case $i:t="ENVMAP_TYPE_CUBE";break;case br:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _m(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function vm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zl:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function xm(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Mm(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=mm(e),c=gm(e),h=_m(e),d=vm(e),u=xm(e),m=om(e),g=lm(r),_=i.createProgram();let p,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),f.length>0&&(f+=`
`)):(p=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),f=[dl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Nt.tonemapping_pars_fragment:"",e.toneMapping!==An?am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,rm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),a=qa(a),a=cl(a,e),a=hl(a,e),o=qa(o),o=cl(o,e),o=hl(o,e),a=ul(a),o=ul(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=S+p+a,b=S+f+o,U=ol(i,i.VERTEX_SHADER,y),A=ol(i,i.FRAGMENT_SHADER,b);i.attachShader(_,U),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(U).trim(),W=i.getShaderInfoLog(A).trim();let V=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,U,A);else{const q=ll(i,U,"vertex"),G=ll(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+q+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(B=!1);B&&(R.diagnostics={runnable:V,programLog:z,vertexShader:{log:F,prefix:p},fragmentShader:{log:W,prefix:f}})}i.deleteShader(U),i.deleteShader(A),D=new fr(i,_),w=cm(i,_)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,em)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=nm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=A,this}let Sm=0;class ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wm(t),e.set(t,n)),n}}class wm{constructor(t){this.id=Sm++,this.code=t,this.usedTimes=0}}function bm(s,t,e,n,i,r,a){const o=new co,l=new ym,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,x,R,z,F){const W=z.fog,V=F.geometry,B=w.isMeshStandardMaterial?z.environment:null,q=(w.isMeshStandardMaterial?e:t).get(w.envMap||B),G=q&&q.mapping===br?q.image.height:null,at=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const gt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=gt!==void 0?gt.length:0;let Gt=0;V.morphAttributes.position!==void 0&&(Gt=1),V.morphAttributes.normal!==void 0&&(Gt=2),V.morphAttributes.color!==void 0&&(Gt=3);let ne,X,J,ft;if(at){const Kt=En[at];ne=Kt.vertexShader,X=Kt.fragmentShader}else ne=w.vertexShader,X=w.fragmentShader,l.update(w),J=l.getVertexShaderID(w),ft=l.getFragmentShaderID(w);const ct=s.getRenderTarget(),Dt=F.isInstancedMesh===!0,Ot=F.isBatchedMesh===!0,kt=!!w.map,he=!!w.matcap,P=!!q,pe=!!w.aoMap,te=!!w.lightMap,ie=!!w.bumpMap,Mt=!!w.normalMap,me=!!w.displacementMap,Pt=!!w.emissiveMap,It=!!w.metalnessMap,C=!!w.roughnessMap,v=w.anisotropy>0,H=w.clearcoat>0,$=w.dispersion>0,Q=w.iridescence>0,Z=w.sheen>0,St=w.transmission>0,rt=v&&!!w.anisotropyMap,ht=H&&!!w.clearcoatMap,Ut=H&&!!w.clearcoatNormalMap,tt=H&&!!w.clearcoatRoughnessMap,lt=Q&&!!w.iridescenceMap,Wt=Q&&!!w.iridescenceThicknessMap,Ct=Z&&!!w.sheenColorMap,ut=Z&&!!w.sheenRoughnessMap,Lt=!!w.specularMap,zt=!!w.specularColorMap,ce=!!w.specularIntensityMap,L=St&&!!w.transmissionMap,et=St&&!!w.thicknessMap,Y=!!w.gradientMap,K=!!w.alphaMap,it=w.alphaTest>0,Et=!!w.alphaHash,qt=!!w.extensions;let ge=An;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ge=s.toneMapping);const Ce={shaderID:at,shaderType:w.type,shaderName:w.name,vertexShader:ne,fragmentShader:X,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&F._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&F.instanceColor!==null,instancingMorph:Dt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:ti,alphaToCoverage:!!w.alphaToCoverage,map:kt,matcap:he,envMap:P,envMapMode:P&&q.mapping,envMapCubeUVHeight:G,aoMap:pe,lightMap:te,bumpMap:ie,normalMap:Mt,displacementMap:u&&me,emissiveMap:Pt,normalMapObjectSpace:Mt&&w.normalMapType===xh,normalMapTangentSpace:Mt&&w.normalMapType===fc,metalnessMap:It,roughnessMap:C,anisotropy:v,anisotropyMap:rt,clearcoat:H,clearcoatMap:ht,clearcoatNormalMap:Ut,clearcoatRoughnessMap:tt,dispersion:$,iridescence:Q,iridescenceMap:lt,iridescenceThicknessMap:Wt,sheen:Z,sheenColorMap:Ct,sheenRoughnessMap:ut,specularMap:Lt,specularColorMap:zt,specularIntensityMap:ce,transmission:St,transmissionMap:L,thicknessMap:et,gradientMap:Y,opaque:w.transparent===!1&&w.blending===$e&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:it,alphaHash:Et,combine:w.combine,mapUv:kt&&_(w.map.channel),aoMapUv:pe&&_(w.aoMap.channel),lightMapUv:te&&_(w.lightMap.channel),bumpMapUv:ie&&_(w.bumpMap.channel),normalMapUv:Mt&&_(w.normalMap.channel),displacementMapUv:me&&_(w.displacementMap.channel),emissiveMapUv:Pt&&_(w.emissiveMap.channel),metalnessMapUv:It&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:rt&&_(w.anisotropyMap.channel),clearcoatMapUv:ht&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:ut&&_(w.sheenRoughnessMap.channel),specularMapUv:Lt&&_(w.specularMap.channel),specularColorMapUv:zt&&_(w.specularColorMap.channel),specularIntensityMapUv:ce&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:et&&_(w.thicknessMap.channel),alphaMapUv:K&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Mt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(kt||K),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:kt&&w.map.isVideoTexture===!0&&Jt.getTransfer(w.map.colorSpace)===re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ne,flipSided:w.side===He,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:qt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&w.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function f(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)x.push(R),x.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(S(x,w),y(x,w),x.push(s.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function S(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function y(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),w.push(o.mask)}function b(w){const x=g[w.type];let R;if(x){const z=En[x];R=As.clone(z.uniforms)}else R=w.uniforms;return R}function U(w,x){let R;for(let z=0,F=h.length;z<F;z++){const W=h[z];if(W.cacheKey===x){R=W,++R.usedTimes;break}}return R===void 0&&(R=new Mm(s,x,w,r),h.push(R)),R}function A(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function T(w){l.remove(w)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:U,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:D}}function Em(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Tm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,m,g,_,p){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=p),t++,f}function o(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(d,u,m,g,_,p){const f=a(d,u,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Tm),n.length>1&&n.sort(u||fl),i.length>1&&i.sort(u||fl)}function h(){for(let d=t,u=s.length;d<u;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Am(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new pl,s.set(n,[a])):i>=r.length?(a=new pl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Rt};break;case"SpotLight":e={position:new E,direction:new E,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function Rm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pm=0;function Lm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Dm(s){const t=new Cm,e=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new le,a=new le;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,S=0,y=0,b=0,U=0,A=0,T=0;c.sort(Lm);for(let w=0,x=c.length;w<x;w++){const R=c[w],z=R.color,F=R.intensity,W=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*F,d+=z.g*F,u+=z.b*F;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],F);T++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const q=R.shadow,G=e.get(R);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=B,m++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(z).multiplyScalar(F),B.distance=W,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;const q=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,q.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=V,b++}_++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(z).multiplyScalar(F),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=B,p++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const q=R.shadow,G=e.get(R);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(F),B.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=B,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==y||D.numSpotShadows!==b||D.numSpotMaps!==U||D.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+U-A,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=y,D.numSpotShadows=b,D.numSpotMaps=U,D.numLightProbes=T,n.version=Pm++)}function l(c,h){let d=0,u=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const y=c[f];if(y.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(y.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function ml(s){const t=new Dm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Im(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new ml(s),t.set(i,[o])):r>=a.length?(o=new ml(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Um extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nm extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zm(s,t,e){let n=new ho;const i=new xt,r=new xt,a=new oe,o=new Um({depthPacking:vh}),l=new Nm,c={},h=e.maxTextureSize,d={[Jn]:He,[He]:Jn,[Ne]:Ne},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Fm,fragmentShader:Om}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let f=this.type;this.render=function(A,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=f!==On&&this.type===On,W=f===On&&this.type!==On;for(let V=0,B=A.length;V<B;V++){const q=A[V],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const at=G.getFrameExtents();if(i.multiply(at),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/at.x),i.x=r.x*at.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/at.y),i.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||F===!0||W===!0){const _t=this.type!==On?{minFilter:Ge,magFilter:Ge}:{};G.map!==null&&G.map.dispose(),G.map=new on(i.x,i.y,_t),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const gt=G.getViewportCount();for(let _t=0;_t<gt;_t++){const Gt=G.getViewport(_t);a.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),z.viewport(a),G.updateMatrices(q,_t),n=G.getFrustum(),b(T,D,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===On&&S(G,D),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(w,x,R)};function S(A,T){const D=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new on(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,D,u,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,D,m,_,null)}function y(A,T,D,w){let x=null;const R=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=D.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=x.uuid,F=T.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let V=W[F];V===void 0&&(V=x.clone(),W[F]=V,T.addEventListener("dispose",U)),x=V}if(x.visible=T.visible,x.wireframe=T.wireframe,w===On?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=s.properties.get(x);z.light=D}return x}function b(A,T,D,w,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===On)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=t.update(A),W=A.material;if(Array.isArray(W)){const V=F.groups;for(let B=0,q=V.length;B<q;B++){const G=V[B],at=W[G.materialIndex];if(at&&at.visible){const gt=y(A,at,w,x);A.onBeforeShadow(s,A,T,D,F,gt,G),s.renderBufferDirect(D,null,F,gt,A,G),A.onAfterShadow(s,A,T,D,F,gt,G)}}}else if(W.visible){const V=y(A,W,w,x);A.onBeforeShadow(s,A,T,D,F,V,null),s.renderBufferDirect(D,null,F,V,A,null),A.onAfterShadow(s,A,T,D,F,V,null)}}const z=A.children;for(let F=0,W=z.length;F<W;F++)b(z[F],T,D,w,x)}function U(A){A.target.removeEventListener("dispose",U);for(const D in c){const w=c[D],x=A.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}function Bm(s){function t(){let L=!1;const et=new oe;let Y=null;const K=new oe(0,0,0,0);return{setMask:function(it){Y!==it&&!L&&(s.colorMask(it,it,it,it),Y=it)},setLocked:function(it){L=it},setClear:function(it,Et,qt,ge,Ce){Ce===!0&&(it*=ge,Et*=ge,qt*=ge),et.set(it,Et,qt,ge),K.equals(et)===!1&&(s.clearColor(it,Et,qt,ge),K.copy(et))},reset:function(){L=!1,Y=null,K.set(-1,0,0,0)}}}function e(){let L=!1,et=null,Y=null,K=null;return{setTest:function(it){it?ft(s.DEPTH_TEST):ct(s.DEPTH_TEST)},setMask:function(it){et!==it&&!L&&(s.depthMask(it),et=it)},setFunc:function(it){if(Y!==it){switch(it){case ah:s.depthFunc(s.NEVER);break;case oh:s.depthFunc(s.ALWAYS);break;case lh:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case ch:s.depthFunc(s.EQUAL);break;case hh:s.depthFunc(s.GEQUAL);break;case uh:s.depthFunc(s.GREATER);break;case dh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=it}},setLocked:function(it){L=it},setClear:function(it){K!==it&&(s.clearDepth(it),K=it)},reset:function(){L=!1,et=null,Y=null,K=null}}}function n(){let L=!1,et=null,Y=null,K=null,it=null,Et=null,qt=null,ge=null,Ce=null;return{setTest:function(Kt){L||(Kt?ft(s.STENCIL_TEST):ct(s.STENCIL_TEST))},setMask:function(Kt){et!==Kt&&!L&&(s.stencilMask(Kt),et=Kt)},setFunc:function(Kt,Pn,wn){(Y!==Kt||K!==Pn||it!==wn)&&(s.stencilFunc(Kt,Pn,wn),Y=Kt,K=Pn,it=wn)},setOp:function(Kt,Pn,wn){(Et!==Kt||qt!==Pn||ge!==wn)&&(s.stencilOp(Kt,Pn,wn),Et=Kt,qt=Pn,ge=wn)},setLocked:function(Kt){L=Kt},setClear:function(Kt){Ce!==Kt&&(s.clearStencil(Kt),Ce=Kt)},reset:function(){L=!1,et=null,Y=null,K=null,it=null,Et=null,qt=null,ge=null,Ce=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],m=null,g=!1,_=null,p=null,f=null,S=null,y=null,b=null,U=null,A=new Rt(0,0,0),T=0,D=!1,w=null,x=null,R=null,z=null,F=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=B>=2);let G=null,at={};const gt=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),Gt=new oe().fromArray(gt),ne=new oe().fromArray(_t);function X(L,et,Y,K){const it=new Uint8Array(4),Et=s.createTexture();s.bindTexture(L,Et),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<Y;qt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(et+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return Et}const J={};J[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),r.setFunc(pr),ie(!1),Mt(wo),ft(s.CULL_FACE),pe(Vn);function ft(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function ct(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function Dt(L,et){return h[L]!==et?(s.bindFramebuffer(L,et),h[L]=et,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=et),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=et),!0):!1}function Ot(L,et){let Y=u,K=!1;if(L){Y=d.get(et),Y===void 0&&(Y=[],d.set(et,Y));const it=L.textures;if(Y.length!==it.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,qt=it.length;Et<qt;Et++)Y[Et]=s.COLOR_ATTACHMENT0+Et;Y.length=it.length,K=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,K=!0);K&&s.drawBuffers(Y)}function kt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const he={[fi]:s.FUNC_ADD,[Gc]:s.FUNC_SUBTRACT,[Wc]:s.FUNC_REVERSE_SUBTRACT};he[Xc]=s.MIN,he[Yc]=s.MAX;const P={[qc]:s.ZERO,[Kc]:s.ONE,[Zc]:s.SRC_COLOR,[ma]:s.SRC_ALPHA,[eh]:s.SRC_ALPHA_SATURATE,[Jc]:s.DST_COLOR,[jc]:s.DST_ALPHA,[$c]:s.ONE_MINUS_SRC_COLOR,[ga]:s.ONE_MINUS_SRC_ALPHA,[th]:s.ONE_MINUS_DST_COLOR,[Qc]:s.ONE_MINUS_DST_ALPHA,[nh]:s.CONSTANT_COLOR,[ih]:s.ONE_MINUS_CONSTANT_COLOR,[sh]:s.CONSTANT_ALPHA,[rh]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(L,et,Y,K,it,Et,qt,ge,Ce,Kt){if(L===Vn){g===!0&&(ct(s.BLEND),g=!1);return}if(g===!1&&(ft(s.BLEND),g=!0),L!==Vc){if(L!==_||Kt!==D){if((p!==fi||y!==fi)&&(s.blendEquation(s.FUNC_ADD),p=fi,y=fi),Kt)switch(L){case $e:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ze:s.blendFunc(s.ONE,s.ONE);break;case bo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case $e:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ze:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,S=null,b=null,U=null,A.set(0,0,0),T=0,_=L,D=Kt}return}it=it||et,Et=Et||Y,qt=qt||K,(et!==p||it!==y)&&(s.blendEquationSeparate(he[et],he[it]),p=et,y=it),(Y!==f||K!==S||Et!==b||qt!==U)&&(s.blendFuncSeparate(P[Y],P[K],P[Et],P[qt]),f=Y,S=K,b=Et,U=qt),(ge.equals(A)===!1||Ce!==T)&&(s.blendColor(ge.r,ge.g,ge.b,Ce),A.copy(ge),T=Ce),_=L,D=!1}function te(L,et){L.side===Ne?ct(s.CULL_FACE):ft(s.CULL_FACE);let Y=L.side===He;et&&(Y=!Y),ie(Y),L.blending===$e&&L.transparent===!1?pe(Vn):pe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),i.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(L){w!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),w=L)}function Mt(L){L!==kc?(ft(s.CULL_FACE),L!==x&&(L===wo?s.cullFace(s.BACK):L===Hc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ct(s.CULL_FACE),x=L}function me(L){L!==R&&(V&&s.lineWidth(L),R=L)}function Pt(L,et,Y){L?(ft(s.POLYGON_OFFSET_FILL),(z!==et||F!==Y)&&(s.polygonOffset(et,Y),z=et,F=Y)):ct(s.POLYGON_OFFSET_FILL)}function It(L){L?ft(s.SCISSOR_TEST):ct(s.SCISSOR_TEST)}function C(L){L===void 0&&(L=s.TEXTURE0+W-1),G!==L&&(s.activeTexture(L),G=L)}function v(L,et,Y){Y===void 0&&(G===null?Y=s.TEXTURE0+W-1:Y=G);let K=at[Y];K===void 0&&(K={type:void 0,texture:void 0},at[Y]=K),(K.type!==L||K.texture!==et)&&(G!==Y&&(s.activeTexture(Y),G=Y),s.bindTexture(L,et||J[L]),K.type=L,K.texture=et)}function H(){const L=at[G];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(L){Gt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Gt.copy(L))}function ut(L){ne.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function Lt(L,et){let Y=l.get(et);Y===void 0&&(Y=new WeakMap,l.set(et,Y));let K=Y.get(L);K===void 0&&(K=s.getUniformBlockIndex(et,L.name),Y.set(L,K))}function zt(L,et){const K=l.get(et).get(L);o.get(et)!==K&&(s.uniformBlockBinding(et,K,L.__bindingPointIndex),o.set(et,K))}function ce(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},G=null,at={},h={},d=new WeakMap,u=[],m=null,g=!1,_=null,p=null,f=null,S=null,y=null,b=null,U=null,A=new Rt(0,0,0),T=0,D=!1,w=null,x=null,R=null,z=null,F=null,Gt.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ft,disable:ct,bindFramebuffer:Dt,drawBuffers:Ot,useProgram:kt,setBlending:pe,setMaterial:te,setFlipSided:ie,setCullFace:Mt,setLineWidth:me,setPolygonOffset:Pt,setScissorTest:It,activeTexture:C,bindTexture:v,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:lt,texImage3D:Wt,updateUBOMapping:Lt,uniformBlockBinding:zt,texStorage2D:Ut,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:rt,compressedTexSubImage3D:ht,scissor:Ct,viewport:ut,reset:ce}}function gl(s,t,e,n){const i=km(n);switch(e){case ac:return s*t;case lc:return s*t;case cc:return s*t*2;case hc:return s*t/i.components*i.byteLength;case no:return s*t/i.components*i.byteLength;case uc:return s*t*2/i.components*i.byteLength;case io:return s*t*2/i.components*i.byteLength;case oc:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case so:return s*t*4/i.components*i.byteLength;case lr:case cr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ma:case ya:return Math.max(s,16)*Math.max(t,8)/4;case xa:case Sa:return Math.max(s,8)*Math.max(t,8)/2;case wa:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case La:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case dr:case ka:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*16;case dc:case Va:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ga:case Wa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function km(s){switch(s){case Wn:case ic:return{byteLength:1,components:1};case Es:case sc:case Cn:return{byteLength:2,components:1};case to:case eo:return{byteLength:2,components:4};case vi:case Ja:case kn:return{byteLength:4,components:1};case rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Hm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return m?new OffscreenCanvas(C,v):Mr("canvas")}function _(C,v,H){let $=1;const Q=It(C);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor($*Q.width),St=Math.floor($*Q.height);d===void 0&&(d=g(Z,St));const rt=v?g(Z,St):d;return rt.width=Z,rt.height=St,rt.getContext("2d").drawImage(C,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+St+")."),rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==Ge&&C.minFilter!==gn}function f(C){s.generateMipmap(C)}function S(C,v,H,$,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=v;if(v===s.RED&&(H===s.FLOAT&&(Z=s.R32F),H===s.HALF_FLOAT&&(Z=s.R16F),H===s.UNSIGNED_BYTE&&(Z=s.R8)),v===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.R8UI),H===s.UNSIGNED_SHORT&&(Z=s.R16UI),H===s.UNSIGNED_INT&&(Z=s.R32UI),H===s.BYTE&&(Z=s.R8I),H===s.SHORT&&(Z=s.R16I),H===s.INT&&(Z=s.R32I)),v===s.RG&&(H===s.FLOAT&&(Z=s.RG32F),H===s.HALF_FLOAT&&(Z=s.RG16F),H===s.UNSIGNED_BYTE&&(Z=s.RG8)),v===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.RG8UI),H===s.UNSIGNED_SHORT&&(Z=s.RG16UI),H===s.UNSIGNED_INT&&(Z=s.RG32UI),H===s.BYTE&&(Z=s.RG8I),H===s.SHORT&&(Z=s.RG16I),H===s.INT&&(Z=s.RG32I)),v===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),v===s.RGBA){const St=Q?gr:Jt.getTransfer($);H===s.FLOAT&&(Z=s.RGBA32F),H===s.HALF_FLOAT&&(Z=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Z=St===re?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(C,v){let H;return C?v===null||v===vi||v===Qi?H=s.DEPTH24_STENCIL8:v===kn?H=s.DEPTH32F_STENCIL8:v===Es&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vi||v===Qi?H=s.DEPTH_COMPONENT24:v===kn?H=s.DEPTH_COMPONENT32F:v===Es&&(H=s.DEPTH_COMPONENT16),H}function b(C,v){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function U(C){const v=C.target;v.removeEventListener("dispose",U),T(v),v.isVideoTexture&&h.delete(v)}function A(C){const v=C.target;v.removeEventListener("dispose",A),w(v)}function T(C){const v=n.get(C);if(v.__webglInit===void 0)return;const H=C.source,$=u.get(H);if($){const Q=$[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(C),Object.keys($).length===0&&u.delete(H)}n.remove(C)}function D(C){const v=n.get(C);s.deleteTexture(v.__webglTexture);const H=C.source,$=u.get(H);delete $[v.__cacheKey],a.memory.textures--}function w(C){const v=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Q=0;Q<v.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(v.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)s.deleteFramebuffer(v.__webglFramebuffer[$]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=C.textures;for(let $=0,Q=H.length;$<Q;$++){const Z=n.get(H[$]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(C)}let x=0;function R(){x=0}function z(){const C=x;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),x+=1,C}function F(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function W(C,v){const H=n.get(C);if(C.isVideoTexture&&me(C),C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(H,C,v);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+v)}function V(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){ne(H,C,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+v)}function B(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){ne(H,C,v);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+v)}function q(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){X(H,C,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+v)}const G={[ji]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},at={[Ge]:s.NEAREST,[gh]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[gn]:s.LINEAR,[Ir]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},gt={[Mh]:s.NEVER,[Th]:s.ALWAYS,[Sh]:s.LESS,[pc]:s.LEQUAL,[yh]:s.EQUAL,[Eh]:s.GEQUAL,[wh]:s.GREATER,[bh]:s.NOTEQUAL};function _t(C,v){if(v.type===kn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===Ir||v.magFilter===Ds||v.magFilter===gi||v.minFilter===gn||v.minFilter===Ir||v.minFilter===Ds||v.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,G[v.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,G[v.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,G[v.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,at[v.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,at[v.minFilter]),v.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,gt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ge||v.minFilter!==Ds&&v.minFilter!==gi||v.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Gt(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",U));const $=v.source;let Q=u.get($);Q===void 0&&(Q={},u.set($,Q));const Z=F(v);if(Z!==C.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[Z].usedTimes++;const St=Q[C.__cacheKey];St!==void 0&&(Q[C.__cacheKey].usedTimes--,St.usedTimes===0&&D(v)),C.__cacheKey=Z,C.__webglTexture=Q[Z].texture}return H}function ne(C,v,H){let $=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=s.TEXTURE_3D);const Q=Gt(C,v),Z=v.source;e.bindTexture($,C.__webglTexture,s.TEXTURE0+H);const St=n.get(Z);if(Z.version!==St.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);const rt=Jt.getPrimaries(Jt.workingColorSpace),ht=v.colorSpace===Bn?null:Jt.getPrimaries(v.colorSpace),Ut=v.colorSpace===Bn||rt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let tt=_(v.image,!1,i.maxTextureSize);tt=Pt(v,tt);const lt=r.convert(v.format,v.colorSpace),Wt=r.convert(v.type);let Ct=S(v.internalFormat,lt,Wt,v.colorSpace,v.isVideoTexture);_t($,v);let ut;const Lt=v.mipmaps,zt=v.isVideoTexture!==!0,ce=St.__version===void 0||Q===!0,L=Z.dataReady,et=b(v,tt);if(v.isDepthTexture)Ct=y(v.format===Ji,v.type),ce&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,lt,Wt,null));else if(v.isDataTexture)if(Lt.length>0){zt&&ce&&e.texStorage2D(s.TEXTURE_2D,et,Ct,Lt[0].width,Lt[0].height);for(let Y=0,K=Lt.length;Y<K;Y++)ut=Lt[Y],zt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ut.width,ut.height,lt,Wt,ut.data):e.texImage2D(s.TEXTURE_2D,Y,Ct,ut.width,ut.height,0,lt,Wt,ut.data);v.generateMipmaps=!1}else zt?(ce&&e.texStorage2D(s.TEXTURE_2D,et,Ct,tt.width,tt.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,lt,Wt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,lt,Wt,tt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Ct,Lt[0].width,Lt[0].height,tt.depth);for(let Y=0,K=Lt.length;Y<K;Y++)if(ut=Lt[Y],v.format!==rn)if(lt!==null)if(zt){if(L)if(v.layerUpdates.size>0){const it=gl(ut.width,ut.height,v.format,v.type);for(const Et of v.layerUpdates){const qt=ut.data.subarray(Et*it/ut.data.BYTES_PER_ELEMENT,(Et+1)*it/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,Et,ut.width,ut.height,1,lt,qt,0,0)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,tt.depth,lt,ut.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Ct,ut.width,ut.height,tt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ut.width,ut.height,tt.depth,lt,Wt,ut.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Ct,ut.width,ut.height,tt.depth,0,lt,Wt,ut.data)}else{zt&&ce&&e.texStorage2D(s.TEXTURE_2D,et,Ct,Lt[0].width,Lt[0].height);for(let Y=0,K=Lt.length;Y<K;Y++)ut=Lt[Y],v.format!==rn?lt!==null?zt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ut.width,ut.height,lt,ut.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Ct,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ut.width,ut.height,lt,Wt,ut.data):e.texImage2D(s.TEXTURE_2D,Y,Ct,ut.width,ut.height,0,lt,Wt,ut.data)}else if(v.isDataArrayTexture)if(zt){if(ce&&e.texStorage3D(s.TEXTURE_2D_ARRAY,et,Ct,tt.width,tt.height,tt.depth),L)if(v.layerUpdates.size>0){const Y=gl(tt.width,tt.height,v.format,v.type);for(const K of v.layerUpdates){const it=tt.data.subarray(K*Y/tt.data.BYTES_PER_ELEMENT,(K+1)*Y/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,tt.width,tt.height,1,lt,Wt,it)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Wt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,lt,Wt,tt.data);else if(v.isData3DTexture)zt?(ce&&e.texStorage3D(s.TEXTURE_3D,et,Ct,tt.width,tt.height,tt.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Wt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,lt,Wt,tt.data);else if(v.isFramebufferTexture){if(ce)if(zt)e.texStorage2D(s.TEXTURE_2D,et,Ct,tt.width,tt.height);else{let Y=tt.width,K=tt.height;for(let it=0;it<et;it++)e.texImage2D(s.TEXTURE_2D,it,Ct,Y,K,0,lt,Wt,null),Y>>=1,K>>=1}}else if(Lt.length>0){if(zt&&ce){const Y=It(Lt[0]);e.texStorage2D(s.TEXTURE_2D,et,Ct,Y.width,Y.height)}for(let Y=0,K=Lt.length;Y<K;Y++)ut=Lt[Y],zt?L&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,lt,Wt,ut):e.texImage2D(s.TEXTURE_2D,Y,Ct,lt,Wt,ut);v.generateMipmaps=!1}else if(zt){if(ce){const Y=It(tt);e.texStorage2D(s.TEXTURE_2D,et,Ct,Y.width,Y.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Wt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,lt,Wt,tt);p(v)&&f($),St.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function X(C,v,H){if(v.image.length!==6)return;const $=Gt(C,v),Q=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const Z=n.get(Q);if(Q.version!==Z.__version||$===!0){e.activeTexture(s.TEXTURE0+H);const St=Jt.getPrimaries(Jt.workingColorSpace),rt=v.colorSpace===Bn?null:Jt.getPrimaries(v.colorSpace),ht=v.colorSpace===Bn||St===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const Ut=v.isCompressedTexture||v.image[0].isCompressedTexture,tt=v.image[0]&&v.image[0].isDataTexture,lt=[];for(let K=0;K<6;K++)!Ut&&!tt?lt[K]=_(v.image[K],!0,i.maxCubemapSize):lt[K]=tt?v.image[K].image:v.image[K],lt[K]=Pt(v,lt[K]);const Wt=lt[0],Ct=r.convert(v.format,v.colorSpace),ut=r.convert(v.type),Lt=S(v.internalFormat,Ct,ut,v.colorSpace),zt=v.isVideoTexture!==!0,ce=Z.__version===void 0||$===!0,L=Q.dataReady;let et=b(v,Wt);_t(s.TEXTURE_CUBE_MAP,v);let Y;if(Ut){zt&&ce&&e.texStorage2D(s.TEXTURE_CUBE_MAP,et,Lt,Wt.width,Wt.height);for(let K=0;K<6;K++){Y=lt[K].mipmaps;for(let it=0;it<Y.length;it++){const Et=Y[it];v.format!==rn?Ct!==null?zt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Et.width,Et.height,Ct,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Lt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,0,0,Et.width,Et.height,Ct,ut,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it,Lt,Et.width,Et.height,0,Ct,ut,Et.data)}}}else{if(Y=v.mipmaps,zt&&ce){Y.length>0&&et++;const K=It(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,et,Lt,K.width,K.height)}for(let K=0;K<6;K++)if(tt){zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,lt[K].width,lt[K].height,Ct,ut,lt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,lt[K].width,lt[K].height,0,Ct,ut,lt[K].data);for(let it=0;it<Y.length;it++){const qt=Y[it].image[K].image;zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,qt.width,qt.height,Ct,ut,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Lt,qt.width,qt.height,0,Ct,ut,qt.data)}}else{zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ct,ut,lt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Lt,Ct,ut,lt[K]);for(let it=0;it<Y.length;it++){const Et=Y[it];zt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,0,0,Ct,ut,Et.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it+1,Lt,Ct,ut,Et.image[K])}}}p(v)&&f(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function J(C,v,H,$,Q,Z){const St=r.convert(H.format,H.colorSpace),rt=r.convert(H.type),ht=S(H.internalFormat,St,rt,H.colorSpace);if(!n.get(v).__hasExternalTextures){const tt=Math.max(1,v.width>>Z),lt=Math.max(1,v.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,Z,ht,tt,lt,v.depth,0,St,rt,null):e.texImage2D(Q,Z,ht,tt,lt,0,St,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Mt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,n.get(H).__webglTexture,0,ie(v)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,n.get(H).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(C,v,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),v.depthBuffer){const $=v.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Z=y(v.stencilBuffer,Q),St=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=ie(v);Mt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Z,v.width,v.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,C)}else{const $=v.textures;for(let Q=0;Q<$.length;Q++){const Z=$[Q],St=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),ht=S(Z.internalFormat,St,rt,Z.colorSpace),Ut=ie(v);H&&Mt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,ht,v.width,v.height):Mt(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,ht,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,ht,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ct(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const $=n.get(v.depthTexture).__webglTexture,Q=ie(v);if(v.depthTexture.format===qi)Mt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(v.depthTexture.format===Ji)Mt(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Dt(C){const v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ct(v.__webglFramebuffer,C)}else if(H){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]=s.createRenderbuffer(),ft(v.__webglDepthbuffer[$],C,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),ft(v.__webglDepthbuffer,C,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(C,v,H){const $=n.get(C);v!==void 0&&J($.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Dt(C)}function kt(C){const v=C.texture,H=n.get(C),$=n.get(v);C.addEventListener("dispose",A);const Q=C.textures,Z=C.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=v.version,a.memory.textures++),Z){H.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[rt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)H.__webglFramebuffer[rt][ht]=s.createFramebuffer()}else H.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)H.__webglFramebuffer[rt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(St)for(let rt=0,ht=Q.length;rt<ht;rt++){const Ut=n.get(Q[rt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Mt(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let rt=0;rt<Q.length;rt++){const ht=Q[rt];H.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[rt]);const Ut=r.convert(ht.format,ht.colorSpace),tt=r.convert(ht.type),lt=S(ht.internalFormat,Ut,tt,ht.colorSpace,C.isXRRenderTarget===!0),Wt=ie(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,lt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,H.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),_t(s.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)J(H.__webglFramebuffer[rt][ht],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ht);else J(H.__webglFramebuffer[rt],C,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);p(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,ht=Q.length;rt<ht;rt++){const Ut=Q[rt],tt=n.get(Ut);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),_t(s.TEXTURE_2D,Ut),J(H.__webglFramebuffer,C,Ut,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),p(Ut)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(rt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,$.__webglTexture),_t(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)J(H.__webglFramebuffer[ht],C,v,s.COLOR_ATTACHMENT0,rt,ht);else J(H.__webglFramebuffer,C,v,s.COLOR_ATTACHMENT0,rt,0);p(v)&&f(rt),e.unbindTexture()}C.depthBuffer&&Dt(C)}function he(C){const v=C.textures;for(let H=0,$=v.length;H<$;H++){const Q=v[H];if(p(Q)){const Z=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=n.get(Q).__webglTexture;e.bindTexture(Z,St),f(Z),e.unbindTexture()}}}const P=[],pe=[];function te(C){if(C.samples>0){if(Mt(C)===!1){const v=C.textures,H=C.width,$=C.height;let Q=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(C),rt=v.length>1;if(rt)for(let ht=0;ht<v.length;ht++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[ht]);const Ut=n.get(v[ht]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ut,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,Q,s.NEAREST),l===!0&&(P.length=0,pe.length=0,P.push(s.COLOR_ATTACHMENT0+ht),C.depthBuffer&&C.resolveDepthBuffer===!1&&(P.push(Z),pe.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let ht=0;ht<v.length;ht++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,St.__webglColorRenderbuffer[ht]);const Ut=n.get(v[ht]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,Ut,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function ie(C){return Math.min(i.maxSamples,C.samples)}function Mt(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function me(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Pt(C,v){const H=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ti&&H!==Bn&&(Jt.getTransfer(H)===re?($!==rn||Q!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=Ot,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Mt}function Vm(s,t){function e(n,i=Bn){let r;const a=Jt.getTransfer(i);if(n===Wn)return s.UNSIGNED_BYTE;if(n===to)return s.UNSIGNED_SHORT_4_4_4_4;if(n===eo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return s.BYTE;if(n===sc)return s.SHORT;if(n===Es)return s.UNSIGNED_SHORT;if(n===Ja)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===kn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===ac)return s.ALPHA;if(n===oc)return s.RGB;if(n===rn)return s.RGBA;if(n===lc)return s.LUMINANCE;if(n===cc)return s.LUMINANCE_ALPHA;if(n===qi)return s.DEPTH_COMPONENT;if(n===Ji)return s.DEPTH_STENCIL;if(n===hc)return s.RED;if(n===no)return s.RED_INTEGER;if(n===uc)return s.RG;if(n===io)return s.RG_INTEGER;if(n===so)return s.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===Ma||n===Sa||n===ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===ba||n===Ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wa||n===ba)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ea)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ta||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===La)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dr||n===ka||n===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dr)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dc||n===Va||n===Ga||n===Wa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===dr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Gm extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class se extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wm={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&u>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ym=`
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

}`;class qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ke({vertexShader:Xm,fragmentShader:Ym,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Ue(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends ns{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,g=null;const _=new qm,p=e.getContextAttributes();let f=null,S=null;const y=[],b=[],U=new xt;let A=null;const T=new Ve;T.layers.enable(1),T.viewport=new oe;const D=new Ve;D.layers.enable(2),D.viewport=new oe;const w=[T,D],x=new Gm;x.layers.enable(1),x.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=y[X];return J===void 0&&(J=new sa,y[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=y[X];return J===void 0&&(J=new sa,y[X]=J),J.getGripSpace()},this.getHand=function(X){let J=y[X];return J===void 0&&(J=new sa,y[X]=J),J.getHandSpace()};function F(X){const J=b.indexOf(X.inputSource);if(J===-1)return;const ft=y[J];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||a),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let X=0;X<y.length;X++){const J=b[X];J!==null&&(b[X]=null,y[X].disconnect(J))}R=null,z=null,_.reset(),t.setRenderTarget(f),m=null,u=null,d=null,i=null,S=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(U),i.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new on(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ft=null,ct=null;p.depth&&(ct=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Ji:qi,ft=p.stencil?Qi:vi);const Dt={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new on(u.textureWidth,u.textureHeight,{format:rn,type:Wn,depthTexture:new Tc(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(X){for(let J=0;J<X.removed.length;J++){const ft=X.removed[J],ct=b.indexOf(ft);ct>=0&&(b[ct]=null,y[ct].disconnect(ft))}for(let J=0;J<X.added.length;J++){const ft=X.added[J];let ct=b.indexOf(ft);if(ct===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=b.length){b.push(ft),ct=Ot;break}else if(b[Ot]===null){b[Ot]=ft,ct=Ot;break}if(ct===-1)break}const Dt=y[ct];Dt&&Dt.connect(ft)}}const B=new E,q=new E;function G(X,J,ft){B.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ft.matrixWorld);const ct=B.distanceTo(q),Dt=J.projectionMatrix.elements,Ot=ft.projectionMatrix.elements,kt=Dt[14]/(Dt[10]-1),he=Dt[14]/(Dt[10]+1),P=(Dt[9]+1)/Dt[5],pe=(Dt[9]-1)/Dt[5],te=(Dt[8]-1)/Dt[0],ie=(Ot[8]+1)/Ot[0],Mt=kt*te,me=kt*ie,Pt=ct/(-te+ie),It=Pt*-te;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(It),X.translateZ(Pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const C=kt+Pt,v=he+Pt,H=Mt-It,$=me+(ct-It),Q=P*he/v*C,Z=pe*he/v*C;X.projectionMatrix.makePerspective(H,$,Q,Z,C,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function at(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),x.near=D.near=T.near=X.near,x.far=D.far=T.far=X.far,(R!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far,T.near=R,T.far=z,D.near=R,D.far=z,T.updateProjectionMatrix(),D.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,ft=x.cameras;at(x,J);for(let ct=0;ct<ft.length;ct++)at(ft[ct],J);ft.length===2?G(x,T,D):x.projectionMatrix.copy(T.projectionMatrix),gt(X,x,J)};function gt(X,J,ft){ft===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ts*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let _t=null;function Gt(X,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const ft=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let ct=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,ct=!0);for(let Ot=0;Ot<ft.length;Ot++){const kt=ft[Ot];let he=null;if(m!==null)he=m.getViewport(kt);else{const pe=d.getViewSubImage(u,kt);he=pe.viewport,Ot===0&&(t.setRenderTargetTextures(S,pe.colorTexture,u.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(S))}let P=w[Ot];P===void 0&&(P=new Ve,P.layers.enable(Ot),P.viewport=new oe,w[Ot]=P),P.matrix.fromArray(kt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(kt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(he.x,he.y,he.width,he.height),Ot===0&&(x.matrix.copy(P.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ct===!0&&x.cameras.push(P)}const Dt=i.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Ot=d.getDepthInformation(ft[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,i.renderState)}}for(let ft=0;ft<y.length;ft++){const ct=b[ft],Dt=y[ft];ct!==null&&Dt!==void 0&&Dt.update(ct,J,c||a)}_t&&_t(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const ne=new Ec;ne.setAnimationLoop(Gt),this.setAnimationLoop=function(X){_t=X},this.dispose=function(){}}}const oi=new Sn,Zm=new le;function $m(s,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,yc(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,S,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,S,y):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===He&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===He&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const S=t.get(f),y=S.envMap,b=S.envMapRotation;y&&(p.envMap.value=y,oi.copy(b),oi.x*=-1,oi.y*=-1,oi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),p.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(oi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=y*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const S=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const b=y.program;n.uniformBlockBinding(S,b)}function c(S,y){let b=i[S.id];b===void 0&&(g(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",p));const U=y.program;n.updateUBOMapping(S,U);const A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){const y=d();S.__bindingPointIndex=y;const b=s.createBuffer(),U=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,U,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const y=i[S.id],b=S.uniforms,U=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,T=b.length;A<T;A++){const D=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,x=D.length;w<x;w++){const R=D[w];if(m(R,A,w,U)===!0){const z=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let V=0;V<F.length;V++){const B=F[V],q=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,z+W,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,W),W+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,y,b,U){const A=S.value,T=y+"_"+b;if(U[T]===void 0)return typeof A=="number"||typeof A=="boolean"?U[T]=A:U[T]=A.clone(),!0;{const D=U[T];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return U[T]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(S){const y=S.uniforms;let b=0;const U=16;for(let T=0,D=y.length;T<D;T++){const w=Array.isArray(y[T])?y[T]:[y[T]];for(let x=0,R=w.length;x<R;x++){const z=w[x],F=Array.isArray(z.value)?z.value:[z.value];for(let W=0,V=F.length;W<V;W++){const B=F[W],q=_(B),G=b%U;G!==0&&U-G<q.boundary&&(b+=U-G),z.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=q.storage}}}const A=b%U;return A>0&&(b+=U-A),S.__size=b,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Qm{constructor(t={}){const{canvas:e=Gh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=An,this.toneMappingExposure=1;const y=this;let b=!1,U=0,A=0,T=null,D=-1,w=null;const x=new oe,R=new oe;let z=null;const F=new Rt(0);let W=0,V=e.width,B=e.height,q=1,G=null,at=null;const gt=new oe(0,0,V,B),_t=new oe(0,0,V,B);let Gt=!1;const ne=new ho;let X=!1,J=!1;const ft=new le,ct=new E,Dt=new oe,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function he(){return T===null?q:1}let P=n;function pe(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qa}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",it,!1),P===null){const I="webgl2";if(P=pe(I,M),P===null)throw pe(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let te,ie,Mt,me,Pt,It,C,v,H,$,Q,Z,St,rt,ht,Ut,tt,lt,Wt,Ct,ut,Lt,zt,ce;function L(){te=new rp(P),te.init(),Lt=new Vm(P,te),ie=new Jf(P,te,t,Lt),Mt=new Bm(P),me=new lp(P),Pt=new Em,It=new Hm(P,te,Mt,Pt,ie,Lt,me),C=new ep(y),v=new sp(y),H=new pu(P),zt=new jf(P,H),$=new ap(P,H,me,zt),Q=new hp(P,$,H,me),Wt=new cp(P,ie,It),Ut=new tp(Pt),Z=new bm(y,C,v,te,ie,zt,Ut),St=new $m(y,Pt),rt=new Am,ht=new Im(te),lt=new $f(y,C,v,Mt,Q,u,l),tt=new zm(y,Q,ie),ce=new jm(P,me,ie,Mt),Ct=new Qf(P,te,me),ut=new op(P,te,me),me.programs=Z.programs,y.capabilities=ie,y.extensions=te,y.properties=Pt,y.renderLists=rt,y.shadowMap=tt,y.state=Mt,y.info=me}L();const et=new Km(y,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(M){M!==void 0&&(q=M,this.setSize(V,B,!1))},this.getSize=function(M){return M.set(V,B)},this.setSize=function(M,I,O=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,B=I,e.width=Math.floor(M*q),e.height=Math.floor(I*q),O===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(V*q,B*q).floor()},this.setDrawingBufferSize=function(M,I,O){V=M,B=I,q=O,e.width=Math.floor(M*O),e.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(gt)},this.setViewport=function(M,I,O,k){M.isVector4?gt.set(M.x,M.y,M.z,M.w):gt.set(M,I,O,k),Mt.viewport(x.copy(gt).multiplyScalar(q).round())},this.getScissor=function(M){return M.copy(_t)},this.setScissor=function(M,I,O,k){M.isVector4?_t.set(M.x,M.y,M.z,M.w):_t.set(M,I,O,k),Mt.scissor(R.copy(_t).multiplyScalar(q).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(M){Mt.setScissorTest(Gt=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){at=M},this.getClearColor=function(M){return M.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(M=!0,I=!0,O=!0){let k=0;if(M){let N=!1;if(T!==null){const nt=T.texture.format;N=nt===so||nt===io||nt===no}if(N){const nt=T.texture.type,ot=nt===Wn||nt===vi||nt===Es||nt===Qi||nt===to||nt===eo,pt=lt.getClearColor(),mt=lt.getClearAlpha(),Tt=pt.r,At=pt.g,yt=pt.b;ot?(m[0]=Tt,m[1]=At,m[2]=yt,m[3]=mt,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=Tt,g[1]=At,g[2]=yt,g[3]=mt,P.clearBufferiv(P.COLOR,0,g))}else k|=P.COLOR_BUFFER_BIT}I&&(k|=P.DEPTH_BUFFER_BIT),O&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",it,!1),rt.dispose(),ht.dispose(),Pt.dispose(),C.dispose(),v.dispose(),Q.dispose(),zt.dispose(),ce.dispose(),Z.dispose(),et.dispose(),et.removeEventListener("sessionstart",wn),et.removeEventListener("sessionend",go),ei.stop()};function Y(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function K(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=me.autoReset,I=tt.enabled,O=tt.autoUpdate,k=tt.needsUpdate,N=tt.type;L(),me.autoReset=M,tt.enabled=I,tt.autoUpdate=O,tt.needsUpdate=k,tt.type=N}function it(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){const I=M.target;I.removeEventListener("dispose",Et),qt(I)}function qt(M){ge(M),Pt.remove(M)}function ge(M){const I=Pt.get(M).programs;I!==void 0&&(I.forEach(function(O){Z.releaseProgram(O)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,k,N,nt){I===null&&(I=Ot);const ot=N.isMesh&&N.matrixWorld.determinant()<0,pt=Fc(M,I,O,k,N);Mt.setMaterial(k,ot);let mt=O.index,Tt=1;if(k.wireframe===!0){if(mt=$.getWireframeAttribute(O),mt===void 0)return;Tt=2}const At=O.drawRange,yt=O.attributes.position;let Zt=At.start*Tt,ue=(At.start+At.count)*Tt;nt!==null&&(Zt=Math.max(Zt,nt.start*Tt),ue=Math.min(ue,(nt.start+nt.count)*Tt)),mt!==null?(Zt=Math.max(Zt,0),ue=Math.min(ue,mt.count)):yt!=null&&(Zt=Math.max(Zt,0),ue=Math.min(ue,yt.count));const de=ue-Zt;if(de<0||de===1/0)return;zt.setup(N,k,pt,O,mt);let We,$t=Ct;if(mt!==null&&(We=H.get(mt),$t=ut,$t.setIndex(We)),N.isMesh)k.wireframe===!0?(Mt.setLineWidth(k.wireframeLinewidth*he()),$t.setMode(P.LINES)):$t.setMode(P.TRIANGLES);else if(N.isLine){let vt=k.linewidth;vt===void 0&&(vt=1),Mt.setLineWidth(vt*he()),N.isLineSegments?$t.setMode(P.LINES):N.isLineLoop?$t.setMode(P.LINE_LOOP):$t.setMode(P.LINE_STRIP)}else N.isPoints?$t.setMode(P.POINTS):N.isSprite&&$t.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const vt=N._multiDrawStarts,Re=N._multiDrawCounts,jt=N._multiDrawCount,cn=mt?H.get(mt).bytesPerElement:1,Mi=Pt.get(k).currentProgram.getUniforms();for(let Xe=0;Xe<jt;Xe++)Mi.setValue(P,"_gl_DrawID",Xe),$t.render(vt[Xe]/cn,Re[Xe])}else if(N.isInstancedMesh)$t.renderInstances(Zt,de,N.count);else if(O.isInstancedBufferGeometry){const vt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Re=Math.min(O.instanceCount,vt);$t.renderInstances(Zt,de,Re)}else $t.render(Zt,de)};function Ce(M,I,O){M.transparent===!0&&M.side===Ne&&M.forceSinglePass===!1?(M.side=He,M.needsUpdate=!0,Ls(M,I,O),M.side=Jn,M.needsUpdate=!0,Ls(M,I,O),M.side=Ne):Ls(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),p=ht.get(O),p.init(I),S.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const k=new Set;return M.traverse(function(N){const nt=N.material;if(nt)if(Array.isArray(nt))for(let ot=0;ot<nt.length;ot++){const pt=nt[ot];Ce(pt,O,N),k.add(pt)}else Ce(nt,O,N),k.add(nt)}),S.pop(),p=null,k},this.compileAsync=function(M,I,O=null){const k=this.compile(M,I,O);return new Promise(N=>{function nt(){if(k.forEach(function(ot){Pt.get(ot).currentProgram.isReady()&&k.delete(ot)}),k.size===0){N(M);return}setTimeout(nt,10)}te.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Kt=null;function Pn(M){Kt&&Kt(M)}function wn(){ei.stop()}function go(){ei.start()}const ei=new Ec;ei.setAnimationLoop(Pn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(M){Kt=M,et.setAnimationLoop(M),M===null?ei.stop():ei.start()},et.addEventListener("sessionstart",wn),et.addEventListener("sessionend",go),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(I),I=et.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,T),p=ht.get(M,S.length),p.init(I),S.push(p),ft.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ne.setFromProjectionMatrix(ft),J=this.localClippingEnabled,X=Ut.init(this.clippingPlanes,J),_=rt.get(M,f.length),_.init(),f.push(_),et.enabled===!0&&et.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Rr(nt,I,-1/0,y.sortObjects)}Rr(M,I,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(G,at),kt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,kt&&lt.addToRenderList(_,M),this.info.render.frame++,X===!0&&Ut.beginShadows();const O=p.state.shadowsArray;tt.render(O,M,I),X===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=_.opaque,N=_.transmissive;if(p.setupLights(),I.isArrayCamera){const nt=I.cameras;if(N.length>0)for(let ot=0,pt=nt.length;ot<pt;ot++){const mt=nt[ot];vo(k,N,M,mt)}kt&&lt.render(M);for(let ot=0,pt=nt.length;ot<pt;ot++){const mt=nt[ot];_o(_,M,mt,mt.viewport)}}else N.length>0&&vo(k,N,M,I),kt&&lt.render(M),_o(_,M,I);T!==null&&(It.updateMultisampleRenderTarget(T),It.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(y,M,I),zt.resetDefaultState(),D=-1,w=null,S.pop(),S.length>0?(p=S[S.length-1],X===!0&&Ut.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Rr(M,I,O,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ne.intersectsSprite(M)){k&&Dt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ft);const ot=Q.update(M),pt=M.material;pt.visible&&_.push(M,ot,pt,O,Dt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ne.intersectsObject(M))){const ot=Q.update(M),pt=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Dt.copy(M.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Dt.copy(ot.boundingSphere.center)),Dt.applyMatrix4(M.matrixWorld).applyMatrix4(ft)),Array.isArray(pt)){const mt=ot.groups;for(let Tt=0,At=mt.length;Tt<At;Tt++){const yt=mt[Tt],Zt=pt[yt.materialIndex];Zt&&Zt.visible&&_.push(M,ot,Zt,O,Dt.z,yt)}}else pt.visible&&_.push(M,ot,pt,O,Dt.z,null)}}const nt=M.children;for(let ot=0,pt=nt.length;ot<pt;ot++)Rr(nt[ot],I,O,k)}function _o(M,I,O,k){const N=M.opaque,nt=M.transmissive,ot=M.transparent;p.setupLightsView(O),X===!0&&Ut.setGlobalState(y.clippingPlanes,O),k&&Mt.viewport(x.copy(k)),N.length>0&&Ps(N,I,O),nt.length>0&&Ps(nt,I,O),ot.length>0&&Ps(ot,I,O),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function vo(M,I,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new on(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Cn:Wn,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[k.id],ot=k.viewport||x;nt.setSize(ot.z,ot.w);const pt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(F),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),kt?lt.render(O):y.clear();const mt=y.toneMapping;y.toneMapping=An;const Tt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),X===!0&&Ut.setGlobalState(y.clippingPlanes,k),Ps(M,O,k),It.updateMultisampleRenderTarget(nt),It.updateRenderTargetMipmap(nt),te.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let yt=0,Zt=I.length;yt<Zt;yt++){const ue=I[yt],de=ue.object,We=ue.geometry,$t=ue.material,vt=ue.group;if($t.side===Ne&&de.layers.test(k.layers)){const Re=$t.side;$t.side=He,$t.needsUpdate=!0,xo(de,O,k,We,$t,vt),$t.side=Re,$t.needsUpdate=!0,At=!0}}At===!0&&(It.updateMultisampleRenderTarget(nt),It.updateRenderTargetMipmap(nt))}y.setRenderTarget(pt),y.setClearColor(F,W),Tt!==void 0&&(k.viewport=Tt),y.toneMapping=mt}function Ps(M,I,O){const k=I.isScene===!0?I.overrideMaterial:null;for(let N=0,nt=M.length;N<nt;N++){const ot=M[N],pt=ot.object,mt=ot.geometry,Tt=k===null?ot.material:k,At=ot.group;pt.layers.test(O.layers)&&xo(pt,I,O,mt,Tt,At)}}function xo(M,I,O,k,N,nt){M.onBeforeRender(y,I,O,k,N,nt),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.transparent===!0&&N.side===Ne&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,y.renderBufferDirect(O,I,k,N,M,nt),N.side=Jn,N.needsUpdate=!0,y.renderBufferDirect(O,I,k,N,M,nt),N.side=Ne):y.renderBufferDirect(O,I,k,N,M,nt),M.onAfterRender(y,I,O,k,N,nt)}function Ls(M,I,O){I.isScene!==!0&&(I=Ot);const k=Pt.get(M),N=p.state.lights,nt=p.state.shadowsArray,ot=N.state.version,pt=Z.getParameters(M,N.state,nt,I,O),mt=Z.getProgramCacheKey(pt);let Tt=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?v:C).get(M.envMap||k.environment),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Et),Tt=new Map,k.programs=Tt);let At=Tt.get(mt);if(At!==void 0){if(k.currentProgram===At&&k.lightsStateVersion===ot)return So(M,pt),At}else pt.uniforms=Z.getUniforms(M),M.onBeforeCompile(pt,y),At=Z.acquireProgram(pt,mt),Tt.set(mt,At),k.uniforms=pt.uniforms;const yt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=Ut.uniform),So(M,pt),k.needsLights=zc(M),k.lightsStateVersion=ot,k.needsLights&&(yt.ambientLightColor.value=N.state.ambient,yt.lightProbe.value=N.state.probe,yt.directionalLights.value=N.state.directional,yt.directionalLightShadows.value=N.state.directionalShadow,yt.spotLights.value=N.state.spot,yt.spotLightShadows.value=N.state.spotShadow,yt.rectAreaLights.value=N.state.rectArea,yt.ltc_1.value=N.state.rectAreaLTC1,yt.ltc_2.value=N.state.rectAreaLTC2,yt.pointLights.value=N.state.point,yt.pointLightShadows.value=N.state.pointShadow,yt.hemisphereLights.value=N.state.hemi,yt.directionalShadowMap.value=N.state.directionalShadowMap,yt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,yt.spotShadowMap.value=N.state.spotShadowMap,yt.spotLightMatrix.value=N.state.spotLightMatrix,yt.spotLightMap.value=N.state.spotLightMap,yt.pointShadowMap.value=N.state.pointShadowMap,yt.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=At,k.uniformsList=null,At}function Mo(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=fr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function So(M,I){const O=Pt.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function Fc(M,I,O,k,N){I.isScene!==!0&&(I=Ot),It.resetTextureUnits();const nt=I.fog,ot=k.isMeshStandardMaterial?I.environment:null,pt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ti,mt=(k.isMeshStandardMaterial?v:C).get(k.envMap||ot),Tt=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,At=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),yt=!!O.morphAttributes.position,Zt=!!O.morphAttributes.normal,ue=!!O.morphAttributes.color;let de=An;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(de=y.toneMapping);const We=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=We!==void 0?We.length:0,vt=Pt.get(k),Re=p.state.lights;if(X===!0&&(J===!0||M!==w)){const je=M===w&&k.id===D;Ut.setState(k,M,je)}let jt=!1;k.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==Re.state.version||vt.outputColorSpace!==pt||N.isBatchedMesh&&vt.batching===!1||!N.isBatchedMesh&&vt.batching===!0||N.isBatchedMesh&&vt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&vt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&vt.instancing===!1||!N.isInstancedMesh&&vt.instancing===!0||N.isSkinnedMesh&&vt.skinning===!1||!N.isSkinnedMesh&&vt.skinning===!0||N.isInstancedMesh&&vt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&vt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&vt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&vt.instancingMorph===!1&&N.morphTexture!==null||vt.envMap!==mt||k.fog===!0&&vt.fog!==nt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==Ut.numPlanes||vt.numIntersection!==Ut.numIntersection)||vt.vertexAlphas!==Tt||vt.vertexTangents!==At||vt.morphTargets!==yt||vt.morphNormals!==Zt||vt.morphColors!==ue||vt.toneMapping!==de||vt.morphTargetsCount!==$t)&&(jt=!0):(jt=!0,vt.__version=k.version);let cn=vt.currentProgram;jt===!0&&(cn=Ls(k,I,N));let Mi=!1,Xe=!1,Pr=!1;const _e=cn.getUniforms(),Xn=vt.uniforms;if(Mt.useProgram(cn.program)&&(Mi=!0,Xe=!0,Pr=!0),k.id!==D&&(D=k.id,Xe=!0),Mi||w!==M){_e.setValue(P,"projectionMatrix",M.projectionMatrix),_e.setValue(P,"viewMatrix",M.matrixWorldInverse);const je=_e.map.cameraPosition;je!==void 0&&je.setValue(P,ct.setFromMatrixPosition(M.matrixWorld)),ie.logarithmicDepthBuffer&&_e.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&_e.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,Xe=!0,Pr=!0)}if(N.isSkinnedMesh){_e.setOptional(P,N,"bindMatrix"),_e.setOptional(P,N,"bindMatrixInverse");const je=N.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),_e.setValue(P,"boneTexture",je.boneTexture,It))}N.isBatchedMesh&&(_e.setOptional(P,N,"batchingTexture"),_e.setValue(P,"batchingTexture",N._matricesTexture,It),_e.setOptional(P,N,"batchingIdTexture"),_e.setValue(P,"batchingIdTexture",N._indirectTexture,It),_e.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&_e.setValue(P,"batchingColorTexture",N._colorsTexture,It));const Lr=O.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0)&&Wt.update(N,O,cn),(Xe||vt.receiveShadow!==N.receiveShadow)&&(vt.receiveShadow=N.receiveShadow,_e.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xn.envMap.value=mt,Xn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Xn.envMapIntensity.value=I.environmentIntensity),Xe&&(_e.setValue(P,"toneMappingExposure",y.toneMappingExposure),vt.needsLights&&Oc(Xn,Pr),nt&&k.fog===!0&&St.refreshFogUniforms(Xn,nt),St.refreshMaterialUniforms(Xn,k,q,B,p.state.transmissionRenderTarget[M.id]),fr.upload(P,Mo(vt),Xn,It)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fr.upload(P,Mo(vt),Xn,It),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&_e.setValue(P,"center",N.center),_e.setValue(P,"modelViewMatrix",N.modelViewMatrix),_e.setValue(P,"normalMatrix",N.normalMatrix),_e.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const je=k.uniformsGroups;for(let Dr=0,Bc=je.length;Dr<Bc;Dr++){const yo=je[Dr];ce.update(yo,cn),ce.bind(yo,cn)}}return cn}function Oc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function zc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,I,O){Pt.get(M.texture).__webglTexture=I,Pt.get(M.depthTexture).__webglTexture=O;const k=Pt.get(M);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const O=Pt.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){T=M,U=I,A=O;let k=!0,N=null,nt=!1,ot=!1;if(M){const mt=Pt.get(M);mt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(P.FRAMEBUFFER,null),k=!1):mt.__webglFramebuffer===void 0?It.setupRenderTarget(M):mt.__hasExternalTextures&&It.rebindTextures(M,Pt.get(M.texture).__webglTexture,Pt.get(M.depthTexture).__webglTexture);const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);const At=Pt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[I])?N=At[I][O]:N=At[I],nt=!0):M.samples>0&&It.useMultisampledRTT(M)===!1?N=Pt.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?N=At[O]:N=At,x.copy(M.viewport),R.copy(M.scissor),z=M.scissorTest}else x.copy(gt).multiplyScalar(q).floor(),R.copy(_t).multiplyScalar(q).floor(),z=Gt;if(Mt.bindFramebuffer(P.FRAMEBUFFER,N)&&k&&Mt.drawBuffers(M,N),Mt.viewport(x),Mt.scissor(R),Mt.setScissorTest(z),nt){const mt=Pt.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,mt.__webglTexture,O)}else if(ot){const mt=Pt.get(M.texture),Tt=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,mt.__webglTexture,O||0,Tt)}D=-1},this.readRenderTargetPixels=function(M,I,O,k,N,nt,ot){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){Mt.bindFramebuffer(P.FRAMEBUFFER,pt);try{const mt=M.texture,Tt=mt.format,At=mt.type;if(!ie.textureFormatReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&O>=0&&O<=M.height-N&&P.readPixels(I,O,k,N,Lt.convert(Tt),Lt.convert(At),nt)}finally{const mt=T!==null?Pt.get(T).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(M,I,O,k,N,nt,ot){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Pt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(pt=pt[ot]),pt){Mt.bindFramebuffer(P.FRAMEBUFFER,pt);try{const mt=M.texture,Tt=mt.format,At=mt.type;if(!ie.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-k&&O>=0&&O<=M.height-N){const yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(I,O,k,N,Lt.convert(Tt),Lt.convert(At),0),P.flush();const Zt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Wh(P,Zt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt)}finally{P.deleteBuffer(yt),P.deleteSync(Zt)}return nt}}finally{const mt=T!==null?Pt.get(T).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(M,I=null,O=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const k=Math.pow(2,-O),N=Math.floor(M.image.width*k),nt=Math.floor(M.image.height*k),ot=I!==null?I.x:0,pt=I!==null?I.y:0;It.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,ot,pt,N,nt),Mt.unbindTexture()},this.copyTextureToTexture=function(M,I,O=null,k=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,M=arguments[1],I=arguments[2],N=arguments[3]||0,O=null);let nt,ot,pt,mt,Tt,At;O!==null?(nt=O.max.x-O.min.x,ot=O.max.y-O.min.y,pt=O.min.x,mt=O.min.y):(nt=M.image.width,ot=M.image.height,pt=0,mt=0),k!==null?(Tt=k.x,At=k.y):(Tt=0,At=0);const yt=Lt.convert(I.format),Zt=Lt.convert(I.type);It.setTexture2D(I,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const ue=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),We=P.getParameter(P.UNPACK_SKIP_PIXELS),$t=P.getParameter(P.UNPACK_SKIP_ROWS),vt=P.getParameter(P.UNPACK_SKIP_IMAGES),Re=M.isCompressedTexture?M.mipmaps[N]:M.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,mt),M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Tt,At,nt,ot,yt,Zt,Re.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Tt,At,Re.width,Re.height,yt,Re.data):P.texSubImage2D(P.TEXTURE_2D,N,Tt,At,nt,ot,yt,Zt,Re),P.pixelStorei(P.UNPACK_ROW_LENGTH,ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,$t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vt),N===0&&I.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O=null,k=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,M=arguments[2],I=arguments[3],N=arguments[4]||0);let nt,ot,pt,mt,Tt,At,yt,Zt,ue;const de=M.isCompressedTexture?M.mipmaps[N]:M.image;O!==null?(nt=O.max.x-O.min.x,ot=O.max.y-O.min.y,pt=O.max.z-O.min.z,mt=O.min.x,Tt=O.min.y,At=O.min.z):(nt=de.width,ot=de.height,pt=de.depth,mt=0,Tt=0,At=0),k!==null?(yt=k.x,Zt=k.y,ue=k.z):(yt=0,Zt=0,ue=0);const We=Lt.convert(I.format),$t=Lt.convert(I.type);let vt;if(I.isData3DTexture)It.setTexture3D(I,0),vt=P.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)It.setTexture2DArray(I,0),vt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,I.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,I.unpackAlignment);const Re=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),cn=P.getParameter(P.UNPACK_SKIP_PIXELS),Mi=P.getParameter(P.UNPACK_SKIP_ROWS),Xe=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,mt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,At),M.isDataTexture||M.isData3DTexture?P.texSubImage3D(vt,N,yt,Zt,ue,nt,ot,pt,We,$t,de.data):I.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,N,yt,Zt,ue,nt,ot,pt,We,de.data):P.texSubImage3D(vt,N,yt,Zt,ue,nt,ot,pt,We,$t,de),P.pixelStorei(P.UNPACK_ROW_LENGTH,Re),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,cn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Xe),N===0&&I.generateMipmaps&&P.generateMipmap(vt),Mt.unbindTexture()},this.initRenderTarget=function(M){Pt.get(M).__webglFramebuffer===void 0&&It.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?It.setTextureCube(M,0):M.isData3DTexture?It.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?It.setTexture2DArray(M,0):It.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){U=0,A=0,T=null,Mt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ro?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Er?"display-p3":"srgb"}}class po{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _l extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Jm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return oo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Oe=new E;class Sr{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Sr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ke extends is{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const us=new E,Bi=new E,ki=new E,Hi=new xt,ds=new xt,Lc=new le,tr=new E,fs=new E,er=new E,vl=new xt,ra=new xt,xl=new xt;class sn extends xe{constructor(t=new Ke){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new ln;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jm(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Sr(n,3,0,!1)),zi.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bi.setFromMatrixScale(this.matrixWorld),Lc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bi.multiplyScalar(-ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;nr(tr.set(-.5,-.5,0),ki,a,Bi,i,r),nr(fs.set(.5,-.5,0),ki,a,Bi,i,r),nr(er.set(.5,.5,0),ki,a,Bi,i,r),vl.set(0,0),ra.set(1,0),xl.set(1,1);let o=t.ray.intersectTriangle(tr,fs,er,!1,us);if(o===null&&(nr(fs.set(-.5,.5,0),ki,a,Bi,i,r),ra.set(0,1),o=t.ray.intersectTriangle(tr,er,fs,!1,us),o===null))return;const l=t.ray.origin.distanceTo(us);l<t.near||l>t.far||e.push({distance:l,point:us.clone(),uv:vn.getInterpolation(us,tr,fs,er,vl,ra,xl,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(s,t,e,n,i,r){Hi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ds.x=r*Hi.x-i*Hi.y,ds.y=i*Hi.x+r*Hi.y):ds.copy(Hi),s.copy(t),s.x+=ds.x,s.y+=ds.y,s.applyMatrix4(Lc)}class t0 extends Fe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,h=Ge,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rn extends Fe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yn extends ln{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],m=[];let g=0;const _=[],p=n/2;let f=0;S(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ae(d,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(m,2));function S(){const b=new E,U=new E;let A=0;const T=(e-t)/n;for(let D=0;D<=r;D++){const w=[],x=D/r,R=x*(e-t)+t;for(let z=0;z<=i;z++){const F=z/i,W=F*l+o,V=Math.sin(W),B=Math.cos(W);U.x=R*V,U.y=-x*n+p,U.z=R*B,d.push(U.x,U.y,U.z),b.set(V,T,B).normalize(),u.push(b.x,b.y,b.z),m.push(F,1-x),w.push(g++)}_.push(w)}for(let D=0;D<i;D++)for(let w=0;w<r;w++){const x=_[w][D],R=_[w+1][D],z=_[w+1][D+1],F=_[w][D+1];h.push(x,R,F),h.push(R,z,F),A+=6}c.addGroup(f,A,0),f+=A}function y(b){const U=g,A=new xt,T=new E;let D=0;const w=b===!0?t:e,x=b===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,p*x,0),u.push(0,x,0),m.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const W=z/i*l+o,V=Math.cos(W),B=Math.sin(W);T.x=w*B,T.y=p*x,T.z=w*V,d.push(T.x,T.y,T.z),u.push(0,x,0),A.x=V*.5+.5,A.y=B*.5*x+.5,m.push(A.x,A.y),g++}for(let z=0;z<i;z++){const F=U+z,W=R+z;b===!0?h.push(W,W+1,F):h.push(W+1,W,F),D+=3}c.addGroup(f,D,b===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends ln{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new E,u=new E,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){const S=[],y=f/n;let b=0;f===0&&a===0?b=.5/e:f===n&&l===Math.PI&&(b=-.5/e);for(let U=0;U<=e;U++){const A=U/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+y*o),d.y=t*Math.cos(a+y*o),d.z=t*Math.sin(i+A*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(A+b,1-y),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const y=h[f][S+1],b=h[f][S],U=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&m.push(y,b,A),(f!==n-1||l<Math.PI)&&m.push(b,U,A)}this.setIndex(m),this.setAttribute("position",new Ae(g,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ar extends ln{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new E,d=new E,u=new E;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,S=(i+1)*m+g;a.push(_,p,S),a.push(p,f,S)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class e0 extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bt extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cr extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class n0 extends Cr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const aa=new le,Ml=new E,Sl=new E;class Dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ml),Sl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sl),e.updateMatrixWorld(),aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new le,ps=new E,oa=new E;class i0 extends Dc{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),oa.copy(n.position),oa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(oa),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class yr extends Cr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new i0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class s0 extends Dc{constructor(){super(new uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wr extends Cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new s0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class r0 extends Cr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ic{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=wl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function wl(){return(typeof performance>"u"?Date:performance).now()}const bl=new le;class Uc{constructor(t,e,n=0,i=1/0){this.ray=new vc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bl),this}intersectObject(t,e=!0,n=[]){return Ka(t,this,n,e),n.sort(El),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ka(t[i],this,n,e);return n.sort(El),n}}function El(s,t){return s.distance-t.distance}function Ka(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ka(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const la=new URLSearchParams(location.search),dt={quality:la.get("quality")||"high",preset:la.get("preset")||"A",demo:la.has("demo"),started:!1,fov:80,adsFov:56,sprintFovBoost:7,adsTime:.12,sensitivity:.0022,pitchLimit:Math.PI/2-.05,movement:{walkSpeed:4.2,sprintSpeed:6.9,crouchSpeed:2.4,jumpVel:7,gravity:-23,crouchHeight:1.05,eyeHeight:1.62,standHeight:1.8,radius:.34,accel:70,airAccel:18,friction:16,bobAmp:.055,bobFreq:10,headBendSprint:.055},weapon:{name:"HK416",rpm:790,dmg:30,headMult:2,magSize:30,reserve:150,reloadTime:1.85,spreadBase:.004,spreadMove:.018,spreadADS:.0012,recoilKick:.011,recoilSide:.0035,viewKick:{pos:.06,rot:.02},swayAmp:.0022,swayLerp:6,shellFreq:.9},pistol:{name:"M9",rpm:400,dmg:22,headMult:1.8,magSize:15,reserve:45,reloadTime:1.3,spreadBase:.008,spreadMove:.022,spreadADS:.0025,recoilKick:.014,recoilSide:.005,viewKick:{pos:.04,rot:.015},swayAmp:.0018,swayLerp:5,shellFreq:.5},grenade:{maxCount:3,fuseTime:3,throwForce:14,throwUp:8,damageRadius:8,maxDamage:180,minDamage:40},world:{mapSize:130,groundY:0,fogDensity:.0022},enemy:{health:100,headMult:2.2,speed:2.6,fireRange:55,fireInterval:[.9,2.2],burst:[3,6],dmgPerShot:7,accuracy:.92,waves:5},audio:{master:.8,music:0}},Tl={A:{label:"A",grade:{saturation:1.22,contrast:1.06,gamma:1,lift:[.055,.048,.042],gain:[1.02,.99,.94],tealShadow:.05},bloom:{strength:.95,radius:.75,threshold:.62},vignette:.3,grain:.03,ca:.0014},B:{label:"B",grade:{saturation:.96,contrast:1.08,gamma:1.02,lift:[.004,.006,.012],gain:[.98,1,1.03],tealShadow:.12},bloom:{strength:.68,radius:.62,threshold:.7},vignette:.42,grain:.05,ca:.0022}},en=Tl[dt.preset]||Tl.A,j={started:!1,demo:!1,time:0,alive:!0,health:100,maxHealth:100,respawnAt:0,pos:null,ammo:30,magSize:30,reserve:150,reloading:!1,weaponName:"HK416",kills:0,score:0,wave:0,waveState:"idle",waveTimer:0,missionComplete:!1,enemies:[],view:{ads:0,sprint:0,crouch:0,moving:!1,vel:0},paused:!1,demoCamPos:null};class a0{constructor(){this._m=new Map}on(t,e){return this._m.has(t)||this._m.set(t,new Set),this._m.get(t).add(e),e}off(t,e){this._m.get(t)?.delete(e)}once(t,e){const n=i=>{e(i),this.off(t,n)};this.on(t,n)}emit(t,e){const n=this._m.get(t);if(n)for(const i of n)try{i(e)}catch(r){console.error(`[bus:${t}]`,r)}}}const ae=new a0;class o0{constructor(t){this.container=t,this.renderer=new Qm({antialias:!0,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Pe,this.renderer.toneMapping=An,this.renderer.toneMappingExposure=1.35,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kl,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.inset="0",t.appendChild(this.renderer.domElement),this.scene=new _l,this.scene.background=new Rt("#0a0e14"),this.scene.fog=new po(12759175,45e-5),this.camera=new Ve(80,window.innerWidth/window.innerHeight,.08,1e3),this.camera.rotation.order="YXZ",this.vmScene=new _l,this.vmCamera=new Ve(80,window.innerWidth/window.innerHeight,.01,12),this.clock=new Ic,this.frameMs=0,this._acc=0,this._n=0,this.renderViewModel=!0,window.addEventListener("resize",()=>this.resize())}resize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.vmCamera.aspect=t/e,this.camera.updateProjectionMatrix(),this.vmCamera.updateProjectionMatrix(),this.renderer.setSize(t,e)}frame(){const t=Math.min(this.clock.getDelta(),.1);return this.camera.updateMatrixWorld(),t}}class l0{constructor(t){this.r=t;const e=new wr("#ffc080",3.5);e.position.set(60,50,30),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.near=1,e.shadow.camera.far=260;const n=90;e.shadow.camera.left=-n,e.shadow.camera.right=n,e.shadow.camera.top=n,e.shadow.camera.bottom=-n,e.shadow.bias=-5e-4,e.shadow.normalBias=.6,t.scene.add(e),t.scene.add(e.target),this.sun=e,this.sunDir=new E(60,50,30).normalize();const i=new n0("#9fb8d8","#1c150c",.85);t.scene.add(i),this.fill=i;const r=new wr("#ffb066",.65);r.position.set(-50,30,-60),t.scene.add(r),this.warm=r;const a=new Rn(this._envCanvas());a.colorSpace=Pe,a.mapping=mr;const o=new Ya(t.renderer),l=o.fromEquirectangular(a);t.scene.environment=l.texture,a.dispose(),o.dispose(),this.env=l.texture,this.fogColor=new Rt(1514272)}_envCanvas(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=e.createRadialGradient(32,26,4,32,32,40);return n.addColorStop(0,"#ffd9a0"),n.addColorStop(.4,"#7a8aa0"),n.addColorStop(1,"#0c0f14"),e.fillStyle=n,e.fillRect(0,0,64,64),t}update(t){this.sun.position.copy(t).add(this.sunDir.clone().multiplyScalar(140)),this.sun.target.position.copy(t),this.sun.target.updateMatrixWorld()}addZone(t,e,n,i){const r=new yr(t,e,n,2);return r.position.copy(i),this.r.scene.add(r),r}}const Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const c0=new uo(-1,1,1,-1,0,1);class h0 extends ln{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}}const u0=new h0;class mo{constructor(t){this._mesh=new bt(u0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,c0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Za extends rs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=As.clone(t.uniforms),this.material=new ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new mo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Al extends rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class d0 extends rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class f0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Za(Nc),this.copyPass.material.blending=Vn,this.clock=new Ic}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Al!==void 0&&(a instanceof Al?n=!0:a instanceof d0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class p0 extends rs{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const m0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class es extends rs{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new Rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,a,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new on(r,a,{type:Cn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const m=new on(r,a,{type:Cn});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=m0;this.highPassUniforms=As.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Nc;this.copyUniforms=As.clone(h.uniforms),this.blendMaterial=new ke({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ze,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Rt,this.oldClearAlpha=1,this.basic=new Tn,this.fsQuad=new mo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ke({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}es.BlurDirectionX=new xt(1,0);es.BlurDirectionY=new xt(0,1);const g0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class _0 extends rs{constructor(){super();const t=g0;this.uniforms=As.clone(t.uniforms),this.material=new e0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new mo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Jt.getTransfer(this._outputColorSpace)===re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$l?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ec&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const v0={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new xt(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		precision highp float;

		uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

		//----------------------------------------------------------------------------------
		// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
		// SDK Version: v3.00
		// Email:       gameworks@nvidia.com
		// Site:        http://developer.nvidia.com/
		//
		// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
		//
		// Redistribution and use in source and binary forms, with or without
		// modification, are permitted provided that the following conditions
		// are met:
		//  * Redistributions of source code must retain the above copyright
		//    notice, this list of conditions and the following disclaimer.
		//  * Redistributions in binary form must reproduce the above copyright
		//    notice, this list of conditions and the following disclaimer in the
		//    documentation and/or other materials provided with the distribution.
		//  * Neither the name of NVIDIA CORPORATION nor the names of its
		//    contributors may be used to endorse or promote products derived
		//    from this software without specific prior written permission.
		//
		// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
		// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
		// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
		// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
		// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
		// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
		// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
		// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
		// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
		// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
		// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
		//
		//----------------------------------------------------------------------------------

		#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
		#endif

		/*--------------------------------------------------------------------------*/
		#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
		#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
		/*--------------------------------------------------------------------------*/

		#define NUM_SAMPLES 5

		// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
		float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
		}

		/*============================================================================

									FXAA3 QUALITY - PC

		============================================================================*/

		/*--------------------------------------------------------------------------*/
		vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
		) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
				if(earlyExit) FxaaDiscard;
			#else
				if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
				// locate the edge
				vec2 dirToEdge;
				dirToEdge.x = contrastE > contrastW ? 1. : -1.;
				dirToEdge.y = contrastS > contrastN ? 1. : -1.;
				// . 2 .      . 1 .
				// 1 0 2  ~=  0 0 1
				// . 1 .      . 0 .

				// tap 2 pixels and see which ones are "outside" the edge, to
				// determine if the edge is vertical or horizontal

				vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongH = contrast( rgbaM, rgbaAlongH );
				// . 1 .
				// 0 0 1
				// . 0 H

				vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
				float matchAlongV = contrast( rgbaM, rgbaAlongV );
				// V 1 .
				// 0 0 1
				// . 0 .

				relativeVContrast = matchAlongV - matchAlongH;
				relativeVContrast *= fxaaQualityinvEdgeThreshold;

				if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
					// 1 1 .
					// 0 0 1
					// . 0 1

					// do a simple blur
					return mix(
						rgbaM,
						(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
						.4
					);
				}

				horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
				iterationsUsed = i;

				float increment = float(i + 1);

				if(!doneN) {
					nDist += increment;
					posN = posM + offNP * nDist;
					vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
					doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
					iterationsUsedN = i;
				}

				if(!doneP) {
					pDist += increment;
					posP = posM - offNP * pDist;
					vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
					doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
					iterationsUsedP = i;
				}

				if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
				doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
				doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
				rgbaM,
				rgbaN,
				dist * .5
			);
		}

		void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
				vUv,
				tDiffuse,
				resolution,
				edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
				invEdgeDetectionQuality
			);

		}
	`},x0={name:"GradeShader",uniforms:{tDiffuse:{value:null},saturation:{value:en.grade.saturation},contrast:{value:en.grade.contrast},gamma:{value:en.grade.gamma},lift:{value:new E(...en.grade.lift)},gain:{value:new E(...en.grade.gain)},tealShadow:{value:en.grade.tealShadow},vignette:{value:en.vignette},ca:{value:en.ca},grain:{value:en.grain},time:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float saturation, contrast, gamma, tealShadow, vignette, ca, grain;
    uniform vec3 lift, gain;
    uniform float time;
    varying vec2 vUv;

    float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }

    // Filmic ACES tonemap (Krzysztof Narkowicz / Narkowicz-style approximation)
    // applied ONCE here — gives the COD-style highlight rolloff that a purely
    // linear chain lacks, without double-tone-mapping (renderer.toneMapping is
    // NoToneMapping so OutputPass adds nothing).
    vec3 aces(vec3 x) {
      const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    void main() {
      vec2 uv = vUv;
      // chromatic aberration (radial)
      vec2 cc = uv - 0.5;
      float cr = length(cc);
      vec2 off = cc * (1.0 + ca * cr * cr * 8.0);
      float r = texture2D(tDiffuse, 0.5 + off).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, 0.5 - off).b;
      vec3 col = vec3(r, g, b);

      // film grain
      col += (rand(uv * 200.0 + time * 24.0) - 0.5) * grain;

      // saturation
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, saturation);

      // contrast
      col = (col - 0.5) * contrast + 0.5;

      // ACES filmic tone map (highlight rolloff) — exposure-scaled so the
      // mid-tones land where a golden-hour scene reads naturally.
      col = aces(col * 1.05);

      // teal shadow split tone
      float sh = max(0.0, 1.0 - luma * 2.5);
      col += vec3(0.0, 0.15, 0.22) * tealShadow * sh;

      // lift / gain
      col = col * (1.0 - lift) + lift;
      col = col * gain;

      // gamma
      col = pow(col, vec3(gamma));

      // vignette
      float vig = smoothstep(1.25, 0.35, length(uv - 0.5));
      col *= mix(1.0, vig, vignette);

      gl_FragColor = vec4(col, 1.0);
    }`};class M0{constructor(t){this.r=t;const{renderer:e,scene:n,camera:i}=t;this.renderTarget=new on(window.innerWidth,window.innerHeight,{format:rn,type:Cn}),this.composer=new f0(e,this.renderTarget),this.composer.addPass(new p0(n,i)),this.bloomPass=new es(new xt(window.innerWidth,window.innerHeight),en.bloom.strength,en.bloom.radius,en.bloom.threshold),e.toneMapping=An,this.composer.addPass(this.bloomPass),this.gradePass=new Za(x0),this.composer.addPass(this.gradePass),this.fxaaPass=new Za(v0),this.composer.addPass(this.fxaaPass),this.outputPass=new _0,this.composer.addPass(this.outputPass)}update(t,e){this.gradePass.uniforms.time.value=e}render(){this.composer.render()}resize(){const t=window.innerWidth,e=window.innerHeight;this.composer.setSize(t,e),this.renderTarget.setSize(t,e),this.bloomPass.resolution.set(t,e)}dispose(){this.composer.dispose()}}const ca=(s,t,e,n,i)=>{const r=i*i,a=r*i,o=2*a-3*r+1,l=a-2*r+i,c=-2*a+3*r,h=a-r;return o*s+l*e+c*t+h*n};class S0{constructor(){this.keys=[{pos:[60,22,60],look:[-2,4,-2]},{pos:[40,18,40],look:[8,6,8]},{pos:[20,17,26],look:[26,6,12]},{pos:[-4,18,26],look:[20,5,10]},{pos:[-28,19,16],look:[28,5,-2]},{pos:[-22,18,-2],look:[24,6,6]},{pos:[2,17,-16],look:[-10,5,18]},{pos:[26,18,-6],look:[10,6,30]},{pos:[44,20,20],look:[-6,5,6]}],this.dur=90}_at(t){const e=this.keys.length,n=Math.floor(t)%e,i=(n+1)%e,r=t-Math.floor(t),a=this.keys[n],o=this.keys[i],l=new E((o.pos[0]-a.pos[0])*.5,(o.pos[1]-a.pos[1])*.5,(o.pos[2]-a.pos[2])*.5);return{pos:new E(ca(a.pos[0],o.pos[0],l.x,l.x,r),ca(a.pos[1],o.pos[1],l.y,l.y,r),ca(a.pos[2],o.pos[2],l.z,l.z,r)),look:new E(a.look[0],a.look[1],a.look[2]).lerp(new E(o.look[0],o.look[1],o.look[2]),r)}}apply(t,e){const n=t/this.dur*this.keys.length,{pos:i,look:r}=this._at(n);return e.position.copy(i),e.lookAt(r),i}}class y0{constructor(){this.keys=new Set,this.mouse={down:!1,pressed:!1},this.aimDown=!1,this.aimPressed=!1,this.lookDelta={x:0,y:0},this.locked=!1,this.lastLockState=!1,this._down=this._down.bind(this),this._up=this._up.bind(this),this._move=this._move.bind(this),window.addEventListener("keydown",this._down),window.addEventListener("keyup",this._up),document.addEventListener("pointerlockchange",()=>{const t=this.locked;this.locked=document.pointerLockElement!==null,this.lastLockState=t,!this.locked&&dt.started}),document.addEventListener("mousemove",this._move),document.addEventListener("mousedown",t=>{t.button===0&&(this.mouse.down=!0),t.button===2&&(this.aimDown=!0),dt.started&&!this.locked&&t.button===0&&this.pointerLock()}),document.addEventListener("mouseup",t=>{t.button===0&&(this.mouse.down=!1),t.button===2&&(this.aimDown=!1)}),document.addEventListener("contextmenu",t=>t.preventDefault())}_down(t){this.keys.add(t.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()}_up(t){this.keys.delete(t.code)}_move(t){this.locked&&(this.lookDelta.x+=t.movementX,this.lookDelta.y+=t.movementY)}pointerLock(){const t=document.body;t.requestPointerLock&&t.requestPointerLock()}has(t){return this.keys.has(t)}get moveVec(){let t=0,e=0;return this.has("KeyW")&&(e+=1),this.has("KeyS")&&(e-=1),this.has("KeyA")&&(t-=1),this.has("KeyD")&&(t+=1),t&&e&&(t*=.7071,e*=.7071),{x:t,z:e}}get sprint(){return this.has("ShiftLeft")||this.has("ShiftRight")}get crouch(){return this.has("ControlLeft")||this.has("ControlRight")||this.has("KeyC")}get jump(){return this.has("Space")}get aim(){return this.aimDown}consumeLook(){const t=this.lookDelta,e={x:t.x,y:t.y};return t.x=0,t.y=0,e}update(){this.mouse.pressed=!1,this.aimPressed=!1}}class w0{constructor(){this.ctx=null,this.master=null,this._noiseBuf=null,this._init=this._init.bind(this),window.addEventListener("pointerdown",this._init,{once:!0})}_init(){if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=dt.audio.master,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate;this._noiseBuf=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this._noiseBuf.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1}update(t){if(!this.ctx||!t)return;const e=this.ctx.listener,n=t.quaternion,i=-2*(n.x*n.z+n.w*n.y),r=-2*(n.y*n.z-n.w*n.x),a=-1+2*(n.x*n.x+n.y*n.y),o=2*(n.x*n.y-n.w*n.z),l=1-2*(n.x*n.x+n.z*n.z),c=2*(n.y*n.z+n.w*n.x);e.positionX?(e.positionX.value=t.position.x,e.positionY.value=t.position.y,e.positionZ.value=t.position.z,e.forwardX.value=i,e.forwardY.value=r,e.forwardZ.value=a,e.upX.value=o,e.upY.value=l,e.upZ.value=c):(e.setPosition&&e.setPosition(t.position.x,t.position.y,t.position.z),e.setOrientation&&e.setOrientation(i,r,a,o,l,c))}_pannerAt(t,e){if(!this.ctx)return null;const n=this.ctx.createPanner();return n.positionX?(n.positionX.value=t.x,n.positionY.value=t.y,n.positionZ.value=t.z):n.setPosition(t.x,t.y,t.z),n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=3,n.maxDistance=100,n.rolloffFactor=1.8,n.connect(e),n}_noise({dur:t=.2,filter:e=800,filterType:n="lowpass",gain:i=.2,attack:r=.005,pos:a=null}={}){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createBufferSource();l.buffer=this._noiseBuf,l.loop=!0;const c=this.ctx.createBiquadFilter();c.type=n,c.frequency.value=e,c.Q.value=.8;const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,o),h.gain.exponentialRampToValueAtTime(i,o+r),h.gain.exponentialRampToValueAtTime(1e-4,o+t);const d=a?this._pannerAt(a,this.master):this.master;l.connect(c),c.connect(h),h.connect(d),l.start(o),l.stop(o+t+.05)}_tone({freq:t=440,type:e="sine",dur:n=.15,gain:i=.2,end:r=80,pos:a=null}){if(!this.ctx)return;const o=this.ctx.currentTime,l=this.ctx.createOscillator();l.type=e,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(Math.max(20,r),o+n);const c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+n);const h=a?this._pannerAt(a,this.master):this.master;l.connect(c),c.connect(h),l.start(o),l.stop(o+n+.05)}gunshot(){this._noise({dur:.09,filter:3200,filterType:"highpass",gain:.5,attack:.001}),this._noise({dur:.22,filter:650,filterType:"lowpass",gain:.4,attack:.001}),this._tone({freq:150,type:"triangle",dur:.16,gain:.35,end:42})}enemyShot(t=null){this._noise({dur:.1,filter:2600,filterType:"highpass",gain:.22,attack:.001,pos:t}),this._noise({dur:.2,filter:520,filterType:"lowpass",gain:.16,attack:.001,pos:t})}reload(){this._noise({dur:.08,filter:1400,gain:.2,attack:.002}),this._noise({dur:.12,filter:900,gain:.22,attack:.002}),this._noise({dur:.09,filter:2e3,gain:.18,attack:.002})}empty(){this._tone({freq:880,type:"square",dur:.06,gain:.1,end:660})}hit(){this._tone({freq:1200,type:"square",dur:.05,gain:.12,end:900})}hitmarker(){this._tone({freq:1400,type:"square",dur:.045,gain:.15,end:1e3})}step(){this._noise({dur:.07,filter:500,gain:.06,attack:.001})}jump(){this._noise({dur:.12,filter:700,gain:.08})}land(){this._noise({dur:.15,filter:350,gain:.12})}explosion(t=null){this._noise({dur:.6,filter:320,filterType:"lowpass",gain:.6,attack:.002,pos:t}),this._noise({dur:.3,filter:1500,filterType:"highpass",gain:.2,attack:.001,pos:t}),this._tone({freq:90,type:"sine",dur:.5,gain:.5,end:24,pos:t})}hurt(){this._tone({freq:260,type:"sawtooth",dur:.12,gain:.12,end:140})}death(){this._tone({freq:180,type:"sawtooth",dur:.5,gain:.2,end:40})}waveStart(){this._tone({freq:520,type:"square",dur:.1,gain:.08,end:520}),this._tone({freq:660,type:"square",dur:.1,gain:.08,end:660})}missionComplete(){[660,880,1100].forEach((t,e)=>setTimeout(()=>this._tone({freq:t,type:"sine",dur:.35,gain:.14}),e*160))}}const Wi=(s,t)=>({d:new Uint8Array(s*t*4),w:s,h:t});function b0(s,t){const e=new Rn(s.c);return e.wrapS=e.wrapT=ji,e.colorSpace=Pe,e.anisotropy=8,t.repeat&&e.repeat.set(t.repeat,t.repeat),e}function ir(s,t,{normal:e=!1,linear:n=!1}={}){const i=new t0(s.d,s.w,s.h);return i.wrapS=i.wrapT=ji,i.colorSpace=e||n?Bn:Pe,i.anisotropy=8,t.repeat&&i.repeat.set(t.repeat,t.repeat),i.needsUpdate=!0,i}const $a=(s,t,e)=>{let n=Math.imul(s,374761393)+Math.imul(t,668265263)+Math.imul(e,2246822519);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296},as=(s,t,e,n=4)=>{let i=0,r=.5,a=1,o=0;for(let l=0;l<n;l++)i+=$a(Math.floor(s*a),Math.floor(t*a),e)*r,o+=r,r*=.5,a*=2;return i/o};function E0(s,t,e,n,i){for(let r=0;r<s.h;r++)for(let a=0;a<s.w;a++){const o=a/s.w*20,l=r/s.h*20,c=as(o,l,t),h=($a(a,r,t*7+3)-.5)*n;let d=e[0]*(1+(c-.5)*i)+h,u=e[1]*(1+(c-.5)*i)+h,m=e[2]*(1+(c-.5)*i)+h;$a(a,r,t+11)>.965&&(d*=.55,u*=.55,m*=.55);const g=(r*s.w+a)*4;s.d[g]=Math.min(255,d),s.d[g+1]=Math.min(255,u),s.d[g+2]=Math.min(255,m),s.d[g+3]=255}}function T0(s,t,e){for(let n=0;n<s.h;n++)for(let i=0;i<s.w;i++){const r=1/s.w,a=(g,_)=>as(g/s.w*20,_/s.h*20,t),o=(a(i+r,n)-a(i-r,n))*e,l=(a(i,n+r)-a(i,n-r))*e;let c=-o,h=-l,d=1;const u=1/Math.sqrt(c*c+h*h+d*d),m=(n*s.w+i)*4;s.d[m]=(c*u*.5+.5)*255,s.d[m+1]=(h*u*.5+.5)*255,s.d[m+2]=(d*u*.5+.5)*255,s.d[m+3]=255}}function A0(s,t,e,n){for(let i=0;i<s.h;i++)for(let r=0;r<s.w;r++){const a=as(r/s.w*20,i/s.h*20,t),o=e+(a-.5)*n,l=(i*s.w+r)*4;s.d[l]=s.d[l+1]=s.d[l+2]=Math.min(255,o*255),s.d[l+3]=255}}function C0(s,t,e,n){for(let i=0;i<s.h;i++)for(let r=0;r<s.w;r++){const a=as(r/s.w*20,i/s.h*20,t),o=e+(1-a)*n,l=(i*s.w+r)*4;s.d[l]=s.d[l+1]=s.d[l+2]=Math.min(255,o*255),s.d[l+3]=255}}function R0(s,t={}){const n=Wi(256,256),i=Wi(256,256),r=Wi(256,256),a=Wi(256,256),o=Wi(256,256),l=s>>>0;E0(n,l,t.base||[.42,.42,.44],.06,.14),T0(i,l,t.normal||1.1),A0(r,l,t.rough||.88,.1),C0(a,l,.92,.1);for(let m=0;m<256;m++)for(let g=0;g<256;g++){const _=as(g/256*20,m/256*20,l),p=(m*256+g)*4;o.d[p]=o.d[p+1]=o.d[p+2]=_*255,o.d[p+3]=255}const c=document.createElement("canvas");c.width=c.height=256;const h=c.getContext("2d"),d=h.createImageData(256,256);d.data.set(n.d),h.putImageData(d,0,0);const u=t.repeat||[4,4];return{map:b0({c},{repeat:u}),normalMap:ir(i,{repeat:u},{normal:!0}),roughnessMap:ir(r,{repeat:u},{linear:!0}),aoMap:ir(a,{repeat:u},{linear:!0}),heightMap:ir(o,{repeat:u}),color:"#8f9096",size:256}}function P0(s){const e=Wi(128,128),n=s>>>0;for(let l=0;l<128;l++)for(let c=0;c<128;c++){const d=20+as(c/128*8,l/128*8,n)*34,u=(l*128+c)*4;e.d[u]=e.d[u+1]=e.d[u+2]=d,e.d[u+3]=255}const i=document.createElement("canvas");i.width=i.height=128;const r=i.getContext("2d"),a=r.createImageData(128,128);a.data.set(e.d),r.putImageData(a,0,0);const o=new Rn(i);return o.colorSpace=Pe,o}function L0(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");e.fillStyle="#0a0b0d",e.fillRect(0,0,256,256);for(let i=0;i<60;i++){const r=12+Math.random()*40;e.fillStyle=`rgba(12,13,15,${.3+Math.random()*.5})`,e.beginPath(),e.arc(Math.random()*256,Math.random()*256,r,0,7),e.fill()}e.strokeStyle="rgba(210,205,195,0.25)",e.lineWidth=1;for(let i=0;i<40;i++)e.beginPath(),e.moveTo(Math.random()*256,Math.random()*256),e.lineTo(Math.random()*256,Math.random()*256),e.stroke();const n=new Rn(t);return n.wrapS=n.wrapT=ji,n.colorSpace=Pe,n.repeat.set(6,6),n}function D0(s=128){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.4,"rgba(255,255,255,0.55)"),n.addColorStop(.75,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),new Rn(t)}function I0(s=64){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.3,"rgba(255,255,255,0.8)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),new Rn(t)}const mn={concrete:R0,makeDirtColorTex:P0,makeDecalOverlay:L0,smokeTexture:D0,glowTexture:I0},U0=new E,nn={aabbs:[],setGeometry(s,t){if(this.aabbs.length=0,s)for(const e of s)this.aabbs.push({min:e.box.min.clone(),max:e.box.max.clone()});if(t)for(const e of t)this.aabbs.push({min:e.box.min.clone(),max:e.box.max.clone()})},resolveCircle(s,t,e=-5,n=50){const i=U0.copy(s),r=4;for(let a=0;a<r;a++){let o=!1;for(let l=0;l<this.aabbs.length;l++){const c=this.aabbs[l];if(c.max.y<e||c.min.y>n)continue;const h=Math.max(c.min.x,Math.min(i.x,c.max.x)),d=Math.max(c.min.z,Math.min(i.z,c.max.z)),u=i.x-h,m=i.z-d,g=u*u+m*m,_=t*t;if(g<_){o=!0;const p=Math.sqrt(g);if(p<1e-4){const f=Math.min(Math.abs(i.x-c.min.x),Math.abs(i.x-c.max.x)),S=Math.min(Math.abs(i.z-c.min.z),Math.abs(i.z-c.max.z));f<S?i.x=i.x<(c.min.x+c.max.x)*.5?c.min.x-t:c.max.x+t:i.z=i.z<(c.min.z+c.max.z)*.5?c.min.z-t:c.max.z+t}else{const f=t-p;i.x+=u/p*f,i.z+=m/p*f}}}if(!o)break}return i.clone()},collides(s,t){for(let e=0;e<this.aabbs.length;e++){const n=this.aabbs[e],i=(n.max.x-n.min.x)*.5,r=(n.max.y-n.min.y)*.5,a=(n.max.z-n.min.z)*.5,o=(n.min.x+n.max.x)*.5,l=(n.min.y+n.max.y)*.5,c=(n.min.z+n.max.z)*.5;if(!(Math.abs(s.x-o)>t.x+i)&&!(Math.abs(s.y-l)>t.y+r)&&!(Math.abs(s.z-c)>t.z+a))return!0}return!1},groundAt(s,t){let e=0;for(let n=0;n<this.aabbs.length;n++){const i=this.aabbs[n];i.walkable&&s>=i.min.x&&s<=i.max.x&&t>=i.min.z&&t<=i.max.z&&i.max.y>e&&(e=i.max.y)}return e}};function an(s,t,e,n){const i=new Me(s,t,e),r=new Bt(n);return new bt(i,r)}const Vt=(s,t,e)=>{const n=Math.sin(s*12.9898+78.233)*43758.5453,i=n-Math.floor(n);return t+i*(e-t)};function N0(s,t,e,n,i,r,a,o={}){const l=new se,c=e/Math.max(n,1),h=.25,d=1.2,u=c*.58,m=c*.08,g=[{side:"front",cx:0,cz:-t/2,rw:s,rd:h},{side:"back",cx:0,cz:t/2,rw:s,rd:h},{side:"left",cx:-s/2,cz:0,rw:h,rd:t},{side:"right",cx:s/2,cz:0,rw:h,rd:t}];for(const S of g){const y=S.rd>S.rw;for(let b=0;b<n;b++){const U=b*c+c/2,A=new Me(S.rw,c,S.rd),T=new Bt(i),D=new bt(A,T);if(D.position.set(S.cx,U,S.cz),D.castShadow=!0,D.receiveShadow=!0,l.add(D),b<n&&!o.noWindows){const w=Math.floor(y?t/2.2:s/2.2),x=y?t/(w+1):s/(w+1);for(let R=1;R<=w;R++){const z=Math.abs(Math.sin(a*13.7+b*3.1+R*7.3));if(o.brokenWindowChance&&z<o.brokenWindowChance)continue;const F=new Ue(d,u),W=new Bt({...r,side:Ne}),V=new bt(F,W),B=-x*(w+1)/2+R*x;y?(V.position.set(S.cx,U+m,B),V.rotation.y=0):(V.position.set(B,U+m,S.cz),V.rotation.y=Math.PI/2),l.add(V)}}}}const _=new Me(s+.4,.2,t+.4),p=new Bt({...i,roughness:.95}),f=new bt(_,p);if(f.position.y=e+.1,f.castShadow=!0,f.receiveShadow=!0,l.add(f),!o.noRoofClutter)for(let S=0;S<3;S++){const y=.6+Vt(a+S*99,0,.4),b=.5+Vt(a+S*101,0,.3),U=.6+Vt(a+S*103,0,.3),A=an(y,b,U,{color:"#3a3d42",roughness:.65,metalness:.7});A.position.set(Vt(a+S,-.4,.4)*s,e+.1+b/2,Vt(a+S+50,-.4,.4)*t),A.castShadow=!0,l.add(A)}return l}function F0(s,t,e,n,i,r,a,o,l={}){const c=new se,h=e/Math.max(n,1),d=.25,u=[{side:"front",cx:0,cz:-t/2,rw:s,rd:d},{side:"back",cx:0,cz:t/2,rw:s,rd:d},{side:"left",cx:-s/2,cz:0,rw:d,rd:t},{side:"right",cx:s/2,cz:0,rw:d,rd:t}],m=new Set,g=1+Math.floor(Vt(o+1,0,2.99)),_=["front","back","left","right"];for(let S=0;S<g;S++)m.add(_[Math.floor(Vt(o+S*7,0,3.99))]);for(const S of u){S.rd>S.rw;for(let y=0;y<n;y++){const b=y*h+h/2;if(!(m.has(S.side)&&Vt(o+y*19+S.side.charCodeAt(0),0,1)>.25)){const A=m.has(S.side)?r:i,T=new Me(S.rw,h*(.6+Vt(o+y,0,.4)),S.rd),D=new bt(T,new Bt(A));D.position.set(S.cx,b,S.cz),D.castShadow=!0,D.receiveShadow=!0,c.add(D)}}}const p=e+.1,f=2+Math.floor(Vt(o+2,0,2.99));for(let S=0;S<f;S++){const y=s*(.3+Vt(o+S*77,0,.3)),b=t*(.3+Vt(o+S*79,0,.3)),U=new Me(y,.15+Vt(o+S,0,.1),b),A=new bt(U,new Bt(r));A.position.set(Vt(o+S*81,-.35,.35)*s,p,Vt(o+S*83,-.35,.35)*t),A.castShadow=!0,A.receiveShadow=!0,c.add(A)}return c}function Cl(s,t,e,n,i,r,a){const o=new se;for(let l=0;l<i;l++){const c=.2+Vt(r+l,0,.7),h=.1+Vt(r+l+33,0,.4),d=.2+Vt(r+l+66,0,.6),u=new Me(c,h,d),m=new Bt(a),g=new bt(u,m);g.position.set(s+Vt(r+l*3,-e/2,e/2),h/2,t+Vt(r+l*5,-n/2,n/2)),g.rotation.set(Vt(r+l*7,-.5,.5),Vt(r+l*9,0,Math.PI*2),Vt(r+l*11,-.5,.5)),g.castShadow=!0,g.receiveShadow=!0,o.add(g)}return o.position.y=0,o}function O0(s,t,e,n){const i=new se,r=1.8,a=.7,o=new Me(s,a,r),l=new bt(o,new Bt(e));l.position.y=.5,l.castShadow=!0,l.receiveShadow=!0,i.add(l);const c=s*.45,h=.65,d=new Me(c,h,r-.15),u=new bt(d,new Bt(n));u.position.set(-s*.08,a+.35+h/2,0),u.rotation.x=-.08,u.castShadow=!0,u.receiveShadow=!0,i.add(u);const m=.32,g=.22,_=s*.34,p=r/2+.06,f=[[_,m,p],[_,m,-p],[-_,m,p],[-_,m,-p]];for(const[S,y,b]of f){const U=new yn(m,m,g,12),A=new Bt({color:"#1a1a1a",roughness:.9,metalness:.1}),T=new bt(U,A);T.position.set(S,y,b),T.rotation.z=Math.PI/2,T.castShadow=!0,i.add(T)}return i}function z0(s,t,e){const n=new se,i=.55,r=.28,a=.35;for(let o=0;o<2;o++){const l=o*r,c=o===0?0:Vt(t+o,-.08,.08);for(let h=0;h<s;h++){const d=new Me(i,r,a),u=d.attributes.position;for(let _=0;_<u.count;_++){const p=u.getY(_);p>0&&u.setY(_,p*.82)}d.computeVertexNormals();const m=new Bt(e),g=new bt(d,m);g.position.set(h*i*.88,l+r/2,c),g.rotation.y=Vt(t+h*17+o,-.1,.1),g.rotation.z=Vt(t+h*23+o,-.08,.08),g.castShadow=!0,g.receiveShadow=!0,n.add(g)}}return n}function B0(s,t,e,n){const i=new Me(s,t,e),r=new Bt(n),a=new bt(i,r);return a.castShadow=!0,a.receiveShadow=!0,a}function k0(s,t){const e=new se,n=.5,r=an(s,n,.55,t);r.position.y=n/2,r.castShadow=!0,r.receiveShadow=!0,e.add(r);const a=.35,l=an(s-.15,a,.22,t);return l.position.y=n+a/2,l.castShadow=!0,l.receiveShadow=!0,e.add(l),e}function H0(s,t){const i=new yn(.3,.3,.88,16),r=new bt(i,new Bt(t));return r.position.y=.88/2,r.castShadow=!0,r.receiveShadow=!0,r}function V0(s){const t=new se,e=.32,n=.18,i=new Ar((e+n)/2,(e-n)/2,8,16),r=new bt(i,new Bt({color:"#1a1a1a",roughness:.9,metalness:.05}));return r.castShadow=!0,r.receiveShadow=!0,t.add(r),t}function G0(s,t){const e=new se,n=s-1,i=2.2,r=2.2,a=.15;for(let c=-1;c<=1;c+=2)for(let h=-1;h<=1;h+=2){const d=an(a,n,a,{color:"#4a3a2a",roughness:.8,metalness:.5});d.position.set(c*(i/2-.2),n/2,h*(r/2-.2)),d.castShadow=!0,e.add(d)}for(let c=0;c<4;c++){const h=c*Math.PI/2,d=Math.cos(h)*(i/2-.2),u=Math.sin(h)*(r/2-.2),m=an(.08,n*.6,.08,{color:"#3a3020",roughness:.85,metalness:.5});m.position.set(d,n*.4,u),m.rotation.z=Math.cos(h)*.6,m.rotation.x=Math.sin(h)*.6,e.add(m)}const o=an(i,.12,r,t);o.position.y=n,o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=.9;for(let c=-1;c<=1;c+=2)for(let h=-1;h<=1;h+=2){const d=an(.06,l,.06,{color:"#5a4a3a",roughness:.7,metalness:.6});d.position.set(c*(i/2-.12),n+l/2,h*(r/2-.12)),e.add(d)}return e}function W0(s,t,e,n){const i=new se,r=2.2,a=Math.ceil(s/r)+1;for(let o=0;o<a;o++){const l=-s/2+o*r,c=an(.06,t,.06,{color:"#5a5a60",roughness:.55,metalness:.8});c.position.set(l,t/2,0),c.castShadow=!0,i.add(c)}for(let o=0;o<a-1;o++){const l=r,c=-s/2+o*r+l/2;if(Vt(n+o,0,1)<e)continue;const h=new Ue(l-.08,t-.1),d=new Bt({color:"#6a6a72",roughness:.5,metalness:.75,side:Ne,transparent:!0,opacity:.55}),u=new bt(h,d);u.position.set(c,t/2,0),u.receiveShadow=!0,i.add(u)}return i}function X0(s,t,e){const n=new se;for(let i=0;i<s;i++){const a=new yn(.025,.025,t,6),o=new Bt({color:"#8b4513",roughness:.5,metalness:.9}),l=new bt(a,o);l.position.set(Vt(e+i*3,-.3,.3),t/2,Vt(e+i*5,-.3,.3)),l.rotation.x=Vt(e+i*7,-.3,.3),l.rotation.z=Vt(e+i*9,-.3,.3),l.castShadow=!0,n.add(l)}return n}function Y0(s,t,e){const n=new yn(t,t,s,8),i=new Bt(e),r=new bt(n,i);return r.castShadow=!0,r.receiveShadow=!0,r}function q0(){const s=new se,t=1,e=1.2;for(let n=0;n<5;n++){const i=an(t,.04,.08,{color:"#8b7355",roughness:.85,metalness:.05});i.position.set(0,.06,-e/2+n*(e/4)),s.add(i)}for(let n=0;n<3;n++){const i=an(t,.04,.08,{color:"#7a6345",roughness:.85,metalness:.05});i.position.set(0,.02,-e/3+n*(e/2)),s.add(i)}for(let n=-1;n<=1;n+=2)for(let i=-1;i<=1;i+=2){const r=an(.08,.08,.08,{color:"#6b5335",roughness:.85,metalness:.05});r.position.set(n*(t/2-.12),.04,i*(e/2-.12)),s.add(r)}return s}function K0(s){const t=.22+Vt(s,0,.08),e=.45+Vt(s+7,0,.2),n=new Rs(t,8,6),i=n.attributes.position;for(let o=0;o<i.count;o++){const l=i.getY(o);l>0&&i.setY(o,l*.6),i.setY(o,i.getY(o)*(e/t));const c=1+Math.abs(i.getY(o)/e-.5)*.3;i.setX(o,i.getX(o)*c),i.setZ(o,i.getZ(o)*c)}n.computeVertexNormals();const r=new Bt({color:"#1a1c1e",roughness:.9,metalness:.02}),a=new bt(n,r);return a.castShadow=!0,a.receiveShadow=!0,a}function Z0(s){const t=new se,e=.7+Vt(s,0,.3),n=.5+Vt(s+1,0,.2),i=.7+Vt(s+2,0,.3),r=an(e,n,i,{color:"#4a4d52",roughness:.5,metalness:.7});r.castShadow=!0,t.add(r);const a=new Ue(e*.7,i*.5),o=new Bt({color:"#2a2d32",roughness:.4,metalness:.8,side:Ne}),l=new bt(a,o);return l.position.y=n/2+.01,l.rotation.x=-Math.PI/2,t.add(l),t}const Vi=130,Xt=0;function Te(s,t){return Math.abs(Math.sin(s*127.1+t*311.7)*43758.5453)%1}function fe(s,t,e){return t+Te(s,0)*(e-t)}class $0{constructor(t,e){this.r=t,this.lighting=e,this.scene=t.scene,this.fireLights=[],this._smokePlanes=[],this._flickerData=[],this.raycastables=[],this.explosiveBarrels=[];const n=mn.concrete(42,{repeat:14,rough:.9}),i=mn.concrete(77,{repeat:8,rough:.92,base:[.3,.3,.33]}),r=mn.concrete(99,{repeat:6,rough:.95,base:[.22,.21,.23]});this.matWall={map:n.map,normalMap:n.normalMap,roughnessMap:n.roughnessMap,aoMap:n.aoMap,roughness:.88,metalness:.04,color:"#8f9096"},this.matWallDark={map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,aoMap:i.aoMap,roughness:.92,metalness:.04,color:"#5a5b5f"},this.matBurned={map:r.map,normalMap:r.normalMap,roughnessMap:r.roughnessMap,aoMap:r.aoMap,roughness:.95,metalness:.03,color:"#2a2b2d"},this.matWindow={color:"#1a1d24",roughness:.35,metalness:.1,emissive:"#0a0c10",emissiveIntensity:.15},this.matCarBody={color:"#1d1f22",roughness:.65,metalness:.25},this.matCarBurned={color:"#18191b",roughness:.9,metalness:.15},this.matRust={color:"#3a2a1a",roughness:.85,metalness:.3},this.matSandbag={color:"#b8a080",roughness:.92,metalness:.02},this.matCrate={color:"#9b8460",roughness:.82,metalness:.03},this.matBarrier={map:n.map,normalMap:n.normalMap,roughnessMap:n.roughnessMap,roughness:.85,metalness:.04,color:"#b0b2b8"},this.matMetal={color:"#5a5550",roughness:.55,metalness:.7},this.matBarrel={color:"#2a2a25",roughness:.5,metalness:.6},this._buildGround(),this._buildRoads(),this._buildBuildings(),this._buildCars(),this._buildProps(),this._buildSmoke(),this._buildFireZones(),this._buildDecorations(),this._buildAtmosphericZones()}_buildGround(){const t=Vi*2+20,e=new Ue(t,t);e.setAttribute("uv2",e.attributes.uv.clone());const n=new Bt({map:this.matWall.map,normalMap:this.matWall.normalMap,roughnessMap:this.matWall.roughnessMap,aoMap:this.matWall.aoMap,roughness:.9,metalness:.02,color:"#8f9096"}),i=new bt(e,n);i.rotation.x=-Math.PI/2,i.position.y=Xt,i.receiveShadow=!0,this.scene.add(i);const r=mn.makeDecalOverlay(),a=new Tn({map:r,transparent:!0,opacity:.06,depthWrite:!1,blending:$e}),o=new bt(new Ue(t,t),a);o.rotation.x=-Math.PI/2,o.position.y=Xt+.01,this.scene.add(o)}_buildRoads(){const t=mn.concrete(55,{repeat:12,rough:.94,base:[.18,.18,.2]}),e=8;this._addRoadStrip(0,Vi,e,0,t),this._addRoadStrip(0,Vi,e,Math.PI/2,t),this._addRoadStrip(-40,Vi,5.5,0,t),this._addRoadStrip(35,Vi,5.5,Math.PI/2,t),this._addRoadStrip(55,Vi,4.5,Math.PI/2,t)}_addRoadStrip(t,e,n,i,r){const a=new Ue(n,e*2);a.setAttribute("uv2",a.attributes.uv.clone());const o=new Bt({map:r.map,normalMap:r.normalMap,roughnessMap:r.roughnessMap,aoMap:r.aoMap,roughness:.94,metalness:.03,color:"#1a1c1f"}),l=new bt(a,o);if(l.rotation.x=-Math.PI/2,l.rotation.z=i,Math.abs(i)<.01?l.position.set(t,Xt+.02,0):l.position.set(0,Xt+.02,t),l.receiveShadow=!0,this.scene.add(l),n<6)return;const c=new Tn({color:"#cccc44",transparent:!0,opacity:.35,depthWrite:!1});for(let h=-1;h<=1;h+=2){const d=new Ue(.12,e*2),u=new bt(d,c);if(u.rotation.x=-Math.PI/2,u.rotation.z=i,u.position.y=Xt+.025,Math.abs(i)<.01?u.position.set(t+h*2,u.position.y,0):u.position.set(0,u.position.y,t+h*2),this.scene.add(u),h===-1){const m=Math.floor(e*2/4.5);for(let g=0;g<m;g++){if(g%2===0)continue;const _=new Ue(.12,3.5),p=new bt(_,c);p.rotation.x=-Math.PI/2,p.rotation.z=i,p.position.y=Xt+.025;const f=-e+g*4.5+1.75;Math.abs(i)<.01?p.position.set(t,p.position.y,f):p.position.set(f,p.position.y,t),this.scene.add(p)}}}}_buildBuildings(){const t=[{x:-20,z:-22,w:10,d:12,h:12,floors:3,destroyed:!1,open:!0,seed:1},{x:18,z:-18,w:9,d:10,h:10,floors:3,destroyed:!0,open:!1,seed:2},{x:-18,z:20,w:11,d:13,h:14,floors:4,destroyed:!1,open:!1,seed:3},{x:22,z:20,w:9,d:9,h:9,floors:2,destroyed:!0,open:!0,seed:4},{x:-55,z:-48,w:13,d:14,h:13,floors:4,destroyed:!1,open:!1,seed:5},{x:50,z:-45,w:10,d:11,h:12,floors:3,destroyed:!0,open:!1,seed:6},{x:-48,z:52,w:12,d:10,h:11,floors:3,destroyed:!1,open:!1,seed:7}];for(const e of t){const n=new se;if(e.destroyed){const i=F0(e.w,e.d,e.h,e.floors,this.matWall,this.matBurned,this.matWindow,e.seed,{});n.add(i);const r=Cl(0,0,e.w+2,e.d+2,30,e.seed+100,this.matBurned);n.add(r);const a=X0(6,1.8,e.seed+200);a.position.y=e.h*.7,n.add(a);const o=new Ue(1,1.4),l=new Tn({color:"#ff5a1a",transparent:!0,opacity:.35,side:Ne,depthWrite:!1});for(let c=0;c<3;c++){const h=new bt(o,l);h.position.set((Te(e.seed+c,0)-.5)*e.w*.6,e.h*.25+Te(e.seed+c,1)*e.h*.4,e.d/2+.05),n.add(h)}}else{const i=e.open?this.matWallDark:this.matWall,r=N0(e.w,e.d,e.h,e.floors,i,this.matWindow,e.seed);if(n.add(r),e.open){const a=Cl(0,0,e.w*.7,e.d*.5,15,e.seed+300,{color:"#6a6a6e",roughness:.85,metalness:.05});n.add(a)}}n.position.set(e.x,Xt,e.z),this.scene.add(n),n.traverse(i=>{i.isMesh&&this.raycastables.push(i)}),nn.aabbs.push({min:new E(e.x-e.w/2,Xt,e.z-e.d/2),max:new E(e.x+e.w/2,e.h,e.z+e.d/2)})}}_buildCars(){const t=[{x:-10,z:-15,rot:.3,len:4.2,seed:10,onSide:!1},{x:8,z:-10,rot:-.5,len:4.5,seed:11,onSide:!1},{x:-14,z:12,rot:1.8,len:4,seed:12,onSide:!0},{x:12,z:14,rot:-2.1,len:4.3,seed:13,onSide:!1},{x:30,z:-30,rot:.8,len:4.1,seed:14,onSide:!1},{x:-30,z:30,rot:-1.2,len:4.4,seed:15,onSide:!0},{x:45,z:8,rot:2.5,len:3.9,seed:16,onSide:!1},{x:-42,z:-10,rot:-.7,len:4.2,seed:17,onSide:!1}];for(const e of t){const n=Te(e.seed,50)>.3,i=n?this.matCarBurned:this.matCarBody,r=n?{color:"#1a1815",roughness:.9,metalness:.2}:this.matRust,a=O0(e.len,e.seed,i,r);a.position.set(e.x,Xt,e.z),a.rotation.y=e.rot,e.onSide&&(a.rotation.z=Math.PI/2,a.position.y=.45),this.scene.add(a);const o=1,l=e.len/2,c=e.onSide?e.len/2:1.2,h=Math.cos(e.rot),d=Math.sin(e.rot),u=[[-l,-o],[l,-o],[-l,o],[l,o]].map(([f,S])=>({x:e.x+f*h-S*d,z:e.z+f*d+S*h})),m=Math.min(...u.map(f=>f.x)),g=Math.max(...u.map(f=>f.x)),_=Math.min(...u.map(f=>f.z)),p=Math.max(...u.map(f=>f.z));nn.aabbs.push({min:new E(m,Xt,_),max:new E(g,Xt+c,p)})}}_buildProps(){const t=[{x:-5,z:-5,rot:.3,count:4,seed:20},{x:5,z:-3,rot:-.4,count:5,seed:21},{x:-10,z:8,rot:1.5,count:3,seed:22},{x:15,z:-15,rot:.7,count:5,seed:23},{x:-25,z:-20,rot:-.9,count:4,seed:24},{x:20,z:25,rot:2.1,count:4,seed:25},{x:-35,z:40,rot:1.1,count:3,seed:26},{x:40,z:35,rot:-2,count:5,seed:27}];for(const i of t){const r=z0(i.count,i.seed,this.matSandbag);r.position.set(i.x,Xt,i.z),r.rotation.y=i.rot,this.scene.add(r),nn.aabbs.push({min:new E(i.x-i.count*.25,Xt,i.z-.3),max:new E(i.x+i.count*.25,Xt+.55,i.z+.3)})}const e=[{x:-3,z:-8,seed:30},{x:8,z:5,seed:31},{x:-22,z:-12,seed:32},{x:28,z:-20,seed:33},{x:-40,z:-30,seed:34},{x:32,z:32,seed:35},{x:-15,z:35,seed:36},{x:48,z:18,seed:37}];for(const i of e){const r=2+Math.floor(Te(i.seed,99)*3);for(let a=0;a<r;a++){const o=.6+Te(i.seed+a,0)*.3,l=.5+Te(i.seed+a,1)*.3,c=.7+Te(i.seed+a,2)*.3,h=a>0?.5:0,d=B0(o,l,c,this.matCrate);d.position.set(i.x+Te(i.seed+a*3,3)*1-.5,Xt+l/2+h,i.z+Te(i.seed+a*3,4)*1-.5),d.rotation.y=Te(i.seed+a,5)*Math.PI*.25,this.scene.add(d),nn.aabbs.push({min:new E(d.position.x-o/2,Xt,d.position.z-c/2),max:new E(d.position.x+o/2,Xt+l+h,d.position.z+c/2),walkable:!0})}}for(let i=0;i<2;i++){const r=-8+i*20,a=-12+i*20,o=.2+i*1.5,l=k0(3.5,this.matBarrier);l.position.set(r,Xt,a),l.rotation.y=o,this.scene.add(l),nn.aabbs.push({min:new E(r-1.8,Xt,a-.35),max:new E(r+1.8,Xt+.85,a+.35),walkable:!0})}const n=G0(6,this.matMetal);n.position.set(25,Xt,-35),n.rotation.y=.4,this.scene.add(n),nn.aabbs.push({min:new E(23.8,Xt,-36.2),max:new E(26.2,6,-33.8),walkable:!0});for(let i=0;i<8;i++){const r=H0(60+i,this.matBarrel);r.position.set(-40+i*4+Te(60+i,0)*3,Xt,-25+Te(60+i,1)*6),r.rotation.y=Te(60+i,2)*Math.PI*2,this.scene.add(r)}}_buildSmoke(){const t=mn.smokeTexture(),e=[{x:-15,z:-18,scale:12},{x:20,z:-18,scale:10},{x:-50,z:40,scale:14},{x:45,z:-40,scale:11}];for(const n of e){const i=new se;for(let r=0;r<3;r++){const a=n.scale*(.8+r*.15),o=new Ue(a,a),l=new Tn({map:t,color:"#1a1c20",transparent:!0,opacity:.28-r*.07,side:Ne,depthWrite:!1,blending:$e}),c=new bt(o,l);c.position.y=15+r*8,c.rotation.y=r*.7,c.userData={baseY:c.position.y,speed:.1+r*.04,phase:r*1.2},i.add(c),this._smokePlanes.push(c)}i.position.set(n.x,Xt,n.z),this.scene.add(i)}}_buildFireZones(){const t=[{x:18,z:-18,y:1.5,color:"#ff7a2a",intensity:2.5,range:14},{x:22,z:20,y:1.5,color:"#ff6a1a",intensity:2,range:12},{x:50,z:-45,y:1.5,color:"#ff5a10",intensity:1.8,range:11}];for(const e of t){const n=this.lighting.addZone(e.color,e.intensity,e.range,new E(e.x,e.y,e.z));n.userData.fireData={baseIntensity:e.intensity,phase:e.color.charCodeAt(1)*.1},this.fireLights.push(n),this._flickerData.push(n);const i=new Ue(1.5,2),r=new Tn({map:mn.glowTexture(),color:e.color,transparent:!0,opacity:.5,side:Ne,depthWrite:!1}),a=new bt(i,r);a.position.set(e.x,e.y+.2,e.z),a.lookAt(new E(e.x-1,e.y+.2,e.z)),this.scene.add(a),a.userData.fireGlow=!0,this._flickerData.push(a)}}_buildDecorations(){for(let i=0;i<12;i++){const r=V0();r.position.set(fe(80+i,-45,45),Xt+.15,fe(80+i+50,-45,45)),r.rotation.set(fe(80+i+20,-.4,.4),fe(80+i+30,0,Math.PI*2),fe(80+i+40,-.3,.3)),this.scene.add(r)}for(let i=0;i<10;i++){const r=K0(90+i);r.position.set(fe(90+i,-50,50),Xt,fe(90+i+50,-50,50)),this.scene.add(r)}for(let i=0;i<6;i++){const r=q0();r.position.set(fe(100+i,-48,48),Xt+.05,fe(100+i+50,-48,48)),r.rotation.y=fe(100+i+20,0,Math.PI*2),this.scene.add(r)}for(let i=0;i<8;i++){const r=Y0(1.5+Te(110+i,0)*3,.08,{color:"#6b4e3a",roughness:.55,metalness:.7});r.position.set(fe(110+i,-50,50),Xt+.04,fe(110+i+50,-50,50)),r.rotation.set(0,fe(110+i+10,0,Math.PI*2),fe(110+i+20,-.3,.3)),this.scene.add(r)}for(let i=0;i<4;i++){const r=Z0(120+i);r.position.set(fe(120+i,-50,50),Xt+.6,fe(120+i+50,-50,50)),r.rotation.y=fe(120+i+10,0,Math.PI*2),this.scene.add(r)}const t=[{x:-48,z:0,rot:Math.PI/2,len:20,seed:130,holeChance:.3},{x:48,z:-10,rot:-Math.PI/2,len:18,seed:131,holeChance:.35},{x:-10,z:48,rot:0,len:22,seed:132,holeChance:.25},{x:15,z:-48,rot:-.4,len:16,seed:133,holeChance:.4}];for(const i of t){const r=W0(i.len,2.5,i.holeChance,i.seed);r.position.set(i.x,Xt,i.z),r.rotation.y=i.rot,this.scene.add(r)}const e=["#5a5a5e","#6a6050","#4a4a4e","#3a352a"];for(let i=0;i<25;i++){const r=.1+Te(140+i,0)*.4,a=.05+Te(140+i,1)*.2,o=.1+Te(140+i,2)*.4,l=new Me(r,a,o),c=new Bt({color:e[i%e.length],roughness:.88,metalness:.05}),h=new bt(l,c);h.position.set(fe(140+i,-55,55),Xt+a/2,fe(140+i+50,-55,55)),h.rotation.set(fe(140+i+10,-.5,.5),fe(140+i+20,0,Math.PI*2),fe(140+i+30,-.5,.5)),h.castShadow=!0,h.receiveShadow=!0,this.scene.add(h)}const n=[{x:-15,z:-16,seed:200},{x:16,z:-15,seed:201},{x:-14,z:18,seed:202},{x:20,z:22,seed:203},{x:-50,z:-42,seed:204},{x:46,z:-40,seed:205},{x:-44,z:48,seed:206},{x:55,z:50,seed:207}];for(const i of n){const r=new yn(.28,.28,.8,12),a=new bt(r,new Bt({color:"#cc3311",roughness:.5,metalness:.7,emissive:"#220000",emissiveIntensity:.3}));a.position.set(i.x,Xt+.4,i.z),a.castShadow=!0,a.receiveShadow=!0,a.userData={isExplosiveBarrel:!0,exploded:!1};const o=new yn(.29,.29,.06,12),l=new bt(o,new Bt({color:"#ffcc00",roughness:.4,metalness:.3,emissive:"#331100",emissiveIntensity:.2}));l.position.y=.08,a.add(l),this.scene.add(a),this.explosiveBarrels.push(a),nn.aabbs.push({min:new E(i.x-.3,Xt,i.z-.3),max:new E(i.x+.3,Xt+.8,i.z+.3)})}}_buildAtmosphericZones(){this.lighting.addZone("#ffb870",.9,22,new E(0,.4,0)),this.lighting.addZone("#ffc080",.7,14,new E(-20,1.8,-22)),this.lighting.addZone("#ffb066",.6,18,new E(8,.35,10)),this.lighting.addZone("#ffaa55",.55,16,new E(15,.35,-12)),this.lighting.addZone("#ff9944",.5,12,new E(25,.4,-35)),this.lighting.addZone("#ffb870",.45,20,new E(-35,.35,-25)),this.lighting.addZone("#ffc080",.5,16,new E(-48,.35,40)),this.lighting.addZone("#ffaa55",.4,18,new E(48,.4,-35)),this.lighting.addZone("#ffb880",.35,24,new E(0,.35,35))}update(t,e,n){for(const i of this._flickerData){if(i.isPointLight&&i.userData.fireData){const r=i.userData.fireData,a=1+Math.sin(e*8+r.phase)*.12+Math.sin(e*14+r.phase*1.7)*.08+Math.sin(e*21)*.05;i.intensity=r.baseIntensity*Math.max(.6,a)}i.userData&&i.userData.fireGlow&&(i.material.opacity=.35+Math.sin(e*9+i.position.x*.3)*.15+Math.sin(e*13)*.08)}for(const i of this._smokePlanes){const r=i.userData;r&&(i.position.y=r.baseY+Math.sin(e*r.speed+r.phase)*1.5,i.position.x+=Math.sin(e*.3+r.phase)*.015)}}groundAt(t,e){return nn.groundAt(t,e)}collides(t,e=.5){const n=new E(e,.9,e);return nn.collides(t,n)}}const j0=new E,Rl=new E;class Q0{constructor(t,e,n){this.r=t,this.input=e,this.world=n,this.yaw=0,this.pitch=0,this.pos=new E(0,0,0),this.vel=new E(0,0,0),this.grounded=!1,this.crouchTarget=0,this.crouchSmooth=0,this.adsTarget=0,this.adsSmooth=0,this.sprintVal=0,this.moveSpeed=0,this.bobPhase=0,this.recoilPitch=0,this.recoilYaw=0,this.recoilSideAccum=0,this.landDip=0,this.landDipVel=0,this.hp=100,this.maxHp=100,this.isAlive=!0,this._dmgCooldown=0,this._view={ads:0,sprint:0,crouch:0,moving:!1,vel:0},this._bobVert=0,this._bobHoriz=0,this._currentFov=dt.fov}update(t){if(!this.isAlive)return;t>.15&&(t=.15),this._dmgCooldown>0&&(this._dmgCooldown-=t);const e=dt.movement;this._updateLook(),this._updateStateTargets(t);const n=e.eyeHeight,i=e.crouchHeight,r=Qe.lerp(n,i,this.crouchSmooth),a=this.world.groundAt(this.pos.x,this.pos.z);this.grounded=this.pos.y<=a+.001&&this.vel.y<=0,this._updateMovement(t),this._updateVertical(t,a),this._resolveCollision(r),this._updateBob(t,e),this._updateRecoil(t),this._updateLandDip(t),this.applyCamera(r),this._updateFOV(t),this._writeGameState(r)}_updateLook(){const t=this.input.consumeLook();t.x===0&&t.y===0||(this.yaw-=t.x*dt.sensitivity,this.pitch-=t.y*dt.sensitivity,this.pitch=Qe.clamp(this.pitch,-dt.pitchLimit,dt.pitchLimit))}_updateStateTargets(t){this.crouchTarget=this.input.crouch?1:0;const e=1-Math.exp(-14*t);this.crouchSmooth=Qe.lerp(this.crouchSmooth,this.crouchTarget,e),this.adsTarget=this.input.aim?1:0;const n=1-Math.exp(-t/Math.max(dt.adsTime,.001));this.adsSmooth=Qe.lerp(this.adsSmooth,this.adsTarget,n);const i=this.input.sprint&&this._isMovingForward()?1:0,r=1-Math.exp(-13*t);this.sprintVal=Qe.lerp(this.sprintVal,i,r)}_isMovingForward(){const t=this.input.moveVec;return t.z<=.01?!1:Math.abs(t.x)<t.z}_updateMovement(t){const e=dt.movement,n=this.input.moveVec,i=j0.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),r=Rl.set(Math.cos(this.yaw),0,-Math.sin(this.yaw));let a;this.crouchSmooth>.5?a=e.crouchSpeed:this.sprintVal>.5&&n.z>.1?a=Qe.lerp(e.walkSpeed,e.sprintSpeed,this.sprintVal):a=e.walkSpeed;const o=(i.x*n.z+r.x*n.x)*a,l=(i.z*n.z+r.z*n.x)*a,c=this.grounded?e.accel:e.airAccel,h=1-Math.exp(-c*t);if((n.x!==0||n.z!==0)&&(this.vel.x=Qe.lerp(this.vel.x,o,h),this.vel.z=Qe.lerp(this.vel.z,l,h)),this.grounded&&n.x===0&&n.z===0){const d=1-Math.exp(-e.friction*t);this.vel.x=Qe.lerp(this.vel.x,0,d),this.vel.z=Qe.lerp(this.vel.z,0,d),Math.abs(this.vel.x)<.01&&(this.vel.x=0),Math.abs(this.vel.z)<.01&&(this.vel.z=0)}this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,this.moveSpeed=Math.sqrt(this.vel.x*this.vel.x+this.vel.z*this.vel.z)}_updateVertical(t,e){const n=dt.movement;if(this.vel.y+=n.gravity*t,this.grounded&&this.input.jump&&(this.vel.y=n.jumpVel,this.grounded=!1,ae.emit("player:jump")),this.pos.y+=this.vel.y*t,this.pos.y<=e&&this.vel.y<0){const i=Math.abs(this.vel.y);this.pos.y=e,!this.grounded&&i>1&&(ae.emit("player:land",{impact:i}),this.landDip=Math.min(i*.018,.08),this.landDipVel=0),this.vel.y=0,this.grounded=!0}this.pos.y<e-.2&&(this.pos.y=e,this.vel.y=0,this.grounded=!0)}_resolveCollision(t){const e=this.pos.y+.1,n=this.pos.y+t,i=nn.resolveCircle(this.pos.clone(),dt.movement.radius,e,n);this.pos.x=i.x,this.pos.z=i.z}_updateBob(t,e){if(!this.grounded||this.moveSpeed<.15){this.bobPhase+=t*1.5;return}const n=e.bobFreq*Math.min(this.moveSpeed/e.walkSpeed,1.5);this.bobPhase+=this.moveSpeed*t*n;const i=1-this.adsSmooth*.75,r=1-this.sprintVal*.3;this._bobVert=Math.sin(this.bobPhase)*e.bobAmp*i*r,this._bobHoriz=Math.cos(this.bobPhase*.5)*e.bobAmp*.5*i*r}_updateRecoil(t){this.recoilPitch+=(0-this.recoilPitch)*t*8,this.recoilYaw+=(0-this.recoilYaw)*t*8}recoil(t){typeof t=="number"&&(this.recoilPitch-=t,this.recoilSideAccum+=(Math.random()-.5)*dt.weapon.recoilSide*2,this.recoilYaw+=this.recoilSideAccum,this.recoilSideAccum*=.5)}_updateLandDip(t){this.landDip>.001&&(this.landDipVel+=-this.landDip*30*t,this.landDipVel*=Math.max(0,1-t*12),this.landDip+=this.landDipVel*t,this.landDip<.001&&(this.landDip=0))}_updateFOV(t){const n=dt.fov+dt.sprintFovBoost*this.sprintVal,i=Qe.lerp(n,dt.adsFov,this.adsSmooth),r=1-Math.exp(-t/Math.max(dt.adsTime,.001));this._currentFov=Qe.lerp(this._currentFov,i,r),this.r.camera.fov=this._currentFov,this.r.camera.updateProjectionMatrix()}applyCamera(t){const e=dt.movement;let n=this.pos.y+t;n+=this._bobVert||0,n-=this.landDip,this.sprintVal>.01&&(n-=e.headBendSprint*this.sprintVal);const i=Rl.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=this._bobHoriz||0,a=this.pos.x+i.x*r,o=this.pos.z+i.z*r;this.r.camera.position.set(a,n,o);const l=this.pitch+this.recoilPitch,c=this.yaw+this.recoilYaw;this.r.camera.rotation.set(l,c,0,"YXZ")}_writeGameState(t){j.pos=this.pos,j.health=this.hp,j.alive=this.isAlive,j.view.ads=this.adsSmooth,j.view.sprint=this.sprintVal,j.view.crouch=this.crouchSmooth,j.view.moving=this.moveSpeed>.2,j.view.vel=this.moveSpeed}damage(t){!this.isAlive||typeof t!="number"||t<=0||this._dmgCooldown>0||(this.hp=Math.max(0,this.hp-t),this._dmgCooldown=.4,ae.emit("player:hurt",{hp:this.hp,damage:t}),this.hp<=0&&(this.isAlive=!1,ae.emit("player:dead")))}respawn(){this.hp=this.maxHp,this.isAlive=!0,this.pos.set(0,this.world.groundAt(0,0),0),this.vel.set(0,0,0),this.recoilPitch=0,this.recoilYaw=0,this.landDip=0,this.landDipVel=0,j.health=this.hp,j.alive=!0}get ads(){return this.adsSmooth}get crouch(){return this.crouchSmooth}get sprint(){return this.sprintVal}}function be(s,{metal:t=.7,rough:e=.4}={}){return new Bt({color:s,metalness:t,roughness:e})}function Ht(s,t,e,n,i=null,r=null){const a=new bt(t,e);return n&&a.position.set(n[0],n[1],n[2]),i&&a.rotation.set(i[0],i[1],i[2]),r&&a.scale.set(r[0],r[1],r[2]),s.add(a),a}const Qt=(s,t,e)=>new Me(s,t,e),Gi=(s,t,e,n)=>new yn(s,t,e,n||10);function Pl(){const s=new se,t=be(2369324,{metal:.85,rough:.3}),e=be(9278364,{metal:.95,rough:.28}),n=be(1382171,{metal:.25,rough:.55}),i=be(1053206,{metal:.9,rough:.22}),r=be(4870474,{metal:.6,rough:.4});Ht(s,Qt(.062,.07,.24),t,[0,0,.02]),Ht(s,Qt(.058,.018,.1),t,[0,-.044,.04]),Ht(s,Qt(.05,.045,.06),t,[0,-.03,.11]),Ht(s,Qt(.036,.012,.24),i,[0,.041,.02]);for(let o=0;o<6;o++)Ht(s,Qt(.038,.012,.008),i,[0,.049,.02-.1+o*.04]);Ht(s,Qt(.02,.018,.05),r,[.035,.028,.14]),Ht(s,Qt(.028,.018,.055),r,[.033,.005,.02]),Ht(s,Qt(.008,.03,.05),r,[.04,-.005,.02]),Ht(s,Qt(.01,.014,.03),r,[-.03,-.02,.09]),Ht(s,Gi(.024,.024,.2,4),n,[0,0,-.16],[0,0,Math.PI/4]),Ht(s,Qt(.028,.014,.2),i,[0,.028,-.16]),Ht(s,Qt(.014,.028,.2),i,[.028,0,-.16]),Ht(s,Qt(.028,.014,.2),i,[0,-.028,-.16]);for(let o=0;o<5;o++)Ht(s,Qt(.03,.008,.006),be(526602),[0,.033,-.11+o*.04]);Ht(s,Gi(.018,.018,.035,8),e,[0,0,-.3],[Math.PI/2,0,0]),Ht(s,Qt(.006,.03,.012),be(328966),[0,.032,-.3]),Ht(s,Gi(.0105,.0105,.26,12),e,[0,.001,-.43],[Math.PI/2,0,0]);for(let o=0;o<3;o++)Ht(s,Gi(.012,.012,.008,8),be(3159356),[0,.001,-.34-o*.06],[Math.PI/2,0,0]);Ht(s,Gi(.014,.016,.035,6),e,[0,.001,-.575],[Math.PI/2,0,0]),Ht(s,Qt(.02,.004,.004),be(2106410),[0,.006,-.575]);const a=new xe;a.position.set(0,.001,-.6),s.add(a),s.muzzle=a,Ht(s,Qt(.01,.03,.02),be(328966),[0,.03,.12]),Ht(s,Qt(.02,.006,.004),be(1119e3),[0,.05,.12]),Ht(s,Qt(.035,.095,.05),n,[0,-.07,.1],[.24,0,0]);for(let o=0;o<4;o++)Ht(s,Qt(.037,.006,.052),be(658189),[0,-.075+o*.018,.1],[.24,0,0]);Ht(s,Qt(.035,.13,.055),n,[0,-.115,.055],[.32,0,0]),Ht(s,Qt(.037,.025,.057),be(1053206),[0,-.175,.09],[.32,0,0]);for(let o=0;o<3;o++)Ht(s,Qt(.04,.006,.06),be(789776),[0,-.11+o*.035,.055],[.32,0,0]);return Ht(s,Gi(.012,.012,.16,8),t,[0,.005,.2],[Math.PI/2,0,0]),Ht(s,Qt(.022,.012,.055),r,[0,.005,.27]),Ht(s,Qt(.045,.05,.1),n,[0,-.015,.26]),Ht(s,Qt(.048,.056,.012),be(1053206),[0,-.015,.315]),Ht(s,Qt(.032,.026,.008),be(658189),[0,-.005,.275]),Ht(s,Qt(.008,.014,.006),e,[.03,-.012,-.05]),Ht(s,Qt(.008,.014,.006),e,[-.03,-.012,.24]),Ht(s,Qt(.002,.006,.05),be(855568),[.028,.006,.05]),Ht(s,Qt(.05,.002,.004),be(1711136),[-.01,-.02,-.05]),s}function bn(s,{metal:t=.7,rough:e=.4}={}){return new Bt({color:s,metalness:t,roughness:e})}function Ee(s,t,e,n,i=null,r=null){const a=new bt(t,e);return n&&a.position.set(n[0],n[1],n[2]),i&&a.rotation.set(i[0],i[1],i[2]),r&&a.scale.set(r[0],r[1],r[2]),s.add(a),a}const Ie=(s,t,e)=>new Me(s,t,e),Ll=(s,t,e,n)=>new yn(s,t,e,n||10);function J0(){const s=new se,t=bn(2764082,{metal:.9,rough:.25}),e=bn(1974308,{metal:.7,rough:.35}),n=bn(8949140,{metal:.95,rough:.22}),i=bn(1118741,{metal:.15,rough:.6}),r=bn(3816768,{metal:.6,rough:.4}),a=bn(658189,{metal:.8,rough:.3});Ee(s,Ie(.03,.05,.15),e,[0,-.025,0]),Ee(s,Ie(.018,.008,.028),e,[.005,-.058,.045]),Ee(s,Ie(.028,.08,.036),i,[0,-.093,.03],[.32,0,0]);for(let l=0;l<3;l++)Ee(s,Ie(.03,.005,.038),bn(658189),[0,-.095+l*.017,.03],[.32,0,0]);Ee(s,Ie(.022,.065,.03),e,[0,-.095,.015],[.15,0,0]),Ee(s,Ie(.024,.02,.032),r,[0,-.125,.03],[.15,0,0]),Ee(s,Ie(.03,.026,.16),t,[0,.015,-.005]);for(let l=0;l<4;l++)Ee(s,Ie(.032,.01,.003),bn(1711136),[0,.023,.055+l*.008]);Ee(s,Ie(.02,.01,.025),r,[.016,.012,0]),Ee(s,Ll(.007,.008,.12,10),n,[0,.016,-.14],[Math.PI/2,0,0]),Ee(s,Ll(.009,.009,.015,8),r,[0,.016,-.1],[Math.PI/2,0,0]);const o=new xe;return o.position.set(0,.016,-.21),s.add(o),s.muzzle=o,Ee(s,Ie(.004,.018,.008),a,[0,.04,-.08]),Ee(s,Ie(.006,.015,.01),a,[0,.038,.06]),Ee(s,Ie(.012,.006,.004),a,[0,.043,.06]),Ee(s,Ie(.005,.01,.012),r,[0,.036,.08]),Ee(s,Ie(.004,.006,.018),r,[-.017,-.01,.04]),Ee(s,Ie(.002,.004,.03),bn(1316376),[.014,.02,.02]),Ee(s,Ie(.03,.002,.002),bn(1842722),[0,.022,-.04]),s}const ys=50,xn=[];let Xi=0;function tg(s){for(let e=0;e<ys;e++){const n=(Xi+e)%ys;if(!xn[n]||xn[n].life<=0)return Xi=(n+1)%ys,xn[n]}const t=xn[Xi];return Xi=(Xi+1)%ys,t}function eg(s,t,e){let n=tg();if(!n||n.life<=0){if(!n){const i=new yn(.004,.005,.03,6),r=new Bt({color:13935948,roughness:.3,metalness:.9});n={mesh:new bt(i,r),vel:{x:0,y:0,z:0},life:0},n.mesh.castShadow=!0,s.scene.add(n.mesh);const a=xn.findIndex(o=>!o);a>=0?xn[a]=n:xn.length<ys?xn.push(n):xn[Xi]=n}n.mesh.visible=!0}n.mesh.position.copy(t),n.vel.x=e.x,n.vel.y=e.y,n.vel.z=e.z,n.life=2.5,n.mesh.rotation.set(0,0,0)}function ng(s){for(let t=0;t<xn.length;t++){const e=xn[t];if(!e||e.life<=0){e&&(e.mesh.visible=!1);continue}if(e.life-=s,e.life<=0){e.mesh.visible=!1;continue}e.vel.y+=-9.8*s,e.mesh.position.x+=e.vel.x*s,e.mesh.position.y+=e.vel.y*s,e.mesh.position.z+=e.vel.z*s,e.mesh.rotation.x+=s*8,e.mesh.rotation.z+=s*5,e.mesh.position.y<0&&(e.mesh.position.y=0,e.vel.x=e.vel.y=e.vel.z=0)}}const ms=new E,gs=new E,ig=new E,Dl=new xi,ja=new Uc;ja.far=120;const sr=new E,sg=new E(0,1,0),Il=new Sn(0,0,0,"YXZ"),_s=new E,rr=new E,ar=new E,Ul=new E,ha=new E,Nl=new E;class rg{constructor(t,e,n,i,r,a,o){this.r=t,this.input=e,this.player=n,this.world=i,this.particles=r,this.fx=a,this.audio=o,this.cfg=dt.weapon,this._slot="primary",this._pistolCfg=dt.pistol,this.ammo=this.cfg.magSize,this.reserve=this.cfg.reserve,this.cooldown=0,this.fireInterval=60/this.cfg.rpm,this.reloadTimer=0,this.reloading=!1,this._pistolAmmo=this._pistolCfg.magSize,this._pistolReserve=this._pistolCfg.reserve,this._pistolCooldown=0,this._pistolReloadTimer=0,this._pistolReloading=!1,this._pistolFireInterval=60/this._pistolCfg.rpm,this._swapTimer=0,this._hipPos=new E(.24,-.18,-.26),this._adsPos=new E(0,-.09,-.2),this._targetPos=new E().copy(this._hipPos),this._currentPos=new E().copy(this._hipPos),this._kickPos=new E,this._kickRot=new E,this._kickVelPos=new E,this._kickVelRot=new E,this._swayTime=0;const l=this._createFlashTex();if(this._flashSprite=new sn(new Ke({map:l,blending:Ze,depthTest:!0,depthWrite:!1,opacity:0,transparent:!0,color:16761466})),this._flashSprite.scale.set(.18,.18,1),this._flashSprite.visible=!1,this._flashLight=new yr(16753981,0,3),this._flashLight.visible=!1,this.viewmodel=new se,this.viewmodel.name="ViewModelRoot",this._gun=Pl(),this.viewmodel.add(this._gun),this._gun.muzzle?(this._gun.muzzle.add(this._flashSprite),this._gun.muzzle.add(this._flashLight),this._flashSprite.position.set(0,0,0),this._flashLight.position.set(0,0,0)):(this.viewmodel.add(this._flashSprite),this.viewmodel.add(this._flashLight)),this.viewmodel.position.copy(this._hipPos),t.vmScene.add(this.viewmodel),!t.vmScene._weaponLit){const c=new r0("#8899bb",1.4);t.vmScene.add(c);const h=new wr("#ffe8d0",2.2);h.position.set(2,3,4),t.vmScene.add(h);const d=new wr("#8899cc",.6);d.position.set(-1,.5,-1),t.vmScene.add(d),t.vmScene._weaponLit=!0}t.vmCamera.fov=dt.fov,t.vmCamera.near=.01,t.vmCamera.updateProjectionMatrix(),this._gun.scale.setScalar(.55),t.renderViewModel=!0,j.ammo=this.ammo,j.magSize=this.cfg.magSize,j.reserve=this.reserve,j.reloading=this.reloading,j.weaponName=this.cfg.name}setEnemyManager(t){this._enemyManager=t}swapToPrimary(){this._slot!=="primary"&&(this._savePistolState(),this._slot="primary",this._swapTimer=.35,this._swapGunModel())}swapToPistol(){this._slot!=="pistol"&&(this._savePrimaryState(),this._slot="pistol",this._swapTimer=.35,this._swapGunModel())}_savePrimaryState(){this._primaryAmmo=this.ammo,this._primaryReserve=this.reserve,this._primaryReloading=this.reloading,this._primaryCooldown=this.cooldown}_savePistolState(){this._pistolAmmo=this.ammo,this._pistolReserve=this.reserve,this._pistolReloading=this.reloading,this._pistolCooldown=this.cooldown}_swapGunModel(){this._flashSprite.parent&&this._flashSprite.parent.remove(this._flashSprite),this._flashLight.parent&&this._flashLight.parent.remove(this._flashLight),this._gun&&(this.viewmodel.remove(this._gun),this._gun.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})),this._slot==="primary"?(this._gun=Pl(),this.cfg=dt.weapon,this.ammo=this._primaryAmmo??this.cfg.magSize,this.reserve=this._primaryReserve??this.cfg.reserve,this.reloading=this._primaryReloading??!1,this.cooldown=this._primaryCooldown??0,this.fireInterval=60/this.cfg.rpm):(this._gun=J0(),this.cfg=this._pistolCfg,this.ammo=this._pistolAmmo,this.reserve=this._pistolReserve,this.reloading=this._pistolReloading,this.cooldown=this._pistolCooldown,this.fireInterval=60/this.cfg.rpm),this._gun.scale.setScalar(.55),this.viewmodel.add(this._gun),this._gun.muzzle&&(this._gun.muzzle.add(this._flashSprite),this._gun.muzzle.add(this._flashLight),this._flashSprite.position.set(0,0,0),this._flashLight.position.set(0,0,0)),j.ammo=this.ammo,j.magSize=this.cfg.magSize,j.reserve=this.reserve,j.reloading=this.reloading,j.weaponName=this.cfg.name}_createFlashTex(){const e=document.createElement("canvas");e.width=e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255,240,180,1)"),i.addColorStop(.12,"rgba(255,200,110,0.95)"),i.addColorStop(.35,"rgba(255,140,50,0.7)"),i.addColorStop(.65,"rgba(255,70,10,0.15)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new Rn(e);return r.needsUpdate=!0,r}get ready(){return!this.reloading&&this.cooldown<=0&&this.ammo>0}reload(){this.reloading||this.ammo>=this.cfg.magSize||this.reserve<=0||(this.reloading=!0,this.reloadTimer=this.cfg.reloadTime,j.reloading=!0,this.audio.reload(),ae.emit("weapon:reload",{}))}fire(){if(!this.ready)return;this.ammo--,j.ammo=this.ammo,this.cooldown=this.fireInterval,this.player.recoil(this.cfg.recoilKick),ae.emit("weapon:fire",{});const t=this.player.ads??0;let e=this.cfg.spreadBase;j.view.moving&&(e=this.cfg.spreadMove),e=e+(this.cfg.spreadADS-e)*t,this.r.camera.getWorldDirection(ms),gs.crossVectors(ms,sg).normalize(),ig.crossVectors(gs,ms).normalize();const n=(Math.random()-.5)*e*2,i=(Math.random()-.5)*e*2;Il.set(i,n,0),Dl.setFromEuler(Il);const r=ms.clone().applyQuaternion(Dl).normalize(),a=this.r.camera.position;_s.copy(a).addScaledVector(ms,1.2).addScaledVector(gs,.04),this.fx.muzzle(_s,r,16761466,1),this.audio.gunshot();let o=null,l=null,c=null,h=null,d=120,u=!1;const m=j.enemies||[];for(const S of m){if(!S.group||!S.id||S.hp<=0)continue;rr.set(S.group.position.x,S.group.position.y+1.2,S.group.position.z);const y=.55;sr.subVectors(_s,rr);const b=r.dot(r),U=2*sr.dot(r),A=sr.dot(sr)-y*y,T=U*U-4*b*A;if(T<0)continue;const D=Math.sqrt(T),w=(-U-D)/(2*b),x=(-U+D)/(2*b),R=w>=0&&w<x?w:x;R<0||R>120||R<d&&(d=R,o=S,l=S.id,ar.copy(_s).addScaledVector(r,R),Ul.copy(ar).sub(rr).normalize(),u=ar.y>rr.y+y*.55,c=ar.clone(),h=Ul.clone())}let g=null,_=null,p=1/0;if(this.world.raycastables&&this.world.raycastables.length){ja.set(a,r);const S=ja.intersectObjects(this.world.raycastables,!1);S.length&&(p=S[0].distance,g=S[0].point.clone(),_=S[0].face?S[0].face.normal.clone():new E(0,1,0))}if(o&&d<=p){const S=u?this.cfg.dmg*this.cfg.headMult:this.cfg.dmg;ae.emit("weapon:hit",{id:l,dmg:S,hitPos:c,normal:h,headshot:u}),this.audio.hitmarker(),this.fx.hitmark(c)}else g&&p<=120&&(this.fx.impact(g,_,16761722),this.particles&&this.particles.burst&&this.particles.burst(g,4,{color:"#8a8378"}));this._flashSprite.visible=!0,this._flashSprite.material.opacity=.8+Math.random()*.2,this._flashSprite.scale.set(.14+Math.random()*.08,.14+Math.random()*.08,1),this._flashLight.visible=!0,this._flashLight.intensity=1.2;const f=this.cfg.viewKick;if(this._kickPos.z-=f.pos*(.7+Math.random()*.6),this._kickPos.y+=f.pos*.3*(.7+Math.random()*.6),this._kickRot.x+=f.rot*(.7+Math.random()*.6),this._kickRot.y-=f.rot*.5*(Math.random()-.5),Math.random()<this.cfg.shellFreq){ha.copy(gs).multiplyScalar(.22);const S=_s.clone().add(ha).add(ha.set(0,.04,0));Nl.set(gs.x*1.8+(Math.random()-.5)*1.2,2.5+Math.random()*1.5,1.5+Math.random()*1),eg(this.r,S,Nl.clone())}}update(t){const e=Math.min(t,.1);if(ng(e),this.reloading){if(this.reloadTimer-=e,this.reloadTimer<=0){const f=this.cfg.magSize-this.ammo,S=Math.min(this.reserve,f);this.ammo+=S,this.reserve-=S,this.reloading=!1,this.reloadTimer=0,j.ammo=this.ammo,j.reserve=this.reserve,j.reloading=!1}}else this.cooldown>0&&(this.cooldown-=e),this.input.mouse.down&&this.cooldown<=0&&(this.ammo>0?this.fire():this.reserve>0&&!this.reloading?this.reload():this.ammo<=0&&this.reserve<=0&&this.audio.empty()),this.input.has&&this.input.has("KeyR")&&this.reload();const n=this.player.ads??0;this._targetPos.lerpVectors(this._hipPos,this._adsPos,n),this._currentPos.lerp(this._targetPos,1-Math.exp(-14*e)),this._swayTime+=e;const i=this.cfg.swayAmp,r=Math.sin(this._swayTime*2.7)*i,a=Math.cos(this._swayTime*3.1)*i*.7,o=Math.cos(this._swayTime*2.3)*i*.4;let l=0;j.view.moving&&(l=j.view.vel*.0012);const c=Math.sin(this._swayTime*8.5)*l,h=Math.cos(this._swayTime*7.8)*l,d=38,u=12,m=this._kickPos,g=this._kickVelPos;g.x+=(-m.x*d-g.x*u)*e,g.y+=(-m.y*d-g.y*u)*e,g.z+=(-m.z*d-g.z*u)*e,m.x+=g.x*e,m.y+=g.y*e,m.z+=g.z*e;const _=this._kickRot,p=this._kickVelRot;if(p.x+=(-_.x*d-p.x*u)*e,p.y+=(-_.y*d-p.y*u)*e,p.z+=(-_.z*d-p.z*u)*e,_.x+=p.x*e,_.y+=p.y*e,_.z+=p.z*e,this.viewmodel.position.set(this._currentPos.x+r+c+m.x,this._currentPos.y+a+h+m.y,this._currentPos.z+o+m.z),this.viewmodel.rotation.set(a*.8+_.x,r*.6+_.y,o*.4+_.z),this._flashSprite.visible){let f=this._flashSprite.material.opacity-e*30;f<=0&&(f=0,this._flashSprite.visible=!1),this._flashSprite.material.opacity=f,this._flashSprite.scale.multiplyScalar(1+e*4)}if(this._flashLight.visible){let f=this._flashLight.intensity-e*15;f<=0&&(f=0,this._flashLight.visible=!1),this._flashLight.intensity=f}this.r.vmCamera.position.copy(this.r.camera.position),this.r.vmCamera.quaternion.copy(this.r.camera.quaternion),j.ammo=this.ammo,j.reserve=this.reserve,j.reloading=this.reloading}}function ag(s){let t=s|0;return function(){t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function fn(s,t,e,n){const i=new Me(s,t,e),r=n?.isMaterial?n:new Bt({color:n}),a=new bt(i,r);return a.castShadow=!0,a.receiveShadow=!0,a}function Fl(s=1){const t=ag(s),e=(R,z)=>{const F=new Rt(R);return F.offsetHSL(t()*z-z/2,t()*.08,t()*.06-.03),F.getHex()},n=e("#9d8a6a",.06),i=e("#6b5c44",.04),r=e("#4a4538",.04),a=e("#5a4c3e",.04),o=new Bt({color:5921370,metalness:.6,roughness:.4}),l=new Bt({color:n,emissive:1709064,emissiveIntensity:.25}),c=new Bt({color:n,emissive:1709064,emissiveIntensity:.25}),h=new Bt({color:n,emissive:1709064,emissiveIntensity:.25}),d=new Bt({color:i,emissive:1314566,emissiveIntensity:.25}),u=new Bt({color:r,emissive:986120,emissiveIntensity:.25}),m=new Bt({color:a,emissive:1051656,emissiveIntensity:.2}),g=new se,_=fn(.2,.72,.2,c);_.position.set(-.14,.42,0),_.userData.baseY=.42,g.add(_);const p=fn(.2,.72,.2,c);p.position.set(.14,.42,0),p.userData.baseY=.42,g.add(p);const f=fn(.44,.62,.26,l);f.position.set(0,1.25,0),g.add(f);const S=fn(.48,.5,.3,d);S.position.set(0,1.2,-.01),g.add(S);const y=fn(.18,.2,.19,m);y.position.set(0,1.72,0),g.add(y);const b=fn(.24,.14,.25,u);b.position.set(0,1.86,0),g.add(b);const U=fn(.14,.62,.14,h);U.position.set(-.3,1.4,0),U.userData.baseY=1.4,g.add(U);const A=fn(.14,.62,.14,h);A.position.set(.3,1.4,0),A.userData.baseY=1.4,g.add(A);const T=new se,D=fn(.045,.07,.32,o);D.position.set(0,0,.08),T.add(D);const w=fn(.025,.025,.24,o);w.position.set(0,.01,.3),T.add(w);const x=fn(.03,.08,.04,o);return x.position.set(0,-.05,-.02),T.add(x),T.position.set(.36,1.18,.16),g.add(T),g.parts={torso:f,head:y,lArm:U,rArm:A,lLeg:_,rLeg:p,gun:T,helmet:b},g}const tn=new E,Ol=new Rt,Fn=(s,t)=>s+Math.random()*(t-s),or=(s,t,e)=>Math.max(t,Math.min(e,s));function og(s,t,e,n){const i=tn.copy(s).sub(e),r=i.dot(t),a=i.dot(i)-n*n,o=r*r-a;if(o<0)return null;const l=-r-Math.sqrt(o);if(l<0)return null;const c=tn.copy(s).addScaledVector(t,l);return{t:l,pos:c.clone(),normal:c.clone().sub(e).normalize()}}class lg{constructor(t,e,n,i,r,a){this.r=t,this.world=e,this.player=n,this.particles=i,this.fx=r,this.audio=a,this._enemies=[],this._nextId=0,this._demoSpawned=!1,this._muzzle=new E,this._muzzleDir=new E,this._losRay=new Uc,this._losRay.far=120,ae.on("weapon:hit",({id:o,dmg:l,hitPos:c,normal:h,headshot:d})=>{this.damageEnemy(o,l,c,h,d)})}startGame(){this._clearAll(),j.kills=0,j.score=0,this._startWave(1)}update(t){if(!j.started)return;if(this._enemies.filter(i=>i.state!=="dead").length===0&&j.waveState==="active"&&(j.waveState="intermission",j.waveTimer=6),j.waveState==="intermission"){if(j.waveTimer-=t,j.waveTimer<=0){const i=j.wave+1;i<=dt.enemy.waves?this._startWave(i):(j.waveState="idle",j.missionComplete=!0,ae.emit("mission:complete",{}))}this._updateDying(t),this._syncGameState();return}if(j.waveState==="idle"){this._updateDying(t),this._syncGameState();return}const n=this.player.isAlive!==void 0?this.player.isAlive:j.alive;for(const i of this._enemies){if(i.state==="dead")continue;if(i.state==="dying"){this._updateDyingEnemy(t,i);continue}this._updateAI(t,i,n),this._updateWalkAnim(t,i),this._updateHitFlash(t,i),i.group.position.lengthSq()>22500&&this._removeEnemy(i)}this._syncGameState()}updateDemo(t,e){this._demoSpawned||(this._spawnDemo(e),this._demoSpawned=!0);for(const n of this._enemies)n.state==="demo"&&n.group.lookAt(e.x,n.group.position.y,e.z);this._syncGameState()}damageEnemy(t,e,n,i,r=!1){const a=this._enemies.find(c=>c.id===t);if(!a||a.state==="dead"||a.state==="dying")return;const o=r||n&&n.y>1.65,l=e;a.hp-=l,a.hitFlash=.12,o&&(a._lastHitHeadshot=!0),n&&(this.particles.burst(n,6,{color:9109504,size:.06,speed:2.5,life:.4}),this.fx.impact(n,i,9109504)),this.audio.hit(),a.hp<=0&&this._killEnemy(a)}hitEnemy(t,e){let n=null,i=1/0;const r=e.clone().normalize();for(const a of this._enemies){if(a.state==="dead"||a.state==="dying")continue;const o=new E(a.group.position.x,a.group.position.y+1.2,a.group.position.z),l=og(t,r,o,.55);l&&l.t<i&&(i=l.t,n={id:a.id,pos:l.pos,normal:l.normal,enemy:a,headshot:l.pos.y>o.y+.55*.55})}return n}_startWave(t){j.wave=t,j.waveState="active",j.waveTimer=0,ae.emit("enemy:wave",t);const e=Math.min(4+t*2,14),n=this.player.pos||tn.set(0,0,0);for(let i=0;i<e;i++){const r=this._findSpawnPos(n);r&&this._spawnEnemy(r)}}_findSpawnPos(t){const e=dt.world.mapSize;for(let i=0;i<30;i++){const r=Math.random()*Math.PI*2,a=Fn(45,80),o=or(t.x+Math.cos(r)*a,-e,e),l=or(t.z+Math.sin(r)*a,-e,e),c=this.world.groundAt?this.world.groundAt(o,l):dt.world.groundY,h=typeof c=="number"&&isFinite(c)?c:dt.world.groundY;if(!(this.world.collides&&(tn.set(o,Math.max(h+.5,.5),l),this.world.collides(tn))))return tn.set(o,h,l)}const n=Math.random()*Math.PI*2;return tn.set(Math.cos(n)*70,dt.world.groundY,Math.sin(n)*70)}_spawnEnemy(t){const e=this._nextId++,n=Fl(e),i=n;i.position.copy(t),this.r.scene.add(i);const r={id:e,group:i,rig:n,hp:dt.enemy.health,maxHp:dt.enemy.health,state:"moving",speed:dt.enemy.speed+Fn(-.3,.3),fireCooldown:Fn(dt.enemy.fireInterval[0],dt.enemy.fireInterval[1]),burstCount:0,burstTimer:0,strafeDir:Math.random()<.5?-1:1,strafeTimer:Fn(2,4),dyingTimer:0,dyingTargetRot:null,dyingStartY:0,hitFlash:0,walkPhase:Math.random()*Math.PI*2};return this._enemies.push(r),r}_updateAI(t,e,n){const i=this.player.pos;if(!i)return;const r=tn.copy(i).sub(e.group.position),a=r.length(),o=r.normalize();a>.01&&e.group.lookAt(i.x,e.group.position.y,i.z);let l=o.clone();if(e.strafeTimer-=t,a<30&&a>8){const u=tn.set(-o.z,0,o.x).multiplyScalar(e.strafeDir);l.copy(o).multiplyScalar(.2).add(u),e.strafeTimer<=0&&(e.strafeDir*=-1,e.strafeTimer=Fn(2,4))}else a<8&&l.copy(o).multiplyScalar(-.5);l.y=0,l.lengthSq()>.001&&l.normalize();const c=e.state==="firing"?e.speed*.3:e.speed;e.group.position.x+=l.x*c*t,e.group.position.z+=l.z*c*t;const h=nn.resolveCircle(e.group.position.clone(),.35,e.group.position.y,e.group.position.y+1.8);e.group.position.x=h.x,e.group.position.z=h.z,this.world.groundAt&&(e.group.position.y=this.world.groundAt(e.group.position.x,e.group.position.z));const d=a<dt.enemy.fireRange;e.fireCooldown-=t,e.burstCount>0&&n?(e.burstTimer-=t,e.state="firing",e.burstTimer<=0&&(this._fireShot(e,i),e.burstCount--,e.burstTimer=.08),e.burstCount<=0&&(e.state="moving",e.fireCooldown=Fn(dt.enemy.fireInterval[0],dt.enemy.fireInterval[1]))):e.fireCooldown<=0&&d&&n&&(e.burstCount=Math.floor(Fn(dt.enemy.burst[0],dt.enemy.burst[1]+1)),e.burstTimer=0)}_fireShot(t,e){if(this._getMuzzleWorld(t),this.fx.tracer(this._muzzle.clone(),e.clone(),16738890),this._muzzleDir.copy(e).sub(this._muzzle).normalize(),this.fx.muzzle(this._muzzle.clone(),this._muzzleDir.clone(),16742986,.8),this.audio.enemyShot(this._muzzle),Math.random()>=dt.enemy.accuracy)return;const n=tn.copy(e).sub(this._muzzle).normalize(),i=this._muzzle.clone();this.world.raycastables&&this.world.raycastables.length&&(this._losRay.set(i,n),this._losRay.far=e.distanceTo(i)+.5,this._losRay.intersectObjects(this.world.raycastables,!1).length>0)||(this.player.damage(dt.enemy.dmgPerShot),this.player.isAlive||(j.alive=!1,ae.emit("game:over",{})))}_getMuzzleWorld(t){const e=tn.set(.36,1.18,.46);this._muzzle.copy(e).applyMatrix4(t.group.matrixWorld)}_updateWalkAnim(t,e){const n=e.rig.parts;if(!n)return;const i=e.state==="moving",r=dt.enemy.speed*5;i?e.walkPhase+=t*r:e.walkPhase*=.9;const a=e.walkPhase,o=.5,l=.4,c=i?1:.2;n.lLeg&&(n.lLeg.rotation.x=Math.sin(a)*o*c),n.rLeg&&(n.rLeg.rotation.x=Math.sin(a+Math.PI)*o*c),n.lArm&&(n.lArm.rotation.x=Math.sin(a+Math.PI)*l*c),n.rArm&&(n.rArm.rotation.x=Math.sin(a)*l*c)}_updateHitFlash(t,e){if(e.hitFlash>0){e.hitFlash-=t;const n=or(e.hitFlash/.12,0,1),i=e.rig.parts.torso;i&&i.material&&(i.material.emissive=Ol.setHSL(0,1,n*.4),i.material.emissiveIntensity=n)}else if(e.hitFlash<=0&&e._flashActive){e._flashActive=!1;const n=e.rig.parts.torso;n&&n.material&&(n.material.emissive=Ol.set(0),n.material.emissiveIntensity=0)}e.hitFlash>0&&(e._flashActive=!0)}_killEnemy(t){t.state="dying",t.dyingTimer=.8,t.dyingStartY=t.group.position.y,t.dyingTargetRot=new E(Math.random()<.5?-Math.PI/2:0,0,Math.random()<.5?0:(Math.random()<.5?1:-1)*Math.PI/2),this.fx.explosion(t.group.position.clone(),.5),this.audio.explosion(t.group.position),this.particles.burst(t.group.position.clone().add(tn.set(0,1,0)),10,{color:9109504,size:.08,speed:4,life:.6}),j.kills++,j.score+=100,ae.emit("enemy:killed",{id:t.id,pos:t.group.position.clone(),headshot:!!t._lastHitHeadshot})}_updateDyingEnemy(t,e){e.dyingTimer-=t;const n=or(1-e.dyingTimer/.8,0,1);e.group.rotation.x+=(e.dyingTargetRot.x-e.group.rotation.x)*Math.min(t*6,1),e.group.rotation.z+=(e.dyingTargetRot.z-e.group.rotation.z)*Math.min(t*6,1),e.group.position.y=e.dyingStartY-n*.8,n>.3&&e.group.traverse(i=>{i.isMesh&&(i.castShadow=!1,i.receiveShadow=!1)}),e.dyingTimer<=0&&this._removeEnemy(e)}_updateDying(t){for(const e of this._enemies)e.state==="dying"&&this._updateDyingEnemy(t,e)}_removeEnemy(t){t.state="dead",this.r.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())})}_spawnDemo(t){this._clearAll();const e=this.world.groundAt?this.world.groundAt(0,0):dt.world.groundY,n=10,i=26;for(let r=0;r<n;r++){const a=r/n*Math.PI*2+Fn(-.15,.15),o=i+Fn(-4,4),l=Math.cos(a)*o,c=Math.sin(a)*o,h=this.world.groundAt?this.world.groundAt(l,c):e,d=Fl(r+1e3),u=d;u.position.set(l,h,c),u.lookAt(t.x,h,t.z),r%3===0&&(u.rotation.x=-.5,u.position.y-=.35),this.r.scene.add(u),this._enemies.push({id:this._nextId++,group:u,rig:d,hp:dt.enemy.health,maxHp:dt.enemy.health,state:"demo",speed:0,fireCooldown:999,burstCount:0,burstTimer:0,strafeDir:0,strafeTimer:0,dyingTimer:0,dyingTargetRot:null,dyingStartY:0,hitFlash:0,walkPhase:0})}}_syncGameState(){j.enemies=this._enemies.filter(t=>t.state!=="dead").map(t=>({id:t.id,pos:t.group.position.clone(),group:t.group,hp:t.hp,maxHp:t.maxHp,state:t.state}))}_clearAll(){for(const t of this._enemies)this.r.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())});this._enemies.length=0,this._demoSpawned=!1}}const zl=15,Bl=60,kl=40,Hl=8,Vl=4,Gl=4,Wl=4,pn=()=>new E,vs=()=>new Rt,cg=new xi;let xs=null;function hg(){if(xs)return xs;const s=32,t=16,e=16,n=10,i=document.createElement("canvas");i.width=i.height=s;const r=i.getContext("2d");return r.strokeStyle="#ffffff",r.lineWidth=2,r.lineCap="round",r.beginPath(),r.arc(t,e,n*.85,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(t-n,e-n),r.lineTo(t+n,e+n),r.moveTo(t+n,e-n),r.lineTo(t-n,e+n),r.stroke(),xs=new Rn(i),xs.needsUpdate=!0,xs}function Qn(s,t,e){const n=s.length,i=e[t];for(let r=0;r<n;r++){const a=(i+r)%n;if(!s[a].active)return e[t]=(a+1)%n,s[a]}return e[t]=(i+1)%n,s[i]}const Yt=(s,t)=>s+Math.random()*(t-s);class ug{constructor(t,e){this.r=t,this.lighting=e;const n=mn.glowTexture(64),i=mn.smokeTexture(128),r=hg();this._muzzleLights=[];for(let o=0;o<Gl;o++){const l=new yr(16756838,0,6,2);l.visible=!1,t.scene.add(l),this._muzzleLights.push({light:l,active:!1,timer:0,life:.05,decay:14})}this._muzzleNext=0,this._muzzleSpriteNext=0,this._muzzleSprites=[];for(let o=0;o<Wl;o++){const l=new Ke({map:n,blending:Ze,depthTest:!0,depthWrite:!1,transparent:!0,color:16761466,opacity:0}),c=new sn(l);c.scale.set(.35,.35,1),c.frustumCulled=!1,c.visible=!1,t.scene.add(c),this._muzzleSprites.push({sprite:c,active:!1,timer:0,life:.05})}this._tracers=[],this._tracerNext=0;for(let o=0;o<zl;o++){const l=new Ke({map:n,blending:Ze,depthTest:!0,depthWrite:!1,transparent:!0,color:16767392,opacity:0}),c=new sn(l);c.frustumCulled=!1,c.visible=!1,t.scene.add(c),this._tracers.push({sprite:c,active:!1,timer:0,life:.06})}this._sparks=[],this._sparkNext=0;for(let o=0;o<Bl;o++){const l=new Ke({map:n,blending:Ze,depthTest:!0,depthWrite:!1,transparent:!0,opacity:0}),c=new sn(l);c.scale.set(.04,.04,1),c.frustumCulled=!1,c.visible=!1,t.scene.add(c),this._sparks.push({sprite:c,active:!1,vel:pn(),timer:0,life:.35,gravity:9.8})}this._smokes=[],this._smokeNext=0;for(let o=0;o<kl;o++){const l=new Ke({map:i,blending:$e,depthTest:!0,depthWrite:!1,transparent:!0,color:4473924,opacity:0}),c=new sn(l);c.scale.set(.1,.1,1),c.frustumCulled=!1,c.visible=!1,t.scene.add(c),this._smokes.push({sprite:c,active:!1,vel:pn(),timer:0,life:.5,startScale:.1,endScale:.4,startColor:vs(),endColor:vs(),baseOpacity:.5})}this._hitmarkers=[],this._hitNext=0;for(let o=0;o<Hl;o++){const l=new Ke({map:r,blending:$e,depthTest:!0,depthWrite:!1,transparent:!0,color:16777215,opacity:0}),c=new sn(l);c.scale.set(.18,.18,1),c.frustumCulled=!1,c.visible=!1,t.scene.add(c),this._hitmarkers.push({sprite:c,active:!1,timer:0,life:1.5})}const a=new Ue(1,1);this._explosions=[],this._expNext=0;for(let o=0;o<Vl;o++){const l=new Ke({map:n,blending:Ze,depthTest:!0,depthWrite:!1,transparent:!0,opacity:0}),c=new sn(l);c.frustumCulled=!1,c.visible=!1,t.scene.add(c);const h=new Tn({map:n,blending:Ze,depthTest:!0,depthWrite:!1,transparent:!0,opacity:0,side:Ne}),d=new bt(a,h);d.rotation.x=-Math.PI/2,d.frustumCulled=!1,d.visible=!1,t.scene.add(d);const u=new yr(16747050,0,18,2);u.visible=!1,t.scene.add(u),this._explosions.push({active:!1,glow:c,ring:d,light:u,timer:0,life:.7,size:4,color:16747050})}}muzzle(t,e,n=16761466,i=1){const r=Qn(this._muzzleSprites,"_muzzleSpriteNext",this);r.sprite.position.copy(t),r.sprite.material.color.set(n),r.sprite.material.opacity=.9;const a=.3*i;r.sprite.scale.set(a,a,1),r.sprite.visible=!0,r.sprite.material.rotation=Yt(-.4,.4),r.active=!0,r.timer=0,r.life=.05;const o=Qn(this._muzzleLights,"_muzzleNext",this);o.light.position.copy(t),o.light.color.set(n),o.light.intensity=8*i,o.light.visible=!0,o.active=!0,o.timer=0,o.decay=14}tracer(t,e,n=16767392){const i=Qn(this._tracers,"_tracerNext",this),r=pn().addVectors(t,e).multiplyScalar(.5),a=t.distanceTo(e);i.sprite.position.copy(r),i.sprite.material.color.set(n),i.sprite.material.opacity=.95,i.sprite.scale.set(Math.max(a,.3),.035,1),i.sprite.visible=!0;const o=this.r.camera,l=pn().set(1,0,0).applyQuaternion(o.quaternion),c=pn().set(0,1,0).applyQuaternion(o.quaternion),h=pn().subVectors(e,t).normalize();i.sprite.material.rotation=Math.atan2(h.dot(c),h.dot(l)),i.active=!0,i.timer=0,i.life=Yt(.05,.08)}impact(t,e,n=16761722){const i=vs().set(n),r=e.clone().normalize(),a=7+Math.floor(Yt(0,3));for(let l=0;l<a;l++){const c=Qn(this._sparks,"_sparkNext",this);c.sprite.position.copy(t),c.sprite.material.color.copy(i).multiplyScalar(Yt(.7,1));const h=Yt(0,Math.PI*2),d=Yt(0,Math.PI*.4),u=pn().set(Math.sin(d)*Math.cos(h),Math.cos(d),Math.sin(d)*Math.sin(h)),m=cg.setFromUnitVectors(pn().set(0,1,0),r);u.applyQuaternion(m);const g=.7;u.x+=Yt(-.5,.5)*g,u.y+=Yt(-.5,.5)*g,u.z+=Yt(-.5,.5)*g;const _=Yt(1.5,5.5);c.vel.copy(u.normalize().multiplyScalar(_)),c.gravity=Yt(6,14),c.timer=0,c.life=Yt(.2,.5);const p=Yt(.03,.06);c.sprite.scale.set(p,p,1),c.sprite.material.opacity=.9,c.sprite.visible=!0,c.active=!0}const o=2+Math.floor(Yt(0,2));for(let l=0;l<o;l++){const c=Qn(this._smokes,"_smokeNext",this);c.sprite.position.copy(t).add(pn().set(Yt(-.06,.06),Yt(0,.08),Yt(-.06,.06))),c.vel.set(Yt(-.2,.2),Yt(.3,1),Yt(-.2,.2)),c.timer=0,c.life=Yt(.25,.6),c.startScale=Yt(.06,.12),c.endScale=Yt(.18,.33),c.sprite.scale.set(c.startScale,c.startScale,1),c.baseOpacity=Yt(.5,.7),c.sprite.material.opacity=c.baseOpacity,c.startColor.set(6710886),c.endColor.set(1118481),c.sprite.material.color.copy(c.startColor),c.sprite.visible=!0,c.active=!0}}hitmark(t){const e=Qn(this._hitmarkers,"_hitNext",this);e.sprite.position.copy(t),e.sprite.material.opacity=1,e.sprite.scale.set(.16,.16,1),e.sprite.material.color.set(16777215),e.sprite.visible=!0,e.active=!0,e.timer=0,e.life=1.5}explosion(t,e=4,n=16747050){const i=Qn(this._explosions,"_expNext",this),r=vs().set(n);i.glow.position.copy(t),i.glow.material.color.copy(r),i.glow.material.opacity=.9,i.glow.scale.set(.3,.3,1),i.glow.visible=!0,i.ring.position.copy(t).add(pn().set(0,.06,0)),i.ring.material.opacity=.6,i.ring.scale.set(.2,.2,1),i.ring.visible=!0,i.ring.material.color.copy(r),i.light.position.copy(t),i.light.color.copy(r),i.light.intensity=14+e*1.5,i.light.distance=e*1.8,i.light.visible=!0,i.timer=0,i.life=.5+e*.08,i.size=e,i.color=n,i.active=!0;const a=5+Math.floor(Yt(0,3));for(let o=0;o<a;o++){const l=Qn(this._smokes,"_smokeNext",this);l.sprite.position.copy(t).add(pn().set(Yt(-.15,.15),0,Yt(-.15,.15)));const c=Yt(0,Math.PI*2),h=Yt(1,3.5)*(e/4);l.vel.set(Math.cos(c)*h,Yt(.8,3.3),Math.sin(c)*h),l.timer=0,l.life=Yt(.5,1.2),l.startScale=Yt(.15,.35),l.endScale=Yt(.7,1.6),l.sprite.scale.set(l.startScale,l.startScale,1),l.baseOpacity=Yt(.55,.8),l.sprite.material.opacity=l.baseOpacity,l.startColor.set(7829367),l.endColor.set(657930),l.sprite.material.color.copy(l.startColor),l.sprite.visible=!0,l.active=!0}}update(t,e,n){const i=Math.min(t,.1);for(let r=0;r<Wl;r++){const a=this._muzzleSprites[r];if(a.active)if(a.timer+=i,a.timer>=a.life)a.active=!1,a.sprite.visible=!1,a.sprite.material.opacity=0;else{const o=a.timer/a.life;a.sprite.material.opacity=.9*(1-o*o)}}for(let r=0;r<Gl;r++){const a=this._muzzleLights[r];a.active&&(a.timer+=i,a.timer>=a.life?(a.active=!1,a.light.visible=!1,a.light.intensity=0):a.light.intensity*=Math.exp(-i*a.decay))}for(let r=0;r<zl;r++){const a=this._tracers[r];a.active&&(a.timer+=i,a.timer>=a.life?(a.active=!1,a.sprite.visible=!1,a.sprite.material.opacity=0):a.sprite.material.opacity=.95*(1-a.timer/a.life))}for(let r=0;r<Bl;r++){const a=this._sparks[r];if(a.active)if(a.timer+=i,a.timer>=a.life)a.active=!1,a.sprite.visible=!1,a.sprite.material.opacity=0;else{const o=a.timer/a.life;a.vel.y-=a.gravity*i,a.sprite.position.x+=a.vel.x*i,a.sprite.position.y+=a.vel.y*i,a.sprite.position.z+=a.vel.z*i,a.sprite.material.opacity=.9*(1-o);const l=.04*(1-o*.7);a.sprite.scale.set(l,l,1)}}for(let r=0;r<kl;r++){const a=this._smokes[r];if(a.active)if(a.timer+=i,a.timer>=a.life)a.active=!1,a.sprite.visible=!1,a.sprite.material.opacity=0;else{const o=a.timer/a.life;a.sprite.position.x+=a.vel.x*i,a.sprite.position.y+=a.vel.y*i,a.sprite.position.z+=a.vel.z*i;const l=a.startScale+(a.endScale-a.startScale)*o;a.sprite.scale.set(l,l,1),a.sprite.material.color.copy(vs().lerpColors(a.startColor,a.endColor,o)),a.sprite.material.opacity=a.baseOpacity*(1-o)}}for(let r=0;r<Hl;r++){const a=this._hitmarkers[r];if(a.active)if(a.timer+=i,a.timer>=a.life)a.active=!1,a.sprite.visible=!1,a.sprite.material.opacity=0;else{const o=a.timer/a.life,l=.5,c=o<l?1:1-(o-l)/(1-l);a.sprite.material.opacity=c;const h=.16*(1+Math.sin(o*Math.PI)*.25);a.sprite.scale.set(h,h,1)}}for(let r=0;r<Vl;r++){const a=this._explosions[r];if(a.active)if(a.timer+=i,a.timer>=a.life)a.active=!1,a.glow.visible=!1,a.glow.material.opacity=0,a.ring.visible=!1,a.ring.material.opacity=0,a.light.visible=!1,a.light.intensity=0;else{const o=a.timer/a.life,l=a.size*(.3+o*3);a.glow.scale.set(l,l,1),a.glow.material.opacity=.9*(1-o*o);const c=a.size*(.2+o*6);a.ring.scale.set(c,c,1),a.ring.material.opacity=.6*(1-o)*(1-o),a.light.intensity*=Math.exp(-i*5)}}}}const ua=120,da=50,fa=30,li=80,Ms=()=>new E,Xl=()=>new Rt,wt=(s,t)=>s+Math.random()*(t-s);class dg{constructor(t,e){this.r=t,this.lighting=e;const n=mn.smokeTexture(128),i=mn.glowTexture(64);this._dustList=[];const r=new se;t.scene.add(r);for(let c=0;c<ua;c++){const h=c<80,d=new Ke({map:n,blending:h?Ze:$e,depthTest:!0,depthWrite:!1,transparent:!0,color:h?13940886:11049088,opacity:0}),u=new sn(d);u.scale.set(.08,.08,1),u.frustumCulled=!1,u.visible=!1,r.add(u),this._dustList.push({sprite:u,active:!1,vel:Ms(),timer:0,life:4,baseY:0,driftAmp:.04,driftFreq:.5,phase:0,additive:h})}this._dustParent=r,this._debrisList=[];const a=new se;t.scene.add(a);for(let c=0;c<da;c++){const h=new Ke({map:n,blending:$e,depthTest:!0,depthWrite:!1,transparent:!0,color:2236962,opacity:0}),d=new sn(h);d.scale.set(.04,.04,1),d.frustumCulled=!1,d.visible=!1,a.add(d),this._debrisList.push({sprite:d,active:!1,vel:Ms(),timer:0,life:3,swayAmp:.15,swayFreq:.6,phase:0})}this._debrisParent=a,this._emberList=[];const o=new se;t.scene.add(o);for(let c=0;c<fa;c++){const h=new Ke({map:i,blending:Ze,depthTest:!0,depthWrite:!1,transparent:!0,color:16738842,opacity:0}),d=new sn(h);d.scale.set(.03,.03,1),d.frustumCulled=!1,d.visible=!1,o.add(d),this._emberList.push({sprite:d,active:!1,vel:Ms(),timer:0,life:2,origin:Ms(),wanderRadius:1,phase:0})}this._emberParent=o,this._burstList=[],this._burstNext=0;const l=new se;t.scene.add(l);for(let c=0;c<li;c++){const h=c>=li-15,d=new Ke({map:h?i:n,blending:h?Ze:$e,depthTest:!0,depthWrite:!1,transparent:!0,color:h?16752720:8947848,opacity:0}),u=new sn(d);u.scale.set(.06,.06,1),u.frustumCulled=!1,u.visible=!1,l.add(u),this._burstList.push({sprite:u,active:!1,vel:Ms(),timer:0,life:.6,startScale:.06,endScale:.3,color:Xl().set(h?16752720:8947848),useGlow:h,gravity:.8,baseOpacity:.5})}this._burstParent=l,this.fireZones=[],this.dustDensity=1,this.debrisRate=.6,this.emberRate=1,this.windDir=new xt(.15,.05),this.playerDustRadius=6,this.spawnPerSec=6}burst(t,e,n={}){const{color:i=8947848,speed:r=2,size:a=.08,life:o=.6,gravity:l=.8,spread:c=.7}=n,h=Xl().set(i);for(let d=0;d<e;d++){const u=this._allocBurst();u.sprite.position.copy(t),u.sprite.position.x+=wt(-.05,.05),u.sprite.position.z+=wt(-.05,.05);const m=wt(0,Math.PI*2),g=wt(0,Math.PI*.5);u.vel.set(Math.sin(g)*Math.cos(m)*wt(.3,c+.3),Math.sin(g)*Math.sin(m)*wt(.3,c+.3)+.4,Math.cos(g)*wt(.3,c+.3)).normalize().multiplyScalar(r*wt(.3,1)),u.life=o*wt(.5,1),u.gravity=l*wt(.7,1.3),u.startScale=a*.5,u.endScale=a*wt(1.5,3),u.sprite.scale.set(u.startScale,u.startScale,1),u.color.copy(h).multiplyScalar(wt(.7,1)),u.sprite.material.color.copy(u.color),u.baseOpacity=wt(.6,.8),u.sprite.material.opacity=u.baseOpacity,u.sprite.visible=!0,u.active=!0,u.timer=0}}update(t,e){const n=Math.min(t,.1);if(!this.r.camera)return;const i=this.r.camera.position,r=this.windDir,a=Math.ceil(this.spawnPerSec*n*this.dustDensity);for(let o=0;o<a;o++)this._spawnDust(i,this.playerDustRadius);for(let o=0;o<ua;o++){const l=this._dustList[o];if(!l.active)continue;if(l.timer+=n,l.timer>=l.life){l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0;continue}const c=l.timer/l.life;l.sprite.position.x+=r.x*n*.6,l.sprite.position.z+=r.y*n*.6,l.sprite.position.y=l.baseY+Math.sin(e*l.driftFreq+l.phase)*l.driftAmp,l.sprite.material.opacity=Math.max(0,.08*(1-c)*this.dustDensity),l.sprite.position.distanceToSquared(i)>2500&&(l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0)}for(const o of this.fireZones)Math.random()<this.debrisRate*n*o.intensity&&this._spawnDebris(o);for(let o=0;o<da;o++){const l=this._debrisList[o];if(!l.active)continue;if(l.timer+=n,l.timer>=l.life||l.sprite.position.y<-5){l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0;continue}l.sprite.position.x+=l.vel.x*n+r.x*n*.3,l.sprite.position.y+=l.vel.y*n,l.sprite.position.z+=l.vel.z*n+r.y*n*.3;const c=Math.sin(e*l.swayFreq+l.phase)*l.swayAmp;l.sprite.position.x+=c*n,l.sprite.material.opacity*=Math.exp(-n*.3),l.sprite.position.distanceToSquared(i)>6400&&(l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0)}for(const o of this.fireZones)Math.random()<this.emberRate*n*o.intensity&&this._spawnEmber(o);for(let o=0;o<fa;o++){const l=this._emberList[o];if(!l.active)continue;if(l.timer+=n,l.timer>=l.life){l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0;continue}const c=l.timer/l.life,h=Math.sin(e*1.3+l.phase)*l.wanderRadius,d=Math.cos(e*1.5+l.phase+1)*l.wanderRadius;l.sprite.position.x=l.origin.x+h+r.x*l.timer*.5,l.sprite.position.z=l.origin.z+d+r.y*l.timer*.5,l.sprite.position.y=l.origin.y+l.vel.y*l.timer+Math.sin(e*2+l.phase)*.3,l.sprite.material.opacity=.6*(1-c),l.sprite.position.distanceToSquared(i)>6400&&(l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0)}for(let o=0;o<li;o++){const l=this._burstList[o];if(!l.active)continue;if(l.timer+=n,l.timer>=l.life){l.active=!1,l.sprite.visible=!1,l.sprite.material.opacity=0;continue}const c=l.timer/l.life;l.vel.y-=l.gravity*n,l.sprite.position.x+=l.vel.x*n,l.sprite.position.y+=l.vel.y*n,l.sprite.position.z+=l.vel.z*n;const h=l.startScale+(l.endScale-l.startScale)*c;l.sprite.scale.set(h,h,1),l.sprite.material.opacity=l.baseOpacity*(1-c)}}_allocBurst(){const t=this._burstNext;for(let e=0;e<li;e++){const n=(t+e)%li;if(!this._burstList[n].active)return this._burstNext=(n+1)%li,this._burstList[n]}return this._burstNext=(t+1)%li,this._burstList[t]}_allocDust(){for(let t=0;t<ua;t++)if(!this._dustList[t].active)return this._dustList[t];return null}_allocDebris(){for(let t=0;t<da;t++)if(!this._debrisList[t].active)return this._debrisList[t];return null}_allocEmber(){for(let t=0;t<fa;t++)if(!this._emberList[t].active)return this._emberList[t];return null}_spawnDust(t,e){const n=this._allocDust();if(!n)return;const i=wt(0,Math.PI*2),r=wt(0,e);n.sprite.position.set(t.x+Math.cos(i)*r,t.y+wt(-2.5,2),t.z+Math.sin(i)*r),n.sprite.material.opacity=wt(.06,.16)*this.dustDensity;const a=wt(.05,.17);n.sprite.scale.set(a,a,1),n.sprite.visible=!0,n.active=!0,n.timer=0,n.life=wt(3,8),n.baseY=n.sprite.position.y,n.driftAmp=wt(.02,.1),n.driftFreq=wt(.3,1),n.phase=wt(0,Math.PI*2)}_spawnDebris(t){const e=this._allocDebris();if(!e)return;const n=this.windDir;e.sprite.position.set(t.pos.x+wt(-t.radius,t.radius),t.pos.y+wt(8,20),t.pos.z+wt(-t.radius,t.radius)),e.vel.set(n.x*.2+wt(-.25,.25),-wt(1.2,3.2),n.y*.2+wt(-.25,.25));const i=wt(.03,.09);e.sprite.scale.set(i,i,1),e.sprite.material.opacity=wt(.4,.75),e.sprite.material.color.setHSL(.09,.1,wt(.15,.35)),e.sprite.visible=!0,e.active=!0,e.timer=0,e.life=wt(2,6),e.swayAmp=wt(.1,.4),e.swayFreq=wt(.4,1.2),e.phase=wt(0,Math.PI*2)}_spawnEmber(t){const e=this._allocEmber();if(!e)return;e.origin.set(t.pos.x+wt(-t.radius*.75,t.radius*.75),t.pos.y+wt(1.5,4.5),t.pos.z+wt(-t.radius*.75,t.radius*.75)),e.sprite.position.copy(e.origin),e.vel.set(wt(-.3,.3),wt(.5,2.5),wt(-.3,.3));const n=wt(.02,.06);e.sprite.scale.set(n,n,1),e.sprite.material.opacity=wt(.5,.9),e.sprite.material.color.setHSL(wt(.1,.18),1,wt(.5,.9)),e.sprite.visible=!0,e.active=!0,e.timer=0,e.life=wt(1.2,3.7),e.wanderRadius=wt(.4,2.2),e.phase=wt(0,Math.PI*2)}}const fg=`
/* ---- reset ---- */
#hud, #hud * { box-sizing: border-box; margin: 0; padding: 0; pointer-events: none; user-select: none; }

/* ================================================================== */
/*  CROSSHAIR                                                          */
/* ================================================================== */
.hud-xhair {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 40px; height: 40px; z-index: 30;
}
.hud-xhair-prong {
  position: absolute;
  background: rgba(232,238,245,0.72);
  border-radius: 1px;
  transition: transform .06s ease, opacity .22s ease, background .05s ease;
}
.hud-xhair-prong.top    { top:0; left:18px; width:4px; height:14px; }
.hud-xhair-prong.bottom { bottom:0; left:18px; width:4px; height:14px; }
.hud-xhair-prong.left   { left:0; top:18px; width:14px; height:4px; }
.hud-xhair-prong.right  { right:0; top:18px; width:14px; height:4px; }
.hud-xhair-dot {
  position: absolute; top:50%; left:50%; transform: translate(-50%,-50%);
  width: 3px; height: 3px; border-radius: 50%;
  background: rgba(255,255,255,0.50);
  transition: transform .06s ease, opacity .22s ease, background .05s ease;
}

/* -- fire: prongs push outward, dot swells -- */
.hud-xhair.fire .hud-xhair-prong.top    { transform: translateY(-3px); }
.hud-xhair.fire .hud-xhair-prong.bottom { transform: translateY(3px); }
.hud-xhair.fire .hud-xhair-prong.left   { transform: translateX(-3px); }
.hud-xhair.fire .hud-xhair-prong.right  { transform: translateX(3px); }
.hud-xhair.fire .hud-xhair-dot          { transform: translate(-50%,-50%) scale(1.35); }

/* -- ADS (aim-down-sight): prongs nearly invisible, dot remains -- */
.hud-xhair.ads .hud-xhair-prong { opacity: 0.10; }
.hud-xhair.ads .hud-xhair-dot   { opacity: 0.65; }

/* -- hit-flash (momentary bright white) -- */
.hud-xhair.hit-flash .hud-xhair-prong,
.hud-xhair.hit-flash .hud-xhair-dot { background: rgba(255,255,255,1); }

/* ================================================================== */
/*  BOTTOM-CENTER — weapon name + ammo + reloading                     */
/* ================================================================== */
.hud-bc {
  position: fixed; bottom: 6vh; left: 50%; transform: translateX(-50%);
  display: flex; align-items: flex-end; gap: 18px; z-index: 20;
}
.hud-weapon-name {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: 0.10em;
  text-transform: uppercase; color: rgba(200,210,225,0.70);
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
  padding-bottom: 5px;
}
.hud-ammo-wrap { display: flex; align-items: baseline; gap: 3px; }
.hud-ammo-cur {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 34px; font-weight: 700; color: #fafcfd; line-height: 1;
  text-shadow: 0 0 10px rgba(255,255,240,0.35), 0 1px 6px rgba(0,0,0,0.90);
  min-width: 40px; text-align: right;
}
.hud-ammo-sep {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 26px; font-weight: 600; color: rgba(180,190,205,0.62); line-height: 1;
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
}
.hud-ammo-res {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 26px; font-weight: 600; color: rgba(180,190,205,0.62); line-height: 1;
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
}
.hud-ammo-cur.low {
  color: #ff3838;
  text-shadow: 0 0 10px rgba(255,50,50,0.55), 0 1px 6px rgba(0,0,0,0.90);
  animation: hud-ammo-pulse 0.55s ease infinite;
}
@keyframes hud-ammo-pulse { 50% { opacity: .50; } }

.hud-reloading {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  color: #ffb84d; text-transform: uppercase;
  text-shadow: 0 0 8px rgba(255,160,40,0.50), 0 1px 4px rgba(0,0,0,0.90);
  opacity: 0; transition: opacity .15s ease;
  padding-bottom: 6px;
}
.hud-reloading.on { opacity: 1; animation: hud-blink 0.55s ease infinite; }
@keyframes hud-blink { 50% { opacity: .25; } }

/* ================================================================== */
/*  BOTTOM-LEFT — health bar + number                                  */
/* ================================================================== */
.hud-bl {
  position: fixed; bottom: 6vh; left: 4vw; z-index: 20;
  display: flex; align-items: center; gap: 9px;
}
.hud-hp-bar-bg {
  width: 160px; height: 8px; background: rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.10); border-radius: 3px;
  overflow: hidden;
}
.hud-hp-bar-fill {
  height: 100%; width: 100%; border-radius: 2px;
  transition: width .15s ease, background .25s ease;
  background: linear-gradient(90deg, #7a8b3e, #8b9e3e);
}
.hud-hp-val {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 17px; font-weight: 700; color: #e8eef5;
  text-shadow: 0 1px 4px rgba(0,0,0,0.85);
  min-width: 32px;
}

/* ================================================================== */
/*  BOTTOM-RIGHT — mission / wave / enemies                            */
/* ================================================================== */
.hud-br {
  position: fixed; bottom: 6vh; right: 4vw; z-index: 20;
  text-align: right;
}
.hud-wave {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
  text-transform: uppercase; color: #c8d4e2;
  text-shadow: 0 1px 4px rgba(0,0,0,0.85);
}
.hud-enemies-left {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 12px; color: rgba(180,195,215,0.68);
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
}
.hud-intermission {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
  color: #ffb266; text-transform: uppercase;
  text-shadow: 0 0 6px rgba(255,160,40,0.30), 0 1px 4px rgba(0,0,0,0.85);
}

/* ================================================================== */
/*  TOP-LEFT — objective                                                */
/* ================================================================== */
.hud-obj {
  position: fixed; top: 3vh; left: 4vw; z-index: 20;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: rgba(180,200,220,0.52);
  text-shadow: 0 1px 3px rgba(0,0,0,0.80);
}

/* ================================================================== */
/*  TOP-CENTER — kill feed (auto-fading)                                */
/* ================================================================== */
.hud-kf {
  position: fixed; top: 3vh; left: 50%; transform: translateX(-50%);
  z-index: 20; display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.hud-kf-line {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
  text-transform: uppercase; color: #c8d8f0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.85);
  animation: hud-kf-in .25s ease, hud-kf-fade 2.8s ease 2.8s forwards;
  white-space: nowrap;
}
@keyframes hud-kf-in  { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
@keyframes hud-kf-fade { to { opacity:0; } }

/* ================================================================== */
/*  OVERLAYS — damage, death, mission-complete                         */
/* ================================================================== */

/* -- damage flash vignette -- */
.hud-dmg {
  position: fixed; inset: 0; z-index: 15; opacity: 0;
  background: radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(180,20,0,0.35) 75%, rgba(120,0,0,0.55));
  transition: opacity .10s ease;
}
.hud-dmg.on { opacity: 1; transition: opacity .03s ease; }

/* -- death overlay -- */
.hud-death {
  position: fixed; inset: 0; z-index: 25; opacity: 0;
  background: radial-gradient(ellipse at 50% 40%, rgba(30,4,4,0.55), rgba(12,0,0,0.92));
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity .6s ease;
}
.hud-death.on { opacity: 1; }
.hud-death-text {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: clamp(20px, 5vw, 36px); font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: #e84444; text-shadow: 0 0 20px rgba(200,40,40,0.70), 0 2px 10px rgba(0,0,0,0.95);
  text-align: center;
}
.hud-death-sub {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: 0.10em;
  color: rgba(210,190,190,0.70); margin-top: 10px; text-align: center;
}

/* -- mission complete banner -- */
.hud-mc {
  position: fixed; inset: 0; z-index: 25; opacity: 0;
  background: radial-gradient(ellipse at 50% 45%, rgba(8,16,28,0.40), rgba(2,6,14,0.90));
  display: flex; align-items: center; justify-content: center;
  transition: opacity 1.0s ease;
}
.hud-mc.on { opacity: 1; }
.hud-mc-text {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: clamp(28px, 7vw, 60px); font-weight: 900;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: #fafcfd; text-shadow: 0 0 30px rgba(255,200,80,0.40), 0 2px 12px rgba(0,0,0,0.95);
  animation: hud-mc-zoom .7s ease;
}
@keyframes hud-mc-zoom { from { transform:scale(0.85); opacity:0; } to { transform:scale(1); opacity:1; } }
`;class pg{constructor(t){this._last={},this._fireT=0,this._hitT=0,this._dmgT=0,this._kfCleanups=[],this._injectCSS(),this._clearDOM(),this._buildDOM(),this._bindEvents()}_clearDOM(){const t=document.getElementById("hud");if(t)for(;t.firstChild;)t.removeChild(t.firstChild)}_injectCSS(){if(document.getElementById("hud-css"))return;const t=document.createElement("style");t.id="hud-css",t.textContent=fg,document.head.appendChild(t)}_buildDOM(){const t=document.getElementById("hud");if(!t)return;const e=(x,R,z)=>{const F=document.createElement(x);return R&&(F.className=R),z!==void 0&&(F.textContent=z),F},n=(x,R,z)=>{const F=document.createElement(x);return R&&(F.className=R),z!==void 0&&(F.innerHTML=z),F},i=e("div","hud-xhair"),r=[e("div","hud-xhair-prong top"),e("div","hud-xhair-prong bottom"),e("div","hud-xhair-prong left"),e("div","hud-xhair-prong right")],a=e("div","hud-xhair-dot");i.append(...r,a);const o=e("div","hud-bc"),l=e("div","hud-weapon-name",j.weaponName),c=n("div","hud-ammo-wrap",'<span class="hud-ammo-cur">30</span><span class="hud-ammo-sep">&#8201;/&#8201;</span><span class="hud-ammo-res">150</span>'),h=e("div","hud-reloading","RELOADING");o.append(l,c,h);const d=c.querySelector(".hud-ammo-cur"),u=c.querySelector(".hud-ammo-res"),m=e("div","hud-bl"),g=e("div","hud-hp-bar-bg"),_=e("div","hud-hp-bar-fill");g.appendChild(_);const p=e("div","hud-hp-val","100");m.append(g,p);const f=e("div","hud-br"),S=e("div","hud-wave"),y=e("div","hud-enemies-left"),b=e("div","hud-intermission");f.append(S,y,b);const U=e("div","hud-obj","ELIMINATE HOSTILE FORCES"),A=e("div","hud-kf"),T=e("div","hud-dmg"),D=n("div","hud-death",'<div class="hud-death-text">YOU ARE DOWN</div><div class="hud-death-sub">PRESS R TO RESPAWN</div>'),w=n("div","hud-mc",'<div class="hud-mc-text">MISSION COMPLETE</div>');t.append(i,o,m,f,U,A,T,D,w),this._el={xhair:i,weaponName:l,ammoCur:d,ammoRes:u,reloading:h,hpFill:_,hpVal:p,waveEl:S,enemiesEl:y,interEl:b,obj:U,kf:A,dmg:T,death:D,mc:w}}_bindEvents(){const t=e=>(...n)=>{try{e(...n)}catch{}};ae.on("player:hurt",t(()=>{const e=this._el.dmg;e&&(e.classList.remove("on"),e.offsetWidth,e.classList.add("on"),clearTimeout(this._dmgT),this._dmgT=setTimeout(()=>e.classList.remove("on"),1200))})),ae.on("weapon:fire",t(()=>{const e=this._el.xhair;e&&(e.classList.add("fire"),clearTimeout(this._fireT),this._fireT=setTimeout(()=>e.classList.remove("fire"),80))})),ae.on("weapon:hit",t(()=>{const e=this._el.xhair;e&&(e.classList.add("hit-flash"),clearTimeout(this._hitT),this._hitT=setTimeout(()=>e.classList.remove("hit-flash"),80))})),ae.on("enemy:killed",t(e=>{const n=e&&e.headshot?"HEADSHOT":"ENEMY DOWNED";this._pushKillFeed(n)}))}_pushKillFeed(t){const e=this._el.kf;if(!e)return;const n=document.createElement("div");n.className="hud-kf-line",n.textContent=t,e.appendChild(n);const i=()=>{n.parentNode&&n.remove();const a=this._kfCleanups.indexOf(i);a!==-1&&this._kfCleanups.splice(a,1)},r=setTimeout(i,6e3);for(this._kfCleanups.push(r);e.children.length>3;){const a=e.firstChild;a&&a.remove()}}update(){try{this._updateHealth(),this._updateAmmo(),this._updateWeapon(),this._updateMission(),this._updateCrosshair(),this._updateDeath(),this._updateMissionComplete()}catch{}}_updateHealth(){const t=j.health,e=j.maxHealth;if(t===this._last.hp&&e===this._last.maxHp)return;this._last.hp=t,this._last.maxHp=e;const n=Math.max(0,Math.min(1,t/e)),i=this._el.hpFill,r=this._el.hpVal;if(!i||!r)return;i.style.width=`${n*100}%`;const a=Math.round(140+(1-n)*115),o=Math.round(50+n*165),l=Math.round(38+(1-n)*22),c=Math.min(255,a+35),h=Math.min(255,o+25);i.style.background=`linear-gradient(90deg, rgb(${a},${o},${l}), rgb(${c},${h},${l}))`,r.textContent=String(Math.ceil(t))}_updateAmmo(){const t=j.ammo,e=j.reserve,n=j.reloading;t!==this._last.ammo&&(this._last.ammo=t,this._el.ammoCur&&(this._el.ammoCur.textContent=String(t),this._el.ammoCur.classList.toggle("low",t<=6))),e!==this._last.reserve&&(this._last.reserve=e,this._el.ammoRes&&(this._el.ammoRes.textContent=String(e))),n!==this._last.reloading&&(this._last.reloading=n,this._el.reloading&&this._el.reloading.classList.toggle("on",n))}_updateWeapon(){const t=j.weaponName;t!==this._last.weaponName&&this._el.weaponName&&(this._last.weaponName=t,this._el.weaponName.textContent=t)}_updateMission(){const t=j.wave,e=j.waveState,n=j.waveTimer,i=Array.isArray(j.enemies)?j.enemies.length:0;if((t!==this._last.wave||e!==this._last.waveState)&&(this._last.wave=t,this._last.waveState=e,this._el.waveEl&&(this._el.waveEl.textContent=t>0?`WAVE ${t}/5`:""),this._el.interEl&&(this._el.interEl.textContent=e==="intermission"&&t>0?`NEXT WAVE IN ${Math.ceil(Math.max(0,n))}...`:"")),e==="intermission"&&this._el.interEl){const r=Math.ceil(Math.max(0,n));r!==this._last.waveTimerSec&&(this._last.waveTimerSec=r,this._el.interEl.textContent=`NEXT WAVE IN ${r}...`)}i!==this._last.enemiesLen&&this._el.enemiesEl&&(this._last.enemiesLen=i,this._el.enemiesEl.textContent=i>0?`HOSTILES (${i})`:"")}_updateCrosshair(){const t=j.view&&j.view.ads?j.view.ads:0;t!==this._last.ads&&(this._last.ads=t,this._el.xhair&&this._el.xhair.classList.toggle("ads",t>.5))}_updateDeath(){const t=j.alive;t!==this._last.alive&&(this._last.alive=t,this._el.death&&this._el.death.classList.toggle("on",!t))}_updateMissionComplete(){const t=j.missionComplete;t!==this._last.missionComplete&&(this._last.missionComplete=t,t&&this._el.mc&&this._el.mc.classList.add("on"))}}const di=160,zn=dt.world.mapSize,pa=di/(zn*2),mg=8;class gg{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=di,this.canvas.height=di,this.canvas.style.cssText="position:fixed;bottom:20px;left:20px;z-index:11;border-radius:50%;border:2px solid rgba(255,255,255,0.30);opacity:0.82;pointer-events:none;box-shadow:0 0 12px rgba(0,0,0,0.60);",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this._frameCount=0}_tx(t,e){return{cx:di/2+t*pa,cy:di/2+e*pa}}update(t,e,n){if(this._frameCount++,this._frameCount%mg!==0)return;const i=this.ctx,r=di,a=di;i.clearRect(0,0,r,a),i.beginPath(),i.arc(r/2,a/2,r/2-2,0,Math.PI*2),i.fillStyle="rgba(8,10,14,0.88)",i.fill(),i.clip(),i.strokeStyle="rgba(255,255,255,0.06)",i.lineWidth=.5;const o=20;for(let d=-zn;d<=zn;d+=o){const u=this._tx(d,0);i.beginPath(),i.moveTo(u.cx,0),i.lineTo(u.cx,a),i.stroke()}for(let d=-zn;d<=zn;d+=o){const u=this._tx(0,d);i.beginPath(),i.moveTo(0,u.cy),i.lineTo(r,u.cy),i.stroke()}if(i.strokeStyle="rgba(120,120,130,0.20)",i.lineWidth=pa*8,[{ax:0,az:-zn,bx:0,bz:zn},{ax:-zn,az:0,bx:zn,bz:0}].forEach(({ax:d,az:u,bx:m,bz:g})=>{const _=this._tx(d,u),p=this._tx(m,g);i.beginPath(),i.moveTo(_.cx,_.cy),i.lineTo(p.cx,p.cy),i.stroke()}),e)for(const d of e){if(d.state==="dead"||d.state==="dying")continue;const u=this._tx(d.pos.x,d.pos.z);u.cx<0||u.cx>r||u.cy<0||u.cy>a||(i.beginPath(),i.arc(u.cx,u.cy,2.5,0,Math.PI*2),i.fillStyle="rgba(255,60,40,0.85)",i.fill(),i.beginPath(),i.arc(u.cx,u.cy,5,0,Math.PI*2),i.fillStyle="rgba(255,40,20,0.18)",i.fill())}const l=this._tx(t.x,t.z),c=5;i.save(),i.translate(l.cx,l.cy),i.rotate(n+Math.PI),i.beginPath(),i.moveTo(0,-8),i.lineTo(-c,c),i.lineTo(0,0),i.lineTo(c,c),i.closePath();const h=i.createLinearGradient(0,-8,0,0);h.addColorStop(0,"#4af"),h.addColorStop(1,"#28c"),i.fillStyle=h,i.fill(),i.strokeStyle="#fff",i.lineWidth=1,i.stroke(),i.beginPath(),i.arc(0,0,7,0,Math.PI*2),i.fillStyle="rgba(68,170,255,0.20)",i.fill(),i.restore()}dispose(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}}const _g=`
#pause-overlay {
  position: fixed; inset: 0; z-index: 50;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: rgba(4,6,12,0.88);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #e8eef5;
  font-family: 'Segoe UI', system-ui, sans-serif;
  opacity: 0; pointer-events: none;
  transition: opacity 0.25s ease;
}
#pause-overlay.active {
  opacity: 1; pointer-events: auto;
}
#pause-overlay h2 {
  font-size: clamp(24px, 5vw, 44px);
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 30px;
  color: #fff;
  text-shadow: 0 0 18px rgba(255,160,40,0.30);
}
#pause-overlay .pause-btn {
  display: block;
  width: 240px;
  margin: 8px 0;
  padding: 14px 20px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  color: #cfd8e8;
  font-size: 15px;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-align: center;
  transition: background 0.15s, border-color 0.15s;
}
#pause-overlay .pause-btn:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,176,102,0.6);
  color: #ffb066;
}
#pause-overlay .pause-hint {
  margin-top: 24px;
  font-size: 12px;
  color: rgba(180,195,215,0.50);
  letter-spacing: 0.06em;
}
`;class vg{constructor(){this._paused=!1,this._injectCSS(),this._buildDOM(),this._bindKeys()}_injectCSS(){if(document.getElementById("pause-css"))return;const t=document.createElement("style");t.id="pause-css",t.textContent=_g,document.head.appendChild(t)}_buildDOM(){const t=document.createElement("div");t.id="pause-overlay";const e=document.createElement("h2");e.textContent="PAUSED";const n=document.createElement("div");n.className="pause-btn",n.textContent="RESUME",n.addEventListener("click",()=>this.toggle());const i=document.createElement("div");i.className="pause-btn",i.textContent="RESTART MISSION",i.addEventListener("click",()=>{this.toggle(),j.wave=0,j.waveState="idle",j.missionComplete=!1,j.kills=0,j.score=0,window.location.reload()});const r=document.createElement("div");r.className="pause-hint",r.textContent="Press ESC to resume",t.append(e,n,i,r),document.body.appendChild(t),this._overlay=t}_bindKeys(){document.addEventListener("keydown",t=>{t.code==="Escape"&&dt.started&&this.toggle()})}get paused(){return this._paused}toggle(){this._paused=!this._paused,j.paused=this._paused,this._overlay.classList.toggle("active",this._paused),this._paused&&document.pointerLockElement&&document.exitPointerLock()}dispose(){this._overlay.parentNode&&this._overlay.parentNode.removeChild(this._overlay)}}const xg=new E,Mg=new E,_i=[],ci=[],Sg=6;function yg(s){for(let l=0;l<ci.length;l++)if(!ci[l].active)return ci[l].active=!0,ci[l].mesh.visible=!0,ci[l];const t=new Rs(.06,12,8),e=new Bt({color:"#2d3a1a",roughness:.65,metalness:.7}),n=new bt(t,e);n.castShadow=!0,n.receiveShadow=!0;const i=new Ar(.04,.008,6,8),r=new Bt({color:"#c0c0c0",roughness:.3,metalness:.9}),a=new bt(i,r);a.position.y=.07,n.add(a),n.visible=!1,s.add(n);const o={mesh:n,vel:new E(0,0,0),timer:0,fuseTime:dt.grenade.fuseTime,cooked:!1,exploded:!1,active:!1};return ci.length<Sg&&ci.push(o),o}function wg(s,t,e,n=0){const i=yg(e),r=dt.grenade;return i.mesh.position.copy(s).addScaledVector(t,.3),i.vel.copy(t).multiplyScalar(r.throwForce).add(Mg.set(0,r.throwUp,0)),i.timer=0,i.fuseTime=r.fuseTime,i.cooked=n>0,i.exploded=!1,n>0&&(i.fuseTime=Math.max(.3,i.fuseTime-n)),_i.push(i),i}function bg(s,t,e,n,i,r,a,o){if(s.exploded)return;s.exploded=!0;const l=s.mesh.position.clone(),c=dt.grenade;if(r.explosion(l,1.5,16742954),i.burst(l,20,{color:16738842,size:.1,speed:6,life:.7}),i.burst(l,10,{color:3355443,size:.06,speed:3,life:.8}),a.explosion(l),t)for(const d of t){if(d.state==="dead"||d.state==="dying")continue;const u=d.group.position,m=l.distanceTo(u);if(m>c.damageRadius)continue;const g=1-m/c.damageRadius,_=c.minDamage+(c.maxDamage-c.minDamage)*g*g;ae.emit("weapon:hit",{id:d.id,dmg:Math.round(_),hitPos:u.clone(),normal:xg.copy(u).sub(l).normalize(),headshot:!1})}if(e)for(let d=e.length-1;d>=0;d--){const u=e[d],m=l.distanceTo(u.position);if(m<c.damageRadius*1.5){const g=m*.03;setTimeout(()=>{if(!j.paused&&u.userData&&!u.userData.exploded){if(u.userData.exploded=!0,r.explosion(u.position.clone(),2,16738858),i.burst(u.position.clone(),15,{color:16734746,size:.12,speed:5,life:.6}),a.explosion(l),t)for(const _ of t){if(_.state==="dead"||_.state==="dying")continue;u.position.distanceTo(_.group.position)<5&&ae.emit("weapon:hit",{id:_.id,dmg:80,hitPos:_.group.position.clone(),normal:new E(0,1,0),headshot:!1})}u.visible=!1,u.material&&u.material.dispose()}},g*1e3)}}s.mesh.visible=!1,s.active=!1;const h=_i.indexOf(s);h!==-1&&_i.splice(h,1)}function Eg(s,t,e,n,i,r,a,o){const l=Math.min(s,.1);for(let c=_i.length-1;c>=0;c--){const h=_i[c];if(h.exploded){_i.splice(c,1);continue}if(h.timer+=l,h.timer>=h.fuseTime){bg(h,r,a,t,e,n,i);continue}h.vel.y+=dt.movement.gravity*l,h.mesh.position.x+=h.vel.x*l,h.mesh.position.y+=h.vel.y*l,h.mesh.position.z+=h.vel.z*l,h.mesh.rotation.x+=l*12,h.mesh.rotation.y+=l*8,h.mesh.rotation.z+=l*5;const d=t.groundAt?t.groundAt(h.mesh.position.x,h.mesh.position.z):dt.world.groundY;h.mesh.position.y<d&&(h.mesh.position.y=d,h.vel.y*=-.35,h.vel.x*=.6,h.vel.z*=.6,Math.abs(h.vel.y)<.5&&(h.vel.y=0));const u=nn.resolveCircle(h.mesh.position.clone(),.06,h.mesh.position.y-.1,h.mesh.position.y+.1),m=u.x-h.mesh.position.x,g=u.z-h.mesh.position.z;(Math.abs(m)>.001||Math.abs(g)>.001)&&(h.mesh.position.x=u.x,h.mesh.position.z=u.z,h.vel.x*=-.3,h.vel.z*=-.3),h.mesh.position.y<-50&&(h.exploded=!0,h.mesh.visible=!1,h.active=!1,_i.splice(c,1))}}function Tg(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=[{t:0,c:"#24334d"},{t:.22,c:"#3b4a63"},{t:.42,c:"#7a6a55"},{t:.55,c:"#c8915a"},{t:.62,c:"#e8a05a"},{t:.68,c:"#f0a24e"},{t:.76,c:"#8a5a38"},{t:1,c:"#3a2a20"}],r=n.createLinearGradient(0,0,0,256);for(const h of i)r.addColorStop(h.t,h.c);n.fillStyle=r,n.fillRect(0,0,256,256);const a=256*.5,o=256*.615,l=n.createRadialGradient(a,o,2,a,o,256*.3);l.addColorStop(0,"rgba(255,240,200,1)"),l.addColorStop(.1,"rgba(255,224,160,0.98)"),l.addColorStop(.22,"rgba(255,190,110,0.55)"),l.addColorStop(.45,"rgba(255,170,90,0.18)"),l.addColorStop(1,"rgba(255,160,80,0)"),n.fillStyle=l,n.fillRect(0,0,256,256);const c=new Rn(e);return c.colorSpace=Pe,c.anisotropy=8,c}function Ag(){const s=document.createElement("canvas");s.width=s.height=128;const t=s.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,248,220,1)"),e.addColorStop(.08,"rgba(255,236,180,1)"),e.addColorStop(.22,"rgba(255,206,130,0.6)"),e.addColorStop(.5,"rgba(255,180,100,0.2)"),e.addColorStop(1,"rgba(255,160,90,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);const n=new Rn(s),i=new sn(new Ke({map:n,color:new Rt(4,3.4,2.2),blending:Ze,depthWrite:!1,toneMapped:!1,transparent:!0}));return i.scale.set(70,70,1),i.frustumCulled=!1,i}function Cg(){const s=new se,t=new Rs(380,32,20),e=new Tn({map:Tg(),side:He,fog:!1,depthWrite:!1,toneMapped:!0}),n=new bt(t,e);return n.renderOrder=-1,s.add(n),s}function Rg(s,t){const e=Math.atan2(t.x,t.z);s.rotation.set(0,e,0)}const Yl=()=>{const s=new o0(document.getElementById("app"));j.demo=dt.demo;const t=new l0(s),e=Cg();s.scene.add(e),Rg(e,t.sunDir);const n=Ag();n.position.copy(t.sunDir).multiplyScalar(300),s.scene.add(n);const i=new $0(s,t),r=new ug(s,t),a=new dg(s,t),o=new w0,l=new y0,c=new Q0(s,l,i),h=new rg(s,l,c,i,a,r,o),d=new lg(s,i,c,a,r,o);h.setEnemyManager(d),window.__MW_enemyManager=d,a.fireZones=[{pos:new E(18,1.5,-18),radius:5,intensity:1},{pos:new E(22,1.5,20),radius:4,intensity:.9},{pos:new E(50,1.5,-45),radius:4,intensity:.8}];const u=new pg(s.renderer),m=new gg,g=new vg;window.__MW_pauseMenu=g;const _=new M0(s),p=new S0;dt.demo&&(s.renderViewModel=!1);const f=document.getElementById("overlay");dt.demo&&(f.classList.add("hidden"),j.started=!0,dt.started=!0);const S=()=>{dt.started||(dt.started=!0,j.started=!0,f.classList.add("hidden"),d.startGame(),ae.emit("game:start"))};f.addEventListener("click",S),document.addEventListener("pointerdown",()=>{!dt.demo&&dt.started&&l.pointerLock()});const y=document.getElementById("fps");window.__MW_READY=!0,window.__MW_SCENE=s.scene,window.__MW_CAMERA=s.camera,window.__MW_GS=j,window.__MW_player=c,window.__MW_weapon=h,window.__MW_renderer=s;let b=-1;window.__MW_DEMO_JUMP=V=>{b=V};const U=()=>b>=0?b:j.time;let A=!1,T=0,D=0,w=0;const x=new E,R=new E;c._stepTimer=0;let z=!1;const F=()=>{setTimeout(W,16)},W=()=>{try{const V=performance.now(),B=s.frame();if(j.time+=B,window.__MW_frameCounter=(window.__MW_frameCounter||0)+1,B<.001&&window.__MW_frameCounter>5){F();return}if(dt.demo){const G=U();p.apply(G,s.camera),i.update(B,G,s.camera.position),r.update(B,G,s.camera.position),a.update(B,G),d.updateDemo(B,s.camera.position),_.update(B,G),_.render()}else{if(g.paused){j.paused=!0,F();return}if(j.paused=!1,l.update(B),c.update(B),c.isAlive)A=!1;else{const at=l.has("KeyR");at&&!A&&(c.respawn(),d.startGame()),A=at}i.update(B,j.time,s.camera.position),r.update(B,j.time,s.camera.position),a.update(B,j.time),h.update(B),d.update(B),w-=B;const G=l.has("KeyG");if(G&&!z&&w<=0&&c.isAlive&&(w=.5,x.set(0,0,-1).applyQuaternion(s.camera.quaternion).normalize(),R.copy(s.camera.position).addScaledVector(x,.8),wg(R,x,s.scene)),z=G,l.has("Digit1")&&h._slot!=="primary"&&h.swapToPrimary(),l.has("Digit2")&&h._slot!=="pistol"&&h.swapToPistol(),t.update(j.pos),_.update(B,j.time),u.update(),o.update(s.camera),Eg(B,i,a,r,o,j.enemies||[],i.explosiveBarrels||[],s.scene),m.update(j.pos,j.enemies||[],c.yaw),c.grounded&&c.moveSpeed>2&&!g.paused){const at=.45/Math.max(c.moveSpeed/dt.movement.walkSpeed,.5);c._stepTimer=(c._stepTimer||0)+B,c._stepTimer>=at&&(c._stepTimer-=at,o.step())}else c._stepTimer=0;_.render(),s.renderViewModel&&(s.renderer.autoClear=!1,s.renderer.clearDepth(),s.renderer.render(s.vmScene,s.vmCamera),s.renderer.autoClear=!0)}const q=performance.now()-V;T+=q,D++,D===60&&(s.avg=T/D,T=0,D=0),s.avg&&(y.textContent=`${(1e3/s.avg).toFixed(0)} fps`)}catch(V){window.__MW_ERRORS||(window.__MW_ERRORS=[]);const B=V&&V.message?V.message:String(V),q=window.__MW_ERRORS[window.__MW_ERRORS.length-1];(!q||q.msg!==B||performance.now()-q.t>2e3)&&(window.__MW_ERRORS.push({msg:B,stack:(V&&V.stack||"").slice(0,400),t:performance.now()}),window.__MW_ERRORS.length>10&&window.__MW_ERRORS.shift(),console.warn("[game loop] recovered from error:",B))}F()};ae.on("player:hurt",({hp:V})=>{V>0&&o.hurt()}),ae.on("player:dead",()=>o.death()),ae.on("player:jump",()=>o.jump()),ae.on("player:land",()=>o.land()),ae.on("enemy:wave",V=>o.waveStart()),ae.on("mission:complete",()=>o.missionComplete()),ae.on("weapon:reload",()=>{}),window.addEventListener("resize",()=>_.resize()),W()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Yl):Yl();
