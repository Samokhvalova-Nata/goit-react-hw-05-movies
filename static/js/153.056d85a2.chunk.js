"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{197:function(n,r,t){t.d(r,{SU:function(){return u},Y5:function(){return p},h6:function(){return l},r7:function(){return d},uV:function(){return f}});var e=t(5861),a=t(4687),o=t.n(a),c=t(1243),i="https://api.themoviedb.org/3/",s="4bf7f5d1496efdab827169a7539a0778",u=function(){var n=(0,e.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(r){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:r,api_key:s}),n.next=3,c.Z.get("".concat(i,"search/movie?").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(r,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(r,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},4153:function(n,r,t){t.r(r),t.d(r,{default:function(){return z}});var e,a,o,c,i,s,u=t(5861),l=t(9439),p=t(4687),f=t.n(p),d=t(2791),x=t(7689),h=t(197),v=t(1362),g=t(168),m=t(5706),b=t(1087),k=m.Z.div(e||(e=(0,g.Z)(["\n    display: flex;\n    gap: 20px;\n    // justify-content: space-between;\n    // align-items: center;\n    padding-bottom: 26px;\n    border-bottom: 1px solid black;\n"]))),w=m.Z.img(a||(a=(0,g.Z)(["\n    display: block;\n    border-radius: 5px;\n"]))),j=m.Z.div(o||(o=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    > h1 {\n        font-size: 30px;\n    }\n\n    > p {\n        max-width: 800px;\n        font-size: 16px;\n        color: var(--primary-text-color);\n    }\n\n    > h3 {\n        font-size: 20px;\n    }\n"]))),Z=m.Z.div(c||(c=(0,g.Z)(["\nmargin-top: 15px;\ntext-align: center;\n\n> h3 {\n    margin-bottom: 15px;\n}\n> ul {\n    margin-top: 10px;\n    display: flex;\n    gap: 15px;\n    \n    justify-content: center;\n    align-items: center;\n}\n"]))),y=(0,m.Z)(b.rU)(i||(i=(0,g.Z)(["\ntext-decoration: none;\n    display: block;\n    margin-bottom: 15px;\n    outline: 1px solid var(--accent-color);\n    // background-color: var(--accent-color);\n    border-radius: 5px;\n    width: 60px;\n    padding: 4px;\n    text-align: center;\n    font-weight: 500;\n    font-size: 14px;\n    color: black;\n\n    transition: transform var(--transition), background-color var(--transition);\n    \n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n        background-color: var(--accent-color);\n        // color: #ffffff;\n    }\n"]))),S=t(184),_=function(n){var r=n.info,t=r.title,e=r.poster_path,a=r.vote_average,o=r.overview,c=r.genres,i=e?"https://image.tmdb.org/t/p/w342/".concat(e):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",s=Math.round(10*a);return(0,S.jsxs)("main",{children:[(0,S.jsxs)(k,{children:[(0,S.jsx)(w,{src:i,alt:t,width:342}),(0,S.jsxs)(j,{children:[(0,S.jsx)("h1",{children:t}),(0,S.jsxs)("p",{children:["User Score: ",s,"%"]}),(0,S.jsx)("h3",{children:"Overview"}),(0,S.jsx)("p",{children:o}),(0,S.jsx)("h3",{children:"Genres"}),(0,S.jsx)("p",{children:function(n){if(n)return n.map((function(n){return n.name})).join(", ")}(c)})]})]}),(0,S.jsxs)(Z,{children:[(0,S.jsx)("h3",{children:"Additional information"}),(0,S.jsxs)("ul",{children:[(0,S.jsx)("li",{children:(0,S.jsx)(y,{to:"cast",children:"Cast"})}),(0,S.jsx)("li",{children:(0,S.jsx)(y,{to:"reviews",children:"Reviews"})})]}),(0,S.jsx)(d.Suspense,{fallback:(0,S.jsx)(v.Z,{}),children:(0,S.jsx)(x.j3,{})})]})]})},U=(0,m.Z)(b.rU)(s||(s=(0,g.Z)(["\n    text-decoration: none;\n    display: block;\n    margin-bottom: 20px;\n    outline: 1px solid var(--accent-color);\n    // background-color: var(--accent-color);\n    border-radius: 5px;\n    width: 60px;\n    padding: 4px;\n    text-align: center;\n    font-weight: 500;\n    font-size: 14px;\n    color: black;\n\n    transition: transform var(--transition), background-color var(--transition);\n    \n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n        // color: #ffffff;\n        background-color: var(--accent-color);\n    }\n    "]))),z=function(){var n,r,t=(0,d.useState)({}),e=(0,l.Z)(t,2),a=e[0],o=e[1],c=(0,d.useState)(null),i=(0,l.Z)(c,2),s=i[0],p=i[1],g=(0,d.useState)(!1),m=(0,l.Z)(g,2),b=m[0],k=m[1],w=(0,x.UO)().movieId,j=(0,x.TH)(),Z=(0,d.useRef)(null!==(n=null===(r=j.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/");return(0,d.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var r,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,n.next=4,(0,h.Y5)(w);case 4:if(0!==(r=n.sent).length){n.next=9;break}return t=new Error("Sorry, there is no info about movie you are searching for."),p(t),n.abrupt("return");case 9:o(r),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(1),console.log("error",n.t0),p(n.t0);case 17:return n.prev=17,k(!1),n.finish(17);case 20:case 21:case"end":return n.stop()}}),n,null,[[1,13,17,20]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[w]),(0,S.jsxs)(S.Fragment,{children:[s&&(0,S.jsx)(x.Fg,{to:"/404"}),(0,S.jsx)(U,{to:Z.current,children:"Back"}),b&&(0,S.jsx)(v.Z,{}),(0,S.jsx)(_,{info:a})]})}}}]);
//# sourceMappingURL=153.056d85a2.chunk.js.map