(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f348ec20"],{5475:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[t._l(t.tableLabel,(function(e,a){return n("div",{key:a},["iconURL"!==a?n("el-table-column",{key:a,attrs:{label:e,prop:a}}):t._e(),"iconURL"===a?n("el-table-column",{key:a,attrs:{label:e,prop:a},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.row;return[n("img",{attrs:{src:e.iconURL}})]}}],null,!0)}):t._e()],1)})),t.isShow?n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.$index,r=e.row;return[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.handleEdit(a,r)}}},[t._v("编辑")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.handleDelete(a,r)}}},[t._v("删除")])]}}],null,!1,2224063575)}):t._e()],2)],1)},r=[],c={props:{tableLabel:{type:Object,default:function(){return{}}},tableData:{type:Array,default:function(){return{}}},isShow:{type:Boolean,default:!0}},data:function(){return{}},computed:{},methods:{handleEdit:function(t,e){this.$emit("edit",e)},handleDelete:function(t,e){this.$emit("delete",e)}}},i=c,l=n("2877"),u=Object(l["a"])(i,a,r,!1,null,"0fde963c",null);e["a"]=u.exports},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,c=Function.prototype,i=c.toString,l=/^\s*function ([^ (]*)/,u="name";a&&!(u in c)&&r(c,u,{configurable:!0,get:function(){try{return i.call(this).match(l)[1]}catch(t){return""}}})},bb62:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("self-table",{attrs:{tableData:t.tableData,tableLabel:t.tableLabel},on:{delete:t.handleDelete,edit:t.handleEdit}})],1)},r=[],c=(n("d81d"),n("b0c0"),n("96cf"),n("1da1")),i=n("5475"),l={components:{selfTable:i["a"]},data:function(){return{tableData:[],tableLabel:{name:"广告名",_id:"id",date:"创建时间"}}},mounted:function(){this.fetch()},methods:{fetch:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/crud/ads/list");case 2:n=e.sent,a=n.data.data.map((function(e){return e.date=t.$dayjs(e.date).format("YYYY/MM/DD"),e})),t.tableData=a;case 5:case"end":return e.stop()}}),e)})))()},handleEdit:function(t){var e=t._id;this.$router.push("/ads/edit/".concat(e))},handleDelete:function(t){var e=this,n=t.name,a=t._id;this.$confirm("是否删除".concat(n,"广告?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.delete("/crud/ads/".concat(a));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return t.stop()}}),t)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}},u=l,o=n("2877"),s=Object(o["a"])(u,a,r,!1,null,"5be93642",null);e["default"]=s.exports}}]);
//# sourceMappingURL=chunk-f348ec20.53f264ef.js.map