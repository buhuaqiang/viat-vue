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
            const editFormFields = ref({"userid1":"","UserName1":"","UserTrueName1":"","UserName1name":"","emp_ename2":"","emp_ename2name":"","emp_cname2":"","start_date":"","end_date":"","deputy_user_id":"","status":""});
            const editFormOptions = ref([[{"title":"User Id","required":true,"field":"userid1",hidden:true,"type":"number"},
                               {"title":"User Name",hidden:true,"field":"UserName1"},
                                {"title":"Login User","required":true,"field":"UserName1name"},
                               {"title":"UserTrueName1",hidden:true,"field":"UserTrueName1"}],
                              [{"title":"Deputy Name","field":"emp_ename2",hidden:true},
                               {"title":"Deputy User","required":true,"field":"emp_ename2name"},
                               {"title":"emp_cname2","field":"emp_cname2",hidden:true}],
                              [{"title":"Start Date","required":true,"field":"start_date","type":"datetime"}],
                              [{"title":"End Date","required":true,"field":"end_date","type":"datetime"}],
                              [{"title":"Deputy Id","field":"deputy_user_id","type":"number",hidden:true}],
                              [{"dataKey":"duputy_status","data":[],"required":true,"title":"status","field":"status","type":"radio"}]
            ]);
            const searchFormFields = ref({"start_date":"","end_date":""});
            const searchFormOptions = ref([[{"title":"Start Date","field":"start_date","type":"datetime"},{"title":"End Date","field":"end_date","type":"datetime"}]]);
            const columns = ref([{field:'deputy_dbid',title:'列名deputy_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'deputy_user_id',title:'Deputy Id',link:true,type:'int',width:90,align:'left'},
                       {field:'emp_ename2',title:'Deputy Name',type:'string',width:110,align:'left'},
                       {field:'userid1',title:'User Id',type:'int',width:80,align:'left'},
                       {field:'UserName1',title:'User Name',type:'string',width:110,require:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:130,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:130,align:'left',sort:true},
                       {field:'user_id',title:'列userid',type:'int',width:90,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'status',title:'status',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_cname2',title:'emp_cname2',type:'string',width:120,hidden:true,align:'left'},
                       {field:'UserTrueName1',title:'UserTrueName1',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'division',title:'列名division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'}]);
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
