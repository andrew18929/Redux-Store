(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{81:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(42),i=n.n(r),s=(n(81),n(4)),o=n(71),d=n(62),l=n(28),u="UPDATE_PRODUCTS",j="ADD_TO_CART",b="ADD_MULTIPLE_TO_CART",p="REMOVE_FROM_CART",h="UPDATE_CART_QUANTITY",O="TOGGLE_CART",m="UPDATE_CATEGORIES",f="UPDATE_CURRENT_CATEGORY",x=function(e,t){switch(t.type){case u:return Object(s.a)(Object(s.a)({},e),{},{products:Object(l.a)(t.products)});case j:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(l.a)(e.cart),[t.product])});case b:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(l.a)(e.cart),Object(l.a)(t.products))});case h:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case p:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case O:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case m:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(l.a)(t.categories)});case f:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var g=Object(d.a)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),v=n(1);function y(e){return Object(v.jsx)(o.a,Object(s.a)({store:g},e))}var w=n(11),_=n(10),N=n(72),k=n(95),C=n(106),E=n(104),S=n(70),T=n(8);function D(e,t){return 1===t?e:e+"s"}function A(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var d=s.getAll();d.onsuccess=function(){c(d.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}n(63);var I=Object(c.createContext)(),$=(I.Provider,function(){return Object(c.useContext)(I)});var P,Q,R,U,F,L=function(e){var t=$(),n=Object(T.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,o=e._id,d=e.price,l=e.quantity,u=c.cart;return Object(v.jsxs)("div",{className:"card px-1 py-1",children:[Object(v.jsxs)(w.b,{to:"/products/".concat(o),children:[Object(v.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(v.jsx)("p",{children:i})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[l," ",D("item",l)," in stock"]}),Object(v.jsxs)("span",{children:["$",d]})]}),Object(v.jsx)("button",{onClick:function(){var t=u.find((function(e){return e._id===o}));t?(a({type:h,_id:o,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),A("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:j,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),A("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},q=n(65),W=n(24),B=n(105),G=Object(B.a)(P||(P=Object(W.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Y=Object(B.a)(Q||(Q=Object(W.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),M=(Object(B.a)(R||(R=Object(W.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(B.a)(U||(U=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),H=Object(B.a)(F||(F=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),X=n.p+"static/media/spinner.689d9a07.gif";var V=function(){var e=$(),t=Object(T.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(q.a)(G),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:u,products:o.products}),o.products.forEach((function(e){A("products","put",e)}))):s||A("products","get").then((function(e){a({type:u,products:e})}))}),[o,s,a]),Object(v.jsxs)("div",{className:"my-2",children:[Object(v.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(v.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(v.jsx)(L,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(v.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(v.jsx)("img",{src:X,alt:"loading"}):null]})};var J=function(){var e=$(),t=Object(T.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(q.a)(M),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:m,categories:o.categories}),o.categories.forEach((function(e){A("categories","put",e)}))):s||A("categories","get").then((function(e){a({type:m,categories:e})}))}),[o,s,a]),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(v.jsx)("button",{onClick:function(){var t;t=e._id,a({type:f,currentCategory:t})},children:e.name},e._id)}))]})},z=n(27),K=n(17),Z=n.n(K),ee=n(66),te=n(98),ne=function(e){var t=e.item,n=$(),c=Object(T.a)(n,2)[1];return Object(v.jsxs)("div",{className:"flex-row",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[t.name,", $",t.price]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Qty:"}),Object(v.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:p,_id:t._id}),A("cart","delete",Object(s.a)({},t))):(c({type:h,_id:t._id,purchaseQuantity:parseInt(n)}),A("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(v.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:p,_id:e._id}),A("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ce=n(67),ae=n(68),re=n(53),ie=n.n(re),se=new(function(){function e(){Object(ce.a)(this,e)}return Object(ae.a)(e,[{key:"getProfile",value:function(){return ie()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ie()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),oe=(n(92),Object(ee.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),de=function(){var e=$(),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(te.a)(Y),i=Object(T.a)(r,2),s=i[0],o=i[1].data;function d(){a({type:O})}return Object(c.useEffect)((function(){o&&oe.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(z.a)(Z.a.mark((function e(){var t;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("cart","get");case 2:t=e.sent,a({type:b,products:Object(l.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(v.jsxs)("div",{className:"cart",children:[Object(v.jsx)("div",{className:"close",onClick:d,children:"[close]"}),Object(v.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(v.jsxs)("div",{children:[n.cart.map((function(e){return Object(v.jsx)(ne,{item:e},e._id)})),Object(v.jsxs)("div",{className:"flex-row space-between",children:[Object(v.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),se.loggedIn()?Object(v.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(v.jsx)("span",{children:"(log in to check out)"})]})]}):Object(v.jsxs)("h3",{children:[Object(v.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(v.jsx)("div",{className:"cart-closed",onClick:d,children:Object(v.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},le=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(J,{}),Object(v.jsx)(V,{}),Object(v.jsx)(de,{})]})};var ue=function(){var e=$(),t=Object(T.a)(e,2),n=t[0],a=t[1],r=Object(_.f)().id,i=Object(c.useState)({}),o=Object(T.a)(i,2),d=o[0],l=o[1],b=Object(q.a)(G),O=b.loading,m=b.data,f=n.products,x=n.cart;return Object(c.useEffect)((function(){f.length?l(f.find((function(e){return e._id===r}))):m?(a({type:u,products:m.products}),m.products.forEach((function(e){A("products","put",e)}))):O||A("products","get").then((function(e){a({type:u,products:e})}))}),[f,m,O,a,r]),Object(v.jsxs)(v.Fragment,{children:[d&&x?Object(v.jsxs)("div",{className:"container my-1",children:[Object(v.jsx)(w.b,{to:"/",children:"\u2190 Back to Products"}),Object(v.jsx)("h2",{children:d.name}),Object(v.jsx)("p",{children:d.description}),Object(v.jsxs)("p",{children:[Object(v.jsx)("strong",{children:"Price:"}),"$",d.price," ",Object(v.jsx)("button",{onClick:function(){var e=x.find((function(e){return e._id===r}));e?(a({type:h,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),A("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:j,product:Object(s.a)(Object(s.a)({},d),{},{purchaseQuantity:1})}),A("cart","put",Object(s.a)(Object(s.a)({},d),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(v.jsx)("button",{disabled:!x.find((function(e){return e._id===d._id})),onClick:function(){a({type:p,_id:d._id}),A("cart","delete",Object(s.a)({},d))},children:"Remove from Cart"})]}),Object(v.jsx)("img",{src:"/images/".concat(d.image),alt:d.name})]}):null,O?Object(v.jsx)("img",{src:X,alt:"loading"}):null,Object(v.jsx)(de,{})]})};var je,be,pe,he=function(e){var t=e.children;return Object(v.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Oe=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(he,{children:[Object(v.jsx)("h1",{children:"404 Page Not Found"}),Object(v.jsx)("h1",{children:Object(v.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},me=n(33),fe=n(99),xe=Object(B.a)(je||(je=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ge=Object(B.a)(be||(be=Object(W.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ve=Object(B.a)(pe||(pe=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ye=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(T.a)(t,2),a=n[0],r=n[1],i=Object(fe.a)(xe),o=Object(T.a)(i,2),d=o[0],l=o[1].error,u=function(){var e=Object(z.a)(Z.a.mark((function e(t){var n,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,se.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(me.a)({},n,c)))};return Object(v.jsxs)("div",{className:"container my-1",children:[Object(v.jsx)(w.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(v.jsx)("h2",{children:"Login"}),Object(v.jsxs)("form",{onSubmit:u,children:[Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(v.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(v.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),l?Object(v.jsx)("div",{children:Object(v.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(v.jsx)("div",{className:"flex-row flex-end",children:Object(v.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var we=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(T.a)(t,2),a=n[0],r=n[1],i=Object(fe.a)(ve),o=Object(T.a)(i,1)[0],d=function(){var e=Object(z.a)(Z.a.mark((function e(t){var n,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,se.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(me.a)({},n,c)))};return Object(v.jsxs)("div",{className:"container my-1",children:[Object(v.jsx)(w.b,{to:"/login",children:"\u2190 Go to Login"}),Object(v.jsx)("h2",{children:"Signup"}),Object(v.jsxs)("form",{onSubmit:d,children:[Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(v.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:l})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(v.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:l})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(v.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:l})]}),Object(v.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(v.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(v.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:l})]}),Object(v.jsx)("div",{className:"flex-row flex-end",children:Object(v.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var _e=function(){return Object(v.jsxs)("header",{className:"flex-row px-1",children:[Object(v.jsx)("h1",{children:Object(v.jsxs)(w.b,{to:"/",children:[Object(v.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(v.jsx)("nav",{children:se.loggedIn()?Object(v.jsxs)("ul",{className:"flex-row",children:[Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)(w.b,{to:"/orderHistory",children:"Order History"})}),Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)("a",{href:"/",onClick:function(){return se.logout()},children:"Logout"})})]}):Object(v.jsxs)("ul",{className:"flex-row",children:[Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)(w.b,{to:"/signup",children:"Signup"})}),Object(v.jsx)("li",{className:"mx-1",children:Object(v.jsx)(w.b,{to:"/login",children:"Login"})})]})})]})};var Ne=function(){var e=Object(fe.a)(ge),t=Object(T.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(z.a)(Z.a.mark((function e(){var n,c,a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){A("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(v.jsx)("div",{children:Object(v.jsxs)(he,{children:[Object(v.jsx)("h1",{children:"Success!"}),Object(v.jsx)("h2",{children:"Thank you for your purchase!"}),Object(v.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ke=function(){var e,t=Object(q.a)(H).data;return t&&(e=t.user),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"container my-1",children:[Object(v.jsx)(w.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(v.jsxs)("div",{className:"my-2",children:[Object(v.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(v.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(v.jsxs)("div",{className:"card px-1 py-1",children:[Object(v.jsxs)(w.b,{to:"/products/".concat(n),children:[Object(v.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(v.jsx)("p",{children:a})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},Ce=Object(N.a)({uri:"/graphql"}),Ee=Object(S.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Se=new k.a({link:Ee.concat(Ce),cache:new C.a});var Te=function(){return Object(v.jsx)(E.a,{client:Se,children:Object(v.jsx)(w.a,{children:Object(v.jsx)("div",{children:Object(v.jsxs)(y,{children:[Object(v.jsx)(_e,{}),Object(v.jsxs)(_.c,{children:[Object(v.jsx)(_.a,{exact:!0,path:"/",component:le}),Object(v.jsx)(_.a,{exact:!0,path:"/login",component:ye}),Object(v.jsx)(_.a,{exact:!0,path:"/signup",component:we}),Object(v.jsx)(_.a,{exact:!0,path:"/success",component:Ne}),Object(v.jsx)(_.a,{exact:!0,path:"/orderHistory",component:ke}),Object(v.jsx)(_.a,{exact:!0,path:"/products/:id",component:ue}),Object(v.jsx)(_.a,{component:Oe})]})]})})})})},De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");De?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}},[[93,1,2]]]);
//# sourceMappingURL=main.29f65211.chunk.js.map