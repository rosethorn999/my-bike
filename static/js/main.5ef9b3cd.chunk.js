(this["webpackJsonpmy-bike"]=this["webpackJsonpmy-bike"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(4),a=n.n(s),r=(n(9),n(2)),i=(n(10),n(0));function j(t){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("span",{children:Object(i.jsx)("b",{children:t.from.name_tw})}),Object(i.jsxs)("p",{className:"space-info",children:["\u53ef\u501f\xa0",t.from.available_spaces,"\xa0\u53f0"]})]}),Object(i.jsx)("div",{className:"item",children:Object(i.jsx)("div",{className:"triangle"})}),Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("span",{children:Object(i.jsx)("b",{children:t.to.name_tw})}),Object(i.jsxs)("p",{className:"space-info",children:["\u53ef\u505c\xa0",t.to.empty_spaces,"\xa0\u53f0"]})]})]})}j.defaultProps={from:{},to:{}};var f=j;n(12);var l=function(t){var e=Object(c.useState)(t.target),n=Object(r.a)(e,2),o=n[0],s=n[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("label",{className:"switch",children:[Object(i.jsx)("input",{type:"checkbox",id:"togBtn",onClick:function(e){return function(e){var n=e.target.checked?"work":"home";document.title=n,t.onSwitchDestination(n),s(n)}(e)},defaultChecked:"work"===o}),Object(i.jsxs)("div",{className:"slider round",children:[Object(i.jsx)("span",{className:"on",children:"\ud83c\udf1e\u4e0a\u73ed"}),Object(i.jsx)("span",{className:"off",children:"\u4e0b\u73ed\ud83c\udf19"})]})]})})},u=(n(13),[{from:"0032",to:"0126"},{from:"0037",to:"0126"},{from:"500101117",to:"500101123"},{from:"500101117",to:"500101092"},{from:"500101117",to:"500101091"}]),b=[{from:"0126",to:"0037"},{from:"500101123",to:"500101117"},{from:"500101092",to:"500101117"},{from:"500101091",to:"500101117"},{from:"500101123",to:"500101002"},{from:"500101092",to:"500101002"},{from:"500101091",to:"500101002"},{from:"500101019",to:"500101002"},{from:"500101123",to:"500101001"},{from:"500101092",to:"500101001"},{from:"500101091",to:"500101001"},{from:"500101019",to:"500101001"}];var m=function(){var t=Object(c.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)((function(){return(new Date).getHours()>=12?"home":"work"})),a=Object(r.a)(s,2),j=a[0],m=a[1],d=Object(c.useState)([]),h=Object(r.a)(d,2),O=h[0],p=h[1];return Object(c.useEffect)((function(){Promise.all([fetch("https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json").then((function(t){return t.json()})),fetch("https://apis.youbike.com.tw/api/front/station/all?lang=tw&type=2").then((function(t){return t.json()}))]).then((function(t){var e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object.values(n.retVal).map((function(t){return{station_no:t.sno,name_tw:t.sna,empty_spaces:Number(t.bemp),available_spaces:Number(t.sbi)}})).concat(c.retVal);o(s)}))}),[]),Object(c.useEffect)((function(){p("work"===j?u:b)}),[j]),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{onSwitchDestination:function(t){m(t)},target:j}),Object(i.jsx)("ul",{children:O.map((function(t,e){var c=n.find((function(e){return e.station_no===t.from&&e.available_spaces>=3})),o=n.find((function(e){return e.station_no===t.to&&e.empty_spaces>=3}));return c&&o?Object(i.jsx)("li",{children:Object(i.jsx)(f,{from:c,to:o})},e):null}))})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),d()}],[[14,1,2]]]);
//# sourceMappingURL=main.5ef9b3cd.chunk.js.map