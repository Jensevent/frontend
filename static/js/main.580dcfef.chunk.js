(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),l=n(20),i=n.n(l),r=(n(27),n(28),n(3)),o=n(2);n(29);var j=function(){return Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("div",{id:"Center",children:Object(a.jsx)("h1",{id:"Title",children:"VERBEETEN CHALLENGES"})})})};n(30);var d=function(){return Object(a.jsxs)("nav",{children:[Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsxs)(r.b,{to:"/",children:[Object(a.jsx)("span",{className:"fas fa-home"}),Object(a.jsx)("li",{className:"spacing",children:"Thuis"})]}),Object(a.jsxs)(r.b,{to:"/discover",children:[Object(a.jsx)("span",{className:"fas fa-compass"}),Object(a.jsx)("li",{className:"spacing",children:"Ontdek"})]})]}),Object(a.jsx)("div",{id:"circleWhite",children:Object(a.jsx)(r.b,{to:"/new",children:Object(a.jsx)("div",{id:"addButton",children:Object(a.jsx)("span",{className:"fas fa-plus"})})})}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsxs)(r.b,{to:"/following",children:[Object(a.jsx)("span",{className:"fas fa-users"}),Object(a.jsx)("li",{className:"spacing",children:"Volgend"})]}),Object(a.jsxs)(r.b,{to:"/profile",children:[Object(a.jsx)("span",{className:"fas fa-user"}),Object(a.jsx)("li",{className:"spacing",children:"Profiel"})]})]})]})},m=n(5),h=n(6),b=n(8),u=n(7),x=(n(36),n(18)),O=(n(37),["30 Push ups","6000 Stappen","5 min. Planking","30 Leg raises","10 min. Hardlopen","5 km. Fietsen","15 Sit ups"]),v=O.length,p=0,g=0,f=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={percentage:0},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){g=0,p=0}},{key:"countCheck",value:function(e){!0===e?p++:p--;var t=Math.round(p/v*100);console.log(g),this.setState({percentage:t})}},{key:"render",value:function(){var e,t=this;return e=O.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"checkBox",onChange:function(e){return t.countCheck(e.target.checked)}}),Object(a.jsx)("label",{children:e})]})})),Object(a.jsxs)("div",{className:"dailly",children:[Object(a.jsx)("img",{src:"Images/DaillyBanner.jpeg",alt:"DaillyBanner",id:"imageDailly"}),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsxs)("div",{className:"challengesLeft",children:[Object(a.jsx)("p",{children:Object(a.jsx)("strong",{children:"Wat te doen vandaag?"})}),Object(a.jsx)("div",{className:"challenges",children:Object(a.jsx)("ul",{children:e})})]}),Object(a.jsx)("div",{className:"progressRight",children:Object(a.jsx)("div",{id:"circle",children:Object(a.jsx)(x.a,{className:"circle",value:this.state.percentage,text:"".concat(this.state.percentage,"%"),background:!0,styles:Object(x.b)({strokeLinecap:"butt",backgroundColor:"rgb(230,230,230)",textColor:"black",pathColor:"rgb(211,16,30)",trailColor:"rgb(255,255,255)"})})})})]}),Object(a.jsx)(r.b,{to:"/",children:Object(a.jsxs)("div",{className:"lowBar",children:[Object(a.jsx)("h3",{className:"textBottom",children:"Daily Challenges"}),Object(a.jsx)("i",{className:"fas fa-chevron-up"})]})})]})}}]),n}(c.Component),N=(n(38),["30 Push ups","5 min. Planking","30 Leg raises","10 min. Hardlopen","5 km. Fietsen","15 Sit ups","12 Hakken billen","30 Squats","100 Burpees","50 min. Boulderen","25 Preacher curls","10 Bicycle kicks","15 Sit ups"]),y=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e;return e=N.map((function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)("button",{id:e,className:"lists",value:e,children:[e,Object(a.jsx)("div",{id:"nameRight"+e,value:e,className:"nameDateRight"})]})})})),Object(a.jsxs)("div",{className:"all",children:[Object(a.jsx)("img",{src:"Images/AllBanner.png",alt:"AllBanner",id:"imageAll"}),Object(a.jsx)("div",{className:"contentFull",children:Object(a.jsx)("div",{className:"challengesFull",children:Object(a.jsx)("ul",{children:e})})}),Object(a.jsx)(r.b,{to:"/",children:Object(a.jsxs)("div",{className:"lowBar",children:[Object(a.jsx)("h3",{className:"textBottom",children:"All Challenges"}),Object(a.jsx)("i",{className:"fas fa-chevron-up"})]})})]})}}]),n}(c.Component),B=(n(39),["100 Burpees","25 Lunges","12 Hakken billen","50 min. Boulderen","25 Preacher curls","30 Squats","15 Jumping Jacks","10 Bicycle kicks","15 Sit ups"]),k=["\u20ac 12.68","\u20ac 19.50","\u20ac 10.00","\u20ac 11.50","\u20ac 16.66","\u20ac 15.99","\u20ac 25.30","\u20ac 39.55","\u20ac 51.05","\u20ac 21.22","\u20ac 13.60","\u20ac 19.65","\u20ac 32.32","\u20ac 29.87","\u20ac 22.16","\u20ac 43.15","\u20ac 49.70","\u20ac 44.69"],C=["01/12/2020","30/11/2020","29/11/2020","28/11/2020","27/11/2020","26/11/2020","25/11/2020","24/11/2020","23/11/2020","22/11/2020","21/11/2020"],E=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e,t,n;return e=function(e){var t=document.getElementById(e.target.value);if(t.classList.contains("Added"))alert("Deze challenge is al actief");else{var n=new Date,a=n.getDate(),c=n.getMonth()+1,s=n.getFullYear();a<10&&(a="0"+a),c<10&&(c="0"+c),n=a+"/"+c+"/"+s,t.classList.add("Added");var l=document.createElement("li");l.innerText=n,document.getElementById("dateDone"+e.target.value).appendChild(l);var i=document.createElement("li");i.innerText="\u20ac 00.00 ",document.getElementById("donation"+e.target.value).appendChild(i);var r=document.createElement("li");r.innerText="Actief: ",document.getElementById("complete"+e.target.value).appendChild(r)}},t=function(e){var t,n=Math.floor(7*Math.random()+1),a=C.length,c=k.length,s=document.getElementById(e.target.value);s.classList.toggle("active");var l=s.nextElementSibling;if("flex"===l.style.display)l.style.display="none";else if(l.style.display="flex",s.classList.contains("made"))console.log("Doet niks");else{for(t=0;t<n;t++){var i=document.createElement("li");i.innerText="Gehaald: ",document.getElementById("complete"+e.target.value).appendChild(i);var r=Math.floor(Math.random()*c),o=k[r],j=document.createElement("li");j.innerText=o,document.getElementById("donation"+e.target.value).appendChild(j);var d=Math.floor(Math.random()*a),m=C[d],h=document.createElement("li");h.innerText=m,document.getElementById("dateDone"+e.target.value).appendChild(h)}s.classList.add("made")}},n=B.map((function(n){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("button",{id:n,className:"lists",onClick:t,value:n,children:[n," ",Object(a.jsx)("span",{})]}),Object(a.jsxs)("div",{className:"hider",id:"box"+n,children:[Object(a.jsx)("div",{className:"leftMy",children:Object(a.jsx)("ul",{className:"fillBox",id:"complete"+n})}),Object(a.jsx)("div",{className:"middleMy",children:Object(a.jsx)("ul",{className:"fillBox",id:"dateDone"+n})}),Object(a.jsx)("div",{className:"rightMy",children:Object(a.jsx)("ul",{className:"fillBox",id:"donation"+n})}),Object(a.jsx)("button",{className:"buttonCenter",value:n,onClick:e,children:"Opnieuw"})]})]})})),Object(a.jsxs)("div",{className:"my",children:[Object(a.jsx)("img",{src:"Images/MyBanner.jpeg",alt:"myBanner",id:"imageMy"}),Object(a.jsx)("div",{className:"contentFull",children:Object(a.jsx)("div",{className:"challengesFull",children:Object(a.jsx)("ul",{children:n})})}),Object(a.jsx)(r.b,{to:"/",children:Object(a.jsxs)("div",{className:"lowBar",children:[Object(a.jsx)("h3",{className:"textBottom",children:"My Challenges"}),Object(a.jsx)("i",{className:"fas fa-chevron-up"})]})})]})}}]),n}(c.Component),D=(n(40),["30 Push ups","Daily Challenge  25/11/20","5 min. Planking","30 Leg raises","10 min. Hardlopen","Daily Challenge  24/11/20","Daily Challenge  22/11/20","5 km. Fietsen","15 Sit ups","12 Hakken billen","30 Squats","100 Burpees","Daily Challenge  20/11/20","Daily Challenge  16/11/20"]),M=["Jan van Ham","Jens Heesbeen","Sem Kivits","Youssef El Jaddaoui","Manon Roovers","Scott Pols","Oma Nils","Mex van Gestel","Suly-ann Stokkel","Ka Wing Man","Jarno UijtdeHaag","Bart Scholten","Myrthe de Jong","Michelle Westerhuis","Erik Roekel","Floris Weyns","Matthijs Kropholler","Thijs van der Hulst","Ralph Witvoet","Britt van Lierop","Bas Marechal","Femke Mesman","Pepijn Jacobs","Pieter Wels","Sasja Vos","Emma Bouwens","Pieter Dorst","David Schol","Klaas Kox","Mijke Ellen Zee","Eva Schmetz"],w=[1.67,2.4,3,6.66,4.2,5.34,9.99,10,5,.05,6.5,8.75,7.5,6.9,15.5],S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={currentBox:0},e}return Object(h.a)(n,[{key:"render",value:function(){var e,t;return e=function(e){var t,n,a=Math.floor(9*Math.random()+1),c=M.length,s=w.length,l=0,i=document.getElementById(e.target.value);i.classList.toggle("active");var r=i.nextElementSibling;if("flex"===r.style.display)r.style.display="none";else if(r.style.display="flex",i.classList.contains("made"))console.log("Deze app is gemaakt met behulp van de Rcade Bois, love ya'll");else for(t=0;t<a;t++){var o=Math.floor(Math.random()*c),j=Math.floor(Math.random()*s),d=M[o],m=w[j],h=document.createElement("li");h.innerText=d,document.getElementById("boxName"+e.target.value).appendChild(h);var b=document.createElement("li");b.innerText="\u20ac "+m.toFixed(2),document.getElementById("boxAmount"+e.target.value).appendChild(b),i.classList.add("made"),n=(l+=m).toFixed(2),document.getElementById("boxTotal"+e.target.value).innerText="\u20ac "+n}},t=D.map((function(t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{id:t,className:"lists",onClick:e,value:t,children:t}),Object(a.jsxs)("div",{className:"hider",id:"box"+t,children:[Object(a.jsx)("div",{className:"left",children:Object(a.jsx)("ul",{className:"fillBox",id:"boxName"+t})}),Object(a.jsx)("div",{className:"right",children:Object(a.jsx)("ul",{className:"fillBox",id:"boxAmount"+t})}),Object(a.jsxs)("div",{className:"total",children:[Object(a.jsx)("div",{className:"left down",children:Object(a.jsx)("ul",{className:"fillBox",children:Object(a.jsx)("il",{children:"Totaal:"})})}),Object(a.jsx)("div",{className:"right down",children:Object(a.jsx)("ul",{className:"fillBox",id:"boxTotal"+t})})]})]})]})})),Object(a.jsxs)("div",{className:"donations",children:[Object(a.jsx)("img",{src:"Images/DonationBanner.jpeg",alt:"DonationBanner",id:"imageDonation"}),Object(a.jsx)("div",{className:"contentFull",children:Object(a.jsx)("div",{className:"challengesFull",children:Object(a.jsx)("ul",{children:t})})}),Object(a.jsx)(r.b,{to:"/",children:Object(a.jsxs)("div",{className:"lowBar",children:[Object(a.jsx)("h3",{className:"textBottom",children:"Donations"}),Object(a.jsx)("i",{className:"fas fa-chevron-up"})]})})]})}}]),n}(c.Component),I=(n(41),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{className:"banner",children:Object(a.jsxs)(r.b,{to:"/frontend/dailly",children:[Object(a.jsx)("img",{src:"Images/DaillyBanner.jpeg",alt:"DaillyBanner",className:"imageHome"}),Object(a.jsxs)("div",{className:"lowerBar",children:[Object(a.jsx)("h3",{className:"tempOne",children:"Daily Challenges"}),Object(a.jsx)("i",{className:"fas fa-chevron-down"})]})]})}),Object(a.jsx)("div",{className:"banner",children:Object(a.jsxs)(r.b,{to:"/my",children:[Object(a.jsx)("img",{src:"Images/MyBanner.jpeg",alt:"myBanner",className:"imageHome"}),Object(a.jsxs)("div",{className:"lowerBar",children:[Object(a.jsx)("h3",{className:"tempOne",children:"My Challenges"}),Object(a.jsx)("i",{className:"fas fa-chevron-down"})]})]})}),Object(a.jsx)("div",{className:"banner",children:Object(a.jsxs)(r.b,{to:"/all",children:[Object(a.jsx)("img",{src:"Images/AllBanner.png",alt:"AllBanner",className:"imageHome"}),Object(a.jsxs)("div",{className:"lowerBar",children:[Object(a.jsx)("h3",{className:"tempOne",children:"All Challenges"}),Object(a.jsx)("i",{className:"fas fa-chevron-down"})]})]})}),Object(a.jsx)("div",{className:"banner Donations",children:Object(a.jsxs)(r.b,{to:"/donations",children:[Object(a.jsx)("img",{src:"Images/DonationBanner.jpeg",alt:"DonationBanner",className:"imageHome"}),Object(a.jsxs)("div",{className:"lowerBar",children:[Object(a.jsx)("h3",{className:"tempOne",children:"Donations"}),Object(a.jsx)("i",{className:"fas fa-chevron-down"})]})]})})]})}}]),n}(c.Component)),L=(n(42),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"discover",children:Object(a.jsx)("div",{class:"tcontainer",children:Object(a.jsx)("div",{class:"ticker-wrap",children:Object(a.jsx)("div",{class:"ticker-move",children:Object(a.jsx)("div",{class:"ticker-item",children:"Coming soon!"})})})})})}}]),n}(c.Component)),F=(n(43),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"following",children:Object(a.jsx)("div",{class:"tcontainer",children:Object(a.jsx)("div",{class:"ticker-wrap",children:Object(a.jsx)("div",{class:"ticker-move",children:Object(a.jsx)("div",{class:"ticker-item",children:"Coming soon!"})})})})})}}]),n}(c.Component)),T=(n(44),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"profile",children:Object(a.jsx)("h1",{children:"Profile"})})}}]),n}(c.Component)),A=(n(45),function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"new",children:Object(a.jsx)("h1",{children:"New"})})}}]),n}(c.Component));var P=function(){return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{path:"/frontend",exact:!0,component:I}),Object(a.jsx)(o.a,{path:"/discover",exact:!0,component:L})," ",Object(a.jsx)(o.a,{path:"/following",exact:!0,component:F})," ",Object(a.jsx)(o.a,{path:"/profile",exact:!0,component:T})," ",Object(a.jsx)(o.a,{path:"/new",exact:!0,component:A}),Object(a.jsx)(o.a,{path:"/frontend/dailly",exact:!0,component:f}),Object(a.jsx)(o.a,{path:"/all",exact:!0,component:y}),Object(a.jsx)(o.a,{path:"/my",exact:!0,component:E}),Object(a.jsx)(o.a,{path:"/donations",exact:!0,component:S})]}),Object(a.jsx)(d,{className:"bar Bottom"})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),s(e),l(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),H()}},[[46,1,2]]]);
//# sourceMappingURL=main.580dcfef.chunk.js.map