(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{75:function(e,a,t){e.exports=t(85)},85:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(70),r=t.n(c),m=t(23),i=t(2),o=t(49),s=t(74),d=t(18),u=function(e,a){switch(a.type){case"REMOVE_EMPLOYEE":return Object(d.a)(Object(d.a)({},e),{},{employees:e.employees.filter((function(e){return e.id!==a.payload}))});case"ADD_EMPLOYEES":return Object(d.a)(Object(d.a)({},e),{},{employees:[].concat(Object(s.a)(e.employees),[a.payload])});case"EDIT_EMPLOYEE":var t=a.payload,n=e.employees.map((function(e){return e.id===t.id?t:e}));return Object(d.a)(Object(d.a)({},e),{},{employees:n});default:return e}},E={employees:[{id:1,name:"Sathish",location:"Madurai",designation:"API Dev"},{id:2,name:"Saro",location:"Coimbatore",designation:"UI Dev"},{id:3,name:"Thiru",location:"Ramnad",designation:"DevOps"}]},p=Object(n.createContext)(E),b=function(e){var a=e.children,t=Object(n.useReducer)(u,E),c=Object(o.a)(t,2),r=c[0],m=c[1];return l.a.createElement(p.Provider,{value:{employees:r.employees,removeEmployee:function(e){m({type:"REMOVE_EMPLOYEE",payload:e})},addEmployee:function(e){m({type:"ADD_EMPLOYEES",payload:e})},editEmployee:function(e){m({type:"EDIT_EMPLOYEE",payload:e})}}},a)},v=function(){var e=Object(n.useContext)(p),a=e.employees,t=e.removeEmployee,c=e.editEmployee;return l.a.createElement(n.Fragment,null,l.a.createElement("ul",{class:"nav justify-content-end"},l.a.createElement("li",{class:"nav-item"},l.a.createElement(m.b,{to:"/add"},"Create"))),a.length>0?l.a.createElement(n.Fragment,null,l.a.createElement("ul",{class:"list-group list-group-flush"},a.map((function(e){return l.a.createElement("div",{className:"list-group-item",key:e.id},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},e.name),l.a.createElement("small",null,l.a.createElement("div",{class:"btn-group",role:"group","aria-label":"Basic example"},l.a.createElement(m.b,{to:"/edit/".concat(e.id)},l.a.createElement("button",{type:"button",class:"btn btn-outline-secondary"},l.a.createElement("i",{class:"far fa-edit",onClick:function(){return c(e.id)}}))),l.a.createElement("button",{type:"button",class:"btn btn-outline-secondary"},l.a.createElement("i",{class:"far fa-trash-alt",onClick:function(){return t(e.id)}}))))),l.a.createElement("small",null,e.designation))})))):l.a.createElement("p",{className:"text-center"},"No data"))},f=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{href:"/",className:"navbar-brand d-flex align-items-center"},"React CRUD"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/",className:"nav-link active"},"Employees")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"/",className:"nav-link active"},"Departments"))))),l.a.createElement("ul",{className:"navbar-nav ml-sm-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link active",href:"https://github.com/twbs",rel:"noopener noreferrer",target:"_blank","aria-label":"GitHub"},l.a.createElement("i",{className:"fas fa-power-off"}))))),l.a.createElement("div",{className:"container-fluid mt-3 vh-100 pb-5"},l.a.createElement("section",{className:"row mt-5 p-2 min-vh-100"},l.a.createElement("div",{className:"col"},"Welcome to CRUD",l.a.createElement(v,null)))))},y=t(22),g=t(50);function N(e){var a=e.history,t=e.match.params.id,c=!t,r=Object(n.useContext)(p),i=r.addEmployee,s=r.employees,u=r.editEmployee,E=Object(n.useState)({}),b=Object(o.a)(E,2),v=b[0],f=b[1],N=Object(n.useState)(!1),h=Object(o.a)(N,2),O=h[0],j=h[1],x=g.a().shape({name:g.b().required("Name is required"),location:g.b().required("Location is required"),designation:g.b().required("Designation is required")});return Object(n.useEffect)((function(){if(!c){var e=s.find((function(e){return e.id===parseInt(t)}));f(e)}j(!0)}),[O,s,t,c]),O&&l.a.createElement(y.d,{initialValues:c?{name:"",location:"",designation:""}:v,validationSchema:x,onSubmit:function(e,t){var n=t.setStatus,l=t.setSubmitting;n(),c?function(e,t){i(Object(d.a)(Object(d.a)({},e),{},{id:s.length+1})),t(!0),a.push(".")}(e,l):function(e,t){u(e),t(!0),a.push("..")}(e,l)}},(function(e){var a=e.errors,t=e.touched,n=e.isSubmitting;return l.a.createElement(y.c,{className:"p-4"},l.a.createElement("h1",null,c?"Add employee":"Edit employee"),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Name"),l.a.createElement(y.b,{name:"name",type:"text",className:"form-control"+(a.name&&t.name?" is-invalid":"")}),l.a.createElement(y.a,{name:"name",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Location"),l.a.createElement(y.b,{name:"location",type:"text",className:"form-control"+(a.location&&t.location?" is-invalid":"")}),l.a.createElement(y.a,{name:"location",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-row pb-3"},l.a.createElement("div",{className:"form-group col-7"},l.a.createElement("label",null,"Designation"),l.a.createElement(y.b,{name:"designation",type:"text",className:"form-control"+(a.designation&&t.designation?" is-invalid":"")}),l.a.createElement(y.a,{name:"designation",component:"div",className:"invalid-feedback"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",disabled:n,className:"btn btn-primary"},n&&l.a.createElement("span",{className:"spinner-border spinner-border-sm mr-1"}),"Save"),l.a.createElement(m.b,{to:"/",className:"btn btn-link"},"Cancel")))}))}var h=function(){return l.a.createElement(b,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",component:f,exact:!0}),l.a.createElement(i.a,{path:"/add",component:N,exact:!0}),l.a.createElement(i.a,{path:"/edit/:id",component:N,exact:!0})))};r.a.render(l.a.createElement(m.a,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.bfd2eb22.chunk.js.map