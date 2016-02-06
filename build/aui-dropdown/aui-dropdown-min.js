YUI.add("aui-dropdown",function(e,t){e.Dropdown=e.Base.create("dropdown",e.Widget,[e.WidgetCssClass,e.WidgetToggle,e.WidgetStack,e.WidgetTrigger],{CONTENT_TEMPLATE:'<div><ul class="dropdown-menu"/></div>',_hideOnEscHandle:null,_hideOnClickOutsideHandle:null,_toggleContentOnKeypress:null,initializer:function(){this._uiSetHideOnClickOutside(this.get("hideOnClickOutSide")),this._uiSetHideOnEsc(this.get("hideOnEsc")),this._uiSetOpen(this.get("open"))},bindUI:function(){this.after({hideOnClickOutSideChange:this._afterHideOnClickOutsideChange,hideOnEscChange:this._afterHideOnEscChange,openChange:this._afterOpenChange,triggerChange:this._afterDropdownTriggerChange}),this._dropdownUiSetTrigger(this.get("trigger"))},renderUI:function(){this._setAriaUI()},bringToTop:function(){e.Dropdown.Z_INDEX<0&&(e.Dropdown.Z_INDEX=this.get("zIndex")),this.set("zIndex",e.Dropdown.Z_INDEX++)},close:function(){this.set("open",!1)},open:function(){this.set("open",!0)},toggleContent:function(){var e=this.get("boundingBox");e.hasClass("open")?this.close():this.open()},_afterDropdownTriggerChange:function(e){e.prevVal&&this._toggleContentOnKeypress.detach(),this._dropdownUiSetTrigger(e.newVal)},_afterHideOnClickOutsideChange:function(e){this._uiSetHideOnClickOutside(e.newVal)},_afterHideOnEscChange:function(e){this._uiSetHideOnEsc(e.newVal)},_afterOpenChange:function(e){this._uiSetOpen(e.newVal)},_dropdownUiSetTrigger:function(t){t&&(this._toggleContentOnKeypress=t.on("key",e.bind(this._onDropdownKeyPressMenu,this),"press:13"))},_onClickOutside:function(e){e.target!==this.get("trigger")&&this.close()},_onEscKey:function(){this.close()},_onDropdownKeyPressMenu:function(e){this.toggleContent(),e.preventDefault()},_setAriaUI:function(){var e=this.get("boundingBox").one(".dropdown-menu"),t=this.get("trigger"),n=t&&t.generateID();t&&n&&e.setAttribute("aria-labelledby",n),e.setAttribute("role","menu")},_uiSetHideOnClickOutside:function(e){this._hideOnClickOutsideHandle&&this._hideOnClickOutsideHandle.detach(),e&&(this._hideOnClickOutsideHandle=this.get("boundingBox").on("clickoutside",this._onClickOutside,this))},_uiSetHideOnEsc:function(t){this._hideOnEscHandle&&this._hideOnEscHandle.detach(),t&&(this._hideOnEscHandle=e.one("doc").on("key",this._onEscKey,"esc",this))},_uiSetOpen:function(e){this.get("bringToTop")&&this.bringToTop(),this.get("boundingBox").toggleClass("open",e)}},{CSS_PREFIX:e.getClassName("dropdown"),ATTRS:{bringToTop:{validator:e.Lang.isBoolean,value:!0},hideOnEsc:{validator:e.Lang.isBoolean,value:!0},hideOnClickOutSide:{validator:e.Lang.isBoolean,value:!0},open:{validator:e.Lang.isBoolean,value:!1},triggerToggleEvent:{value:"click"},triggerToggleFn:{value:"toggleContent"}},Z_INDEX:-1})},"3.0.3-deprecated.14",{requires:["event-delegate","event-key","event-outside","node-focusmanager","widget","widget-stack","aui-classnamemanager","aui-node","aui-widget-cssclass","aui-widget-toggle","aui-widget-trigger"],skinnable:!0});
