(this["webpackJsonpemp-directory"]=this["webpackJsonpemp-directory"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://media.phillyvoice.com/media/images/11222017_Anthony_Green.2e16d0ba.fill-735x490.jpg","name":"Anthony Green","phone":"555-123-4568","email":"circaSurvive@sbcglobal.net","dob":"9/5/1985"},{"id":2,"image":"https://globalnews.ca/wp-content/uploads/2020/07/mark-hoppus-blink-182.jpg?quality=85&strip=all&w=1200","name":"Mark Hoppus","phone":"555-123-4488","email":"blink182@yahoo.com","dob":"9/5/1980"},{"id":3,"image":"https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg","name":"Harry Potter","phone":"555-123-4568","email":"muhscar@hogwarts.brit","dob":"9/5/1985"},{"id":4,"image":"https://assets.season-of-mist.com/wp-content/uploads/2020/03/Sarah_Longfield-01-Ken_Susi.jpg","name":"Sara Longfield","phone":"555-123-4768","email":"strandberg@guitar.com","dob":"9/5/1991"},{"id":5,"image":"https://pm1.narvii.com/7140/9c7f6b33315e70cdb3925fdaaae6d1a92a406668r1-900-900v2_00.jpg","name":"Stevie T","phone":"555-423-4568","email":"shhnare@gmail.com","dob":"9/5/1987"},{"id":6,"image":"https://www.biography.com/.image/t_share/MTE1ODA0OTcxODY1ODM1MDIx/paul-rudd-9542374-1-402.jpg","name":"Paul Rudd","phone":"555-123-4868","email":"antman@hill.com","dob":"9/5/1986"},{"id":7,"image":"https://d.newsweek.com/en/full/1060104/9-ettyimages-889566972.jpg?w=1600&h=1600&q=88&f=81d6c38e0debdd336b72c1b2b985449c","name":"Markiplier","phone":"555-723-4968","email":"gettingoverit@rage.com","dob":"6/5/1989"},{"id":8,"image":"https://uk.toluna.com//dpolls_images/2016/04/23/5bc72609-421c-4067-b66e-135d028b76b8.jpg","name":"Adel","phone":"555-621-9568","email":"adel@gmail.com","dob":"9/5/1990"},{"id":9,"image":"https://www.famousbirthdays.com/faces/case-andie-image.jpg","name":"Andie Case","phone":"555-653-8568","email":"selftaughtsinger@gmail.com","dob":"9/5/1998"},{"id":10,"image":"https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxNTkzNzk1MDg1/sean-connery-9255144-1-402.jpg","name":"Sean Connery","phone":"555-658-7568","email":"james@savingsbond.com","dob":"9/5/1985"},{"id":11,"image":"https://cms.qz.com/wp-content/uploads/2018/05/aragorn-lord-of-the-rings-e1526658193149.jpg?quality=75&strip=all&w=1200&h=900&crop=1","name":"Aragorn","phone":"555-702-8468","email":"heirofisildor@king.com","dob":"7/8/1914"}]')},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),o=t.n(l),c=t(1),i=t(2),m=t(3),s=t(4);t(14);var p=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",{className:"heading"},"Employee Directory"),r.a.createElement("p",{className:"intro"},"Click on carrots to filter by heading or use the search box to narrow your results."))},d=t(7),h=(t(15),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={search:""},e.handleInputChange=function(a){var t=a.target,n=t.name,r=t.value;e.setState(Object(d.a)({},n,r))},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,this.state.search),r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"searchBar",value:this.state.search,name:"search",onChange:this.handleInputChange,type:"text",placeholder:"Search"})))}}]),t}(n.Component));t(16);var u=function(e){return console.log(e),r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement("img",{className:"personImage",alt:e.name,src:e.img})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob)))))},g=t(8),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={employees:g,search:""},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement("thread",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),this.state.employees.map((function(e){return r.a.createElement(u,{id:e.id,img:e.image,name:e.name,phone:e.phone,email:e.email,dob:e.dob})}))))}}]),t}(n.Component);t(17);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.82883402.chunk.js.map