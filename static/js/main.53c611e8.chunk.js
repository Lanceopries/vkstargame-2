(window["webpackJsonpvk-star-game"]=window["webpackJsonpvk-star-game"]||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/sokol.f2f8376e.png"},189:function(e,t,a){e.exports=a(295)},268:function(e,t,a){},286:function(e,t,a){},295:function(e,t,a){"use strict";a.r(t);a(190),a(216),a(218),a(219),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(255),a(256),a(257),a(258);var n=a(0),r=a.n(n),c=a(68),l=a.n(c),i=a(38),s=a.n(i),o=a(69),u=a.n(o),m=a(51),d=a(110),E=a.n(d),b=a(109),f=a.n(b),v=(a(267),a(49)),h=a.n(v),p=a(42),j=a.n(p),O=a(75),g=a.n(O),k=a(50),S=a.n(k),y=a(73),q=a.n(y),w=a(74),N=a.n(w),x=a(104),C=a.n(x),_=a(70),A=a(71),I=a(77),U=a(72),W=a(78),z=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(I.a)(this,Object(U.a)(t).call(this,e))).state={value:null},a}return Object(W.a)(t,e),Object(A.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"square",onClick:function(){return e.setState({value:"X"})}},this.state.value)}}]),t}(r.a.Component),K=function(e){function t(){return Object(_.a)(this,t),Object(I.a)(this,Object(U.a)(t).apply(this,arguments))}return Object(W.a)(t,e),Object(A.a)(t,[{key:"renderSquare",value:function(e){return r.a.createElement(z,{value:e})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"status"},"Next player: X"),r.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),r.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),r.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.a.Component),V=(a(268),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(h.a,{id:t},r.a.createElement("div",{className:"game"},r.a.createElement("div",{className:"game-board"},r.a.createElement(K,null)),r.a.createElement("div",{className:"game-info"},r.a.createElement("div",null),r.a.createElement("ol",null))),r.a.createElement(j.a,null,"Star Wars Galaxy"),n&&r.a.createElement(S.a,{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},r.a.createElement(q.a,{before:n.photo_200?r.a.createElement(C.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(S.a,{title:"\u0414\u0438\u0430\u043b\u043e\u0433"},r.a.createElement(q.a,null,"\u0417\u0430\u0447\u0435\u043c \u0442\u044b \u043f\u0440\u0438\u0431\u044b\u043b, \u043f\u0443\u0442\u043d\u0438\u043a?")),r.a.createElement(S.a,{title:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},r.a.createElement(N.a,null,r.a.createElement(g.a,{size:"xl",level:"2",onClick:a,"data-to":"sokol"},"\u0425\u043e\u0447\u0443 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u0421\u043e\u043a\u043e\u043b \u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u0438\u044f")),r.a.createElement(N.a,null,r.a.createElement(g.a,{size:"xl",level:"2",onClick:a,"data-to":"sokol"},"\u0425\u043e\u0447\u0443 \u043f\u043e\u0438\u0433\u0440\u0430\u0442\u044c \u0432 \u0417\u0432\u0435\u0437\u0434\u043d\u044b\u0435 \u041d\u043e\u043b\u0438\u043a\u0438"))))}),G=a(76),J=a(108),P=a.n(J),X=a(105),B=a.n(X),T=a(106),D=a.n(T),F=a(107),H=a.n(F),L=(a(286),Object(G.b)()),M=function(e){return r.a.createElement(h.a,{id:e.id},r.a.createElement(j.a,{left:r.a.createElement(P.a,{onClick:e.go,"data-to":"home"},L===G.a?r.a.createElement(B.a,null):r.a.createElement(D.a,null))},"\u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u043d\u0438\u0439 \u0441\u043e\u043a\u043e\u043b"),r.a.createElement("img",{className:"Sokol",src:H.a,alt:"\u0422\u044b\u0441\u044f\u0447\u0435\u043b\u0435\u0442\u043d\u0438\u0439 \u0441\u043e\u043a\u043e\u043b"}))},Q=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),i=Object(m.a)(l,2),o=i[0],d=i[1],b=Object(n.useState)(r.a.createElement(f.a,{size:"large"})),v=Object(m.a)(b,2),h=v[0],p=v[1];Object(n.useEffect)((function(){s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(s.a.sendPromise("VKWebAppGetUserInfo"));case 2:e=t.sent,d(e),p(null);case 5:case"end":return t.stop()}}))}()}),[]);var j=function(e){c(e.currentTarget.dataset.to)};return r.a.createElement(E.a,{activePanel:a,popout:h},r.a.createElement(V,{id:"home",fetchedUser:o,go:j}),r.a.createElement(M,{id:"sokol",go:j}))};s.a.send("VKWebAppInit"),l.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.53c611e8.chunk.js.map