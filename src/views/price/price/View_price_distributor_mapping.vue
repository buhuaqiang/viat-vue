<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/View_price_distributor_mapping.js此处编写
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
    import extend from "@/extension/price/price/View_price_distributor_mapping.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'distmapping_dbid',
                footer: "Foots",
                cnName: '經銷商映射',
                name: 'price/View_price_distributor_mapping',
                url: "/View_price_distributor_mapping/",
                sortName: "prod_dbid"
            });
            const editFormFields = ref({"prods":[],"groups":[],"custs":[],"i_dist_id":"","start_date":"","e_dist_id":"","end_date":"","modified_date":"","status":"","remarks":"","prod_ename":[],"group_name":[],"cust_name":[],"prod_id":[],"group_id":[],"cust_id":[]});
            const editFormOptions = ref([[{"dataKey":"mul_select_for_pop","data":[],"title":"Product","required":true,"field":"prods","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Group","field":"groups","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Customer","field":"custs","type":"selectList"}],
                              [{"dataKey":"distributor_Drop","data":[],"title":"Original Distributor","required":true,"field":"i_dist_id","type":"select"},
                               {"title":"Start Date","required":true,"field":"start_date","type":"date"}],
                              [{"dataKey":"distributor_Drop","data":[],"title":"Assign Distributor","field":"e_dist_id","type":"select"},
                               {"title":"End Date","required":true,"field":"end_date","type":"date"}],
                              [{"dataKey":"Status_YN","data":[],"title":"Status","required":true,"field":"status","type":"select"},
                               {"title":"Modified Date","field":"modified_date","type":"date"}],
                              [{"title":"Remarks","field":"remarks"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Product Name","field":"prod_ename","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Group Name","field":"group_name","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Customer Name","field":"cust_name","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Product ID","field":"prod_id","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Group ID","field":"group_id","type":"selectList"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Customer ID","field":"cust_id","type":"selectList"}]]);
            const searchFormFields = ref({"prods":[],"prod_dbid":"","prod_id":"","prod_ename":"","pricegroup_dbid":"","group_id":"","group_name":"","cust_dbid":"","cust_id":"","cust_name":"","i_dist_id":"","start_date":"","end_date":"","status":""});
            const searchFormOptions = ref([[{"dataKey":"mul_select_for_pop","data":[],"title":"Product","field":"prods","type":"selectList"}],[{"dataKey":"mul_select_for_pop","data":[],"title":"Group ID","field":"group_id"},{"dataKey":"mul_select_for_pop","data":[],"title":"Group Name","field":"group_name"}],[{"dataKey":"mul_select_for_pop","data":[],"title":"Customer ID","field":"cust_id"},{"dataKey":"mul_select_for_pop","data":[],"title":"Customer Name","field":"cust_name"}],[{"dataKey":"distributor_Drop","data":[],"title":"Original Distributor","field":"i_dist_id","type":"select"}],[{"title":"Start Date","field":"start_date","type":"date"},{"title":"End Date","field":"end_date","type":"date"}],[{"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],[{"title":"","field":"prod_dbid"}],[{"title":"Customer ID","field":"cust_dbid"}],[{"title":"Group ID","field":"pricegroup_dbid"}],[{"dataKey":"mul_select_for_pop","data":[],"title":"Product ID","field":"prod_id"},{"dataKey":"mul_select_for_pop","data":[],"title":"Product Name","field":"prod_ename"}]]);
            const columns = ref([{field:'prods',title:'Product',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'custs',title:'Customer',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,align:'left'},
                       {field:'groups',title:'Group',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,align:'left'},
                       {field:'distmapping_dbid',title:'distmapping_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_id',title:'Product ID',type:'string',width:125,align:'left',sort:true},
                       {field:'prod_ename',title:'Product Name',type:'string',width:250,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'Group ID',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'group_id',title:'Group ID',type:'string',width:110,align:'left'},
                       {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
                       {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'state',title:'state',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'Customer ID',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_id',title:'Customer ID',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'Customer Name',type:'string',width:140,align:'left'},
                       {field:'i_dist_id',title:'Original Distributor',type:'string',bind:{ key:'distributor_Drop',data:[]},width:150,require:true,align:'left'},
                       {field:'statusCust',title:'statusCust',type:'string',width:110,hidden:true,align:'left'},
                       {field:'e_dist_id',title:'Assign Distributor',type:'string',bind:{ key:'distributor_Drop',data:[]},width:150,align:'left'},
                       {field:'sys_value',title:'sys_value',type:'string',width:220,hidden:true,align:'left'},
                       {field:'sys_value2',title:'sys_value2',type:'string',width:220,hidden:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:120,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:125,require:true,align:'left',sort:true},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,require:true,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:220,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:80,require:true,align:'left'}]);
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
