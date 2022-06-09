<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/dist/View_com_dist.js此处编写
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
    import extend from "@/extension/basic/dist/View_com_dist.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'dist_dbid',
                footer: "Foots",
                cnName: '經銷商客戶對應',
                name: 'dist/View_com_dist',
                url: "/View_com_dist/",
                sortName: "dist_id"
            });
            const editFormFields = ref({"entity":"","sys_value":"","cust_id_expfizer":"","status":[]});
            const editFormOptions = ref([[{"title":"Dist Name","required":true,"field":"sys_value"},
                               {"title":"Entity","required":true,"field":"entity"}],
                              [{"title":"Expfizer CustID","required":true,"field":"cust_id_expfizer","colSize":12}],
                              [{"dataKey":"enable","data":[],"title":"Status","field":"status","type":"checkbox"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([[{"title":"Dist Name","field":"sys_value","type":"text"}]]);
            const columns = ref([{field:'dist_dbid',title:'dist_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'CreateClient',title:'CreateClient',type:'int',width:110,hidden:true,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'ModifyClient',title:'ModifyClient',type:'int',width:110,hidden:true,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'entity',title:'Entity',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'dist_id',title:'Dist ID',type:'string',width:110,require:true,align:'left'},
                       {field:'sys_value',title:'Dist Name',type:'string',width:220,require:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'enable',data:[]},width:110,hidden:true,align:'left'},
                       {field:'cust_id_expfizer',title:'Expfizer CustID',type:'string',width:220,require:true,align:'left'},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,require:true,align:'left'},
                       {field:'status1',title:'status1',type:'string',width:110,hidden:true,align:'left'}]);
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
