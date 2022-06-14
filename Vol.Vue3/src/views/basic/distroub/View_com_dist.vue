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
            const editFormFields = ref({"entity":"","dist_id":"","cust_dbid":"","status":""});
            const editFormOptions = ref([[{"title":"Dist ID","required":true,"field":"dist_id"},
                               {"title":"Entity","required":true,"field":"entity","type":"text"}],
                              [{"title":"Viatris CustID","required":true,"field":"cust_dbid","colSize":12,"type":"text"}],
                              [{"dataKey":"狀態測試","data":[],"title":"Status","required":true,"field":"status","type":"radio"}]]);
            const searchFormFields = ref({"status":"","cust_dbid":""});
            const searchFormOptions = ref([[{"title":"Distributor","field":"sys_value","type":"text"}],[{"dataKey":"狀態測試","data":[],"title":"Status","field":"status"}],[{"title":"Viatris CustID","field":"cust_dbid"}]]);
            const columns = ref([{field:'dist_dbid',title:'dist_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'CreateClient',title:'CreateClient',type:'int',width:110,hidden:true,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'ModifyClient',title:'ModifyClient',type:'int',width:110,hidden:true,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'entity',title:'Entity',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'division',title:'division',type:'string',width:110,align:'left'},
                       {field:'dist_id',title:'Dist ID',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'sys_value',title:'Distributor',type:'string',width:220,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'狀態測試',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_dbid',title:'Viatris CustID',type:'string',width:220,require:true,align:'left'},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
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
