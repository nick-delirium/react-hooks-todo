(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(5),c=o.n(l),r=(o(4),o(12),function(e){var t=e.todo,o=e.index,n=e.completeTodo,l=e.removeTodo;return a.a.createElement("li",{className:t.isCompleted?"completed":""},a.a.createElement("div",{className:"view",style:{textDecoration:t.isCompleted?"line-through":""}},a.a.createElement("input",{checked:t.isCompleted||!1,type:"checkbox",className:"toggle",onChange:function(){return n(o)}}),a.a.createElement("label",null,t.text),t.isCompleted?a.a.createElement("button",{className:"destroy",onClick:function(){return l(o)}}):null))}),i=o(1);var m=function(e){var t=e.addTodo,o=e.completeAll,l=Object(n.useState)(""),c=Object(i.a)(l,2),r=c[0],m=c[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),m(""))}},a.a.createElement("input",{onChange:o,className:"toggle-all",id:"toggle-all",type:"checkbox",name:"toggle"}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement("input",{type:"text",className:"new-todo",value:r,onChange:function(e){return m(e.target.value)},placeholder:"Task..."}))},d=function(e){var t=e.todos,o=e.clearCompleted;return 0===t.length?null:a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},t.length," items left"),t.filter(function(e){return e.isCompleted}).length>0?a.a.createElement("button",{className:"clear-completed",onClick:o},"Clear completed (",t.filter(function(e){return e.isCompleted}).length,")"):null)},s=o(2),u=[{text:"Look at this beauty",isCompleted:!0},{text:"Read the code",isCompleted:!1},{text:"Contact author",isCompleted:!1},{text:"Write feedback",isCompleted:!1}],p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=JSON.parse(window.localStorage.getItem("elmTodos"))||e,o=Object(n.useState)(t),a=Object(i.a)(o,2),l=a[0],c=a[1];return Object(n.useEffect)(function(){window.localStorage.setItem("elmTodos",JSON.stringify(l))}),{todos:l,addTodo:function(e){var t=Object(s.a)(l).concat([{text:e,isCompleted:!1}]);c(t)},completeTodo:function(e){var t=Object(s.a)(l);t[e].isCompleted=!t[e].isCompleted,c(t)},removeTodo:function(e){var t=Object(s.a)(l);t.splice(e,1),c(t)},clearCompleted:function(){var e=l.filter(function(e){return!1===e.isCompleted});c(e)},completeAll:function(){var e=l.map(function(e){return!1===e.isCompleted&&(e.isCompleted=!e.isCompleted),e});c(e)}}},f=function(){var e=p(),t=e.todos,o=e.addTodo,n=e.completeTodo,l=e.removeTodo,c=e.clearCompleted,i=e.completeAll;return a.a.createElement("div",{className:"todoapp"},a.a.createElement("div",{className:""},a.a.createElement(m,{addTodo:o,completeAll:i}),a.a.createElement("ul",{className:"todo-list"},t.map(function(e,t){return a.a.createElement(r,{key:t,index:t,todo:e,completeTodo:n,removeTodo:l})})),a.a.createElement(d,{todos:t,clearCompleted:c})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,o){},6:function(e,t,o){e.exports=o(14)}},[[6,2,1]]]);
//# sourceMappingURL=main.7b1c1dcb.chunk.js.map