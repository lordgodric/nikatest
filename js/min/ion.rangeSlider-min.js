!function($,t,i,s,o){"use strict";var e=0,h=function(){var t=s.userAgent,i=/msie\s\d+/i,o;return t.search(i)>0&&(o=i.exec(t).toString(),o=o.split(" ")[1],9>o)?($("html").addClass("lt-ie9"),!0):!1}();Function.prototype.bind||(Function.prototype.bind=function _(t){var i=this,s=[].slice;if("function"!=typeof i)throw new TypeError;var o=s.call(arguments,1),e=function(){if(this instanceof e){var h=function(){};h.prototype=i.prototype;var r=new h,n=i.apply(r,o.concat(s.call(arguments)));return Object(n)===n?n:r}return i.apply(t,o.concat(s.call(arguments)))};return e}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t,i){var s;if(null==this)throw new TypeError('"this" is null or not defined');var o=Object(this),e=o.length>>>0;if(0===e)return-1;var h=+i||0;if(Math.abs(h)===1/0&&(h=0),h>=e)return-1;for(s=Math.max(h>=0?h:e-Math.abs(h),0);e>s;){if(s in o&&o[s]===t)return s;s++}return-1});var r='<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>',n='<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>',a='<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>',c='<span class="irs-disable-mask"></span>',l=function(s,o,e){this.VERSION="2.1.2",this.input=s,this.plugin_count=e,this.current_plugin=0,this.calc_count=0,this.update_tm=0,this.old_from=0,this.old_to=0,this.old_min_interval=null,this.raf_id=null,this.dragging=!1,this.force_redraw=!1,this.no_diapason=!1,this.is_key=!1,this.is_update=!1,this.is_start=!0,this.is_finish=!1,this.is_active=!1,this.is_resize=!1,this.is_click=!1,this.$cache={win:$(i),body:$(t.body),input:$(s),cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]},this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]},this.labels={w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var h=this.$cache.input,r=h.prop("value"),n,a,c;n={type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!1,keyboard_step:5,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" — ",input_values_separator:";",disable:!1,onStart:null,onChange:null,onFinish:null,onUpdate:null},a={type:h.data("type"),min:h.data("min"),max:h.data("max"),from:h.data("from"),to:h.data("to"),step:h.data("step"),min_interval:h.data("minInterval"),max_interval:h.data("maxInterval"),drag_interval:h.data("dragInterval"),values:h.data("values"),from_fixed:h.data("fromFixed"),from_min:h.data("fromMin"),from_max:h.data("fromMax"),from_shadow:h.data("fromShadow"),to_fixed:h.data("toFixed"),to_min:h.data("toMin"),to_max:h.data("toMax"),to_shadow:h.data("toShadow"),prettify_enabled:h.data("prettifyEnabled"),prettify_separator:h.data("prettifySeparator"),force_edges:h.data("forceEdges"),keyboard:h.data("keyboard"),keyboard_step:h.data("keyboardStep"),grid:h.data("grid"),grid_margin:h.data("gridMargin"),grid_num:h.data("gridNum"),grid_snap:h.data("gridSnap"),hide_min_max:h.data("hideMinMax"),hide_from_to:h.data("hideFromTo"),prefix:h.data("prefix"),postfix:h.data("postfix"),max_postfix:h.data("maxPostfix"),decorate_both:h.data("decorateBoth"),values_separator:h.data("valuesSeparator"),input_values_separator:h.data("inputValuesSeparator"),disable:h.data("disable")},a.values=a.values&&a.values.split(",");for(c in a)a.hasOwnProperty(c)&&(a[c]||0===a[c]||delete a[c]);r&&(r=r.split(a.input_values_separator||o.input_values_separator||";"),r[0]&&r[0]==+r[0]&&(r[0]=+r[0]),r[1]&&r[1]==+r[1]&&(r[1]=+r[1]),o&&o.values&&o.values.length?(n.from=r[0]&&o.values.indexOf(r[0]),n.to=r[1]&&o.values.indexOf(r[1])):(n.from=r[0]&&+r[0],n.to=r[1]&&+r[1])),$.extend(n,o),$.extend(n,a),this.options=n,this.validate(),this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null},this.init()};l.prototype={init:function(t){this.no_diapason=!1,this.coords.p_step=this.convertToPercent(this.options.step,!0),this.target="base",this.toggleInput(),this.append(),this.setMinMax(),t?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart()),this.updateScene()},append:function(){var t='<span class="irs js-irs-'+this.plugin_count+'"></span>';this.$cache.input.before(t),this.$cache.input.prop("readonly",!0),this.$cache.cont=this.$cache.input.prev(),this.result.slider=this.$cache.cont,this.$cache.cont.html(r),this.$cache.rs=this.$cache.cont.find(".irs"),this.$cache.min=this.$cache.cont.find(".irs-min"),this.$cache.max=this.$cache.cont.find(".irs-max"),this.$cache.from=this.$cache.cont.find(".irs-from"),this.$cache.to=this.$cache.cont.find(".irs-to"),this.$cache.single=this.$cache.cont.find(".irs-single"),this.$cache.bar=this.$cache.cont.find(".irs-bar"),this.$cache.line=this.$cache.cont.find(".irs-line"),this.$cache.grid=this.$cache.cont.find(".irs-grid"),"single"===this.options.type?(this.$cache.cont.append(n),this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append(a),this.$cache.s_from=this.$cache.cont.find(".from"),this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler()),this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none"),this.appendGrid(),this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.cont.removeClass("irs-disabled"),this.$cache.input[0].disabled=!1,this.bindEvents()),this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var t=this.options.min,i=this.options.max,s=this.options.from,o=this.options.to;s>t&&o===i?this.$cache.s_from.addClass("type_last"):i>o&&this.$cache.s_to.addClass("type_last")},changeLevel:function(t){switch(t){case"single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake);break;case"from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.$cache.s_from.addClass("state_hover"),this.$cache.s_from.addClass("type_last"),this.$cache.s_to.removeClass("type_last");break;case"to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake),this.$cache.s_to.addClass("state_hover"),this.$cache.s_to.addClass("type_last"),this.$cache.s_from.removeClass("type_last");break;case"both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append(c),this.$cache.cont.addClass("irs-disabled")},remove:function(){this.$cache.cont.remove(),this.$cache.cont=null,this.$cache.line.off("keydown.irs_"+this.plugin_count),this.$cache.body.off("touchmove.irs_"+this.plugin_count),this.$cache.body.off("mousemove.irs_"+this.plugin_count),this.$cache.win.off("touchend.irs_"+this.plugin_count),this.$cache.win.off("mouseup.irs_"+this.plugin_count),h&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count)),this.$cache.grid_labels=[],this.coords.big=[],this.coords.big_w=[],this.coords.big_p=[],this.coords.big_x=[],cancelAnimationFrame(this.raf_id)},bindEvents:function(){this.no_diapason||(this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.body.on("mousemove.irs_"+this.plugin_count,this.pointerMove.bind(this)),this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))),this.options.keyboard&&this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard")),h&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this))))},pointerMove:function(t){if(this.dragging){var i=t.pageX||t.originalEvent.touches&&t.originalEvent.touches[0].pageX;this.coords.x_pointer=i-this.coords.x_gap,this.calc()}},pointerUp:function(t){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,h&&$("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),($.contains(this.$cache.cont[0],t.target)||this.dragging)&&(this.is_finish=!0,this.callOnFinish()),this.dragging=!1)},pointerDown:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&("both"===t&&this.setTempMinInterval(),t||(t=this.target),this.current_plugin=this.plugin_count,this.target=t,this.is_active=!0,this.dragging=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=s-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(t),h&&$("*").prop("unselectable",!0),this.$cache.line.trigger("focus"),this.updateScene())},pointerClick:function(t,i){i.preventDefault();var s=i.pageX||i.originalEvent.touches&&i.originalEvent.touches[0].pageX;2!==i.button&&(this.current_plugin=this.plugin_count,this.target=t,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(s-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(t,i){if(!(this.current_plugin!==this.plugin_count||i.altKey||i.ctrlKey||i.shiftKey||i.metaKey)){switch(i.which){case 83:case 65:case 40:case 37:i.preventDefault(),this.moveByKey(!1);break;case 87:case 68:case 38:case 39:i.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(t){var i=this.coords.p_pointer;t?i+=this.options.keyboard_step:i-=this.options.keyboard_step,this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*i),this.is_key=!0,this.calc()},setMinMax:function(){if(this.options){if(this.options.hide_min_max)return this.$cache.min[0].style.display="none",void(this.$cache.max[0].style.display="none");this.options.values.length?(this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))):(this.$cache.min.html(this.decorate(this._prettify(this.options.min),this.options.min)),this.$cache.max.html(this.decorate(this._prettify(this.options.max),this.options.max))),this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)}},setTempMinInterval:function(){var t=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval),this.options.min_interval=t},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(t){if(this.options&&(this.calc_count++,(10===this.calc_count||t)&&(this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.calcHandlePercent()),this.coords.w_rs)){this.calcPointerPercent();var i=this.getHandleX();switch("click"===this.target&&(this.coords.p_gap=this.coords.p_handle/2,i=this.getHandleX(),this.options.drag_interval?this.target="both_one":this.target=this.chooseHandle(i)),this.target){case"base":var s=(this.options.max-this.options.min)/100,o=(this.result.from-this.options.min)/s,e=(this.result.to-this.options.min)/s;this.coords.p_single_real=this.toFixed(o),this.coords.p_from_real=this.toFixed(o),this.coords.p_to_real=this.toFixed(e),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real),this.target=null;break;case"single":if(this.options.from_fixed)break;this.coords.p_single_real=this.convertToRealPercent(i),this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real),this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max),this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);break;case"from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(i),this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real>this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case"to":if(this.options.to_fixed)break;this.coords.p_to_real=this.convertToRealPercent(i),this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both":if(this.options.from_fixed||this.options.to_fixed)break;i=this.toFixed(i+.1*this.coords.p_handle),this.coords.p_from_real=this.convertToRealPercent(i)-this.coords.p_gap_left,this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from"),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.convertToRealPercent(i)+this.coords.p_gap_right,this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to"),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case"both_one":if(this.options.from_fixed||this.options.to_fixed)break;var h=this.convertToRealPercent(i),r=this.result.from_percent,n=this.result.to_percent,a=n-r,c=a/2,l=h-c,_=h+c;0>l&&(l=0,_=l+a),_>100&&(_=100,l=_-a),this.coords.p_from_real=this.calcWithStep(l),this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max),this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real),this.coords.p_to_real=this.calcWithStep(_),this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max),this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,this.result.from=this.convertToValue(this.coords.p_single_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to])),this.calcMinMax(),this.calcLabels()}},calcPointerPercent:function(){return this.coords.w_rs?(this.coords.x_pointer<0||isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),void(this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100))):void(this.coords.p_pointer=0)},convertToRealPercent:function(t){var i=100-this.coords.p_handle;return t/i*100},convertToFakePercent:function(t){var i=100-this.coords.p_handle;return t/100*i},getHandleX:function(){var t=100-this.coords.p_handle,i=this.toFixed(this.coords.p_pointer-this.coords.p_gap);return 0>i?i=0:i>t&&(i=t),i},calcHandlePercent:function(){"single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(t){if("single"===this.options.type)return"single";var i=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2;return t>=i?this.options.to_fixed?"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake)):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=this.toFixed(this.labels.p_single_left),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake)))},updateScene:function(){this.raf_id&&(cancelAnimationFrame(this.raf_id),this.raf_id=null),clearTimeout(this.update_tm),this.update_tm=null,this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0),(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)&&(this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow()),this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)&&((this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||this.is_key)&&(this.drawLabels(),this.$cache.bar[0].style.left=this.coords.p_bar_x+"%",this.$cache.bar[0].style.width=this.coords.p_bar_w+"%","single"===this.options.type?(this.$cache.s_single[0].style.left=this.coords.p_single_fake+"%",this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%",this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%",(this.old_from!==this.result.from||this.force_redraw)&&(this.$cache.from[0].style.left=this.labels.p_from_left+"%"),(this.old_to!==this.result.to||this.force_redraw)&&(this.$cache.to[0].style.left=this.labels.p_to_left+"%"),this.$cache.single[0].style.left=this.labels.p_single_left+"%",this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",this.result.to)),this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||this.$cache.input.trigger("change"),this.old_from=this.result.from,this.old_to=this.result.to,this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange(),(this.is_key||this.is_click)&&(this.is_key=!1,this.is_click=!1,this.callOnFinish()),this.is_update=!1,this.is_resize=!1,this.is_finish=!1),this.is_start=!1,this.is_key=!1,this.is_click=!1,this.force_redraw=!1))},drawLabels:function(){if(this.options){var t=this.options.values.length,i=this.options.p_values,s,o,e;if(!this.options.hide_from_to)if("single"===this.options.type)t?(s=this.decorate(i[this.result.from]),this.$cache.single.html(s)):(s=this.decorate(this._prettify(this.result.from),this.result.from),this.$cache.single.html(s)),this.calcLabels(),this.labels.p_single_left<this.labels.p_min+1?this.$cache.min[0].style.visibility="hidden":this.$cache.min[0].style.visibility="visible",this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?this.$cache.max[0].style.visibility="hidden":this.$cache.max[0].style.visibility="visible";else{t?(this.options.decorate_both?(s=this.decorate(i[this.result.from]),s+=this.options.values_separator,s+=this.decorate(i[this.result.to])):s=this.decorate(i[this.result.from]+this.options.values_separator+i[this.result.to]),o=this.decorate(i[this.result.from]),e=this.decorate(i[this.result.to]),this.$cache.single.html(s),this.$cache.from.html(o),this.$cache.to.html(e)):(this.options.decorate_both?(s=this.decorate(this._prettify(this.result.from),this.result.from),s+=this.options.values_separator,s+=this.decorate(this._prettify(this.result.to),this.result.to)):s=this.decorate(this._prettify(this.result.from)+this.options.values_separator+this._prettify(this.result.to),this.result.to),o=this.decorate(this._prettify(this.result.from),this.result.from),e=this.decorate(this._prettify(this.result.to),this.result.to),this.$cache.single.html(s),this.$cache.from.html(o),this.$cache.to.html(e)),this.calcLabels();var h=Math.min(this.labels.p_single_left,this.labels.p_from_left),r=this.labels.p_single_left+this.labels.p_single_fake,n=this.labels.p_to_left+this.labels.p_to_fake,a=Math.max(r,n);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===this.target&&(this.$cache.to[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",a=n):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",a=Math.max(r,n))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden")}}},drawShadow:function(){var t=this.options,i=this.$cache,s="number"==typeof t.from_min&&!isNaN(t.from_min),o="number"==typeof t.from_max&&!isNaN(t.from_max),e="number"==typeof t.to_min&&!isNaN(t.to_min),h="number"==typeof t.to_max&&!isNaN(t.to_max),r,n,a,c;"single"===t.type?t.from_shadow&&(s||o)?(r=this.convertToPercent(s?t.from_min:t.min),n=this.convertToPercent(o?t.from_max:t.max)-r,r=this.toFixed(r-this.coords.p_handle/100*r),n=this.toFixed(n-this.coords.p_handle/100*n),r+=this.coords.p_handle/2,i.shad_single[0].style.display="block",i.shad_single[0].style.left=r+"%",i.shad_single[0].style.width=n+"%"):i.shad_single[0].style.display="none":(t.from_shadow&&(s||o)?(r=this.convertToPercent(s?t.from_min:t.min),n=this.convertToPercent(o?t.from_max:t.max)-r,r=this.toFixed(r-this.coords.p_handle/100*r),n=this.toFixed(n-this.coords.p_handle/100*n),r+=this.coords.p_handle/2,i.shad_from[0].style.display="block",i.shad_from[0].style.left=r+"%",i.shad_from[0].style.width=n+"%"):i.shad_from[0].style.display="none",t.to_shadow&&(e||h)?(a=this.convertToPercent(e?t.to_min:t.min),c=this.convertToPercent(h?t.to_max:t.max)-a,a=this.toFixed(a-this.coords.p_handle/100*a),c=this.toFixed(c-this.coords.p_handle/100*c),a+=this.coords.p_handle/2,i.shad_to[0].style.display="block",i.shad_to[0].style.left=a+"%",i.shad_to[0].style.width=c+"%"):i.shad_to[0].style.display="none")},callOnStart:function(){this.options.onStart&&"function"==typeof this.options.onStart&&this.options.onStart(this.result)},callOnChange:function(){this.options.onChange&&"function"==typeof this.options.onChange&&this.options.onChange(this.result)},callOnFinish:function(){this.options.onFinish&&"function"==typeof this.options.onFinish&&this.options.onFinish(this.result)},callOnUpdate:function(){this.options.onUpdate&&"function"==typeof this.options.onUpdate&&this.options.onUpdate(this.result)},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input")},convertToPercent:function(t,i){var s=this.options.max-this.options.min,o=s/100,e,h;return s?(e=i?t:t-this.options.min,h=e/o,this.toFixed(h)):(this.no_diapason=!0,0)},convertToValue:function(t){var i=this.options.min,s=this.options.max,o=i.toString().split(".")[1],e=s.toString().split(".")[1],h,r,n=0,a=0;if(0===t)return this.options.min;if(100===t)return this.options.max;o&&(h=o.length,n=h),e&&(r=e.length,n=r),h&&r&&(n=h>=r?h:r),0>i&&(a=Math.abs(i),i=+(i+a).toFixed(n),s=+(s+a).toFixed(n));var c=(s-i)/100*t+i,l=this.options.step.toString().split(".")[1],_;return l?c=+c.toFixed(l.length):(c/=this.options.step,c*=this.options.step,c=+c.toFixed(0)),a&&(c-=a),_=l?+c.toFixed(l.length):this.toFixed(c),_<this.options.min?_=this.options.min:_>this.options.max&&(_=this.options.max),_},calcWithStep:function(t){var i=Math.round(t/this.coords.p_step)*this.coords.p_step;return i>100&&(i=100),100===t&&(i=100),this.toFixed(i)},checkMinInterval:function(t,i,s){var o=this.options,e,h;return o.min_interval?(e=this.convertToValue(t),h=this.convertToValue(i),"from"===s?h-e<o.min_interval&&(e=h-o.min_interval):e-h<o.min_interval&&(e=h+o.min_interval),this.convertToPercent(e)):t},checkMaxInterval:function(t,i,s){var o=this.options,e,h;return o.max_interval?(e=this.convertToValue(t),h=this.convertToValue(i),"from"===s?h-e>o.max_interval&&(e=h-o.max_interval):e-h>o.max_interval&&(e=h+o.max_interval),this.convertToPercent(e)):t},checkDiapason:function(t,i,s){var o=this.convertToValue(t),e=this.options;return"number"!=typeof i&&(i=e.min),"number"!=typeof s&&(s=e.max),i>o&&(o=i),o>s&&(o=s),this.convertToPercent(o)},toFixed:function(t){return t=t.toFixed(9),+t},_prettify:function(t){return this.options.prettify_enabled?this.options.prettify&&"function"==typeof this.options.prettify?this.options.prettify(t):this.prettify(t):t;
},prettify:function(t){var i=t.toString();return i.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1"+this.options.prettify_separator)},checkEdges:function(t,i){return this.options.force_edges?(0>t?t=0:t>100-i&&(t=100-i),this.toFixed(t)):this.toFixed(t)},validate:function(){var t=this.options,i=this.result,s=t.values,o=s.length,e,h;if("string"==typeof t.min&&(t.min=+t.min),"string"==typeof t.max&&(t.max=+t.max),"string"==typeof t.from&&(t.from=+t.from),"string"==typeof t.to&&(t.to=+t.to),"string"==typeof t.step&&(t.step=+t.step),"string"==typeof t.from_min&&(t.from_min=+t.from_min),"string"==typeof t.from_max&&(t.from_max=+t.from_max),"string"==typeof t.to_min&&(t.to_min=+t.to_min),"string"==typeof t.to_max&&(t.to_max=+t.to_max),"string"==typeof t.keyboard_step&&(t.keyboard_step=+t.keyboard_step),"string"==typeof t.grid_num&&(t.grid_num=+t.grid_num),t.max<t.min&&(t.max=t.min),o)for(t.p_values=[],t.min=0,t.max=o-1,t.step=1,t.grid_num=t.max,t.grid_snap=!0,h=0;o>h;h++)e=+s[h],isNaN(e)?e=s[h]:(s[h]=e,e=this._prettify(e)),t.p_values.push(e);("number"!=typeof t.from||isNaN(t.from))&&(t.from=t.min),("number"!=typeof t.to||isNaN(t.from))&&(t.to=t.max),"single"===t.type?(t.from<t.min&&(t.from=t.min),t.from>t.max&&(t.from=t.max)):((t.from<t.min||t.from>t.max)&&(t.from=t.min),(t.to>t.max||t.to<t.min)&&(t.to=t.max),t.from>t.to&&(t.from=t.to)),("number"!=typeof t.step||isNaN(t.step)||!t.step||t.step<0)&&(t.step=1),("number"!=typeof t.keyboard_step||isNaN(t.keyboard_step)||!t.keyboard_step||t.keyboard_step<0)&&(t.keyboard_step=5),"number"==typeof t.from_min&&t.from<t.from_min&&(t.from=t.from_min),"number"==typeof t.from_max&&t.from>t.from_max&&(t.from=t.from_max),"number"==typeof t.to_min&&t.to<t.to_min&&(t.to=t.to_min),"number"==typeof t.to_max&&t.from>t.to_max&&(t.to=t.to_max),i&&(i.min!==t.min&&(i.min=t.min),i.max!==t.max&&(i.max=t.max),(i.from<i.min||i.from>i.max)&&(i.from=t.from),(i.to<i.min||i.to>i.max)&&(i.to=t.to)),("number"!=typeof t.min_interval||isNaN(t.min_interval)||!t.min_interval||t.min_interval<0)&&(t.min_interval=0),("number"!=typeof t.max_interval||isNaN(t.max_interval)||!t.max_interval||t.max_interval<0)&&(t.max_interval=0),t.min_interval&&t.min_interval>t.max-t.min&&(t.min_interval=t.max-t.min),t.max_interval&&t.max_interval>t.max-t.min&&(t.max_interval=t.max-t.min)},decorate:function(t,i){var s="",o=this.options;return o.prefix&&(s+=o.prefix),s+=t,o.max_postfix&&(o.values.length&&t===o.p_values[o.max]?(s+=o.max_postfix,o.postfix&&(s+=" ")):i===o.max&&(s+=o.max_postfix,o.postfix&&(s+=" "))),o.postfix&&(s+=o.postfix),s},updateFrom:function(){this.result.from=this.options.from,this.result.from_percent=this.convertToPercent(this.result.from),this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to,this.result.to_percent=this.convertToPercent(this.result.to),this.options.values&&(this.result.to_value=this.options.values[this.result.to])},updateResult:function(){this.result.min=this.options.min,this.result.max=this.options.max,this.updateFrom(),this.updateTo()},appendGrid:function(){if(this.options.grid){var t=this.options,i,s,o=t.max-t.min,e=t.grid_num,h=0,r=0,n=4,a,c,l=0,_,p="";for(this.calcGridMargin(),t.grid_snap?(e=o/t.step,h=this.toFixed(t.step/(o/100))):h=this.toFixed(100/e),e>4&&(n=3),e>7&&(n=2),e>14&&(n=1),e>28&&(n=0),i=0;e+1>i;i++){for(a=n,r=this.toFixed(h*i),r>100&&(r=100,a-=2,0>a&&(a=0)),this.coords.big[i]=r,c=(r-h*(i-1))/(a+1),s=1;a>=s&&0!==r;s++)l=this.toFixed(r-c*s),p+='<span class="irs-grid-pol small" style="left: '+l+'%"></span>';p+='<span class="irs-grid-pol" style="left: '+r+'%"></span>',_=this.convertToValue(r),_=t.values.length?t.p_values[_]:this._prettify(_),p+='<span class="irs-grid-text js-grid-text-'+i+'" style="left: '+r+'%">'+_+"</span>"}this.coords.big_num=Math.ceil(e+1),this.$cache.cont.addClass("irs-with-grid"),this.$cache.grid.html(p),this.cacheGridLabels()}},cacheGridLabels:function(){var t,i,s=this.coords.big_num;for(i=0;s>i;i++)t=this.$cache.grid.find(".js-grid-text-"+i),this.$cache.grid_labels.push(t);this.calcGridLabels()},calcGridLabels:function(){var t,i,s=[],o=[],e=this.coords.big_num;for(t=0;e>t;t++)this.coords.big_w[t]=this.$cache.grid_labels[t].outerWidth(!1),this.coords.big_p[t]=this.toFixed(this.coords.big_w[t]/this.coords.w_rs*100),this.coords.big_x[t]=this.toFixed(this.coords.big_p[t]/2),s[t]=this.toFixed(this.coords.big[t]-this.coords.big_x[t]),o[t]=this.toFixed(s[t]+this.coords.big_p[t]);for(this.options.force_edges&&(s[0]<-this.coords.grid_gap&&(s[0]=-this.coords.grid_gap,o[0]=this.toFixed(s[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),o[e-1]>100+this.coords.grid_gap&&(o[e-1]=100+this.coords.grid_gap,s[e-1]=this.toFixed(o[e-1]-this.coords.big_p[e-1]),this.coords.big_x[e-1]=this.toFixed(this.coords.big_p[e-1]-this.coords.grid_gap))),this.calcGridCollision(2,s,o),this.calcGridCollision(4,s,o),t=0;e>t;t++)i=this.$cache.grid_labels[t][0],i.style.marginLeft=-this.coords.big_x[t]+"%"},calcGridCollision:function(t,i,s){var o,e,h,r=this.coords.big_num;for(o=0;r>o&&(e=o+t/2,!(e>=r));o+=t)h=this.$cache.grid_labels[e][0],s[o]<=i[e]?h.style.visibility="visible":h.style.visibility="hidden"},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&("single"===this.options.type?this.coords.w_handle=this.$cache.s_single.outerWidth(!1):this.coords.w_handle=this.$cache.s_from.outerWidth(!1),this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(t){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.options=$.extend(this.options,t),this.validate(),this.updateResult(t),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),$.data(this.input,"ionRangeSlider",null),this.remove(),this.input=null,this.options=null)}},$.fn.ionRangeSlider=function(t){return this.each(function(){$.data(this,"ionRangeSlider")||$.data(this,"ionRangeSlider",new l(this,t,e++))})},function(){for(var t=0,s=["ms","moz","webkit","o"],o=0;o<s.length&&!i.requestAnimationFrame;++o)i.requestAnimationFrame=i[s[o]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[s[o]+"CancelAnimationFrame"]||i[s[o]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(s,o){var e=(new Date).getTime(),h=Math.max(0,16-(e-t)),r=i.setTimeout(function(){s(e+h)},h);return t=e+h,r}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}()}(jQuery,document,window,navigator);