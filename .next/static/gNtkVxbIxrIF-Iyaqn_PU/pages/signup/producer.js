(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{qSCk:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup/producer",function(){return n("t6kq")}])},t6kq:function(e,a,n){"use strict";n.r(a);var t=n("hfKm"),r=n.n(t),o=n("2Eek"),c=n.n(o),s=n("XoMD"),l=n.n(s),u=n("Jo+v"),i=n.n(u),d=n("4mXO"),p=n.n(d),m=n("pLtp"),f=n.n(m),b=n("9Jkg"),v=n.n(b),h=n("eVuF"),g=n.n(h),w=n("ln6h"),N=n.n(w),y=n("vYYK"),S=n("q1tI"),k=n.n(S),C=n("ziZL"),E=n("B1eL"),j=n("fpb8"),x=n("t8m8"),O=n("sLzi"),T=k.a.createElement;function q(e,a){var n=f()(e);if(p.a){var t=p()(e);a&&(t=t.filter((function(a){return i()(e,a).enumerable}))),n.push.apply(n,t)}return n}function z(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?q(Object(n),!0).forEach((function(a){Object(y.a)(e,a,n[a])})):l.a?c()(e,l()(n)):q(Object(n)).forEach((function(a){r()(e,a,i()(n,a))}))}return e}a.default=function(){var e=Object(S.useState)(0),a=e[0],n=e[1],t=Object(S.useState)(null),r=t[0],o=t[1],c=Object(S.useState)(null),s=c[0],l=c[1],u=Object(S.useState)(!1),i=u[0],d=u[1],p=function(e){var a,n;return N.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.awrap(fetch("https://api.organis8.com.br/api/produtores",{method:"POST",body:v()(e)}));case 3:return a=t.sent,t.next=6,N.a.awrap(a.json());case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),null,null,[[0,10]],g.a)};switch(a){case 0:return T(C.a,{profile:"producer",onSubmit:function(e){o(e),n(1)}});case 1:return T(E.a,{profile:"producer",values:r,onSubmit:function(e){l(e),n(2)}});case 2:return T(j.a,{profile:"producer",confirmationChoice:s,onSubmit:function(e){n(3)}});case 3:return T(x.a,{profile:"producer",loading:i,values:r,onSubmit:function(e){var a,t,o,c,s,l;return N.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return d(!0),a="".concat(e.address,", ").concat(e.number,", ").concat(e.city,", ").concat(e.state),u.next=4,N.a.awrap(fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(a,"&key=AIzaSyD9birqocIzncUHjXSWIrx67UAT865gp84")));case 4:return t=u.sent,u.next=7,N.a.awrap(t.json());case 7:return o=u.sent,c=o.results[0].geometry.location,s=c.lat,l=c.lng,u.next=11,N.a.awrap(p(z({address:"".concat(e.address,", ").concat(e.number),city:e.city,state:e.state},r,{latitude:s,longitude:l})));case 11:n(4);case 12:case"end":return u.stop()}}),null,null,null,g.a)}});case 4:return T(O.a,null)}}},t8m8:function(e,a,n){"use strict";var t=n("pLtp"),r=n.n(t),o=n("eVuF"),c=n.n(o),s=n("ln6h"),l=n.n(s),u=n("LX0d"),i=n.n(u),d=n("q1tI"),p=n.n(d),m=(n("onHk"),n("KYPV")),f=n("TuSW"),b=n("89Ff"),v=p.a.createElement,h=new i.a([["user",{cardTitle:"Cadastrando meus dados"}],["producer",{cardTitle:"Cadastrando meus dados"}],["update-producer",{cardTitle:"Atualizando os meus dados"}]]),g=function(e){return{}};a.a=function(e){e.values;var a=e.loading,n=e.onSubmit,t=e.profile,o=h.get(t).cardTitle;return v("div",{className:"card"},v("label",null,"Confirmar dados > Endere\xe7o comercial"),v("h1",{className:"card-title"},o),v(m.d,{initialValues:{address:"",cep:"",number:"",complement:"",city:"",state:""},validate:g,onSubmit:n},(function(e){var n=e.errors,t=(e.values,e.handleChange),o=e.setValues;return v(m.c,{className:"form-container"},v("h2",{className:"form-title"},"Para finalizar, basta atualizar os dados do seu enderec\u0327o comercial."),v("div",{className:"row"},v("div",{className:"form-group"},v("label",null,"CEP"),v(m.b,{name:"cep",mask:"99999-999",placeholder:"CEP",onChange:function(e){!function(e,a){var n,t,r;l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(n=e.target.value)||n.includes("_")){o.next=9;break}return o.next=4,l.a.awrap(fetch("https://viacep.com.br/ws/".concat(n.replace(/\D/g,""),"/json/")));case 4:return t=o.sent,o.next=7,l.a.awrap(t.json());case 7:r=o.sent,a({address:r.logradouro,city:r.localidade,state:r.uf});case 9:case"end":return o.stop()}}),null,null,null,c.a)}(e,o),t("cep")(e)},component:f.a}),v(m.a,{name:"cep",component:"span"}))),v("div",{className:"row"},v("div",{className:"form-group"},v("label",null,"Endere\xe7o"),v(m.b,{name:"address",mask:null,placeholder:"Endere\xe7o",component:f.a,disabled:!0}),v(m.a,{name:"address",component:"span"})),v("div",{className:"form-group"},v("label",null,"N\xfamero"),v(m.b,{name:"number",placeholder:"N\xfamero",component:f.a}),v(m.a,{name:"number",component:"span"}))),v("div",{className:"row"},v("div",{className:"form-group"},v("label",null,"Complemento"),v(m.b,{name:"complement",placeholder:"Complemento",component:f.a}),v(m.a,{name:"complement",component:"span"})),v("div",{className:"form-group"},v("label",null,"Cidade"),v(m.b,{name:"city",mask:null,placeholder:"Cidade",component:f.a,disabled:!0}),v(m.a,{name:"city",component:"span"}))),v("div",{className:"form-group"},v("label",null,"Estado"),v(m.b,{name:"state",mask:null,placeholder:"Estado",component:f.a,disabled:!0}),v(m.a,{name:"state",component:"span"})),v("div",{className:"button-container"},v(b.a,{color:"primary",type:"submit",tabIndex:1,loading:a,disabled:r()(n).length>0},"Avan\xe7ar")))})))}}},[["qSCk",1,2,0,4,5,3]]]);