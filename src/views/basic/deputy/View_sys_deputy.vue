<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/deputy/View_sys_deputy.js此处编写
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
    import extend from "@/extension/basic/deputy/View_sys_deputy.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'deputy_dbid',
                footer: "Foots",
                cnName: '代理信息',
                name: 'deputy/View_sys_deputy',
                url: "/View_sys_deputy/",
                sortName: "created_date"
            });
            const editFormFields = ref({"user_name2":"","UserTrueName":"","emp_ename":"","emp_cname":"","start_date":"","end_date":"","deputy_user_id":"","user_id2":"","status":""});
            const editFormOptions = ref([[{"title":"Login User","required":true,"field":"user_name2"},
                               {"title":"","required":true,"field":"UserTrueName"}],
                              [{"title":"Deputy Name","field":"emp_ename"},
                               {"title":"","field":"emp_cname"}],
                              [{"title":"Start Date","required":true,"field":"start_date","type":"datetime"}],
                              [{"title":"End Date","required":true,"field":"end_date","type":"datetime"}],
                              [{"title":"Deputy Id","required":true,"field":"deputy_user_id",hidden:true,"type":"number"},
                               {"title":"User Id","required":true,"field":"user_id2",hidden:true,"type":"number"},
                               {"title":"status",hidden:true,"field":"status"}]]);
            const searchFormFields = ref({"start_date":"","end_date":""});
            const searchFormOptions = ref([[{"dataKey":"deputyDate","data":[],"title":"Deputy Date","field":"deputyDate","type":"select"},
                {"title":"","field":"start_date","type":"datetime"},
                {"title":"","field":"end_date","type":"datetime"}]]);
            const columns = ref([{field:'deputy_dbid',title:'deputy_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:130,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:130,require:true,align:'left',sort:true},
                       {field:'deputy_user_id',title:'Deputy Id',type:'int',width:90,require:true,align:'left'},
                       {field:'emp_ename',title:'Deputy Name',type:'string',width:90,align:'left'},
                       {field:'user_id2',title:'User Id',type:'int',width:90,require:true,align:'left'},
                       {field:'user_name2',title:'User Name',type:'string',width:110,require:true,align:'left'},
                       {field:'user_id',title:'列userid',type:'int',width:90,hidden:true,require:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'dept_name',title:'dept_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'emp_cname',title:'emp_cname',type:'string',width:120,hidden:true,align:'left'},
                       {field:'UserTrueName',title:'UserTrueName',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'status',title:'status',type:'string',width:110,hidden:true,require:true,align:'left'}]);
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
