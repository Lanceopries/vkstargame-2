(window["webpackJsonpvk-star-game"]=window["webpackJsonpvk-star-game"]||[]).push([[0],{185:function(e,t,a){e.exports=a(286)},276:function(e,t,a){},277:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);a(186),a(212),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254);var n=a(0),r=a.n(n),c=a(72),l=a.n(c),i=a(40),o=a.n(i),s=a(77),u=a.n(s),m=a(58),d=a(113),E=a.n(d),f=a(112),b=a.n(f),v=(a(263),a(41)),h=a.n(v),p=a(39),k=a.n(p),g=a(80),j=a.n(g),O=a(57),S=a.n(O),y=a(78),q=a.n(y),w=a(79),N=a.n(w),C=a(111),x=a.n(C),_=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(h.a,{id:t},r.a.createElement(k.a,null,"Star Wars Galaxy"),n&&r.a.createElement(S.a,{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},r.a.createElement(q.a,{before:n.photo_200?r.a.createElement(x.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(S.a,{title:"\u0414\u0438\u0430\u043b\u043e\u0433"},r.a.createElement(q.a,null,"\u0417\u0430\u0447\u0435\u043c \u0442\u044b \u043f\u0440\u0438\u0431\u044b\u043b, \u043f\u0443\u0442\u043d\u0438\u043a?")),r.a.createElement(S.a,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},r.a.createElement(N.a,null,r.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"sokol"},"\u0425\u043e\u0447\u0443 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0421\u043e\u043a\u043e\u043b \u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u0438\u044f")),r.a.createElement(N.a,null,r.a.createElement(j.a,{size:"xl",level:"2",onClick:a,"data-to":"tiktoe"},"\u0425\u043e\u0447\u0443 \u043f\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u0417\u0432\u0435\u0437\u0434\u043d\u044b\u0435 \u041d\u043e\u043b\u0438\u043a\u0438"))))},A=a(34),I=a(56),U=a.n(I),W=a(53),z=a.n(W),K=a(54),V=a.n(K),G=a(55),J=a.n(G),P=(a(276),Object(A.d)()),B=function(e){return r.a.createElement(h.a,{id:e.id},r.a.createElement(k.a,{left:r.a.createElement(U.a,{onClick:e.go,"data-to":"home"},P===A.c?r.a.createElement(z.a,null):r.a.createElement(V.a,null))},"\u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u043d\u0438\u0439 \u0441\u043e\u043a\u043e\u043b"),r.a.createElement("img",{className:"Sokol",src:J.a,alt:"\u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u043d\u0438\u0439 \u0441\u043e\u043a\u043e\u043b"}))},T=a(81),X=a(82),D=a(84),F=a(83),H=a(85),L=function(e){function t(e){var a;return Object(T.a)(this,t),(a=Object(D.a)(this,Object(F.a)(t).call(this,e))).state={value:null},a}return Object(H.a)(t,e),Object(X.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"square",onClick:function(){return e.setState({value:{sokol:J.a}})}},r.a.createElement("img",{className:"Sokol",src:this.state.value,alt:"\u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u043d\u0438\u0439 \u0441\u043e\u043a\u043e\u043b"}))}}]),t}(r.a.Component),M=function(e){function t(){return Object(T.a)(this,t),Object(D.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(H.a)(t,e),Object(X.a)(t,[{key:"renderSquare",value:function(e){return r.a.createElement(L,{value:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"status"},"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0438\u0433\u0440\u043e\u043a: X"),r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component),Q=(a(277),Object(A.d)()),R=function(e){return r.a.createElement(h.a,{id:e.id},r.a.createElement(k.a,{left:r.a.createElement(U.a,{onClick:e.go,"data-to":"home"},Q===A.c?r.a.createElement(z.a,null):r.a.createElement(V.a,null))}),r.a.createElement(A.b,{title:"\u0417\u0432\u0435\u0437\u0434\u043d\u044b\u0435 \u041d\u043e\u043b\u0438\u043a\u0438"},r.a.createElement(A.a,null,r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(M,null)),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null),r.a.createElement("ol",null))))))},Y=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),s=i[0],d=i[1],f=Object(n.useState)(r.a.createElement(b.a,{size:"large"})),v=Object(m.a)(f,2),h=v[0],p=v[1];Object(n.useEffect)((function(){o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(o.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,d(e),p(null);case 5:case"end":return t.stop()}}))}()}),[]);var k=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(E.a,{activePanel:a,popout:h},r.a.createElement(_,{id:"home",fetchedUser:s,go:k}),r.a.createElement(B,{id:"sokol",go:k}),r.a.createElement(R,{id:"tiktoe",go:k}))};o.a.send("VKWebAppInit"),l.a.render(r.a.createElement(Y,null),document.getElementById("root"))},55:function(e,t,a){e.exports=a.p+"static/media/sokol.f2f8376e.png"}},[[185,1,2]]]);
//# sourceMappingURL=main.60ccf522.chunk.js.map