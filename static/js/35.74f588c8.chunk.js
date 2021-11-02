(this["webpackJsonpgame-web3mobile"]=this["webpackJsonpgame-web3mobile"]||[]).push([[35],{1743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;var n=r(1744);Object.defineProperty(t,"SafeAppProvider",{enumerable:!0,get:function(){return n.SafeAppProvider}})},1744:function(e,t,r){"use strict";var n=r(9),s=r(81),a=r(35),u=r(36);Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;var c=r(28),i=r(1745),o=function(){function e(t,r){a(this,e),this.submittedTxs=new Map,this.events=new c.EventEmitter,this.safe=t,this.sdk=r}return u(e,[{key:"connect",value:function(){var e=s(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.events.emit("connect",{chainId:this.chainId}),e.abrupt("return");case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=s(n.mark((function e(){return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"once",value:function(e,t){this.events.once(e,t)}},{key:"off",value:function(e,t){this.events.off(e,t)}},{key:"removeListener",value:function(e,t){this.events.removeListener(e,t)}},{key:"chainId",get:function(){return this.safe.chainId}},{key:"request",value:function(){var e=s(n.mark((function e(t){var r,s,a,u,c,o,h,d,p,f;return n.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.method,s=t.params,a=void 0===s?[]:s,e.t0=r,e.next="eth_accounts"===e.t0?4:"net_version"===e.t0||"eth_chainId"===e.t0?5:"eth_sendTransaction"===e.t0?6:"eth_blockNumber"===e.t0?12:"eth_getBalance"===e.t0?16:"eth_getCode"===e.t0?17:"eth_getStorageAt"===e.t0?18:"eth_getBlockByNumber"===e.t0?19:"eth_getBlockByHash"===e.t0?20:"eth_getTransactionByHash"===e.t0?21:"eth_getTransactionReceipt"===e.t0?34:"eth_estimateGas"===e.t0?45:"eth_call"===e.t0?46:"eth_getLogs"===e.t0?47:48;break;case 4:return e.abrupt("return",[this.safe.safeAddress]);case 5:return e.abrupt("return","0x".concat(this.chainId.toString(16)));case 6:return u=Object.assign({value:"0",data:"0x"},a[0]),e.next=9,this.sdk.txs.send({txs:[u]});case 9:return c=e.sent,this.submittedTxs.set(c.safeTxHash,{from:this.safe.safeAddress,hash:c.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:u.data,value:u.value,to:u.to,blockHash:null,blockNumber:null,transactionIndex:null}),e.abrupt("return",c.safeTxHash);case 12:return e.next=14,this.sdk.eth.getBlockByNumber(["latest"]);case 14:return o=e.sent,e.abrupt("return",o.number);case 16:return e.abrupt("return",this.sdk.eth.getBalance([i.getLowerCase(a[0]),a[1]]));case 17:return e.abrupt("return",this.sdk.eth.getCode([i.getLowerCase(a[0]),a[1]]));case 18:return e.abrupt("return",this.sdk.eth.getStorageAt([i.getLowerCase(a[0]),a[1],a[2]]));case 19:return e.abrupt("return",this.sdk.eth.getBlockByNumber([a[0],a[1]]));case 20:return e.abrupt("return",this.sdk.eth.getBlockByHash([a[0],a[1]]));case 21:return h=a[0],e.prev=22,e.next=25,this.sdk.txs.getBySafeTxHash(h);case 25:d=e.sent,h=d.transactionHash||h,e.next=31;break;case 29:e.prev=29,e.t1=e.catch(22);case 31:if(!this.submittedTxs.has(h)){e.next=33;break}return e.abrupt("return",this.submittedTxs.get(h));case 33:return e.abrupt("return",this.sdk.eth.getTransactionByHash([h]).then((function(e){return e&&(e.hash=a[0]),e})));case 34:return p=a[0],e.prev=35,e.next=38,this.sdk.txs.getBySafeTxHash(p);case 38:f=e.sent,p=f.transactionHash||p,e.next=44;break;case 42:e.prev=42,e.t2=e.catch(35);case 44:return e.abrupt("return",this.sdk.eth.getTransactionReceipt([p]).then((function(e){return e&&(e.transactionHash=a[0]),e})));case 45:return e.abrupt("return",0);case 46:return e.abrupt("return",this.sdk.eth.call([a[0],a[1]]));case 47:return e.abrupt("return",this.sdk.eth.getPastLogs([a[0]]));case 48:throw Error('"'.concat(t.method,'" not implemented'));case 49:case"end":return e.stop()}}),e,this,[[22,29],[35,42]])})));return function(t){return e.apply(this,arguments)}}()},{key:"send",value:function(e,t){e||t("Undefined request"),this.request(e).then((function(r){return t(null,{jsonrpc:"2.0",id:e.id,result:r})})).catch((function(e){return t(e,null)}))}}]),e}();t.SafeAppProvider=o},1745:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLowerCase=void 0,t.getLowerCase=function(e){return e?e.toLowerCase():e}}}]);
//# sourceMappingURL=35.74f588c8.chunk.js.map