<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/Sys_Dictionary.js此处编写
 -->
<template>
    <view-grid ref="grid"
               :columns="columns"
               :detail="detail"
               :editFormFields="editFormFields"
               :editFormOptions="editFormOptions"
               :searchFormFields="searchFormFields"
               :searchFormOptions="searchFormOptions"
               :table="table"
               :extend="extend">
    </view-grid>
</template>
<script>
    import extend from "@/extension/system/Sys_Dictionary.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Dic_ID',
                footer: "Foots",
                cnName: 'System Dictionary',
                name: 'Sys_Dictionary',
                url: "/Sys_Dictionary/",
                sortName: "Dic_ID"
            });
            const editFormFields = ref({"DicNo":"","DicName":"","ParentId":"","OrderNo":"","Enable":"","CreateDate":"","DbSql":"","Remark":""});
            const editFormOptions = ref([[{"title":"Dic No","required":true,"field":"DicNo"},
                               {"title":"Dic Name","required":true,"field":"DicName"},
                               {"title":"Parent DIC Id","required":true,"field":"ParentId","type":"number"}],
                              [{"title":"OrderNo","field":"OrderNo","type":"number"},
                               {"dataKey":"enable","data":[],"title":"Enable","required":true,"field":"Enable","type":"select"},
                               {"title":"CreateDate","field":"CreateDate","disabled":true,"type":"datetime"}],
                              [{"title":"DbSql","field":"DbSql","colSize":8,"type":"textarea"},
                               {"title":"Remark","field":"Remark","type":"textarea"}]]);
            const searchFormFields = ref({"DicNo":"","DicName":"","ParentId":"","Enable":"","CreateDate":"","ModifyDate":""});
            const searchFormOptions = ref([[{"title":"Dic No","field":"DicNo"},{"title":"Dic Name","field":"DicName","type":"textarea"},{"title":"Parent DIC Id","field":"ParentId","type":"number"}],[{"dataKey":"enable","data":[],"title":"Enable","field":"Enable","type":"select"},{"title":"CreateDate","field":"CreateDate","type":"datetime"},{"title":"ModifyDate","field":"ModifyDate","type":"datetime"}]]);
            const columns = ref([{field:'Dic_ID',title:'字典ID',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'DicNo',title:'Dic No',type:'string',width:90,require:true,align:'left',sort:true},
                       {field:'DicName',title:'Dic Name',type:'string',link:true,width:140,require:true,align:'left'},
                       {field:'ParentId',title:'Parent DIC Id',type:'int',width:90,require:true,align:'left'},
                       {field:'Config',title:'Config',type:'string',width:300,hidden:true,align:'left'},
                       {field:'DbSql',title:'DbSql',type:'string',width:200,align:'left'},
                       {field:'DBServer',title:'DBServer',type:'string',width:90,hidden:true,align:'left'},
                       {field:'OrderNo',title:'OrderNo',type:'int',width:90,align:'left'},
                       {field:'Remark',title:'Remark',type:'string',width:90,align:'left'},
                       {field:'Enable',title:'Enable',type:'byte',bind:{ key:'enable',data:[]},width:90,require:true,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Creator',title:'Creator',type:'string',width:130,hidden:true,readonly:true,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:150,readonly:true,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Modifier',title:'Modifier',type:'string',width:130,hidden:true,readonly:true,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:150,readonly:true,align:'left',sort:true}]);
            const detail = ref({
                cnName: "Dictionary List",
                table: "Sys_DictionaryList",
                columns: [{field:'DicList_ID',title:'DicList_ID',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'Dic_ID',title:'Dic ID',type:'int',width:90,readonly:true,align:'left',sort:true},
                       {field:'DicValue',title:'DIC Value',type:'string',width:90,edit:{type:'text'},align:'left'},
                       {field:'DicName',title:'DIC Text',type:'string',width:90,edit:{type:'text'},align:'left'},
                       {field:'OrderNo',title:'OrderNo',type:'int',width:90,edit:{type:'text'},align:'left'},
                       {field:'Remark',title:'Remark',type:'string',width:90,edit:{type:'text'},align:'left'},
                       {field:'Enable',title:'Enable',type:'byte',bind:{ key:'enable',data:[]},width:90,edit:{type:'switch'},align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Creator',title:'Creator',type:'string',width:130,readonly:true,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:90,readonly:true,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Modifier',title:'Modifier',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:90,align:'left',sort:true}],
                sortName: "DicList_ID",
                key: "DicList_ID"
            });
            return {
                table,
                extend,
                editFormFields,
                editFormOptions,
                searchFormFields,
                searchFormOptions,
                columns,
                detail,
            };
        },
    });
</script>
