(this["webpackJsonpreact-automationstudio"]=this["webpackJsonpreact-automationstudio"]||[]).push([[22],{102:function(e,t,a){"use strict";var s=a(11),n=a(3),o=a.n(n),i=a(1),r=a.n(i),l=(a(40),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),c=e=>{var t,a=e.tag,n=e.className,i=e.type,c=Object(s.a)(e,["tag","className","type"]),d=o()({[i]:!!i},n);return t=a||(!a&&l[i]?l[i]:"p"),r.a.createElement(t,Object.assign({},c,{className:d}))};c.defaultProps={type:"p"},t.a=c},103:function(e,t,a){"use strict";var s=a(11),n=a(1),o=a.n(n),i=(a(40),a(15)),r=a(598),l=a(599),c=a(102),d=i.a.create("page"),u=e=>{var t=e.title,a=e.breadcrumbs,n=e.tag,i=e.className,u=e.children,m=Object(s.a)(e,["title","breadcrumbs","tag","className","children"]),p=d.b("px-3",i);return o.a.createElement(n,Object.assign({className:p},m),o.a.createElement("div",{className:d.e("header")},t&&"string"===typeof t?o.a.createElement(c.a,{type:"h1",className:d.e("title")},t):t,a&&o.a.createElement(r.a,{className:d.e("breadcrumb")},o.a.createElement(l.a,null,"Home"),a.length&&a.map(({name:e,active:t},a)=>o.a.createElement(l.a,{key:a,active:t},e)))),u)};u.defaultProps={tag:"div",title:""},t.a=u},104:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(18),i=a(1),r=a.n(i),l=a(0),c=a.n(l),d=a(3),u=a.n(d),m=a(19),p=a(2),h=Object(o.a)({},m.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:p.m,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(o.a)({},m.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:p.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,a=e.baseClass,o=e.baseClassActive,i=e.className,l=e.cssModule,c=e.children,d=e.innerRef,h=Object(n.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(p.k)(h,p.a),g=Object(p.j)(h,p.a);return r.a.createElement(m.Transition,b,(function(e){var n="entered"===e,m=Object(p.i)(u()(i,a,n&&o),l);return r.a.createElement(t,Object(s.a)({className:m},g,{ref:d}),c)}))}g.propTypes=h,g.defaultProps=b,t.a=g},120:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),r=a(0),l=a.n(r),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,wrapTag:u.m,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(e){var t,a=e.className,o=e.cssModule,r=e.children,l=e.toggle,c=e.tag,m=e.wrapTag,p=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(n.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(u.i)(d()(a,"modal-header"),o);if(!b&&l){var N="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:l,className:Object(u.i)("close",o),"aria-label":p},i.a.createElement("span",{"aria-hidden":"true"},N))}return i.a.createElement(m,Object(s.a)({},g,{className:f}),i.a.createElement(c,{className:Object(u.i)("modal-title",o)},r),b||t)};p.propTypes=m,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p},121:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),r=a(0),l=a.n(r),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.i)(d()(t,"modal-body"),a);return i.a.createElement(o,Object(s.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},123:function(e,t,a){"use strict";var s=a(18),n=a(4),o=a(10),i=a(7),r=a(1),l=a.n(r),c=a(0),d=a.n(c),u=a(3),m=a.n(u),p=a(14),h=a.n(p),b=a(2),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);f.propTypes=g;var N=f,S=a(104);function v(){}var O=d.a.shape(S.a.propTypes),T={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:O,modalTransition:O,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},C=Object.keys(T),E={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:b.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.c.Fade}},w=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(i.a)(Object(i.a)(a))),a.handleEscape=a.handleEscape.bind(Object(i.a)(Object(i.a)(a))),a.handleTab=a.handleTab.bind(Object(i.a)(Object(i.a)(a))),a.onOpened=a.onOpened.bind(Object(i.a)(Object(i.a)(a))),a.onClosed=a.onClosed.bind(Object(i.a)(Object(i.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.g.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,s=this.getFocusedChild(),n=0,o=0;o<a;o+=1)if(t[o]===s){n=o;break}e.shiftKey&&0===n?(e.preventDefault(),t[a-1].focus()):e.shiftKey||n!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(b.h)(),Object(b.e)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=m()(document.body.className,Object(b.i)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(b.i)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(b.l)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.j)(this.props,C);return l.a.createElement("div",Object(n.a)({},a,{className:Object(b.i)(m()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(b.i)(m()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,o=e.backdropClassName,i=e.cssModule,r=e.isOpen,c=e.backdrop,d=e.role,u=e.labelledBy,p=e.external,h=e.innerRef,g={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:d,tabIndex:"-1"},f=this.props.fade,v=Object(s.a)({},S.a.defaultProps,this.props.modalTransition,{baseClass:f?this.props.modalTransition.baseClass:"",timeout:f?this.props.modalTransition.timeout:0}),O=Object(s.a)({},S.a.defaultProps,this.props.backdropTransition,{baseClass:f?this.props.backdropTransition.baseClass:"",timeout:f?this.props.backdropTransition.timeout:0}),T=c&&(f?l.a.createElement(S.a,Object(n.a)({},O,{in:r&&!!c,cssModule:i,className:Object(b.i)(m()("modal-backdrop",o),i)})):l.a.createElement("div",{className:Object(b.i)(m()("modal-backdrop","show",o),i)}));return l.a.createElement(N,{node:this._element},l.a.createElement("div",{className:Object(b.i)(t)},l.a.createElement(S.a,Object(n.a)({},g,v,{in:r,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.i)(m()("modal",a),i),innerRef:h}),p,this.renderModalDialog()),T))}return null},t}(l.a.Component);w.propTypes=T,w.defaultProps=E,w.openCount=0;t.a=w},129:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),r=a(0),l=a.n(r),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.i)(d()(t,"modal-footer"),a);return i.a.createElement(o,Object(s.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},207:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),r=a(0),l=a.n(r),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,r=e.tag,l=Object(n.a)(e,["className","cssModule","innerRef","tag"]),c=Object(u.i)(d()(t,"card-body"),a);return i.a.createElement(r,Object(s.a)({},l,{className:c,ref:o}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},210:function(e,t,a){"use strict";var s=a(4),n=a(5),o=a(1),i=a.n(o),r=a(0),l=a.n(r),c=a(3),d=a.n(c),u=a(2),m={tag:u.m,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.i)(d()(t,"card-header"),a);return i.a.createElement(o,Object(s.a)({},r,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},603:function(e,t,a){"use strict";a.r(t);var s=a(111),n=a.n(s),o=a(112),i=a(103),r=a(1),l=a.n(r),c=a(94),d=a(95),u=a(96),m=a(210),p=a(207),h=a(82),b=a(83),g=a(84),f=a(85),N=a(86),S=a(123),v=a(120),O=a(121),T=a(129),C=a(113),E=a.n(C),w=(a(114),window.ENV.APIURL);function y({options:e}){return Object.keys(e).map(t=>l.a.createElement("option",null,e[t]))}function M(e,t){var a=[];Object.keys(e).map(t=>a.push(e[t]));for(var s=0;s<a.length;s++)if(a[s].trim().toLowerCase()===t.trim().toLowerCase())return!0;return!1}class j extends l.a.Component{constructor(e){var t;super(e),t=this,this.toggle=e=>()=>{if(!e)return this.setState({modal:!this.state.modal});this.setState({["modal_".concat(e)]:!this.state["modal_".concat(e)]})},this.state={ModuleModuleName:"",NewModuleName:"",allModuleName:[],ModuleName:"",TestID:[],TestCaseID:"",testCaseName:"",NewTestID:"",modal:!1,modalValidationText:"",newmoduleNameCheck:!1,existingModuleName:!1,testAttributeModuleNameCheck:!1,testAttributeTestIDcheck:!1,testAttributeNewTestIDcheck:!1,testAttributeNewTestCaseName:!1,postResponceresult:[],loader:!0,pageloadingStatus:!1},function(){var e=Object(o.a)(n.a.mark((function e(){var a,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({pageloadingStatus:!0}),e.next=3,fetch(w+"testcase?moduleName=");case 3:return a=e.sent,e.next=6,a.json();case 6:s=e.sent,t.setState({allModuleName:s}),t.setState({loader:!1}),t.setState({pageloadingStatus:!1});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}SelectModule(e){this.setState({ModuleModuleName:e.target.value}),this.setState({existingModuleName:!1})}UpdateModuleName(e){this.setState({NewModuleName:e.target.value}),this.setState({newmoduleNameCheck:!1})}UpdateNewTestCaseID(e){this.setState({NewTestID:e.target.value}),this.setState({testAttributeNewTestIDcheck:!1})}UpdateNewTestCaseName(e){this.setState({testCaseName:e.target.value}),this.setState({testAttributeNewTestCaseName:!1})}updateModule(e){var t=this;this.setState({TestID:""}),this.setState({TestCaseID:""}),this.setState({NewTestID:""}),this.setState({testCaseName:""}),this.setState({ModuleName:e.target.value}),this.setState({loader:!0}),function(){var a=Object(o.a)(n.a.mark((function a(){var s,o;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({pageloadingStatus:!0}),a.next=3,fetch(w+"testcase?moduleName="+e.target.value);case 3:return s=a.sent,a.next=6,s.json();case 6:o=a.sent,t.setState({TestID:o}),t.setState({testAttributeModuleNameCheck:!1}),t.setState({loader:!1}),t.setState({pageloadingStatus:!1});case 11:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}updateTestID(e){var t=this;this.setState({TestCaseName:""}),this.setState({NewTestID:e.target.value}),this.setState({TestCaseID:e.target.value}),this.setState({loader:!0}),function(){var a=Object(o.a)(n.a.mark((function a(){var s,o;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({pageloadingStatus:!0}),a.next=3,fetch(w+"testcase?moduleName="+t.state.ModuleName+"&testid="+e.target.value);case 3:return s=a.sent,a.next=6,s.json();case 6:o=a.sent,t.setState({testCaseName:o.TestCaseName}),t.setState({testAttributeTestIDcheck:!1}),t.setState({testAttributeNewTestIDcheck:!1}),t.setState({testAttributeNewTestCaseName:!1}),t.setState({loader:!1}),t.setState({pageloadingStatus:!1});case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()()}SaveModuleName(){var e=this;this.setState({existingModuleName:!1}),this.setState({newmoduleNameCheck:!1}),this.setState({postResponceresult:""});var t=this.state.ModuleModuleName,a=this.state.NewModuleName,s="";if(""===t.trim()&&(this.setState({existingModuleName:!0}),s+="Module name can not be left blank."),""===a.trim()&&(this.setState({newmoduleNameCheck:!0}),s+="New Module name can not be left blank."),""!==s.trim())return this.setState({modal:!0}),this.setState({modalValidationText:s});if(M(this.state.allModuleName,a))return this.setState({modal:!0}),this.setState({newmoduleNameCheck:!0}),this.setState({modalValidationText:"New Module name is already exist."});this.setState({loader:!0}),this.setState({pageloadingStatus:!0});var i={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:JSON.stringify({newModuleName:a})};(function(){var s=Object(o.a)(n.a.mark((function s(){var r,l;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(w+"testcase?ExistingModuleName="+t,i);case 2:return r=s.sent,s.next=5,r.json();case 5:if(l=s.sent,e.setState({postResponceresult:l}),!l.success){s.next=12;break}(function(){var s=Object(o.a)(n.a.mark((function s(){var r,l;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch(w+"testcase?moduleName=");case 2:return r=s.sent,s.next=5,r.json();case 5:l=s.sent,e.setState({allModuleName:l}),e.setState({ModuleModuleName:""}),e.setState({NewModuleName:""}),function(){var s=Object(o.a)(n.a.mark((function s(){var o,r,l,c;return n.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return(o={}).oldModuleName=t,o.NewModuleName=a,r=JSON.stringify(o),i={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:r},s.next=7,fetch(w+"cicd?oldModuleName="+t+"&NewModuleName="+a,i);case 7:return l=s.sent,s.next=10,l.json();case 10:if(c=s.sent,e.setState({loader:!1}),e.setState({pageloadingStatus:!1}),e.setState({modal:!0}),!c.success){s.next=18;break}return s.abrupt("return",e.setState({modalValidationText:e.state.postResponceresult.servermessage}));case 18:return s.abrupt("return",e.setState({modalValidationText:c.servermessage}));case 19:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}()();case 11:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()(),s.next=16;break;case 12:return e.setState({pageloadingStatus:!1}),e.setState({loader:!1}),e.setState({modal:!0}),s.abrupt("return",e.setState({modalValidationText:"ISSUE:"+e.state.postResponceresult.servermessage}));case 16:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}})()()}SaveTestAttribute(){var e=this,t="",a=this.state.ModuleName,s=this.state.TestCaseID,i=this.state.NewTestID,r=this.state.testCaseName;if(""===a.trim()&&(this.setState({testAttributeModuleNameCheck:!0}),t+="Module* can not be left blank."),""===s.trim()&&(this.setState({testAttributeTestIDcheck:!0}),t+="TestID* can not be left blank."),""===i.trim()&&(this.setState({testAttributeNewTestIDcheck:!0}),t+="New TestID* can not be left blank."),""===r.trim()&&(this.setState({testAttributeNewTestCaseName:!0}),t+="New Test Case Name* can not be left blank."),""!==t.trim())return this.setState({modal:!0}),this.setState({modalValidationText:t});if(s!==i&&M(this.state.TestID,i))return this.setState({modal:!0}),this.setState({testAttributeNewTestIDcheck:!0}),this.setState({modalValidationText:"New TestID* is already exist."});this.setState({loader:!0});var l={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:JSON.stringify({newTestID:i,newTestCaseName:r})};(function(){var t=Object(o.a)(n.a.mark((function t(){var c,d;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({pageloadingStatus:!0}),t.next=3,fetch(w+"testcase?ExistingModuleName="+a+"&existingTestID="+s,l);case 3:return c=t.sent,t.next=6,c.json();case 6:if(!(d=t.sent).success){t.next=16;break}e.setState({ModuleName:""}),e.setState({TestCaseID:""}),e.setState({NewTestID:""}),e.setState({testCaseName:""}),function(){var t=Object(o.a)(n.a.mark((function t(){var o,c,u,m;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o={}).modulename=a,o.testid=s,o.newtestid=i,o.newtestcaseName=r,c=JSON.stringify(o),l={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:c},t.next=9,fetch(w+"cicd?modulename="+a+"&testid="+s+"&newtestid="+i+"&newtestcaseName="+r,l);case 9:return u=t.sent,t.next=12,u.json();case 12:if(m=t.sent,e.setState({loader:!1}),e.setState({pageloadingStatus:!1}),!m.success){t.next=20;break}return e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:d.servermessage}));case 20:return e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:"ISSUE: "+m.servermessage}));case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),t.next=20;break;case 16:return e.setState({loader:!1}),e.setState({pageloadingStatus:!1}),e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:"ISSUE: "+d.servermessage}));case 20:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}render(){var e=this.state,t=e.allModuleName,a=e.TestID;return l.a.createElement(i.a,{title:"Test Attribute",breadcrumbs:[{name:"Test Attribute",active:!0}]},l.a.createElement(E.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),l.a.createElement(c.a,null,l.a.createElement(d.a,{lg:6,md:6,sm:6,xs:12},l.a.createElement(u.a,null,l.a.createElement(m.a,null,"Update Module Name"),l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{col:!0},l.a.createElement(g.a,{for:"exampleSelect",sm:6},"Module*"),l.a.createElement(d.a,null,l.a.createElement(f.a,{disabled:this.state.pageloadingStatus,invalid:this.state.existingModuleName,type:"select",name:"module",value:this.state.ModuleModuleName,onChange:this.SelectModule.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.ModuleModuleName),l.a.createElement(y,{options:t})))),l.a.createElement(b.a,{col:!0},l.a.createElement(g.a,{for:"exampleSelect",sm:6},"New Module Name*"),l.a.createElement(d.a,null,l.a.createElement(f.a,{disabled:this.state.pageloadingStatus,invalid:this.state.newmoduleNameCheck,type:"input",name:"newmoduleName",placeholder:"enter new module name",value:this.state.NewModuleName,onChange:this.UpdateModuleName.bind(this)}))),l.a.createElement(b.a,{col:!0},l.a.createElement(d.a,null,l.a.createElement(N.a,{disabled:this.state.pageloadingStatus,onClick:this.SaveModuleName.bind(this),color:"primary"},"Update Module Name"),l.a.createElement(S.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},l.a.createElement(v.a,{toggle:this.toggle()}," Information"),l.a.createElement(O.a,null,this.state.modalValidationText),l.a.createElement(T.a,null,l.a.createElement(N.a,{color:"secondary",onClick:this.toggle()},"OK"))))))))),l.a.createElement(d.a,{lg:6,md:6,sm:6,xs:12},l.a.createElement(u.a,null,l.a.createElement(m.a,null,"Update TestID/Test Case Name"),l.a.createElement(p.a,null,l.a.createElement(h.a,null,l.a.createElement(b.a,{col:!0},l.a.createElement(g.a,{for:"exampleSelect",sm:6},"Module*"),l.a.createElement(d.a,null,l.a.createElement(f.a,{disabled:this.state.pageloadingStatus,invalid:this.state.testAttributeModuleNameCheck,type:"select",name:"moduleforTestUpdate",value:this.state.ModuleName,onChange:this.updateModule.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.ModuleName),l.a.createElement(y,{options:t})))),l.a.createElement(b.a,{col:!0},l.a.createElement(g.a,{for:"exampleSelect",sm:6},"TestID*"),l.a.createElement(d.a,null,l.a.createElement(f.a,{disabled:this.state.pageloadingStatus,invalid:this.state.testAttributeTestIDcheck,type:"select",name:"testID",value:this.state.TestCaseID,onChange:this.updateTestID.bind(this)},l.a.createElement("option",{selected:"selected"},this.state.TestCaseID),l.a.createElement(y,{options:a})))),l.a.createElement(b.a,{col:!0},l.a.createElement(g.a,{for:"exampleSelect",sm:6},"New TestID*"),l.a.createElement(d.a,null,l.a.createElement(f.a,{disabled:this.state.pageloadingStatus,type:"input",invalid:this.state.testAttributeNewTestIDcheck,name:"newtestcaseid",placeholder:"enter new test case ID",value:this.state.NewTestID,onChange:this.UpdateNewTestCaseID.bind(this)}))),l.a.createElement(b.a,{col:!0},l.a.createElement(g.a,{for:"exampleSelect",sm:6},"New Test Case Name*"),l.a.createElement(d.a,null,l.a.createElement(f.a,{disabled:this.state.pageloadingStatus,type:"input",invalid:this.state.testAttributeNewTestCaseName,name:"testcasename",placeholder:"enter new test case name",value:this.state.testCaseName,onChange:this.UpdateNewTestCaseName.bind(this)}))),l.a.createElement(b.a,{col:!0},l.a.createElement(d.a,null,l.a.createElement(N.a,{disabled:this.state.pageloadingStatus,onClick:this.SaveTestAttribute.bind(this),color:"primary"},"Update Test Attribute")))))))))}}t.default=j}}]);
//# sourceMappingURL=22.e9b7a5d5.chunk.js.map