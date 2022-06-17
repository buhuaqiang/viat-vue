<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/distroub/View_com_dist.js此处编写
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
    import extend from "@/extension/basic/distroub/View_com_dist.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'dist_dbid',
                footer: "Foots",
                cnName: '經銷商客戶對應',
                name: 'distroub/View_com_dist',
                url: "/View_com_dist/",
                sortName: "dist_id"
            });
            const editFormFields = ref({"entity":"","dist_id":"","cust_id":"","status":""});
            const editFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"Distributor","required":true,"field":"dist_id","type":"select"},
                               {"dataKey":"entity","data":[],"title":"Entity","field":"entity","type":"select"}],
                              [{"title":"Viatris CustID","required":true,"field":"cust_id","type":"text"}],
                              [{"dataKey":"狀態測試","data":[],"title":"Status","required":true,"field":"status","type":"radio"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"Distributor","field":"dist_id","type":"select"}]]);
            const columns = ref([{field:'dist_dbid',title:'dist_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'Entity',type:'string',bind:{ key:'entity',data:[]},width:110,align:'left',sort:true},
                       {field:'division',title:'Dist ID',type:'string',width:110,align:'left'},
                       {field:'dist_id',title:'Distributor',type:'string',bind:{ key:'distributor_Drop',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'sys_value',title:'Dist Name',type:'string',width:220,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'狀態測試',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:220,hidden:true,align:'left'},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
                       {field:'status2',title:'status2',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:80,hidden:true,require:true,align:'left'},
                       {field:'cust_id',title:'Viatris CustID',type:'string',width:110,require:true,align:'left'}]);
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
