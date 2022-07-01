<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/prod/View_prod_entity_period.js此处编写
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
    import extend from "@/extension/basic/prod/View_prod_entity_period.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'period_dbid',
                footer: "Foots",
                cnName: '產品幣別視圖',
                name: 'prod/View_prod_entity_period',
                url: "/View_prod_entity_period/",
                sortName: "created_date"
            });
            const editFormFields = ref({"entity":"","prod_dbidname":"","start_date":"","end_date":"","emp_ename":"","status":"","modified_date":"","prod_ename":"","prod_dbid":"","prod_id":""});
            const editFormOptions = ref([[{"title":"Product ID","required":true,"field":"prod_dbidname","type":"text"},
                               {"dataKey":"entity","data":[],"title":"Entity","field":"entity","type":"select"}],
                              [{"title":"Start Date","required":true,"field":"start_date","type":"date"},
                               {"title":"End Date","required":true,"field":"end_date","type":"date"}],
                              [{"dataKey":"duputy_status","data":[],"title":"Status","field":"status","type":"select"},
                               {"title":"Last Modified","field":"emp_ename","type":"text"}],
                              [{"title":"Modified Date","field":"modified_date","type":"datetime"}],
                              [{"title":"","field":"prod_ename","type":"text"}],
                              [{"title":"","required":true,"field":"prod_dbid","type":"text"}],
                              [{"title":"Product ID","required":true,"field":"prod_id","type":"text"}]]);
            const searchFormFields = ref({"entity":"","prod_dbid":"","status":"","prod_dbidname":""});
            const searchFormOptions = ref([[{"title":"Product ID","field":"prod_dbidname","type":"like"},{"dataKey":"entity","data":[],"title":"Entity","field":"entity","type":"select"},{"dataKey":"duputy_status","data":[],"title":"Status","field":"status","type":"select"}],[{"title":"","field":"prod_dbid","type":"text"}]]);
            const columns = ref([{field:'prod_id',title:'Product ID',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'entity',title:'Entity',type:'string',bind:{ key:'entity',data:[]},width:110,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'emp_ename',title:'Last Modified',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'period_dbid',title:'period_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'duputy_status',data:[]},width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_ename',title:'prod_ename',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_sname',title:'prod_sname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_cname',title:'emp_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_dbidname',title:'Product ID',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:80,hidden:true,require:true,align:'left'}]);
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
