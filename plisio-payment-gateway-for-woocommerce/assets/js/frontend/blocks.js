(()=>{"use strict";const e=window.React,t=window.wp.i18n,n=window.wc.wcBlocksRegistry,i=window.wp.htmlEntities,l=(0,window.wc.wcSettings.getSetting)("plisio_data",{}),s=(0,t.__)("Plisio Payments"),c=(0,i.decodeEntities)(l.title)||s,o=l.icon;console.log(l);const a=()=>(0,i.decodeEntities)(l.description||""),w={name:"plisio",label:(0,e.createElement)((()=>(0,e.createElement)("span",{className:"wc-block-components-payment-method-label"},c,(0,e.createElement)("img",{src:o,alt:c}))),null),content:(0,e.createElement)(a,null),edit:(0,e.createElement)(a,null),canMakePayment:()=>!0,ariaLabel:c,supports:{features:l.supports}};(0,n.registerPaymentMethod)(w)})();