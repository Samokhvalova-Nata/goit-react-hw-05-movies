"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{197:function(n,t,e){e.d(t,{SU:function(){return p},Y5:function(){return f},h6:function(){return s},r7:function(){return x},uV:function(){return d}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),o="https://api.themoviedb.org/3/",u="4bf7f5d1496efdab827169a7539a0778",p=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({include_adult:!1,language:"en-US",page:1,query:t,api_key:u}),n.next=3,i.Z.get("".concat(o,"search/movie?").concat(e));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var r,a,c,i,o,u,p=e(5861),s=e(9439),f=e(4687),d=e.n(f),x=e(197),l=e(1686),g=e(2791),h=e(7689),b=e(1362),v=e(168),m=e(5706),w=m.Z.ul(r||(r=(0,v.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    list-style: none;\n\n    > li {\n        flex-basis: calc((100% - 6 * (10px)) / 7);\n        border-radius: 5px;\n        background-color: #ffffff; \n        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.02), 1px 3px 4px rgba(0, 0, 0, 0.08);\n    }\n"]))),Z=(m.Z.ul(a||(a=(0,v.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 30px;\n    margin-bottom: 30px;\n"]))),m.Z.img(c||(c=(0,v.Z)(["\n    width: 100%;\n    // height: 100%;\n    height: 304px;\n    display: block;\n    object-fit: contain;\n    border-radius: 5px;\n\n    transition: var(--transition);\n    &:hover,\n    &:focus {\n        border-bottom-left-radius: 0px;\n        border-bottom-right-radius: 0px;\n    }\n"])))),y=m.Z.p(i||(i=(0,v.Z)(["\nfont-size: 16px;\nfont-weight: 500;\npadding-top: 12px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 12px;\n    text-align: center;\n"]))),k=m.Z.p(o||(o=(0,v.Z)(["\n// padding-top: 12px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 12px;\n    text-align: center;\n"]))),_=(m.Z.p(u||(u=(0,v.Z)(["\n    // height: 36px;\n    font-weight: 500;\n    font-size: 14px;\n    padding-top: 12px;\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-bottom: 12px;\n    color: var(--primary-text-color);\n    text-transform: uppercase;\n    line-height: 1.16;\n    text-align: center;\n"]))),e(184)),S=function(){var n=(0,g.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,g.useState)(null),c=(0,s.Z)(a,2),i=c[0],o=c[1],u=(0,g.useState)(!1),f=(0,s.Z)(u,2),v=f[0],m=f[1],S=(0,h.UO)().movieId;return(0,g.useEffect)((function(){function n(){return(n=(0,p.Z)(d().mark((function n(){var t,e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,(0,x.uV)(S);case 4:if(0!==(t=n.sent).length){n.next=9;break}return e=new Error("Sorry, there is no info about movie you are searching for."),o(e),n.abrupt("return");case 9:r(t),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),o(n.t0);case 16:return n.prev=16,m(!1),n.finish(16);case 19:case 20:case"end":return n.stop()}}),n,null,[[1,13,16,19]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[S]),(0,_.jsxs)(_.Fragment,{children:[i&&l.Notify.failure("".concat(i.message)),v&&(0,_.jsx)(b.Z,{}),(0,_.jsx)(w,{children:e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,_.jsxs)("li",{children:[(0,_.jsx)(Z,{src:e?"https://image.tmdb.org/t/p/w154/".concat(e):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg",alt:r,width:154}),(0,_.jsx)(y,{children:r}),(0,_.jsx)(k,{children:a})]},t)}))})]})}}}]);
//# sourceMappingURL=736.124dbfe4.chunk.js.map