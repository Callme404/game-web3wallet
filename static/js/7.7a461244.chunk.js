(this["webpackJsonpgame-web3mobile"]=this["webpackJsonpgame-web3mobile"]||[]).push([[7],{593:function(e,t,i){var r=i(126);e.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")},600:function(e,t,i){"use strict";var r=i(46),n=i(611);e.exports=n((function(e){var t=r("sha256").update(e).digest();return r("sha256").update(t).digest()}))},611:function(e,t,i){"use strict";var r=i(593),n=i(10).Buffer;e.exports=function(e){function t(t){var i=t.slice(0,-4),r=t.slice(-4),n=e(i);if(!(r[0]^n[0]|r[1]^n[1]|r[2]^n[2]|r[3]^n[3]))return i}return{encode:function(t){var i=e(t);return r.encode(n.concat([t,i],t.length+4))},decode:function(e){var i=t(r.decode(e));if(!i)throw new Error("Invalid checksum");return i},decodeUnsafe:function(e){var i=r.decodeUnsafe(e);if(i)return t(i)}}}},647:function(e,t,i){var r=i(83),n=i(10).Buffer,a=i(66),o=i(600),s=i(128),c=n.from("Bitcoin seed","utf8"),u=2147483648,p={private:76066276,public:76067358};function d(e){this.versions=e||p,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function h(e,t,i){var r=n.allocUnsafe(78);r.writeUInt32BE(t,0),r.writeUInt8(e.depth,4);var a=e.depth?e.parentFingerprint:0;return r.writeUInt32BE(a,5),r.writeUInt32BE(e.index,9),e.chainCode.copy(r,13),i.copy(r,45),r}function f(e){var t=a.createHash("sha256").update(e).digest();return a.createHash("ripemd160").update(t).digest()}Object.defineProperty(d.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(d.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(d.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(d.prototype,"privateKey",{get:function(){return this._privateKey},set:function(e){r.equal(e.length,32,"Private key must be 32 bytes."),r(!0===s.privateKeyVerify(e),"Invalid private key"),this._privateKey=e,this._publicKey=n.from(s.publicKeyCreate(e,!0)),this._identifier=f(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(d.prototype,"publicKey",{get:function(){return this._publicKey},set:function(e){r(33===e.length||65===e.length,"Public key must be 33 or 65 bytes."),r(!0===s.publicKeyVerify(e),"Invalid public key"),this._publicKey=n.from(s.publicKeyConvert(e,!0)),this._identifier=f(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0),this._privateKey=null}}),Object.defineProperty(d.prototype,"privateExtendedKey",{get:function(){return this._privateKey?o.encode(h(this,this.versions.private,n.concat([n.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(d.prototype,"publicExtendedKey",{get:function(){return o.encode(h(this,this.versions.public,this.publicKey))}}),d.prototype.derive=function(e){if("m"===e||"M"===e||"m'"===e||"M'"===e)return this;var t=e.split("/"),i=this;return t.forEach((function(e,t){if(0!==t){var n=e.length>1&&"'"===e[e.length-1],a=parseInt(e,10);r(a<u,"Invalid index"),n&&(a+=u),i=i.deriveChild(a)}else r(/^[mM]{1}/.test(e),'Path must start with "m" or "M"')})),i},d.prototype.deriveChild=function(e){var t,i=e>=u,o=n.allocUnsafe(4);if(o.writeUInt32BE(e,0),i){r(this.privateKey,"Could not derive hardened child key");var c=this.privateKey,p=n.alloc(1,0);c=n.concat([p,c]),t=n.concat([c,o])}else t=n.concat([this.publicKey,o]);var h=a.createHmac("sha512",this.chainCode).update(t).digest(),f=h.slice(0,32),l=h.slice(32),y=new d(this.versions);if(this.privateKey)try{y.privateKey=n.from(s.privateKeyTweakAdd(n.from(this.privateKey),f))}catch(v){return this.deriveChild(e+1)}else try{y.publicKey=n.from(s.publicKeyTweakAdd(n.from(this.publicKey),f,!0))}catch(v){return this.deriveChild(e+1)}return y.chainCode=l,y.depth=this.depth+1,y.parentFingerprint=this.fingerprint,y.index=e,y},d.prototype.sign=function(e){return n.from(s.ecdsaSign(e,this.privateKey).signature)},d.prototype.verify=function(e,t){return s.ecdsaVerify(Uint8Array.from(t),Uint8Array.from(e),Uint8Array.from(this.publicKey))},d.prototype.wipePrivateData=function(){return this._privateKey&&a.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},d.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},d.fromMasterSeed=function(e,t){var i=a.createHmac("sha512",c).update(e).digest(),r=i.slice(0,32),n=i.slice(32),o=new d(t);return o.chainCode=n,o.privateKey=r,o},d.fromExtendedKey=function(e,t){var i=new d(t=t||p),n=o.decode(e),a=n.readUInt32BE(0);r(a===t.private||a===t.public,"Version mismatch: does not match private or public"),i.depth=n.readUInt8(4),i.parentFingerprint=n.readUInt32BE(5),i.index=n.readUInt32BE(9),i.chainCode=n.slice(13,45);var s=n.slice(45);return 0===s.readUInt8(0)?(r(a===t.private,"Version mismatch: version does not match private"),i.privateKey=s.slice(1)):(r(a===t.public,"Version mismatch: version does not match public"),i.publicKey=s),i},d.fromJSON=function(e){return d.fromExtendedKey(e.xpriv)},d.HARDENED_OFFSET=u,e.exports=d},800:function(e,t,i){"use strict";i.r(t),i.d(t,"generateAddresses",(function(){return u})),i.d(t,"isValidPath",(function(){return p}));var r=i(25),n=i(647),a=i.n(n),o=i(6),s=r.publicToAddress,c=r.toChecksumAddress;function u(e,t){var i=e.publicKey,r=e.chainCode,n=e.path,u=new a.a;u.publicKey=new o.Buffer(i,"hex"),u.chainCode=new o.Buffer(r,"hex");for(var p=[],d=t;d<5+t;d++){var h=u.deriveChild(d),f=s(h.publicKey,!0).toString("hex");p.push({dPath:"".concat(n,"/").concat(d),address:c("0x".concat(f))})}return p}function p(e){var t=e.split("/");if("m"!==t[0])return!1;if("44'"!==t[1])return!1;if(!["60'","1'","73799'","246'"].includes(t[2]))return!1;if(void 0===t[3]||"0'"===t[3])return!0;var i=Number(t[3].slice(0,-1));if(isNaN(i)||i<0||"'"!==t[3].slice(-1))return!1;if(void 0===t[4])return!0;var r=Number(t[4]);if(isNaN(r)||r<0)return!1;if(void 0===t[5])return!0;var n=Number(t[5]);return!(isNaN(n)||n<0)}}}]);
//# sourceMappingURL=7.7a461244.chunk.js.map