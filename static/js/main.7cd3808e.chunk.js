(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/slider2.1bca5754.jpg"},,,function(e,a,t){e.exports=t.p+"static/media/coding.f8630396.jpg"},function(e,a,t){e.exports=t.p+"static/media/cooking.5805a1a3.jpg"},function(e,a,t){e.exports=t.p+"static/media/books.3addfe05.jpg"},function(e,a,t){e.exports=t.p+"static/media/rolls.f3003625.jpg"},function(e,a,t){e.exports=t.p+"static/media/music.cc052f1f.jpg"},function(e,a,t){e.exports=t.p+"static/media/ErrorImg.e5959df9.jpg"},function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(15),o=t.n(i),c=(t(30),t(7)),l=t(6),s=(t(31),t(5)),m=(t(32),t(16)),p=t.n(m),u=function(e){return r.a.createElement("div",{className:"sliders"},r.a.createElement("img",{className:"sliders__image",src:p.a,alt:"slider2"}),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:function(){return r.a.createElement("h1",{className:"sliders__title"},"PL"===e.lang?"Marcin":"Martin"," Hercog")}}),r.a.createElement(s.a,{path:"/experience",component:function(){return r.a.createElement("h1",{className:"sliders__title"},"PL"===e.lang?"Do\u015bwiadczenie":"Experience")}}),r.a.createElement(s.a,{path:"/skills",component:function(){return r.a.createElement("h1",{className:"sliders__title"},"PL"===e.lang?"Umiej\u0119tno\u015bci":"Skills")}}),r.a.createElement(s.a,{path:"/hobbies",component:function(){return r.a.createElement("h1",{className:"sliders__title"},"PL"===e.lang?"Zainteresowania":"Hobbies")}}),r.a.createElement(s.a,{path:"/portfolio",component:function(){return r.a.createElement("h1",{className:"sliders__title"},"Portfolio")}}),r.a.createElement(s.a,{component:function(){return r.a.createElement("h1",{className:"sliders__title"},"Error!")}})))},d=(t(38),t(39),function(e){var a=e.showMenu,t=e.click,i=Object(n.useState)(0),o=Object(c.a)(i,2),l=o[0],s=o[1];function m(e){s(l+1*"".concat(e))}return!a&&l<0&&setTimeout((function(){return m(1)}),8),a&&l>-100&&setTimeout((function(){return m(-1)}),8),r.a.createElement("div",{onClick:t,className:"menu-icon",style:{right:l+"px"}},r.a.createElement("i",{className:"fas fa-caret-down"}))}),g=(t(40),function(e){return r.a.createElement("div",{onClick:e.click,className:"exit-icon"},r.a.createElement("i",{className:"fas fa-times"}))}),w=(t(41),function(e){var a="PL"===e.lang?{backgroundColor:"goldenrod"}:{backgroundColor:"transparent"},t="EN"===e.lang?{backgroundColor:"goldenrod"}:{backgroundColor:"transparent"};return r.a.createElement("div",{className:"language"},r.a.createElement("button",{style:a,onClick:function(){return e.click("PL")},className:"language__btn"},"PL"),r.a.createElement("button",{style:t,onClick:function(){return e.click("EN")},className:"language__btn"},"EN"),r.a.createElement("span",{className:"language__icon"},"\x97"))}),E=[{namePL:"O mnie",nameEN:"About",path:"/",exact:!0},{namePL:"Do\u015bwiadczenie",nameEN:"Experience",path:"/experience"},{namePL:"Umiej\u0119tno\u015bci",nameEN:"Skills",path:"/skills"},{namePL:"Zainteresowania",nameEN:"Hobbies",path:"/hobbies"},{namePL:"Portfolio",nameEN:"Portfolio",path:"/portfolio"}],f=function(e){var a=Object(n.useState)(!1),t=Object(c.a)(a,2),i=t[0],o=t[1],s=Object(n.useState)(-100),m=Object(c.a)(s,2),p=m[0],u=m[1];function f(e){u(p+1*"".concat(e))}i&&p<0&&setTimeout((function(){return f(1)}),8),!i&&p>-100&&setTimeout((function(){return f(-1)}),8),window.onload=function(){window.innerWidth>=1024&&!i?(u("auto"),o(!0)):(u(-100),o(!1)),window.innerWidth>=800&&window.innerHeight>=600&&window.addEventListener("resize",(function(){var e=window.innerWidth;e>=1024?(u("auto"),o(!0)):e<1024&&(u(-100),o(!1))}))};var k=E.map((function(a){return r.a.createElement("li",{className:"nav__item",key:a.namePL},r.a.createElement(l.b,{className:"nav__link",to:a.path,exact:!!a.exact&&a.exact,onClick:function(){return o(!1)}},"PL"===e.lang?a.namePL:a.nameEN))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"nav",style:{right:["auto"===p?p:p+"vw"]}},r.a.createElement(g,{click:function(){return o(!1)}}),r.a.createElement(w,{click:e.click,lang:e.lang}),k," "),r.a.createElement(d,{showMenu:i,click:function(){return o(!0)}}))},k=(t(42),(new Date).getFullYear()),h="Nazywam si\u0119 Marcin Hercog mam ".concat(k-1993," lat. Swoj\u0105\nprzygod\u0119 z programowaniem zacz\u0105\u0142em ju\u017c w technikum. Jednak po drodze\nwiele spraw przeszkadza\u0142o mi na skupieniu si\u0119 jedynie na tej pasji. W\nswoim \u017cyciu poznawa\u0142em Pascala i C# (w szkole), C# i Jave (we w\u0142asnym\nzakresie zaraz po szkole) jednak nie by\u0142a to wiedza kt\xf3ra pozwala\u0142aby\nrozpocz\u0105\u0107 prac\u0119, dlatego programowanie zawsze bylo gdzie\u015b na drugim\nplanie. Na pocz\u0105tku wrze\u015bnia 2019r. postanowi\u0142em ponownie wr\xf3ci\u0107 do tematu\nprogramowania, tym razem postawi\u0142em na HTML, CSS i JavaScript (+ React)\nza namow\u0105 znajomego. Jest to m\xf3j wielki powr\xf3t do programowania po\nlatach z czego bardzo si\u0119 ciesz\u0119! :)"),N=function(e){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about__foto"}),r.a.createElement("div",{className:"about__wrapText"},r.a.createElement("h1",{className:"about__welcome"},"PL"===e.lang?"Witaj!":"Hello!"),r.a.createElement("p",{className:"about__description"},"PL"===e.lang?h:"Translation in near future... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ratione possimus, temporibus nisi vero laborum officia animi quos dicta deserunt quisquam id obcaecati totam quasi perferendis natus incidunt explicabo debitis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ratione possimus, temporibus nisi vero laborum officia animi quos dicta deserunt quisquam id obcaecati totam quasi perferendis natus incidunt explicabo debitis.")))},b=(t(43),[{id:1,companyName:'Studio Reklamy "Prymus II"',professionPL:"Monta\u017cysta reklam",professionEN:"Ad fitter",datePL:"10.2013 - 12.2014",dateEN:"10.2013 - 12.2014",descriptionPL:"Praca manualna przy tworzeniu i montowaniu reklam, oklejanie samochod\xf3w, tworzenie podstawowych grafik, obs\u0142uga klienta detalicznego, przyjmowanie zam\xf3wie\u0144.",descriptionEN:"Translation in near future..."},{id:2,companyName:"Donaco Sp z o.o.",professionPL:"Pracownik biurowy",professionEN:"Office worker",datePL:"10.2015 - 11.2017",dateEN:"10.2015 - 11.2017",descriptionPL:"Administracja sklep\xf3w internetowych, przyjmowanie zam\xf3wie\u0144, kontakt mailowy i telefoniczny z klientem polskim i zagranicznym, wystawianie faktur i paragon\xf3w, podstawowa obr\xf3bka zdj\u0119\u0107 i wykonywanie prostych grafik.",descriptionEN:"Translation in near future..."},{id:3,companyName:"Eko Okna S.A.",professionPL:"Pracownik biurowy",professionEN:"Office worker",datePL:"02.2018 - obecnie",dateEN:"02.2018 - now",descriptionPL:"Przygotowywanie ofert stolarki otworowej dla klienta w\u0142oskiego, dbanie o prawid\u0142owe przygotowanie oferty pod wzgl\u0119dem technologicznym, dokumentacja ofert, wsp\xf3\u0142praca z technologami, obs\u0142uga biura.",descriptionEN:"Translation in near future..."}]),_=[{id:1,schoolName:"Technikum nr 2 w ZSE, Wodzis\u0142aw \u015al.",profilePL:"Profil informatyczny",profileEN:"IT profile",date:"09.2009 - 04.2013"}],y=function(e){var a=b.map((function(a,t){var n=t%2?"experience__wrapper--right":"experience__wrapper--left";return r.a.createElement("article",{key:a.id,className:"experience__wrapper "+n},r.a.createElement("h3",{className:"experience__companyName"},a.companyName),r.a.createElement("p",{className:"experience__text experience__text--italic"},"PL"===e.lang?a.professionPL:a.professionEN),r.a.createElement("p",{className:"experience__text experience__text--boldGolden"},"PL"===e.lang?a.datePL:a.dateEN),r.a.createElement("p",{className:"experience__text experience__text--fz"},"PL"===e.lang?a.descriptionPL:a.descriptionEN))})),t=_.map((function(a,t){var n=t%2?"experience__wrapper--right":"experience__wrapper--left";return r.a.createElement("article",{key:a.id,className:"experience__wrapper "+n},r.a.createElement("h3",{className:"experience__companyName"},a.schoolName),r.a.createElement("p",{className:"experience__text experience__text--italic"},"PL"===e.lang?a.profilePL:a.profileEN),r.a.createElement("p",{className:"experience__text experience__text--boldGolden"},a.date))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"experience"},r.a.createElement("h1",{className:"experience__title"},"PL"===e.lang?"Do\u015bwiadczenie zawodowe":"Work history"),a.reverse()),r.a.createElement("section",{className:"experience"},r.a.createElement("h1",{className:"experience__title"},"PL"===e.lang?"Uko\u0144czone szko\u0142y":"Finished schools"),t.reverse()))},z=(t(44),[{name:"HTML",progress:28},{name:"CSS/SCSS",progress:29},{name:"JavaScript",progress:25},{name:"React",progress:23}]),P=[{textPL:"Prawo jazdy kategorii B (od 10.2012)",textEN:"Category B driving license (since 10.2012)"},{textPL:"Dobra znajomo\u015b\u0107 programu Corel Draw i Photoshop",textEN:"Good knowledge of Corel Draw and Photoshop"},{textPL:"Pracowito\u015b\u0107, dok\u0142adno\u015b\u0107",textEN:"Diligence, accuracy"},{textPL:"Szybkie przyswajanie wiedzy, zaanga\u017cowanie",textEN:"Fast learning, involvement"},{textPL:"\u0141atwo\u015b\u0107 w nawi\u0105zywaniu kontakt\xf3w",textEN:"Easy to make contacts"},{textPL:"J\u0119zyk angielski - komunikatywny",textEN:"Communicative English level"}],L=function(e){var a=z.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("h3",{className:"skills__name"},e.name),r.a.createElement("div",{className:"skills__bar"},r.a.createElement("div",{style:{width:"".concat(e.progress,"%"),height:"100%",backgroundColor:"goldenrod",borderTopRightRadius:"5px",borderBottomRightRadius:"5px"}})))})),t=P.map((function(a){return r.a.createElement("h3",{key:a.textPL,className:"skills__name skills__name--alone"},"PL"===e.lang?a.textPL:a.textEN)}));return r.a.createElement("div",{className:"skills"},r.a.createElement("h1",{className:"skills__title"},"PL"===e.lang?"Programowanie":"Programming"),a,r.a.createElement("h1",{className:"skills__title"},"PL"===e.lang?"Inne":"Other"),t)},x=(t(45),t(19)),v=t.n(x),j=t(20),S=t.n(j),C=t(21),T=t.n(C),W=t(22),J=t.n(W),M=t(23),O=t.n(M),R=[{url:v.a,alt:"Coding",descriptionPL:"Programowanie wci\u0105ga i jest moj\u0105 pasj\u0105, ale...",descriptionEN:"Programming is addictive and this is my passion, but..."},{url:S.a,alt:"Cooking",descriptionPL:"...nie samym programowaniem cz\u0142owiek \u017cyje. Je\u015b\u0107 trzeba! Tak, lubi\u0119 gotowa\u0107. :)",descriptionEN:"...it's hard to live just programming. We need to eat! Yes, I like cooking. :)"},{url:T.a,alt:"Books",descriptionPL:"Lubi\u0119 te\u017c dobr\u0105 ksi\u0105\u017ck\u0119, g\u0142\xf3wnie fantastyk\u0119.",descriptionEN:"I like also good book, often it's a fantastic genre."},{url:J.a,alt:"Rolls",descriptionPL:"Troch\u0119 aktywno\u015bci te\u017c si\u0119 znajdzie w tym wszystkim np. jazda na rolkach.",descriptionEN:"A bit of activity will also be found in all of this, e.g. rollerblading."},{url:O.a,alt:"Music",descriptionPL:"I muzyka, kt\xf3ra zwykle mi towarzyszy! Czasem nawet zdarza mi si\u0119 grywa\u0107 na instrumentach.",descriptionEN:"And the music that usually accompanies me! Sometimes I even play instruments."}],H=function(e){var a=R.map((function(a){return r.a.createElement("div",{className:"hobbies__wrapper",key:a.alt},r.a.createElement("p",{className:"hobbies__description"},"PL"===e.lang?a.descriptionPL:a.descriptionEN),r.a.createElement("img",{className:"hobbies__img",src:a.url,alt:a.alt}))}));return r.a.createElement("div",{className:"hobbies"},a)},A=(t(46),[{namePL:"Bud\u017cet domowy",nameEN:"Home budget",descriptionPL:"Bud\u017cet domowy to mini aplikacja do obliczania swoich wydatk\xf3w. Jest to m\xf3j pierwszy samodzielny projekt z wykorzystaniem biblioteki React. ",descriptionEN:"A mini project to calculate your expenses. I wrote the whole project using the React library.",urlWeb:"https://mkphercog.github.io/React-Apps/",urlCode:"https://github.com/mkphercog/React-Apps/tree/homeBudget"},{namePL:"Saper",nameEN:"Sapper",descriptionPL:"Gra saper to przede wszystkim \u0107wiczenie JavaScriptu, kod nie jest idealny, ale... dzia\u0142a!",descriptionEN:"Sapper game, code sucks, but... works!",urlWeb:"https://mkphercog.github.io/SapperTestingVersion/",urlCode:"https://github.com/mkphercog/SapperTestingVersion"},{namePL:"Kalkulator",nameEN:"Calculator",descriptionPL:"Prosty kalkulator.",descriptionEN:"A simple calculator.",urlWeb:"https://mkphercog.github.io/calculator/",urlCode:"https://github.com/mkphercog/calculator"},{namePL:"Pierwsza wizyt\xf3wka",nameEN:"My first card",descriptionPL:"Ten projekt to moje pocz\u0105tki przygody z HTML, CSS i troch\u0119 JS. Uczy\u0142em si\u0119 tutaj jak zrobi\u0107 responsywn\u0105 ston\u0119 ala wizyt\xf3wka.",descriptionEN:"The first business card is my beginnings with HTML, CSS and some JS.",urlWeb:"https://mkphercog.github.io/my-first-web-JS/",urlCode:"https://github.com/mkphercog/my-first-web-JS"}]),B=function(e){var a=A.map((function(a){return r.a.createElement("div",{key:a.namePL,className:"portfolio__wrapper"},r.a.createElement("h1",{className:"portfolio__title"},"PL"===e.lang?a.namePL:a.nameEN),r.a.createElement("p",{className:"portfolio__description"},"PL"===e.lang?a.descriptionPL:a.descriptionEN),r.a.createElement("a",{className:"portfolio__link",href:a.urlWeb,target:"_blank",rel:"noreferrer noopener"},"PL"===e.lang?"Zobacz projekt tutaj":"See project here"),r.a.createElement("a",{className:"portfolio__link",href:a.urlCode,target:"_blank",rel:"noreferrer noopener"},"PL"===e.lang?"Kod dost\u0119pny tutaj":"Code available here"))}));return r.a.createElement("div",{className:"portfolio"},a)},I=(t(47),t(24)),D=t.n(I),q=function(e){var a=Object(s.f)();return r.a.createElement("div",{className:"errorPage"},r.a.createElement("img",{className:"errorPage__img",src:D.a,alt:"Error!"}),r.a.createElement("div",{className:"errorPage__wrapper"},r.a.createElement("p",{className:"errorPage__text"},"PL"===e.lang?"Zab\u0142\u0105dzi\u0142e\u015b??":"Are you lost??"),r.a.createElement("button",{className:"errorPage__backBtn",onClick:function(){a.push("/")}},"PL"===e.lang?"Wr\xf3c na stron\u0119 g\u0142\xf3wn\u0105":"Back to main page")))},F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(N,{lang:e.lang})}}),r.a.createElement(s.a,{path:"/experience",render:function(){return r.a.createElement(y,{lang:e.lang})}}),r.a.createElement(s.a,{path:"/skills",render:function(){return r.a.createElement(L,{lang:e.lang})}}),r.a.createElement(s.a,{path:"/hobbies",render:function(){return r.a.createElement(H,{lang:e.lang})}}),r.a.createElement(s.a,{path:"/portfolio",render:function(){return r.a.createElement(B,{lang:e.lang})}}),r.a.createElement(s.a,{render:function(){return r.a.createElement(q,{lang:e.lang})}})))},Z=(t(48),function(e){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:"footer__name"},"\xa9 ","PL"===e.lang?"Marcin":"Martin"," Hercog"))});var G=function(){var e=Object(n.useState)("PL"),a=Object(c.a)(e,2),t=a[0],i=a[1];return r.a.createElement(l.a,{basename:"/"},r.a.createElement("div",{className:"app"},r.a.createElement("nav",{className:"app__nav"},r.a.createElement(f,{click:function(e){i(e)},lang:t})),r.a.createElement("header",{className:"app__header"},r.a.createElement(u,{lang:t})),r.a.createElement("section",{className:"app__page"},r.a.createElement(F,{lang:t})),r.a.createElement("footer",{className:"app__footer"},r.a.createElement(Z,{lang:t}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.7cd3808e.chunk.js.map