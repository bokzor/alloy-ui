YUI.add("aui-button-search-cancel",function(e,t){var n=e.Lang,r=e.Array,i=e.one(e.config.doc),s=e.Base.create("btn-search-cancel",e.Base,[],{TEMPLATE:'<div class="'+e.getClassName("btn-search-cancel")+'" style="padding: 5px; position: absolute; z-index: {zIndex};">'+'<i class="{iconClass}"></i>'+"</div>",_buttons:null,_eventHandles:null,initializer:function(){var e=this;e._buttons=[],e.bindUI()},destroy:function(){var t=this;r.each(t._buttons,function(e){e.getData("btn-search-cancel").clearData("btn-search-cancel"),e.remove()}),(new e.EventHandle(t._eventHandles)).detach()},bindUI:function(){var t=this,n=t.get("container"),r=t.get("trigger");t._eventHandles=[n.delegate(["focus","input"],e.debounce(t._onUserInteraction,50,t),r),n.delegate("blur",e.debounce(t._onBlur,25,t),r),e.on("windowresize",e.bind(t._onWindowResize,t))]},getButtonForElement:function(t){var n=this,r=t.getData("btn-search-cancel");return r||(r=e.Node.create(e.Lang.sub(n.TEMPLATE,{iconClass:n.get("iconClass"),zIndex:n.get("zIndex")})),n._buttons.push(r.hide()),r.setData("btn-search-cancel",t),t.setData("btn-search-cancel",r),r.on("gesturemovestart",e.rbind("_onButtonClick",n,t))),r},_onBlur:function(e){var t=this,n=t.getButtonForElement(e.target);n&&n.hide()},_onButtonClick:function(t,n){var r=this;r._syncButtonUI(n.val("")),e.soon(function(){n.focus()})},_onUserInteraction:function(e){var t=this;t._syncButtonUI(e.target)},_onWindowResize:function(){var e=this;r.each(e._buttons,function(t){t.hasClass("hide")||e._syncButtonUI(t.getData("btn-search-cancel"))})},_syncButtonUI:function(e){var t=this,r=t.getButtonForElement(e),i,s,o,u;if(!e.val()){r.hide();return}e.insert(r.show(),"before"),i=t.get("gutter"),u=e.get("region"),s=this.get("iconHeight"),n.isNumber(s)||(s=r.get("offsetHeight")),o=this.get("iconWidth"),n.isNumber(o)||(o=r.get("offsetWidth")),r.setXY([u.right-o+i[0],u.top+u.height/2-s/2+i[1]])}},{ATTRS:{container:{setter:e.one,value:i,writeOnce:!0},gutter:{value:[-5,0]},iconClass:{validator:n.isString,value:"glyphicon glyphicon-remove"},iconWidth:{value:24},iconHeight:{value:30},trigger:{validator:n.isString,writeOnce:!0},zIndex:{value:2,writeOnce:!0}}});e.ButtonSearchCancel=s},"3.0.3-deprecated.14",{requires:["array-invoke","base","base-build","event-focus","event-move","event-resize","node-screen","node-event-delegate","aui-node-base","aui-classnamemanager","aui-event-input"]});
