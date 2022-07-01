<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/mpg/View_com_local_mpg.js此处编写
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
    import extend from "@/extension/basic/mpg/View_com_local_mpg.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'localmpg_dbid',
                footer: "Foots",
                cnName: '本地產品群組',
                name: 'mpg/View_com_local_mpg',
                url: "/View_com_local_mpg/",
                sortName: "entity"
            });
            const editFormFields = ref({"globalmpg_dbid":"","mpg_id":"","mpg_name":"","category":"","bu_id":"","ta":"","status":""});
            const editFormOptions = ref([[{"title":"mpg_id","required":true,"field":"mpg_id"},
                               {"dataKey":"GlobalMpgSelect","data":[],"title":"globalmpg_dbid","field":"globalmpg_dbid","type":"select"}],
                              [{"title":"mpg_name","field":"mpg_name"},
                               {"dataKey":"LocalMpgCategory","data":[],"title":"category","field":"category","type":"select"}],
                              [{"dataKey":"LocalBu","data":[],"title":"bu_id","field":"bu_id","type":"select"},
                               {"dataKey":"LocalTA","data":[],"title":"ta","field":"ta","type":"select"}],
                              [{"dataKey":"Status_YN","data":[],"title":"status","field":"status","type":"select"}]]);
            const searchFormFields = ref({"mpg_id":"","mpg_name":"","bu_id":"","category":"","ta":"","status":""});
            const searchFormOptions = ref([[{"title":"mpg_id","field":"mpg_id"},{"title":"mpg_name","field":"mpg_name","type":"like"}],[{"dataKey":"LocalTA","data":[],"title":"ta","field":"ta","type":"select"},{"dataKey":"Status_YN","data":[],"title":"status","field":"status","type":"select"}],[{"dataKey":"LocalBu","data":[],"title":"bu_id","field":"bu_id","type":"select"},{"dataKey":"LocalMpgCategory","data":[],"title":"category","field":"category","type":"select"}]]);
            const columns = ref([{field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'globalmpg_dbid',title:'globalmpg_dbid',type:'guid',bind:{ key:'GlobalMpgSelect',data:[]},width:110,hidden:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,align:'left',sort:true},
                       {field:'mpg_id',title:'mpg_id',type:'string',link:true,width:110,require:true,align:'left'},
                       {field:'mpg_name',title:'mpg_name',type:'string',width:110,align:'left'},
                       {field:'bu_id',title:'bu_id',type:'string',bind:{ key:'LocalBu',data:[]},width:110,align:'left'},
                       {field:'category',title:'category',type:'string',bind:{ key:'LocalMpgCategory',data:[]},width:110,align:'left'},
                       {field:'ta',title:'ta',type:'string',bind:{ key:'LocalTA',data:[]},width:110,align:'left'},
                       {field:'maUserName',title:'maUserName',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'supervisorUserName',title:'supervisorUserName',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'sort',title:'sort',type:'int',width:110,hidden:true,align:'left'},
                       {field:'globalMpgName',title:'Global Mpg Name',type:'string',width:110,align:'left'},
                       {field:'status',title:'status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'main_prod',title:'main_prod',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ma_id',title:'ma_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'supervisor_id',title:'supervisor_id',type:'string',width:110,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "#detailCnName",
                table: "#detailTable",
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
