(this.webpackJsonptetris=this.webpackJsonptetris||[]).push([[0],{18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var r,o,c=t(0),i=t(10),a=t.n(i),u=(t(18),t(2)),l=function(){return Array.from(Array(20),(function(){return new Array(12).fill([0,"clear"])}))},s=function(n,e,t){for(var r=t.x,o=t.y,c=0;c<n.tetromino.length;c+=1)for(var i=0;i<n.tetromino[c].length;i+=1)if(0!==n.tetromino[c][i]&&(!e[c+n.pos.y+o]||!e[c+n.pos.y+o][i+n.pos.x+r]||"clear"!==e[c+n.pos.y+o][i+n.pos.x+r][1]))return!0},f=t(3),d=t(4),b=t.p+"static/media/bg.d63cfd51.png",p=d.a.div(r||(r=Object(f.a)(["\nwidth: 100vw;\nheight: 100vh;\nbackground: url(",") #000;\nbackground-size: cover;\noverflow: hidden;\n"])),b),x=d.a.div(o||(o=Object(f.a)(["\ndisplay: flex;\nalign-items: flex-start;\npadding: 40px;\nmargin: 0 auto;\nmax-width: 900px;\n\n\naside {\n    width: 100%;\n    max-width: 200px;\n    display: block;\n    padding: 0 20px;\n}"])));var j,O,h,g,v=t(8),m={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},y=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return m[e]},w=function(n,e){var t=Object(c.useState)(l()),r=Object(u.a)(t,2),o=r[0],i=r[1],a=Object(c.useState)(0),s=Object(u.a)(a,2),f=s[0],d=s[1];return Object(c.useEffect)((function(){d(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))}));return n.tetromino.forEach((function(e,t){e.forEach((function(e,o){0!==e&&(r[t+n.pos.y][o+n.pos.x]=[e,"".concat(n.collided?"merged":"clear")])}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(d((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};i((function(n){return t(n)}))}),[n,e]),[o,i,f]},S=d.a.div(j||(j=Object(f.a)(["\ndisplay: grid;\ngrid-template-rows: repeat(\n    ",",\n    calc(25vw / ",")\n);\ngrid-template-columns: repeat(",", 1fr);\ngrid-gap: 1px;\nborder: 2px solid #333;\nwidth: 100%;\nmax-width: 25vw;\nbackground: #111;\n"])),(function(n){return n.height}),(function(n){return n.width}),(function(n){return n.width})),k=d.a.div(O||(O=Object(f.a)(["\nwidth: auto;\nbackground : rgba(",", 0.8);\nborder: ",";\nborder-bottom-color: rgba(",", 0.1);\nborder-right-color: rgba(",", 1);\nborder-top-color: rgba(",", 1);\nborder-left-color: rgba(",", 0.3);\n"])),(function(n){return n.color}),(function(n){return 0===n.type?"0px solid":"4px solid"}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),I=t(1),J=function(n){var e=n.type;return Object(I.jsx)(k,{type:e,color:m[e].color})},L=function(n){var e=n.stage;return Object(I.jsx)(S,{width:e[0].length,height:e.length,children:e.map((function(n){return n.map((function(n,e){return Object(I.jsx)(J,{type:n[0]},e)}))}))})},C=d.a.div(h||(h=Object(f.a)(["\nboxing-size: border-box;\ndisplay: flex;\nalign-items: center;\nmargin: 0 0 20px 0;\npadding: 20px;\nborder: 4px solid #333;\nmin-height: 30px;\nwidth: 100%;\nborder-radius: 20px;\ncolor: ",";\nbackground: #000;\nfont-family: Pixel, Arial, Helvetica, sans-serif;\nfont-size: 0.8rem;\n"])),(function(n){return n.gameOver?"red":"#999"})),T=function(n){var e=n.gameOver,t=n.text;return Object(I.jsx)(C,{gameOver:e,children:t})},A=d.a.div(g||(g=Object(f.a)(["\n\nbox-sizing: border-box;\nmargin: 0 0 20px 0;\npadding: 20px;\nmin-height: 30px;\nwidth: 100%;\nborder-radius: 20px;\nborder: none;\ncolor: white;\nbackground: #333;\nfont-family: Pixel, Arial, Helvetica, sams-serif;\nfront-size: 1rem;\noutline: none;\ncoursor: pointer;\n"]))),E=function(n){var e=n.callback;return Object(I.jsx)(A,{onClick:e,children:" Start Game "})},Z=function(){var n=Object(c.useState)(null),e=Object(u.a)(n,2),t=e[0],r=e[1],o=Object(c.useState)(!1),i=Object(u.a)(o,2),a=i[0],f=i[1],d=function(){var n=Object(c.useState)({pos:{x:0,y:0},tetromino:m[0].shape,collided:!1}),e=Object(u.a)(n,2),t=e[0],r=e[1],o=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},i=Object(c.useCallback)((function(){r({pos:{x:4,y:0},tetromino:y().shape,collided:!1})}),[]);return[t,function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(v.a)(Object(v.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},i,function(n,e){var c=JSON.parse(JSON.stringify(t));c.tetromino=o(c.tetromino,e);for(var i=c.pos.x,a=1;s(c,n,{x:0,y:0});)if(c.pos.x+=a,(a=-(a+(a>0?1:-1)))>c.tetromino[0].length)return o(c.tetromino,-e),void(c.pos.x=i);r(c)}]}(),b=Object(u.a)(d,4),j=b[0],O=b[1],h=b[2],g=b[3],S=w(j,h),k=Object(u.a)(S,3),J=k[0],C=k[1],A=function(n){var e=Object(c.useState)(0),t=Object(u.a)(e,2),r=t[0],o=t[1],i=Object(c.useState)(0),a=Object(u.a)(i,2),l=a[0],s=a[1],f=Object(c.useState)(0),d=Object(u.a)(f,2),b=d[0],p=d[1],x=[40,100,300,1200],j=Object(c.useCallback)((function(){n>0&&(o((function(e){return e+x[n-1]*(b+1)})),s((function(e){return e+n})))}),[b,x,n]);return Object(c.useEffect)((function(){j()}),[j,n,r]),[r,o,l,s,b,p]}(k[2]),Z=Object(u.a)(A,6),z=Z[0],F=Z[1],P=Z[2],G=Z[3],N=Z[4],B=Z[5];console.log("re-render");var D=function(n){s(j,J,{x:n,y:0})||O({x:n,y:0})},H=function(){P>10*(N+1)&&(B((function(n){return n+1})),r(1e3/(N+1)+200)),s(j,J,{x:0,y:1})?(j.pos.y<1&&(console.log("Game Over!!!"),f(!0),r(null)),O({x:0,y:0,collided:!0})):O({x:0,y:1,collided:!1})};!function(n,e){var t=Object(c.useRef)();Object(c.useEffect)((function(){t.current=n}),[n]),Object(c.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){clearInterval(n)}}}),[e])}((function(){H()}),t);var K=function(n){var e=n.keyCode;a||(37===e?D(-1):39===e?D(1):40===e?(r(null),H()):38===e&&g(J,1))};return Object(I.jsx)(p,{role:"button",tabIndex:"0",onKeyDown:function(n){return K(n)},onKeyUp:function(n){var e=n.keyCode;a||40===e&&(console.log("interval off"),r(1e3/(N+1)+200))},children:Object(I.jsxs)(x,{children:[Object(I.jsx)(L,{stage:J}),Object(I.jsxs)("aside",{children:[a?Object(I.jsx)(T,{gameOver:a,text:"Game Over"}):Object(I.jsxs)("div",{children:[Object(I.jsx)(T,{text:"Score: ".concat(z)}),Object(I.jsx)(T,{text:"Rows: ".concat(P)}),Object(I.jsx)(T,{text:"Level: ".concat(N)})]}),Object(I.jsx)(E,{callback:function(){C(l()),r(1e3),h(),f(!1),F(0),G(0),B(0),f(!1)}})]})]})})},z=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsx)(Z,{})})},F=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),c(n),i(n)}))};a.a.render(Object(I.jsx)(z,{}),document.getElementById("root")),F()}},[[22,1,2]]]);
//# sourceMappingURL=main.c7bb9d82.chunk.js.map