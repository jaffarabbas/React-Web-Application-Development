(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,e,s){},function(t,e,s){},,function(t,e,s){},function(t,e,s){},function(t,e,s){"use strict";s.r(e);var n=s(1),a=s.n(n),c=s(8),i=s.n(c),r=(s(13),s(2)),o=s(3),l=s(5),d=s(4),u=(s(6),s(14),s(0)),j=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).handleInputChange=function(t){n.setState({task:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),n.props.createTask(n.state.task),n.setState({task:""})},n.state={task:""},n}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)("input",{className:"create_input form-control",type:"text",value:this.state.task,placeholder:"Enter a Todo",onChange:this.handleInputChange,autoFocus:!0}),Object(u.jsx)("button",{className:"create_btn form-control btn",type:"submit",children:"Add"})]})}}]),s}(n.Component),h=(s(16),function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).setEditingState=function(t){n.setState({isEditing:t})},n.toggleTask=function(){n.props.toggleTask(n.props.id)},n.deleteTask=function(){n.props.deleteTask(n.props.id)},n.handleEditChange=function(t){n.setState({task:t.target.value})},n.handleSubmit=function(t){t.preventDefault(),n.props.editTask(n.props.id,n.state.task),n.setState({isEditing:!1})},n.state={task:n.props.taskItem.task,isEditing:!1},n}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(u.jsx)("tr",{children:this.state.isEditing?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{children:Object(u.jsx)("form",{onSubmit:this.handleSubmit,children:Object(u.jsx)("input",{className:"form-control",value:this.state.task,onChange:this.handleEditChange,autoFocus:!0})})}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{onClick:this.handleSubmit,type:"submit",children:"Save"}),Object(u.jsx)("button",{onClick:function(){return t.setEditingState(!1)},children:"back"})]})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("td",{onClick:this.toggleTask,className:"list_row",children:[Object(u.jsx)("input",{type:"checkbox",readonly:!0,checked:this.props.taskItem.isCompleted}),Object(u.jsx)("span",{className:this.props.taskItem.isCompleted?"completeTask":"task_not_completed",children:this.props.taskItem.task})]}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{onClick:function(){return t.setEditingState(!0)},className:"btn btn-primary",children:"Edit"}),Object(u.jsx)("button",{onClick:this.deleteTask,className:"btn btn-danger",children:"Delete"})]})]})})}}]),s}(n.Component)),b=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){var t=this;return Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Task"}),Object(u.jsx)("th",{children:"Actions"})]})}),Object(u.jsx)("tbody",{children:this.props.tasks.map((function(e,s){return Object(u.jsx)(h,{taskItem:e,id:s,deleteTask:t.props.deleteTask,editTask:t.props.editTask,toggleTask:t.props.toggleTask},s)}))})]})}}]),s}(n.Component),p=(s(17),[]),k=function(t){Object(l.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).createTask=function(t){""!==t.trim()?(p.push({task:t,isCompleted:!1}),n.setState({tasks:p})):alert("Task can't be empty")},n.deleteTask=function(t){p.splice(t,1),n.setState({tasks:p})},n.editTask=function(t,e){p[t].task=e,n.setState({tasks:p})},n.toggleTask=function(t){var e=p[t];e.isCompleted=!e.isCompleted,n.setState({tasks:p})},n.state={tasks:[]},n}return Object(o.a)(s,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"row justify-content-md-center",children:Object(u.jsxs)("div",{className:"col-auto col-sm-auto col-md-auto",children:[Object(u.jsx)("h1",{className:"text-center todo-header",children:"Todo App"}),Object(u.jsxs)("div",{className:"form_container",children:[Object(u.jsx)(j,{createTask:this.createTask}),Object(u.jsx)(b,{tasks:this.state.tasks,deleteTask:this.deleteTask,editTask:this.editTask,toggleTask:this.toggleTask})]})]})})})}}]),s}(n.Component),m=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(k,{})})},O=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,19)).then((function(e){var s=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;s(t),n(t),a(t),c(t),i(t)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),O()}],[[18,1,2]]]);
//# sourceMappingURL=main.77620d10.chunk.js.map