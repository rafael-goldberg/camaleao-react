(this["webpackJsonpcamaleao-react"]=this["webpackJsonpcamaleao-react"]||[]).push([[9],{50:function(e,t,a){"use strict";a(0),a(52);var s=a(1);t.a=function(e){var t=e.show,a=e.children,i=t?"modal d-block":"modal d-none";return Object(s.jsx)("div",{id:"modalDefault",children:Object(s.jsx)("div",{className:i,children:Object(s.jsx)("div",{className:"modal-container",children:a})})})}},51:function(e,t,a){"use strict";a(0);var s=a(2),i=a(15),n=a(1);t.a=function(e){var t=e.label,a=e.to,r=e.activeOnlyWhenExact,c=e.className,o=Object(s.j)({path:a,exact:r});return Object(n.jsxs)(i.b,{to:a,className:o?"nav-item nav-link active ".concat(c):"nav-item nav-link ".concat(c),children:[o&&"> ",t]})}},52:function(e,t,a){},53:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return c}));var s=a(9),i=function(){return function(e){return e({type:s.b})}},n=function(e){return function(t){return t({type:s.a,payload:e})}},r=function(e,t){return function(a){return a({type:s.d,payload:{id:e,operator:t}})}},c=function(e){return function(t){return t({type:s.c,payload:e})}}},54:function(e,t,a){"use strict";var s=a(21),i=a(0),n=a(2),r=a(22),c=a(57),o=a(1);t.a=function(e){var t=Object(n.g)(),a=Object(n.h)(),l=Object(i.useContext)(r.a).setAuthState,d=Object(i.useState)(""),m=Object(s.a)(d,2),b=m[0],j=m[1],p=Object(i.useState)(""),h=Object(s.a)(p,2),u=h[0],g=h[1],f=Object(i.useState)(""),x=Object(s.a)(f,2),O=x[0],y=x[1],N=Object(i.useState)(""),v=Object(s.a)(N,2),w=v[0],k=v[1],S=Object(i.useState)(""),C=Object(s.a)(S,2),_=C[0],L=C[1],P=Object(i.useState)(!1),A=Object(s.a)(P,2),D=A[0],H=A[1],E=Object(i.useState)(""),T=Object(s.a)(E,2),I=T[0],F=T[1],R=(a.state||{from:{pathname:"/shopping"}}).from,U=function(){H(!D)};return Object(o.jsx)("div",{id:"signinForm",className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-sm-9 col-md-7 col-lg-4 mx-auto",children:Object(o.jsx)("div",{className:"card border-0 shadow rounded-3 my-5",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("button",{className:"modal-close",onClick:e.handleClose,children:Object(o.jsx)(c.a,{size:24})}),Object(o.jsx)("h5",{className:"card-title text-center fw-light fs-5 mb-3",children:D?"Register":"Welcome back!"}),I&&Object(o.jsx)("p",{className:"alert alert-danger p-2",children:I}),Object(o.jsx)("div",{children:D?Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={id:1,email:O,password:w,rePassword:_,role:5};""!==a.email&&""!==a.password&&""!==a.rePassword?(console.log(a.password),console.log(a.rePassword),a.password===a.rePassword?(localStorage.setItem("accessToken","true"),l({id:a.id,email:a.email,role:a.role,isAuthenticated:!0}),y(""),k(""),L(""),F(""),e.handleClose()):(F("Password and RePassword don't match"),k(""),L(""))):F("Fill in all fields.")},children:[Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",name:"email",value:O,placeholder:"name@example.com",onChange:function(e){return y(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",name:"password",value:w,placeholder:"Password",onChange:function(e){return k(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"floatingPassword",children:"Password"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"password",className:"form-control",id:"floatingRePassword",name:"rePassword",value:_,placeholder:"Re-Password",onChange:function(e){return L(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"floatingPassword",children:"Re-Password"})]}),Object(o.jsx)("div",{className:"d-grid",children:Object(o.jsx)("button",{className:"btn btn-primary btn-login text-uppercase fw-bold",type:"submit",children:"Sign up"})}),Object(o.jsx)("hr",{className:"my-3"}),Object(o.jsx)("div",{className:"mb-3 text-center",children:Object(o.jsx)("button",{className:"btn btn-sm p-0",type:"button",onClick:U,children:D?"Have account? Login":"Don't have account? Register"})})]}):Object(o.jsxs)("form",{onSubmit:function(a){a.preventDefault();var s={id:1,email:b,password:u,role:5};""!==s.email&&""!==s.password?(localStorage.setItem("accessToken","true"),l({id:s.id,email:s.email,role:s.role,isAuthenticated:!0}),j(""),g(""),F(""),e.handleClose(),t.replace(R)):F("User/Password invalid.")},children:[Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"email",className:"form-control",id:"floatingInput",name:"email",value:b,placeholder:"name@example.com",onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"floatingInput",children:"Email address"})]}),Object(o.jsxs)("div",{className:"form-floating mb-3",children:[Object(o.jsx)("input",{type:"password",className:"form-control",id:"floatingPassword",name:"password",value:u,placeholder:"Password",onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("label",{htmlFor:"floatingPassword",children:"Password"})]}),Object(o.jsx)("div",{className:"d-grid",children:Object(o.jsx)("button",{className:"btn btn-primary btn-login text-uppercase fw-bold",type:"submit",children:"Sign in"})}),Object(o.jsx)("hr",{className:"my-3"}),Object(o.jsx)("div",{className:"mb-3 text-center",children:Object(o.jsx)("button",{className:"btn btn-sm p-0",type:"button",onClick:U,children:"Don't have account? Register"})})]})})]})})})})})}},55:function(e,t,a){},56:function(e,t,a){"use strict";var s=a(0),i=a(21),n=(a(55),a(2)),r=a(15),c=a(22),o=a(51),l=a(50),d=a(58),m=a(54),b=a(23),j=a(53),p=a(1),h=Object(b.b)((function(e){return{cart:e.cart.cart,totalQuantity:e.cart.totalQuantity}}),{getCart:j.b})((function(e){var t=e.totalQuantity,a=Object(n.g)(),b=Object(n.h)(),j=Object(s.useContext)(c.a).authState,h=Object(s.useContext)(c.a).setAuthState,u=Object(s.useState)({modal:!1,menu:!1,homeLinkClass:"nav-item nav-link",dashboardLinkClass:"nav-item nav-link",detailsLinkClass:"nav-item nav-link",signinLinkClass:"nav-item nav-link",menuClass:""}),g=Object(i.a)(u,2),f=g[0],x=g[1],O=(b.state||{from:{pathname:"/"}}).from;return Object(s.useEffect)((function(){window.onscroll=function(){window.pageYOffset>=t?e.classList.add("sticky"):e.classList.remove("sticky")};var e=document.getElementById("navbarTop"),t=e.offsetTop}),[]),Object(s.useEffect)((function(){e.getCart()}),[e]),Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)("nav",{id:"navbarTop",className:"py-2 bg-light border-bottom",children:Object(p.jsxs)("div",{className:"container d-flex flex-wrap",children:[Object(p.jsxs)("ul",{className:"nav me-auto",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.a,{to:"/",label:"Home",className:"text-dark",activeOnlyWhenExact:!0})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.a,{to:"/shopping",className:"text-dark",label:"Shopping",activeOnlyWhenExact:!0})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.a,{to:"/contact",className:"text-dark",label:"Contact",activeOnlyWhenExact:!0})})]}),Object(p.jsxs)("ul",{className:"nav",children:[Object(p.jsxs)(r.b,{to:"/cart",className:"nav-item nav-link text-muted border border-secondary rounded",children:[Object(p.jsx)("i",{className:"bi-cart-fill me-1"}),Object(p.jsx)("span",{className:"badge bg-muted text-secondary border border-secondary ms-1 rounded-pill",children:t||0})]}),!0===j.isAuthenticated?Object(p.jsx)(r.b,{to:"/",className:"nav-item nav-link",onClick:function(){localStorage.removeItem("accessToken"),h({id:null,email:"",role:null,isAuthenticated:!1}),a.replace(O)},children:Object(p.jsx)(d.b,{})}):Object(p.jsx)("button",{className:"btn shadow-none",onClick:function(){x({modal:!0})},children:Object(p.jsx)(d.a,{})})]})]})}),Object(p.jsx)("header",{className:"bg-white py-3 border-bottom",children:Object(p.jsxs)("div",{className:"container d-flex flex-wrap justify-content-center",children:[Object(p.jsxs)(r.b,{to:"/",className:"d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none",children:[Object(p.jsx)("i",{className:"bi bi-bootstrap me-2 fa-2x"}),Object(p.jsx)("span",{className:"fs-4",children:"Double header"})]}),Object(p.jsx)("form",{className:"col-12 col-lg-auto mb-3 mb-lg-0",children:Object(p.jsx)("input",{type:"search",className:"form-control",placeholder:"Search...","aria-label":"Search"})})]})}),Object(p.jsx)(l.a,{show:f.modal,children:Object(p.jsx)(m.a,{handleClose:function(){x({modal:!1})}})})]})})),u=a(60),g=a(61),f=a(64),x=a(63),O=a(62),y=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},s.state={scrolled:0},s}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollProgress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollProgress)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none",children:Object(p.jsx)("button",{className:"btn btn-outline-secondary p-1 px-2 pb-2 shadow-none",onClick:this.scrollTop,children:Object(p.jsx)(O.a,{})})})}}]),a}(s.Component),N=function(){return Object(p.jsx)("footer",{className:"footer py-4 pb-5 border-top fixed-bottom bg-light",children:Object(p.jsxs)("div",{className:"d-flex flex-wrap justify-content-between align-items-center container",children:[Object(p.jsxs)("div",{className:"col-md-4 d-flex align-items-center",children:[Object(p.jsx)("a",{href:"/",className:"mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 d-none d-md-block",children:Object(p.jsx)("i",{className:"bi bi-bootstrap",width:"30",height:"24"})}),Object(p.jsx)("span",{className:"text-muted",children:"\xa9 2021"})]}),Object(p.jsx)(y,{}),Object(p.jsxs)("ul",{className:"nav col-md-4 justify-content-end list-unstyled d-flex",children:[Object(p.jsx)("li",{className:"ms-3",children:Object(p.jsx)(r.b,{className:"text-muted",to:"/",children:Object(p.jsx)("i",{className:"bi bi-twitter",width:"24",height:"24"})})}),Object(p.jsx)("li",{className:"ms-3",children:Object(p.jsx)(r.b,{className:"text-muted",to:"/",children:Object(p.jsx)("i",{className:"bi bi-instagram",width:"24",height:"24"})})}),Object(p.jsx)("li",{className:"ms-3",children:Object(p.jsx)(r.b,{className:"text-muted",to:"/",children:Object(p.jsx)("i",{className:"bi bi-facebook",width:"24",height:"24"})})})]})]})})};t.a=function(e){var t=e.children,a=e.state;return Object(p.jsxs)("div",{id:"layoutSite",className:a.bg_on_off?"layout-site-bg":"layout-site",children:[Object(p.jsx)(h,{}),t,Object(p.jsx)(N,{})]})}},59:function(e,t,a){"use strict";a(0);var s=a(1);t.a=function(e){var t=e.children,a=e.id,i=e.classNames;return Object(s.jsx)("div",{id:a,className:i||"",children:Object(s.jsx)("section",{className:"pt-4 my-5 pb-5",children:Object(s.jsx)("div",{className:"container px-lg-5",children:t})})})}},77:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var s=a(21),i=a(0),n=a(56),r=[{id:1,title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",price:109.95,old_price:1020.5,description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",category:"men's clothing",image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",rating:{rate:3.9,count:120},quantity:10},{id:2,title:"Mens Casual Premium Slim Fit T-Shirts ",price:22.3,old_price:1020.5,description:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",category:"men's clothing",image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",rating:{rate:4.1,count:"259"},quantity:3},{id:3,title:"Mens Cotton Jacket",price:55.99,old_price:1020.5,description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",category:"men's clothing",image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",rating:{rate:4.7,count:500},quantity:0},{id:4,title:"Mens Casual Slim Fit",price:15.99,old_price:1020.5,description:"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",category:"men's clothing",image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",rating:{rate:2.1,count:430},quantity:12},{id:5,title:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",price:695,old_price:1020.5,description:"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",category:"jewelery",image:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",rating:{rate:4.6,count:400},quantity:4},{id:6,title:"Solid Gold Petite Micropave ",price:168,old_price:1020.5,description:"Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",category:"jewelery",image:"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",rating:{rate:3.9,count:70},quantity:9},{id:7,title:"White Gold Plated Princess",price:9.99,old_price:1020.5,description:"Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",category:"jewelery",image:"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",rating:{rate:3,count:400},quantity:0},{id:8,title:"Pierced Owl Rose Gold Plated Stainless Steel Double",price:10.99,old_price:1020.5,description:"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",category:"jewelery",image:"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",rating:{rate:1.9,count:100},quantity:0},{id:9,title:"WD 2TB Elements Portable External Hard Drive - USB 3.0 ",price:64,old_price:1020.5,description:"USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user\u2019s hardware configuration and operating system",category:"electronics",image:"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",rating:{rate:3.3,count:203},quantity:6},{id:10,title:"SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",price:109,old_price:1020.5,description:"Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5\u201d hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",category:"electronics",image:"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",rating:{rate:2.9,count:470},quantity:10},{id:11,title:"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",price:109,old_price:1020.5,description:"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",category:"electronics",image:"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",rating:{rate:4.8,count:319},quantity:10},{id:12,title:"WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",price:114,old_price:1020.5,description:"Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",category:"electronics",image:"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",rating:{rate:4.8,count:400},quantity:10},{id:13,title:"Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",price:599,old_price:1020.5,description:"21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",category:"electronics",image:"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",rating:{rate:2.9,count:250},quantity:17},{id:14,title:"Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) \u2013 Super Ultrawide Screen QLED ",price:999.99,old_price:1020.5,description:"49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",category:"electronics",image:"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",rating:{rate:2.2,count:140},quantity:0},{id:15,title:"BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",price:56.99,old_price:1020.5,description:"Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",category:"women's clothing",image:"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",rating:{rate:2.6,count:235},quantity:5},{id:16,title:"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",price:29.95,old_price:1020.5,description:"100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",category:"women's clothing",image:"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",rating:{rate:2.9,count:340},quantity:7},{id:17,title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats",price:39.99,old_price:1020.5,description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",category:"women's clothing",image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",rating:{rate:3.8,count:679},quantity:3},{id:18,title:"MBJ Women's Solid Short Sleeve Boat Neck V ",price:9.85,old_price:1020.5,description:"95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",category:"women's clothing",image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",rating:{rate:4.7,count:130},quantity:5},{id:19,title:"Opna Women's Short Sleeve Moisture",price:7.95,old_price:1020.5,description:"100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",category:"women's clothing",image:"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",rating:{rate:4.5,count:146},quantity:0},{id:20,title:"DANVOUY Womens T Shirt Casual Cotton Short",price:12.99,old_price:1020.5,description:"95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",category:"women's clothing",image:"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",rating:{rate:3.6,count:145},quantity:10}],c=(a(77),a(78)),o=a(80),l=a(79),d=a.n(l),m=a(23),b=a(53),j=a(1),p=function(e){var t=e.show,a=e.children,s=t?"modal d-block":"modal d-none";return Object(j.jsx)("div",{className:s,children:Object(j.jsx)("div",{className:"modal-container",children:a})})},h=Object(m.b)((function(e){return{cart:e.cart.cart}}),{addProductCart:b.a,updateCart:b.d})((function(e){var t=e.product,a=t.image,n=t.title,r=t.rating,l=t.price,m=t.old_price,b=t.quantity,h=t.description,u=Object(i.useState)({modal:!1,modalProduct:null}),g=Object(s.a)(u,2),f=g[0],x=g[1],O=[{original:a,originalHeight:"300px",thumbnail:a},{original:a,originalHeight:"300px",thumbnail:a},{original:a,originalHeight:"300px",thumbnail:a}],y=function(){x({modal:!1})},N=function(e){return Number(e).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},v=function(t){if(e.cart.length>0){var a=t.id;-1===e.cart.findIndex((function(e){return e.id===a}))?e.addProductCart(t):e.updateCart(a,"+")}else e.addProductCart(t)};return Object(j.jsxs)("div",{id:"productCard",className:"card h-100 bg-light",children:[b<=5&&Object(j.jsx)(i.Fragment,{children:Object(j.jsx)("div",{className:"badge bg-dark bg-gradient text-white position-absolute",style:{top:"0.5rem",right:"0.5rem"},children:"Sale"})}),Object(j.jsx)("div",{className:"text-center mt-3 bg-white py-3",children:Object(j.jsx)("img",{className:"img-fluid",src:a,alt:"...",style:{height:"80px"}})}),Object(j.jsx)("div",{className:"card-body p-4",children:Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h5",{className:"fw-bolder title","data-tip":n,children:n}),Object(j.jsx)(c.a,{className:"extraClass",delayHide:1500,effect:"solid"}),N(l),Object(j.jsx)("span",{className:"text-muted text-decoration-line-through ms-2",children:N(1500)})]})}),Object(j.jsx)("div",{className:"card-footer p-4 pt-0 border-top-0 bg-transparent",children:Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("button",{className:"btn btn-primary mt-auto",onClick:function(){return v(e.product)},children:"Add to cart"}),Object(j.jsx)("button",{className:"btn text-dark mt-auto","data-tip":"Info",onClick:function(){return t=e.product,void x({modal:!0,modalProduct:t});var t},children:Object(j.jsx)(o.a,{})}),Object(j.jsx)(c.a,{className:"extraClass",delayHide:1e3,effect:"solid"})]})}),Object(j.jsx)(p,{show:f.modal,handleCloseModal:y,children:Object(j.jsx)("div",{className:"container-fliud",children:Object(j.jsxs)("div",{className:"wrapper row",children:[Object(j.jsx)("div",{className:"preview col-md-6",children:Object(j.jsx)(d.a,{items:O,thumbnailPosition:"bottom",showFullscreenButton:!1,showIndex:!0,autoPlay:!0,slideInterval:5e3})}),Object(j.jsxs)("div",{className:"details col-md-6",children:[Object(j.jsx)("h4",{className:"product-title",children:n}),Object(j.jsxs)("div",{className:"rating",children:[Object(j.jsxs)("span",{className:"stars me-2",children:[5===r.rate&&Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"})]}),r.rate>=4&&r.rate<5&&Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star"})]}),r.rate>=3&&r.rate<4&&Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"})]}),r.rate>=2&&r.rate<3&&Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"})]}),r.rate>=1&&r.rate<2&&Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("span",{className:"bi-star-fill"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"})]}),r.rate<1&&Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"}),Object(j.jsx)("span",{className:"bi-star"})]})]}),Object(j.jsxs)("span",{className:"review-no small",children:[r.count," reviews"]})]}),Object(j.jsxs)("div",{className:"vote small",children:[Object(j.jsx)("strong",{className:"small",children:"91%"})," of buyers enjoyed this product!"]}),Object(j.jsx)("p",{className:"product-description",children:h}),Object(j.jsxs)("h6",{className:"price",children:["Price: ",Object(j.jsx)("span",{children:N(l)})]}),m>0&&Object(j.jsxs)("h6",{className:"price",children:["Old Price: ",Object(j.jsx)("span",{children:N(m)})]}),Object(j.jsxs)("h6",{className:"colors invisible",children:["Colors:",Object(j.jsx)("span",{className:"color orange not-available",title:"Not In store"}),Object(j.jsx)("span",{className:"color green"}),Object(j.jsx)("span",{className:"color blue"})]}),Object(j.jsxs)("div",{className:"action mt-5",children:[Object(j.jsx)("button",{className:"add-to-cart btn btn-default",type:"button",onClick:function(){return v(e.product)},children:"add to cart"}),Object(j.jsx)("button",{className:"btn modal-close float-end",onClick:y,children:"close"})]})]})]})})})]})})),u=a(59);t.default=function(){var e=Object(i.useState)({bg_on_off:!1,products:[]}),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(i.useEffect)((function(){c({products:r})}),[]),Object(j.jsxs)(n.a,{state:a,children:[Object(j.jsx)("div",{className:"bg-dark bg-gradient py-5",children:Object(j.jsx)("div",{className:"container px-4 px-lg-5 my-5",children:Object(j.jsxs)("div",{className:"text-center text-white",children:[Object(j.jsx)("h1",{className:"display-4 fw-bolder",children:"Shop in style"}),Object(j.jsx)("p",{className:"lead fw-normal text-white-50 mb-0",children:"With this shop hompeage template"})]})})}),Object(j.jsx)(u.a,{id:"shopping",children:Object(j.jsx)("div",{className:"row",children:a.products.map((function(e){var t=e.id;return Object(j.jsx)("div",{className:"col-md-4 col-lg-3 mb-3",children:Object(j.jsx)(h,{product:e})},t)}))})})]})}}}]);
//# sourceMappingURL=9.5fe7c1eb.chunk.js.map