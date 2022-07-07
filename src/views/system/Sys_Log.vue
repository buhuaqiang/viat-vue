<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/Sys_Log.js此处编写
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
    import extend from "@/extension/system/Sys_Log.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Id',
                footer: "Foots",
                cnName: 'System Logs',
                name: 'Sys_Log',
                url: "/Sys_Log/",
                sortName: "Id"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"BeginDate":"","Url":"","LogType":[],"Success":[],"UserIP":"","ServiceIP":"","Role_Id":""});
            const searchFormOptions = ref([[{"title":"Request URL","field":"Url","type":"text"},{"title":"User IP","field":"UserIP","type":"text"},{"title":"Server IP","field":"ServiceIP","type":"text"}],[{"title":"Begin Date","field":"BeginDate","type":"datetime"},{"dataKey":"restatus","data":[],"title":"Response","field":"Success","type":"selectList"},{"dataKey":"roles","data":[],"title":"Role ID","field":"Role_Id","type":"select"}],[{"dataKey":"log","data":[],"title":"Log Type","field":"LogType","colSize":12,"type":"checkbox"}]]);
            const columns = ref([{field:'Id',title:'Id',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'BeginDate',title:'Begin Date',type:'datetime',width:140,align:'left',sortable:true},
                       {field:'UserName',title:'UserName',type:'string',width:90,align:'left'},
                       {field:'Url',title:'Url',type:'string',width:110,align:'left'},
                       {field:'LogType',title:'Log Type',type:'string',bind:{ key:'log',data:[]},width:80,align:'left'},
                       {field:'Success',title:'Status',type:'int',bind:{ key:'restatus',data:[]},width:80,align:'left'},
                       {field:'ElapsedTime',title:'Times',type:'int',width:60,align:'left'},
                       {field:'RequestParameter',title:'Request Parameter',type:'string',width:70,align:'left'},
                       {field:'ResponseParameter',title:'Response Parameter',type:'string',width:70,align:'left'},
                       {field:'ExceptionInfo',title:'Exception Info',type:'string',width:70,align:'left'},
                       {field:'UserIP',title:'User IP',type:'string',width:90,align:'left'},
                       {field:'ServiceIP',title:'Service IP',type:'string',width:90,hidden:true,align:'left'},
                       {field:'BrowserType',title:'Browser Type',type:'string',width:90,align:'left'},
                       {field:'User_Id',title:'User ID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Role_Id',title:'Role ID',type:'int',bind:{ key:'roles',data:[]},width:90,hidden:true,align:'left'},
                       {field:'EndDate',title:'End Date',type:'datetime',width:150,hidden:true,align:'left',sortable:true}]);
            const detail = ref({
                cnName: "#detailCnName",
                columns: [],
                sortName: "",
                key: ""
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
