(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{174:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(54),i=a.n(r),s=(a(80),a(81),a(203)),o=a(2);function l(){return Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)(s.a,{href:"/",children:"Game"}),Object(o.jsx)(s.a,{href:"/About",children:"About"}),Object(o.jsx)(s.a,{href:"https://rs.school/js/",children:"RS-School"}),Object(o.jsx)(s.a,{href:"https://github.com/General-m",children:"Github"})]})}var j,b,d=a(35),u=a(36),O=a(41),f=a(40),h=function(e){Object(O.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h1",{children:" About Tic-tac-toe game"}),Object(o.jsxs)("div",{className:"description",children:["To start a new game click New Game ",Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Hot keys:"}),Object(o.jsx)("kbd",{children:"N"})," start New Game ",Object(o.jsx)("br",{}),Object(o.jsx)("kbd",{children:"S"})," open Statistic ",Object(o.jsx)("br",{}),Object(o.jsx)("kbd",{children:"W"})," on/off sound ",Object(o.jsx)("br",{}),Object(o.jsx)("kbd",{children:"Q"})," on/off music (default off) ",Object(o.jsx)("br",{}),Object(o.jsx)("kbd",{children:"A"})," change next step player (cheat mode \ud83d\ude08) ",Object(o.jsx)("br",{})]})]})}}]),a}(c.Component),m=a(70),g=a(8),p=a(44),S=a(45),x=a(63);function v(e){S.a.div(j||(j=Object(p.a)(["animation: 2s "," infinite"])),Object(S.b)(b||(b=Object(p.a)(["",""])),x.bounce));return Object(o.jsxs)("div",{className:"cell",style:e.style,onClick:e.onClick,onChange:e.onChange,children:[e.value," "]})}function N(e){var t=e.cells,a=e.onClick,c=e.onChange;return Object(o.jsx)("div",{className:"game__field",children:t.map((function(e,t){return Object(o.jsx)(v,{value:e,onClick:function(){return a(t)},onChange:function(){return c(t)}},t)}))})}var y=a(199),k=a(202),C=a(176),G=a(30),w=a.p+"static/media/436667__herraportti__snap3.b0d8ddc5.wav";function _(){return{}}var E=Object(y.a)((function(e){return{paper:{margin:"auto",marginTop:"80px",width:300,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function J(){var e=E(),t=n.a.useState(_),a=Object(g.a)(t,1)[0],r=n.a.useState(!1),i=Object(g.a)(r,2),s=i[0],l=i[1],j=Object(G.a)(w),b=(Object(g.a)(j,1)[0],localStorage.gameGeneralStatic?JSON.parse(localStorage.gameGeneralStatic).X:0),d=localStorage.gameGeneralStatic?JSON.parse(localStorage.gameGeneralStatic).O:0,u=localStorage.gameGeneralStatic?JSON.parse(localStorage.gameGeneralStatic).draw:0;console.log(JSON.parse(localStorage.gameGeneralStatic)),Object(c.useEffect)((function(){var e=function(e){switch(e.code){case"KeyS":O()}};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[]);var O=function(){l(!0)},f=Object(o.jsxs)("div",{style:a,className:e.paper,children:[Object(o.jsx)("h2",{id:"simple-modal-title",children:"Statistics"}),Object(o.jsxs)("div",{id:"simple-modal-description",children:["Win X: ",b," ",Object(o.jsx)("br",{}),"Win O:  ",d," ",Object(o.jsx)("br",{}),"Draw:  ",u]})]});return Object(o.jsxs)("div",{children:[Object(o.jsx)(C.a,{variant:"contained",color:"primary",onClick:O,children:"Statistic"}),Object(o.jsx)(k.a,{open:s,onClose:function(){l(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:f})]})}var A=a(200),L=a.p+"static/media/newgame.16f4c4c9.wav",D=[["\u2573","\u25ef"],["\ud83d\udd25","\u2744"]],I=function(e){Object(O.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={icons:1,colorField:"blue",sound:!0},e.handleChange=function(t){e.setState({icons:t.target.value})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){localStorage.setItem("gameGeneralSettings",JSON.stringify(this.state))}},{key:"componentDidMount",value:function(){localStorage.gameGeneralSettings&&this.setState({icons:JSON.parse(localStorage.gameGeneralSettings).icons})}},{key:"render",value:function(){var e=this.props.updateData;this.state.icons;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"view__settings",children:[Object(o.jsxs)("div",{className:"form_radio",children:[Object(o.jsx)("input",{id:"radio-1",type:"radio",name:"radio",value:"0",onClick:this.handleChange,onChange:e(this.state.icons),defaultChecked:0===this.state.icons}),Object(o.jsx)("label",{className:"icons",children:"\u2573\u25ef"})]}),Object(o.jsxs)("div",{className:"form_radio",children:[Object(o.jsx)("input",{id:"radio-2",type:"radio",name:"radio",value:"1",onClick:this.handleChange,onChange:e(this.state.icons),defaultChecked:1===this.state.icons}),Object(o.jsx)("label",{className:"icons",children:" \ud83d\udd25\u2744"})]})]})})}}]),a}(c.Component),F=a(201),K=a(67),T=a.n(K),W=a(68),X=a.n(W),z=a.p+"static/media/music.09b11df2.mp3";function M(){var e=Object(c.useState)(!0),t=Object(g.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(Array(9).fill(null)),i=Object(g.a)(r,2),s=i[0],l=i[1],j=Object(c.useState)(0),b=Object(g.a)(j,2),d=b[0],u=b[1],O=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var c=Object(g.a)(t[a],3),n=c[0],r=c[1],i=c[2];if(e[n]&&e[n]===e[r]&&e[n]===e[i])return e[n]}return null}(s),f=Object(G.a)(w),h=Object(g.a)(f,2),p=h[0],S=h[1].stop,x=Object(G.a)(L),v=Object(g.a)(x,1)[0],y=Object(c.useState)(!0),k=Object(g.a)(y,2),_=k[0],E=k[1],K=Object(c.useState)("#64b5f6"),W=Object(g.a)(K,2),M=W[0],H=W[1],B=Object(c.useState)(0),P=Object(g.a)(B,2),Q=P[0],R=P[1],U=Object(c.useState)("#115293"),q=Object(g.a)(U,2),V=q[0],Y=q[1],Z=Object(c.useState)(0),$=Object(g.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)(0),ce=Object(g.a)(ae,2),ne=ce[0],re=ce[1],ie=Object(c.useState)(0),se=Object(g.a)(ie,2),oe=se[0],le=se[1],je={field:s,count:d,step:a,isSound:_,colorMain:V,colorHeader:M},be={X:ee,O:ne,draw:oe},de=function(e){var t=Object(c.useState)(new Audio(e)),a=Object(g.a)(t,1)[0],n=Object(c.useState)(!1),r=Object(g.a)(n,2),i=r[0],s=r[1];return Object(c.useEffect)((function(){i?a.play():a.pause()}),[i]),Object(c.useEffect)((function(){return a.addEventListener("ended",(function(){return s(!1)})),function(){a.removeEventListener("ended",(function(){return s(!1)}))}}),[]),[i,function(){return s(!i)}]}(z),ue=Object(g.a)(de,2),Oe=ue[0],fe=ue[1];Object(c.useEffect)((function(){O&&(a?re(ne+1):te(ee+1))}),[d]),Object(c.useEffect)((function(){O||9!=d||le(oe+1)}),[s]),Object(c.useEffect)((function(){localStorage.gameGeneral&&(l(JSON.parse(localStorage.gameGeneral).field),u(JSON.parse(localStorage.gameGeneral).count),n(JSON.parse(localStorage.gameGeneral).step),E(JSON.parse(localStorage.gameGeneral).isSound),Y(JSON.parse(localStorage.gameGeneral).colorMain),H(JSON.parse(localStorage.gameGeneral).colorHeader))}),[Q]),Object(c.useEffect)((function(){localStorage.gameGeneralStatic&&(te(JSON.parse(localStorage.gameGeneralStatic).X),re(JSON.parse(localStorage.gameGeneralStatic).O),le(JSON.parse(localStorage.gameGeneralStatic).draw))}),[]),Object(c.useEffect)((function(){var e=function(e){switch(e.code){case"KeyN":l(Array(9).fill(null)),u(0),v();break;case"KeyW":_?(E(!1),S()):(E(!0),p());break;case"KeyA":n(!a);break;case"KeyQ":console.log(Oe),console.log(fe),Oe&&fe(),fe()}};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[_,Oe]),Object(c.useEffect)((function(){localStorage.setItem("gameGeneral",JSON.stringify(je))})),Object(c.useEffect)((function(){localStorage.setItem("gameGeneralStatic",JSON.stringify(be))}));return Object(o.jsxs)("div",{className:"container",style:{backgroundColor:V},children:[Object(o.jsxs)("div",{className:"header",style:{backgroundColor:M},children:[Object(o.jsx)(C.a,{variant:"contained",color:"primary",onClick:function(){l(Array(9).fill(null)),u(0),_&&p()},children:"New Game"}),Object(o.jsxs)(A.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(o.jsx)(C.a,{className:"color__btn",onClick:function(){H("#64b5f6")},size:"small",children:"Change"}),Object(o.jsx)(C.a,{className:"color__btn",onClick:function(){H("#e57373")},size:"small",children:"Color"})]}),Object(o.jsx)(F.a,{color:"primary","aria-label":"delete",onClick:fe,title:"on/off sound",children:Object(o.jsx)(T.a,{})}),Object(o.jsx)(F.a,{color:"primary","aria-label":"delete",onClick:function(){_?(E(!1),S()):(E(!0),p())},title:"on/off sound",children:Object(o.jsx)(X.a,{})}),Object(o.jsx)(J,{})]}),Object(o.jsxs)(A.a,{disableElevation:!0,variant:"contained",color:"primary",children:[Object(o.jsx)(C.a,{className:"color__btn",onClick:function(){Y("#115293")},size:"small",children:"Change"}),Object(o.jsx)(C.a,{className:"color__btn",onClick:function(){Y("#e57373")},size:"small",children:"Color"})]}),Object(o.jsx)(I,{updateData:function(e){R(e)}}),function(){var e="";return O?(console.log(O,a),e="Congratulations! Wins "+O):e=9==d?"It's draw, try again!":"Next move "+(a?"X":"O"),Object(o.jsx)("div",{className:"game__status",children:e})}(),Object(o.jsx)(N,{cells:s,onClick:function(e){var t=Object(m.a)(s);O||t[e]||(t[e]=a?D[Q][0]:D[Q][1],n(!a),u(d+1),l(t),_&&p())}})]})}var H=a(69),B=a(9);var P=function(){return Object(o.jsx)(H.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(B.c,{children:[Object(o.jsx)(B.a,{path:"/react/tic-tac-toe/build/About",children:Object(o.jsx)(h,{})}),Object(o.jsx)(B.a,{path:"/react/tic-tac-toe/build/",children:Object(o.jsx)(M,{})})]})}),Object(o.jsx)(l,{})]})})},Q=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,205)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(P,{})}),document.getElementById("root")),Q()},80:function(e,t,a){},81:function(e,t,a){}},[[174,1,2]]]);
//# sourceMappingURL=main.62e5a104.chunk.js.map