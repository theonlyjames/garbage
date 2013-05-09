/* ==========================================================
 * bootstrap-alert.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e='[data-dismiss="alert"]',o=function(o){t(o).on("click",e,this.close)};o.prototype={constructor:o,close:function(e){function o(){i.trigger("closed").remove()}var i,s=t(this),n=s.attr("data-target");n||(n=s.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),i=t(n),i.trigger("close"),e&&e.preventDefault(),i.length||(i=s.hasClass("alert")?s:s.parent()),i.trigger("close").removeClass("in"),t.support.transition&&i.hasClass("fade")?i.on(t.support.transition.end,o):o()}},t.fn.alert=function(e){return this.each(function(){var i=t(this),s=i.data("alert");s||i.data("alert",s=new o(this)),"string"==typeof e&&s[e].call(i)})},t.fn.alert.Constructor=o,t(function(){t("body").on("click.alert.data-api",e,o.prototype.close)})}(window.jQuery),/* =============================================================
 * bootstrap-collapse.js v2.0.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,o){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,o),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,o=this.dimension(),i=t.camelCase(["scroll",o].join("-")),s=this.$parent&&this.$parent.find(".in");s&&s.length&&(e=s.data("collapse"),s.collapse("hide"),e||s.data("collapse",null)),this.$element[o](0),this.transition("addClass","show","shown"),this.$element[o](this.$element[0][i])},hide:function(){var t=this.dimension();this.reset(this.$element[t]()),this.transition("removeClass","hide","hidden"),this.$element[t](0)},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[t?"addClass":"removeClass"]("collapse"),this},transition:function(e,o,i){var s=this,n=function(){"show"==o&&s.reset(),s.$element.trigger(i)};this.$element.trigger(o)[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,n):n()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},t.fn.collapse=function(o){return this.each(function(){var i=t(this),s=i.data("collapse"),n="object"==typeof o&&o;s||i.data("collapse",s=new e(this,n)),"string"==typeof o&&s[o]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t(function(){t("body").on("click.collapse.data-api","[data-toggle=collapse]",function(e){var o,i=t(this),s=i.attr("data-target")||e.preventDefault()||(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]+$)/,""),n=t(s).data("collapse")?"toggle":i.data();t(s).collapse(n)})})}(window.jQuery),window.TodoItems=Backbone.Collection.extend({model:TodoItem,url:"/todos",initialize:function(){this.on("remove",this.hideModel,this)},hideModel:function(t){t.trigger("hide")},focusOnTodoItem:function(t){var e=this.filter(function(e){return e.id!=t});this.remove(e)}}),window.TodoItem=Backbone.Model.extend({toggleStatus:function(){"incomplete"==this.get("status")?this.set({status:"complete"}):this.set({status:"incomplete"}),this.save()}}),window.TodoApp=new(Backbone.Router.extend({routes:{"":"index","todos/:id":"show"},initialize:function(){this.todoItems=new TodoItems,this.todosView=new TodosView({collection:this.todoItems}),this.todosView.render()},index:function(){$("#app").html(this.todosView.el),this.todoItems.fetch()},start:function(){Backbone.history.start()},show:function(t){this.todoItems.focusOnTodoItem(t)}})),window.TodoView=Backbone.View.extend({template:_.template('<h3 class="<%= status %>"><input type=checkbox <%= status == "complete" ? "checked=checked" : "" %>/> <%= description %> <%= created_at %> <a href="/#todos/<%= id %>">☞</a></h3>'),events:{"change input":"toggleStatus"},initialize:function(){this.model.on("change",this.render,this),this.model.on("destroy hide",this.remove,this)},render:function(){return this.$el.html(this.template(this.model.toJSON())),this},remove:function(){this.$el.remove()},toggleStatus:function(){this.model.toggleStatus()}}),window.TodosView=Backbone.View.extend({initialize:function(){this.collection.on("add",this.addOne,this),this.collection.on("reset",this.addAll,this)},render:function(){return this.addAll(),this},addAll:function(){this.$el.empty(),this.collection.forEach(this.addOne,this)},addOne:function(t){var e=new TodoView({model:t});this.$el.append(e.render().el)}});