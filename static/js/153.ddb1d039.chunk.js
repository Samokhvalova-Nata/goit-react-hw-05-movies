"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{197:function(n,t,r){r.d(t,{SU:function(){return u},Y5:function(){return p},h6:function(){return l},r7:function(){return d},uV:function(){return f}});var e=r(5861),a=r(4687),o=r.n(a),c=r(1243),i="https://api.themoviedb.org/3/",s="4bf7f5d1496efdab827169a7539a0778",u=function(){var n=(0,e.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:t,api_key:s}),n.next=3,c.Z.get("".concat(i,"search/movie?").concat(r));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4153:function(n,t,r){r.r(t),r.d(t,{default:function(){return C}});var e,a,o,c,i,s,u=r(5861),l=r(9439),p=r(4687),f=r.n(p),d=r(2791),x=r(7689),h=r(1686),v=r(197),m=r(1362),g=r(168),b=r(5706),k=r(1087),w=b.Z.div(e||(e=(0,g.Z)(["\n    display: flex;\n    gap: 20px;\n    // justify-content: space-between;\n    // align-items: center;\n    padding-bottom: 26px;\n    border-bottom: 1px solid black;\n"]))),j=b.Z.img(a||(a=(0,g.Z)(["\n    display: block;\n    border-radius: 5px;\n"]))),Z=b.Z.div(o||(o=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n\n    > h1 {\n        font-size: 30px;\n    }\n\n    > p {\n        max-width: 800px;\n        font-size: 16px;\n        color: var(--primary-text-color);\n    }\n\n    > h3 {\n        font-size: 20px;\n    }\n"]))),y=b.Z.div(c||(c=(0,g.Z)(["\nmargin-top: 15px;\ntext-align: center;\n\n> h3 {\n    margin-bottom: 15px;\n}\n> ul {\n    margin-top: 10px;\n    display: flex;\n    gap: 15px;\n    \n    justify-content: center;\n    align-items: center;\n}\n"]))),S=(0,b.Z)(k.rU)(i||(i=(0,g.Z)(["\ntext-decoration: none;\n    display: block;\n    margin-bottom: 15px;\n    outline: 1px solid var(--accent-color);\n    // background-color: var(--accent-color);\n    border-radius: 5px;\n    width: 60px;\n    padding: 4px;\n    text-align: center;\n    font-weight: 500;\n    font-size: 14px;\n    color: black;\n\n    transition: transform var(--transition), background-color var(--transition);\n    \n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n        background-color: var(--accent-color);\n        // color: #ffffff;\n    }\n"]))),_=r(184),U=function(n){var t=n.info,r=t.title,e=t.poster_path,a=t.vote_average,o=t.overview,c=t.genres,i=e?"https://image.tmdb.org/t/p/w342/".concat(e):"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",s=Math.round(10*a);return(0,_.jsxs)("main",{children:[(0,_.jsxs)(w,{children:[(0,_.jsx)(j,{src:i,alt:r,width:342}),(0,_.jsxs)(Z,{children:[(0,_.jsx)("h1",{children:r}),(0,_.jsxs)("p",{children:["User Score: ",s,"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:o}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:function(n){if(n)return n.map((function(n){return n.name})).join(", ")}(c)})]})]}),(0,_.jsxs)(y,{children:[(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(S,{to:"cast",children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(S,{to:"reviews",children:"Reviews"})})]}),(0,_.jsx)(d.Suspense,{fallback:(0,_.jsx)(m.Z,{}),children:(0,_.jsx)(x.j3,{})})]})]})},z=(0,b.Z)(k.rU)(s||(s=(0,g.Z)(["\n    text-decoration: none;\n    display: block;\n    margin-bottom: 20px;\n    outline: 1px solid var(--accent-color);\n    // background-color: var(--accent-color);\n    border-radius: 5px;\n    width: 60px;\n    padding: 4px;\n    text-align: center;\n    font-weight: 500;\n    font-size: 14px;\n    color: black;\n\n    transition: transform var(--transition), background-color var(--transition);\n    \n    &:hover,\n    &:focus {\n        transform: scale(1.05);\n        // color: #ffffff;\n        background-color: var(--accent-color);\n    }\n    "]))),C=function(){var n,t,r=(0,d.useState)([]),e=(0,l.Z)(r,2),a=e[0],o=e[1],c=(0,d.useState)(null),i=(0,l.Z)(c,2),s=i[0],p=i[1],g=(0,d.useState)(!1),b=(0,l.Z)(g,2),k=b[0],w=b[1],j=(0,x.UO)().movieId,Z=(0,x.TH)(),y=(0,d.useRef)(null!==(n=null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");return(0,d.useEffect)((function(){function n(){return(n=(0,u.Z)(f().mark((function n(){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return w(!0),n.prev=1,n.next=4,(0,v.Y5)(j);case 4:if(0!==(t=n.sent).length){n.next=9;break}return r=new Error("Sorry, there is no info about movie you are searching for."),p(r),n.abrupt("return");case 9:o(t),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),p(n.t0);case 16:return n.prev=16,w(!1),n.finish(16);case 19:case 20:case"end":return n.stop()}}),n,null,[[1,13,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[j]),(0,_.jsxs)(_.Fragment,{children:[s&&h.Notify.failure("".concat(s.message)),(0,_.jsx)(z,{to:y.current,children:"Back"}),k&&(0,_.jsx)(m.Z,{}),(0,_.jsx)(U,{info:a})]})}}}]);
//# sourceMappingURL=153.ddb1d039.chunk.js.map