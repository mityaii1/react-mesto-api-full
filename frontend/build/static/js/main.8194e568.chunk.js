(this["webpackJsonpreact-mesto-api-full"]=this["webpackJsonpreact-mesto-api-full"]||[]).push([[0],{31:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),o=a.n(s),c=a(20),i=a.n(c),r=a(9),l=(a(31),a(24)),u=a(8),p=a(2),d=a(3),j=a.p+"static/media/header-logo.a307e1c4.svg";var h=function(e){return Object(n.jsxs)("header",{className:"header",children:[Object(n.jsx)("img",{className:"header__logo",src:j,alt:"\u041b\u043e\u0433\u043e"}),e.loggedIn?Object(n.jsxs)("div",{className:"header__auth",children:[Object(n.jsx)("p",{className:"header__auth_email",children:e.email}),Object(n.jsx)("a",{className:"header__auth_link-exit transparent",onClick:e.loggedOut,href:e.routePath,children:e.routePathName})]}):Object(n.jsx)("div",{className:"header__auth",children:Object(n.jsx)(r.b,{to:e.routePath,className:"header__auth_link transparent",children:e.routePathName})})]})},m="jwt",b=function(e){localStorage.setItem(m,e)},_=function(){return localStorage.getItem(m)},f="https://api.kusto.students.nomoredomains.monster";function O(e){return e.ok?e.json():Promise.reject(e)}var g=function(e){var t=o.a.useState(""),a=Object(p.a)(t,2),s=a[0],c=a[1],i=o.a.useState(""),l=Object(p.a)(i,2),u=l[0],j=l[1],h=Object(d.g)();return Object(n.jsxs)("div",{className:"register",children:[Object(n.jsx)("h1",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){return fetch("".concat(f,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(O)}(s,u).then((function(t){t&&(e.onInfoTooltip(!0,"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),h.push("/sign-in"))})).catch((function(t){400===t.status?console.log("H\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):console.log(t),e.onInfoTooltip(!1,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}))},className:"register__form",children:[Object(n.jsx)("input",{name:"email",type:"email",className:"register__input",placeholder:"Email",required:!0,onChange:function(e){c(e.target.value)}}),Object(n.jsx)("input",{name:"password",type:"password",className:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){j(e.target.value)}}),Object(n.jsx)("button",{type:"submit",className:"register__button-singup",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(n.jsxs)("div",{className:"register__auth",children:[Object(n.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(n.jsx)(r.b,{to:"/sign-in",className:"register__auth_link transparent",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},x=a(14);var v=function(e){var t=o.a.useState({email:"",password:""}),a=Object(p.a)(t,2),s=a[0],c=a[1],i=Object(d.g)(),r=function(e){var t=e.target,a=t.name,n=t.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(x.a)({},a,n))}))};return Object(n.jsxs)("div",{className:"register",children:[Object(n.jsx)("h1",{className:"register__title",children:"\u0412\u0445\u043e\u0434"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=s.email,n=s.password;a&&n&&function(e,t){return fetch("".concat(f,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(O).then((function(e){return e?(b(e),e):void 0}))}(a,n).then((function(t){t&&(b(t.token),c({email:"",password:""}),e.onLogin(a,n),i.push("/"))})).catch((function(t){401===t.status?console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):400===t.status?console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439 "):console.log(t),e.onInfoTooltip(!1,"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}))},className:"register__form",children:[Object(n.jsx)("input",{name:"email",id:"email",type:"email",className:"register__input",placeholder:"Email",required:!0,value:s.email,onChange:r}),Object(n.jsx)("input",{name:"password",type:"password",className:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,value:s.password,onChange:r}),Object(n.jsx)("button",{type:"submit",className:"register__button-singup",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},N=o.a.createContext();var C=function(e){var t=o.a.useContext(N),a=e.card.owner===t._id,s=e.card.likes.some((function(e){return e._id===t._id})),c="element__button-like ".concat(s?"element__button-like_active":"");return Object(n.jsxs)("div",{className:"element",children:[a?Object(n.jsx)("button",{className:"element__button-remove transparent",onClick:function(){e.onCardDelete(e.card)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}):"",Object(n.jsx)("img",{src:e.card.link,className:"element__image",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(n.jsx)("h3",{className:"element__title",children:e.card.name}),Object(n.jsx)("button",{className:"card__like ".concat(c," transparent"),onClick:function(){e.onCardLike(e.card)},type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"}),Object(n.jsx)("span",{className:"element__number-likes",children:e.card.likes.length})]})};var k=function(e){var t=o.a.useContext(N);return Object(n.jsxs)("main",{className:"content",children:[Object(n.jsxs)("section",{className:"profile",children:[Object(n.jsx)("div",{onClick:e.onEditAvatar,className:"profile__avatar-edit",children:Object(n.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsxs)("div",{className:"profile__edit-form",children:[Object(n.jsx)("h1",{className:"profile__title",children:t.name}),Object(n.jsx)("button",{onClick:e.onEditProfile,className:"profile__button profile__edit-button transparent",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(n.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(n.jsx)("button",{onClick:e.onAddPlace,className:"profile__button profile__add-button transparent",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]}),Object(n.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(n.jsx)(C,{card:t,onCardClick:e.onCardClick,onCardDelete:e.onCardDelete,onCardLike:e.onCardLike},t._id)}))})]})};var y=function(){return Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},S=a(22),T=a(23),P=new(function(){function e(t){Object(S.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(T.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._getResponseData)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"getInitialCards",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._getResponseData)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}}]),e}())({baseUrl:"https://api.kusto.students.nomoredomains.monster",headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}});var w=function(e){return Object(n.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(n.jsx)("div",{className:"popup__container",children:Object(n.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[Object(n.jsx)("button",{className:"popup__close-icon transparent",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(n.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(n.jsx)("button",{type:"submit",className:"popup__button-save",children:e.buttonText})]})})})};var I=function(e){var t=o.a.useContext(N),a=o.a.useState(""),s=Object(p.a)(a,2),c=s[0],i=s[1],r=o.a.useState(""),l=Object(p.a)(r,2),u=l[0],d=l[1];return o.a.useEffect((function(){i(t.name),d(t.about)}),[t]),Object(n.jsxs)(w,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{name:"full_name",type:"text",id:"name-input",className:"popup__input popup__input_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:c,onChange:function(e){i(e.target.value)}}),Object(n.jsx)("span",{className:"popup__input-error",id:"name-input-error"})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{name:"about_me",type:"text",id:"about-me-input",className:"popup__input popup__input_about-me",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",value:u,onChange:function(e){d(e.target.value)}}),Object(n.jsx)("span",{className:"popup__input-error",id:"about-me-input-error"})]})]})};var U=function(e){var t=o.a.useRef("");return Object(n.jsx)(w,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{name:"link_to_avatar",type:"url",id:"link-input",ref:t,className:"popup__input popup__input_link-to-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(n.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})})};var D=function(e){var t=o.a.useState(""),a=Object(p.a)(t,2),s=a[0],c=a[1],i=o.a.useState(""),r=Object(p.a)(i,2),l=r[0],u=r[1];return Object(n.jsxs)(w,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:s,link:l})},children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{name:"name_card",type:"text",id:"card-input",className:"popup__input popup__input_name-card",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:s,onChange:function(e){c(e.target.value)}}),Object(n.jsx)("span",{className:"popup__input-error",id:"card-input-error"})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{name:"link_to_image",type:"url",id:"link-input",className:"popup__input popup__input_link-to-image",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:l,onChange:function(e){u(e.target.value)}}),Object(n.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})]})};var E=function(e){return!!e.card&&Object(n.jsx)("section",{className:"popup popup_images popup_opened",children:Object(n.jsxs)("figure",{className:"popup__container-image",children:[Object(n.jsx)("button",{className:"popup__close-icon popup__close-image transparent",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(n.jsx)("img",{src:e.card.link,className:"popup__preview",alt:e.card.name}),Object(n.jsx)("figcaption",{className:"popup__title-image",children:e.card.name})]})})},A=a.p+"static/media/success.1b6082f8.svg",L=a.p+"static/media/unsuccess.7c6a020b.svg";var R=function(e){return Object(n.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(n.jsxs)("div",{className:"popup__container",children:[Object(n.jsx)("button",{className:"popup__close-icon transparent",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(n.jsx)("img",{className:"popup__tool-tip-image",src:e.toolTipPopup.image?A:L,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"}),Object(n.jsx)("p",{className:"popup__tool-tip-text",children:e.toolTipPopup.text})]})})},q=a(25),J=function(e){var t=e.component,a=Object(q.a)(e,["component"]);return Object(n.jsx)(d.b,{children:function(){return!0===a.loggedIn?Object(n.jsx)(t,Object(u.a)({},a)):Object(n.jsx)(d.a,{to:"./sign-in"})}})};a(37);var B=function(){var e=Object(d.g)(),t=o.a.useState(!1),a=Object(p.a)(t,2),s=a[0],c=a[1],i=o.a.useState(""),r=Object(p.a)(i,2),j=r[0],b=r[1],x=o.a.useState(!1),C=Object(p.a)(x,2),S=C[0],T=C[1],A=o.a.useState(!1),L=Object(p.a)(A,2),q=L[0],B=L[1],z=o.a.useState(!1),G=Object(p.a)(z,2),H=G[0],M=G[1],W=o.a.useState(!1),$=Object(p.a)(W,2),F=$[0],K=$[1],Q=o.a.useState({}),V=Object(p.a)(Q,2),X=V[0],Y=V[1],Z=o.a.useState(!1),ee=Object(p.a)(Z,2),te=ee[0],ae=ee[1],ne=o.a.useState(!1),se=Object(p.a)(ne,2),oe=se[0],ce=se[1],ie=o.a.useState({name:"",about:"",avatar:""}),re=Object(p.a)(ie,2),le=re[0],ue=re[1],pe=o.a.useState([]),de=Object(p.a)(pe,2),je=de[0],he=de[1],me=function(){T(!1),B(!1),M(!1),ae(!1),ce(!1),K(!1)};function be(e,t){Y({image:e,text:t}),K(!0)}var _e=function(){var t,a=_();a&&(t=a,fetch("".concat(f,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(O)).then((function(t){t&&(b(t.email),c(!0),e.push("/"))})).catch((function(e){401===e.status?console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d"):400===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435")}))};return o.a.useEffect((function(){_e()}),[]),o.a.useEffect((function(){var e=_();s&&Promise.all([P.getUserInfo(e),P.getInitialCards(e)]).then((function(e){var t=Object(p.a)(e,2),a=t[0],n=t[1];ue(a),he(n)})).catch((function(e){console.log(e)}))}),[s]),Object(n.jsx)(N.Provider,{value:le,children:Object(n.jsxs)("div",{className:"page",children:[s?Object(n.jsx)(h,{email:j,routePathName:"\u0412\u044b\u0439\u0442\u0438",loggedIn:s,loggedOut:function(){localStorage.removeItem(m),e.push("/sign-in"),b(""),c(!1)}}):"",Object(n.jsxs)(d.d,{children:[Object(n.jsxs)(d.b,{path:"/sign-up",children:[Object(n.jsx)(h,{routePathName:"\u0412\u043e\u0439\u0442\u0438",routePath:"/sign-in",loggedIn:s}),Object(n.jsx)(g,{onInfoTooltip:be})]}),Object(n.jsxs)(d.b,{path:"/sign-in",children:[Object(n.jsx)(h,{routePathName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",routePath:"/sign-up",loggedIn:s}),Object(n.jsx)(v,{onLogin:function(t){e.push("/"),c(!0),b(t)},onInfoTooltip:be})]}),Object(n.jsx)(J,{path:"/",loggedIn:s,component:k,onEditAvatar:function(){T(!S)},onEditProfile:function(){B(!q)},onAddPlace:function(){M(!H)},cards:je,onCardClick:function(e){ae(e)},onCardDelete:function(e){P.deleteCard(e._id).then((function(){he(je.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===le._id}));t||P.addLike(e._id).then((function(t){var a=je.map((function(a){return a._id===e._id?t:a}));he(a)})).catch((function(e){console.log(e)})),t&&P.deleteLike(e._id).then((function(t){var a=je.map((function(a){return a._id===e._id?t:a}));he(a)})).catch((function(e){console.log(e)}))}})]}),Object(n.jsx)(d.b,{path:"*",children:!0===s?Object(n.jsx)(d.a,{to:"/"}):Object(n.jsx)(d.a,{to:"/sign-in"})}),Object(n.jsx)(y,{}),Object(n.jsx)(U,{isOpen:S,onClose:me,onUpdateAvatar:function(e){P.updateAvatar(e.avatar).then((function(e){ue(Object(u.a)(Object(u.a)({},le),{},{avatar:e.avatar})),me()})).catch((function(e){console.log(e)}))}}),Object(n.jsx)(I,{isOpen:q,onClose:me,onUpdateUser:function(e){P.setUserInfo(e.name,e.about).then((function(e){ue(Object(u.a)(Object(u.a)({},le),{},{name:e.name,about:e.about})),me()})).catch((function(e){console.log(e)}))}}),Object(n.jsx)(D,{isOpen:H,onClose:me,onAddPlace:function(e){P.addNewCard(e.name,e.link).then((function(e){he([e].concat(Object(l.a)(je))),me()})).catch((function(e){console.log(e)}))}}),Object(n.jsx)(w,{name:"remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:oe,onClose:me}),Object(n.jsx)(E,{name:"images",card:te,onClose:me}),Object(n.jsx)(R,{isOpen:F,toolTipPopup:X,onClose:me})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(B,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8194e568.chunk.js.map